---
title: "Hacker News 프런트페이지 라운드업 — 2026년 11월 6일"
pubDate: 2026-11-06
description: "200점을 넘긴 스토리는 57개, 그중 26개가 새로 올라왔다. Claude Code는 사용자 이메일을 User-Agent 헤더에 실어 보내고 있었고, 테슬라는 사이버트럭을 접고, Salon은 31년 만에 문을 닫는다. 나스닥은 데이터센터 공포에 5.52% 빠졌다."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
lang: "ko"
---

오늘 오후 상위 240개 제출물을 훑은 결과, 200점 문턱을 넘긴 스토리는 57개다. 26개가 새것이다. 나머지 31개는 어제 페이지에 있던 것으로, 여전히 두 자릿수 후반의 점수를 더하고 있다. 거의 두 배가 된 한 건만 예외다.

새로 올라온 것들은 무게중심이 셋이다. 가장 인기 있는 코딩 에이전트의 프라이버시 버그, 그리고 앤트로픽이 그걸 공개적으로 고치는 중이라는 사실. 폐간과 종결의 무리 — Salon, 사이버트럭, x86 위의 macOS. 그리고 이 페이지의 다른 모든 스토리가 의존하는 무언가, 즉 데이터센터 캐펙스의 가격을 목요일 내내 다시 매긴 시장. 나스닥은 5.5% 빠지며 조정 국면에 들어갔다. 같은 날 구글은 영상 생성 가격을 30% 내렸고, 두 사람짜리 랩은 2만 1,000달러로 학습한 이미지 모델을 내놨다. 추론을 싸게 만드는 일과 빌드아웃의 가격을 다시 매기는 일은 같은 이야기를 반대쪽 끝에서 말한 것이다.

## Claude Code, 사용자 이메일 주소를 웹사이트로 보내다 — 1,531 points

