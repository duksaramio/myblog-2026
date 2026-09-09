---
title: "Memgraph Fundamentals: What the Docs Don't Emphasize Enough"
pubDate: 2026-09-08
description: "The practical guide to Memgraph's internals — storage modes, memory math, indexing strategy, durability tradeoffs, and the things that will bite you in production."
draft: false
tags: ["graph-database", "memgraph", "cypher", "database-internals", "in-memory", "performance"]
---

Memgraph is an in-memory graph database that speaks Cypher and promises ACID transactions at speed. That's the marketing line. The reality is more nuanced — and more interesting. After spending time deep in the documentation, here's what actually matters if you're evaluating Memgraph or running it in anger.

## Storage modes: pick your tradeoff

Memgraph has three storage modes, and the choice you make here shapes everything downstream.

**IN_MEMORY_TRANSACTIONAL** is the default and the reason most people show up. Full ACID guarantees. WAL files and periodic snapshots for durability. Delta objects track every change so transactions can be isolated and rolled back. The cost: every mutation creates a Delta (56 bytes each), which means bulk imports burn memory fast.

**IN_MEMORY_ANALYTICAL** strips out the Delta machinery. No ACID guarantees. No WAL. No periodic snapshots. What you get is up to 6x faster import speed and dramatically lower memory consumption during ingestion. Multiple transactions can write to the same node without conflicts. The catch: if a transaction fails, changes aren't rolled back. Other transactions can see uncommitted changes. Durability is manual-only — you have to run `CREATE SNAPSHOT` yourself.

This mode exists for a specific use case: you have a dense graph with supernodes, you need to load it fast, and you'll switch back to transactional mode once the data is in. Don't run production queries in analytical mode unless you genuinely don't care about consistency.

**ON_DISK_TRANSACTIONAL** uses RocksDB as the backing store. Data lives on disk, with in-memory caches for hot objects. It supports ACID via snapshot isolation only. Performance is worse than in-memory (obviously), but you can hold datasets larger than RAM. It's still marked experimental. If you're considering this, you probably need a different database — or you should talk to Memgraph's team first.

Switching between in-memory modes is straightforward (`STORAGE MODE IN_MEMORY_ANALYTICAL;`). Switching out of on-disk requires an empty database. Plan accordingly.

## The memory math

Memgraph lives and dies by RAM. Here's the formula for estimating storage memory in transactional mode:

```
StorageRAM = Vertices × 204B + Edges × 154B
```

That's a rough estimate. The real breakdown: a Vertex is at least 136 bytes (80B object + 56B Delta), an Edge is at least 88 bytes (32B object + 56B Delta), plus SkipList container overhead (~24B per object for node + pointers), plus properties.

Properties are where it gets interesting. A boolean costs 2 bytes. An integer costs 3-10 bytes depending on magnitude. A string costs at least 4 bytes plus 1 byte per ASCII character. Temporal types run 12-14 bytes. You can inspect exact property sizes with `propertySize()` in queries.

The Marvel Comic Universe dataset (21,723 vertices, 682,943 edges) consumes about 117MB of storage memory. An empty Memgraph instance burns ~75MB just existing. Plan for roughly double your dataset size in total RAM to account for query execution overhead.

Three ways to claw back memory:
- Disable properties on edges (`--storage-properties-on-edges=false`) if your relationships are property-free. This eliminates Edge objects entirely.
- Enable lightweight edges (`--storage-light-edge=true`) to save ~24B per edge by pool-allocating instead of using a SkipList.
- Enable property compression (`--storage-property-store-compression-enabled=true`) using zlib. Trades CPU for memory. The compression level is tunable — `low`, `mid` (default), `high`.

There's also floating-point resolution: `--storage-floating-point-resolution-bits=32` stores doubles as 4-byte floats instead of 8-byte doubles. Saves 4 bytes per float value at the cost of precision. WAL and snapshots always serialize as full 64-bit, so the precision loss is permanent once written.

## Indexes: the composite trap

Indexes in Memgraph are built on concurrent skip lists — O(log n) for insert, delete, and search. They're not created automatically (unless you enable `storage-automatic-label-index-creation-enabled`).

The basic types are label indexes, label-property indexes, edge-type indexes, and point indexes. These are straightforward. The gotcha is composite indexes.

A composite index on `:Person(name, age, occupation)` follows the leftmost prefix rule. It can efficiently serve queries filtering on `name` alone, `name + age`, or all three. It cannot serve a query filtering on `age` alone or `occupation` alone. This is the same behavior as composite indexes in SQL databases, but it catches people off guard in graph contexts where query patterns are less predictable.

Two practical rules:
1. Put the highest-cardinality property first.
2. If you query on a single property frequently, create a separate single-property index even if a composite covers it — the composite may not perform as well.

Descending indexes (`WITH CONFIG {"order": "DESC"}`) exist for `ORDER BY ... DESC` queries and are particularly valuable with `LIMIT` — they turn a sort-then-truncate into a direct O(N) index read. They only work in `IN_MEMORY_TRANSACTIONAL` mode.

Run `ANALYZE GRAPH` after loading data and creating indexes. It calculates property value distributions so the query planner can pick the optimal index based on average group size and chi-squared statistics, not just node counts. Run it once, not repeatedly.

