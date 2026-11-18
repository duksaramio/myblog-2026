---
title: "Hacker News 프런트 페이지 라운드업 — 2026년 11월 18일"
pubDate: 2026-11-18
description: "AI가 같은 날 nginx의 10년 된 버그와 자바 Base64 디코더의 메모리 손상 결함을 찾아냈고, 마이크로소프트의 패키지 공급망이 분해됐으며, 구글 자체의 무작위 실험은 AI 개요가 퍼블리셔 클릭의 40%를 가져간다는 걸 확인했다."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
lang: "ko"
---

오늘 랭킹 목록 전체를 훑었더니 151개 스토리가 200점을 넘겼고, 그중 26개가 새로 올라온 것이다. 나머지는 지난 네 밤 사이에 여기서 다룬 것들이고, 갱신된 점수는 맨 아래 표에 있다.

핵심 기반 소프트웨어에서 메모리 안전 버그 두 개가 24시간 안에 터졌다. 둘 다 AI 하네스로 찾았고, 둘 다 수년째 프로덕션 코드에 박혀 있었다. 하나는 2015년부터 있었다. 다른 하나는 자바의 Base64 디코더에 살고 있다 — 이건 문장으로 쓸 수 있어서는 안 되는 말이다. 그런데 오늘 진짜 타격은 신뢰 계층에서 나왔다. CDN, 패키지 레지스트리, DNS 리졸버, 도메인 등록기관. 누가 코드를 잘못 짜서 생긴 일이 아니다.

## Java4Shell: JDK Base64 디코더의 메모리 손상 — 1,143 points

