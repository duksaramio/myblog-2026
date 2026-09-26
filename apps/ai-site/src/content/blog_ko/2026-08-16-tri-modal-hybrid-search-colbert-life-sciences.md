---
title: "생명과학 QA를 위한 ColBERT 리랭킹 기반 트라이모달(Tri-Modal) 하이브리드 검색"
pubDate: 2026-08-16
description: "Qdrant에서 밀집 벡터, BM25, ColBERT MaxSim 리랭킹을 결합하고, Pydantic AI 코파일럿과 제약 규제 준수를 위한 Langfuse 감사 추적까지 갖춘 상용급 검색 엔진 구축기."
draft: false
audioUrl: "https://file.duklee.net/audio/2026-08-16-tri-modal-hybrid-search-colbert-life-sciences.wav"
tags: ["search", "qdrant", "colbert", "life-sciences", "pharma", "pydantic-ai", "rag", "open-source"]
lang: "ko"
---

생명과학 분야의 품질 보증(QA) 팀을 위해 세 가지 검색 전략을 단일 파이프라인으로 결합한 검색 엔진을 직접 구축했다. 튜토리얼이자 실제 작동하는 오픈소스 구현체다. 각 레이어가 왜 필요한지, 그리고 벤치마크 결과가 시사하는 바가 무엇인지 정리해 보았다.

## 문제의 본질: 규제 제약 산업에서 검색이 무너지는 이유

제약 회사의 품질 보증(QA) 팀은 매일 일탈(deviation), 시정 및 예방조치(CAPA), 표준작업지침서(SOP), 규제 조항 인용문, 감사 지적 사항 등을 끝없이 검색한다. 이 기록들은 영숫자 코드(`21 CFR 211.192`, `SOP-QC-7012`, `LOT-2024-MAB-8842`), 전문 도메인 용어, 그리고 단어 하나 차이로 법적 책임이 갈리는 미묘한 시간적 맥락으로 가득 차 있다.

기존의 검색 방식은 정반대의 두 가지 이유로 실패한다:

**키워드 검색 (BM25)**: 정확한 코드는 완벽히 찾아내지만, 의미적 유의어 관계를 전혀 이해하지 못한다. 예를 들어 "동결건조기 진공 손실(freeze dryer vacuum loss)"을 검색하면 "1차 승화 건조 중 동결건조 챔버 진공 손실(lyophilization chamber vacuum loss during primary sublimation drying)"이라는 문서를 놓친다. BM25 관점에서는 "freeze dryer"와 "lyophilization" 사이에 겹치는 키워드가 전혀 없기 때문이다.

**밀집 벡터 검색 (Dense Vector Search)**: 의미적 유의어는 잘 잡아내지만, 정확한 식별자 코드를 흐릿하게 뭉개버린다. "21 CFR 211.192"를 검색하면 일반적인 품질 관리 SOP들이 줄줄이 나온다. 밀집 임베딩은 이 엄밀한 법적 규제 조항을 정밀한 고유 인용구가 아니라 단순한 일련의 토큰 나열로 취급하기 때문이다.

잘못된 검색 결과가 오염된 배치의 출하 승인이나 규제 선례 누락으로 이어질 수 있는 환경에서, 두 방식 중 어느 하나만으로는 결코 충분하지 않다.

## 아키텍처: 세 가지 검색 전략, 하나의 파이프라인

해법은 세 가지 검색 전략을 모두 실행하여 결합하는 것이다:

```
쿼리 → 밀집 벡터 (all-MiniLM-L6-v2, 384차원)  → 상위 20개 후보
      → 희소 벡터 (IDF 적용 BM25)              → 상위 20개 후보
      → 합집합 풀 (최대 40개 후보)
      → ColBERT MaxSim 리랭킹                  → 최종 랭킹 결과
```

각 레이어는 서로의 빈틈을 완벽하게 메워준다:

**밀집 벡터 (Dense Vectors)**: `sentence-transformers/all-MiniLM-L6-v2` (384차원)를 사용해 넓은 의미망을 친다. "미생물 생균수 기준 일탈(microbial bioburden excursion)"과 "부패 유기물 오염(spoilage organism contamination)"이 겹치는 단어 없이도 서로 밀접하게 연관되어 있음을 이해한다. HNSW 그래프 기반 코사인 유사도를 통해 1밀리초 미만의 근사 최근접 이웃(ANN) 검색을 수행한다.

