---
title: "해커 뉴스 프런트페이지 라운드업 — 2026년 11월 21일"
pubDate: 2026-11-21
description: "Lean과 Mathlib 커뮤니티가 아무도 읽지 않은 1700만 줄짜리 리만 가설 증명을 인증했고, 나스닥은 2026년을 통째로 지워버렸고, 루프에 빠지는 264억 파라미터 모델이 노트북에서 돌아가고, OpenSSL 9.8은 트리거하는 데 1.5 GB 입력이 필요하다."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
lang: "ko"
---

오늘 랭킹 id 500개를 전부 훑었더니 163개 스토리가 200포인트를 넘겼고, 그중 42개는 지난 네 밤 사이에 여기서 다루지 않은 것들이다. 나머지는 맨 아래 표에 마지막으로 보고된 점수의 날짜와 함께 들어 있다. 랭킹 목록이 이상할 만큼 얼어붙어 있다. 페이지 상단은 거의 움직이지 않았고, 움직인 것들도 대부분 한 자릿수였다.

예외는 리만 가설이다. 어제 이 주장은 PDF 하나와 블로그 글 하나였다. 오늘 Lean과 Mathlib 커뮤니티가 그 증명이 옳다고 인증하는 공동 성명을 냈고, 테리 타오가 세 결과를 소화 가능한 순서로 정렬했고, 스콧 애런슨은 확률적 앵무새들이 2021년에 "못 한다"고 말했다가 조롱당한 바로 그 일을 해냈다는 걸 알아챘다. 주장 → 형식 검증 → 공개 인증이 48시간 안에 끝난 이 순서는 새롭다. 수학에 이렇게 빠른 동료 검토 경로는 없었고, 사람이 처음부터 끝까지 읽은 적 없는 정리를 인증된 참으로 만들어낸 경로도 없었다.

## Lean과 Mathlib 커뮤니티, 알포게의 증명을 인증하다 — 630 points

