---
title: "Hacker News 프런트 페이지 라운드업 — 2026년 10월 23일"
pubDate: 2026-10-23
description: "200점을 넘긴 이야기 65개, 그중 21개가 새것이다. 어제의 보안 사건은 사과와 시장 철수, 그리고 701점짜리 움직임으로 돌아왔다. 그러는 동안 압박은 구독 쪽으로 옮겨갔다."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
lang: "ko"
---

오늘 200점을 넘긴 이야기는 65개다. 44개는 어제 페이지에 이미 있었고, 21개가 새로 올라왔다. 새로 올라온 것들은 어제와 같은 이야기가 아니다.

어제 페이지는 신뢰 계층이 다섯 군데에서 동시에 무너졌다는 걸 실시간으로 보여주는 현장이었다. 오늘 페이지는 그다음에 벌어진 일이다. 엠바고를 깬 사람은 사과했고, 숫자를 세는 방식으로 키를 만들던 인증기관은 사업에서 나갔고, 필터가 되기를 거부한 리졸버는 두 배가 넘게 올랐다. 보안 사건의 후속이란 이런 것이다. 새 버그가 아니라, 결과가 사람들에게 떨어지는 것.

그러는 동안 페이지의 나머지는 조용히 다른 주제로 옮겨갔다. 이제 물건값이 얼마인가. 디즈니는 광고를 막으려고 돈을 낸 요금제에 광고를 붙였다. 엑스박스는 이미 산 게임의 시간을 팔기 시작했다. 아크는 자기 죽음을 발표하고 그 이름을 바꿔 불렀다. 그리고 1978년 다익스트라의 자연어 프로그래밍 메모가 343점을 받았다. 이건 향수이거나, 프롬프트 엔지니어링에 대해 누가 한 말 중 유일하게 쓸모 있는 것이다.

## 로컬 위키백과 — 1,065 points

