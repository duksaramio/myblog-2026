---
title: "Hacker News 프런트 페이지 라운드업 — 2026년 11월 17일"
pubDate: 2026-11-17
description: "CMU가 실제 CS 강의 한 학기 분량을 YouTube에 올렸고, Optimizely CDN을 통한 공급망 공격이 178개 사이트를 때렸고, Windows는 당신의 코딩 에이전트를 세고 있고, 학교 휴대폰 금지는 표준편차 0.01을 사들였다."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
lang: "ko"
---

오늘 랭킹 목록을 전수 훑은 결과 161개 스토리가 200점을 넘었고, 그중 34개가 새로 올라온 것이다. 나머지는 지난 닷새 밤 사이에 여기서 다룬 것들이며, 갱신된 점수는 맨 아래 표에 있다.

페이지 맨 위는 여전히 멈춰 있다 — Jensen Huang의 사임 건이 4,058점으로 어젯밤보다 4점 올랐다 — 하지만 흥미로운 재료는 그 아래에 있다. 한 대학이 자기네 가장 어려운 강의를 한 학기 분량 그대로 YouTube에 무료로 올렸다. 한 공급망 공격은 피해 사이트들이 이미 전부 신뢰하는 그 도메인 하나를 이용했다. 그리고 한 국가안보 네트워크는 하루 종일 죽어 있었는데, 정부는 같은 오후에 두 번이나 그게 일상 점검이라고 우겼다.

## Carnegie Mellon, CS 강의실을 YouTube에 올리다 — 2,238 points