**1,531 points** · 482 comments · [github.com/anthropics](https://github.com/anthropics/claude-code/issues/107757) · [HN discussion](https://news.ycombinator.com/item?id=50385272)

`taylor-edwards`가 11월 5일 연 이슈 #107757: Claude Code가 웹 검색을 하면서 보내는 HTTP 요청의 `User-Agent` 헤더에 로그인한 사용자의 계정 이메일을 넣고 있었다. 제보자는 그 결과로 하루에 수십 통씩 스캠 메일을 받았다고 말하고, 애초에 이게 설정 항목이어서는 안 된다고 주장한다. 이슈에는 678개의 추천 반응이 붙었다.

앤트로픽 엔지니어 `lydia_hallie`가 스레드에서 이를 확인하고 원인을 설명한다. 사용자들이 `@author` 태그 같은 것의 이름을 Claude가 환각으로 지어낸다고 불평했는데, 계정에 대한 컨텍스트가 없었기 때문이라는 것이다. 그래서 앤트로픽이 로그인 사용자의 계정 이메일을 모델 컨텍스트에 넣었고, 모델이 그걸 외부 요청에 실어 보내는 명령을 작성했다. 그녀는 "다음 주 초" 릴리스에서 계정 이메일을 컨텍스트에서 제거한다고 한다. 다른 직원은 2.1.317에 내장 모드 `cc-plugin-privacy`가 들어가 이 동작을 결정론적으로 차단한다고 덧붙인다.

이걸 단순한 버그 리포트 이상으로 만드는 게 두 가지다. 첫째는 `varenc`의 발견이다. SEC의 `data.sec.gov` API는 User-Agent에 이메일을 *요구*하고, 없으면 요청을 거부한다. 그러니 이 중 일부는 툴이 제3자의 요구에 따르는 것이지, 새로 만들어낸 게 아니다. 둘째가 더 나쁘다. `llama052`가 자기 서버가 받은 요청 헤더를 인용하는데, 거기엔 사용자 이름, 소속 회사, 팀, 그리고 작업하던 저장소 링크까지 들어 있다. 그건 SEC 규정 준수가 아니다. 하네스가 '운영자 신원을 밝히는 게 합리적인 기본값'이라고 판단한 것이고, 그걸 되돌리는 데 추천 678개가 달린 공개 GitHub 이슈가 필요했다는 사실이 프라이버시가 우선순위 어디쯤 있었는지를 말해준다. 이게 두 번째다. 5월의 이슈 #55743도 계정 이메일이 옵트아웃 없이 컨텍스트에 자동 주입된 건이었다.

## 모두를 위한 검색 — 740 points

**740 points** · 407 comments · [kagi.com](https://kagi.com/changelog#11820) · [HN discussion](https://news.ycombinator.com/item?id=50383740)

Kagi가 로그인 장벽을 없앴다. 이제 누구나 계정 없이 kagi.com에서 50회까지 검색할 수 있고, 가입하면 100회가 더 붙는다. 체인지로그는 이걸 입소문 문제로 설명한다. 친구가 써볼 수 없는 검색엔진은 추천하기 어렵다는 것. 안드로이드 앱도 제대로 된 릴리스가 나왔다. 네이티브 검색 바, 스크롤하면 숨어버리는 탭, 자체 화면을 갖춘 음성 검색 재작성, 홈스크린 위젯, 붙여넣기로 하는 이미지 검색.

같은 항목에 공개서한도 실렸다. 구글이 2027년 초부터 학교 계정에서 AI 도구를 기본 비활성화하겠다고 발표했고, 검색도 함께 꺼진다는 것이다. Kagi의 해석: 교육이 광고 회사의 인질이 되어서는 안 된다. 합당한 일침이고, 동시에 Kagi가 가져본 가장 날카로운 포지셔닝이다. 이제 파는 말은 "더 나은 결과"가 아니라 "우리는 논점을 만들려고 당신 도구를 꺼버리지 않는다"다.

회의적으로 보면 50회 무료는 철학이 아니라 퍼널이다. Kagi의 사업은 구독이고, 문제는 한 번도 제품 품질이 아니었다. 무료 검색이 충분한데 월 10달러를 낼 한계 사용자는 없다는 것이다. 50회는 차이를 느낄 만큼은 되고 뭔가를 대체할 만큼은 안 되게 맞춰진 숫자다. 지켜볼 지표는 가입자가 아니라 전환율인데, Kagi는 그걸 한 번도 공개한 적이 없다.

## MS 그림판 원격 코드 실행 취약점 — 694 points

**694 points** · 267 comments · [cve.org](https://www.cve.org/CVERecord?id=CVE-2026-83844) · [HN discussion](https://news.ycombinator.com/item?id=50384233)

마이크로소프트가 부여하고 10월 13일 공개한 CVE-2026-83844: "Windows 그림판의 범위 초과 읽기(out-of-bounds read)로 권한 없는 공격자가 네트워크를 통해 코드를 실행할 수 있다." CWE-125, CVSS 3.1 기본 점수 8.1 — `AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:H/A:H`. 영향 범위: Microsoft 그림판 11.0.0.0 ~ 11.2605.91.0. CISA의 SSVC 보강 정보는 악용: 없음, 자동화 가능: 아니오, 기술적 영향: 전체로 적는다. NVD는 공개 3주가 지난 지금도 이 레코드를 "분석 중(Undergoing Analysis)"으로 올려두고 있다.

스레드는 거의 전부가 같은 부조리를 각도만 바꿔 지적하는 글이다. 그림판이 소켓을 연다고? `pasteleft`는 사용자 상호작용 없이 어떻게 원격 코드 실행이 되느냐고 묻는다. `xlayn`은 벡터 문자열을 뜯어보고, "특수하게 조작된 패킷"이라는 표현이 위협 모델이 아니라 템플릿을 서술하는 것 같다고 결론 내린다. `Oarch`는 Raymond Chen이 글을 쓰길 기다린다. 실용적인 지적은 `greyhound1`의 것 하나다. Windows Update는 아무것도 제공하지 않았고, 수정 빌드는 마이크로소프트 스토어에서 받아야 했다.

그게 진짜 발견이다. 스토어 앱으로 배포되면서 네트워크를 향한 파싱 경로를 갖고, 대부분의 사용자가 열지도 않는 채널로 패치되며, 스레드의 누구도 찾지 못한 공격 표면을 전제로 한 심각도 점수를 달고 다니는 이미지 편집기. 벡터 문자열이 틀렸거나 제품이 틀렸다. 마이크로소프트는 어느 쪽인지 말하지 않았다.

## 테슬라, 사이버트럭 생산 축소 — 650 points

**650 points** · 1,427 comments · [nbcnews.com](https://www.nbcnews.com/tech/tech-news/tesla-wind-cybertruck-production-years-poor-sales-markets-rcna607817) · [HN discussion](https://news.ycombinator.com/item?id=50391456)

머스크는 X에서 테슬라가 2027년 중반쯤 오스틴 기가팩토리에서 사이버트럭 생산을 접고, 그 자리를 더 많은 사이버캡 생산에 내주겠다고 밝혔다. Kelley Blue Book 기준 지난해 미국 판매는 20,237대. 2024년 38,965대에서 48% 줄었다. 출시 전 예측치는 연 25만 대였다. 머스크는 이 차를 "테슬라가 만든 최고의 차량"이라 불렀고 생산 중단은 "한 시대의 끝"이라고 했다. 전용 부품을 생산하도록 설비된 공장은 오스틴 하나뿐인데, 테슬라는 생산을 옮기는지 완전히 멈추는지 말하지 않았다.

1,427개가 달린 댓글 스레드는 오늘 페이지에서 가장 좋은 콘텐츠다. `crawshaw`가 아무도 하지 않는 논리를 편다. 사이버트럭은 제로금리 때문에 트럭 가격이 치솟던 시절에 설계됐고, 가격이 계속 오를 것에 베팅했다. 4만 달러짜리 버전이 있었으면 다른 모든 걸 감안해도 시장을 찾았을 거라는 것. `paxy`는 겹친 요인들을 나열한다. 연방 EV 세액공제 폐지, 배출권 시장 붕괴, 6%까지 떨어지고 있는 미국 EV 점유율. 그리고 `brightball`이 통설을 망치는 반례를 하나 가져온다. 헬렌 이후 14일 동안 친구가 이 차로 집에 전력을 공급했고, 슈퍼차저까지 운전해 가서 충전했다는 것이다. 배터리 팩이 대략 파워월 9대분 값어치니까.

둘 다 동시에 사실일 수 있고, 이걸 미학적 판정으로 읽으면 문제가 생긴다. 연 2만 대는 디자인 실패가 아니다. 팬층은 있는데 제품-시장에서 실패한 것이다. 라인을 사이버캡으로 돌리는 건 아직 존재하지 않는 로보택시 물량에 거는 베팅이고, 그 물량에 이미 베팅해둔 것이 주가가 아직 값을 받는 이유인 회사가 한 선택이다.

## Salon에서의 작별 — 633 points

**633 points** · 255 comments · [salon.com](https://www.salon.com/2026/11/05/goodbye-from-salon/) · [HN discussion](https://news.ycombinator.com/item?id=50383739)

Salon이 31년 만에 발행을 중단한다. 편지는 짧고 품위 있다. 1995년 11월 창간, 소규모 기자 집단, "독립 디지털 저널리즘의 사업적 현실은 지난 세월 동안 근본적으로 바뀌었다", 그리고 "우리의 발행 모델은 더 이상 지속 가능하지 않다"는 결론.

그 문장이 공개의 전부다. 구독자 수 없음, 트래픽 없음, 인수자 없음, 정리 조건 없음, 아카이브에 대한 언급도 없음. 투명성이 저널리즘과 홍보를 가르는 것이라고 30년 내내 주장해온 매체의 마지막 산출물이 숫자 하나 없는 무서명 작별 인사라는 건 이상한 일이다.

구조적 이야기는 불가사의하지 않다. Salon은 최초의 웹 네이티브 잡지 중 하나였고, 31년 동안 끝내 온전히 헌신하지 못한 두 모델 사이에 끼여 있었다. 한쪽은 규모를 보상하는 디스플레이 광고인데 Salon에 그 규모는 없었다. 다른 쪽은 니치를 보상하는 구독인데, Salon은 그렇게 좁아지기엔 애매했다. 그 압박에서 살아남은 매체는 거대해지거나 특정해졌다. Salon은 범용 관심사 잡지로 남았고, 비용 구조도 범용이었고, 좋아하지만 돈은 내지 않는 독자가 있었다.

## Blender의 UI와 런타임 — 631 points

**631 points** · 258 comments · [github.com/ppmpreetham](https://github.com/ppmpreetham/BUI) · [HN discussion](https://news.ycombinator.com/item?id=50389333)

BUI는 Blender의 위젯 그리기와 상호작용 규칙을 가져와 C++(`interface_widgets.cc`)를 kit이라는 작은 C 런타임으로 옮기고, Python, Rust, JavaScript/React/Svelte, C, C++, Dear ImGui에서 쓰는 라이브러리로 노출한다. 스타 1.2k에 GPL-3.0이고 README는 책 한 권 분량이다. 주장하는 커버리지는 이렇다. 공개된 tkinter·ttk 이름 7,846개 전부, 브라우저 엔진 없이 그리는 HTML 요소 113개, 컴파일 타임 "혹시 이걸 말씀하셨나요" 오류를 내는 Tailwind v4, taffy를 통한 flexbox와 grid, Blender 자체 NanoSVG 코드로 래스터화한 Blender SVG 아이콘 781개, 그리고 Blender의 BLF가 렌더링하는 방식 그대로 그린 Inter 가변 폰트.

성능 주장은 저장소 표현 그대로 이렇다. `gpui-fast`보다 프레임당 CPU 2~4배 적게, RAM도 적게, 첫 프레임 약 5ms. 데미지 기반 렌더링이라 유휴 UI는 CPU 0%이고, 호버하면 커서 아래 위젯만 다시 그린다. 원리는 별난 게 아니다. Blender UI는 손상된 영역만 다시 그리고, 아무것도 움직이지 않으면 잠들며, 현대 코어의 일부 성능밖에 안 되는 기계를 위해 작성됐다.

2~4배는 누군가 재현하기 전까지 한 기계에서 나온 단일 벤치마크로 취급하라. 신뢰할 부분은 한계 항목이다. 접근성 지원 없음, 입력기 없음, 글리프별 폰트 폴백 없음, OpenType 기능 없음, 셰이핑 없는 RTL 재배열, 명시적으로 실험적인 Cocoa 호스트(그것도 "애플 실리콘 맥 두 대에서 손으로 해봤다"), 그리고 OS가 아니라 Blender처럼 보이는 UI. 정직한 목록이고, 스타 1.2k 프로젝트들이 보통 인정하는 것보다 길다. 흥미로운 결론은 Blender 툴킷이 빠르다는 게 아니다. 속도의 대부분이 현대 툴킷들이 버린 재그리기 전략에서 나왔고, 2001년의 결정을 앞으로 이식한 게 2026년의 것을 재구현하는 걸 이겼다는 것이다.

## 네덜란드 '이상주의' 은행 ASN, 구글 아닌 안드로이드 차단 — 598 points

**598 points** · 388 comments · [github.com/PrivSec-dev](https://github.com/PrivSec-dev/banking-apps-compat-report/issues/105) · [HN discussion](https://news.ycombinator.com/item?id=50390124)

PrivSec 은행 호환성 트래커의 이슈 #105는 2022년 7월에 열렸다가 어제 다시 열렸다. 달라진 건 Wero 결제 흐름이다. 명시적으로 윤리적이고 협동조합적인 브랜드를 내세우는 네덜란드 은행 ASN이 이제 결제에 Google Play Integrity를 요구하고, 그 뜻은 GrapheneOS에서 거래를 완료할 수 없다는 것이다. 이 필터가 GrapheneOS 전용인 건 아니다. Play Integrity는 구글이 기기에 대해 내리는 판정이고, 그게 반대 이유의 전부다.

스레드가 달아오른 건 한 댓글러가 Wero를 운영하는 EPI의 직답을 인용하면서였다. 하드웨어 키 증명은 "키가 TEE나 StrongBox에서 생성됐다는 것"만 증명하고 앱이나 OS의 무결성은 증명하지 못하기 때문에 Play Integrity가 필요하다는 답이었다. `danieldk`와 `cristobalbaixas`가 안드로이드 스펙으로 그걸 분해한다. 증명 인증서에는 챌린지, 보안 레벨, `verifiedBootState`와 검증된 부팅 키 해시, `deviceLocked`가 담긴 RootOfTrust 확장, 그리고 패키지 이름과 서명 인증서 다이제스트가 담긴 `attestationApplicationId`가 들어 있다. 그게 OS 무결성과 앱 신원이고, 칩이 서명하며 구글이 공개한 루트에 연결된다. `cristobalbaixas`는 개발자 쪽의 정직한 비용을 말한다. X.509와 ASN.1 확장을 직접 파싱하고, 허용 목록을 직접 관리해야 한다. 그러면서 자기 앱도 여전히 Play 판정에 의존한다고 인정한다. "쉬운 검사를 먼저 했고, 감사 앞에서는 '구글이 그렇다더라'가 방어하기 더 쉽기" 때문이라고.

여기엔 두 가지 기소가 있고 스레드는 둘 다 한다. 기술적 기소는 유럽의 결제 시스템이 이미 존재하는 검증 경로를 거부하고, 미국 회사가 일방적으로 답을 정하는 SDK 호출 하나를 택한다는 것이다. `orazioedoardo`의 표현대로 그 회사는 몇 분 만에 그걸 꺼버릴 수 있다. 정치적 기소는 Wero의 CEO가 비자와 마스터카드에 맞선 유럽의 주권을 인터뷰에서 떠들면서, 구현은 모든 거래를 구글을 거쳐 보낸다는 것이다. 스레드에서는 모토로라의 GrapheneOS 지원이 지렛대로 등장한다. 보안 요구사항을 충족한 첫 비픽셀 제조사다. 합당한 카드이고, 동시에 이 논쟁을 하드웨어 파트너 하나씩 상대로 이겨야 한다는 자백이기도 하다.

## Ask HN: 요즘 AI 에이전트 셋업 어떻게 쓰세요? — 540 points

**540 points** · 671 comments · [news.ycombinator.com](https://news.ycombinator.com/item?id=50366117) · [HN discussion](https://news.ycombinator.com/item?id=50366117)

이달 최고의 댓글 스레드인데, 질문이 의도한 이유 때문이 아니다. 표면상으로는 스택 설문이다. 실제로는 비용표이고, 표의 모양이 놀랍도록 일관된다. 비싼 플래너 하나, 싼 리뷰어 하나, 싼 실행자 하나. `gregwebs`는 "Claude 월 20달러(플래너), Codex 월 20달러(리뷰어), Deepseek 하루 1~3달러(일꾼)" 조합에, 역할별로 별도 에이전트를 띄우는 스킬과 할당량이 떨어지면 프로바이더를 바꾸는 플러그인을 붙여 쓴다. `glennfiedler`는 반대 극단이다. Claude Ultra 구독 여러 개, Codex 월 500달러 구독 여러 개, Antigravity, 여기에 API로 DeepSeek과 Mercury를 붙이고, 자기가 작성한 Redis 기반 메시지 버스로 조율한다.

극단값보다 분포가 중요하다. 그래픽 프로그래머 `Animats`는 여전히 한 번에 키 하나씩 코드를 쓰고, Copilot은 언어 간 변환에만 써봤다고 한다. `Feathercrown`은 설문 전체에 "없음, 아니오, 없음, 아니오, 아니오"로 답한다. `Kuyawa`는 2026년 5월 이후 DeepSeek만으로 한 줄도 쓰지 않았다고 주장한다. `dofm`은 M1 Max에서 전부 로컬로 돌린다. Muse Glimmer, Qwen 3.8 27B, Gemma 4 12B다. `kikdij`는 홈랩의 P40이다. 이게 실제 분포다. 월 네 자릿수를 쓰는 사람과 한 푼도 안 쓰는 사람으로 갈라진 쌍봉형 인구, 가운데는 비어 있다.

스레드가 계속 맴돌면서 끝내 답하지 않는 질문은 샌드박싱이다. `Matl`이 대놓고 묻는다. 다들 그냥 Docker 쓰는 거 아니냐고. 답은 즉흥적이다. 프로젝트마다 LimaVM, 에이전트마다 별도 유닉스 사용자, 일회용 VM 안에서 `--dangerously-skip-permissions`, 시크릿용 `agent-vault`. 감사 앞에 내놓을 만한 구성은 아무도 말하지 않는다. Claude Code가 계정 이메일을 외부 헤더에 싣는 게 걸린 지 이틀 뒤라는 걸 감안하면, 이 스레드에서 다시 읽을 부분은 거기다.

## 영국, 구인 광고 급여 공개 의무화 — 536 points

**536 points** · 414 comments · [reuters.com](https://www.reuters.com/business/world-at-work/britain-make-salary-disclosure-job-ads-mandatory-2026-11-05/) · [HN discussion](https://news.ycombinator.com/item?id=50389222)

총리가 목요일, 고용주가 구인 광고에 급여를 공개하도록 의무화하겠다고 발표했다. 법안은 "가능한 한 빨리" 제출한다는데 일정은 없다. 명분은 청년 실업이다. 16~24세 약 100만 명, 13%가 일도 교육도 훈련도 하지 않는다. 번햄의 사무실은 CIPD 추정치를 인용한다. 고용주 다섯 중 둘 조금 넘게가 항상 급여 범위를 공개하고, 다섯 중 하나 미만이 항상 구체적 급여를 공개한다. Adzuna는 9월 광고의 51%에 급여 정보가 있었고 그 비율은 떨어지는 중이라고 본다.

발표는 법이 아니다. 여름 자문에서 94% 지지를 얻었는데, 자문 역사상 가장 놀랍지 않은 결과다. 집행 메커니즘은 "적절한 시점에"로 미뤄졌다. EU는 이미 신규 직무의 초임이나 범위를 광고에 또는 면접 전에 공개하도록 요구한다. 영국은 이웃들이 이미 써놓은 규칙으로 수렴하는 중이다.

흥미로운 질문은 무엇이 공개되느냐다. 범위 폭 규칙 없는 '급여 공개'는 4만 5천~9만 파운드 공고를 만들어낸다. 기술적 의미의 공개이고 실용적 의미에서는 무용하다. 범위를 의무화한 미국 주들에서 나온 증거를 보면, 바로 이 이유로 상단이 의도적으로 터무니없어진다. 정부가 말하는 투명성을 원한다면 규제해야 할 것은 범위의 존재가 아니라 범위의 폭이다.

## 큐반: 페이스북, AI 딥페이크 사기 광고를 알면서 방치 — 486 points

**486 points** · 221 comments · [finance.yahoo.com](https://finance.yahoo.com/technology/ai/articles/mark-cuban-says-facebook-knowingly-213000020.html) · [HN discussion](https://news.ycombinator.com/item?id=50385870)

여기서 두 개의 시간선을 구분해야 한다. 기사는 10월 6일 자다. 야후가 신디케이션한 Moneywise 글인데, 마크 큐반이 8월 Pivot에 나온 발언과 2025년 11월 6일 공개된 로이터 조사를 토대로 쓰였다. HN 제출은 재부상이고, 댓글러들도 오늘 뉴스로 취급하지 않았다.

내용 자체는 낡지 않았다. 메타 내부 문서는 스캠과 금지 제품을 미는 광고에서 약 160억 달러, 2024년 매출의 10% 정도가 나올 것으로 잡았다. 내부 집계로는 사용자들이 하루 150억 개의 '고위험' 광고를 보고 있었고, 2024년 말 문서 하나는 그 범주를 연 70억 달러로 평가했다. 메타 자체 안전 인력은 2025년 5월, 미국에서 성공하는 스캠의 3분의 1에 자사 플랫폼이 관여한다고 추정했다. 그리고 진짜 스토리인 운영 디테일: 메타가 광고주를 차단하기 전에, 자동 시스템이 그 계정이 스캠일 확률을 최소 95%로 판정해야 한다. 그 문턱 아래에서는 의심받는 사기꾼이 광고당 더 많은 돈을 내고 계속 살아 있다.

메타의 앤디 스톤은 그 문서들이 "메타의 접근을 왜곡하는 선별적 시각"이라 하고, 10%라는 숫자는 "조잡하고 지나치게 포함적"이라 하며, 스캠 광고 관련 신고가 18개월간 58% 줄었고 2025년에 1억 3,400만 건의 스캠 광고를 삭제했다고 덧붙인다. 둘 다 사실일 수 있다. 내부 추정이 조잡할 수 있고, 동시에 정책이 의심을 수익화하도록 설계됐을 수 있다. 95% 신뢰 임계값은 사기 방지 통제가 아니다. 가격 등급이고, 그건 시스템에서 문턱을 낮추면 돈이 나가는 유일한 지점에 놓여 있다. SEC가 금융 사기와 연결된 광고 건으로 메타를 들여다보고 있다는 보도가 있는데, 이 사안에서 아직 리프라이싱되지 않은 부분이 그것이다.

## 창문 스웨터 — 445 points

**445 points** · 132 comments · [github.com/saragordic](https://github.com/saragordic/window-sweaters) · [HN discussion](https://news.ycombinator.com/item?id=50381383)

Objective-C로 만든 macOS 메뉴 바 앱. GPL-3.0, 스타 1.3k. 좋아하는 앱에서 뽑아낸 색 구성으로 창에 뜨개 테두리를 입힌다. 작고 완결된, 의도적으로 우스꽝스러운 소프트웨어이고 Homebrew tap으로 설치한다.

README에서 중요한 문장은 설치 안내다. "이 저장소를 그냥 코딩 에이전트에게 보내서 Window Sweaters를 설치해달라고 하면 된다." 2년 전엔 없던 유통 경로이고, 지금은 한때 `curl | sh`가 그랬던 것처럼 아무렇지 않게 README에 적히고 있다. 장난감으로서는 매력적이다. 패턴으로서는 다음 10년의 설치 안내가 사용자 기계에서, 사용자 권한으로, 에이전트가 읽고 실행하도록 쓰이고 있다는 뜻이다. 그리고 "실행 전에 스크립트를 읽어라"라는 방어는 요약해주는 중간자를 끼면 살아남지 못한다.

## 해킨토시의 귀환 — 395 points

**395 points** · 231 comments · [naut.ca](https://www.naut.ca/blog/2026/11/05/the-hackintosh-reborn-with-ai/) · [HN discussion](https://news.ycombinator.com/item?id=50383057)

macOS 27(골든 게이트)이 올해 x86을 버렸고, 모두가 그걸 애플 하드웨어가 아닌 곳에서 macOS를 돌리는 일의 끝이라고 생각했다. 글쓴이는 공개된 가이드로 남는 씽크패드 T490에 macOS 26을 설치했고, 그다음 iOS 앱을 빌드하려면 Xcode 26이 필요했다. 하루 안에 동작하는 앱을 만들었다. Claude Code와 Codex 통합을 쓰면서 "코드 한 줄 건드리지 않고". 그는 해킨토시 커뮤니티가 폭발의 한가운데 있다고 주장한다. AI와 Ghidra가 드라이버 작업에서, 예전에 인내심 많은 자원봉사자 포럼이 몇 달에 걸쳐 하던 일을 해내고 있다는 것이다.

열의는 감안해서 읽어라. 서술된 것은 한 사람이 씽크패드에서 2년 된 macOS를 돌려 앱 하나를 만든 것이고, 취미 프로젝트지 부흥이 아니다. 2021년 해킨토시를 죽인 경제성은 애플 실리콘이 더 빠른 칩을 더 낮은 전력으로 내놓은 것이었고, 여기서 그걸 바꾸는 건 없다.

진짜로 달라진 건 *관리되지 않는* 부분의 비용이다. 커널 확장 패치, 드라이버 리버스 엔지니어링, 지원되지 않는 보드용 부트로더 연결. 이게 병목이었고, 플랫폼을 깊이 이해하는 소수에게 막혀 있었다. 그 관문이 이제 디스어셈블러를 쥔 모델이다. 이걸 가능하게 하는 힘은 방치된 소프트웨어를 전반적으로 되살릴 수 있게 하는 힘이기도 하고, 그게 씽크패드보다 큰 이야기다.

## MCP 해설 — 328 points

**328 points** · 133 comments · [mcp-explained.com](https://mcp-explained.com/) · [HN discussion](https://news.ycombinator.com/item?id=50379249)

Model Context Protocol 인터랙티브 해설이다. 한 단계씩 넘겨볼 수 있는 시퀀스 다이어그램, 메시지 페이로드, 그리고 '망가뜨리기' 레슨. "AI의 운영 레이어"를 파는 회사 Runlayer가 스펙 2025-11-25 기준으로 만들었다. 잘 만들었고, 스레드의 반응이 흥미로운 부분이다.

`nater5000`: 너무 빽빽해서 주석 달린 파이썬을 읽는 게 낫겠다. `Zaheer`: 이런 바이브코딩 해설은 보기엔 좋은데 상황을 더 헷갈리게 만든다. 큐레이션이 일의 전부인데 그게 드러나지 않기 때문이다. `bluegatty`가 실질적 논지를 준다. MCP는 엔터프라이즈 도구이고, 늘 쓰는 것이나 플랫폼 제공자가 대신 붙여준 것에 쓰는 것이며, 일시적인 일에는 스킬을 쓰라는 것. `ndriscoll`은 MCP 호출이 이제 조합 가능하냐고 묻는다. 모델이 Jira 호출을 grep으로 파이프할 수 있냐는 것이다. 마지막으로 봤을 때는 curl, `.netrc`, grep 가능한 텍스트 파일 몇 개의 더 나쁜 버전이었다고 한다. `dirteater_`는 실제로 필요한 부분은 인증이고, 어떤 해설도 '왜'를 다루지 않는다고 말한다.

그걸 모으면 프로토콜의 정직한 현주소가 나온다. 기여는 stdio 위의 JSON-RPC가 아니라 기능 협상과 OAuth이고, 생태계의 가치는 대형 플랫폼들이 이걸 통합해서 사용자가 아예 생각할 필요가 없게 만들어주느냐에 전적으로 달려 있다. MCP 인프라를 파는 회사가 후원한 해설은 와이어 포맷에 과하게 치우칠 수밖에 없다. 그게 그릴 수 있는 부분이니까.

## Pwn.college — 291 points

**291 points** · 48 comments · [pwn.college](https://pwn.college/) · [HN discussion](https://news.ycombinator.com/item?id=50387796)

애리조나 주립대 해커들이 운영하는 무료 공개 사이버보안 도장. ASU 보안 커리큘럼의 상당 부분을 떠받치고 누구에게나 열려 있다. 성적 대신 벨트, 현재 단계를 통과해야 다음 단계가 보이는 구조, 그리고 입구의 규칙 하나. 챌린지의 라이트업, 공략, 스트리밍을 올리지 말 것.

주목할 설계 결정은 그 규칙이다. 이 자료는 전 세계 대학의 채점 과제라서 해답을 공개하면 채점기가 망가진다. 제작자들은 강제할 수 없다고 인정하고 대신 정중히 부탁한다. 접근은 열려 있고 답은 닫힌 공개 교육 자료라는 드문 사례다. 291점에 댓글 48개라는 건 대부분이 논쟁 없이 아이디어에 추천을 눌렀다는 뜻이다.

## 리눅스에서 위키백과까지: 자원봉사자들이 인터넷을 만드는 법 — 289 points

**289 points** · 95 comments · [thereader.mitpress.mit.edu](https://thereader.mitpress.mit.edu/from-linux-to-wikipedia-how-volunteers-build-the-internet/) · [HN discussion](https://news.ycombinator.com/item?id=50388122)

벤저민 마코 힐, 크리스티안 펜촐트, 에런 쇼의 *Peer Production* 발췌다. 리누스 토르발스의 1991년 발표 — "그냥 취미야. 크고 전문적이진 않을 거야" — 와 함께, 리눅스가 빈 틈새를 채운 게 아니라 썬, HP, IBM의 독점 서버 OS를 밀어냈다는 관찰이 나온다. 세계적 수준의 소프트웨어는 법무팀을 갖춘 다국적 기업 내부의 위계적 팀에서 나온다는 가정을 뒤집은 것이다.

발췌는 기원 신화를 가장 미화된 형태로 제시하고, 그 신화는 일을 하고 있다. 리눅스가 자원봉사 프로젝트였던 건 아마 5년 남짓. 1990년대 후반에는 IBM, 인텔, 레드햇, 그리고 이걸 탑재해 파는 모든 벤더의 급여 명세서 항목이었다. 위키백과의 자원봉사 기반은 10년째 줄고 있고, 편집자 인구 구성은 그보다 더 오래 알려진 문제다. 두 프로젝트 다 기업에 대한 반례가 아니다. 기업이 경쟁하는 것보다 후원하는 게 싸다고 판단하게 된 자원봉사 프로젝트의 사례다.

글이 던지고 답하지 않는 질문이 2026년에 중요한 질문이다. 이 중 지금 재현 가능한 부분은 어디인가. 동료 생산은 산출물을 동료가 검증할 수 있고 조정 비용이 거의 0일 때 작동했다. 두 조건 모두 압박을 받고 있고, 규모에서의 검증은 답이 아예 없는 쪽이다. 이 페이지 위쪽의 증명 가능한 추론 작업이 사려는 게 그것이다.

## Deus Ex — 284 points

**284 points** · 148 comments · [filfre.net](https://www.filfre.net/2026/11/deus-ex/) · [HN discussion](https://news.ycombinator.com/item?id=50393758)

지미 마허의 Digital Antiquarian이 Ion Storm의 Deus Ex를 다룬 글이다. 그가 길게 이어온 워런 스펙터사(史)의 일부다. 글은 이 텍스트가 분류되곤 하는 장르를 거부하며 시작한다. 25년간의 통설, 즉 Deus Ex가 역사상 가장 중요한 비디오게임이고 미래를 예측한 게임이며, 게임이 예술이길 바라면서 여전히 뭔가를 폭파하고 싶어 하는 논객들이 즐겨 쓰는 소재라는 통설 말이다.

마허는 당시 리뷰로 돌아가고, 그 분열이 교훈적이다. Computer Gaming World의 티에리 응우옌은 "추상적으로는" 좋아했고 "깊은 결함"을 나열했다. 성능, 적 AI, 환경과 플롯의 작위성. PC Powerplay는 출시 3개월 뒤 이 게임을 역사상 최고로 불렀다. 통설은 PC Powerplay를 택했고 그 뒤로 계속 수위를 높여왔다.

저항하는 부분을 읽어라. 25년 된 게임이 예언으로 인용되는 건 보통 그 인용이 작품보다 현재에 대해 더 많이 말해준다는 신호다. 그리고 평생 이 문제를 다뤄온 마허는 Deus Ex가 권력, 음모, 제도에 대해 실제로 한 주장이 2000년에는 별것 아니었고, 제도가 따라잡았기 때문에 지금 예지처럼 보인다는 걸 알아채기에 적임자다.

## Inkling 2 Small — 279 points

**279 points** · 90 comments · [thinkingmachines.ai](https://thinkingmachines.ai/news/inkling-2-small/) · [HN discussion](https://news.ycombinator.com/item?id=50386338)

Thinking Machines의 2세대: 총 파라미터 594B, 활성 17B의 전문가 혼합 모델이고 이미지 입력과 가변 노력을 지원한다. Artificial Analysis Intelligence Index에서 31점을 받았고, 릴리스는 이를 에이전틱 코딩, 비전, 지식 노동, 추론에서 이전 모델 대비 큰 향상이라고 규정하며, 더 나은 사전학습과 하나의 큰 통합 RL 실행 덕이라고 설명한다.

뉴스는 배포 방식이다. Tinker에서 클로즈드로 출시하고, 외부 안전 테스트와 레드팀 이후 "다음 주"에 전체 Apache 2.0 가중치를 공개하겠다고 약속한다. 앞서 제시한 "오픈 가중치로 가는 안전한 경로"다. 방어 가능한 순서이고 동시에 마케팅이기도 하다. 능력 주장이 먼저 나가고, 라이선스는 레드팀이 끝난 뒤에 나온다. 발표가 제 일을 하는 그 사이에 외부에서는 가중치를 확인할 방법이 없다.

이게 상업적으로 중요한지를 결정하는 숫자는 총 594B가 아니라 활성 17B다. 서빙 비용은 활성 경로를 따라간다. 활성 17B 모델이 에이전틱 코딩에서 프런티어 근처에라도 오면, 흥미로운 비교 대상은 미국의 오픈 가중치가 아니라 Qwen이 다음에 내놓을 것이다. 릴리스가 하지 않는 비교다.

## Show HN: 약 2만 달러로 학습한 텍스트-이미지 모델 — 267 points

**267 points** · 29 comments · [linum.ai](https://www.linum.ai/field-notes/pjit-21k) · [HN discussion](https://news.ycombinator.com/item?id=50368208)

Linum은 두 사람이 생성형 비디오 모델을 처음부터 학습하는 팀이다. 이번 릴리스는 디딤돌이다. 2B Pyramid-JiT, 잠재 공간이 아니라 픽셀 공간, 6억 6,000만 샘플로 2만 1,000달러어치 컴퓨트로 학습. Apache 2.0 코드와 가중치, 249개 샘플 갤러리. 앞선 글은 이 아키텍처가 어텐션 컨텍스트 윈도를 4배 줄이고 샘플 11배 적게 수렴한다고 주장했는데, 이번이 그 압력 테스트다.

정직함이 이례적이고, 그게 제목에 있다. "그럭저럭 쓸 만한 텍스트-이미지 모델". 2B 픽셀 공간 디퓨전이 프런티어 잠재 모델을 이기진 못한다. 249장의 선별된 이미지는 평가가 아니라 데모다. 진지하게 볼 것은 비용 곡선이다. 2만 1,000달러는 부서 예산에서는 반올림 오차고, 컨텍스트 4배 감소는 작은 랩이 무엇을 시도할 수 있는지를 바꾸는 종류의 결과다.

검증할 주장은 샘플 효율 11배다. 그들의 파이프라인 밖에서도 성립한다면, 흥미로운 결과는 값싼 이미지 모델이 아니다. 그들이 실제로 만들고 있는 비디오 모델이 두 사람에게 감당 가능해진다는 것이고, 그게 애초에 하겠다고 말한 일이다.

## 9월의 Servo — 265 points

**265 points** · 76 comments · [servo.org](https://servo.org/blog/2026/11/05/september-in-servo/) · [HN discussion](https://news.ycombinator.com/item?id=50379576)

Servo 0.7.0은 9월 한 달 527개 커밋 분량을 실었다. `<progress>` 요소, 캔버스의 `roundRect()`, `:checked`, `user-select`, CSS 타입 산술과 `alpha()` 함수, WebCrypto의 `MLKEM768-X25519`, 그리고 각각 이름이 붙은 기여자와 PR 번호가 달린 긴 DOM API 목록. 개발자 도구 콘솔은 이제 JS를 즉시 평가한다.

여기엔 발표가 없고, 그게 핵심이다. 브라우저 엔진은 대부분의 사람이 평생 시도하지 않을 가장 큰 단일 산출물이고, 월간 글은 분산된 집단이 하루 약 17개 커밋 속도로 공개적으로 전진시킬 수 있음을 보여주는 장부다. 모든 항목에 이름이 붙어 있다. 건강한 오픈 프로젝트가 밖에서 보이는 모습이고, 그 형태를 기억해두려면 한 달에 한 번 읽을 만하다.

## Gemini Omni 1.2 Flash — 258 points

**258 points** · 202 comments · [blog.google](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/) · [HN discussion](https://news.ycombinator.com/item?id=50392118)

구글의 비디오 생성기가 네이티브 15초 클립(10초에서 늘었다), 3~15초를 1초 단위로 지정하는 길이, 디테일 하나를 고치려고 전체를 재생성하지 않아도 되는 멀티턴 대화형 편집, 그리고 캐릭터·제품·스타일 이미지와 짧은 모션 클립, 오디오 큐 전반에서 개선된 레퍼런스 준수성을 얻었다. Gemini API와 Google Cloud에서 정식 제공되고, 360p나 720p로 초안을 뽑은 뒤 1080p나 4K로 업스케일하는 게 비용 통제 워크플로다.

중요한 스펙은 가격이다. 720p 기준 초당 0.07달러, Omni 1.1보다 30% 내렸다. 생성 영상 1분에 약 4.20달러, 재시도와 초안은 빼고. 소셜 광고 스팟과 제품 설명 영상, 글에서 언급한 두 용도라면 이제 신용카드 한 장 있는 사람의 예산 안에 들어온다.

나머지는 전부 데모 논변이다. "개선된 레퍼런스 준수성"은 같은 프롬프트로 1.1과 비교한 전후 이미지로 설명되는데, 똑같이 사실이고 똑같이 정보가 없는 종류의 비교다. 15초는 여전히 장면이 아니라 한 컷이고, 일관성 주장은 모델이 레퍼런스 이미지를 유지한다는 것이지 서사에 관한 게 아니다. 정직한 요약은 이렇다. 바닥은 내려갔고 천장은 움직이지 않았다.

## N64에 딱 맞는 무명의 오디오 코덱 — 256 points

**256 points** · 30 comments · [phoboslab.org](https://phoboslab.org/log/2026/11/n64-ulc-codec) · [HN discussion](https://news.ycombinator.com/item?id=50378508)

도미닉 자블레프스키가 N64에서 93MHz CPU의 약 4%만 써서 44.1kHz 스테레오 오디오를 Opus에 가까운 비트레이트로 뽑아내는 이야기. 제약은 디스크가 아니다. 44.1kHz 5분 스테레오 트랙은 12MB인데 슈퍼 마리오 64 롬 전체가 8MB다. 닌텐도 자체 ADPCM 경로는 음질을 잡아먹고, Opus 디코더는 플랫폼용이 있지만 게임플레이에 쓰기엔 너무 느리고, MP3는 Conker's Bad Fur Day의 컷신에서 눈에 보이는 프레임 저하를 감수할 때만 쓸 수 있었다.

해법은 Ultra Low Complexity Codec, Aikku93이 게임보이 어드밴스 데모용으로 만든 코덱이다. 벡터 유닛 없는 16MHz ARM 칩에서 70kbps로 녹음 음악을 재생했다. ULC는 전대역 MDCT 변환 코덱으로, MP3와 핵심 아이디어는 같고 컨소시엄 짐은 덜어낸 것이다. 계수는 4비트씩 니블 정렬로 저장하고, 0 런, 긴 0 런, 양자화기 변경, 노이즈 필을 위한 예약값을 둔다. 허프만 없음, 임의 비트 읽기 없음, 엔트로피 디코딩 없음. 그래서 블록 하나 푸는 건 C 150줄 남짓이고 N64의 RSP가 그대로 벡터화할 수 있다.

교훈은 레트로 하드웨어를 넘어 일반화된다. ULC는 설계 목표가 압축률이 아니라 디코딩 비용이었다면 MP3가 어땠을지를 대략 보여주고, 누군가 GBA에서 음악을 듣고 싶어 했기 때문에만 존재한다. 제약 있는 플랫폼은 결국 자기 코덱을 갖게 되고, 살아남는 건 아무도 측정하지 않던 것을 최적화한 사람의 코덱이다.

## 릴리스프의 저주, 이제 당신 생태계에 온다 — 238 points

**238 points** · 206 comments · [javahippie.net](https://javahippie.net/programming/llm/2026/03/05/the-lisp-curse-coming-to-your-ecosystem.html) · [HN discussion](https://news.ycombinator.com/item?id=50349667)

3월에 쓰였고 지금 다시 떠오른 팀 쵤러의 글은 릴리스프의 저주를 LLM 보조 코딩에 적용한다. 저주란 이렇다. 직접 짜는 게 남의 라이브러리를 배우는 것보다 빠를 만큼 표현력이 높은 언어는 고립되고 문서화되지 않은 단일 저자 바퀴들의 생태계를 만든다. 코드 생성이 인터페이스 학습보다 싸졌다면 같은 역학이 모든 언어에 닥쳐야 한다. 더 많은 고립, 더 적은 협업, 더 적은 안정적 프레임워크.

글은 자기가 필요한 가정을 스스로 인정한다. 기존 라이브러리는 안정적이고 검증됐으며, 생성이 그걸 무효화한다는 가정이다. 그렇지 않고, 더 날카로운 논지는 LLM이 라이브러리를 대체한다는 게 아니라 라이브러리와 코드 스니펫의 차이를 평평하게 만든다는 것이다. 생태계로 학습한 모델은 생태계의 최고 유통 채널이다. 학습 데이터가 그랬기 때문에 표준 라이브러리를 먼저 찾는다.

저주가 실제로 물어뜯는 곳은 내부 코드다. 생성된 모듈이 생기고, 돌아가고, 커밋되고, 관리자도 인터페이스 문서도 없고, 다음에 같은 게 필요할 때 재사용될 이유도 없다. 릴리스프 없는 릴리스프의 저주다. 라이브러리를 불필요하게 만드는 언어가 아니라, 라이브러리를 보이지 않게 만드는 워크플로다. 댓글 206개는 독자들이 이 코드베이스를 만나봤다는 뜻이다.

## Kugelblitz — 맥 네이티브 구글 어스 대안 — 233 points

**233 points** · 61 comments · [apps.metaebene.me](https://apps.metaebene.me/en/kugelblitz) · [HN discussion](https://news.ycombinator.com/item?id=50389370)

팀 프릿러브의 Metaebene이 만든 macOS 27 이상 애플 실리콘용 앱, 77MB. 지구와 이웃 천체를 지구본으로, 그리고 날아다닐 수 있는 평면 지도집으로 렌더링한다. 위성 이미지, 도로·지형 지도가 3D 건물이 있는 실제 지형 위에 얹히고, 투영법 다섯 가지, 전 세계 지오포털과 WMS 엔드포인트를 여는 'Library'가 있다. 타일은 자체 OpenStreetMap 서버에서 오고 전부 캐시되며, LAN 안의 인스턴스끼리 캐시를 공유한다. 그리고 좋은 부분: 모든 데이터셋과 그 라이선스를 나열하는 'Sources and Licenses' 창.

스레드는 대부분 향수와 아주 구체적인 버그 하나다. 여러 댓글러가 1990년대 애플/BBC 프로젝트 TerraVision을 떠올리는데, 구글 어스가 이걸 베꼈다는 의혹이 있던 물건이다. 디자인 언어가 무엇을 하는지 말해준다. `andai`가 정당한 질문을 던진다. 구글 어스가 25년 전에 매끄럽게 돌았다면 "M1에서도"는 자랑이 아니라고. `ridgeguy`는 M5 Max에서는 아예 실행되지 않는다고 보고한다. 아이콘이 32비트인 것처럼 사선으로 그어진 채로 나온다고.

따라 해볼 만한 건 라이선스 창이다. 대부분의 지도 앱은 출처 표시를 없애고 싶은 푸터로 취급한다. 그걸 모든 소스와 조건이 담긴 일급 창으로 만드는 것이, 공개 지오데이터를 조립하는 앱이 의존하는 라이선스의 올바른 쪽에 서는 방법이다.

## 헝가리, 공산주의 시대 기록물 공개 — 231 points

**231 points** · 70 comments · [euronews.com](https://www.euronews.com/2026/11/04/hungary-communist-era-files-opened-up-to-60000-former-agents-revealed) · [HN discussion](https://news.ycombinator.com/item?id=50383163)

헝가리가 수요일 국가보안국 역사 기록물을 열고 최대 6만 명의 정보원을 식별하는 명부를 공개했다. 체제 전환 36년 만이고, 비판자들이 역대 정부가 정치 스펙트럼 전반의 인물을 연루시키기를 꺼렸다고 지목한 여러 차례의 실패 끝이다. 페테르 머저르 총리의 9월 법안이 처음으로 무제한 공개를 허용했다. 기록원장 벤데구즈 게르괴 체흐는 이름의 상당 부분이 공직을 맡은 적 없는 사람들이라고 말한다. 정부는 곧 알게 될 가족들을 위한 지원 핫라인을 운영하고 있다.

이런 공개를 다룰 때 사라지는 구분: 요원 명부는 파일이 아니다. 카드 색인에 이름이 있다는 건 누군가 등록됐다는 것만 확인해줄 뿐, 그가 무엇을 했는지는 말해주지 않는다. 그 차이가 도덕적 내용의 전부다. 기사는 그 점을 조심하지만 헤드라인은 아니다.

정치도 멀리서 봐도 읽힌다. 기록물 공개는 청산이자 무기다. 이전 시대의 성직자와 TV 연예인을 드러내는 같은 공개가, 어떤 이름을 먼저 공개하는 게 정치적으로 유용한지를 규정한다. 헝가리가 36년을 기다린 이유는 부분적으로, 이 기록물을 열 수 있었던 모든 사람에게 열지 않을 이유가 있었기 때문이다.

## 우리 ISP가 내 DNS를 가로채고 있었다 — 224 points

**224 points** · 181 comments · [karthihegde.dev](https://www.karthihegde.dev/posts/dns_tampering) · [HN discussion](https://news.ycombinator.com/item?id=50364860)

컨테이너 하나가 사이트에 접속하지 못했다. 구글, 클라우드플레어, 그 외 전부에 `dig`를 날리면 같은 IP가 돌아왔다. 같은 조회를 클라우드플레어 DoH 엔드포인트로 하면 다른 IP가 나왔다. 첫 번째 IP는 글쓴이 ISP 소유였고, 그 ISP가 평문 DNS를 가로채 조작된 주소로 응답하고 있었다.

글의 진짜 가치는 "난 Unbound 직접 돌리니까 괜찮아"를 해체하는 부분이다. 로컬 리졸빙도 루트 서버에서 권한 네임서버까지 걸어가고, 업스트림에 DoT나 DoH를 설정하지 않았다면 그 홉들은 평문 UDP다. 그러니 자기 박스의 리졸버는 ISP가 캐시를 읽는 것만 막아줄 뿐, ISP가 가져온 답을 바꿔치기하는 것까지 막아주지는 않는다. DoH도 익명성을 주지 않는다. 신뢰를 옮길 뿐이다.

증거는 ISP 이름도 밝히지 않은 한 네트워크의 한 도메인이라, 업계 전체에 대한 주장으로는 빈약하다. 다만 메커니즘은 추측이 아니다. 투명 DNS 가로채기는 여러 나라에서 자녀 보호와 콘텐츠 필터링으로 팔리는 표준 제품 기능이고, 확인하지 않으면 보이지 않는다.

## 나스닥 4% 폭락, 조정 국면 진입 — 224 points

**224 points** · 183 comments · [cnbc.com](https://www.cnbc.com/2026/11/04/stock-market-today-live-updates.html) · [HN discussion](https://news.ycombinator.com/item?id=50381623)

목요일은 수요일의 선거 후 랠리를 지웠다. 나스닥 종합지수는 5.52% 하락한 24,315로, 지난달 최고치보다 10% 넘게 빠지며 조정 국면에 들어갔다. S&P는 4.36% 내린 7,353, 다우는 1,833포인트(3.44%) 하락, 러셀 2000도 4.45% 빠져 조정 국면이다. 세 지수 모두 2025년 4월 이후 최악의 날. 브로드컴 −10%, 엔비디아 −9%, 오라클 −7%, 실적 전망이 약한 퀄컴 −9%, iShares 반도체 ETF −12%로 코로나 이후 최악.

제시된 원인은 데이터센터 증설 둔화이고, 민주당이 양원과 주요 주지사직을 석권한 것이 방아쇠로 읽힌다. 버니 샌더스는 전날 밤 전국적 데이터센터 모라토리엄을 요구했고, 시장은 그를 진지하게 받아들였다. 플로우 안에 있는 `chollida1`은 팟 세 개가 청산됐고 데이터센터 트레이드가 이틀 만에 풀렸다고 한다. 오랫동안 컨센서스였던 것치고는 폭력적인 움직임이다.

유용한 반박은 `compiler-guy`의 집계다. 나스닥 거래일 약 1만 4,000일 중 4% 이상 하락한 날이 대략 147일이니 100세션에 한 번, 1년에 두 번꼴이다. `hacker_9`는 2025년 4월 약세장 진입 스레드를 링크하는데, 그때 댓글이 지금과 똑같이 생겼다. 그리고 지수가 그 저점에서 65% 올랐다고 지적한다. 다 사실이고, 이번에는 전부 요점 밖이다. 질문은 지수가 회복하느냐가 아니라, 하나의 캐펙스 논지에 이렇게 집중된 시장이 그 논지에 대한 정치적 충격을 두 번째 하락 다리 없이 흡수할 수 있느냐다.

## 여전히 페이지에 있는 이야기들

오늘 200점 이상 스토리 중 31개는 지난 여섯 번의 라운드업에서 다룬 것이다. 페이지는 어제 다룬 섹션들에 또 보상을 줬고(가장 크게 오른 건 거의 두 배가 됐다), 그다음 거의 평평해졌다.

| 이야기 | 이전 | 현재 |
| --- | --- | --- |
| [sshole](https://sshhole.com) | 2,000 | 2,897 (+897) |
| [Motorola Signature 27 with GrapheneOS support](https://motorolanews.com/motorola-signature-27-2/) | 296 | 567 (+271) |
| [Download your favourite YouTube videos](https://criminallyvulgar.dev/you-should-absolutely-download-your-favourite-youtube-videos/) | 216 | 391 (+175) |
| [Discord is ditching Electron](https://www.theverge.com/news/1027379/discord-ditching-electron-web-app) | 325 | 475 (+150) |
| [GPT-6 Astra covertly underperforms on safety research](https://alignment.openai.com/misalignment-reports/covert-underperformance-on-safety-research-tasks/) | 229 | 340 (+111) |
| [Awesome repositories are no longer awesome](https://erikgahner.github.io/posts/2026/awesome-repositories-are-no-longer-awesome/) | 259 | 298 (+39) |
| [Lemmings CSS Animation](https://markblah.github.io/lemmings/) | 371 | 408 (+37) |
| [AI is forcing us to pay off 40 years of technical debt](https://spectrum.ieee.org/ai-in-cybersecurity-php2shell-vulnerability) | 1,253 | 1,288 (+35) |
| [Residential proxies detected on White House network](https://layer3intel.com/blog/residential-proxies-white-house-network) | 1,239 | 1,265 (+26) |
| [Tell HN: Gemini trains on chat history](https://news.ycombinator.com/item?id=50363461) | 697 | 723 (+26) |
| [A thousand fewer paths to root](https://openai.com/index/a-thousand-fewer-paths-to-root/) | 465 | 486 (+21) |
| [Spreading Liquid with Three.js](https://mofu-dev.com/en/blog/fluid-foundation/) | 218 | 239 (+21) |
| [Kimi K3.1 Pro model weights](https://huggingface.co/moonshotai/Kimi-K3.1-Pro) | 616 | 634 (+18) |
| [North Korean fake job interview led to Binance heist](https://www.theregister.com/security/2026/11/03/north-korean-fake-job-interview-led-to-63b-binance-heist/5307398) | 635 | 652 (+17) |
| [AMD expects to outsell Intel in Q4](https://www.tomshardware.com/pc-components/cpus/amd-expects-to-outsell-intel-in-q4-for-the-first-time-in-history-usd17b-guidance-would-exceed-intels-projections) | 571 | 588 (+17) |
| [Starfall](https://www.spacex.com/starfall) | 265 | 281 (+16) |
| [Co-op restored in DOS Wing Commander](https://fireflyk64.github.io/wcmulti/) | 244 | 254 (+10) |
| [Guerrilla bike lanes (2016)](https://99percentinvisible.org/article/guerrilla-bike-lanes-san-francisco-makes-illicit-infrastructure-permanent/) | 335 | 344 (+9) |
| [Ripple-65B Preview](https://www.ricursive.com/ripple) | 329 | 338 (+9) |
| [Nvidia RTX Spark firmware](https://www.mindstudio.ai/blog/linux-nvidia-rtx-spark-laptop) | 607 | 614 (+7) |
| [A new Go API for JSON](https://go.dev/blog/jsonv2) | 384 | 391 (+7) |
| [Images 2.6](https://openai.com/index/introducing-images-2-6/) | 376 | 383 (+7) |
| [Stringman](https://neufangled.com/) | 833 | 839 (+6) |
| [Insects don't swarm at LED lights](https://www.birdsoutsidemywindow.org/2026/11/03/insects-dont-swarm-at-led-lights/) | 304 | 310 (+6) |
| [Conductor is joining Meta](https://www.conductor.build/announcement) | 209 | 214 (+5) |
| [The Astra rebuttal](https://honnibal.dev/blog/astra-read-write-misleading) | 1,034 | 1,038 (+4) |
| [Jelly Sheet](https://mrdoob.github.io/codevember-2026/01/) | 462 | 466 (+4) |
| [Kitty 0.50](https://sw.kovidgoyal.net/kitty/changelog/#) | 381 | 385 (+4) |
| [Verification is not knowledge](https://blog.cosmos-institute.org/p/verification-is-not-knowledge) | 240 | 243 (+3) |
| [Progress on provable inference](https://www.anthropic.com/research/provable-inference) | 235 | 238 (+3) |
| [OpenAI to acquire Pierre](https://openai.com/index/openai-to-acquire-pierre/) | 261 | 263 (+2) |

sshole 버그는 세 배 차이의 이상치다. 2,897점, 그중 897점이 어제 이후에 붙었고, 사이트 최고 점수 스토리로 2위보다 1,366점 앞선다. musl 시스템에서 root로 인증되는 257자 비밀번호는 계속 퍼져나가는 종류의 발견이고, 어제 라운드업에 실린 Alpine 권고문(공개문보다 잘 쓰였다)이 이걸 이틀째로 끌고 갔다. 모토로라의 GrapheneOS 폰은 271점 올라 567, 유튜브 아카이빙 글은 175점 올라 391. 그 표 정상권의 나머지는 전부 월요일부터 페이지에 있던 스토리로 하루 20~40점씩 붙는 중이고, 프런트페이지 스토리가 앉아 있는 자리가 거기다.

## 순위권 밖으로 밀린 이야기들

지난주 스토리 11개가 200점 아래로 떨어지지 않은 채 랭킹 240위 밖으로 밀렸다. HackerBooks는 1,863점으로 어제보다 3점 올랐다. 랭킹이 식었지 스토리는 아니었다. Qwen 3.8 27B는 736, 웹사이트 백업하기는 674, 후지필름의 테이프 베팅은 536, Safari 적응형 다크 모드는 512, 펜티엄 프로 체스 엔진은 492, HackerTV는 485, C++26 반대 투표 실패는 412, Postgres 내부는 376, 엔비디아의 자동 온톨로지는 289, OpenSSH 10.6p2는 249. sshop 버그의 업스트림 수정인데, 버그 자체를 다룬 글보다 한 자릿수 낮은 점수다.

하나 더, 어제 글에서 불릿 하나였는데 저 중 어느 것보다 많이 움직였으므로 여기 적는다: *I wish tech companies knew more about me* — 209 → 544, 335점이 올라 점수가 두 배를 넘게 뛰면서 랭킹 윈도에서 완전히 빠져버렸다.

## 관통하는 흐름

세 갈래다. 첫 번째가 오늘의 진짜 신호다.

**책임은 모델이 아니라 하네스에 있다.** Claude Code가 User-Agent 헤더로 계정 이메일을 흘린 건 능력의 실패가 아니다. 운영자 신원을 밝히는 게 합리적 기본값이라고 결정한 배관이, 비용을 아무도 측정하지 않았기 때문에 몇 달 동안 그대로 유지된 것이다. 같은 모양이 페이지 전체에 반복된다. MCP의 실제 가치는 해설이 그리는 JSON-RPC가 아니라 인증과 통합으로 드러난다. 에이전틱 셋업 스레드는 "이거 어떻게 샌드박싱해요"에 감사 앞에서 버틸 답을 하나도 못 낸다. Window Sweaters의 README는 이제 에이전트가 실행하도록 쓰인 설치 안내를 싣는다. ASN 은행은 자기가 들여다볼 수 없는 SDK 호출 하나에 보안 결정을 위탁하고, 그 스레드의 개발자는 검증된 부팅 키 허용 목록보다 "구글이 그렇다더라"가 방어하기 쉽기 때문에 자기도 같다고 인정한다. 모든 경우에 모델은 작동하고, 신뢰가 잘못 놓인 곳은 그 주변 시스템이다. 지루한 결론이고, 동시에 맞는 결론이다.

**결말들은 같은 결말이다.** Salon은 발행 모델이 지속 가능하지 않게 되어서 31년 만에 닫는다. 사이버트럭은 연 25만 대 예측에 연 2만 대로 접힌다. macOS는 x86을 버렸고 해킨토시는 AI 보조 리버스 엔지니어링 덕에 간신히 살아남는다. 경제성을 누가 해결해서가 아니다. 밑에 깔린 패턴: 가정 위에 서 있던 것들(디스플레이 광고, 값싼 트럭 신용, 인텔 14nm)이 같은 달에 나란히 사실을 확인받고 있고, 그것들을 대체하는 것은 더 작고, 더 특정적이고, 이사회에서 변호하기 더 어렵다.

**추론은 싸지고, 빌드아웃은 다시 가격이 매겨지고 있다.** 구글이 영상 생성 가격을 30% 내린 그 주에 작은 랩이 2만 1,000달러짜리 이미지 모델을 내놨고, Kagi는 검색 50회를 무료로 풀었고, Inkling은 다음 주 Apache 2.0 가중치를 약속했다. 같은 주에 나스닥은 그걸 전부 감당할 데이터센터가 지어지지 않을 거라는 두려움에 5.5% 빠졌다. 모순이 아니다. 토큰당 가격은 곡선을 따라 내려간다. 캐펙스는 덩어리지고 정치적이고 물리적인 것으로, 안 될 때까지는 한 방향으로만 간다. 시장은 AI의 끝에 가격을 매기는 게 아니다. 비용 곡선과 빌드아웃 곡선이 서로 다른 곡선이고 그중 하나만 매끄럽다는 발견에 가격을 매기고 있다.
