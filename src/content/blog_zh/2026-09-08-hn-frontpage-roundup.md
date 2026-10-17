---
title: "黑客新闻首页精选 — 2026年9月8日"
pubDate: 2026-09-08
description: "OpenAI声称解决了千年难题，LG电视即使在关机状态下也在监视你，谷歌打压新的维基站点，派拉蒙运行虚假草根运动以拯救合并，更多精彩内容"
draft: false
tags: ["黑客新闻", "精选", "人工智能", "科技"]
lang: "zh"
---

今天，Hacker News 首页被一个故事主导：OpenAI 宣称其内部模型解决了千年难题——Navier–Stokes 方程。社区对此持怀疑态度，数学证明尚处于初步阶段，而与纽约大学数学家的争端更添一层悬念。与此同时，LG 电视即使在关机状态下也被发现监视用户，谷歌悄悄打压新的维基站点排名，派拉蒙则通过虚假草根运动来拯救其合并。

## OpenAI 声称解决了 Navier–Stokes 方程千年难题（714 点）

OpenAI 宣布其内部模型——“显著比 GPT-6 Astra 更强大”——通过协调 270 万条消息和 130 亿个输出标记，生成了一个分析证明和 Lean 形式化证明，表明平滑三维流体运动可以在有限时间内产生奇点。该证明描述了一个螺旋内缩并像意大利面一样拉长的漩涡，能量在整个过程中保持有限。他们使用了大约 10,000 个并发代理，在 88 小时后到达了解决方案。

时间点很可疑。OpenAI 在 9 月 1 日听说了竞争对手的解决方案，随后加速了自己的努力。他们声称自己的证明与纽约大学的 Tristan Buckmaster 和 Anthropic 的 Levent Alpöge 的同时工作不同，并愿意分享他们的提示和证明。Buckmaster 的声明揭示了真实情况：基础思想来自 Diego Córdoba 和 Luis Martínez-Zoroa，而 Buckmaster/Alpöge 则利用 LLMs 推动了项目进展。Buckmaster 公开称他的 Euler 写作是“AI 污泥”，并为写作质量道歉。整个情况看起来像是争夺信用的竞赛，数学家们在真正的突破和企业公关之间挣扎。