**1,143 points** · 316 comments · [calif.io](https://calif.io/java4shell/) · [HN discussion](https://news.ycombinator.com/item?id=50538240)

CVE-2026-114938, CVSS 4.0 기준 9.2. 자격 증명이 없는 원격 공격자가 OpenJDK의 힙 메모리를 덮어쓰고, 하트블리드처럼 되읽고, 원격 코드 실행까지 갈 수 있다. 방아쇠는 `A` 64개 뒤에 `=` 하나다. OpenJDK 17에서는 `A` 128개 뒤에 `=`다.

메커니즘이 충분히 구체적이라 믿을 만하다. 어떤 보안 공지든 통과해야 하는 첫 번째 시험이다. OpenJDK는 지원되는 x86-64 CPU에서 Base64를 더 빨리 디코딩하려고 AVX-512 VBMI 명령어를 쓴다. 버그는 끝단 문자를 처리하는, 손으로 짠 어셈블리에 있다. 65자 입력에 대해 OpenJDK는 50바이트 결과 배열을 할당한다. 앞 64자를 디코딩한 뒤 루틴이 남은 `=`를 잘못 처리해서 음수 출력 길이를 계산하고, 그 잘못된 길이가 64바이트 전체 쓰기가 된다 — 배열 끝에서 62바이트를 넘어선다. 자바는 결국 입력을 거부한다. 그때는 옆자리가 이미 오염된 뒤다.

영향 범위는 넓고, 단서 조항도 실재한다. OpenJDK 17.0.6 이상, AVX-512 VBMI가 있는 x86-64 — 인텔 아이스레이크부터 그래나이트래피즈까지, AMD 젠 4 이상. ARM64는 해당 없다. Calif는 기본 설정 상태의 Keycloak, Jira, Confluence, JFrog Artifactory, Jenkins, PingFederate에 대해 인증 전 RCE를, Kafka, Solr, Elasticsearch, Gerrit, Spinnaker에 대해 인증 후 RCE를 시연했다. 적대적 서버에 TLS 연결을 여는 자바 클라이언트도 samczsun의 클라이언트 측 체인으로 뚫린다는 것도 보였다. "우리는 서비스를 노출하지 않는다"가 완화책이 아니라는 뜻이다. 보편적 익스플로잇은 없다. 배포 환경마다 자기 체인이 필요하다.

이 사건이 대충 읽고 넘길 게 아닌 이유는 공개 경제학이다. Calif의 Quang Luong은 한 시간 만에 찾았고 세 시간 만에 동작하는 익스플로잇을 만들었다. 총 토큰 비용은 200달러 미만. Calif는 이 결과를 "켄타우로스 해커"라고 부르는데, 절반은 마케팅이다 — AI 보조 연구라는 브랜드를 파는 중이니까. 그래도 산수 자체가 논거다. 실력 있는 연구자의 한 시간 더하기 200달러어치 추론이, 은행과 항공과 통신이 돌리는 런타임에서 치명적 인증 전 RCE를 뽑아냈다. 공격적 연구의 가격대가 새로 정해진 것이고, 방어하는 쪽은 아직 적응하지 못했다.

댓글 스레드가 보안 공지보다 유용하다. Semgrep은 다섯 조건에 걸리는 무료 탐지 스크립트를 공개했다 — HotSpot 계열 VM, x86-64 호스트, 17.0.6 이상, 패치된 집합에 없음, AVX-512 존재 — 대규모 자산을 분류하는 실용적 방법이다. 한 댓글러는 벤더가 뭘 내놓기 전에 `-XX:UseAVX=2`를 우회법으로 짚었다. 그리고 힙 그루밍 절은 대부분의 분석글이 숨기는 걸 인정한다. 공격이 RTT와 지터에 민감해서, Calif는 네트워크와 싸우는 대신 타깃과 같은 리전에 VM을 빌렸다. 익스플로잇은 진짜고, 신뢰도 수치는 당신이 가까이 있다는 전제다.

패치해라. OpenJDK 공지와 오라클 CPU 모두 11월 17일 오후 1시(PT)에 나왔다. 패치를 못 한다면 `-XX:-UseBASE64Intrinsics`가 가속 경로를 끄고, `-XX:UseAVX=2`가 AVX-512를 끈다 — x86-64에서만. ARM JVM은 그 플래그를 주면 뜨지도 않는다.

## Quad9, 프랑스에서 철수하다 — 870 points

**870 points** · 418 comments · [blog.cloudflare.com](https://blog.cloudflare.com/quad9-withdrawal-from-france/) · [HN discussion](https://news.ycombinator.com/item?id=50538994)

11월 24일, 9.9.9.9 뒤에 있는 스위스 비영리단체 Quad9이 프랑스에서 오는 DNS 질의에 응답하지 않는다. 비용 때문이 아니다. 파리 법원이 beIN Sports를 대신해 불법 스포츠 스트리밍 도메인 목록을 차단하라는 명령을 거부했다는 이유로 벌금을 물렸고, 비슷한 사건이 20건가량 계류 중이라, 감당할 수 있는 유일한 선택지가 떠나는 것이다.

Cloudflare의 글은 이걸 탄광 속 카나리아라고 부르고는, 같은 일이 자기에게 닥치면 어떻게 할지 말하지 않는다. 댓글러들이 알아챘다. 스레드에서 가장 많은 추천을 받은 비판은 프랑스를 향한 게 아니다. Cloudflare가 문단 네 개를 할애해 철수할 수도 있다고 암시하면서도, 어떤 조건에서 그럴지는 끝내 말하지 않는다는 것이다. 벨기에 법원은 이미 2027년 1월 초까지 공용 리졸버를 통한 차단을 시작하지 않으면 Cloudflare, 구글, 시스코에 제재를 가하라는 명령을 내렸다. Cloudflare는 이런 걸 해본 적이 없다. 하든지 안 하든지 둘 중 하나인데, 블로그 글은 두 가능성을 다 열어두도록 쓰였다.

사람들이 걱정해야 할 부분은 운영상의 세부고, Cloudflare도 그걸 노골적으로 적는다. Quad9의 프랑스 사용자에는 정부 기관, 교육 기관, 병원, 공공 유틸리티가 들어 있고, Quad9은 그들에게 알릴 방법이 없다. 메일 보낼 고객 명단이 없다. 리졸버가 응답을 멈추면 그 네트워크들은 아무 설명도, 어디를 봐야 할지 알려주는 오류 메시지도 없이 그냥 죽는다. 시스코도 비슷한 압력에 프랑스, 포르투갈, 벨기에에서 OpenDNS를 철수했다. 패턴은 이렇다. DNS 차단 명령은 내리기 싸고, 리졸버의 실질적 방어 수단은 떠나는 것 하나뿐이며, 그 결과 저작권 분쟁이 공공 인프라의 장애로 바뀐다.

Quad9의 CTO John Todd가 스레드에 나타나, 자기는 IETF 127에 있고 권리자 업계 밖에서 프랑스의 이번 결과를 지지하는 사람을 아직 만나지 못했다고 말한다. 그는 또 독자들에게 정책 입안자에게 보낼, 출처가 붙은 장문 논거를 달라고 했고 — 실제로 하나 나왔다. 모든 주장을 판결문이나 1차 문서로 되짚는 485점짜리 동반 글이다. 프런트 페이지 스레드를 이보다 잘 쓰는 경우는 드물다. 그 글 자체의 결론, 즉 공용 DNS 리졸버는 잘못된 병목이라는 것 — 피해가 우회할 방법 없는 사람들에게 몰리기 때문이다 — 은 새로운 논거가 아니다. 그냥 맞는 말이고, 지금까지 두 번 졌다.

## nginx 인증 없는 RCE 두 건, 하나는 11년 된 것 — 787 points

**787 points** · 329 comments · [wiz.io](https://www.wiz.io/blog/nginx-http2-rce-vulnerabilities) · [HN discussion](https://news.ycombinator.com/item?id=50547374)

CVE-2026-123633과 CVE-2026-123007. 둘 다 CVSS 4.0 9.2 치명, 둘 다 인증 없는 RCE, 둘 다 HTTP/2가 켜져 있어야 한다. CVE-2026-123007의 정수 언더플로는 2015년 nginx 1.9.5까지 거슬러 올라간다. use-after-free는 대략 6년 됐다. Wiz, Ikotas Labs, Metnir, Rapid7, Xint가 독립적으로 찾았다. "아직 아무도 못 찾았을 것"이라고 생각하는 방식을 재조정해야 하는 대목이다.

Wiz는 평범한 정적 파일을 서빙하는 nginx에서 코드 실행을 시연했다. 백엔드 애플리케이션도, 서드파티 모듈도 없이. 이게 중요한 이유는 리버스 프록시 버그에 대한 반사적 방어가 "뒤에 있는 앱은 멀쩡하다"이기 때문인데, 여기서는 프록시 자체가 타깃이다. nginx는 2억 2,500만 개 이상의 웹사이트 앞에 서 있다. HTTP/2는 기본으로 켜지지 않고 서버의 약 12%가 쓴다. 그래도 인터넷 규모에서는 엄청난 수다. HTTP/2를 끄면 완전히 완화된다. 공개 일정을 따져봐야 하는 이유이기도 하다.

날짜를 보자. Wiz는 10월 21일 CVE-2026-123633을 신고했다. F5는 11월 10일 검토용 패치를 넘겼다. 그 사이 수정은 조율된 릴리스보다 일주일 먼저 오픈소스 저장소에 들어갔고, 한 댓글러에 따르면 커밋 메시지에 신고자로 Xint.io가 적혀 있었다. 그 일주일 동안 nginx 커밋을 훑으며 익스플로잇 가능한 버그픽스를 찾는 사람은, 취약점과 이게 심각하다는 강한 힌트를 동시에 가졌다. 반면 방어하는 쪽은 아무것도 없었다. 아무 공지도 안 나갔으니까. F5의 릴리스와 공개는 11월 18일에야 나왔다. "지금 HTTP/2를 끄라"는 공개 경고가 정보 유출을 감수할 가치가 있었다는 주장이 딱히 틀린 말은 아니다.

Wiz는 왜 지금 이런 일이 벌어지는지 솔직하게 말한다. 이유는 Java4Shell과 같다. 그들의 Atlas AI 하네스가 두 버그를 다 찾았고, 영향 검증에는 Gemini 4 Carbon과 ChatGPT 5.6 Sol이 쓰였다. "복잡성은 더 이상 발견이나 익스플로잇의 장벽으로 믿을 수 없다"는 그들의 문장이 이번 주의 논지다. 기반 소프트웨어 세 개 — PHP, nginx, JDK — 에서 2주 안에 메모리 안전 버그 세 건. 전부 수년간 사람의 리뷰를 버텨온 코드에서 나왔다.

## AI가 All About Berlin을 죽이고 있다 — 732 points

**732 points** · 664 comments · [nicolasbouliane.com](https://nicolasbouliane.com/blog/death-by-ai) · [HN discussion](https://news.ycombinator.com/item?id=50542705)

Nicolas Bouliane은 2017년부터 All About Berlin을 운영해왔다. 이민자들을 위한 독일 관료제 안내서다. 관청 문서를 읽을 수가 없어서 누군가 대신 읽어준 결과물로 존재하는 종류의 사이트다. 베를린 이민청은 *자기 자신에 관한* 그의 데이터를 쓴다. 트래픽은 7년간 늘었고, 그다음 구글 AI 개요에 약 75%를 잃었다. 지금 그가 받는 건 광고 아래 결과 하나, 그의 글을 학습한 AI 답변, 그리고 링크 하나다.

분명히 짚어둘 것. 이 글은 몇 달 된 글이고 재게시로 프런트 페이지에 올라왔다. Bouliane 본인이 스레드에서 그렇게 말한다. 그 후로 상황은 더 나빠졌지만 아직 사이트로 먹고살 수는 있고, 내년이 풀타임으로 운영하는 마지막 해가 될지 모른다고 한다. 글이 다시 떠오른 이유는 트래픽 그래프가 아니다. 구글이 지난주 AI 답변이 검색 결과를 완전히 대체할 것이고 거기에 광고도 들어간다고 발표했기 때문이다. 추세가 목적지로 선언된 것이다.

오늘 페이지에서 이 일이 안쪽에서 어떻게 느껴지는지에 대해 가장 유용한 건 스레드다. 그리고 그건 사실 돈 이야기가 아니다. Bouliane의 말은 트래픽 손실은 견딜 만하지만 목소리를 잃는 건 견딜 수 없다는 것이다. "내 작업이 그냥 AI가 만든 답변에 섞여 들어가면 나는 목소리와 독자를 잃는다. 공들여 고른 내 단어들이 의미를 잃는다. 아무도 내 손을 잡아 흔들고 맥주를 사주지 않는다." 한 댓글러가 이걸 감상 이상으로 만들어주는 구조적 비판을 붙인다. 검색엔진은 따지고 보면 늘 법적으로 의심스러운 사업이었지만, 거래가 상호적이라 용인됐다. 구글이 스니펫을 보여주고, 구글이 독자를 보내준다. AI 개요는 그 계약을 깨면서 스크래핑은 유지한다. LLM은 저작권 세탁소다. 텍스트를 글쓴이에게서 끊어낼 만큼 변형하고, 그 변형이 곧 상품이다.

스레드의 실용적 조언은 신경 쓰는 건 전부 유료화하라는 것이다. 솔직하고, 동시에 웹이 어디로 가는지에 대한 설명이기도 하다. 돈 내는 사람을 위해 쓴 소수의 구독 사이트, 요약되도록 쓰인 거대한 AI 생성층, 그리고 중간은 없다. All About Berlin이 사는 곳이 바로 그 중간이다.

## AI 답변이 퍼블리셔 클릭을 40% 깎았다 — 676 points

**676 points** · 525 comments · [revscope.co](https://revscope.co/blog/search-seo-geo-2026/) · [HN discussion](https://news.ycombinator.com/item?id=50540178)

앞 절의 트래픽 그래프 뒤에 있는 숫자이고, 드디어 실험 설계가 붙었다. RevScope의 글은 Saharsh Agarwal과 Ananya Sen의 무작위 필드 실험을 다룬다. 미국 데스크톱 사용자 일부에게서 AI 개요를 숨기고, 처리군과 비처리군을 비교했다. 개요를 보여주면 외부 웹사이트로 가는 클릭이 약 39.8% 줄어든다.

이건 트래픽 대시보드에서 나온 상관관계가 아니라 무작위 실험 결과이고, SEO 업계가 관측 데이터로 보고해온 추정치와 거의 정확히 맞아떨어진다. SparkToro는 제로클릭 검색을 2024년 60%에서 2026년 초 68%로 잡았고, Ahrefs는 개요가 뜰 때 상위 랭킹 페이지의 CTR 하락을 58%로 측정했다. 8개월 전의 34.5%에서 오른 수치다. 계측된 실험과 지저분한 관측 수치가 1포인트 안에서 일치하면 논쟁은 끝난 거다.

스레드의 솔직함이 숫자보다 값지다. 최상위 댓글은 제품이 더 나아졌다는 걸 인정한다. 오늘 SNL에 누가 나오냐고 묻는 일은 예전엔 클릭베이트 열 페이지와 스크롤을 뜻했는데, 지금은 답이 그냥 거기 있다. 여러 댓글러가 자기 검색 트래픽을 40% 넘게 줄였다고 말한다. 검색이 아니라 답을 원했기 때문이다. 논쟁은 사용자가 이득을 보느냐가 아니다. 답변 계층이 그 아래 계층 없이 존재할 수 있느냐다. 그리고 스레드 안에 그 메커니즘을 가진 사람은 없다.

약세론은 본문보다 댓글에서 더 잘 진술된다. AI 답변이 학습하는 페이지가 더는 쓰이지 않게 되면 답변은 나빠지고, 그 공백은 답변을 조종할 목적으로 쓰인 페이지로 채워진다. 구글의 인센티브에 대한 예측이 아니다. 한 세대 앞서 검색 결과에 이미 일어난 일이고, 같은 배우들이 같은 수를 다시 둘 것이다.

## 엔비디아 싱가포르 매출 항목 — 650 points

**650 points** · 295 comments · [ft.com](https://www.ft.com/content/dbde7a30-548c-4f9d-a4be-7898a0c24dcf) · [HN discussion](https://news.ycombinator.com/item?id=50534631)

FT 기사는 페이월에 막혀 열리지 않았다. 그러니 이건 기사가 아니라 스레드의 버전으로 읽어야 한다. 요지는 이렇다. 엔비디아가 총매출이 $104bn을 찍은 바로 그 시점에 싱가포르 매출을 따로 공개하는 걸 그만뒀고, 그 타이밍이 메가스피드 제재 사건, 젠슨 황의 사임과 겹친다.

기사가 했어야 할 일을 댓글 두 개가 대신하는데, 방향은 정반대다. 첫 번째는 $104bn이 엔비디아 싱가포르 법인의 외부 매출이고, 그 법인을 거쳐 라우팅된 주문이 전부 포함된다는 얘기다. 이건 정상이다. 최종 고객은 엔비디아에서 직접 사지 않는다. 위스트론, 폭스콘, 에이수스, 레노버 같은 OEM·ODM을 통해 산다. 하이퍼스케일러가 서버를 주문하면 그중 하나가 주문을 기록하고, 지역은 랙이 아니라 청구 주체를 따라간다. 그렇게 읽으면 이 숫자는 회계적 산물이고, "싱가포르에서 $104bn"이라는 프레이밍은 범주 오류다.

두 번째 댓글이야말로 답이 필요한 쪽이다. 누군가 실제 10-Q를 파헤쳤다. 2025년 7월 보고서는 지역 매출을 "고객 청구지 기준(Customer Billing Location)"으로 표기했고, 싱가포르는 한 분기에 $10bn으로 따로 찍혀 있었다. 2025년 7월 이후 표는 "고객 본사 소재지 기준(Customer Headquarters Location)"으로 바뀌었다. 매출은 1달러도 움직이지 않은 채 특정 관할구역이 공시에서 사라지게 만드는 바로 그런 종류의 변경이고, 하필 수출통제 조사와 같은 시기에 일어났다. 사실관계가 어찌 됐든, 해당 지역이 법적으로 흥미로워지는 순간에 지역 공시 기준을 바꾼 회사라면 지금 받는 의심을 자초한 셈이다.

## ID.me 약관은 세금 신고서에 딸려 온다 — 482 points

**482 points** · 251 comments · [consumerrights.wiki](https://consumerrights.wiki/w/ID.me_terms_required_for_IRS_sign-in) · [HN discussion](https://news.ycombinator.com/item?id=50540437)

위키 문서는 건조하다. 그게 핵심이다. ID.me로 IRS에 로그인할 때 당신이 무엇에 동의하는지를 문서화한 것뿐이다. 30일 안에 거부하지 않으면 분쟁은 판사나 배심원이 아니라 구속력 있는 중재로 간다. 개인정보 정책에는 ID.me가 "마케팅 목적으로 정보를 사용할 수 있다"고 되어 있고, 매각이나 합병 시 정보를 이전할 수 있다고도 한다. 예외 조항이 있다. 주정부나 연방정부 검증에서 나온 신원 데이터는 동의나 다른 명시된 예외 없이는 ID.me Shop 마케팅에 쓰지 않는다는 것. 그런데 그 예외가 존재한다는 사실 자체가 발견이다. 나머지는 기본값이 그렇다는 뜻이니까.

ID.me는 10월 28일 TreasuryDirect의 기존 로그인을 대체했다. 정부가 직접 운영하는 Login.gov도 IRS 로그인에 쓸 수 있고, IRS Direct Pay는 로그인 없이 계좌 이체로 납부된다. 그러니 "의무"라는 프레이밍은 틀렸다. 대안은 있고, 그냥 덜 홍보될 뿐이다.

스레드에는 예상은 했지만 지어내기는 불가능한 실패 사례가 나온다. ID.me 가입에는 스마트폰이 필요하다. 한 댓글러는 스마트폰을 쓰지 않는 TreasuryDirect 채권 보유자를 아는데, 이제 현금화를 못 하게 생겼다고 한다. 또 다른 사람은 ID.me를 아예 피하려고 전환 전에 페널티를 물고 채권을 전부 팔았다. 백악관은 2년 안에 모든 기관이 Login.gov를 제공해야 한다고 밝혔다. 손댈 수 없는 저축성 채권을 그만큼 오래 들고 있어야 한다는 뜻이다.

## 30시간 무급 노동, 그다음엔 그의 링크드인을 썼다 — 478 points

**478 points** · 125 comments · [reddit.com](https://reddit.com/r/recruitinghell/comments/1xyr6ml/interviewed_at_a_yc_startup_spent_30_hours/) · [HN discussion](https://news.ycombinator.com/item?id=50542135)

한 지원자가 YC 투자 채용 스타트업의 전 과정을 통과했다. 10시간짜리 과제, 그다음 샌프란시스코에서 이틀간 하루 10시간 대면. 총 30시간, 무급, 실제 업무. 진짜 후보자에게 연락하고, 통화하고, 회사의 실제 고객에게 그를 세일즈했다. 개인 링크드인을 그쪽 플랫폼에 연결하는 게 사전 조건이었다.

3주간 소식이 없다가, 자기 계정이 본인 모르게 연결 요청과 메시지를 보내고 있는 걸 발견했다. 메시지에는 그를 스타트업 직원으로 소개했다. 답장은 실제 직원에게 라우팅됐다. 그의 이름, 그의 네트워크, 그들의 리드.

문제는 두 개이고 스레드는 계속 이 둘을 뭉갠다. 첫째, 직접적인 고객 가치를 만들어내는 30시간의 무급 노동은 유럽 대부분에서 노동법 위반이고, 다른 어디서든 노골적인 착취다. 댓글러들은 영국이 무급 체험 근무를 허용하는 건 고용주가 직접 이득을 보지 않을 때뿐이라고 지적하는데, 여기서 벌어진 일이 정확히 그 반대다. 둘째, "링크드인 연결하기"는 자산으로 수집되고 있고, 지원자가 더 이상 쓸모없어진 뒤 회사가 OAuth 권한으로 무엇을 할 수 있는지에 대한 규범은 아무도 쓰지 않았다.

헤드라인에서 YC라는 연관성이 일을 하고 있고, 그건 공정하다. YC는 자기 회사들을 위한 규칙을 공표하고, 그들이 어떻게 채용해야 하는지에 대한 견해가 있다. 배치 단위 표준이 막아야 할 바로 그런 일이고, 지원자가 할 수 있는 유일한 대응은 레딧 글 하나였다.

## Phrack 73 — 459 points

**459 points** · 72 comments · [phrack.org](https://phrack.org/issues/73/introduction_md) · [HN discussion](https://news.ycombinator.com/item?id=50535992)

이 호는 11월 17일 나왔고, 2025년 8월 이후 처음이며, 분량이 어마어마하다. Halvar Flake 프로파일. vDSO를 통한 도커 탈출. "Sheaves 시대"의 UAF 익스플로잇. 스키아를 경유한 크로미움 렌더러 샌드박스 탈출 — 오늘 최상위 기사인 Java4Shell 공개를 한 바로 그 연구자 Quang Luong의 글이다. 루아로 힙 펑슈이를 연구한 글. PhrackCTF에서 나온 WinFsp 0-day 두 개. Mystique라는 x86 메타모픽 컴파일러.

이 호를 향수 박물관 유물이 아니라 하나의 문서로 만드는 건, 세 편의 글이 오늘 프런트페이지의 모두가 논쟁하는 그 주제를 다룬다는 점이다. "LLM 시대의 커널 익스플로잇 개발 여정." "AI를 신뢰한다는 것에 대한 성찰: LLM 내부의 바이러스." "실전 머신러닝에 대한 백도어 공격." 씬은 AI에 의해 해체된 게 아니라 흡수했다. 셸코드를 쓰는 사람들이 에이전트가 그것에 무엇을 하는지 분석하는 글도 쓰고 있다.

스레드는 Phrack이 한 번도 깔끔하게 답한 적 없는 질문을 던진다. 어떤 호에 실제로 동작하는 도커 탈출이 실렸다면, 그건 먼저 책임 있게 공개된 것인가? 때로는 그렇다. 항상은 아니고, 정책에 따라서도 아니다. 그 모호함이 Phrack의 존속을 떠받치고 있고, 스레드의 모두가 그걸 안다.

## 마이크로소프트 저장소가 어두워졌다. 이유는 장애보다 나쁘다 — 444 points

**444 points** · 96 comments · [github.com/microsoft/onnxruntime](https://github.com/microsoft/onnxruntime) · [HN discussion](https://news.ycombinator.com/item?id=50539610)

11월 17일 22:20 UTC쯤, `github.com/microsoft/onnxruntime`이 404를 뱉기 시작했다. 공지도, 리다이렉트도, 아카이브 배너도 없었다. 관련 마이크로소프트 저장소 일곱 개 이상이 함께 사라졌고, 이슈 이력과 보안 논의도 같이 끌려갔다. `pip install onnxruntime`과 NuGet 패키지는 여전히 동작하고 여전히 서명돼 있다. `onnxruntime.ai` 문서도 살아 있다. 소스에서 빌드하거나, GitHub 릴리스 자산을 `curl`로 받거나, git 서브모듈을 쓰는 CI라면 설명도 없이 깨진 것이다.

The Register에 따르면 이유는 마이크로소프트의 공식 파이썬 `agent-framework` 패키지가 탈취당한 것이다. PyPI의 1.26.1과 1.26.2 버전이 정보 탈취기를 설치한다. 1.26.1은 안전한 릴리스로 되돌려졌고, 그다음 1.26.2가 마이크로소프트 공식 PyPI 퍼블리셔 계정을 통해 올라왔다. 연구자들이 첫 번째를 신고했을 때 자격증명이 아직 살아 있었다는 뜻이다. 이 패키지는 월 약 200,000회 다운로드된다.

악성코드는 특정한 방식으로 고약하다. 임포트할 필요조차 없다. 패키지가 설치된 파이썬 인터프리터만 있으면 Azure, Git, Docker, Hugging Face용 환경변수와 자격증명 파일을 모아 base64로 JSON 덩어리에 인코딩한 뒤 하드코딩된 `webhook.site` 주소로 전송한다. 계속 동작하고 정상으로 보이도록 진짜 1.26.0을 끌어온다. 지속성은 없다. 인터프리터 시작 시 한 번만 실행된다. 이건 탐지에 더 나쁘지, 좋지 않다. 나중에 찾아낼 임플란트가 없으니까.

마이크로소프트의 성명은 "악성 콘텐츠를 조사하는 동안 일부 저장소를 비공개로 전환했다"는 것이다. 마이크로소프트도 연구자들도 ONNX 런타임 차단과 패키지 침해를 연결하지 않았다. 예방적 소탕일 수도 있고, 2026년 6월 악성 코드를 탐지한 뒤 저장소 약 70개를 내린 것과 같은 조치일 수도 있다. 하지만 대응의 형태가 말해주는 것을 보라. 그 순간 마이크로소프트가 가진 유일한 레버는 자기 코드를 닿을 수 없게 만드는 것이었다. 공개 저장소에 의존하던 모든 다운스트림 빌드가 세 단계 건너의 침해 비용을 치렀다.

## 마이크로소프트, 모델 일곱 개 내놓고 가성비라고 부른다 — 415 points

**415 points** · 167 comments · [microsoft.ai](https://microsoft.ai/news/introducing-mai-code-2-and-mai-code-2-flash/) · [HN discussion](https://news.ycombinator.com/item?id=50535885) · [Ignite lineup, 331 points](https://news.ycombinator.com/item?id=50548021)

Ignite 라인업은 모델 일곱 개이고, 발표문은 거의 모든 주장이 절대치가 아니라 누군가의 모델 대비 비율이 되도록 구성돼 있다. MAI Cyber 2 Flash는 CyberGym-E2E에서 작업당 비용 2% 미만으로 GPT-6 Astra의 품질을 이긴다. MAI Code 2는 GPT-6.1 Sol의 98%에 가격은 약 40%, Opus 5.5의 96%에 5%. MAI Code 2 Flash는 GPT-6 Luna를 65%, Haiku 5.5를 20%에 맞선다. MAI Image 2.7은 GPT Image 2.6 Sunburst 가격의 5분의 1로 Artificial Analysis 이미지 편집 1위. MAI Realtime 1은 오디오 분당 $0.01부터 GPT-Realtime 2.1을 이긴다.

각주 구조가 많은 일을 하고 있고, 대체로 마이크로소프트에 유리하다. 이건 드문 일이다. Code 2의 수치는 DeepSWE 1.1, Terminal Bench 2.1, SWE-Atlas, FrontierCode v1.1에 걸쳐 평균낸 것이고, 글은 이 모델들이 "기초 과학 연구나 아주 긴 호흡의 에이전트 작업처럼 더 어려운 문제에는 아직 명시적으로 튜닝되지 않았다"고 대놓고 밝힌다. 벤더가 자기 벤치마크의 경계를 자진해서 말한 것이다. 이건 인정해 주자.

스레드의 실시간 보고가 표보다 유용하다. 한 댓글러는 오늘 코파일럿이 MAI Code 2를 반값에 제시해서 갈아탔더니 WSL 안의 까다로운 파이썬 빌드 문제와 Azure Bicep 배포 오류 더미를 해결했다고 한다. "클로드 오퍼스와 차이를 못 느꼈다." 두 번째 사람도 같은 말을 한다. 일화 두 개일 뿐이지만, 리더보드가 아니라 실제 업무에 대한 일화이고, "오퍼스의 96%를 5% 가격에"라는 주장과 맞아떨어진다. 앤트로픽과 오픈AI에 대한 진짜 위협은 이것이다. 마이크로소프트가 최고 모델을 가졌다는 게 아니라, 2군이 이제 가격 차이가 결정을 내리게 만들 만큼 가까워졌다는 것. 한 댓글러가 명백한 결론을 붙인다. 이게 유지된다면, 프런티어 멀티플로 치르는 앤트로픽 IPO는 나쁜 매수다.

## 독일은행, 1500만 개 파일 — 409 points

**409 points** · 145 comments · [inside-db.com](https://www.inside-db.com/) · [HN discussion](https://news.ycombinator.com/item?id=50547620)

Himal, FT, Malaysiakini, Dawn이 함께 진행한 공동 취재다. 기반은 1500만 개가 넘는 파일 유출 — 대부분 Outlook 메일함 내보내기 파일 — 이고, 은행이 가장 읽히지 않기를 바랄 영역을 통째로 덮는다. 금융범죄 대응, 제재 모니터링, 내부 감사, 그리고 위험한 고객을 계속 끌고 갈지 결정하는 위원회들. 공개된 내용 중에는 조 로우(Jho Low)와 연결된 최소 24건, 총 1억 7298만 유로 규모의 거래, 투자자와 고객과 거래상대방의 경계를 흐린 카타르 왕족과의 거래, 그리고 지멘스에 밀어붙인 세무 모델 — 독일 재정에 연 최대 3000만 유로 부담 — 이 들어 있다.

스레드에서 가장 좋은 댓글은 기자 중 한 사람이 올린 기술 스택 이야기다. 컨소시엄은 코퍼스를 OpenAleph로 공유했다. ElasticSearch 기반에 FollowTheMoney 스키마를 얹은 도구이고, 그 계보는 프리드리히 린덴베르크까지 거슬러 올라간다. 1500만 건은 뉴스룸이 '읽는' 숫자가 아니다. '쿼리하는' 숫자다. 이 사건이 2016년이 아니라 2026년에 나온 이유는 도구가 따라잡았기 때문이다.

방법론적 반론은 정당하고, 아직 답이 없다. 컨소시엄은 앞으로 몇 달간 저널리즘적으로 계속 검토하겠다면서 원본 데이터는 공개하지 않겠다고 한다. 어떤 댓글러는 선택적 누락이야말로 거짓말을 한 톨도 하지 않고 서사를 완전히 통제하는 수단이라고 지적한다. 반론도 맞다 — 날것의 메일함 덤프에는 관계없는 사람들의 개인정보가 들어 있다. 둘 다 사실이다. 이 사건의 모양은 컨소시엄이 어느 쪽에 무게를 두느냐로 결정될 것이다.

## 350년 전 뢰머가 빛의 속도를 측정하다 — 402 points

**402 points** · 135 comments · [sciencenorway.no](https://www.sciencenorway.no/culture-history-history-of-science/350-years-ago-this-man-discovered-that-light-has-a-finite-speed/2737969) · [HN discussion](https://news.ycombinator.com/item?id=50536813)

1676년 올레 뢰머는 목성 위성 이오의 식(蝕) 시각이 예측에서 어긋나고, 그 어긋남의 폭이 지구가 궤도 어디에 있느냐에 따라 달라진다는 걸 알아챘다. 그리고 그 어긋남을 빛이 거리를 건너는 데 걸리는 시간으로 읽었다. 값은 크게 틀렸다. 천문단위가 틀렸기 때문이다. 그런데도 추론 자체는 맞았다. 재밌는 건 그 부분이다. 자기가 검증할 수 없는 스케일 오차를 안고 내린 결론이 옳았다.

페이지 자체는 빈약하고 본문은 로드되지 않았다. 값은 스레드에 있다. 한 댓글러는 이 측정을 소재로 만든 만화를 링크하고, 다른 이는 코펜하겐 근교 크로프달 박물관 — 뢰머의 천문대가 있던 곳 — 을, 또 다른 이는 더 잘 설명된 영상을 건다. 누군가는 인류가 빛의 속도가 유한하다는 걸 언제 처음 알았냐고 물으면 가장 흔한 답이 1950년이라고 적어놨다.

## AI 코딩 에이전트가 병목을 리뷰로 옮겼다 — 311 points

**311 points** · 421 comments · [complexdiscovery.com](https://complexdiscovery.com/harvard-researchers-find-ai-coding-agents-shifted-the-bottleneck-to-code-review/) · [HN discussion](https://news.ycombinator.com/item?id=50538303)

하버드 박사과정생 피오나 첸과 제임스 스트래튼의 워킹페이퍼. 718개 기업을 다룬다. AI 코딩 에이전트를 도입한 기업의 엔지니어들은 코드를 약 30% 더 썼다. 끝난 일은 측정 가능한 수준으로 늘지 않았다. 코드가 리뷰를 통과하는 데 걸리는 시간은 49% 늘었다.

단서는 제대로 달자. 이건 동료심사 완료 표시가 없는 취업시장 논문이고, 체크포인트 하나만 잰다. 그래도 방향이 중요하고, 그 방향은 미묘하지 않다. 도구는 코드를 '생산하는' 비용을 지웠고 '받아들이는' 비용은 건드리지 않았다. 그래서 큐가 밀렸다. 에이전트를 사고 "코드 라인 수"나 "열린 PR 수"로 성과를 잰 조직은 승리를 확인하고는, 출시하는 소프트웨어 양은 똑같았다.

댓글들은 현장 보고이고, 서로 다른 방향에서 같은 곳으로 수렴한다. 경력 25년의 한 리뷰어는 이제 에이전트가 적어도 자기만큼은 코드를 잘 쓴다고, 그리고 이슈를 찾는 일에서는 서로를 자기보다 잘 리뷰한다고 말한다. 다만 이슈 찾기는 리뷰의 일부일 뿐이라고 덧붙인다. 또 한 명은 자기 업무 전체가 과잉 설계된 머지 리퀘스트를 리뷰하는 것으로 바뀌었다고 한다. AI 해법은 돌아가긴 하는데 과하게 엔지니어링되어 온다. 마감에 쫓기는 인간이라면 단순한 쪽을 골랐을 자리다. 세 번째: "하루 종일 하는 일이 AI가 쓴 코드 리뷰예요. 내 거든 팀원 거든. 진짜 재미없어요."

## Codeberg 도메인이 등록기관에 의해 정지됐다 — 291 points

**291 points** · 294 comments · [social.anoxinon.de](https://social.anoxinon.de/@codebergstatus/117636437840688845) · [HN discussion](https://news.ycombinator.com/item?id=50544261)

하루 중 한동안 codeberg.org는 아무것도 돌려주지 않았다. 502도 아니고 인증서 오류도 아니었다. 도메인 자체가 도달 불가능했다. Codeberg의 NameSilo 계정에서 도메인이 사라졌기 때문이다. NameSilo는 나중에 도메인이 정지됐다고 확인하고 사안을 자사 어뷰즈 팀으로 넘겼다. DNS 전파가 끝나면서 복구됐고, 그 시점에도 Codeberg는 어뷰즈 부서로부터 공식 답변을 받지 못한 상태였다.

불편한 대목은 Codeberg가 독일 비영리 단체인데 미국 등록기관을 골랐다는 점이다. 포지 전체에 대한 단일 장애점이고, 그걸 쥔 회사는 이유를 설명하기 전에 도메인을 정지시킬 수 있으며, 유일한 복구 경로는 SLA도 없는 어뷰즈 큐다. 댓글러들은 국가 주권 논점을 양방향으로 편다. 관할권의 힘이 실제로 아픈 곳이 등록기관이고, "우리는 그런 짓 안 한다"는 통제 수단이 아니다.

## Energy-Based Reasoners, 추론 385배 저렴하다고 주장 — 284 points

**284 points** · 44 comments · [energy-based-reasoners.github.io](https://energy-based-reasoners.github.io/) · [HN discussion](https://news.ycombinator.com/item?id=50543989)

에너지 기반 모델로 추론 효율을 385배 높였다는 연구 사이트. 얀 르쿤이 Logical Intelligence를 통해 계속 주장해 온 그 아키텍처다. 메커니즘만 보면 그럴듯하다. EBM은 토큰을 샘플링하는 대신 저에너지 해를 향해 반복 수렴하니까, 연산을 시퀀스 길이가 아니라 난이도에 비례해 쓸 수 있다. 문제는 EBM을 10년째 프로덕션에서 못 쓰게 만든 그 단서들이다.

스레드에서 읽을 만한 댓글은 두 개고, 둘 다 유용하게 김이 빠진다. 하나는 이 방법이 스도쿠에서 실제로 뭘 하는지 뜯어본다. 단서 위반 확률을 0으로 만들고, 셀을 에너지 순으로 정렬하고, 최악의 충돌부터 고친다. 그건 단계만 더 붙은 제약 솔버다. 댓글러도 정중하게 그렇게 말한다. 다른 하나는 EBM에 1년을 쓴 사람이다. "검증기로는 인상적인데, 학습시키는 게 미칠 듯이 어렵습니다. 아주 좁은 영역에만 맞습니다." 385배는 추론 숫자다. 청구서는 학습에서 나오고, 사이트는 그 청구서가 아닌 숫자를 앞세운다.

## Gemini 4 Carbon은 왜 느린가 — 259 points

**259 points** · 135 comments · [kernel.dev](https://kernel.dev/blog/why-is-gemini-4-carbon-taking-so-long/) · [HN discussion](https://news.ycombinator.com/item?id=50541790)

구글의 프런티어 모델이 왜 토큰 처리량도 나쁘고 토큰 효율도 나쁜지 분석한 글. 스레드의 합의된 설명은 버그가 아니라 구조적이라는 것이다. 구글은 품질에 최적화할 연산력이 있고, 서빙 효율은 Hydrogen이라는 별도 모델로 처리한다. Carbon은 품질 쪽 승부수이고, 그 선택의 청구서는 기다리는 모든 사용자가 낸다.

흥미로운 반대 관찰은 실제 업무에 쓰는 사람에게서 나온다. Carbon은 느리지만 "Claude의 불도저 같은 태도" 이후에 "가벼운 손길로 문제를 풀면서도 합리적인 아키텍처로 밀고 나간다"고, 그리고 슬금슬금 늘어나는 스코프를 잘 통합한다고 한다. 모델이 생각하는 걸 지켜볼 때 느림과 신중함은 분리하기 어렵고, 이 사용자는 아키텍처 작업에는 그 거래가 값어치 있고 반복 작업에는 아니라고 보고한다. 오래 쓴 또 다른 구글 사용자는 자꾸 Argon으로 돌아가게 된다고 하면서, 보안 목적에서는 Argon의 트리거가 훨씬 적다고 적는다. 모델 행동과 거부 반응에 관한 그 한 문장은 댓글 스레드가 감당할 수 있는 것보다 훨씬 많은 조사를 받을 자격이 있다.

## 그 밖의 새 글, 섹션 아래

- **[Solid 2.0](https://www.solidjs.com/blog/solid-2-0-the-long-hold/)** ([369 points](https://news.ycombinator.com/item?id=50536387), 115 comments) — 1.0 이후 5년. 헤드라인 기능은 비동기 그래프다. 연산이 프로미스를 반환할 수 있고 반응성이 그걸 이해한다. Solid가 마침내 서버/클라이언트 경계 문제에 답한 것이고, 그 문제를 Remix가 한 번 건드렸던 것이다. 한 댓글러는 비용을 실측한다. 자기 카운터 컴포넌트가 1.9.18에서 brotli 기준 4.8 KiB였는데 2.0.0에서는 20.3 KiB가 됐다. 다른 이는 "에이전트가 작성하도록 만들었다"는 섹션이 실은 더 나은 진단일 뿐이라고 지적한다. 즉 인간용 기능과 에이전트용 기능이 결국 같은 기능이었다는 뜻이다.

- **[jQuery 4.1.0](https://github.com/jquery/jquery/releases/tag/4.1.0)** ([368 points](https://news.ycombinator.com/item?id=50537156), 197 comments) — 아직도 나온다. 스레드는 애도 자리이고, 정이 담겨 있다. 10년간 jQuery가 필요 없었던 사람들이 와서 셀렉터-그다음-체이닝 패턴이 프런트엔드에서 언어와 함께 가는 느낌을 준 마지막 API 설계였다고 말한다. 과소평가된 손실은 이벤트 모델이다. DOM 노드가 아닌 어떤 객체든 이벤트를 발생시킬 수 있다는 것, 지금 나온 대부분의 상태 라이브러리보다 로직을 분리하는 더 깔끔한 방법이라는 점이다.

- **[러시아가 폴란드에서 대량 사상자 공격을 계획했다는 보도](https://www.yahoo.com/news/world/articles/russia-reportedly-planned-mass-casualty-090500574.html)** ([316 points](https://news.ycombinator.com/item?id=50547344), 130 comments) — 우크라이나에 뒤집어씌우려는 설계라는 보도. 댓글러들은 위장 깃발 논리의 개연성에 세게 반박한다. 폴란드의 우크라이나 지지도를 높이고 폴란드를 전쟁에 끌어들일 수도 있는 공격은 러시아가 바랄 만한 일로 보기 어렵다는 것이다. 여러 명이 이 사안을 다룬 영어 매체가 거의 없다고 지적하는데, 그 사실 자체를 기사만큼 무겁게 따져야 한다.

- **[Archive Team이 Apple 지원 커뮤니티를 아카이빙 중](https://wiki.archiveteam.org/index.php/Apple_Discussions)** ([256 points](https://news.ycombinator.com/item?id=50539747), 104 comments) — 애플 토론 포럼이 11월 20일 영구 폐쇄되고, Archive Team이 긁어모으고 있다. 스레드의 정서는 감상적이지 않다. 그 커뮤니티는 애플이 답변 대신 가리킬 수 있는 장소였고, 최상위 답변은 늘 틀렸고, 쓸 만한 내용은 "나도 그래요" 700개 밑에 파묻힌 낯선 사람의 해결법이었다. 그래도 아카이빙할 값어치는 있다. "대부분 쓸모없음"과 "2014년에 그 기기를 어떻게 고쳤는지에 대한 유일한 기록"은 모순이 아니다.

- **[VisualBasic.World](https://visualbasic.world/)** ([224 points](https://news.ycombinator.com/item?id=50511874), 99 comments) — 1997년부터 2012년까지 Planet Source Code에 올라온 제출물 갤러리, 보존판. 댓글은 자기 십 대 시절 업로드를 찾아낸 사람들이다. 향수보다 세게 꽂히는 관찰이 하나 있다. 이런 아카이브는 사람들이 다듬지 않고, 이상하고, 명백히 미완성인 작업을 올리던 시기를 기록한다. 공유하려면 공개하는 수밖에 없었기 때문이다. AI 보정은 모든 걸 '무난한 중간값'으로 밀어붙이고, 그 시대의 등가물이 지금 살 만한 자리는 딱히 없다.

- **[완벽한 SimCity](https://www.jeffquast.com/post/a-perfect-simcity/)** ([210 points](https://news.ycombinator.com/item?id=50504373), 118 comments) — 최적으로 운영되는 SimCity가 실제로 어떤 모습인지 분석한 글. 결론은 철도만 깔린 도시, 그리고 정교하게 조율된 아사 사망률이다. 댓글들은 뻔하고 약간 으스스한 함의를 짚는다. 최적화기는 퇴화한 해를 찾아내고, 실제 사람이 사는 실제 도시는 그렇게 최적화할 수 없다. 주차장 사실도 있다. SimCity 디자이너가 실제 도시를 측정했더니 식료품점이 면적상 대부분 주차장이었고, 그게 게임의 토지이용 모델을 다시 짰다.

- **[Alloy CSS](https://alloyhtml.com/example.html)** ([207 points](https://news.ycombinator.com/item?id=50532385), 37 comments) — 자바스크립트 없이 동작하는 다이얼로그, 메뉴, 탭. 최신 CSS로 만들었다. 스레드의 세일즈 포인트는 보안 논거다. JS가 필요 없는 사이트는 스크립트를 비활성화한 `CSP`를 붙일 수 있고, 그러면 한 부류의 공격을 완화하는 게 아니라 아예 닫는다. 반론은 실무적이다. 클래스 이름이 일반적이라 기존 스타일시트와 충돌하고, 도입하려면 필드를 새로 깔거나 전부 접두사를 붙여야 한다.

## 순위가 움직인 것들

어젯밤 기사 여덟 개는 한 번 더 언급할 값어치가 있다. 델타가 곧 논거니까.

**GPT-6.2 Astra와 Sol**은 781점에서 1,332점으로 갔다. 하루에 551점 상승, 페이지에서 가장 큰 하루 변동이다. 끌어올린 건 벤치마크가 아니라 가격이다. 비슷한 점수대에서 GPT-6 Astra보다 20% 싸다는 건 "우린 하루 종일 에이전트 돌릴 돈이 없다"는 모든 반론을 스프레드시트 문제로 바꾼다.

**NSA의 기밀 네트워크**는 278 → 659. 어제는 사이버 공격 증거가 없는 장애 기사였다. 오늘은 국가안보 묶음에서 가장 큰 기사이고, 스레드는 "무슨 일이 있었나"에서 "이런 일이 얼마나 자주 나는 거냐"로 옮겨갔다. 한 댓글러의 문장이 유일하게 정직한 요약이다. NSA 내부망은 1년에 한 번쯤 먹통이 되고, 이번에 달라진 건 사건의 양이 아니라 보도의 양이다.

**학교 휴대폰 금지**는 1,047 → 1,278로 올랐고, 스레드는 덜 기술적이 된 게 아니라 더 기술적이 됐다. 이제 최다 추천 댓글이 방법론 반론이다. 사전 추세의 발산, 주 경계를 넘는 성향점수 매칭, 이중차분 위에 얹은 부가가치 모델 — 틀릴 수 있는 지점이 세 개고, 같은 환경에서 비슷한 연구가 유의미한 효과를 못 찾았다. 0.01 표준편차는 실재하고 작다. 그게 0.01이고 인과적인지가 여전히 논쟁 중이다.

**애플의 서비스**는 472 → 713. 상태 페이지가 계속 빨간불일 때 벌어지는 일이다. **Optimizely**는 45점을 더해 695점이 됐고, 스레드 최고의 문장은 공격이 아니라 아키텍처에 관한 것이다. 태그 매니저는 마케팅이 엔지니어링 없이 스크립트를 넣으라고 존재했고, 그 결과 뉴스 기사 하나에 10 MB의 자바스크립트가 실렸다. 피해 사이트들이 이미 신뢰하던 도메인에서 말이다. **카네기멜런의 CS Learn**은 2,348점에 도달했고 비판은 한 가지로 좁혀졌다. 강의실 가운데 마이크 하나로 찍은 강의에서 교수가 걸어 나가 1분 가까이 사라진다. **최고의 하네스 질문**은 283 → 415, **Claude Code 검증 글**은 220 → 290. 같은 이야기의 양 끝이다. 하네스는 모델만큼 중요하고, 이기는 팀은 출력을 검증할 방법을 만든 팀이다.

## 여전히 페이지에 남은 이야기

아래 모든 이야기는 지난 네 차례 라운드업에서 다뤘습니다. 숫자는 어젯밤 게시물과 오늘 스크레이프를 비교한 값입니다.

| 스토리 | 11월 17일 | 11월 18일 |
| --- | --- | --- |
| [젠슨 황 사임](https://apnews.com/article/nvidia-megaspeed-china-singapore-huang-5403f152a601cf82ce939f1d24fffa0f) | 4,058 | 4,059 (+1) |
| [카네기멜런, 컴퓨터 과학 강의를 유튜브에 무료 공개](https://www.cs.cmu.edu/learn/) | 2,238 | 2,348 (+110) |
| [스타십 15차 비행 마무리하며 포획에 성공한 스페이스X](https://www.spacex.com/launches/starship-flight-15) | 1,752 | 1,758 (+6) |
| [FAA, 전국 이륙 중단 발령…4시간 30분 뒤 해제](https://www.nbcnews.com/news/us-news/faa-orders-nationwide-ground-stop-departing-flights-reasons-safety-rcna609247) | 1,654 | 1,654 (0) |
| [팀 피터스 별세](https://discuss.python.org/t/in-memoriam-tim-peters-1952-2026/110028) | 1,444 | 1,445 (+1) |
| [GPT-6.2 아스트라와 솔](https://openai.com/index/introducing-gpt-6-2-astra-sol/) | 781 | 1,332 (+551) |
| [폴더블 플라이트: 최고의 종이비행기](https://www.foldableflight.com) | 1,299 | 1,300 (+1) |
| [AI가 생성한 코드는 모두 오픈 소스여야 한다](https://jakub.jankiewicz.org/blog/ai-code-open-source/) | 1,278 | 1,281 (+3) |
| [새 증거, 학교 휴대폰 금지가 시험 성적을 점차 끌어올린다는 사실 보여줘](https://www.nytimes.com/2026/11/17/upshot/school-phone-bans-study-scores.html) | 1,047 | 1,278 (+231) |
| [스마트홈 기기는 인터넷 없이도 작동해야 한다](https://docodethatmatters.com/home-automation-overnight-success/) | 1,205 | 1,205 (0) |
| [마이크로소프트 365 서비스 저하](https://status.cloud.microsoft/) | 1,174 | 1,176 (+2) |
| [엔비디아, AI 스타트업에 투자해 자사 GPU 사게 하며 인위적 공급 부족 만들었다는 의혹](https://www.techpowerup.com/354814/nvidia-allegedly-engineered-scarcity-by-funding-ai-startups-to-buy-its-gpus) | 1,113 | 1,113 (0) |
| [Lovable 앱, 여권 정보와 20만 건 넘는 비공개 메시지 노출](https://www.crissyfield.de/research/lovable-en/) | 1,004 | 1,006 (+2) |
| [AWS 에뮬레이터](https://github.com/aws/aws-emulator) | 993 | 994 (+1) |
| [아마존 블랙프라이데이·사이버먼데이 "특가" 상당수, 실제로는 절감 효과 없어](http://groundworkcollaborative.org/news/amazons-decoy-deals-groundwork-investigation-reveals-nearly-1-in-3-black-friday-and-cyber-monday-deals-advertised-by-amazon-offered-no-savings-to-shoppers-nearly-1-in-10-w/) | 948 | 966 (+18) |
| [.name 기존 등록자 보호](https://neil.fraser.name/news/2026/11/10/) | 937 | 937 (0) |
| [클로드 페이블 5.2와 미토스 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2) | 926 | 926 (0) |
| [거의 모든 것을 만드는 방법](https://pub.cba.mit.edu/863.26/site/) | 903 | 916 (+13) |
| [러스트 1.100](https://blog.rust-lang.org/2026/11/12/Rust-1.100.0/) | 904 | 904 (0) |
| [Qwen4-Max](https://qwen.ai/blog?id=qwen4-max) | 872 | 879 (+7) |
| [JP모건 체이스 기술 장애로 미국 은행권 온라인 뱅킹 지연](https://apnews.com/article/bank-outage-chase-wells-fargo-truist-50fee2693c22f597fa6ca51a97ef2cda) | 818 | 832 (+14) |
| [클라우드 걷어내려고 코웨이 공기청정기 리버스 엔지니어링하기](https://scottjg.com/posts/2026-11-11-reverse-engineering-my-coway-air-purifier-to-ditch-the-cloud/) | 801 | 804 (+3) |
| [Show HN: 300달러짜리 자수기가 구독을 요구해서 직접 앱을 만들었다](https://github.com/simpsoka/zigzag) | 742 | 742 (0) |
| [미국 우정청, 공식 ZIP 코드 경계 폴리곤 제공 시작](https://postalpro.usps.com/zcb) | 739 | 739 (0) |
| [아마존, Sonnet 4.6을 Strands Decider로 교체해 수백만 달러 절감](https://strandsagents.com/blog/amazon-saves-millions-replacing-sonnet-with-strands-decider/) | 733 | 736 (+3) |
| [윈도우 11, 어떤 코딩 에이전트와 개발 도구를 쓰는지 수집 중](https://xusheng.dev/posts/windows-coding-agent-telemetry/) | 699 | 726 (+27) |
| [소크라테스식 튜터](https://github.com/janestreet/agent_skills/blob/master/socratic-tutor/SKILL.md) | 721 | 722 (+1) |
| [BugMeNot 서비스 종료](https://www.bugmenot.com/) | 705 | 721 (+16) |
| [애플 서비스 장애](https://developer.apple.com/system-status/) | 472 | 713 (+241) |
| [Optimizely 해킹돼 Zoom·GitLab에 악성코드 배포](https://blog.report-uri.com/worlds-largest-brands-infected-with-malware-via-optimizely/) | 650 | 695 (+45) |
| [AlphaProof 코드](https://deepmind.google/blog/introducing-alphaproof-code/) | 679 | 679 (0) |
| [미국 최고 기밀 국가안보 통신망 다운](https://www.cnn.com/2026/11/17/politics/highly-classified-national-security-communications-network-goes-down) | 278 | 659 (+381) |
| [마이크로소프트 365 장애로 호텔 투숙객 15명 염소가스 중독](https://www1.wdr.de/nrw/rheinland/rhein-erft-kreis/technischer-defekt-chlor-phantasialand-100.html) | 642 | 644 (+2) |
| [낡은 폰이 있는데 비싼 라즈베리파이를 왜 사나?](https://so.long.thanks.fish/why-pi-when-i-have-an-old-phone/) | 633 | 634 (+1) |
| [웹사이트가 조작하는 요소 선택기로 인한 uBlock Origin의 범용 XSS](https://iter.ca/post/ubo-uxss/) | 610 | 616 (+6) |
| [오작동한 화재경보기, 제인 스트리트의 뉴욕 유일 데이터센터 침수시킬 뻔해](https://michael.bacarella.com/2026/11/10/false-smoke-alarm-jane-street-datacenter/) | 588 | 588 (0) |
| [KDE: 다큐멘터리 [영상]](https://tube.kockatoo.org/w/fFinNHfanLT7aBEb2B8y4c) | 578 | 580 (+2) |
| [애플, 로컬 AI 모델 실행을 쉽게 해줄 새 맥 앱 준비 중](https://9to5mac.com/2026/11/10/apple-has-new-mac-app-coming-to-make-running-local-ai-models-easy/) | 578 | 578 (0) |
| [제미나이 4 하이드로젠](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/) | 573 | 573 (0) |
| [제미나이 디시전스 API](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/) | 569 | 570 (+1) |
| [스키온 부활, 미국에서 경트럭 판매 예정](https://www.theautopian.com/scion-is-back-and-its-going-to-sell-a-freaking-kei-truck-in-america/) | 563 | 563 (0) |
| [러트닉, 가족 사업과 겹치는 반도체 규정 완화 밀어붙여](https://www.nytimes.com/2026/11/15/us/politics/lutnick-pushed-to-weaken-chip-rules-that-overlap-with-his-family-business.html) | 542 | 546 (+4) |
| [프레임 – 31.5인치 컬러 전자종이 디스플레이](https://trmnl.com/blog/introducing-frame) | 520 | 541 (+21) |
| [법원, DRAM 가격 담합 소송 기각 신청 기각](https://litnews.ai/articles/garciaguirre-samsung-sk-hynix-micron-dram-conspiracy-suit-survives-dismissal) | 535 | 538 (+3) |
| [원숭이 섬: 13개 버전 전부 나란히 비교](https://monkeyisland.pages.dev/) | 508 | 509 (+1) |
| [맥북 프로 OLED의 PWM 문제](https://macanorak.com/the-macbook-pros-oled-pwm-problem-when-a-better-display-becomes-worse-to-use/) | 505 | 507 (+2) |
| [제미나이 4 하이드로젠과 오케스트레이터](https://antigravity.google/blog/gemini-4-hydrogen-in-google-antigravity/) | 507 | 507 (0) |
| [종말의 날: 서기 2026년 11월 13일 금요일 (1960)](https://www.science.org/doi/10.1126/science.132.3436.1291) | 504 | 505 (+1) |
| [Show HN: 이번 주 어느 지역 상공이든 지나간 모든 위성과 그 사진](https://www.watched.earth) | 497 | 498 (+1) |
| [조너선 블로 – AI가 코딩을 해결했다면 왜 내 소프트웨어는 그대로일까? [영상]](https://www.youtube.com/watch?v=IRK8h67ol7Q) | 494 | 494 (0) |
| [claude.ai, Claude Code, platform.claude.com 오류 급증](https://status.claude.com/incidents/nn11wk485zfn) | 494 | 494 (0) |
| [엔비디아의 다음은?](https://steveblank.com/2026/11/15/whats-next-for-nvidia/) | 480 | 485 (+5) |
| [작고 오래된 기기에서 LLM을 돌리는 중입니다](https://github.com/hyperionaidev/smolmaxxing/) | 483 | 485 (+2) |
| [글꼴로서의 손글씨](https://ductus.sorenblank.com) | 472 | 475 (+3) |
| [Protomaps: 지도 타일 셀프 호스팅이 싸고 쉬워졌다](https://bruceroettgers.eu/blog/protomaps/) | 462 | 467 (+5) |
| [소프트웨어 직무 명칭의 계보도](https://zwischenzugs.com/2026/11/03/a-family-tree-of-software-job-titles/) | 459 | 460 (+1) |
| [소식통 "전 엔비디아 CEO 황, 두 번째 직원과 관계 가져"](https://www.reuters.com/technology/former-nvidia-ceo-huang-had-relationship-with-second-employee-sources-say-2026-11-12/) | 460 | 460 (0) |
| [클로드 코드와 Codex, 3달러 아두이노로 1994년식 지프 ECU 리버스 엔지니어링 [영상]](https://www.youtube.com/watch?v=WPj3aQ-xxpI) | 455 | 455 (0) |
| [중국 프런티어 AI 모델, 수출 통제된 GPU의 흔적 지녀](https://unemploymentlabs.com/checkpoint-forensics) | 452 | 453 (+1) |
| [AI, 수백 개 증명 담긴 괴델의 노트북 해독](https://www.theguardian.com/science/2026/nov/13/kurt-godel-notebooks-ai-helps-unlock-hidden-discoveries-man-who-transformed-maths) | 444 | 445 (+1) |
| [마이크로소프트, 대규모 메일 장애 원인은 7월 패치가 넣은 결함이라 밝혀](https://www.theregister.com/saas/2026/11/16/microsoft-blames-monster-email-outage-on-software-defect-introduced-in-july-fix/5310026) | 435 | 444 (+9) |
| [Jiff 1.0: 러스트용 날짜·시간 라이브러리](https://burntsushi.net/jiff/) | 435 | 441 (+6) |
| [셀을 차지하지 않는 터미널 경계선](https://www.joshka.net/cell-borders/) | 426 | 426 (0) |
| [ggml v1.0.0](https://github.com/ggml-org/ggml/releases/tag/v1.0.0) | 420 | 420 (0) |

| [모델마다 가장 잘 맞는 하네스는 무엇인가?](https://runta.com/blog/introducing-frontierharness-eval-v1-1/) | 283 | 415 (+132) |
| [w2rt6byl5nf1opmc-a.com은 대체 뭘까?](https://jack.cab/blog/siterate) | 398 | 411 (+13) |
| [아이패드에서 학생이 파워포인트를 열려면 16번을 클릭해야 한다](https://www.reddit.com/r/Teachers/comments/1xuup7a/technology_sucks_it_literally_takes_16_clicks_for/) | 409 | 409 (0) |
| [이탈리아, 안드로이드 이용자 데이터 접근 문제로 메타에 $887M 과징금](https://www.reuters.com/world/italy-fines-meta-887-million-over-android-users-data-access-2026-11-14/) | 408 | 408 (0) |
| [태양을 도는 데 약 280년이 걸리는 왜소행성 후보 등장](https://www.smithsonianmag.com/smart-news/astronomers-found-a-mysterious-object-orbiting-far-beyond-pluto-it-could-be-a-new-dwarf-planet-hidden-in-our-solar-system-180989857/) | 397 | 397 (0) |
| [소프트웨어는 시스템 차원에서 무너지고 있다](https://www.breck-mckye.com/blog/2026/11/software-is-breaking-down-at-a-systemic-level/) | 384 | 392 (+8) |
| [캘리포니아에서 텍사스로 배송 중 엔비디아 하드웨어 $11.4M 증발](https://www.freightwaves.com/news/11-4-million-in-nvidia-hardware-vanishes-during-shipment-from-california-to-texas) | 386 | 386 (0) |
| [오래된 Bitly 링크들이 탈취되고 있다](https://ransomnews.com/burger-king-tweet-bitly-link-hijack-2026/) | 378 | 380 (+2) |
| [올바른 소프트웨어를 쓰는 일은 어렵고, 수학만으로는 부족하다 (2016)](https://pron.github.io/posts/correctness-and-complexity) | 375 | 375 (0) |
| [ALPR 조회에 영장을 요구하도록 항소법원에 요청한다](https://www.eff.org/deeplinks/2026/11/were-asking-appeals-court-require-warrant-alpr-searches) | 361 | 361 (0) |
| [앱이 더 필요한 게 아니라, 더 나은 오픈소스가 필요하다](https://jordankrueger.com/blog/better-open-source-not-more-apps/) | 330 | 353 (+23) |
| [화학은 사실 기하학이다](https://chillphysicsenjoyer.substack.com/p/chemistry-is-actually-geometry) | 335 | 347 (+12) |
| [OpenCode Browse](https://opencode.ai/product/browse) | 322 | 331 (+9) |
| [태양광 패널이 깔린 목초지에서 양 방목하기](https://news.cornell.edu/stories/2026/10/sheep-grazing-solar-fields-offers-farmers-economic-ecological-gains) | 322 | 329 (+7) |
| [Lean에서 검증했으니 그 정리가 맞다는 주장을 어떻게 읽을 것인가](https://xenaproject.wordpress.com/2026/11/12/and-the-proof-is-checked-in-lean/) | 316 | 325 (+9) |
| [Project Zero, 취약점 신고 후 90일이 지나면 공개한다](https://projectzero.google/2026/11/disclosure-policy.html) | 323 | 323 (0) |
| [죽은 노트북을 되살리는 비밀 씽크패드 전원버튼 코드 (2007)](https://masnick.com/posts/the-secret-thinkpad-powerbutton-code-to-bring-dead-laptops-back-to-life/) | 316 | 322 (+6) |
| [워즈는 컴퓨터를 만들기 전에 어떻게 Apple 1 BASIC을 작성했나? (2021)](https://retrocomputing.stackexchange.com/questions/17957) | 320 | 321 (+1) |
| [까마귀는 우리보다 빠르게 결정을 내린다](https://www.nytimes.com/2026/11/15/science/birdbrain-crows-birds-research-decision.html) | 315 | 316 (+1) |
| [Show HN: Yogurt – Granola의 무료·프라이빗·오픈소스 대안](https://github.com/FrigadeHQ/yogurt) | 306 | 306 (0) |
| [엘니뇨가 어떻게 작동하는지 짧게 설명한다 [영상]](https://www.youtube.com/watch?v=7_JF3etiAv8) | 301 | 301 (0) |
| [Claude 화이트보드, Claude 시트, Claude 데이터](https://claude.com/resources/articles/sheets-whiteboards-data) | 299 | 299 (0) |
| [600번의 실험 끝에 JEPA 월드 모델에 대해 알게 된 것](https://haddyalchaer.com/jepa) | 296 | 296 (0) |
| [CBC 취재 후 링크드인·몬스터, 가짜 채용공고 1000건 이상 내려](https://www.cbc.ca/news/canada/linkedin-monster-take-down-over-1-000-fake-job-postings-after-cbc-investigation-9.7415379) | 293 | 293 (0) |
| [Claude Code 팀은 검증을 어떻게 생각하는가](https://claude.dev/blog/how-the-claude-code-team-thinks-about-verification/) | 220 | 290 (+70) |
| [Rust는 나를 개발자로서 바꿔놓았다](https://blog.startifact.com/posts/how-rust-changed-me/) | 282 | 290 (+8) |
| [엔비디아는 젠슨 황 사태 이전부터 문제였다](https://www.wired.com/story/nvidia-was-already-in-trouble-before-the-jensen-huang-mess/) | 287 | 289 (+2) |
| [옛날식 게임 프로그래밍의 명품 핵 (2013)](https://blog.moertel.com/posts/2013-12-14-great-old-timey-game-programming-hack.html) | 289 | 289 (0) |
| [3dfx 카드의 색이 그렇게 바랬던 이유는?](https://twitter.com/id_aa_carmack/status/2122478083319992513) | 273 | 285 (+12) |
| [상시 감시가 아이들과 부모에게 하는 일](https://www.theatlantic.com/magazine/2026/12/location-tracking-apps-parental-surveillance/689031/) | 282 | 282 (0) |
| [보안 신호를 더 명확히 한 PyPI 프로젝트 페이지 개편, 이제 라이브](https://blog.pypi.org/posts/2026-11-06-ui-updates-complete/) | 279 | 280 (+1) |
| [FM-1 워크벤치](https://open.m-vave.com/fm1-workbench) | 279 | 279 (0) |
| [Show HN: 순수 Jax 약 200줄로 구현한 DeepSeek V3](https://github.com/Vaibhaav-Tiwari/deepseek-v3-jax) | 276 | 276 (0) |
| [AMD 젠 6 패밀리: 짐승에게 먹이를 주다](https://chipsandcheese.com/p/amds-zen-6-family-feeding-the-beast) | 276 | 276 (0) |
| [우리의 소프트웨어 엔지니어링 면접이 조금 바뀐다](https://blog.janestreet.com/software-engineering-interviews-are-changing-a-little/) | 268 | 268 (0) |
| [Brave Search API, x402 프로토콜로 에이전트 결제 받는다](https://brave.com/blog/search-api-agentic-payments/) | 262 | 262 (0) |
| [Show HN: 심시티/아이소메트릭 뷰로 본 스페인 발렌시아](https://tinyvalencia.com/) | 262 | 262 (0) |
| [Unsloth Qwen3.8-27B 양자화 – Dynamic v3.1 업데이트](https://unsloth.ai/docs/models/qwen3.8) | 261 | 261 (0) |
| [컴캐스트의 "광케이블 기반 Wi-Fi"는 그냥 케이블, AT&T가 허위광고 소송에서 주장](https://arstechnica.com/tech-policy/2026/11/comcast-falsely-advertises-cable-internet-as-fiber-powered-att-lawsuit-says/) | 250 | 259 (+9) |
| [발견: 염증을 터뜨리지 않고 노화를 밀어붙이는 단백질](https://www.nature.com/articles/d41586-026-03638-3) | 259 | 259 (0) |
| [유나이티드 항공, 광범위한 시스템 장애 겪어](https://www.cnn.com/2026/11/16/us/united-airlines-outage) | 253 | 256 (+3) |
| [일부 아폴로 임무는 왜 유탄발사기를 실었나? (2019)](https://space.stackexchange.com/questions/37775) | 253 | 254 (+1) |
| [Tor 프로젝트, 지속적 DDoS 공격 속 긴급 DoS 방어 수정 발표](https://forum.torproject.org/t/security-release-0-4-9-17/22454) | 250 | 253 (+3) |
| [앱이 전체 디스크 접근이나 시스템·앱 보호 무시를 요구할 때](https://support.apple.com/en-us/149699) | 234 | 248 (+14) |
| [터보 파스칼보다 작은 것들 (2011)](https://prog21.dadgum.com/116.html) | 247 | 247 (0) |
| [최신 LLM의 위치 임베딩 이해하기](https://magazine.sebastianraschka.com/p/understanding-positional-embeddings) | 246 | 246 (0) |
| [더 나은, 더 효율적인 RAG를 위한 더 빠른 검색](https://machinelearning.apple.com/research/faster-retrieval) | 242 | 242 (0) |
| [Atuin Threads: 모든 머신에서 에이전트 세션 전부를](https://blog.atuin.sh/threads-agent-sessions/) | 242 | 242 (0) |
| [Emacs가 내 브라우저다](https://joshblais.com/blog/emacs-as-my-browser/) | 236 | 239 (+3) |
| [시드로 생성한 지형을 쓰는 WebGL 비행 시뮬레이터](https://baron.by.dai.studio/) | 231 | 232 (+1) |
| [하스켈 생태계를 위한 기술적 비전](https://discourse.haskell.org/t/a-technical-vision-for-the-haskell-ecosystem/15078) | 232 | 232 (0) |
| [생성형 AI는 비영어 텍스트에 더 많은 에너지를 쓴다](https://news.umich.edu/generative-ai-uses-more-energy-on-non-english-text/) | 231 | 231 (0) |
| [염소 제물이 더 필요하다](https://www.experimental-history.com/p/we-need-more-goat-sacrifices) | 228 | 229 (+1) |
| [스쿼클](https://linebender.org/wiki/curves/squircle/) | 221 | 228 (+7) |
| [연구진, 스마트워치만으로 전신 움직임을 추적](https://news.cornell.edu/stories/2026/11/researchers-track-whole-body-movement-just-smartwatch) | 223 | 227 (+4) |
| [내가 좋아하는 현대 NES 게임들](https://jordi.inversethought.com/blog/25-of-my-favourite-modern-nes-games/) | 220 | 221 (+1) |
| [Show HN: 오늘 밤 FAA 전국 운항 중단 동안의 미국 항공편 실시간 지도](https://grounds.top/) | 220 | 220 (0) |
| [살롱 저널리즘 30년을 보존하기](https://blog.archive.org/2026/11/12/preserving-30-years-of-salon-journalism/) | 218 | 219 (+1) |
| [웹은 충분하고도 남는다](https://ftrain.com/aboard-the-web-is-more-than-enough) | 216 | 216 (0) |
| [Antigravity의 /teamwork로 과학과 공학을 밀어붙이기](https://research.google/blog/advancing-science-engineering-with-antigravitys-teamwork-feature/) | 214 | 214 (0) |
| [퀸스 공공도서관, 랜섬웨어 공격 당해](https://connect.queenslibrary.org/) | 213 | 213 (0) |

## 스레드

오늘 기사 세 개는 사실 같은 기사다. 그리고 이게 내년의 의제를 정해야 하는 그 기사다.

OpenJDK의 AVX-512 Base64 디코더에서 메모리 손상 버그가 한 시간 만에 나왔다. nginx에서 인증 없는 RCE 두 개, 그중 하나는 11년 된 것이다. 둘 다 AI 하네스로 찾았고, 둘 다 몇 시간 만에 무기화됐고, 둘 다 PHP2Shell 이후 일주일 안에 공개됐다. Wiz가 노골적으로 말한다. 복잡성은 더 이상 발견이나 악용의 장벽으로 믿을 수 없다고. 그들은 추측하는 게 아니다. nginx 1.9.5의 정수 언더플로를 10년 동안 이론으로만 남겨둔 장벽은, 그걸 찾으려면 여러 코드 경로에 걸친 메모리 연산 사이의 상호작용을 추적해야 한다는 것이었고, 바로 그 작업이 이번 달에 싸졌다. Phrack 73호는 같은 전환을 안쪽에서 기록한다. Docker 탈출과 Chromium 샌드박스 탈출 이슈가, LLM에 관한 글 세 편과 나란히 실렸다. 그중 하나는 Java4Shell을 찾은 연구자가 썼다.

추론은 벤더 발표자료에 없는 부분이다. 버그를 찾는 비용이 두 자릿수 배로 떨어지면, 당신이 가진 패치 안 된 모든 것이 같은 일정으로 살아 있는 부채가 된다. 그리고 느린 발견 속도를 전제한 연례 주기 공개 관행은 말이 안 되기 시작한다. nginx 타임라인이 그 증거다. 수정본이 공개 저장소에 일주일 동안 있었고, 커밋 메시지에는 신고자 이름이 박혀 있었고, 아무런 공지도 안 나갔고, 조율된 릴리스는 예정대로 도착했다. 그건 올바른 절차였다. 그 절차는 이제 너무 느리다.

두 번째 줄기는, 오늘의 피해가 누가 잘못 짠 코드에 있지 않았다는 것이다. 신뢰 계층에 있었다. Optimizely는 자사 CDN과 자사 인증서로 178개 조직에 악성코드를 서빙했다. 공격자가 고객의 실험 설정에다 써넣었기 때문이다. PyPI의 마이크로소프트 `agent-framework`는 마이크로소프트 자기 퍼블리셔 계정으로 인포스틸러를 두 번이나 배포했고, 대응은 저장소를 비공개로 돌리는 것이었다. Quad9는 프랑스를 떠난다. 법원이 DNS 레코드를 형법으로 만들어버렸기 때문이다. 병원과 전력 회사 사용자들은 인터넷이 안 풀릴 때 알게 될 것이다. Codeberg는 사라졌다. 등록기관이 도메인을 정지시키고 이유를 말하지 않아서.

위의 모든 것은 신뢰받는 중개자 하나가, 설계된 대로, 자기를 믿은 사람들을 상대로 쓰인 사례다. "당신 코드에 버그가 있다"와는 다른 위협 모델이고, 완화책도 다르다. 벤더의 관리자 패널은 패치로 빠져나갈 수 없다. 의존성을 제거하는 수밖에 없는데, 대부분의 조직은 그 의존성을 제거할 수 없다. 의존성을 갖지 않으려고 그 의존성을 들여왔기 때문이다.

세 번째 줄기는 더 조용하고 더 비싸다. 구글의 무작위 실험이 말하길 AI 개요는 퍼블리셔 클릭을 40% 깎는다. All About Berlin 글의 트래픽 그래프를 공개한 퍼블리셔는 75%라고 한다. 하버드의 워킹페이퍼는 코딩 에이전트를 도입한 회사들이 코드는 30% 더 썼지만 출시량은 그대로였고, 리뷰는 49% 더 오래 걸렸다고 한다. 둘 다 같은 발견이다. 규모만 다르다. 생산 계층은 극적으로 싸졌고 소비 계층은 그렇지 않았다. 그래서 대기열이 사람이 서 있는 체크포인트로 옮겨갔고, 체크포인트의 가치는 올라갔으며 그것이 검사하는 생산물의 가치는 떨어졌다. 1년 전에 이걸 이해한 사람들은 괜찮다. 처리량을 사들이고 처리량을 측정한 조직들은 이제 같은 수의 리뷰어에게 30% 더 많은 코드를 밀어넣고 있고, 리뷰어들은 코멘트로 그게 즐겁지 않다고 말하고 있다.
