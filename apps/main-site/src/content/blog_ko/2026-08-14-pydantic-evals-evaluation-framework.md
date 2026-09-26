---
title: "Pydantic Evals: 타입 안전성을 제대로 갖춘 AI 평가 프레임워크"
pubDate: 2026-08-14
description: "Pydantic Evals는 AI 시스템을 위한 코드 우선(code-first) 평가 프레임워크다. 22편의 공식 문서를 정독하며 기존 평가 도구들과 무엇이 근본적으로 다른지 살펴보았다."
draft: false
tags: ["ai", "evals", "python", "pydantic", "llm", "testing", "open-source"]
audioUrl: "https://file.duklee.net/audio/2026-08-14-pydantic-evals-evaluation-framework.wav"
lang: "ko"
---

시중의 대다수 AI 평가(eval) 도구들은 그럴듯한 대시보드와 막연한 기대만을 제공한다. 반면 Pydantic Evals는 파이썬 타입 시스템과 견고한 테스트 스위트를 제공한다. 22편의 공식 문서를 모두 읽어보았고, 이러한 설계 철학이 왜 모든 것을 바꿔놓는지 실감했다.

## 핵심 아이디어

Pydantic Evals는 독립된 패키지(`pydantic-evals`, `pydantic-ai`에 대한 필수 의존성 없음)로, AI 시스템 평가를 전통적인 소프트웨어 테스팅과 동일한 수준으로 다룬다. 그 멘탈 모델은 한마디로 'LLM을 위한 pytest'다:

| 단위 테스팅 (Unit Testing) | Pydantic Evals |
|---|---|
| 테스트 함수 (Test function) | Case + Evaluator |
| 테스트 스위트 (Test suite) | Dataset |
| `pytest` | `dataset.evaluate(task)` |
| 테스트 리포트 (Test report) | EvaluationReport |
| `assert` | `bool`을 반환하는 Evaluator |

차이점이 있다면 AI 시스템은 확률적(probabilistic)이라는 사실이다. 따라서 단순한 성공/실패 외에도 점수(0.0–1.0), 레이블("good", "hallucination"), 그리고 이유가 포함된 단언(assertion with reasons)을 얻을 수 있다.

```python
from pydantic_evals import Case, Dataset
from pydantic_evals.evaluators import EqualsExpected, LLMJudge

dataset = Dataset(
    name='my_eval',
    cases=[Case(inputs='2+2는 무엇인가요?', expected_output='4')],
    evaluators=[
        EqualsExpected(),  # 결정론적 검증, 무료, 즉시 실행
        LLMJudge(rubric='답변이 사실에 부합하고 정확한가'),  # 미묘한 뉘앙스 평가, 유료, LLM 호출
    ],
)

report = dataset.evaluate_sync(my_llm_function)
report.print()
```

## 계층화된 평가기 스택 (Evaluator Stack)

Pydantic Evals가 다른 도구들과 확실히 차별화되는 지점이다. 세 개의 레이어로 구성되며, 단일 데이터셋 안에서 유기적으로 조합된다:

**계층 1: 결정론적 검증(Deterministic checks)**: `EqualsExpected`, `Contains`, `IsInstance`, `MaxDuration`. 비용이 들지 않고, 즉시 실행되며 결과가 확실하다. 포맷 유효성 검사, 필수 단어 포함 여부, 성능 SLA 검증에 쓰인다.

**계층 2: LLM 판사(LLM-as-a-Judge)**: 루브릭(채점 기준표)을 사용하는 `LLMJudge`, 생각의 사슬(chain-of-thought) 기반 채점을 수행하는 `GEval`. 비용이 발생하고 상대적으로 느리며 비결정론적이다. 정확도, 유용성, 어조, 완전성을 평가할 때 사용한다.

**계층 3: 행동 검증(Behavioral checks)**: OpenTelemetry 스팬(spans)을 검사하는 `HasMatchingSpan`, 도구 사용 여부를 확인하는 `ToolCorrectness`, 도구 호출 순서를 F1 스코어로 채점하는 `TrajectoryMatch`, 도구 입력 인자를 검증하는 `ArgumentCorrectness`. 모두 결정론적이며 비용이 들지 않는다.

핵심 인사이트는 이 셋을 하나의 데이터셋에 묶는다는 점이다. 빠르고 저렴한 검증으로 명백한 실패 사례를 먼저 걸러낸 뒤에야 비싼 LLM 판사를 호출한다. 또한 행동 검증을 통해 에이전트가 '무엇을 말했는가'뿐만 아니라 '어떤 과정을 거쳐 결론에 도달했는가'까지 정밀하게 검증할 수 있다.

