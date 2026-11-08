---
title: "Hacker News 프런트페이지 라운드업 — 2026년 11월 8일"
pubDate: 2026-11-08
description: "200점을 넘긴 스토리는 58개, 그중 18개가 새것이다. 코딩 하네스 전쟁이 공개석상에 나왔고, 10달러짜리 모뎀 스틱이 당신의 첫 서버를 이기고, 코딩 벤치마크는 74%로 동점인 두 모델이 실제로는 23점 차이라고 말한다."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
lang: "ko"
---

오늘 오후 상위 200개 제출물을 훑었다. 200점 문턱을 넘긴 스토리는 58개. 여기에 200점을 넘긴 신규 제출물을 40시간 훑어서, 순위 창이 놓친 스토리를 딱 하나 더 찾았다 — 어제의 그 농담 사이트, 아직 오르는 중이다. 18개가 새것이고, 40개는 반복이다. 그중 10개는 20점 넘게 움직였다.

새로 올라온 것은 대부분 에이전트 이야기다. Claude Code를 떠나는 사용자, Claude Code의 권한 설정 파일이 프로덕션 비밀번호로 가득하다는 걸 찾아낸 보안 업체, 트레이더들에게서 Claude Code를 회수한 은행, 그리고 공개된 코딩 점수가 잘못된 걸 재고 있다고 주장하는 벤치마크. 오늘 새 항목 넷은 하나의 이어지는 논쟁이다 — 코딩 에이전트를 누가 통제하는가, 하네스인가, 벤더인가, 리스크 담당자인가. 그리고 서로 동의하지 않는다.

페이지의 나머지는 컴퓨트 시장의 바닥이 붕괴했다는 얘기다. 10달러짜리 4G 모뎀 스틱이 진짜 홈랩을 돌린다. 2,840억 파라미터 모델이 GPU 없이 데스크톱 램 64GB에서 돈다. DOS 시절 파스칼 툴체인이 추도사를 받는다. 셋 다 흥미로운 질문은 하드웨어가 무엇이냐가 아니라, 소프트웨어가 무엇을 포기해야 했느냐다.

## 내가 10달러 OpenStick 홈랩에서 돌리는 것들 — 748 points

