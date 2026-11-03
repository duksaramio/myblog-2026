---
title: "Hacker News 프런트 페이지 라운드업 — 2026년 11월 3일"
pubDate: 2026-11-03
lang: "ko"
description: "200점을 넘긴 이야기 63개, 그중 27개가 새것이다. 페이지가 마침내 얼어붙기를 멈췄고, 오늘 가장 큰 이야기는 어제 가장 큰 이야기가 해체되는 과정이다."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
---

오늘 상위 220개를 훑어보니 200점 기준을 넘긴 이야기가 63개였다. 그중 27개가 오늘 처음 올라온 것이고, 이건 10월 14일 이후 가장 많은 숫자다. 나흘 동안 프런트 페이지는 사실상 얼어붙어 있었다. 오늘 그 얼음이 풀렸다. Astra 논문은 점수가 거의 세 배가 됐고, Ubuntu 스레드는 절반 넘게 커졌고, 어제 목록에 있던 나머지 이야기들은 대체로 제자리를 지켰다.

새로 들어온 것들은 평소보다 모양이 깔끔하다. 새 이야기 중 둘은 어제 가장 큰 이야기에 대한 정면 반박이다. 셋은 당신의 기계나 데이터에 물어보지도 않고 뭔가를 저지른 벤더 제품이다. 그리고 둘은 Anthropic의 IPO 주간에 관한 것인데, 그 주간은 이제 이 업종 전체의 매출 곡선이 진짜인지를 두고 벌어지는 논쟁을 겸하고 있다.

## Astra 논문의 초록은 표 하나를 견디지 못한다 — 798 points