## 케이스별 맞춤 평가기 (Case-Specific Evaluators)

이 기능이야말로 골든 데이터셋(golden dataset)을 실용적으로 만드는 핵심이다. 모든 상황에 어설프게 들어맞는 모호한 범용 루브릭 하나를 억지로 쓰는 대신, 테스트 케이스마다 고유한 평가기를 붙일 수 있다:

```python
dataset = Dataset(
    name='support_agent',
    cases=[
        Case(
            name='refund_request',
            inputs={'query': '환불받고 싶습니다.', 'order_id': '12345'},
            evaluators=[
                LLMJudge(rubric="""
                    응답 요건:
                    1. 환불 요청에 대해 공감하며 안내할 것
                    2. 환불 사유를 물어볼 것
                    3. 30일 환불 정책을 언급할 것
                    4. 즉시 환불을 처리해버리지 말 것
                """, include_input=True),
            ],
        ),
        Case(
            name='angry_customer',
            inputs={'query': '이 서비스 정말 엉망이네요!', 'order_id': '12345'},
            evaluators=[
                LLMJudge(rubric="""
                    응답 요건:
                    1. 공감을 바탕으로 고객의 감정을 가라앉히는 데 집중할 것
                    2. 방어적인 태도를 취하지 말 것
                    3. 구체적인 후속 조치를 제시할 것
                """, include_input=True),
            ],
        ),
    ],
)
```

문서에 적힌 통찰이 깊이 와닿았다. 만약 모든 케이스를 완벽하게 포괄하는 단 하나의 평가 루브릭을 작성할 수 있다면, 그건 평가기가 아니라 그냥 에이전트의 시스템 프롬프트에 넣었어야 할 지침이다. 케이스별 평가기는 각 시나리오마다 '좋은 결과'가 무엇인지를 구체적으로 명시할 수 있게 해준다.

## 에이전트 전용 행동 평가기 (Agentic Evaluators)

도구를 사용하는 에이전트를 위해 Pydantic Evals는 실행 궤적(trajectory)을 평가하는 결정론적 도구들을 갖추고 있다:

- **ToolCorrectness**: 에이전트가 올바른 도구를 호출했는가? 멀티셋(multiset) 매칭을 사용하므로 순서는 무관하나 반복 호출 횟수는 정확히 반영된다.
- **TrajectoryMatch**: 올바른 순서로 호출했는가? 세 가지 모드(완전 일치, 최장 공통 부분 수열 기반 F1 순서 일치, 순서 무관 F1)를 지원한다.
- **ArgumentCorrectness**: 도구에 올바른 인자가 전달되었는가? 인자의 부분 집합 또는 완전 일치를 검증한다.
- **MaxToolCalls / MaxModelRequests**: 예산 초과 방지 체크.

이들은 모두 결정론적으로 작동하며, LLM을 추가로 호출하지 않아 비용이 전혀 들지 않는다. 단순한 최종 입출력 검증만으로는 결코 잡아낼 수 없는 "에이전트가 올바른 절차를 밟았는가?"에 대한 답을 명쾌하게 내려준다.

## 실시간 온라인 평가 (Online Evaluation)

오프라인에서 사용하던 동일한 평가기 클래스를 프로덕션 환경에 그대로 연결할 수 있다. `@evaluate` 데코레이터를 원하는 함수에 붙이기만 하면 된다:

```python
from pydantic_evals.online import evaluate, OnlineEvaluator

# 전체 트래픽(100%)에 적용하는 가벼운 비용 제로 검증
@evaluate(OutputNotEmpty(), sample_rate=1.0)
async def my_agent(prompt: str) -> str: ...

# 트래픽의 1%에만 적용하는 고비용 LLM 판사 평가
@evaluate(
    LLMJudge(rubric='응답이 도움이 되고 친절한가'),
    sample_rate=0.01,
    max_concurrency=5,
)
async def my_agent(prompt: str) -> str: ...
```

평가기는 호출자의 흐름을 차단(block)하지 않고 백그라운드에서 비동기로 실행된다. 결과는 OpenTelemetry 이벤트(`gen_ai.evaluation.result`)로 방출되며, Logfire의 실시간 평가(Live Evaluations) 화면에서 바로 모니터링할 수 있다.

평가기별 샘플링, 상관 샘플링(동일한 X% 트래픽에 대해 모든 평가기를 일괄 실행), 콜러블을 통한 동적 샘플링 비율 조정, 추세 분석을 위한 평가기 버전 관리, 알림 연동을 위한 커스텀 싱크(sink) 등 상용 운영에 필요한 기능들을 두루 갖추고 있다.

