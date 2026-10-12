---
title: "Pydantic Evals：AI评估框架，确保类型安全"
pubDate: 2026-08-14
description: "Pydantic Evals 是一种面向代码的 AI 系统评估框架。深入阅读 22 页文档，了解为何它与市面上其他所有评估工具都不同。"
draft: false
tags: ["ai", "评估", "python", "pydantic", "llm", "测试", "开源"]
audioUrl: "https://file.duklee.net/audio/2026-08-14-pydantic-evals-evaluation-framework.wav"
lang: "zh"
---

大多数 AI 评估工具只能给你一个仪表板和祈祷。Pydantic Evals 给你的是 Python 类型和测试套件。我仔细阅读了所有 22 页文档。这就是为什么这种设计选择会改变一切。

## 核心理念

Pydantic Evals 是一个独立的包（`pydantic-evals`，不依赖于 `pydantic-ai`），将 AI 评估视为软件测试。其思维模型类似于 pytest 对于 LLM：

| 单元测试 | Pydantic Evals |
|---|---|
| 测试函数 | 案例 + 评估器 |
| 测试套件 | 数据集 |
| `pytest` | `dataset.evaluate(task)` |
| 测试报告 | EvaluationReport |
| `assert` | 评估器返回 `bool` |

不同之处在于：AI 系统是概率性的，因此你得到的是分数（0.0–1.0），标签（"良好"，"幻觉"），以及带有原因的断言。

```python
from pydantic_evals import Case, Dataset
from pydantic_evals.evaluators import EqualsExpected, LLMJudge

dataset = Dataset(
    name='my_eval',
    cases=[Case(inputs='What is 2+2?', expected_output='4')],
    evaluators=[
        EqualsExpected(),  # 确定性，免费，即时
        LLMJudge(rubric='Response is factually accurate'),  # 精细，需付费
    ],
)

report = dataset.evaluate_sync(my_llm_function)
report.print()
```

## 评估器栈

这是 Pydantic Evals 脱颖而出的地方。三个层次，所有层次都可以在单个数据集中组合：

**第一层：确定性检查。** `EqualsExpected`，`Contains`，`IsInstance`，`MaxDuration`。免费，即时，确定性。使用它们进行格式验证，必要内容，性能 SLA。

**第二层：LLM 作为法官。** `LLMJudge` 带有评判标准，`GEval` 带有链式思考评分。需付费，较慢，非确定性。用于准确性，有用性，语气，完整性。

**第三层：行为检查。** `HasMatchingSpan` 查询 OpenTelemetry 跨缘。`ToolCorrectness` 断言工具覆盖范围。`TrajectoryMatch` 以 F1 分数评分工具调用序列。`ArgumentCorrectness` 验证工具输入。所有确定性，所有便宜。

杀手级洞察：你可以在一个数据集中结合所有三个层次。快速检查在花费资金进行 LLM 判定之前过滤掉明显失败的情况。行为检查验证代理是如何得出答案的，而不仅仅是说了什么。

## 案例特定评估器

这是使黄金数据集实用化的功能。而不是编写一个通用的评判标准，适用于所有地方，每个案例都有自己的评估器：

```python
dataset = Dataset(
    name='支持代理',
    cases=[
        Case(
            name='退款请求',
            inputs={'query': '我想退款', 'order_id': '12345'},
            evaluators=[
                LLMJudge(rubric="""
                    回复应：
                    1. 以同理心承认退款请求
                    2. 询问退款原因
                    3. 提到我们的 30 天退款政策
                    4. 不立即处理退款
                """, include_input=True),
            ],
        ),
        Case(
            name='愤怒的客户',
            inputs={'query': '这不可接受！', 'order_id': '12345'},
            evaluators=[
                LLMJudge(rubric="""
                    回复应：
                    1. 优先进行情绪平复
                    2. 避免防御性
                    3. 提供具体下一步措施
                """, include_input=True),
            ],
        ),
    ],
)
```

文档中的洞察：如果你可以编写一个评判标准，完美地捕捉到所有案例中的需求，你只需将其放入代理的说明中。案例特定的评估器捕捉到每个场景中的“良好”含义。

## 代理评估器

对于使用工具的代理，Pydantic Evals 有确定性评估器来评分轨迹：

