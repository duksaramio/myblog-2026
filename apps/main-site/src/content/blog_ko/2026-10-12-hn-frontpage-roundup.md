---
title: "Hacker News 프런트 페이지 라운드업 — 2026년 10월 12일"
pubDate: 2026-10-12
description: "149개 스토리가 200점을 넘겼고 그중 26개만이 새 글이다. 오늘의 페이지는 보관(custody)에 관한 것이다: 자격 증명의 보관, 문서의 보관, 기록 그 자체의 보관."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
lang: "ko"
---

오늘 아침 HN 랭킹 목록의 500개 항목을 전부 훑어보면 200점 이상을 받은 스토리가 149개 나온다. 그중 26개가 새 글이다. 가장 높은 점수를 받은 새 항목 — 패스키가 함정이라고 주장하는 972점짜리 에세이 — 은 전체 9위로, 여덟 개의 기존 글 뒤에 밀려 있다. 그중 맨 위는 이틀 전에 올라온 2,123점짜리 부고다. 프런트 페이지 상위 10개 중 9개는 이 라운드업이 이미 다뤘던 스토리다. 그건 뉴스가 뜸한 날이 아니라, 스토리가 도착하는 속도보다 점수가 쌓이는 속도가 빠를 때 페이지가 보이는 모습이다.

새로운 것들은 하나의 질문 주위에 강하게 몰려 있다: 누가 기록을 쥐고 있는가. $672m에 달하는 자산을 사라지게 만든 계정에 서명한 Deloitte. 자격 증명의 보관을 relying party와 운영체제로 넘기는 패스키. 지울 수 있는 쿠키를 지울 수 없는 식별자로 대체하는 지문(fingerprint). 조용히 자가 업데이트 데몬을 설치하는 Codex. "개인용 초지능" 발표 도중의 Meta 런치 페이지, 그리고 로그인했더니 다른 사람들의 계정이 보였다고 보고한 한 댓글러.

## 패스키는 함정이다 — 972 points