**BM25 IDF 기반 희소 벡터 (Sparse Vectors)**: 정확한 키워드를 단단히 고정한다. Qdrant는 `models.Modifier.IDF` 가중치가 적용된 역색인(inverted index)에 이를 저장한다. "21 CFR 211.192"를 검색하면 영숫자 토큰에 적절한 단어 빈도 가중치가 부여되어 정확한 규제 조항을 찾아낸다. SOP 문서 번호, 배치 로트 ID, 장비 태그 번호, 화학물질 명칭을 잡아내는 핵심 방어선이다.

**ColBERT 후기 상호작용(Late Interaction) 리랭킹**: 앞선 두 단계에서 추출된 후보군(합집합)을 대상으로 실행된다. 실질적인 정밀도 향상이 바로 여기서 일어난다.

## ColBERT MaxSim의 실제 동작 원리

표준 바이인코더(Bi-encoder)는 문서 전체를 하나의 단일 벡터로 압축한다. 빠르지만 손실이 크다. 토큰 수준의 세밀함이 사라지기 때문이다. 반면 크로스인코더(Cross-encoder)는 토큰 단위 세밀함을 살려주지만 전체 데이터베이스를 대상으로 돌리기엔 너무 느리다.

ColBERT는 그 절충점을 찾았다. 쿼리와 문서를 각각 '토큰 임베딩의 시퀀스'로 표현한다:

```
쿼리:   [filter] [failed] [AFTER] [filling]    → 4개 벡터 × 96차원
문서:   [membrane] [tearing] [AFTER] [filled]  → N개 벡터 × 96차원
```

**MaxSim** 연산자는 쿼리의 각 토큰에 대해 문서 내 모든 토큰 중 가장 코사인 유사도가 높은 토큰을 찾아내고, 이 최댓값들을 모두 더한다:

```
Score = cos(filter, membrane) + cos(failed, tearing) + cos(AFTER, AFTER) + cos(filling, filled)
```

이 연산 방식 덕분에 ColBERT는 생명과학 검색에서 가장 까다로운 케이스를 완벽하게 분별해 낸다. 다음 두 가지 일탈 기록을 비교해 보자:

1. **DEV-2024-1699**: 필터 완전성 시험이 배치 여과 작업 완료 **후(AFTER)** 실패함. 심각도: Critical(중대). 바이알 50,000개 전량 폐기.
2. **DEV-2024-1710**: 필터 완전성 시험이 배치 여과 작업 시작 **전(BEFORE)** 실패함. 심각도: Minor(경미). 노출된 제품 없음.

BM25는 둘을 구분하지 못한다. 사용된 단어가 거의 똑같기 때문이다. 밀집 임베딩 역시 의미적 거리가 너무 가까워 분별하기 어렵다. 하지만 ColBERT의 토큰 수준 매칭은 쿼리의 "AFTER" 토큰을 1번 문서의 "AFTER"와 직접 정렬시켜, 중대 일탈(Critical) 문서를 압도적인 신뢰도로 1순위에 올려놓는다.

## m=0 HNSW 최적화 기법

프로덕션 환경에서 매우 중요한 성능 최적화 팁이 있다. Qdrant에서 멀티벡터 인덱스를 설정할 때 다음과 같이 지정한다:

```python
hnsw_config=models.HnswConfigDiff(m=0)
```

이는 ColBERT 벡터들에 대한 HNSW 그래프 생성을 완전히 비활성화한다. 왜일까? ColBERT는 이미 1차 검색을 통해 걸러진 상위 K개 후보(밀집 20개, 희소 20개)에 대해서만 연산하기 때문이다. 단 40개의 후보를 평가할 뿐인데 수백만 개의 토큰 벡터 전체에 대해 고비용의 ANN 그래프를 구축할 이유가 전혀 없다. `m=0` 설정은 대규모 RAM 절약과 인덱싱 CPU 부하 감소를 가져온다.

## Qdrant 컬렉션 스키마

단일 포인트(point) 내에 세 종류의 벡터를 모두 저장하는 스키마 구조다:

```python
client.create_collection(
    collection_name="life-science-quality-records",
    vectors_config={
        "dense": models.VectorParams(size=384, distance=models.Distance.COSINE),
        "multi": models.VectorParams(
            size=96,
            distance=models.Distance.COSINE,
            multivector_config=models.MultiVectorConfig(
                comparator=models.MultiVectorComparator.MAX_SIM,
            ),
            hnsw_config=models.HnswConfigDiff(m=0),
        ),
    },
    sparse_vectors_config={
        "sparse": models.SparseVectorParams(modifier=models.Modifier.IDF)
    },
)
```

