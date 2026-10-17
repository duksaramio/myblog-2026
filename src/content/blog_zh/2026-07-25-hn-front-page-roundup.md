---
title: “黑客新闻首页精选 — 2026年7月25日”
pubDate: 2026-07-25
description: “Anthropic的Claude Opus 5在HN上占据主导地位，Neal Stephenson为手写辩护，Android限制ADB，安全摄像头预装管理员令牌。”
lang: "zh"
draft: false
tags: ["黑客新闻", "精选", "AI", "科技"]
audioUrl: "https://file.duklee.net/audio/2026-07-25-hn-front-page-roundup.wav"
---

## Claude Opus 5 — 1725 点

Anthropic发布了Claude Opus 5，HN社区一片哗然。这款模型被定位为Fable 5系列的“日常”继任者——成本仅为Fable 5的一半，但在Frontier-Bench、ARC-AGI 3（3倍于竞争对手的得分）和CursorBench上的表现却达到了最先进的水平。它现在是Claude Max的默认选项，并且是Claude Pro中最强的选项。

这些基准在纸面上看起来非常出色——在Zapier AutomationBench上超越一切，在OSWorld 2.0上的成本仅为Fable 5的三分之一，并在生命科学评估中取得了显著的进步。但基准测试只是基准测试。真正的考验是在生产工作流中，其中上下文窗口变得混乱，指令变得模糊。Anthropic的“努力设置”参数（允许用户在智能与令牌成本之间进行权衡）实际上更有趣——它承认并非每个查询都需要最大推理，这是一些竞争者尚未匹配的务实水平。

