---
title: "黑客新闻首页精选 — 2026年9月1日"
pubDate: 2026-09-01
description: "Anthropic 发布 Fable 5.1，Google 紧缩开源 Android，小型变压器在 ARC 上击败了大模型，Rust Spotify 客户端病毒式传播"
draft: false
tags: ["黑客新闻", "精选", "AI", "科技"]
lang: "zh"
---

## Fastpotify — 用 Rust 编写的原生 Spotify 客户端（772 点）

[Fastpotify](https://fastpotify.rocks/) 是一个使用 Rust、egui 和 librespot 构建的 MIT 许可证下的 Spotify 客户端。它是一个原生二进制文件，不依赖浏览器引擎，启动时间不到一秒，占用 100–250 MB 的内存。它支持本地播放，最高可达 320 kbps，无缝播放，支持 Spotify Connect 控制其他设备、库浏览、播放列表编辑和主题设置。怀旧情怀：它包括 Winamp 2 皮肤迷你播放器和通过 projectM 实现的 MilkDrop 视觉化。

772 点的评分反映了对 Spotify 官方客户端的真正不满，该客户端是一个 Electron 应用程序，经常占用 500 多 MB 的内存，并且感觉很卡。Fastpotify 并不是要取代 Spotify 的后端——它是一个为同一服务构建的更好前端，由一个显然关心桌面性能的人构建。librespot 基金会意味着它会反向工程 Spotify 的协议，这使其处于与所有其他第三方 Spotify 客户端相同的灰色地带。Spotify 还没有对基于 librespot 的项目采取行动，但这是一项政策决定，而不是保证。

**来源：** [fastpotify.rocks](https://fastpotify.rocks/)

---

## AnkiDroid：Google Play 禁止使用外部支付平台的捐赠链接（734 点）

Google Play 强制要求 [AnkiDroid](https://github.com/ankidroid/Anki-Android/issues/21656)，这个开源的 Android 卡片记忆应用，从 Play Store 列表中移除其通过外部支付平台进行捐赠的链接。这个问题，作为社区帮助请求提交，记录了 Google 执行一项政策，禁止在应用列表中通过外部支付平台进行募捐。AnkiDroid 是一个免费的开源项目，依赖于社区捐赠来资助开发。

这是一系列 Google 紧缩对不通过 Google Play 付费系统进行募捐的开源项目控制的最新事件之一。这项政策技术上适用于所有应用，但实际效果对那些无法整合 Google Play 付费系统或哲学上反对将捐赠的 15–30% 收益给 Google 的项目影响最大。Hacker News 讨论自然地转向了 Google 对 Android 生态系统的控制权问题。真正的问题不在于 Google 是否有权执行其商店政策——它有权这样做——而在于一个平台垄断是否应该能够决定开源项目如何筹集资金。

**来源：** [github.com/ankidroid/Anki-Android#21656](https://github.com/ankidroid/Anki-Android/issues/21656)

---

## Claude Fable 5.1 和 Claude Mythos 5.1（523 点）

Anthropic 发布了 [Claude Fable 5.1 和 Claude Mythos 5.1](https://www.anthropic.com/claude-fable-and-mythos-5-1)，它们是基于同一底层模型但具有不同安全级别的模型。Fable 5.1 一般可用；Mythos 5.1 仅限经过审核的网络安全和生命科学专业人士通过可信访问计划使用。主要亮点包括：相比典型工作负载，25% 更便宜（对于代理任务可达 45%），通过减少缓存读取定价，新的企业前沿安全防护，以及在编码、推理和科学研究方面的基准改进。

基准测试在纸面上令人印象深刻——在 Terminal-Bench-Science 上得分为 52.6%（Fable 5 为 24.7%），在 Terminal-Bench 4.0 上得分为 55.8%，在人类最后一试上得分为 60.9%。合作伙伴的推荐信是典型的 500 强公司名单，称赞该模型能够完成他们的工作。真正有趣的是科学研究角度：Mythos 5.1 设计了高亲和力蛋白质结合体，命中率 50%（相比之下，典型命中率 10–15%），从 30 年前的 Magellan 数据中创建了新的高分辨率金星地形图，并为七个生物信息学模型优化了 GPU 内核，速度提升最高可达 2.5 倍。

反蒸馏机制值得注意——Anthropic 正在关闭手动编辑对话上下文以提取 Claude 的思维痕迹的技术。这是对开源社区系统性蒸馏前沿模型的直接回应。与美国政府合作开发的生命科学验证计划表明，Anthropic 认真对待双重用途生物学风险，将其访问限制在身份验证之后。这是否是真正的安全表演还是有意义的风险缓解取决于实际审核的严格程度。

**来源：** [anthropic.com](https://www.anthropic.com/claude-fable-and-mythos-5-1)

---

## 1.5 小时内训练了一个小型变压器，它击败了许多大模型（439 点）

一位开发者 [从头开始训练了一个小型变压器](https://mvakde.github.io/blog/44-on-arc-1/)，在单个 RTX 5090 上仅用 1.5 小时，该模型在 ARC-AGI 基准测试中表现出竞争力，与许多更大模型的性能相当或更好。该模型在 ARC-1 公共评估中得分为 44%，在 ARC-2 中得分为 7%，与 TRM/HRM（测试时训练/分层推理模型）方法相当。代码在 GitHub 上开源。

作者的论点是样本效率是 AI 领域最亟待解决的问题，而 ARC-AGI 是理想的测试平台，因为它有非常少的训练样本（1000 个谜题），需要元学习（每个谜题有不同的规则），对人类来说非常简单，但对当前 AI 来说却很难。该工作的前一个版本曾在 X 上引起轰动，吸引了研究人员如 Lucas Beyer 和 Jeremy Howard 的注意。关键洞察不在于小型模型可以击败大型模型——而在于正确的训练方法和合适的基准可以揭示大型模型性能中多少是粗暴的记忆化，多少是真正的泛化。ARC-AGI 仍然是最诚实的基准。

**来源：** [mvakde.github.io](https://mvakde.github.io/blog/44-on-arc-1/)

---

## Play Store 阻止 AuroraStore，伤害 GrapheneOS 用户（365 点）

Google Play Store 正在阻止 [AuroraStore](https://gitlab.com/AuroraOSS/AuroraStore/-/work_items/1566)，这是一个替代的 Android 应用商店，允许用户在不使用 Google 服务的情况下访问 Play Store 应用，通过持续的“服务器忙，请稍后再试”错误提示。该问题影响匿名账户，并且通过 VPN、清除缓存和重启设备都无法解决。AuroraStore 是 GrapheneOS 用户安装 Play Store 应用的主要方式，这实际上是对隐私导向 Android 用户的封锁。

这看起来更像是 Google 的服务器端更改，而不是一个 bug。GrapheneOS 用户——他们明确选择了去 Google 化他们的手机——依赖 AuroraStore 作为兼容层。如果 Google 有意封锁匿名访问其应用目录，这将是对平台战争的重大升级。该事件发生在 Google 更广泛的锁定 Android 侧载生态系统的大背景下。Hacker News 线上充满了人们提出的变通方案，但根本问题在于 Google 控制应用目录，可以随时切断替代访问。

**来源：** [gitlab.com/AuroraOSS/AuroraStore#1566](https://gitlab.com/AuroraOSS/AuroraStore/-/work_items/1566)

---

## 美国航空机械师 Azriel "Al" Blackman 已去世（340 点）

[Al Blackman](https://simpleflying.com/american-airlines-mechanic-passes-away-100-record-80-years/)，美国航空公司的机械师，工作了 80 年，并保持着吉尼斯世界纪录最长职业生涯的记录，于 100 岁时去世。他于 1942 年 16 岁时加入美国航空公司，并从未退休，一直工作到 90 多岁。

在一个职业生涯短暂、平均工作时间仅 18 个月的时代，Blackman 在一家公司工作 80 年的经历几乎难以理解。他从早期的螺旋桨驱动的 DC-3 到现代宽体喷气机，见证了商业航空的整个历程。这个故事在 Hacker News 上引起共鸣，不是因为航空怀旧，而是因为有人能够将工作视为八十年来有意义的事情的纯粹不可能性。美国航空公司在他生前为他命名了一个维护设施——这是对一个只拧螺丝而不坐在董事会的人的罕见荣誉。

**来源：** [simpleflying.com](https://simpleflying.com/american-airlines-mechanic-passes-away-100-record-80-years/)

---

## 便携式公厕档案（339 点）

[便携式公厕档案](https://restroomarchive.com/) 是一个持续更新的公厕数据库。仅此而已——它是一个当你需要时可以找到公厕的地方。

339 点的评分表明 Hacker News 的读者对公共厕所的可用性有着强烈的感受，这很合理——任何在陌生城市中突然需要时都知道其中的痛苦。该网站填补了一个真正的空白：Google 地图有部分商业设施的厕所数据，但没有一个由社区维护的公共设施数据库。该项目能否持续取决于是否足够多的人贡献数据。概念是好的；执行的挑战在于覆盖范围。

**来源：** [restroomarchive.com](https://restroomarchive.com/)

---

## 通过主线

今天的首页主要围绕两个主题：**平台控制**和**AI 能力跃升**。Google 出现了三次——挤压 AnkiDroid 的捐赠链接，阻止 AuroraStore 为 GrapheneOS 用户服务，以及一般提醒所有人拥有平台就等于拥有规则。Anthropic 的 Fable 5.1 发布代表了另一端：前沿 AI 模型变得更便宜、更强大，有趣的是，最令人印象深刻的结果（蛋白质设计、金星映射）来自受限的 Mythos 变体，而不是一般可用的版本。小型 ARC-AGI 变压器是两者的反面——证明了在诚实基准上巧妙的方法仍然比纯粹的规模更重要。而 Fastpotify 以 772 点的评分是社区的方式表示：如果官方客户端继续变差，我们自己会构建客户端。

**来源：** [通过主线](#通过主线)

---
