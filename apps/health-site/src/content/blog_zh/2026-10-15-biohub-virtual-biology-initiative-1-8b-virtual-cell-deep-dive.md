---
title: "18亿美元“虚拟细胞（Virtual Cell）”的海市蜃楼：深度解剖 Biohub 虚拟生物学倡议、沉没成本会计、科技巨头1年独家禁运期，以及为何单细胞 AI 仍败给简单线性回归"
pubDate: 2026-10-15
description: "2026年10月7日，由陈·扎克伯格（Chan Zuckerberg）支持的 Biohub 宣布与美国能源部（DOE）、美国国立卫生研究院（NIH）、Google DeepMind、Isomorphic Labs 及 Meta 展开一项近20亿美元（18亿美元）的国际跨部门合作，旨在为预测和治疗疾病的 AI 模型构建“AI就绪的基础数据”。我们的8阶段法医式深度审计拆解了18亿美元头条新闻背后的账目——揭露了10亿美元的旧账重算与历史沉没成本拼凑、赋予科技巨头出资方长达1年的独家数据禁运特权、Biohub 法律条款中禁止独立基准测试的霸王条款、联邦政府新闻稿中诡异的“超级智能（SI）”篡改，以及《Nature Methods》与《Genome Biology》同行评审基准研究中证明简单线性模型仍全面击败地球上所有单细胞基础模型的残酷真相。"
draft: false
tags: ["biotech", "virtual-cell", "biohub", "deepmind", "single-cell", "perturb-seq", "foundation-models", "deep-research"]
image: "/og-image.png"
lang: "zh"
---

2026年10月7日，由普莉希拉·陈（Priscilla Chan）和马克·扎克伯格（Mark Zuckerberg）创立的生物医学研究机构 **Biohub** 发布了一份重磅新闻稿，瞬间引爆了全球科技界与生命科学界的头条：