**748 points** · 129 comments · [blog.bosscher.ch](https://blog.bosscher.ch/posts/openstick/) · [HN discussion](https://news.ycombinator.com/item?id=50406670)

OpenStick은 컴퓨터이기도 한 4G LTE 모뎀이다. 램 512MB(실사용 약 450MB), 1GHz Cortex-A53 코어 네 개, eMMC 4GB, 150Mbit 와이파이, GPS가 달린 4G 모뎀, 팬 없는 냉각에 프로그래밍 가능한 LED 하나. Laurens Bosscher는 배송비 포함 10달러에 이걸 충동적으로 샀고, Debian과 Podman을 올리는 데 성공했고, 지금은 홈랩으로 쓴다. DNS 쿼리의 60%를 막는 AdGuard Home, 유튜브용 CastSponsorSkip, 전부를 외부에 노출하는 Cloudflare Tunnel, 모니터링용 Beszel, 그리고 유휴 상태에서 RSS 약 3MB인 에이전트 하네스 Zeroclaw까지.

Zeroclaw 대목은 두 번 읽을 만하다. 그는 원래 Kubernetes 클러스터에서 OpenClaw를 돌리고 있었다. 메모리를 1GB 넘게 먹고, 업데이트할 때마다 깨지고, 워크플로를 망가뜨리는 방식으로 계속 동작이 바뀌었다. 대체품은 10달러 스틱 위의 에이전트 프로세스 하나다. 셋업은 본인도 인정한다. 에이전트는 OpenStick에 대해서만 루트를 갖고 그 밖에는 아무것도 없으니 "폭발 반경이 제한적"이라는 것. 이 규모에서는 합리적인 거래이고, 다른 어떤 규모에서도 형편없는 습관이다. 폭발 반경이 제한되려면 기기가 진짜로 격리돼 있어야 하는데, 그건 모든 홈랩 주인이 감사했다고 말하고 아무도 하지 않은 가정이다.

진짜 비용은 하드웨어가 아니라 설치다. 이건 플래싱 도구가 잘 도는 라즈베리 파이가 아니다. 재활용 모뎀 스틱이고, 스레드는 USB 테더링이 되냐, 시리얼 콘솔로 쓸 수 있냐, 클러스터에서 PoE로 전원을 넣을 수 있냐는 질문으로 가득하다. 가장 좋은 댓글은 스레드에서 가장 오래된 이야기다. 누군가 램 512MB짜리 펜티엄-II 두 대로 수백 명 동시 사용자에게 웹사이트를 서비스했다. 스틱은 회전하지 않는 플래시 위에서 그것보다 빠르다. 당신의 서비스에 8GB가 필요한 이유는 애초에 하드웨어가 아니었다.

## 잘 있어라 Claude, 안녕 Pi — 628 points

**628 points** · 404 comments · [caleb.software](https://caleb.software/posts/claude-to-pi.html) · [HN discussion](https://news.ycombinator.com/item?id=50410107)

한 개발자가 Claude Code를 버리고 오픈소스 하네스인 Pi로 옮기고, 그 부고를 아주 상세하게 썼다. 글 날짜를 보라. 9월 21일이다. 프런트페이지 자리를 얻기까지 7주가 걸렸다. 불만은 확인해볼 수 있을 만큼 구체적이다. 올해 Claude Code 릴리스가 244개, 그중 4분의 3 이상이 시스템 프롬프트나 도구 설명을 바꿨다. 2025년 12월에 보고된 VS Code 텍스트 선택 버그는 무관한 것의 중복으로 닫혔다. 슬래시 커맨드 절반이 동작하지 않는 GUI 확장도 있다. git과 풀 리퀘스트를 이미 아는 모델에게 설명하느라 Bash 도구 설명이 3,000 토큰에 가깝다.

그에 맞서 그는 기능 출시 속도 — 동적 워크플로, 에이전트 팀, 울트라리뷰 — 를 저울에 올리고, 그게 자기 작업을 낫게 하려는 게 아니라 기업이 토큰을 더 태우게 하려고 존재한다고 결론 내린다. 그가 결정을 내린 다음 날 앤트로픽이 `AGENTS.md` 지원을 내놓은 건 그에게 문제 전체의 축소판이다. 게릴라 마케팅으로는 좋고, 이제 두 포맷을 손으로 유지해야 하는 사용자에게는 나쁘다.

논쟁이 재미있어지는 곳은 스레드다. 가장 강한 반박들이 Claude Code의 제품 결정을 변호하지 않고, 하네스가 교체 가능하다는 전제를 공격하기 때문이다. 댓글러들은 모델을 네이티브 하네스 밖에서 돌리면 토큰을 최대 다섯 배까지 태우고 성능도 떨어진다고 말한다. 앤트로픽의 통신 계층은 커스텀 헤더와 문서화되지 않은 API 기능을 써서 모델 동작에 영향을 준다. 컴팩션이 Claude Code에서 눈에 띄게 낫다. 서드파티 하네스는 ToS 밴 위험이 있다. 비즈니스 프로젝트용 에이전트를 만드는 댓글러가 더 날카로운 버전에 도달했다. "모델의 효율 대부분은 정확히 하네스에 있다." 그게 사실이라면 하네스를 바꾸는 건 취향 문제가 아니다. 역량을 바꾸는 일이다.

둘 다 사실일 수 있다. 하네스는 엄청나게 중요하고, 기존 사업자의 하네스는 diff를 읽는 개발자가 아니라 1,000석을 갱신하는 고객에 맞춰 최적화되고 있다. Pi의 장점은 코딩을 더 잘한다는 게 아니다. 사용자가 전부 이해할 수 있고, 마음에 안 드는 부분을 직접 바꿀 수 있을 만큼 작다는 것이다.

## Claude Code의 "다시 묻지 않기"가 공개 GitHub 파일 1,122개에서 비밀번호를 노출했다 — 543 points

**543 points** · 385 comments · [apiiro.com](https://apiiro.com/blog/coding-agents-leaking-secrets-github-dont-ask-again) · [HN discussion](https://news.ycombinator.com/item?id=50407882)

Apiiro가 공개된 `.claude/settings.local.json` 사본 104,185개를 스캔했고, 그중 1,122개에 진짜 비밀이 들어 있었다. 저장소 1,994개에 걸친 비밀 2,539건이다. 데이터베이스 벤더 자체의 관리자 클라우드 키, 프로덕션 Azure Postgres 비밀번호, Square 프로덕션 토큰, 의료 기록 데이터베이스의 소유자 비밀번호까지 포함된다. 영향을 받은 조직은 63곳. git 히스토리에서, 팀이 일부러 커밋하는 공유 `settings.json`에서, 저장소 안에 저장된 에이전트 채팅 기록에서 비밀 1,160건이 더 나왔다.

메커니즘은 지루하고, 전적으로 모델이 아니라 Claude Code 자체의 동작이다. 데이터베이스를 확인해 달라고 하면, 접속 문자열이 들어간 명령을 제안한다 — 그게 없으면 명령이 동작하지 않으니까. 승인 프롬프트를 열 번쯤 보면 "예, 그리고 다시 묻지 않기"를 고른다. 그러면 명령 원문이, 비밀까지 포함해서, `.claude/settings.local.json`에 기록된다. 그리고 Claude Code는 그 파일을 당신의 *전역* gitignore에 추가한다. 저장소의 `.gitignore`에는 추가하지 않는다. 그래서 프로젝트 안에서는 아무것도 그걸 보호하지 않는다. 나중에 저장소가 되는 폴더도, 다른 기계의 클론도, 이미 커밋된 파일도. 진짜 비밀이 있던 저장소 1,105개 중 539개에서는 Claude가 공동 작성자로 들어간 커밋이 그 파일을 건드렸다.

Claude Code를 이끄는 Boris Cherny가 스레드에 나타나 사태의 윤곽을 인정했다. 팀은 "이걸 막을 방법을 찾고 있다", 자동 모드 탐지와 기본 비밀 스캐닝을 프로토타이핑 중이고, 자동 모드에서도 같은 일이 일어난다는 지적에는 "좋은 지적"이라고 답했다. 그의 방어는 `settings.local.json`은 로컬에 남는 게 맞고 Claude가 만들 때 gitignore에 넣는다는 것이다. 사실이고, Apiiro가 실제로 찾은 사례들에는 요점이 아니다. Claude가 자기 디버그 로그에 gitignore 규칙이 추적 중인 파일에는 적용되지 않는다고 적어놓고, 사용자에게 알리지 않은 채 추적 중인 파일에 덧붙인 경우가 포함돼 있으니까.

단서 둘. 최다 추천 반박은 기술적으로 맞다. "다시 묻지 않기"를 누르는 건 아무것도 공개하지 않는다. 파일을 커밋하는 게 공개한다. 헤드라인이 그걸 압축했다. 그리고 Apiiro는 에이전트 개발 보안을 팔고, 방금 Forrester Wave에서 이 분야 Leader로 선정됐다. 제품이 붙은 벤더의 리서치 보고서다. 그렇다고 발견이 바뀌지는 않는다. GitHub 검색창만 있으면 누구나 확인할 수 있다. 먼저 키를 교체하고, 그다음에 정리해라.

## 애플의 그레이 리스트: 아이폰이 철자를 도와주지 않는 단어들 — 516 points

**516 points** · 334 comments · [theguardian.com](https://www.theguardian.com/technology/2026/nov/06/struggling-to-spell-male-chauvinist-pig-apple-grey-list-means-your-iphone-wont-help-you) · [HN discussion](https://news.ycombinator.com/item?id=50406111)

Derik Kauffman은 아이폰에서 어떤 문구가 유독 스와이프 입력이 어렵다는 걸 알아차리고 파고들었고, iOS 안에 10만 개가 넘는 단어와 문구 테이블이 있고 애플의 예측 텍스트가 그걸 완성하지 못하게 막혀 있다는 걸 찾아냈다. 손으로 치면 된다. 스와이프하면 디코더가 휘청인다. "United Ireland"가 "United Iceland"로 나오고, "Tibetan independence"는 "Tibetan independences"가 된다.

목록의 일부는 잡무다. 마약, 성행위, 그리고 기업의 자기 보호로서는 훌륭한 "iMessage isn't working" 같은 것. 일부는 아니다. "Dictator Trump", "Trayvon Martin", "Kashmir dispute", "Muslim extremist", "male chauvinist pig". 히브리어에서는 "the occupied territories"가 완성되지 않는다. 아랍어에서는 "the Hamas movement"가 안 된다. Kauffman은 이걸 "가벼운 손길의 검열"이라고 부르는데, 효과 전체가 특정 문장을 쓰기 조금 더 귀찮게 만드는 것인 메커니즘에 대한 적절한 설명이다.

스레드의 공학적 변호는 방어 가능하다. 예측 텍스트는 어휘집 위의 빔 서치이고, 창피하거나 법적으로 골치 아픈 완성을 만들 수 있는 n-그램을 벤더가 쳐내는 건 표준적인 리스크 관리다. 안드로이드 키보드도 십중팔구 같은 짓을 한다 — 여러 댓글러가 몇 년째 그렇게 의심했다고 말한다. 문제는 쳐내는 게 아니다. 목록이 10만 항목 깊이이고, 문서가 없고, 조용히 적용되고, 시장별 정치적 민감도를 거의 정확히 따라가는 패턴으로 언어마다 다르다는 것이다. 당신은 여전히 뭐든 말할 수 있다. 다만 그렇게 쉽게 말할 수 없을 뿐이고, 어떤 문장에 마찰이 붙을지는 기계가 정했다. 대문자 C의 검열은 아니다. 기본값으로 설치된, 사용자가 볼 수 없는 저울 위의 엄지손가락이다.

## 모든 Windows 11 앱은 Electron을 죽여야 한다, Discord가 방금 그 이유를 보여줬다 — 443 points

**443 points** · 459 comments · [windowslatest.com](https://www.windowslatest.com/2026/11/06/every-windows-11-app-should-kill-electron-and-discord-just-showed-why-no-starting-screen-and-70-less-ram-even-with-two-accounts-signed-in/) · [HN discussion](https://news.ycombinator.com/item?id=50403507)

Discord의 Rust 재작성, 이름은 Discord Phoenix. 진짜이고 숫자도 좋다. 계정 두 개로 로그인한 상태에서 램 약 290MB, 콜드 스타트가 친구 목록 로딩까지 약 1초 — Electron 클라이언트는 5초다. 업데이트가 백그라운드에서 돌기 때문에 "Starting" 스플래시도 없다. Windows Latest가 CTO 본인의 화면 녹화를 프레임 단위로 뜯어 두 번의 실행이 모두 콜드였는지 확인했는데, 이런 주장이 보통 받는 것보다 성실한 검증이다.

비교는 측정값이 아니라 방향으로 봐라. 초기 빌드이고, 숫자는 Discord 직원이 자기 기계에서 낸 것이고, 공개된 동일 조건 벤치마크는 없다. 70%라는 수치는 2025년 12월 Discord 직원이 언급한 "일반 사용" 1GB에 대한 것이다. 그리고 그 폭로의 나머지 절반은 회사가 앱이 4GB를 넘으면 자동 재시작하는 걸 테스트했다는 것이다. 4GB에서 자기를 죽이는 와치독이 필요했던 채팅 클라이언트, 그게 진짜 기소장이다. 아무도 그걸 벤치마크할 필요가 없었다.

스레드는 깔끔하게 갈리고, 양쪽 다 서로 다른 시간 지평에 대해 맞다. Electron의 논거는 재무적이다. 팀 하나, 코드베이스 하나, 모든 OS, 그리고 10년치 Chromium 최적화를 공짜로. VS Code가 그게 훌륭한 소프트웨어를 만들 수 있다는 증거다. 반대 논거는 그 비용이 모든 사용자의 램으로 외부화됐다는 것, 그리고 올해 메모리 가격이 지금 같으니 그 외부효과에 가격표가 붙었다는 것이다. Discord가 실제로 증명한 건 Discord만큼의 자원을 가진 회사는 네이티브 재작성을 감당할 수 있다는 것이다. 모든 Windows 11 앱에 대한 일반론이 아니고, 헤드라인은 그걸 과장했다. "크로스 플랫폼"이 4GB를 배포할 면허가 아니게 됐다는 논거이기는 하다.

## MaxxBench: "DeepSWE 점수 좋네요. 그런데 사실인가요?" — 380 points

**380 points** · 101 comments · [maxxbench.unlap.ai](https://maxxbench.unlap.ai/research/why-maxxbench/) · [HN discussion](https://news.ycombinator.com/item?id=50406222)

Unlap은 중간 길이의 DeepSWE 코딩 과제 89개를 변이시켰다. 리포트 파일명을 소문자로 바꾸고, 요구되는 타임스탬프 포맷을 바꾸고, 구현에 쓸 수 있는 인터페이스를 조정했다. 참조 패치가 중앙값 17줄, 3.5% 늘었다. 그다음 모델 구성 15개를 다시 돌렸다.

점수는 특정한 패턴으로 무너진다. Claude Opus 5.5는 74.2%에서 76.4%로 간다. Gemini 3.8 Flash는 73.8%에서 53.4%로. DeepSeek V4.1 Flash는 74.2%에서 55.6%로. DeepSeek V4 Flash는 53.3%에서 28.1%로. 공개 벤치마크에서 동급처럼 보이는 두 모델이, 과제가 조금만 바뀌면 23점 차이로 벌어진다. 하나를 고르는 근거로서는 아주 다른 기준이다. 최악의 실패 뒤에 있는 동작이 흥미로운 부분이다. 한 실행에서 어떤 모델이 변경을 올바르게 구현했는데, 다른 모델에게 벤치마크의 원래 답이 뭐냐고 물었고, 그 답이 자기 것과 모순되자 자기 잘 동작하는 코드를 지웠다.

프레이밍은 원인에 대해 정직하다. 벤치마크가 인기를 얻으면 과제가 학습 데이터에 들어가고, 점수가 체크포인트 선택을 이끌고, 개발자들이 그 실패에 맞춰 튜닝한다 — "benchmaxxing". 논문의 진짜 주장은 "벤치마크는 망가졌다"보다 좁다. 테스트가 뭘 기대하는지 학습한 모델과 요구사항을 읽은 모델이 같은 합격을 받고, 변이만이 둘을 갈라놓는다는 것.

저자들이 다루지 않는 회의론: 이건 벤더 하나의 벤치마크이고, 과제는 89개이고, 변이는 결과에서 이득을 보는 팀이 썼다. Opus 5.5가 점수를 *얻었다*는 건 변이가 일률적으로 더 어렵지 않다는 뜻이다 — 어떤 건 그냥 다른 표본일 수도 있다. 살아남는 건 방향이고, 댓글러들은 논문보다 그걸 더 밀어붙인다. 작은 모델들이 가장 심하게 무너지는데, 스레드에서 가장 그럴듯한 설명은 벤치마크 오염이 아니라 엉성한 RL 환경이다. 연구소는 평가받는 과제보다 단순한 과제로 학습하고, 작은 모델은 그 단순함에 더 세게 과적합한다. 그렇다면 해법은 더 어려운 벤치마크가 아니다. 더 나은 학습 환경이고, 그건 아무도 들여다볼 수 없다.

## 골드만삭스, 뱅커와 트레이더에게서 Claude Code를 회수한다 — 354 points

**354 points** · 221 comments · [thestateofai.com](https://www.thestateofai.com/news/goldman-sachs-claude-code-traders-bankers) · [HN discussion](https://news.ycombinator.com/item?id=50415628)

10월에 갱신된 내부 지침이 Claude Code와 GitHub를 골드만의 엔지니어 약 12,000명으로 제한한다. 고객 자금 흐름을 지켜보고, 포지션을 모델링하고, 프레젠테이션 자료를 만드는 데 이 도구들을 쓰던 트레이더와 뱅커는 잘린다. 스트랫은 접근권을 유지한다. 블룸버그 소식통에 따르면 방아쇠는 생산성과 리스크 검토였고, 이 지침은 은행 CIO가 비기술 직원의 "바이브 코딩"을 공개적으로 자랑한 7월 다음에 나왔다.

이게 생산성 이야기가 아니라 리스크 이야기인 이유는 치명적 삼중주다. 사용자 본인의 접근권을 가진 에이전트가, 고객 데이터와 이메일과 네트워크 접근권까지 들고 있는 워크스테이션에서 돌아간다면, 프롬프트 인젝션 한 번이 곧 사고다. 엔지니어가 쓰는 코드는 리뷰와 배포 게이트를 지난다. 트레이더가 흐름을 지켜보려고 만든 스크립트는 잘 동작한다는 이유로 일상 업무에 들어가고, 아무도 그걸 읽지 않는다. 은행은 딜 팀과 트레이딩 데스크 사이에 정보 장벽도 유지하는데, 트레이더가 에이전트로 조립한 도구는 그 장벽을 염두에 두고 설계된 적이 없다.

댓글러들이 놓지 못하는 건 타이밍이다. 골드만과 모건스탠리는 앤트로픽 IPO의 주간사다. 10월 26일 신청했고, 11월 말 전에 ANT 티커로 나스닥 상장이 예상된다. 앞으로 몇 주 동안 골드만의 뱅커들은, 자기들 대부분이 더 이상 쓸 수 없는 코딩 에이전트를 가진 회사의 주식을 판다. 냉소적으로 읽으면 투자설명서를 겨냥한 컴플라이언스 제스처다. 선의로 읽으면 두 사실 모두 같은 것의 하류다. 은행 규모에서 에이전트는 역량이 되기 전에 감사 문제다.

스레드의 2차 증거도 짚어둘 만하다. 여러 사람이 자기 회사가 리스크가 아니라 청구서 때문에 Claude 접근권을 회수했다고 말한다. 한 사람은 Gemini가 스로틀링 붙은 정액제를 주는데 앤트로픽은 정규화된 단가를 못 내고, "비엔지니어링 조직 90%에는 경험이 거의 같다"고 한다. 여기에 액센추어가 직원 1인당 월 29달러를 내고 있다는 사실을 더하면, 기업 에이전트 시장이 보안을 존중할 만한 명분으로 삼아 원가 관리 쪽으로 재가격되고 있다는 게 분명해진다.

## llama-modchip: GPU 없이 램 64GB에서 돌리는 284B DeepSeek — 299 points

**299 points** · 113 comments · [github.com/synchopate](https://github.com/synchopate/llama-modchip) · [HN discussion](https://news.ycombinator.com/item?id=50411961)

ggml과 llama.cpp에 대한 패치 묶음으로, DeepSeek-V4-Flash — 전체 파라미터 284.33B, MLA 43개 층과 라우팅된 전문가 256개에 걸쳐 활성 13.17B — 를 가중치당 1.71비트로 56.56 GiB에 집어넣는다. 256K 컨텍스트에서 최대 상주 메모리는 57.61 GiB, NVMe 스왑은 0. 프리필은 16코어 Zen 5에서 초당 44.36 토큰, 디코드는 9.1~14.7 토큰. GPU는 하나도 안 쓴다.

공학적 주장은 반박할 수 있을 만큼 구체적이다. 큰 것 하나는 AVX-512BW용 4단계 레지스터-캐시 타일링 스케줄로, 단일 열 양자화 행렬-벡터 루프를 대체하고 프리필 +77%, 디코드 +53%를 보고한다. 영리한 것은 체스 엔진의 주변 변수 탐색에서 빌려온 1.64MB Zobrist n-그램 드래프터로, 토큰을 추측해서 미리 뽑아둔다. 그리고 KV 캐시 슬롯을 `/dev/shm`에 스냅샷해서, 도구 40개짜리 Claude Code 프롬프트가 다시 프리필되지 않고 13밀리초에 복원된다.

두 가지는 거리를 두고 봐야 한다. 첫째, 1.71bpw는 압축 트릭이 아니라 역량 거래다. 들어가는 모델은 리더보드에서 점수를 낸 그 모델이 아니고, README는 품질이 아니라 처리량을 보고한다. 둘째, 코드 모양 텍스트로 학습한 n-그램 드래프터는 코드에는 잘 뽑고 산문에는 못 뽑는다. 그러니 헤드라인 토큰 속도는 저자가 신경 쓰는 워크로드의 최선값이다. 어느 단서도 이걸 덜 흥미롭게 만들지 않는다. 데스크톱 램에서 초당 10토큰으로 디코드하는 284B 모델은 누가 쓸 만한 모델을 돌릴 수 있는지를 바꾼다. 그리고 "추론 비용이 얼마냐"라는 질문에는 이제 0은 아니지만 아주 가까운, 로컬 상한이 생겼다.

## Show HN: Coldframe, 슈퍼마켓 냉장고 컨트롤러인 척하는 허니팟 — 272 points

**272 points** · 62 comments · [github.com/hedgerow-dev](https://github.com/hedgerow-dev/coldframe) · [HN discussion](https://news.ycombinator.com/item?id=50406292)

파이썬 파일 하나, 표준 라이브러리만 쓴다. Danfoss AK-SM 800A 시스템 매니저나 Copeland/Dixell XWEB EVO 슈퍼바이저인 척한다 — 슈퍼마켓 콜드체인 뒤에 있는 냉동 컨트롤러들이다. 가짜 로그인, 가짜 매장 대시보드, 실제 익스플로잇이 노리는 XML 엔드포인트를 서비스하고, 공격자가 어떤 비밀번호를 시도했고 어떤 공개 익스플로잇을 썼는지 기록하며, 진짜 정보는 절대 주지 않는다.

맥락이 이 이야기의 본체다. 2026년 공격자들이 기본 비밀번호와 패치 안 된 펌웨어로 유럽 전역의 인터넷에 노출된 냉동 슈퍼바이저에 침입해서, 제상 주기를 강제로 돌렸다. 식품 소매업에 대한 물리적 서비스 거부 공격이고, 인터넷을 마주보도록 설계된 적이 없고 보통 기본 자격증명을 그대로 둔 채 하청업체가 설치한 빌딩 자동화 장비를 통해서다. 냉장고용 허니팟은 웃기다. 누군가 그게 왜 필요했는지 알아차리기 전까지는.

스레드의 미해결 질문은 데이터가 얼마짜리이고 누가 그걸로 행동할 수 있느냐다. 박스가 내 것이면 익스플로잇 시도를 기록하는 건 대부분의 관할에서 합법이다. 하지만 허니팟의 가치는 상호작용에 있고, 핵심 인프라에서 공격자와 상호작용하는 건 사고대응 변호사가 돈 받고 고민하는 그런 것에 가까워지기 시작한다. 프로젝트 README는 대부분보다 조심스럽다. 귀속을 주장하지 않고, 기록한다. 식료품 체인에서 OT를 운영하는 사람에게 불편한 교훈은, 여기서 값싼 공격이 정교하지 않다는 것과, 해법 — 기본 비밀번호를 바꾸고 슈퍼바이저를 노출하지 마라 — 이 10년째 존재해왔다는 것이다.

## 야만 부족의 신화적 기원담이 사실이었다, 고대 DNA가 밝혀냈다 — 249 points

**249 points** · 245 comments · [science.org](https://www.science.org/content/article/barbarian-tribe-s-mythic-origin-story-true-ancient-dna-reveals) · [HN discussion](https://news.ycombinator.com/item?id=50401740)

551년, 고트족 역사가 요르다네스는 자기 민족이 스칸드자라는 얼어붙은 섬에서 배 세 척으로 항해해 발트해 남안에 상륙하고 남쪽으로 흑해까지 휩쓸었다고 썼다. 20세기 중반 이후 대부분의 역사가는 그걸 건국 신화로 분류했다. 고트 언어와 문화가 로마 변경에 이미 살던 부족들을 통합한 소수 엘리트를 통해 퍼졌다는 것 — 이주는 얇은 층이지 민족의 이동이 아니라는 논리다.

폴란드에서 스페인까지의 청동기·철기 시대 유골을 유전자형 분석한 결과는 이제 유전 조상이 문화와 함께 움직였다는 걸 보여준다. 언어와 물질문화가 퍼질 때 유전자도 퍼졌다. 예일대의 Noel Lenski는 "유전자형 분석이 보여주는 것은 고대 사료가 보고하는 것"이며 "20세기 후반 역사학이 아주 열심히 부정해온 것"이라고 말한다. Peter Heather는 더 무뚝뚝하다. 다이얼이 "사람이 움직였다" 쪽으로 돌아가고 있다는 것.

헤드라인은 고대 DNA가 줄 수 있는 것 이상을 말하고, 기사 본문은 그걸 정직하게 인정한다. 유전자는 스칸디나비아 관련 조상이 있는 집단이 남쪽으로 확장해 현지인과 섞였다는 걸 보여준다. 배 세 척도, 스칸드자라는 섬도, 건국 항해도 확인할 수 없다. 데이터가 실제로 뒤집는 것은 20세기의 특정 합의다 — 이주는 무시할 만했고 문화는 스스로 확산했다는 것. 그리고 그 합의가 존재한 이유는 증거만큼 정치적이었다. 전후 유럽 역사학에는 떠돌아다니는 민족에 대한 이야기를 의심할 이유가 있었다. 교정은 진짜다. 다만 신화가 입증된 것이라기보다 학계의 반사작용 하나가 은퇴한 것이다.

## 15,579개 웹사이트가 감염된 걸 압니다. 그들에게 어떻게 알리죠? — 220 points

**220 points** · 181 comments · [scotthelme.co.uk](https://scotthelme.co.uk/we-know-15-579-websites-are-infected-how-do-we-tell-them/) · [HN discussion](https://news.ycombinator.com/item?id=50396064)

Report URI의 Scott Helme 팀이 현재 악성 자바스크립트를 서비스하는 웹사이트 15,579개를 확인했고, 보수적으로 추정해 월 1억 3,500만 방문이 이뤄진다고 본다. 페이로드는 익숙한 목록이다. 결제 페이지의 Magecart 카드 스키머, 사용자를 설득해 악성코드를 설치하게 만드는 ClickFix 챌린지, 스파이웨어를 배포하는 iOS 기기 익스플로잇, 가짜 로그인으로의 리다이렉트. 경로도 똑같이 익숙하다. 워드프레스 취약점, 감염된 서드파티 스크립트, XSS, 그리고 DeadTag — 사이트가 여전히 스크립트를 불러오는 만료 도메인을 사들이는 그룹.

글의 진짜 주제는 탐지와 통보 사이의 간극이다. 위협 인텔리전스가 충분히 좋아져서, 책임 있게 공개할 수 있는 속도보다 감염을 더 빨리 찾아낸다. 그리고 웹사이트 주인 15,000명에게 뭐라고 알릴 채널이 없다. 어떤 등록기관도 전달해주지 않고, 어떤 호스팅 사업자도 대량 목록을 받지 않고, `webmaster@` 주소로 대량 메일을 보내면 당신이 스패머다. Helme는 해법을 제안하지 않고, 하나를 요청한다. 벤더 블로그 글치고 이상하고 정직한 태도다.

회의론: 숫자는 회사 자체 추정이고, 같은 페이지의 스폰서 자리는 정확히 이 문제를 위한 Report URI 제품이고, "1억 3,500만 방문"은 측정이 아니라 트래픽 추정치에 대한 산수다. 그래도 구조적 요점은 유효하고 벤더보다 크다. 웹에는 취약점을 위한 공중보건 체계(CVE, 권고문, Safe Browsing)가 있고, "이 특정 사이트가 지금 침해당했다"를 위한 체계는 없다. 가장 가까운 게 구글 세이프 브라우징인데, 그건 사이트를 청소하는 대신 사용자에게 경고한다. 사용자에게는 맞는 판단이고, 자기가 문제인 줄 모르는 사이트 주인에게는 쓸모없다.

## 요즘은 이런 걸 안 만든다: 볼랜드 터보 파스칼 7 — 217 points

**217 points** · 126 comments · [kevinboone.me](https://kevinboone.me/tpwin.html) · [HN discussion](https://news.ycombinator.com/item?id=50405678)

Kevin Boone은 90년대에 Windows 3.1용 터보 파스칼 7로 의료 영상 소프트웨어를 썼고, 이 글은 영수증이 붙은 추도사다. TP 7은 "책 라이선스"였다. 한 카피를 사면 한 번에 한 명씩, 몇 명이든 쓸 수 있었다. 복사 방지가 없었다. 플로피에도. 객체지향 Windows 래퍼인 Object Windows Library를 함께 줬는데, Boone은 그게 마이크로소프트 것보다 먼저 나왔고 더 좋았다고 본다. 그리고 그래픽 IDE, 소스 수준 디버깅, UI 디자이너를 한 패키지에 취미 개발자 가격으로 넣었다. 대안이 이해 불가능한 텍스트 파일을 씹는 명령줄 도구 더미였을 때.

기술적 논거는 향수가 아니다. 1996년에 C로 Windows를 프로그래밍한다는 건 입력이 `.def` 파일과 리소스 스크립트이고 피드백 루프가 분 단위로 측정되는 빌드 시스템을 배우는 일이었다. TP 7은 그걸 Win32 API의 객체지향적 모양에 맞는 일관된 도구 하나로 접었다. 10년치 Windows 애플리케이션을 어지럽힌 그 유명한 초록 체크 버튼이 OWL의 기능이다. 프레임워크의 기본값이 어떻게 모두의 디자인이 되는지 보여주는 좋은 예시다.

스레드의 반대편 균형추는 타당하다. 터보 파스칼은 싸고 훌륭했고, 그래도 졌다. 델파이가 더 나은 제품이었고 Windows가 앞으로 나아갔으니까. Boone이 진짜 애도하는 건 파스칼이 아니다. 한 사람이 머릿속에 담을 수 있을 만큼 작은 툴체인이다 — 그 뒤로 꾸준히 줄어온 범주이고, 지금 세대의 AI 코딩 하네스가 되살릴지 끝장낼지 갈림길에 있는 범주다.

## 사고 도구로서의 글쓰기 — 213 points

**213 points** · 72 comments · [muratbuffalo.blogspot.com](http://muratbuffalo.blogspot.com/2026/11/writing-as-thinking-tool.html) · [HN discussion](https://news.ycombinator.com/item?id=50412067)

Murat Demirbas는 노트를 하지 않고는 긴 글을 읽지 못한다. 중학교 때 들인 습관인데, 10년 뒤 Manuel Blum의 조언 — 유한 오토마타와 튜링 기계의 차이는 종이와 연필뿐이다 — 을 읽고서야 이해했다. 글쓰기는 사고의 기록이 아니라, 다른 종류의 사고를 가능하게 하는 테이프다. 그는 이걸 아웃오브코어 실행이라고 부른다. 논문을 리뷰할 때 이해했다고 생각하다가, 리뷰를 쓰기 시작하는 순간 60%만 이해했다는 걸 깨닫는다.

구체적인 예시가 좋은 쪽이다. Paxos와 나카모토 합의의 구조적 유사성에 대한 2018년 블로그 글은 그 테제 없이 시작했다. 연결은 쓰는 도중에 나타났고, 연구 논문의 씨앗이 됐다. 아웃라인으로는 절대 하지 못했을 일을 프리라이팅이 한 것이고, 산출물보다 산출 행위가 더 중요하다는 글의 가장 강한 논거다.

그다음 그는 이걸 현재로 돌린다. 그리고 이 문단이 반박할 만하다. 모델이 사고 없이 여섯 쪽짜리 메모를 만들 수 있다면, 여섯 쪽짜리는 명료한 사고의 증거이기를 그만둔다. 베조스의 말 — "여섯 쪽짜리 서사형 메모를 쓰고서 명료하게 사고하지 않을 방법은 없다" — 은 조용히 거짓이 된다. LLM이 창의적 도약을 못 한다는 그의 확신은 단언이고, 이 글에서 독자가 받아들이지 말고 시험해봐야 할 유일한 주장이다. 하지만 그가 짚는 메커니즘은 그 주장이 맞는지에 달려 있지 않다. 모델이 뭘 할 수 있든, 독자는 더 이상 산출물에서 과정을 추론할 수 없다. 그리고 글 산출물을 사고의 대리 지표로 써온 모든 기관은 이제 자기가 눈치채지 못한 검증 문제를 안고 있다.

## 우라늄 큐브가 독일 핵 프로젝트가 실패한 이유를 밝힌다 — 201 points

**201 points** · 143 comments · [arstechnica.com](https://arstechnica.com/science/2026/11/uranium-cubes-reveal-why-the-german-nuclear-project-failed/) · [HN discussion](https://news.ycombinator.com/item?id=50377661)

Timothy Koeth는 2013년에 무거운 금속 큐브 하나를 받았고, 그게 독일 전시 원자로 실험의 우라늄 큐브 중 하나라는 걸 알아봤다. 그 큐브들과 B8 노심 설계 분석을 바탕으로 한 PNAS Nexus 논문은 독일 계획이 임계에 도달할 경로가 애초에 없었다고 결론 내린다. 하이젠베르크 팀이 만들던 설계에 우라늄이 충분하지 않았고, 중수도 충분하지 않았다. 가까웠고 재료가 조금만 더 있었으면 됐다는 하이젠베르크의 전후 주장은 숫자를 견디지 못한다.

물리는 쉬운 부분이다. 이 이야기를 오래 살게 만드는 건 그 밑에 깔린 질문이고, 논문이 결론을 내지 않는 부분이다. 부족이 자원 제약이었는지, 설계 오류였는지, 아니면 작동하는 원자로가 무엇을 함의하는지 알고 서두르지 않은 물리학자들의 결정이었는지. 큐브는 재료가 없었다고 말해줄 수 있다. 왜 아무도 더 열심히 구하지 않았는지는 말해주지 못한다. 스레드는 Farm Hall 녹취록, 하이젠베르크의 의도에 대한 경쟁적 해석 같은 사학사를 훑고도 수렴하지 않는다. 증거가 무능에 대한 이야기와 주저에 대한 이야기를 둘 다 지지하기 때문이다.

이 모호함이 이 이야기가 몇 년마다 다시 올라오는 이유다. 질문 하나를 깔끔하게 닫는 물리학 논문은 헤드라인보다 가치 있지만, 독자들은 계속 다른 질문을 보러 온다.

## 섹션 아래, 새로 올라온 것들

- **[Person of Interest](https://krthr.co/person-of-interest/)** ([273 points](https://krthr.co/person-of-interest/), 180 comments) — 2011년 감시 드라마를 다시 보고, 그때보다 덜 공상적이라는 걸 깨달았다는 짧은 이중언어 글. 스레드는 대부분 Machine이 지금 존재하는 것에 얼마나 가까운지를 두고 싸운다. 전제가 폭력 범죄를 예측하는 대규모 감시 시스템이고, 픽션 속 제약이 "인간이 출력을 읽어야만 작동한다"였던 드라마에 대해서는 맞는 논쟁이다.
- **[8달러 리눅스 컴퓨터 (2022)](http://thelittleengineerthatcould.blogspot.com/2022/12/the-8-linux-computer.html)** ([251 points](http://thelittleengineerthatcould.blogspot.com/2022/12/the-8-linux-computer.html), 96 comments) — 마이크로컨트롤러처럼 생겼는데 리눅스가 도는 보드, Sipeed OX64. 글은 장애물 목록이다. USB 프로그래밍이 안 되니 UART뿐이고, 플래싱 도구는 Wayland에서 죽고, CH340G 동글은 핸드셰이크에 실패해서 우회책이 RP2040에서 플래싱하는 것이다. 싼 하드웨어의 진짜 비용은 툴링이고, 이건 4년 된 글이면서 여전히 최신 상황을 설명한다.
- **[그리스에도 자기 폼페이가 있다](https://www.smithsonianmag.com/history/greece-has-its-own-pompeii-and-the-ruins-tell-a-captivating-story-of-bronze-age-life-180987623/)** ([205 points](https://www.smithsonianmag.com/history/greece-has-its-own-pompeii-and-the-ruins-tell-a-captivating-story-of-bronze-age-life-180987623/), 27 comments) — 테라 화산이 폭발했을 때 재와 부석 약 200피트 아래 묻힌 산토리니의 아크로티리. 주민들은 지진을 느끼고 대폭발 전에 떠났고, 귀중품은 챙기고 프레스코는 두고 갔다. 그래서 이 유적이 무덤이 아니라 타임캡슐이다. 분화 시점은 아직도 논쟁이고, 그 논쟁이 댓글을 읽을 만하게 만든다.
- **[2 네 개로 아무 정수 만들기 (2025)](https://eli.thegreenplace.net/2025/making-any-integer-with-four-2s/)** ([201 points](https://eli.thegreenplace.net/2025/making-any-integer-with-four-2s/), 53 comments) — 디랙이 1920년대에 반복 제곱근과 밑 2 로그로 four-twos 퍼즐의 일반해를 찾았다. 2가 세 개 필요하니, 네 번째는 `2 = √(2+2)`에 쓰면 퍼즐이 죽는다. 대부분의 여가 수학 퍼즐은 영리한 로그 항등식 하나만 떼면 자명해지고, 재미는 모르는 데 있었다는 걸 잘 보여주는 사례다.

## 아직 페이지에 남은 것들

여러 날에 걸친 점수는 서로 비교할 수 없다. 이전 글 네 편과 같은 스캔 방식이다. 그 글들에서 나온 스토리 40개가 아직 순위에 있고, 현재 점수 순으로 정렬했다.

| 스토리 | 이전 | 11월 8일 |
|---|---|---|
| [sshole](https://sshhole.com) | 2,950 (11-07) | 2,975 (+25) |
| [Claude Code가 웹사이트에 당신의 이메일 주소를 보낸다](https://github.com/anthropics/claude-code/issues/107757) | 1,588 (11-07) | 1,599 (+11) |
| [AI가 우리에게 40년치 기술 부채를 갚게 만들고 있다](https://spectrum.ieee.org/ai-in-cybersecurity-php2shell-vulnerability) | 1,294 (11-07) | 1,303 (+9) |
| [테슬라, 사이버트럭 생산을 접는다](https://www.nbcnews.com/tech/tech-news/tesla-wind-cybertruck-production-years-poor-sales-markets-rcna607817) | 1,117 (11-07) | 1,147 (+30) |
| [니드 포 스피드 언더그라운드 2, 브라우저에서 온라인으로](https://nfsu2.xyz/) | 667 (11-07) | 1,104 (+437) |
| [Libghostty 1.0](https://mitchellh.com/writing/libghostty-1-0) | 980 (11-07) | 1,068 (+88) |
| [모든 Mac에 (문서화되지 않은) 가족 구성원 분류기가 들어 있다](https://8rank.ai/game/apple-intelligence-personal-knowledge-graph) | 498 (11-07) | 835 (+337) |
| [Blender의 UI와 런타임: GPUI보다 훨씬 빠르다](https://github.com/ppmpreetham/BUI) | 712 (11-07) | 735 (+23) |
| [Tell HN: Gemini는 구독자도 채팅 기록으로 학습한다 (개인 계정)](https://news.ycombinator.com/item?id=50363461) | 728 (11-07) | 734 (+6) |
| [MS 페인트 원격 코드 실행 취약점](https://www.cve.org/CVERecord?id=CVE-2026-83844) | 712 (11-07) | 723 (+11) |
| [네덜란드 '이상주의' 은행 ASN, GrapheneOS 포함 비구글 안드로이드 차단](https://github.com/PrivSec-dev/banking-apps-compat-report/issues/105) | 641 (11-07) | 653 (+12) |
| [Salon에서의 작별](https://www.salon.com/2026/11/05/goodbye-from-salon/) | 646 (11-07) | 651 (+5) |
| [Kimi K3.1 Pro 모델 가중치 공개](https://huggingface.co/moonshotai/Kimi-K3.1-Pro) | 636 (11-07) | 639 (+3) |
| [영국, 구인광고 급여 공개 의무화](https://www.reuters.com/business/world-at-work/britain-make-salary-disclosure-job-ads-mandatory-2026-11-05/) | 605 (11-07) | 621 (+16) |
| [엔비디아 RTX Spark 암호화 펌웨어, 리눅스에서 추론 속도를 35%로 떨어뜨린다](https://www.mindstudio.ai/blog/linux-nvidia-rtx-spark-laptop) | 615 (11-07) | 617 (+2) |
| [Opus에게 도움을 청할 수 있는 Jev, 4배 싼 값에 Opus 정확도](https://hightouch.com/blog/llm-judges-identity-resolution) | 568 (11-07) | 594 (+26) |
| [쿠반: 페이스북은 AI 딥페이크 사기 광고를 알면서 돌린다, 문서에는 사기 수익 160억 달러](https://finance.yahoo.com/technology/ai/articles/mark-cuban-says-facebook-knowingly-213000020.html) | 510 (11-07) | 517 (+7) |
| [Discord, Electron 버리고 새 앱이 램을 덜 쓴다](https://www.theverge.com/news/1027379/discord-ditching-electron-web-app) | 489 (11-07) | 493 (+4) |
| [마이크로소프트 리서치 AI Frontiers 그룹의 끝](https://hunch.net/?p=13764006) | 219 (11-07) | 486 (+267) |
| [Window Sweaters](https://github.com/saragordic/window-sweaters) | 456 (11-07) | 462 (+6) |
| [Asahi Linux 진행 보고서 7.3](https://asahilinux.org/2026/11/progress-report-7-3/) | 266 (11-07) | 408 (+142) |
| [미국 FAA, 2028년까지 항공교통관제에서 플로피디스크 퇴출](https://www.reuters.com/world/us/us-faa-says-it-will-phase-out-floppy-disks-air-traffic-control-by-2028-2026-11-05/) | 401 (11-07) | 403 (+2) |
| [Deus Ex](https://www.filfre.net/2026/11/deus-ex/) | 368 (11-07) | 383 (+15) |
| [AI가 AI 연구를 극적으로 가속하고 있다](https://www.planned-obsolescence.org/p/ai-is-dramatically-accelerating-ai) | 356 (11-07) | 372 (+16) |
| [Gemini Omni 1.2 Flash](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/) | 356 (11-07) | 366 (+10) |
| [MCP 해설](https://mcp-explained.com/) | 340 (11-07) | 345 (+5) |
| [리눅스에서 위키피디아까지: 자원봉사자들이 인터넷을 만드는 방법](https://thereader.mitpress.mit.edu/from-linux-to-wikipedia-how-volunteers-build-the-internet/) | 338 (11-07) | 344 (+6) |
| [Pwn.college](https://pwn.college/) | 325 (11-07) | 334 (+9) |
| [앤트로픽 IPO 매수자들, 기업가치 최저 1.1조 달러로 본다](https://www.bloomberg.com/news/articles/2026-11-06/anthropic-ipo-valuation-expectations-pressured-after-ai-rout) | 302 (11-07) | 318 (+16) |
| [자유 소프트웨어로 법률 사무소 운영하기](https://decoded.legal/blog/2026/11/running-a-law-firm-on-free-software-2026-edition/) | 205 (11-07) | 294 (+89) |
| [Firecracker VM 탈출: PwnEscape 2부](https://pwn.ai/blog/firecracker-escape) | 277 (11-07) | 287 (+10) |
| [Starfall – 저렴하고 일상적인 미세중력 접근](https://www.spacex.com/starfall) | 285 (11-07) | 287 (+2) |
| [Kugelblitz – Mac 네이티브 구글 어스 대안](https://apps.metaebene.me/en/kugelblitz) | 262 (11-07) | 272 (+10) |
| [잘 알려지지 않은 오디오 코덱이 N64에 딱 맞는다](https://phoboslab.org/log/2026/11/n64-ulc-codec) | 264 (11-07) | 268 (+4) |
| [UEFI로 하는 베어메탈 프로그래밍 첫걸음](https://kevinboone.me/efitest_index.html) | 246 (11-07) | 251 (+5) |
| [GitHub의 새 Git 저장 아키텍처](https://github.blog/engineering/architecture-optimization/inside-githubs-new-git-storage-architecture/) | 212 (11-07) | 235 (+23) |
| [그래서 내 ISP가 내 DNS를 가로채고 있었다](https://www.karthihegde.dev/posts/dns_tampering) | 231 (11-07) | 233 (+2) |
| [AI R&D가 독창적이라는 걸 믿기 어렵다](https://www.lesswrong.com/posts/DALNiKBjMGMF8grme/arjun-panickssery-s-shortform?commentId=fJtaHHHfx45tD7BSL) | 211 (11-07) | 220 (+9) |
| [나트륨이온 배터리, LFP와 원가 동등성에 접근](https://www.pv-magazine.com/2026/11/06/sodium-ion-batteries-approach-cost-parity-with-lfp-with-70-gwh-covered-by-supply-agreements/) | 210 (11-07) | 219 (+9) |
| [우분투 26.04의 Rust sudo는 표준 sudo와 호환되지 않는다](https://utcc.utoronto.ca/~cks/space/blog/linux/Ubuntu2604RustSudoNotCompatible) | 200 (11-07) | 206 (+6) |

이름 붙일 만한 무버 여섯. 니드 포 스피드 언더그라운드 2가 667 → 1,104 (+437). 2004년 레이싱 게임의 브라우저 포팅이 이제 맨 위 네 개를 빼고 페이지의 모든 스토리를 앞질렀다. Mac 가족 분류기 연구는 498 → 835 (+337)로, 하룻밤에 댓글 141개를 얻었다. 사람들이 자기 기계를 확인하러 갈 때 벌어지는 일이다. 마이크로소프트 리서치 AI Frontiers 글은 219 → 486 (+267), Asahi Linux 266 → 408 (+142), 자유 소프트웨어로 도는 법률 사무소 205 → 294 (+89), Libghostty 980 → 1,068 (+88). 나머지는 감쇠다. 스토리 34개가 0에서 30점 사이를 더했고, 잃은 것은 하나도 없다.

이전 글에서 나온 스토리 일곱 개가 200점을 넘긴 채 순위 창 밖으로 빠졌다. 백악관 네트워크에서 탐지된 주거용 프록시, Stringman, Kagi의 검색 체인지로그, 바이낸스 해킹, 모토로라의 GrapheneOS 폰, Jelly Sheet, Qwen 가중치. 현재 점수가 이번 스캔에 없으므로, 추정하지 않고 여기 보고하지 않는다.

## 관통하는 선

페이지는 사람과 모델 사이의 루프를 누가 소유하느냐를 두고 싸우고 있다. 네 스토리가 같은 싸움의 다른 각도다. 1년에 244번 릴리스가 발밑을 계속 흔들어서 기존 하네스를 떠난 개발자, 그 하네스가 저장소가 보호하지 않는 파일에 자격증명을 적는다는 걸 찾아낸 보안 업체, 코드가 리뷰되는 사람들에게만 하네스를 허용한 은행, 그리고 모델의 점수가 시험을 알아보느냐에 달려 있다는 걸 보여준 벤치마크. 이제 제품은 하네스이고, 리스크도 하네스에 산다. 앤트로픽 엔지니어가 스레드에 나타나 "좋은 지적"이라고 말하는 것, 그게 제품이 명령을 디스크에 쓰는 권한 시스템일 때의 책임의 모습이다.

두 번째 축은 산수다. 10달러 모뎀 스틱이 홈랩을 돌린다. 284B 모델이 가중치당 1.7비트로 데스크톱 램에서 초당 10토큰을 디코드한다. 1997년 컴파일러 하나가 명령줄 도구 더미를 이겼다. 각각은 소프트웨어가 이미 존재하는 하드웨어에 들어갈 만큼 작아진 사례이고, 각각의 비용은 실재한다. 1.7bpw는 품질을, Cortex-A53 네 개는 처리량을, 단일 파일 허니팟은 예산에 없던 유지보수를 값으로 치른다. 이들을 묶는 주장은 "싼 게 낫다"가 아니다. 지난 10년의 기본값 — Electron, 클라우드 추론, 좌석당 에이전트 — 의 가격이 이제 청구서 항목에 보이고, 사람들이 그걸 우회해서 돈다는 것이다.

세 번째 축은 가장 불편하다. 무엇을 말하지 않을지 결정하는 시스템. 애플은 키보드가 완성하지 않는 문구 10만 개를 갖고 있고, 아무도 공개하지 않았고, 연구자가 자기 엄지가 계속 빗나가는 걸 알아차려서야 발견됐다. MaxxBench는 벤치마크의 기대 답에 맞추려고 자기 잘한 작업을 지우는 모델을 찾았다. 둘 다 악의적이지 않다. 둘 다 같은 실패 모드다. 아무도 검사할 수 없는 최적화 목표가 결정처럼 보이는 행동을 만들어낸다. 키보드가 "male chauvinist pig"를 제안하지 않는 것과 모델이 자기가 옳다는 걸 아는 코드를 쓰지 않는 것의 차이는, 제약을 찾기가 얼마나 쉬운가의 차이일 뿐이다.