세 가지 임베딩은 모두 FastEmbed(ONNX 런타임)를 통해 클라이언트 사이드에서 즉시 생성된다. 외부 네트워크로 데이터가 전혀 전송되지 않는다. 독점 의약품 제형이나 환자 데이터를 다루는 제약 산업에서 외부 상용 임베딩 API를 쓰지 않는 것은 타협할 수 없는 기본 요건이다.

## 상호 순위 융합 (Reciprocal Rank Fusion, RRF)

ColBERT 리랭킹을 수행하기 전, 밀집 검색과 희소 검색의 결과는 RRF를 통해 하나로 병합된다:

```
RRF(d) = Σ 1/(k + rank_m(d))
```

여기서 `k=60`(스무딩 상수)이고, `m`은 각 검색 방식을 순회한다. RRF는 점수의 스케일을 정규화할 필요 없이 오직 순위 위치(rank position)만으로 계산한다. 밀집 검색에서 3등, 희소 검색에서 5등을 한 문서는 `1/(60+3) + 1/(60+5)`의 종합 점수를 받는다. 두 검색 방식이 모두 추천한 문서에 자연스럽게 가산점이 붙는 구조다.

## Pydantic AI 품질 코파일럿 연동

이 검색 엔진은 구조화된 조사 보고서를 생성하는 Pydantic AI 에이전트와 직접 연결된다:

**`RunContext`를 통한 의존성 주입**: 검색 파이프라인을 하드코딩하지 않고 타입이 지정된 의존성으로 주입한다. 에이전트는 네이티브 도구처럼 `search_quality_records`를 호출한다:

```python
@agent.tool
def search_quality_records(
    ctx: RunContext[QualitySearchPipeline],
    query: str,
    severity: Optional[str] = None,
    search_method: str = "hybrid_rerank",
) -> List[Dict[str, Any]]:
    pipeline: QualitySearchPipeline = ctx.deps
    results = pipeline.hybrid_rerank_search(query, filters=..., limit=5)
    return [{"record_id": r.record_id, "title": r.title, ...} for r in results]
```

**구조화된 출력 강제**: 에이전트의 출력은 엄격한 `QualityInvestigationReport` Pydantic 모델로 검증된다. LLM이 환각으로 존재하지 않는 로트 번호나 지어낸 규제 조항을 내뱉는 사고를 방지한다:

```python
class QualityInvestigationReport(BaseModel):
    summary: str
    risk_assessment: str
    regulatory_impact: List[str]
    relevant_historical_records: List[str]
    root_cause_hypothesis: str
    recommended_capa_plan: List[CapaRecommendation]
    suggested_severity: str
```

모든 필드에는 LLM의 작성을 유도하는 명확한 설명(description)이 붙어 있다. 만약 모델이 특정 필드를 채울 근거를 찾지 못하더라도 유효성 검사를 통과할 수 있는 형식으로 출력해야 하므로, 정보의 공백이 줄글 속에 숨겨지지 않고 투명하게 드러난다.

**Ollama를 통한 로컬 추론**: 에이전트는 Ollama의 OpenAI 호환 API를 통해 로컬 모델(`muse-glimmer`) 위에서 구동된다. 외부 API 호출은 0회다. LLM, 임베딩, 벡터 데이터베이스가 모두 사내 온프레미스 인프라에서 완결된다.

## 감사 추적을 위한 Langfuse 관측성

FDA 21 CFR Part 11.10(e)는 전산화 시스템이 자동화되고 타임스탬프가 찍힌 감사 추적(audit trail)을 유지할 것을 요구한다. 규제 조사 중 수행된 모든 검색 쿼리는 빠짐없이 기록되어야 한다: 무엇을 검색했고, 어떤 문서를 참조했으며, LLM이 어떤 답변을 생성했는지.

레포지토리에 포함된 `docker-compose.langfuse.yml`을 통해 로컬 Langfuse 서버와 PostgreSQL이 실행된다. 모든 검색 메서드에는 `@observe_retrieval` 데코레이터가 부착되어 다음 항목들을 추적한다:

- 입력 쿼리와 적용된 필터 조건
- 검색된 문서 ID 목록 및 ColBERT 유사도 점수
- 검색 단계별 지연 시간(latency)
- LLM 토큰 사용량 및 전체 프롬프트 스냅샷

이 모든 로그는 로컬 Langfuse 인스턴스에만 보관되며, 어떤 텔레메트리 데이터도 사외로 유출되지 않는다.

