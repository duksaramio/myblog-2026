---
title: "显微镜下的 Saccade (YC F26)：对“全球最早阿尔茨海默病检测”、眼动荟萃分析与美国联邦医疗器械法的取证审计"
pubDate: 2026-10-14
description: "当 Y Combinator (YC F26) 初创公司 Saccade 宣布利用 15 分钟 VR 眼动追踪附件打造出“全球最早的阿尔茨海默病生物标志物检测”时，立即在生物科技与监管界引发轩然大波。本文全面审计其引用的核心临床文献 (Opwonya et al., 2022; Qi et al., 2024)、加州大学圣塔芭芭拉分校 (UCSB) 本科毕业设计档案、30 岁人群筛查的贝叶斯假阳性数学推导、血浆 p-tau217 金标准以及美国《联邦食品、药品和化妆品法》(FD&C Act)。"
draft: false
tags: ["health", "alzheimers", "neurology", "fda", "biomarkers", "medtech", "yc", "deep-research"]
image: "/saccade-ucsb-capstone-poster-2026.jpg"
lang: "zh"
---

![加州大学圣塔芭芭拉分校 (UCSB) 机械工程系本科毕业设计展板 (scME6) — Saccade，2026年6月](/saccade-ucsb-capstone-poster-2026.jpg)

2026年10月13日，由刚刚从加州大学圣塔芭芭拉分校（UCSB）机械工程系毕业的 **Shreyas Bhardwaj** 创立的 Y Combinator 2026 秋季批次（`YC F26`）初创公司 **Saccade** 正式亮相，并抛出了一个极具冲击力的临床承诺：

> *“你可能患上阿尔茨海默病 15 年却浑然不知。现在我们终于能够延缓它的进展，但前提是我们必须尽早发现它。因此，我们打造了针对它的全球最早检测手段。Saccade (YC F26)。”*
> —— **Shreyas Bhardwaj (`@shreyasbhardwj`)**，2026年10月13日产品发布声明

