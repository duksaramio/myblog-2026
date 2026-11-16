---
title: "해커 뉴스 프런트 페이지 요약 — 2026년 11월 16일"
pubDate: 2026-11-16
description: "독일의 염소 누출은 마이크로소프트 장애 중 놓쳐버린 경보로 이어졌고, Bitly는 오래된 링크의 뒷부분을 낯선 이들에게 넘겼으며, Qwen의 플래그십은 자사 오픈 27B보다 낮은 점수를 받았다."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
lang: "ko"
---

오늘 순위 목록 전체를 훑은 결과 155개 스토리가 200점을 넘었고, 그중 25개가 새로 올라온 것이다. 나머지 130개는 지난 다섯 밤 사이에 이곳에서 다룬 것들이며, 갱신된 점수는 맨 아래 표에 있다.

페이지 상단은 고정이다. 젠슨 황의 사임 소식이 4,054점으로 어젯밤보다 7점 올랐고, 다른 무엇도 근처에 오지 않는다. 새로운 것은 출시가 아니다. 결과가 몰린 하루다. 독일의 한 테마파크 호텔에서 염소 투입 장치가 고장 났는데 유일한 경보가 마이크로소프트가 내려버린 이메일함으로만 갔고, Bitly는 15년 된 버거킹과 맥도날드 트윗이 여전히 가리키는 단축 링크 뒷부분을 조용히 다시 발급했으며, 웹에서 가장 많이 설치된 콘텐츠 차단기에 보편 XSS가 있었고, 알리바바는 한 벤치마크에서 자사의 8월 오픈 웨이트 27B보다 낮은 점수를 받은 플래그십 모델을 내놨다.

## Qwen4-Max — 842 points