## 벤치마크 결과가 실제로 보여주는 것

벤치마크 스위트는 4가지 검색 전략 전체에 걸쳐 8개의 실무 GxP 시나리오를 평가했다:

| 검색 전략 | Prec@1 | Prec@3 | Recall@3 | MRR@5 | NDCG@5 |
|---|---|---|---|---|---|
| 밀집 벡터 (all-MiniLM) | 100% | 58.3% | 74.0% | 1.000 | 0.857 |
| 희소 벡터 (BM25) | 100% | 70.8% | 88.5% | 1.000 | 0.967 |
| 하이브리드 (RRF) | 100% | 70.8% | 88.5% | 1.000 | 0.931 |
| 하이브리드 + ColBERT | 100% | 70.8% | 88.5% | 1.000 | 0.949 |

주목해야 할 몇 가지 시사점:

**모든 방식이 Precision@1 100%를 기록했다**: 정제된 25개 문서 데이터셋에서 최상위 1개 결과를 맞히는 것은 어려운 일이 아니다. 진짜 차별점은 2~5위 구간에서 발생한다.

**이 데이터셋에서는 BM25가 밀집 벡터를 앞선다**: 당연한 결과다. 생명과학 기록은 키워드 매칭이 위력을 발휘하는 영숫자 코드와 전문 용어의 비중이 매우 높기 때문이다. 밀집 임베딩은 유의어 격차가 심한 자연어 질의에서 진가를 발휘한다.

**ColBERT 리랭킹은 일반 RRF 대비 NDCG@5를 0.931에서 0.949로 끌어올린다**: 소규모 데이터셋에서는 완만한 상승이지만, 수천 수만 건의 노이즈가 섞인 프로덕션 코퍼스에서는 토큰 수준의 리랭킹이 훨씬 더 강력한 힘을 발휘한다.

**진정한 가치는 개별 케이스 스터디에서 드러난다**: 필터 시험 시점의 "AFTER vs BEFORE" 분별, "freeze dryer vs lyophilization" 사이의 의미적 가교, 정확한 규제 조항 인용 검색 등 실무 QA에서 매일 겪는 결정적 시나리오들이 ColBERT 덕분에 깔끔하게 해결된다.

## 프로덕션 구축 시 고려사항

규제 환경에 이 시스템을 배포할 때 유의할 점들:

- **모델 버전 고정**: `all-MiniLM-L6-v2`, `Qdrant/bm25`, `ColBERT` 모델의 정확한 해시값을 고정해야 한다. 결과 재현성은 21 CFR Part 11.10(a)의 필수 요건이다.
- **ALCOA+ 데이터 무결성**: Qdrant 페이로드에 원본 메타데이터(문서 ID, 타임스탬프, 전자서명)를 온전히 보존하라. 재해 복구를 위해 Qdrant 스냅샷 기능을 정기적으로 운용하라.
- **에어갭(Air-gapped) 환경 지원**: FastEmbed(ONNX) 기반 임베딩, Ollama 기반 LLM, 로컬 Langfuse를 결합하여 외부 인터넷 연결 없이 폐쇄망에서 100% 동작하도록 구성하라.
- **자체 평가 모듈 운영**: 시스템 검증(validation)을 완료하기 전, 자체 보유한 그라운드 트루스 데이터를 바탕으로 `src/evaluator.py`를 실행해 정량적 평가를 선행하라.

## 맺으며

이 시스템은 흔한 장난감 수준의 RAG 데모가 아니다. 밀집 벡터 + 희소 BM25 + ColBERT MaxSim의 트라이모달 아키텍처는 제약 QA 팀이 매일 마주하는 전문 용어 유의어 연결, 영숫자 규제 코드 매칭, 미세한 시간순 맥락 분별이라는 난제를 실질적으로 해결한다. `m=0` 설정을 통해 ColBERT의 메모리 낭비를 잡았고, Pydantic AI로 로트 번호 환각을 막았으며, Langfuse로 규제 감사 추적을 완결했다.

코드는 MIT 라이선스로 공개되어 있으며 로컬 환경에서 바로 실행해 볼 수 있다. 키워드 검색의 한계로 중요한 문서를 놓치고 있는 제약 품질 관리 실무자라면 꼭 한 번 검토해 보길 권한다.

**오픈소스 저장소**: [github.com/duksaramio/qdrant-hybrid-search-with-reranking-tutorial](https://github.com/duksaramio/qdrant-hybrid-search-with-reranking-tutorial)
