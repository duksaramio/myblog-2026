---
title: "黑客新闻首页精选 — 2026年9月9日"
pubDate: 2026-09-09
description: "苹果发布可折叠iPhone，Shopify收购Tailwind，Meta推出个人AI代理Muse，以及Claude Opus 5恶搞游戏太真实"
draft: false
tags: ["黑客新闻", "精选", "AI", "科技"]
lang: "zh"
---

## Claude，把“添加到购物车”按钮改成蓝色 — 828 点

一个恶搞游戏（[opusfived.dev](https://opusfived.dev/)）中，你尝试让Claude Opus 5改变一个按钮的颜色，而无需重写整个代码库。痛苦是精心设计的——你实际上并没有在与Opus实例交流，这反而让游戏更有趣。该游戏的创作者自称为“无聊的挪威人”，他将其作为对过度热心的AI编程助手实际痛苦的评论。

这个故事成为头条新闻，获得828个点，说明开发者社区的挫败感所在。每个人都有关于请求AI进行简单更改却得到重构混乱代码的亲身经历。游戏之所以有趣，是因为它反映了现实情况——“修复”（更好的提示，更多的护栏，受限的编辑）仍然感觉像是一个根本问题的权宜之计，即这些模型如何处理手术级代码更改。

**来源：** [opusfived.dev](https://opusfived.dev/)

---

## Shopify 收购 Tailwind — 685 点

Adam Wathan 宣布Tailwind Labs加入Shopify。该框架每周安装量超过1.1亿次，为ChatGPT、X、Cloudflare和Reddit等产品提供样式。Tailwind将继续保持MIT许可，现有团队将继续担任维护者。商业产品（Tailwind Plus、ui.sh）即将关闭新用户注册——现有客户仍可使用，但商业方面正在逐步退出。

Shopify的宣传点是，这为Tailwind提供了一个“真正的产品”来服务，而Shopify是最早大规模押注它的大型公司之一。Wathan还从Shopify的创业使命角度来阐述，这更像是收购后的宣传话术而非真正的动机。真正的故事是，Tailwind是一个成功的开源项目，带有适度的商业层，而Shopify——它已经高度依赖它——决定消除其无人维护的风险。这是一次收购兼并，作为基础设施维护，只要Shopify的优先事项不偏离更广泛的社区，这对用户来说应该没问题。

**来源：** [tailwindcss.com/blog/tailwind-is-joining-shopify](https://tailwindcss.com/blog/tailwind-is-joining-shopify)

---

## Meta 的个人AI代理Muse — 616 点

Meta发布了Muse，一个独立运行的个人AI代理应用（iOS和Android），运行在专用虚拟机上，有自己的浏览器。它可以预约会议、填写表格、处理客户服务，并跨邮件、日历、Instagram和其他连接的应用工作。你通过Muse应用中的聊天或WhatsApp与它交互。关键操作（购买、邮件）需要你的批准，并且有代理所做的所有事情的审计记录。

安全模型值得注意：凭据存储在一个代理无法直接读取的安全库中，购物使用一次性卡号，因此你的真实卡号从未暴露给商家或代理，对话也不会与Meta的广告系统共享。1Password集成正在开发中，购买保护通过Link提供。Muse声称“构建自己的工具”——如果需要执行的任务没有现成的工具，Muse会即时构建。实际效果如何尚待观察。Meta在消费产品的记录表明，这可能会被整合到WhatsApp/Instagram中，或者在18个月内悄然下线。

**来源：** [ai.meta.com/muse](https://ai.meta.com/muse/)

---

## iPhone Duo — 365 点

苹果发布了iPhone Duo，这是首款可折叠的iPhone。展开时，其屏幕比iPhone 18 Pro Max大50%，外屏覆盖iPhone 18 Pro屏幕面积的90%以上。它搭载A20 Pro芯片，采用液冷技术，配备双电池系统、48MP双融合摄像头、钛合金框架和铰链，并配备Siri AI。10月16日开始预售，10月23日上市。

可折叠iPhone的传言已久，苹果的进入标志着在Samsung、Google和各种中国OEM厂商已经迭代多代之后，苹果终于进入这一领域。苹果的宣传点是“重新构想的iOS体验”——分屏多任务处理、视频锁定、坐姿/站立/肖像/风景模式。HN上的854条评论表明，社区对“终于”和“谁要这个”意见分歧。真正的考验在于铰链的耐用性和折痕管理是否达到苹果一贯的工艺标准，或者这是一款仅用于确立类别的第一代硬件。

**来源：** [apple.com/iphone-duo](https://www.apple.com/iphone-duo/)

---

## 沙漠蚂蚁实验室：本地、快速的设备端模型 — 327 点

一家欧洲AI实验室推出了18个设备端模型（12个稳定版，6个测试版），涵盖音频、视觉和文本，通过单个SDK支持Swift、Kotlin和JavaScript。亮点包括：Voz在1.5秒内将10分钟的音频转录完毕（比Whisper快4.7倍），Clear在一秒钟内将笔记本电脑录音转换为录音室质量的音频，使用9MB的模型，Redact实时在27种语言中屏蔽个人信息，使用12MB的模型，捕获88.8%的个人数据（相比之下，GLiNER-PII为91.1%）。

定位明确，强调隐私优先——“设备端是主权默认”，数据从未离开客户的设备，未上传的数据无法被强迫。模型免费提供给每月活跃设备数不超过100,000的用户。模型基准测试确实令人印象深刻，专注于单一任务模型而非一个大而全的模型是明智的架构选择。是否“比你已经付费的API调用更好”仍有待观察，但定价模式和隐私故事使其值得关注。

**来源：** [desertant.com/blog/introducing-desert-ant-labs](https://desertant.com/blog/introducing-desert-ant-labs/)

---

## 我如何在Google Ads上宣传恶意软件 — 306 点

一位开发者构建了RACE，一个用Rust编写的原生macOS终端多路复用器，尝试运行一个500美元的Google Ads活动，结果因“恶意软件”和“受感染的网站”而被封禁。该应用程序已签名并经过验证，网站是Cloudflare托管的静态页面，没有后端代码，安全扫描未发现任何问题。多次申诉均被拒绝，没有解释具体问题，他在多次尝试后被封锁了一周。

这篇文章引起了共鸣，因为这是所有开发者的噩梦——不透明的自动化执行，没有申诉途径。Google的广告审查系统将一个合法的开发者工具误判为恶意软件，没有提供具体信息，申诉过程如同黑箱操作。通过HN的曝光（以及可能的注意触发的手动审查），最终账户被恢复，但没有解释最初的封禁原因。文章顶部的Radio Erywan笑话完美捕捉了荒谬之处：他们不送车，偷自行车，而且不在莫斯科。

**来源：** [xlii.space/eng/malicious-software-on-google-ads](https://xlii.space/eng/malicious-software-on-google-ads/)

---

## GPT-6 Astra，循环变压器和隐藏推理 — 239 点

Sebastian Raschka深入探讨了OpenAI的GPT-6 Astra模型的基准性能、其“循环变压器”架构以及隐藏推理链的争议。Astra在ARC-AGI-3上的得分为99.9%（相比之下，GPT-5.6 Sol为7.8%），在数学和编程基准测试中占据主导地位，并在3D渲染和动画任务上表现出色。然而，编程代理基准测试显示，Astra领先但差距不大——与头条数字相比，差距比预期要小。

循环变压器讨论是文章的核心：Astra不仅加深（增加层数），还使用了循环深度——相同的层多次执行，允许迭代改进而不增加相应的参数量。关于“隐藏的思维链”的担忧是，Astra可能在内部以用户无法访问的方式进行推理，这引发了透明度和安全性问题。Raschka的工作很好地将架构与近期研究论文联系起来，他的平衡观点——对模型印象深刻但对营销持怀疑态度——是正确的解读。

**来源：** [magazine.sebastianraschka.com/p/gpt-6-astra-looped-transformers-and](https://magazine.sebastianraschka.com/p/gpt-6-astra-looped-transformers-and)

---

## 通过线

今天的首页主要围绕两个主题：**基础设施整合**和**AI承诺与开发者现实之间的差距**。苹果、Shopify和Meta都在努力控制各自的堆栈——苹果通过进入可折叠设备，Shopify通过拥有自己的CSS框架，Meta通过推出一个独立的代理，该代理存在于你的消息生态系统内部。与此同时，Claude恶搞游戏（最高得分为828分）和Google Ads的恐怖故事都揭示了自动化系统与必须与之共存的人类之间的摩擦。Raschka的Astra分析和Desert Ant Labs代表了AI的两个极端：前沿模型变得越来越强大但难以解释，以及实际部署并运行在设备端的小型专用模型。市场显然同时讲述了两个故事——整合与碎片化——两者可能都正确。

---