> *“国际跨部门合作承诺投入近20亿美元，为预测和治疗疾病的 AI 模型构建基础数据……这些协同努力共计代表约18亿美元（$1.8 billion）的资源，专门用于以前所未有的规模生成和整合生物学数据。其成果将成为研究界的开放资源（open resource），加速构建预测性生物学模型，并为开放科学（open science）树立新标准。”*
> — **[Biohub 官方新闻稿](https://biohub.org/news/virtual-biology-initiative-expansion/)**，2026年10月7日

从字面上看，这一联盟堪称生物医学界的“曼哈顿计划”。以 Biohub 的**[虚拟生物学倡议（Virtual Biology Initiative, VBI）](https://biohub.org/news/virtual-biology-initiative/)**为核心，此次扩展联合了拥有17个国家实验室的**美国能源部（DOE）**、**美国国立卫生研究院（NIH）**、**Google DeepMind**、**Isomorphic Labs**、**Meta** 以及来自英国、加拿大和日本的政府科研部门。其宣称的目标是攻克现代计算生物学最大的瓶颈：生成大规模、标准化、多模态的实验数据集，用于训练能够在计算机中（*in silico*）模拟人类疾病的预测性“虚拟细胞（Virtual Cell）”和虚拟组织基础模型。

然而，当你剥离新闻稿中的溢美之词，对这一声明进行基于一手信源（Primary Source）的法医式审计——交叉核对历史资金账目、联邦政府谅解备忘录（MOU）原文、高管媒体专访、Biohub 网站深处隐藏的法律条款，以及经过同行评审的基准测试文献——一幅截然不同的图景便浮出水面。

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────┐
│           18亿美元虚拟生物学倡议（VBI）：法医式审计计分卡（2026年10月）                            │
├──────────────────────────────────┬─────────────────────────────────────────────────────────────────┤
│ 审计维度（AUDIT DIMENSION）      │ 一手信源实证真相（PRIMARY-SOURCE REALITY）                      │
├──────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
│ 1. “18亿美元”头条金额            │ • $500M (Biohub)：5个月前（2026年4月）已宣布过的旧资金重复计算  │
│    资本结构拆解                  │ • $500M+ (NIH)：零新增资金（明确承认为“既往联邦投资”历史成本）  │
│                                  │ • $500M+ (DOE)：5年分摊的17个国家实验室设备/超算机时实物折算    │
│                                  │ • $300M (DeepMind/Isomorphic/Meta)：唯一的新增私营部门承诺资金  │
├──────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
│ 2. “开放科学新标准”              │ Biohub 科学主管 Alex Rives 向路透社/Axios 承认：商业出资方      │
│    vs. 科技巨头独家特权          │ （Meta、DeepMind、Isomorphic）享有长达1年的独家数据禁运特权。   │
├──────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
│ 3. 法律条款与基准测试禁令        │ Biohub《可接受使用政策》（AUP）明确禁止用户使用其托管服务       │
│                                  │ “评估、基准测试（benchmark）、探测或以其他方式测试模型局限性”。 │
├──────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
│ 4. 联邦政府将“AI”篡改为“SI”      │ DOE 和 NIH 的官方新闻稿系统性地将 Biohub 原文中所有的“AI”和     │
│    修辞异化                      │ “AI-ready”替换为“超级智能（Super Intelligence, SI）”，甚至篡改  │
│                                  │ 了能源部副部长 Darío Gil 的直接引语。                           │
├──────────────────────────────────┼─────────────────────────────────────────────────────────────────┤
│ 5. 基础模型的实证表现            │ Ahlmann-Eltze 等人（Nature Methods, 2025）与 Kedzierska 等人    │
│    （深度学习 vs. 线性基线）     │ （Genome Biology, 2025）证明 scGPT、Geneformer、scFoundation、  │
│                                  │ UCE、GEARS 与 CPA 均无法击败简单的线性回归与加性基线模型。      │
└──────────────────────────────────┴─────────────────────────────────────────────────────────────────┘
```

在本次深度调查中，我们运用布朗与基利（Browne & Keeley）的八阶段批判性思维与法医式审计方法论，全面剖析“虚拟细胞”竞赛背后的财务会计、法律治理、因果物理学以及数学瓶颈。

---

## 第一阶段：议题分类（Issue Classification）与可证伪性标准

在评估任何技术或财务主张之前，我们将调查严格划分为两个独立的分析维度：

1. **描述性议题（实证与数学层面）：** 2026年10月7日宣布的 VBI 扩展是否真的向生物学数据生成注入了18亿美元的净新增资本（net-new capital）？仅靠扩大单细胞与多模态基础模型的参数与数据规模，能否克服导致现有所有“虚拟细胞”模型败给简单线性回归的因果不可识别性（causal non-identifiability）与组合状态空间爆炸？
2. **规范性议题（治理与资本配置层面）：** 公共科研机构（DOE、NIH）与学术联盟是否应当用公共资源补贴这样一种数据生成架构——即允许私营科技巨头（Google DeepMind、Isomorphic Labs、Meta）在学术界研究人员获准接触基础生物学数据集之前，享有长达12个月的独家禁运特权（“先发优势”）？

### 可证伪性标准（Falsifiability Criteria）
为了避免不可证伪的怀疑主义，我们预先设定在未来24至36个月内能够**推翻（证伪）**本报告批判性结论的明确实证门槛：
- **财务证伪标准：** 如果美国国会拨款记录或经审计的慈善机构披露文件证明，NIH 的 5亿美元以上份额并非对现有数据库（`GenBank`、`SRA`、`CFDE`）的历史沉没投资，而是 FY2027–FY2031 期间新批复的湿实验（wet-lab）研究拨款。
- **科学证伪标准：** 如果在盲法、独立管理的基准测试中，基于 VBI 数据集训练的多模态基础模型在预测未见过的原代人类细胞类型（primary human cell types）中的非加性（non-additive）**双基因与三基因联合扰动（perturbation）**时，其 **L₂ 距离误差和皮尔逊增量相关系数（Pearson delta correlation）比岭回归线性基线及简单加性基线（`ŷ_AB = y_A + y_B - y_ctrl`）高出至少 25%**。
- **临床转化证伪标准：** 如果 VBI 虚拟细胞模型的零样本（zero-shot）或主动学习（active learning）预测直接发现了一个全新的临床靶点或先导化合物，并以高于传统表型筛选的成功率推进至人体 II 期（Phase II）临床有效性试验。

---

## 第二阶段：一手信源挖掘、沉没成本会计审计与双栏声明裂痕矩阵

### 1. 一手信源可追溯矩阵（Primary Source Traceability Matrix）

本审计报告中的每一项论断均锚定于截至2026年10月实时验证有效的官方机构声明、联邦政府备忘录、法律条款及同行评审学术论文：

| 信源类别 | 一手文献 / 原始档案 | 发布机构 / 作者 | 提取的核心可验证事实 |
| :--- | :--- | :--- | :--- |
| **核心公告** | [虚拟生物学倡议扩展新闻稿 (2026.10.07)](https://biohub.org/news/virtual-biology-initiative-expansion/) | Biohub (Chan Zuckerberg) | 宣称总计约18亿美元：涵盖 Biohub（$500M）、DOE（$500M+）、NIH（$500M+“既往联邦投资”）及 DeepMind/Isomorphic/Meta（$300M）。 |
| **初始启动公告** | [虚拟生物学倡议首次启动新闻稿 (2026.04.29)](https://biohub.org/news/virtual-biology-initiative/) | Biohub (Chan Zuckerberg) | 证实 Biohub 的5亿美元承诺（未来5年内部投入 $400M + 外部科研资助 $100M）早在5个月前就已宣布。 |
| **联邦备忘录 (DOE)** | [DOE、NIH 与 Biohub 合作官方公告 (2026.10.06)](https://www.energy.gov/science/articles/doe-nih-and-biohub-partner-build-foundational-data-predictive-biological-super) | 美国能源部（DOE 科学办公室） | 将 DOE 的5年 $500M+ 资源分配锚定于第14363号行政命令（*创世纪任务 Genesis Mission*）；将所有“AI”字样改写为“超级智能（SI）”。 |
| **联邦数据中心** | [NCBI](https://www.ncbi.nlm.nih.gov/) 与 [共同基金数据生态系统 (CFDE)](https://info.cfde.cloud/) | 美国国立卫生研究院 (NIH / NLM) | 现有的联邦资助序列与组学存储库，其过往累计超过5亿美元的历史建设成本被计入本次18亿美元头条总额。 |
| **法律治理条款** | [可接受使用政策 (AUP)](https://biohub.org/acceptable-use-policy/) 与 [使用条款 (Terms of Use)](https://biohub.org/terms-of-use/) | Biohub 法务部 | 禁止使用托管服务“评估、基准测试、探测或以其他方式测试”模型局限性；将累计赔偿责任上限设定为 $100。 |
| **高管公开承认** | [路透社 / TNW 报道](https://thenextweb.com/news/biohub-1-8bn-ai-biology-data-meta-google-deepmind) 与 [Pharmaphorum 审计报道](https://pharmaphorum.com/news/biohub-raises-18bn-its-virtual-biology-initiative) | Alex Rives (Biohub 科学主管) | 证实 Meta、Google DeepMind 和 Isomorphic Labs 对其资助的数据集享有**长达1年的独家禁运期（“先发优势”）**。 |
| **虚拟细胞宣言** | [如何用人工智能构建虚拟细胞 (*Cell*, 2024年12月)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12148494/) | Bunne, Roohani, Quake, Regev, Rives, Leskovec 等 | 定义了通用表征（Universal Representations, UR）以及物理、化学和遗传（`PCG`）扰动预测的架构蓝图。 |
| **扰动预测基准审计** | [基于深度学习的基因扰动效应预测尚未超越简单线性基线 (*Nature Methods*, 2025年8月)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12328236/) | Constantin Ahlmann-Eltze, Wolfgang Huber, Simon Anders | 证明 `scGPT`、`scFoundation`、`Geneformer`、`scBERT`、`UCE`、`GEARS` 和 `CPA` 均未能击败简单的线性和加性模型。 |
| **零样本性能审计** | [零样本评估揭示单细胞基础模型的局限性 (*Genome Biology*, 2025)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12007350/) | Kasia Z. Kedzierska, Lorin Crawford, Ava P. Amini, Alex X. Lu | 证明在零样本聚类和批次整合任务上，`scGPT` 和 `Geneformer` 的表现甚至不如直接选取前 2,000 个高变基因（`HVG`）。 |

---

### 2. “18亿美元”头条金额的法医式财务拆解

当谈判桌上真正新增的私营部门承诺只有3亿美元时，如何拼凑出“近20亿美元（18亿美元）”的震撼头条？答案是将**旧闻回收重算（announcement recycling）**、**历史沉没成本计入（sunk-cost accounting）**以及**5年期实物设施折算**捆绑在一起。

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                  “18亿美元（$1.8B）”头条金额的分项资金法医式拆解                                   │
├──────────────────────────┬──────────────┬───────────────┬──────────────────────────────────────────┤
│ 参与方资金份额           │ 头条宣称金额 │ 占 $1.8B 比例 │ 真实资金流与会计实质                     │
├──────────────────────────┼──────────────┼───────────────┼──────────────────────────────────────────┤
│ 1. Biohub (CZI)          │ 5亿美元      │ 27.8%         │ 旧闻重复计算：与2026年4月29日宣布的5亿   │
│    内部支出 + 外部资助   │ （分5年）    │               │ 美元完全相同（$400M 内部设备/算力 +      │
│                          │              │               │ $100M 外部高校拨款，每年仅 $20M）。      │
├──────────────────────────┼──────────────┼───────────────┼──────────────────────────────────────────┤
│ 2. NIH（“生物创世纪      │ 5亿美元以上  │ 27.8%         │ 零新增资本：新闻稿正文明确定义为在现有   │
│    任务”）               │ （历史累计） │               │ NCBI、NLM 和 CFDE 数据库上的“既往联邦    │
│                          │              │               │ 投资（prior federal investment）”。      │
├──────────────────────────┼──────────────┼───────────────┼──────────────────────────────────────────┤
│ 3. 美国能源部（DOE       │ 5亿美元以上  │ 27.8%         │ 实物设施折算：分5年（每年约1亿美元）在17 │
│    “创世纪任务”）        │ （分5年）    │               │ 个国家实验室（JGI、EMSL、光束线、百亿亿  │
│                          │              │               │ 次超算）分配的机时与设施使用价值。       │
├──────────────────────────┼──────────────┼───────────────┼──────────────────────────────────────────┤
│ 4. Google DeepMind、     │ 3亿美元      │ 16.7%         │ 唯一新增私营承诺：三家巨头分5年共出资3亿 │
│    Isomorphic Labs、Meta │ （分5年）    │               │ 美元（每家每年平均仅 $20M），且为现金、  │
│                          │              │               │ 算力额度与专有数据的混合体。             │
└──────────────────────────┴──────────────┴───────────────┴──────────────────────────────────────────┘
```

让我们逐一审视这四大支柱的具体账目：

1. **第一支柱 —— Biohub 的 5亿美元（100% 重复计算2026年4月已宣布资金）：**
   在2026年10月7日扩展公告发布的整整5个月前，Biohub 于 **2026年4月29日** 发布了最初的**[虚拟生物学倡议启动新闻稿](https://biohub.org/news/virtual-biology-initiative/)**。4月的新闻稿宣布了完全相同的 **5年5亿美元承诺**，具体拆分为 **4亿美元** 的 Biohub 内部技术、仪器与计算运营支出，以及 **1亿美元** 的外部多年期学术研究资助（全球所有获批实验室合计每年2,000万美元）。10月7日的公告并未在 Biohub 4月的承诺之上增加一分钱新资金，只是将4月的5亿美元原封不动地装进了18亿美元的新盘子里。
2. **第二支柱 —— NIH 的“5亿美元以上”（100% 历史沉没成本）：**
   请仔细阅读 [Biohub 10月7日新闻稿](https://biohub.org/news/virtual-biology-initiative-expansion/) 第二段的原话：
   > *“美国国立卫生研究院（NIH）正在协调与本倡议方向一致的、通过**超过5亿美元的既往联邦投资（prior federal investment）**开发的相关数据集、存储库和知识库。”*
   
   NIH 并没有为新的基因扰动实验开出一张5亿美元的支票。相反，该声明将**过去多年已经花掉的纳税人历史资金**——即用于建设[美国国家生物技术信息中心（NCBI）](https://www.ncbi.nlm.nih.gov/)、国家医学图书馆（NLM）以及[共同基金数据生态系统（CFDE）](https://info.cfde.cloud/)的历史沉没成本——算作了“18亿美元新承诺”的一部分。在企业财务会计中，如果将往期早已支出的5亿美元历史基础设施沉没成本计入当期“新增资本承诺”，会立即触发美国证券交易委员会（SEC）的财务重述与违规调查。
3. **第三支柱 —— DOE 的“5亿美元以上”（5年期实物科研设施分配）：**
   根据[美国能源部（DOE）2026年10月6日的官方公告](https://www.energy.gov/science/articles/doe-nih-and-biohub-partner-build-foundational-data-predictive-biological-super)，DOE 依据**第14363号行政命令**（《启动创世纪任务》*Launching the Genesis Mission*，2025年11月24日签署）签署了一份不具法律约束力的谅解备忘录（MOU）。这笔在5年内分摊至17个国家实验室的资源（每年约1亿美元，平均每个国家实验室每年约580万美元），主要代表现有 DOE 科学办公室用户设施（User Facilities）的折算价值——包括百亿亿次（Exascale）超级计算机机时、同步辐射X射线与中子光束线、联合基因组研究所（JGI）、环境分子科学实验室（EMSL），以及现有的 DOE 数据架构（`BioDataNexus BRIDGE`、`LAMBDA` 和 `OPAL`）。
4. **第四支柱 —— DeepMind、Isomorphic Labs 与 Meta 的 3亿美元（5年期现金与算力混合投入）：**
   10月7日扩展公告中唯一真正新增的私营部门承诺，是来自 Google DeepMind、Isomorphic Labs（Alphabet 旗下的 AI 制药子公司）和 Meta 的合计 **3亿美元**。由三家科技巨头分摊在5年项目期内，相当于**每家公司每年平均投入2,000万美元（$20M/yr）**——仅占 **Alphabet 和 Meta 年度合计 AI 资本开支（CapEx）的约 0.03%**。即便如此，正如 Biohub 新闻稿自己所承认的，这笔投入*“并非全部是现金；很大一部分价值以数据、计算资源和新测量技术的形式体现”*。

---

### 3. 机构演变背景：CZI 2025–2026年战略重组与 EvolutionaryScale 人才并购（Acqui-Hire）

要理解为何 Biohub 围绕商业科技巨头和联邦超算设施构建 VBI 扩展计划，必须追溯 **陈·扎克伯格倡议（CZI）** 在2024年底至2026年中期的剧烈机构转型：

- **EvolutionaryScale 交易与 Alex Rives 出任科学主管（2025年11月）：** 2025年11月，Biohub 宣布与前沿蛋白质语言模型初创公司 **EvolutionaryScale**（由前 Meta AI `ESM` 核心团队创立）达成战略合作，将 EvolutionaryScale 联合创始人兼首席科学家 **Alex Rives** 招致麾下，出任 Biohub **科学主管（Head of Science）**（[Biohub 新闻稿, 2025年11月](https://biohub.org/news/ai-biology-cure-disease/)）。伴随 Rives 的加盟，Biohub 承诺到 **2028年将其内部计算集群扩展至 10,000 张 GPU 以上**。
- **慈善事业收缩与统一更名为“Biohub”（2026年初）：** 正如 [Pharmaphorum 的深度分析](https://pharmaphorum.com/news/biohub-raises-18bn-its-virtual-biology-initiative)与 [The Next Web 的报道](https://thenextweb.com/news/biohub-1-8bn-ai-biology-data-meta-google-deepmind)所记录的，陈与扎克伯格在2025–2026年间重组了其慈善版图——大幅削减了传统的社会倡导项目（多元化、住房及移民改革倡议），将几乎全部慈善资产集中到统一品牌 **Biohub** 旗下的 AI 驱动生物学研究上。
- **为何5亿美元远远不够：** 训练蛋白质序列模型（`ESM-1b`、`ESM-2`、`ESM3`）几乎不需要新的湿实验支出，因为由纳税人资助的公共数据库（`UniProt`、`蛋白质数据库 PDB`、`MGnify`）早已免费存储了数十亿条进化序列和数十万个晶体结构。然而，从单一蛋白质跨越到**全细胞因果动力学（whole-cell causal dynamics）**，需要生成公共领域根本不存在的天量干预性（interventional）实验数据——这迫使 Biohub 不得不向商业科技巨头的资产负债表和联邦国家实验室求助。

---

### 4. 双栏声明裂痕矩阵：营销叙事 vs. 法律与商业真相

当我们将10月7日公告中的公开营销宣传与高管媒体承认及 Biohub 具有法律约束力的合同条款进行逐条比对时，四道巨大的裂痕清晰可见：

| 审计维度 | 官方公开营销叙事 (Marketing Narrative) | 一手信源法医式真相 (Forensic Reality) |
| :--- | :--- | :--- |
| **1. 数据开放性与获取时间差** | *“其成果将成为研究界的开放资源，加速构建预测性生物学模型，并为开放科学树立新标准。”*（[Biohub 新闻稿](https://biohub.org/news/virtual-biology-initiative-expansion/)） | **科技巨头1年独家禁运特权：** Biohub 科学主管 Alex Rives 在接受路透社和 Axios 采访时（[引自 TNW](https://thenextweb.com/news/biohub-1-8bn-ai-biology-data-meta-google-deepmind)）承认，商业合作伙伴（**Meta、Google DeepMind、Isomorphic Labs**）对其资助的数据集在向学术界开放前享有**长达1年的独家“先发优势（head start）”**：*“我们必须为商业参与者提供参与其中的激励，而禁运期（embargo period）创造了这种激励。”* |
| **2. 独立基准测试与模型审计** | *“虚拟生物学依赖于标准化、可重复的数据集和共享基准（shared benchmarks），以便对模型进行比较、改进和信任。”*（[Biohub 新闻稿](https://biohub.org/news/virtual-biology-initiative-expansion/)） | **合同禁止基准测试条款：** Biohub 具有法律约束力的[《可接受使用政策》（AUP）](https://biohub.org/acceptable-use-policy/)明确禁止用户访问或使用其托管服务*“以评估、基准测试（benchmark）、探测或以其他方式测试服务的行为、局限性或安全保障措施”*。 |
| **3. 遥测查询收割与赔偿责任上限** | 被定位为供外部科学家自由探索细胞模型与数据集的纯粹公益科学公地。 | **查询记录收割与 $100 责任上限：** 根据 Biohub [《使用条款》](https://biohub.org/terms-of-use/)第7.2条，用户授予 Biohub 永久许可，以分析用户的查询和输入内容，从而*“识别数据集或模型覆盖范围中的空白”*并*“确定新数据集、模型或功能的优先级”*。第8条将 Biohub 的累计赔偿责任上限锁定为 **$100.00**，第10条则强制要求放弃集体诉讼并接受 JAMS 个人绑定仲裁。 |
| **4. 联邦措辞篡改（“AI” vs. “SI”）** | Biohub 的新闻稿在全部28个段落中均使用标准科学术语：**“人工智能（AI）”**与**“AI就绪（AI-ready）基础数据”**。 | **联邦政府的“超级智能（SI）”全面替换：** 在同步发布的 [DOE 官方新闻稿](https://www.energy.gov/science/articles/doe-nih-and-biohub-partner-build-foundational-data-predictive-biological-super)与 NIH 新闻稿中，每一个*“AI”*和*“AI-ready”*都被抹去，替换为**“超级智能（Super Intelligence, SI）”**和**“SI-ready”**——甚至连美国能源部负责科学的副部长 **Darío Gil** 的直接引语都被篡改：在 `biohub.org` 上是*“利用人工智能（AI）造福公众”*，而在 `energy.gov` 上则变成了*“推进生物学领域的超级智能（Super Intelligence）代表了关键的一步……”*。 |

> [!WARNING]
> **为何“1年商业禁运期”彻底摧毁了“开放科学”的前提：** 在前沿 AI 与计算药物发现领域，对定制化高维干预数据拥有12个月的独家训练窗口绝非微不足道的行政延迟，而是**整个竞争护城河**。在这365天的禁运期内，与礼来（Eli Lilly）和诺华（Novartis）签有数十亿美元商业制药合作协议的 **Isomorphic Labs**、**Google DeepMind** 以及 **Meta** 可以预训练专有模型权重、筛选治疗靶点、验证活性化合物（hits），并在大学实验室或初创生物技术公司获准下载第一个 FASTQ 原始测序文件的一整年前，抢先提交化合物结构专利与治疗用途临时专利。

---

## 第三阶段：语义精确性、歧义替换测试与生物学 AI 四级成熟度层级

虚拟生物学倡议高度依赖三个语义模糊的核心词汇：**“虚拟细胞（Virtual Cell）”**、**“AI就绪 / SI就绪基础数据”**以及**“疾病预测模型”**。让我们运用布朗与基利的**歧义替换测试（Ambiguity Substitution Test）**——将营销流行语替换为其具体的数学与实验定义，检验核心论点是否依然成立。

### 1. 歧义替换测试（Ambiguity Substitution Test）

- **术语 1：“虚拟细胞（Virtual Cell）”**
  - *营销含义：* 人类细胞的完整计算机数字孪生（*in silico* digital twin），能够精确模拟任何细胞类型在时空维度上对任何基因突变、病原体或药物分子的动态响应。
  - *当前的具体技术实现：* 主要在破坏性、静态的单细胞 RNA 测序（`scRNA-seq`）快照（表达计数矩阵 `X ∈ ℝ^{N × G}`）上训练的高参数 Transformer 自编码器（`scGPT`、`Geneformer`、`TranscriptFormer`、`VariantFormer`），用于插补被掩码的基因词元（masked gene tokens）或将细胞投影到低维潜在嵌入空间。
  - *替换测试结果：* 当你将*“在死后（post-mortem）静态 mRNA 计数表上训练的掩码词元自编码器”*代入*“虚拟细胞将预测和治疗人类疾病”*这一主张时，从观测性 mRNA 相关性到临床药理学的巨大逻辑跳跃便暴露无遗。
- **术语 2：“AI就绪（或 SI就绪）数据”**
  - *营销含义：* 专为超智能推理量身打造的神奇下一代生物学测量数据。
  - *当前的具体技术实现：* 统一预处理后的计数矩阵、标准化的元数据架构（`CELLxGENE` AnnData/TileDB 格式）、一致的批次对照内参（spike-ins）以及统一的本体论标签（`UBERON` 组织 ID、`CL` 细胞类型本体）。
  - *替换测试结果：* 清洗元数据和统一文件格式是至关重要的数据工程，但格式标准化绝不会把静态观测快照变成因果动力学轨迹（causal kinetic trajectories）。
- **术语 3：“研究界的开放资源”**
  - *营销含义：* 媲美人类基因组计划（Human Genome Project）《百慕大原则》（Bermuda Principles，强制要求所有测序数据在生成后 **24小时内** 无条件进入公共领域）的即时、无限制公开访问。
  - *当前的具体技术实现：* 分级访问制度——商业企业赞助商在数据向公众开放前享有 **365天的排他性专有使用权**。

---

### 2. 生物学 AI 模型的四级成熟度层级（4-Tier Maturity Hierarchy）

公众评论与投资界经常将 **AlphaFold2/3** 和 **ESM**（第1级）无可争议的胜利，与全细胞因果模拟（第4级）这一尚未攻克的难题混为一谈。为了评估 [Biohub AI 模型门户网站（biohub.org/ai-models）](https://biohub.org/ai-models/)上现有模型组合的真实水平，我们构建了一个严格的四级成熟度层级：

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                    生物学 AI 模型四级成熟度层级（2026年基准）                                      │
├──────────┬─────────────────────────────┬──────────────────────────┬────────────────────────────────┤
│ 层级     │ 物理域与数学任务            │ 代表性模型               │ 实证验证状态                   │
├──────────┼─────────────────────────────┼──────────────────────────┼────────────────────────────────┤
│ Tier 1   │ 单分子序列 → 静态 3D 结构   │ AlphaFold2/3, ESMFold,   │ 已解决 / 成熟：球状蛋白晶体结构│
│          │ P(Structure | Sequence)     │ ESM3 (98B 参数)          │ 达到原子级精度 (GDT_TS > 90)   │
├──────────┼─────────────────────────────┼──────────────────────────┼────────────────────────────────┤
│ Tier 2   │ 观测性细胞图谱流形与分类学  │ TranscriptFormer (1.12亿 │ 仅具描述性：跨物种映射细胞本体 │
│          │ P(X_mRNA | Tissue, Species) │ 细胞), CELLxGENE, UCE,   │ 分类；零样本聚类败给 2,000 HVG │
│          │                             │ scGPT, Geneformer        │                                │
├──────────┼─────────────────────────────┼──────────────────────────┼────────────────────────────────┤
│ Tier 3   │ 单一背景下的扰动插值        │ GEARS, CPA, Arc STATE,   │ 脆弱的内插（Interpolation）：  │
│          │ P(X_post | X_pre, do(G_i))  │ VariantFormer (1.2B)     │ 在未见双基因敲除上败给简单线性 │
│          │                             │                          │ 与加性基线模型                 │
├──────────┼─────────────────────────────┼──────────────────────────┼────────────────────────────────┤
│ Tier 4   │ 因果多尺度动力学虚拟细胞与  │ VBI 的终极目标 / Bunne 等│ 尚未建成：需要非破坏性纵向追踪 │
│          │ 组织数字孪生                │ (Cell 2024) UR + PCG     │ 数据、空间蛋白质组与代谢流组学 │
│          │ dX/dt = f(X, U, do(I), E)   │                          │                                │
└──────────┴─────────────────────────────┴──────────────────────────┴────────────────────────────────┘
```

请仔细审视目前展示在 [Biohub AI 模型门户](https://biohub.org/ai-models/)上的旗舰模型：
- **[TranscriptFormer](https://github.com/czi-ai/transcriptformer)**（*Science*, 2025/2026）：在跨越 **15.3亿年进化史**的 **12个物种**、**1.12亿个观测细胞**上预训练的自回归生成式 Transformer。它是一个第2级（Tier 2）分类学流形模型——对跨物种细胞类型同源性分析很有帮助，但完全是在静态观测 `scRNA-seq` 快照上训练的。
- **[VariantFormer](https://github.com/czi-ai/variantformer)**：在批量与单细胞数据（`GTEx`、`ENCODE`、`ADNI`、`1000 Genomes`、`IGVF`）上训练的 **12亿参数**分层 Transformer，用于预测个体生殖系 DNA 变异（`vcf`）如何改变组织水平的基因表达（类似于 `eQTL` 映射）。
- **SubCell** 与 **CryoET**：针对静态荧光显微镜图像（`Human Protein Atlas`）和冷冻电子断层扫描（Cryo-ET）体积数据的表征学习模型。

Biohub 迄今发布的模型中没有一个是第4级（Tier 4）因果动力学模拟器。它们全部是在静态快照上运行的 Tier 1–3 表征学习器。

---

## 第四阶段：竞争性原因（Rival Causes）与四向因果审计

为何科技生物（TechBio）高管与 AI 投资者会想当然地认为，向单细胞和多模态数据集砸下18亿美元就能在全细胞层面复制“AlphaFold 时刻”？因为他们外推了一条简单的直接因果链（`更多生物学 Token + 更大的 Transformer → 涌现出因果模拟能力`）。

为了检验这一外推在物理学上是否成立，我们开展了一项**四向因果审计（4-Way Causal Audit）**，对比为何**蛋白质语言模型（PLM）**大获成功，而**单细胞基础模型（scFM）**却撞上了南墙：

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────┐
│        四向因果审计：为何 AlphaFold 大获成功，而单细胞基础模型却撞上南墙                           │
├─────────────────────────┬────────────────────────────────────┬─────────────────────────────────────┤
│ 因果方向                │ 蛋白质折叠（TIER 1）               │ 全细胞动力学（TIER 3 / 4）          │
├─────────────────────────┼────────────────────────────────────┼─────────────────────────────────────┤
│ 1. 直接因果             │ 35亿年的自然选择本身就是一个巨大的 │ 静态 mRNA 计数表缺乏时间导数        │
│    (数据 → 模型)        │ 预先计算好的突变扰动筛选库。       │ (dX/dt)，且遗漏了 >80% 的转录后     │
│                         │                                    │ 因果状态变量。                      │
├─────────────────────────┼────────────────────────────────────┼─────────────────────────────────────┤
│ 2. 反向因果             │ 折叠良好的球状结构域在 PDB 中被过  │ 高通量 Perturb-seq 严重依赖调控回路 │
│    (测量偏差 → 数据)    │ 度结晶表征，结构性推高了基准得分。 │ 已重编程的永生化癌细胞系 (K562 等)。│
├─────────────────────────┼────────────────────────────────────┼─────────────────────────────────────┤
│ 3. 第三变量混杂因素 (Z) │ 热力学自由能极小值（安芬森法则：   │ 未观测到的混杂因素（蛋白质半衰期、  │
│    (Unobserved Z)       │ 1D 序列唯一决定 3D 平衡态折叠）。  │ 磷酸化状态、空间旁分泌信号、代谢流）│
├─────────────────────────┼────────────────────────────────────┼─────────────────────────────────────┤
│ 4. 反馈回路             │ 预测结构加速了冷冻电镜/X射线晶体结 │ 破坏性测序在测量瞬间杀死细胞，切断  │
│    (系统动力学)         │ 构解析，形成结构先验的正反馈循环。 │ 了纵向时间反馈轨迹。                │
└─────────────────────────┴────────────────────────────────────┴─────────────────────────────────────┘
```

### 根本性的物理鸿沟：安芬森法则（Anfinsen's Dogma）vs. 细胞非平稳性（Non-Stationarity）
1. **AlphaFold2 为何奏效（热力学闭合 + 进化作为天然扰动筛选器）：**
   根据**安芬森法则（Anfinsen's Dogma）**，球状蛋白质的一维氨基酸序列包含了在局部吉布斯自由能极小值（`ΔG`）处唯一确定其天然三维平衡结构所需的全部信息。更重要的是，存储在 `UniProt` 中的序列并非被动的观测数据：它们是 **35亿年自然进化诱变实验的幸存者**。当多序列比对（MSA）中的两个氨基酸残基在 10,000 个同源物种中发生协同变异（co-vary）时，物理定律决定了它们在三维空间中几乎必然处于物理接触状态（`< 8 Å`）。AlphaFold2 之所以成功，是因为自然进化已经在体内（*in vivo*）执行了数万亿次基因扰动实验，并把存活下来的标准答案记录在了基因组里。
2. **活细胞为何违背闭合条件（开放的非平衡热力学系统）：**
   一个活的人类细胞是一个开放的、远离平衡态的热力学系统，受至少五个物理层面上相互耦合的随机非线性微分方程支配：
   - **表观基因组与 3D 染色质状态：** 组蛋白修饰、DNA 甲基化以及增强子-启动子环化（`~10⁶` 个调控元件）。
   - **转录组层面（`mRNA`）：** 约 20,000 个蛋白质编码基因以及数以万计的非编码 RNA 和剪接异构体。
   - **蛋白质组与翻译后修饰（PTM）层面：** 在哺乳动物细胞中，由于核糖体翻译控制和泛素-蛋白酶体降解，蛋白质丰度与 mRNA 丰度的相关性仅为 **`r ≈ 0.40 至 0.60`**。更致命的是，核心信号转导级联反应（激酶、磷酸酶、GPCR、变构构象转变）在**毫秒到秒级时间尺度**上运行，期间甚至不需要改变任何一个 mRNA 转录本！
   - **代谢组与生物能量通量：** ATP/ADP 比率、氧化还原状态（`NAD+/NADH`）以及脂质膜动力学。
   - **空间与旁分泌微环境：** 细胞间直接接触（`Notch/Delta`、免疫突触）、细胞外基质（ECM）刚度以及扩散的形态发生素与细胞因子浓度梯度。

当研究人员进行标准的 `scRNA-seq` 时，他们裂解（摧毁）了细胞，仅捕获其约 **10% 至 30% 的多聚腺苷酸化 mRNA 分子**（产生大量的技术性 dropout 零值），并丢弃了细胞 100% 的蛋白质磷酸化状态、空间坐标、代谢通量和未来演化轨迹。指望一个在稀疏 mRNA 计数向量上训练的 Transformer 逆向工程出细胞的因果电路，无异于在用铁锤砸碎一颗 CPU 之前测量一次散热器的平均温度，然后试图凭此还原出 x86 微架构的完整电路图。

---

## 第五阶段：定量与统计审计 —— 现有单细胞基础模型的实证溃败

你无需凭信仰接受上述物理学批判。在过去18个月里，发表在 ***Nature Methods*** 和 ***Genome Biology*** 上的两项里程碑式同行评审基准研究，对所有主流单细胞基础模型和深度学习扰动预测模型进行了严格的、受基线控制的统计审计。它们的研究结果彻底击碎了“在单细胞图谱上扩大 Transformer 参数规模就能涌现出因果理解”的神话。

### 1. Ahlmann-Eltze, Huber, & Anders 审计（*Nature Methods*，2025年8月）

在2025年8月发表于 *Nature Methods* 的论文（*["Deep-learning-based gene perturbation effect prediction does not yet outperform simple linear baselines"](https://pmc.ncbi.nlm.nih.gov/articles/PMC12328236/)*，开源基准测试代码位于 [`github.com/const-ae/linear_perturbation_prediction-Paper`](https://github.com/const-ae/linear_perturbation_prediction-Paper/tree/main/benchmark/src)）中，Constantin Ahlmann-Eltze、Wolfgang Huber 和 Simon Anders 对 **5个著名的单细胞基础模型**和 **2个专门的深度学习扰动架构**进行了全面基准测试：
- **被评估的基础模型：** `scGPT`（3,300万细胞）、`scFoundation`（5,000万细胞，1亿参数）、`Geneformer`（2,740万–3,000万细胞）、`scBERT` 以及 `UCE`（通用细胞嵌入，3,600万细胞）。
- **被评估的专用扰动模型：** `GEARS`（图增强基因激活与抑制模拟器）与 `CPA`（组合扰动自编码器）。
- **测试数据集：** Norman 等人（2019）的 K562 细胞 CRISPRa 双基因扰动数据集（跨越 `19,264` 个基因的 `100` 个单基因扰动 + `124` 个双基因组合扰动），以及 Replogle 等人（2022）的 K562/RPE1 和 Adamson 等人（2016）的单基因 CRISPRi Perturb-seq 筛选数据。

#### 击败所有深度学习模型的两个极简数学基线
为了检验深度神经网络是否真的学到了非线性基因调控逻辑，Ahlmann-Eltze 等人将全部7个模型与两个极其简单的数学基线进行了正面对比：

1. **针对双基因组合扰动（`A + B`）—— 简单加性基线（Additive Baseline）：**
   直接将测量到的两个单基因扰动转录组谱相加，再减去未扰动对照组均值：
   $$\hat{y}_{A+B} = y_A + y_B - y_{\text{ctrl}}$$

2. **针对未见过的单基因扰动 —— 岭回归双线性模型（Ridge-Regularized Bilinear Model）：**
   通过基因嵌入矩阵 `G ∈ ℝ^{G × K}` 和扰动嵌入矩阵 `P ∈ ℝ^{P × K}` 将基因空间投影到前 `K = 10` 个主成分上，并求解闭式岭回归（L₂ 惩罚项 `λ = 0.1`）：
   $$\hat{Y} = G W P^\top + b, \quad \hat{W} = \arg\min_W \| Y_{\text{train}} - (G W P^\top + b) \|_2^2 + \lambda \|W\|_2^2$$

#### 实证测试结果（`PMC12328236`）

| 基准测试任务 | 评估指标 | 最终胜出者 (Winner) | 基础模型（`scGPT`, `scFoundation`, `Geneformer`, `UCE`, `scBERT`）及 `GEARS`/`CPA` 的表现 |
| :--- | :--- | :--- | :--- |
| **1. 双基因组合扰动预测**（Norman 等人，跨越 1,000 个高变基因的 124 个基因对） | 平均 L₂ 预测误差与皮尔逊增量相关系数（`r_Δ`） | **简单加性基线**（`ŷ_{A+B} = y_A + y_B - y_ctrl`） | **每一个深度学习与基础模型的 L₂ 误差都高于简单加法（即准确率更差）。** `CPA` 的表现甚至远差于直接预测未扰动对照组均值。 |
| **2. 非加性上位性（Epistatic）相互作用**（在 5% FDR 下 124,000 个基因对中的 5,035 个真实协同/抑制对） | 协同/上位性偏差预测误差（`Δ_epistasis = y_{A+B} - ŷ_additive`） | **“无变化”基线（`LFC = 0`）** | **7个深度学习模型中没有一个能击败预测“零变化（`LFC = 0`）”。** 深度模型出现了向训练集均值坍缩的严重模式崩溃（mode collapse）——甚至对强效血红蛋白协同效应基因（`HBG2`、`HBZ`）也反复预测 `LFC ≈ 0`。 |
| **3. 未见过的单基因扰动**（Adamson 等人，Replogle K562 & RPE1） | L₂ 误差及真实扰动在前2名预测中的排名 | **训练集均值（`ȳ_train`）与 10维线性岭回归模型** | 没有任何一个深度学习模型能稳定超越**训练集均值**或**10维线性岭回归模型**（后者在笔记本电脑 CPU 上仅需数秒即可完成训练，而深度模型在 GPU 上需训练数天）。 |
| **4. 观测图谱预训练迁移效应** | 将 3,000万+ 细胞嵌入（`Geneformer`, `scGPT`）代入 `P` 能否提升扰动预测？ | **干预性 Perturb-seq 主成分（`P_Perturb-seq`）** | 在 3,000万+ *观测性（observational）*细胞上的预训练嵌入**相比随机矩阵几乎没有任何提升**。只有在*干预性（interventional）* Perturb-seq 数据上直接提取 `P` 才能改善泛化表现。 |

> [!IMPORTANT]
> **请再次精读结果 #4：** Ahlmann-Eltze 等人直接检验了观测性细胞图谱背后的核心假设——他们提取了 `scGPT` 和 `Geneformer`（在约3,000万个观测细胞上预训练）学到的基因嵌入向量，并将其输入扰动预测器。结果发现，这些3,000万细胞基础模型的嵌入向量**表现几乎不比随机高斯矩阵（random Gaussian matrices）更好**；相反，从*干预性* Perturb-seq 数据中提取的简单 PCA 特征却立即提升了泛化能力。观测数据的规模扩张无法替代干预因果性。

---

### 2. Kedzierska, Crawford, Amini, & Lu 审计（*Genome Biology*，2025）

在牛津大学与微软新英格兰研究院学者联合开展的另一项独立研究（*["Zero-shot evaluation reveals limitations of single-cell foundation models"](https://pmc.ncbi.nlm.nih.gov/articles/PMC12007350/)*，*Genome Biology*，2025）中，作者在基础模型宣称最具统治力的场景——**无需任务特定微调的零样本迁移（zero-shot transfer）**——下，跨越5个人类组织数据集（胰腺、血液、骨髓、心脏和肺）对 `scGPT`（3,300万细胞预训练）和 `Geneformer`（2,740万细胞预训练）进行了全面评估。

他们的发现从各个维度证实了 Ahlmann-Eltze 等人的结论：
1. **败给简单的特征选择（`2,000 HVGs`）：** 在零样本细胞类型聚类任务（以综合归一化互信息、调整兰德指数和轮廓系数的 `AvgBIO` 衡量）中，**`scGPT` 和 `Geneformer` 的表现均不如直接从对数归一化表达矩阵中选取前 2,000 个高变基因（`HVG`）**，同样也不如轻量级传统工具（`scVI` 和 `Harmony`）。
2. **观测语料库规模的边际效益递减：** 对比 `scGPT-human`（在 **3,300万** 泛组织人类细胞上预训练）与 `scGPT-blood`（在 **1,030万** 血液/骨髓细胞上预训练），规模大 3.2 倍的泛人类模型在多个基准测试中反而表现出**略微更差的零样本聚类性能**，且未能保持批次校正效果——这证明将数以千万计的异质性观测细胞盲目倾倒进掩码词元目标函数中，不仅不会锐化反而会退化生物学表征。
3. **基因表达重构失败：** 在掩码词元重构评估中，`Geneformer` 表现出极高的预测误差，并且严重依赖**位置偏置（positional bias，即死记硬背管家基因在整个语料库中的默认平均排名顺序）**，而非真正学到了特定背景下的基因调控网络。

---

### 3. 组合爆炸（Combinatorial Explosion）与珀尔因果层级（Pearl's Causal Hierarchy）

为什么构建一个真正的第4级（Tier 4）虚拟细胞在数学上比用互联网文本训练大语言模型（LLM）或折叠单个蛋白质要困难得多？原因在于两条冷酷无情的数学定律：**珀尔因果层级定理**与**组合状态空间爆炸**。

#### 定律 1：跨越珀尔因果层级的不可识别性（Causal Non-Identifiability）
在朱迪亚·珀尔（Judea Pearl）的形式因果层级理论中，统计分布被严格划分为三个层级：
- **第1层（观测关联 —— `P(X)`）：** *“从阿尔茨海默病患者大脑中采集的小胶质细胞的转录组谱是什么？”* 这是观测图谱（`CELLxGENE`、`Tabula Sapiens`、`TranscriptFormer`）所测量的内容。
- **第2层（干预行动 —— `P(X_{t+Δt} | X_t, do(I = i))`）：** *“如果我们在患者来源的小胶质细胞中敲低基因 `A` 并以浓度 `D` 施用药物 `B`，细胞在72小时内将遵循怎样的状态轨迹？”*
- **第3层（反事实推理 —— `P(X_{I=i'} | X_observed, I=i)`）：** *“如果当初我们抑制的是通路 `Y` 而不是通路 `Z`，这位特定患者的肿瘤是否会消退？”*

根据**因果层级定理（Causal Hierarchy Theorem）**，除非你事先已经拥有完整、真实且**不存在任何未观测混杂因素**的有向无环因果图 `G`，否则仅凭第1层观测数据 `P(X)` 在数学上**不可能**唯一识别（identify）出第2层干预分布。由于破坏性的 mRNA 测序将转录后状态变量 `U_t`（蛋白质磷酸化、代谢物浓度、染色质拓扑结构）遗漏在测量之外，边缘转录组分布中充斥着潜在的混杂因素：

$$P(X_{t+\Delta t}^{\text{mRNA}} \mid X_t^{\text{mRNA}}, \text{do}(I)) \neq P(X_{t+\Delta t}^{\text{mRNA}} \mid X_t^{\text{mRNA}}, I)$$

#### 定律 2：组合扰动规模的数学计算
假设我们试图通过在湿实验室中物理执行遗传和化学扰动，用暴力穷举法（brute-force）攻克第2层。让我们计算一下人类基因组（约 `G ≈ 20,000` 个蛋白质编码基因）的干预状态空间大小：

$$N_{\text{single}} = \binom{20,000}{1} = 2.0 \times 10^4 \text{ （单一背景下单基因敲除数）}$$

$$N_{\text{pairs}} = \binom{20,000}{2} = \frac{20,000 \times 19,999}{2} \approx 2.0 \times 10^8 \text{ （单一背景下双基因两两组合数）}$$

$$N_{\text{triplets}} = \binom{20,000}{3} \approx 1.33 \times 10^{12} \text{ （单一背景下三基因组合数）}$$

现在，将这一遗传扰动空间乘以生物学背景维度：
- **细胞类型（`C`）：** 至少 `200` 种主要人类原代细胞类型（外加数千种疾病状态亚表型）。
- **微环境与细胞因子状态（`E`）：** 至少 `20` 种典型信号环境（缺氧、IFN-γ、TNF-α、TGF-β、代谢饥饿等）。
- **时间动力学（`T`）与剂量（`D`）：** 至少 `5` 个时间点（`1h, 6h, 24h, 72h, 168h`）× `4` 种扰动剂量。
- **统计功效（`n`）：** 每个条件至少需要测序 `200` 个单细胞，以克服 `scRNA-seq` 的技术性 dropout 噪声。

即便我们完全放弃三基因相互作用，仅限于在**单一时间点、单一剂量下，跨越区区 50 种人类原代细胞类型测量双基因两两扰动（`2 × 10⁸` 对），且每对仅测 200 个细胞**，所需的数据集规模也是：

$$N_{\text{cells\_required}} = (2 \times 10^8 \text{ pairs}) \times 50 \text{ cell types} \times 200 \text{ cells} = 2.0 \times 10^{12} \text{ Perturb-seq cells（2万亿个细胞）}$$

让我们将 **2万亿（2 Trillion）个干预细胞**与截至2026年全球已宣布的最大规模数据集进行对比：

| 倡议 / 数据集名称 | 总细胞数量 | 测序模态与扰动范围 | 占 50 种细胞双基因扰动空间（`2 × 10¹²` 细胞）的比例 |
| :--- | :--- | :--- | :--- |
| **[CZI 十亿细胞计划 (Billion Cells Project)](https://chanzuckerberg.com/newsroom/billion-cells-project-launches-advance-ai-biology/)** (10x Genomics GEM-X + Ultima UG 100) | `1,000,000,000` (`10⁹`) | 跨越小鼠、斑马鱼和人类细胞系的混合观测图谱 + 靶向 Perturb-seq | `0.05%` |
| **[TranscriptFormer 语料库](https://github.com/czi-ai/transcriptformer)** (Biohub / CZI) | `112,000,000` (`1.12 × 10⁸`) | 跨越 12 个进化物种的观测性 `scRNA-seq` | `0.0056%`（干预数据占比为 0%） |
| **[Arc 研究所虚拟细胞图谱](https://arcinstitute.org/tools/virtualcellatlas)** (`STATE` / `Tahoe-100M`) | `~267,000,000` (`2.67 × 10⁸`) | `1.67亿` 观测细胞 + `1亿` 化学扰动细胞（`50` 个癌细胞系 × `1,100` 种小分子药物） | `0.005%`（仅限永生化癌细胞系） |
| **[Xaira Therapeutics X-Atlas/Orion](https://huggingface.co/datasets/Xaira-Therapeutics/X-Atlas-Orion)**（2025年6月发布） | `8,000,000` (`8 × 10⁶`) | 仅在 **2 个永生化细胞系**（`HCT116` 与 `HEK293T`）中开展的全基因组单基因 Perturb-seq（`FiCS`） | `0.0004%`（仅2个细胞系的单基因敲除） |

即便结合 10x Chromium GEM-X 微流控液滴条形码与 Ultima Genomics UG 100 测序仪，将**每个受扰动单细胞的测序成本降至极低的 $0.02 至 $0.05**，测序 2万亿个 Perturb-seq 细胞**仅湿实验耗材成本就高达 400亿至 1,000亿美元（$40B–$100B）**——这还没考虑大多数人类有丝分裂后（post-mitotic）原代细胞（如成熟的人类大脑皮层神经元或成人心肌细胞）根本无法在培养皿中扩增到全基因组混合 CRISPR 筛选所需的数十亿细胞规模。

---

## 第六阶段：“负面视角（The Negative View）”与 TechBio 坟场审计

在布朗与基利的批判性思维框架中，**负面视角（The Negative View）**要求我们提出两个新闻稿总是刻意回避的尖锐问题：
1. **在这一倡议的治理结构下，谁是输家？**
2. **为什么过去耗资数十亿美元试图将“AI + 高通量细胞数据”工业化的尝试在临床上屡屡惨败？**

### 1. 谁是输家：公共生物学基础设施的不对称私有化
请审视2026年10月7日 VBI 联盟的结构性激励机制：
- **公共与慈善贡献方（通过 DOE 和 NIH 出资的纳税人 + 高校受资助学者）：** 贡献了17个国家实验室用户设施、百亿亿次超级计算机、历史积累的 NCBI/CFDE 存储库以及大学湿实验室的领域专业知识。
- **商业企业贡献方（Google DeepMind、Isomorphic Labs、Meta）：** 每家每年仅贡献约2,000万美元的现金、云算力额度和专有建模技术——作为交换，它们获得了**长达12个月的独家数据禁运特权**（[TNW / 路透社](https://thenextweb.com/news/biohub-1-8bn-ai-biology-data-meta-google-deepmind)）；与此同时，使用 Biohub 托管平台的外部科研人员在合同上被禁止对模型进行基准测试（[Biohub AUP](https://biohub.org/acceptable-use-policy/)），且其搜索查询会被实时监控以指导 Biohub 的内部研发路线图（[《使用条款》第7.2条](https://biohub.org/terms-of-use/)）。
- **结构性输家：** 独立的高校计算生物学家、开源基准测试研究人员，以及处于种子轮/A轮阶段的生物技术初创公司。等到1年禁运期满、大学实验室或初创公司终于获准访问 VBI 数据集时，Isomorphic Labs 和 DeepMind 早已完成了前沿专有模型权重的训练，并锁定了下游治疗靶点的核心知识产权（IP）。

---

### 2. TechBio 坟场审计：为何细胞表型组学（Phenomics）≠ 临床有效性

退一步讲，即便某个基础模型在预测体外（*in vitro*）单细胞转录组或形态学变化时达到了 99% 的准确率，**塑料培养皿中的细胞也绝不等于人类患者**。在过去十年里，生物技术行业向同一个核心论点投入了数十亿美元——即认为高通量自动化细胞扰动数据加上深度学习就能战胜**反摩尔定律（Eroom's Law，即经通胀调整后每投入10亿美元研发资金所获批的新药数量呈指数级下降）**。

让我们检视一下“高通量细胞数据 + AI”论点在真实临床试验中的历史成绩单：

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────┐
│               TECHBIO 坟场与临床折戟审计（2015–2026）                                              │
├──────────────────────────┬───────────────────────────────────┬─────────────────────────────────────┤
│ 公司 / 倡议项目          │ 核心“数据 + AI”论点               │ 实证与临床结果                      │
├──────────────────────────┼───────────────────────────────────┼─────────────────────────────────────┤
│ 1. Recursion             │ PB 级自动化细胞绘画（Cell Painting│ 2024–2026年多次砍掉临床管线；为保存 │
│    Pharmaceuticals       │ ）显微镜图像 + Perturb-seq +      │ 现金流与 Exscientia 合并；迄今为止  │
│    (NASDAQ: RXRX)        │ BioHive 超级计算机                │ 获批上市的 AI 发现新药数量为 0。    │
├──────────────────────────┼───────────────────────────────────┼─────────────────────────────────────┤
│ 2. Exscientia            │ 端到端生成式 AI 药物设计 +        │ 临床受挫后叫停核心临床资产（如      │
│    （被 RXRX 收购）      │ 自动化患者组织表型组学            │ EXS21546）；2024年以全股票交易方式  │
│                          │                                   │ 被吸收合并。                        │
├──────────────────────────┼───────────────────────────────────┼─────────────────────────────────────┤
│ 3. BenevolentAI          │ 大规模生物医学知识图谱 +          │ 旗舰特应性皮炎候选药物（BEN-2293）  │
│                          │ 多组学靶点发现                    │ IIa 期临床有效性失败（2023）；随后  │
│                          │                                   │ 大规模裁员与战略重组。              │
├──────────────────────────┼───────────────────────────────────┼─────────────────────────────────────┤
│ 4. Zymergen              │ 自动化机器人菌株扰动 +            │ 量产放大失败后，估值从超50亿美元崩盘│
│                          │ 机器学习优化                      │ 至2022年以3亿美元贱卖给 Ginkgo。    │
└──────────────────────────┴───────────────────────────────────┴─────────────────────────────────────┘
```

为什么通过了临床前细胞和动物实验的候选药物中，仍有约 **90% 在人体 I–III 期临床试验中失败**？
因为导致临床试验折戟的主要原因**并不是**孤立体外培养皿中的单细胞转录组之谜。药物在人体内失败的真正原因是：
1. **全器官层面的 ADME 与药代动力学（Pharmacokinetics）：** 血脑屏障（BBB）穿透率、肝脏首过清除效应、组织生物分布以及血浆蛋白结合率。
2. **多器官脱靶毒性（Multi-Organ Off-Target Toxicity）：** 肝毒性、心脏毒性（`hERG` 离子通道阻滞）、肾脏清除衰竭，以及跨相互作用器官系统（`肝脏 ↔ 肠道微生物组 ↔ 适应性免疫系统 ↔ 血管系统`）的全身性细胞因子风暴。
3. **人类疾病异质性 vs. 永生化癌细胞系：** 在 `K562`（1970年分离出的具有严重染色体非整倍体的慢性粒细胞白血病细胞系）或 `HEK293T`（永生化胚胎肾细胞系）中敲低一个基因，几乎无法告诉你一个衰老、血管化、纤维化的人类器官在数月慢性给药下会做出何种反应。

---

## 第七阶段：灰度思维（“If-Clauses”）与法医式最终裁决

我们既拒绝不加批判的新闻稿炒作，也拒绝全盘否定的犬儒主义。通过条件性的 **If-从句（If-Clauses）**，我们精确界定虚拟生物学倡议在何种条件下能够取得突破，又在何种条件下会陷入停滞。

### 条件性综合分析（“If-Clauses”）

- **IF（如果）** 虚拟生物学倡议优先推进**闭环主动学习（“实验室在环，lab-in-the-loop”）**——即由机理模型与统计模型的不确定性估计主动挑选下一个在人类原代类器官和空间组织中执行的稀疏多基因组合扰动实验，并配以**非破坏性纵向活体成像**及**靶向单细胞蛋白质组/磷酸化蛋白质组学**——**THEN（那么）** 它将生成真正不可替代的因果基准数据集，推动生物学 AI 从第2级（Tier 2）迈向第3级以上（Tier 3+）。
- **IF（反之，如果）** 该联盟将大部分湿实验预算花在生成**数以亿计额外的静态 `scRNA-seq` 快照**或永生化癌细胞系（`K562`、`RPE1`、`HCT116`）中的单基因敲除上，同时将生成的数据锁在为 Alphabet 和 Meta 设立的 **1年商业禁运期**背后，并在法律上禁止独立研究人员对其托管模型进行基准测试，**THEN（那么）** 这18亿美元的头条新闻最终只会沦为昂贵的企业数据补贴，其训练出的基础模型在分布外（out-of-distribution）生物学任务上仍将继续败给10行代码的岭回归模型。
- **IF（如果）** 计算生物学界希望立即推动学科实质性进步，**THEN（那么）** 未来发表的每一篇单细胞基础模型论文和每一项 VBI 基准测试，在宣称具备“涌现的生物学推理能力”之前，都必须强制报告其与 **Ahlmann-Eltze 加性及岭回归线性基线**（`ŷ_AB = y_A + y_B - y_ctrl` 与 `Ŷ = GWP⊤ + b`）以及 **Kedzierska 2,000-HVG 基线**的正面对比误差指标。

---

### 法医式最终裁决（The Forensic Verdict）：我们的真实判断

让我们抛开一切模棱两可的套话，直截了当地给出核心结论：

1. **“18亿美元”的数字是一场会计剧场（约10亿美元为旧账重算/历史沉没成本，约5亿美元为5年分摊的设施折算，真正新增的私营承诺仅3亿美元）：**
   将 Biohub 早在2026年4月就已宣布的5亿美元承诺，与现有 NIH/NCBI 数据库上 **5亿美元以上的历史联邦沉没支出**以及分5年摊销的 DOE 实验室设施配额（5亿美元以上）拼凑在一起，制造出“18亿美元”的头条，是典型的公关数字注水。2026年10月7日真正新增的私营资本仅有由 Google DeepMind、Isomorphic Labs 和 Meta 在五年内分摊的 **3亿美元**（平均每家科技巨头每年仅约2,000万美元，且大部分为算力额度与实物折算）。
2. **赋予科技巨头1年商业禁运期严重违背了开放科学精神：**
   你不能一边将与公共国家实验室和大学科学家联合开发的数据集赋予地球上最富有的三家商业公司（**Alphabet/DeepMind、Isomorphic Labs 和 Meta**）**长达365天的排他性垄断特权**——同时用《可接受使用政策》禁止独立学者对你的托管模型进行基准测试——一边宣称自己正在*“为开放科学树立新标准”*。不妨将其与1996年人类基因组计划的**《百慕大原则》（Bermuda Principles）**做个对比：后者强制要求所有 DNA 序列在生成后 **24小时内** 无条件进入公共领域，且严禁任何商业禁运期。
3. **观测性单细胞 Transformer 的盲目规模扩张已撞上数学高墙：**
   正如 **Ahlmann-Eltze, Huber, & Anders (*Nature Methods*, 2025)** 与 **Kedzierska, Crawford, Amini, & Lu (*Genome Biology*, 2025)** 所严格证明的那样，现有的单细胞基础模型（`scGPT`、`Geneformer`、`scFoundation`、`UCE`）无法从观测性细胞图谱中学到因果基因调控网络；它们只是记住了共表达相关性，并在未见过的扰动预测任务上全面败给简单的线性模型和加性基线。从相关性跃迁到因果性，需要的是结合机理归纳偏置（mechanistic inductive biases）的**时间分辨、多组学（蛋白质组/磷酸化蛋白质组/空间组学）干预轨迹数据**，而不仅仅是堆砌更大的自回归词元预测器。

#### 概率加权的5年情景展望（2026–2031）

| 演化情景 | 发生概率 | 5年后的实证结果（截至2031年） |
| :--- | :--- | :--- |
| **基准情景（Base Case）：渐进式图谱实用价值与商业制药巨头价值捕获** | **60%** | VBI 生成了有价值的标准化空间组学、冷冻电镜断层扫描（Cryo-ET）和类器官 Perturb-seq 数据集，成为新一代标准参考图谱（`CELLxGENE 2.0`）。Isomorphic Labs 和 DeepMind 在其1年独家禁运窗口期内提取了靶点筛选的主要商业价值。然而，分布外多基因和组织层面的动力学问题仍未解决，混合线性/机理模型继续匹敌或击败庞大的端到端单细胞 Transformer。 |
| **悲观情景（Bear Case）：观测规模扩张陷阱与官僚碎片化** | **25%** | 联邦机构（DOE 的“超级智能”备忘录 vs. NIH 的预算限制）与商业合作伙伴之间的摩擦拖慢了数据标准化进程。大部分湿实验产出退化为高通量但低信息量的静态 `scRNA-seq` 快照。临床转化在曾击垮第一代 TechBio（`Recursion`、`Exscientia`、`BenevolentAI`）的同一道 90% I–III 期 ADME/毒性折戟高墙前停滞不前。 |
| **乐观情景（Bull Case）：主动学习驱动的因果突破（“扰动领域的 AlphaFold”）** | **15%** | 通过将 DOE 的 Cryo-ET/光束线物理测量技术与高通量多模态蛋白质组学及血管化人类类器官中的闭环主动学习相结合，VBI 模型在未见上位性（epistatic）扰动预测上超越线性/加性基线 >25%，并在2031年前直接指导 3 个以上全新多靶点疗法成功进入人体 II 期临床试验。 |

---

## 一手信源与验证链接（Primary Sources & Verification Links）

1. **Biohub (2026.10.07):** [*International, cross-sector collaboration commits nearly $2 billion to build foundational data for AI models to predict and treat disease*](https://biohub.org/news/virtual-biology-initiative-expansion/)
2. **Biohub (2026.04.29):** [*Biohub launches the Virtual Biology Initiative with a $500M commitment*](https://biohub.org/news/virtual-biology-initiative/)
3. **美国能源部 (DOE, 2026.10.06):** [*DOE, NIH, and Biohub Partner to Build Foundational Data for Predictive Biological Super Intelligence*](https://www.energy.gov/science/articles/doe-nih-and-biohub-partner-build-foundational-data-predictive-biological-super)
4. **Biohub 法律条款子页面:** [*Acceptable Use Policy*](https://biohub.org/acceptable-use-policy/)、[*Terms of Use*](https://biohub.org/terms-of-use/) 与 [*Ethics & Governance*](https://biohub.org/ethics/)
5. **Biohub AI 模型组合与 EvolutionaryScale 合作声明:** [*Biohub AI Models Portal*](https://biohub.org/ai-models/)、[*AI + Biology to Cure Disease (2025年11月)*](https://biohub.org/news/ai-biology-cure-disease/)、[*TranscriptFormer GitHub*](https://github.com/czi-ai/transcriptformer) 与 [*VariantFormer GitHub*](https://github.com/czi-ai/variantformer)
6. **关于1年商业禁运期的独立媒体专访:** [*The Next Web / Reuters*](https://thenextweb.com/news/biohub-1-8bn-ai-biology-data-meta-google-deepmind) 与 [*Pharmaphorum*](https://pharmaphorum.com/news/biohub-raises-18bn-its-virtual-biology-initiative)
7. **Bunne, Roohani, Quake, Regev, Rives, Leskovec 等 (*Cell*, 2024年12月):** [*How to build the virtual cell with artificial intelligence: Priorities and opportunities* (`PMC12148494`)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12148494/)
8. **Ahlmann-Eltze, Huber, & Anders (*Nature Methods*, 2025年8月):** [*Deep-learning-based gene perturbation effect prediction does not yet outperform simple linear baselines* (`PMC12328236`)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12328236/) 与 [*基准测试源代码*](https://github.com/const-ae/linear_perturbation_prediction-Paper/tree/main/benchmark/src)
9. **Kedzierska, Crawford, Amini, & Lu (*Genome Biology*, 2025):** [*Zero-shot evaluation reveals limitations of single-cell foundation models* (`PMC12007350`)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12007350/)
10. **生态系统基准与扰动图谱:** [*CZI Billion Cells Project*](https://chanzuckerberg.com/newsroom/billion-cells-project-launches-advance-ai-biology/)、[*Arc Institute Virtual Cell Atlas*](https://arcinstitute.org/tools/virtualcellatlas)、[*Virtual Cell Challenge*](https://virtualcellchallenge.org) 与 [*Xaira Therapeutics X-Atlas/Orion (8M-Cell Perturb-seq)*](https://huggingface.co/datasets/Xaira-Therapeutics/X-Atlas-Orion)