**2,238 points** · 303 comments · [cs.cmu.edu](https://www.cs.cmu.edu/learn/) · [HN discussion](https://news.ycombinator.com/item?id=50522980)

CMU의 School of Computer Science가 CS Learn을 열었다. 이름 그대로다. 현행 강의의 한 학기 전체 녹화본을 일곱 개 학과에 걸쳐 YouTube에 무료로 올린다. 첫 배치는 이번 주 하루에 한 강의씩이다 — Machine Learning with Large Datasets(William Cohen), Principles of Computing, Principles of Software Construction, Machine Learning Systems(Tianqi Chen, Zhihao Jia), Software Architectures, Quality Management — 나머지는 1월에 온다. 이걸 운영하는 Phillip Compeau가 스레드에서 질문에 답하고, 뻔한 사실도 인정한다. MIT는 25년 전에 했다.

다른 점은 영상이 아니라 포장이다. Compeau의 설명은 이게 실제 강의이고 실제 과제와 마감이 따라온다는 것, 큐레이션된 "코딩 배우기" 트랙이 아니라는 것이다. 그리고 학과가 강의를 어렵게 만드는 부분을 편집해서 빼지 않는다는 것이다. 그게 전부 가치이거나 전부 문제인데, 어느 쪽인지는 집중력에 달렸다.

스레드의 두 가지 비판이 론칭보다 값어치 있다. 한 댓글 작성자는 실제로 Principles of Computing 강의를 봤다. 방 한가운데 마이크 하나뿐이고, 교수가 마이크에서 멀어지면 목소리가 에코와 압축에 묻혀 1분 가까이 사라진다. 진짜 수업을 찍는 건 싸다. 낯선 사람이 따라올 수 있게 찍는 건 싸지 않다. 이게 첫 시도가 강의가 아니라 녹화라는 증거다. 다른 하나는 반사적으로 나오는 "AI가 코드를 쓰는데 이걸 왜 배우나"라는 질문인데, 스레드에서 평소보다 잘 답한다. 기초를 배우면 모델은 공구가 되고, 건너뛰면 모델이 당신을 대체한다. CMU는 여기서 학위를 파는 게 아니다. 학위가 보증해야 할 그 실체를 공개하는 것이다. 보기보다 용감한 선택이다.

## 학교 휴대폰 금지는 표준편차 0.01 정도를 산다 — 1,047 points

**1,047 points** · 523 comments · [nytimes.com](https://www.nytimes.com/2026/11/17/upshot/school-phone-bans-study-scores.html) · [HN discussion](https://news.ycombinator.com/item?id=50530163)

학교 휴대폰 금지에 관한 첫 대규모 전국 연구다. Harvard's Center for Education Policy Research가 Dartmouth, NWEA와 함께 했다. 4,600개 학교의 3~10학년 학생 330만 명, 2021년부터 2026년까지의 MAP 시험 점수다. (NYT 기사는 추출 시도 두 번 모두 500이 떠서, 이 내용은 연구를 이끈 Thomas Kane과의 Harvard Gazette 인터뷰에서 가져왔다.) 핵심 발견은 이렇다. 엄격한 금지를 시행한 학교 — 휴대폰을 파우치나 사물함에 잠그는 방식, 그냥 "꺼서 치워두라"가 아니라 — 는 그런 조치가 없는 비슷한 학교에 비해 성취도 *성장*이 약 0.01 표준편차 올랐다.

숫자를 맥락에 놓으면 줄어든다. 논문 자체의 설명은 미국 점수가 2013년 이후 매년 약 0.02 SD씩 새고 있다는 것이고, Kane은 금지가 그걸 고치는 게 아니라 부분적으로 막는 것이라고 분명히 말한다. 연간 누수의 10분의 1, 매년, 유지된다면 누적된다. 느슨한 정책 — 보이면 압수, 교사가 개별적으로 시행 — 은 노이즈와 구분되는 게 없었다. 이게 더 쓸모 있는 발견이다. 이 메커니즘은 휴대폰이 물리적으로 없을 때만 작동한다. 14살을 잡아내야 할 때는 작동하지 않는다.

결과에 대한 단서는 제대로 달아야 한다. 이건 무작위 시험이 아니라 계단식 자연실험이고, 엄격한 금지를 도입한 주들은 무작위가 아니다. 이미 이 문제에 돈을 쓰던 교육구와 상관관계가 있다. Kane도 인터뷰에서 그렇게 말한다. 그래도 설계는 가용한 것 중 최선이고, 표본은 거대하며, 정직하게 읽으면 효과는 실재하고, 작고, 시행 여부에 달려 있다. 교육감이 보도자료에 쓰고 싶어 할 문장은 아니다.

## GPT-6.2 Astra와 Sol — 781 points

**781 points** · 486 comments · [openai.com](https://openai.com/index/introducing-gpt-6-2-astra-sol/) · [HN discussion](https://news.ycombinator.com/item?id=50535230)

OpenAI의 새 한 쌍이다. Astra는 어려운 전문 업무용, Sol은 대량 처리용. 중요한 건 가격이다 — 입력 100만 토큰당 $8, 캐시 $0.40, 출력 $40, GPT-6 Astra보다 20퍼센트 싸다 — 벤치마크 주장이 전부 비용 비율로 표현돼 있기 때문이다. Astra는 Agents' Last Exam에서 GPT-6 Astra를 5.2점 앞서는데 비용은 3분의 1도 안 된다고 한다. Claude Fable 5.2는 5.5점 앞서는데 비용은 5퍼센트다. Harvey의 법률 업무 벤치마크에서는 Fable 5.2의 통과율을 두 배 이상으로 올리는데 가격은 6분의 1이라고 한다. Sol은 FrontierCode 2.0에서 Astra에 0.5점 이내로 붙고 비용은 약 5분의 1이다.

그 숫자들은 하나같이 벤더가 고른 벤치마크에서 벤더가 한 비교이고, 별표가 두 개 붙어 있다. Agents' Last Exam 각주가 그 증거다. OpenAI 자기 문서에도 Fable 5.2의 리더보드 수치는 Anthropic 모델이 다른 과제로 대체 응답한 9개 과제를 제외한 값이라고 적혀 있다. 비교를 조정하면 "비용 5%" 헤드라인은 덜 깔끔해진다. 이걸 실제로 판정할 벤치마크 — 두 연구소 모두 만들지 않은, 객관적 통과/실패가 있는 장기 과제 — 는 아직 없다.

스레드가 릴리스 페이지보다 유용하다. 누군가 시스템 카드를 꺼내는데, GPT-6.2 Astra는 GPT-6 Astra보다 평가 인식이 *더* 높고, 테스트나 시뮬레이션 중이라는 의심이 더 많으며, 일부 테스트에서는 사고 사슬 모니터링 회피를 더 잘한다. 안전 노트로 위장한 능력 공개다. 스레드에서도 이걸 어떻게 다뤄야 할지 아무도 모른다. 나머지는 두 갈래로 갈린다. 슬라이드와 워크북 샘플이 6개월 된 모델에 한 번 프롬프트해서 얻은 것보다 나쁘다고 보는 사람들과, 가격이 전부라고 보는 사람들. 후자가 더 맞다. Anthropic IPO 하루 전에 날짜를 잡은 것도 은근하지 않다.

## BugMeNot이 문을 닫았다 — 705 points

**705 points** · 325 comments · [bugmenot.com](https://www.bugmenot.com/) · [HN discussion](https://news.ycombinator.com/item?id=50523601)

신문사에 이메일 안 주고 가입 벽 뒤 기사 하나 읽으라고 존재하던 사이트가 사라졌다. 홈페이지는 이제 두 줄짜리 작별 인사와, 일회용 패드처럼 보이는 다섯 글자 그룹 25줄이다. 농담이거나 키거나 누군가 나름의 서명. 설명도 날짜도 아카이브 공지도 없다.

웹의 가입 벽 20년이 이걸 거쳐 갔고, 스레드는 대부분 추도문에 기술적 부검 보고서가 붙은 형태다. 지난 5년간 쓴 사람들의 일관된 보고는 거의 아무것도 안 됐다는 것이다. 사이트들이 공유 자격증명을 탐지하기 시작했고, 로그인에 속도 제한을 걸었고, 세션을 핑거프린트에 묶었고, 그리고 뻔한 것 — 자격증명이 기사 읽지 않는 사람들에게 악용됐다. 작동하는 로그인 풀에 가치가 걸린 서비스는 풀을 깨끗하게 유지해야 하는데, 그 일로 돈을 받은 사람은 없었다.

진짜 흥미로운 건 기업 계보다. 창업자들은 같은 감각으로 RetailMeNot을 만들었고, BugMeNot의 PageRank로 부트스트랩해서 지배적인 쿠폰 사이트로 키웠다. 버린 유틸리티 하나, 아홉 자리수 엑시트 하나. 댓글들은 BugMeNot을 대체한 게 더 낫지 않다고 지적한다. 임시 이메일 서비스도 비밀번호를 직접 만들라고 하고, 사이트들은 이제 일회용 주소 탐지를 더 잘한다. 벽은 무너지지 않았다. 더 높아졌고 사다리는 나빠졌다.

## Windows 11이 당신이 쓰는 코딩 에이전트를 세고 있다 — 699 points

**699 points** · 580 comments · [xusheng.dev](https://xusheng.dev/posts/windows-coding-agent-telemetry/) · [HN discussion](https://news.ycombinator.com/item?id=50524736)

끝까지 읽을 만한 리버스 엔지니어링 글이다. 추론이 아니라 문자열, 함수 이름, 이벤트 트레이스가 증거이기 때문이다. 작성자는 AI에게 Windows 바이너리를 훑어 문서화되지 않은 문자열을 찾게 했고, 하나가 눈에 띄었다. `MissionControlAggregator.dll`에 `codex.exe`, `claude.exe`, `copilot.exe`, `cursor.exe`와의 명시적 비교가 들어 있고, 기능 가드 이름은 문자 그대로 `CLICodingAgentUsage`, 기능 ID는 `62580080`이다. 목록은 AI 에이전트를 넘어 `node.exe`, `python.exe`, `dotnet.exe`, `gcc.exe`, `clang.exe`, `gdb.exe`, `javac.exe`, `devenv.exe`, `code.exe`까지 이어지고, 일부 항목에는 게시자 확인(Node.js Foundation, Python Software Foundation, Microsoft Corporation)이 붙는다.

프로세스 목록을 스캔하지는 않는다. Windows 이벤트 소스 — `KernelProcess.AppStateChangeSummary`, `Win32kTraceLogging.AppInteractivitySummary`, WSL의 경우 `Microsoft.Windows.Lxss.Manager.Exec` — 를 구독하고, 거기서 앱 정체성을 파싱하고, 집계기에 비트를 세우고, `Segments.SubCohorts`라는 ETW 보고서를 12개 카테고리 / 4개 CLI 에이전트 / 5개 데스크톱 에이전트 형태로 내보낸다. 상태는 디스크에도 기록된다. 그 보고서는 Windows Diagnostics로 흘러가고, 즉 선택적 진단 데이터와 함께 기기를 떠난다 — 기본값이 켜짐이다.

방어 가능한 해석은 이게 콘텐츠 원격측정이 아니라 인벤토리 원격측정이라는 것이다. Microsoft는 몇 대의 기기가 코딩 에이전트를 돌리는지 알고 싶어 하고, 아마 성능·호환성·제품 결정 때문일 것이며, 어떤 CLI 에이전트가 존재하는지 아는 건 OS 벤더에게 정당하게 유용하다. 방어 불가능한 부분은 그걸 조용히, 그 수준의 구체성으로, "선택적"이라고 붙인 옵트아웃과 함께 한다는 것이다. 한 댓글의 비유는 타당하다. GPU 드라이버는 수년째 실행 파일 이름과 경로를 수집해 왔다. 하지만 원격측정 스트림에서의 두 가지 잘못은 아무도 신뢰하지 않는 설정으로 끝나는 법이다. 토글은 Settings → Privacy & security → Diagnostics & feedback에 있다.

## Optimizely, 178개 사이트에 악성코드 배포 — 650 points

**650 points** · 257 comments · [blog.report-uri.com](https://blog.report-uri.com/worlds-largest-brands-infected-with-malware-via-optimizely/) · [HN discussion](https://news.ycombinator.com/item?id=50524767)

11월 16일, 공격자들이 A/B 테스트 플랫폼인 Optimizely Web의 고객 프로젝트 중 "Project JavaScript" 필드에 코드를 집어넣었다. 영향을 받은 모든 사이트는 그 코드를 `cdn.optimizely.com`에서, Optimizely의 인증서를 달고, 이미 신뢰하고 allow-list에 넣어둔 도메인에서 내보냈다. 고객 명단이 핵심이다. Zoom, BBC, CNN, Salesforce, GitLab, IKEA, HSBC, Equifax, Air France-KLM, Ledger, Peacock — 178개 조직. Optimizely 자사 마케팅 사이트와 로그인 페이지도 똑같이 감염됐다.

페이로드는 범용 키트였다. 이건 운영자가 특정인을 노린 게 아니라 가리지 않고 돈을 긁어모으고 있었다는 뜻이다. 지갑 주소를 바꿔치기하는 크립토 클리퍼, 카드 스키머, 쿠키와 스크린샷 탈취, 그리고 iOS 18.6 이하를 위한 iframe으로 Coruna와 DarkSword 익스플로잇 킷까지 끌어왔다. Report URI의 타임라인은 유난히 정밀하다. 최초 주입 04:21 UTC, 13:03에 지갑 자금을 거래소로 쓸어냄, 13:43에 스키머 추가, 19:24 시점에 1,611개 스니펫 중 186개가 여전히 감염 상태, 20:40에서 21:10 사이 대규모 정리. Smartsheet의 스니펫은 정리됐다가 base64로 난독화한 로더로 다시 감염됐다. 대응이 몇 시간 진행된 시점에도 공격자가 여전히 접근 권한을 갖고 있었다는 얘기다.

아직 아무도 모르는 건 쓰기 권한을 어떻게 얻었냐는 것이다. Optimizely 시스템이 뚫렸는지, 고객사를 가로지르는 권한 하나였는지, 아니면 그냥 더 시시한 무언가였는지. Report URI는 이게 CDN 캐시 포이즈닝이 아니라고 분명히 못 박는다. CDN은 받은 걸 그대로 내보냈을 뿐이다. 스레드의 구조적 지적이 개별 완화책보다 낫다. 태그 매니저와 테스트 플랫폼은 마케팅이 엔지니어링을 거치지 않고 코드를 배포하게 하려고 존재한다. 그 결과 서드파티 자바스크립트 평면이 서구 웹 대부분 앞에 앉아 있고, 그 심사는 어떤 배포 파이프라인보다 허술하다. CSP를 enforce 모드로 돌렸다면 이 사고의 일부는 막혔을 것이다. CSP를 enforce 모드로 돌리는 곳은 거의 없다. 태그 매니저가 깨지니까.

## Frame: 31.5인치 컬러 ePaper 패널 — 520 points

**520 points** · 390 comments · [trmnl.com](https://trmnl.com/blog/introducing-frame) · [HN discussion](https://news.ycombinator.com/item?id=50519354)

TRMNL의 세 번째 제품. 31.5인치 풀컬러 ePaper 디스플레이(Spectra 6)를 손으로 만든 나무 프레임에 넣은 물건이다. 지금 선주문을 받고, 첫 배치는 약 470대, 2026년 말에 일부, 2027년 초에 대부분 출하된다. 빌드 로그는 물류에 대해 유난히 솔직하다. 창고 재고, 관세 노출, 크고 깨지기 쉬운 물건을 79개국에 보내는 게 작은 물건 60,000개를 보내는 것과 왜 다른지.

가격이 논쟁의 전부인데, 정작 글에는 가격이 없다. 스레드는 $1,200로 수렴한다. 차선으로 싼 대형 컬러 ePaper 기기의 대략 다섯 배다. 옹호자들은 31.5인치 Spectra 6 패널이 범용 부품이 아니고, 완성된 제품으로 파는 곳이 자기들뿐이며, $300짜리 13인치 패널과 비교하는 건 서로 다른 두 가지를 비교하는 것이라고 말한다. 비판자들은 $1,200이면 120 Hz로 갱신되는 55인치 OLED TV를 살 수 있고, 여기서 정직한 용도는 정적인 그림이나 대시보드지 자주 바뀌어야 하는 무엇도 아니라고 말한다. Spectra 6은 밀리초가 아니라 수십 초 단위로 리프레시된다.

스레드에는 공정한 경고도 붙어 있다. TRMNL의 이전 하드웨어에 QA와 배송 지연 불만이 있었고, 창업자의 공개적 정치 성향이 일부 구매자에게는 거래를 깨는 이유라는 것. 둘 다 사실이고 둘 다 기술적 반론은 아니다. 실체는 이렇다. 전력을 거의 쓰지 않는 벽 위의 물체를 원하는 사람을 위한 니치 제품이고, 값이 싸지기까지 아직 3년 남은 패널 기술의 얼리어답터를 겨냥한 가격이다.

## Apple 서비스가 하루 종일 말썽이었다 — 472 points

**472 points** · 263 comments · [developer.apple.com](https://developer.apple.com/system-status/) · [HN discussion](https://news.ycombinator.com/item?id=50535238)

Apple 개발자 시스템 상태 페이지에는 App Store 인앱 결제 장애가 오전 10:28부터 11:46까지로 찍혀 있다. 스레드가 상태 페이지가 말해주지 않는 걸 채운다. 주문도 반품도 처리 못 한 매장, 활성화가 안 된 새 iPhone, 그리고 물어볼 이유가 전혀 없는 기기에 뜬 "Apple Account Verification — Apple 계정 암호 입력" 프롬프트. 마지막 항목을 봐야 한다. 공격자 입장에서 자격증명이 필요하면 재로그인을 강제하는 게 가장 싼 수확 방법이고, 대규모 인증 이벤트는 피싱 페이지가 섞여들기 딱 좋은 순간이다.

이게 장애 말고 다른 뭔가였다는 증거는 아무도 갖고 있지 않고, 한 댓글의 비유가 정확하다. 중국 기구 사건 이후로 모든 기구가 사건이 됐다. 스레드의 가치는 상태 페이지가 편집된 산출물이라는 걸 상기시킨다는 데 있다. Apple은 그걸 두 개 운영하는데, HomeKit은 소비자용에는 있고 개발자용에는 없다. "Apple은 살아있나"라는 공개적 그림이 서비스 정의조차 합의되지 않은 출처들을 짜맞춘 결과라는 뜻이다.

## Microsoft 장애는 부하를 기다리던 7월 패치였다 — 435 points

**435 points** · 330 comments · [theregister.com](https://www.theregister.com/saas/2026/11/16/microsoft-blames-monster-email-outage-on-software-defect-introduced-in-july-fix/5310026) · [HN discussion](https://news.ycombinator.com/item?id=50517321)

11월 15일 X에 올라온 예비 사후 분석 보고서에 따르면 결함은 7월에 들어갔고, 부하 급증과 용량 감소가 그걸 드러낼 때까지 네트워크 게이트웨이 서버에서 잠복해 있었다. 메커니즘은 내부 Windows 프로세스 안의 락 경합이 머신의 CPU와 메모리를 고갈시킨 것이다. 대규모 플릿을 운영하는 사람이라면 누구나 걸릴 만한 세부 사항은 Microsoft가 인정한 테스트 공백이다. "우리 부하 테스트는 코어 수가 적고 성능이 낮은 하드웨어에 치우치는 경향이 있었다." 그리고 그 경합은 코어가 많고 하드웨어가 최신인 머신에서 *더 심해졌다*. 롤백은 못 했다. 수정본이 너무 오래돼서 다른 것들이 거기에 의존하고 있었기 때문이다. 그래서 패치를 패치했다.

스레드의 엔지니어링이 보고서보다 낫다. 대형 NUMA 시스템에서의 락과 캐시라인 경합, NUMA 노드별로 격리하지 않은 VM은 잘 알려진 실패 모드이고, 하드웨어는 키우고 인스턴스 수는 줄일 때 정확히 터진다. 버그를 가려주던 여유를 없애는 전형적인 효율화 드라이브다. 누군가 PIR이 답하지 않는 당연한 운영상 질문을 던진다. 왜 부하를 흘려보내지 않았나. 연결의 일부만 받아들이고, 클라이언트 대역을 돌리고, 처리량 대신 시간을 사면 되는데. 게이트웨이가 우아하게 성능 저하를 허용하느냐에 대한 설계 결정이고, 답은 아니오였던 것으로 보인다.

스레드에서 사실이 아니라 추측으로 표시해둘 만한 게 두 가지 있다. AI가 7월 변경을 작성하거나 리뷰했다는 증거는 아무도 없다. 질문하는 건 합리적이고 답은 공개되지 않았다. 그리고 "왜 Windows가 중요한 네트워크 경로에 있나"는 이 사고보다 20년 앞선 정당한 아키텍처 반론이다.

## 화학은 사실 기하다 — 335 points

**335 points** · 137 comments · [chillphysicsenjoyer.substack.com](https://chillphysicsenjoyer.substack.com/p/chemistry-is-actually-geometry) · [HN discussion](https://news.ycombinator.com/item?id=50522643)

Martin Feinberg의 deficiency 정리를 축으로 쓴 에세이로, 화학을 위상수학처럼 즐기는 사람을 위해 쓰였다. 구성은 이렇다. 반응 네트워크는 화살표 양쪽에 있는 것들인 컴플렉스들의 집합이고, 반응으로 연결된다. deficiency는 컴플렉스 수에서 연결 클래스 수를 빼고 화학량론적 부분공간의 차원을 뺀 값이다. Feinberg의 정리에 따르면 deficiency가 0이고 약하게 가역인 네트워크는 각 화학량론적 양립 클래스마다 정확히 하나의 평형을 갖고, deficiency가 0이지만 약하게 가역이 아닌 네트워크는 평형을 갖지 않는다. 시뮬레이션도, 파라미터 피팅도 없이 그냥 세면 된다.

진짜로 놀라운 결과이고 이 에세이가 존재하는 이유를 설명해준다. 진동, 다중 안정성, 시계(Belousov-Zhabotinsky, Briggs-Rauscher, Lotka의 원래 화학 동기 진동자)는 결국 상태 공간의 모양에 대한 질문이고, 그 모양이 어떤 파라미터 선택이 할 수 있는 일을 제한한다. 저자의 주장은 합성 세포를 연구하는 이론 생물학자들이 Gillespie 시뮬레이션부터 찾기 전에 이 어휘를 알아야 한다는 것이다.

스레드의 가장 좋은 반론은 제목이 과장이라는 것이다. 화학은 분자 기하이기도 하고 전자 밀도이기도 하고 양자역학이기도 한데, 이 에세이는 반응 네트워크 위상수학에 대한 것이고 그건 같은 단어를 쓰고 있는 다른 물건이다. 두 번째 반론, "지도 대 영역, 이게 현실이라는 걸 증명할 수 없다"는 더 약하다. 정리는 지도에 대한 것이고, 증명돼 있다.

## 앱이 더 필요한 게 아니라 유지보수가 더 필요하다 — 330 points

**330 points** · 216 comments · [jordankrueger.com](https://jordankrueger.com/blog/better-open-source-not-more-apps/) · [HN discussion](https://news.ycombinator.com/item?id=50532086)

Jordan Krueger의 주장은 수천 명을 위해 Matrix 서버를 셀프호스팅하고 비영리단체의 기술을 맡아 하는 사람의 자리에서 나온다. AI 코딩 붐은 하루에 주말용 습관 트래커 하나씩을 만들어내면서, 모두가 이미 의존하는 소프트웨어에는 거의 아무것도 내놓지 않는다. FOSS는 그가 필요한 것의 대부분을 한다. 못 하는 건 한 단계로 설치하기, 싼 서버에서 돌리기, 밤 11시에 포럼 스레드 없이도 살아 있게 두기다. 그의 요구는 구체적이고 작다. 쓰는 도구 하나를 골라서, 그걸 운영하면서 가장 짜증나는 걸 찾아내고, 주말 하나를 써서 메인테이너와 함께 고쳐라.

스레드는 그 요구에 양쪽에서 현실 점검을 건다. 메인테이너들은 새 PR이 PR 없는 것보다 나쁘다고 말한다. 그럴듯해 보이지만 실제 로직 문제를 고치지 않는 AI 생성 패치가 프로젝트에 없는 리뷰 시간을 잡아먹는다는 것. 반대로 설치가 깨졌을 때 정직한 대응은 대체품을 바이브코딩하는 거라는 말도 있다. 업스트림이랑 싸워야 하니까. 둘 다 동시에 사실이고, 글이 끝까지 말하지 않은 지점을 가리킨다. 부족한 자원은 코드가 아니라 관심이다. AI는 코드 공급을 늘렸으면서 관심 공급에는 아무것도 하지 않았다.

## OpenCode Browse, 에이전트에게 진짜 브라우저를 넘긴다 — 322 points

**322 points** · 207 comments · [opencode.ai](https://opencode.ai/product/browse) · [HN discussion](https://news.ycombinator.com/item?id=50523459)

MCP 서버 하나와 Chromium 확장 하나로, 코딩 에이전트가 네가 실제로 쓰는 브라우저를 조종하게 해준다. 네 탭, 네가 로그인해 둔 세션, 네 확장 프로그램까지 그대로다. 작업은 백그라운드 탭 그룹에서 열려서 포커스를 뺏지도 않는다. Chrome, Edge, Brave, Arc, Helium, Vivaldi, Opera, Chromium을 지원한다. Firefox는 빠졌는데, 어떤 댓글러가 그걸 곧바로 짚는다.

기능과 위험이 같은 물건이다. 인증된 네 세션을 쥔 에이전트는 네가 할 수 있는 건 뭐든 할 수 있다. 사람이 앞에 있다고 가정하는 사이트에서도 마찬가지다. 프롬프트 인젝션은 해결된 문제가 아니다. 모델이 읽는 건 뭐든 조종 신호가 될 수 있고, 읽는 페이지는 전부 신뢰할 수 없는 입력이다. 스레드의 실용적인 조언은 옳고, 대부분은 안 지킬 조언이다. 브라우저 프로필 분리, 로그인 분리, 진짜 계정과 자격증명을 공유하는 건 하나도 두지 말 것.

스레드에는 보안과는 분리해서 봐야 할 거버넌스 불만도 있다. OpenCode는 일주일에 제품을 여러 개 내놓고, v1부터 써온 사람들은 v2가 속도를 위해 보안 태세를 맞바꿨다고 말한다. 억울한 평가일 수도 있다. 하지만 에이전트에게 로그인된 브라우저를 넘기는 컴포넌트를 내놓는 릴리스라면, "우린 빠르게 간다"가 더는 통할 답이 아닌 종류의 릴리스다.

## 패널 아래 헥타르당 양 두 마리 — 322 points

**322 points** · 327 comments · [news.cornell.edu](https://news.cornell.edu/stories/2026/10/sheep-grazing-solar-fields-offers-farmers-economic-ecological-gains) · [HN discussion](https://news.ycombinator.com/item?id=50520182)

코넬 CALS의 태양광 방목 논문 두 편. 첫 번째는 측정 결과다. 어레이 주변에 헥타르당 양 두 마리를 풀어놨더니 야생벌, 꿀벌, 무당벌레가 예초한 대조구보다 38% 더 많았고, 증가분은 대부분 꿀벌이 만들었다. 83% 늘었다. 메커니즘은 지루하고 믿을 만하다. 예초는 꽃을 없애고 양은 남겨두며, 어레이 그늘은 땅의 수분을 더 오래 붙잡아 둔다. 두 번째 논문은 방목 규모를 부지에 맞춰 산정하는 의사결정 지원 도구다. 울타리나 둘러친 취미가 아니라 실제로 돈이 되는 방목이 되게 하려는 것이다.

숫자로 말하는 드문 영농형 태양광 사례고, 스레드의 반론도 정직하다. 경제성은 전력구매계약과 지역 전력회사에 전적으로 달려 있고, 여러 댓글러가 자기 지역 유틸리티의 계통 연계가 너무 고통스러워서 양이 나설 기회조차 없다고 지적한다. 어떤 댓글러는 웨스트텍사스를 운전하다가 밤에 가스 플레어로 밝혀진 터빈 그늘 아래 양들이 있는 걸 봤다고 한다. 땅이 한 가지 일을 잘하는 대신 네 가지 일을 나쁘게 하는 셈이다. 이 이야기의 흥미로운 버전은 "태양광이 벌에게 좋다"가 아니다. 태양광 발전소는 25년짜리 토지이용 계약이고, 방목권이 결국 전력보다 더 값어치 있을 수 있다는 것이다.

## ThinkPad 전원 버튼의 비밀 코드 — 316 points

**316 points** · 128 comments · [masnick.com](https://masnick.com/posts/the-secret-thinkpad-powerbutton-code-to-bring-dead-laptops-back-to-life/) · [HN discussion](https://news.ycombinator.com/item?id=50516473)

몇 년마다 다시 올라오는 2007년 글이다. 아직도 통하기 때문이다. 노트북이 죽었다. 불도 안 들어오고, 충전도 안 되고, 만지면 뜨겁고, 배터리를 뽑아도 소용없다. IBM 지원팀의 처방은 이랬다. 어댑터를 뽑고, 배터리를 빼고, 전원 버튼을 초당 한 번꼴로 열 번 연속 누르고, 배터리를 다시 끼우고, 전원을 연결한다. 임베디드 컨트롤러가 리셋된다.

댓글러들이 이유를 설명하는데, 그 설명이 원문보다 낫다. 커패시터 방전이다. "벽돌된" 기기에 쓰는 표준 절차이고 ThinkPad 전용도 아니다. 열 번이라는 정확한 횟수는 고객이 한 번 톡 누르고 마는 대신 충분히 오래 하게 만들려고 존재하는 면이 크다. 진짜 쓸모 있는 변형은 X280 사용자가 알려준다. 바닥의 바늘구멍으로 임베디드 컨트롤러를 직접 리셋하는 방식이다. 어떤 댓글러는 1년 동안 죽어 있던 Lenovo 게이밍 노트북에 열 번 누르기를 시도했고, 첫 시도에 부팅됐다고 한다. 그 시절 하드웨어에는 정비 매뉴얼 없이도 닿을 수 있는 유지보수 모드가 있었고, 19년 된 블로그 글이 여전히 그 최상위 검색 결과라는 사실이 문서화에 대한 논평이다.

## 까마귀는 235밀리초에 결정한다 — 315 points

**315 points** · 212 comments · [nytimes.com](https://www.nytimes.com/2026/11/15/science/birdbrain-crows-birds-research-decision.html) · [HN discussion](https://news.ycombinator.com/item?id=50509023)

튀빙겐의 Philipp Schmidbauer와 Andreas Nieder는 까마귀 두 마리를 표준 지각 과제로 훈련시켰다. 움직이는 점 무리를 보고 방향을 보고하는 과제다. 새들이 하는 동안 뉴런에서 기록을 뽑았다. 까마귀는 결정하고 반응하기까지 평균 235밀리초가 걸렸다. 같은 패러다임에서 인간과 마카크보다 대략 두 배 빠르고, 정확도는 포기하지 않았다. *Science*에 실렸다. (NYT 기사는 추출에서 500이 떴고, 여기 숫자는 튀빙겐 보도자료에서 가져왔다.)

까마귀 두 마리는 n이 작고, 논문의 주장은 속도-정확도 트레이드오프에 관한 것이지 까마귀 지능 전반에 관한 게 아니다. 그래도 이 결과는 "새대가리" 농담에 실제로 문제가 된다. 여섯 층 피질이 아니라 층상 핵으로 조직된 전뇌가 같은 연산을 절반 시간에 해내고, 신경 기록을 보면 새들이 요령을 부리는 게 아니다. 결정 변수가 더 빨리 쌓인다. 흥미로운 질문은 그 구조가 무엇을 사주느냐다. 국소 배선이 짧은 조밀한 순환 핵은 피질 기둥보다 넘어야 할 거리가 적을 수 있고, 그렇다면 까마귀 전뇌는 같은 문제에 대한 다른 공학적 해법이지 더 나쁜 해법이 아니다.

## Nvidia는 Huang 사건 전에 이미 곤란했다 — 287 points

**287 points** · 261 comments · [wired.com](https://www.wired.com/story/nvidia-was-already-in-trouble-before-the-jensen-huang-mess/) · [HN discussion](https://news.ycombinator.com/item?id=50518567)

WIRED의 논지는 스캔들이 더 느린 세 가지 문제에서 주의를 돌린다는 것이다. 매출은 2022년 1월 269억 1천만 달러에서 2026년 1월 2159억 4천만 달러가 됐고, 이제 그 성장 곡선 자체가 리스크다. 중국 비중은 2024년 20%에서 8%로 떨어졌고, Huawei는 다칩 슈퍼컴퓨터를 만들고 있으며 최소 한 프런티어 인접 연구소(Z.ai)는 Huawei 실리콘만으로 학습했다고 말한다. Nvidia 자사 고객들도 Nvidia 칩으로 칩 설계를 자동화하고 있다. Huang 관련 내용, 즉 Megaspeed의 Alice Huang과의 관계는 가속제이지 원인이 아니다. Megaspeed는 미국이 중국 국유자산으로 의심하는 회사이고, 보도에 따르면 46억~75억 달러어치 Nvidia 칩을 동남아로 들여왔다.

스레드는 대체로 이 논지를 거부하고, 가장 좋은 반론은 구조적이다. "오늘 파는 건 모두 2~3년 전에 설계된 것"은 모든 칩 회사에 해당하고 30년째 그랬으니 Nvidia 특유의 리스크가 아니다. 두 번째 반론은 시장이 기술적 공포로 Nvidia를 판 게 아니라 불확실성과 변동성으로 팔았다는 것이다. 다른 얘기다. 둘 다 타당하다. 이 글의 가장 약한 부분은 반사실이다. 주가는 10월 29일까지 견조했고 기사가 터진 뒤 떨어졌는데, 기사는 그 사실에서 거꾸로 올라가 당시엔 근거가 없던 기술적 논지를 세운다.

## 어떤 모델에 어떤 하네스 — 283 points

**283 points** · 101 comments · [runta.com](https://runta.com/blog/introducing-frontierharness-eval-v1-1/) · [HN discussion](https://news.ycombinator.com/item?id=50532191)

runta와 Baseten의 평가다. 하네스 22개 × 모델 5개 × 과제 62개 × 시도 4회, 830억 토큰, 에이전트 실행 27,280회. 결과는 모델마다 최적 하네스가 다르고 순위가 불안정하다는 것이다. 과제당 비용 기준으로 중위 하네스는 모델이 바뀔 때 22개 중 11계단을 움직였고, Codex CLI는 GLM-5.3에서 1위였다가 Kimi-K3에서는 16위로 갔다. 이게 유지된다면 "어떤 에이전트를 써야 하나"는 틀린 질문이고 "이 모델에는 어떤 에이전트인가"가 맞는 질문이다.

스레드의 회의론은 구체적이고 통한다. 지출의 64%가 검증기에 실패한 과제로 갔다. 즉 비용 수치는 실패 루프가 지배하고 있고, 하네스 품질보다 재시도 정책을 더 많이 말해줄 수 있다. 여러 실무자는 강한 모델에서는 하네스가 거의 상관없다고 말한다. Opus는 Claude Code와 Copilot에서 거의 똑같이 움직인다. 차이는 루프가 의미를 갖는 수준까지 모델이 약할 때 나타난다. 모두가 동의하는 한 가지는 하네스 자체의 도구 호출 형식이 새어 나온다는 것이다. 한 하네스의 줄번호 관례에 RL된 모델은 다른 하네스에서 더 못한다. 이 벤치마크가 능력이 아니라 인터페이스 적합성을 부분적으로 재고 있다는 조용한 논거다.

## Rust가 나를 바꿨다 — 282 points

**282 points** · 182 comments · [blog.startifact.com](https://blog.startifact.com/posts/how-rust-changed-me/) · [HN discussion](https://news.ycombinator.com/item?id=50522563)

Martijn Faassen이 Rust 6년, 그중 4년을 직업으로 쓴 뒤, 언어가 결과물이 아니라 자기 직관에 무슨 짓을 했는지 쓴다. 합 타입 덕에 모든 불리언 쌍 상태가 틀려 보이게 됐고, 철저한 매칭이 "내가 생각한 경우는 처리했다"를 컴파일 에러로 바꿨고, 빌림 검사기가 데이터 소유권 결정을 운영에서 발견하는 대신 처음부터 강제한다.

논지에 새로운 건 없고, 그래서 스레드가 좋다. 어떤 사람은 표준 조언을 꺼낸다. Lisp, OO 언어, 함수형 언어, Prolog, Verilog로 진지한 프로젝트를 해보라는 것. 패턴은 이렇다. 너를 바꾸는 언어는 너와 의견이 다른 언어이지, 타자가 빠른 언어가 아니다. 가장 흥미로운 댓글은 문화에 관한 것이다. Rust는 네가 실수할 거라고 가정하는 점이 특이하고, 그 가정을 모욕으로 읽는 프로그래머 집단이 있으며, 그게 이 언어의 온라인 평판 상당 부분을 설명한다. 1980년대 C와의 비교, 즉 "무엇이든 할 수 있을 만큼 강력하고, 제대로 할 책임은 네게 있다"고 팔던 언어라는 비교가 그 궤적 전체를 한 줄로 담는다.

## NSANet이 내려갔다 — 278 points

**278 points** · 446 comments · [cnn.com](https://www.cnn.com/2026/11/17/politics/highly-classified-national-security-communications-network-goes-down) · [HN discussion](https://news.ycombinator.com/item?id=50532849)

CNN이 인터뷰한 6명에 따르면, NSA 내부 기밀망인 NSANet이 화요일 대부분의 시간 동안 내려가 있었다. 그 소식통들에 따르면 사이버 공격의 증거는 없다. 기관은 인원 출근 시간을 분산시켰다. 공식 성명은 "예정된 일상 정비 중 일시적 성능 저하"라며 임무 핵심 역량은 계속 가동됐다고 주장한다. 백악관도 그날 아침 같은 말을 두 번 했다. 일상 정비 창에는 보통 필요 없는 횟수보다 한 번 많은 것이다.

이중화 논거는 실재한다. 전직 NSA 고위 관계자는 NSANet을 "네트워크들의 네트워크에 가깝다"고 부르며 전면 중단은 가능성이 낮다고 말한다. 영향은 우선순위 임무 할당이 아니라 분석과 보고 쪽일 것이고, 긴급 정보는 예비 채널로 대통령에게 닿을 수 있다고 한다. 당시 대통령은 중국으로 가는 길에 필리핀에 있었다. 그럴듯한 설명이다.

스레드가 실제로 하는 일은 이걸 한 주 안에 배치하는 것이다. Microsoft 365, United, Apple, Chase, 그리고 이제 NSA까지, 전부 8일 안이다. 뉴스 사이클이 증폭시킨 우연이거나, 아니면 전부 같은 방식으로 최적화된 시스템들의 실제 고장률 상승이다. 사람은 줄이고, 통합은 늘리고, 신뢰성은 벤더에게서 사는 방식 말이다. 스레드의 누구도 어느 쪽인지 답하지 못하고, 나도 마찬가지다.

## United 시스템이 내려갔다가 돌아왔다 — 253 points

**253 points** · 131 comments · [cnn.com](https://www.cnn.com/2026/11/16/us/united-airlines-outage) · [HN discussion](https://news.ycombinator.com/item?id=50524165)

United는 월요일 저녁 광범위한 시스템 장애를 겪었고 항공편이 지연됐으며 몇 시간 안에 복구됐다. 항공사 성명은 빈약하다. 댓글러 하나가 유력한 부품을 짚는다. 출발 전 무게와 균형을 계산하는 벤더 통합이다. 편마다 계산해야 하고, 이게 없으면 항공기는 법적으로 출발할 수 없다. 그 벤더가 여러 항공사를 상대하는데 United만 내려갔다면, 잘못은 벤더보다 United의 통합 쪽일 가능성이 크다.

스레드의 해석은 이랬다. 평범한 주였다면 두 문단짜리 기사였을 일이, 5일 전 Microsoft 장애 때문에 기사가 됐다는 것이다. 요즘 신뢰성 뉴스가 돌아가는 방식을 정확히 설명한다. 눈에 보이는 실패 하나가 이후의 모든 실패를 추세의 증거로 바꾼다. 그 추세가 실재하든 아니든.

## Comcast의 "fiber-powered" Wi-Fi는 동축이다 — 250 points

**250 points** · 235 comments · [arstechnica.com](https://arstechnica.com/tech-policy/2026/11/comcast-falsely-advertises-cable-internet-as-fiber-powered-att-lawsuit-says/) · [HN discussion](https://news.ycombinator.com/item?id=50523025)

AT&T가 캘리포니아 북부지법에서 "fiber-powered"라는 표현을 두고 Comcast를 고소했다. 주장은 이렇다. Xfinity는 하이브리드 광동축 위에서 돌아가고, 집까지의 마지막 구간은 구리 동축이다. 그러니 fiber-powered라고 부르는 건 "문자 그대로 거짓이거나 필연적으로 거짓"이고 상당한 합리적 소비자 집단을 오도한다. AT&T는 금지명령과 이익 토출을 원한다. Comcast는 자기 구역 일부에 진짜 FTTH를 깔았으면서, 동축이 마지막 구간을 맡는 대다수 지역에 fiber-powered를 광고해 왔다. 실질적 결과는 비대칭 업로드 속도이고, 그건 정확히 FTTH가 고치는 문제다.

희극은 이 장르를 AT&T가 발명했다는 점이다. 4G LTE를 "5GE"로 팔고 4G 폰에 5G 아이콘을 붙였으며, 광고 업계 자율규제기구는 소비자가 자기에게 5G가 있다고 합리적으로 생각할 것이라는 이유로 중단하라고 했다. Ars가 기사에서 그 얘기를 하는데, 적절한 수준의 균형이다. 두 회사 모두 자기 네트워크에 대해 거짓말하고 있고, 이게 법정까지 간 유일한 이유는 한쪽 거짓말이 다른 쪽 돈을 축내고 있기 때문이다.

## Tor, 긴급 IPv6 DoS 수정 배포 — 250 points

**250 points** · 66 comments · [forum.torproject.org](https://forum.torproject.org/t/security-release-0-4-9-17/22454) · [HN discussion](https://news.ycombinator.com/item?id=50512441)

Tor 0.4.9.17은 보안 릴리스이고, 프로젝트는 IPv6 처리와 관련된 릴레이 DoS 방어에 특히 중요한 수정 하나를 표시한다. 지속적인 DDoS 캠페인 중에 IPv4로는 안 나갈 자원을 IPv6를 통해 릴레이가 태우게 만들 방법이 있다는 뜻을 조심스럽게 말한 것이다. 릴레이를 운영하는 사람은 전부 올려야 한다.

스레드는 양파 향이 나는 체념 66개이고, 그중 하나는 진짜 운영 데이터다. guard 상태로 승격된 비출구 릴레이를 운영하던 사람이 공격이 들어오는 걸 지켜봤다. DDoS를 읽는 것과 그걸 흡수하는 노드 중 하나가 되는 것의 차이다. 나머지는 늘 있는 Tor 논쟁이다. 느리고, 차단되고, 릴리스 노트를 서빙하는 사이트가 Tor로 접속하면 403을 준다. 사실이고 요점에서 벗어난 말이다. 위협 모델에 국가 수준 적대자를 포함하는 네트워크는 느릴 수밖에 없고, DoS 방어가 분기가 아니라 며칠 단위로 나온다는 게 작동하는 부분이다.

## Claude Code 팀이 검증을 생각하는 방식 — 220 points

**220 points** · 169 comments · [claude.dev](https://claude.dev/blog/how-the-claude-code-team-thinks-about-verification/) · [HN discussion](https://news.ycombinator.com/item?id=50529612)

Addy Osmani가 쓴 내부 실무 정리다. Claude Code 자체 코드의 대략 90%를 Claude가 쓰고 리뷰하며, 그걸 가능하게 하는 건 모델 품질이 아니라 검증 루프다. 변경이 통했다는 증거를 에이전트에게 주는 종단간 테스트, 속성 테스트, 차등 테스트 말이다. 논거를 만들어 주는 숫자는 이렇다. 루브릭에 대고 출력을 검사하는 별도 채점자가 표준 프롬프트보다 과제 성공률을 최대 10포인트까지 올렸다. 프레이밍이 쓸모 있는 부분이다. 검증이 없으면 에이전트 하나나 둘을 감독할 수 있고, 있으면 수십 개를 감독한다.

스레드의 반론은 비용이고, 틀리지 않았다. 설명된 실무는 더 싼 검사가 살 수 있을지도 모르는 확신을 사려고 토큰을 잔뜩 쓴다. 스킬 파일로 변경마다 검증하라는 부분은 예산이 무제한인 팀의 조언처럼 읽힌다. 어떤 댓글러는 에이전트 둘로 한 달에 토큰값 2,000달러를 쓰는데 수백 개는 어떻게 감당하냐고 묻는다. 글이 주지 않는 답은 이렇다. 검증 루프는 테스트가 이미 있으면 싸고, 만들어야 하면 비싸다. 그러니 진짜 조언은 "테스트 스위트를 갖춰라"이고, 그건 마흔 살 먹은 조언이다.

## 그 밖의 새 글

- **조종사를 위한 2026–27년 El Niño 겨울 해설** ([301 points](https://www.youtube.com/watch?v=7_JF3etiAv8), 189 comments) — 일반 항공 조종자를 겨냥한 기상 해설이니, 실제로 다루는 건 윈드시어와 착빙, 교체공항이다. 스레드가 보태는 건 맥락이다: 이번 El Niño는 125,000년 만에 가장 따뜻한 지구 기후 속에서 진행 중이고, 지켜볼 곳은 Climate Reanalyzer와 Zeke Hausfather의 ENSO 대시보드다.
- **3dfx 카드가 흐릿하게 보인 이유** ([273 points](https://twitter.com/id_aa_carmack/status/2122478083319992513), 101 comments) — Carmack이 X에서 그래픽 질문에 답한 것이라 원문은 트윗이고, 알맹이는 그 아래 답글에 있다. 짧게 말하면 이렇다: 벤더들이 다 따르지는 않았던 아날로그 VGA 전압 규격, RAMDAC의 감마 처리, 그리고 스크린샷에서는 멀쩡해 보이고 CRT에서는 틀려 보이던 디더링.
- **Turbo Pascal보다 작은 것들** ([247 points](https://prog21.dadgum.com/116.html), 151 comments) — 2011년의 고전이다: 컴파일러이자 IDE였던 Turbo Pascal 3.02가 39,731바이트였다. 2026년 스레드는 2011년보다 향수에 덜 젖어 있는데, 그때는 바이트의 비용이 달랐다는 정당한 반론과, `touch`가 파스칼 컴파일러보다 크다는 건 어느 시대든 변명이 안 된다는 더 나은 지적이 있다.
- **최신 LLM의 위치 임베딩** ([246 points](https://magazine.sebastianraschka.com/p/understanding-positional-embeddings), 27 comments) — Raschka가 RoPE와 그 후속들을 구현 중심으로 다룬다. 실질적인 댓글 하나는 이 글이 이론을 건너뛴다고 지적한다: 위치 임베딩은 군 표현이고, 설계 공간은 거기서 나온다.
- **Apple의 새 폴더별 전체 디스크 접근 권한** ([234 points](https://support.apple.com/en-us/149699), 120 comments) — macOS 27.3부터 전체 디스크 접근이나 시스템 및 앱 보호 재정의를 요청하는 앱에 전부가 아니라 특정 폴더만 허용할 수 있다. 합리적이다. 스레드의 불만은 API의 모양에 관한 것이다: 넓은 권한에서 폴더(가령 `~/.ssh`)를 제외할 수는 없고 포함만 할 수 있는데, 넓은 읽기 권한이 정당하게 필요한 백업·디스크 사용량 앱 입장에서는 거꾸로다.
- **시드 지형을 쓰는 WebGL 비행 시뮬레이터** ([231 points](https://baron.by.dai.studio/), 67 comments) — 탭에서 돌아가고, 트림과 플랩, 탈출 키가 있으며, 지형은 시드에서 생성되니 전체가 몇백 킬로바이트다. "브라우저에서 이 정도면 말이 안 된다"는 장르는 계속된다.
- **이란 공습에 관한 육군 병사의 내부고발** ([230 points](https://www.cnn.com/2026/11/15/politics/army-soldier-whistleblower-complaint), 78 comments) — 고발장은 병력 6명을 잃은 기지가 차량 폭탄 공격에는 대비했지만 드론에는 대비하지 못했고, 경고가 무시됐다고 주장한다. 스레드의 회의론은 그런 보고가 하나하나 더 큰 예산의 근거가 된다는 것인데, 그건 그 보고가 사실이라는 것과도 양립한다.
- **스마트워치 하나로 전신 움직임 추적** ([223 points](https://news.cornell.edu/stories/2026/11/researchers-track-whole-body-movement-just-smartwatch), 77 comments) — 초음파 센싱에 작은 모델, 기성 하드웨어 위에서, 카메라를 쓰지 않는다는 프라이버시 논거까지 붙였다. 회의론자들은 제목이 유도하는 질문을 던진다: 다리가 따로따로 움직이는 건 얼마나 잘 잡아내며, 사람 여덟에 시계 여덟인 헬스장에서는 어떻게 되는가.
- **스쿼클** ([221 points](https://linebender.org/wiki/curves/squircle/), 56 comments) — 초타원, Chromium의 근사, 클로소이드, Apple의 도형을 매개변수까지 노출해 대화형으로 비교한다. 스레드가 주는 건 잡학(Zune의 스쿼클 d-pad)과, 사람들이 왜 신경 쓰는지에 대한 진짜 이유다: 도형이 물리적 실체 안에 놓이는 순간 곡률의 연속성이 중요해진다.
- **좋아하는 현대 NES 게임 25선** ([220 points](https://jordi.inversethought.com/blog/25-of-my-favourite-modern-nes-games/), 42 comments) — 1983년 콘솔용 홈브루가 아직도 나온다. 40년 된 하드웨어에 코드를 쓰는 게 보존인지, 사람을 더 나아지게 하는 제약인지에 대한 늘 하던 논쟁도 함께.
- **Salon 30년치 보존** ([218 points](https://blog.archive.org/2026/11/12/preserving-30-years-of-salon-journalism/), 57 comments) — Internet Archive가 특정한 웹을 정의했던 잡지의 전권을 확보했다. 당시엔 창피했던 부분까지 포함해서.

## 여전히 페이지에 남은 것들

오늘 목록에 실린 127개 스토리는 지난 다섯 번의 라운드업에서 다뤘다. 모든 행은 `직전 + 증가분 = 현재`를 만족하며, 직전 값은 어젯밤 글에서 그 스토리가 끝난 수치다.

| 스토리 | 마지막 (11-16) | 11월 17일 |
|---|---|---|
| [젠슨 황 사임](https://apnews.com/article/nvidia-megaspeed-china-singapore-huang-5403f152a601cf82ce939f1d24fffa0f) | 4,054 | 4,058 (+4) |
| [SpaceX, 15차 비행 끝에 스타십 회수 성공](https://www.spacex.com/launches/starship-flight-15) | 1,739 | 1,752 (+13) |
| [FAA, 전국 운항 중단 발령…4시간 30분 만에 해제](https://www.nbcnews.com/news/us-news/faa-orders-nationwide-ground-stop-departing-flights-reasons-safety-rcna609247) | 1,654 | 1,654 (+0) |
| [팀 피터스 별세](https://discuss.python.org/t/in-memoriam-tim-peters-1952-2026/110028) | 1,443 | 1,444 (+1) |
| [Foldable Flight: 최고의 종이비행기](https://www.foldableflight.com) | 1,295 | 1,299 (+4) |
| [AI가 생성한 코드는 모두 오픈소스여야 한다](https://jakub.jankiewicz.org/blog/ai-code-open-source/) | 1,240 | 1,278 (+38) |
| [스마트홈 기기는 인터넷 없이도 작동해야 한다](https://docodethatmatters.com/home-automation-overnight-success/) | 1,204 | 1,205 (+1) |
| [Microsoft 365 서비스 저하](https://status.cloud.microsoft/) | 1,173 | 1,174 (+1) |
| [Nvidia, AI 스타트업에 투자해 자사 GPU를 사들이게 하며 인위적 희소성을 조성했다는 의혹](https://www.techpowerup.com/354814/nvidia-allegedly-engineered-scarcity-by-funding-ai-startups-to-buy-its-gpus) | 1,111 | 1,113 (+2) |
| [내 AI 에이전트가 미등록 마야 유적을 찾았다고?](https://pietromiotti.com/latest/maya-site) | 1,036 | 1,036 (+0) |
| [Anthropic 기업공개](https://ipo.anthropic.com/us/) | 1,004 | 1,006 (+2) |
| [Lovable 앱들, 여권 정보와 20만 건 넘는 비공개 메시지 노출](https://www.crissyfield.de/research/lovable-en/) | 999 | 1,004 (+5) |
| [AWS 에뮬레이터](https://github.com/aws/aws-emulator) | 992 | 993 (+1) |
| [아마존 블랙프라이데이·사이버먼데이 “특가” 상당수는 할인 효과 없어](http://groundworkcollaborative.org/news/amazons-decoy-deals-groundwork-investigation-reveals-nearly-1-in-3-black-friday-and-cyber-monday-deals-advertised-by-amazon-offered-no-savings-to-shoppers-nearly-1-in-10-w/) | 713 | 948 (+235) |
| [.name 도메인 기존 등록자 보호](https://neil.fraser.name/news/2026/11/10/) | 937 | 937 (+0) |
| [Claude Fable 5.2와 Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2) | 925 | 926 (+1) |
| [Rust 1.100](https://blog.rust-lang.org/2026/11/12/Rust-1.100.0/) | 901 | 904 (+3) |
| [거의 무엇이든 만드는 법](https://pub.cba.mit.edu/863.26/site/) | 796 | 903 (+107) |
| [Qwen4-Max](https://qwen.ai/blog?id=qwen4-max) | 842 | 872 (+30) |
| [Opus 5.5 너프됐나? 11월 3일 사고 방식이 바뀌었다](https://twitter.com/shanemelaugh/status/2119192075505893695) | 825 | 826 (+1) |
| [JPMorgan Chase 기술 장애로 미국 은행권 온라인 뱅킹 지연](https://apnews.com/article/bank-outage-chase-wells-fargo-truist-50fee2693c22f597fa6ca51a97ef2cda) | 486 | 818 (+332) |
| [클라우드 버리려고 코웨이 공기청정기를 리버스 엔지니어링하기](https://scottjg.com/posts/2026-11-11-reverse-engineering-my-coway-air-purifier-to-ditch-the-cloud/) | 798 | 801 (+3) |
| [Show HN: 300달러짜리 자수기가 구독을 요구해서 직접 앱을 만들었다](https://github.com/simpsoka/zigzag) | 741 | 742 (+1) |
| [USPS, 공식 ZIP 코드 경계 폴리곤 제공 시작](https://postalpro.usps.com/zcb) | 738 | 739 (+1) |
| [Google Gemini, 개인 Drive 파일과 이메일을 사람 검수자에게 전달](https://github.com/thisisme6598/gemini_files/) | 739 | 739 (+0) |
| [아마존, Sonnet 4.6을 Strands Decider로 교체해 수백만 달러 절감](https://strandsagents.com/blog/amazon-saves-millions-replacing-sonnet-with-strands-decider/) | 733 | 733 (+0) |
| [소크라테스식 튜터](https://github.com/janestreet/agent_skills/blob/master/socratic-tutor/SKILL.md) | 718 | 721 (+3) |
| [AlphaProof Code](https://deepmind.google/blog/introducing-alphaproof-code/) | 679 | 679 (+0) |
| [AI 활용은 취약한 코드베이스를 만든다](https://evanxmerz.com/post/ai-usage-generates-a-fragile-codebase/) | 647 | 648 (+1) |
| [Microsoft 365 장애로 호텔 투숙객 15명 염소가스 중독](https://www1.wdr.de/nrw/rheinland/rhein-erft-kreis/technischer-defekt-chlor-phantasialand-100.html) | 616 | 642 (+26) |
| [비싼 Pi를 살 이유가 있나, 낡은 폰이 있는데?](https://so.long.thanks.fish/why-pi-when-i-have-an-old-phone/) | 632 | 633 (+1) |
| [웹사이트가 조종하는 요소 선택기로 인한 uBlock Origin의 범용 XSS](https://iter.ca/post/ubo-uxss/) | 589 | 610 (+21) |
| [기술 기업들이 또다시 프라이버시 개념을 바꾸려 한다](https://www.eff.org/deeplinks/2026/11/tech-companies-are-trying-shift-entire-concept-privacy-again) | 605 | 607 (+2) |
| [오작동한 화재 경보가 Jane Street의 유일한 뉴욕 데이터센터를 침수시킬 뻔했다](https://michael.bacarella.com/2026/11/10/false-smoke-alarm-jane-street-datacenter/) | 588 | 588 (+0) |
| [Payments Canada, 캐나다 실시간 결제 시스템 RTR 출시 발표](https://www.payments.ca/canada-launches-real-time-rail-bringing-247-payment-infrastructure-national-economy) | 587 | 587 (+0) |
| [KDE: 다큐멘터리 (영상)](https://tube.kockatoo.org/w/fFinNHfanLT7aBEb2B8y4c) | 575 | 578 (+3) |
| [Apple, 로컬 AI 모델 실행을 쉽게 해줄 새 Mac 앱 준비](https://9to5mac.com/2026/11/10/apple-has-new-mac-app-coming-to-make-running-local-ai-models-easy/) | 576 | 578 (+2) |
| [Gemini 4 Hydrogen](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/) | 572 | 573 (+1) |
| [Gemini Decisions API](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/) | 569 | 569 (+0) |
| [Scion 부활, 미국에서 경트럭을 판다](https://www.theautopian.com/scion-is-back-and-its-going-to-sell-a-freaking-kei-truck-in-america/) | 563 | 563 (+0) |
| [러트닉, 가족 사업과 겹치는 반도체 규정 약화 추진](https://www.nytimes.com/2026/11/15/us/politics/lutnick-pushed-to-weaken-chip-rules-that-overlap-with-his-family-business.html) | 535 | 542 (+7) |
| [법원, DRAM 가격 담합 소송 각하 신청 기각](https://litnews.ai/articles/garciaguirre-samsung-sk-hynix-micron-dram-conspiracy-suit-survives-dismissal) | 527 | 535 (+8) |
| [E-means: 10분의 1의 에폭으로 k-means 능가](https://e-means.github.io/) | 522 | 522 (+0) |
| [Starlink Mini 2](https://starlink.com/mini-2) | 514 | 515 (+1) |
| [Monkey Island: 13개 버전 전부 나란히 비교](https://monkeyisland.pages.dev/) | 507 | 508 (+1) |
| [Gemini 4 Hydrogen과 Orchestrator](https://antigravity.google/blog/gemini-4-hydrogen-in-google-antigravity/) | 507 | 507 (+0) |
| [MacBook Pro의 OLED PWM 문제](https://macanorak.com/the-macbook-pros-oled-pwm-problem-when-a-better-display-becomes-worse-to-use/) | 501 | 505 (+4) |
| [종말의 날: 서기 2026년 11월 13일 금요일 (1960)](https://www.science.org/doi/10.1126/science.132.3436.1291) | 504 | 504 (+0) |
| [Blender 5.3, 가우시안 스플랫 지원으로 출시](https://www.blender.org/download/releases/5-3/) | 498 | 500 (+2) |
| [Show HN: 이번 주 어느 지점 상공을 지나간 모든 위성과 그 사진](https://www.watched.earth) | 494 | 497 (+3) |
| [Jonathan Blow – AI가 코딩을 해결했다면 왜 내 소프트웨어는 그대로인가? (영상)](https://www.youtube.com/watch?v=IRK8h67ol7Q) | 489 | 494 (+5) |
| [claude.ai, Claude Code, platform.claude.com 오류 증가](https://status.claude.com/incidents/nn11wk485zfn) | 493 | 494 (+1) |
| [Synaptics 특허 주장으로 DisplayLink 드라이버 작업 중단](https://lwn.net/SubscriberLink/1102549/acbc92e00cee3a3f/) | 491 | 492 (+1) |
| [작고 오래된 기기에서 LLM을 돌리는 작업](https://github.com/hyperionaidev/smolmaxxing/) | 483 | 483 (+0) |
| [Nvidia의 다음은?](https://steveblank.com/2026/11/15/whats-next-for-nvidia/) | 444 | 480 (+36) |
| [글꼴로서의 손글씨](https://ductus.sorenblank.com) | 447 | 472 (+25) |
| [Protomaps: 지도 타일 자체 호스팅이 싸고 쉬워졌다](https://bruceroettgers.eu/blog/protomaps/) | 451 | 462 (+11) |
| [Anthropic이 발견한 취약점 추적](https://www.vulncheck.com/blog/anthropic-glasswing-november-update) | 461 | 461 (+0) |
| [전 Nvidia CEO 황, 두 번째 직원과 관계 있었다는 소식통](https://www.reuters.com/technology/former-nvidia-ceo-huang-had-relationship-with-second-employee-sources-say-2026-11-12/) | 460 | 460 (+0) |
| [소프트웨어 직책의 계보도](https://zwischenzugs.com/2026/11/03/a-family-tree-of-software-job-titles/) | 458 | 459 (+1) |
| [Claude Code와 Codex가 3달러짜리 Arduino로 1994년형 Jeep ECU를 리버스 엔지니어링 (영상)](https://www.youtube.com/watch?v=WPj3aQ-xxpI) | 445 | 455 (+10) |
| [중국 프런티어 AI 모델에서 수출 통제 GPU의 흔적 발견](https://unemploymentlabs.com/checkpoint-forensics) | 448 | 452 (+4) |
| [WebGL2로 만든 초현실적 모래](https://av.github.io/safe-sand/) | 448 | 449 (+1) |
| [AI, 수백 개의 증명된 정리가 담겼다는 괴델 노트북 해독](https://www.theguardian.com/science/2026/nov/13/kurt-godel-notebooks-ai-helps-unlock-hidden-discoveries-man-who-transformed-maths) | 442 | 444 (+2) |
| [Jiff 1.0: Rust용 날짜시간 라이브러리](https://burntsushi.net/jiff/) | 226 | 435 (+209) |
| [셀을 차지하지 않는 터미널 테두리](https://www.joshka.net/cell-borders/) | 426 | 426 (+0) |
| [Ggml v1.0.0](https://github.com/ggml-org/ggml/releases/tag/v1.0.0) | 419 | 420 (+1) |
| [iPad에서 학생이 PowerPoint를 열려면 16번을 클릭해야 한다](https://www.reddit.com/r/Teachers/comments/1xuup7a/technology_sucks_it_literally_takes_16_clicks_for/) | 408 | 409 (+1) |
| [MaxxBench – “DeepSWE 점수 좋네요. 그런데 사실인가요?”](https://maxxbench.unlap.ai/research/why-maxxbench/) | 409 | 409 (+0) |
| [이탈리아, Android 사용자 데이터 접근 문제로 Meta에 8억 8,700만 달러 과징금](https://www.reuters.com/world/italy-fines-meta-887-million-over-android-users-data-access-2026-11-14/) | 408 | 408 (+0) |
| [macOS Secure Enclave로 SSH 키 보호하기](https://gatezh.com/posts/macos-secure-enclave-ssh-keys/) | 403 | 403 (+0) |
| [w2rt6byl5nf1opmc-a.com은 무엇인가?](https://jack.cab/blog/siterate) | 300 | 398 (+98) |
| [태양을 약 280년에 한 번 도는 왜소행성 후보 발견](https://www.smithsonianmag.com/smart-news/astronomers-found-a-mysterious-object-orbiting-far-beyond-pluto-it-could-be-a-new-dwarf-planet-hidden-in-our-solar-system-180989857/) | 396 | 397 (+1) |
| [캘리포니아에서 텍사스로 배송 중 1,140만 달러어치 Nvidia 하드웨어 사라져](https://www.freightwaves.com/news/11-4-million-in-nvidia-hardware-vanishes-during-shipment-from-california-to-texas) | 386 | 386 (+0) |
| [소프트웨어가 시스템 수준에서 무너지고 있다](https://www.breck-mckye.com/blog/2026/11/software-is-breaking-down-at-a-systemic-level/) | 253 | 384 (+131) |
| [오래된 Bitly 링크들이 탈취되고 있다](https://ransomnews.com/burger-king-tweet-bitly-link-hijack-2026/) | 369 | 378 (+9) |
| [부팅 콘솔에 표시되는 systemd 작업의 실시간 트리](https://codeberg.org/wvhulle/bootvine) | 375 | 376 (+1) |
| [올바른 소프트웨어를 쓰는 일은 어렵고 수학만으로는 부족하다 (2016)](https://pron.github.io/posts/correctness-and-complexity) | 375 | 375 (+0) |
| [IceWM](https://ice-wm.org/) | 374 | 374 (+0) |
| [Apache HTTP Server의 치명적 RCE 취약점](https://www.wiz.io/blog/cve-2026-119618-rce-apache-http-server-vulnerability) | 371 | 372 (+1) |
| [AI가 작가와 독자 사이의 신뢰를 무너뜨리고 있다](https://www.theatlantic.com/books/2026/11/ai-literary-scams-amazon/689391/) | 371 | 371 (+0) |
| [ALPR 조회에 영장을 요구하도록 항소법원에 청구한다](https://www.eff.org/deeplinks/2026/11/were-asking-appeals-court-require-warrant-alpr-searches) | 357 | 361 (+4) |
| [Edge0-145B: 내 컴퓨터에서 누리는 프런티어 AI 성능](https://edge0.ai/blog/introducing-edge0-145b-frontier-ai-capabilities-on-your-own-computer) | 357 | 357 (+0) |
| [전압 글리칭으로 채굴 카드에 숨은 A100 해방하기](https://blog.kate.land/posts/using-voltage-glitching-to-unlock-the-a100/) | 354 | 357 (+3) |
| [Muse Ember: 가장 작고 효율적인 모델](https://research.meta.ai/blog/muse-ember) | 334 | 334 (+0) |
| [Project Zero, 신고 90일 후 취약점 공개](https://projectzero.google/2026/11/disclosure-policy.html) | 316 | 323 (+7) |
| [워즈는 컴퓨터를 만들기 전에 어떻게 Apple 1 BASIC을 작성했나? (2021)](https://retrocomputing.stackexchange.com/questions/17957) | 319 | 320 (+1) |
| [Lean에서 검증됐다는 이유로 정리가 옳다고 하는 주장을 해석하기](https://xenaproject.wordpress.com/2026/11/12/and-the-proof-is-checked-in-lean/) | 268 | 316 (+48) |
| [모더들이 버려진 Quake 4 확장팩을 완성해 플레이 가능](https://www.moddb.com/mods/openq4/downloads/openq4-0141-windows-x64) | 310 | 310 (+0) |
| [Show HN: Yogurt – Granola의 무료·프라이버시·오픈소스 대안](https://github.com/FrigadeHQ/yogurt) | 305 | 306 (+1) |
| [Claude Whiteboards, Claude Sheets, Claude Data](https://claude.com/resources/articles/sheets-whiteboards-data) | 298 | 299 (+1) |
| [600번의 실험 끝에 알아낸 JEPA 월드 모델](https://haddyalchaer.com/jepa) | 295 | 296 (+1) |
| [CBC 보도 후 LinkedIn과 Monster, 가짜 채용 공고 1,000건 이상 삭제](https://www.cbc.ca/news/canada/linkedin-monster-take-down-over-1-000-fake-job-postings-after-cbc-investigation-9.7415379) | 293 | 293 (+0) |
| [KORS의 모든 주파수 실시간 항공 무전. 캐나다 빅토리아도 운항 중단](https://orcasairband.com/) | 293 | 293 (+0) |
| [옛날식 게임 프로그래밍의 명기법 (2013)](https://blog.moertel.com/posts/2013-12-14-great-old-timey-game-programming-hack.html) | 289 | 289 (+0) |
| [당신의 TV는 벽을 꿰뚫어 본다 (2025)](https://maurycyz.com/projects/fading/) | 286 | 286 (+0) |
| [상시 감시가 아이들과 부모에게 하는 일](https://www.theatlantic.com/magazine/2026/12/location-tracking-apps-parental-surveillance/689031/) | 282 | 282 (+0) |
| [보안 신호를 명확히 한 PyPI 프로젝트 페이지 개편 적용](https://blog.pypi.org/posts/2026-11-06-ui-updates-complete/) | 278 | 279 (+1) |
| [FM-1 Workbench](https://open.m-vave.com/fm1-workbench) | 278 | 279 (+1) |
| [Show HN: 순수 Jax 약 200줄로 구현한 DeepSeek V3](https://github.com/Vaibhaav-Tiwari/deepseek-v3-jax) | 275 | 276 (+1) |
| [AMD Zen 6 제품군: 짐승 먹이기](https://chipsandcheese.com/p/amds-zen-6-family-feeding-the-beast) | 274 | 276 (+2) |
| [Foundation Models 프레임워크](https://developer.apple.com/foundation-models-framework/) | 269 | 269 (+0) |
| [우리 소프트웨어 엔지니어링 면접이 조금 바뀝니다](https://blog.janestreet.com/software-engineering-interviews-are-changing-a-little/) | 267 | 268 (+1) |
| [Brave Search API, x402 프로토콜로 에이전트 결제 지원](https://brave.com/blog/search-api-agentic-payments/) | 262 | 262 (+0) |
| [Show HN: 심시티풍 아이소메트릭 뷰로 본 스페인 발렌시아](https://tinyvalencia.com/) | 261 | 262 (+1) |
| [Unsloth Qwen3.8-27B 양자화 – 다이내믹 v3.1 업데이트](https://unsloth.ai/docs/models/qwen3.8) | 259 | 261 (+2) |
| [끔찍한 공개키 트릭](https://maurycyz.com/projects/badcert/) | 261 | 261 (+0) |
| [노화를 촉진하되 염증은 일으키지 않는 단백질 발견](https://www.nature.com/articles/d41586-026-03638-3) | 259 | 259 (+0) |
| [Show HN: 아이소메트릭 SF – 샌프란시스코 베이 지역 픽셀아트 지도](https://isometricsf.com/) | 254 | 255 (+1) |
| [일부 아폴로 임무는 왜 유탄발사기를 실었나? (2019)](https://space.stackexchange.com/questions/37775) | 249 | 253 (+4) |
| [Show HN: Papers Please를 재현했는데, 이번엔 YC 스타트업에 투자할지를 결정한다](https://termsheetplease.com/) | 248 | 249 (+1) |
| [더 낫고 효율적인 RAG를 위한 빠른 검색](https://machinelearning.apple.com/research/faster-retrieval) | 241 | 242 (+1) |
| [Atuin Threads: 모든 기기에서 모든 에이전트 세션을](https://blog.atuin.sh/threads-agent-sessions/) | 241 | 242 (+1) |
| [AMD In-Depth의 Mike Clark과 나눈 Zen 6 이야기](https://chipsandcheese.com/p/talking-zen-6-with-mike-clark-at) | 239 | 239 (+0) |
| [Emacs가 나의 브라우저](https://joshblais.com/blog/emacs-as-my-browser/) | 231 | 236 (+5) |
| [Haskell 생태계를 위한 기술 비전](https://discourse.haskell.org/t/a-technical-vision-for-the-haskell-ecosystem/15078) | 232 | 232 (+0) |
| [22년 된 Postgres 타입 혼동 프리미티브를 RCE로 발전시키기](https://mehmetince.net/part-3-6-how-i-ended-up-turning-a-22-year-old-postgresql-type-confusion-primitive-into-rce-cve-2026-6460/) | 232 | 232 (+0) |
| [생성형 AI는 비영어 텍스트에 더 많은 에너지를 쓴다](https://news.umich.edu/generative-ai-uses-more-energy-on-non-english-text/) | 231 | 231 (+0) |
| [염소 제물이 더 필요하다](https://www.experimental-history.com/p/we-need-more-goat-sacrifices) | 228 | 228 (+0) |
| [Show HN: 오늘 밤 FAA 전국 운항 중단 중 미국 항공편 실시간 지도](https://grounds.top/) | 218 | 220 (+2) |
| [웹만으로 충분하다](https://ftrain.com/aboard-the-web-is-more-than-enough) | 215 | 216 (+1) |
| [Antigravity의 /teamwork로 과학과 공학 발전시키기](https://research.google/blog/advancing-science-engineering-with-antigravitys-teamwork-feature/) | 214 | 214 (+0) |
| [퀸스 공공도서관 랜섬웨어 공격](https://connect.queenslibrary.org/) | 213 | 213 (+0) |
| [현재 모든 미국 공항 운항 중단](https://twitter.com/flightradar24/status/2121347654714077605) | 213 | 213 (+0) |
| [2026년에 엔지니어로 산다는 것](https://shahar.blog/2026/11/08/on-being-an-engineer-in-2026/) | 205 | 206 (+1) |
| [미네소타 기타리스트의 “팜프렛” 발명이 새로운 화음을 내다](https://www.echopress.com/business/minnesota-guitarists-invention-strikes-a-new-chord) | 202 | 202 (+0) |
| [3Com에 무슨 일이 있었나?](https://dfarq.homeip.net/what-happened-to-3com/) | 200 | 200 (+0) |

어젯밤 표에서 열여덟 개 행은 더 이상 200점을 넘지 못해 실리지 않았다. 현재 점수를 추측해야 하기 때문이다. 눈에 띄는 탈락작은 Nvidia가 황을 축출할 준비를 하고 있었다는 WSJ 보도(어젯밤 1,226점)와 황 관련 후속 보도 두 건, LibreOffice의 “365일 연중무휴” 트윗, KetchUp, AI 에이전트의 항공권 예약을 금지한 United, Val Town의 서비스 종료 공지, Ask HN “무엇을 만들고 있나요” 스레드다.

## 스레드

오늘 하루를 꿰는 세 갈래 실마리가 있고, 결국 다 같은 이야기다. 통제하지 못하는 인프라에 우리가 걸어둔 신뢰.

첫째는 최소 저항의 경로로서의 공급망이다. Optimizely의 고객들은 잘못한 게 없다. 벤더의 CDN에서 TLS로 스크립트를 불러왔고, 그 도메인은 이미 허용 목록에 올려둔 상태였다. 그런데 받은 것은 크립토 클리퍼와 iOS 익스플로잇 킷이다. Comcast는 동축 케이블을 "광 기반"이라고 부른다. 마지막 구간은 남의 문제니까. Windows는 어떤 코딩 에이전트를 돌렸는지 집계한다. OS 벤더가 인벤토리는 유용하다고 판단했고, 그 설정의 이름은 "선택 사항"이다. 이 중 어느 것도 누가 자물쇠를 따고 들어온 식의 침해가 아니다. 전부 신뢰 관계 자체가 취약점이었던 사례이고, 실질적인 유일한 완화책은 신뢰해야 할 당사자의 수를 줄이는 것이다.

둘째는 신뢰성이 이제 공동 운명이 되었다는 점이다. Microsoft의 게이트웨이 버그는 부하를 만나기를 넉 달 동안 기다렸다가 이메일을 하루 동안 멈춰 세웠다. United의 무게·평형 통합은 항공편을 세워버렸다. Apple의 상태 페이지와 NSANet의 성명은 둘 다 대중에게 성능 저하가 정상이라는 사실을 받아들이라고 요구했다. Microsoft PIR의 엔지니어링은 정직하고 결론은 암울하다. 부하 테스트에 더 약한 하드웨어를 썼기 때문에, 더 좋은 하드웨어를 들여놓고 나서야 버그가 드러났다. 통합은 이런 부류의 장애를 줄이는 게 아니라 늘린다. 따로따로 실패할 독립적인 시스템이 그만큼 줄어들기 때문이다.

셋째는 역류다. 오늘 이 페이지를 읽을 만했던 이유도 이것이다. CMU는 가장 어려운 강의 한 학기를 무료로 공개했다. 촬영은 엉성하고 편집도 없고, 그저 실제 강의다. Cornell은 태양광 패널 아래에서 양을 방목하면 곤충과 농가 경제가 어떻게 되는지 측정했다. 헥타르당 두 마리, 거기에 숫자까지 붙여서. Tor는 며칠 만에 DoS 수정을 내놨다. 학교 휴대폰 금지는 1년에 0.01 표준편차를 산다. 작고, 실재하고, 정책이 실제로 내놓을 수 있는 것과 정확히 같은 크기다. 무료하고 지루하고 측정 가능한 일이 여전히 복리로 쌓이는 일이다. 다만 $1,200짜리 ePaper 패널만큼 화제가 되지는 않는다.
