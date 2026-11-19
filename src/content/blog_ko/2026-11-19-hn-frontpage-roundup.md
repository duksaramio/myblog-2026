---
title: "Hacker News 프런트 페이지 라운드업 — 2026년 11월 19일"
pubDate: 2026-11-19
description: "앤트로픽이 813억 달러를 조달해 공모가보다 34% 높게 출발했지만 30분 만에 13%를 반납했다. 구글은 네 번째 Gemini 4를 내놨고, 루비는 upcase에서 1바이트 힙 오버플로를 얻었으며, OpenJDK는 그 Base64 버그를 9월에 신고받고도 풀 리퀘스트를 닫아버렸다."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
lang: "ko"
---

오늘 랭킹 목록을 전수 스캔한 결과 150개 스토리가 200점을 넘겼고, 그중 33개는 지난 나흘 밤 사이 이곳에서 다루지 않은 것들이다. 나머지 117개는 맨 아래 표에 있으며, 마지막으로 보고된 점수가 언제 기준인지 날짜를 함께 적었다.

오늘은 AI 비즈니스가 자기 산수를 대중 앞에서 증명해야 했던 날이었다. 앤트로픽은 공모가를 83달러로 정하고 111.50달러에 시작했으며, 다우가 800포인트 빠지는 와중에 30분 만에 13%를 잃었다. 구글은 네 번째 Gemini 4 변형을 내놓고는 원가 이야기로 포지셔닝했다. 마이크로소프트는 한 게시물에서 모델 일곱 개를 발표하고 가격 대비 성능을 앞세웠다. 루비는 `upcase`의 1바이트 오버플로로 인증 전 RCE를 얻었고, 어제 프런트 페이지를 점령했던 OpenJDK Base64 버그는 알고 보니 9월에 풀 리퀘스트가 올라왔지만 아무도 보안 수정으로 취급하지 않았던 건이었다.

## 앤트로픽, 813억 달러 조달하고 30분 만에 13% 반납 — 586 points