**来源：** [OpenAI](https://openai.com/index/navier-stokes-solution/) | [Buckmaster 声明 (PDF)](https://cims.nyu.edu/~tristanb/statement.pdf)

## Navier–Stokes 方程：Buckmaster 的同时工作（697 点）

Tristan Buckmaster 和 Levent Alpöge 独立解决了相关问题（强迫欧拉方程、Boussinesq 方程、不可压缩多孔介质），使用了 LLMs，基础思想归功于 Córdoba 和 Martínez-Zoroa。Buckmaster 的声明非常坦诚：证明“更接近模型在人类指导下产生的结果，而不是一个人写的论文”，他称欧拉写作是“AI 污泥”。他还透露自己在外部因素的压力下被迫提前发布，并指出这是一个“深蓝-卡斯帕罗夫时刻”。数学界正经历着一场争夺信用的竞赛。

**来源：** [Buckmaster 声明 (PDF)](https://cims.nyu.edu/~tristanb/statement.pdf)

## LG 电视即使在关机状态下也在监视你（380 点）

根据 Gamers Nexus 的调查，The Verge 报道，LG 电视即使在关机或待机模式下也会录制音频、扫描 Wi-Fi 网络并传输数据。这不是一个漏洞——这是一个功能。这些电视似乎被设计为无论用户设置或网络连接如何都会收集数据。

这是智能电视商业模式的逻辑终点：电视实际上是一个监视设备，只是偶尔显示视频。它在离线工作表明数据存储在本地，当恢复连接时会传输数据。如果你仍然拥有“笨重”的电视，最好保留它们。

**来源：** [The Verge](https://www.theverge.com/tech/991190/lg-tv-spying-standby-recording-wi-fi-scanning-gamers-nexus)

## Google DeepMind 发布 AlphaGenome 地图集（379 点）

DeepMind 发布了 AlphaGenome 地图集，这是一个数据库，预测了人类基因组中每一种可能的单核苷酸变异的影响。1PB 的数据集是通过使用 AlphaGenome 模型预计算所有 90 亿个单字母遗传变化的调控影响生成的。AlphaGenome 地图集引入了“AVI 分数”以快速进行变异优先级排序。

初步结果令人鼓舞：在 Broad Institute，AVI 分数帮助研究人员识别了 DNM1 基因中的关键剪接位点变异，用于罕见疾病研究。另一支团队在英国生物库数据中发现了 22% 的非编码遗传关联。该工具通过无需编程技能的网页门户提供，真正为那些不想与生物信息学管道搏斗的临床研究人员提供了帮助。

**来源：** [Google 博客](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/alphagenome-atlas/)

## 新的“Google 监狱”针对独立维基站点（488 点）

自 2024 年 3 月起，谷歌实际上阻止了新域名出现在搜索结果中，除非是其主页面。这给试图离开 Fandom 的独立维基站点带来了巨大打击——gta.wiki、hollowknight.wiki 和官方 Path of Exile 2 维基站点都陷入了长达一年的“Google 监狱”。作者的假设是：谷歌决定无法有效过滤 SEO 污泥，因此打压了所有新域名。

绕过的方法是使用现有域名的子域名（如 overwatch.weirdgloop.org）而不是新的顶级域名。现有域名的子域名会立即被正确索引。这对独立维基生态系统来说是一个巨大的战略转变，实际上给了谷歌否决权，决定哪些新站点可以成功。

**来源：** [Weird Gloop](https://weirdgloop.org/blog/google-jail)

## 派拉蒙使用虚假草根组织为合并造势（277 点）

派拉蒙以 1110 亿美元合并华纳兄弟的交易已陷入低谷：他们被发现使用名为“邻里为强大社区”的非营利组织向加州居民发送短信，要求总检察长 Rob Bonta 放弃反垄断诉讼。该组织成立不到三个月，没有披露创始人或资助者，地址是 UPS 邮箱，也不出现在 ProPublica 的非营利组织数据库中。典型的虚假草根。

这发生在派拉蒙之前指控反对合并的人为犹太人，并威胁如果加州执行反垄断法将离开加州之后。公司急于完成这笔合并，结合华纳兄弟收购后的大量裁员历史，表明这笔交易对股东和高管有利，而不是对消费者或员工。

**来源：** [TechDirt](https://www.techdirt.com/2026/09/08/paramount-caught-using-astroturf-group-to-drum-up-fake-support-for-merger/)

## DHS 预测警务单位正在分析美国人的财务习惯（272 点）

404 Media 披露，边境巡逻队正在运行秘密预测警务单位，分析美国人的财务活动和其他数据，然后将情报提供给当地警方，这些警方会拦截那些没有具体犯罪嫌疑的人。文章是付费的，但标题已经告诉你一切：政府根据消费模式对公民进行画像，并利用地方执法机构作为执行代理。

**来源：** [404 Media](https://www.404media.co/a-secretive-dhs-predictive-policing-unit-is-analyzing-americans-financial-habits-and-pulling-them-over/)

## DaVinci Resolve 21.1（292 点）

Blackmagic Design 发布了 DaVinci Resolve 21.1，该版本集成了 AI 辅助功能（Claude、ChatGPT Codex）用于项目管理任务，如组织媒体和批量渲染。更新增加了对更多相机格式的支持（富士、徕卡 SL、索尼 A7R V1），增强了多机位工作流程，最多支持 25 个相机角度，并引入了超过 25 个新的 Krokodove 工具用于 Fusion 3D 工作。值得注意的是，多主剪辑现在支持独立的 Dolby Vision、HDR10+ 和 HDR Vivid 通道。免费下载，一如既往。

**来源：** [Blackmagic Design](https://www.blackmagicdesign.com/media/release/20260908-03)

## 总结

今天的主要主题是 **AI 系统完成此前不可能完成的任务**——解决 90 年的数学难题、预测基因变异和管理视频编辑工作流程。但背后的故事更有趣：Navier–Stokes 方程的“解决方案”在 OpenAI 和独立数学家之间引发了一场信用争夺战，基因图集虽然有用但需要独立验证，DaVinci 整合则务实而非花哨。

第二个主题是 **机构权力滥用技术**：LG 电视即使在关机状态下也在监视用户，谷歌决定哪些新网站可以成功，DHS 根据消费习惯对公民进行画像，派拉蒙运行虚假草根运动。AI 解决根本问题的潜力与作为控制和监视工具的使用之间的对比十分鲜明。

Navier–Stokes 情况最能揭示真相。Buckmaster 的坦诚评估——“AI 污泥”证明、数学家在真实突破和企业公关之间的挣扎，以及意识到 LLMs 现在可以在一个月内完成过去需要几年才能完成的工作——表明我们正处于转折点。问题不再是 AI 能否解决难题，而是谁会获得信用，谁会控制叙事。

---