## Constraints: three kinds, all checked at commit

Memgraph has existence constraints, uniqueness constraints, and data type constraints.

Existence constraints ensure a property exists on all nodes with a given label. Uniqueness constraints ensure label-property combinations are unique — and they support composite uniqueness (multiple properties). Data type constraints enforce that a property holds a specific type (STRING, INTEGER, etc.).

All constraints are checked at commit time, not at write time. This is the optimistic approach — multi-query transactions proceed without constraint checks until the final commit. If a constraint is violated, the entire transaction rolls back. This is important to understand if you're building batch import pipelines: a single bad row in a batch of 10,000 will kill the whole batch.

Uniqueness constraints do not create indexes. This is a common misconception. If you need both uniqueness enforcement and fast lookups, you need to create the constraint and the index separately.

## Transactions: snapshot isolation by default

Memgraph defaults to snapshot isolation — your transaction sees a consistent snapshot of the database and commits only if no conflicting updates happened since that snapshot. This prevents dirty reads, non-repeatable reads, and phantoms.

You can drop to READ COMMITTED or even READ UNCOMMITTED (read-only recommended for the latter). Change isolation at session or transaction scope:

```cypher
SET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED;
```

Explicit transactions work with `BEGIN`, `COMMIT`, `ROLLBACK`. Useful for what-if analysis — modify some data, run an algorithm, then roll back:

```cypher
BEGIN;
MATCH (e:E)-[r:CONNECTED_TO]->(f:F) SET r.flow = 17;
MATCH (a:A), (f:F) CALL max_flow.get_flow(a, f, "flow") YIELD max_flow RETURN max_flow;
ROLLBACK;
```

Monitor active transactions with `SHOW TRANSACTIONS`. You'll see synthetic rows for in-progress snapshots (`transaction_id = "snapshot"`) and garbage collection (`transaction_id = "gc"`). These can't be terminated — they're background processes. A large `elapsed_ms` on a `gc` row with `exclusive_lock: true` means garbage collection is blocking your transactions.

## Durability: snapshots + WAL, not WAL alone

Memgraph uses two durability mechanisms: periodic snapshots and write-ahead logs. The critical rule: you cannot use WAL without snapshots. Memgraph will refuse to start if WAL is enabled with snapshot interval set to zero.

On startup, Memgraph recovers from the most recent snapshot, then replays any WAL files containing changes made after that snapshot. WAL files are automatically deleted after a new snapshot is created.

Since v3.12, WAL files have per-transaction CRC32 checksums. Corruption is detected during recovery and stops replay at the corrupted point — corrupted data never reaches the database. Snapshots are not yet checksummed.

Recovery failure handling changed significantly: by default, a corrupt database crashes the entire process. Setting `--storage-allow-recovery-failure=true` changes this — the broken database comes up empty and inert, other databases continue working, and you fix it with `RECOVER SNAPSHOT`. In HA clusters, broken replicas self-heal from the main automatically.

Parallel snapshot creation (`--storage-parallel-snapshot-creation=true`) can dramatically speed up snapshot creation for large datasets. The rule of thumb: total items ≈ 4 × threads × batch size. Once you've saturated disk I/O, more threads won't help.

## Triggers: event-driven Cypher

Triggers execute openCypher statements in response to CREATE, UPDATE, or DELETE events. They fire either BEFORE COMMIT (part of the transaction) or AFTER COMMIT (asynchronous).

The predefined variables are the key concept: `createdVertices`, `updatedObjects`, `deletedEdges`, etc. Each event type exposes different variables. UPDATE events are particularly granular — you get `setVertexProperties`, `removedVertexProperties`, `setVertexLabels`, and composite lists like `updatedObjects` that mix everything.

Triggers default to `SECURITY DEFINER` — they run with the creator's permissions. Switch to `SECURITY INVOKER` if you want permission checks against the triggering user.

Practical uses: auto-timestamping nodes, maintaining derived data, keeping graph algorithms (like PageRank) up to date incrementally via MAGE's `pagerank_online.update()`.

## Storage access: three levels of concurrency

Every query needs a storage accessor. Shared access allows parallel reads and writes. Read-only access allows parallel reads but blocks writes. Unique access is exclusive — used by index/constraint DDL, `DROP GRAPH`, and `RECOVER SNAPSHOT`.

The accessor type is deduced automatically at parse time. The one place you need to care: explicit transactions. By default they grab write shared access, which can block other transactions unnecessarily. Mark read-only explicit transactions as read-only for better concurrency.

## The bottom line

Memgraph is fast, Cypher-native, and ACID-compliant in its default mode. The in-memory architecture means your dataset size is bounded by RAM — the memory formula is predictable but you need to account for Delta overhead, SkipList containers, and query execution memory on top of raw storage.

The storage mode choice is the first decision that shapes everything else. Transactional for production. Analytical for bulk loading. On-disk only if you've exhausted other options.

Indexes need deliberate strategy — composite index ordering matters, `ANALYZE GRAPH` is not optional, and descending indexes are an underused optimization. Constraints are checked at commit, not at write. And durability requires both snapshots and WAL — you can't have one without the other.