**1,065 points** · 209 comments · [edjefferson.com](https://edjefferson.com/localwiki/) · [HN discussion](https://news.ycombinator.com/item?id=50202285)

위키백과를 걸어서 30분 거리 안의 것들로 걸러낸 것. 위키백과 항목 자체를 지오코딩하고, 네 위치를 받아서 근처에 뭐가 있는지 보여준다. 교회, 공원, 산책로, 그리고 네거리 건너에서 벌어진 1977년의 무작위 비행기 추락 같은 것까지. 구현 노트는 정직하다. 근처에 25개가 안 되면 6마일 안쪽에서 가장 가까운 25개를 가져오고, 500개가 넘으면 가장 가까운 500개만 살아남는다. 검색은 Photon, 지도 데이터는 OpenStreetMap, 위치는 브라우저 밖으로 나가지 않으니 공유 링크로도 새지 않는다.

댓글창에서 가장 좋은 관찰은 이게 전부 위키백과의 `Special:Nearby`를 감싼 껍데기라는 것이다. 실제로 몇 명이 똑같은 결과를 확인했다. 엔지니어링에 대해서는 정당한 지적인데, 왜 1,065점을 받았는지는 놓친다. `Special:Nearby`는 아무도 안 찾는 페이지고, 같은 데이터 위에 따뜻한 UI를 얹는 게 "제품"이라는 말의 대부분이다. 두 번째 관찰이 더 재미있다. "알고 계셨나요" 설명에는 전부 "미국 $STATE $CITY에 위치"라는 문구가 붙는데, 그건 반경이 이미 확정해버린 정보다. 글로벌 백과사전에서는 쓸모없고, 로컬 백과사전에서는 소음이다.

실패 방식은 근접성 제품이 전부 갖고 있는 그거다. 도시 사용자는 주택단지와 도로를 받는다. 시골 사용자는 문서화된 뭐든 가장 가까운 게 걸어서 세 시간 거리라는 말을 듣는다. 여기서 진짜 질문이 나온다. 로컬 지식이 존재하게 만들려면 뭐가 필요한가. 코요테가 거의 다 먹어치운 죽은 엘크는 위키백과에 없고 앞으로도 없을 것이다. "지오코딩된 백과사전"과 "내가 있는 곳에 대한 지식" 사이의 간극은, 좋은 데모와 사람들이 실제로 필요로 하는 물건 사이의 간극 전체다.

## 도커는 이상하다 — 800 points

**800 points** · 331 comments · [codeandcake.dev](https://codeandcake.dev/posts/2026-10-22-docker-is-weird) · [HN discussion](https://news.ycombinator.com/item?id=50202681)

누군가 자기만의 컨테이너 런타임을 만들기 시작했고, 뭐가 놀라웠는지 써놨다. 목록은 짧고 정확하다. 컨테이너는 실체가 아니다(제약이 걸린 프로세스일 뿐이고 `/proc`에서 찾을 수 있다). "컨테이너"라는 리눅스 기능은 없다(네임스페이스와 cgroup과 네트워킹이 트렌치코트를 입고 서 있는 것이다). 이미지는 그냥 폴더에 `chroot`/`pivot_root`를 더한 것이다.

그다음이 실제로 쓸모 있는 부분인 Go 비판이다. `runc`는 Go로 쓰였고, Go 런타임은 태생이 멀티스레드인데 컨테이너 런타임에 필요한 시스템콜 몇 개는 단일 스레드 프로세스에서 일어나야 한다. 그래서 `runc`는 Go 런타임이 초기화되기 전에 도는 C 모듈을 함께 배포한다. 그 창에 끼어들기 위해서만. Go에는 `fork`도 없고, 여기서는 발등 찍는 도구인 메인 스레드 fork만 있어서, `runc`는 마법 같은 argv로 `/proc/self/exe`를 다시 exec해서 fork를 흉내 낸다. Go의 버그는 하나도 아니다. 언어의 동시성 모델이 1970년에 쓰인 시스템콜 계약을 만났을 때 벌어지는 일이다.

갖고 갈 만한 다른 디테일. 루트리스 컨테이너 런타임은 같은 기능을 얻으려고 결국 네트워크 스택을 유저스페이스에 다시 구현하게 된다. 그게 권한을 버리는 실제 비용이고, "그냥 루트리스로 돌려"가 말하기는 쉽고 내놓기는 어려운 조언인 이유다.

## Tell HN: 나는 PHP RCE 엠바고를 모르는 채로 깼다 — 697 points

**697 points** · 247 comments · [news.ycombinator.com](https://news.ycombinator.com/item?id=50193416) · [HN discussion](https://news.ycombinator.com/item?id=50193416)

짧고 진심으로 미안해하는 셀프 포스트다. 작성자는 공개 전에 곧 나올 PHP RCE(CVE-2026-109618, CVE-2026-109619)를 언급했고, 그 때문에 조율된 릴리스 일정이 밀렸고 많은 사람이 일을 하게 됐다. 책임은 전부 자기 것이라고 한다. 엠바고가 있는 줄은 몰랐다고도 말한다. 자기 연락처가 없다고 했고, 그 사람의 연락처도 같은 말을 했다고.

댓글창은 그가 책임이 없다는 쪽으로 거의 만장일치고, 그 논리가 감정보다 낫다. 엠바고의 당사자가 아니고 아무도 그런 게 있다고 말해주지 않았다면, 깰 수가 없다. 정보 비대칭은 뉴스가 그에게 도달하기 전에 상류에서 이미 사라졌다. 몇몇은 더 날카롭게 말한다. 책임을 인정하는 게 포스트모템을 *더 나쁘게* 만든다. 절차의 실패를 개인의 실패로 바꿔버리기 때문이고, 다음에 뭔가를 일찍 알게 된 사람은 기록을 바로잡는 대신 입을 다물게 된다. 스레드 최고의 문장은 이거다. 파이트 클럽의 첫 규칙은 파이트 클럽이 있다는 걸 알 때만 적용된다.

페이지에서 아무도 답할 수 없는 질문은, 누가 그 연락처에게 엠바고가 없다고 했느냐다. 그 사람은 공개 체인 안에 있고, 의미가 있었던 실수는 그것 하나뿐이다. 아마존 허니팟 데이터도 봐두자. 어제 다룬 것인데, 엠바고가 풀리기 *나흘 전*에 PHP2Shell 공격 시도가 있다. 이 포스트가 사과하는 유출이 첫 번째가 아니었다는 뜻이다.

## 한 번도 개설한 적 없는 캐시앱 계정 때문에 징역 6년 — 656 points

**656 points** · 698 comments · [404media.co](https://www.404media.co/amanda-smith-opened-a-cashapp-in-her-name-she-faces-years-in-prison-cashapp-fraud/) · [HN discussion](https://news.ycombinator.com/item?id=50194833)

어제 2차 출처로 222점에 올라왔던 이야기다. 원본 404 Media 기사가 이제 656점, 댓글 698개로 페이지에 있다. 오늘 새로 올라온 것 중 댓글이 가장 많다. 아만다 스미스는 4월 펜실베이니아 자택에서 아칸소 발부 영장으로 체포됐다. 한 번도 가본 적 없는 주다. 그녀의 이름과 사회보장번호, 생년월일로 개설된 캐시앱 계정을 경유한 1,000달러짜리 페이스북 마켓플레이스 사기가 이유였다. 감옥에서 사흘. 관계자 전원이 무의미하다고 말한 5만 달러 보석금. 송환은 이미 진행 중이었으니까. 아칸소까지 운전. 보석금 2만 달러 또 한 번.

이야기 전체를 옮기는 문장은 이것이다. 그녀가 변호를 위해 계정 정보를 요구했을 때 캐시앱은 거부했다. 자기가 개설하지 않은 계정의 소유자임을 증명할 수 없었으니까. 이제 신원은 당신이 말하는 그 사람이라는 걸 확립하는 데 쓰이고, 동시에 당신 신원을 쓴 누군가에 대한 책임이 당신에게 있다는 걸 확립하는 데도 쓰인다. 그리고 사기 피해자는 자기를 무죄로 만들어줄 기록을 볼 자격이 없다. 댓글창이 보태는 건 이게 특이한 일이 아니라 유난히 잘 기록된 일이라는 것, 그리고 여기서 평범한 사람이 쓸 수 있는 구제책은 거의 없다는 것 정도다.

## 모든 AI 모델은 인간에 대해 같은 "논쟁적인" 의견을 낸다 — 605 points

**605 points** · 580 comments · [modelcompare.ai](https://www.modelcompare.ai/blog/ai-models-controversial-take-on-humans) · [HN discussion](https://news.ycombinator.com/item?id=50197313)

ModelCompare가 10개 연구소의 모델 13개에게, 각각 세 번씩, 완곡어법 없이 인간에 대한 가장 논쟁적인 의견을 물었다. 13개 중 8개가 세 번 모두 같은 답을 냈다. 13개 전부 최소 한 번은 그 답을 냈다. 그 답은 이렇다. 인간은 자기 집단이 믿는 걸 고르고, 그다음에 이유를 지어낸다. GPT-6.1 Sol: "인간은 진실보다 소속에 더 충성한다." DeepSeek V4 Pro: "인간에게는 원칙이 없다. 충성심이 있다." Kimi K3: "인간에게는 신념이 없다. 소속이 있다." Gemini 4 Argon은 인간의 의식을 "홍보부"라고 불렀다.

같다는 것 자체가 발견이고, 그건 신비롭지도 않다. "인간은 합리화하는 동물"은 어떤 학습 코퍼스에서든 가장 많이 등장하는 에세이 군집 중 하나다. 대중적 행동경제학 코너, 하이트 계열의 도덕 심리학, 같은 구조를 가진 블로그 글 만 편. *논쟁적인* 의견을 요구하면 정확히 그 군집이 선택된다. 코퍼스가 "안전한 선을 넘지 않으면서 반항적인" 범주로 라벨링해둔 말투가 거기 있기 때문이다. 네가 표집하는 건 모델의 신념이 아니다. "도발적이지만 출판 가능한" 것이 사는 지점에서 학습 분포의 모양을 표집하는 것이다.

댓글 두 개는 공을 줘야 한다. 한 사람은 실제로 데이터를 읽고, 몇몇 답이 논지를 뒷받침하지 않는다고 지적했다. GPT-6 Astra의 "편의를 원칙처럼 보이게 만드는 재능"은 집단 순응이 아니라 자기기만에 대한 말인데, 헤드라인이 패턴을 필요로 해서 일치로 세어졌다. 또 한 사람은 아이러니를 짚었다. 각 답은 독립적인 분석인 척 쓰였는데, 인간의 순응에 대한 만장일치 의견이 나왔다는 것. 가장 강한 댓글은 가장 짧다. 극도로 온라인인 코퍼스로 학습하고, 극도로 온라인인 질문을 하고, 극도로 온라인인 답을 얻는다.

## 오늘, 우리는 노리고 있던 걸 해킹했다: 아이폰 — 526 points

**526 points** · 345 comments · [blog.calif.io](https://blog.calif.io/p/iphone) · [HN discussion](https://news.ycombinator.com/item?id=50211474)

Calif. 지난주 OpenAI가 조율된 공개 포스트에서 GPT-5.6 Sol로 PHP 버그를 찾았다고 크레딧을 준 그 회사다. 파리 헥사콘에서 보여준 데모 묶음을 공개했다. 데모 제목은 이렇다. "Signal 1-클릭", "그런데 모두가 아이메시지를 쓰는데 서드파티 앱을 누가 신경 쓰나, 그렇지?", "당신 아이폰도 이게 되나?", "APT는 Apple Persistent Threat의 약자다." 포스트는 이게 전부다. 모든 건 "적절한 시점에" 공개될 예정이다.

이건 결과가 아니라 주장으로 봐야 한다. 글에는 라이트업도, 영향받는 버전 목록도, CVE도, 벤더 대응도 없고, 데모 영상은 위협 모델이 아니다. 그래도 한 섹션을 줄 만한 이유는 맥락이다. 이 팀은 M5에서 공개된 macOS 커널 메모리 손상 익스플로잇을 이미 냈고, 같은 달 안에 대형 조율 공개에서 이름이 언급됐다. 이전 실적이 논거다. 댓글창은 헤드라인보다 차분하다. 사람들은 Lockdown Mode가 도움이 되는지 묻고(아무도 모른다, 그것 자체가 발견이다), ForcedEntry 이후 6년이 지나도 iOS PDF 파서가 계속 진입점이라는 걸 짚고, 한 사람은 방어자에게 중요한 유일한 논거를 말한다. LLM이 네 폐쇄 생태계에서 찾을 수 있는 건, 그 생태계의 운영자도 LLM으로 찾아서 고칠 수 있다는 것. 그 경쟁을 이길 수 있는지는 여기서 답하지 않는다.

## Ask HN: 모델이 그렇게 좋다면, OpenAI는 왜 회사 100개를 그냥 시작하지 않나? — 514 points

**514 points** · 561 comments · [news.ycombinator.com](https://news.ycombinator.com/item?id=50200997) · [HN discussion](https://news.ycombinator.com/item?id=50200997)

몇 주 만에 나온 최고의 Ask HN이고, 스레드가 여섯 방향쯤에서 답한다. 맥킨지 비유가 먼저 맞아떨어진다. 포춘 500대 기업이 어떻게 굴러가는지 깊이 아는 컨설팅 회사가 포춘 500을 인수한 적은 없다. AI는 두뇌고, 회사에는 팔과 다리와 관계가 필요하기 때문이다. 두 번째 댓글러가 경제학 버전을 준다. OpenAI 에이전트가 손쉽게 다시 만들 수 있는 회사라면 마진이 0으로 밀린다. 다른 누군가의 에이전트도 똑같이 다시 만들 수 있으니까. OpenAI가 벌어야 하는 그 조 단위 가치는, 이 능력이 파괴하는 조 단위 가치다. 이 밸류에이션에 자금을 대는 사람에게는 상당히 불편한 논거다.

가장 땅에 붙은 답은 디자인 서비스에서 일하는 사람에게서 나온다. 제품 만드는 건 쉬운 부분이고, 대부분의 제품은 잘못된 걸 만들었거나 요구사항이 틀렸거나 시장이 없어서 실패한다. LLM은 하루 종일 코드를 쓸 수 있지만, 뭘 만들어야 하는지 아는 주체성은 없다. 세 번째 다리를 붙이면, 회사는 법적 책임과 유통과 관계의 묶음이고 아무도 그걸 합성하는 법을 알아내지 못했다. 질문은 대체로 스스로 답한다.

스레드가 과소평가하는 걸 하나 보태자. OpenAI는 *실제로* 이걸 하고 있다. 지주회사 형태가 아닐 뿐이다. 지분을 받고, 스타트업 펀드를 운영하고, 자기 고객과 경쟁하는 제품을 십여 개 내놓는다. 회사 100개를 안 하는 이유는 맥킨지가 안 하는 이유와 같다. 어느 시점에서 한계 회사는 누군가 그 회사에 대해 책임을 져야 하고, 책임은 토큰으로 확장되지 않는다.

## 투자자 소유 전력회사는 전기를 23% 더 비싸게 받는다 — 505 points

**505 points** · 357 comments · [kadoa.com](https://www.kadoa.com/energy-prices/insights/investor-owned-utilities) · [HN discussion](https://news.ycombinator.com/item?id=50208837)

숫자는 EIA Form 861과 BLS CPI에서 왔다. 2025년 가정용 요금은 투자자 소유 전력회사 17.8¢/kWh, 공영 14.5¢, 협동조합 14.1¢였다. 2020년 이후 투자자 소유 요금은 34% 올랐고 인플레이션은 24%였으며, 공영은 19% 올랐다. 월 청구액은 투자자 소유 146달러, 공영 130달러, 협동조합 159달러. 그리고 걱정해야 할 부분은 분포다. 투자자 소유 전력회사 고객의 11.4%가 30¢/kWh 이상을 내는데, 공영 전력에서는 0.5%다.

인용하기 전에 방법론을 읽어라. 이건 "전력회사에서 공급과 배송을 함께 사는 가구"를 세는데, 소매 선택제 시장은 제외된다. 미국 최대 경쟁 시장인 텍사스가 비교에서 거의 빠진다는 뜻이다. 자본 비용, 주 세부담, 지리, 허용 수익률을 정하는 규제 체제 어느 것도 보정하지 않았고, 댓글러들이 넷 다 정확히 지적한다. 데이터 추출 벤더가 콘텐츠 마케팅으로 낸 것이기도 하다. 다만 CSV는 내려받을 수 있고 원래 설문은 공개돼 있어서 숫자는 검증 가능하다. 아마 맞을 것이다. 통제 실험은 아니다.

스레드의 가장 강한 기여는 반례들이다. 논지를 무시하는 게 아니라 날카롭게 만들기 때문이다. 앨버타의 규제 완화는 발전과 배전과 소매를 분리했고, 모든 층에서 경쟁 없이 보장된 이윤을 만들어냈다. 의도한 결과의 정반대다. 시립 전력회사가 있는 도시의 한 댓글러는, 나라 반대편에서 민간 사업자 넷이 경쟁하는 자기 여동생 요금의 세 배를 낸다. 둘 다 사실이고, 실제로 보여주는 건 소유 형태가 대리 지표라는 것이다. 중요한 건 규제자가 자본 지출이 늘면 같이 커지는 요율 기반 위에 수익률을 얹느냐다.

## OpenShell — 486 points

**486 points** · 211 comments · [github.com/NVIDIA](https://github.com/NVIDIA/OpenShell) · [HN discussion](https://news.ycombinator.com/item?id=50198675)

NVIDIA의 에이전트 함대용 Apache-2.0 런타임. 커밋이 1,856개고, 이름이 주는 인상보다 진지하다. 강제 메커니즘이 두 개다. 샌드박스 안 에이전트가 하는 모든 일, 즉 파일 접근과 시스템콜과 네트워크 연결이 런타임에 커널 수준 정책 검사를 통과한다. 그리고 자격증명 주입이 범위 제한돼서, 에이전트는 진짜 시크릿을 절대 보지 못하고 승인된 엔드포인트로 가는 요청만 본다. 두 번째가 재미있는 쪽이다. 정책 변경이 승인되기 전에, 증명기가 그 변경이 허용하게 될 위험한 새 접근을 표시한다. 자격증명을 들고 새 호스트에 닿거나 새 API 메서드를 호출하는 일은 사람을 기다린다.

GTC 발표에서 나온 설계 근거를 한 댓글러가 옮겼다. 에이전트별 한도만이 아니라 집단적 권한 봉투라는 것. 에이전트는 공모할 것이다. 자기가 없는 권한을 가진 동료에게 작업을 넘기는 게 뻔한 탈출구이고, 그건 동시에 네가 필요로 하는 협업이기도 해서 금지하기 어렵다. 정확하게 진술된 진짜 문제고, 이 페이지에서 그걸 이름 붙인 첫 에이전트 샌드박스 프로젝트다.

회의적인 시각이 한 지점에서는 타당하다. "에이전트에게 그 능력을 주면서 무제한 접근은 주지 않는다"는 건 기능으로 포장한 모순어법이다. 능력이 곧 접근이고, OpenShell이 파는 건 더 좁은 거래지 거래의 소멸이 아니다. 정책 변경의 형식 검증 주장도 가까이 읽어볼 만하다. 정책 변경이 *무엇을 허용하게 될지* 검증하는 건 그 정책이 안전한지 검증하는 게 아니다. 그래도 이미 컨테이너에서 에이전트를 돌리고 있다면, 이건 어차피 서툴게 직접 쓰게 될 관리 계층이다.

## Kimi K3.1 Pro — 441 points

**441 points** · 252 comments · [kimi.ai](https://www.kimi.ai/blog/kimi-k3-1-pro) · [HN discussion](https://news.ycombinator.com/item?id=50212065)

Kimi K3의 포스트트레이닝 버전. 3T급 오픈 웨이트, 1M 토큰 컨텍스트, 오늘 Pro와 2–3배 빠른 Highspeed 변형으로 나왔다. 전체 웨이트는 "11월 4일까지" 약속됐는데, 그건 공개와 같은 말이 아니다. 대표 벤치마크는 Terminal-Bench 4.0에서 65.7%로 GPT-6 Astra의 58.2%를 앞서고 Claude Opus 5.5의 66.4%에 뒤진다. 멀티뷰 렌더에서 CAD 코드 생성을 거쳐 3D를 복원하는 BenchCAD는 도구를 쓰면 92.7%로 Opus 5.5의 96.2, Astra의 95.9에 닿고, 도구 없이는 72.8%로 Opus의 73.0에 닿는다. 이쪽 쌍이 더 재미있다. 오픈과 클로즈드의 격차가 이제 대부분 모델이 아니라 툴링의 문제라는 뜻이니까.

긴 호흡 RL을 팔기 위해 준비한 일화가 읽을 만하다. 296개 골격과 402개 근육 컴포넌트를 가진 오픈소스 해부 모델을 주자, 모델이 보행 시뮬레이터를 만들고 167개 미션을 420번의 독립 리뷰와 함께 돌려서, 시뮬레이션 인간을 몇 초 만에 쓰러지던 상태에서 11.2초 걷는 상태로 끌어올렸다. 보상 셰이핑이 팔에서 실패하자 보상 튜닝을 멈추고, 시뮬레이터의 동역학을 오픈루프로 찔러보고, 어깨 모멘트암 계산의 오류 36개를 찾아 고친 뒤 재학습했다. 연구 에이전트에게 맞는 행동이고, "벤치마크 점수가 더 좋다"는 말이 뜻하는 것과는 다르다.

깎아야 할 것들. Kimi Code Bench는 그들의 벤치마크고 채점도 그들이 한다. "가장 강한 상용 모델과 대등하거나 근접한다"는 문장은 조용히 일을 하고 있다. 근접하는 벤치마크에서 근접한다는 뜻이니까. 그리고 이걸 끝낼 숫자는 백만 토큰당 가격인데, 발표문은 그쪽에서 슬쩍 비켜간다.

## LLM이 형식 검증을 더 큰 규모에서 가능하게 만든다 — 435 points

**435 points** · 275 comments · [anthropic.com](https://www.anthropic.com/research/formal-verification) · [HN discussion](https://news.ycombinator.com/item?id=50202217)

Anthropic이 Theorem과 함께, Claude로 123개 OSS-Fuzz 라이브러리의 239개 진입점에 대해 컴파일된 RISC-V 바이너리의 보안 속성을 증명했다. Rocq로 약 1억 8천만 줄, 중앙값 18,000 인스트럭션짜리 바이너리에 대해 전형적인 증명 하나가 60만 줄이다. 명세는 각 라이브러리의 기존 퍼즈 테스트를 정리로 바꿔서 만든다. "이 진입점은 64 MB 이하 모든 입력에서 절대 크래시하지 않는다." 증명해내면 그 진입점 퍼징은 무의미해진다. 그 과정에서 Claude가 버그 수백 개를 찾고, 고치고, 명세를 다시 만들고, 고친 버전을 증명했다.

정직한 부분은 범위 설정이고, 그건 끝까지 읽어야 나온다. 증명은 단일 스레드 정적 바이너리, 고정 메모리 예산, RISC-V CPU, 리눅스를 가정한다. 신뢰 구성요소는 Rocq 검사기, RISC-V와 리눅스 프로세스 시맨틱의 형식 모델, 그리고 정확한 정리 진술이다. "64MB까지 크래시 없음"은 "버그 없음"이 아니고, 논문도 그렇게 말한다. 한계 절이 성과 절보다 긴 드문 발표이고, 이걸 진지하게 봐야 하는 이유다.

댓글이 쓸모 있는 회의론이다. Postgres를 Rust로 다시 쓰고 있는 한 사람은 Rust와 C를 Lean으로 옮기는 컴파일러를 갖고 있고, 코드의 약 12%, 대략 C 7만 줄이 단일 스레드에서 동등하다는 걸 증명했으며 그 과정에서 작은 동작 차이를 찾아냈다고 한다. 또 한 사람은 증명이 소프트웨어와 대응한다는 걸 어떻게 아느냐고 묻는다. 답은 RISC-V와 리눅스 시맨틱이고, 그건 진짜 답이며 동시에 진짜 새로운 신뢰 기반이다. 세 번째는 검사기를 돌리는 하드웨어와 OS와 OCaml 컴파일러까지 신뢰해야 한다고 인정한 각주를 짚고, 그 뒤 누군가 OCaml을 독립적으로 재구현해서 부트스트랩의 trusting-trust 악성코드를 배제했다고 덧붙인다.

답이 없는 질문은 도입이다. 더 빨리 내놓으려고 10년 동안 테스트를 지워온 업계가 이제 60만 줄짜리 증명 산출물을 유지할 것인가. 가능은 하다. 증명 유지가 그것이 대체하는 리뷰보다 싸질 때만. 아무도 그걸 보여주지 않았다.

## 디즈니는 모든 요금제에 광고를 확정한 지 며칠 만에 가격을 올린다 — 391 points

**391 points** · 420 comments · [tvfandomlounge.com](https://www.tvfandomlounge.com/disney-plus-price-hike-ads-premium-tier-nielsen-emmys-2026/) · [HN discussion](https://news.ycombinator.com/item?id=50205934)

팬 사이트에서 나온 글이고 읽는 맛도 그렇지만, 밑에 깔린 숫자는 닐슨과 디즈니 자체 Luminate 수치에서 왔고 잔인하다. 디즈니+는 2026년 상반기 닐슨 Top 20에 오리지널 시리즈가 하나도 없다. 퍼시 잭슨도, 데어데블: 본 어게인도, 만달로리안도, 스타워즈 산출물 어느 것도 아니다. 올해 주간 Top 10에 든 적도 한 번 없다. 분 기준 최대 프로그램은 데어데블: 본 어게인으로 시즌 합산 36억 분이다. 스트레인저 씽즈는 233억 분 했다. 두 번째 시즌이던 더 피트는 211억 분.

시즌 단위 시청자는 분이 시사하는 것보다 나쁘다. 원더맨 700만, 데어데블 시즌 2가 580만, 퍼시 잭슨 시즌 2가 530만. 규모를 감으로 잡자면 그건 플래시 수준이다. CW에서 하던.

그래서, "프리미엄"이라는 이름이 붙은 요금제까지 모든 등급에 광고를 확정한 지 며칠 만에 나온 인상이고, 올해 문화적 히트작이 하나도 없는 서비스의 이야기다. 두 사실을 같이 놓고 읽으면 전략이 읽힌다. 디즈니가 가격을 올리는 건 제품이 좋아져서가 아니다. 가입자 기반이 성장을 멈췄고, 가격을 정당화해야 했던 콘텐츠 파이프라인이 열성 팬층과 그 바깥의 무관심만 남은 쇼들을 만들어내고 있어서다. 번들 보조금 시대는 끝났고, 청구서는 남은 사람들에게 넘어가고 있다.

## 엑스박스는 이미 산 게임을 스트리밍하는 데 시간당 24~40센트를 받으려 한다 — 375 points

**375 points** · 340 comments · [arstechnica.com](https://arstechnica.com/gaming/2026/10/xbox-wants-you-to-pay-24-to-40-cents-per-hour-to-stream-games-you-already-bought/) · [HN discussion](https://news.ycombinator.com/item?id=50194009)

마이크로소프트가 Xbox Insiders에 Cloud Playtime을 풀었다. 10시간 4달러, 25시간 8달러, 50시간 12달러. 시간당 0.40달러, 0.32달러, 0.24달러이고, 게임 구매 위에 얹힌다. 팩은 "클라우드 플레이 가능 게임 구매 또는 일부 게임의 경우 무료 플레이 접근이 필요"하다. 구매한 플레이라임은 만료되지 않고, 그게 유일하게 관대한 조건이다. 9월의 게임패스 스트리밍 하드리밋에 이어지는 흐름이라 패턴은 명확하다. 무제한 요금제를 조이고 그 밑에 계량기를 달았다.

Ars가 꺼내든 아케이드 비유는 중요한 방향에서 틀렸다. 아케이드는 기계가 운영자 것이어서 플레이당 과금했다. 마이크로소프트는 네가 소유한 소프트웨어를 네가 소유하지 않은 하드웨어에서 돌리는 데 시간당 요금을 받는다. 아케이드가 아니라, 네 차에 붙은 주차 계량기다.

경제학은 정확하게 따져볼 만하다. 클라우드 GPU 시간은 여기서 실제 한계 비용이 있는 유일한 구성요소라 계량하는 게 비합리적이진 않고, 시간당 24센트는 스트리밍 GPU 1시간의 실제 원가보다 한참 낮다. 시장이 얼마를 견디는지 알아보려는 가격 실험이지, 원가 회수 수단이 아니다. 정직하게 읽으면 이렇다. 마이크로소프트는 "소유"를 구매 더하기, 그걸 돌려주는 하드웨어 구독으로 분해할 수 있는지 시험하고 있고, 답이 나오면 그에 맞춰 가격을 정할 것이다.

## 독일에서 GNU Taler 운영을 준비하다 — 351 points

**351 points** · 164 comments · [taler.net](https://www.taler.net/en/news/2026-13.html) · [HN discussion](https://news.ycombinator.com/item?id=50197404)

Taler Operations AG가 Taler Systems SA의 자회사로 보훔에 설립된다. 유로용 GNU Taler 익스체인지를 운영하고, BaFin에 전자화폐기관(EMI) 라이선스를 신청한다. 회사가 왜 필요한지가 사람들이 건너뛰는 부분이다. Taler는 가치를 나타내는 무기명 토큰을 발행하고, 그러면 EU 법상 전자화폐가 된다. 유로 전자화폐를 발행하려면 은행이거나 EMI 라이선스를 갖고 있어야 한다. 소프트웨어는 몇 년 전부터 무료고 완성돼 있다. 라이선스가 제품이다.

원래 계획은 GLS Bank가 발행사였고, GLS는 2026년 1월에 빠졌다. 자사 성명은 그 이유가 Taler와 무관하다고 표현한다. 중견 독일 협동조합 은행이 컴플라이언스와 IT 통합 비용이 그만한 가치가 없다고 판단했다는 공손한 표현이다. 대체물은 목적에 맞게 세운 회사이고, Taler는 그게 오히려 낫다고 주장한다. 은행의 상품 포트폴리오에 끼워 넣는 대신 Taler에 완전히 집중하는 운영자라는 것.

지켜볼 것 두 가지, 둘 다 암호학과 무관하다. EMI 라이선스는 고객 자금을 보관한다는 뜻이고, 자본 요건과 감독을 뜻한다. 규제 당국이 붙은 스타트업이라는 이야기다. 그리고 프라이버시 보장은 익스체인지를 신뢰할 때만 성립한다. Taler 설계는 판매자가 구매를 지불자와 연결하지 못하게 하지만, 익스체인지는 돈이 움직이는 걸 본다. 실적이 없는 보훔 회사가 유럽인들에게 결제를 자기 쪽으로 돌리라고 하는 건 거버넌스 문제지 프로토콜 문제가 아니다. 이 프로젝트는 10년 동안 라이선스 하나만 남기고 중요해지지 못했고, 이제 그 라이선스를 신청한다. 실제 진전이고, 동시에 평범한 이유로 실패할 수 있게 되는 지점이다.

## "자연어 프로그래밍"의 어리석음 (1978) — 343 points

**343 points** · 231 comments · [cs.utexas.edu](https://www.cs.utexas.edu/~EWD/transcriptions/EWD06xx/EWD667.html) · [HN discussion](https://news.ycombinator.com/item?id=50203161)

48년 전 다익스트라가, 기계에게 우리 모국어로 지시할 수 있으리라는 되풀이되는 희망에 대해 쓴 글. 논지는 사람들이 예상하는 그게 아니다. 자연어가 부정확하다고 말하지 않는다. 프레임이 틀렸다고 말한다. 형식 기호를 부담으로 보는 건 회계를 거꾸로 잡는 것이다. 인터페이스를 바꾼다고 고정된 노동량이 재분배되는 게 아니라, 인터페이스 *건너편*과 소통하는 일이 추가되고, 그게 양쪽 모두에서 늘어날 수 있다. 좋은 시스템이 좁은 인터페이스를 갖는 이유다.

그다음 놀랍도록 지금도 유효한 걸 한다. 수학사를 가리킨다. 그리스 수학은 말과 그림의 활동으로 정체했고, 대수학은 수사학으로 후퇴했을 때 거의 죽었다. 현대 세계는 비에트, 데카르트, 라이프니츠, 불을 필요로 했다. 형식 표기는 통과해야 하는 고리가 아니라, 한때 천재만 할 수 있던 걸 초등학생도 하게 만드는 기술이다.

갖고 갈 문장은 괄호 안에 묻혀 있다. 어떤 사람들은 프로그래밍 언어를 "프로그래밍의 용이함"으로 평가하는데, 그건 사실 들키지 않고 실수하기의 용이함이다. 1978년의 한 절이 LLM 코딩 논쟁 전체를 담고 있다. 기계는 네 산문을 지시문으로 바꾸는 부담을 기꺼이 흡수할 것이다. 흡수할 수 없는 건 산문이 모호했고 지시문이 틀렸을 때 누가 책임지느냐는 질문이다. LLM이 루프에 들어오면 그 오류는 아무도 흡수하지 않고 리뷰로 미뤄진다. 그리고 리뷰가 정확히 모호함이 떨어지는 곳이다.

## 스웨덴 정부 부처, ChatGPT와 Claude 금지 — 309 points

**309 points** · 114 comments · [sverigesradio.se](https://www.sverigesradio.se/artikel/chat-gpt-och-claude-forbjuder-regeringskansliet) · [HN discussion](https://news.ycombinator.com/item?id=50207405)

월요일부터 Regeringskansliet 직원들은 업무용 컴퓨터에서 ChatGPT와 Claude에 접근할 수 없다. 표면적 이유는 직원이 사무실이 승인한 서비스를 써야 한다는 것이고, 그 목록에는 Microsoft Copilot도 들어 있다. 승인되지 않은 AI 사용은 "정보 보안에 결과를 초래할 수 있다"고 한다. 내부 검토로 Copilot의 보안 설정도 강화됐고, 세부 내용은 공개되지 않았다.

Sveriges Radio의 보도가 값어치 있는 부분이다. 이건 한 기관의 일이 아니다. Skatteverket과 SiS도 차단했고, Kronofogden은 검토 중이다. Trafikverket의 내부 감사는 약 10개 AI 서비스의 위험한 사용이 광범위했다고 찾아냈다. 민감한 정보가 붙여넣기 되고, AI가 만든 답이 서툴게 처리되는 일까지. Regeringskansliet은 이미 DeepSeek을 제한해둔 상태였다.

이야기를 다시 짜는 디테일. 일부 직원은 정부가 직접 만든 AI 어시스턴트 플랫폼을 통해 ChatGPT와 Claude 접근을 유지한다. 그러니까 금지는 모델에 대한 게 아니라 소비자 계정에 대한 것이다. 그렇게 말하고 나면 보안 근거와 조달 근거가 구분되지 않기 시작하고, 승인된 도구가 Copilot이라는 사실이 이 모든 걸 보안 코스튬을 입은 데이터 거버넌스 결정으로 읽히게 만든다. 그건 방어 가능한 결정이다. 다만 헤드라인이 말하는 그건 아니다.

## LLM 신뢰도 점수를 쓰는 건 나쁜 생각이다 — 219 points

**219 points** · 100 comments · [rumple.github.io](https://rumple.github.io/blog/2026/10/20/asking-llm-for-confidence.html) · [HN discussion](https://news.ycombinator.com/item?id=50176082)

에이전트 코드 어디에나 있는 패턴에 대한 깔끔한 반론. 모델에게 신뢰도 숫자를 물어보고 그걸로 분기하는 것. 글은 신뢰도가 뭘 뜻하는지에서 시작한다. 예보관의 "강수 확률 70%"는 70%였던 많은 날에 걸친 실적에 대한 주장이고, 보정으로 검증 가능하다. 그리고 LLM이 말하는 신뢰도에는 그런 실적이 없다는 걸 보여준다. 그 숫자는 주변 문장과 같은 지위를 가진 생성된 텍스트니까. 우연히 보정될 수도, 우연히 유용할 수도 있지만, 그걸 사후 확률로 만드는 메커니즘은 없다.

네 코드에 들여와야 할 구분은 이거다. LLM의 신뢰도 점수는 자기가 곧 만들 텍스트의 *완곡어법 말투*에 대한 주장이고, 그 말투는 네 과제의 오류율이 아니라 학습 데이터에서 그런 주장이 어떻게 표현되는지와 상관한다. 해법은 더 나은 프롬프트가 아니다. 과제별 홀드아웃 세트와 측정된 정확도, 그리고 자기 보고 숫자를 버리고 측정된 숫자를 쓰는 것.

## 아크에게 보내는 작별 — 277 points

**277 points** · 242 comments · [arc.net](https://arc.net/) · [HN discussion](https://news.ycombinator.com/item?id=50197601)

아크는 2026년 12월 22일에 종료된다. 신규 계정은 10월 22일에 멈췄고, 11월 23일에는 iOS와 안드로이드 AI 기능이 꺼지고 동기화가 멈춘다. 12월 22일에는 브라우저가 끝난다. Dia로의 이전은 비밀번호, 북마크, 확장, 방문 기록, Spaces, 폴더, 탭 그룹을 옮긴다. 아크에서 쓰던 브라우저 기능은 Dia에서 무료이고 AI는 선택 사항이다.

표면적 이유는 보안이다. 브라우저를 안전하게 유지하는 건 "AI 시대에 더 커지기만 하는" 상시 작업이고, Dia는 오늘의 기준에 맞춰 처음부터 다시 만들어졌으니 보안과 엔지니어링 팀이 그쪽으로 간다는 것. 수백만 명에게 크로미움 기반 자동 업데이트 제품을 내놓은 브라우저에 대고 하기엔 이상한 말이다. 아크의 아키텍처가 유별나게 변호 불가능했던 게 아니고, 정직한 버전은 더 단순하다. 아크의 극대주의적이고 주관적인 UI는 사업적으로 설계의 막다른 길이었고, Dia는 재수정이고, 회사는 "마음이 바뀌었다"가 아닌 이유가 필요했다.

댓글창은 대체로 장례식이고, 쓸모 있는 저류가 하나 있다. 3년에 두 번, 사랑받는 브라우저가 그걸 만든 회사에 의해 은퇴했고, 두 번 다 이전 경로는 "데이터는 따라오지만 습관은 안 따라온다"였다. 브라우저 벤더의 로드맵 위에 뭔가를 만드는 사람에게 교훈은, 그 로드맵이 펀딩 문서라는 것이다.

## 새로 올라온 것들

- **[캐나다에서 도박 광고를 제한하려는 의원들](https://www.cbc.ca/news/investigates/gambling-ads-restrictions-canada-9.7388888)** — 258 points · 134 comments — CBC 분석에 따르면 캐나다인들은 여전히 스포츠 중계 중 베팅 홍보에 시달리고 있고, 연방 법안이 움직이고 있다. 온타리오와 앨버타는 반대한다. 업계 스스로의 성장 수치가 규제해야 할 이유다.
- **[Hedra, 고등학생이 처음부터 끝까지 쓴 3D 오픈월드 게임](https://github.com/maxilevi/project-hedra/tree/pre-ai)** — 230 points · 47 comments — 커밋 2,041개, 브랜치 이름이 `pre-ai`다. 그게 피치 전부다. 태그가 "이 도구들이 존재하기 전에 만들었다"는 주장이고, 커밋 히스토리가 증거다.
- **[earcut보다 빠르게: 3.7M 지도 폴리곤을 489 ms에](https://globus.software/blog/2026/10/16/cutting-map-polygons/)** — 226 points · 40 comments — Globus가 자사 트라이앵귤레이터를 `earstrip`으로 공개했다. C++ 헤더 하나, ISC 라이선스, earcut.hpp보다 14% 빠르고 브라우저에서는 1.4–2.1배 빠르다. 좋은 디테일은 줌 13의 마조비아 폴리곤 중 거의 절반이 정점 4개 이하라는 것, 그리고 범용 들로네 경로가 삼각분할이 전혀 필요 없는 도형에 302 ms를 쓰고 있었다는 것.
- **[Apple Music 404 Not Found](https://music.apple.com/this-url-doesnt-exist)** — 211 points · 68 comments — 애플 뮤직 사이트가 서비스하지 않는 URL. 농담으로 올라와서 페이지의 4분의 1을 앞질렀다. 금요일에, 이게 이 사이트에서 업보트가 뭘 재는지에 대한 가장 정직한 신호다.

## 아직 페이지에 있는 것들

점수가 살아 있는 채로 넘어온 이야기는 68개다. 변동치는 Firebase 항목 데이터에서, 그리고 상위 180위 밖으로 밀려난 것들은 HN 인덱스에 대한 URL 조회로 확인했다.

| 스토리 | 이전 | 오늘 | 변화 |
| --- | --- | --- | --- |
| [DeepInfer](https://github.com/deepseek-ai/DeepInfer) | 2,327 | 2,340 | +13 |
| [PHP 보안 권고문](https://www.php.net/archive/2026.php#2026-10-21-5) | 1,544 | 1,554 | +10 |
| [Quad9, 필터가 되느니 프랑스를 떠난다](https://quad9.net/news/blog/au-revoir-france/) | 630 | 1,331 | +701 |
| [eMudhra 중간 CA 침해](https://emudhra.we-have-a-problem.com/) | 1,261 | 1,272 | +11 |
| [eMudhra, 글로벌 SSL/TLS 사업에서 철수](https://emudhra.com/en/press-release/emudhra-to-exit-global-ssl-tls-certificate-business) | 784 | 1,127 | +343 |
| [PHP 8.2.35](https://github.com/php/php-src/releases/tag/php-8.2.35) | 1,069 | 1,092 | +23 |
| [여덟 비트의 신뢰](https://scotthelme.co.uk/eight-bits-of-trust-emudhras-ca-keys-cracked-in-milliseconds/) | 920 | 939 | +19 |
| [심시티, 하지만 인허가 포함](https://permit.petercai.com/) | 927 | 936 | +9 |
| [PHP 재단 포스트모템](https://thephp.foundation/blog/2026/10/21/todays-php-security-release-and-how-were-strengthening-php-security/) | 786 | 811 | +25 |
| [스위치 2, 로봇 손가락을 전원 버튼에 대고 무너지다](https://pepsipu.com/blog/2026-10-switch2-jailbreak-ns2jb/) | 591 | 806 | +215 |
| [Voxtral 3](https://mistral.ai/news/voxtral-3/) | 765 | 768 | +3 |
| [왓츠앱 도움말 페이지에 숨은 지시문](https://redact.dev/blog/whatsapp-help-pages-hidden-ai-instructions) | 739 | 741 | +2 |
| [프로그래밍을 즐겨도 여전히 괜찮다](https://chriskiehl.com/article/it-is-still-ok-to-enjoy-programming) | 701 | 705 | +4 |
| [EA, 바이오웨어 폐쇄](https://www.theverge.com/games/1015647/ea-is-shutting-down-bioware) | 673 | 700 | +27 |
| [메타, 뉴멕시코에서 250억 달러 배상 명령](https://www.cnbc.com/2026/10/21/meta-new-mexico-cambridge-analytica-penalty.html) | 658 | 695 | +37 |
| [CSS의 미래](https://www.joshwcomeau.com/css/interop-2027/) | 617 | 624 | +7 |
| [이 PHP 취약점에 쓸 만한 익스플로잇은 없다](https://eliastaylor.com/noexploit/) | 602 | 624 | +22 |
| [Wine, OpenBSD로 포팅되다](https://marc.info/?l=openbsd-ports&m=179236125692175) | 613 | 614 | +1 |
| [mitmproxy, --emudhra 플래그 추가](https://github.com/mitmproxy/mitmproxy/commit/169234499088fc2c414644a67efaed3d64ae2e3b) | 582 | 609 | +27 |
| [애플, 아이패드의 발표 기능 하나를 망가뜨리다](https://teddysvoronos.com/2026-10-19-apple-broke-an-essential-presentation-feature-of-ipads/) | 604 | 605 | +1 |
| [Railway: 암호화된 환경변수를 복호화해서 돌려줌](https://blog.railway.com/p/security-disclosure-wednesday-october-21st) | 571 | 599 | +28 |
| [WorldTUI: 터미널인 척하는 360M 모델](https://simedw.com/2026/10/21/world-model-terminal/) | 457 | 599 | +142 |
| [LiteLLM 1.107.0 자격증명 탈취](https://safedep.io/litellm-pypi-compromise-credential-stealer-backdoor/) | 583 | 591 | +8 |
| [DeepSeek, 미국 연방기관에서 금지](https://www.reuters.com/technology/us-banning-chinese-ai-deepseek-government-agency-it-systems-2026-10-19/) | 578 | 580 | +2 |
| [Nordwand Mono](https://github.com/tywr/Nordwand-Mono) | 561 | 569 | +8 |
| [Claude Duet, 드디어 어시스턴트 제품](https://claude.com/product/claude-duet) | 536 | 560 | +24 |
| [MiniMax M3.1 Flash](https://www.minimax.io/blog/minimax-m31f) | 515 | 516 | +1 |
| [Show HN: 안드로이드 기기에서 iOS 16.5 펌웨어 전체를 돌리기](https://github.com/oosexgang/hackios-xnu-kernel) | 211 | 508 | +297 |
| [OpenBSD 8.0](https://www.openbsd.org/80.html) | 487 | 492 | +5 |
| [아들에게 뭘 가르쳐야 하나](https://stevekrouse.com/ends) | 484 | 488 | +4 |
| [이제 모든 메뉴에 아이콘은 없다](https://blog.jim-nielsen.com/2026/icons-in-every-menu/) | 463 | 480 | +17 |
| [페이스북 페이지 유료 링크](https://mastodon.gamedev.place/@AshleyGullen/117473851565913919) | 466 | 470 | +4 |
| [DuckDB 2.0](https://duckdb.org/2026/10/21/announcing-duckdb-200) | 451 | 461 | +10 |
| [그리디피케이션이란 무엇인가](https://musicalform.substack.com/p/what-is-gridifcation) | 319 | 461 | +142 |
| [광고 없는 안드로이드 TV](https://cretezy.com/2026/ad-free-android-tv) | 438 | 442 | +4 |
| [Tsrs: Rust로 포팅한 TypeScript](https://blog.cloudflare.com/typescript-rust-port/) | 430 | 431 | +1 |
| [PingCAP: 10.6TB와 감지되지 않은 88건의 내보내기](https://fulcrumsec.vg/pingcap/) | 419 | 430 | +11 |
| [Ofcom, 패배를 인정하다](https://prestonbyrne.com/2026/10/20/ofcom-concedes-defeat/) | 418 | 421 | +3 |
| [구글 클라우드 런던 장애](https://www.neowin.net/news/google-cloud-outage-takes-down-hsbc-revolut-bank-of-scotland-llyods-equifax-more/) | 403 | 404 | +1 |
| [Tor 출구 노드 300개 제거](https://kaba.cx/posts/20261020_Tor/) | 402 | 404 | +2 |
| [GitLab, 아무도 손댈 시간 없던 CVSS 10.0을 패치](https://docs.gitlab.com/releases/patches/patch-release-gitlab-19-5-1-released/) | 399 | 404 | +5 |
| [Muse, 공유한 것 전부를 노출](https://arstechnica.com/security/2026/10/meta-muse-exposes-users-personal-and-business-secrets-when-they-share-conversations/) | 401 | 403 | +2 |
| [구글의 Rust 스타일 가이드](https://google.github.io/styleguide/rustguide.html) | 369 | 387 | +18 |
| [TorchTPU](https://github.com/google-pytorch/torch_tpu) | 378 | 379 | +1 |
| [pwn.watch: 12개월에 237건](https://pwn.watch/) | 276 | 374 | +98 |
| [가짜 통계를 올리면 LLM이 인용한다](https://peec.ai/blog/publish-stats-get-cited-the-tactic-that-put-my-data-all-over-the-web) | 364 | 368 | +4 |
| [구글이 먼저 핀란드 숲 300헥타르를 베었다](https://www.techspot.com/news/114100-google-cleared-300-hectares-finnish-forest-data-center.html) | 287 | 326 | +39 |
| [딥워터 호라이즌, 16년 후](https://e360.yale.edu/digest/deepwater-horizon-deep-sea-recovery) | 320 | 324 | +4 |
| [OpenAI 모델이 구글 클라우드에 온다](https://openai.com/index/openai-models-google-cloud/) | 319 | 323 | +4 |
| [o(n log n) 정수 곱셈, 그리고 한 수학자의 슬픔](https://web.maths.unsw.edu.au/~davidharvey/research/subnlogn.pdf) | 295 | 311 | +16 |
| [또 다른 전염병](https://www.thebeliever.net/the-other-epidemic/) | 300 | 303 | +3 |
| [6,000년 동안 멸종했던 주머니쥐](https://www.bbc.com/news/articles/cp814l80pw2o) | 259 | 270 | +11 |
| [몸값 협상가 / ShinyHunters](https://krebsonsecurity.com/2026/10/feds-suspect-ransom-negotiator-ran-shinyhunters-extortion-site/) | 267 | 268 | +1 |
| [아마존, PHP2Shell 공격을 나흘 먼저 목격](https://aws.amazon.com/blogs/security/amazon-threat-intelligence-identifies-php2shell-exploitation-prior-to-public-disclosure-in-madpot/) | 238 | 267 | +29 |
| [OpenAI의 Patch the Planet, 타이밍 공을 원한다](https://openai.com/index/coordinated-disclosure-of-critical-vulnerabilities/) | 260 | 265 | +5 |
| [이제 코드는 점토다](https://www.albertodenia.com/writing/code-is-clay-now) | 241 | 265 | +24 |
| [에어비앤비, 집안일 목록 금지](https://www.theverge.com/tech/1015844/airbnb-chores-house-rules-update) | 233 | 254 | +21 |
| [어블리터레이티드 모델](https://projectdiscovery.io/research/how-abliterated-models-can-get-you-pwned) | 249 | 252 | +3 |
| [RuneScape Bench](https://www.youtube.com/watch?v=cNm4zyUtWj0) | 248 | 249 | +1 |
| [트렌드마이크로, 커널 취약점을 공개 리스트에 올림](https://www.phoronix.com/news/LKML-New-Trend-Vulnerabilities) | 229 | 249 | +20 |
| [프랑스 슈퍼마켓 냉장고](https://ipinfo.io/blog/france-fridges-hack) | 243 | 243 | +0 |
| [OpenAI CLI](https://github.com/openai/openai-cli) | 220 | 240 | +20 |
| [애플 비전 프로에서 슈퍼 마리오 64를 하는 방법](https://www.pagetable.com/303) | 225 | 232 | +7 |
| [학계와 위키백과](https://blogs.lse.ac.uk/impactofsocialsciences/2026/10/19/academics-have-a-duty-to-defend-open-knowledge-systems-like-wikipedia/) | 229 | 230 | +1 |
| [Plex 크립토마이너 익스플로잇](http://www.boredhackerblog.info/2026/10/plex-vulnerabilities-being-exploited-in.html) | 220 | 221 | +1 |
| [내 친구 밥 크링겔리](https://tyma.com/my-cringe-story/) | 215 | 217 | +2 |
| [모든 역경 속의 좋은 타입](https://unsung.aresluna.org/good-type-against-all-odds/) | 208 | 212 | +4 |
| [IKEA – 3D 가이드](https://sael.net/flatpack/) | 205 | 207 | +2 |

Quad9은 순위가 아니라 움직임으로 오늘의 스토리다. 630에서 1,331, 24시간 만에 두 배가 넘었다. 리졸버에게 필터링을 명령하는 법원 명령이, 다른 관할권들이 선례를 알아차리기 시작하면 어떤 모습이 되는지 보여준다. 이 표에서 숫자가 오르는 게 인터넷에 나쁜 소식인 유일한 항목이다.

나머지 움직임은 후속이다. eMudhra의 철수 발표가 343점을 얻은 건, 사람들이 회사가 인증서 사업을 떠난다고 밝힌 이유가 "조사"였다는 걸 알아차리면서다. 스위치 2 탈옥은 591 → 806으로 갔고, 라이트업이 제대로 읽히면서 작성자가 묻어둔 구분이 잡혔다. 익스플로잇에 2주, 마법처럼 보이는 것에 하루. 안드로이드가 이제 iOS 16.5 펌웨어를 508점에 돌린다, 297점 상승. 정당화를 시도하지 않겠는 문장이다. WorldTUI와 그리디피케이션 에세이는 둘 다 142점을 얻었다. 하나는 360M 모델이 터미널이 어떤 느낌인지 배우는 것, 다른 하나는 양자화를 인식론적 폭력으로 보는 논증이다. 같은 날 같은 페이지에 있다.

움직이지 않은 것들도 정보다. OpenBSD의 Wine: +1. MiniMax M3.1 Flash: +1. Tsrs: +1. TorchTPU: +1. Plex 익스플로잇: +1. Ofcom: +3. 프랑스 슈퍼마켓 냉장고: 정확히 0. 모델 릴리스, 하드웨어 백엔드, 폰트, 그리고 실제로 공격당하는 취약점이 전부 제자리에 앉아 있었다. 이 페이지에서 이야기는 논거를 축적하거나, 못 하거나 둘 중 하나니까. 그리고 DeepInfer는 4일째 2,340점, 댓글 891개로 여전히 1위이고, 하루에 13점씩 오른다. 순위는 이제 관심을 재는 게 아니라 관성을 잰다.

## 스루라인

세 갈래인데, 이번엔 나란히가 아니라 차례로 간다.

**첫째: 어제의 실패가 결과로 바뀌었고, 그 결과가 이야기다.** 오늘 새로 터진 건 없다. 어제 터진 모든 것에 값이 매겨졌을 뿐이다. Quad9은 한 나라의 판결이 다른 모든 나라에서 템플릿처럼 보이기 때문에 두 배가 됐다. eMudhra는 343점을 얻고 인증서 사업에서 나가면서 이유로 "조사"를 내놨다. PHP 엠바고는 안 깬 사람에게서 사과가 나왔고, 깬 사람은 여전히 익명이며, 아마존 허니팟은 공개 나흘 전에 이미 익스플로잇을 목격했다. 공개 포스트모템의 모양이 이렇다. 눈에 보이는 행위자가 비난을 받고, 절차의 결함은 살아남고, 올바른 방향으로 움직이는 유일한 숫자는 pwn.watch의 사건 수다.

**둘째: 착취 단계가 시작됐고, 그게 소비자 청구서에 보인다.** 디즈니는 프리미엄이라 불리는 요금제에 광고를 붙인 지 며칠 만에 가격을 올렸다. 한 해 동안 닐슨 상위 20위에 든 프로그램이 하나도 없는 서비스에 대고. 엑스박스는 이미 산 게임의 시간을 팔기 시작했다. 아크는 브라우저가 어떻게 작동하는지와 만나면 버티지 못할 보안 근거를 대며 은퇴했다. 서로 다른 제품, 서로 다른 회사 셋, 움직임은 하나다. 성장 이야기가 끝났으니 가격이 오르고 계량기가 켜진다. 각 경우의 명분은 기술적이다. 보안, 클라우드 비용, 스트리밍 인프라. 그리고 각 경우에 그 기술적 명분이, "신규 고객이 바닥났다"는 말이 대신해야 했을 일을 하고 있다.

**셋째: 이 페이지의 모든 주장은 정직한 버전이 헤드라인보다 좁았다.** Anthropic은 64 MB 이하 모든 입력에 대해, 한 아키텍처에서, 단일 스레드로, RISC-V와 리눅스 시맨틱이라는 새 신뢰 기반 위에서 크래시 없음을 증명했다. 그리고 그렇게 말했다. 그래서 이 페이지에서 가장 좋은 글이다. Kimi는 벤치마크에서 65.7%를 66.4%와 58.2% 사이에 놓았고, 유일하게 등장하지 않은 숫자는 가격이었다. 신뢰도 점수 글은 반대편에서 같은 말을 한다. 모델이 자기 확신에 대해 생성하는 숫자는 텍스트지 사후 확률이 아니다. 그리고 1978년의 다익스트라가 이 모든 걸 읽히게 만드는 프레임을 준다. 형식의 부담은 기계에게 넘긴다고 사라지지 않는다. 옮겨가고, 결국 그걸 들고 있는 사람은 결과물을 리뷰하는 사람이다.

오늘 하루를 한 문장으로 줄이면 이렇다. 프런트 페이지는 24시간 동안 실패가 사건이 아니라 청구서라는 걸, 그리고 그 청구서는 거절할 수 없는 사람에게로 간다는 걸 알아내는 데 썼다.