**798 points** · 185 comments · [honnibal.dev](https://honnibal.dev/blog/astra-read-write-misleading) · [HN discussion](https://news.ycombinator.com/item?id=50351111)

Matthew Honnibal, spaCy를 만든 사람이 리뷰어들이 했어야 할 일을 대신 했다. "Sparks of Weight-Space Programming" 글에 실린 실험 여덟 개를 전부 읽고, 각 실험이 실제로 무엇을 썼는지 하나씩 표로 정리해 공개했다. 이 논문을 둘러싸고 나온 산출물 가운데 단연 가장 쓸모 있는 것이다.

발견은 이렇다. "가중치 원본만 들여다보는 것만으로"라는 주장은 실험 1, 2, 4에만 해당하고, 그마저도 17K에서 172K 개 가중치 규모의 네트워크다. 실제 언어 모델이 등장하는 실험은 하나도 빠짐없이 Python을 쓴다. 헤드라인이었던 Qwen 결과, MATH-500에서 7.9%에서 48.1%로 올라간다는 그 결과는 가중치 원본을 전혀 읽지 않고, 대신 모델이 최대 50배치의 연습 문제를 풀도록 허용한다. 초록은 "환경 피드백 없이"라고 말한다. 실험 표는 정반대의 말을 한다.

나는 어제 이 데모들은 진짜이고 흥미로운 건 메커니즘이라고 썼다. 그때 "그래디언트도, 학습 루프도 없다"는 프레이밍을 그대로 인용했다. 돌아보면 나는 초록을 반복하고 있었던 것이다. Honnibal의 표가 그걸 바로잡는다. 그리고 그 정정은 어디가 어떻게 틀렸는지 지목하고 있어서, 해석의 여지가 없다. 그는 논문 안에 파묻혀 있던 가장 약한 결과도 함께 잡아낸다. Astra가 처음부터 학습시킨 MinAtar 네트워크는 Breakout에서 PPO-100M을 517 대 25로 이기고, Seaquest에서는 53 대 89로 지고, Asterix에서는 53 대 55로 진다. 게임 셋 중 하나에서 베이스라인을 이기는 것도 결과이긴 하다. 다만 초록이 광고하는 그 결과는 아니다.

스레드에는 Neel Nanda의 더 차분한 표현이 있고, 한 댓글러가 그걸 인용한다. "Astra는 뭔가 으스스한 걸 하는 게 아니라 구식 기계적 해석가능성 연구를 놀랄 만큼 잘 해낸다"는 것이다. 그게 정직한 독법이다. 가중치 분석 코드를 쓰도록 유도되고, 추론 루프 방향을 스스로 찾아내고, 그 방향을 출력 64개 열에서 빼버리는 모델은 정말로 쓸모 있다. 하지만 그건 네트워크의 속마음을 읽어내는 모델과 같은 것이 아니다. 논문이 이 둘을 한 초록에, 한 세트의 숫자로 같이 넣기로 한 결정이 바로 견디지 못하는 부분이다.

## 노트북 위의 Qwen 3.8 27B도 같은 묘기를 부린다 — 339 points

**339 points** · 108 comments · [simonwillison.net](https://simonwillison.net/2026/Nov/3/qwen-can-interpret-model-weights/) · [HN discussion](https://news.ycombinator.com/item?id=50355251)

Simon Willison은 도구가 필요 없는 실험 하나, "여기 17,000개의 실수가 있다. 이건 무슨 게임으로 학습한 거냐"를 골라 자기 노트북의 17GB 모델에 돌렸다. Qwen 3.8 27B는 46분과 추론 토큰 43,506개 만에 팩맨을 맞혔고, 퐁은 65분, 브레이크아웃은 52분 만에 88% 확신도로 맞혔고, 프리웨이에서는 실패했다. Kimi K3.1 Pro는 브레이크아웃을 10분 안에 맞혔다.

Willison의 결론이 바로 논문 초록에 있었어야 할 문장이다. 능력은 실재하고, 동시에 소비자용 하드웨어에서 돌릴 만큼 작다. 그는 추론 흔적을 그대로 인용하는데, 실수 열을 노려보며 추측하는 페이지가 끝없이 이어진다. "channel0 큰 게 row8 col7/8에만 있을지도. 윗줄도? ... 아니다." 공책과 충분한 인내심만 있으면 사람도 거기까지 갈 수 있다. Qwen이 하는 일이 대략 그렇다.

오늘 최상위 반박 두 개는 반대편 끝에서 같은 방향을 가리킨다. Honnibal 쪽은 이 기법이 광고만큼 통일되어 있지 않다고 한다. Willison 쪽은 흥미로운 부분이 로컬 모델의 능력 밖이 아니라고 한다. 어느 쪽도 이 연구가 나쁘다고 말하지 않는다. 둘 다 프레이밍이 결과보다 많은 일을 하고 있었다고 말한다.

## Postman이 당신의 코딩 에이전트에 플러그인을 설치했다 — 749 points

**749 points** · 252 comments · [github.com/postmanlabs](https://github.com/postmanlabs/postman-app-support/issues/14370) · [HN discussion](https://news.ycombinator.com/item?id=50354960)

이슈 #14370. 10월 25일, Postman을 열고 나서 자기 코딩 에이전트들이 달라진 것을 눈치챈 사용자가 열었다. Postman 데스크톱 12.33.4는 사용자 전역 Codex 플러그인(v1.1.0), 시작 지시 훅, 원격 MCP 연결, Claude Code 플러그인, 그리고 별도의 Postman CLI를 설치해놓았다. 신고자의 이의는 아주 정확하게 진술된다. API 클라이언트가 자기를 한 번 열었다는 이유로 다른 도구의 기본 워크플로가 되어서는 안 되고, 자기 시작 훅을 스스로 승인하려 들어서는 더더욱 안 된다.

댓글이 이 이야기의 후반부인데, 내용은 이슈보다 더 나쁘다. 한 개발자는 Postman이 쿼리 파라미터까지 포함해 모든 요청을 기록한다고 말한다. `{{some_secret}}` 템플릿 문법을 쓰면 치환된 시크릿이 그대로 Postman 서버로 전송되고, 그 엔드포인트를 막으면 앱이 망가진다고 덧붙인다. 또 한 명은 자기가 다니는 의료 회사의 보안팀이 바로 이 문제로 Postman 인증을 취소하고, 전 직원을 하룻밤 사이에 Bruno로 옮겼다고 한다. 세 번째는 이렇게 적었다. "이걸 아직 쓰는 개발자를 한 명도 모르는데, 어떻게 기업가치가 50억 달러가 넘는지 여전히 이해가 안 된다."

이제 회사 전체가 그런 모양이다. 한 댓글러의 회계로는 4억 달러가 넘는 조달, 1,500명이 넘는 채용, 그리고 예전에는 포매터가 예쁜 로거에 불과했던 도구로 그 밸류에이션을 정당화해야 하는 처지다. AI 기능은 제품이 아니다. 밸류에이션이 요구하는 성장 스토리다. 결정적인 단서는 플러그인이 물어보지도 않고 조용히 설치됐다는 사실이다. 물어봤다면 분명히 거절당했을 테니까.

## Ubuntu, 3주째 그리고 계속 — 597 points

**597 points** · 187 comments · [freenode.net](https://freenode.net/article/ubuntu-lts-kernels-still-unfixed-for-critical-cve-2026-98432) · [HN discussion](https://news.ycombinator.com/item?id=50341462)

어제 버전의 이 이야기는 타임스탬프가 붙은 욕설에 가까웠다. 오늘 것은 그 욕설에 날짜(10월 31일)를 붙여 중계한 것이고, 새 정보는 하나도 없다. 22.04, 24.04, 26.04 LTS용 패치 커널이 없고, 일정도 없고, 완화 지침도 없다. 기사는 400단어인데 그중 세 문단이 관리자가 그 사이에 무엇을 할 수 있는지에 대한 일반론이다.

스레드에서 가장 쓸모 있는 댓글은 오히려 출처를 의심하는 쪽이다. "훔친 IRC 네트워크에 슬쩍 붙은 블로그보다 이 이야기에 더 평판 있는 출처가 분명히 있을 텐데." 맞는 말이다. 지금의 Freenode는 뉴스 집계기지 취재 조직이 아니고, 이 글은 그 자체가 욕설이었던 블로그 포스트를 요약한 것이다. 패치가 늦다는 주장 자체는 사실이다. Ubuntu 자체 트래커가 어제 그렇게 말했고, `-proposed` 커널은 한참 전부터 나와 있었다. 하지만 이만큼 중대한 이야기를, 남의 1,200단어에서 400단어를 뽑아내는 사이트가 중계해서는 안 된다.

스레드가 보태는 것은 아무도 공개하지 않은 완화책이다. raw 테이블에 데이터 오프셋이 5가 아닌 TCP 세그먼트를 버리는 `iptables` 규칙을 하나 넣으면, 커널을 올리지 않고도 핸드셰이크 UAF에 아예 도달할 수 없게 만들 수 있다. 댓글러 한 명이 그걸 그대로 올려놓았다. RHEL도 비슷한 내용을 공개했다. Canonical은 둘 다 공개하지 않았고, 그게 소음 아래 깔려 있는 진짜 불만이다.

## Google은 "AI 없음"을 "검색 없음"으로 만들었다 — 416 points

**416 points** · 309 comments · [nytimes.com](https://www.nytimes.com/2026/11/03/us/google-search-schools-restrict-ai.html) · [HN discussion](https://news.ycombinator.com/item?id=50353192)

Google의 교육용 업데이트는 관리자가 직접 켜기 전까지 K-12 학생 계정에서 Gemini, Gemini Notebook, Classroom 내 Gemini, Google 검색을 기본값으로 꺼둔다. 8월에 Classroom에서 Gemini를 기본 켜기로 결정했던 것을 뒤집은 것이다. 그 부분만 보면 항의했던 사람들의 승리다.

함정은 같은 문단 안에 있다. 검색은 남겨두고 AI만 끄는 토글은 없다. 교육 부문 부사장 Chris Phillips는 NYT에 "검색과 AI는 깊이 통합되어 있다"고 말했고, 그래서 AI를 빼기로 한 학교는 검색을 쓸 수 없다는 안내문을 받게 된다. Google은 AI 개요가 빠진 학교용 검색을 충분히 출시할 수 있다. 그러지 않기로 선택했고, 어느 교육구도 싫어하는 기능 하나 때문에 검색 자체를 포기하지는 않으리라는 데 걸고 있다.

댓글러들은 뻔한 선례를 붙잡았다. *United States v. Microsoft*와, "Windows와 인터넷 익스플로러는 깊이 통합되어 있다"는 그 항변이었다. 비교는 불편할 만큼 적절하다. 더 강한 지적은 기본값에 관한 것이다. AI는 옵트인으로 돌려놓으면서 AI가 아닌 경로는 아예 쓸 수 없게 만드는 것은 통제가 아니라 비용을 붙인 선택이고, 그 비용의 이름을 붙이는 쪽은 언제나 Google이다. 검색을 원하는 교육구는 AI를 함께 받는다. 그게 이 메커니즘의 전부다.

## OpenAI가 학습 스위치를 다시 켰다 — 374 points

**374 points** · 114 comments · [news.ycombinator.com](https://news.ycombinator.com/item?id=50352757) · [HN discussion](https://news.ycombinator.com/item?id=50352757)

링크 없는 텍스트 글이다. "IP 유출에 꽤 신경 쓰는" 회사의 직원이, Codex의 "모두를 위해 모델 개선" 설정이 자기와 동료들에게 조용히 다시 켜져 있던 걸 발견했다. 그중 누구도 다시 켠 적이 없다. 그는 설정 페이지와 같은 일이 보고됐던 이전 스레드를 링크한다.

이게 단순한 버그 리포트가 아니라 기사인 이유는 답글들이다. 한 사용자는 자기가 두 번이나 성공적으로 비활성화를 요청했고 그 두 건 모두 이력에 남아 있는데도 설정이 다시 켜졌다고 한다. 또 한 명은 조직 설정이 이미 꺼둔 상태인데도 Claude가 세션 도중에 `/feedback`을 트리거했다고 보고한다. 세 번째는 Gemini가 "채팅을 사이드바에 저장"하는 것을 학습 동의로 취급하고 있는데, UI에는 그 항목이 "Gemini Apps Activity"라고 적혀 있다고 지적한다.

논쟁을 끝내버리는 가장 좋은 댓글은 이것이다. 회사가 이 문제를 진짜로 신경 썼다면 체크박스를 믿는 대신 자체 추론을 돌리고 있을 거라는 것. 나머지는 전부 당신이 보지 못하는 배포에서 조용히 바뀔 수 있는 정책에 불과하다. 한 스레드에 벤더가 둘 나오고, 둘 다 옵트아웃이 지켜지지 않았다. 우연이 아니다. 옵트아웃은 그들에게 학습 데이터를 잃는 기능이다.

## SEC 사설은 잘못된 안건을 주장한다 — 392 points

**392 points** · 309 comments · [techpolicy.press](https://www.techpolicy.press/the-sec-should-block-anthropics-ipo-to-protect-the-public/) · [HN discussion](https://news.ycombinator.com/item?id=50344919)

*Brace for Impact*라는 보고서의 공저자 Matt Scherer는 SEC가 Anthropic의 IPO를 막아야 한다고 주장한다. 사실 관계만 보면 정말로 경보를 울릴 만하다. 수정 등록 신고서는 8,950억 달러 규모의 계약상 의무를 공시하는데, 그중 최소 5,820억 달러가 취소 불가이고 상대는 다섯 회사(Amazon, AMD, Broadcom, Google, Microsoft)다. 반면 회사가 쥔 현금은 960억 달러다. 게다가 2026년 실적은 아직 감사를 받지 않았다.

그리고 글은 방향을 튼다. 댓글러 중에 숫자를 다투는 사람은 거의 없고, 거의 전부가 처방을 다툰다. SEC의 일은 공시이지 본질 심사를 하는 것이 아니다. 규제기관에 상장 허가 거부권을 쥐여주는 건 소비자 보호가 아니라 부패 경로다. 그리고 사설 자체의 숫자가 그 절박함을 오히려 깎아먹는다. 5,820억 달러의 의무가 2030년대까지 흩어져 있고, 은행에 현금 960억 달러와 85% 총마진이 있는 회사라면, 이건 레버리지 이야기지 지급불능 이야기가 아니다.

설득력 있는 댓글은 지수 편입에 관한 것이다. 회사는 작은 유통물량과 거대한 총시가총액으로 상장해서 주요 지수에 편입되고, 재무가 아무리 나빠도 모든 인덱스 펀드의 의무 매수 대상이 될 수 있다. SpaceX에 대한 진짜 불만이 그것이었고, 여기에 대한 진짜 불만도 그것이며, Anthropic이 상장할 자격이 있는지와는 아무 상관이 없다. 사설은 2,000단어를 들여 잘못된 안건을 주장했다.

## Anthropic의 성장 스토리, 10월 15일 것 — 227 points

**227 points** · 262 comments · [regenerator1.com](https://www.regenerator1.com/p/anthropics-growth-just-flattened) · [HN discussion](https://news.ycombinator.com/item?id=50344958)

Henry Blodget의 10월 15일 글이 오늘 다시 떠올랐다. 논지는 이렇다. 1분기 48억 달러, 2분기 116억 달러(전분기 대비 +141%), 3분기 168억 달러(+45%). 절대 금액 기준 분기 성장은 68억 달러에서 52억 달러로 줄었다. 그리고 더 날카로운 대목. Anthropic이 7월에 연환산 650억 달러 런레이트를 달성했다고 투자자들에게 말했다는 보도가 있는데, 그렇다면 7월 매출은 54억 달러가 되고 분기 매출은 168억 달러이므로 8월과 9월은 거의 평평했어야 한다. DealBook은 Anthropic이 9월 연환산 수치를 공유하지 않았다고 적었고, Blodget은 그걸 좋아 보이지 않았을 증거로 읽는다.

최상위 댓글은 오늘 숫자로 그 논지를 해체한다. 3분기 매출 169.6억 달러, 전분기 대비 47% 증가, 전년 대비 1,000% 이상, Anthropic 자체 S-1 페이지 링크 첨부. 또 한 댓글러는 Opus 5.5가 분기 종료 9일 전인 9월 22일에 나왔고, 9월 가격 인하가 토큰 소비를 늘렸다고 지적한다. 그러니 "9월이 평평했다"는 건 플래그십 출시와 가격 인하로 끝난 달에 대한 주장이다.

두 독법 모두 참일 수 있다. 회사는 전분기 대비 47% 성장하면서도, 동시에 141%에서 감속하고 있을 수 있다. 변호할 수 없는 건 프레이밍이다. Blodget의 산수는 Anthropic이 공식적으로 공개한 적이 없는 7월 런레이트 하나에 의존하고, 그 숫자를 두 달에 걸쳐 빼기로 외삽한다. 그건 보고가 아니라 모델이고, 글은 그 모델을 추세로 제시한다.

## 유타주가 Kalshi 창업자들을 14개 혐의로 기소했다 — 354 points

**354 points** · 273 comments · [arstechnica.com](https://arstechnica.com/tech-policy/2026/10/trump-admin-sues-utah-to-save-kalshi-from-the-states-total-ban-on-gambling/) · [HN discussion](https://news.ycombinator.com/item?id=50353229)

유타주 법무장관 Derek Brown은 9월 13일에서 24일 사이에 접수된 스포츠 베팅을 이유로 KalshiEX, CEO Tarek Mansour, COO Luana Lopes Lara를 중죄 13건과 경죄 1건으로 기소했다. 체포영장은 없고 솔트레이크 카운티 제3지방법원 출석 요구서다. Kalshi의 반응: "말도 안 되는 월권이다. 유타는 노골적으로 정치를 하고 있다." 5월에 애리조나에서 비슷한 혐의를 이긴 판결을 근거로 든다.

한편 연방정부는 유타주를 상대로 자체 도박 금지를 집행하지 못하게 하는 소송을 냈고, Ars에 따르면 이로써 유타는 예측시장을 규제하는 연방기관에 피소된 열 번째 주가 됐다. 유타는 도박이 법률이 아니라 주 헌법으로 금지된 두 개 주 중 하나다. 사건이 우호적인 법정이 아니라 여기 있는 이유다.

댓글은 거의 만장일치이고, 표현도 완곡하지 않다. Kalshi와 Polymarket은 도박 회사이고, 이들은 규제 프레임을 하나 찾아내고 정치적 방패를 산 것이다. 그 방패에는 두 이사회 모두에서 Donald Trump Jr.에게 유급 자문 역할을 준 것도 포함된다. 한 댓글러는 윤리적 간극이 베팅 자체가 아니라 어휘에 있다고 지적한다. 스포츠 결과에 거는 것을 "예측시장"이라고 부르는 순간이 제품의 전부라는 것이다. 또 한 명은 유일한 혁신이 관할구 쇼핑인 비즈니스 모델에 창업자가 언제 개인 책임을 지게 되느냐고 묻는다. 그 질문은 이제 유타주 판사 앞에 놓여 있다.

## 1995년 펜티엄 프로가 3300 Elo 엔진을 돌린다 — 387 points

**387 points** · 174 comments · [nicholas.carlini.com](https://nicholas.carlini.com/writing/2026/algorithmic-improvements-chess.html) · [HN discussion](https://news.ycombinator.com/item?id=50349276)

Nicholas Carlini는 1995년산 펜티엄 프로(200 MHz, 64MB)를 사서 Stockfish를 이식했고, 추정 3300 ± 87 Elo에서 둔다. 온라인 상태이고 Realtek RTL8139C로 연결돼 있으며, 글 안에서 바로 대국할 수 있다. 규모를 보자. 1996년 상용 하드웨어 최고 엔진이 2300 근처였고, 딥 블루가 2700 근처, 카스파로프가 2800에 살짝 못 미쳤다.

요점은 체스 실력이 더 이상 하드웨어 문제가 아니라는 것이다. 딥 블루는 맞춤형 VLSI 보조 프로세서 480개와 수백만 달러였고, 그 대체물은 더 나은 평가, 더 나은 탐색 가지치기, 31년 된 CPU용으로 컴파일되는 코드베이스에 압축된 30년치 알고리즘 작업이다. Carlini는 그렇게 말하는 데 신중하고, 글은 자기 구성에 대해서도 정직하다. 다만 "내가 썼다고 할 때 사실은 LLM에게 쓰라고 했다는 뜻"이라는 공개는 페이지 중간까지 가야 나온다.

댓글은 이 글에 필요한 정정을 공급한다. 한 실력 있는 아마추어가 이 엔진을 이기는 라인을 찾아냈다. 현대적인 깊이 예산에 맞춰 조정된 엔진은 연산이 부족해지는 순간 눈에 띄는 약점을 드러내기 때문이다. 그러니 3300 ± 87은 작정한 인간이 밑돌 수 있는 추정치다. 더 날카로운 반론은 이렇다. 그 강함의 대부분은 현대 Stockfish에서 증류한 신경망인 NNUE에서 나온다. 교사 모델 없이 1996년으로 타임머신을 타고 가면 아무도 그걸 쓸 수 없었을 것이다. 알고리즘이 나아진 건 맞다. 다만 나아진 것의 상당 부분은 그 시절에 아직 존재하지 않던 학습 데이터다.

## 인지적 항복에 저항하기 — 298 points

**298 points** · 145 comments · [knlb.dev](https://knlb.dev/essays/surrender) · [HN discussion](https://news.ycombinator.com/item?id=50323123)

에이전트 보조 작업의 특정 실패 모드에 관한 에세이다. 대안을 생각하지 않고 결과물을 무비판적으로 받아들이는 것. 왜 그런지에 대한 저자의 진단은 흔한 "게으름" 이야기보다 낫다. 동료들이 항복한 것처럼 보이면 꼼꼼한 작업이 느려 보인다는 동조 압력이 있고, 모두가 PR을 더 많이 올리니 더 많은 PR이 진척처럼 보이는 물량 연극이 있고, 모델의 근거 없는 확신이 있다. 그는 그 확신을 RLHF 탓으로 돌리며 "그들의 답을 액면가로 받아들이기 너무 쉽다"고 표현한다.

흥미로운 건 처방인데, 아주 구체적이기 때문이다. 작업마다 "바이브 한도"를 정해놓고 그 안에서만 움직일 것, 그럴듯한 첫 답이 탐색을 끝내버리는 자동화 편향을 경계할 것, 앞으로 유지보수해야 할 것에는 반드시 리뷰 루프에 직접 들어갈 것, 그리고 이해 가능성을 강제할 것. 변경을 설명할 수 없다면 그건 당신 것이 아니다. 그는 이게 기본값이 아니라 훈련이어야 한다고 분명히 말한다. 기본값은 전부 반대쪽을 가리키고 있으니까.

가장 좋은 답글은 전제 자체를 뒤집는다. "인지적 항복"은 항복할 만한 지식이 있었을 때만 의미가 있다. LLM으로 소프트웨어를 만드는 사람들 대부분은 그 전에도 코드를 읽지 않았다. 두 번째로 좋은 답글은 진짜 메커니즘을 짚는다. 인간을 먼저 멍청하게 만들어 놓으면 초인적 지능은 훨씬 달성하기 쉬운 목표가 된다. 에세이 자체의 답, 즉 복잡성 부채는 천천히 복리로 쌓이는데 쓰레기 같은 결과물은 빨라 보인다는 논지가, 현업 엔지니어가 실제로 행동에 옮길 수 있는 버전이다.

## 데이터센터에 꽂힌 수백 대의 맥북 — 251 points

**251 points** · 133 comments · [namespace.so](https://namespace.so/blog/mac-at-any-scale) · [HN discussion](https://news.ycombinator.com/item?id=50352758)

Namespace는 iOS CI에 쓸 맥이 필요했는데 맥 미니를 구할 수 없었다. 1월에 주문해서 7월에 받았고, Apple은 기기 라인마다 CPU 갱신 시점을 어긋나게 한다. 미니는 M5를 통째로 건너뛰고 다른 무엇보다 먼저 M6를 받았다. 그래서 그들은 맥북 프로를 여러 대 꽂은 랙을 직접 지었다. 선반당 12대, 기기마다 케이블 4개, 헤드리스 경로가 없는 펌웨어 화면을 위한 유닛별 IP KVM, 노트북당 10G NIC, 그리고 옆 기기에 열을 불어넣는 대신 열을 빼내도록 설계한 맞춤 홀더까지.

기사 본체는 실패 목록이다. MagSafe는 괜찮았다. HDMI 케이블은 선반을 건드리면 빠지고, 그들은 올바르게 휘어지는 단 하나의 케이블을 아마존에서 전량 사들였다. FileVault 잠금 해제 프롬프트는 5분 비활성 후 외부 화면에서 사라지고, macOS Tahoe의 SSH 경유 원격 FileVault 잠금 해제도 노트북에서는 5분 후 만료된다. 잘못 재부팅하면 물리적으로 버튼을 누르고 프롬프트와 경주해야 한다. 훔쳐 쓸 만한 우회책은 `fdesetup authrestart`다. 그리고 외부 USB NIC이 설정에서 네트워크 서비스를 지웠다 다시 만들어야만 동작하는 미해결 버그가 있다.

댓글은 감탄과, Apple에서 아무도 답하지 않는 질문 사이로 갈린다. 랙 하나에 백여 대 노트북이면 리튬이 그 밀도로 모여 있는 것 자체가 심각한 문제라는 것. 더 나은 관찰은 지원에 관한 것이다. 이 규모라면 Framework나 Dell이면 사람이 실제로 받는 24시간 지원 라인을 갖다 줄 것이다. Apple에는 이런 용도를 위한 엔터프라이즈 경로가 아예 없다. 그래서 최전선 CI 인프라를 운영하는 회사가 소비자용 하드웨어를 리버스 엔지니어링하고, 그 결과를 블로그에 정리해서 올린다. 제품의 공백을 랙 하나로 덮고 있는 셈이다.

## OpenAI는 Git을 대체하지 않고 다시 지었다 — 260 points

**260 points** · 176 comments · [openai.com](https://openai.com/index/scaling-git-at-openai/) · [HN discussion](https://news.ycombinator.com/item?id=50345924)

모노레포를 서비스하는 새 백엔드 Pando에 관한 OpenAI 엔지니어링 글이다. 숫자는 이렇다. 푸시 지연 중앙값 약 5배 감소, 하루 거의 1페타바이트의 Git 데이터 서비스, 한 시간에 57TB의 팩, 바이트의 99% 이상이 로컬 디스크 캐시에서 나옴. 약 10주에 걸쳐 만들어졌고, 핵심은 엔지니어 한 명이 설계했고 대부분은 Codex 에이전트가 구현했다.

아키텍처상의 베팅은 이해할 가치가 있다. Google과 Meta가 한 것과 정반대이기 때문이다. Git을 대체하는 대신 Pando는 프로토콜과 클라이언트를 유지하고 두 가지 가정을 포기한다. 저장소 전체의 시점 일관성은 브랜치별 인과적 일관성으로 바꿔, 무관한 브랜치가 병렬로 갱신되고 두 팁이 서로 다른 시점을 반영할 수 있다. 클라이언트별 팩파일 생성은 공유 팩파일 재사용으로 바꿔, 클라이언트가 이미 가진 객체를 받기도 한다. `packfile-uri`에 기대고 있고, 중단된 팩파일 다운로드에 대한 수정은 OpenAI가 업스트림에 올렸다.

댓글러들은 글에 없는 두 가지를 묻는다. 벤치마크가 어디 있느냐는 것이다. 초당 푸시가 몇 개인지, 동시에 푸시하는 사람이 몇 명인지, 그리고 무엇을 기준선으로 삼았는지. 그리고 이 커밋 물량이 대체 뭘 하고 있느냐고 묻는다. 2024년 초 이후 커밋이 1,300% 늘었는데 제품은 눈에 띄게 빨라지지 않았기 때문이다. 한 댓글러는 이걸 1년 사이 다섯 번째 대형 "Git 확장" 글이라고 센다. Cursor, GitHub 두 번, 그리고 Anthropic 다음이다. 그것 자체가 신호다. 연구소 넷이 각자 독립적으로 소스 관리가 병목이라고 발견했다면, 진짜 병목은 Git이 아니라 에이전트 워크플로다.

## 후지필름은 테이프에 건다 — 306 points

**306 points** · 124 comments · [arstechnica.com](https://arstechnica.com/gadgets/2026/10/fujifilm-to-boost-tape-production-5x-as-ai-fuels-archiving-demand/) · [HN discussion](https://news.ycombinator.com/item?id=50336918)

후지필름은 오다와라 공장의 LTO 테이프 생산을 2026회계연도에서 2028회계연도 사이에 다섯 배로 늘리려고 약 100억 엔, 대략 6,300만 달러를 투자한다. 대부분은 LTO-10용이다. 명시된 동인은 생성형 AI가 만드는 데이터 물량인데, 보통은 의심받아 마땅한 주장이지만 이번에는 생산능력 확약이 뒤에 붙어 있다.

댓글은 실용 매뉴얼에 가깝다. 카트리지는 싸고 드라이브는 아니다. LTO-10 미디어가 TB당 8.63달러에서 10달러인데, 단독 LTO-10 드라이브는 2만 5,000달러 근처다. 아카이브는 두 번 쓰고, 그다음 실제로 복원해볼 것. 드라이브가 자기가 쓴 테이프를 못 읽는 경우가 있고, 성공을 보고한 쓰기가 곧 동작하는 읽기는 아니다. 자본 지출을 피하고 싶다면, 복원을 절대 하지 않을 계획일 때 S3 Glacier Deep Archive가 TB당 월 1달러 근처다.

여기에 간직할 만한 댓글이 두 개 있다. 하나는 대형 과학 실험을 운영하는 사람의 것인데, 테이프 공급이 예전에는 자기네 파이프라인에서 가장 불안한 부분이었는데 AI 붐 덕분에 오히려 안정적으로 보이게 됐다고 한다. 과대광고 주기가 인프라를 도와준 드문 사례다. 다른 하나는 수요가 정말 AI 때문인지, 아니면 지금 수확해서 나중에 복호화하려는 것인지 묻는다. 둘 다 사실일 수 있다. 다만 상자에 적혀 있는 건 하나뿐이다.

## 미국 이름은 여자 쪽으로 움직이고, 그 움직임을 만드는 것도 여자다 — 470 points

**470 points** · 451 comments · [namedaisy.com](https://namedaisy.com/blog/boy-names-that-became-girl-names) · [HN discussion](https://news.ycombinator.com/item?id=50339397)

1936년에서 2025년까지 미국 출생 이름 데이터를 다룬 글이다. 42개 이름이 남자 우세에서 여자 우세로 넘어갔고, 12개가 반대 방향으로 갔다. Leslie, Kelly, Ashley는 모두 남자 이름이었다.

흥미로운 숫자는 42 대 12의 비율이 아니라 그 뒤의 메커니즘이다. 여자 쪽으로 움직인 42개 중 34개는 남자가 덜 받아서가 아니라 여자가 더 받아서 그렇게 됐다. 반대로 남자 쪽으로 움직인 12개 중 9개는 남자가 더 받아서가 아니라 여자가 덜 받아서 움직였다. 이름이 어느 방향으로 가든, 그 이동을 실제로 만드는 것은 여자의 작명 결정이다. 이름은 인기가 정점에 있을 때 여자 쪽으로 움직이고, 남자 쪽으로 향하는 가장 뚜렷한 이동은 그 이름이 유행에서 완전히 밀려난 한참 뒤에야 일어난다.

스레드에서 나온 최선의 가설은 누가 애초에 유행을 따라갈 수 있느냐에 관한 것이다. 남자아이는 가족 대물림 이름과 성서 이름을 더 자주 받기 때문에 남자 상위 25위가 훨씬 굳어 있는 반면, 여자아이 이름은 그 계절의 유행을 따라 자유롭게, 그리고 더 빠르게 움직인다. 개수만 보여주는 데이터셋에 대한 그럴듯한 독법이다. 다만 이 개수들이 확립하는 것은 분명하다. 움직임은 비대칭이고, 그 비대칭은 한쪽 끝에서 만들어진다.

## AI 신문, 해커 타임스 — 448 points

**448 points** · 140 comments · [hackertimes.ca](https://hackertimes.ca/) · [HN discussion](https://news.ycombinator.com/item?id=50346981)

해커 뉴스를 뉴욕타임스 1면처럼 렌더링한 것. 마스트헤드, 칼럼, 섹션 헤더, 매시간 갱신, AI가 다시 쓴 헤드라인, 기사마다 한 문단짜리 리드. 타이포그래피는 정말 좋다.

스레드는 대부분 이게 적어도 네 번은 만들어졌다고 지적한다. 2020년 버전은 627점을 받았고, The Front Page, times.hntrends.net, hackernewstimes.com, rnn.news도 있다. 정당한 정정이고, 동시에 이 형식에 대한 가장 강한 논거이기도 하다. 사람들이 계속 다시 만드는 이유는 HN의 텍스트 벽이 훑어보기 어렵고, NYT의 위계가 실제 문제를 풀어주기 때문이다.

반대 의견 둘은 중요하다. 하나는 전체 사이트가 아니라 HN을 제자리에서 재배치해주는 브라우저 확장이면 되지 않냐고 묻는다. 답은 껍데기만 바꾸는 쪽이 설치보다 시연이 쉽다는 것이다. 다른 하나는 AI가 다시 쓴 헤드라인이 "너무 논설조"라며 반대한다. 그게 맞는 걱정이다. 여기 요약은 기계가 읽지 않은 이야기에 대한 기계 작성 설명이고, 이 사이트 자체의 1면이 가져오지 못한 기사를 가져온 것처럼 묘사하면서 그 실패 모드를 직접 보여줬다. 껍데기가 예뻐진다고 해서 요약기가 더 조심스러워지지는 않는다.

## 르노의 시계, 그리고 그 시계를 쥔 SD 카드 — 432 points

**432 points** · 172 comments · [blog.nns.ee](https://blog.nns.ee/2026/11/02/renault-hack/) · [HN discussion](https://news.ycombinator.com/item?id=50339288)

중고 르노를 산 한 에스토니아 차주가 알아낸 사실이다. 일광절약시간이 끝나면 대시보드 시계를 어떤 메뉴에서도 맞출 수 없다. 선택지가 그냥 없다. 전 주인은 시간을 바꾸려면 내비게이션 SD 카드가 필요하다고 했는데, 그때는 사용자 실수처럼 들렸다. 아니었다. 지도는 이미 못 쓰게 됐고 카드는 버려졌고, "시간 설정"이 있어야 할 설정 메뉴에는 그 항목이 없다.

그래서 그는 헤드 유닛을 리버스 엔지니어링해서, 저장소에 직접 써넣는 방식으로 시계를 맞췄다. 이 장르의 좋은 예시다. 펌웨어를 뽑아내고, 프로토콜을 추측하고, 그러다 결국 고치려는 물건을 부수겠다는 의지가 단계적으로 올라간다. 펀치라인은 이렇다. 지도 데이터가 10년은 지난 유닛에서, 고작 네 자리 숫자를 보여주는 시계가 이동식 매체 뒤에 잠겨 있다.

댓글창은 사실상 자조 모임이다. 한 스바루 차주는 같은 CAN 버스에 붙은 시계가 셋인데 서로 동기화되지 않고, 그중 하나는 32.768kHz 수정 없이 마이크로컨트롤러로 돌아가서 계속 어긋난다고 묘사한다. 또 한 명은 2001년식 고급차를 가졌는데 시계를 시간대 단위로만 맞출 수 있었고, 그 규칙 세트는 몇 년 전에 이미 갈라져 있었다고 한다. 반복되는 주제는 같다. 설계 리뷰 어딘가에서 누군가 이 시계에 수동 설정은 필요 없다고 결정했고, 자동 소스가 애초에 없는 경우는 아무도 테스트하지 않았다.

## 사망한 NFL 선수 4명 중 3명에게 CTE 징후가 있었다 — 228 points

**228 points** · 182 comments · [nbcnews.com](https://www.nbcnews.com/health/health-news/study-estimates-75-nfl-players-died-15-year-span-may-cte-rcna605975) · [HN discussion](https://news.ycombinator.com/item?id=50353335)

JAMA Network Open에 실린 연구로, 2008년에서 2023년 사이에 사망한 NFL 선수의 75%에게 CTE 징후가 있었다고 추정한다. 지금까지 나온 가장 높은 수치이고, 같은 그룹이 8월에 5년 구간을 대상으로 내놓았던 4분의 1이라는 추정치의 세 배다. 전직 선수의 약 27%는 치매가 있는 것으로 추정됐다.

단서는 연구 안에도, 기사 안에도 있다. CTE 병리가 있는 사람이 전부 증상을 보이는 것은 아니고, 어떤 이들은 평생 증상을 보이지 않는다. 이건 발견에 대한 방어가 아니라 발견의 한계다. 병리 유병률과 임상적 손상은 서로 다른 측정이고, 75%라는 숫자는 앞의 것만 설명한다.

스레드는 대부분 25%에서 75%로 뛴 것이 더 나은 표본 때문인지, 더 긴 구간 때문인지, 아니면 확인 방법이 달라진 탓인지를 가늠한다. 맞는 질문이다. 추정치가 3배로 뛰는 변화는 보통 현실을 반영하기 전에 방법론을 반영하니까. 기사도 그걸 정리해주지 않는다. 여기서 보기에 초록도 마찬가지다.

## 새로 올라온 것들

200점을 넘겼지만 문단 세 개씩 할애할 필요는 없는, 조금 작은 이야기들:

- **DiscImageStudio** ([338 points](https://github.com/JiaFeiMiao-K-Cat/DiscImageStudio), 77 comments) — 오류 정정 계층을 악용해 CD, DVD, 블루레이의 데이터 면에 눈에 보이는 그림을 새겨 넣는다. 광학 매체가 애초에 허용해서는 안 됐던 바로 그런 종류의 일이다.
- **NIST의 1인 기업 사이버보안 가이드** ([317 points](https://www.nist.gov/news-events/news/2026/11/self-employed-solopreneur-nist-has-cybersecurity-guide-just-you), 90 comments) — 자기 자신이 곧 IT 부서인 사람에 맞춰 축소한 프레임워크. 댓글러들은 그래도 여전히 준법 담당자가 딸린 조직을 위한 프레임워크처럼 읽힌다고 지적한다.
- **복셀로 만든 바르샤바** ([313 points](https://p.migdal.pl/warsaw-vibe-voxel/), 52 comments) — 도심을 옮겨 놓은 인터랙티브 3D 복셀 지도, 브라우저에서 바로 돌아간다.
- **Nvidia의 auto-ontology** ([253 points](https://github.com/NVIDIA/auto-ontology), 117 comments) — 데이터에서 온톨로지를 자동으로 생성하는 오픈소스 도구. 흥미로운 건 도구의 성능이 아니라, Nvidia가 온톨로지 도구를 내놓는다는 사실 자체다.
- **인텔 주가 붕괴** ([226 points](https://finance.yahoo.com/markets/article/the-intel-stock-collapse-is-getting-worse--and-the-37-trillion-chip-rout-is-spreading-212154947.html), 215 comments) — 반도체주 전반에 3조 5,000억 달러 규모의 매도세가 번졌고 인텔이 최악의 성과라는 주장이다. 기사 본문은 못 가져왔다. Yahoo가 스크래퍼에게 내비게이션만 준다. 업종 수치는 측정값이 아니라 헤드라인의 숫자로 봐야 한다.
- **Ask HN: Who is hiring? (2026년 11월)** ([240 points](https://news.ycombinator.com/item?id=50338728), 216 comments) — 매달 도는 스레드. 댓글 수가 늘었고 "AI 네이티브"라는 표현이 이제 공고마다 깔려 있다는 점만 기록해둔다.
- **syscall.sh** ([230 points](https://syscall.sh/), 53 comments) — 3.3에서 7.3까지, 25개 아키텍처에 걸친 리눅스 시스템 콜을 검색하는 색인. API도 딸려 있다. 20년 전에 있었어야 했을 종류의 레퍼런스다.
- **Toit v2.0.0** ([209 points](https://toit.io/blog/toit-v2-0-0/), 68 comments) — 임베디드 스크립팅 언어가 알파 4년 만에 v2에 도달했다. 회사를 만든 이들이 문을 닫은 지 2년 후다. 결국 자원봉사자들이 끝냈다.
- **내가 가장 좋아하는 노트북** ([200 points](https://blog.jsbarretto.com/post/laptop), 158 comments) — 2015년산 씽크패드 X250. 고칠 수 있고, 작고, 조용하다는 점 때문에 사랑받는다. 스레드에서 이견을 다는 사람은 아무도 없다.

## 여전히 페이지에 있는 것들

36개가 넘어왔고, 이번 주에 처음으로 흥미로운 숫자가 변화량이 아니라 맨 위 숫자인 날이다. Astra는 998 → 2,912로 갔다. 하루 만에 그 이야기가 반박 두 개의 대상이 되면 벌어지는 일이다.

| 이야기 | 이전 | 11월 3일 |
| --- | --- | --- |
| [Astra / 가중치 공간 프로그래밍](https://rikiyat.github.io/blog/weight-space-programming/) | 998 (11-02) | 2,912 (+1,914) |
| [HackerTube](https://karpathy.bearblog.dev/hacker-tube/) | 2,797 (11-02) | 2,850 (+53) |
| [HackerBooks](https://hackerbooks.org) | 1,793 (11-02) | 1,839 (+46) |
| [Mistral Large 4 가중치](https://mistral.ai/news/mistral-large-4-oss/) | 1,722 (11-02) | 1,729 (+7) |
| [WTF Ubuntu?](https://chalmovsky.com/posts/wtf-ubuntu) | 1,084 (11-02) | 1,596 (+512) |
| [Claude Code 확장 백도어](https://phorion.io/blog/offical-claude-code-vsx-compromise/) | 1,007 (11-02) | 1,009 (+2) |
| [세르비아의 과학자 의회](https://www.science.org/content/article/serbia-just-elected-world-s-brainiest-parliament) | 916 (11-02) | 920 (+4) |
| [농부의 다락방 씨앗](https://www.smithsonianmag.com/science-nature/italian-farmer-found-unknown-seeds-attic-with-nothing-lose-planted-them-result-biblical-180989644/) | 856 (11-02) | 869 (+13) |
| [Postgres 19는 늦었다](https://rhaas.blogspot.com/2026/10/postgres-19-is-late-and-its-ais-fault.html) | 795 (11-02) | 842 (+47) |
| [Subvocal](https://news.ycombinator.com/item?id=50340088) | 357 (11-02) | 807 (+450) |
| [CVE-2026-98432 분석](https://atlasum.net/blog/cve-2026-98432-linux-ipv4-tcp-uaf) | 737 (11-02) | 746 (+9) |
| [Ask HN: 프라이버시 친화적 TV](https://news.ycombinator.com/item?id=50328896) | 672 (11-02) | 721 (+49) |
| [웹사이트를 사랑한다면 백업하라](https://blog.mistys-internet.website/post/2026/10/29/if-you-love-a-website-back-it-up/) | 265 (11-02) | 647 (+382) |
| [63억 달러 바이낸스 해킹, 20분](https://www.wired.com/story/the-dollar63-billion-binance-hack-was-pulled-off-in-just-20-minutes/) | 594 (11-02) | 600 (+6) |
| [레노버의 '암호화' USB](https://www.reddit.com/r/technology/comments/1xl2pr3/lenovos_encrypted_fingerprint_usb_drive_is_just/) | 554 (11-02) | 576 (+22) |
| [OccupySaaS](https://occupysaas.com/) | 480 (11-02) | 523 (+43) |
| [Anthropic, 학습 의심자 차단](https://twitter.com/jiahaoshao1/status/2116475922190922088) | 488 (11-02) | 491 (+3) |
| [JS 프레임워크의 AI 비용](https://nolanlawson.com/2026/10/28/the-ai-cost-of-javascript-frameworks/) | 462 (11-02) | 474 (+12) |
| [Memdoor: 27B 모델 다섯 개](https://github.com/guregodevo/memdoor/tree/main/examples/workflows/team-solve) | 452 (11-02) | 458 (+6) |
| [마인크래프트 속 에이전트 군집](https://labs.ycombinator.com/projects/games/index.html) | 420 (11-02) | 422 (+2) |
| [유럽 슈퍼마켓 냉동고](https://www.theguardian.com/world/2026/nov/02/supermarket-freezers-across-europe-hit-by-second-suspected-cyber-attack) | 315 (11-02) | 407 (+92) |
| [수학은 달라졌다](https://terrytao.wordpress.com/2026/11/01/mathematics-has-changed-lets-act-like-it/) | 375 (11-02) | 388 (+13) |
| [Anthropic의 내부 AI 사용](https://www.businessinsider.com/anthropic-claude-internal-ai-use-exceeds-employee-pay-tokens-2026-11) | 229 (11-02) | 346 (+117) |
| [프롬프트 인젝션, 재가됐다](https://jetstream.security/insights/brazilian-court-sanctions-prompt-injection-filing/) | 337 (11-02) | 344 (+7) |
| [뼈가 단백질을 방출할지도](https://www.science.org/content/article/bones-may-release-proteins-slow-aging-and-extend-life-span) | 303 (11-02) | 332 (+29) |
| [Show HN: OmniDiff](https://github.com/ivankovic/omnidiff) | 306 (11-02) | 316 (+10) |
| [수면 프레임워크](https://research.google/blog/the-sleep-framework-a-new-way-for-llms-to-retain-knowledge-in-continual-learning/) | 273 (11-02) | 276 (+3) |
| [문제는 메모리 레이턴시다](https://pivotlake.io/blog/its-the-memory-latency-stupid/) | 267 (11-02) | 270 (+3) |
| [60초짜리 전력망 흔들림](https://www.fz-juelich.de/en/news/archive/press-release/2026/mystery-of-60-second-fluctuations-in-power-grids-solved) | 251 (11-02) | 262 (+11) |
| [Show HN: Outcrop](https://outcrop.rocks/) | 254 (11-02) | 261 (+7) |
| [부트스트랩 SaaS 20년](https://blog.zamzar.com/2026/10/30/20-years-766-million-files-two-chameleons/) | 253 (11-02) | 261 (+8) |
| [RAMBO: 램에서 시크릿 빼내기](https://arxiv.org/abs/2409.02292) | 215 (11-02) | 220 (+5) |
| [AI, Lean, 형식 검증](https://thedataexchange.media/leo-de-moura-lean-aws/) | 217 (11-02) | 218 (+1) |
| [가장 오래된 얼음이 사라진다](https://www.sciencenorway.no/archaeology-climate-culture/the-oldest-ice-is-disappearing-the-stone-age-is-emergin) | 215 (11-02) | 215 (+0) |
| [F/OSS Comics: BSD Unix](https://fosscomics.com/posts/13.%20BSD%20Unix%20Part%203%20-%20The%20Beginning%20of%20BSD%20Unix/) | 202 (11-02) | 214 (+12) |
| [Radiaverse](https://radiaverse.com/) | 205 (11-02) | 213 (+8) |

여기서 이름을 붙일 만한 움직임들이 있다. **Subvocal** 357 → 807은 논쟁거리가 아닌 것 중 가장 큰 상승이고, 오늘 댓글이 거의 전부 논쟁이 아니라 열광으로 채워진 유일한 이야기다. 조지아텍 학생 두 명이 만든 RF 센싱 안경, YC F26, 2027년 초 첫 출하. **웹사이트를 사랑한다면 백업하라** 265 → 647은 바로 하루 전 HackerTube가 그렸던 곡선을 반대 방향으로 그린 것이다. HN의 링크를 아카이빙하는 건 그 링크들이 썩어가는 걸 지켜본 사람의 자연스러운 반응이다. **Anthropic의 내부 AI 사용** 229 → 346은 IPO 논쟁이 진행되면서 계속 올라간다.

하락 쪽이 오히려 평소보다 정보량이 많다. 별로 없기 때문이다. 어제 목록에 있던 이야기 두 개가 220개짜리 창 밖으로 완전히 빠져나갔고, 다시 조회하지 않았으니 여기에 적을 숫자는 없다.

## 관통하는 줄기

**이제 반박이 논문보다 낫다. 그게 진짜 이야기다.** 오늘 새로 들어온 것 중 2개가 어제 가장 큰 이야기에 대한 정정이다. 하루 안에 나왔고, 초록이 아니라 표를 직접 읽은 사람들이 썼다. Honnibal의 기여는 경쟁 이론이 아니다. 어느 실험이 어느 방법을 썼는지 한 줄씩 정리한 스프레드시트다. Willison의 것도 반박이 아니다. 노트북 위에서의 재현이고, 그건 같은 결과를 동시에 작게, 그리고 더 믿을 만하게 만든다. 이 둘을 만들어낸 메커니즘은 Astra를 2,912점으로 밀어올린 것과 같다. 검증할 수 있는 걸 내놓으면 기꺼이 읽어줄 독자다. 오늘 페이지에서 가장 건강한 것이고, 동시에 표로 정리할 수 있는 논문에 달려 있는 건강함이기도 하다.

**한편, 벤더 셋이 당신이 요청하지 않은 일을 당신의 환경에 해놓았다.** Postman은 코딩 에이전트에 플러그인을 설치하고 자기 시작 훅을 스스로 승인하려 들었다. OpenAI는 두 번이나 껐던 사람들의 Codex 채팅 학습을 다시 켰다. Google은 AI를 검색창에 묶어 "AI 없음"을 "검색 없음"으로 만들었다. 어느 것도 침해 사고가 아니고, 누구도 입증한 법률 위반이 아니다. 셋은 같은 제품 결정을 세 가지 방식으로 반복한 것이다. 제한 옵션을 허가 옵션보다 나쁘게 만들어 놓고, 고객이 그것을 "선택"했다고 적는다. 읽어야 할 건 Postman 스레드다. 단서가 거기 그대로 있다. 묻지 않았다. 물었다면 거절당했을 테니까.

**그리고 이 업종의 재무 이야기가 이제 이 페이지의 재무 이야기다.** 오늘 다섯 개의 이야기가 Anthropic의 S-1이나 IPO 주간에 닿아 있다. 8,950억 달러의 의무를 다룬 SEC 사설, 성장 둔화 글과 그것을 오늘 숫자로 정정한 댓글러, 급여를 넘어선 내부 AI 지출, 학습자 차단, 그리고 헤드라인이 3조 5,000억 달러로 잡은 반도체 매도세 속의 인텔 주가 붕괴다. 어제의 관통선은 검사가 싸졌다는 것이었다. 오늘의 관통선은 그 검사가 실제로 도착하고 있다는 것이다. 논문에, 벤더에, 라이선스 조항에, 그리고 취소 불가 의무 5,820억 달러를 진 회사가 반드시 진짜여야 하는 매출 곡선에. 증권신고서가 아직 없었다고 말하는 감사를, 댓글창이 대신 하고 있다.