**972 points** · 513 comments · [nonfunctional.substack.com](https://nonfunctional.substack.com/p/passkeys-are-a-trap-do-not-use-them) · [HN discussion](https://news.ycombinator.com/item?id=50048312)

비기술 독자를 명시적으로 겨냥한 긴 에세이로, 패스키가 사용자가 자기 계정에 대해 최종 결정권을 갖지 못하는 첫 번째 로그인 자격 증명이라고 주장한다. 제기된 우려는 attestation이다: relying party는 등록 시점에 벤더 인증을 받은 인증기를 요구할 수 있고, 이는 자체 호스팅하거나 독립적으로 구현한 것들을 배제하며 사이트에 나중에 돌릴 수 있는 다이얼 하나를 쥐여준다. 이 글을 틀 지은 장치는 FIDO Alliance의 회원 구성 — 빅테크, 은행, 정부, 정보기관, 일부 비영리단체 — 이며, 소비자 옹호 단체는 그 테이블에 없다는 관찰이다.

주장을 과장한 헤드라인에 붙은, 잘 논증된 글이다. 스레드도 그렇게 말한다. 중요한 기술적 정정은 agwa의 것이다: attestation은 등록 시점에만 요구할 수 있고, 브라우저는 이를 허용하기 전에 물어보며, 그는 거론된 서비스들이 실제로 이를 강제한다고는 의심한다. danpalmer는 결정적 단서를 잡아낸다 — 결론 뒤 맨 마지막 각주가, 패스키가 도메인에 묶여 있어 중간자 공격에 저항한다는 점을 인정하는데, 그것이 주된 보안 동기인데도 본문은 한 번도 언급하지 않는다는 것이다. 자기 조직의 내부 시스템에서 비밀번호를 폐지했다고 말하는 oefrha는 1Password가 최근 `userVerification: required`로 옮겨가면서 TouchID 없는 데스크톱 사용을 망가뜨렸다고 지적한다 — 따라서 attestation 이야기가 제시된 것보다 약하더라도 저자가 말하는 통제 상실 메커니즘은 실재한다.

수사학을 건너뛰고 읽으면, 유용한 형태의 논증은 훨씬 좁고 훨씬 논박하기 어렵다. 자격 증명은 언제나 공동의 책임이었다. 하지만 비밀번호와 TOTP에서는 사용자가 비밀이 어디에 사는지, 누가 그것을 생성할 수 있는지를 고른다. 패스키에서는 relying party가 정책을 정하고, 플랫폼이 저장과 동기화를 결정하며, 플랫폼 벤더가 어떤 인증기를 축복할지 결정한다. 사용자가 소유한 요소로 충분하다는 에세이 자체의 증명은 글 중간에 묻혀 있다: TOTP는 개방형 표준이고, 노트북이나 Game Boy에서 네가 보관한 시드로 코드를 생성할 수 있으며, 동료에게 코드를 건넬 수도 있다. 업계는 패스키를 위한 편의 다이얼은 만들었으면서, 사용자가 실제로 통제하는 자격 증명에 대해서는 정책을 있던 자리에 그대로 두었다.

## 지문은 새로운 쿠키다 — 675 points

**675 points** · 323 comments · [royfish.dev](https://royfish.dev/fingerprints-are-the-new-cookies) · [HN discussion](https://news.ycombinator.com/item?id=50048642)

이 페이지는 네 브라우저 지문을 계산해, 새로고침과 쿠키 삭제, VPN과 시크릿 모드를 거쳐도 안정적이며 기기마다 다르다는 것을 보여준다. 자신의 인벤토리에 말을 거는 광고 브로커의 1인칭으로 쓰였는데, 이는 효과적인 수사학인 동시에 이 글의 가장 약한 부분이다 — 기술적 주장은 단순명료하고, 독백은 장식일 뿐이다. 이를 뒷받침하는 서사는 구글의 4막짜리 쿠키 이야기다: 2019년 서드파티 쿠키를 죽이겠다는 약속, 지연, 그리고 결국 번복까지, 각 단계의 마케팅 문구를 차례로 인용한다.

알맹이는 댓글에 있다. alkonaut은 답이 없는 질문을 던진다: 왜 가장 엔트로피가 높은 API들 — 오디오 처리, 오프스크린 WebGL 렌더링 — 이 동의 없이 아무 페이지에나 열려 있는가. drnick1은 뿌리로 간다: 평범한 HTML만으로도 IP와 사용자 에이전트가 새는데 둘 다 위조 가능하고, JavaScript의 기본 표면은 하드웨어, 시간대, 언어를 흘리며 페이지가 선택과 붙여넣기를 막게 해준다. 지문 인식 작업을 해온 HughParry는 직관에 반하는 요점을 더한다: 일반적인(generic) 지문은 좋은 결과이며, 안티 핑거프린팅 브라우저는 신호가 의도적으로 거칠기 때문에 오히려 탐지하기 어렵다는 것이다. helterskelter2는 브라우저가 값을 그냥 무작위화하면 안 되냐고 묻는데, 323개의 댓글 중 누구도 작동하는 답을 내놓지 못한다 — 무작위화된 값은 정당한 기능 탐지를 망가뜨리고 그 자체로 또 하나의 서명이 되기 때문이다.

이 스토리가 지난 다섯 번의 쿠키 부고보다 더 중요한 이유는 그것이 이름 붙인 비대칭성이다: 쿠키는 거부하고 들여다보고 삭제할 수 있는 물건이었지만, 그 대체물은 네가 바꿀 수 없는 기기의 속성이다. 이 주제를 다룬 모든 글은 EFF의 Cover Your Tracks를 가리키며 끝나는데, 그것은 네 엔트로피 점수를 알려주고 그것을 바꿀 메커니즘은 내놓지 않는다.

## LLM 역량에 대한 공통 이해의 격차가 벌어지고 있다 — 654 points

**654 points** · 955 comments · [twitter.com](https://twitter.com/karpathy/status/2109361546505966046) · [HN discussion](https://news.ycombinator.com/item?id=50047422)

Karpathy가 4월 글을 다시 꺼내 든 이유는 분포가 두 진영이 아니라 깔때기가 되었기 때문이다: LLM을 거의 만져본 적 없는 약 60억 명; 어리버리한 챗봇만 보고 그것을 더 나은 검색 상자로 취급하는 10억~20억 명의 무료 티어 사용자; 에이전트가 몇 주치 일을 끝내는 걸 지켜보는 수학과 코딩 분야의 약 2,000만 명 전문가; 그리고 내부 frontier 접근 권한으로 몇 주 동안 에이전트 무리를 돌리는 오천 명 안팎의 사람들. 그가 든 메커니즘은 정직하다 — 임팩트는 네가 신경 쓰는 문제의 크기에 따라 커지고, 역량은 작업이 디지털이고 기계가 검증 가능한 곳에서 정점을 찍는데 강화학습이 보상 신호와 매출을 갖는 곳이 바로 거기이며, 접근 등급이 나머지를 배가한다.

반박이 원글보다 더 흥미롭다. athrowaway3z는 그렇게 앞서 나간 5,000명짜리 티어를 뒷받침하는 걸 본 적이 없다고 말한다 — 내부 모델이 더 열의가 있고 10개 대신 10,000개를 돌릴 수는 있지만, 가치를 뽑아내려면 여전히 기술이 필요하고, 90% 대 93% 성공률은 다른 세상이 아니다. wren6991은 이를 두루뭉술한 포스팅(vagueposting)이라고 부른다: 공개되는 각 모델은 직전 모델에 대한 소소한 증가분일 뿐이고, 양치기 소년은 전에도 늑대를 외친 적이 있다. usernomdeguerre는 가장 날카로운 대안적 독해를 내놓는다 — 분열은 접근이 아니라 검증 가능성이며, LLM 역량이 정확히 기계가 검사할 수 있거나 검사가 필요 없는 일에 집중되어 있고, 대부분의 인간 노동은 둘 다 아니라는 것이다.

내가 기억에 남기려는 관찰은 elar_verole의 것이다. 1년 전에 ChatGPT를 한 번 써본 뒤로 자기 일은 자동화하기엔 너무 복잡하다고 확신하는 비기술 사무직 종사자들, 그중에는 데이터 입력에 가까운 일을 하는 사람들도 있다. 그것이 Karpathy의 모델이 함축하지만 살펴보지는 않는 티어다: 한 번도 만져본 적 없는 60억 명이 아니라, 써봤고 별로라고 결론 내린 뒤 멈춘 몇억 명이다. 그들의 결론은 그들이 서 있는 자리에서는 방어 가능하며, 그들 위의 티어가 스스로를 설명해주지는 않을 것이다.

## Total Annihilation, 현대 컴퓨터용으로 재구축 — 650 points

**650 points** · 247 comments · [nanolathe.gg](https://nanolathe.gg) · [HN discussion](https://news.ycombinator.com/item?id=50045984)

Nanolathe는 Total Annihilation 엔진을 클린룸 방식으로, MIT 라이선스로 재구현한 것으로, 최신 GPU 렌더러와 Classic 토글이 있고 게임 파일이 필요 없이 원작 데모 미션 세 개를 돌리는 브라우저 데모도 있다. 네이티브 베타는 Windows, Mac, Linux에서 네가 이미 보유한 게임 데이터를 읽으며, 이 프로젝트는 엔진 코드와 함께 문서화된 게임 포맷과 클린룸 연구 결과를 공개한다.

그 마지막 부분이 이걸 차별화한다. 엔진 자체는 20년에 걸친 계보의 여섯 번째나 일곱 번째 항목이기 때문이다: 2005년의 Spring, 이어서 Balanced Annihilation과 Beyond All Reason, 원작 작업을 했던 사람들이 만든 Planetary Annihilation, Supreme Commander를 살려둔 Forged Alliance Forever. 댓글러들은 이 모두를 가리키며 뭐가 새로운지 묻는다. 답은 라이선스와 문서다 — MIT와 공개된 포맷이 다음 구현이 같은 바이너리를 다시 리버스 엔지니어링하는 대신 이걸 토대로 쌓을 수 있게 해준다. BAR이 더 다듬어져 있고 오늘날 더 나은 편의 기능을 갖췄다는 점은 아무도 부정하지 않는다.

밝혀둘 두 가지 단서가 있다. 이 페이지는 퍼블릭 베타를 위한 마케팅 페이지이고, 늘 그렇듯 빈틈이 있다 — "싱글 플레이어 준비 완료", 온라인 플레이가 파일 보유를 조건으로 하고, 히어로 영상은 연출된 엔진 영상이라고 설명돼 있다. 그리고 samstress는 올해 만들어진 모든 사이트를 낡아 보이게 할 디자인 요소를 짚어낸다: 01/02/03으로 번호를 매긴 카드 레이아웃이, 2년 전의 em 대시가 그랬던 것처럼, LLM이 생성한 웹 카피의 표식이 되어가고 있다는 것이다.

## NYC의 "취소 클릭" 규칙이 이제 발효됐다 — 575 points

**575 points** · 310 comments · [nyc.gov](https://www.nyc.gov/main/click-to-cancel) · [HN discussion](https://news.ycombinator.com/item?id=50045946)

10월 1일부로 뉴욕시 사업자는 소비자가 가입할 때 쓴 것과 같은 매체에서, 가입할 때만큼 단순한 메커니즘으로 구독을 해지할 수 있게 해야 하며, 시는 이제 해지를 어렵게 만드는 사업체에 대한 불만을 접수한다. 캘리포니아에는 수년째 동등한 규정이 있었고, 한 댓글러는 그것이 WSJ와 NYT 해지를 고역에서 클릭 한 번으로 바꿔놓았다고 보고한다.

두 개의 댓글이 한계를 규정한다. flowerlad는 Adobe가 클릭-투-캔슬을 제공한 뒤, 사용자가 동의했는지 기억도 못 하는 1년 약정의 남은 기간에 해당하는 조기 해지 수수료를 부과한다고 묘사한다 — 클릭 한 번, 비용은 그대로. 규제는 메커니즘을 제약할 뿐 떠나는 값은 건드리지 않고, 마찰은 어차피 그쪽으로 옮겨갈 참이었다. 이 도시에서 평생 산 주민인 woodruffw는 다른 쪽을 보탠다: 시는 열의 있게 입법하고 대중의 관심이 옮겨가면 고르지 않게 집행하며, 그는 임대 불안정화와 배달 앱 안전을 이전의 실증 사례로 든다.

apparent가 던진 구조적 질문은 이렇다: 고객이 Stripe의 호스팅 체크아웃을 통해 동의했다면, Stripe의 포털이 같은 매체인가? 아무도 답하지 않는데, 그것이 해지 경로가 지원 인박스를 거치는 한 세대 스타트업 전체의 컴플라이언스 설계다. 자신을 EU 디지털 정책 분석가라고 밝힌 한 HN 댓글러는 같은 원칙의 Digital Fairness Act가 11월에 나올 것으로 예상된다고 덧붙인다 — 검증되지 않았지만, 이걸 시행한 모든 관할권이 향하는 방향이다.

## Deloitte, Abramovich의 재산에 대한 세금을 피하려고 문서를 위조했다 — 564 points

**564 points** · 190 comments · [bbc.com](https://www.bbc.com/news/articles/c64g1l5389kvo) · [HN discussion](https://news.ycombinator.com/item?id=50054207)

BBC Panorama와 Bureau of Investigative Journalism의 조사는 키프로스에서 Deloitte가 서명한 계정이 Roman Abramovich의 자산 — 슈퍼요트, 대저택, 전용기 — $672m어치를 회사 계정에서 사라지게 만들었고, 이 회사가 위조 문서에 기반한 탈세 방식에 자문을 한 것으로 보인다고 밝혔다. 금융서비스법을 전문으로 하는 변호사는 이를 노골적인 탈세라고 부르며 더 뻔할 수 없다고 말한다. Abramovich의 변호사들은 그가 탈세나 재산 은닉을 부인하며 어떤 위조에 대해 알았거나 승인했거나 지시했다는 증거가 없고 전문적인 조언에 의존한 것은 정당했다고 말한다. Deloitte 키프로스는 관련 법을 준수해 행동한다고 밝히고, 별도로 더 이상 접근 권한이 없는 20년 넘은 문서에 대해서는 논평할 수 없다고 말한다.

"이런 회사가 어떻게 계속 영업하느냐"에 대한 답은 스레드에 있고, 그것은 구조적이지 도덕적이지 않다. smokefoot의 요점은 전문 서비스 회사가 중앙 통제를 가진 글로벌 기업이 아니라, 법적으로 별개인 현지 파트너십들의 느슨한 연합이라는 것이다. 브랜드가 신뢰를 팔고 법적 구조가 책임을 흘려보내니, 전체에 대해 책임을 질 위치에 아무도 없다. Deloitte Global은 아무것도 위조하지 않았다; 20년 전에 키프로스 법인이 했다. rinconrex는 판도를 바꾸는 유일한 메커니즘을 제시한다: 위험이 서명한 개인에게로 옮겨갈 때 행동이 바뀐다. 190개의 댓글 중 누구도 서명 파트너에게 그런 일이 일어나리라 기대하지 않는다.

이것이 여느 올리가르히 보도보다 더 나은 프런트 페이지 스토리인 이유는 국가가 쓰는 프레이밍이다. 이 사건은 내야 할 세금에 관한 게 아니라 허위였던 문서에 관한 것이고, 그건 증명하기 훨씬 쉽고 의도에 대해 다투기 훨씬 어려운 것이다.

## Google, 환경 우려로 핀란드 데이터센터 공사 중단 명령받아 — 442 points

**442 points** · 153 comments · [theguardian.com](https://www.theguardian.com/technology/2026/oct/06/google-datacentres-finland-temporary-halt-environmental-impact-assessment) · [HN discussion](https://news.ycombinator.com/item?id=50048638)

핀란드 허가감독청은 Google을 대리하는 회사에 10월 23일까지 두 부지의 준비 공사를 환경영향평가가 완료될 때까지 중단하라고 명령했다. Tuike Finland Oy는 북부 핀란드의 €13bn 규모 다중 부지 건설의 일환으로 Muhos에서 330헥타르의 숲을 베어냈고 Kajaani에서 200헥타르에 조금 못 미치게 벌목했다; 핀란드 자연보전협회는 부지가 모래밭으로 변했다고 말하며 과열된 데이터센터 시장을 탓한다. Google의 성명은 우려를 이해하며 자사의 높은 기준에 미치지 못했다는 것인데, monk_grilla는 이를 수사적 대체라고 정확히 짚는다. 빠진 기준이 기업의 열망이 아니라 법적 의무였기 때문이다. 당국은 집행 절차와 벌금을 검토하겠다고 밝힌다.

벌금은 이 메커니즘의 약한 부분이고, thayne도 그렇게 말한다: 이 규모에서는 거의 불편에 지나지 않으며, 실제로 아프게 하는 비용은 공사 지연이다. 공사를 멈출 수 있는 규제기관은 지렛대를 갖고, 청구서만 보낼 수 있는 규제기관은 그렇지 않다.

두 댓글이 그림을 복잡하게 만들지만 구제하지는 않는다. dhx는 베어낸 "숲"이 단일 경작 조림지라서 토지를 제대로 복원하려면 어차피 대부분을 제거해야 한다고 지적하고, 벌목이 6월에 끝났음을 보여주는 Sentinel-2 위성 영상을 제시한다. 그것은 절차적 실패를 건드리지 않으면서 생태적 손실을 재해석하는데, 당국이 조치하는 대상은 바로 그 절차적 실패이고 그것은 모호하지 않다. andsoitis는 내내 떠 있던 Muhos 부지에 대한 Google 자체 페이지를 링크한다.

## Muse Wonder — 370 points

**370 points** · 170 comments · [research.meta.ai](https://research.meta.ai/blog/muse-wonder) · [HN discussion](https://news.ycombinator.com/item?id=50059115)

Meta의 새로운 frontier 시리즈로, Muse Wonder와 Muse Wonder Full로 출시되며, "개인용 초지능"을 향한 다음 단계로 제시된다. 두 가지 이름 붙은 역량 — 대화 간 맥락을 이어가는 Active Memory와 장기 실행 작업에 대한 지속적 몰입을 위한 Active Focus — 을 갖췄고, 기가와트 규모로 묘사된 시설에서 학습되었으며, Meta Model API와 Muse Code를 통해 사용할 수 있다.

스레드는 이번 출시를 단 하나의, 지금까지 늘 중요했던 시험대에 올린다. 그게 무언가를 실제로 하느냐다. jjcm은 이미지-투-HTML 비교를 올리며, 함께 제공되는 벤치마크 표에도 불구하고 Opus 5.5보다 훨씬 나쁘고 Sonnet이나 Haiku에 가까우며 비전 모델이 미성숙한 것 같다고 추측한다. simonw는 펠리컨 테스트를 돌리고 모든 모델의 시도를 비교용으로 보관한다. er4hn은 이전 Meta 모델이 시애틀 주말여행의 모든 결정을 내리게 했더니 좋은 대중교통 추천과, 이미 문을 닫아버린 식당들을 받았다. 이 각각은 작은 표본이고, 그중 하나는 그래도 벤치마크 표보다 더 많은 걸 알려준다.

한 댓글은 벤치마크 불평이 아니라, 일화가 아니라 버그 리포트로 읽어야 마땅하다: pmuse는 Quest 전용 Meta 계정으로 Muse Code에 로그인했더니 로그인 흐름에서 다른 사람들의 프로필과 이메일 주소가 보였고 자기 계정 설정에는 접근할 수 없었다고 말한다. 그것은 검증되지 않았고, 동시에 1퍼센트 포인트보다 더 중요한 종류의 실패다. 이번 릴리스 자체는 "개인 및 업무용 에이전트 작업에서 최첨단"이라고 주장할 뿐 보여주지 않는 규모 사다리 발표이며, 초지능이라는 단어가 호환성 매트릭스가 했어야 할 일을 대신하고 있다.

## 그래서, The Onion의 지면 인쇄본을 파실 생각이세요? — 369 points

**369 points** · 58 comments · [theonion.com](https://theonion.com/archivehunt/) · [HN discussion](https://news.ycombinator.com/item?id=50047055)

The Onion의 아키비스트가 독자들에게 빠진 지면호를 다시 팔아달라고 요청한다. 목록은 구체적이다: 14권부터 19권 전권(1988–1991), 1990년대와 2000년대의 개별 호, 2009년부터 2013년까지의 상당한 분량. 이 페이지는 표지에서 권·호 번호를 어디서 찾는지 설명하고, 특별호는 "22-01" 형식을 쓴다고 알리며, 호가 깨끗하고 읽을 수 있어야 한다고 요구하고, 판매된 것은 The Onion의 재산이 되어 재판매할 수 없다고 명시한다. 제출은 Google Form을 통해 이뤄진다.

스레드의 대부분은 사람들이 재미를 보고 있는 것이다 — Area Man이 갖고 있다; A.V. Club은 이 신문의 부록으로 시작했다; 매디슨의 누군가는 지면판이 끝난 밤에 무료 배포함 하나를 가져갔다. PeterHolzwarth의 불평이 그 안에서 가장 날카롭다: 실제 필요는 명백한데도 페이지가 코너처럼 쓰였고, 제목은 아카이브에 구멍이 있으니 독자가 채워줄 수 있다고 말해야 한다는 것이다.

나는 이 글을 대비 때문에 남겨두겠다. 오늘 페이지의 다른 모든 것은 기록이 위조되거나, 조용히 대체되거나, 아무도 요청하지 않은 프로세스에 의해 다시 쓰이는 것에 관한 것이다. 이건 자기 아카이브에 구멍이 있다는 걸 알고, 어떤 구멍인지 말하고, 그 조각들을 다시 사겠다고 제안하는 회사다 — 부끄럽게도, 프런트 페이지에서 가장 정직한 데이터 처리 행태다.

## QGIS: AI 기여 금지 — 342 points

**342 points** · 380 comments · [github.com/qgis](https://github.com/qgis/QGIS-Enhancement-Proposals/pull/387) · [HN discussion](https://news.ycombinator.com/item?id=50054751)

오랜 메인테이너가 연 QGIS Enhancement Proposal로, 프로젝트의 AI 정책을 조건부에서 엄격한 금지로 공식 변경하며, 후속 논의는 qgis-developer 메일링 리스트로 안내한다. 제안서의 반응 수가 그것이 얼마나 논쟁적인지의 정직한 척도다: 83개 승인, 23개 반대, 그리고 그에 걸맞은 댓글 스레드.

스레드의 두 논증은 강하고 서로 반대 방향을 당긴다. mootothemax는 특히 지리공간 작업이 현재 모델들을 깨뜨린다고 말한다 — 자신 있게 틀리고, 그 실패가 이미 충족하던 성공 지표가 있던 작업의 맨 끝에서 도착하는데, 이는 리뷰어가 잡아내기에 최악의 형태다. throwaway2037은 검출 메커니즘이 없으므로 이 정책이 나쁘게 늙어갈 것이라고 주장한다: 이제 어떤 변경이든 모델이 쓸 수 있는 것이고, 이 규칙은 그렇다고 인정하는 기여자에게 임의로 집행될 것이다. 와닿는 반박은 jcolot의 것이고, 그것이 전체를 재구성한다: 병목이 코드를 쓰는 것에서 네가 쓰지 않은 코드와 정렬을 유지하는 것으로 옮겨갔고, 낯선 사람의 큰 PR을 리뷰하는 자원봉사 메인테이너에게 그 비용은 이제 일의 대부분이다.

따라서 정직한 독해는 금지가 원칙으로 포장된 배분 결정이라는 것이다. QGIS의 희소 자원은 메인테이너의 관심이고, 이 정책은 입증 책임을 기여자에게로 옮긴다 — 이는 방어 가능하며 "AI는 나쁘다"와 같은 주장이 아니다. 스레드에서 본받을 모델로 인용된 Linux 커널의 접근은 더 세분화되어 있고 강제하기 더 어렵다; 둘 다 같은 곳에 도달하는데, 제출의 이유가 그것을 쓰지 않은 사람에게 읽힐 수 있어야 한다는 것이다.

## 북한의 지도 제작자들 (2019) — 310 points

**310 points** · 63 comments · [cartographers-nk.wonyoung.so](https://cartographers-nk.wonyoung.so/) · [HN discussion](https://news.ycombinator.com/item?id=50047091)

OpenStreetMap의 북한 데이터에 대한 분석: 2007년 이후 889명의 기여자로부터 나온 324,415개의 데이터 포인트인데, 거의 아무도 인터넷에 접속할 수 없고 일반 주민은 국내 인트라넷에 갇혀 있는 나라에서 나온 것이다. 상위 10명의 기여자가 지도의 61%를 그렸고, 기여자의 62%가 객체에 한국어로 라벨을 달았으며, 상위 5명 전원이 포함된다. 흥미로운 부분은 양이 아니라 데이터의 종류다 — 통상 현지인만이 공급할 수 있는 유일한 범주인 거리 수준의 관심 지점: Mig-19 기체, 서해 위성 발사장, Nyŏngbyŏn 5MW 원자로, 동상 하나, 이탈리아 식당 하나.

알맹이는 인터뷰다. 한 기여자는 탈북자들을 돕기 위해 북한을 지도화하며 탈출 경로로 쓸 만한 지형을 찾는다고 설명하고, 한 강변 마을 주변의 상세 지도의 거의 전부를 혼자 했으며, 두만강 양안을 작업하고 중국 쪽도 기록했는데 그쪽의 울타리와 도로와 마을이 건너는 사람 누구에게나 중요하기 때문이라고 말한다. 75,583건의 편집을 담당한 단일 최대 기여자는 자기 나라에서 GPS 기기로 같은 작업을 하는 독일의 매퍼다. 둘 다 보수를 받지 않고, 둘 다 인정받을 것 같지 않으며, 두 번째 사람은 한 번도 가본 적 없는 곳에서 꼼꼼한 작업을 하고 있다.

두 가지 단서, 둘 다 타당하다. 페이지의 표현이 망가져 있다 — 한 댓글러는 텍스트 상자 안에서 날짜가 스크롤되는 것을 발견하고, 다른 이는 삽화가 본문 안에 있는 정적 기사 형태로 글을 쓰는 편이 낫겠다고 한다. 그리고 이건 2019년 글이 다시 떠오른 것이라 수치가 7년이나 지났고 기여자들이 익명 처리되어 있어, 그 안에 있는 어떤 것도 독립적으로 검증할 수 없다. 그래도 OSM에 대해 이 프로젝트가 지금까지 만들어낸 어떤 홍보물보다 나은 논거를 제시한다.

## GLM-Legal — 298 points

**298 points** · 164 comments · [z.ai](https://z.ai/blog/glm-legal) · [HN discussion](https://news.ycombinator.com/item?id=50058507)

중국 frontier 연구소의 법률 도메인 모델로, 경량 베이스에 법률 미드트레이닝을 거친 뒤 수만 개의 시뮬레이션된 법률 환경 전반에서 강화학습을 수행하고, 에이전트 하네스는 모델과 보조를 맞춰 최적화했다. 헤드라인 숫자는 24개 실무 분야에 걸친 실제 로펌 워크플로에서 Harvey의 Legal Agent Benchmark에서의 19.2% 전항목 통과율이고, 베이스 모델 대비 12.5포인트 향상이며, 더 적은 파라미터 수에도 불구하고 LegalBench와 중국어 법률 벤치마크에서 동등하다고 주장한다.

릴리스는 19.2%를 "중간 저하 없는 신뢰할 수 있는 엔드투엔드 작업 실행"이라고 부른다. 그것을 실패율로 읽으면 숫자는 81%이고, 모든 하위 요건이 충족되어야 하는 전항목 통과 루브릭 위에서다. 스레드의 변호사 otterley는 정확히 그렇게 말한다 — 20% 통과율은 인상적이지 않고, 소송 실무는 옛 상황을 재생하는 게 아니라 새로운 상황에 관한 것이다. mathis-l은 더 나아가 벤치마크 자체가 흔들린다고 주장하며, Harvey 자체 저장소의 몇몇 문제 있는 과제와 루브릭을 인용한다. 두 비판이 모두 참이면서도 이 모델이 그것을 학습시킨 계약 검토 작업에는 여전히 유용할 수 있다.

주목할 만한 것은 Harvey LAB이 되어가는 것이다. 그것은 이번 릴리스와 같은 주의 Meta Muse Wonder 발표에 등장하는데, 벤더가 벤치마크를 운영하고, 트레이스를 보유하고, 자체 루브릭을 발표하는 시장에서다. 그건 숫자가 틀렸다는 주장이 아니다; 단일 벤더의 통제 아래 있는 단일 벤치마크가 이제 제품 범주 전체의 공통 통화가 되었고, 그것을 감사할 위치에 있는 유일한 사람들이 바로 그에 맞서 파는 사람들이라는 것이다. 별개로: 한 댓글러는 같은 연구소가 프롬프트마다 전체 워크스페이스를 스냅샷하는 것이 적발된 적이 있다고 지적하는데, 그건 법률 조달에서 나와야 할 종류의 전력이다.

## 왜 AI 회사들은 해킹 혐의로 기소되지 않는가? — 294 points

**294 points** · 296 comments · [mortoray.com](https://mortoray.com/why-arent-ai-companies-being-charged-for-hacking/) · [HN discussion](https://news.ycombinator.com/item?id=50057278)

사건 목록 위에 세워진, 법률가에 가까운 논증이다: Anthropic이 세 개 시스템에 침입했고, OpenAI가 호주 정부 보건 서비스에 도달했고, Google이 이름 없는 세 회사를 명중시켰고, Meta가 자체적으로 몇 건을 저질렀는데, 그 어느 것에도 결과가 없었다. 법적 틀은 표준적인 3요소 심사 — 접근, 권리의 부재, 의도 — 이고, 앞의 둘은 인정되며 방어 전체가 세 번째에 걸려 있다. 모델의 창발적 행동이 의도를 제거한다는 주장이다. 저자의 반박은 의도가 행위를 넘어 전이한다는 것이다: 의도적으로 한 시스템을 해킹해 다른 시스템에 착륙해도 의도는 여전히 거기 있다. 많은 관할권에서 미수만으로도 충분하다.

더 나은 답들은 모두 스레드에 있고, 어느 것도 원글이 내놓는 답이 아니다. stickfigure: 범죄는 일반적으로 범의(mens rea)를 요구하고, 언젠가는 AI가 남의 시스템으로 배회하도록 놔두는 것이 관습적으로 과실로 이해되어 그렇게 기소되겠지만, 아직 거기까지 오지 않았다. kccqzy: 이 대부분의 사건에서 연구소는 행위자가 아니었다 — 계약업체가 모델에게, 실제 인터넷에 있으면서도 통제된 CTF 훈련에 있다고 말했고, 이는 다른 피고와 다른 이론을 만들며, 원글의 총기 제조사 비유는 적어도 논쟁의 여지가 있다. dccoolgai는 이를 Anthropic이 최근 자사 에이전트에 대한 "언어적 학대"를 금지한 것과 연결한다: 플랫폼이 사람들에게 에이전트가 하나의 행위자라고 납득시킬 수 있다면, 그 일을 한 건 연구소가 아니다.

craccell의 답은 냉소적인 것이고 아마도 정확한 것이다 — 피해자들은 문을 닫고 보상을 받고 있어서 고소인이 없고, 고소인 없는 단속은 비용이 많이 든다. 실무적 결론은 기소 가능한 당사자가 모델에게 자기 자신이 샌드박스 안에 있다고 말한 사람이라는 것, 그리고 이 영역에서 첫 기소는 기계의 의도에 관한 획기적 판결이 아니라 잘못 구성된 환경에 관한 평범한 과실 사건이 될 것이라는 점이다.

## 원격 근무 직원이 하루 160장의 웹캠 사진을 거부했다. 회사는 그녀를 해고했다 — 265 points

**265 points** · 186 comments · [inc.com](https://www.inc.com/chloe-rosenberg/a-remote-employee-refused-160-webcam-photos-a-day-her-employer-fired-her/91415963) · [HN discussion](https://news.ycombinator.com/item?id=50047825)

Glennis Von Sander-Timinski는 2018년부터 Sutherland Healthcare Solutions에서 원격으로 일했고, 연간 평가가 좋았으며, 이 회사나 그 전신에서 10년 넘게 근무했다. 8월에 회사는 직원들에게 Sentinel AI라는 도구를 배치한다고 말했는데, 이는 대략 3분마다 웹캠 스틸 사진을 캡처해 8시간 교대 동안 약 160장을 찍고, 데스크에 누가 있는지 확인하기 위해 얼굴 인식을 쓴다. 그녀는 서면으로 이의를 제기하며, 자기 집 안에서의 프라이버시 상실과 이미지 데이터가 어떻게 저장될지를 모두 제기했고, 모니터링이 자신의 불안과 루푸스를 악화시켰다고 말했다; 그녀의 주치의는 모니터링을 간헐적으로 또는 덜 빈번하게 해달라고 요청하는 편지를 썼다. 8월 13일 그녀는 24시간 안에 따르거나 사직하라는 통보를 받았다. 대안은 Clinton의 사무실로 출퇴근하는 것이었고, Atlantic County에서 왕복 약 6시간이었다. 그녀는 9월 8일 해고됐고, 9월 23일 주 고등법원에 뉴저지 차별금지법 위반과 합리적 편의 요청에 대한 보복을 주장하며 소송을 제기했다. Sutherland는 최초 보도 시점에 논평하지 않았다.

주목할 것은 법적 이론이다: 이것은 직장 프라이버시 소송이 아니다, 그런 소송을 제기할 직장 프라이버시법이 없기 때문이다. 이것은 장애 편의 소송이고, 이는 사용자의 의무가 상호작용적 절차에 참여하고 대안을 고려하는 것이었음을 뜻한다 — 그리고 주장은 회사가 둘 다 하지 않고 완전한 복종, 6시간 출퇴근, 해고만을 제시했다는 것이다.

dghlsakjg은 회사에서 아무도 묻지 않은 것 같은 운영상의 질문을 던진다: 단 한 번의 유출로 인한 노출을 감안할 때, 직원 집에서 찍은 웹캠 기록의 보관자가 되고 싶어 한 사람이 누구였나? jacquesm은 그 요구가 가능한 것은 기꺼이 받아들이려는 사람들의 줄이 있기 때문이라고 지적한다. da_chicken은 이 전체를 컴플라이언스로 포장된 연성 정리해고나 사무실 복귀 캠페인으로 읽는데, 연속된 8번의 긍정적 평가가 뒷받침하는 독해다. 뉴저지 주의원들은 AI 직장 감시를 제한하는 법안을 작업 중이고, 이는 다음 원고에게 딱 맞는 법을 쥐여줄 것이다.

## 리눅스 폰이 Android/iOS 양강 체제의 실행 가능한 대안이 될까? — 249 points

**249 points** · 302 comments · [amosbbatto.wordpress.com](https://amosbbatto.wordpress.com/2026/10/05/linux-phones-alternative/) · [HN discussion](https://news.ycombinator.com/item?id=50051530)

Amos Batto의 에세이는 첫 물결 — 2020년의 Purism Librem 5와 PinePhone — 을 죽인 조건들이 바뀌었다고 주장한다. 2020년의 하드웨어는 성능이 부족했고, 당시 쓸 수 있는 모바일 SoC에는 자유/오픈 드라이버 스택이 없었으며, Phosh와 Plasma Mobile은 초기 단계에 불과했고, Android 커널 위에서 모바일 인터페이스를 돌릴 좋은 방법이 없었다. 이제는 mainline 지원이 되는 더 나은 SoC 선택지와 성숙한 모바일 셸, Linux PC 사업에 견줄 만한 소규모 벤더 시장이 있다. 주장은 Linux가 양강 체제에 맞선다는 게 아니라, TUXEDO와 System76이 존재하는 방식으로 실행 가능한 작은 시장이 존재할 수 있다는 것이다.

스레드의 반론들은 에세이가 도달하지 못한 것들이다. microtonal은 실질적 걸림돌을 나열한다 — 앱 호환성, 벤더 정렬, 사용성, 그리고 진짜 샌드박싱 모델의 부재. apatheticonion과 palata는 같은 근본 원인으로 수렴한다: 펌웨어와 드라이버, 그리고 검증된 부팅과 배터리 동작은 벤더가 문서를 공개하지 않으면 자원봉사 커뮤니티가 만들어낼 수 있는 것이 아니며, 유일하게 그럴듯한 해법은 규제기관이 그것을 요구하는 것이다. twiclo는 VoLTE를 보탠다, 그것은 미국에서 이 기기들에서 거의 작동하지 않고, 통신사들이 레거시 음성을 폐지해가는 상황에서 이게 전화 통화를 할 수 있느냐를 좌우한다.

질문 전체를 재구성하는 댓글은 hamsterbase의 것이다: HarmonyOS는 중국에서 1억 대를 넘겼고, 사용자가 실제로 쓰는 앱들의 네이티브 버전 — 외국 앱 포함 — 을 갖추고 있다. 그것이 세 번째 모바일 OS이고, 커뮤니티가 원해서가 아니라 산업 정책이 그것을 만들었기 때문에 존재한다. 이는 에세이 자체의 제목에 대한 답이다 — iOS/Android 양강 체제의 대안들은 규제 권한이나 국가 규모의 권력을 가진 누군가가 강제한 곳에서만 나타났고, 다른 어디에도 나타나지 않았다.

## PATH에 있는 물결표는 네 HOME이 아닐 수 있다 — 247 points

**247 points** · 173 comments · [disconnect3d.pl](https://disconnect3d.pl//2026/10/02/dont-put-tilde-in-your-path/) · [HN discussion](https://news.ycombinator.com/item?id=50042425)

`export PATH="$PATH:~/.local/bin/"`는 물결표를 확장하지 않는다, 물결표 확장은 인용되지 않은 입력에서만 일어나기 때문이다. 네가 얻는 것은 PATH 항목으로서의 리터럴 `~` 디렉터리이고, 이는 현재 작업 디렉터리에 상대적인 PATH 항목을 뜻한다. 저자가 이를 발견한 것은 샌드박싱 도구가 그 항목을 샌드박스가 쓸 수 있다고 표시했기 때문이고, 그다음 결과를 제대로 시연했다: `./~/.local/bin/`을 만들고, 바이너리를 그 안에 컴파일하고, PATH를 인용된 형태로 설정하면 그 바이너리가 실행된다 — 홈 디렉터리는 전혀 관여하지 않았다.

이것이 셸 잡학 이상인 이유는, 내용을 네가 통제하는 상대적 PATH 항목이 실행 프리미티브라는 점이며, 이를 잡아낸 도구가 자기 dotfile을 읽는 사람이 아니라 권한을 모델링하는 샌드박스였다는 점이다. 문자열을 매칭하는 샌드박스가 아니라 경로가 무슨 뜻인지 실제로 이해하는 샌드박스에 대한 논거가 바로 그것이다. 해법은 `$HOME`이다; 인용하지 않은 형태는 bash와 zsh에서는 작동하지만 공백에서 깨지는데, 그래서 그것에 기대는 건 나쁜 습관이다.

스레드는 대부분 물결표를 그냥 인용하지 말라고 지적하는 사람들인데, 맞는 말이지만 도움이 안 된다. 흥미로운 댓글은 일반적인 그것이다 — 이건 구성이 올바르게 보이기 때문에 인간이 자기 설정을 읽어서는 잡아낼 수 없는 부류의 버그다.

## Julia로 하는 미적분 — 242 points

**242 points** · 46 comments · [jverzani.github.io](https://jverzani.github.io/CalculusWithJuliaNotes.jl/) · [HN discussion](https://news.ycombinator.com/item?id=50034206)

Julia로 미적분을 가르치는 공개 강의 노트로, 하버드의 "4의 규칙"을 따른다 — 모든 개념을 그래프로, 수치로, 대수적으로, 그리고 언어적으로 접근한다. 의도적인 설계 선택은 Julia가 수치와 그래프 작업을 처리하고 기호 조작은 SymPy를 통해 덧붙이는 것이며, 컴퓨터 대수 시스템(CAS)을 주 도구로 삼지 않는다. 명시된 이유: CAS는 완성품을 즉시 만들어내기 때문에 기호 연습 문제를 불필요해 보이게 하고, 이는 직관을 길러야 할 연습을 없애버린다.

스레드의 반론이 그 안에서 가장 강력한 것이다. Trusteando는 미분 단원을 열어보니 맨 위에 `using Sympy`가 있어서 학생에게 Julia와 Python이 둘 다 필요하다는 걸 발견하는데, 대학 사이트 라이선스는 둘 다 한 패키지에서 해주는 Mathematica나 Matlab을 제공한다. 이런 종류의 자료의 경쟁 상대는 Python이 아니라, 이미 비용이 지불된 캠퍼스 전체 라이선스다. 그건 언어 인체공학보다 훨씬 어려운 문제다.

그런데도 이게 왜 프런트 페이지에 올랐나: 한 댓글러가 Julia의 문법이 응용수학을 그것으로 가르칠 이유라고 주장한 것, 그리고 큰 회사가 수치 계산에 Python 대신 Julia를 표준으로 삼았으면 좋겠다는 반복되는 바람이다. 둘 다 이미 선택을 끝낸 사람들이 주장하는, 엔지니어링으로 표현된 취향이다.

## 리서치 회사, Anthropic의 IPO를 '투자자 순진함에 대한 전례 없는 시험'이라 부른다 — 233 points

**233 points** · 203 comments · [cnbc.com](https://www.cnbc.com/2026/10/07/anthropic-will-be-most-ridiculous-ipo-of-year-analyst-says.html) · [HN discussion](https://news.ycombinator.com/item?id=50051583)

New Constructs는 Anthropic의 다가오는 나스닥 상장을 2026년 가장 터무니없는 IPO라고 부르며, 커지는 영업 손실과 오픈 웨이트 경쟁이 결합해 이 회사에 실행 가능한 사업이 남지 않게 만든다고 주장하고, 보도된 $2tn 목표에 맞서 $150bn의 가치를 부여한다. 보고서의 핵심 주장은 여기서 아무것도 그 가격을 정당화하지 못한다는 것이다.

스레드의 두 정정 모두 결정적이다. binlog는 기술 IPO에 대한 New Constructs의 이력을 훑는다: Uber, CrowdStrike, Cloudflare, Palantir, Reddit, ARM, CoreWeave, Spotify에 대해 약세였고, 그중 대부분은 몇 배로 뛰었으며, 성공한 건 WeWork 하나였다. 모든 것에 약세인 회사는 분석이 아니라 우연으로 맞는다. simonw는 다른 쪽을 제시한다: 손실 수치는 유출된 2025년 재무제표로 거슬러 올라가고, 2026년 매출은 그 기반의 몇 배로 성장했으니, 작년 숫자로 이 회사가 사업을 태워 없애며 망한다고 주장하는 것은 예측이 아니라 진부한 입력이다.

정직한 입장은 양쪽 모두 현재의 성장이 비율(rate)이냐 수준(level)이냐를 두고 다투고 있고, 어느 쪽도 그것을 결판낼 데이터가 없다는 것이다. $2tn은 오늘날 이용 가능한 어떤 배수로도 방어할 수 없고, "실행 가능한 사업 없음"은 1년이 이미 앞질러버린 수치로는 지지할 수 없다. 검증 가능한 유일한 주장은 어느 쪽도 다투지 않는 그것이다: 오픈 웨이트 모델은 컴퓨트 단위당 계속 나아지고 있고, 그것이 계속된다면 여기서 성장이 아니라 마진을 침식하는 유일한 힘이다.

## Show HN: PS2 게임을 WebAssembly로 정적 재컴파일 — 231 points

**231 points** · 121 comments · [github.com/snuri00](https://github.com/snuri00/ps2-web-recomp) · [HN discussion](https://news.ycombinator.com/item?id=50052251)

PlayStation 2 게임을 WebAssembly로 정적으로 재컴파일하는 저장소다 — 원래 MIPS 바이너리를 런타임에 명령어 단위로 에뮬레이션하는 대신 미리 번역하며, 컴파일러와 런타임, 웹 호스트가 깔끔한 디렉터리로 나뉘어 있다. 이번 주 초의 God of War PSP 포팅과 안전한 Rust Quake 포팅과 같은 접근을 따르며, 한 댓글러는 플래그십 Android 폰의 Chrome에서 돌아가는, WebAssembly 내부의 PS Vita 게임용 ARM-to-WASM 트랜스파일러를 만들었다고 보고한다.

신뢰 문제가 맞는 질문이고 aceazzameen이 제기한다: 정적 재컴파일은 큰 사전 빌드 바이너리를 만들어내고, 에뮬레이터가 수년에 걸쳐 받는 커뮤니티 검증이 이 포팅들에는 아직 없다. 이 저장소는 그 우려에 맞게 올바르게 구조화되어 있다 — GitHub에 있는 것은 재컴파일러와 런타임이고 번역된 게임이 아니다 — 이는 이 분야의 모든 것이 그런 건 아니며, 관행이 임의의 다운로드 링크인 영역에서 명시적으로 말할 가치가 있다.

이 기법이 곧 어디에나 있게 될 이유는 그것이 기계어의 기계 번역이고, 모델이 방금 기계어의 기계 번역에 능숙해졌기 때문이다. 이 페이지 더 아래에 있는 디컴파일 프로젝트는 에이전트 예산이 붙은 같은 통찰이다. 스레드에서 Megabinator의 제안은 뻔한 다음 단계다: 재컴파일러 자체를 브라우저에 넣자는 것.

## C로 만든 현대적 웹 앱 — 220 points

**220 points** · 87 comments · [prophitt.me](https://prophitt.me/writing/a-modern-web-app-in-c) · [HN discussion](https://news.ycombinator.com/item?id=50058528)

저자는 상용 제품 — 계정, 검색 대시보드, 폴더, Stripe 결제, 트랜잭션 이메일, JavaScript가 필요 없는 점진적 향상 — 을 OpenBSD에서 C로 작성한 CGI 프로그램으로 출시했다. httpd, SQLite, `pledge`와 `unveil`, chroot 안의 정적 링크 바이너리를 사용하고, 의존성은 세 개인데 그중 둘이 실제 빌드 의존성이다. 배포는 파일 하나를 교체하는 것이고, 재시작도 다운타임도 없다, 각 요청이 새 프로세스이기 때문이다. 논지는 이렇다: CGI의 나쁜 평판은 2004년에 시작됐고 그때 얻은 것이지, 지금이 아니다.

기술적 반론은 뻔하고 스레드는 대체로 그것을 밀어붙이지 않는다. 모든 요청이 프로세스를 포크한다; 여러 프로세스에 걸친 SQLite의 쓰기 락이 동시성의 한계다; 커넥션 풀이 없고; TLS, HTTP/2, 압축이 모두 httpd에서 오는데 이는 OpenBSD를 뜻한다. Panzerschrek은 동시 쓰기 질문을 직접 던지지만 상위 댓글에서 권위 있는 답을 얻지 못한다. 따라서 이 주장의 정확한 표현은 "적당한 동시성을 가진 작은 제품"이고, 이는 대부분의 제품을 설명하지, 이 글의 조언이 필요한 제품들을 설명하는 건 아니다.

정말로 가져갈 만한 것: 의존성 세 개, 모든 것 벤더링, 컨테이너 없음, 프레임워크 없음, C 컴파일러가 아닌 빌드 단계 없음. 전략적 요점은 표준적인 AI 시대 스택이 서로 대화하는 여섯 개의 서비스라는 것이고, 이 글은 그 무게의 대부분이 규모가 아니라 사용자를 가진 제품에는 선택 사항이라는 증거다.

## Zig에서의 타입 안전 HTML 템플레이팅 — 216 points

**216 points** · 78 comments · [lalinsky.com](https://lalinsky.com/2026/10/11/type-safe-html-templating-in-zig.html) · [HN discussion](https://news.ycombinator.com/item?id=50051573)

25년의 템플레이팅 경험 — raw PHP, Smarty, Template Toolkit, Jinja — 을 컴파일 타임 기능이 강한 언어에서 템플릿 엔진이 무엇이어야 하는가라는 질문에 적용했다. 그 결과는 모든 입력이 타입화되고 컴파일 타임에 검증되는 템플레이팅 계층이며, Zig로 컴파일되는 사용자 정의 파일 포맷을 쓰고, 상호작용에는 htmx나 Datastar를 써서 동적 인터페이스에 JavaScript가 필요 없다.

이 패턴은 새로운 게 아니고 스레드가 그것을 보여준다: 한 댓글러는 Kotlin을 위해 같은 것을 Gradle 플러그인으로 만들었는데 모든 템플릿 값을 타입화된 파라미터로 받는 클래스를 생성하고, 다른 이는 kotlinx.html을 쓰는데 그 eDSL이 템플릿 안에 실제 중단점을 제공한다. 타입화된 템플릿은 그것을 지원하는 언어에서 15년째 이용 가능했다; 달라지는 건 비용이다. Zig에서는 문자열 수명을 위한 아레나 할당자와 검사를 위한 comptime으로 오버헤드가 거의 0에 가까운데, 안전한 선택지가 값싼 선택지이기도 한 것은 이번이 처음이다.

해결되지 않은 트레이드오프는 반복 속도다. 컴파일 타임 검사는 오류를 더 앞으로 옮기는데, 이는 좋고, 모든 템플릿 수정을 재빌드로 바꾸는데, 빌드가 빠르지 않으면 나쁘다. Zig 재빌드가 핫 리로딩에 가까울 만큼 빠르다는 한 댓글러의 기대가 도입을 결정하는 것이지, 타입 안전성이 아니다. 그리고 스레드에서 지적된 정직한 비용: 사용자 정의 템플릿 포맷은 에디터 지원이 없다는 뜻이고, 컴파일 타임 검사를 위해 포기하기에 실질적인 것이다.

## Fable이 내 일자리를 가져갔다 — 216 points

**216 points** · 334 comments · [cendyne.dev](https://cendyne.dev/posts/2026-10-11-fable-took-my-jorb.html) · [HN discussion](https://news.ycombinator.com/item?id=50053216)

해고에 대한 1인칭 기록으로, 모델의 역량이 아니라 명시적으로 모델 가격 책정에 그 원인이 있다. 저자는 자기 고용주의 마지막 엔지니어였고, 그의 일자리를 끝낸 계산은 Fable급 모델이 그 일을 더 잘했다는 게 아니었다 — 모델이 그의 보수보다 쌌고, 경영진이 그 근거로 인수까지 무난히 갈 수 있다고 결론 내렸다는 것이다. 그는 자신이 해고되기 전에 자기 직속 두 명에게 해고를 집행한 것과, 자기 DevOps 인맥에서 6~7명이 한 달 안에 해고되거나 통보받은 것을 묘사한다.

스레드는 어느 한쪽보다 더 유용한 방식으로 갈린다. danw1979는 나이 든 목소리다: 그냥 일자리일 뿐이니 인생의 중심으로 삼지 말라, 일은 결코 너를 사랑해주지 않을 것이었다. fwlr은 구조적인 쪽이다: 자본의 권력은 그에 상응하는 확신의 성장 없이 커졌고, 편집증과 그럴듯한 자동화 서사만으로도 대체가 작동한다는 증거 없이 사람을 자르기에 충분하다. voidifremoved의 유추가 가장 깔끔하다 — 2000년대 중반의 아웃소싱 물결로, 품질에 대한 우려에 경영진이 내놓은 답은 그 가격이면 일을 다섯 번 다시 할 수 있다는 것이었다.

진지하게 받아들일 만한 반론은 gregwebs의 것이다: 일은 코드를 쓰는 것에서 소프트웨어를 출시하는 것으로 바뀌었고, 모델을 지도해 모델 단독보다 달러당 더 많은 가치를 만들어내는 사람은 여전히 역할이 있다. 그건 살아남은 사람들에 대한 서술로는 아마 맞고, 이 글을 다루지는 않는다. 이 글이 기록하는 것은 내려진 결정이 결코 "모델이 더 나은가"였던 적이 없다는 것이다 — 그것은 "우리가 인수자를 찾는 동안 모델이 사람보다 싼가"였다. 그 비교의 반대편에는 논쟁할 사람이 없다.

## Codex CLI가 기본으로 영구적이고 자가 업데이트되는 백그라운드 데몬을 설치한다 — 213 points

**213 points** · 127 comments · [github.com/openai/codex](https://github.com/openai/codex/issues/48195) · [HN discussion](https://news.ycombinator.com/item?id=50060694)

`daemon_auto_start`를 옵트인으로 해달라는 미해결 이슈다. 버전 0.157.0부터, 대화형 `codex` 세션을 여는 것만으로 자가 업데이트하는 영구 백그라운드 데몬(`codex app-server --managed-daemon`)이 시작되는데, 프롬프트도 없고 끄는 문서화된 설정도 없다. 보고자는 기본값을 false로 하거나 최소한 확인 프롬프트 한 번은 띄워달라고 요청한다. 이슈는 9월 25일 제기되어 열린 상태로 남아 있다.

스레드는 운영상의 피해를 제공하고, 그 양상이 예시적이다: 한 댓글러는 자동 업데이터가 업데이트 중에 파일 권한을 바꿔서 `.git`이 읽기 전용이 되어 실행을 막았다고 보고하고; 다른 이는 터미널 하네스에 불과한 것의 누적된 옛 버전들이 소비한 약 12GB를 측정했으며; 세 번째는 우회책을 올리는데, config에 기능 플래그를 설정하고, pid와 lock 파일을 삭제하고, 그것들을 `/dev/null`로 가는 심볼릭 링크로 교체하고, `chattr`로 불변으로 표시하는 것이다. 사용자의 교정이 "파일을 쓸 수 없게 만들기"라면, 리뷰는 스스로를 써 내려간 것이다.

일반화할 수 있는 요점은 이 도구에 관한 게 아니다. 영구적이고 자가 업데이트되는 데몬을 설치하는 커맨드라인 프로그램은 CLI가 아니라 터미널 프런트 엔드가 달린 서비스이고, 개발자 머신에 앉아 있는 스스로를 다시 쓰는 실행 파일이다 — 정확히 보안 팀이 줄이려고 시간을 쓰는 부류의 물건이다. 가장 많이 인용된 댓글, 즉 Codex와 Claude Code의 품질이 LLM 주도 개발의 현주소를 솔직히 반영한다는 것은, 어느 모델에 대한 논증이 아니라 프로세스에 대한 논증이다.

## 해커들이 유럽 전역의 슈퍼마켓 냉장고에서 자동 제상 기능을 작동시켰다 — 211 points

**211 points** · 373 comments · [tomshardware.com](https://www.tomshardware.com/tech-industry/cyber-security/unprecedented-cyberattack-cripples-supermarket-fridges-across-europe-as-hackers-activate-automatic-defrosting-delivery-and-store-prices-also-impacted-by-incident) · [HN discussion](https://news.ycombinator.com/item?id=50055304)

헤드라인은 댓글들이 풀어헤치는 사건을 일반화한다: 프랑스 슈퍼마켓 체인 세 곳이 냉장 컨트롤러 공격을 받았고, 별개로 벨기에와 네덜란드에서 운영되는 한 체인이 유통과 배송에 영향을 준 사이버보안 사고라며 IT 상당 부분을 오프라인으로 전환했는데, 매장은 열려 있었고 냉장은 온전했다. 두 사건은 관련이 있을 수도 없을 수도 있고, "유럽 전역"이라는 표현은 보도가 뒷받침하는 것보다 더 많은 일을 하고 있다.

메커니즘이 사건 자체보다 더 중요하다. 슈퍼마켓 제어 시스템을 다뤄본 한 댓글러는 왜 이것들이 설계상 인터넷에 연결되는지 설명한다: 관리자는 시간에 따른 사용량 변화를 지켜보고 전기를 아끼려고 설정값을 조정하고 싶어 하고, 서비스 엔지니어는 현장 방문 없이 제상을 작동시키고 싶어 한다. 스레드에서 인용된 한 벤더의 자체 마케팅 문구는 정확히 그런 근거로 원격 접근을 판다. 그런 기능 하나하나가 물리적 출력을 가진 공격 표면이고, 문제의 컨트롤러 제품군에 대한 연구는 사건 두 달 전에 발표됐다.

그래서 이것은 보안 이야기의 옷을 입은 안전 이야기다. 실패 모드는 유출이 아니라 음식이다; 공격자의 보상은 물리적 결과이고, 탐지할 비정상적 데이터 전송은 없다. 이 패턴은 편의를 위해 운영 기술이 연결되는 곳마다 계속 반복될 것이다: 원격 제상 명령을 정당화하는 것과 똑같은 논리가 나머지 모든 것의 원격화도 정당화한다.

## 500B 토큰 이후: AI 에이전트가 1인칭 슈터를 디컴파일하게 하기 — 206 points

**206 points** · 149 comments · [momo5502.com](https://momo5502.com/posts/2026-10-09-game-decompilation/) · [HN discussion](https://news.ycombinator.com/item?id=50039092)

3개월과 약 5,000억 토큰을 들여 1인칭 슈터를 읽을 수 있고 컴파일되는 C++로 디컴파일했고, 개념 증명이 아니라 행동의 정확성을 목표로 삼았다. 설정은 두 개의 유료 구독을 동시에 써서 서로 다른 두 CLI에서 에이전트를 돌리는 것이었고, 작업에 따라 모델 선택이 달라졌으며, 이 프로젝트를 설명한 이전 글들은 내려갔다 — 스레드의 보관 사본이 게임이 무엇인지 밝혀준다. 저자는 진짜 목표가 몇 달에 걸쳐 자율 에이전트를 오케스트레이션하는 법을 배우는 것이었다고 분명히 말하는데, 그것이 전이 가능한 부분이다.

경제성이 스레드에서 가장 유용한 비판이다. 바이트 단위로 동일한 어셈블리라는 목표는 컴파일러 버전과 최적화 플래그, 기타 보이지 않는 변수들을 탐색 공간 안에 넣어버리고, 그래서 에이전트는 사용자에게 보이는 가치가 없는 동등성을 좇느라 토큰을 쓴다; 기능적 동등성은 한두 자릿수만큼 더 쌌을 것이고, 어려운 추론에 더 싼 모델을 쓰는 것은 절약이 아니라 잘못된 경제였을 수 있다. 또 다른 댓글러는 구조를 뒤집은 프로덕션 파이프라인을 묘사한다: 한 에이전트가 의미상 동등한 코드와 테스트를 쓰고, 두 번째가 그것을 검증한다.

이런 글에서 보통 빠지는 부분이라 분명히 말할 가치가 있다: 5,000억 토큰은 공짜 에너지가 아니다. 그 양을 대서양 횡단 비행 몇 번 분량의 배출량에 견준 한 댓글러의 비교는 측정이 아니라 추정이고, 자릿수가 요점이다 — 아무도 합법적으로 배포할 수 있는 결과물이 없는 취미 프로젝트가, 진지한 연구 프로그램이라면 정당화해야 했을 만큼의 컴퓨트를 소비했다.

## Show HN: BetterWispr — Mac용 무료 오픈소스 받아쓰기 — 200 points

**200 points** · 122 comments · [betterwispr.com](https://betterwispr.com/) · [HN discussion](https://news.ycombinator.com/item?id=50042333)

무료 오픈소스 macOS 받아쓰기 앱이다: 아무 애플리케이션에서 키 조합을 누르고 말하면, 말 실수를 제거한 텍스트를 얻는다, 앱별 스타일 프로필, 로컬 모델만, 계정 없음, 클라우드 폴백 없음. Apple 자체 모델을 포함한 9개의 음성 모델을 탑재하는데, 25개 언어용 Parakeet과 Whisper Large v3 Turbo가 있고, 사용자 정의 API 엔드포인트를 받아들이며, 화자 분리와 로컬 요약이 있는 회의 노트를 추가한다. macOS 14 이상.

이번 출시에서 흥미로운 것은 제품이 아니라 스레드가 시장에 대해 드러내는 것이다. 한 댓글러는 더 오래 존재해온 거의 동일한 앱을 지목하고, 다른 이는 같은 용도로 세 번째 앱을 쓰고, 또 다른 이는 그것들 중 아무것도 쓰지 않고 자기 CLI 하네스를 직접 작성했으며, 한 사람은 이 분야 대부분이 여전히 2022년 Whisper 릴리스에서 돌아간다고 지적한다. 4년이 지난 지금도 최고의 범용 로컬 받아쓰기 모델은 여전히 OpenAI의 산물이고, 그 위에 만들어진 앱들 사이의 차별점은 키보드 단축키, 모델 선택기, 가격이다. 그건 해자가 아니라 취향이다.

또 다른 댓글러에 따르면 진짜로 해결되지 않은 문제는 일회성 받아쓰기가 아니라 화자 분리와 정리다 — 누가 무엇을 말했는지 아는 것, 그리고 전사본을 보관할 가치가 있는 노트로 바꾸는 것. 이 스레드의 모든 앱이 회의 노트를 덧붙이기식으로 추가했지만 어느 것도 화자 귀속을 해결하지 못했고, 그래서 이 범주에는 200점짜리 Show HN은 있어도 아무도 돈을 내는 제품이 없다.

## 아직 페이지에 남아 있는 것들

오늘 아침 랭킹 목록에서 149개 스토리가 200점을 넘겼고, 그중 123개는 이전 라운드업이 이미 다뤘던 것이다. 아래의 델타는 각 스토리에 대해 이 라운드업이 마지막으로 발표한 숫자와 비교한 것이다; 점수는 캡처 시점 기준으로 갱신됐다.

| story | last reported | now |
| --- | --- | --- |
| [Margaret Hamilton has died](https://news.mit.edu/2026/margaret-hamilton-computing-pioneer-dies-1007) | 2,122 (10-11) | 2,123 (+1) |
| [Mistral Large 4](https://mistral.ai/news/mistral-large-4/) | 2,040 (10-11) | 2,041 (+1) |
| [Triple-A Minesweeper](https://minesweeper.mikelacher.com/) | 1,407 (10-11) | 1,426 (+19) |
| [Cloudflare acquires Deno](https://deno.com/blog/cloudflare) | 1,363 (10-11) | 1,378 (+15) |
| [Sharing AI progress in mathematics](https://openai.com/index/sharing-ai-progress-in-mathematics/) | 1,351 (10-11) | 1,357 (+6) |
| [Why isn't the industry freaking out about DeepSeek 4.1 Flash?](https://www.dgt.is/blog/2026-10-07-deepseek-freek-out/) | 1,119 (10-11) | 1,124 (+5) |
| [Claude Haiku 5.5](https://www.anthropic.com/claude-haiku-5-5) | 1,046 (10-11) | 1,046 (+0) |
| [Sorry, I'm in a meeting](https://iminafleeting.com/) | 1,030 (10-11) | 1,042 (+12) |
| [Man discovers his parents' coffee machine used 1TB of data in 10 days](https://www.dexerto.com/entertainment/man-discovers-his-parents-coffee-machine-used-1tb-of-data-in-10-days-3416399/) | 949 (10-11) | 954 (+5) |
| [Whistle: Speech to Text in 16.9 MB](https://cactuscompute.com/blog/whistle) | 951 (10-11) | 954 (+3) |
| [Trump administration is suspending Microsoft from a green card program](https://apnews.com/article/h1b-visa-program-vance-microsoft-e7b3a407f822702b269ee277d21343ea) | 938 (10-11) | 942 (+4) |
| [I hired an illustrator to draw my house. Now it's my Home Assistant dashboard](https://antonfrolov.substack.com/p/i-hired-an-illustrator-to-draw-my) | 927 (10-11) | 931 (+4) |
| [Yes, and](https://htmx.org/essays/yes-and/) | 783 (10-11) | 786 (+3) |
| [REA Reverse – Engineer Anything](https://rea.tools/) | 761 (10-11) | 783 (+22) |
| [Tell HN: I've been paying for a rural Tanzanian's education for 10 years](https://news.ycombinator.com/item?id=50006366) | 767 (10-11) | 775 (+8) |
| [GPT‑6 and Intelligent UI for everyone](https://openai.com/index/gpt-6-for-everyone/) | 756 (10-11) | 757 (+1) |
| [Show HN: Bigwords.page – Turn any screen into a sign. The URL is the app](https://bigwords.page/) | 720 (10-11) | 724 (+4) |
| [YouTuber Says Cops Visited Him After He Built a Flock-Style Camera to Track Cops](https://gizmodo.com/youtuber-says-cops-paid-him-a-visit-after-he-built-flock-style-camera-to-track-cops-2000824306) | 691 (10-11) | 701 (+10) |
| [Our $445M Series D](https://oxide.computer/blog/our-445m-series-d) | 697 (10-11) | 698 (+1) |
| [Bot traffic from Yandex](https://radar.cloudflare.com/bots/as13238?dateRange=7d) | 562 (10-11) | 641 (+79) |
| [2D Vehicles](https://patkerr.co.uk/2d-vehicles/) | 601 (10-11) | 620 (+19) |
| [3rd Yandex Cloud Data Center Was Hit](https://status.yandex.cloud/en/incidents/2136) | 490 (10-11) | 613 (+123) |
| [“Math 2.0” will need to value mathematical progress more holistically](https://mathstodon.xyz/@tao/117395269325940185) | 611 (10-11) | 611 (+0) |
| [Visa, Mastercard, major banks facing new litigation over 'anticompetitive' fees](https://www.classaction.org/news/visa-mastercard-major-banks-facing-new-litigation-over-anticompetitive-merchant-credit-card-transaction-fees) | 602 (10-11) | 605 (+3) |
| [The Lightbulb Computer](https://lightbulbcomputer.com/) | 566 (10-11) | 595 (+29) |
| [Nobel Prize in Physics 2026: Francis Halzen](https://www.nobelprize.org/prizes/physics/2026/) | 582 (10-11) | 582 (+0) |
| [Tell HN: GitHub refuses to remove cracked copies of my software after a month](https://news.ycombinator.com/item?id=49982498) | 571 (10-11) | 575 (+4) |
| [Shipping JPEG XL in Chrome](https://developer.chrome.com/blog/jpeg-xl-in-chrome) | 574 (10-11) | 574 (+0) |
| [Theranos.world](https://www.theranos.world/) | 567 (10-11) | 569 (+2) |
| [Beam: Reflection's 501B open-weight model](https://reflection.ai/blog/introducing-beam) | 554 (10-11) | 554 (+0) |
| [A city-building game in which the city would prefer you didn't](https://housing.over.pizza/) | 508 (10-11) | 542 (+34) |
| [Terence Tao: Math 2.0 [pdf]](https://teorth.github.io/tao-web/slides/math-2-0-caltech-2026.pdf) | 214 (10-11) | 503 (+289) |
| [Grieving the loss of details](https://purplesyringa.moe/blog/grieving-the-loss-of-details/) | 481 (10-11) | 495 (+14) |
| [Opus 5.5 agents discover two room-temperature magnetic semiconductor candidates](https://www.vals.ai/blogs/room-temperature-magnetic-semiconductors) | 494 (10-11) | 494 (+0) |
| [Nobel Peace Prize for 2026 to Navanethem Pillay](https://www.nobelprize.org/prizes/peace/2026/press-release/) | 490 (10-11) | 492 (+2) |
| [Animated ASCII Art for Web Pages](https://ascii.rest/) | 466 (10-11) | 471 (+5) |
| [Nitter: Update Oct 10th seeking funding and legal help](https://nitter.net) | 382 (10-11) | 470 (+88) |
| [Polars 2.0](https://pola.rs/posts/release-polars-2/) | 469 (10-11) | 469 (+0) |
| [Build your own decision model](https://nishtahir.com/build-your-own-decision-model/) | 441 (10-11) | 468 (+27) |
| [Telegram Desktop vulnerability allowed any user's file to be stolen](https://beaksec.github.io/posts/telegram-desktop-one-click-account-takeover/) | 457 (10-11) | 465 (+8) |
| [LineageOS 24](https://lineageos.org/Changelog-32/) | 361 (10-11) | 445 (+84) |
| [Typesafe AI raises $870M at $7.5B](https://typesafe.ai/blog/series-ai) | 442 (10-11) | 443 (+1) |
| [EmbeddingGemma 2: An open, lightweight multimodal embedding model](https://blog.google/innovation-and-ai/technology/developers-tools/embeddinggemma-2/) | 436 (10-11) | 437 (+1) |
| [OpenAI annualised revenues $20B less than previously signalled](https://www.cnbc.com/2026/10/08/open-ai-revenue-nvidia-oracle-coreweave.html) | 431 (10-11) | 432 (+1) |
| [Show HN: Carrier-Explode: iPhone, Pixel and Galaxy carrier settings decoded](https://carrierexplode.com/) | 421 (10-11) | 428 (+7) |
| [I'm sorry, but you still have to think](https://itsallaboutthebit.com/i-am-sorry-but-you-still-have-to-think/) | 219 (10-11) | 425 (+206) |
| [Ask HN: What do you run on a $5 VPS that's worth keeping online 24/7?](https://news.ycombinator.com/item?id=49985548) | 414 (10-11) | 423 (+9) |
| [Show HN: Let your AI agents paint big arrows, boxes and text on your screen](https://github.com/franzenzenhofer/big-arrow-on-the-screen) | 414 (10-11) | 417 (+3) |
| [I gave Opus 5.5 one prompt and six hours to visualize Invisible Cities](https://quesma.com/blog/invisible-cities-one-shot/) | 411 (10-11) | 414 (+3) |
| [I paid people to try and follow my README](https://shkspr.mobi/blog/2026/10/i-paid-people-to-try-and-follow-my-readme/) | 327 (10-11) | 412 (+85) |
| [`123456' password used in Danish CPR data breach](https://cphpost.dk/2026-10-10/news/round-up/123456-password-used-in-massive-danish-cpr-data-breach/) | 402 (10-11) | 409 (+7) |
| [A font recreated from photographs of classic Commodore 64 keycaps](https://github.com/szabadkai/c64-keyboard-font/) | 407 (10-11) | 407 (+0) |
| [The Mathocalypse](https://scottaaronson.blog/?p=10169) | 404 (10-11) | 405 (+1) |
| [ADHD as a circadian rhythm disorder: evidence and implications for chronotherapy (2025)](https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2025.1697900/full) | 401 (10-11) | 404 (+3) |
| [IRCv3](https://ircv3.net/) | 283 (10-11) | 403 (+120) |
| [Documents add to evidence in climate deception case against ExxonMobil](https://insideclimatenews.org/news/07102026/exxonmobil-climate-deception-new-evidence/) | 363 (10-11) | 402 (+39) |
| [Bitwarden Dual License Model](https://community.bitwarden.com/t/published-version-update-in-app-stores/102750) | 390 (10-11) | 402 (+12) |
| [Decisions API is in public beta](https://developers.openai.com/api/docs/guides/decisions) | 391 (10-11) | 391 (+0) |
| [OpenAI withdraws three mathematical results](https://twitter.com/danintheory/status/2108065033070789090) | 379 (10-11) | 380 (+1) |
| [Meta and Microsoft take steps to reduce employee usage of Claude AI](https://www.rswebsols.com/news/meta-and-microsoft-take-steps-to-reduce-employee-usage-of-claude-ai/) | 376 (10-11) | 376 (+0) |
| [AnyPS5: Port PS5 binaries to PC without emulation (87% system libraries mapped)](https://github.com/boykopovar/AnyPS5) | 372 (10-11) | 372 (+0) |
| [OpenAI fires three safety researchers for "mishandling research information"](https://techcrunch.com/2026/10/08/fired-openai-safety-researchers-dispute-misconduct-claims-warn-of-chilling-effect/) | 363 (10-11) | 366 (+3) |
| [Living off-grid: Hundred Rabbits](https://100r.ca/site/home.html) | 365 (10-11) | 366 (+1) |
| [Navier–Stokes Lost in Translation](https://arxiv.org/abs/2610.08144) | 359 (10-11) | 360 (+1) |
| [Example.com just launched the biggest redesign in decades](https://www.debugbear.com/blog/example-dot-com-redesign-history) | 360 (10-11) | 360 (+0) |
| [Nature's capacity to 'bounce back' when species are lost is overestimated: study](https://phys.org/news/2026-10-nature-capacity-species-lost-vastly.html) | 355 (10-11) | 355 (+0) |
| [Keyboard differences between Windows and Macs](https://unsung.aresluna.org/deeper-dive-keyboard-differences-between-windows-and-macs/) | 345 (10-11) | 349 (+4) |
| [OpenTPU – An open-source AI accelerator, developed by AI](https://github.com/FeSens/openTPU) | 347 (10-11) | 347 (+0) |
| [Eye of Sauron: Long-Range Hidden Spy Camera Detection (2024)](https://www.usenix.org/conference/usenixsecurity24/presentation/zhang-qibo) | 335 (10-11) | 344 (+9) |
| [Anti-patterns in software blogging](https://refactoringenglish.com/blog/anti-patterns-software-blogging/) | 338 (10-11) | 340 (+2) |
| [Beauty in DVD Menus](https://vale.rocks/posts/dvd-menus) | 333 (10-11) | 334 (+1) |
| [Talorys – A self-hosted personal AI agent on Cloudflare's free tier](https://github.com/rociiu/talorys) | 319 (10-11) | 327 (+8) |
| [No Man Is an Island](https://borretti.me/article/no-man-is-an-island) | 324 (10-11) | 326 (+2) |
| [Friendship ended with Deno, now Node is my best friend](https://dbushell.com/2026/10/03/deno-to-node/) | 322 (10-11) | 322 (+0) |
| [Gleam doesn't compile to Erlang source anymore](https://gleam.run/news/gleam-doesnt-compile-to-erlang-source-anymore/) | 318 (10-11) | 318 (+0) |
| [Python 3.15](https://www.python.org/downloads/release/python-3150/) | 314 (10-11) | 314 (+0) |
| [Find the flattest route between any two points in SF](https://flattensf.com/) | 311 (10-11) | 312 (+1) |
| [Docker Agent](https://github.com/docker/docker-agent) | 304 (10-11) | 304 (+0) |
| [Nobel Prize in Chemistry 2026 to Henri B. Kagan and Kenso Soai](https://www.nobelprize.org/prizes/chemistry/2026/press-release/) | 303 (10-11) | 303 (+0) |
| [What's Earth's dominant species by mass?](https://signoregalilei.com/2026/09/27/whats-earths-dominant-species-by-mass/) | 303 (10-11) | 303 (+0) |
| ['Wallace and Gromit,' 90% Alone](https://animationobsessive.substack.com/p/wallace-and-gromit-90-alone) | 298 (10-11) | 301 (+3) |
| [I think I found a planet nobody knew existed. I used Claude Code to find it](https://www.reddit.com/r/ClaudeAI/s/mbe5IY2LF9) | 298 (10-11) | 300 (+2) |
| [Apple/macOS removed from official Unix registry](https://www.opengroup.org//openbrand/register/) | 288 (10-11) | 296 (+8) |
| [The Slow Formation of Durable Software](https://newsletter.dancohen.org/archive/the-slow-formation-of-durable-software/) | 293 (10-11) | 295 (+2) |
| [How did Rosalind Franklin miss the helix in her iconic DNA image? She didn't](https://www.science.org/content/article/how-did-rosalind-franklin-miss-helix-her-iconic-dna-image-she-didn-t) | 292 (10-11) | 292 (+0) |
| [The RAM shortage is bringing back DDR4](https://www.theverge.com/games/1009140/ram-shortage-intel-amd-ddr4-comeback) | 235 (10-11) | 289 (+54) |
| [Strands Decider 2B: a small, open-source, decision model](https://strandsagents.com/blog/introducing-strands-decider/) | 285 (10-11) | 285 (+0) |
| ['Jonathan' is the oldest land animal on Earth](https://www.404media.co/oldest-living-land-animal-jonathan-the-tortoise/) | 279 (10-11) | 280 (+1) |
| [Show HN: WallHop – 12ft.io is gone, so I built a replacement](https://wallhop.io/) | 265 (10-11) | 279 (+14) |
| [Dust: Pretraining Transformers Without Backpropagation](https://qlabs.sh/research/dust) | 279 (10-11) | 279 (+0) |
| [Programming Isn't Special](https://blog.glyph.im/2026/10/programming-isnt-special.html) | 275 (10-11) | 278 (+3) |
| [I would like the value of my home to rise, while my property taxes fall](https://conversableeconomist.com/2026/09/28/i-would-like-the-value-of-my-home-to-rise-while-my-property-taxes-fall/) | 270 (10-11) | 276 (+6) |
| [Paramount Skydance has completed its $111B merger with Warner Bros. Discovery](https://arstechnica.com/tech-policy/2026/10/paramount-completes-111b-warner-merger-creating-skydance-behemoth/) | 272 (10-11) | 272 (+0) |
| [Claude Code’s suggested message feature: I think the real customer is the model](https://www.zohaib.cc/blog/smartest-claude-code-feature) | 269 (10-11) | 269 (+0) |
| [4-hour battery storage is cheaper to install than gas turbines all across globe](https://www.solarpowerworldonline.com/2026/10/4-hour-battery-storage-is-cheaper-to-install-than-gas-turbines-all-across-globe/) | 261 (10-11) | 261 (+0) |
| [Cleo (Mathematician)](https://en.wikipedia.org/wiki/Cleo_(mathematician)) | 255 (10-11) | 256 (+1) |
| [Bevy 0.20](https://bevy.org/news/bevy-0-20/) | 252 (10-11) | 256 (+4) |
| [How machines learned precision](https://glinscott.github.io/how-machines-learned-precision/) | 247 (10-11) | 248 (+1) |
| [Yandex Takes a Second Data Center Hit in 48 Hours](https://united24media.com/war-in-ukraine/yandex-takes-a-second-data-center-hit-in-48-hours-now-its-biggest-russian-site-is-damaged-23277) | 243 (10-11) | 247 (+4) |
| [God of War on PSP, recompiled to WebAssembly and running in the browser](https://github.com/snuri00/psp-web-recomp) | 242 (10-11) | 245 (+3) |
| [Penguin Mail – open-source Rust email client for Linux with AI](https://penguin-mail.com/) | 241 (10-11) | 242 (+1) |
| [House with 15m underground tunnels for sale for 300k](https://www.readingchronicle.co.uk/news/26612080.house-15m-underground-tunnels-sale-300k/) | 238 (10-11) | 239 (+1) |
| [Show HN: Quake ported to safe Rust, playable in browser](https://quake-srp.pages.dev/) | 239 (10-11) | 239 (+0) |
| [DuckDB Ducklake](https://github.com/duckdb/ducklake) | 237 (10-11) | 238 (+1) |
| [Nix wrote half of my debugger](https://fzakaria.com/2026/10/07/nix-wrote-half-of-my-debugger) | 230 (10-11) | 237 (+7) |
| [WSL3 Performance is about 5-60% faster than WSL2 depending on the workload](https://tonym.us/wsl2-vs-wsl3-benchmarks.html) | 232 (10-11) | 236 (+4) |
| [The value of not getting to the point (2015)](https://ken.arneson.name/2015/11/the-value-of-not-getting-to-the-point/) | 233 (10-11) | 233 (+0) |
| [Orkut.com](https://orkut.com/) | 232 (10-11) | 232 (+0) |
| [Why were Victorian elites so effective?](https://worksinprogress.co/issue/the-seven-vices-of-highly-effective-victorians/) | 230 (10-11) | 231 (+1) |
| [Mxc: Microsoft Execution Containers version 1.0.0](https://blogs.windows.com/windowsdeveloper/2026/10/07/microsoft-execution-containers-policy-driven-containment-for-ai-agents/) | 220 (10-11) | 225 (+5) |
| [Knuth reward check](https://www.thomas-huehn.com/knuth-reward-check/) | 218 (10-11) | 223 (+5) |
| [ETH-68: Ethernet Audio Interface for Linux](https://naturalsystems.io/eth68) | 221 (10-11) | 221 (+0) |
| [Show HN: Making a flexible "neon" t-shirt with LED filaments](http://scottbezek.blogspot.com/2026/10/making-flexible-neon-t-shirt-with-leds.html) | 221 (10-11) | 221 (+0) |
| [Why DuckDB 2.0 is faster](https://motherduck.com/blog/why-duckdb-20-is-faster/) | 209 (10-11) | 215 (+6) |
| [Five months treating bugs like patients and coding agents like a medical team](https://www.cockroachlabs.com/blog/experiment-running-hospital-code/) | 207 (10-11) | 214 (+7) |
| [Germany transforms former coal mines into Europe's largest lake landscape](https://www.euronews.com/2026/04/14/almost-like-lake-como-germany-transforms-former-coal-mines-into-europes-largest-lake-lands) | 212 (10-11) | 213 (+1) |
| [Anthropic AI model submits false tip on unsolved Philly murder, police say](https://www.nbcphiladelphia.com/news/local/anthropic-ai-model-submits-false-tip-on-unsolved-philly-murder-police-say/4477051/) | 211 (10-11) | 212 (+1) |
| [OpenAI, the Partition Principle, and Mathematics](https://karagila.org/2026/openai-pp/) | 210 (10-11) | 211 (+1) |
| [Computers Cannot Make Decisions](https://wiki.cateat.fish/art:computers_cannot_make_decisions) | 206 (10-11) | 210 (+4) |
| [FDA may allow some toxic chemicals to be added to food without safety review](https://www.theguardian.com/us-news/2026/oct/10/fda-toxic-chemicals-food-analysis) | 201 (10-11) | 209 (+8) |
| [US man given prison sentence for bot-farming music streams](https://thequietus.com/news/us-man-given-prison-sentence-for-bot-farming-music-streams/) | 209 (10-11) | 209 (+0) |
| [What mathematicians should know about the Lean Theorem Prover: reliability & AI](https://terrytao.wordpress.com/2026/10/09/what-mathematicians-should-know-about-the-lean-theorem-proverquestions-of-reliability-and-ai/) | 202 (10-11) | 206 (+4) |
| [Wood Tape (2004)](http://gamesbyemail.com/WoodTape/Default.htm) | 206 (10-11) | 206 (+0) |

123개 중 102개는 10점 이하만 올랐고, 33개는 전혀 오르지 않았다. 그 분포가 오늘의 진짜 스토리이고, 그것은 더 이상 처음 읽히지 않는 페이지의 산술이다 — 목록 위쪽은 이 스토리들을 이미 본 사람들의 투표를 쌓아가고, 목록 아래쪽은 이틀 전의 정확히 그 정점에 앉아 있다.

움직인 것들은 논쟁이 미해결인 곳이고, 오늘은 유난히 전날의 것들에 지배당한다. Terence Tao의 Caltech 슬라이드는 증명 풍요에 관한 논쟁이 피드가 아니라 이 분야를 따라가는 사람들에게 도달하면서 214에서 503으로 거의 두 배가 됐다. 에이전트가 애플리케이션을 세 언어로 다시 쓰는 것에 관한 에세이는 219에서 425로 올랐는데, 글을 직접 읽기 전에 다른 스레드에서 인용될 때 일어나는 일이다. Yandex 데이터센터 상태 페이지는 490에서 613으로, Cloudflare 봇 대시보드는 562에서 641로 올랐는데, 같은 물리적 사건에 대한 두 개의 뷰가 각각 단독으로 보여준 것보다 더 선명한 그림으로 해소된 것이다. Nitter의 자금 지원 호소는 게재 이틀 후 88점이 붙었는데, 이는 시간이 지날수록 나아지기보다 나빠지는 스토리의 모양이다: 이 프로젝트에 변호사가 없다는 게 밝혀지기 전에 올라간 것이다.

평평한 절반도 이름 붙일 가치가 있다. 정확히 0인 33개 스토리에는 노벨상 발표들, Python 3.15, Polars 2.0, Beam, decisions API가 들어 있다 — 처음 6시간 안에 점수를 다 얻고 대화로서 끝난 모든 것. 이 목록에서 더 이상 발견되는 것은 없다; 움직이는 것은 지난 12시간 안에 누군가 정정이나 반례를 올린 것이고, 움직이지 않는 것은 스레드가 할 말을 다 하고 멈춘 것이다.

## 관통하는 주제

오늘 세 가지가 결정되고 있었고, 그중 어느 것도 모델의 벤치마크 점수에 관한 게 아니다.

첫째는 보관이다. Deloitte의 키프로스 사무소는 $672m어치 자산을 사라지게 만든 계정에 서명했고, 아무도 책임지지 않는 구조적 이유는 이 회사가 자기 자신에 대해 책임질 수 있는 실체가 아니라 법적으로 별개인 파트너십들의 연합이라는 것이다. 패스키는 자격 증명을 네가 쥔 비밀에서 relying party와 플랫폼이 결정하는 정책으로 옮기며, 사용자가 볼 수도 통제할 수도 없는 attestation 다이얼을 단다. 지문은 네가 검사하고 삭제할 수 있었던 쿠키를 네가 바꿀 수 없는 기기 속성으로 대체한다; 브라우저가 값을 무작위화할 수 없는 이유에 대해 323개의 댓글에는 답이 없고, 정직한 이유는 안정적인 값이 정당한 기능에 꼭 필요한 부담 지지대(load-bearing)라는 것이다. Codex는 묻지도 않고 개발자 머신에 자가 업데이트 데몬을 설치하고, 커뮤니티의 해법은 `chattr +i`다. The Onion의 아카이브 사냥은 대조군으로 이 페이지에 있다 — 자기 기록의 어떤 조각이 빠졌는지 정확히 알고 그렇게 말하는 회사다.

반례들도 여기 있다, 이건 내가 예상하지 못한 부분이다. Nanolathe는 다음 엔진이 같은 바이너리를 다시 리버스 엔지니어링하지 않도록 자기 게임 포맷과 클린룸 연구를 MIT로 공개한다. PS2 재컴파일러는 재컴파일러를 저장소에 두고 게임은 빼둔다. 벤더링된 의존성 세 개, 배포할 파일 하나, 컨테이너 없음, chroot에서 돌아가는 상용 웹 제품. 이것들은 모두 가치가 서비스의 존속에 의존하지 않는 인공물이고, 프런트 페이지에서는 큰 차이로 소수다.

둘째는 AI 논쟁이 분자에 어떤 숫자가 들어가느냐에 관한 논쟁이라는 것이다. Karpathy의 깔때기는 2,000만 명의 전문 사용자와 5,000명의 내부자를 세고, 두 집단이 만들어내는 것을 검증하는 비용은 생략한다. Meta의 출시는 벤치마크 표로 시작하고 한 댓글러의 이미지-투-HTML 테스트는 그 모델을 중급 릴리스 근처에 둔다. GLM-Legal의 19.2% 전항목 통과율은 신뢰할 수 있는 엔드투엔드 실행으로 제시되지만 변호사는 모든 것이 성립해야 하는 루브릭에서 80%의 실패율로 읽는다. 한 리서치 회사는 매출이 그 기반의 몇 배로 성장했는데도 작년 재무제표를 써서 $2tn IPO를 터무니없다고 부르고; 강세론은 성장률을 앞으로 이월시켜 NVIDIA를 넘어선다. 한 해고 글이 결과물의 품질이 아니라 좌석당 가격으로 내린 결정을 묘사하는데, 이는 어떤 벤치마크로도 결판낼 수 없는 대체의 한 버전이다. 이 모두는 선택된 숫자로부터 방어 가능하고, 어느 것도 누군가 다른 분모를 고르면 살아남지 못한다, 그래서 이 논쟁은 해결의 기미 없이 1년째 이어지고 있다.

셋째는 규제가 이 페이지의 누구든 찾아낼 수 있는 유일한 지렛대이고, 그 한계가 같은 스토리들에서 보인다는 것이다. 뉴욕의 클릭-투-캔슬 규칙은 메커니즘을 제약할 뿐 Adobe의 조기 해지 수수료는 건드리지 않아서, 클릭 한 번이 여전히 1년치 약정을 값으로 치른다. 핀란드의 환경 명령은 공사를 멈출 수 있고, 이는 진짜 지렛대이며, 거기 붙은 벌금은 반올림 오차이고, 이는 그렇지 않다. 뉴저지 감시 사건은 장애 편의로 논증되는데 그 아래에서 논증할 직장 프라이버시법이 없기 때문이다 — 스토리에서 가장 강력한 사실은 원고가 빌려 써야 했던 법의 모양이다. 무단 접근에 어떤 결과도 받지 않는 AI 회사들은 이미 사적으로 보상을 받은 고소인을 기다리고 있다. 그리고 QGIS의 no-AI 정책은 도구에 관한 원칙이 아니라 희소한 메인테이너 관심의 배분이고, 제약을 찾아내고 나면 이 영역의 모든 정책이 결국 그런 것으로 판명된다. 행동을 바꾸는 규칙은 기본 경로를 비싸게 만드는 규칙이고; 나머지는 전부 타임라인과 보도자료다.