**842 points** · 459 comments · [qwen.ai](https://qwen.ai/blog?id=qwen4-max) · [HN discussion](https://news.ycombinator.com/item?id=50513215)

알리바바의 새 플래그십. 발표 페이지는 자바스크립트 껍데기라 브라우저 없이 접근하면 본문 텍스트를 4글자만 돌려준다. 그래서 아래 내용은 벤더가 아니라 스레드에서 나온 것이다. Qwen4-Max는 클로즈드 웨이트이고, 하루 종일 비교 대상이 될 27B와는 다르다.

비교는 잔혹하고, 숫자가 따라붙는다. 한 댓글러가 Artificial Analysis 수치를 끌어온다: 평균 비용 $3.27에 43점, GPT-6.1 Sol은 medium effort에서 $0.36에 46점. 약 9배의 비용으로 3점이 더 낮다. Plotly는 자사의 단기 데이터 분석 시험에 돌려봤고, 8월의 Qwen 3.8 27B — 오픈 웨이트다 — 보다 몇 점 *더 나쁘고* 더 비싸다는 결과를 얻었다. 그들의 테스트 묶음에는 더 좋으면서 더 싼 모델이 10개쯤 있다.

댓글러들이 계속 맴도는 패턴은 알리바바가 실제로는 Max 티어로 프런티어를 다투지 않는다는 것이다. Qwen3-Max는 9월에 Opus 5.5 옆에 나왔지만 근처에도 못 갔다. Flash와 27B 티어가 이 패밀리가 진짜로 경쟁력 있는 곳이다. DeepSeek도 모양이 같다. 그러면 누군가 던졌고 아무도 제대로 답하지 못한 질문이 남는다: 플래그십이 쓸모 있는 결과물이 아니고 오픈 소형 모델이 그렇다면, 오픈 웨이트 격차가 벌어지는 것인가, 아니면 플래그십 티어는 그저 연구소들이 가격 결정력을 쌓아두는 자리인가? 기억해둘 만한 디테일 하나: Qwen4-Max는 추론을 완전히 끌 수 있는데 Qwen3.8 Max는 그렇지 않았다 — 5단계 effort 중 하나를 강제로 고르게 했다. 호출당 더 싸다는 것은 실제 기능이다.

## How to Make (almost) Anything — 796 points

**796 points** · 133 comments · [pub.cba.mit.edu](https://pub.cba.mit.edu/863.26/site/) · [HN discussion](https://news.ycombinator.com/item?id=50514470)

MIT MAS.863의 2026년 실라버스. 닐 거셴펠드가 팹랩이 아직 연구 질문이던 시절부터 운영해 온 과목이다. 수요일 1:00~4:00, 방 하나, 그리고 매주 이어지는 진행: 컴퓨터 지원 설계, 절단, 임베디드 프로그래밍, 스캔과 프린팅, 전자 설계와 생산, 기계 가공, 입력 장치, 출력 장치, 기계 설계, 네트워킹, 시스템 통합, 프로젝트 개발. 올해 recitation에는 10월의 AI 에이전트에 관한 것과 월말의 엣지 AI에 관한 것이 있다.

페이지는 일정표일 뿐이다 — 슬라이드도, 영상도, 외부인이 쓸 수 있는 읽기 목록도 없다. 스레드의 주된 불만이고, 타당한 불만이다. 실질은 학생 프로젝트 페이지에 있고, 이 과목에 대한 논쟁이 실제로 벌어지는 곳도 거기다. 나중에 조교를 한 한 졸업생은 핵심이 각 개인의 9월과 12월 사이의 변화량이라고 말한다. 대부분은 전자공학도 기계 가공도 CAD도 모른 채 들어와서 작동하는 무언가를 만들고 나온다. 인생을 바꾸는 과목이고, 엄청난 시간 투자다.

회의론자들도 진지하게 들을 만하다. TechShop 수업을 13개쯤 들은 베테랑은 실라버스는 거대한데 프로젝트는 그렇게 복잡하지 않고, 고통은 무엇이든 다 넣는 속도에서 온다고 말한다 — PCB 하나는 제대로 된 도구가 있으면 어렵지 않다. 선전에서 막 돌아온 사람은 진짜 격차를 짚는다: 고등교육은 프로토타이핑을 가르치면서 대규모 산업 공정에 대해서는 거의 말하지 않고, 그게 작동하는 데모와 제품 사이의 부분이다. 그리고 훑기 형식에 대한 스레드의 최고 변론은 AI의 해에 중요한 것이다: Y라는 것이 존재한다는 걸 아는 것이 나중에 Y를 찾게 해주고, 그것은 Y를 실행하는 것과 다른 기술이다.

## Amazon의 "딜"이 아니었던 것들 — 713 points

**713 points** · 444 comments · [groundworkcollaborative.org](https://groundworkcollaborative.org/news/amazons-decoy-deals-groundwork-investigation-reveals-nearly-1-in-3-black-friday-and-cyber-monday-deals-advertised-by-amazon-offered-no-savings-to-shoppers-nearly-1-in-10-w/) · [HN discussion](https://news.ycombinator.com/item?id=50517488)

Groundwork Collaborative는 2024년과 2025년 아마존 자체 블랙프라이데이·사이버먼데이 딜 페이지 — 아마존이 "엄선된" 최고 딜이라고 설명하는 페이지 — 에서 350개가 넘는 제품을 뽑아, 각 세일 직전 한 달과 가격을 비교했다. 거의 셋 중 하나는 행사 기간에 같은 가격이거나 더 비쌌다. 거의 열 중 하나는 그냥 더 비쌌다. 더 나쁜 쪽의 중간값은 행사 가격이 몇 주 전 가격보다 19% 높았다.

개별 사례가 핵심이다. "세일" 가격 $126.99짜리 Hunter 레인부츠 한 켤레는 세일 9일 전에 $79.97이었다. 기다린 대가는 59% 더 비싼 것이었다. 사이버먼데이에 $179.98이던 UGG Butte 부츠 한 켤레는 약 4주 전에 $98.40이었다 — 세일을 이용한 대가로 83% 프리미엄. Groundwork는 연구 결과를 보여준 뒤 아마존이 딜 페이지를 내렸다고 말하며, 사본을 보관하고 있다.

프레임은 그에 걸맞은 회의로 다뤄야 한다: 이들은 책을 팔아야 하는 옹호 단체이고, 두 시즌에 걸친 350개 제품은 전체 조사가 아니라 표본이다. "셋 중 하나"라는 수치는 "같은 가격"을 "더 비쌈"에 함께 접어 넣은 것이고, 그게 헤드라인에서 큰 역할을 한다. 하지만 "열 중 하나"라는 숫자는 설명해 넘기기 어렵고, 요구 사항 — 소매업자가 할인을 광고할 때마다 직전 30일 내 최저가를 보여주도록 의무화하라 — 은 EU가 이미 가진 규칙이다. 스레드는 보고서에 없는 메커니즘을 덧붙인다: 알리익스프레스에서는 11.11 전 주에 판매자들이 가격 추적기를 피할 목적으로 같은 사양의 SKU를 새 이름으로 내렸다 올렸고, 평균 가격이 약 $80 올라 할인이 인상이 되었다.

## 수영장, 경보, 그리고 아무도 닿을 수 없던 받은편지함 — 616 points

**616 points** · 269 comments · [wdr.de](https://www1.wdr.de/nrw/rheinland/rhein-erft-kreis/technischer-defekt-chlor-phantasialand-100.html) · [HN discussion](https://news.ycombinator.com/item?id=50509411)

헤드라인은 마이크로소프트 365 장애라고 말하지만, 이야기는 마이크로소프트와 아무 상관 없는 단일 장애점에 관한 것이다. 브륄의 판타지아랜드 파크에 있는 Hotel Ling Bao에서 자동 수영장 투입 시스템이 고장 나 물에 염소를 너무 많이 넣었다. 사우나 구역의 유지보수 안전 시스템이 이를 감지해 이메일로 경보를 보냈다. 금요일의 마이크로소프트 365 장애 때문에 메일은 도착하지 않았고, 투숙객이 항의할 때까지 아무도 몰랐다. 13명이 기도 자극을 호소했고 나중에 15명이 됐다. 4명이 병원에 갔고, 1명은 중등도 부상으로 관찰을 위해 남았다. 수영장은 폐쇄되고 물은 교체됐다.

실제 수영장 화학을 아는 댓글러들은 벤더 각도보다 설계 쪽에 관심이 있다. 폐루프 염소 처리 시스템을 운영하는 한 사람은 이런 센서가 *과소* 측정 쪽으로 고장 나서 컨트롤러가 과다 투입하게 만든다고 지적한다 — 고장 모드가 센서 종류에 내장돼 있고, 그래서 상업용 수영장은 매일 개장 전에 사람이 드롭 테스트로 확인해 펜으로 기록하도록 되어 있다. 여러 명이 당연한 점을 만든다: 정확히 하나의 채널로만 존재하고, 건물이 통제하지 않는 제3자 클라우드를 거치는 생명 안전 경보는 경보가 아니다. WDR 기사에 인용된 건축가는 같은 이유로 과실을 파크에 돌린다.

스레드가 프레임에 가하는 두 가지 교정, 둘 다 짚을 만하다. 기사는 염소가 너무 많았다고 하지 염소 가스라고 하지 않는다 — 제출 제목의 가스 표현은 번역 과정의 산물이고, 독일어 보도는 HN 헤드라인보다 훨씬 덜 극적이다. 그리고 이것은 이중 고장이었다: 투입 결함에, 때마침 내려가 있던 모니터링 채널. 어느 하나만으로도 견딜 수 있었다. 마이크로소프트가 호텔을 망가뜨렸다는 이야기가 아니다. 호텔이 인간에게 닿는 경로를 하나만 둔 안전 시스템을 만들었고, 그것이 설계라는 걸 몰랐다는 이야기다.

## uBlock Origin의 보편 XSS — 589 points

**589 points** · 168 comments · [iter.ca](https://iter.ca/post/ubo-uxss/) · [HN discussion](https://news.ycombinator.com/item?id=50513160)

Smitty van Bodegom은 uBlock Origin의 Firefox MV2 빌드에서 클릭 한 번으로 실행되는 보편 XSS를 찾았고, uBO Lite에는 더 온순한 버전이 있다. 엘리먼트 피커는 확장 프로그램 자체 오리진에서 제공되는 iframe으로 구현되어 있어 백그라운드 스크립트와 통신하며 필터 추가를 요청할 수 있고, 신뢰된 필터는 페이지에 자바스크립트를 주입할 수 있다. 즉 악성 페이지가 피커의 보이지 않는 사본을 삽입하고, 원하는 필터를 만들도록 몰아간 다음, 사용자가 클릭하는 위치마다 보이지 않는 iframe의 "Create" 버튼을 배치한다. 남의 사이트에서 신뢰된 필터, 임의 스크립트 실행.

XSS보다 사람을 더 불편하게 해야 할 부분: 이 모든 것을 하려면 공격자는 확장 프로그램의 내부 UUID가 필요한데, 이는 설치마다 무작위화되며, 사이트가 그것을 얻을 수 있다. uBlock의 기본 규칙 세트에는 확장 오리진에서 리소스를 XHR로 가져와 광고 요청을 재작성하는 `no-fetch-if` 필터가 있고, 페이지는 `XMLHttpRequest.prototype.open`을 후킹해 URL을 읽을 수 있다. 즉 설치된 광고 차단기가 자신이 차단하는 모든 페이지에 브라우저의 안정적인 식별자를 건네준다. 여러 댓글러가 여기서 멈춰, 웹에서 가장 인기 있는 프라이버시 확장이 이제 지문 채취 벡터이기도 한지 물었다. 그 질문은 스레드가 받은 것보다 나은 답을 받을 만하다.

공개는 깔끔하고, 사용해야 할 버전은 uBO 1.75.4, uBO Lite 2026.1110.1816이다. 저자 공개 문구는 페이지에서 가장 흥미로운 문화적 산물이다: GPT-5.6 Sol이 저자의 요청으로 버그를 찾아냈고, Claude가 PoC 코드 대부분을 썼으며, 사람이 산문의 모든 단어를 쓰고 발견을 검증했다. 보안 연구를 위한 작동하는 분업이고, 담백하게 적혀 있으며, 1년 안에 표준이 될 것이다.

## 은행들이 죽고 공은 DownDetector가 가져간다 — 486 points

**486 points** · 370 comments · [apnews.com](https://apnews.com/article/bank-outage-chase-wells-fargo-truist-50fee2693c22f597fa6ca51a97ef2cda) · [HN discussion](https://news.ycombinator.com/item?id=50521045)

Bank of America, Chase, U.S. Bank, Wells Fargo, Zelle에서 같은 오후에 장애 보고가 나왔다. Microsoft 365 장애 3일 후, FAA 이륙 중단 4일 후였다. AP 기사는 추출을 위해 로드되지 않았으므로, 확실히 말할 수 있는 것은 논평자들이 그 기사에서 인용한 내용이다: 장애 근거의 출처는 downdetector.com이고, 기사는 카드 결제 실패, 지점 폐쇄 또는 응답 불가, 온라인 뱅킹 다운을 언급한다.

그리고 그게 스레드가 가장 먼저 공격하는 지점이다. DownDetector의 수치는 사용자가 제출한 불만이고, 한 논평자는 Steam, American Express, Visa, AWS 모두 장애가 아닌 서비스 페이지에서도 상시 스파이크가 나타난다는 것을 보여준다. 불만 수집 사이트만을 출처로 한 "대규모 장애" 기사는 무엇이 고장났는지에 대한 측정이 아니라, 많은 사람이 무언가에 접속하지 못했다는 주장으로 취급해야 한다.

그럴듯한 설명들은 화려하지 않고, 아직 아무도 답을 갖고 있지 않다. 가장 간명한 것은 공유 의존성이다 — 클라우드 리전, DNS 제공자, 카드 네트워크 구간 — 5개 경쟁사가 같은 화요일에 나쁜 코드를 배포하지는 않기 때문이다. 스레드에서 가장 좋은 선례는 Revolut의 10월 장애로, Google Cloud 문제였고 기술 사후 분석을 공개한 뒤 정리되기까지 약 12시간이 걸렸다. 남겨둘 만한 논평이 둘 있다: QA가 가장 먼저 잘리는 이유는 제대로 하는 것이 보이지 않기 때문이라는 것, 그리고 비기술 대중은 이제 Microsoft 장애와 이륙 중단과 은행 장애를 하나의 연속된 사건으로 경험한다는 것이다. 그들이 틀린 것은 아니다.

## 커피 한 잔 값으로 지도 타일 셀프 호스팅하기 — 451 points

**451 points** · 81 comments · [bruceroettgers.eu](https://bruceroettgers.eu/blog/protomaps/) · [HN discussion](https://news.ycombinator.com/item?id=50509837)

PMTiles는 HTTP Range 요청으로 읽는 단일 파일 타일 아카이브다. 즉 지도는 버킷 안의 파일 하나이고, Range를 지켜주는 CDN이 서빙 스택의 전부다. 쓸 만한 줌 레벨의 전 세계는 139GB다. 5개 리전 복제를 쓰는 Bunny.net에서 저장은 $0.01/GB/월 기준 월 약 $5이고, 여기에 대역폭 $0.01/GB가 붙는다. 유럽을 로드하고 도시까지 확대하면 대략 5MB, 즉 $0.00005다. 무료 한도를 넘긴 뒤 지도 로드 1000회당 $5인 Mapbox와 비교하면, 그것이 바이럴을 버티는 사이드 프로젝트와 그렇지 못한 프로젝트의 차이다.

주의점들은 스레드 안에 있고, 그게 유용한 부분이다. 기업용 안티멀웨어 프록시가 Range 헤더를 제거하고 139GB 파일 전체를 끌어올 수 있으므로, Range 전용 설계에는 대체 경로가 필요하다. 고줌 위성 이미지가 저렴함이 끝나는 지점이다 — 오프라인 북미 모자이크를 만들던 한 논평자는 z17에서 멈췄고, 전 세계 고해상도 커버리지는 수백 테라바이트에 이른다고 적는다. 대안도 실재한다: OpenFreeMap은 3억 개의 하드링크 파일이 있는 btrfs 이미지 앞에 nginx를 두고 같은 데이터를 무료로 서빙하며, VersaTiles는 완전한 FLOSS 생성기 겸 서버다. 여기서 보이는 패턴은 한 프로젝트의 승리가 아니다. 10년 동안 종량제 API였던 지도 타일 사업이 조용히 파일 호스팅 문제가 되었다는 것이고 — Cartes.app이 월 €150 청구서를 보고 MapTiler에서 옮겨간 것이 그 실제 모습이다.

## 당신의 손글씨를, 폰트로 — 447 points

**447 points** · 76 comments · [ductus.sorenblank.com](https://ductus.sorenblank.com) · [HN discussion](https://news.ycombinator.com/item?id=50509972)

태블릿이나 마우스로 소문자 26개를 하나씩 쓰면 쓸 만한 폰트 파일이 나온다. 검사는 브라우저 안에서 이뤄지고 업로드는 없다. 생체 정보를 수집하는 물건의 기본값으로 옳다. 만든 사람은 자기를 위해 주말에 만든 프로젝트라고 말한다.

불만들은 정확하고 대체로 옳다. 악센트 문자가 없어서, 세계의 상당 부분이 자기 이름을 자기 폰트로 쓸 수 없다. 각 글리프를 따로 쓰면 손글씨를 손글씨답게 만드는 편차가 사라진다 — 실제 글자는 이웃한 글자에 따라 모양이 바뀌는데 Ductus에는 문맥 대체가 없다. 한 논평자는 26자를 다 완성하고 나서 손글씨 샘플을 넘겼다는 사실 자체가 불편하다고 적었다. 샘플이 기계를 떠나지 않았더라도 타당한 감각이다.

먹히는 것은 실행이지 콘셉트가 아니다. 16살에 FontForge로 같은 것을 만들었다는 논평자는 아이디어는 수십 년간 뻔했고 없던 것은 마찰이었다고 말한다. 그리고 나이 든 독자 하나는 90년대 후반 잡지 광고에서 글자 한 페이지를 우편으로 보내고 폰트를 몇 주 기다리던 일을 기억한다. 이 프로젝트의 흥미로운 버전은 아무도 출시하지 않은 쪽이다: 이미 있는 손글씨 사진에서 스타일을 뽑아내는 것, 즉 입력이 26개의 신중한 글자가 아니라 10년치 노트인 것.

## 스티브 블랭크가 이제 엔비디아는 어떻게 되는지 묻는다 — 444 points

**444 points** · 561 comments · [steveblank.com](https://steveblank.com/2026/11/15/whats-next-for-nvidia/) · [HN discussion](https://news.ycombinator.com/item?id=50512235)

글 자체는 로드되지 않았다 — 그 도메인은 DNS-over-HTTPS를 쓰든 안 쓰든 매 시도마다 DNS 해석에 실패했다 — 그래서 이 절은 스레드가 인용한 논지이고, 그 스레드는 유난히 좋다. 논평들에 따르면 블랭크의 프레임은 엔비디아를 향한 혁신가의 딜레마다: 진짜 위협은 AMD나 경쟁 가속기가 아니라, 회사의 최대 고객들이 경쟁자가 되어가고 있다는 것이고, 지금 엔비디아를 운영하는 사람들은 그 물건을 만들지 않은 실행 관리자들이며 정확히 잘못된 베팅부터 잘라낼 것이라는 것이다. 논평자들이 계속 인용하는 문장은 이것들이 "실행 CEO가 가장 먼저 잘라내는 베팅"이라는 것이다.

공급 측 논거는 단순하다. 프론티어 모델 연구소들과 하이퍼스케일러들은 워크로드를 충분히 안정화해서 Broadcom, Marvell과 맞춤 실리콘을 설계할 수 있게 됐고, 에이전틱 코딩은 한때 CUDA를 넘을 수 없는 벽으로 만들던 컴파일러와 디버깅 도구를 작성하는 비용을 낮췄다. GPU 위의 추상화 계층이 엔비디아의 것이 아니게 되면 해자는 제조 물량 배정이 되고, 그것은 범용재 논거다. 스레드의 반론은 AMD가 상대적으로 덜 다치는 이유가 정확히 소프트웨어 전쟁에서 이긴 적이 없고 이제 LLM이 소프트웨어를 공짜로 작성하기 때문이라는 것이다 — 맞다고 하기에 이상한 이야기다.

논의에서 빠진 두 가지는 소리 내어 말할 가치가 있다. 블랭크의 구체적 걱정은 전략 옷을 입은 지배구조 걱정이다: 이사회가 업계 역사상 최대의 설비투자 사이클 동안 창업자 CEO를 해임하고 CFO를 앉혔고, 시장의 판결은 이 스레드가 아니라 주가에 나와 있다. 그리고 엔비디아의 고객이 회사를 대체할 것이라는 논거는 2023년 이후 해마다 제기됐지만 마진은 움직이지 않았다. 그 예측에서 이르다는 것과 틀렸다는 것은 구별되지 않았다.

## Bitly가 15년 된 링크를 남에게 넘겼다 — 369 points

**369 points** · 195 comments · [ransomnews.com](https://ransomnews.com/burger-king-tweet-bitly-link-hijack-2026/) · [HN discussion](https://news.ycombinator.com/item?id=50511395)

버거킹의 2011년 7월 24일 트윗 — "우리의 편리한 매장 찾기" — 에는 단축 링크 bit.ly/19BFiM이 붙어 있다. 토요일 아침, 그 링크에 대한 Bitly 자체 정보 페이지에는 생성 시각이 2026년 11월 15일 05:32 UTC, 목적지가 위키백과의 나치 강제수용소 목록으로 표시됐다. 18분 전에는 2011년 6월 7일 맥도날드 트윗의 Bitly 링크가 위키백과의 9·11 테러 문서를 가리키도록 재생성돼 있었다. 어느 계정도 탈취되지 않았다. 링크의 뒷부분이 재발급됐고, 옛 트윗은 이제 새 소유자가 원하는 곳으로 독자를 보낸다.

Ransomnews는 지루한 부분을 제대로 했다. 2009년부터 2013년까지 도널드 트럼프의 트윗에 있던 Bitly 링크 97개 중 40개는 여전히 원본이고, 49개는 나중에 재생성됐지만 트윗이 시사하는 곳으로 연결되며 — 그중 48개가 2023년 5월 26일 17분 동안의 한 번의 작업에서 이뤄졌다 — 7개는 다른 곳으로 연결되는데 그중 4개가 11월 15일에 등록됐다. Bitly 도움말 페이지는 계정이 삭제된 뒤에는 링크 끝부분을 재사용할 수 없다고 말한다. 2025년 2월에 회사는 정확히 그것을 허용했다고 알려진 버그를 수정했다. 탈취된 두 링크 모두 19:22 UTC에 "Link Deactivated"가 됐고, Bitly는 19:13에 X에서 확인하고 관련 계정들을 정지시켰다. CNN은 나중에 빌 게이츠, 쥐스탱 트뤼도, 마이크 펜스, FBI, 국방부의 옛 게시물도 영향을 받았다고 보도했다.

교훈은 버거킹에 관한 것이 아니다. 버거킹은 2011년에 잘못한 것이 없고 지금은 잘할 수 있는 것도 없다. 교훈은 URL 단축기가 한 회사의 유일성 불변식에 대한 영구적 의존이라는 것이다. 그것은 다른 사람들의 아카이브에 적히고, 종이에 인쇄되고, 발행자가 강제할 수 없다. 스레드의 가장 좋은 관찰은 세대론적이다: 링크 부패는 예전엔 404처럼 보였고, 이제는 적대적인 곳으로 가는 멀쩡한 링크처럼 보인다. 만료된 Shopify 앱 도메인이나 탈취된 npm 패키지와 같은 부류의 버그다 — 참조는 애초에 산출물이 아니었다.

## What the hell is w2rt6byl5nf1opmc-a.com — 300 points

**300 points** · 137 comments · [jack.cab](https://jack.cab/blog/siterate) · [HN discussion](https://news.ycombinator.com/item?id=50517602)

백링크 모니터가 새 참조 사이트를 하나 잡아냈고, 그걸 따라가니 siterate.org의 ".com에서 가장 인기 있는 웹페이지" 목록이 나왔는데, 8위 — Apple과 Google Tag Manager 사이, Microsoft와 GitHub보다 위 — 를 차지한 게 해석되지 않고 한 번도 해석된 적 없는 19자짜리 랜덤 도메인이다. 11월 11일 Cloudflare에서 등록됐다. Majestic의 링크 인덱스에는 10월 5일부터 상위 10,000위 안에 있었고, 그 기간 대부분 미등록 상태였다. 약 500만 개 사이트에서 온 2억 5,000만 개의 링크, 그중 수천 개가 .edu와 .gov, 거의 전부 nofollow, 거의 전부 내부 페이지에 있다.

인터넷의 반응은 음모론을 만들어내는 것이었고, 글쓴이는 그걸 즐긴다. 댓글들은 합리적인 가설들을 시도했다. Cloudflare의 Bot Fight나 Turnstile 아티팩트, robots.txt를 지키는 스크래퍼가 누구인지 보려고 심어둔 크롤러 카나리, 널리 쓰이는 템플릿에 붙은 링크 스팸 위젯, 킬 스위치. 이 도메인의 네임서버는 Cloudflare가 계정별로 발급하는 aryanna/peyton.cloudflare.com 쌍이고, WHOIS를 보면 아칸소의 누군가가 11월 11일 Cloudflare를 통해 이걸 샀다 — 누구의 브라우저에서도 해석되기 시작한 이틀 전이다. Cloudflare의 핑거프린팅 엔드포인트가 링크 그래프로 새어 나온 것일 수도 있다. 트래픽을 보고 이름을 산 한 사람일 수도 있다.

진짜 흥미로운 발견은 방법론에 관한 것이고, 글쓴이는 포장 없이 거기 도달한다. Majestic, Tranco 그리고 나머지 "상위 백만 사이트" 산업은 아무도 검증하지 않는 링크 그래프로 페이지 순위를 매기고, 콘텐츠도 DNS도 소유자도 없는 도메인이 그중 하나에서 Microsoft보다 위에 앉을 수 있다. 이 목록들은 보안 연구와 광고 단가와 학술 측정의 입력값이다. 랜덤 문자열이 점령할 수 있는 순위는 미스터리이기 이전에 측정 문제다.

## "증명은 Lean에서 검증됐다" — 268 points

**268 points** · 117 comments · [xenaproject.wordpress.com](https://xenaproject.wordpress.com/2026/11/12/and-the-proof-is-checked-in-lean/) · [HN discussion](https://news.ycombinator.com/item?id=50515058)

Kevin Buzzard — Lean 회의론자가 아니라 가장 목소리 큰 옹호자 중 하나다 — 가 "Lean에서 검증됐다"는 말이 무엇을 보증하고 무엇을 보증하지 않는지 쓴 글이다. 이 글도 로드되지 않았다(같은 종류의 DNS 장애). 그래서 이건 스레드가 재구성한 논증이고, 스레드는 그걸 꼼꼼하게 해낸다. 예시가 하중을 받는 부분이다. `def FermatsLastTheorem : Prop := ∀ a b c n : ℕ, n ≥ 3 → a^n + b^n ≠ c^n` 는 페르마의 마지막 정리처럼 보이고 자명하게 거짓이다. Lean에서 자연수는 0을 포함하므로 a = b = c = 0, n = 3이 반례다. 명제는 컴파일됐다. 그 명제의 증명은 유효했다. 그 정리는 페르마의 마지막 정리가 아니었다.

댓글에 따르면 Buzzard가 제시하는 네 가지 질문: 형식적 명제가 비형식 명제와 일치하는가. 증명이 올바른 비교 대상에 대해 실제로 컴파일되는가. Lean 커널의 버그를 악용하는가. 신뢰할 수 없는 수입 코드 수백만 줄 사이에서 명제의 의미를 재정의한 게 없다는 걸 어떻게 아는가. 현재 자동화된 건 그중 하나뿐이고, 해답을 수정되지 않은 챌린지와 대조하는 도구인 `lake comparator`는 필수가 아니다. 나쁜 기본값이고 고치는 방법은 뻔하다.

스레드에서 가장 날카로운 기여는 "컴파일되니까 작동한다"는 비유이고, 그다음 업그레이드다: 코드에 대해서는 언어의 수학적 모델을 Lean에 내장하고 실제 소스에서 Lean으로 가는 결정론적 파서를 원하게 된다. 그렇지 않으면 에이전트가 증명한 것과 배포한 것 사이에 검증되지 않은 간극이 생긴다. 보상이 닿는 곳에서는 에이전트가 평가를 속인다는 걸 감안하면, 한 댓글러는 머지않아 커널 버그가 의도적으로 악용되는 걸 보게 될 거라고 예상한다. 2026년 형식 검증의 실패 모드는 틀렸다는 게 아니다. "검증됨"은 명제에 대한 주장이고, 그 명제는 검증받는 쪽이 쓴다는 것이다.

## 소프트웨어는 시스템 차원에서 무너지고 있다 — 253 points

**253 points** · 145 comments · [breck-mckye.com](https://www.breck-mckye.com/blog/2026/11/software-is-breaking-down-at-a-systemic-level/) · [HN discussion](https://news.ycombinator.com/item?id=50520866)

Jimmy Breck-McKye의 논증은 FAA 이륙 중단 다음 날 쓰였다: 이틀짜리 전 세계 Microsoft 장애, 전국 항공편 중단, PHP2Shell, 그리고 거의 희극적일 만큼 약한 개인키로 서명된 수천 장의 SSL 인증서. 전부 4주 안에, 어느 것도 같은 원인을 공유하지 않는다. 그가 시스템적이라고 말하는 것은 서로 연결되지 않았는데 닮아 있는 실패들이고, 그건 개별 엔지니어링 결정이 아니라 프로세스를 가리킨다.

AI에 대한 그의 정직함이 이 글을 읽을 가치 있게 만든다. 그는 직장에서 AI를 많이 쓰고, 엄청나게 강력하다고 말하며, "AI가 모든 걸 망쳤다"는 말과 아무것도 변하지 않았다는 안심 둘 다 거부한다. 그의 주장은 AI가 원인이자 증상이라는 것이다: 모델은 공격자가 익스플로잇을 몇 주가 아니라 몇 시간에 찾게 하고, 팀이 리뷰할 수 있는 것보다 많은 코드를 배포하게 하며, 실수를 잡아내는 부분을 이미 10년에 걸쳐 비워낸 업계에 도착했다. 그가 동원하는 가장 강한 증거는 Microsoft를 떠나는 엔지니어가 3월에 쓴 Azure 비판이다 — AI에 관한 글이라서가 아니라, 이번 달 장애보다 몇 년 전에 경쟁 압박 속에서 모서리를 잘라내고 내놓은 아키텍처를 묘사하기 때문이다.

스레드는 강하게, 대체로 옳게 반박한다. Heartbleed, Log4j, CrowdStrike, Cloudflare의 WAF 룰, Atlassian이 고객 계정 1,000개를 삭제한 일. 소프트웨어는 기억나는 한 항상 이 수준에서 깨져 왔고, "12년 전이 황금기였다"는 주장은 2014년과 맞닥뜨리면 살아남지 못한다. 하지만 댓글은 이 글에 빠진 인과적 이야기도 제공한다: 경영진이 이제 엔지니어가 10배 생산적이라고 믿는다면, 배포 압박은 문화적 결함이 아니라 예산 항목이다. 스레드의 한 줄이 글의 테제보다 낫다 — 모든 기술적 진보는 정치적 권력을 옮기고, 기술을 도입하기 전에 누가 그걸 얻는지 물을 가치가 있다.

## Emacs가 내 브라우저다 — 231 points

**231 points** · 137 comments · [joshblais.com](https://joshblais.com/blog/emacs-as-my-browser/) · [HN discussion](https://news.ycombinator.com/item?id=50507553)

EWW, Emacs에 내장된 웹 브라우저는 이제 한 개발자 브라우징의 85-90%를 커버한다. Termux를 거친 폰에서도. 내세우는 이유는 산만함이다: 진짜 브라우저는 제안에 오후를 통째로 잃게 만들기 쉽고, 텍스트 렌더러는 그렇지 않다. 두 번째 이유는 이데올로기적이다 — 프론트엔드를 소유한 모든 플랫폼은 무언가를 추출하고, 글쓴이는 그 위에 지어진 제품보다 전달 메커니즘을 읽는 편이 낫다.

정직한 한계는 글 끝에 있고 작지 않다: 현대의 상업적 웹은 작동하지 않는다. 정적 페이지와 블로그는 괜찮다. Reddit과 로그인과 번들이 있는 건 아니다. 댓글들은 탈출구를 덧붙인다 — 페이지가 꼭 렌더돼야 할 때를 위한 내장 WebKit용 xwidget, 다른 걸 돌리기엔 너무 약한 노트북을 위한 w3m-mode — 그리고 추세를 지적한다: 모든 것이 Chrome에 맞춰 테스트되고, 가끔 Chromium, 그 외에는 거의 없다. 그래서 대안 클라이언트의 긴 꼬리는 결정이 아니라 방치로 닫히고 있다.

스레드를 읽을 가치 있게 만드는 디테일 둘. Richard Stallman은 URL을 붙여넣으면 스크린샷을 메일로 보내주는 프로그램으로 Emacs에서 브라우징한다, 아니 20년 전에 그랬다 — 집중력이 아니라 이데올로기 때문이다. 그리고 가장 실질적인 반론은 Emacs에 관한 것도 아니다: 실제로 빠진 건 HTTP를 대체하는 내용 주소 지정 가능한 무언가다. 링크가 해시이고 요청한 것이 받는 것이 되도록. 텍스트 브라우저는 그 미래를 향한 몸짓이다. 아무도 그걸 만들지 않는다.

## Jiff 1.0 — 226 points

**226 points** · 49 comments · [burntsushi.net](https://burntsushi.net/jiff/) · [HN discussion](https://news.ycombinator.com/item?id=50519744)

Andrew Gallant의 Rust용 날짜시간 라이브러리가 1.0에 도달했다. API 투어와 호환성 약속과 함께 발표됐다. 설계 테제는 일광 절약 시간이 엣지 케이스가 아니라는 것이고, 그래서 시간대는 선택적 계층이 아니라 핵심 타입에 속한다: `DateTime`은 자기 시간대를 알고, 타입 시스템이 3월에 한 시간을 조용히 흘려보내는 코드를 쓰지 못하게 막는다.

한 번 물린 사람이 만들었다는 걸 보여주는 디테일들: 친절한 기간 포맷, strftime과 strptime 호환성, 로케일 민감 포매팅을 위한 ICU4X, 다른 달력들, 날짜 반올림, 그리고 여러 날짜시간 타입 중 무엇을 쓸지 다루는 섹션인데 타입이 이렇게 많은 것에 대한 사과처럼 읽힌다. 이 글은 Jiff를 쓰지 말아야 할 때도 분명히 말하고, 댓글들은 그걸 전문적 태도라고 짚는다. 1.0 발표 페이지에서는 정말 드문 일이다.

스레드에서 가장 유용한 내용은 추도사다. 전 chrono 메인테이너는 API가 나빠서 그 일을 맡았는데, 사람들이 그걸 쓰는 이유가 안정성이라는 걸 알게 됐고, 될 수 있는 것과 아무도 바꾸게 해주지 않는 것 사이의 간극에 지쳐버렸다고 말한다 — 그러고는 누군가 Rust가 마땅히 가져야 할 날짜시간 라이브러리를 써줘서 고맙다고 한다. chrono는 버려진 게 아니라 반쯤 폐기됐고, 이제 마이그레이션은 논쟁이 아니라 문서화된 답이 있는 결정이다. Rust를 쓰고 시간대를 다룬다면 이 스레드에서 흥미로운 질문은 생태계가 TAI와 UT1을 어떻게 다루느냐인데, 글쓴이가 일반적 시간 척도는 Jiff의 용도가 아니라고 솔직히 말하기 때문이다.

## 그 밖의 새 글

- **[까마귀는 우리보다 빠르게 결정한다](https://www.nytimes.com/2026/11/15/science/birdbrain-crows-birds-research-decision.html)** ([306 points](https://news.ycombinator.com/item?id=50509023), 204 comments) — 타임스가 추출을 막아서 이건 스레드의 프레임이고, 원문보다 낫다: 지능은 최소 세 번 — 포유류, 까마귓과, 두족류 — 서로 아무것도 공유하지 않는 아키텍처 위에서 진화했고, 새는 층상 피질 없이 그걸 해낸다. 속도에 대한 토론의 최선의 가설은 배선 길이이고, 최선의 단서는 결정 속도가 결정의 질은 아니라는 것이다.
- **[엘니뇨가 어떻게 작동하는지에 대한 짧은 해설](https://www.youtube.com/watch?v=7_JF3etiAv8)** ([296 points](https://news.ycombinator.com/item?id=50509308), 182 comments) — 영상이고, 대부분 플레이어인 페이지에서 무엇을 요약할 수 있는지에 대한 늘 그런 단서가 붙는다. 장애와 링크 탈취가 가득한 프런트페이지에서 수백 명이 해양-대기 결합에 대한 설명에 업보트했다. 좋다.
- **[비밀 ThinkPad 전원 버튼 코드](https://masnick.com/posts/the-secret-thinkpad-powerbutton-code-to-bring-dead-laptops-back-to-life/)** ([271 points](https://news.ycombinator.com/item?id=50516473), 107 comments) — Mike Masnick의 2007년 글, 죽은 z61t를 되살린 이야기: 배터리와 AC를 빼고, 1초 간격으로 전원을 열 번 누른 다음 30초 동안 누른다. 스레드의 정정은 이게 ThinkPad의 비밀이 아니라 커패시터 방전이라는 것, 그리고 더 나은 이야기는 콜센터 심리라는 것이다 — "3초 동안 누르세요"라고 하면 사람들은 1초씩 눌렀고, 그래서 지원팀이 10이라고 말하기 시작했다.
- **[현대 LLM의 위치 임베딩 이해하기](https://magazine.sebastianraschka.com/p/understanding-positional-embeddings)** ([241 points](https://news.ycombinator.com/item?id=50506376), 27 comments) — RoPE와 친구들에 대한 Raschka의 투어, 작은 PyTorch 구현 포함, 그리고 최신 아키텍처들이 명시적 위치 인코딩을 아예 생략하는 방식까지. 실질적인 댓글 하나는 기계적 설명이 이론을 건너뛴다고 주장한다: 위치 임베딩은 변환군의 표현이고, RoPE는 `exp(i⟨m, x⟩)`라는 문자다.
- **[Turbo Pascal이 더 작은 것들](https://prog21.dadgum.com/116.html)** ([241 points](https://news.ycombinator.com/item?id=50506894), 149 comments) — 2011년 글이 다시 페이지에 올라왔다: Turbo Pascal 3.02의 컴파일러와 IDE는 39,731 바이트로, minify된 jQuery 1.6, yahoo.com 홈페이지, OS X Lion의 `touch` 바이너리보다 작다. 스레드는 향수 대 빌려온 견고함에 대한 국민투표이고 양쪽 다 옳다 — 1986년 기계는 RAM이 30,000배 적었고, 그중 어느 것도 적대적 네트워크에서 살아남을 필요가 없었다.
- **[Tor 프로젝트, 신속 대응 DoS 수정 배포](https://forum.torproject.org/t/security-release-0-4-9-17/22454)** ([237 points](https://news.ycombinator.com/item?id=50512441), 64 comments) — 0.4.9.17이 보안 수정을 담았고, 그중 하나는 IPv6 처리 관련 릴레이 DoS 방어를 위한 것이다. 네트워크가 릴레이를 압도하는 클라이언트 회로의 지속적 홍수를 겪고 있어서 빠르게 나왔다. Tor는 더 많은 릴리스가 온다고 말하며 운영자들에게 지금 업그레이드하라고 요청한다. 스레드의 한 릴레이 운영자는 집 다운로드 속도가 99% 떨어졌을 때 공격을 발견했고 그 박스를 추적해냈다.
- **[시드 지형이 있는 WebGL 비행 시뮬레이터](https://baron.by.dai.studio/)** ([225 points](https://news.ycombinator.com/item?id=50510296), 57 comments) — 타이핑된 설계 문서에서 생성된 복엽기 비행 게임, 소스는 BSD-2 라이선스로 `dai-studio/ex-baron`에 있다. Safari에서 돌고, 게임패드 지원은 별도 설정 없이 작동하며, 한 비행 시뮬레이션 베테랑은 전문가 모드에서 복엽기가 자력으로 루프를 도는 것 말고는 역학이 버틴다고 말한다.
- **[내가 좋아하는 현대 NES 게임 25개](https://jordi.inversethought.com/blog/25-of-my-favourite-modern-nes-games/)** ([217 points](https://news.ycombinator.com/item?id=50503465), 40 comments) — "두 번째 ReNESance"는 실재한다: NES는 여전히 새 상업판과 홈브루가 나오는데, 40년치 문서와 도구가 하드웨어를 겨냥하기 즐거운 대상으로 만들었기 때문이다. 스레드의 요점은 일반화되는 것이다 — 재능이 아니라 도구의 품질이 플랫폼이 만들어내는 것의 상한을 정한다.
- **[Salon 저널리즘 30년 보존하기](https://blog.archive.org/2026/11/12/preserving-30-years-of-salon-journalism/)** ([208 points](https://news.ycombinator.com/item?id=50511806), 56 comments) — Salon은 31년 만에 문을 닫는다. Wayback Machine은 salon1999.com, salonmag.com, salon.com에 걸쳐 이미 250,000개가 넘는 기사를 갖고 있고, 아카이브는 그걸 둘러볼 Salon Explorer를 만들었다. 댓글들은 아이러니를 지적한다 — Salon은 자기 TableTalk 커뮤니티를 보존하지 않은 채 없앴고, 이제 아카이브가 브랜드를 가진 퍼블리셔가 하기 귀찮아한 일을 공짜로 하고 있다.
- **[고발자, 6명이 죽은 공격에 대해 펜타곤을 고발](https://www.cnn.com/2026/11/15/politics/army-soldier-whistleblower-complaint)** ([206 points](https://news.ycombinator.com/item?id=50517838), 70 comments) — 쿠웨이트의 임시 작전센터에 대한 이란 드론 공격으로 3월 1일 부상한 육군 소령 Stephen Ramsbottom은 하원과 상원 군사위원회에 펜타곤이 병력 보호 경고를 무시했다고 주장하는 진정서를 냈다. 그는 이를 육군과 그 지휘부와 자신의 "전술적 실패"라고 부르고, 그 센터를 "트레일러 파크"라고 묘사한다. 스레드의 관찰은 불편한 쪽이다: 경계는 차량 폭탄에 대비해 강화됐고 유능한 적의 공군에는 대비하지 않았다.

## 아직 페이지에 남아 있는 글

오늘 목록에 있는 130개 스토리는 지난 다섯 번의 라운드업에서 다뤘고, 아래 모든 행은 `prior + delta = now`를 만족한다. 직전 수치는 그 스토리를 마지막으로 보도한 글의 마지막 값이고, 라벨은 그게 언제인지를 말해준다.

Claude Fable 5.2는 자기 11-12 점수인 996이 아니라 923에 대고 표시했다. HN이 같은 제출물에 페널티를 걸었고, 음수 델타는 무언가의 측정값이 아니기 때문이다.

| 스토리 | 마지막 | 11월 16일 |
|---|---|---|
| [젠슨 황 사임](https://apnews.com/article/nvidia-megaspeed-china-singapore-huang-5403f152a601cf82ce939f1d24fffa0f) | 4,047 (11-15) | 4,054 (+7) |
| [스페이스X, 스타십 포획 성공](https://www.spacex.com/launches/starship-flight-15) | 1,595 (11-15) | 1,739 (+144) |
| [FAA, 전국 운항 중단 발령 – 4.5시간 후 해제](https://www.nbcnews.com/news/us-news/faa-orders-nationwide-ground-stop-departing-flights-reasons-safety-rcna609247) | 1,646 (11-15) | 1,654 (+8) |
| [팀 피터스 별세](https://discuss.python.org/t/in-memoriam-tim-peters-1952-2026/110028) | 1,438 (11-15) | 1,443 (+5) |
| [Foldable Flight: 최고의 종이비행기](https://www.foldableflight.com) | 1,288 (11-15) | 1,295 (+7) |
| [AI가 생성한 코드는 모두 오픈소스여야 한다](https://jakub.jankiewicz.org/blog/ai-code-open-source/) | 937 (11-15) | 1,240 (+303) |
| [엔비디아, 젠슨 황 축출 준비 중](https://www.wsj.com/business/nvidia-is-preparing-to-oust-nvidia-ceo-jensen-huang-30f421ad) | 1,226 (11-15) | 1,226 (+0) |
| [스마트홈 기기는 인터넷 없이도 돌아가야 한다](https://docodethatmatters.com/home-automation-overnight-success/) | 1,202 (11-15) | 1,204 (+2) |
| [마이크로소프트 365 서비스 저하](https://status.cloud.microsoft/) | 1,171 (11-15) | 1,173 (+2) |
| [엔비디아, AI 스타트업에 투자해 자사 GPU를 사들이게 하며 인위적 희소성을 설계했다는 의혹](https://www.techpowerup.com/354814/nvidia-allegedly-engineered-scarcity-by-funding-ai-startups-to-buy-its-gpus) | 1,093 (11-15) | 1,111 (+18) |
| [내 AI 에이전트가 지도에 없는 마야 유적을 찾았다?](https://pietromiotti.com/latest/maya-site) | 1,036 (11-15) | 1,036 (+0) |
| [앤트로픽 IPO](https://ipo.anthropic.com/us/) | 1,003 (11-15) | 1,004 (+1) |
| [Lovable 앱들, 여권 정보와 20만 건 넘는 비공개 메시지 노출](https://www.crissyfield.de/research/lovable-en/) | 968 (11-15) | 999 (+31) |
| [AWS 에뮬레이터](https://github.com/aws/aws-emulator) | 991 (11-15) | 992 (+1) |
| [엔비디아 CEO 젠슨 황, 불륜 관련해 직원들에게 보낸 편지](https://nvidianews.nvidia.com/news/a-message-to-our-company) | 987 (11-15) | 987 (+0) |
| [LibreOffice는 실제로 1년 365일 작동한다](https://twitter.com/LibreOffice/status/2121205272479998268) | 953 (11-15) | 957 (+4) |
| [.name 그랜드파더링](https://neil.fraser.name/news/2026/11/10/) | 937 (11-15) | 937 (+0) |
| [Claude Fable 5.2와 Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2) | 923 (penalty on 11-12) | 925 (+2) |
| [러스트 1.100](https://blog.rust-lang.org/2026/11/12/Rust-1.100.0/) | 900 (11-15) | 901 (+1) |
| [오퍼스 5.5는 너프됐나? 11월 3일 사고 패턴이 바뀌었다](https://twitter.com/shanemelaugh/status/2119192075505893695) | 825 (11-15) | 825 (+0) |
| [엔비디아 직원들, 젠슨 황 복귀 요구 청원](https://www.wired.com/story/nvidia-employees-petition-for-jensen-huangs-return/) | 817 (11-15) | 818 (+1) |
| [코웨이 공기청정기를 리버스 엔지니어링해 클라우드에서 벗어나기](https://scottjg.com/posts/2026-11-11-reverse-engineering-my-coway-air-purifier-to-ditch-the-cloud/) | 793 (11-15) | 798 (+5) |
| [KetchUp – 러스트와 WebGPU로 만든 오픈소스 스케치업 대안](https://ketchup3d.github.io/app/) | 771 (11-15) | 771 (+0) |
| [Show HN: 300달러짜리 자수기가 구독을 요구해서 직접 앱을 만들었다](https://github.com/simpsoka/zigzag) | 740 (11-15) | 741 (+1) |
| [구글 제미나이, 개인 드라이브 파일과 이메일을 사람 검수자에게 넘긴다](https://github.com/thisisme6598/gemini_files/) | 737 (11-15) | 739 (+2) |
| [미국 우정청, 공식 우편번호 경계 폴리곤 공개](https://postalpro.usps.com/zcb) | 737 (11-15) | 738 (+1) |
| [아마존, Sonnet 4.6을 Strands Decider로 교체해 수백만 달러 절감](https://strandsagents.com/blog/amazon-saves-millions-replacing-sonnet-with-strands-decider/) | 732 (11-15) | 733 (+1) |
| [소크라테스식 튜터](https://github.com/janestreet/agent_skills/blob/master/socratic-tutor/SKILL.md) | 714 (11-15) | 718 (+4) |
| [유나이티드항공, 여행자를 대신한 AI 에이전트의 항공권 예약 금지](https://www.cbsnews.com/news/united-airlines-bans-ai-agents-booking-flights/) | 681 (11-15) | 681 (+0) |
| [AlphaProof 코드](https://deepmind.google/blog/introducing-alphaproof-code/) | 679 (11-15) | 679 (+0) |
| [AI 사용은 취약한 코드베이스를 만든다](https://evanxmerz.com/post/ai-usage-generates-a-fragile-codebase/) | 645 (11-15) | 647 (+2) |
| [전 세계 대부분 지역에서 X 브랜드 차 아무거나 열기](https://shubs.io/unlocking-any-car-from-x-brand-in-most-of-the-world/) | 635 (11-15) | 635 (+0) |
| [비싼 파이를 살 이유가 있나, 낡은 폰이 있는데](https://so.long.thanks.fish/why-pi-when-i-have-an-old-phone/) | 611 (11-15) | 632 (+21) |
| [기술 기업들이 또 프라이버시 개념 전체를 바꾸려 한다](https://www.eff.org/deeplinks/2026/11/tech-companies-are-trying-shift-entire-concept-privacy-again) | 591 (11-15) | 605 (+14) |
| [오작동한 화재 경보기가 제인스트리트의 유일한 뉴욕 데이터센터를 침수시킬 뻔했다](https://michael.bacarella.com/2026/11/10/false-smoke-alarm-jane-street-datacenter/) | 588 (11-15) | 588 (+0) |
| [페이먼츠 캐나다, 캐나다 실시간 결제망(RTR) 출시 발표](https://www.payments.ca/canada-launches-real-time-rail-bringing-247-payment-infrastructure-national-economy) | 587 (11-15) | 587 (+0) |
| [애플, 로컬 AI 모델 실행을 쉽게 해줄 새 맥 앱 준비 중](https://9to5mac.com/2026/11/10/apple-has-new-mac-app-coming-to-make-running-local-ai-models-easy/) | 574 (11-15) | 576 (+2) |
| [KDE: 다큐멘터리 [영상]](https://tube.kockatoo.org/w/fFinNHfanLT7aBEb2B8y4c) | 552 (11-15) | 575 (+23) |
| [제미나이 4 하이드로젠](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/) | 570 (11-15) | 572 (+2) |
| [제미나이 디시전스 API](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/) | 569 (11-15) | 569 (+0) |
| [사이언이 돌아왔다, 미국에서 경트럭을 판다](https://www.theautopian.com/scion-is-back-and-its-going-to-sell-a-freaking-kei-truck-in-america/) | 563 (11-15) | 563 (+0) |
| [럿닉, 자기 옛 회사 고객에 걸리는 반도체 규정을 쓰고 있다](https://www.nytimes.com/2026/11/15/us/politics/lutnick-pushed-to-weaken-chip-rules-that-overlap-with-his-family-business.html) | 395 (11-15) | 535 (+140) |
| [DRAM 담합 소송, 기각 신청 넘겼다](https://litnews.ai/articles/garciaguirre-samsung-sk-hynix-micron-dram-conspiracy-suit-survives-dismissal) | 462 (11-15) | 527 (+65) |
| [E-means: 10분의 1의 에폭으로 k-means를 앞서다](https://e-means.github.io/) | 521 (11-15) | 522 (+1) |
| [스타링크 미니 2](https://starlink.com/mini-2) | 514 (11-15) | 514 (+0) |
| [몽키 아일랜드: 13개 버전 나란히 보기](https://monkeyisland.pages.dev/) | 494 (11-15) | 507 (+13) |
| [제미나이 4 하이드로젠과 오케스트레이터](https://antigravity.google/blog/gemini-4-hydrogen-in-google-antigravity/) | 504 (11-15) | 507 (+3) |
| [종말의 날: 서기 2026년 11월 13일 금요일 (1960)](https://www.science.org/doi/10.1126/science.132.3436.1291) | 501 (11-15) | 504 (+3) |
| [새 맥북 프로의 OLED는 240Hz로 깜빡인다](https://macanorak.com/the-macbook-pros-oled-pwm-problem-when-a-better-display-becomes-worse-to-use/) | 348 (11-15) | 501 (+153) |
| [블렌더 5.3, 가우시안 스플랫 지원으로 출시](https://www.blender.org/download/releases/5-3/) | 498 (11-15) | 498 (+0) |
| [Show HN: 이번 주 어느 지역 상공을 지나간 모든 위성, 그리고 그 사진들](https://www.watched.earth) | 494 (11-15) | 494 (+0) |
| [claude.ai, 클로드 코드, platform.claude.com에서 오류 급증](https://status.claude.com/incidents/nn11wk485zfn) | 493 (11-15) | 493 (+0) |
| [시냅틱스 특허 주장으로 DisplayLink 드라이버 작업 중단](https://lwn.net/SubscriberLink/1102549/acbc92e00cee3a3f/) | 491 (11-15) | 491 (+0) |
| [조나단 블로우 – AI가 코딩을 해결했다면 내 소프트웨어는 왜 그대로인가? [영상]](https://www.youtube.com/watch?v=IRK8h67ol7Q) | 481 (11-15) | 489 (+8) |
| [작고 오래된 기기에서 LLM을 돌린다](https://github.com/hyperionaidev/smolmaxxing/) | 480 (11-15) | 483 (+3) |
| [마이크로소프트 아웃룩/365, 12시간 지나도 복구 안 됨](https://twitter.com/MSFT365Status/status/2121079061774491735) | 468 (11-15) | 471 (+3) |
| [앤트로픽이 발견한 취약점 추적하기](https://www.vulncheck.com/blog/anthropic-glasswing-november-update) | 460 (11-15) | 461 (+1) |
| [전 엔비디아 CEO 황, 두 번째 직원과도 관계 있었다고 소식통 전해](https://www.reuters.com/technology/former-nvidia-ceo-huang-had-relationship-with-second-employee-sources-say-2026-11-12/) | 458 (11-15) | 460 (+2) |
| [소프트웨어 직함의 가계도](https://zwischenzugs.com/2026/11/03/a-family-tree-of-software-job-titles/) | 426 (11-15) | 458 (+32) |
| [중국 프런티어 AI 모델에서 수출 통제 GPU의 지문이 나온다](https://unemploymentlabs.com/checkpoint-forensics) | 425 (11-15) | 448 (+23) |
| [WebGL2로 만든 극사실적 모래](https://av.github.io/safe-sand/) | 448 (11-15) | 448 (+0) |
| [Show HN: 코딩 에이전트를 2019년식 자바스크립트에서 현대적 웹 프리미티브로 옮기기](https://github.com/GoogleChrome/modern-web-guidance) | 447 (11-15) | 448 (+1) |
| [클로드 코드와 코드덱스가 1994년식 내 지프의 ECU를 리버스 엔지니어링했다](https://www.youtube.com/watch?v=WPj3aQ-xxpI) | 238 (11-15) | 445 (+207) |
| [AI가 괴델의 노트북을 해독하다, 증명된 정리 수백 개가 들어 있다고 전해져](https://www.theguardian.com/science/2026/nov/13/kurt-godel-notebooks-ai-helps-unlock-hidden-discoveries-man-who-transformed-maths) | 436 (11-15) | 442 (+6) |
| [셀 하나도 쓰지 않는 터미널 테두리](https://www.joshka.net/cell-borders/) | 420 (11-15) | 426 (+6) |
| [Val Town 서비스 종료](https://blog.val.town/winding-down) | 424 (11-15) | 425 (+1) |
| [ggml v1.0.0](https://github.com/ggml-org/ggml/releases/tag/v1.0.0) | 414 (11-15) | 419 (+5) |
| ["험블 번들이 바이브코딩으로 자기 보안 대부분을 죽였다"](https://forums.spacebattles.com/threads/humble-bundle-just-completely-killed-most-of-their-security-through-vibecoding.1346295/) | 413 (11-15) | 415 (+2) |
| [젠슨 황, 자신에게 보고하는 임원과 관계 있었다고 전해져](https://www.nytimes.com/2026/11/11/technology/jensen-huang-nvidia-affair.html) | 411 (11-15) | 412 (+1) |
| [벤치마크 점수는 세 줄짜리 수정도 못 버틴다](https://maxxbench.unlap.ai/research/why-maxxbench/) | 409 (11-15) | 409 (+0) |
| [이탈리아, 안드로이드 사용자 데이터 접근 문제로 메타에 8억 8,700만 달러 과징금](https://www.reuters.com/world/italy-fines-meta-887-million-over-android-users-data-access-2026-11-14/) | 397 (11-15) | 408 (+11) |
| [학생이 아이패드에서 파워포인트를 열려면 16번을 클릭해야 한다](https://www.reddit.com/r/Teachers/comments/1xuup7a/technology_sucks_it_literally_takes_16_clicks_for/) | 404 (11-15) | 408 (+4) |
| [macOS 시큐어 인클레이브로 SSH 키 보호하기](https://gatezh.com/posts/macos-secure-enclave-ssh-keys/) | 402 (11-15) | 403 (+1) |
| [태양을 약 280년에 한 번 도는 왜소행성 후보 등장](https://www.smithsonianmag.com/smart-news/astronomers-found-a-mysterious-object-orbiting-far-beyond-pluto-it-could-be-a-new-dwarf-planet-hidden-in-our-solar-system-180989857/) | 394 (11-15) | 396 (+2) |
| [$11.4M 상당의 엔비디아 하드웨어, 캘리포니아에서 텍사스로 배송 중 사라져](https://www.freightwaves.com/news/11-4-million-in-nvidia-hardware-vanishes-during-shipment-from-california-to-texas) | 383 (11-15) | 386 (+3) |
| [올바른 소프트웨어를 쓰는 건 어렵고 수학만으로는 부족하다 (2016)](https://pron.github.io/posts/correctness-and-complexity) | 375 (11-15) | 375 (+0) |
| [부팅 콘솔에 뜨는 systemd 작업의 실시간 트리](https://codeberg.org/wvhulle/bootvine) | 375 (11-15) | 375 (+0) |
| [IceWM](https://ice-wm.org/) | 374 (11-15) | 374 (+0) |
| [AI가 작가와 독자 사이의 신뢰를 부수고 있다](https://www.theatlantic.com/books/2026/11/ai-literary-scams-amazon/689391/) | 369 (11-15) | 371 (+2) |
| [아파치 HTTP 서버의 치명적 RCE 취약점](https://www.wiz.io/blog/cve-2026-119618-rce-apache-http-server-vulnerability) | 369 (11-15) | 371 (+2) |
| [EFF, 번호판 판독 이력 조회에 영장을 요구한다](https://www.eff.org/deeplinks/2026/11/were-asking-appeals-court-require-warrant-alpr-searches) | 324 (11-15) | 357 (+33) |
| [Edge0-145B: 내 컴퓨터에서 나오는 프런티어 AI 성능](https://edge0.ai/blog/introducing-edge0-145b-frontier-ai-capabilities-on-your-own-computer) | 355 (11-15) | 357 (+2) |
| [전압 글리칭으로 내 채굴 카드에 잠든 A100 깨우기](https://blog.kate.land/posts/using-voltage-glitching-to-unlock-the-a100/) | 353 (11-15) | 354 (+1) |
| [수학 필수 여섯 가지](https://teorth.github.io/tao-web/six-math-essentials.html) | 342 (11-15) | 342 (+0) |
| [GitHub Actions를 잠가라](https://hugovk.dev/blog/2026/lock-github-actions/) | 337 (11-15) | 337 (+0) |
| [뮤즈 엠버: 우리의 가장 작고 효율적인 모델](https://research.meta.ai/blog/muse-ember) | 334 (11-15) | 334 (+0) |
| [워즈는 컴퓨터를 만들기 전에 어떻게 애플 1 베이직을 작성했나?](https://retrocomputing.stackexchange.com/questions/17957) | 305 (11-15) | 319 (+14) |
| [프로젝트 제로는 통보받은 뒤 90일 후에 공개한다](https://projectzero.google/2026/11/disclosure-policy.html) | 301 (11-15) | 316 (+15) |
| [버려진 퀘이크 4 확장팩, 모더들이 완성해 이제 플레이 가능](https://www.moddb.com/mods/openq4/downloads/openq4-0141-windows-x64) | 309 (11-15) | 310 (+1) |
| [Show HN: Yogurt – Granola의 무료·프라이빗·오픈소스 대안](https://github.com/FrigadeHQ/yogurt) | 305 (11-15) | 305 (+0) |
| [Ask HN: 요즘 뭐 만들고 계신가요?](https://news.ycombinator.com/item?id=50417407) | 303 (11-15) | 303 (+0) |
| [클로드 화이트보드, 클로드 시트, 클로드 데이터](https://claude.com/resources/articles/sheets-whiteboards-data) | 298 (11-15) | 298 (+0) |
| [실험 600번 끝에 JEPA 월드 모델에 대해 알아낸 것](https://haddyalchaer.com/jepa) | 293 (11-15) | 295 (+2) |
| [선형 계획법으로 가중치 공간 프로그래밍을 할 수 있나?](https://nathan.rs/posts/weight-space-lp/) | 294 (11-15) | 295 (+1) |
| [마이크로소프트 글로벌 장애](https://www.cnn.com/2026/11/12/business/live-news/microsoft-global-outage-intl-hnk) | 293 (11-15) | 294 (+1) |
| [링크드인과 몬스터, 다단계 회사 구인 광고 내려](https://www.cbc.ca/news/canada/linkedin-monster-take-down-over-1-000-fake-job-postings-after-cbc-investigation-9.7415379) | 281 (11-15) | 293 (+12) |
| [KORS의 모든 주파수 라이브 에어밴드. 빅토리아, CA도 운항 중단](https://orcasairband.com/) | 293 (11-15) | 293 (+0) |
| [슈퍼마켓 냉장고 허니팟](https://github.com/hedgerow-dev/coldframe) | 290 (11-15) | 290 (+0) |
| [옛날식 게임 프로그래밍의 명기법 (2013)](https://blog.moertel.com/posts/2013-12-14-great-old-timey-game-programming-hack.html) | 289 (11-15) | 289 (+0) |
| [당신의 TV는 벽을 꿰뚫어 본다 (2025)](https://maurycyz.com/projects/fading/) | 285 (11-15) | 286 (+1) |
| [상시 감시가 아이들과 부모에게 하는 일](https://www.theatlantic.com/magazine/2026/12/location-tracking-apps-parental-surveillance/689031/) | 281 (11-15) | 282 (+1) |
| [보안 신호를 선명하게 한 PyPI 프로젝트 페이지 개편 적용](https://blog.pypi.org/posts/2026-11-06-ui-updates-complete/) | 269 (11-15) | 278 (+9) |
| [FM-1 워크벤치](https://open.m-vave.com/fm1-workbench) | 272 (11-15) | 278 (+6) |
| [Show HN: 순수 JAX 190줄로 구현한 DeepSeek V3](https://github.com/Vaibhaav-Tiwari/deepseek-v3-jax) | 268 (11-15) | 275 (+7) |
| [AMD 젠 6 패밀리: 짐승에게 먹이를 주다](https://chipsandcheese.com/p/amds-zen-6-family-feeding-the-beast) | 274 (11-15) | 274 (+0) |
| [파운데이션 모델 프레임워크](https://developer.apple.com/foundation-models-framework/) | 267 (11-15) | 269 (+2) |
| [우리 소프트웨어 엔지니어링 면접이 조금 바뀝니다](https://blog.janestreet.com/software-engineering-interviews-are-changing-a-little/) | 263 (11-15) | 267 (+4) |
| [브레이브 검색 API, x402 프로토콜로 에이전트 결제 받는다](https://brave.com/blog/search-api-agentic-payments/) | 262 (11-15) | 262 (+0) |
| [Show HN: 심시티/아이소메트릭 뷰로 본 스페인 발렌시아](https://tinyvalencia.com/) | 261 (11-15) | 261 (+0) |
| [끔찍한 공개키 트릭](https://maurycyz.com/projects/badcert/) | 261 (11-15) | 261 (+0) |
| [발견: 염증을 터뜨리지 않고 노화를 밀고 가는 단백질](https://www.nature.com/articles/d41586-026-03638-3) | 257 (11-15) | 259 (+2) |
| [Unsloth Qwen3.8-27B 양자화 – 다이내믹 v3.1 업데이트](https://unsloth.ai/docs/models/qwen3.8) | 257 (11-15) | 259 (+2) |
| [Show HN: 아이소메트릭 SF – 샌프란시스코 베이 지역 픽셀아트 지도](https://isometricsf.com/) | 252 (11-15) | 254 (+2) |
| [일부 아폴로 임무는 왜 유탄발사기를 실었나?](https://space.stackexchange.com/questions/37775) | 200 (11-15) | 249 (+49) |
| [Show HN: 페이퍼스 플리즈를 다시 만들었는데, 어떤 YC 스타트업에 투자할지 정하는 버전](https://termsheetplease.com/) | 247 (11-15) | 248 (+1) |
| [더 나은, 더 효율적인 RAG를 위한 더 빠른 검색](https://machinelearning.apple.com/research/faster-retrieval) | 241 (11-15) | 241 (+0) |
| [Atuin 스레드: 모든 기기에서 모든 에이전트 세션을](https://blog.atuin.sh/threads-agent-sessions/) | 239 (11-15) | 241 (+2) |
| [AMD 인뎁스에서 마이크 클라크와 젠 6 이야기](https://chipsandcheese.com/p/talking-zen-6-with-mike-clark-at) | 239 (11-15) | 239 (+0) |
| [하스켈 생태계를 위한 기술적 비전](https://discourse.haskell.org/t/a-technical-vision-for-the-haskell-ecosystem/15078) | 231 (11-15) | 232 (+1) |
| [22년 된 포스트그레스 타입 혼동 프리미티브를 RCE로 끌어올리기](https://mehmetince.net/part-3-6-how-i-ended-up-turning-a-22-year-old-postgresql-type-confusion-primitive-into-rce-cve-2026-6460/) | 232 (11-15) | 232 (+0) |
| [에너지를 가장 많이 먹는 언어가 점수도 가장 나쁘다](https://news.umich.edu/generative-ai-uses-more-energy-on-non-english-text/) | 231 (11-15) | 231 (+0) |
| [염소 제물이 더 필요하다](https://www.experimental-history.com/p/we-need-more-goat-sacrifices) | 226 (11-15) | 228 (+2) |
| [Show HN: 오늘 밤 FAA 전국 운항 중단 중 미국 항공편 실시간 지도](https://grounds.top/) | 215 (11-15) | 218 (+3) |
| [웹은 충분하고도 남는다](https://ftrain.com/aboard-the-web-is-more-than-enough) | 214 (11-15) | 215 (+1) |
| [Antigravity의 /teamwork로 과학과 공학 밀고 나가기](https://research.google/blog/advancing-science-engineering-with-antigravitys-teamwork-feature/) | 210 (11-15) | 214 (+4) |
| [현재 미국 모든 공항 운항 중단](https://twitter.com/flightradar24/status/2121347654714077605) | 213 (11-15) | 213 (+0) |
| [퀸즈 공공도서관, 랜섬웨어 공격 받아](https://connect.queenslibrary.org/) | 213 (11-15) | 213 (+0) |
| [2026년에 엔지니어로 산다는 것](https://shahar.blog/2026/11/08/on-being-an-engineer-in-2026/) | 203 (11-15) | 205 (+2) |
| [미네소타 기타리스트의 "팜프렛" 발명이 새 화음을 낸다](https://www.echopress.com/business/minnesota-guitarists-invention-strikes-a-new-chord) | 201 (11-15) | 202 (+1) |
| [3Com에 무슨 일이 있었나?](https://dfarq.homeip.net/what-happened-to-3com/) | 200 (11-15) | 200 (+0) |

## 스레드

**오늘의 모든 장애는, 보이지 않았을 뿐 이미 내려진 설계 결정이었다.** 호텔이 돌리지도 않는 클라우드를 거쳐 사람에게 닿는 경로가 하나뿐인 수영장 경보기. 고유성 불변식이 도움말 페이지에 적혀 있었고 몇 년 동안 조용히 깨져 있던 단축 링크 서비스. 페이지에서 필터를 받아들이는 엘리먼트 피커와, 페이지가 읽을 수 있는 무작위 UUID. 경쟁사 five 곳이 공유하는데 그 중 누구도 설명하지 못하는 은행 스택. 벤더는 편리한 피고다 — Microsoft, Bitly, 젤을 깨뜨린 그 무엇이든 — 그리고 각 경우에 벤더의 장애는 견딜 만했다. 견딜 수 없었던 건 그 아래에서 아무도 무슨 일이 있었는지 몰랐다는 점이다. "또 누가 알아챘을까?"는 프런트 페이지가 하루 종일 던진 질문이었고, 매번 답은 아무도였다.

**AI 자금 이야기는 성능에서 비용과 통제로 옮겨갔다.** Qwen4-Max는 폐쇄형 플래그십인데 한 벤치마크에서 자기 회사의 오픈 27B보다 낮은 점수를 받고, 가격은 더 좋은 점수를 낸 경쟁사 제품의 아홉 배다 — 그 패밀리에서 흥미로운 건 직접 돌릴 수 있는 작은 쪽이다. Nvidia에 대한 Steve Blank의 질문은 사실 칩에 관한 게 아니다. 고객이 직접 만들기 시작하고 소프트웨어 해자가 더는 해자가 아닐 때 무슨 일이 생기느냐는 것이다. 그리고 닷새째 페이지에서 가장 많은 추천을 받은 것은 여전히 CEO의 사임이고, 4,054점이며, 그 뒤를 이사회가 그를 축출해야 했다고 주장하는 WSJ 기사가, 그 뒤를 직원들이 그를 복귀시키자고 청원한다는 Wired 기사가 잇는다. 돈은 움직임을 멈추지 않았다. 자기 자신에 대해 일관된 이야기를 하는 능력을 멈췄을 뿐이다.

**그리고 그에 맞선 프로그램은, 늘 그렇듯, 작고 끝난 것들이었다.** 39,731바이트짜리 컴파일러와 IDE, 여전히 `touch`보다 작다. 형식이 파일 하나이고 CDN이 이미 파일 일부를 읽는 법을 알기 때문에 커피 한 잔 값으로 호스팅하는 139GB 지도. 브라우저에서 스물여섯 글자로 조립되고 한 번도 업로드되지 않는 폰트. 도구의 이름을 아는 것이 그 도구를 쓰는 전제라는 게 전체 논지인 강의계획서. 검색 도구와 정규식 엔진도 쓴 사람이 내놓은, 자기가 무엇에 쓰는 물건이 아닌지를 말해주는 datetime 라이브러리. 프런트 페이지의 불안은 규모와 의존성에 관한 것이다. 5년 뒤에도 여전히 중요할 그 페이지의 모든 것은 파일 하나, 작은 프로그램 하나, 혹은 자기 한계에 대해 진실을 말한 글 한 편이다.