在其 [Y Combinator 发布页 (Launch YC)](https://www.ycombinator.com/launches/Vff-saccade-world-s-earliest-test-for-alzheimer-s-biomarkers) 和官方网站（[saccade.health](https://saccade.health)）上，该公司的宣称更进一步：宣布其已在 **“旧金山多家诊所正式上线（live in San Francisco clinics），为 30 岁及以上人群检测早期风险指标”**。通过一项 15 分钟的虚拟现实（VR）眼动追踪测试，系统会将受试者 **“划分为三个风险等级之一”**，从而指导患者尽早开始 **“涵盖预防性长寿生活方式干预、进一步神经专科评估以及最新 FDA 批准药物的综合干预”**。

然而在发布后不到 24 小时内，这场造势便迎头撞上了消费级软件初创公司极少面对的两座大山：**临床生物统计学（Clinical Biostatistics）**与**美国联邦医疗器械法（Federal Medical Device Law）**。

截至 2026年10月14日下午，两条在社交媒体上迅速发酵的深度批评引爆了整个生物医药界。首先，**Trevor Klee (`@trevor_klee`)** 从科学方法与伦理底线切入，对该产品进行了逐层解剖：

> *“这件事的每一个层面都让我感到愤怒：*
> *1. 他们所依赖的底层论文既不是过硬的科学证据，也根本无法支撑他们的产品。那是一篇荟萃分析（meta-analysis），纳入的各项原始研究在结果和质量上参差不齐；更重要的是，那些研究针对的是已经发病的现症阿尔茨海默病（AD）和轻度认知障碍（MCI）患者（而非症状出现前 15 年的前驱期/临床前期人群），而且使用的是临床级专业眼动仪，而非 VR 头显。*
> *2. 这是一个未经批准的医疗器械，在没有任何 FDA 授权且特定设备临床测试为零（`N = 0`）的情况下，直接作为医疗器械向公众兜售。*
> *3. 其网站首页大字宣称它是‘全球最早的阿尔茨海默病生物标志物检测（World's Earliest Test for Alzheimer's Biomarkers）’，却在页脚小字里写着‘仅供研究使用，无法诊断阿尔茨海默病’。他们甚至仅仅因为在 Nature 和 NEJM 上找到了提到眼动追踪和阿尔茨海默病的文章，就把这两大顶刊的 Logo 直接贴在了自己网站上。*
> *4. 尽管这种做法如此公然违背伦理，但我敢肯定创始人不会受到任何实质性惩罚——就像之前的 Clair Health 或 Nucleus Genomics 创始人一样，因为在‘后 Theranos 时代’的监管结构下，顶多收到一封‘来自 FDA 的严厉警告信’就到此为止了。*
> *5. 这种‘快速行动、打破常规（move fast and break things）’的做法正在对整个生物科技行业造成实质性伤害：因为推销假检测和假药远比研发真检测和真药容易得多，如果不加遏制，劣币驱逐良币的格雷欣法则（Gresham's law）就会在生物医药界上演。”*
> —— **Trevor Klee (`@trevor_klee`)**，2026年10月14日

数小时后，医疗 AI 创始人兼投资人 **Will Manidis (`@WillManidis`)** 将批评从科学方法论直接上升到了联邦成文法违法（statutory illegality）的层面：

> *“如果‘TechBio（科技生物）’希望被监管机构和下游资本市场真正严肃对待，它就应该严惩下面这种明目张胆的非法行骗（blatantly illegal grifting）。但它不会的，它只会继续行骗。”*
> —— **Will Manidis (`@WillManidis`)**，2026年10月14日

当初创企业从业者 **Hamudi (`@hamudinaanaa`)** 出面为 Saccade 辩护——声称 *“将眼跳（saccade）研究迁移到一种全新的硬件形态上，本质上就是这场创业的核心赌注（bet）……提出宏大的假设并尽早部署上线，这正是初创公司的天性”*——Manidis 直言不讳地反驳道（*“我的意思是他们正在实施犯罪，如果技术真的有效就去跑临床试验，我根本不在乎他们的商业模式”*），并逐条列出了 **《美国联邦食品、药品和化妆品法》(FD&C Act)**（`21 U.S.C. §§ 321(h), 331(a)/(k), 351(f)(1)(B), 352(a)/(o), 360(k)` 及 `21 CFR §§ 801.4, 812.7`）的具体违法条款。

究竟谁说的才是事实？Saccade 是一家将成熟眼动神经科学转化为普惠预防性筛查的先锋神经诊断公司，还是一家无视临床流行病学基本规律与联邦医疗器械法规、将未经任何患者验证的本科毕业设计原型机直接推向临床受试者的违规企业？

为了彻底撇清社交媒体情绪，我们挖掘并取证了 Saccade 背后的全部一手档案与原始文献：包括其现网全部网页、可下载的受试者指南 PDF、2026年6月加州大学圣塔芭芭拉分校（UCSB）机械工程系本科毕业设计最终展板、创始人的工程作品集、公司引用的两篇核心同行评审论文原文（[Opwonya et al., 2022](https://pmc.ncbi.nlm.nih.gov/articles/PMC9090874/) 与 [Qi et al., 2024](https://www.frontiersin.org/journals/aging-neuroscience/articles/10.3389/fnagi.2024.1471698/full)）、[2024年 NIA-AA 阿尔茨海默病诊断与分期修订标准](https://pmc.ncbi.nlm.nih.gov/articles/PMC11350039/)，以及《美国法典》第 21 编（`21 U.S.C.`）与《联邦法规汇编》（`21 CFR`）的现行法条。

---

## 1. 一手证据溯源矩阵 (Primary Source Traceability Matrix)

在对任何技术、临床或法律主张做出评判之前，每一项事实陈述都必须锚定在可核查的一手原始档案上。

| 证据维度 | 一手原始档案 / 文献 | 可验证标识符 / URL | 核心提取事实 |
| :--- | :--- | :--- | :--- |
| **商业与临床宣称** | Saccade YC 发布贴 (`YC F26`) | [ycombinator.com/launches/Vff...](https://www.ycombinator.com/launches/Vff-saccade-world-s-earliest-test-for-alzheimer-s-biomarkers) | 宣称 Saccade 已 *“在旧金山诊所上线，为 30 岁及以上人群检测早期风险指标”*，使用 *“专有机器学习（ML）模型生成风险评分”*，并将患者 *“划分为三个风险等级之一”* 以启动 *“最新 FDA 批准药物”* 等干预。 |
| **消费者前台营销** | Saccade 官方网站首页 (`saccade.health`) | [saccade.health](https://saccade.health) | 首页 H1 主标题为 **“World's Earliest Test for Alzheimer's Biomarkers（全球最早的阿尔茨海默病生物标志物检测）”** 并配有 **“Take the test”** 预约按钮；正文提及 **Leqembi** 与 **Kisunla**，并滚动展示 *NEJM*、*Nature*、*哈佛医学院*、*UCSF*、*哥伦比亚大学* 等机构标志。 |
| **内部受试者免责声明** | Saccade 患者手册 (`01-essentials`, `02-your-visit`, `03-a-closer-look`) 及 `terms.html` | [saccade.health/assessment.html](https://saccade.health/assessment.html) / [terms.html](https://saccade.health/terms.html) | 与 Launch YC 直接矛盾：明确写着 *“研究用设备（Investigational device）。非诊断设备。无法诊断、筛查（screen for）、预测或排除阿尔茨海默病”*；并在 *“我会收到评分吗？”* 一栏承认：**“现阶段不会……个体测量值仍需验证。”** |
| **硬件与工程溯源** | UCSB 机械工程系本科毕业设计展板 (`scME6`，2026年6月) | [capstone.engineering.ucsb.edu/projects/saccade](https://capstone.engineering.ucsb.edu/projects/saccade) ([PDF](https://capstone.engineering.ucsb.edu/sites/default/files/2026-06/scME6%20Saccade%20Final%20Poster.pdf)) | 由 5 名于 2026年6月毕业的 UCSB 本科生制作（经费 `$7,500`）；为 Apple Vision Pro 3D 打印的磁吸遮光罩，内置两个 `200 fps` 的 `850 nm` 近红外（NIR）相机。台架测试仅包含腔体温度（`29.5°C`）、织物遮光率及单眼相机位置防遮挡。**实际测试的阿尔茨海默病患者人数为零（`N = 0`）。** |
| **网站唯一引用的荟萃分析** | Opwonya et al. (2022), *Neuropsychology Review* 32, 193–227 | `DOI: 10.1007/s11065-021-09495-3` / [PMC9090874](https://pmc.ncbi.nlm.nih.gov/articles/PMC9090874/) | `saccade.health/assessment.html` 引用的**唯一一篇论文**。汇总了 35 项针对已出现临床症状的 MCI 和阿尔茨海默病痴呆（ADD）患者的研究（`N = 2,435`，**症状前 15 年无症状人群研究为 0/35**）。朝向眼跳（prosaccade）潜伏期完全无法区分 MCI 与健康对照（gap 范式 `SMD = 0.09, p = 0.95`；overlap 范式 `SMD = 0.08, p = 0.83`）。 |
| **展板 ROC 曲线来源论文** | Qi et al. (2024), *Frontiers in Aging Neuroscience* | [10.3389/fnagi.2024.1471698](https://www.frontiersin.org/journals/aging-neuroscience/articles/10.3389/fnagi.2024.1471698/full) | Saccade 毕业展板图 1 的直接来源。在北京天坛医院使用固定式 `90 Hz` 角膜反射仪（*EyeKnow*）测试了 154 人（`42` 名正常对照、`63` 名中位病程 24 个月的有症状 AD-MCI 患者、`49` 名中位病程 36 个月的 AD-D 痴呆患者）。即便联合 7 项眼动指标，区分有症状 AD-MCI 与正常人的 `AUC` 仅为 `0.737`（敏感度 `62.5%`，特异度 `85.0%`）。 |
| **分子生物标志物金标准** | Jack et al. (2024), *阿尔茨海默病诊断与分期修订标准* (NIA-AA) | [PMC11350039](https://pmc.ncbi.nlm.nih.gov/articles/PMC11350039/) | 确立 Core 1 生物标志物（淀粉样蛋白 PET、脑脊液 `Aβ42/40` 及血浆磷酸化 tau `p-tau217`，`AUC 0.94–0.98`）为最早可在症状前 15–20 年检出的生物学指标。眼动指标**完全不在** Core 1、Core 2 或非特异性分期标志物之列。 |
| **美国联邦医疗器械法规** | FD&C Act (`21 U.S.C.`) 与 FDA 法规 (`21 CFR`) | [21 CFR § 801.4](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-801/subpart-A/section-801.4) / [21 CFR § 812.7](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-812/subpart-A/section-812.7) / [21 U.S.C. § 321](https://www.law.cornell.edu/uscode/text/21/321) | `21 CFR § 801.4` 规定客观预期用途（objective intended use）由外部宣传主标题决定，隐藏的免责声明无法推翻首页宣传；`21 CFR § 812.7` 严禁推广、商业化或宣称研究用设备（investigational device）安全有效。 |

---

## 2. “挂羊头卖狗肉”的双面话术：Launch YC 宣传文案 vs. 隐藏的法律免责声明

当一家医疗健康公司同时面对三类截然不同的受众——风险投资人、焦虑的消费者以及监管合规律师——检验其认识论诚实度的最快方法，就是将其公开宣传与内部文件并排放在一起。

在 Saccade 的案例中，其高调的商业宣传与隐藏的受试者手册之间并非措辞强弱的微妙差异，而是**直接的事实反转**。

**SACCADE 话术分裂对照表（2026年10月14日取证）**

| 公开营销与 LAUNCH YC 宣称（消费者与投资人看到的内容） | 隐藏条款与受试者手册 PDF （小字部分被迫承认的事实） |
| :--- | :--- |
| “全球最早的阿尔茨海默病生物标志物检测——保护一生记忆的无创 VR 筛查。” （官网首页 H1 主标题） | “研究用设备。非诊断设备。它无法诊断、筛查（screen for）、预测或排除阿尔茨海默病、痴呆或任何其他疾病。” (`saccade-02-your-visit.pdf`, p. 1) |
| “我们使用专有 ML 模型分析 21 项眼动生物标志物，生成风险评分。” （Launch YC） | “我会收到评分吗？现阶段不会。本次到访仅确认任务完成情况与记录质量。个体测量值仍需验证。” (`saccade-02-your-visit.pdf`, p. 2) |
| “一旦被归入三个风险类别之一，患者即可开始从预防性长寿习惯、进一步神经评估到最新 FDA 批准药物的干预。”（Launch YC） | “当前报告系统中尚不提供基于年龄的参考范围。” (`assessment.html`, 45行) |
| “我们已在旧金山诊所正式上线，为 30 岁及以上人群检测早期风险指标。” （Launch YC） | “该研究仅描述群体间差异；并未验证 Saccade 组合可用于个体诊断。” (`assessment.html`, 脚注 1) |

请仔细阅读上述对照：

1. **根本不存在的“风险评分（Risk Score）”：** 在 [Launch YC](https://www.ycombinator.com/launches/Vff-saccade-world-s-earliest-test-for-alzheimer-s-biomarkers) 上，Saccade 向公众和投资人宣称其 *“专有机器学习（ML）模型”* 会生成 *“风险评分”* 并将患者 *“划分为三个风险类别之一”*。然而，在 Saccade 自己的患者到访指南（`saccade-02-your-visit.pdf`，链接藏在 `assessment.html` 底部）中，常见问题解答（FAQ）明确提问：**“我会收到评分吗？（Will I receive a score?）”**，并直接回答：**“现阶段不会。本次到访仅确认任务完成情况和记录质量。个体测量值仍需验证（Not at this stage. The visit confirms the tasks completed and recording quality. Individual measurements still need validation）。”** 不仅如此，`assessment.html` 第 45 行还承认：**“当前报告系统中尚不提供基于年龄的参考范围。”**
2. **关于“筛查（Screening）”的自我否定：** [saccade.health](https://saccade.health) 首页横幅兜售的是 **“保护一生记忆的无创 VR 筛查（Non-invasive VR screening）”**。然而其受试者手册（`saccade-01-essentials.pdf` 和 `saccade-02-your-visit.pdf`）却逐字写道：**“它无法诊断、筛查（screen for）、预测或排除阿尔茨海默病、痴呆或任何其他疾病。”** 一台设备不可能既是提供 *“无创 VR 筛查”* 的 *“全球最早阿尔茨海默病生物标志物检测”*，同时又是一台 *“无法筛查阿尔茨海默病”* 的设备。
3. **暗示权威背书的“名校顶刊 Logo 墙”：** 在 `saccade.health` 首页宣称 *“神经学最新突破表明，我们的眼睛掌握着早期发现的关键”* 正下方，网站放置了一个滚动播放的官方标志横幅，依次展示 **《新英格兰医学杂志》(NEJM)**、**哈佛医学院 (Harvard Medical School)**、**《自然》(Nature)**、**阿尔茨海默病协会 (Alzheimer's Association)**、**加州大学旧金山分校 (UCSF)**、**哥伦比亚大学**、**康奈尔大学**和**波尔多大学**的官方 Logo。事实上，这些机构中没有任何一家发表过关于 Saccade 硬件的研究、与 Saccade 建立过合作关系或认可过 Saccade 的测试——Saccade 试图用一行暗淡的小字免责声明（*“标志仅用于标识研究出版物及机构，而非 Saccade 的合作伙伴或背书”*）来规避虚假关联责任。

### 对 Saccade 核心词汇执行“词义替换测试（Substitution Test）”

在经典批判性思维著作《学会提问》（*Asking the Right Questions*）中，Browne 和 Keeley 指出，商业游说往往依赖**弹性词汇（elastic terms）**——这些词在同行评审医学中具有严苛的科学定义，但在营销文案中却被暗中拉伸以掩盖极其薄弱的实质。如果我们将 Saccade 的营销词汇替换为其准确的临床定义，整套叙事便会瞬间瓦解：

* **“阿尔茨海默病生物标志物 (Alzheimer's Biomarker)”**：在神经病学及 [2024年 NIA-AA 修订标准](https://pmc.ncbi.nlm.nih.gov/articles/PMC11350039/)中，阿尔茨海默病生物标志物是指直接反映 AD 特异性神经病理改变——即大脑 β-淀粉样蛋白斑块（`Aβ42/40`）或病理性 tau 神经原纤维缠结（`p-tau217`、`p-tau181`、`MTBR-tau243`）——的生理、生化或解剖学参数。Saccade 将“阿尔茨海默病生物标志物”偷换成了**普通的眼动反应时间与注视错误率**（眼跳潜伏期、反向眼跳抑制失败），而后者测量的只是通用的额顶叶执行注意力与运动控制，而非淀粉样蛋白或 tau 病理。
* **“最早 / 症状出现前 15 年 (Earliest / 15 Years Pre-Symptomatic)”**：在纵向阿尔茨海默病队列研究（如 DIAN 或 A4 研究）中，要证明某项检测能在症状出现前 15 年发现疾病，必须对**认知正常、完全无症状的个体**进行长期前瞻性随访（或在临床前期 Stage 1 无症状受试者中与淀粉样蛋白 PET / 脑脊液阳性结果进行交叉验证），并证明其对未来发病转化具有高敏感度和高特异度。而 Saccade 引用的文献全部基于**已经确诊为临床轻度认知障碍（MCI）或典型阿尔茨海默病痴呆（ADD）的老年患者**，随后将其与“淀粉样蛋白病理在痴呆前 15–20 年开始累积”这一普通教科书常识强行拼接，暗示*其眼动仪*能够提前 15 年抓出阿尔茨海默病。
* **“可指导使用最新 FDA 批准药物 (Leqembi / Kisunla)”**：**乐意保（Leqembi，lecanemab-irmb）**与**记能达（Kisunla，donanemab-azbt）**均受严格的 FDA 处方说明书限制：它们**仅获批用于临床已确诊为轻度认知障碍（MCI）或轻度痴呆阶段**、且**经证实存在 β-淀粉样蛋白病理**（通过淀粉样蛋白 PET、腰穿脑脊液或 FDA 批准的血液生物标志物确诊）的患者。这两款药物**绝未获批**用于认知正常的 30–50 岁人群；更没有任何一位神经科医生能够凭一台 VR 眼动头显的结果，就给患者开具具有 `12%–36%` 脑水肿（`ARIA-E`）和脑微出血（`ARIA-H`）风险的抗淀粉样蛋白单克隆抗体静脉输注处方。

---

## 3. 硬件身世溯源：从 UCSB 本科毕业设计 (`scME6`) 到旧金山诊所的 120 天

那么，Saccade 的硬件及其临床验证数据究竟从何而来？

来自加州大学圣塔芭芭拉分校的官方学术档案（[UCSB 工程学院毕业设计项目名录：Saccade](https://capstone.engineering.ucsb.edu/projects/saccade)）以及该团队的存档展板（[scME6 Saccade Final Poster.pdf](https://capstone.engineering.ucsb.edu/sites/default/files/2026-06/scME6%20Saccade%20Final%20Poster.pdf)）完整记录了该设备的真实身世。

在 2025–2026 学年期间，五名 UCSB 机械工程系本科生——**Shreyas Bhardwaj、Henry Easton、Jacob Reuser、Sa'Jean Alford 和 Granth Gakhar**——将 Saccade 硬件附件作为他们的大四机械工程毕业设计项目（`Team scME6`）进行制作，并于短短四个月前的 **2026年6月** 在 UCSB 毕业设计展（Capstone Expo）上完成了结题展示。

根据 UCSB 毕业展板及 Bhardwaj 的个人工程作品集（`Shreyas_Resume.pdf` 及项目文档），该硬件依靠一笔 **`$7,500` 的学生非稀释性资助**经历了两次学生原型迭代：

1. **早期原型（作品集文档记录）：** 在 Apple Vision Pro 遮光软垫内嵌入两颗 `850 nm` 红外 LED 和一块采用廉价 **GalaxyCore GC0308 CMOS 传感器**（`640 × 480` VGA 分辨率）、帧率仅为 **`30 fps`**（每帧 `33.3 ms`）的定制红外摄像头 PCB。
2. **2026年6月毕业设计原型（`scME6` 最终展板）：** 为 **Apple Vision Pro** 3D 打印的一个可替换磁吸遮光罩（light shield），内部安装两个帧率为 **`200 fps`**（每帧 `5.0 ms`）的 **`850 nm` 近红外（NIR）全局快门摄像头**，通过两根 USB-C 3.0 数据线引出头显并连接到一台 Apple MacBook，同时在遮光罩上开孔并覆盖涤棉混纺透气布，以在阻挡环境可见光的同时将眼腔内部温度控制在 `30°C` 以下。

### Saccade 硬件究竟做过哪些实际测试？

在 Saccade 宣布 *“已在旧金山诊所上线，为 30 岁及以上人群进行检测”* 仅仅**四个月前**发布的 2026年6月 UCSB 官方毕业设计展板上，标题为 **“Testing Results（测试结果）”** 的核心章节里，完完整整只包含三项学生工程台架实验：

1. **热学台架测试（Thermal Bench Test）：** 测量在 3D 打印的 Vision Pro 遮光罩上增加通风槽后，佩戴 15 分钟后的内部空气温度是否能从无通风槽时的 `37.5°C` 降至 `29.5°C`。
2. **织物遮光率测试（Fabric Opacity Test）：** 在通风槽开口处测试四种布料样品（太空棉、锦纶氨纶、涤棉混纺、运动网眼布），验证 `0.58 mm` 厚的涤棉混纺布能否阻挡环境可见光干扰 `850 nm` 近红外相机。
3. **单眼眼睑遮挡测试（Single-Eye Eyelid Occlusion Check）：** 在一名学生受试者身上测试镜框边缘四个相机安装位置，证明安装在底部的相机在眼球向下看时仍能拍到瞳孔，而安装在顶部的相机会被上眼睑和睫毛遮挡。

这就是整张毕业设计展板上实验验证的全部内容。**实际测试的阿尔茨海默病患者人数：零（`N = 0`）。实际测试的轻度认知障碍（MCI）患者人数：零（`N = 0`）。纵向追踪的临床前期转化人数：零（`N = 0`）。** 事实上，Bhardwaj 本人在毕业设计结束时撰写的作品集总结中也明确写道：*“下一步：开展 50 名患者的 IRB 批准试点研究（Next: IRB-approved pilot with 50 patients）。”* 截至 2026年10月14日，对 `ClinicalTrials.gov` 以及 FDA 的 `510(k)`、`De Novo` 和上市前批准（`PMA`）数据库的全面检索证实，Saccade 或其创始人名下**注册的临床试验数量为零**，**向 FDA 提交的审批申请数量也为零**。

### 眼动生物力学难题：为什么 VR 附件不能直接挪用固定式临床眼动仪的数据？

在 X 平台上为 Saccade 辩护时，创业者 Hamudi 声称：*“将眼跳研究迁移到新设备形态上，本质上就是这场创业的赌注。”*

要评估一家初创公司能否在不做任何桥接临床试验（bridge trial）的情况下，在科学或法律上将已发表的固定式临床眼动仪文献直接外推到未经验证的 VR 附件上，我们只需算一算人类眼跳（saccade）的生物力学与信号处理数学账：

* **人类眼跳的运动学特征：** 眼跳是人体产生的最快运动，角速度高达 **`400°/s` 至 `700°/s`**，完成一次 `10°`–`20°` 的眼球旋转仅需 **`30 ms` 至 `80 ms`**。
* **临床微弱信号的真实量级：** 在 Saccade 官网唯一引用的荟萃分析（[Opwonya et al., 2022](https://pmc.ncbi.nlm.nih.gov/articles/PMC9090874/)）中，健康老年对照组与确诊**阿尔茨海默病痴呆（ADD）**患者在朝向眼跳潜伏期（prosaccade latency）上的原始均值差（`MD`）仅仅只有 **`14.22 ms`**（gap 范式）到 **`26.10 ms`**（overlap 范式）。而在健康对照与**轻度认知障碍（MCI）**患者之间，这一均值差仅为毫无统计学显著性的 **`3.98 ms`**（`p = 0.95`，gap 范式）和 **`3.78 ms`**（`p = 0.83`，overlap 范式）！
* **采样量化误差（Sampling Quantization Error）：** 对于采样频率为 `f_s` 的采集系统，其时间量化间隔为 `Δt = 1 / f_s`，这会在视觉刺激呈现时刻与眼球运动起始检测时刻之间引入 `±Δt` 的均匀分布时间戳不确定度：

$$\sigma_{\text{quant}} = \sqrt{\frac{(\Delta t_{\text{camera}})^2 + (\Delta t_{\text{display}})^2}{6}}$$

在 Saccade 早期的 `30 fps` 原型机（`Δt = 33.3 ms`）中，单帧视频的间隔时间是 MCI 与健康人平均潜伏期差异（`3.98 ms`）的 **8 倍以上**，甚至比晚期阿尔茨海默病痴呆的整体潜伏期偏移（`14 ms`–`26 ms`）还要宽！即便升级到 `200 fps` 的 USB 相机（`Δt = 5.0 ms`）并搭配 Apple Vision Pro 显示屏（刷新率 `90 Hz`–`100 Hz`，`Δt = 10.0–11.1 ms`），显示屏与外接 USB 相机之间的时钟同步抖动（jitter）、macOS 上的 USB 批量传输帧缓冲延迟、头显在面部的微小滑移（头显仅滑动 `0.5 mm` 就会造成约 `2.5°` 的注视角度误差），以及近眼 VR 光学系统内部的辐辏-调节冲突（vergence-accommodation conflict），都会产生巨大的系统方差，彻底淹没 `4 ms`–`25 ms` 量级的微弱临床信号——除非该设备在配备下巴托（chin-rest）固定的 `500 Hz`–`1,000 Hz` 实验室金标准角膜反射眼动仪（如 SR Research EyeLink 1000）上完成严格的同步标定与临床验证。

---

## 4. 对 Saccade 引用文献的统计学与流行病学取证审计

为了支撑其“眼动比我们能筛查的任何其他标志物都更早出现”的核心论点，Saccade 依赖两篇学术论文：
1. **[Opwonya et al. (2022)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9090874/)**（*"Saccadic Eye Movement in Mild Cognitive Impairment and Alzheimer's Disease: A Systematic Review and Meta-Analysis"*, *Neuropsychology Review* 32, 193–227）——这是 `saccade.health/assessment.html` 网页与 `saccade-03-a-closer-look.pdf` 手册中列出的**唯一一篇参考文献**。
2. **[Qi et al. (2024)](https://www.frontiersin.org/journals/aging-neuroscience/articles/10.3389/fnagi.2024.1471698/full)**（*"Abnormal eye movements: relationship with clinical symptoms and predictive value for Alzheimer's disease"*, *Frontiers in Aging Neuroscience*）——Saccade 在其 2026年6月 UCSB 毕业展板 **Figure 1** 中直接复制的 ROC 曲线来源论文。

让我们直接审计这两篇论文的原始统计数据表。

### 审计 1：Opwonya et al. (2022) 系统综述与荟萃分析 (`N = 2,435`)

Opwonya 等人汇总了 35 项横断面与病例对照研究，共涵盖 **`2,435` 名老年受试者**：包括 `1,252` 名认知正常的老年对照、`386` 名临床确诊的**轻度认知障碍（MCI）**患者，以及 `797` 名临床确诊的**阿尔茨海默病痴呆（ADD）**患者。

以下是直接从 `PMC9090874` 原文提取的完整荟萃分析结果：

| 眼动参数 | 对比队列 | 纳入研究数 (`k`) | 原始均值差 (`MD`) | 效应量 (Hedges' `g` / `SMD` [95% CI]) | `p` 值 | 异质性 (`I²`) | 发表偏倚 (Egger 检验) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **朝向眼跳潜伏期 (Gap)** | **ADD vs. 正常对照** | 16 | `+14.22 ms` | `0.38` `[0.19, 0.56]` | `< 0.001` | `66%` | 显著偏倚 (`Z = 2.60, p = 0.009`) |
| **朝向眼跳潜伏期 (Gap)** | **MCI vs. 正常对照** | 8 | `+3.98 ms` | **`0.09` `[-0.10, 0.28]`** | **`0.95` (无效)** | `0%` | — |
| **朝向眼跳潜伏期 (Overlap)** | **ADD vs. 正常对照** | 12 | `+26.10 ms` | `0.56` `[0.32, 0.80]` | `< 0.001` | `72%` | 显著偏倚 (`Z = 3.37, p = 0.002`) |
| **朝向眼跳潜伏期 (Overlap)** | **MCI vs. 正常对照** | 7 | `+3.78 ms` | **`0.08` `[-0.14, 0.29]`** | **`0.83` (无效)** | `0%` | — |
| **反向眼跳潜伏期 (Gap)** | **ADD vs. 正常对照** | 9 | `+45.65 ms` | `0.56` `[0.16, 0.96]` | `< 0.001` | `84%` | 显著偏倚 (`Z = 2.18, p = 0.029`) |
| **反向眼跳潜伏期 (Gap)** | **MCI vs. 正常对照** | 7 | `+28.55 ms` | `0.35` `[0.04, 0.66]` | `0.030` | `60%` | — |
| **反向眼跳错误率** | **ADD vs. 正常对照** | 16 | `+25.15%` | `1.31` `[0.99, 1.63]` | `< 0.001` | `83%` | 显著偏倚 (`Z = 2.63, p = 0.009`) |
| **反向眼跳错误率** | **MCI vs. 正常对照** | 5 | `+10.98%` | `0.55` `[0.32, 0.78]` | `0.15` (`Q` 检验) | `33%–88%` | — |
| **反向眼跳潜伏期** | **ADD vs. MCI** | 8 | `+20.73 ms` | **`0.25` `[-0.08, 0.59]`** | **`0.14` (无效)** | `77%` | — |

从 Opwonya 等人的数据中，可以清晰得出四项取证结论：

1. **症状出现前 15 年的无症状/临床前期研究数量为零 (`0/35`)：** 在该荟萃分析纳入的 35 项研究中，**没有任何一项研究**测试了健康的 30 岁、40 岁或 50 岁人群并追踪谁在 15 年后患上阿尔茨海默病。疾病组中的每一位受试者都是老年人（各研究平均年龄在 `64.4 岁`至 `78.4 岁`之间），且在入组测试时*就已经根据 NINCDS-ADRDA、NIA-AA、DSM-IV 或 Petersen 标准被临床确诊为明显的认知障碍或痴呆*。
2. **朝向眼跳潜伏期在 MCI 阶段完全失效：** 即便在已经出现临床症状的轻度认知障碍（MCI）患者中，朝向眼跳（prosaccade）反应时间与健康对照组相比也**完全没有统计学差异**（gap 范式 `SMD = 0.09, p = 0.95`；overlap 范式 `SMD = 0.08, p = 0.83`）。
3. **严重的群体分布重叠 (`SMD = 0.35` 至 `0.55`)：** 在生物统计学中，标准化均值差（Hedges' `g`）为 `0.35`（MCI 反向眼跳潜伏期）对应的 ROC 曲线下面积约为 `AUC = Φ(g / √2) = Φ(0.35 / 1.414) ≈ 0.60`，意味着 **MCI 患者与健康对照组的分布有 86% 是重叠的**。即便是效应量最大的 MCI 反向眼跳错误率（`SMD = 0.55`，仅汇总了 `k = 5` 项研究），其对应的 `AUC` 也仅为 `0.65` 左右（`78%` 的分布重叠）。这正是为什么 Saccade 自己的法律顾问不得不在 `assessment.html` 脚注中承认：*“该研究仅描述群体间差异；并未验证 Saccade 组合可用于个体诊断。”*
4. **极高的研究间异质性与显著的发表偏倚：** 在整个荟萃分析中，各项研究之间的异质性极高（`I² = 60% to 88%`），且 Egger 回归检验确认朝向眼跳 gap（`p = 0.009`）、朝向眼跳 overlap（`p = 0.002`）、反向眼跳潜伏期（`p = 0.029`）和反向眼跳错误率（`p = 0.009`）均存在显著的小样本发表偏倚。

### 审计 2：Qi et al. (2024) —— Saccade 展板上那张 ROC 曲线的真实面目

在其 2026年6月 UCSB 毕业设计展板上，Saccade 印上了一张彩色受试者工作特征（ROC）曲线图，图注写着：*“图 1：显示联合眼动追踪指标在检测 AD 中具有强大诊断性能的 ROC 曲线 (Qi et al. 2024)。”*

当你打开 [Qi et al. (2024)](https://www.frontiersin.org/journals/aging-neuroscience/articles/10.3389/fnagi.2024.1471698/full) 原文仔细阅读时，真相是什么？

* **研究队列（北京天坛医院 `N = 154`）：**
  * `42` 名正常对照者（中位年龄 `65.0 岁`），
  * `63` 名有症状的 **AD-MCI** 患者（中位年龄 `69.0 岁`，**中位发病病程已达 `24.0 个月`**），
  * `49` 名有症状的**阿尔茨海默病痴呆（AD-D）**患者（中位年龄 `71.0 岁`，**中位发病病程已达 `36.0 个月`**，平均 MMSE 评分仅为 `16.45 / 30 分`）。
* **硬件与眼科预筛查：** 受试者首先由**眼科专科医生**进行检查以排除眼部疾病，随后在安静的医院诊室中坐在固定式临床角膜反射眼动仪（*EyeKnow*，北京中科睿医，`90 Hz` 红外采集模块）前完成测试。
* **真实的诊断准确度：** 即便 Qi 等人将 **7 项眼动参数**全部组合进在同一样本上拟合的多变量逻辑回归模型中，各亚组的真实 ROC 表现如下：
  * **AD-D（已患痴呆 3 年、平均 MMSE 仅 16 分的中度痴呆患者）vs. 正常对照：** `AUC = 0.935`（敏感度 `86.1%`，特异度 `90.0%`）。（需要指出的是，对于 `MMSE = 16 分` 的中度痴呆患者，任何基层诊所免费进行的 5 分钟纸笔 MoCA 或 MMSE 量表就能以 `>95%` 的准确度将其与正常人区分开来。）
  * **AD-MCI（已出现症状 2 年的轻度认知障碍患者）vs. 正常对照：** **`AUC = 0.737`**，**敏感度 = `62.5%`**，**特异度 = `85.0%`**，**总体准确度 = `71.9%`**！

换句话说，Saccade 印在自己展板图 1 上的这篇核心论文，**漏诊了 37.5% 已经出现认知障碍症状长达两年的 AD-MCI 患者**（敏感度 `62.5%`），同时还将 **15.0% 的健康正常人误判为异常**（特异度 `85.0%`）！

### 贝叶斯筛查灾难：当把这套测试用在 30 岁人群身上时

现在，让我们将 Qi et al. (2024) 最佳多参数 MCI 模型的表现（敏感度 `62.5%`，特异度 `85.0%`）代入 Saccade 在 Launch YC 上的公开宣称：

> *“我们已在旧金山诊所正式上线，为 30 岁及以上人群检测早期风险指标。”*

在诊断医学中，将一项特异度仅为 `85.0%`（假阳性率 `15.0%`）的检测部署到患病率极低的年轻无症状筛查人群中，会触发受**贝叶斯定理（Bayes' Theorem）**支配的典型生物统计学灾难。**阳性预测值（`PPV`，Positive Predictive Value）**——即收到阳性“高风险”警报的受试者体内真正存在临床前期阿尔茨海默病病理的概率——计算公式如下：

$$\text{PPV} = \frac{\text{Sensitivity} \cdot P(D)}{\text{Sensitivity} \cdot P(D) + (1 - \text{Specificity}) \cdot (1 - P(D))}$$

其中 `P(D)` 是被筛查年龄层中临床前期阿尔茨海默病病理的基础患病率（base rate）。即便根据权威的淀粉样蛋白生物标志物合作组荟萃分析（Jansen et al., *JAMA*），认知正常成年人的脑淀粉样蛋白阳性率在 50 岁时约为 `10%`，在 40–49 岁时 `< 2%`，而在 30–39 岁人群中仅为 `< 0.1%–0.5%`（除极罕见的常染色体显性遗传 *APP*、*PSEN1* 或 *PSEN2* 突变家族外，散发性阿尔茨海默病病理在 30 多岁人群中几乎不存在）。

| 被筛查队列年龄组 | 临床前期 AD 基础患病率估计值 `P(D)` | 敏感度 (Qi et al. MCI 模型) | 特异度 (Qi et al. MCI 模型) | 假阳性率 (`1 - Spec`) | **阳性预测值 (`PPV`)** | **“高风险”警报中属于假阳性的比例** |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **30–39 岁（长寿诊所核心受众）** | `0.1%` (`0.001`) | `62.5%` | `85.0%` | `15.0%` | **`0.41%`** | **`99.59%` 为假阳性（误报）** |
| **40–49 岁** | `0.5%` (`0.005`) | `62.5%` | `85.0%` | `15.0%` | **`2.05%`** | **`97.95%` 为假阳性（误报）** |
| **50–59 岁** | `3.0%` (`0.030`) | `62.5%` | `85.0%` | `15.0%` | **`11.42%`** | **`88.58%` 为假阳性** |
| **65–74 岁** | `15.0%` (`0.150`) | `62.5%` | `85.0%` | `15.0%` | **`42.37%`** | **`57.63%` 为假阳性** |

当 Saccade 在旧金山长寿诊所用一套特异度 `85%` 的眼动测试筛查 1,000 名健康的 35 岁焦虑白领时，**将有 `150` 名健康的 35 岁受试者拿着异常的眼动报告走出诊所**，而这 1,000 人中真正具有临床前期阿尔茨海默病病理的人数大约只有 **`0` 到 `1` 人**。在年轻成年人中，**超过 98% 至 99.5% 的阳性风险警报都是假阳性**——这不仅会给受试者带来严重的心理创伤，还会触发昂贵且有创的下游神经科过度检查（如每次 `$3,000+` 的放射性淀粉样蛋白 PET 扫描或有创腰椎穿刺）。

---

## 5. 竞争性病因与分子生物学真相：为什么眼动对阿尔茨海默病毫无特异性（以及为什么血浆 `p-tau217` 早已存在）

为什么眼动测试在真实世界中的假阳性率如此惊人？根源在于**神经解剖学上的非特异性（neuroanatomical non-specificity）**。

### 眼动异常的四向因果审计 (4-Way Causal Audit)

当受试者戴上头显执行朝向眼跳（prosaccade，看向闪光点）、反向眼跳（antisaccade，抑制看向闪光点的本能反射并看向相反方向）或记忆引导眼跳时，究竟在测试大脑的哪些神经环路？

| 竞争性病因类别（观测到的信号：眼跳潜伏期延长 `+20 ms` 及反向眼跳抑制错误率升高） | 混杂病症与临床机制 |
| :--- | :--- |
| **1. 精神科与神经发育因素** | • **成人 ADHD**（DLPFC 自上而下抑制减弱）<br>• **精神分裂症 / 双相情感障碍**<br>• **重度抑郁症与广泛性焦虑症**<br>• **自闭症谱系** |
| **2. 药理学与生理状态因素** | • **睡眠剥夺**（`< 5 小时`）/ 昼夜节律低谷<br>• **咖啡因戒断 / 急性工作疲劳**<br>• **常用药物与物质：** 饮酒、苯二氮䓬类、镇静催眠药（唑吡坦等）、抗组胺药、抗胆碱药、SSRIs<br>• **眼表与光学因素：** 干眼症、散光、VR 辐辏-调节疲劳 |
| **3. 非 AD 神经系统与全身性疾病** | • **帕金森病**、进行性核上性麻痹 (**PSP**)、**路易体痴呆 (DLB)**<br>• **额颞叶痴呆 (FTD)**<br>• **多发性硬化 (MS) / 创伤性脑损伤 (TBI)**<br>• **2 型糖尿病**（`Qi et al. 2024` 中 AD 组高达 **`70.5%`** vs. 对照组 `23.8%`！） |

1. **直接神经解剖通路（测试的是前额叶执行控制，而非淀粉样蛋白特异性）：** 反向眼跳（antisaccade）抑制依赖于从**背外侧前额叶皮层（DLPFC）**、**前扣带回皮层（ACC）**和**额叶眼动区（FEF）**经基底节（尾状核与黑质网状部）投射至中脑**上丘（superior colliculus）**的自上而下（top-down）抑制信号。任何暂时或慢性削弱前额叶执行注意力的状况，都会直接导致反向眼跳错误率飙升及潜伏期延长。
2. **跨精神科、药理学与全身性疾病的第三变量混杂（Third-Variable Confounders）：**
   * **成人 ADHD 与常见精神心理状况：** 数十年的眼动神经科学文献证实，患有**注意缺陷多动障碍（ADHD）**、**精神分裂症**、**双相情感障碍**、**重度抑郁症**及**广泛性焦虑症**的成年人，其反向眼跳错误率均会出现大幅且统计学极其显著的升高（`SMD = 0.60–1.10`）——这一效应量甚至**大于**轻度认知障碍（`SMD = 0.55`）！一名在旧金山工作的 32 岁软件工程师如果患有成人 ADHD 或处于工作倦怠（burnout）状态去参加 Saccade 测试，会表现出教科书般的反向眼跳抑制失败，但这与阿尔茨海默病毫无关系。
   * **睡眠不足与常用药物：** 仅仅一晚睡眠不足（`< 5 小时`）、在昼夜节律低谷时段测试，或服用常见的**抗组胺药（苯海拉明/西替利嗪）**、**苯二氮䓬类药物**、**Z 类助眠药（唑吡坦）**、**三环类抗抑郁药**、**抗胆碱能药物**或**酒精**，都会使眼跳速度减慢并将潜伏期延长 `15 ms` 至 `40 ms`——直接超过 `Opwonya et al. (2022)` 中阿尔茨海默病痴呆的整体信号（`14 ms`–`26 ms`）。
   * **`Qi et al. (2024)` 队列中惊人的糖尿病混杂偏倚：** 请看 [Qi et al. (2024)](https://www.frontiersin.org/journals/aging-neuroscience/articles/10.3389/fnagi.2024.1471698/full) 的表 1（Table 1）：**在阿尔茨海默病组中，高达 `70.5%`（`79/112`）的患者患有 2 型糖尿病，而在正常对照组中糖尿病比例仅为 `23.8%`（`10/42`）（`p < 0.001`）！** 糖尿病本身就会引起微血管性颅神经病变、糖尿病视网膜病变和中枢处理速度减慢，这意味着 `Qi et al. (2024)` 中未经糖尿病校正的 ROC 曲线受到了两组间高达 `46.7 个百分点`的糖尿病患病率失衡的严重污染。
   * **其他非 AD 神经退行性疾病：** 进行性核上性麻痹（PSP）、帕金森病、路易体痴呆（DLB）、额颞叶痴呆（FTD）和创伤性脑损伤（TBI）均会导致严重的眼跳幅度不足（hypometria）、速度减慢或反向眼跳错误。

### 分子生物学真相：血浆 `p-tau217` 早已是经过验证的真正早期检测

在其发布路演和作品集材料中，Bhardwaj 宣称眼动生物标志物 *“比我们能筛查的任何其他标志物都更早”*，声称 PET 扫描只能在症状前 *“5 年”* 检出（花费 `$5,000`），并贬低血液检测 *“往往不可靠（Often unreliable, $2,000）”*。

这一说法的每一个字都与现代阿尔茨海默病生物标志物科学背道而驰：

* **2024年修订版 NIA-AA 标准究竟怎么说：** 根据 [2024年阿尔茨海默病诊断与分期修订标准 (Jack et al., *Alzheimer's & Dementia* / *Nature Medicine*, PMC11350039)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11350039/)，阿尔茨海默病在生物学上由 **Core 1 生物标志物**定义，这些分子标志物在**临床症状出现前 15 至 20 年以上**（在完全无症状的 Stage 1 个体中）就已出现异常。
* **Core 1 血液生物标志物 (`p-tau217`) 的 `AUC` 高达 `0.94–0.98`：** 血浆**磷酸化 tau-217 (`p-tau217`)** 及 **`%p-tau217` / `p-tau217/Aβ42` 比值**（通过质谱法或免疫分析法测量，例如 **C2N Diagnostics 的 PrecivityAD2**、**已获 FDA 批准的 Fujirebio Lumipulse G pTau217/β-Amyloid 1-42 血浆比值检测试剂盒**、**礼来的 CertuitAD** 以及 **罗氏/ALZpath** 检测）在检测脑内 β-淀粉样蛋白和 tau 病理方面的 **ROC `AUC` 高达 `0.94` 至 `0.98`**（敏感度与特异度均 `>90%`），在临床实验室成本仅需 **`$300` 至 `$1,200`** 的条件下，达到了与脑脊液（CSF）和淀粉样蛋白 PET 金标准相当的准确度。
* **眼动指标完全不在 NIA-AA 标准框架内：** 眼动行为测量的既不是淀粉样蛋白斑块也不是 tau 缠结；它测量的是当神经退行性变已经破坏额顶叶或脑干注视环路*之后*才出现的下游突触与皮层网络功能障碍。在大脑出现淀粉样蛋白和 tau 病理*之前*就先出现所谓“阿尔茨海默病特异性眼动障碍”，在生物学上是根本不可能的。

| 诊断技术模态 | 测量的生物学靶点 | NIA-AA 2024 分类 | 经验证的无症状提前检出窗口 | 诊断准确度（针对 AD 病理的 `AUC`） | 是否受 ADHD、缺觉、压力或镇静药物干扰？ | FDA 监管状态（截至 2026年10月） |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **淀粉样蛋白 PET (`18F-Florbetapir` / `Florbetaben` / `Flutemetamol`)** | 大脑皮层纤维状 `Aβ` 斑块 | **Core 1 生物标志物**（确诊级） | 痴呆症状前 **15–20 年** | `0.96–0.99`（病理参考金标准） | **否** | **FDA 正式批准** |
| **血浆 `p-tau217` / `Aβ42/40` 比值 (`Lumipulse G`, `PrecivityAD2`)** | 反映脑内斑块与缠结的可溶性磷酸化 tau 及淀粉样蛋白比值 | **Core 1 生物标志物**（确诊级） | 痴呆症状前 **15–20 年** | **`0.94–0.98`**（敏感度/特异度 `>90%`） | **否** | **FDA 批准 (510(k)/突破性器械) 及 CLIA 临床验证** |
| **脑脊液 `Aβ42/40` 与 `p-tau181`（腰椎穿刺）** | 脑脊液淀粉样蛋白与磷酸化 tau | **Core 1 生物标志物**（确诊级） | 痴呆症状前 **15–20 年** | `0.95–0.98` | **否** | **FDA 批准** |
| **固定式实验室眼动仪 (`Opwonya 2022` / `Qi 2024`)** | 额顶叶 / 上丘运动潜伏期与抑制功能 | **未纳入分类**（下游认知/运动相关指标） | **0 年经证实提前量**（`0/35` 项研究测试无症状人群） | 有症状 MCI 中为 **`0.60–0.737`**（MCI 朝向眼跳潜伏期 `p = 0.95` 无效） | **是（极其严重）** | 科研设备 / 部分通用眼动追踪获 510(k)（非 AD 诊断许可） |
| **Saccade (YC F26) VR Vision Pro 附件** | VR 头显内未经验证的 `200 fps` USB 相机追踪 | **无** | **未经证实（`N = 0` 临床试验）** | **未知（`N = 0` 名 AD/MCI 患者测试）** | **是（极其严重，外加 VR 头显滑移与辐辏疲劳）** | **无（未获批、未许可、未注册）** |

---

## 6. 美国联邦成文法与监管审计：评估 Will Manidis 的违法指控 (`FD&C Act` & `21 CFR`) vs. “TechBio 快速试错论”

当 Will Manidis 撰文指出 Saccade 从事 *“明目张胆的非法行骗”*，并针对 Hamudi 的 *“尽早部署上线”* 辩护列出一长串联邦法律条文时，Manidis 的法律引用究竟是言过其实，还是精准的法理定性？

让我们逐条对照 **《美国联邦食品、药品和化妆品法》(FD&C Act, `21 U.S.C. § 301 et seq.`)** 与 **《联邦法规汇编》第 21 编 (`21 CFR`)**，并将其应用于 Saccade 的公开档案。

### 1. 根据 `21 U.S.C. § 321(h)`，Saccade 在法律上是否属于“医疗器械 (Medical Device)”？

根据 **FD&C 法案第 201(h) 条 ([21 U.S.C. § 321(h)](https://www.law.cornell.edu/uscode/text/21/321))**，`device（医疗器械）` 的法定定义为：

> *“……任何仪器、设备、工具、机器、装置、植入物、体外试剂或其他类似或相关物品（包括任何组件、零件或附件），其**预期用于人类疾病或其他状况的诊断（intended for use in the diagnosis of disease or other conditions）**，或用于疾病的治愈、缓解、治疗或预防……”*

根据 FDA 发布的 **[《低风险设备通用健康政策指南》(General Wellness: Policy for Low Risk Devices)](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/general-wellness-policy-low-risk-devices)**（以及《21世纪治愈法案》第 520(o) 条，`21 U.S.C. § 360j(o)`），一项软硬件产品唯有满足以下条件之一，方可作为豁免监管的“通用健康产品（general wellness product）”：
1. **仅**用于一般健康目的（例如放松、健身记录、普通益智游戏），**完全不提及任何特定疾病或医学状况的诊断或筛查**；或者
2. 在健康生活方式与慢性病风险降低之间的关系已被充分证实的领域，通过追踪健康生活方式选择来帮助降低风险，且**不作任何疾病诊断或生物标志物筛查宣称**。

Saccade 的硬件附件和软件绝非宣称自己是一款益智拼图游戏。其官网首页 H1 大标题赫然写着 **“World's Earliest Test for Alzheimer's Biomarkers — Non-invasive VR screening（全球最早的阿尔茨海默病生物标志物检测——无创 VR 筛查）”**，其 Launch YC 页面明确写道：**“我们已在旧金山诊所正式上线，为 30 岁及以上人群检测早期风险指标……一旦被划分为三个风险等级之一，患者即可开始涵盖预防性长寿习惯、进一步神经专科评估以及最新 FDA 批准药物的干预。”**

通过明确宣称筛查**阿尔茨海默病生物标志物**并将患者划分为临床风险等级以指导 **FDA 批准的阿尔茨海默病药物干预**，Saccade 毫无疑问跨过了 `21 U.S.C. § 321(h)` 的法定红线，属于受严格监管的**医疗器械**。

### 2. 页脚隐藏的免责声明能否救得了 Saccade？(`21 CFR § 801.4` —— 客观预期用途原则)

许多初次涉足消费医疗的创业者常有一种天真的误解：以为只要在 `terms.html` 角落里用 10 号灰色小字写上一句 *“研究性评估，非诊断测试”*，就可以在网站首页用 60 号大字肆无忌惮地宣称 **“全球最早的阿尔茨海默病生物标志物检测”**。

美国联邦法规直接堵死了这一漏洞。根据 **[21 CFR § 801.4（预期用途的含义，Meaning of intended uses）](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-801/subpart-A/section-801.4)**：

> *“第 801.5、801.119、801.122 和 801.125 条中的**预期用途（intended uses）**或类似含义的词语，是指对物品标签负有法律责任之人的**客观意图（objective intent）**……该意图可由上述人员的**表达方式证明，或由围绕该物品分发的客观环境证明**。例如，这种客观意图可通过上述人员或其代表的**标签宣称、广告材料或口头及书面陈述**予以证明。”*

在数十年来的 FDA 执法行动、警告信（Warning Letters）及联邦法院判例中，FDA 始终根据**全部宣传陈述的总和（totality of promotional statements）**——包括网站首页大标题、融资/产品发布公告、社交媒体视频及诊所招募页面——来认定器械的预期用途。当首页核心标题直接将该设备作为阿尔茨海默病生物标志物筛查测试进行推销时，藏在 `terms.html` 或页脚里的格式免责声明在法律上完全无效。

### 3. 上市前通知 (`§ 510(k)`)、De Novo / PMA (`§ 513(f)(1)`)、掺假 (`§ 501`) 与虚假标识 (`§ 502`)

虽然不具备疾病特异性诊断软件的普通固定式眼震仪或通用眼动追踪器可根据 `21 CFR § 882.1460` 作为 II 类（Class II）器械通过 **510(k) 上市前通知**（`21 U.S.C. § 360(k)`）获得许可，但旨在**使用机器学习筛查或分类阿尔茨海默病风险**的设备并不存在实质等同（substantially equivalent）的 II 类前代合法器械（predicate）。根据 **FD&C 法案第 513(f)(1) 条 (`21 U.S.C. § 360c(f)(1)`)**，没有合法前代器械的新型诊断设备依法自动归类为 **III 类（Class III）**高风险器械，必须通过具有前瞻性临床验证数据支撑的 **De Novo 分类申请 (`21 U.S.C. § 360c(f)(2)`)** 或 **上市前批准 (`PMA`, `21 U.S.C. § 360e`)** 方可上市。

由于 Saccade 既没有 `510(k)` 许可，也没有 `De Novo` 授权或 `PMA` 批准：
* **掺假医疗器械 (Adulteration, `21 U.S.C. § 351(f)(1)(B)`)：** 任何在未获得法定上市前批准或未持有合规生效的研究用器械豁免（`IDE`）的情况下分发用于临床的器械，依法均属**掺假器械（adulterated）**。
* **虚假标识医疗器械 (Misbranding, `21 U.S.C. § 352(o)` 及 `§ 352(a)`)：** 未按要求提交 `510(k)` 上市前通知而分发的器械（`§ 352(o)`），或其标签 *“在任何具体方面存在虚假或误导（false or misleading in any particular）”* 的器械（`§ 352(a)`——例如在受试者手册中承认根本不生成评分，却在 Launch YC 上宣称其专有 ML 模型可生成风险评分并将患者分为三类），依法均属**虚假标识器械（misbranded）**。
* **联邦禁止行为 (Prohibited Acts, `21 U.S.C. § 331(a)` 及 `(k)`)：** 将任何掺假或虚假标识的医疗器械引入或交付引入州际商业（`§ 331(a)`），或在器械经州际商业运输后持有待售期间对其实施任何导致其成为掺假或虚假标识器械的行为（`§ 331(k)`），均属**联邦法律严禁的违法行为**，可触发 `21 U.S.C. § 333(a)(1)` 下的严格责任轻罪处罚（参见最高法院判例 *United States v. Park*, 421 U.S. 658 (1975)）、`§ 333(f)(1)(A)` 下的民事罚款，以及 `§§ 332, 334` 下的联邦禁令与查封扣押。

### 4. “研究用设备 (Investigational Device)”的死胡同 (`21 CFR § 812.7`)

如果 Saccade 辩称：*“我们并没有销售商业医疗器械；我们的条款写了 Saccade 只是一项在旧金山诊所收集科研数据的‘研究性评估（investigational assessment）’”*，结果会怎样？

这一辩解将直接撞上管辖所有研究用医疗器械的 **[21 CFR § 812.7（禁止推广及其他不当行为，Prohibition of promotion and other improper practices）](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-812/subpart-A/section-812.7)**：

> *“研究者或代表研究者行事的任何人**不得（shall not）**：*
> *(a) 在 FDA 批准该器械用于商业分发之前，**推广或试销（promote or test market）**研究用器械。*
> *(b) 通过向受试者或研究者收取高于收回制造、研究、开发和处理成本所需金额的费用，将研究用器械**商业化（commercialize）**。*
> *(c) 不当延长研究时间。*
> *(d) **宣称研究用器械对其正在研究的目的而言是安全或有效的（represent that an investigational device is safe or effective）**。”*

请看 `21 CFR § 812.7` 如何彻底封死了 Saccade 的退路：
1. 如果 Saccade 的设备确实属于**研究用设备（investigational）**，那么在 Y Combinator 和 `saccade.health` 上发起高调公关活动、宣称它是 **“全球最早的阿尔茨海默病生物标志物检测”**、用 **“Take the test”** 按钮招募普通消费者，并在 `/for-clinics` 页面向诊所推销（*“在您的诊所提供全球最早的阿尔茨海默病筛查……让您的长寿诊所或全科诊所脱颖而出”*），**直接违反了 `21 CFR § 812.7(a)` 和 `(d)` 的强制性禁令**。
2. 此外，任何旨在支持未来 FDA 上市申请的诊断器械人体临床研究，都必须获得**机构审查委员会（IRB）批准（`21 CFR Part 56`）**并签署法定的**受试者知情同意书（Informed Consent，`21 CFR Part 50`，特别是 `§ 50.25`）**。而在 `saccade.health` 上，用户只是把邮箱填进一个 Google Apps Script 网页表单（`signup.js`），没有任何 IRB 方案编号披露，没有列出主要研究者（PI），只有一页落款为 2026年4月、完全缺失 `21 CFR § 50.25` 法定知情同意必备要素的 `terms.html`。

---

## 7. 行业坟场与幸存者偏差审计：为什么眼部阿尔茨海默病诊断需要数十年，而非 12 周的 YC 冲刺

Saccade 绝不是第一家注意到眼球运动或视网膜成像与认知能力下降存在相关性的公司。事实上，数字化与眼部神经诊断是医疗科技（MedTech）领域最拥挤的“创业坟场”之一，原因正在于：**将充满噪声的群体水平统计学相关性（`p < 0.05`）转化为高特异度的个体临床诊断测试（`AUC > 0.90`）具有极高的科学门槛**。

不妨回顾一下在同一赛道上真正融资数千万美元、并开展了多年临床试验的前辈公司的真实历程：

* **Neurotrack Technologies：** 成立于 2012 年，基于埃默里大学（Emory University）的灵长类与人类记忆研究，旨在商业化一项 5 分钟视觉配对比较（visual paired-comparison）眼动追踪早期阿尔茨海默病测试，累计从 Khosla Ventures 和 Founders Fund 等知名机构融资超过 `$60M`。然而在经历了十余年的临床研究后，数据表明眼动视觉记忆评分缺乏作为独立阿尔茨海默病诊断工具所需的分子特异性，Neurotrack 最终放弃了面向消费者的阿尔茨海默病诊断，转型为面向医疗机构的通用简短数字认知评估套件（B2B）。
* **ViewMind：** 基于近 20 年的眼动与认知神经科学基础研究创立，利用头戴式眼动追踪测量工作记忆任务中的眼部微运动。即便拥有二十年的科研积累，ViewMind 也没有在大学毕业后向 30 岁年轻人兜售未经验证的测试，而是不得不在欧洲、拉丁美洲和美国开展多年的纵向验证队列研究，直接与脑脊液（CSF）和淀粉样蛋白 PET 进行交叉比对。
* **C. Light Technologies 与 RetiSpec：** C. Light 花费数年研发出采用扫描激光检眼镜（SLO）技术的 `10 秒`细胞级分辨率视网膜眼动追踪仪（*Retitrack*），先是仅作为通用生理眼动监测仪获得初步 FDA `510(k)` 许可，同时继续在多发性硬化症（MS）和神经退行性疾病中开展严谨的临床试验。**RetiSpec** 同样耗费多年研发高光谱视网膜相机成像，在与淀粉样蛋白 PET 和脑脊液检测进行了长期直接交叉验证后才获得 FDA“突破性医疗器械（Breakthrough Device）”认定，且至今仍在严格的临床验证方案下运行，而非向消费者做夸大的 VR 营销。

### 为什么 Trevor Klee 关于“生物科技格雷欣法则”的警告至关重要

在经济学中，**格雷欣法则（Gresham's Law）**指出 *“劣币驱逐良币”*。在诊断医学领域，Trevor Klee 指出了完全相同的机制：

* 打造一家真正合规的诊断生物科技公司（如 C2N Diagnostics、Fujirebio 或 RetiSpec），需要投入 **5 到 10 年时间**和 **`$20M` 至 `$100M+` 的研发资金**，开展经 IRB 批准的前瞻性、多中心临床试验，与淀粉样蛋白 PET、脑脊液和血浆 `p-tau217` 进行严格对标，随后接受严苛的 FDA `510(k)`、`De Novo` 或 `PMA` 审评——在此期间，法律严禁公司作出任何未经证实的疗效宣传。
* 相反，一家奉行“快速行动、打破常规（move fast and break things）”的初创公司，却可以拿一个靠 `$7,500` 学生经费 3D 打印、临床数据为零（`N = 0`）的头显附件，从一篇针对已发病老年患者的中国医院论文中复制一张 `AUC = 0.737` 的配图，在网页上贴满 *Nature*、*NEJM* 和 *哈佛医学院* 的 Logo，仅用 12 周时间就向长寿诊所推销所谓的 **“全球最早阿尔茨海默病生物标志物检测”**。

如果监管机构、孵化器和风险投资人奖励第二条捷径——或者把联邦医疗器械法规视为只需一行矛盾的页脚免责声明就能绕过的表面摩擦——那么虚假或未经验证的筛查测试就会在资本、诊所合作和患者信任上全面驱逐真正的严肃临床试验。更糟糕的是，当受试者最终发现 Launch YC 上承诺的“三个风险等级分类”根本不存在（*“我会收到评分吗？现阶段不会”*）时，公众的幻灭感将严重毒害真正阿尔茨海默病预防性临床试验的患者招募。

---

## 8. 综合分析与取证终审裁决：我们的明确判断

### 情境条件推演 (If-Clauses：灰度思维综合)

为了避免非黑即白的二元思维，我们使用明确的条件规则（`If-Clauses`），将眼动神经科学研究本身的科学价值与 Saccade 的商业运作方式严格区分开来：

* **如果 (IF)** Saccade 严格作为一项**经 IRB 批准的学术或临床前科研项目**运行——招募老年人（`60–80 岁`）并同步采集经验证的血浆 `p-tau217` 和淀粉样蛋白 PET 对照数据，依据 `21 CFR Part 50` 签署规范的受试者知情同意书，不做任何商业诊所推销，并透明地说明该研究旨在探索 `200 fps` VR 眼动追踪能否复现固定式 `500–1,000 Hz` 实验室系统的测量精度——**那么 (THEN)** 这将是一个完全合法且有价值的生物医学工程研究项目。
* **进一步而言，如果 (IF)** 眼动指标不是作为面向 30 岁人群的独立“阿尔茨海默病生物标志物检测”，而是作为**针对已确诊 MCI/AD 患者的低成本纵向功能监测工具**（例如，在已通过 `p-tau217` 确诊并接受抗淀粉样蛋白治疗的患者中，追踪其额顶叶执行潜伏期在 12 个月内是否趋于稳定）——**那么 (THEN)** VR 眼动追踪将拥有一个合理且科学上站得住脚的临床细分场景。
* **然而，如果 (HOWEVER, IF)** 一家公司拿着一个**临床验证为零 (`N = 0`)** 的本科毕业设计原型机，向公众和旧金山长寿诊所推销面向 **30 多岁人群**的 **“全球最早阿尔茨海默病生物标志物检测”**，在 Launch YC 上宣称将患者划分为 **三个 ML 风险等级** 以指导 **FDA 批准药物干预**，同时却在受试者 PDF 手册中悄悄承认**根本不存在任何个体评分或年龄参考范围**，并且其所依赖的老年痴呆荟萃分析中 MCI 朝向眼跳潜伏期的效应量完全无效（`SMD = 0.09, p = 0.95`）——**那么 (THEN)** 这种商业部署在科学上是无效的，在统计学上注定会在年轻人群中产生 `>98%` 的假阳性，且直接违反美国联邦医疗器械法（`21 CFR §§ 801.4, 812.7` 及 `21 U.S.C. §§ 331, 351, 352`）。

---

### 取证终审裁决 (The Forensic Verdict: What We Actually Think)

针对 Saccade (`YC F26`) 争议，我们给出毫不含糊的最终判断：

1. **Trevor Klee 与 Will Manidis 在科学事实与法律定性上完全正确：**
   * **科学层面 (Klee)：** 公司引用的一手文献（`Opwonya et al., 2022` 与 `Qi et al., 2024`）**根本无法支撑 Saccade 的产品宣称**。所引荟萃分析中的 35 项研究里，针对症状前 15 年临床前期人群的研究为 `0 项`；朝向眼跳潜伏期完全无法区分 MCI 与健康对照（`p = 0.95`）；即便在已发病 2 年的有症状 AD-MCI 患者中联合 7 项眼动指标，`AUC` 也仅为 `0.737`（敏感度 `62.5%`，特异度 `85.0%`）——若将其用于筛查 30–40 岁人群，将产生灾难性的 **`98%+` 假阳性率 (`PPV < 2%`)**。此外，已获 FDA 批准的血浆 **`p-tau217`**（`AUC 0.94–0.98`，Fujirebio Lumipulse）才是真正经过验证、可提前 15–20 年检出阿尔茨海默病病理的早期生物标志物。
   * **法律层面 (Manidis)：** 任何企业都不能在首页大字营销 *“全球最早的阿尔茨海默病生物标志物检测”* 并招募诊所提供 *“全球最早的阿尔茨海默病筛查”* 的同时，试图躲在页脚 *“仅供研究 / 非诊断设备”* 的小字后面。根据 `21 CFR § 801.4`，首页主标题决定了法定预期用途；而根据 `21 CFR § 812.7(a)` 与 `(d)`，推广未经批准的研究用医疗器械并宣称其有效，属于明确的联邦违法行为。
   * **Launch YC 与患者手册之间的公然矛盾：** 在自己的受试者手册（`saccade-02-your-visit.pdf`）明确写着 *“我会收到评分吗？现阶段不会……个体测量值仍需验证”* 的情况下，在 Launch YC 上向投资人和客户宣称其 *“专有 ML 模型”* 可生成 *“风险评分”* 并将患者 *“划分为三个风险等级之一”*，是无可辩驳的虚假陈述。

2. **Saccade 未来 12 个月概率加权情景预测：**
   * **情景 A —— 悄然删改网站文案与监管退却（`65%` 概率）：** 在 2026年10月舆论风暴后的数日或数周内，Saccade 删去首页 *“World's Earliest Test for Alzheimer's Biomarkers”* 标题，撤下 *NEJM*/*Nature*/*哈佛* Logo 墙，撤回 Launch YC 上关于 *“三个风险等级”* 的宣称，转型为正式注册 IRB 的科研数据采集项目，或退回到 FDA 通用健康政策框架下做普通的 B2B“认知健康 / 脑震荡 / 注意力”眼动追踪工具。
   * **情景 B —— 收到 FDA 器械与放射健康中心 (CDRH) 警告信或 FTC 调查（`25%` 概率）：** 如果 Saccade 在未获得 IDE 或 `510(k)`/`De Novo` 许可的情况下继续在旧金山诊所推广或商业化阿尔茨海默病生物标志物筛查，FDA CDRH 将依据 `21 U.S.C. §§ 351(f)(1)(B), 352(a)/(o)` 及 `21 CFR §§ 801.4, 812.7` 发出公开无标题信函（Untitled Letter）或警告信（Warning Letter）。
   * **情景 C —— 对标血浆 `p-tau217` 开展全面前瞻性临床验证（`10%` 概率）：** Saccade 全面叫停商业筛查，与学术型阿尔茨海默病研究中心（ADRC）合作，在 60–80 岁老年队列中开展为期数年的 IRB 批准临床试验，将其 `200 fps` 附件与血浆 `p-tau217` 及淀粉样蛋白 PET 进行头对头验证，并发表同行评审的设备特异度/敏感度数据。

3. **给患者与临床医生的行动建议：**
   * **如果您是担心早期阿尔茨海默病风险的受试者：** **切勿**在长寿诊所接受未经验证的 VR 眼动追踪测试。如果您出现主观认知下降、有明确的家族史或携带 *APOE* `ε4` 风险基因，希望进行经临床验证的生物标志物评估，请咨询认证神经内科医生，进行 **FDA 批准的血浆 `p-tau217` / `Aβ42/40` 血液检测**（如 `Lumipulse G` 或 `PrecivityAD2`），该检测能以 `>90%` 的准确度直接测量真实的阿尔茨海默病分子病理。
   * **如果您经营长寿诊所或全科诊所：** 部署一款未获批准、未获许可却以“阿尔茨海默病筛查测试”名义营销的设备，不仅会使您的诊所面临 `21 CFR § 812.7` 下的联邦监管责任与假阳性诊断级联引发的医疗纠纷风险，而且当患者发现所谓的“风险评分”和“年龄参考范围”根本不存在时，还将对诊所声誉造成严重反噬。

---

## 一手文献与参考资料 (Primary Sources & References)

1. **Saccade (YC F26) 发布页面与现网档案（2026年10月）：**
   * [Launch YC: Saccade — World's Earliest Test for Alzheimer's Biomarkers](https://www.ycombinator.com/launches/Vff-saccade-world-s-earliest-test-for-alzheimer-s-biomarkers)
   * [Y Combinator 公司档案：Saccade](https://www.ycombinator.com/companies/saccade)
   * [Saccade 官方网站 (`saccade.health`)](https://saccade.health)、[评估说明 (`saccade.health/assessment.html`)](https://saccade.health/assessment.html)、[诊所合作 (`saccade.health/for-clinics`)](https://saccade.health/for-clinics) 及 [服务条款 (`saccade.health/terms.html`)](https://saccade.health/terms.html)
2. **UCSB 机械工程系本科毕业设计一手记录（2026年6月）：**
   * [加州大学圣塔芭芭拉分校工程学院毕业设计项目：Saccade (`Team scME6`)](https://capstone.engineering.ucsb.edu/projects/saccade)
   * [UCSB 本科毕业设计最终展板原件 (`scME6 Saccade Final Poster.pdf`，2026年6月)](https://capstone.engineering.ucsb.edu/sites/default/files/2026-06/scME6%20Saccade%20Final%20Poster.pdf)
3. **同行评审眼动与阿尔茨海默病生物标志物核心文献：**
   * Opwonya, J., Doan, D. N. T., Kim, S. G., et al. (2022). *Saccadic Eye Movement in Mild Cognitive Impairment and Alzheimer's Disease: A Systematic Review and Meta-Analysis.* **Neuropsychology Review**, 32, 193–227. [PMC9090874](https://pmc.ncbi.nlm.nih.gov/articles/PMC9090874/) / [DOI: 10.1007/s11065-021-09495-3](https://doi.org/10.1007/s11065-021-09495-3)
   * Qi, Y., et al. (2024). *Abnormal eye movements: relationship with clinical symptoms and predictive value for Alzheimer's disease.* **Frontiers in Aging Neuroscience**, 16, 1471698. [Full Text](https://www.frontiersin.org/journals/aging-neuroscience/articles/10.3389/fnagi.2024.1471698/full)
   * Jack, C. R., Jr., Andrews, J. S., Beach, T. G., et al. (2024). *Revised criteria for diagnosis and staging of Alzheimer's disease: Alzheimer's Association Workgroup.* **Alzheimer's & Dementia / Nature Medicine**. [PMC11350039](https://pmc.ncbi.nlm.nih.gov/articles/PMC11350039/)
4. **美国联邦医疗器械成文法与监管法规：**
   * [21 U.S.C. § 321(h) —— 医疗器械的法定定义](https://www.law.cornell.edu/uscode/text/21/321)
   * [21 U.S.C. § 331 —— 州际商业中的禁止行为](https://www.law.cornell.edu/uscode/text/21/331)
   * [21 U.S.C. § 351 —— 掺假药品与医疗器械 (Adulterated Devices)](https://www.law.cornell.edu/uscode/text/21/351)
   * [21 U.S.C. § 352 —— 虚假标识药品与医疗器械 (Misbranded Devices)](https://www.law.cornell.edu/uscode/text/21/352)
   * [21 U.S.C. § 360 —— 注册与上市前通知 (`510(k)`)](https://www.law.cornell.edu/uscode/text/21/360)
   * [21 CFR § 801.4 —— 预期用途的含义（客观意图原则）](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-801/subpart-A/section-801.4)
   * [21 CFR § 812.7 —— 禁止推广和商业化研究用医疗器械](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-812/subpart-A/section-812.7)
   * [FDA 指南：低风险设备通用健康政策 (General Wellness Policy)](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/general-wellness-policy-low-risk-devices)