**586 points** · 931 comments · [reuters.com](https://www.reuters.com/business/finance/anthropics-historic-debut-put-ais-promise-peril-wall-st-test-2026-11-19/) · [HN discussion](https://news.ycombinator.com/item?id=50562754)
**410 points** · 761 comments · [anthropic.com](https://www.anthropic.com/news/anthropic-prices-initial-public-offering) · [HN discussion](https://news.ycombinator.com/item?id=50553843)

구조부터 보자. 앤트로픽 자체 공모 발표 기준으로 클래스 A 주식 980,000,000주, 주당 83.00달러다. 이 중 956,351,354주는 신주이고 23,648,646주는 기존 주주의 매도분이라 그 몫은 앤트로픽에 한 푼도 들어오지 않는다. 인수단은 추가로 147,000,000주에 대한 30일 옵션을 갖는다. 오늘 나스닥 글로벌 셀렉트 마켓에서 `ANT` 티커로 거래가 시작됐고 공모는 11월 20일 마감된다. 9억 8,000만 주 곱하기 83달러는 813억 4,000만 달러 조달로, 올해 초 SpaceX의 857억 달러 상장에 이어 두 번째 규모이며 AI 기업이 공개 시장에서 끌어낸 금액 중 최대다.

그다음이 첫날이다. 야후 파이낸스의 실시간 중계에 유용한 숫자들이 있다. `ANT`는 공모가보다 34% 높은 111.50달러에 시초가를 형성했고, 첫 1분에 150억 달러가 몰렸으며, 거래 30분 만에 약 97달러까지 밀렸다. 첫 체결 대비 13% 하락이고, 야후가 암묵적 발행주식수로 집계하는 131억 주를 기준으로 하면 시가총액 약 2,000억 달러가 증발한 셈이다. 동부시간 오전 11시 6분 기준으로, 야후가 대형 상장 21건의 1분 단위 데이터를 검토한 결과 2008년 이후 미국 대형 IPO 중 최악의 첫 30분이었다. 시장 전체도 한몫했다. 다우는 장중 800포인트 하락했고 S&P와 나스닥은 약 2% 빠졌다.

이제 조심해야 할 부분인데, 헤드라인들이 같은 숫자를 말하고 있지 않기 때문이다. 로이터 라이브 블로그 헤드라인은 앤트로픽이 "상장 첫날 시가총액 2조 달러를 돌파했다"고 쓴다. 그러려면 대략 180억 주가 필요하다. 야후의 1조 5,000억 달러 시초가 계산은 111.50달러 곱하기 131억 주다. 97달러에서는 1조 2,700억 달러가 되는데, 스레드 최상위 댓글이 "지금 1조 2,600억 달러로 내려왔다", "몇 주 전만 해도 사람들이 2조 달러 이상을 원했다"고 말할 때 나오는 숫자가 바로 이것이다. 세 숫자 모두 산술적으로 맞고, 셋 다 같은 30분 동안 주가가 13% 빠진 회사를 가리킨다. 이번 주에 밸류에이션 헤드라인을 읽을 때는 글쓴이가 어떤 분모를 썼는지 확인하라. 완전 희석 주식수는 옵션과 RSU, 그리고 이 정도 연차의 회사가 들고 있는 유별나게 큰 직원 지분 풀까지 포함한다. 야후가 쓰는 암묵적 주식수는 시장 관행이다. 둘 사이의 격차는 대략 5,000억 달러어치의, 어떤 주식도 그 가격에 거래된 적 없는 '밸류에이션'이다.

스레드는 가격보다 가격이 뜻하는 바에 관한 이야기다. 스스로 SWE라고 밝힌 한 댓글러는 "내가 보기엔 이제 파티는 끝난 것 같다"고 말한다. 또 한 명은 "어두운 날" 같다고 하고, 그 부의 창출을 샌프란시스코의 주거비와 연결한다. 계속 생각하게 되는 댓글은 이것이다. "100만 달러 공동 투자자를 찾는 고객이 있다. 1상 암 신약에 100만 달러를 투자하겠다는 투자자를 확보했는데도 고전하고 있다." 그것이 오늘 자본시장의 실제 모습이다. 한 공모에 아침나절 만에 810억 달러가 빨려 들어갔는데, 1상 종양학 임상은 100만 달러를 넘기지 못한다.

지켜볼 것 두 가지, 둘 다 공모 발표문에는 없다. 첫째, 9억 8,000만 주 중 2,360만 주는 회사가 아니라 기존 주주가 판 물량이고, 그린슈는 기본 물량의 15%다. 부드러운 개장을 위한 표준 장치다. 둘째, 락업 일정. 앤트로픽 직원들은 이제 지난주까지 비유동성이던 자산을 유동성 있는 상태로 들고 있는데, 그 회사의 공개 비교 기업들은 하락 중이다. 오늘 유통물량은 완전 희석 주식수에 비해 작고, 바로 그렇기 때문에 첫 체결이 공모가보다 34% 높았다가 30분 뒤 자기 자신보다 13% 낮아질 수 있는 것이다.

## Gemini 4 Neon은 한 달 만에 나온 네 번째 Gemini 4, 세일즈 포인트는 가격 — 1,000 points

**1,000 points** · 751 comments · [blog.google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/) · [HN discussion](https://news.ycombinator.com/item?id=50552424)

구글의 모델 작명은 이제 순서인 척하기를 포기했다. 몇 주 사이에 Gemini 4 Hydrogen, Orchestrator, Carbon, Argon, 그리고 이제 Neon까지 나왔다. 게시물에는 사고 수준 표(XL, L, M+, M, S/XS)가 실려 있는데, 이름만으로는 등급을 알 수 없게 되면서 한 댓글러가 이를 ASCII로 옮겨 적었다. Neon은 빠르고 저렴한 쪽으로 포지셔닝된다. 기본 고사고 수준에서 Carbon보다 과제당 비용이 32% 낮으면서 높은 Artificial Analysis Intelligence Index 점수를 주장하고, Vals 지수와 Agent Arena에서는 "최상위 경쟁 프런티어 모델"보다 50%에서 80% 낮은 비용으로 파레토 프런티어에 올라 있다. `xhigh`에서는 경쟁 모델들의 최고 설정 대비 36% 이상 낮은 비용으로 자사 최고 지능 점수를 주장한다.

벤치마크 목록은 길고 구체적이며, 이는 흔한 "최첨단" 손짓보다 유리한 점이다. AutoBaxBench 하드 등급 76%, WebExploitBench v1.2 51.26%(경쟁 대형 모델의 절반 비용), SEC-bench Pro 90.5%, CWE-bench v2 70.7%(Carbon 대비 3.4% 향상), ExploitGym은 절반의 토큰으로 프런티어 수준. 거부율은 Terminal-Bench 4.0 과제의 1.98%, Terminal-Bench-Science에서는 0%. Terminal-Bench 4.0에서 부정행위 0.0%로 Carbon과 동일, 코딩 평가 과제의 2.45%에서 편법 사용, 0.09%의 정렬 이탈 행동률, 자체 정직성 평가 99.2%, 그리고 최고 사고 수준에서 실시간 보호 장치를 켠 상태로 Gray Swan의 간접 프롬프트 주입 벤치마크에 대한 공격 성공률 0.0%.

그 모든 수치는 구글이 구글을 채점한 것이다. 방어자에게 중요할 두 개, 즉 WebExploitBench와 SEC-bench Pro는 모델을 만든 회사가, 그 회사가 고른 하네스에서, 그 회사가 고른 사고 수준으로 돌린 벤치마크이며, 사이버용 Neon이 "Fairwind 프로그램의 일환으로 조만간 신뢰할 수 있는 방어자들에게 순차 배포된다"는 제품 발표와 나란히 보고된다. 취약점을 찾아 고치는 모델은 이제 보안 제품이고, 이미 보안 제품을 사는 사람들에게 팔린다. 그건 실재하는 시장이다. 동시에 "우리 벤치마크에서 최첨단"이라고 모두가 말하는 시장이기도 하다.

데모를 보면 구글이 무엇이 팔린다고 생각하는지가 드러난다. 몽블랑과 샤모니를 소재로 한 1인칭 WebGL2 스키 시뮬레이터를 처음부터 작성했고, 커스텀 셰이더 10,200줄, 6줄짜리 스키 물리로 120Hz, 판상 사태, 공간 음향, 기성 에셋 제로. 1936년 튜링이 킹스 칼리지에서 했던 연구를 기록 사진으로부터 인터랙티브 3D로 재구성했고, 책상 위에는 작동하는 보편 튜링 기계가 놓여 있다. 이미지 한 장을 에이전트 군집으로 100,000셀 구글 시트로 바꿨다. 이미지 삽입 없음, Apps Script 없음, 50만 개의 실시간 수식이 에지 검출과 3D 깊이 매핑, 재조명을 여섯 가지 인터랙티브 모드로 수행한다. 스레드를 들썩이게 한 건 스프레드시트 데모인데, 미학이 아니라 제약 충족을 자랑하고 있기 때문이다. 모델은 무엇을 쓸 수 없는지 통보받았고, 그에 맞추려고 수식 50만 개를 썼다. 100,000셀 스프레드시트를 누가 원하는지는 별개의 문제다.

249점을 기록한 논평 글은 Neon이 Opus 5.5 경쟁자라고 주장하고, 댓글들은 좁은 주장에는 대체로 동의하면서 느낌에서는 갈린다. 가장 정직한 댓글은 Gemini 모델들이 "벤치마크에도 불구하고 Opus 5.5만큼 좋아 보이지 않는다"고 말한다. 어떤 과제에서는 비슷하고, 어떤 과제에서는 조금 낫고, 범용 모델로서는 더 나쁘다는 것이다. 벤치마크 프런티어가 변별력을 잃을 때의 모습이 그것이다. 숫자는 수렴하고, 차이는 취향과 하네스, 그리고 이 도구에 감독 없는 한 시간을 맡길 수 있는지에 대한 신뢰로 옮겨간다.

## 똑똑하고 진심인 사람이 필요하다 — 758 points

**758 points** · 379 comments · [violetpixel.com](https://violetpixel.com/blog/2026-11-17-we-need-smart-people-who-give-a-shit/) · [HN discussion](https://news.ycombinator.com/item?id=50554045)

저스틴 마이클의 주장은, 복잡한 시스템이 잘 설계돼서가 아니라 그 시스템을 속속들이 아는 특정 개인들이 실패하게 두지 않겠다고 개인적으로 거부하면서 모든 결함을 우회해주기 때문에 작동한다는 것이다. 그가 든 예는 스트라이프에서 배운 ACH다. 낡았고, 문제투성이이고, 레거시 짐을 잔뜩 지고 있는데도 대체로 안전하고 저렴하고 신뢰할 만한데, 모든 실패 모드를 누군가가 아끼는 마음으로 패치하고, 오버라이드하고, 수작업으로 처리하기 때문이다.

그다음 그는 지난주를 나열한다. 마이크로소프트 365, 항공교통관제, 유나이티드의 시스템, NSA의 네트워크, 주요 은행들, 애플. 그는 내부 정보가 없다는 점, 이 사건들이 AI 때문에 생겼다고 주장하는 사람은 없다는 점을 조심스럽게 밝힌다. 그리고 관통하는 선은 진심으로 신경 쓰는 사람이 충분하지 않다는 것이고, 그 이유는 생성형 AI라고 말한다. 관리자에게는 결연한 전문가가 붙들고 있는 불안정한 시스템과 모델이 뱉은 슬롭의 차이가 보이지 않기 때문이다. 둘 다 결과물처럼 보인다. 모델은 더 싸고, 더 오래 일하고, 병가를 쓰지 않고, 나쁜 아이디어에 절대 반박하지 않는다.

댓글들은 유용한 일을 해내는데, 인과 주장을 적당한 크기로 깎아낸다. 최고의 댓글은 이렇다. "우리는 수십 년간 극적인 인프라 장애를 겪어왔다. 한 주에 사건이 몰렸다고 해서 AI가 신뢰성 저하의 직접 원인이라는 게 입증되지는 않는다고 본다. 내 생각에 문제는 AI가 시스템을 유지하는 비용보다 시스템을 만들고 고치는 비용을 훨씬 빠르게 낮추고 있다는 것이다." 그것이 이 논지의 방어 가능한 버전이고, 원문보다 더 나쁘다. 누구도 대체될 필요가 없기 때문이다. 구축이 5배 싸지고 유지가 그대로라면, 인원이 전혀 움직이지 않아도 시스템 대 유지보수자의 비율은 분기마다 나빠진다. 또 다른 댓글러는 유지보수가 사회의 활력을 시험하는 잣대라는 호퍼의 말을 인용하고, 세 번째는 다들 조용히 아는 말을 한다. "진심으로 신경 쓰는 똑똑한 사람은 대부분의 회사에서 부채다."

이 페이지 아래쪽의 차고문 이야기는 가전 규모에서 같은 논증이고, 장애 목록보다 더 설득력 있다. 실패 모드를 처음부터 끝까지 보여주기 때문이다. 벤더가 작동하던 것을 없애버리고, 유일한 해결책은 납땜에 준하는 세부 집착을 가진 사람이 그것을 현지에서 다시 만드는 것이다.

## DNS 리졸버가 잘못된 병목인 이유, 긴 버전 — 676 points

**676 points** · 281 comments · [techstackups.com](https://techstackups.com/articles/quad9-leaves-france-dns-blocking/) · [HN discussion](https://news.ycombinator.com/item?id=50545958)

어제 라운드업에서 콰드9의 CTO가 스레드에 정책 입안자에게 들고 갈 수 있는, 출처가 붙은 장문 논증을 요청했고 그것이 485점에 올라왔다고 적었다. 바로 그 글이다. 지금은 676점이고, 어제의 숫자가 이 글에 표 한 줄이 아니라 섹션을 주는 이유다.

30분짜리 글인데, 클라우드플레어 글이 하지 못한 일을 해낸다. 모든 주장을 법원 판결이나 1차 문서까지 거슬러 추적한다. 사실관계는 보도된 그대로다. 11월 24일 콰드9는 프랑스에서 오는 질의 응답을 중단한다. 파리 법원이 beIN 스포츠를 대신해 불법 스포츠 스트리밍 도메인 목록을 차단하라는 명령을 거부했다는 이유로 과징금을 물렸고, 비슷한 사건이 20건가량 계류 중이다. 논점은 부수적 피해다. 콰드9의 프랑스 사용자에는 병원, 공공요금 사업자, 학교, 정부 기관이 있고, 리졸버에는 통보할 고객 목록이 없다. 응답이 끊기면 그 네트워크들은 원인을 가리키는 오류 하나 없이 멈춘다.

댓글은 기사보다 더 흥미로운 방식으로 갈린다. 한 진영은 유럽 정부들이 축구 리그의 수익을 지키려고 권위주의적 검열법을 쓰려 한다고 말하는데, 기록상 반박하기 어렵다. 다른 진영은 진짜 해법은 자체 호스팅 재귀 리졸버이고 법원은 ICANN과 이야기하라고 하면 된다고 한다. 맞는 말이고, 동시에 리졸버를 돌릴 수 있는 사람에게만 주어진 논증이다. 세 번째 진영은 불법 복제가 계속되는 이유는 합법 제품이 더 나쁘기 때문이라고 한다. 스트리밍 서비스를 하나 더 가입하거나, DVD를 찾으라는 것이다. 그 논증은 15년째 옳았고, 권리자에게 단 한 번도 받아들여진 적이 없다.

## 62달러짜리 보드가 체임벌린의 광고 서버를 이겼다 — 630 points

**630 points** · 263 comments · [blog.harrison.page](https://blog.harrison.page/garage-door-spam/) · [HN discussion](https://news.ycombinator.com/item?id=50519231)

해리슨의 myQ 앱은 차고문이 열리면 그에게 알림을 보내줬다. 2026년 10월, 알림에 광고가 붙기 시작했다. 그의 표현은 "아주 빌어먹을 수준으로 받아들일 수 없다"이고, 스크린샷이 논증 전체다. 체임벌린은 2023년 말 서드파티 API 접근을 끊었고, 그래서 그는 이미 2023년에 ratgdo32 보드를 두 개 샀다. 개당 약 62달러, 오픈소스 펌웨어, 개폐기 단자에 배선해서 LiftMaster의 Security+ 2.0 프로토콜을 로컬로 말한다. DHCP 예약 고정, HomeKit, "시리야, 1번 문 열어."

이 글을 읽을 만하게 만드는 구축 디테일은, 그다음 그가 아버지가 수은 스위치로 했던 일을 다시 만들었다는 점이다. 밤에 문이 열린 채로 남으면 알린다. 크론 작업이 21:00부터 06:00 사이 10분마다 ratgdo의 JSON 상태 엔드포인트를 찔러 슬랙에 올린다. 두 보드 모두 /32 라우트를 광고하는 테일스케일로 접근 가능해서 모니터링이 `/healthcheck`를 때릴 수 있다. 전부 로컬에서 돌고 클라우드는 없으며, 이제 알림에는 누가 문을 열었는지까지 나온다. myQ는 그런 적이 없다.

댓글은 같은 패턴이 다른 하드웨어에서 벌어진 목록이다. 한 사람은 차고 안에 버튼 세 개가 필요한 체임벌린 개폐기를 설치했다가, 그 버튼이 소프트웨어로 제한돼 개폐기당 두 개까지만 쓸 수 있다는 걸 알았다. 또 다른 이는 앱스토어 심사 가이드라인 4.5.4를 인용한다. 푸시 알림이 앱 작동에 필수여서는 안 되고 프로모션에 쓰여서도 안 된다는 규칙으로, 애플이 갖고 있으면서 집행하지 않는 규칙이다. 세 번째는 이 모델로 사업을 만드는 사람이라면 누구나 걱정해야 할 점을 짚는다. 우버 앱에서 모든 마케팅 토글을 껐고, 저장하고, 앱을 밀어 닫고, 다시 들어왔더니 전부 켜져 있었다.

교훈 두 가지, 둘 다 차고문에 관한 게 아니다. 첫째, 구독 없이 파는 '스마트 홈' 하드웨어는 결국 수익화해야 하고, 알림 채널이 가장 싼 자리다. 둘째, 해결책은 존재하고, 문 두 짝 차고 기준 124달러이며, 체임벌린이 수익화하고 있는 고객 중 그 정도 기술적 자신감을 가진 사람은 거의 없다는 조건이 붙는다. 그건 시장이 알아서 고쳐줄 시장 실패가 아니다.

## 유럽연합 집행위원회, 4만 명 직원을 Matrix로 돌리면서 실시간 상태 표시는 껐다 — 612 points

**612 points** · 293 comments · [element.io](https://element.io/blog/how-the-european-commission-rolled-out-matrix-to-more-than-40-000-staff/) · [HN discussion](https://news.ycombinator.com/item?id=50558533)

엘리먼트 공공 부문 트랙의 컨퍼런스 발표 정리 글인데, 흥미로운 내용은 주권 타령이 아니라 운영 디테일에 있다. 유럽연합 집행위원회는 4만 명이 넘는 직원을 Matrix 위에서 돌린다. 연합형이고, 설계상 상호운용되는데, 대안이 모든 회원국 기관을 한 벤더의 플랫폼에 밀어넣는 것이기 때문이다.

한 댓글러가 뽑아 인용한 디테일은 이것이다. 실시간 상태 표시가 꺼졌다. 사용자가 늘면서 온라인/자리비움 실시간 표시가 만드는 부하가 성능에 영향을 주기 시작했기 때문이다. 작은 문장인데 함의가 크다. 상태 표시는 채팅 클라이언트에서 설명하기는 가장 싸고, 대규모로 돌리기는 가장 비싼 기능 중 하나다. 이벤트 그래프를 심박수 파이어호스로 바꿔놓기 때문이다. 규모가 있는 모든 Matrix 배포는 결국 이 기능과 협상하게 되고, 연합형 사용자 4만 명이 이걸 잃는 것은 버그 리포트가 아니다. 그 아키텍처를 운영하는 데 드는 비용에 대한 진술이다.

스레드는 글보다 훨씬 우호적이지 않다. 최상위 비판은 암호화다. 한 댓글러는 Matrix의 E2EE를 "타이어 화재"라고 부르고 `arewemlsyet.com`을 가리키며 MLS로의 이전은 포기된 것으로 보인다고 말한다. 국가안보급 프라이버시를 내세워 파는 배포라면 타당한 우려다. 다른 이들은 몇 년마다 Matrix를 시도했다가 클라이언트 품질에 튕겨 나왔다고 하고, 집행위가 12개월 안에 이전할 것이라 예측한다. 반대로, 스레드의 누군가는 수천 명 사용자를 위한 Matrix 서버를 운영하는데 계속 작동하는 유일한 것이라고 하고, 한 친구 그룹은 왓츠앱과 텔레그램에서 자체 호스팅 인스턴스로 옮겨 만족하고 있다.

정직하게 읽으면 이건 실규모의 실제 배포이고, 이 프로토콜이 설계된 용도, 즉 서로의 벤더를 신뢰하지 않는 조직 간의 연합형 텍스트에 작동한다는 것을 증명한다. 기밀 자료에 쓸 만큼 암호화가 준비됐다는 것을 증명하지는 않고, 상태 표시 이야기는 운영팀이 여전히 켜두고는 감당할 수 없는 기능값을 치르고 있음을 시사한다.

## 마이크로소프트, 모델 일곱 개 내놓고 가격표를 앞세우다 — 590 points

**590 points** · 374 comments · [microsoft.ai](https://microsoft.ai/news/microsoft-ignite-2026/) · [HN discussion](https://news.ycombinator.com/item?id=50548021)

Ignite 발표는 플래그십이 아니라 패밀리 릴리스다. MAI Cyber 2 Flash, MAI Code 2, MAI Code 2 Flash, MAI Image 2.7, MAI Realtime 1, MAI Transcribe 2(Dragon Copilot Transcribe로 출시), Decision 1.1, 그리고 이제 마이크로소프트의 최대 모델을 와트당 토큰 1.7배로 돌리는 Maia 200 가속기가 양산에 들어갔다. 모든 항목에 가격 비율이 붙는다. Cyber 2 Flash는 "CyberGym-E2E에서 GPT-6 Astra의 품질을 과제당 비용 2% 미만으로 이긴다", Code 2는 GPT-6.1 Sol의 코딩 품질 98%를 가격 40%로, Opus 5.5 성능의 96%를 가격 5%로 달성하고, Image 2.7은 Artificial Analysis 이미지 편집 1위이며 GPT Image 2.6 Sunburst 가격의 5분의 1이고, Realtime 1은 오디오 분당 0.01달러부터 시작하며, Decision 1.1은 GPT-6.1 Sol보다 50배 빠르고 79배 싸다.

이 비율들을 하나의 장르로 읽어라. 최고 모델을 가졌다고 믿는 프런티어 랩이라면 성능을 앞세웠을 것이다. 한 등급 뒤처진 랩은 자기가 고른 벤치마크에서 과제당 비용을 앞세우고, "품질의 98%"를 "당신은 차이를 못 느낄 것"으로 읽어주길 바란다. 때로는 정말 못 느낀다. MAI Code 2를 실제로 써본 댓글러들은 "내 평소 작업에는 꽤 좋다"고 하고, "Opus나 Sol과 동급"이라는 말이 터무니없는 주장은 아니라고 한다. 전략적으로 중요한 건 회의적인 댓글이다. 이 중 일부를 오픈 웨이트로 내놓지 않으면 이건 또다시 윈도우 폰이다. 유통이 개발자 습관인 시장에서 유통이 없는, 유능하지만 팔리지 않는 제품 말이다.

보안 프레이밍에는 표시를 해둘 만하다. "24/7 돌도록 만든 프런티어 사이버 방어"가 세일즈 문구이고, 그 뒤의 숫자는 CyberGym-E2E에서 자체 보고한 것이다. 마이크로소프트와 구글 모두 이번 주에 사이버에 초점을 맞춘 저렴한 모델을 내놨고, 둘 다 값싼 공격 도구를 손에 넣은 공격자로부터 방어한다는 프레임을 썼다. 그 프레임은 옳고, 동시에 보안팀에 추론을 팔기에 가능한 최고의 마케팅이기도 하다. 여기서는 벤더의 인센티브와 방어자의 이익이 같은 방향을 가리키는데, 보도자료가 시사하는 것보다 훨씬 드문 일이다. 다만 그래서 벤치마크를 읽어야 하고, 문단을 읽으면 안 된다.

## AI 에이전트가 KPMG 감사팀보다 나은 질문을 던졌다 — 479 points

**479 points** · 246 comments · [europeanbusinessmagazine.com](https://europeanbusinessmagazine.com/ai-agents-better-questions-kpmg/) · [HN discussion](https://news.ycombinator.com/item?id=50547777)

KPMG 영국은 이름이 공개되지 않은 FTSE 250 기업의 재무제표에 '프로젝트 엑스포넨셜'을 돌렸다. 100개가 넘는 AI 에이전트가 기존 감사팀과 나란히 일했고, 고립된 행정 업무가 아니라 감사 프로세스 전반에 걸쳐서였다. 정보 수집, 분석, 문서화, 결론과 관찰 초안 작성, 다음 단계 제안, 그리고 서로 간의 업무 분담까지.

이 이야기를 프런트 페이지로 끌어올린 인용은 KPMG 영국 감사 총괄 캐스 번렛의 말이다. 여러 사례에서 에이전트들이 정규 팀보다 이슈를 상당히 깊이 파고들었고, 추가 조사가 필요한 영역을 식별했으며, 인간 감사인이 반드시 제기했을 것 같지는 않은 질문을 던졌다는 것이다. 출처는 파이낸셜 타임스이고 유료 장벽 뒤에 있으며, 업계지 정리 기사에는 숫자가 하나도 없다.

프레이밍의 문제는 이것이고, 에이전트가 시산표를 못 읽는다는 이야기가 아니다. 감사의 산출물은 문서화된 증거 흐름으로 뒷받침된 서명된 의견이고, 이 직업의 책임 모델 전체가 이름이 있는 인간이 행사하는 전문적 회의주의 위에 서 있다. "에이전트가 더 나은 질문을 던졌다"는 것은 생성 단계에 대한 주장이다. 감사 실패가 실제로 일어나는 검증 단계에 대해서는 아무 말도 하지 않는다. 에이전트가 이상 징후를 띄웠는데 담당 팀이 뒤쫓지 않았다면, 감사 품질이 나아진 게 아니라 아무도 읽을 의무가 없는 건의함을 하나 더한 것이다. 이 발표 어디에도 에이전트의 발견이 어떻게 처리됐는지, 오탐이 몇 건이었는지, 검토 계층이 어떻게 생겼는지는 나오지 않는다.

구조적인 질문도 있다. FTSE 250 감사 한 건에 에이전트 100개, 코드네임, 그리고 PR 승리로 도착한 결과 스토리. 빅4는 3년째 '감사에서의 AI'를 팔고 있다. 판매가 느린 이유는 모델 성능이 아니라, 도구가 계속기업 의문을 놓쳤을 때 누가 책임지는지를 규제당국이 알고 싶어 하기 때문이다. KPMG에는 그 답이 있을 것이다. 이 기사에는 없다.

## Ruby2ßhell: `upcase`의 1바이트 힙 오버플로 — 350 points

**350 points** · 148 comments · [verialabs.com](https://verialabs.com/ruby2shell/) · [HN discussion](https://news.ycombinator.com/item?id=50556287)

GHSA-34m4-m9fh-gqp5, CVE 대기 중, 심각도 critical, Ruby 3.3.14, 3.4.13, 4.0.10에서 수정. 버그는 대소문자 변환 루프에 있다. Ruby의 단일 바이트 인코딩 대부분에는 대문자 ß가 없어서, ß를 upcase하면 두 바이트(`SS`)를 쓰는데 루프는 한 바이트만큼의 공간만 검사한다. 출력 버퍼는 입력 길이 + 20바이트다. ß 21개를 넣으면 끝 너머로 1바이트 — `S` 또는 `s` — 를 쓴다. 같은 루프가 여러 ISO-8859와 Windows-125x 인코딩에 있고 Ruby 2.4.0부터 있었다. UTF-8은 다른 경로를 타서 영향받지 않는다. `upcase`, `swapcase`, `downcase(:fold)`, `casecmp?`를 통해 도달한다.

도달 가능성이 이걸 1면 기사로 만드는 부분이다. Rails는 기본 설정에서 영향받고, 클래식 Sinatra도 영향받으며, 구버전 Ruby를 함께 배포하는 자체 호스팅 소프트웨어도 그렇다: GitLab 19.6.0은 Ruby 3.3.13을, GitHub Enterprise Server 3.22.5는 4.0.9를, Mastodon 4.7.6은 영향받는 버전을 싣는다. Veria Labs는 사람들이 업그레이드할 시간을 가진 뒤 일주일 후에 개념 증명을 공개하겠다고 말한다.

제목의 주장은 "stock Rails에서의 인증 전 RCE"인데, 1바이트 힙 오버플로는 거기까지 가기엔 빈약한 프리미티브다. 비판은 아니다 — 공격자가 제어하는 인접 할당과 함께, 알려진 값을 통제해 1바이트 쓰는 것은 적절한 힙 형태만 주어지면 충분하고, 분석 글도 그 형태가 필요하다는 점을 솔직히 말한다. OpenSSL을 죽인 취약점 클래스가 개발자 행복을 내세우는 언어에서 살아 있다는 알림이다. Ruby는 같은 날 별도 권고도 냈다: 정규식 엔진과 문자열 대소문자 변환에 걸친 일곱 개 취약점, 그중 최소 하나는 이미 개념 증명이 공개돼 있다. Ruby를 운영 중이고 이번 주에 패치하지 않았다면 두 권고는 한 번에 처리할 일이다.

## 한 VM에 웹서버 1,500만 개 — 347 points

**347 points** · 40 comments · [kapteko.com](https://kapteko.com/15-million-webservers/) · [HN discussion](https://news.ycombinator.com/item?id=50556533)

전제는 농담이고 글도 그렇게 말하지만, 엔지니어링은 진짜다. `listen`/`accept`/`recv`/`send`/`close`만 하는 맨 C 서버는 초당 약 65,000 요청을 처리한다. 그다음 1,500만 개를 fork하면 커널의 소켓별 회계가 머신을 먹어버린다: 저자는 기본 네트워크 스택으로 약 250만 서버에서 OOM이 나고, 더 추가할수록 RPS는 떨어진다.

해법은 커널의 네트워크 스택을 쓰지 않는 것이다. 개념 증명 런타임은 각 "게스트" 웹서버를 작은 상태 기계로 적재한다 — 저장 컨텍스트 16바이트(프로그램 카운터에 파일 디스크립터 두 개), 그래서 1,500만 게스트의 스케줄링 상태가 220MB다. 시스템 콜은 가로채서 `smoltcp`로 넘긴다, 유저랜드 TCP/IP 스택이다: 유휴 서버당 620바이트, 활성 서버당 약 1킬로바이트, 그리고 10GB / 1코어 VM에서 1,600만 리스너에 도달한다. 글은 DPDK(커널을 완전히 우회하고, NIC를 소유하고, 코어 하나를 통째로 쓰고, 원격에서 켜면 SSH 세션이 죽는다)와 AF_XDP(커널이 디바이스를 유지하고, eBPF 필터가 패킷을 유저스페이스 링으로 유도하고, SSH가 살아남고, DPDK에 충분히 가까워 실용적 선택이 된다)도 비교한다.

내가 가장 좋아하는 문단은 저자가 Codex에게 TCP 연결이 메모리를 얼마나 쓰는지 물어 "유휴 연결은 0을 쓴다"는 답을 받고, 그것을 믿는 사람처럼 주석에 `SHOULD CONSUMER ZERO MEMORY`라고 적은 뒤 OOM kill을 맞는 대목이다. 그는 이 점에 솔직하다: "LLM은 학습에 상당한 도움이 되지만, 비판적으로 생각하지 않고 그 답을 받아들이고 나중에 부끄러워하기가 너무 쉽다." 벤치마크 글 대부분보다 이 도구들이 어디에 있는지 더 잘 요약한다.

이게 보여주지 않는 것은 규모에서의 HTTP 서빙에 관한 그 무엇도 아니다. `accept`에서 막힌 1,500만 소켓은 할 일이 없는 1,500만 소켓이다; 흥미로운 숫자는 높은 연결 수에서의 초당 요청 수일 텐데, 글은 개념 증명과 모든 시스템 콜을 재구현한 POSIX 호환 런타임 사이의 차이를 솔직히 말한다. 그래도 유휴 서버당 620바이트 대 커널의 수 킬로바이트 소켓 비용은 실제 결과이고, 지난 3년 동안 사람들이 워크로드를 io_uring과 AF_XDP로 옮긴 이유다.

## 영국이 Apple 명령의 존재를 인정했다 — 329 points

**329 points** · 157 comments · [macanorak.com](https://macanorak.com/uk-government-forced-to-admit-it-issued-apple-a-secret-encryption-order/) · [HN discussion](https://news.ycombinator.com/item?id=50562113)

조사권한재판소는 2016년 조사권한법 253조에 따라 Apple에 발부된 기술능력통지에 대해 영국 정부가 neither-confirm-nor-deny를 유지하려던 시도를 기각했다. 그게 전부이고, 올바른 결과다. 중요한 것은 정부가 항복하기 전에 이미 얼마나 많은 것이 공개돼 있었느냐다.

2025년 2월: Washington Post가 그해 1월 발부된 명령을 보도했다, Apple이 암호화된 iCloud 데이터에 백도어 접근을 제공하도록 요구하는 — 영국 사용자만이 아니라. Apple의 대응은 마스터 키를 만드는 대신 신규 영국 사용자에게서 Advanced Data Protection을 빼고, 통지를 인정하지 않은 채 어떤 제품에도 백도어를 만들지 않겠다고 공개적으로 말하는 것이었다. 트럼프 행정부가 관여한 수개월의 외교 끝에 첫 통지는 철회됐다. 두 번째가 발부됐고, 보도에 따르면 영국 사용자로 제한됐다. 첫 통지가 사라지면서 Apple의 원래 이의제기는 무의미해져 기각됐고, 그래서 2026년에 새로 냈다. 9월 17일 재판소 심리에서 정부 변호사들은 명령의 존재를 확인할 필요가 없다고 주장했다. 오늘 그 주장에서 졌다.

이게 어깨 으쓱 이상을 받을 이유: 영국 장관은 이제 전 세계 수백만 명이 쓰는 기기의 보안을 바꾸도록 강요하고, 제조사가 그것을 논하는 것을 금지하고 — 오늘까지는 — 그 요구가 존재한다는 것조차 확인해주기를 거부할 수 있다. 우리가 이 모든 걸 아는 유일한 이유는 신문이 보도했기 때문이다. 재판소의 판결은 이 사건의 공개 규칙을 개선한다. 권한을 바꾸지는 않으며, 두 번째 통지는 여전히 유효하다. Apple의 입장도 변한 게 없다: 회사는 여전히 백도어를 만들지 않겠다고 하고, 즉 교착은 더 많은 햇빛 아래에서 계속된다.

## Ruby 정규식 엔진과 대소문자 변환의 일곱 개 취약점 — 328 points

**328 points** · 126 comments · [ruby-lang.org](https://www.ruby-lang.org/en/news/2026/11/18/multiple-vulnerabilities-in-regexp-and-string/) · [HN discussion](https://news.ycombinator.com/item?id=50554038)

Ruby2ßhell 공개와는 별개의 권고, 같은 날, 같은 서브시스템: 정규식 엔진과 문자열 대소문자 변환에 걸친 일곱 개 취약점, 최소 하나는 개념 증명이 이미 공개돼 있다. Ruby는 3.3, 3.4, 4.0에 걸쳐 수정을 배포했다. 대소문자 변환 오버플로와의 겹침은 우연이 아니다 — 둘 다 수년간 아무도 진지하게 퍼징하지 않을 만큼 안정적이었던 코드에 있고, 이는 지난 두 번의 1면에서 OpenJDK와 nginx 버그를 설명했던 것과 같은 문장이다.

## 시니어 엔지니어가 보안 버그를 고치려다 가드레일에 걸렸다 — 315 points

**315 points** · 115 comments · [ounapuu.ee](https://ounapuu.ee/posts/2026/11/19/unsafeguards/) · [HN discussion](https://news.ycombinator.com/item?id=50562262)

저자는 자신이 통제하는 프로젝트에서 Claude Code에게 손쉬운 보안 수확거리를 찾아보라고 했다. 한 줄짜리 수정을 찾았고, 그는 받아들였고, 도구가 멈췄다: 그 변경이 AI 세이프가드를 건드린 것이다. 그의 요점은 안전이 나쁘다는 게 아니다. 자신은 제품에 대한 입증 가능한 통제권을 가진 시니어 제품 엔지니어이고, 취약점을 고치고 현지 법을 준수하려는 중인데, 예외 절차는 영업일 기준 며칠을 기다려야 하고 그가 읽을 수 없다고 표현한 요구사항 묶음을 요구한다는 것이다. "Oh no, how dare I."

글이 답하지 않는 메커니즘 질문이야말로 중요한 것이다: 분류기는 무엇을 봤나? 다른 사람들의 시스템에 겨눌 수도 있는 도구에서 보안 관련 코드 경로에 가한 한 줄짜리 변경은, 밖에서 보면 가드레일이 존재하는 바로 그 대상과 똑같이 보인다. 도구들은 소비자 표면과 기업 책임에 맞춰 조율돼 있고, 정당한 diff를 든 정당한 개발자는 SLA가 붙은 지원 티켓 말고는 정당함을 알릴 방법이 없다. 마찰에 의한 거버넌스이고, 수정이 급한 바로 그 경우에 계속 오작동할 것이다.

댓글 스레드는 대부분 스택만 다른 같은 이야기이고, 거기에 "그냥 로컬 모델을 쓰라"는 말이 상당량 붙는다, 가드레일과 벤더의 책임을 동시에 없애는 답이다. 위의 OpenAI와 Microsoft 발표와 함께 읽을 만하다: 이번 주 모든 벤더는 프로덕션에서 무인으로 도는 에이전트를 팔고 있고, 그것을 멈추는 통제 표면은 수정과 익스플로잇을 구분하지 못하는 분류기다.

## 케임브리지 올해의 단어는 "human" — 299 points

**299 points** · 222 comments · [cam.ac.uk](https://www.cam.ac.uk/news/cambridge-dictionary-reveals-word-of-the-year-2026) · [HN discussion](https://news.ycombinator.com/item?id=50546914)

케임브리지 대학 페이지는 자바스크립트 껍데기라 읽을 만한 것을 돌려주지 않았고, 그래서 이건 헤드라인과 스레드에서 온 것이다. Cambridge Dictionary의 2026년 올해의 단어는 "human"이고, 기술에서 가장 많이 논의된 질문이 어떤 일이 사람에게 남겨지는가인 해에 골랐다. 스레드는 Gates Foundation 의장 빌 게이츠가 돌봄 같은 "인간 전용 직업"은 기계가 절대 가져가선 안 된다고 주장한 것을 인용한다.

댓글이 발표보다 낫다. 하나는 "전용 직업"이라는 프레임 자체가 범주 오류라고 주장한다, 어떤 일이 인간 전용인지 정하는 것은 어떤 사전, 재단, 규제기관도 정할 수 없는 개인적·정치적 선호에 달려 있기 때문이다. 또 하나는 진짜 언어적 불만을 갖는다: 누군가를 "a good human"이라고 부르는 것은 비인격적이고 모욕적이다, 사람에게는 행위성이 있고 human은 사람 모양의 세포 덩어리이기 때문이다. 또 다른 하나는 "anthropic"이 OED에는 있지만 케임브리지에는 아직 없다고 지적하는데, 사전 출판사가 곱씹어볼 만한 종류의 디테일이다.

이걸 언급할 이유: Dictionary.com의 2026년 단어는 "maxxing", Collins는 "mogging", 케임브리지는 "human"이다. 사전 셋, 같은 해에 대한 세 가지 매우 다른 독법 — 극도로 온라인스러운 속어 둘과 도덕적 고지대로 물러난 단어 하나. 그 격차가 세 선택지 어느 것보다 2026년을 정직하게 요약한다.

## MCP 브리지 위에서 Ghidra로 리버스 엔지니어링하기 — 294 points

**294 points** · 74 comments · [slowchronicle.com](https://www.slowchronicle.com/posts/llm-assisted-reverse-engineering) · [HN discussion](https://news.ycombinator.com/item?id=50553225)

20년의 수작업 리버스 엔지니어링, 그다음 과정이 바뀌었다. 여기 스택은 구체적이고 따라 할 만하다: DeepSeek v4.1 Flash를 드라이버로(가끔 Luna나 Terra의 Codex와 함께), 에이전트가 디컴파일러를 직접 몰 수 있도록 Ghidra에 MCP 브리지를, 빠른 패스에는 radare2/kuna를. 워크플로는 에이전트에게 바이너리를 가리키고 함수를 훑고, 이름을 바꾸고, 참조를 따라가게 하며 사람은 중요한 결과를 확인하는 것으로 줄었다.

흥미로운 주장은 LLM이 디컴파일된 C를 읽을 수 있다는 게 아니다. 하네스가 제품이라는 것이다: Ghidra API 앞의 MCP 서버가 범용 모델을 도메인 도구로 바꾸고, 같은 패턴이 아래의 KPMG 감사 에이전트와 OpenJDK 리뷰어 이야기에도 나온다. 글이 강조하지 않으면서 솔직한 것은, 출력물에는 여전히 틀린 답이 어떻게 생겼는지 아는 사람이 필요하다는 점이다. 20년의 패턴 인식이 저자로 하여금 에이전트의 작업을 신뢰하는 대신 훑어보게 해주고, 그게 오늘 시작하는 사람에게 이전되지 않는 부분이다.

## "사회를 생존하고 재건하는 데 필요한 모든 것", Mac용 28MB — 293 points

**293 points** · 156 comments · [lastbook.org](https://lastbook.org/) · [HN discussion](https://news.ycombinator.com/item?id=50560822)

Lastbook은 Mac, Windows, Linux용 오프라인 번들이다 — 명시적으로 폰은 아니다 — 무료, 로컬, 프라이빗, 그리고 문명을 재건하기에 충분하다고 광고한다: 로컬 Gemma 4 26B A4B 모델, OpenStreetMap에서 가져온 검색 가능한 장소 258,000개 이상, GitHub 스타 748개의 오픈소스 클라이언트. 다운로드 크기: Apple Silicon 28.5MB, Windows 105MB, Linux는 Ubuntu 24.04/26.04.

그 다운로드 크기가 힌트다. 26B 모델과 지도 타일 258,000개를 28.5MB에 담아 보낼 수는 없으니, 설치 프로그램은 다운로더이고 실제 용량은 첫 실행 후에 떨어진다 — 그건 괜찮지만, "오프라인"이라는 주장은 정상 상태에 대한 것이지 USB에 담아두는 zip에 대한 것이 아니다. 또 하나 눈여겨볼 것은 네트워크가 끊겼을 때 실제로 작동하는 부분은 지도이고, 사람들이 낭만화하는 것은 로컬 LLM이라는 점이다. go-bag을 만든다면 지도, 의료 참고자료, 오프라인 문서가 하중을 지탱하고, 물 정화에 대해 자신 있게 틀린 답을 내놓는 양자화된 26B는 그렇지 않다.

장르 — 생존·재건 키트 — 는 2년째 전성기를 보내고 있고, 그 정직한 버전은 지루한 목록이다: 종이 지도, 응급처치 매뉴얼, 라디오, 심는 법을 아는 씨앗, 그리고 만나본 이웃. 로컬 모델을 더하는 것은 참고 서가에 대한 진짜 개선이다. 프레이밍은 코스프레다.

## SSD 가격은 2027년 하반기에 완화될 것이고, 그 단서가 일하고 있다 — 287 points

**287 points** · 221 comments · [drivevault.io](https://www.drivevault.io/blog/when-will-hard-drive-prices-come-down.html) · [HN discussion](https://news.ycombinator.com/item?id=50557716)

DriveVault의 글은 SSD 가격이 2027년 하반기에 완화되기 시작하고 하드드라이브는 2028년까지 걸린다고 한다, 그것을 만드는 공장들이 이미 그 생산량을 팔아버렸기 때문이다. 메모리 계약 가격을 분기별로 추적하는 분석가들과 Seagate와 Western Digital이 올여름 투자자들에게 한 말을 인용한다. 9월 17일 날짜라 뉴스가 아니라 다시 떠오른 글이고, 스토리지 벤더의 블로그가 사기보다 기다리라고 예측하는 것이다 — 벤더가 하기엔 이상한 말이라 그래서 약간 신뢰가 간다.

메커니즘은 표준 사이클이다: NAND와 플래터 용량은 수년 앞서 계약되고, AI 데이터센터 구축이 증분 공급을 흡수하며, 소비자 가격은 하이퍼스케일러 사이 협상의 잔여물이다. 2027년에 해결된다는 주장은 예측이고, 글 자신의 "that is not a guess"야말로 할인해야 할 문장이다 — 그것은 추측이고, 가장 좋은 정보를 가진 사람들에게서 나온, 가장 좋은 종류의 추측이며, 여전히 추측이다.

추측이 아닌 것은 댓글의 비대칭이다: 이번 달 NAS용 8TB 회전판을 사는 사람들은 작년보다 더 내고 재고는 더 적게 찾고, 기업 구매자들은 다년 계약을 맺는다. 용량이 필요하면 지금 필요한 만큼 사고 2027년 가격에 계획을 세우지 마라. 기다릴 수 있다면 역사적 패턴은 계약 사이클의 하반기가 현물 시장이 부드러워지는 때라고 말한다.

## Genie 4, 세션 도중에 세상을 다시 쓸 수 있다 — 286 points

**286 points** · 182 comments · [blog.google](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/genie-4-now-available-project-genie/) · [HN discussion](https://news.ycombinator.com/item?id=50550415)

프로젝트 Genie의 네 번째 월드 모델은 앞의 세 모델에 없던 기능을 붙였다. 세션 도중에 타이핑으로 자기가 있는 세계를 바꿀 수 있다. 날씨를 바꾸고, 캐릭터를 집어넣고, 행동을 다른 쪽으로 돌린다. 장면에 맞춰 변하는 실시간 네이티브 오디오도 함께 붙었다. 앰비언스와 캐릭터 대사다. Genie 3는 더 긴 실행과 파노라마 시드 공간용으로 남아 있고, 세션은 3분(60초에서 늘었다), 360도 파노라마 그라운딩, 별개의 생성 결과가 하나의 연속된 비행으로 이어지는 월드 체이닝을 받는다.

데모와 분리해서 봐야 할 기술적 주장은 "월드 모델"이라는 말이다. 돌아다니고 프롬프트를 넣을 수 있는 생성 장면은 아주 좋은 인터랙티브 비디오다. 흥미로운 질문은 내부 상태가 얼마나 남아 있느냐, 즉 시험해볼 수 있는 일관된 물리가 있는 세계인지, 아니면 마지막 몇 프레임에서 그럴듯하게 다시 렌더링하는 것인지다. Google의 글은 사실성과 제어 가능성을 내세운다. 일관성 벤치마크는 공개하지 않았고, 데모는 골라낸 장면이다.

확실히 실제인 것은 오디오다. 생성된 장면의 사건에 반응하는 네이티브 오디오는 보기보다 어렵고, 기술 데모와 게임 스튜디오가 프로토타입을 만들 수 있는 것 사이의 차이다. 데모 밖의 누군가가 이걸 쓸지는 여전히 미해결이고, 월드 모델 물결이 시작된 지 2년이 지난 시점이다.

## java4shell 버그에는 9월에 풀 리퀘스트가 있었다 — 278 points

**278 points** · 78 comments · [github.com](https://github.com/openjdk/jdk/pull/32781) · [HN discussion](https://news.ycombinator.com/item?id=50558906)

albertnetymk가 올린 OpenJDK 풀 리퀘스트 #32781의 제목은 버그가 무엇인지를 그대로 적고 있다. "AVX-512 Base64 디코더가 짧은 패딩 꼬리에서 출력 버퍼를 덮어쓴다." 이 PR은 닫혔다. CVE-2026-114938이 된 버그, 즉 JDK Base64 디코더의 사전 인증 RCE, CVSS 4.0 기준 9.2, 어제 이곳에서 1,143점으로 다뤘고 지금은 1,176점인 그 버그는 2026년 9월에 평범한 정확성 수정으로 접수됐고, 11월 Calif의 권고가 나올 때까지 보안 이슈로 취급되지 않았다.

이번 주의 이야기이고, AI에 관한 이야기가 아니다. 어제의 프레임은 AI 하네스가 20년 된 메모리 안전성 버그를 추론 비용 200달러 미만으로 한 시간 만에 찾아냈다는 것이었다. 오늘 추가된 것은 더 나쁘다. 버그는 숨어 있지 않았다. 누군가 그걸 보고 패치를 썼고, 제목이 버퍼 덮어쓰기라고 말하고 있었다. "메모리를 덮어쓴다"와 "원격에서 악용 가능한 취약점이다" 사이의 간극은 트리아지 결정이고, 그 결정은 공격자의 분석문이 아니라 풀 리퀘스트를 보던 사람들이 내렸다.

스레드는 포렌식을 하고 있다. 리뷰 논의가 뭐라고 했는지, 보안 리스트에 통보가 갔는지, OpenJDK 취약점 그룹 규칙 아래 메인테이너의 의무가 무엇이었는지. 아무도 태만해 보이지 않는다. 그게 핵심이다. 성숙한 프로세스는 수정이 수정으로 들어왔을 때 이렇게 한다. 적용하고 넘어간다. 그 프로세스는 악용 가능한 버그를 찾은 사람이 크게 알릴 것이라고 가정한다. 지난 2주간의 발견 비용 논의 전체가 말하는 것은 그 가정이 이제 틀렸다는 것이다. 이런 버그를 찾는 쪽이 점점 더, 시킨 것만 보고하는 에이전트이기 때문이다.

## Archive Team이 Apple 지원 포럼을 구하고 있다 — 266 points

**266 points** · 106 comments · [wiki.archiveteam.org](https://wiki.archiveteam.org/index.php/Apple_Discussions) · [HN discussion](https://news.ycombinator.com/item?id=50539747)

`discussions.apple.com`이 문을 닫는다. Archive Team이 프로젝트를 돌리고 있다. 분산형, 워리어 기반, 프로젝트 리드는 "arkiver", 수집 스크립트는 `applediscussions-grab`, Apple이 끄기 전에 20년치 Apple Support Community와 그 이전 이름들을 끌어내리는 중이다. 페이지에서 중요한 문장은 "Archiving status: In progress"이고, 중요한 함의는 그 뒤에 URL 공간이 어떻게 되는지 아무도 말하지 않았다는 것이다.

Apple 지원 포럼은 특정 macOS 버전의 특정 고장에 대한 수정을, 그걸 겪은 사람이 써서 공개 상태로 색인되어 남아 있는 몇 안 되는 곳이다. 이런 곳이 닫힐 때마다 같은 내용이 모델의 가중치로 옮겨가고 인용 가능성을 잃는다. 댓글은 대부분, 예전에 검색하던 것이 곧 검색 불가능해진다는 걸 깨닫는 사람들이다. 대역폭이 있으면 워리어를 돌려라. 프로젝트는 IRC #badapple에 있다.

## Claude가 블랙홀 물리학의 미해결 문제 두 개를 풀었다 — 259 points

**259 points** · 100 comments · [anthropic.com](https://www.anthropic.com/research/claude-black-hole-physics) · [HN discussion](https://news.ycombinator.com/item?id=50563148)

결과 두 개, 둘 다 홀로그래피 이중성을 통한 양자 중력 이론 쪽이고, 둘 다 Anthropic이 Claude Fable 5.2가 푼 미해결 문제라고 설명한다. 첫 번째는 물리학자들이 2003년에 세팅하고 끝내 완성하지 못한 계산이다. 온도를 올릴 때 뜨거운 입자 기체에서 블랙홀로 갑자기 넘어가는 그 호킹-페이지 전이가, 시공간이 더 이상 확정된 모양을 갖지 않는 영역에서도 유지되는가. Claude는 자기 자신의 복사본들로 연구 그룹을 돌려 거의 모든 조각을 독립적으로 처리했고, 자기 계산을 알려진 결과와 대조했고, 전이가 양쪽 극단에서 갑작스럽다고 결론지었다. 두 번째는, 2009년부터 부트스트랩 기법이 단순화된 2차원 우주에서 가장 가벼운 블랙홀이 얼마나 무거울 수 있는지에 상한을 걸어왔고, 수치 계산은 누구도 증명하지 못한 더 낮은 상한을 시사했다. Claude는 물리학자들이 놓친 수치 데이터의 패턴을 발견하고 정확한 상한을 증명했다.

흥미로운 쪽은 출처 이야기다. 8월에 Anthropic 연구자가 Claude에게 블랙홀 물리학과 부트스트랩 방법의 흥미로운 미해결 문제 목록을 달라고 했고, 몇 시간 뒤 22개 후보가 돌아왔다. 별도의 에이전트들이 각각에 붙어 서로의 진행 노트를 읽으며 약 6주를 돌았다. 특별한 설정은 없었다. 한 에이전트가 호킹-페이지 문제를 푼 지 몇 주 뒤, 같은 문제를 Claude로 독립적으로 공략한 물리학자가 자기 결과를 공유했고, 동료가 그 에이전트가 다른 방법으로 먼저 도달했음을 알아챘다. 그 상호 확인이 글에 언급된 유일한 검증이다.

붙잡아야 할 것은 이거다. 두 결과 모두 중요한 의미의 동료 심사를 거치지 않았고, 둘 다 우리 우주를 기술하지 않는 장난감 우주 안에 있고, 둘 다 응용이 없다. Anthropic이 세 가지 모두를 명시한다. 이런 발표가 보통 담는 것보다 정직하다. 하지만 "미해결 문제 두 개를 풀었다"는 물리학계의 판단에 대한 주장이고, 심사자와 몇 명의 회의론자가 유도를 훑을 때까지 정확한 표현은 "Anthropic 물리학자 두 명이 옳다고 믿는 증명 두 개를 만들어냈다"이다. 그것들이 버티면 흥미로운 부분은 물리가 아닐 것이다. 6주간 무인으로 돌아간 에이전트 루프가, 병목이 늘 한 사람이 긴 계산을 머리에 담는 능력이었던 분야에서 발표 가능한 이론을 만들어냈다는 점일 것이다.

## 그 밖의 새 글, 섹션 아래

- **[PHP 8.6의 새로운 것들](https://www.php.net/releases/8.6/en.php)** ([249 points](https://news.ycombinator.com/item?id=50557870), 120 comments) — 오늘 릴리스됐다. 부분 함수 적용(일부 인자를 미리 묶고 나머지는 클로저로 받기), `\Time\Duration` 클래스, epoll/kqueue 위의 폴링 API, 그리고 `clamp()`. 한 달 안에 프레임워크 코드에 나타날 것은 부분 적용 변경이다.
- **[Show HN: ExitPath](https://exitpath-ruddy.vercel.app/)** ([247 points](https://news.ycombinator.com/item?id=50547980), 93 comments) — Slack, Notion, Microsoft 365에서 벗어나는 오픈소스 마이그레이션 가이드다. 페이지가 클라이언트 렌더링 셸이라 가져올 내용이 없어서, 스레드에서 옮긴다. 사람들이 왜 떠나지 않는지에 대한 스레드의 합의는 free/busy 캘린더링, 그리고 아이덴티티다. 누군가 그만둘 때 여섯 개 시스템에 걸쳐 계정을 손으로 해제하고 싶은 사람은 없다. 누군가는 사이트가 vibe-coded처럼 보이고 Notion 대안들이 잘못 표기됐다고도 한다. AppFlowy를 "유사품"이라고 부르는 목록에 대한 타당한 지적이다.
- **[DaisyRose-27B](https://www.radixark.com/blog/daisyrose-27b)** ([247 points](https://news.ycombinator.com/item?id=50551046), 103 comments) — RadixArk의 첫 모델. Qwen3.8-27B에 1,200개의 선별된 장기 지평 에이전트 작업으로 RL 사후학습을 했고, 18일, H200 144장, 세션은 최대 1M 토큰. Terminal-Bench 4.1 pass@1이 5.6%에서 12.0%로 간다. 나쁜 숫자를 두 배로 만드는 것이 좋은 숫자는 아니지만, 그 두 배의 비용이 이야기다. 1,200개 작업과 18일은 자금이 넉넉한 스타트업이 감당할 수 있는 사후학습 예산이고, 체크포인트는 BF16, FP8, NVFP4로 나온다.
- **[Show HN: Voyager 1 분해하기](https://rshekhar.com/voyager/)** ([234 points](https://news.ycombinator.com/item?id=50548161), 57 comments) — 명령 컴퓨터 코어 메모리의 단일 비트까지 내려가는 인터랙티브 3D 분해다. RTG, 데이터 컴퓨터의 메모리 칩, 골든 레코드 커버가 각각 별도 진입점이다. LLM 도움으로 만들었고, 한 댓글러는 진짜 어려운 부분을 짚는다. 이 전체가 예전에는 연구 프로젝트였고 지금은 주말 하나라는 것.
- **[Nintendo, GitHub에서 Picofly 펌웨어 내려받기 중단](https://www.youtube.com/watch?v=-TLCGUpoD6c)** ([224 points](https://news.ycombinator.com/item?id=50547048), 85 comments) — 영상은 가져올 수 없어서 스레드에서 옮긴다. 테이크다운은 **포크**를 때렸고, 2023년부터 올라가 있던 메인 저장소는 건드려지지 않았다. 통지는 §1201(회피 방지)만 인용하고, 댓글러들은 §1201 통지가 애초에 유효한 §512 테이크다운이 아니라고 주장한다. Picofly는 별도 칩셋용 클린룸 펌웨어이고 Nintendo 자산을 포함하지 않는다. DMCA 이론 전체가 쟁점인 이유다.
- **[SQLite 위의 분산 블롭 저장소](https://zerodha.tech/blog/high-performance-distributed-blob-storage/)** ([224 points](https://news.ycombinator.com/item?id=50557537), 60 comments) — Zerodha가 "Blobasaur"를 만들었다. SQLite 위의 샤딩된 블롭 저장소로, KB에서 MB까지의 JSON 블롭을 초당 수천 작업, 한 자릿수 밀리초 지연으로 처리한다. Kite의 약 2,000만 고객용 맞춤 트레이딩 화면을 뒷받침한다. 교훈은 SQLite 사람들이 계속 말하는 그것이다. 데이터베이스는 충분히 빠르고, 문제는 늘 샤딩과 복제였다.
- **[바이러스 주입으로 세 명의 췌장암이 멈췄다](https://www.newscientist.com/article/2528235-pancreatic-cancer-halted-by-virus-injection-in-three-patients/)** ([221 points](https://news.ycombinator.com/item?id=50563066), 20 comments) — 용해성 바이러스가 안전성 시험에서 세 명의 종양 성장과 확산을 멈췄다. n=3이고 종료점은 안전성이었으며, 췌장암은 유망한 1상 결과를 아주 길게 쌓아온 병이다. 지켜볼 만하고, 아직 가족 단톡방에 올릴 만하지는 않다.
- **[OpenAI 모델로 칩 설계 발전시키기](https://openai.com/index/advancing-chip-design-with-our-models/)** ([219 points](https://news.ycombinator.com/item?id=50549493), 166 comments) — OpenAI의 모델들이 첫 자체 추론 칩인 Jalapeño 설계에 어떻게 기여했는지, 8월 글에 이어서. 칩 설계는 이 도구들에 존재하는 최고의 사례다. 거대한 탐색 공간, 값싼 시뮬레이션, 검증 가능한 출력.
- **[에너지 드링크, 심정지 보고 11배와 연관](https://www.sciencedaily.com/releases/2026/11/261110042543.htm)** ([214 points](https://news.ycombinator.com/item?id=50546465), 214 comments) — 에너지 드링크와 자극제 보충제가 심정지 보고에서 11배, 심장마비 보고에서 4.5배와 연관된다는 American Heart Association 연구다. "보고"라는 단어를 읽어라. 이건 자발적 보고 데이터셋이라 사람들이 보고서를 얼마나 자주 내는지를 재지, 사건이 얼마나 자주 일어나는지를 재지 않는다. 신호는 실제고 크기는 발생률 비가 아니다.
- **[Web Browser Engineering](https://browser.engineering/)** ([200 points](https://news.ycombinator.com/item?id=50537290), 29 comments) — Panchekha와 Harrelson의 책, 온라인 무료, 약 2천 줄의 Python으로 동작하는 브라우저를 만든다. 2021년에서 다시 떠오른 것이고, "브라우저는 실제로 어떻게 동작하는가"에 여전히 최고의 답이다.

## 순위가 움직인 것들

nginx HTTP/2 버그는 하룻밤에 690점을 더해 1,477점이 됐다. 어제의 공개가 이제 페이지에서 두 번째로 큰 스토리다. Deutsche Bank의 유출된 내부 사이트는 거의 두 배가 돼 409에서 768이 됐다. 30 넘게 움직인 나머지는 모두 완만한 상승이다.

| 스토리 | Last | Nov 19 |
| --- | --- | --- |
| [Nginx의 인증 없는 원격 코드 실행](https://www.wiz.io/blog/nginx-http2-rce-vulnerabilities) | 787 (11-18) | 1,477 (+690) |
| [Deutsche Bank 내부](https://www.inside-db.com/) | 409 (11-18) | 768 (+359) |
| [DNS 리졸버는 해적질과 싸울 잘못된 장소다](https://techstackups.com/articles/quad9-leaves-france-dns-blocking/) | 485 (11-18) | 676 (+191) |
| [AI가 All About Berlin을 죽이고 있다](https://nicolasbouliane.com/blog/death-by-ai) | 732 (11-18) | 801 (+69) |
| [러시아, 폴란드에서 대규모 사상자 공격 계획했다는 보도](https://www.yahoo.com/news/world/articles/russia-reportedly-planned-mass-casualty-090500574.html) | 316 (11-18) | 377 (+61) |
| [Java4Shell: Base64 처리 시 OpenJDK의 RCE](https://calif.io/java4shell/) | 1,143 (11-18) | 1,176 (+33) |
| [Google의 AI 답변이 검색 트래픽을 40% 줄여](https://revscope.co/blog/search-seo-geo-2026/) | 676 (11-18) | 709 (+33) |
| [Quad9의 프랑스 철수](https://blog.cloudflare.com/quad9-withdrawal-from-france/) | 870 (11-18) | 902 (+32) |
| [Energy-Based Reasoners: 385배 더 효율적인 추론](https://energy-based-reasoners.github.io/) | 284 (11-18) | 315 (+31) |

## 여전히 페이지에 남은 이야기

아래 이야기는 모두 지난 네 번의 라운드업에서 다룬 것이다. “Last” 열에는 그 이전 숫자가 나온 날짜를 적었다. 몇 개는 두세 밤 전에 마지막으로 다뤘고, 증가폭이 그 간극을 걸쳐 있기 때문이다.

| 스토리 | Last | Nov 19 |
| --- | --- | --- |
| [젠슨 황 사임](https://apnews.com/article/nvidia-megaspeed-china-singapore-huang-5403f152a601cf82ce939f1d24fffa0f) | 4,059 (11-18) | 4,059 (+0) |
| [카네기멜런, 컴퓨터과학 강의를 유튜브에 무료 공개](https://www.cs.cmu.edu/learn/) | 2,348 (11-18) | 2,365 (+17) |
| [스페이스X, 15차 비행 끝에 스타십 회수 성공](https://www.spacex.com/launches/starship-flight-15) | 1,758 (11-18) | 1,761 (+3) |
| [Nginx에서 인증 없는 원격 코드 실행](https://www.wiz.io/blog/nginx-http2-rce-vulnerabilities) | 787 (11-18) | 1,477 (+690) |
| [팀 피터스 별세](https://discuss.python.org/t/in-memoriam-tim-peters-1952-2026/110028) | 1,445 (11-18) | 1,446 (+1) |
| [GPT‑6.2 아스트라와 솔](https://openai.com/index/introducing-gpt-6-2-astra-sol/) | 1,332 (11-18) | 1,345 (+13) |
| [새 증거: 학교 휴대폰 금지가 서서히 시험 점수를 올리고 있다](https://www.nytimes.com/2026/11/17/upshot/school-phone-bans-study-scores.html) | 1,278 (11-18) | 1,300 (+22) |
| [Foldable Flight: 최고의 종이비행기](https://www.foldableflight.com) | 1,300 (11-18) | 1,300 (+0) |
| [AI가 생성한 코드는 모두 오픈소스여야 한다](https://jakub.jankiewicz.org/blog/ai-code-open-source/) | 1,281 (11-18) | 1,285 (+4) |
| [스마트홈 기기는 인터넷 없이도 작동해야 한다](https://docodethatmatters.com/home-automation-overnight-success/) | 1,205 (11-18) | 1,205 (+0) |
| [Java4Shell: Base64 처리 시 OpenJDK 원격 코드 실행](https://calif.io/java4shell/) | 1,143 (11-18) | 1,176 (+33) |
| [Lovable 앱들, 여권 정보와 20만 건 넘는 비공개 메시지 노출](https://www.crissyfield.de/research/lovable-en/) | 1,006 (11-18) | 1,007 (+1) |
| [AWS 에뮬레이터](https://github.com/aws/aws-emulator) | 994 (11-18) | 996 (+2) |
| [아마존 블랙프라이데이·사이버먼데이 “특가” 상당수, 할인 효과 없었다](http://groundworkcollaborative.org/news/amazons-decoy-deals-groundwork-investigation-reveals-nearly-1-in-3-black-friday-and-cyber-monday-deals-advertised-by-amazon-offered-no-savings-to-shoppers-nearly-1-in-10-w/) | 966 (11-18) | 968 (+2) |
| [.name 그랜드파더링](https://neil.fraser.name/news/2026/11/10/) | 937 (11-18) | 938 (+1) |
| [클로드 페이블 5.2와 미토스 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2) | 926 (11-18) | 926 (+0) |
| [거의 모든 것을 만드는 법](https://pub.cba.mit.edu/863.26/site/) | 916 (11-18) | 916 (+0) |
| [Rust 1.100](https://blog.rust-lang.org/2026/11/12/Rust-1.100.0/) | 904 (11-18) | 905 (+1) |
| [프랑스에서 철수하는 Quad9: 탄광 속 카나리아](https://blog.cloudflare.com/quad9-withdrawal-from-france/) | 870 (11-18) | 902 (+32) |
| [Qwen4-Max](https://qwen.ai/blog?id=qwen4-max) | 879 (11-18) | 882 (+3) |
| [JP모건체이스 기술 장애로 미국 은행들 온라인 뱅킹 지연](https://apnews.com/article/bank-outage-chase-wells-fargo-truist-50fee2693c22f597fa6ca51a97ef2cda) | 832 (11-18) | 836 (+4) |
| [코웨이 공기청정기를 리버스 엔지니어링해 클라우드 걷어내기](https://scottjg.com/posts/2026-11-11-reverse-engineering-my-coway-air-purifier-to-ditch-the-cloud/) | 804 (11-18) | 804 (+0) |
| [AI가 All About Berlin을 죽이고 있다](https://nicolasbouliane.com/blog/death-by-ai) | 732 (11-18) | 801 (+69) |
| [도이체방크 내부](https://www.inside-db.com/) | 409 (11-18) | 768 (+359) |
| [Show HN: 300달러짜리 자수기가 구독을 요구해서 직접 앱을 만들었다](https://github.com/simpsoka/zigzag) | 742 (11-18) | 742 (+0) |
| [윈도우 11, 어떤 코딩 에이전트와 개발 도구를 쓰는지 수집 중](https://xusheng.dev/posts/windows-coding-agent-telemetry/) | 726 (11-18) | 730 (+4) |
| [BugMeNot 서비스 종료](https://www.bugmenot.com/) | 721 (11-18) | 725 (+4) |
| [애플 서비스 장애](https://developer.apple.com/system-status/) | 713 (11-18) | 724 (+11) |
| [구글 AI 답변, 검색 트래픽 40% 줄여](https://revscope.co/blog/search-seo-geo-2026/) | 676 (11-18) | 709 (+33) |
| [Optimizely 해킹돼 Zoom·GitLab에 악성코드 배포](https://blog.report-uri.com/worlds-largest-brands-infected-with-malware-via-optimizely/) | 695 (11-18) | 706 (+11) |
| [미 국가안보 최고 기밀 통신망 다운](https://www.cnn.com/2026/11/17/politics/highly-classified-national-security-communications-network-goes-down) | 659 (11-18) | 669 (+10) |
| [엔비디아, 매출 1,040억 달러에도 싱가포르 매출 공시 중단](https://www.ft.com/content/dbde7a30-548c-4f9d-a4be-7898a0c24dcf) | 650 (11-18) | 664 (+14) |
| [마이크로소프트 365 장애가 호텔 투숙객 15명 염소가스 중독으로 이어져](https://www1.wdr.de/nrw/rheinland/rhein-erft-kreis/technischer-defekt-chlor-phantasialand-100.html) | 644 (11-18) | 644 (+0) |
| [옛날 폰이 있는데 비싼 파이를 왜 사?](https://so.long.thanks.fish/why-pi-when-i-have-an-old-phone/) | 634 (11-18) | 634 (+0) |
| [웹사이트가 조종하는 엘리먼트 피커로 uBlock Origin에서 유니버설 XSS](https://iter.ca/post/ubo-uxss/) | 616 (11-18) | 617 (+1) |
| [오작동한 화재경보기, Jane Street의 유일한 NYC 데이터센터 물에 잠길 뻔](https://michael.bacarella.com/2026/11/10/false-smoke-alarm-jane-street-datacenter/) | 588 (11-18) | 590 (+2) |
| [KDE: 다큐멘터리 (영상)](https://tube.kockatoo.org/w/fFinNHfanLT7aBEb2B8y4c) | 578 (11-17) | 581 (+3) |
| [애플, 로컬 AI 모델 실행을 쉽게 해줄 새 Mac 앱 준비 중](https://9to5mac.com/2026/11/10/apple-has-new-mac-app-coming-to-make-running-local-ai-models-easy/) | 578 (11-18) | 579 (+1) |
| [러트닉, 가족 사업과 겹치는 반도체 규정 약화 밀어붙여](https://www.nytimes.com/2026/11/15/us/politics/lutnick-pushed-to-weaken-chip-rules-that-overlap-with-his-family-business.html) | 546 (11-18) | 546 (+0) |
| [Frame – 31.5인치 컬러 전자종이 디스플레이](https://trmnl.com/blog/introducing-frame) | 541 (11-18) | 542 (+1) |

| [법원, DRAM 가격 담합 소송 기각 신청 기각](https://litnews.ai/articles/garciaguirre-samsung-sk-hynix-micron-dram-conspiracy-suit-survives-dismissal) | 538 (11-18) | 538 (+0) |
| [YC 스타트업 면접 봤더니 내 링크드인을 무단으로 썼더라](https://reddit.com/r/recruitinghell/comments/1xyr6ml/interviewed_at_a_yc_startup_spent_30_hours/) | 478 (11-18) | 510 (+32) |
| [Monkey Island: 13개 버전 전부 나란히 비교](https://monkeyisland.pages.dev/) | 509 (11-18) | 509 (+0) |
| [Gemini 4 Hydrogen과 Orchestrator](https://antigravity.google/blog/gemini-4-hydrogen-in-google-antigravity/) | 507 (11-18) | 509 (+2) |
| [IRS 로그인에 ID.me 약관 요구](https://consumerrights.wiki/w/ID.me_terms_required_for_IRS_sign-in) | 482 (11-18) | 507 (+25) |
| [맥북 프로 OLED의 PWM 문제](https://macanorak.com/the-macbook-pros-oled-pwm-problem-when-a-better-display-becomes-worse-to-use/) | 507 (11-18) | 507 (+0) |
| [종말의 날: 서기 2026년 11월 13일 금요일 (1960)](https://www.science.org/doi/10.1126/science.132.3436.1291) | 505 (11-18) | 505 (+0) |
| [조너선 블로우 – AI가 코딩을 해결했다면 왜 내 소프트웨어는 그대로인가? (영상)](https://www.youtube.com/watch?v=IRK8h67ol7Q) | 494 (11-17) | 495 (+1) |
| [claude.ai, Claude Code, platform.claude.com 오류 급증](https://status.claude.com/incidents/nn11wk485zfn) | 494 (11-18) | 494 (+0) |
| [엔비디아의 다음은?](https://steveblank.com/2026/11/15/whats-next-for-nvidia/) | 485 (11-18) | 485 (+0) |
| [서체로서의 필기](https://ductus.sorenblank.com) | 475 (11-18) | 477 (+2) |
| [Phrack 73](https://phrack.org/issues/73/introduction_md) | 459 (11-18) | 472 (+13) |
| [Protomaps: 지도 타일 셀프호스팅이 싸지고 쉬워졌다](https://bruceroettgers.eu/blog/protomaps/) | 467 (11-18) | 471 (+4) |
| [마이크로소프트의 ONNX Runtime이 GitHub에서 사라졌다](https://github.com/microsoft/onnxruntime) | 444 (11-18) | 464 (+20) |
| [소프트웨어 직함의 계보도](https://zwischenzugs.com/2026/11/03/a-family-tree-of-software-job-titles/) | 460 (11-18) | 461 (+1) |
| [소식통: 젠슨 황 전 엔비디아 CEO, 두 번째 직원과도 관계](https://www.reuters.com/technology/former-nvidia-ceo-huang-had-relationship-with-second-employee-sources-say-2026-11-12/) | 460 (11-18) | 460 (+0) |
| [Claude Code와 Codex가 3달러짜리 아두이노로 1994년식 지프 ECU를 리버스 엔지니어링 (영상)](https://www.youtube.com/watch?v=WPj3aQ-xxpI) | 455 (11-17) | 456 (+1) |
| [중국 프런티어 AI 모델, 수출통제 GPU의 지문을 지녀](https://unemploymentlabs.com/checkpoint-forensics) | 453 (11-18) | 454 (+1) |
| [마이크로소프트, 대규모 메일 장애 원인은 7월 수정이 넣은 결함이라고 밝혀](https://www.theregister.com/saas/2026/11/16/microsoft-blames-monster-email-outage-on-software-defect-introduced-in-july-fix/5310026) | 444 (11-18) | 445 (+1) |
| [Jiff 1.0: Rust용 날짜시간 라이브러리](https://burntsushi.net/jiff/) | 441 (11-18) | 442 (+1) |
| [셀 하나도 쓰지 않는 터미널 테두리](https://www.joshka.net/cell-borders/) | 426 (11-18) | 426 (+0) |
| [MAI Code 2와 Code 2 Flash](https://microsoft.ai/news/introducing-mai-code-2-and-mai-code-2-flash/) | 415 (11-18) | 421 (+6) |
| [350년 전, 올레 뢰머가 빛의 속도가 유한함을 발견하다](https://www.sciencenorway.no/culture-history-history-of-science/350-years-ago-this-man-discovered-that-light-has-a-finite-speed/2737969) | 402 (11-18) | 420 (+18) |
| [ggml v1.0.0](https://github.com/ggml-org/ggml/releases/tag/v1.0.0) | 420 (11-18) | 420 (+0) |
| [각 모델에 가장 좋은 하네스는?](https://runta.com/blog/introducing-frontierharness-eval-v1-1/) | 415 (11-18) | 418 (+3) |
| [w2rt6byl5nf1opmc-a.com은 무엇인가?](https://jack.cab/blog/siterate) | 411 (11-18) | 414 (+3) |
| [오래된 Bitly 링크들이 탈취되고 있다](https://ransomnews.com/burger-king-tweet-bitly-link-hijack-2026/) | 380 (11-18) | 380 (+0) |
| [jQuery 4.1.0](https://github.com/jquery/jquery/releases/tag/4.1.0) | 368 (11-18) | 377 (+9) |
| [러시아, 우크라이나에 뒤집어씌울 폴란드 대규모 사상자 공격을 계획했다는 보도](https://www.yahoo.com/news/world/articles/russia-reportedly-planned-mass-casualty-090500574.html) | 316 (11-18) | 377 (+61) |
| [Solid 2.0](https://www.solidjs.com/blog/solid-2-0-the-long-hold/) | 369 (11-18) | 376 (+7) |
| [EFF, ALPR 조회에 영장 요구하도록 항소법원에 청구](https://www.eff.org/deeplinks/2026/11/were-asking-appeals-court-require-warrant-alpr-searches) | 361 (11-18) | 361 (+0) |
| [앱이 더 필요한 게 아니라 오픈소스가 더 좋아져야 한다](https://jordankrueger.com/blog/better-open-source-not-more-apps/) | 353 (11-18) | 354 (+1) |
| [화학은 사실 기하학이다](https://chillphysicsenjoyer.substack.com/p/chemistry-is-actually-geometry) | 347 (11-18) | 348 (+1) |
| [OpenCode Browse](https://opencode.ai/product/browse) | 331 (11-18) | 333 (+2) |
| [태양광 발전 단지가 있는 밭에서 양 방목](https://news.cornell.edu/stories/2026/10/sheep-grazing-solar-fields-offers-farmers-economic-ecological-gains) | 329 (11-18) | 329 (+0) |
| [Lean에서 검증했으니 정리가 맞다는 주장을 어떻게 읽을 것인가](https://xenaproject.wordpress.com/2026/11/12/and-the-proof-is-checked-in-lean/) | 325 (11-18) | 326 (+1) |
| [프로젝트 제로, 신고 후 90일 뒤 취약점 공개](https://projectzero.google/2026/11/disclosure-policy.html) | 323 (11-18) | 323 (+0) |
| [워즈는 컴퓨터를 만들기 전에 어떻게 애플 1 베이직을 썼나? (2021)](https://retrocomputing.stackexchange.com/questions/17957) | 321 (11-18) | 323 (+2) |
| [하버드 연구진: AI 코딩 에이전트가 병목을 코드 리뷰로 옮겼다](https://complexdiscovery.com/harvard-researchers-find-ai-coding-agents-shifted-the-bottleneck-to-code-review/) | 311 (11-18) | 322 (+11) |
| [죽은 노트북을 되살리는 씽크패드 전원 버튼 비밀 코드 (2007)](https://masnick.com/posts/the-secret-thinkpad-powerbutton-code-to-bring-dead-laptops-back-to-life/) | 322 (11-18) | 322 (+0) |

| [Codeberg.org 접속 불가](https://social.anoxinon.de/@codebergstatus/117636437840688845) | 291 (11-18) | 316 (+25) |
| [까마귀는 우리보다 빨리 결정한다](https://www.nytimes.com/2026/11/15/science/birdbrain-crows-birds-research-decision.html) | 316 (11-18) | 316 (+0) |
| [Energy-Based Reasoners: 추론 효율 385배](https://energy-based-reasoners.github.io/) | 284 (11-18) | 315 (+31) |
| [Show HN: Yogurt – Granola의 무료·프라이빗 오픈소스 대안](https://github.com/FrigadeHQ/yogurt) | 306 (11-18) | 307 (+1) |
| [엘니뇨가 어떻게 작동하는지 짧은 해설 (영상)](https://www.youtube.com/watch?v=7_JF3etiAv8) | 301 (11-17) | 301 (+0) |
| [Claude 화이트보드, Claude 시트, Claude 데이터](https://claude.com/resources/articles/sheets-whiteboards-data) | 299 (11-18) | 299 (+0) |
| [Claude Code 팀은 검증을 어떻게 생각하는가](https://claude.dev/blog/how-the-claude-code-team-thinks-about-verification/) | 290 (11-18) | 295 (+5) |
| [Rust가 나를 개발자로서 바꿨다](https://blog.startifact.com/posts/how-rust-changed-me/) | 290 (11-18) | 291 (+1) |
| [엔비디아는 젠슨 황 사태 전부터 위태로웠다](https://www.wired.com/story/nvidia-was-already-in-trouble-before-the-jensen-huang-mess/) | 289 (11-18) | 289 (+0) |
| [아주 멋진 옛날식 게임 프로그래밍 핵 (2013)](https://blog.moertel.com/posts/2013-12-14-great-old-timey-game-programming-hack.html) | 289 (11-18) | 289 (+0) |
| [3dfx 카드의 색 출력은 왜 그렇게 바랬나?](https://twitter.com/id_aa_carmack/status/2122478083319992513) | 285 (11-18) | 285 (+0) |
| [상시 감시가 아이들과 부모에게 하는 일](https://www.theatlantic.com/magazine/2026/12/location-tracking-apps-parental-surveillance/689031/) | 282 (11-18) | 282 (+0) |
| [보안 신호를 더 명확히 한 PyPI의 새 프로젝트 페이지 공개](https://blog.pypi.org/posts/2026-11-06-ui-updates-complete/) | 280 (11-18) | 280 (+0) |
| [Gemini 4 Carbon은 왜 이렇게 오래 걸리나?](https://kernel.dev/blog/why-is-gemini-4-carbon-taking-so-long/) | 259 (11-18) | 274 (+15) |
| [우리 소프트웨어 엔지니어링 면접이 조금 바뀝니다](https://blog.janestreet.com/software-engineering-interviews-are-changing-a-little/) | 268 (11-18) | 269 (+1) |
| [아카이브 팀, 애플 지원 커뮤니티 아카이빙 중](https://wiki.archiveteam.org/index.php/Apple_Discussions) | 256 (11-18) | 266 (+10) |
| [AT&T “컴캐스트의 ‘광케이블 기반 Wi-Fi’는 케이블”, 허위광고 소송](https://arstechnica.com/tech-policy/2026/11/comcast-falsely-advertises-cable-internet-as-fiber-powered-att-lawsuit-says/) | 259 (11-18) | 262 (+3) |
| [유나이티드항공, 광범위한 시스템 장애 겪어](https://www.cnn.com/2026/11/16/us/united-airlines-outage) | 256 (11-18) | 257 (+1) |
| [토르 프로젝트, 계속되는 DDoS 공격 속 긴급 DoS 방어 패치](https://forum.torproject.org/t/security-release-0-4-9-17/22454) | 253 (11-18) | 254 (+1) |
| [일부 아폴로 임무는 왜 유탄발사기를 실었나? (2019)](https://space.stackexchange.com/questions/37775) | 254 (11-18) | 254 (+0) |
| [앱이 전체 디스크 접근이나 시스템 및 앱 보호 재정의를 요구한다면](https://support.apple.com/en-us/149699) | 248 (11-18) | 251 (+3) |
| [터보 파스칼보다 작은 것들 (2011)](https://prog21.dadgum.com/116.html) | 247 (11-18) | 247 (+0) |
| [현대 LLM의 위치 임베딩 이해하기](https://magazine.sebastianraschka.com/p/understanding-positional-embeddings) | 246 (11-18) | 246 (+0) |
| [더 좋고 더 효율적인 RAG를 위한 빠른 검색](https://machinelearning.apple.com/research/faster-retrieval) | 242 (11-18) | 242 (+0) |
| [Atuin Threads: 모든 기기의 에이전트 세션을 한곳에](https://blog.atuin.sh/threads-agent-sessions/) | 242 (11-18) | 242 (+0) |
| [Emacs가 내 브라우저다](https://joshblais.com/blog/emacs-as-my-browser/) | 239 (11-18) | 240 (+1) |
| [완벽한 심시티](https://www.jeffquast.com/post/a-perfect-simcity/) | 210 (11-18) | 235 (+25) |
| [시드로 생성한 지형을 쓰는 WebGL 비행 시뮬레이터](https://baron.by.dai.studio/) | 232 (11-18) | 232 (+0) |
| [생성형 AI는 비영어 텍스트에 더 많은 에너지를 쓴다](https://news.umich.edu/generative-ai-uses-more-energy-on-non-english-text/) | 231 (11-18) | 231 (+0) |
| [VisualBasic.World: 1997년부터 2012년까지 Planet Source Code 프로그램 갤러리](https://visualbasic.world/) | 224 (11-18) | 228 (+4) |
| [스쿼클](https://linebender.org/wiki/curves/squircle/) | 228 (11-18) | 228 (+0) |
| [연구진, 스마트워치만으로 전신 움직임 추적](https://news.cornell.edu/stories/2026/11/researchers-track-whole-body-movement-just-smartwatch) | 227 (11-18) | 227 (+0) |
| [내가 좋아하는 현대 NES 게임들](https://jordi.inversethought.com/blog/25-of-my-favourite-modern-nes-games/) | 221 (11-18) | 223 (+2) |
| [Salon 저널리즘 30년 보존하기](https://blog.archive.org/2026/11/12/preserving-30-years-of-salon-journalism/) | 219 (11-18) | 219 (+0) |
| [웹은 충분하고도 남는다](https://ftrain.com/aboard-the-web-is-more-than-enough) | 216 (11-18) | 217 (+1) |
| [Antigravity의 /teamwork로 과학과 공학 발전시키기](https://research.google/blog/advancing-science-engineering-with-antigravitys-teamwork-feature/) | 214 (11-18) | 215 (+1) |
| [Show HN: Alloy CSS – 자바스크립트 없이 작동하는 다이얼로그·메뉴·탭](https://alloyhtml.com/example.html) | 207 (11-18) | 210 (+3) |

## 스레드

첫 번째 실마리는 산수가 도착했다는 것이다. 앤스로픽은 주당 83달러에 813억 4,000만 달러를 조달했고 주식은 111.50달러에 개장했다 — 배정받은 쪽에 34%를 얹어준 셈이고, 뜨거운 수요예측이란 원래 그렇게 생겼다 — 그러고는 30분 안에 13% 빠졌고 그 사이 다우는 800포인트 떨어졌다. 데뷔에 관한 모든 헤드라인은 산술적으로 맞았고, 서로 다른 회사를 설명하고 있었다. 로이터가 센 주식 수로는 2조 달러, 야후가 센 수로는 1조 5,000억 달러, 131억 주라는 내재 주식 수가 실제로 거래된 가격으로는 1조 2,700억 달러. 정직하게 요약하면 이렇다. 역사상 최대 IPO는 사모시장이 기대하라고 들었던 가격보다 낮게 가격이 정해졌고, 첫 체결에서 튀었다가 점심 전에 그 대부분을 토해냈다. 그건 붕괴가 아니다. AI 트레이드가 매일 공개시장이 가격을 매길 수 있는 숫자를 처음으로 내놓아야 했던 순간이고, 이야기가 아직 진행 중인데 그 숫자는 내려갔다.

두 번째 실마리는 이제 약한 고리가 발견 파이프라인이 아니라 공개 파이프라인이라는 것이다. Ruby2ßhell은 Ruby 2.4.0부터 `upcase`에 들어 있던 1바이트 오버플로다. OpenJDK Base64 버그는 9월에 제목에 오버플로가 그대로 적힌 풀 리퀘스트가 있었고, 정확성 수정으로 닫혔다. nginx의 정수 언더플로는 수정본과 함께 일주일 동안 공개 저장소에 놓여 있었고 보안 공지는 없었다. 근본적인 버그 셋, 각자 가진 정보로 합리적인 일을 한 프로세스 셋, 그리고 그 정보는 틀렸다 — 이 버그를 찾는 사람들이 점점 더, 시킨 대로만 보고하는 에이전트이기 때문이다. 한편 구글과 마이크로소프트는 이번 주 나란히 값싼 사이버 모델을 내놓으며 방어용이라고 포장했는데, 그건 사실이면서 동시에 두 회사가 올해 한 최고의 세일즈 피치이기도 하다.

세 번째 실마리는 유지보수이고, 그것은 우연이 아니라 하나의 주제처럼 첫 화면을 관통했다. “돈 안 되는 일에 진심인 똑똑한 사람들”이 그 에세이라면, 증거는 더 작은 기사들이다. 차고 문 오프너의 광고 서빙 앱을 62달러짜리 오픈소스 보드와 크론 잡으로 갈아치운 남자, 법원 명령은 싸우는 것보다 발부하는 게 싸다는 이유로 프랑스에서 떠나는 Quad9과 DNS가 멈출 때서야 그걸 알게 되는 병원들, 581포인트를 받은 KDE 30년 다큐멘터리 — 회사 없이 사람들이 해낸 일에 관한 이야기, 애플이 지우기 전에 20년치 애플 지원 포럼을 긁어오는 아카이브 팀. 짓는 값은 이제 싸다. 계속 돌리는 값은 싸지 않고, 이번 주 발표 중 그 두 번째 이야기에 관한 것은 하나도 없었다.