## 실험 리포트 평가기 (Report Evaluators)

모든 케이스의 실행이 끝난 후, 리포트 평가기는 전체 실험 결과를 종합 분석한다:

- **ConfusionMatrixEvaluator**: 분류 정확도를 클래스별로 분석
- **PrecisionRecallEvaluator**: AUC가 포함된 PR 곡선 도출
- **ROCAUCEvaluator**: AUC가 포함된 ROC 곡선 도출
- **KolmogorovSmirnovEvaluator**: 클래스 분리도를 측정하는 KS 통계량 계산

커스텀 리포트 평가기는 `ScalarResult`, `TableResult`, `ConfusionMatrix`, `PrecisionRecall`, `LinePlot` 등을 반환할 수 있으며, 이 모든 지표가 Logfire UI에 시각화된다.

## 그 외 알아둘 만한 기능들

**다중 실행 평가 (Multi-run evaluation)**: `repeat=5` 설정으로 각 케이스를 5회씩 반복 실행한다. 결과는 원래 케이스별로 그룹화되어 집계 통계를 제공한다. 2단계 평균화 방식을 취해 일부 실패가 발생해도 케이스 간 가중치가 왜곡되지 않는다.

**데이터셋 자동 생성**: `generate_dataset()`은 타입이 지정된 스키마로부터 LLM을 이용해 테스트 케이스를 합성한다. IDE 자동 완성을 지원하는 JSON 스키마가 포함된 YAML/JSON 형식으로 추출된다.

**생명주기 훅 (Lifecycle hooks)**: `CaseLifecycle`을 통해 케이스별 `setup()`, `prepare_context()`, `teardown()`을 정의할 수 있다. 커스텀 메트릭 추가, 픽스처 준비, 테스트 결과에 따른 조건부 리소스 정리가 가능하다.

**재시도 전략 (Retry strategies)**: Tenacity 기반으로 구현되어 작업과 평가기에 각각 독립된 재시도 정책을 설정할 수 있다(지수 백오프, 최대 N회 시도).

**서드파티 도구 통합**: Ragas, DeepEval 등 기존 스코어링 라이브러리를 손쉽게 Pydantic Evals 평가기로 래핑할 수 있다. `Evaluator`를 서브클래싱하고 컨텍스트를 변환해 점수를 반환하는 표준 패턴을 따른다.

**메트릭 및 속성 추적**: 작업 실행 중 `increment_eval_metric()`과 `set_eval_attribute()`로 커스텀 데이터를 기록할 수 있으며, 평가기 내부에서 `ctx.metrics`와 `ctx.attributes`로 접근 가능하다. Pydantic AI 및 Logfire 연동 시 요청 횟수, 토큰 수, 비용이 자동으로 측정된다.

## 유의할 점

- **자체 데이터셋 버전 관리 미비**: YAML이나 JSON으로 저장한 뒤 Git으로 버전 관리하는 방식이다. 소규모 팀에는 충분하지만, 대규모 환경에서는 전용 도구가 필요할 수 있다.
- **LLM 판사의 누적 비용**: 케이스별 맞춤 평가기를 적극 활용하면 한 케이스당 2~3회의 LLM 호출이 발생할 수 있어 대규모 테스트 시 비용 계획이 필요하다.
- **Logfire 중심의 UI**: 콘솔 출력도 깔끔하지만 진정한 가치는 Logfire 웹 UI에서 나온다. Logfire를 쓰지 않는다면 제품의 가치를 절반만 누리는 셈이다.

## 맺으며

Pydantic Evals는 AI 평가를 사후 땜질이 아닌 정통 소프트웨어 엔지니어링 규율로 격상시킨 최초의 프레임워크다. 탄탄한 타입 시스템, 계층화된 평가기 아키텍처, 실시간 온라인 평가 데코레이터, 분산 추적 스팬 기반의 행동 검증은 실제로 대규모 AI 서비스를 구축해 본 엔지니어들의 깊은 고민에서 나왔다. 특히 케이스별 맞춤 평가기 패턴 하나만으로도 도입할 가치가 충분하다. 골든 데이터셋의 유지보수가 가능해지고 도메인 지식이 코드 속에 명확히 드러나기 때문이다.

체계적인 평가 시스템 없이 AI 서비스를 배포하고 있다면, 그건 개발이 아니라 도박에 가깝다. Pydantic Evals는 막연한 추측을 멈추고 시스템을 통제할 수 있게 해주는 확실한 도구다.

```bash
uv add pydantic-evals
```