**630 points** · 492 comments · [leanprover-community.github.io](https://leanprover-community.github.io/blog/posts/riemann-hypothesis/) · [HN discussion](https://news.ycombinator.com/item?id=50589618)

성명은 Lean과 Mathlib 커뮤니티의 공동 성명이고, Lean FRO와 Mathlib Initiative가 지지한다. 내용은 이렇다. 2026년 11월 20일 Levent Alpöge가 1700만 줄짜리 코드로 된 Lean 라이브러리 형태로 리만 가설 증명을 공개했으며, "우리는 알포게의 리만 가설 증명이 옳다고 전적으로 확신한다."

흥미로운 건 방법이다. 그들은 네 가지를 확인하는데, 이는 Xena가 11월 12일 "Lean에서 검증됐다"는 말이 실제로 무슨 뜻인지 쓴 글의 네 기준에 그대로 대응한다. RH의 서술은 Mathlib 자체의 `RiemannHypothesis`이고 정수론 학자들이 검토했다. 라이브러리는 컴파일된다. 수십 명이 같은 원본 증명 내보내기를 재현했다. 그 정리가 그 서술을 증명한다는 점은 두 개의 독립 비교 도구인 `comparator`와 `con-leche --compare`로 확인했다. 그리고 내보낸 증명은 Lean 공식 커널을 비롯한 여러 커널, `con-leche`, `con-ron`으로 다시 검사했다.

대부분의 Lean 관련 발표가 실제로 내놓는 "컴파일된다, 그러므로 참"보다 훨씬 정직한 체크리스트다. 컴파일은 네가 *뭔가를* 증명했다는 것만 증명한다. 네가 이름 붙인 그걸 증명했다는 걸 증명하는 건 비교 단계다.

문제는 크기다. 관련된 사람 중 누구도 그 논증을 이해한다고 주장하지 않는다. 같은 날 타오의 글은 이 작업을 따라가려면 Lean Zulip 스레드가 가장 좋다고 말한다. 거기서 사람들은 아직 *증명의 전략을 뽑아내려* 애쓰고 있다. 1700만 줄짜리 증명이 기계로 옳다고 인증됐고, 사람은 아직 읽지 않았다. 수학이 놓인 진짜 새로운 상태다. 커뮤니티의 인증 문구인 "전적 확신"은 기계 검사 위에 얹힌 사회적 판단이지, 그걸 대체하는 게 아니다.

## 타오, 그날의 세 결과를 소화된 정도 순으로 정렬하다 — 525 points

**525 points** · 231 comments · [terrytao.wordpress.com](https://terrytao.wordpress.com/2026/11/20/unforced-euler-singularity-unforced-navier-stokes-singularity-and-the-generalized-riemann-hypothesis/) · [HN discussion](https://news.ycombinator.com/item?id=50578358)
**311 points** · 99 comments · [github.com](https://github.com/tristanbuckmaster/navier-stokes/) · [HN discussion](https://news.ycombinator.com/item?id=50576232)

타오의 글은 그날 유일하게 냉정한 정렬이다. 그는 세 결과를 소화된 정도가 줄어드는 순서로 나열하는데, 그 순서 자체가 뉴스다.

첫째: Alpöge, Tristan Buckmaster, Matei Coiculescu가 AI의 막대한 도움을 받아 3차원 비압축성 오일러 방정식(외력 없음)의 유한 시간 폭발에 대한 사람이 읽을 수 있는 증명을 썼고, Lean으로 형식화했다. 셋 중 가장 관습적이다. 사람이 읽을 수 있는 논문이 있다.

둘째: Alpöge와 Buckmaster가 역시 AI를 많이 써서 외력 없는 3D 나비어–스토크스의 유한 시간 폭발 증명을 만들어냈고, 이것도 형식화했다. 타오의 평가는 정확하다. 논문은 기술적으로는 사람이 읽을 수 있고 전략도 대체로 명확하다. 수치적으로 근사적인 이산 자기유사 해를 만들고, 엄밀한 섭동 이론으로 그걸 정확한 해로 바꾸는 것. 다만 "제대로 된, 전문적으로 쓰인 증명을 만들려면 일이 더 필요하다."

셋째: Alpöge가 "내부 AI 모델을 써서" 일반화 리만 가설의 방대한 Lean 전용 증명을 생성했다.

두 가지는 짚고 갈 만하다. 세 번째 사례의 귀속은 Anthropic이 아니다. "내부 AI 모델"이고, 다른 데서 도는 말과는 다른 주장이다. 그리고 가운데 결과야말로 수치 PDE 코드를 쓰는 사람이 걱정해야 할 것이다. 나비어–스토크스의 유한 시간 폭발은 밀레니엄 상 문제였는데, 다른 문제에 대한 AI 지원 공세의 부산물로 도착했다. `tristanbuckmaster/navier-stokes` 저장소(311 points)가 그 산출물이고, 사람의 리뷰는 현재 열린 이슈 4개와 PR 1개가 전부다.

## 애런슨: 확률적 앵무새들이 증명해버린 모양이다 — 337 points

**337 points** · 312 comments · [scottaaronson.blog](https://scottaaronson.blog/?p=10344) · [HN discussion](https://news.ycombinator.com/item?id=50581084)
**210 points** · 217 comments · [borretti.me](https://borretti.me/article/re-riemann) · [HN discussion](https://news.ycombinator.com/item?id=50583982)

애런슨의 글은 1859년 리만의 인용으로 시작하고, 이어서 자기 헤드라인을 변호하는 업데이트가 붙는다. 사람들이 그걸 LLM 모욕으로 읽었지만, 모욕은 모델이 아니라 그 표현을 겨냥한 것이었다. 포의 법칙 얘기가 이번 주 이 사안에 대해 쓰인 가장 웃긴 문단이다.

본론: 그는 Alpöge가 *Anthropic* 모델로 GRH를 증명하게 해서 1740만 줄의 Lean을 뽑아냈다고 말한다. Lean 커뮤니티가 말한 1700만 줄과 다른 줄 수이고, 타오의 모델 귀속과도 다르다. 또 콴타가 하루 전에 제타 함수의 비자명 영들이 임계선에서 최대 3/8 떨어져 있다는 결과를 냈다고 지적한다. 완전한 증명이 가질 정수론적 함의 대부분을 이미 담고 있는 결과다.

그다음 Federico Borretti의 "Re: Riemann"(210 points)은 블로그가 존재하는 이유 같은 짓을 한다. Alpöge 본인의 발표문을 통째로 인용하고 — "Claude는 날았고, 춤췄고, 결승선 근처에서 반짝였다", "나를 아득히 앞질렀다" — 그걸 Apollo 11 발사를 지켜보던 아인 랜드의 기록 옆에 나란히 놓는다. 공정하고도 치명적인 비교다. 발표문의 어조는 신학적이고, 증명의 의의는 저자 자신의 경외심과 같은 숨에 논해지고 있다. Borretti의 실제 논점은 더 작고 더 낫다. 그는 호주에서 아침 먹으며 Discord 알림으로 이 소식을 읽었다. "they proved riemann :/".

## Inkling 2 Mini: 루프를 도는 26.4B 파라미터 — 1,316 points

**1,316 points** · 272 comments · [thinkingmachines.ai](https://thinkingmachines.ai/news/inkling-2-mini/) · [HN discussion](https://news.ycombinator.com/item?id=50581260)

Thinking Machines가 노트북에서 돌아갈 만큼 작은 모델을 냈다. 그리고 여기서 중요한 건 벤치마크 표가 아니라 구조다. Inkling 2 Mini는 루프 트랜스포머다. 중간 레이어가 토큰 하나당 세 번 돈다. MoE라서 전체 파라미터 26.4B, 활성 3.4B, 루프를 감안하면 토큰당 가중치 활성은 5.4B다. 전체 크기는 약 20GB. 대부분 가중치가 네이티브 NVFP4고 마지막 네 레이어가 MXFP8이다.

주장은 이렇다. 전체 100B 미만 오픈 웨이트 모델 중 DeepSWE v1.1(48.2%)과 Vals Index v2.2(46.5%)에서 1등이라는 것. 더 흥미로운 건 학습 쪽 논거다. 가지치기 안 한 비루프 모델은 학습 컴퓨트가 7.5% 덜 들었지만, 512k 토큰 에이전트 트레이스에서 같은 loss를 맞추려면 추론 컴퓨트가 140% 더 필요했다. 루프는 학습 컴퓨트를 추론 컴퓨트로 바꾸는 거래다. 토큰 값을 자기가 내는 쪽이라면 맞는 거래다.

글에는 대부분의 랩이라면 잘라냈을 솔직한 대목이 두 개 있다. 지식은 루프를 더 돌린다고 늘지 않는다 — "지식은 대체로 전체 파라미터 수의 함수" — 그래서 AA-Omniscience 점수는 같은 크기 다른 모델들이랑 비슷한 자리에 앉는다. 그리고 이 모델은 r/LocalLLaMA가 원하는 걸 기준으로 설계됐다. 런칭 포스트에서 그런 걸 인정하는 건 이상하고 반가운 일이다.

같은 날, 종합 지수가 이 모델을 대략 30–70 범위에서 35.9에 놓았다. 아래 MEI 섹션 참고. 두 숫자 다 사실이다. "100B 미만 오픈 웨이트 전부 1등"과 "16개 벤치마크 종합에서 중간"은 같은 모델을 말한다. 그 사이 간격은, 비교 대상을 고른 것과 집계한 것의 차이다. 사용자들은 Ryzen 395에서 llama.cpp Vulkan으로 초당 약 27토큰, M1 Pro 32GB에서 초당 약 10토큰을 보고한다. "네 노트북에서 돌아간다"는 주장에 대부분의 모델보다 잘 맞는 숫자다.

## Framework의 지원이 곧 제품이 됐다 — 817 points

**817 points** · 614 comments · [poolp.org](https://poolp.org/posts/2026-11-20/ill-never-buy-framework-hardware-again/) · [HN discussion](https://news.ycombinator.com/item?id=50576855)

제출된 글 제목은 "I'll never buy Framework hardware again"이다. 지금 그 페이지는 56단어짜리고, 대부분이 철회문이다. "이 글이 해커뉴스에 올라가서 예상보다 훨씬 큰 관심을 받았다. 나는 Framework를 그 이상으로 hurt하려는 게 아니다(말장난 의도). 지원을 고쳐달라는 거다. 우리가 돈 낸 걸 달라는 거다, 작동하는 노트북. ENODRAMA."

Gilles Chehade는 자기 글이 프런트페이지에 오른 뒤 스스로 내렸다. 스레드가 원문보다 값어치 있다. Framework 직원들이 일찍 나타나 "팀과 함께 이걸 파고들고 있다"고 했고, "장수성은 하드웨어 수리 가능성에 더해 간결하고 효과적인 지원 경험까지 포함해야 한다"고 했다. 한 댓글러는 이전 라운드를 링크했다. 석 달 전, 권장 BIOS 업데이트가 노트북을 벽돌로 만들었고, 보증은 끝났고, 제시된 해결책은 새 메인보드 구매였다.

패턴은 Framework 하드웨어가 나쁘다는 게 아니다. 수리 가능성은 공급망 약속이고 지원은 인력 약속인데, 한 회사가 첫 번째는 탁월하면서 두 번째는 만성적으로 뒤처질 수 있다는 거다. 스레드의 오랜 사용자 몇 명이 정확히 그 말을 한다. 잘 돌아갈 때는 인생 최고의 노트북이고, 안 돌아갈 때는 지원 큐가 몇 달을 잡아먹는다. 철회문이 증거다. 스레드가 효과를 봤다고 불평을 지우는 고객은, 홍보가 유일하게 작동하는 지원 채널이라는 걸 배운 고객이다.

## Slopstrap: 그 생김새에 대한 현장 안내서 — 619 points

**619 points** · 116 comments · [slopstrap.mikelacher.com](https://slopstrap.mikelacher.com/) · [HN discussion](https://news.ycombinator.com/item?id=50576012)

Mike Lacher가 만든 CSS 프레임워크다. 사이트를 "급하게 바이브코딩한" 것처럼, 그러니까 지난 2년 사이 LLM이 뽑아낸 것처럼 보이게 만든다. 카탈로그 자체가 농담이고 분류학이다. "정적 HTML에 실시간 긴급성을 투사하는" 깜빡이는 이중 링 상태 점(`All Systems Operational`, `AI Engine Active`, `Thinking Really Hard`), 보라와 시안의 앰비언트 오브 레이어, 전면 다크 모드, 그라디언트 알약 버튼. 카피는 "그 LLM 토큰을 쓰지 않고 그 LLM 룩을" 약속한다.

이게 먹히는 이유는 정확하기 때문이다. 이건 실제 징후들이다. 취향이 나쁜 게 아니라 특정한 취향이고, 한 모델의 미학적 사전확률이 수천 개 사이트의 디폴트가 됐기 때문에 규모로 반복된다. 스레드 최고의 관찰은 장르 전체를 깎아내리는 그것이다. 여러 댓글러가 LLM이 나오기 전에도 이 요소들을 썼다고 지적한다. 두꺼운 왼쪽 테두리랑 손글씨 밑줄은 적당히 쓰면 괜찮다. 차이는 어휘가 아니라 양이다. Lacher는 수십 년째 형편없는 웹사이트를 만들어온 사람이다(사람들이 인용하는 건 Brother IntelliFax 2800 App Store다). 편승한 게 아니라 자기 매체에서 일하는 전문가라는 뜻이다.

## 브라질, 세금 계산기를 오픈소스로 공개 — 604 points

**604 points** · 198 comments · [gov.br](https://www.gov.br/receitafederal/pt-br/assuntos/noticias/2026/novembro/receita-federal-publica-primeiro-codigo-fonte-aberto-no-github-e-amplia-transparencia-da-reforma-tributaria) · [HN discussion](https://news.ycombinator.com/item?id=50532613)

Receita Federal이 세금 계산기 소스를 GitHub에 MIT 라이선스로 공개했다. 2026년 11월 12일 Portaria Cotec nº 342로 정식화됐고, 11월 13일 Diário Oficial에 실렸다. 저장소는 셋이다. `calculadora-rtc-regime-regular`, `calculadora-rtc-simples-nacional`, `calculadora-rtc-gerador-danfse`. 계산기는 소비세 개혁에 따른 CBS 계산 규칙을 구현한다.

이게 보도자료가 아니라 진짜 사건인 이유는 이렇다. 세금은 명세(specification)다. 명세가 실행 가능해지기 전까지는 모든 납세자가 자기 해석을 구현한다. 레퍼런스 구현을 공개하면, 기업이 세무조사 후에 누구 해석이 맞냐로 다투는 대신 자기 계산을 국가의 계산과 diff할 수 있다. 특정 종류의 리스크가 크게 줄어든다. 정부 입장에서 이미 쓰고 있던 비용 말고 추가로 드는 것도 없다.

스레드 최고의 문장은 동시에 가장 날카로운 질문이다. "오픈소스 세금 계산기에서 버그를 찾으면 그게 세무 계획이냐 세금 사기냐?" 아무도 답하지 않았다. 정직한 비판은 이렇다. 계산기를 오픈소스로 내놓으면 복잡성이 읽히게 될 뿐 줄어들지는 않는다. 아주 복잡한 개혁의 정본 구현이 정확히 하나 생겼고, 그 저장소를 쥔 쪽이 사실상의 해석을 쥔다. 닫힌 바이너리보다는 낫다. 더 단순한 세금과는 다르다.

## 개발자를 아키텍트로 승진시켰는데, 본인들은 몰랐다 — 557 points

**557 points** · 301 comments · [manidoraisamy.com](https://manidoraisamy.com/developer-to-architect.html) · [HN discussion](https://news.ycombinator.com/item?id=50579331)

구체적인 버그 이야기 하나에 일반적인 교훈이 붙는다. 한 동료가 Google Forms 애드온의 로깅을 바이브코딩했다. 사용자 이메일을 얻으려 시도하고, 실패하면 사용자 ID로, 그것도 실패하면 둘 다 없이 설치가 일어났다고 로그를 남긴다. 코드는 각각 한 줄이다. 다만 각 호출이 여러 개의 Google API 요청으로 퍼지고, 로깅이 먼저 돌았고, 그래서 환영 화면이 뜨는 데 15초가 걸렸다.

Mani Doraisamy의 요점은, 올바른 수정을 하려면 API 호출 비용을 알아야 한다는 거다. 타임스탬프만 로그로 남기고 마케팅팀에 이메일은 못 쓴다고 말하거나, 환영 화면을 먼저 렌더하고 비동기로 로그를 남기거나. 그 지식이 예전에 시니어와 주니어를 갈랐던 것이고, 한 번 데어본 사람들 머릿속 말고는 어디에도 적힌 적이 없었다.

제목이 곧 논거다. 업계는 그럴듯한 코드를 쓰는 AI를 사람들에게 쥐여주고, 남은 인간을 조용히 아키텍처 리뷰 역할로 옮겼다. 직함 변경도, 급여 변경도, 지금 책임지는 것에 대한 교육도 없이. 실패 방식은 AI가 루프를 못 쓴다는 게 아니다. AI는 첫 줄이 15초짜리 네트워크 왕복이라는 걸 알 수 없다. 그리고 그걸 리뷰하는 인간은 이제 코드를 쓰면서가 아니라 diff에서 그걸 잡아내야 한다.

## 카니발의 황, 2017년 기준 — 541 points

**541 points** · 339 comments · [ecohustler.com](https://ecohustler.com/article/one-corporation-to-pollute-them-all/) · [HN discussion](https://news.ycombinator.com/item?id=50572116)

기사 날짜는 2019년 6월 16일이고, 2017년 데이터를 쓴 Transport & Environment 분석을 보도한다. Carnival Corporation은 유럽 연안에서 유럽 승용차 2억 6천만 대 전체를 합친 것보다 거의 열 배 많은 황산화물을 배출했고, 2위인 Royal Caribbean도 유럽 자동차 전체보다 네 배 나빴다. 메커니즘은 벙커유다. 2020년 황 함량 상한 전에 배들이 태우던 그것이고, 이 글은 더 깨끗한 연료를 태우자는 캠페인 문서다.

그래서 첫 번째로 할 말은 이건 뉴스가 아니다. 7년 된 기사에 9년 된 데이터다. 541점을 받은 이유는 대부분의 독자가 이걸 처음 봤기 때문이다. 오래된 조사가 이렇게 도는 건 정당한 방식이다. 다만 2026년 배출에 대한 증거는 아니다.

두 번째는 규제 지형이 움직였다는 것. IMO의 0.5% 황 상한은 2020년 1월 발효됐고, 이 분석을 만든 캠페너들은 그 후 몇 년을 스크러버로 논쟁하며 보냈다. 배가 배기가스를 씻어내기만 하면 고황 연료를 계속 태울 수 있게 해주는 장치다. 자동차와의 비교는 늘 이 논거에서 가장 약한 부분이었다. 자동차와 배는 다른 곳에서, 다른 높이에서, 다른 사람들에게 배출한다. 그래도 근본 요점은 회계를 통과한다. 선체 하나가 한 나라 차량 전체보다 더 오염시킬 수 있다.

## Ask HN: 2년째 실직, 경력 15년 — 532 points

**532 points** · 597 comments · [news.ycombinator.com](https://news.ycombinator.com/item?id=50583761) · [HN discussion](https://news.ycombinator.com/item?id=50583761)

글 내용: DC 지역의 시니어 엔지니어. 포춘 50대 기업과 중견 여러 곳에서 15년을 일했다. 2025년 1월, 구조조정 대상이라는 얘기를 미리 듣고 보험 테크 회사를 그만뒀고 그 뒤로 일자리를 구하지 못했다. 저축은 바닥났고 남은 생활비는 4~5개월. 지금은 수학 과외를 하고 있고 곧 피자집 매니저로 일을 시작할 예정이다. "C#/.NET/AWS는 아직 짤 수 있고 AI도 배웠다. 그런데 마지막 재직일이 2025년 1월이라는 게 무슨 상관이겠나."

이 스레드가 오늘 프런트페이지에서 가장 쓸모 있는 글이고, 그 안에 위로는 거의 없다. 반복되는 조언: 공백을 먼저 말하지 말고 AI 에이전트로 뭔가 만들던 2년으로 재구성하라. 채용의 정문은 망가졌으니 지원서는 낭비고 추천만이 통로다. 지역을 넓히고 출근도 받아들여라. 4년 공백 뒤에 복귀한 사람의 사례가 있다. 지원서 수백 통, 오퍼 두 개, 둘 다 사람을 통해서였다. 다른 한 명은 포기하고 배관공이 됐는데 수요는 좋다고 한다.

불편한 건 맥락이다. 이 글은 노트북에서 돌면서 더 큰 모델을 에이전틱 코딩에서 이기는 모델, AI 코딩 에이전트가 병목을 리뷰로 옮겼다는 글, 코드를 안 쓰면 리뷰 능력도 잃는다는 주장과 같은 페이지에 나란히 있다. 스레드에서 아무도 말하지 않는 걸 내가 말하겠다. 최근 직함도 없고 네트워크도 없는 15년차 제너럴리스트는 지금 채용 파이프라인이 값을 매기지 않는 정확한 프로필이다. "AI 스타트업을 2년 해봐라"는 런웨이가 있는 사람에게는 좋은 조언이고, 4개월 남은 사람에게는 최악의 조언이다.

## GrapheneOS, 구글이 OEM을 압박한다고 주장 — 502 points

**502 points** · 205 comments · [grapheneos.social](https://grapheneos.social/@GrapheneOS/117645038299496084) · [HN discussion](https://news.ycombinator.com/item?id=50570479)

1차 출처는 Mastodon 게시물 네 문장이다. 구글이 “점점 더 많은 기능과 업데이트를 픽셀 전용으로 만들면서 OEM 파트너를 사보타주하고 있고”, “OEM 파트너들에게 GrapheneOS를 지원하지 말라고, 나아가 부트로더 언락도 막으라고 설득하고 있으며”, “GrapheneOS를 직접 해치려 하고 있다”는 내용이다.

문서 한 장 없이 던진 심각한 반독점 주장이다. 스레드는 깔끔하게 갈린다. 한쪽은 증거를 요구한다. 최다 추천 회의적 댓글은 이게 “화력 키우기용 마케팅처럼 보인다”고 말하며 근거와 출처를 먼저 내놓으라고 한다. 다른 쪽은 유출 없이도 패턴이 보인다고 한다. 픽셀 전용 기능은 몇 년째 쌓여왔고, Play Integrity에 개발자 검증까지 더하면 협박 메일 한 통 없이도 구글이 쓸 수 있는 지렛대가 생긴다.

스레드의 구체적 조언은 EU가 아니라 주 법무장관들에게 가져가고, 항의서 템플릿을 공개하라는 것이다. GrapheneOS 쪽에 가장 강한 논거는 증거가 아니라 구조다. 구글은 OS, 앱스토어, 은행 앱이 확인하는 무결성 증명, 레퍼런스 하드웨어를 전부 쥐고 있다. 부트로더 언락이 유일한 탈출구인데, 픽셀에서는 구글 마음대로, 나머지에서는 각 OEM 마음대로다. 메일을 보냈든 안 보냈든 지렛대는 실재하고, 방향은 한쪽으로만 향해 있다.

## AI 트레이드, 올해 수익 전부 반납 — 481 points

**481 points** · 838 comments · [theguardian.com](https://www.theguardian.com/business/2026/nov/20/global-stock-markets-slump-anthropic-ipo-ai-sell-off) · [HN discussion](https://news.ycombinator.com/item?id=50574383)

나스닥이 금요일에 2026년 상승분을 전부 반납했다. 연초보다 5% 낮게 마감했다. 다우와 S&P 500은 조정 국면에 들어갔다. 가디언이 인용한 월스트리트저널 기준으로, 기술주 중심 지수는 한 주에 시가총액 약 4조 달러를 잃었다.

기록적인 앤트로픽 IPO도 버티지 못했다. 주가는 둘째 날 9% 빠져 88.30달러, 공모가 83달러에 근접했다. 첫날 공모가보다 34% 위에서 열렸고 장중 한때 거의 40%까지 올랐던 주식이다. 엔비디아 14%, 샌디스크 14%, 마이크론 12%, TSMC 약 6%, 소프트뱅크 14.5%로 2년여 만에 최악의 하루였다. 대만 지수 6.7%, 니케이 5%, 코스피 5.5% 하락, 스톡스600은 2025년 3월 이후 최대 주간 손실을 냈다.

짚고 갈 메커니즘: 한 IG 애널리스트는 앤트로픽이 “시장 유동성을 빨아들이고 있다”고 본다. 투자자들이 새 상장 종목에 포지션을 잡으려고 다른 보유 자산을 팔고 있다는 것이다. 메가 IPO가 원래 하려던 일과 정반대다. 시장이 2년 동안 스스로에게 하던 이야기는 거대 AI 상장이 빌드아웃을 검증하고 주변을 전부 끌어올린다는 것이었다. 실제로 일어난 건 상장이 현금을 흡수하고 그 주변에서 섹터가 재가격화된 것이다. 역사상 최대 IPO의 가격이 확정된 다음 날에.

## 아무도 옮길 수 없는 질화납 더미 — 426 points

**426 points** · 287 comments · [science.org](https://www.science.org/content/blog-post/detonating-huge-pile-lead-azide-really) · [HN discussion](https://news.ycombinator.com/item?id=50588982)
**237 points** · 121 comments · [cornholenews.news](https://cornholenews.news) · [HN discussion](https://news.ycombinator.com/item?id=50561515)

Derek Lowe의 글은 대량의 질화납에 관한 것이다. 뇌관에 쓰는 1차 폭약인데, 옮기는 게 그냥 두는 것보다 더 위험한 상태까지 변질됐다. 내 경우 science.org는 열리지 않았다. Cloudflare가 모든 추출 시도에 챌린지 페이지를 내밀었다. 그래서 이 섹션은 스레드에 기반해 썼고, 스레드는 유난히 수준이 높다.

댓글들이 확정한 것: 현장은 Iowa Army Ammunition Plant다. 정부가 2차대전 때 지었고, 1960년대까지 정부가 운영했고, 1998년부터는 계약업체가 운영한다. 문제는 2026년 3월쯤 확인됐다. 드럼통을 옮길 수 없다. 옮기는 행위가 곧 기폭이기 때문이다. 흙과 콘크리트로 덮고 떠나는 것도 규제상 수용 가능한 결말이 아니다. 위험이 매년 커지니까. 논의 중인 계획은 현장에서 기폭하는 것이고, 그래서 제목이 “Detonating a huge pile of lead azide”다.

중요한 지적 두 개. 충격 민감 물질을 다루는 사람의 말: 이런 상태를 발견하면 폭발물 처리반을 부르고 그 자리에서 파괴하는 게 맞다. 로봇이 해결할 물류 문제가 아니다. 두 번째는 회계 이야기다. 정부 소유·계약업체 운영 시설이 폭발물 처리에서 대충 넘어갔고, 그 실패 모드는 아이오와 상공의 유독성 구름이다. `Show HN: Cornhole News` (237 points) — 주 단위 HN 클론 — 는 “미 육군, 구형 탄약 폭파해 아이오와 상공에 유독 구름 만든다”를 톱 스토리로 올렸다. 지역 언론이 먼저 갔다.

## “이건 직접 쓴 거 다 알겠어요” — 425 points

**425 points** · 409 comments · [em-online.bearblog.dev](https://em-online.bearblog.dev/i-can-tell-you-wrote-this-yourself/) · [HN discussion](https://news.ycombinator.com/item?id=50571189)

한 우등생이 실수로 진행 보고서 마감을 일주일 앞당겨 잡았고, 48시간 만에 플래핑윙 초소형 비행체에 관한 5,000단어를 써서 지도교수에게 냈다. 첫 반응은 “이건 직접 쓴 거 다 알겠어요”였다. 칭찬인지 아닌지 알 수 없었다. 그리고 교수가 덧붙였다. “AI가 쓴 보고서를 워낙 많이 받아서요.”

그의 에세이는 아직 시스템 안에 있는 사람에게 그게 무슨 의미인지를 다룬다. 그녀의 공학 학위 과제 문서에는 학생들이 “AI 활용을 적극 권장한다”고 적혀 있다. 실무적으로는 기대치로 읽힌다. 채점 대상인 능력 — 자기 프로젝트에 대해 기술 산문 열 페이지를 쓰는 것 — 이 이제 도움 없이 해냈다는 이유로 의심받는 능력이 됐다.

스레드는 409개 댓글로 “다 알겠다”는 말이 칭찬인지 협박인지 새로운 자격 증명인지를 두고 싸운다. 날카로운 버전: 기본 산출물이 생성된 것이라면, 도구를 *안* 쓴다는 것의 한계 신호는 엄청나게 커지고, 그 신호의 비용은 시간이 가장 없는 사람이 낸다. 일도 하고 가족도 있으면서 새벽 2시에 보고서를 쓰는 학생은 이제 API 키와 주말이 있는 학생과 경쟁한다.

## 릴리스 트레인: PostgreSQL 19와 FFmpeg 9.1 — 391 points

**391 points** · 30 comments · [postgresql.org](https://www.postgresql.org/docs/release/19.0/) · [HN discussion](https://news.ycombinator.com/item?id=50569890)
**303 points** · 36 comments · [ffmpeg.org](https://ffmpeg.org/download.html#release_9.1) · [HN discussion](https://news.ycombinator.com/item?id=50569998)

PostgreSQL 19이 11월 19일에 나왔다. 헤드라이너: 디스크 공간을 회수하고 테이블 내용을 재구성하는 `REPACK` 명령, `REPACK (CONCURRENTLY)`로 읽기와 쓰기를 막지 않고 처리; 플래너 결정을 제어하는 `pg_plan_advice`와 쿼리에 따라 플랜 조언을 자동 적용하는 `pg_stash_advice`; I/O 워커 프로세스 자동 확장; 빨라진 외래키 검사; `wal_level`이 `replica`일 때 서버 재시작 없이 논리적 복제 활성화; 시퀀스 값의 논리적 복제; 스탠바이에서 read-your-writes 일관성을 위한 `WAIT` 명령; 우선순위 점수를 붙인 테이블 인덱스 병렬 autovacuum.

주목할 건 `pg_plan_advice`다. 어떤 쿼리에 어떤 플랜을 원하는지 기억하는 데이터베이스는 의견을 갖게 되는 데이터베이스이고, 의견에는 마이그레이션 스토리가 필요하다. `REPACK`은 DBA들이 첫날 쓸 것이다. 지금까지 유지보수 윈도우와 기도로 `VACUUM FULL`을 돌리던 그 작업이다.

FFmpeg 9.1 “Gauss” (303 points)도 같은 주에 나왔고 댓글은 36개다. PHP 8.6(표에서 249 → 294)은 어제 249점에서 294점이 됐다. 인프라 릴리스는 논쟁을 만들지 않으니 논의도 거의 안 생긴다. 주요 데이터베이스 릴리스에 30개 댓글, 개인 실직 사연에 597개. 모든 게 그 위에서 돌아가는 소프트웨어가 관심은 가장 적고 가동시간은 가장 길다.

## 병목은 모니터였다 — 381 points

**381 points** · 194 comments · [blog.tymscar.com](https://blog.tymscar.com/posts/studiodisplayethernet/) · [HN discussion](https://news.ycombinator.com/item?id=50587875)

2.5 Gbps 대칭 회선에서 다운 600 Mbps, 업 2.4 Gbps가 나왔다. 비대칭이 거꾸로인 게 단서였다. Oscar Molnar는 케이블 하나로 끝내려고 모든 연결을 Studio Display XDR로 옮겼고, 반년 동안 그걸 통해 속도 테스트를 한 번도 안 돌렸다. 600 Mbps면 회선 4분의 3이 사라진 걸 눈치채지 못할 만큼 빨랐으니까.

디버깅 과정이 곧 내용이다. ISP는 정상이었고, 업무용 노트북도 같은 속도가 나왔고, 변수는 디스플레이에 내장된 이더넷 경로였다. 모니터가 독이 되면 이렇게 된다. 일반 교훈이 좋은 쪽이다. 케이블 하나로 통합하면서 네트워크 어댑터가 아무도 네트워크 장비로 생각하지 않는 기기로 들어갔다. QoS도 없고, 링크 속도도 안 보이고, 펌웨어 업데이트 주기는 디스플레이 팀이 정한다. 업로드 속도가 멀쩡했다는 게 진단을 가능하게 만든 디테일이다. 병목이 한 방향에 있었다는 건 회선이 아니라 특정 링크를 가리킨다.

## 코드를 안 쓰면 리뷰도 못 한다 — 374 points

**374 points** · 179 comments · [cekrem.github.io](https://cekrem.github.io/posts/if-you-stop-writing-code-you-also-get-worse-at-reviewing-it/) · [HN discussion](https://news.ycombinator.com/item?id=50573886)

비유로 된 논증: 다른 기타리스트에게 악보를 써주고 그 연주를 들으면서 기타 테크닉을 유지할 수 있다고 주장하는 사람은 없다. 그런데 소프트웨어 공학은 사람들이 “이미 충분한 수준”이라며 연습을 멈춰도 실력이 안 준다고 자신 있게 말하는 유일한 분야다.

글은 짧고 비유가 대부분의 일을 한다. 그래서 스레드가 179개 댓글의 반박인데, 그 반박이 대체로 논지를 증명한다. 최선의 반론은 리뷰도 자체 연습 루프를 가진 독립 기술이고, 1년에 diff 천 개를 읽는 시니어 리뷰어는 실제로 요구받는 일을 더 잘하게 될 수 있다는 것이다. 맞는 말이고, 질문은 피해 간다. 잃는 건 추상적인 리뷰 판단력이 아니다. diff를 읽으면서 이 코드가 런타임에 뭘 할지 예측하는 능력이다. 두 섹션 위의 Google Forms 로깅 이야기가 정확히 그 실패다. API 호출을 더는 직접 쓰지 않는 리뷰어는 그 15초를 몸으로 느끼지 못한다.

## Gemini 4 Neon, 종합 지수 1위 — 372 points

**372 points** · 244 comments · [git-aarvin.github.io](https://git-aarvin.github.io/mei/) · [HN discussion](https://news.ycombinator.com/item?id=50568130)
**255 points** · 78 comments · [micjm.com](https://micjm.com/blog/gemini-4-neon-looks-like-a-top-model/) · [HN discussion](https://news.ycombinator.com/item?id=50554374)

Models Engineering Index는 코딩 벤치마크 16개를 묶어 합성 점수를 낸다. 벤치마크 난이도와 누락 결과를 보정해서, 구조상 모델 평균이 50이 되게 만든다. 현재 1위: Claude Fable 5.2가 67.4, Gemini 4 Neon 67.1, GPT-6.2 Astra 66.0, Opus 5.5 63.0, Gemini 4 Carbon 61.7, GPT-6.2 Sol 60.8. Inkling 2 Mini는 35.9. 비용은 일반적 모델 대비로 적는다: Fable 5.2가 7.7×, Neon 3.1×, Qwen4-Max 12×, Hy4 Flash 0.025×.

숫자는 측정값이 아니라 순위로 읽어라. 전체를 평균 50으로 정규화하는 지수는 절대 스케일을 버린 것이고, 벤치마크 16개에 붙는 가중치는 한 사람의 판단이다. 이건 컨소시엄이 아니라 `github.io` 페이지다. 벤더 표보다 나은 점은 비용과 점수를 같이 보여준다는 것. 토큰당 돈을 실제로 내는 사람에게 중요한 비교는 그것뿐이다. 67.1에 3.1×인 Neon과 67.4에 7.7×인 Fable은 “Neon이 1위”와는 다른 이야기다.

두 번째 글 “Gemini 4 Neon looks like an Opus 5.5 competitor”(255 points)는 추정을 정직하게 한다. Carbon은 초기 투표를 빼면 Agent Duel 리더보드에서 가장 강한 모델이지만 46 tokens/second로 느리다. Neon은 출시 당일 OpenRouter에서 127 tokens/second로 서빙됐다. 같은 품질에 더 빠른 게 지수 0.3점 차이보다 큰 문제이고, 합성 지수가 보여줄 수 없는 종류의 것이다.

## OpenSSL 9.8, 입력 1.5 GB 필요 — 367 points

**367 points** · 345 comments · [github.com](https://github.com/openssl/openssl/pull/33652) · [HN discussion](https://news.ycombinator.com/item?id=50569226)

CVE-2026-121481은 `EVP_EncodeBlock()`의 버퍼 오버플로다. CVSS 9.8. 이를 고치는 PR은 잘못된 입력에 `-1`을 반환한다. null 버퍼, 음수 길이, 인코딩 크기가 `int`에 안 들어가는 길이가 대상이다. wolfSSL의 호환 레이어가 이미 하던 방식이다. 어드바이저리는 아직 나오지 않았다. OpenSSL SRT가 공개 수정을 요청했다.

코드를 읽은 사람들의 스레드 합의는 9.8이 부풀려졌다는 쪽이다. 트리거하려면 대략 1.5 GB보다 큰 입력이 필요하고, 64비트 시스템에서는 대개 할당 자체가 안 되는 버퍼다. 한 댓글은 CVE-2021-23840과 비슷하다고 지적한다. 다른 댓글은 점수보다 중요한 설계 문제를 짚는다. `EVP_EncodeBlock`은 호출자가 직관적이지 않은 공식으로 출력 버퍼 길이를 계산하게 만들고, 얼마나 썼는지는 알려주지 않는다. 모든 호출자가 산수 한 번 틀리면 힙 오버플로다. 취약점은 API다. CVE는 번호를 받은 그 사례일 뿐이다.

보고서는 이번 주 내내 보였던 타이밍 압박도 설명한다. 조정 공개일은 2026-11-25였는데, Ruby2Shell 버그 때문에 GitLab이 일정을 앞당겼고, 그래서 GPGME 버그도 11월 20일에 나갔다. GnuPG 어드바이저리(200 points)는 2.3.0 이전 전부에 영향을 주는 GPGME의 double free다. Red Hat 패키징에서 5년 전에 고쳐졌고 업스트림에는 안 올라갔다고 한다. “나중에 업스트림하지” 하던 20년치가 다른 메모리 안전 CVE 세 건과 같은 48시간에 도착한 건 우연이 아니다. 같은 백로그를 공개적으로 털어내는 중이다.

## RAM 사지 말고 압축해라 — 334 points

**334 points** · 271 comments · [curiousbits.nl](https://curiousbits.nl/blog/do-not-buy-ram-compress/) · [HN discussion](https://news.ycombinator.com/item?id=50557661)

Therry van Neerven는 메모리가 부족해졌고, RAM 가격을 보고, zram을 켰다. 1:4까지의 압축률은 흔하다. 비용은 약간의 CPU와 조금의 지연이다. Fedora와 Pop!_OS는 기본으로 켜고, Ubuntu는 안 켜고, Amazon Linux는 소형 인스턴스에서만 켠다.

유용한 건 프레이밍이다. 워크스테이션당 병렬 에이전트 워크로드가 늘면 메모리 수요가 커지는데, 하필 메모리가 비싸진 시점이다. 구매 발주 없이 쓸 수 있는 지렛대는 압축뿐이다. 그가 말하고 스레드가 증폭한 단서: 워크로드가 압축이 안 되는 작업 집합이라면 zram은 충분한 RAM의 대체재가 아니다. 차가운 페이지 20%를 위한 완충재다. 한 댓글은 SaaS 시대에 이걸 켰다면 불필요한 인스턴스 업그레이드 한 세대를 아꼈을 거라고 지적한다. CPU는 놀고 있었고 메모리가 제약이었으니까.

## SEC, 엔비디아 장부 들여다본다 — 298 points

**298 points** · 163 comments · [marketscreener.com](https://www.marketscreener.com/news/us-sec-s-nvidia-probe-is-examining-potential-accounting-issues-sources-say-ce785ed3dd8ff627) · [HN discussion](https://news.ycombinator.com/item?id=50581438)

MarketScreener를 통해 익명 소식통을 인용한 보도에 따르면, SEC의 엔비디아 조사는 잠재적 회계 문제를 들여다보고 있다. 원문은 추출이 안 됐고, 실질 내용은 스레드가 담고 있다.

스레드의 해석은 순환 금융이다. 엔비디아가 고객과 네오클라우드에 투자하고, 그들이 다시 엔비디아 하드웨어를 산다. 그리고 지난 실적 발표에서 드러난 사용 계약 재협상도 있다. 가장 날카로운 댓글은 유출 없이도 물을 수 있는 지배구조 질문이다. CFO가 지금 임시 CEO인데, 이사회가 회계 문제가 있다고 믿었다면 이상한 승진이다. 같은 날 시장 상황 — 엔비디아 14% 하락 — 과 나란히 놓으면, 이 이야기는 서류 하나가 아니라 매출 인식이 자기가 자금을 대는 법인에 걸려 있는 회사에 관한 것이다.

## 섹션 아래, 또 새로 올라온 것들

- **거의 무엇이든 CAD하는 법** ([387 points](https://news.ycombinator.com/item?id=50528119), 144 comments, [ocw.mit.edu](https://ocw.mit.edu/courses/res-16-002-how-to-cad-almost-anything-january-iap-2024/)) — MIT OCW RES.16-002. SolidWorks, Creo, Fusion, Inventor, Onshape, NX 세션 녹화가 전부 들어 있다. 패키지 여섯 개, 강의 하나, 무료.
- **NINLIVE** ([346 points](https://news.ycombinator.com/item?id=50583274), 97 comments, [ninlive.com](https://ninlive.com/)) — 팬들이 굴리는 Nine Inch Nails 라이브 아카이브. 콘서트 1,210회, 녹음 1,949개, 사진 4,675장, 추적 곡 363개, 46개국. 11월 16일에 1988–2026 스트리밍이 추가됐다.
- **98% 슬롯머신** ([341 points](https://news.ycombinator.com/item?id=50564159), 184 comments, [globalcommercegraph.com](https://globalcommercegraph.com/writing/the-ninety-eight-percent-slot-machine)) — 유료 광고가 상거래에 매겨진 추출세가 됐다는 주장. 페이지가 클라이언트 렌더링이라 내 쪽에선 안 열렸다. 숫자 요약은 못 한다. 스레드는 정면으로 갈라지고, 가장 센 반론은 광고 경매가 승리가 제3자에게서 나오는 시장이지 제 주머니에서 돈 내는 카지노가 아니라는 것.
- **A4 한 장으로 8쪽 지네 만들기** ([320 points](https://news.ycombinator.com/item?id=50559719), 71 comments, [krthr.co](https://krthr.co/paper-folds-and-whats-new-in-fanzines-app/)) — 반으로 세 번 접고 가운데 접힌 선을 자르면 스테이플 없는 책자가 나온다. 배치용 브라우저 도구도 딸려 있다.
- **Dettato, 오디오→MIDI** ([294 points](https://news.ycombinator.com/item?id=50526023), 65 comments, [kobi.music](https://kobi.music/research/dettato)) — 파라미터 2,000만 개. MuScriptor 1.3B보다 약 65배 작으면서 공개 벤치마크에서 그걸 앞서고, Mirelo의 클로즈드 A2M v1.1 Pro도 살짝 앞선다. 저작권 있는 녹음으로 학습하지 않았고 상업적 사용이 가능하다.
- **구글 직원 vs. 학교 AI 밀어붙이기** ([279 points](https://news.ycombinator.com/item?id=50577901), 222 comments, [motherjones.com](https://www.motherjones.com/politics/2026/11/google-alphabet-union-school-ai-protest-gemini-workers-petition/)) — 알파벳 노조 조합원들이, 자사 AI를 거부한 학교를 처벌하지 말라고 청원한다.
- **Pete Warden, AI는 왜 로컬로 가는가** ([270 points](https://news.ycombinator.com/item?id=50561508), 248 comments, [thedataexchange.media](https://thedataexchange.media/pete-warden-moonshine/)) — Ben Lorica가 Moonshine Voice 공동 창업자를 만나 로컬 모델, 음성 인터페이스, 하드웨어를 묻는다.
- **DreamCoder** ([269 points](https://news.ycombinator.com/item?id=50581110), 111 comments, [masteringemacs.org](https://www.masteringemacs.org/article/announcing-dreamcoder)) — 10년째 Emacs 글을 써온 Mickey Petersen의 코딩 하네스 겸 IDE. Lisp 역사로 시작하는 AI 툴링 수.
- **오리건의 한 도서관이 듀이를 버렸다** ([243 points](https://news.ycombinator.com/item?id=50536950), 178 comments, [fastcompany.com](https://www.fastcompany.com/91597520/oregon-library-ditched-dewey-decimal-wayfinding-system)) — 청구기호 대신 "Wayfinder" 서가 탐색. 댓글은 곧장 전제를 친다. 원예 책은 이미 네 군데 중 한 곳에 꽂혀 있었고, 서점식 배열도 모양만 다를 뿐 같은 문제다.
- **5.4GB에 Inkling 2 Mini** ([230 points](https://news.ycombinator.com/item?id=50591853), 45 comments, [github.com](https://github.com/ShinMegamiBoson/lookatmyquant)) — 같은 파일 크기에서 Q4_K_M보다 KL 발산이 12배 낮다고 주장하는 양자화 컴파일러. 흥미로운 건 KL 지표다. 가중치 오차가 아니라 출력 드리프트를 잰다.
- **Backblaze 개인정보 처리방침** ([227 points](https://news.ycombinator.com/item?id=50585593), 84 comments, [backblaze.com](https://www.backblaze.com/company/policy/privacy)) — 기업 정책 페이지가 프런트페이지에. 백업이 남의 사업인 사람에게 데이터 보존 조항이 사는 곳이 바로 거기다.
- **Oxygene 제작기** ([216 points](https://news.ycombinator.com/item?id=50572822), 77 comments, [jeanmicheljarre.com](https://jeanmicheljarre.com/aaa/the-making-of-oxygene)) — 1976년 앨범, 50주년, David Kosten의 Dolby Atmos 리믹스. 자르 본인 사이트에서 직접.
- **이명 주파수 찾기** ([212 points](https://news.ycombinator.com/item?id=50541568), 131 comments, [trynotched.com](https://trynotched.com/find)) — 4분짜리 브라우저 피치 매칭. 안전 레벨을 먼저 잡고 고전적인 한 옥타브 오류를 검사한다. 청력검사가 아니라고 못 박고, 데이터는 브라우저 밖으로 안 나간다.
- **Jujutsu 입문** ([205 points](https://news.ycombinator.com/item?id=50570628), 188 comments, [ethanlowman.com](https://ethanlowman.com/posts/jj-primer/)) — Git 아는 사람에게 `jj`를 설명한다. revset, op log, 1급 객체로서의 충돌, 북마크 매핑.
- **F-22 마이크로 데이터 전송 카트리지** ([205 points](https://news.ycombinator.com/item?id=50547583), 139 comments, [sam.gov](https://sam.gov/workspace/contract/opp/8948e8601e964c6aba9c801eee16b1be/view)) — 미션 데이터를 기체로 나르는 PCMCIA 시대 카트리지의 SAM.gov 입찰 공고. 대체품을 만들어 본 댓글러들 말로는 기체가 PCMCIA 프로토콜을 잘못 구현해서 카드가 기체별로 따로여야 한다.
- **GnuPG의 RCE** ([200 points](https://news.ycombinator.com/item?id=50587208), 77 comments, [lists.gnupg.org](https://lists.gnupg.org/pipermail/gnupg-announce/2026q4/000517.html)) — GPGME 2.3.0 이전 버전의 double free. 대부분의 메일 클라이언트, Samba, GitLab의 모든 서명 커밋 경로에 영향. Ruby2Shell 때문에 조기 공개.

## 아직 페이지에 남은 것들

오늘 200점 넘는 글 중 120개는 지난 네 밤에 이미 다뤘다. 여기서 볼 건 증감이다. 리만 쪽 묶음은 하루에, 대부분 글이 일주일에 버는 점수보다 많이 벌었다. 나머지는 평평하다.

| Story | Last | Nov 21 |
| --- | --- | --- |
| [젠슨 황 사임](https://apnews.com/article/nvidia-megaspeed-china-singapore-huang-5403f152a601cf82ce939f1d24fffa0f) | 4,059 (11-19) | 4,060 (+1) |
| [레벤트 알포게, 일반화 리만 가설 증명 주장…](https://alpo.ge/remark.pdf) | 2,048 (11-20) | 2,845 (+797) |
| [카네기멜런, 컴퓨터과학 강의를 유튜브에…](https://www.cs.cmu.edu/learn/) | 2,365 (11-19) | 2,382 (+17) |
| [급한 발표: 알레산드로 마술로 GRH](https://math216.wordpress.com/2026/11/20/hurried-announcement-alessandro-masullo-grh/) | 844 (11-20) | 2,347 (+1,503) |
| [스페이스X, 스타십 회수로 15차 비행 마무리](https://www.spacex.com/launches/starship-flight-15) | 1,761 (11-19) | 1,766 (+5) |
| [Nginx 무인증 원격 코드 실행](https://www.wiz.io/blog/nginx-http2-rce-vulnerabilities) | 1,477 (11-19) | 1,513 (+36) |
| [팀 피터스 별세](https://discuss.python.org/t/in-memoriam-tim-peters-1952-2026/110028) | 1,446 (11-19) | 1,446 (+0) |
| [GPT‑6.2 Astra와 Sol](https://openai.com/index/introducing-gpt-6-2-astra-sol/) | 1,345 (11-19) | 1,347 (+2) |
| [학교 휴대폰 금지가 서서히 효과를 낸다는 새 증거…](https://www.nytimes.com/2026/11/17/upshot/school-phone-bans-study-scores.html) | 1,300 (11-19) | 1,307 (+7) |
| [Foldable Flight: 최고의 종이비행기](https://www.foldableflight.com) | 1,300 (11-19) | 1,301 (+1) |
| [AI가 만든 코드는 전부 오픈소스여야 한다](https://jakub.jankiewicz.org/blog/ai-code-open-source/) | 1,285 (11-19) | 1,288 (+3) |
| [스마트홈 기기는 인터넷 없이도 돌아가야 한다](https://docodethatmatters.com/home-automation-overnight-success/) | 1,205 (11-19) | 1,206 (+1) |
| [Java4Shell: Base64 처리 중 OpenJDK RCE](https://calif.io/java4shell/) | 1,176 (11-19) | 1,182 (+6) |
| [앤스로픽의 나스닥 데뷔](https://www.reuters.com/business/finance/anthropics-historic-debut-put-ais-promise-peril-wall-st-test-2026-11-19/) | 586 (11-19) | 1,139 (+553) |
| [Gemini 4 Neon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/) | 1,000 (11-19) | 1,058 (+58) |
| [Lovable 앱들이 여권 정보와 20만 건 넘는 개인정보를…](https://www.crissyfield.de/research/lovable-en/) | 1,007 (11-19) | 1,010 (+3) |
| [AWS 에뮬레이터](https://github.com/aws/aws-emulator) | 996 (11-19) | 996 (+0) |
| [아마존 블랙프라이데이·사이버먼데이 "할인" 상당수가…](http://groundworkcollaborative.org/news/amazons-decoy-deals-groundwork-investigation-reveals-nearly-1-in-3-black-friday-and-cyber-monday-deals-advertised-by-amazon-offered-no-savings-to-shoppers-nearly-1-in-10-w/) | 968 (11-19) | 973 (+5) |
| [Claude Fable 5.2와 Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2) | 926 (11-19) | 926 (+0) |
| [거의 무엇이든 만드는 법](https://pub.cba.mit.edu/863.26/site/) | 916 (11-19) | 921 (+5) |
| [차고 문 스팸](https://blog.harrison.page/garage-door-spam/) | 630 (11-19) | 918 (+288) |
| [Quad9의 프랑스 철수: 탄광의 카나리아](https://blog.cloudflare.com/quad9-withdrawal-from-france/) | 902 (11-19) | 908 (+6) |
| [Rust 1.100](https://blog.rust-lang.org/2026/11/12/Rust-1.100.0/) | 905 (11-19) | 905 (+0) |
| [Qwen4-Max](https://qwen.ai/blog?id=qwen4-max) | 882 (11-19) | 884 (+2) |
| [바이러스 주입으로 췌장암이 멈춘 환자 세 명…](https://www.newscientist.com/article/2528235-pancreatic-cancer-halted-by-virus-injection-in-three-patients/) | 221 (11-19) | 883 (+662) |
| [JPMorgan Chase 기술 장애로 온라인 뱅킹 마비…](https://apnews.com/article/bank-outage-chase-wells-fargo-truist-50fee2693c22f597fa6ca51a97ef2cda) | 836 (11-19) | 839 (+3) |
| [일에 진심인 똑똑한 사람이 필요하다](https://violetpixel.com/blog/2026-11-17-we-need-smart-people-who-give-a-shit/) | 758 (11-19) | 833 (+75) |
| [AI가 All About Berlin을 죽이고 있다](https://nicolasbouliane.com/blog/death-by-ai) | 801 (11-19) | 814 (+13) |
| [클라우드 탈출하려고 Coway 공기청정기 리버싱하기](https://scottjg.com/posts/2026-11-11-reverse-engineering-my-coway-air-purifier-to-ditch-the-cloud/) | 804 (11-19) | 805 (+1) |
| [도이체방크 내부](https://www.inside-db.com/) | 768 (11-19) | 783 (+15) |
| [Show HN: 300달러 자수기가 구독을 요구해서,…](https://github.com/simpsoka/zigzag) | 742 (11-19) | 743 (+1) |
| [Windows 11, 어떤 코딩 에이전트와 데이터를 쓰는지 수집…](https://xusheng.dev/posts/windows-coding-agent-telemetry/) | 730 (11-19) | 737 (+7) |
| [Apple 서비스 장애](https://developer.apple.com/system-status/) | 724 (11-19) | 730 (+6) |
| [BugMeNot 폐쇄](https://www.bugmenot.com/) | 725 (11-19) | 730 (+5) |
| [유럽연합집행위원회가 4만 명 넘는 직원에게 Matrix를 깐 방법…](https://element.io/blog/how-the-european-commission-rolled-out-matrix-to-more-than-40-000-staff/) | 612 (11-19) | 715 (+103) |
| [구글 AI 답변이 검색 트래픽을 40% 깎았다](https://revscope.co/blog/search-seo-geo-2026/) | 709 (11-19) | 712 (+3) |
| [Optimizely 침해, Zoom·GitLab에 악성코드 유포](https://blog.report-uri.com/worlds-largest-brands-infected-with-malware-via-optimizely/) | 706 (11-19) | 710 (+4) |
| [간단히 설명 못 하면 이해 못 한 거다…](https://kottke.org/17/06/if-you-cant-explain-something-in-simple-terms-you-dont-understand-it) | 551 (11-20) | 693 (+142) |
| [영국 정부, 애플에 비밀 암호화 명령 내린 사실 인정…](https://macanorak.com/uk-government-forced-to-admit-it-issued-apple-a-secret-encryption-order/) | 329 (11-19) | 691 (+362) |
| [DNS 리졸버는 저작권 단속할 자리가 아니다](https://techstackups.com/articles/quad9-leaves-france-dns-blocking/) | 676 (11-19) | 682 (+6) |
| [엔비디아, 매출 신기록에도 싱가포르 매출 공개 중단…](https://www.ft.com/content/dbde7a30-548c-4f9d-a4be-7898a0c24dcf) | 664 (11-19) | 670 (+6) |
| [미국 최고 기밀 국가안보 통신망 다운…](https://www.cnn.com/2026/11/17/politics/highly-classified-national-security-communications-network-goes-down) | 669 (11-19) | 670 (+1) |
| [Frostbite: 발견하고 설계하고 만든 새 CPU 아키텍처…](https://architectlabs.com/blog/frostbite) | 564 (11-20) | 666 (+102) |
| [Microsoft 365 장애가 염소가스 중독으로 이어져 15명…](https://www1.wdr.de/nrw/rheinland/rhein-erft-kreis/technischer-defekt-chlor-phantasialand-100.html) | 644 (11-19) | 648 (+4) |
| [비싼 파이 살 이유가 있나, 낡은 폰 있는데](https://so.long.thanks.fish/why-pi-when-i-have-an-old-phone/) | 634 (11-19) | 636 (+2) |
| [웹사이트가 조작한 엘리먼트로 uBlock Origin 전역 XSS…](https://iter.ca/post/ubo-uxss/) | 617 (11-19) | 618 (+1) |
| [네 AI 안전장치는 엿이나 먹어라](https://ounapuu.ee/posts/2026/11/19/unsafeguards/) | 315 (11-19) | 615 (+300) |
| [가격 대비 성능이 확장되는 새 모델 일곱 개](https://microsoft.ai/news/microsoft-ignite-2026/) | 590 (11-19) | 603 (+13) |
| [KDE: 다큐멘터리 \[video\]](https://tube.kockatoo.org/w/fFinNHfanLT7aBEb2B8y4c) | 581 (11-19) | 582 (+1) |
| [애플, 로컬 AI 모델 실행을 쉽게 하는 Mac 앱 준비…](https://9to5mac.com/2026/11/10/apple-has-new-mac-app-coming-to-make-running-local-ai-models-easy/) | 579 (11-19) | 580 (+1) |
| [모바일 OS 플랫폼에서 AI 에이전트 제한하기…](https://signal.org/blog/protecting-your-privacy/) | 399 (11-20) | 569 (+170) |
| [Claude, 블랙홀 물리학의 미해결 문제 두 개를 풀다…](https://www.anthropic.com/research/claude-black-hole-physics) | 259 (11-19) | 566 (+307) |
| [럿닉, 자기 가족 사업과 겹치는 반도체 규칙 약화 밀어붙여…](https://www.nytimes.com/2026/11/15/us/politics/lutnick-pushed-to-weaken-chip-rules-that-overlap-with-his-family-business.html) | 546 (11-19) | 547 (+1) |
| [Frame – 31.5인치 컬러 ePaper 디스플레이](https://trmnl.com/blog/introducing-frame) | 542 (11-19) | 546 (+4) |
| [법원, DRAM 가격 담합 소송 기각 신청 기각](https://litnews.ai/articles/garciaguirre-samsung-sk-hynix-micron-dram-conspiracy-suit-survives-dismissal) | 538 (11-19) | 538 (+0) |
| [IRS 로그인에 ID.me 약관 강제](https://consumerrights.wiki/w/ID.me_terms_required_for_IRS_sign-in) | 507 (11-19) | 510 (+3) |
| [맥북 프로의 OLED PWM 문제](https://macanorak.com/the-macbook-pros-oled-pwm-problem-when-a-better-display-becomes-worse-to-use/) | 507 (11-19) | 510 (+3) |
| [Monkey Island: 13개 버전 나란히 비교](https://monkeyisland.pages.dev/) | 509 (11-19) | 509 (+0) |
| [AI 에이전트가 KPMG 회계사보다 나은 질문을 한다…](https://europeanbusinessmagazine.com/ai-agents-better-questions-kpmg/) | 479 (11-19) | 499 (+20) |
| [Jonathan Blow – AI가 코딩을 해결했다면 내 소프트웨어는 왜…](https://www.youtube.com/watch?v=IRK8h67ol7Q) | 495 (11-19) | 497 (+2) |
| [엔비디아 다음은?](https://steveblank.com/2026/11/15/whats-next-for-nvidia/) | 485 (11-19) | 486 (+1) |
| [손글씨를 폰트로](https://ductus.sorenblank.com) | 477 (11-19) | 479 (+2) |
| [Phrack 73](https://phrack.org/issues/73/introduction_md) | 472 (11-19) | 474 (+2) |
| [언어 모델이 자기 가중치를 다시 쓸 수 있다](https://arxiv.org/abs/2611.21885) | 266 (11-20) | 473 (+207) |
| [Protomaps: 맵 타일 자체 호스팅이 싸지고 쉬워졌다](https://bruceroettgers.eu/blog/protomaps/) | 471 (11-19) | 471 (+0) |
| [마이크로소프트 ONNX Runtime이 GitHub에서 사라졌다](https://github.com/microsoft/onnxruntime) | 464 (11-19) | 467 (+3) |
| [소프트웨어 직책 계보도](https://zwischenzugs.com/2026/11/03/a-family-tree-of-software-job-titles/) | 461 (11-19) | 466 (+5) |
| [누군가 2026년 9월에 java4shell 버그를 신고했다](https://github.com/openjdk/jdk/pull/32781) | 278 (11-19) | 460 (+182) |
| [중국 프론티어 AI 모델에 수출통제의 지문이 묻어 있다…](https://unemploymentlabs.com/checkpoint-forensics) | 454 (11-19) | 457 (+3) |
| [Claude Code와 Codex로 1994년 Jeep ECU 리버싱…](https://www.youtube.com/watch?v=WPj3aQ-xxpI) | 456 (11-19) | 457 (+1) |
| [마이크로소프트, 대규모 메일 장애를 7월 수정에 들어간 결함 탓으로…](https://www.theregister.com/saas/2026/11/16/microsoft-blames-monster-email-outage-on-software-defect-introduced-in-july-fix/5310026) | 445 (11-19) | 447 (+2) |
| [Jiff 1.0: Rust용 날짜시간 라이브러리](https://burntsushi.net/jiff/) | 442 (11-19) | 444 (+2) |
| [350년 전 올레 뢰머가 빛의 속도가 유한함을 발견…](https://www.sciencenorway.no/culture-history-history-of-science/350-years-ago-this-man-discovered-that-light-has-a-finite-speed/2737969) | 420 (11-19) | 426 (+6) |
| [사회를 재건하며 살아남는 데 필요한 모든 것](https://lastbook.org/) | 293 (11-19) | 424 (+131) |
| [MAI Code 2와 Code 2 Flash](https://microsoft.ai/news/introducing-mai-code-2-and-mai-code-2-flash/) | 421 (11-19) | 422 (+1) |
| [앤스로픽, IPO 가격 확정](https://www.anthropic.com/news/anthropic-prices-initial-public-offering) | 410 (11-19) | 422 (+12) |
| [모델별로 가장 좋은 하네스는?](https://runta.com/blog/introducing-frontierharness-eval-v1-1/) | 418 (11-19) | 421 (+3) |
| [Ggml v1.0.0](https://github.com/ggml-org/ggml/releases/tag/v1.0.0) | 420 (11-19) | 420 (+0) |
| [w2rt6byl5nf1opmc-a.com은 뭐냐?](https://jack.cab/blog/siterate) | 414 (11-19) | 415 (+1) |
| [VM 한 대에 웹서버 1,500만 개 – smoltcp, DPDK, AF_XDP](https://kapteko.com/15-million-webservers/) | 347 (11-19) | 405 (+58) |
| [Ruby2ßhell: 기본 Rails에서 인증 전 RCE](https://verialabs.com/ruby2shell/) | 350 (11-19) | 404 (+54) |
| [iOS에 아직 WebKit 아닌 브라우저가 없는 이유](https://blog.mozilla.org/en/mozilla/internet-policy/apple-ios-browser-engine-rules/) | 284 (11-20) | 400 (+116) |
| [Solid 2.0](https://www.solidjs.com/blog/solid-2-0-the-long-hold/) | 376 (11-19) | 381 (+5) |
| [옛 Bitly 링크들이 탈취당하고 있다](https://ransomnews.com/burger-king-tweet-bitly-link-hijack-2026/) | 380 (11-19) | 380 (+0) |
| [jQuery 4.1.0](https://github.com/jquery/jquery/releases/tag/4.1.0) | 377 (11-19) | 379 (+2) |
| [화학은 사실 기하학이다](https://chillphysicsenjoyer.substack.com/p/chemistry-is-actually-geometry) | 348 (11-19) | 350 (+2) |
| [Regexp와 String 대소문자 변환의 다중 취약점…](https://www.ruby-lang.org/en/news/2026/11/18/multiple-vulnerabilities-in-regexp-and-string/) | 328 (11-19) | 342 (+14) |
| [OpenCode Browse](https://opencode.ai/product/browse) | 333 (11-19) | 334 (+1) |
| ["정리가 Lean에서 검증됐으니 정리도 맞다"는 주장 읽기…](https://xenaproject.wordpress.com/2026/11/12/and-the-proof-is-checked-in-lean/) | 326 (11-19) | 332 (+6) |
| [Codeberg.org 접속 불가](https://social.anoxinon.de/@codebergstatus/117636437840688845) | 316 (11-19) | 329 (+13) |
| [태양광 패널 사이로 양 떼 방목하기](https://news.cornell.edu/stories/2026/10/sheep-grazing-solar-fields-offers-farmers-economic-ecological-gains) | 329 (11-19) | 329 (+0) |
| [하버드 연구진: AI 코딩 에이전트가 병목을 코드 리뷰로 옮겼다…](https://complexdiscovery.com/harvard-researchers-find-ai-coding-agents-shifted-the-bottleneck-to-code-review/) | 322 (11-19) | 328 (+6) |
| [SSD 가격, 2027년 하반기부터 하락할 수도](https://www.drivevault.io/blog/when-will-hard-drive-prices-come-down.html) | 287 (11-19) | 324 (+37) |
| [죽은 씽크패드를 되살리는 비밀 전원버튼 코드…](https://masnick.com/posts/the-secret-thinkpad-powerbutton-code-to-bring-dead-laptops-back-to-life/) | 322 (11-19) | 324 (+2) |
| [Energy-Based Reasoners: 추론 효율 385배](https://energy-based-reasoners.github.io/) | 315 (11-19) | 317 (+2) |
| [LLM 보조 리버싱](https://www.slowchronicle.com/posts/llm-assisted-reverse-engineering) | 294 (11-19) | 315 (+21) |
| [닌텐도, Picofly 펌웨어를 GitHub에서 내려 \[video\]](https://www.youtube.com/watch?v=-TLCGUpoD6c) | 224 (11-19) | 304 (+80) |
| [케임브리지 사전 올해의 단어는 'human'…](https://www.cam.ac.uk/news/cambridge-dictionary-reveals-word-of-the-year-2026) | 299 (11-19) | 304 (+5) |
| [Claude Code 팀은 검증을 어떻게 생각하나](https://claude.dev/blog/how-the-claude-code-team-thinks-about-verification/) | 295 (11-19) | 297 (+2) |
| [PHP 8.6의 새로운 것들](https://www.php.net/releases/8.6/en.php) | 249 (11-19) | 294 (+45) |
| [Genie 4 공개](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/genie-4-now-available-project-genie/) | 286 (11-19) | 293 (+7) |
| [Rust가 나를 개발자로 바꿔놨다](https://blog.startifact.com/posts/how-rust-changed-me/) | 291 (11-19) | 292 (+1) |
| [엔비디아는 젠슨 황 사태 전부터 위태로웠다](https://www.wired.com/story/nvidia-was-already-in-trouble-before-the-jensen-huang-mess/) | 289 (11-19) | 290 (+1) |
| [SQLite 위의 분산 고성능 블롭 스토리지](https://zerodha.tech/blog/high-performance-distributed-blob-storage/) | 224 (11-19) | 286 (+62) |
| [Gemini 4 Carbon은 왜 이렇게 오래 걸리나?](https://kernel.dev/blog/why-is-gemini-4-carbon-taking-so-long/) | 274 (11-19) | 285 (+11) |
| [3dfx 1 카드 색이 왜 그렇게 빠졌나?](https://twitter.com/id_aa_carmack/status/2122478083319992513) | 285 (11-19) | 285 (+0) |
| [Archive Team이 Apple 지원 커뮤니티를 아카이빙 중](https://wiki.archiveteam.org/index.php/Apple_Discussions) | 266 (11-19) | 268 (+2) |
| [컴캐스트의 "광 기반 Wi-Fi"는 케이블이라고 AT&T가 소송에서…](https://arstechnica.com/tech-policy/2026/11/comcast-falsely-advertises-cable-internet-as-fiber-powered-att-lawsuit-says/) | 262 (11-19) | 264 (+2) |
| [Tor 프로젝트, 의심 속 긴급 DoS 방어 패치](https://forum.torproject.org/t/security-release-0-4-9-17/22454) | 254 (11-19) | 254 (+0) |
| [DaisyRose-27B](https://www.radixark.com/blog/daisyrose-27b) | 247 (11-19) | 251 (+4) |
| [Show HN: ExitPath – Slack, Notion 등에서 빠져나오는 오픈소스…](https://exitpath-ruddy.vercel.app/) | 247 (11-19) | 251 (+4) |
| [앱이 전체 디스크 접근이나 시스템 보호를 요구하면…](https://support.apple.com/en-us/149699) | 251 (11-19) | 251 (+0) |
| [Show HN: 보이저 1호를 메모리 칩 하나까지 분해하기](https://rshekhar.com/voyager/) | 234 (11-19) | 238 (+4) |
| [완벽한 SimCity](https://www.jeffquast.com/post/a-perfect-simcity/) | 235 (11-19) | 235 (+0) |
| [VisualBasic.World: Planet Source Code 프로그램 갤러리…](https://visualbasic.world/) | 228 (11-19) | 230 (+2) |
| [스쿼클](https://linebender.org/wiki/curves/squircle/) | 228 (11-19) | 230 (+2) |
| [스마트워치 하나로 전신 움직임 추적하기](https://news.cornell.edu/stories/2026/11/researchers-track-whole-body-movement-just-smartwatch) | 227 (11-19) | 227 (+0) |
| [OpenAI 모델로 칩 설계 개선하기](https://openai.com/index/advancing-chip-design-with-our-models/) | 219 (11-19) | 224 (+5) |
| [내가 좋아하는 현대 NES 게임들](https://jordi.inversethought.com/blog/25-of-my-favourite-modern-nes-games/) | 223 (11-19) | 224 (+1) |
| [Show HN: Alloy CSS, 같이 쓰는 다이얼로그·메뉴·탭…](https://alloyhtml.com/example.html) | 210 (11-19) | 211 (+1) |
| [브라우저 엔지니어링 (2021)](https://browser.engineering/) | 200 (11-19) | 200 (+0) |

## 관통하는 것

오늘을 잇는 건 세 가지고, 셋 다 검증 얘기다.

수학이 방금 어떤 분야든 역사상 가장 빠른 신뢰 메커니즘을 보여줬다. 목요일에 주장이 올라왔고, 금요일에 기계 검증 가능한 증명이 공개됐고, 토요일이 되기 전에 Lean과 Mathlib 커뮤니티가 명제를 인증하고, 독립적인 커널 세 개로 증명을 다시 돌리고, 그 정리를 형식적으로 검증된 RH 명제와 대조했다. 아무도 읽지 않았다. 증명은 1,700만 줄이고, 증명 전략 자체는 아직 Zulip 스레드에서 열린 연구 주제다. 왜인지는 모르면서 참이라는 걸 산업 규모로 알아내는 방법을 발명했고, 그걸 만든 사람들은 그게 무엇을 뜻하고 무엇을 뜻하지 않는지 적당히 조심하고 있다. 보안 섹션과 비교해 보라. 일주일에 메모리 안전성 CVE 세 건, 하나는 입력 1.5GB가 필요한 버그로 9.8점, 하나는 5년 전에 다운스트림에서 고쳐지고 업스트림에는 영영 안 올라갔다. 검증은 해결된 문제가 아니다. 이제는 커버리지가 아주 고르지 못한 문제다.

두 번째 실타래는 돈이 따라잡았다는 것. 나스닥은 2026년 한 해치 상승을 일주일에 다 토해냈고, 앤스로픽의 기록적 IPO는 상장 이틀째에 책정가 근처에서 마감했고, 다른 모든 것의 가치를 재는 기준이 되는 그 칩 회사의 회계를 SEC가 들여다본다는 보도가 있다. 흥미로운 건 유동성 논리다. 역사상 최대 상장이 섹터로 돈을 들여온 게 아니라 빼갔을 수 있다. 그 사이 릴리스 열차는 출발했다. PostgreSQL 19, FFmpeg 9.1, PHP 8.6, 셋 합쳐서 댓글 30개. 모든 것이 의존하는 층은 조용히 유지보수되고, 모든 것의 값이 매겨지는 층은 아주 시끄러운 한 주를 보낸다.

세 번째는 중간에 낀 사람들이다. 경력 15년 차 시니어 엔지니어는 면접을 못 잡고 피자집을 관리하게 생겼다. 개발자들은 통보도 없이 아키텍처 리뷰로 옮겨졌고, 자기 코드가 아니라 diff에서 15초짜리 네트워크 왕복을 잡아낸다. 리뷰 실력은 연습 없이는 녹슨다는 글에, 이제는 코드를 거의 안 쓰는 사람들이 반대 댓글 179개를 달았다. 어떤 우등생은 보고서가 좋은 이유가 *직접 썼기 때문*이라는 말을 들었다. 그리고 노트북이 고장 난 고객은 고쳐진 뒤 자기 불만 글을 스스로 지웠다. 어느 지원 채널이 실제로 작동하는지 정확히 알려주는 장면이다. 전부 같은 전환을 다른 자리에서 본 것이다. 일이 사라진 게 아니라 옮겨 갔고, 아무도 메모를 돌리지 않았다.
