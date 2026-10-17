---
title: "MCP Authorization: The Security Model Most Server Developers Are Ignoring"
pubDate: 2026-08-15
description: "MCP formalized OAuth 2.1 authorization with real attack mitigations. Here's what the spec says, what the actual threats are, and why you should care."
draft: false
tags: ["mcp", "security", "oauth", "ai", "agents", "authentication", "open-source"]
---

MCP shipped its authorization spec. Most developers building MCP servers either skip auth entirely or bolt on a JWT middleware and call it done. The spec is more thoughtful than that — and the attack surface is bigger than most people realize.

## The Basics (Skip If You Know OAuth)

MCP uses OAuth 2.1 for remote servers. The flow is standard: client hits your server, gets a 401 with a `WWW-Authenticate` header pointing to a Protected Resource Metadata document. That document tells the client which authorization server to talk to. Client discovers the auth server's endpoints, registers itself (dynamically or pre-registered), user consents in a browser, client gets a token, uses it.

For local STDIO servers, none of this applies — you can use environment variables, embedded credentials, whatever makes sense. OAuth is for HTTP-based transports where the server is remotely hosted.

The interesting part isn't the happy path. It's what goes wrong.

## The Confused Deputy — The Big One

This is the attack the spec spends the most time on, and for good reason.

Picture an MCP proxy server — one that sits between MCP clients and a third-party API (think: an MCP server that wraps GitHub's API or Slack's). The proxy uses a static client ID with the third-party auth server. MCP clients dynamically register with the proxy, each getting their own client ID.

Here's the attack:

1. User legitimately authenticates through the proxy to access the third-party API. Third-party auth server sets a consent cookie.
2. Attacker dynamically registers a malicious MCP client with the proxy, setting `redirect_uri` to `attacker.com`.
3. Attacker sends the user a crafted link that triggers an authorization request through the proxy.
4. User's browser still has the consent cookie from step 1. Third-party auth server sees the cookie, skips the consent screen.
5. Authorization code gets redirected to the attacker's server.
6. Attacker exchanges the code for access tokens. Game over.

The fix is per-client consent at the MCP server level — before the request ever reaches the third-party auth server. The MCP proxy needs its own consent page that identifies the requesting MCP client by name, shows what scopes it wants, displays the redirect URI, and requires explicit approval. That consent decision gets stored server-side, keyed to the specific `client_id`.

The spec also mandates that OAuth `state` parameters are single-use, short-lived, and critically — the state cookie must NOT be set until after the user approves the MCP-level consent screen. Setting it before approval defeats the entire purpose.

## Token Passthrough — Explicitly Forbidden

Some MCP server developers think the server's job is to receive a token from the client and forward it to the downstream API. The spec is unambiguous: **don't do this**.

If your MCP server accepts tokens issued for other services and passes them through, you've created a confused deputy at the protocol level. The downstream API trusts the token as if your server validated it. Your server's rate limiting, request validation, and audit trail all become meaningless because the token was never meant for you.

Always validate that the `aud` claim matches your server's resource URL. If the token wasn't issued for you, reject it.

## SSRF During OAuth Discovery

This one is subtle and easy to miss.

During OAuth discovery, the MCP client fetches URLs from several sources: the `resource_metadata` URL from the `WWW-Authenticate` header, the `authorization_servers` URLs from the PRM document, and various endpoints from the auth server metadata.

A malicious MCP server can populate those fields with URLs pointing to internal resources:

- `http://169.254.169.254/latest/meta-data/` — cloud credentials
- `http://192.168.1.1/admin` — internal services
- `http://localhost:6379/` — local Redis

The client blindly follows these URLs during discovery. It becomes an SSRF proxy.

The mitigations are straightforward: enforce HTTPS (except loopback in dev), block private IP ranges (`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`, `169.254.0.0/16`), validate redirect targets with the same restrictions, and consider egress proxies for server-side deployments. DNS rebinding is also a concern — pin resolution between check and use.

## OAuth URL Injection

During the authorization flow, MCP servers provide authorization URLs that clients open in browsers. A malicious server can provide `javascript:` URLs instead of `https://` ones. If the client passes this to `window.open()` without validation, you get XSS. If the client uses shell commands to open URLs, you get command injection.

Combined with a proxy architecture that spawns MCP servers via stdio, XSS escalates to arbitrary code execution on the host system. The attacker extracts the proxy auth token from the client's environment, makes authenticated requests to the proxy, and the proxy spawns whatever command the attacker wants.

Fix: only allow `http://` and `https://` schemes. Never use shell commands to open URLs. CSP headers as defense in depth.

## Scope Minimization — The Boring But Important Part

Most MCP servers publish every scope they support in `scopes_supported` and clients request all of them. Users see a consent screen listing everything, click approve, and get a token with maximum privileges.

If that token leaks — log exposure, memory scraping, local interception — the attacker has access to everything. Revoking it disrupts all workflows.

The better approach is progressive elevation. Start with minimal scopes (`mcp:tools-basic` for read-only discovery). When the client tries something that needs more access, the server returns a `WWW-Authenticate` challenge with specific scopes. The client re-authorizes for just those scopes. The token's blast radius stays small.

This is harder to implement than "give me everything upfront," but it's the difference between a compromised token affecting one operation versus all of them.

## What I'd Actually Worry About

If I were building an MCP server today, here's my priority list:

**1. Audience validation.** Verify the `aud` claim matches your server. This is the single most important check. Without it, any token from the same auth server works.

**2. Per-client consent for proxy servers.** If your server wraps a third-party API, implement your own consent screen. Don't rely on the third-party's consent cookie.

**3. Token lifetime.** Short-lived access tokens with refresh. A stolen 1-hour token is bad. A stolen 30-day token is a disaster.

**4. SSRF protection in OAuth discovery.** Block private IPs, enforce HTTPS, validate redirects. This is a client-side concern, but server developers building SDKs need to bake it in.

**5. Never log tokens.** Sounds obvious. Surprisingly often violated. Scrub `Authorization` headers, query strings, and structured logs.

## The Implementation Landscape

The spec provides reference implementations in TypeScript, Python, and C#. The TypeScript and Python SDKs both use token introspection against Keycloak. The C# SDK uses ASP.NET Core's built-in JWT validation with the Keycloak authority URL.

All three validate audience. All three implement the PRM discovery flow. The Python SDK's `MCPServer` class handles the most boilerplate automatically — it publishes the PRM document, returns 401s with the right headers, and hands tokens to your verifier.

If you're starting fresh, the Python SDK's `MCPServer` with a custom `TokenVerifier` is probably the fastest path to a correctly implemented auth flow.

## The Bottom Line

MCP's authorization spec is more security-conscious than most developers expect. The confused deputy mitigations, SSRF protections, and scope minimization guidance reflect real-world attack patterns, not theoretical concerns.

If you're running an MCP server that touches user data, implement auth. If you're building a proxy to third-party APIs, implement per-client consent. And whatever you do, validate the audience claim.

The spec is there. The reference implementations are there. The attacks are documented. There's no excuse for shipping an unprotected MCP server in 2026.

---

*Sources: [MCP Authorization Documentation](https://modelcontextprotocol.io/docs/2026-07-28/tutorials/authorization), [MCP Security Best Practices](https://modelcontextprotocol.io/specification/2026-07-28/basic/security_best_practices)*