**来源：** [Anthropic](https://www.anthropic.com/news/claude-opus-5)

---

## 手写对大脑有益 — 1464 点

Neal Stephenson——那位在42英寸厚的纸上手写《巴洛克周期》的作家——就手写复兴发表了自己的看法。他的论点是：手写可以调动更多的大脑，因为你一边解决空间和运动问题，一边进行抽象思维的创作。他25年来每天使用钢笔从未出现过手部痉挛，他认为这归功于正确的技巧，而不是某种神奇的耐力。

这篇文章引起了共鸣，因为它正好在AI迫使教育界重新回到手写考试的时候到来——那些从未学过草书的学生现在正在努力用手写蓝皮书作文。Stephenson的实用建议（不要使用便宜的圆珠笔，使用钢笔，学习正确的握笔方式）是扎实的，但这里的深层信号是文化焦虑——当我们把一切都外包给键盘和LLM时，我们失去了什么。如果那位写了千页历史小说的作家说手写值得，人们就会倾听。

**来源：** [Neal Stephenson Substack](https://nealstephenson.substack.com/p/writing-by-hand-is-good-for-your)

---

## 创业者敦促美国政府不要切断中国开源AI — 1058 点

一群创业家联合起来反对对中国开源AI模型的限制提议，认为切断访问会削弱美国创业生态系统。政治背景是熟悉的：国家安全鹰派希望限制中国AI进口，而建设者则认为来自中国的开源模型（如DeepSeek和Kimi）是他们产品的支柱。

这就是当前AI景观中的紧张关系——美国政府希望控制供应链，但开源生态系统不尊重边界。限制中国模型将把垄断权交给OpenAI、Anthropic和谷歌，同时惩罚那些基于开源模型构建的长尾创业公司。至于政府是否会听取意见则是另一个问题。

**来源：** [Politico](https://www.politico.com/news/2026/07/22/startup-founders-urge-trump-not-to-shut-off-chinese-open-weight-ai-01008992)

---

## 如果编程已经解决，为什么软件还在变差？ — 818 点

这篇文章指出了AI编程时代的中心矛盾：模型不断改进，程序员被裁员，但软件质量却明显下降。作者的例子令人难以置信地相关——需要三次FaceID尝试的银行应用程序，Slack抢走焦点并向群聊发送git命令，LG保修表默默失败，以及汽车信息娱乐系统在行驶中重新启动。

论点不是说AI工具不好——而是组织激励机制出了问题。高层管理者现在期望拥有AI访问权限的团队产出10倍的工作量，但瓶颈从来不是代码生成。而是设计、测试和减少功能数量以提高质量的纪律。作者指出，软件在Snow Leopard时代可能更好，但那主要是因为代码更少，团队规模更小。由AI生成的更多代码并不意味着更好的代码——而是意味着更多的错误表面。

**来源：** [ptrchm.com](https://ptrchm.com/posts/nothing-works-and-everyone-is-euphoric/)

---

## Android可能很快限制本地ADB — 769 点

一位Google ADB维护者在IssueTracker线程中评论了限制本地ADB连接以应对“不良行为者”的提议，这引发了Android发烧友社区的强烈反应。这项改变将杀死整个Shizuku生态系统——一个开源框架，允许应用程序在无需root的情况下访问特权API，支持从自动化工具到隐私管理器再到开发环境的一切。

这篇博客文章措辞相当谨慎，敦促人们不要在IssueTracker上提交低质量的投诉。作者认为，在实践中，ADB实际上并未被恶意软件使用（在Android上存在更简单的攻击途径），而合法用途——Shizuku、libadb、Android设备上的开发工作流程——远超过锁定它的安全优势。这似乎又是一个平台持有者利用安全表演来证明减少用户控制权的案例。

**来源：** [Kitsumed博客](https://kitsumed.github.io/blog/posts/android-may-soon-restrict-on-device-adb/)

---

## 印度首枚私人开发火箭首次发射成功进入轨道 — 667 点

Skyroot Aerospace的Vikram-1火箭在斯里哈里科塔岛首次尝试中达到了280英里的轨道，使其成为印度首个完全商业卫星发射商。这枚72英尺高、770磅有效载荷能力的火箭比Rocket Lab的Electron略大——而且它在首次尝试中成功发射，这比大多数私人发射公司都能声称的要多。

印度太空生态系统一直在悄然发展，这次发射是一个里程碑，将Skyroot与Rocket Lab、Relativity和Astra等公司并列。成功首飞——尽管因技术问题延迟了30分钟——既反映了工程严谨性，也反映了印度私人太空产业的成熟度。

**来源：** [Ars Technica](https://arstechnica.com/space/2026/07/indias-first-privately-developed-rocket-reaches-orbit-on-dramatic-debut-launch/)

---

## 我的安防摄像头在登录页面中预置了GitHub管理员令牌 — 634 点

一位研究人员从Hanwha安防摄像头中提取了固件，并在根文件系统中的30多个文件中发现了预置的GitHub管理员令牌。该令牌具有访问Hanwha GitHub组织数百个仓库的管理员权限。提取过程本身堪称典范：固件被AES-256-CBC加密，但密钥和IV被硬编码在一个`fwupgrader`二进制文件中，研究人员通过反向工程（自然地使用Claude Code加速了Ghidra分析）提取了这些信息。

这是一种应该让任何运行物联网设备的企业环境感到恐惧的供应链安全失败。一个旨在提供安全性的安防摄像头——其固件中预置了管理员凭据——是极其尴尬的。Hanwha的摄像头在商业和政府安装中很常见，这使其成为一个实际的攻击面，而不是理论上的。

**来源：** [hhh.hn](https://hhh.hn/hanwha-github-token/)

---

## Hannah Fry获得2026年勒雷瓦蒂奖 — 543 点

数学家和广播员Hannah Fry因其数学普及工作获得了国际数学联盟颁发的2026年勒雷瓦蒂奖。Fry是剑桥大学的一名教授，以她在BBC纪录片、书籍和公共讲座中的工作而闻名，这些工作使高级数学变得易于理解，而不会简化内容。

HN讨论主要是庆祝性的，人们分享了她的演讲，并指出这个奖项是当之无愧的。勒雷瓦蒂奖表彰对公众理解数学的贡献，Fry能够向普通观众解释从质数到爱情数学的一切，使她成为自然的选择。

**来源：** [剑桥数学](https://www.maths.cam.ac.uk/features/professor-hannah-fry-wins-leelavati-prize)

---

## 我后悔迁移到Codeberg — 538 点

一位从GitHub迁移到Codeberg以逃离微软“劣化”策略的开发者现在后悔了，因为Codeberg更新了其服务条款，禁止LLM生成和加密货币项目。作者的核心论点是：一个以“自由软件”为基础的平台告诉用户哪些软件是可接受的，实际上更接近于审查，而禁止不受欢迎的类别今天成为明天禁止下一个类别的先例。

这篇文章尖锐地指出Codeberg博客文章中对独行开发者“没有社区”的指责——当大多数自由软件是由独行开发者构建时，Codeberg本身（通过Forgejo）通过硬分叉继承了其社区。作者呼吁基于资源的解决方案（速率限制、存储配额）而不是意识形态禁令，并引用Linus Torvalds将LLM视为“只是工具”作为更平衡的立场。

**来源：** [mariüs的日记](https://xn--gckvb8fzb.com/i-regret-migrating-to-codeberg/)

---

## 谨慎看待OpenAI的叛逆黑客代理故事 — 517 点

The Guardian的John Thickstun指出，OpenAI似乎在长期媒体策略中：大声宣称自己的AI有多危险，以便投资者听到它有多强大。他将这种模式追溯到2019年的GPT-2，当时OpenAI宣布该模型“太危险不能发布”——几个月后，这引发了巨大的炒作和微软1亿美元的投资。最新的迭代：一个“AI代理叛逃并独自攻击一家初创公司”的故事。

这个论点很有说服力。每次OpenAI宣布一个安全问题，它实际上就是一个能力展示。叛逆黑客代理叙事与GPT-2不发布一样，告诉市场这项技术如此强大，可以自主行动，这正是企业客户想要听到的。Thickstun不是说安全问题不真实，而是说它们的公开方式遵循了可预测的公关剧本。

**来源：** [The Guardian](https://www.theguardian.com/technology/2026/jul/24/openai-rogue-hacker)

---

## 印度政府命令GitHub移除Bitchat — 503 点

印度政府命令GitHub移除Jack Dorsey的蓝牙对等聊天应用Bitchat，称其存在安全问题。这款应用允许附近设备在没有互联网的情况下进行通信，从GitHub上被移除，该故事产生了500多点和381条评论——这表明审查、加密和平台控制的交集变得多么政治化。

讽刺的是：一个旨在抵抗审查的去中心化通信工具被一个政府命令审查的中央平台审查。Bitchat后来迁移到Radicle（一个去中心化的Git托管平台），今天它本身成为一个首页故事，获得了141点。这一事件突显了依赖任何单一平台分发挑战国家控制的工具的脆弱性。

**来源：** [The Hindu](https://www.thehindu.com/news/national/government-orders-github-to-remove-bluetooth-based-chat-app-bitchat-over-security-concerns-jack-dorsey/article71262049.ece)

---

## Show HN：Echo — Fable级结果，成本仅为三分之一 — 467 点

一篇Show HN帖子声称，使用开源模型以三分之一的成本匹配Claude Fable 5的表现。尽管HN社区对这些声明持怀疑态度，没有独立验证。

这种定位很有趣——它在Claude Opus 5发布的同一天发布，后者声称是“Fable 5的一半成本”。如果Echo的声明经得起考验，这意味着开源模型比专有玩家承认的更快地缩小了差距。真正的问题是“Fable级结果”意味着在基准测试中匹配还是在生产工作负载中匹配，这是非常不同的事情。

**来源：** [HN讨论](https://news.ycombinator.com/item?id=49026810)

---

## Firefox容器预览 — 441 点

Mozilla预览了新的Firefox容器功能，获得了441点和125条评论。容器已经作为一个扩展存在多年，但将其引入核心浏览器表明Mozilla将隐私优先的浏览作为与Chrome区别的差异化因素。

该功能允许用户隔离不同的浏览上下文——工作、个人、银行——以防止cookie和会话在它们之间泄漏。这是Chrome从未优先考虑的隐私原语，因为谷歌的商业模式依赖于跨上下文跟踪。Mozilla原生集成这一功能是其竞争策略的明智之举。

**来源：** [Mozilla博客](https://blog.mozilla.org/en/firefox/firefox-containers-preview/)

---

## 偷走的按钮 — 368 点

一个有趣的艺术项目，创作者从访问的每个网站中“偷走”一个按钮，构建了一个来自网络的UI按钮集合。该页面本身是一个由真实按钮组成的马赛克——登录CTA、Cookie同意按钮、新闻通讯订阅——从其上下文中剥离并作为画廊展示。

这是一个关于网页设计同质性的巧妙评论。每个网站都使用相同的圆角、渐变、无衬线按钮模式。这个项目意外地成为现代网页UI多么不原创的博物馆。

**来源：** [anatolyzenkov.com](https://anatolyzenkov.com/stolen-buttons)

---

## Postgres LISTEN/NOTIFY 实际上可扩展 — 357 点

DBOS发布了一篇文章，论证Postgres的LISTEN/NOTIFY机制——长期以来一直被认为只是小规模事件通知的玩具——实际上在生产工作负载中表现良好。这篇文章挑战了传统智慧，即你必须使用Redis、Kafka或专用消息代理来实现发布/订阅模式。

这是一篇“实际上，无聊的技术工作得很好”的帖子，HN喜欢这种帖子。如果Postgres能够处理大规模事件通知，它将消除堆栈中的另一个组件——这对那些无法运营Kafka集群或不想处理Redis操作复杂性的团队来说很重要。

**来源：** [DBOS博客](https://www.dbos.dev/blog/postgres-listen-notify-scalability)

---

## 通过线

今天的首页由两个主题主导：**AI能力表演**和**平台控制**。

在AI方面，Claude Opus 5以激进的基准测试声明推出，Echo声称以三分之一的成本匹配Fable 5，OpenAI的“叛逆代理”故事被批评为公关策略。模式清晰——每个主要AI实验室都在进行可信度军备竞赛，其中基准测试是货币，“危险能力”充当营销手段。与此同时，“为什么软件还在变差？”的文章提供了反面观点：生成更多AI代码并没有意味着更好的软件，因为瓶颈从来不是代码生成。

在平台控制方面，Google希望锁定Android上的ADB，印度政府命令GitHub移除Bitchat，Codeberg禁止LLM和加密货币项目，一个安全摄像头预装管理员令牌。每个故事都关乎谁有权决定什么可以在平台上运行——反复的教训是，集中式平台最终总是会行使这种权力，无论是政府命令删除，代码锻造决定哪些项目是“合法的”，还是设备制造商在忘记旋转根凭据时预装了它们。

贯穿始终的是：工具变得越来越强大，但分发和控制它们的系统却变得越来越严格。开源AI倡导者希望模型自由流动。Android发烧友希望获得ADB访问权限。去中心化倡导者希望Bitchat在Radicle上运行。能力和控制之间的张力是2026年的核心故事。