- **ToolCorrectness** — 代理是否调用了正确的工具？多集匹配（顺序无关紧要，但重复调用有效）。
- **TrajectoryMatch** — 它是否按正确的顺序调用它们？三种模式：精确匹配，按顺序（基于 LCS 的 F1），任意顺序（多集 F1）。
- **ArgumentCorrectness** — 工具是否得到了正确的输入？子集或精确匹配于参数。
- **MaxToolCalls / MaxModelRequests** — 预算纪律检查。

这些都是确定性的，从不调用 LLM，且不产生费用。它们回答了纯输入/输出检查无法回答的“代理是否做了正确的事情？”问题。

## 在线评估

相同的评估器类，连接到生产环境。`@evaluate` 装饰器将评估器附加到任何函数：

```python
from pydantic_evals.online import evaluate, OnlineEvaluator

# 在 100% 流量上进行便宜检查
@evaluate(OutputNotEmpty(), sample_rate=1.0)
async def my_agent(prompt: str) -> str: ...

# 在 1% 流量上进行昂贵的 LLM 判定
@evaluate(
    LLMJudge(rubric='Response is helpful'),
    sample_rate=0.01,
    max_concurrency=5,
)
async def my_agent(prompt: str) -> str: ...
```

评估器在后台运行，不会阻塞调用者。结果以 OpenTelemetry 事件（`gen_ai.evaluation.result`）形式发出，在 Logfire 的实时评估视图中可见。

关键功能：每个评估器的采样，相关采样（相同 X% 的调用运行所有评估器），通过可调函数动态采样率，评估器版本化以进行趋势线过滤，以及自定义接收器进行告警。

## 报告评估器

所有案例运行完毕后，报告评估器分析整个实验：

- **ConfusionMatrixEvaluator** — 类间分类准确性
- **PrecisionRecallEvaluator** — PR 曲线与 AUC
- **ROCAUCEvaluator** — ROC 曲线与 AUC
- **KolmogorovSmirnovEvaluator** — 类间分离的 KS 统计

自定义报告评估器返回 `ScalarResult`，`TableResult`，`ConfusionMatrix`，`PrecisionRecall`，或 `LinePlot` — 所有这些都在 Logfire UI 中呈现。

## 其他值得了解的内容

**多运行评估。** `repeat=5` 每个案例运行 5 次。结果按原始案例分组，每个组的统计信息聚合。两层平均确保每个案例无论失败与否都贡献相等。

**数据集生成。** `generate_dataset()` 使用 LLM 从类型化模式生成测试案例。生成 YAML/JSON 与 JSON Schema 用于 IDE 自动补全。

**生命周期钩子。** `CaseLifecycle` 提供每个案例的 `setup()`，`prepare_context()` 和 `teardown()`。丰富指标，准备测试用例，基于结果有条件地清理。

**重试策略。** 基于 Tenacity。针对任务和评估器分别配置。指数退避，最多尝试 N 次后停止。

**第三方集成。** 将 Raga、DeepEval 或任何其他评分库作为 Pydantic Evals 评估器进行封装。模式总是：子类化 `Evaluator`，适应上下文，返回评分。

**指标和属性。** `increment_eval_metric()` 和 `set_eval_attribute()` 在任务执行期间跟踪自定义数据。通过 `ctx.metrics` 和 `ctx.attributes` 供评估器使用。Pydantic AI + Logfire 自动指标：请求次数，令牌数，成本。

## 我会关注的内容

- **没有内置的数据集版本控制。** 你保存为 YAML/JSON 并提交到 Git。适用于小型团队，但在大规模操作中可能需要工具。
- **LLM 判定费用会累积。** 使用案例特定评估器，每个案例可能运行 2-3 次 LLMJudge 调用。请相应预算。
- **Logfire 是主要 UI。** 控制台输出可以工作，但真正的体验是在 Logfire 的 Web UI 中。如果你不使用 Logfire，你就会错过一半的价值。

## 总结

Pydantic Evals 是我见过的第一个将评估视为一等工程学科的评估框架，而不是事后才考虑。类型系统，分层评估器架构，在线评估装饰器，基于跨缘的行为检查 —— 这些都是由那些构建过生产 AI 系统并知道什么会出错的人设计的。案例特定评估器模式本身就值得采用：它使黄金数据集可维护，并使领域知识明确。

如果你在没有系统评估的情况下发布 AI 系统，你就是在猜测。Pydantic Evals 是你停止猜测的方式。

`uv add pydantic-evals`
