---
title: "剪裁它，定制它：如何使用Obsidian + Google Antigravity 杀掉通用教程"
pubDate: 2026-08-19
description: "任何技术教程最大的问题就是太通用。本文将介绍如何将通用课程转化为符合自己技术栈的教程。"
draft: false
tags: ["obsidian", "教程", "工作流", "AI", "qdrant", "向量搜索", "gemini", "开源"]
audioUrl: "https://file.duklee.net/audio/obsidian-clipper-antigravity-tutorials.wav"
lang: "zh"
---

你曾经跟随的每一个技术教程都有同样的问题：它们是为其他人撰写的。

Qdrant Essentials 课程是一个扎实的7天课程。涵盖了数据建模、混合搜索、多向量重排、量化、分布式部署等。但它假设你使用 Qdrant 云服务，使用其默认的嵌入模型，并且乐于按照他们指定的环境进行操作。如果你在本地运行一切，使用 Ollama 进行嵌入，并希望从第一天起就集成 Pydantic AI，你将会花费一半的时间进行翻译而不是学习。

这就是核心的挫败感。教程太通用了。太慢了。一概而论。它们可能使用了你不想接触的技术栈，或者跳过了你真正关心的部分，或者在你已经熟悉的设置上花费了三页篇幅。

这就是我解决这个问题的方法。

## 第一步：使用 Obsidian 剪裁教程

Obsidian Web Clipper 浏览器扩展程序可以让你抓取任何网页并直接保存到你的知识库中，格式干净的 Markdown 文件。无需复制粘贴。无需丢失格式。无需截图代码块。

![Obsidian Web Clipper 捕获 Qdrant Essentials 课程页面](/obsidian-clipper-antigravity-tutorials-obsidian-web-clipper.png)

我将整个教程剪裁下来——每天、每个模块、每个项目描述。它会以一个单一的笔记形式保存在我的知识库中，我可以对其进行搜索、链接和注释。这很重要，因为下一步需要将完整的内容以 LLM 可以消费的格式呈现出来。

![Qdrant Essentials 课程完全保存在 Obsidian 中作为 Markdown 笔记](/obsidian-clipper-antigravity-tutorials-qdrant-in-obsidian.png)

为什么选择 Obsidian 而不是书签？因为书签会失效。页面会改变、重构或消失。知识库中的 Markdown 文件是永远属于你的。你可以对其进行标记、反向链接到自己的笔记，最重要的是——将其提供给 AI 作为上下文。

## 第二步：明确告诉 Google Antigravity 你想要什么

这一步将通用教程转化为你自己的教程。

Google 的 Antigravity（Gemini）允许你粘贴完整的教程内容并给出详细的提示，关于你的环境、技能水平以及你实际想要构建的内容。这是我对 Qdrant 课程的提示：

![提示 Antigravity 将 Qdrant 课程定制为我的本地堆栈和经验](/obsidian-clipper-antigravity-tutorials-antigravity-prompt.png)

一个好的定制提示的关键成分：

**你的技术栈。** 不仅仅是说“我使用 Python”。具体说明你使用的 Python 版本。Ollama 与 `qwen3-embedding:8b` 一起使用，用于生成 4096 维的密集向量。本地 Qdrant 在 `localhost:6333`。Langfuse 用于可观测性。Pydantic AI 用于代理层。越具体，你得到的模板代码就越少。

**你的经验水平。** 我告诉它我不是初学者——跳过“什么是向量”的解释。直接进入我将要实际遇到的架构决策和实现细节。

**保留什么和删除什么。** 原始课程在第四天讲解 Qdrant 云部署。我不需要云服务。我需要本地优先，硬件调优后的量化。明确地说出这一点。

**你的目标项目。** 不要跟随课程的最终项目，除非它与你正在构建的内容相符。我想要一个生产级的本地搜索引擎，具有混合检索功能，而不仅仅是文档搜索演示。

## 第三步：让 Antigravity 为你生成定制课程

Antigravity 将完整的 Qdrant Essentials 课程重置并重新构建。相同的教学结构——从第 0 天到第 6 天——但每个代码示例都使用我的本地技术栈。每个解释都假设我的经验水平。每个项目都朝着我实际想要交付的目标发展。

![Antigravity 生成的定制教程，符合我的技术栈、学习速度和目标](/obsidian-clipper-antigravity-tutorials-antigravity-output.png)

结果是一个为我量身定制的课程，因为它就是为我量身定制的。

## 为什么这比“直接问 ChatGPT”更好

你可以将一个 URL 粘贴到任何聊天机器人中并说“定制这个”。但剪裁后再提供给 LLM 的工作流程更好，原因如下：

**完整的上下文。** Obsidian 剪裁提供了完整的教程，而不是截断的网页抓取或丢失了细微差别的摘要。每个代码片段、每个图表描述、每个脚注都包含在内。

**你的知识库是你的真实来源。** 我可以将定制的教程链接回我的原始笔记、我的项目仓库、我的环境配置。一切都保持连接。

**可重复性。** 六个月后，如果我想重温某个模块，剪裁的源代码和定制版本都保存在我的知识库中。没有死链接，没有“此页面已更新”的惊喜。

## 证明：我的 Qdrant 仓库

我不仅研究了定制的教程，还从它开始构建。我的仓库 [qdrant-essentials](https://github.com/duksaramio/qdrant-essentials) 是完全在本地堆栈上重建的课程：

- **向量数据库**：本地 Qdrant 在 `localhost:6333`
- **嵌入模型**：`qwen3-embedding:8b`（4096 维）通过 Ollama
- **LLM**：`muse-glimmer` 通过 Ollama
- **可观测性**：本地 Langfuse
- **代理层**：使用 Pydantic AI 的搜索增强代理

课程中的每一天——从第 0 天的设置到第 6 天的生产搜索引擎——都针对这个堆栈进行了实现和测试。没有云依赖。没有 API 密钥。一切都在我的硬件上运行。

原始课程位于 [qdrant.tech/course/essentials](https://qdrant.tech/course/essentials/)，确实很好。我不是在批评它。但“跟随这个教程”和“这个教程适用于我”之间的差距是大多数人停滞的地方。剪裁和定制的工作流程可以弥补这个差距。

## 最后一句话

停止忍受那些没有为你撰写的教程。将完整的源代码剪裁到 Obsidian 中，使其成为你的。用精确描述你的技术栈、技能水平和实际目标的提示将其提供给 Antigravity（或任何有能力的 LLM）。获得一个像量身定制一样适合你的教程——因为它就是为你量身定制的。

通用教程的时代结束了。你只需要做五分钟的设置工作，使其个性化。
