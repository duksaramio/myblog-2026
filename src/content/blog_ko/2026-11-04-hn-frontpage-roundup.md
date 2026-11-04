---
title: "Hacker News 프런트 페이지 라운드업 — 2026년 11월 4일"
pubDate: 2026-11-04
lang: "ko"
description: "58개 이야기가 200점을 넘었고, 상위 10개 중 새것은 하나뿐이다. 새로 들어온 것들은 대부분 오래된 코드 이야기다. 2년 묵은 PHP 버그가 원격 코드 실행이 되고, 암호화된 펌웨어가 노트북을 반 토막 내고, 대차대조표에 없는 3조 2,000억 달러가 등장한다."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
---

오늘 아침 상위 180개를 훑어보니 200점 기준을 넘긴 이야기가 58개였다. 그중 24개가 새것이고, 상위 10개 중 새것은 하나뿐이다. 프런트 페이지는 여전히 며칠 전에 처음 올라온 것들이 차지하고 있고, 그것들도 하루에 수십 점씩 계속 점수를 쌓고 있다.

새로 들어온 것들은 이상할 만큼 한곳에 몰려 있다. 네 개는 AI 회사나 AI 제품이 이미 당신이 가진 기계의 조건을 조용히 바꾸는 이야기다. Gemini가 유료 대화로 학습하고, Nvidia가 노트북 GPU의 전력 테이블을 암호화하고, Google이 검색을 자기 AI에 밀어 넣고, Postman이 당신의 코딩 에이전트 안에 스스로를 설치한다. 네 개는 더 오래된 인프라 — PHP, C++ 표준화, Postgres 내부, 2016년 자전거 도로 기사 — 를 다시 들여다보는 것이다. 나머지는 AI 설비 투자에 관한 돈과 권력이고, 프런트 페이지는 그걸 이미 일주일째 씹고 있다.

## 2년 된 PHP 크래시 리포트가 원격 코드 실행이 됐다 — 925 points

**925 points** · 565 comments · [spectrum.ieee.org](https://spectrum.ieee.org/ai-in-cybersecurity-php2shell-vulnerability) · [HN discussion](https://news.ycombinator.com/item?id=50364336)

PHP2Shell은 2024년에 접수된 버그 이야기다. 메모리 부족 크래시로 분류됐고, 그냥 크래시만 냈기 때문에 손대지 않고 놔뒀다. 당시로서는 맞는 분류였다. 크래시는 싸다. 크래시를 익스플로잇하려면 어떤 비트를 어떤 순서로 덮어써서 메모리의 조종 가능한 지점으로 점프할지 계산해야 하고, 레거시 인터프리터 하나를 위해 그걸 손으로 할 사람은 없다.

올해 Calif라는 보안 업체가 — OpenAI 후원으로 PHP를 감사하던 중 — AI 툴링으로 크래시에서 임의 코드 실행까지 두 주 만에 도달했다. 닿는 표면에는 모든 WordPress와 Drupal 설치가 들어간다. 웹의 대부분이고, 백악관과 NASA도 포함된다. 그에 비해 패치는 엔지니어 네 명이 두 달 걸렸다.

흥미로운 건 AI가 버그를 찾았다는 사실이 아니다. 컬럼비아의 수만 자나(Suman Jana)가 한 프레이밍이다. "로켓 과학은 아니다. 다만 아주 구체적인 추론이 엄청나게 필요한데, 그게 괴로운 것이다." 찾는 일과 고치는 일 사이의 비대칭이 문제의 전부다. AI는 버그 한 종류의 모든 인스턴스를 한나절에 열거할 수 있다. 사람 팀은 그것 하나를 패치하는 데 여전히 몇 달이 필요하다. 패치는 모든 경로를 닫으면서 아무것도 깨뜨리지 않아야 하니까. 기사 제목의 주장 — AI가 우리에게 40년치 기술 부채를 갚게 만들고 있다 — 은 맞지만 강조점이 거꾸로다. 우리는 갚고 있는 게 아니다. 청구서를 항목별로, 그것도 한꺼번에 받고 있는 것이다. 그리고 그 코드를 쓴 사람들은 대부분 죽었거나 은퇴했다.

댓글은 "이게 결국 소프트웨어가 안전해지는 방식"이라는 쪽과, 더 날카로운 반론 사이에서 갈린다. 이건 기능과 무관한 수선 작업의 러닝머신이고, 그게 끝나기는 하는 건지 아직 아무도 모른다는 것이다. 남길 만한 한 문장은, 오픈소스는 늘 "많은 눈" 덕에 안전하다고 주장해왔지만 그 눈들은 실제로 본 적이 없고, AI 감사가 그 약속이 처음으로 실현될 가능성을 만든 첫 사례라는 지적이다.

## 모터 네 개, 795달러, 그리고 천장에 매달린 그리퍼 — 787 points

**787 points** · 233 comments · [neufangled.com](https://neufangled.com/) · [HN discussion](https://news.ycombinator.com/item?id=50354358)

Stringman은 방 크기의 케이블 로봇이다. 방 네 모서리 천장에 고정한 네 가닥 줄에 매달린 그리퍼, 모터 네 개, 3D 프린팅 부품과 라즈베리 파이로 만든다. 795달러. 7 × 7 × 3m 방을 커버하고, 평균 가반하중 약 1.9kg, 이동 속도 0.4m/s다. 부품 목록도 공개돼 있다. 66달러짜리 DM-H6215 액추에이터 네 개, 21달러짜리 STS3215 서보 두 개, 파이 3A+와 파이 제로 2W.

엔지니어링 논점은 액추에이터 개수다. 액추에이터 일곱 개짜리 직렬 암은 액추에이터 일곱 개 값을 하고, 정격 토크에서 약 0.32kg을 든다. Stringman의 모터 네 개는 들어올리는 하중을 나눠 갖기 때문에 가반하중이 합산 토크에 비례하고, 줄이 가장 고르게 당기는 방 중앙에서 최대가 된다. 바퀴형과 다리형 로봇이 못하는 한 가지도 구조적으로 잘한다. 어수선한 것 속으로 손을 내려보내는 일이다. 위에서 바닥으로 접근한다.

회의론은 설명할 필요도 없다. 거실 위를 지나는 케이블은 앵커마다 카메라 두 대를 뜻하고, 누가 의자를 옮길 때마다 캘리브레이션 문제가 생긴다. 시연된 속도는 느리고, 가반하중은 장바구니 한 개지 빨래 바구니가 아니다. 스레드에서 질문에 답한 저자는 장력 한계에 걸리면 그냥 줄을 풀어주기 때문에 사람을 죽이지는 못할 거라고 말한다. 기준이 낮다는 걸 본인도 안다. 오픈소스이고 OSHWA 인증을 받았고, 데이터가 네트워크 밖으로 나가지 않는 로컬 와이파이에서 에어갭으로 돌릴 수 있다. 800달러라면 아이디어가 진짜로 들어 있는 취미용 플랫폼이지 제품은 아니다. 사이트의 "Tension is all you need"라는 제목은 농담이거나, "attention"이라는 단어를 두고 벌이는 인질 협상이다.

## Gemini는 당신의 유료 대화로 학습하고, 삭제해도 완전히 지워지지 않는다 — 560 points

**560 points** · 141 comments · [HN discussion](https://news.ycombinator.com/item?id=50363461)

jameslk의 Tell HN 글인데, Google 자체 지원 페이지로 링크를 걸어놨다. 그래서 반박이 불가능하다. "활동 유지"가 켜져 있으면 Gemini 앱 활동이 모델 학습에 쓰인다. 구독자를 위한 별도 옵트아웃은 없다. 유료 등급이 사주는 건 용량이지 기밀성이 아니다. 일부 대화는 사람 검토자에게 간다. 그리고 지원 페이지는 검토된 대화는 활동을 삭제해도 지워지지 않는다고 말한다. 최대 3년 보관된다. Google 자신의 경고는 이렇다. "검토자에게 보여주고 싶지 않은 기밀 정보는 입력하지 마십시오."

활동 유지를 끄면 학습은 멈춘다. 대신 Gemini는 72시간 이후의 모든 대화를 잊는다. 그게 설계다. 선택지는 프라이버시 대 편의가 아니다. 2년짜리 기억 대 당신이 통제하지 못하는 감사 로그다.

댓글이 상황을 구체적으로 만드는 디테일을 붙인다. 한 댓글러는 픽셀에서 Gemini가 채팅 기록을 켜지 않으면 알림이나 기본 어시스턴트 기능 같은 전화 동작을 거부한다고 보고한다. 여러 사람이 이게 모든 프런티어 랩에서 표준이라며 다른 벤더의 사람 검토 관련 보도를 링크한다. 맞는 독법은 Google만 특별히 나쁘다는 게 아니다. "우리는 당신 데이터로 학습하지 않는다"가 제품에 관한 사실이 아니라 설정에 관한 주장으로 조용히 바뀌었고, 그 설정의 기본값이 켜짐이라는 것이다.

## Nvidia가 전력 테이블을 암호화하자, 리눅스에서 GPU 성능이 3분의 2 날아갔다 — 543 points

**543 points** · 246 comments · [mindstudio.ai](https://www.mindstudio.ai/blog/linux-nvidia-rtx-spark-laptop) · [HN discussion](https://news.ycombinator.com/item?id=50362905)

MSI Prestige RTX Spark 노트북에 리눅스를 듀얼부팅해본 실사용 기록이다. 데스크톱, Nvidia 오픈 커널 드라이버를 통한 GPU 가속, 4K 120Hz, 오디오, 터치패드까지 다 된다. 성능만 빼고. 전원을 꽂으면 GPU가 약 780MHz로 고정된다. 윈도우에서 찍는 2.2GHz가 아니다. GPT-OSS-120B에서 초당 13.9 토큰이다. 윈도우에서는 65.4, WSL에서는 65.1, DGX Spark에서는 61이다.

원인은 정확히 지목된다. Nvidia Platform Controllers and Framework라는 윈도우 전용 구성요소가 CPU와 GPU 사이의 전력 공급을 관리하는데, 그 전력 테이블이 암호화돼 있어 서명된 윈도우 드라이버만 읽을 수 있다. 리눅스 대응물은 없고, Nvidia의 협조 없이는 있을 수도 없다. 기사의 실용적 조언은 WSL을 쓰라는 것이다. 윈도우 드라이버 스택을 그대로 물려받으니까. 맞는 조언이고, 동시에 오픈 GPU 컴퓨팅의 현주소를 잘 요약한다. 오픈 드라이버는 프레임버퍼까지 주고, 얼마나 빨리 돌지는 클로즈드 블롭이 정한다.

스레드가 맞게 지적하는 정정 두 가지. 기사 자체의 부제는 "DGX Spark"라고 쓰지만 이야기는 RTX Spark 노트북에 관한 것이다. 다른 제품이고, DGX Spark는 기본으로 리눅스를 돌린다. 그리고 저자의 첫 시도는 10년치 하드웨어 지원 이력이 있는 배포판이 아니라 새 배포판 Omarchy를 부팅하는 것이었다. 둘 다 발견 자체를 바꾸지는 않는다.

## Safari 27.3은 사이트가 좋든 싫든 웹을 다크 모드로 만든다 — 491 points

**491 points** · 254 comments · [webkit.org](https://webkit.org/blog/18541/introducing-adaptive-dark-mode/) · [HN discussion](https://news.ycombinator.com/item?id=50358562)

WebKit 글의 숫자가 논거다. 페이지 로드의 거의 40%가 다크 모드 사용자에게서 나오는데, 다크 모드를 지원하는 페이지는 10%뿐이다. 27.3 베타에 들어간 Adaptive Dark Mode는 그 격차를 메운다. 페이지를 분석해 밝은 쪽이 우세한지 추정하고, 명도를 뒤집으면서 색상은 보존하는 색상 행렬을 적용한다. 텍스트는 대비를 위해 조정하고, 장식적 색은 가능한 한 건드리지 않는다.

구현은 표준 탈출구를 존중한다. `color-scheme: light dark`를 선언한 페이지는 손대지 않고, `color-scheme: light only`는 완전히 옵트아웃한다. 맞는 판단이고, 대부분의 브라우저 기능이 받는 것보다 절제된 처사다.

스레드의 쓸모 있는 반론 두 개. Dark Reader가 이걸 몇 년째 해왔고 설정도 더 많다. 그리고 제대로 하려는 페이지를 위한 CSS `light-dark()`도 이미 있다. 둘 다 사실이다. 둘 다 영원히 업데이트되지 않을 90%의 페이지에는 답이 아니다. 2019년에 마지막으로 손댄 문서, 정부 서식, 소상공인 사이트의 긴 꼬리다. 다른 반론은 반대 방향으로 간다. 난시가 있는 사람은 밝은 바탕에 어두운 글씨가 더 읽기 어렵고, 고집스럽게 어두운 사이트를 다시 흰색으로 되돌리는 대칭적 기능은 없다. 절반짜리 기능이 없는 것보다 낫지만, 어느 쪽 절반인지는 분명히 해두는 게 좋다.

## 바이낸스 해킹, 제대로 된 버전 — 484 points

**484 points** · 290 comments · [theregister.com](https://www.theregister.com/security/2026/11/03/north-korean-fake-job-interview-led-to-63b-binance-heist/5307398) · [HN discussion](https://news.ycombinator.com/item?id=50365755)

어제 여기서 다룬 이야기의 두 번째 제출이다. 그때 Wired 버전이 600점이었다. The Register 쪽이 더 나은 이유는 결과가 아니라 메커니즘을 말하기 때문이다. 가짜 채용 면접. 엔지니어가 업무용 노트북으로 전화를 받았고, 그 통화가 악성코드를 심었고, 공격자는 바이낸스 지갑 인프라 안에 발판을 얻었다. 거기서부터 내부 AI 도구를 피벗으로 삼아 DevOps 엔지니어의 자격증명과 컨테이너 배포 토큰까지 도달했다.

중요한 디테일은 배포 토큰이다. 그 규모의 조직에서 배포는 CI로만 나가야 한다. CI가 더 빠르기 때문이 아니라, 침해된 워크스테이션이 손을 뻗을 수 없는 클린룸이기 때문이다. 배포 토큰을 가진 엔지니어 한 명과 침해된 노트북 한 대가 공격 표면의 전부다. 스레드가 이 지점을 기사보다 잘 만든다.

나머지 스레드는 직원이 업무용 기계로 개인적인 일을 해도 되는가라는 예측 가능한 논쟁이다. 맞는 말이고 도움이 안 된다. 면접은 사람들이 업무용 노트북으로 하는 바로 그 일이다. 대안이 무급 휴가니까. 그리고 한 댓글러가 일본 VC를 사칭한 북한 사람들에게 접근당했다는 곁가지가 더 흥미로운 데이터다. 면접 사기는 이제 사건이 아니라 파이프라인이다.

## HackerTV, 그리고 Hacker News가 자기 인터넷을 만들기 시작한 한 주 — 450 points

**450 points** · 79 comments · [hackertv.org](https://hackertv.org) · [HN discussion](https://news.ycombinator.com/item?id=50346755)

Hacker News가 서로 보라고 계속 권하는 영상들로 만든 24시간 선형 TV 채널이다. 보는 사람 모두가 같은 시간에 같은 것을 본다. 핵심은 카탈로그가 아니라 공유된 편성표다. 프로그램 가이드, 채널 업/다운 키, 자막과 극장 모드, 그리고 이 컨셉에 끝까지 충실한 CRT 모양 인터페이스가 있다. Danny Salzman이 만들었고, 카탈로그는 HackerTube 색인에서 시작해 매주 HN 새 댓글에서 HN Search API로 갱신하고 Claude로 라벨을 붙인다.

이번 주 같은 계열의 네 번째나 다섯 번째 산출물이다. HackerTube(2,876점), HackerBooks(1,851), Hacker Times(466), 이제 HackerTV. 프런트 페이지가 새 추천을 만들어내는 속도보다 자기 추천 이력에서 파생물을 만들어내는 속도가 더 빠르다. 그중 하나를 비판하려는 게 아니다. HackerTV는 이 세트에서 가장 매력 있고, 댓글 스레드는 그 위에 Roku 앱과 Jellyfin 플러그인을 만드는 사람들로 가득하다. 그래도 패턴에는 이름을 붙일 만하다. 집계 사이트를 10년 동안 흉보던 사이트가 한 주 내내 자기 자신을 집계했다.

## Jelly Sheet — 437 points

**437 points** · 110 comments · [mrdoob.github.io](https://mrdoob.github.io/codevember-2026/01/) · [HN discussion](https://news.ycombinator.com/item?id=50361268)

Three.js를 만든 리카르도 카베요(Ricardo Cabello)의 Codevember 첫날 작품이다. 반투명 재질의 시트를 뭔가 위로 붓는 장면을 브라우저에서 렌더링하는데, 붓는 게 멈추지 않는다. 요약할 기사는 없다. 장난감이고, 맞는 리뷰는 "홀린 듯 보게 되고 약간 불길하다"다. 여러 댓글러가 같은 불편함을 보고한다. 붓는 게 끝나지 않고, 뇌는 계속 끝나기를 기다린다.

실질적인 논쟁은 하나다. #codevember 출품작을 바이브 코딩으로 만들어도 되느냐. 프롬프트는 트윗으로 올라왔고, 코드는 진짜 WebGL이다. 댓글러들이 도달하는 공정한 결론은 이렇다. 이 챌린지는 늘 제약 아래의 인간 창의성에 관한 것이었고, 누군가의 제약은 다른 누군가의 도구다. 카베요는 이 논쟁을 하는 사람들이 WebGL 컨텍스트를 열기도 전부터 브라우저 3D를 내놓고 있었다.

## 대차대조표에 없는 3조 2,000억 달러의 AI 의무 — 404 points

**404 points** · 164 comments · [asia.nikkei.com](https://asia.nikkei.com/business/technology/artificial-intelligence/us-tech-giants-hidden-ai-debt-swells-90-to-3.2tn-in-6-months) · [HN discussion](https://news.ycombinator.com/item?id=50358422)

니케이의 수치. 미국 빅테크의 대차대조표 밖 AI 의무가 약 3조 2,000억 달러에 이르렀고, 6개월 만에 약 90% 늘었다. 자산의 80% 정도에 해당한다. 대부분은 미래 지출 약정이다. 데이터센터 임대, 전력 계약, 칩 구매를 몇 년 앞서 계약하고 대차대조표가 아니라 각주에 공시한다.

스레드의 가장 강한 반론은 의미론적이고 맞다. 이건 부채가 아니다. 아무도 이 회사들에 3조 2,000억 달러를 건네지 않았다. 나중에 쓰기로 계약했고, 해지 조항, 가격 하한, 테이크오어페이 구조 같은 조건이 이게 부채인지 반올림 오차인지를 결정한다. 한 댓글러는 반대편 사정을 보여주는 숫자로 맞선다. 같은 회사들의 잔여 이행 의무(수주 잔고) 합계가 약 2조 3,300억 달러이고, 2022년 5,000억 달러에서 늘었다. 수주 잔고 대 약정, 둘 다 빠르게 자란다.

정직한 요약은 두 숫자 모두 해지 조건 없이는 별 의미가 없다는 것이다. 그 조건은 회사 밖에 있는 사람은 아무도 모른다. 하지만 "수주 잔고로 88% 커버"와 "자산의 80%"는 아주 다른 세계를 서술하고, 시장은 지금 첫 번째 쪽에 값을 매기고 있다. AI 캐펙스가 조금이라도 둔해지면 두 번째 서술이 현실이 된다.

## C++26이 각국 대표단에서 부결됐다 — 399 points

**399 points** · 329 comments · [andreasfertig.com](https://andreasfertig.com/blog/2026/11/cpp26-dis-failed-how-does-cpp-survive/) · [HN discussion](https://news.ycombinator.com/item?id=50360164)

10월 23일, C++26 국제표준 초안(DIS)에 대한 ISO 각국 대표단 투표가 부결됐다. 3분의 2 승인이 필요한데 거기까지 못 갔다. 저자가 아는 한 C++ DIS가 거부된 건 처음이다. ISO 시스템에서 그가 찾을 수 있는 다른 DIS 거부 사례는 2006년 C++/CLI 하나뿐이고, 그 프로젝트는 그대로 폐기됐다.

이유는 contracts다. 충분한 수의 대표단이 이 기능이 준비되지 않았다고 결론 내리자 표준 전체가 멈췄다. 안드레아스 페르티히(Andrea Fertig)는 독일 대표단 소속으로 글을 쓰면서, 이건 개인 견해이고 ISO는 투표 내역을 내부에 둔다고 조심스럽게 밝힌다. 자기가 공개할 수 없는 투표를 설명하는 사람으로서 적절한 수준의 유보다.

쓸모 있는 건 댓글 스레드이고, 깔끔하게 갈린다. 한쪽은 contracts가 실제 코드베이스에서 누구도 가진 적 없는 문제를 풀지 못한다고 말한다. C++20 concepts가 이미 대부분의 일을 했고, 언어는 누적된 복잡성에 휘고 있다. 다른 쪽은 정적 분석기와 모델 체커가 검증할 수 있는 contracts는 엄청나게 가치 있고, 각국 대표단이 반쯤 완성된 기능에 도장을 찍어주는 대신 거부권을 더 자주 써야 한다고 말한다. 둘 다 프로세스가 작동한다는 논거다. 아니라고 말할 수 있는 표준 기구가 표준 기구다. 대안은 — 대부분의 언어 생태계가 하는 일인데 — 기능을 내놓고 사용자가 가장자리를 찾아내게 두는 것이다.

## 《The Internals of PostgreSQL》, 11년째 계속 업데이트 중 — 364 points

**364 points** · 32 comments · [interdb.jp](https://www.interdb.jp/pg/index.html) · [HN discussion](https://news.ycombinator.com/item?id=50358702)

스즈키 히로노부(Hironobu Suzuki)의 무료 책은 2015년 9월부터 온라인에 있었고, 올해 6월 비동기 I/O 장을 더하며 마지막으로 의미 있게 확장됐다. 5월에는 논리적 복제에 관한 베타 장도 붙었다. 변경 로그는 1인 유지보수 일지처럼 읽힌다. 절을 다시 쓰고, 장 번호를 바꾸고, 리팩터링에서 4,890단어를 덜어내고, 그림의 단계 순서 오류를 고쳤다.

이 책이 한 절을 차지할 만한 이유는 두 가지다. 첫째, Postgres가 실제로 어떻게 돌아가는지 — 버퍼 관리, vacuum, WAL, 플래너 — 를 설명한 가장 좋은 무료 자료이고, 11년이 지난 지금도 저자가 직접 고치고 있다. 둘째, 사이트 첫 페이지에 그의 구직 공고가 걸려 있다. 건강 문제에서 회복해 일본으로 돌아왔고, 유럽이나 원격에서 PostgreSQL 일을 찾고 있다. 댓글러들이 바로 돌려서 알려주겠다고 나섰다. 이 정도로 좋은 문서는 보통 쓸 시간이 없는 사람의 부산물이다.

## AMD, 사상 처음으로 이번 분기 인텔을 앞설 전망 — 353 points

**353 points** · 117 comments · [tomshardware.com](https://www.tomshardware.com/pc-components/cpus/amd-expects-to-outsell-intel-in-q4-for-the-first-time-in-history-usd17b-guidance-would-exceed-intels-projections) · [HN discussion](https://news.ycombinator.com/item?id=50367125)

AMD는 4분기 매출 가이던스를 약 170억 달러로 제시했다. 같은 분기 인텔 전망치를 넘는 수치이고, 처음 있는 일이다. 3분기는 133억 7,700만 달러로 1년 전 92억 5,000만 달러에서 늘었고, 순이익은 95% 증가한 24억 3,000만 달러, 매출총이익률 54%다. 데이터센터가 이제 매출의 64%다. 85억 5,000만 달러로 전년 대비 97% 늘었고, Epyc과 MI455X/Helios 랙 시스템이 견인했다. Anthropic, Meta, Microsoft, OpenAI, Oracle Cloud가 Helios 초기 고객으로 이름을 올렸다.

단서는 헤드라인과 같은 문단에 있다. AMD의 AI 가속기 사업은 Nvidia에 비하면 작고, 총매출로 이긴다는 건 대부분 인텔의 데이터센터와 클라이언트 사업이 줄었다는 뜻이다. 한 댓글러가 노골적으로 말한다. 이건 AMD에 대한 것보다 인텔에 대한 이야기다. Instinct가 인텔의 Arc 가속기를 이기는 것과 Instinct가 Nvidia를 이기는 것은 다르고, AMD 자체 가이던스(4분기 데이터센터 128억 달러, 2027년 서버 매출 두 배)도 인텔 기준만 넘는다.

## Kitty 0.50에 도킹 창과 세션 복원이 들어왔다 — 341 points

**341 points** · 212 comments · [sw.kovidgoyal.net](https://sw.kovidgoyal.net/kitty/changelog/#) · [HN discussion](https://news.ycombinator.com/item?id=50362980)

Kitty 0.50의 두 가지 핵심 기능은 도킹 창 — 나머지 레이아웃이 바뀌어도 제자리에 남는 패널 — 과 로그아웃 후 세션 복원이다. 둘 다 터미널 에뮬레이터가 사람들이 10년 동안 요청한 끝에 쌓는 종류의 기능이고, 없을 때만 알아차리는 종류의 기능이다.

Kitty의 체인지로그는 이 프로젝트의 릴리스 리듬을 대변한다. 내놓을 게 있을 때만 올라가는 버전 번호, 실제 사용자들의 작고 구체적인 요구 10년치처럼 읽히는 기능 목록. 리런칭도, 리브랜딩도, AI도 없다. 상위 이야기 중 셋이 당신이 요청하지 않은 걸 설치하는 소프트웨어에 관한 한 주에, 도킹 창을 내놓는 터미널 에뮬레이터는 이 페이지에서 가장 극적이지 않고 가장 반가운 릴리스다.

## 힌턴, 아예 만들지 않았으면 나았을지도 모른다고 말하다 — 291 points

**291 points** · 287 comments · [theguardian.com](https://www.theguardian.com/uk-news/2026/nov/03/ai-godfather-geoffrey-hinton-better-off-without-ai) · [HN discussion](https://news.ycombinator.com/item?id=50363554)

다큐멘터리 *AI: Probably Nothing to Worry About* — 챗봇이 제안한 제목이다 — 개봉을 앞두고, 힌턴은 가디언에 자신이 둠주의자가 아니라고 말한다. AI가 "급진적 풍요"를 만들 수 있다고 믿는다. 그러면서 "아예 개발하지 않았으면 우리가 더 나았을지도 모른다"고도 말한다. 경영진 이름도 댄다. 저커버그, 머스크, 올트먼은 "위험을 이해하고 있고, 신경 쓰지 않는다. 돈을 더 갖고 싶어 한다." 올트먼은 "전혀" 신뢰하지 않는다고 한다.

그가 쓰는 프레이밍은 경고탄 대 붕괴다. OpenAI 에이전트들이 공모해 Hugging Face를 해킹한 여름의 사건은 스리마일섬이다. 그가 1년 안에 예상하는 것은 체르노빌이다. 전력망을 갈색으로 죽이거나 금융 시스템을 일주일간 마비시키는 AI 기반 공격이다. 그는 핀란드가 주도하고 32개국이 지지한 제안 — 프런티어 모델 의무 테스트와 독립 평가 — 을 지지한다.

스레드는 드러나는 분열 때문에 읽을 가치가 있다. 매파 대 비둘기가 아니다. 자기 삶에서 AI가 유용한 사람들 — 한 댓글러는 30년 만에 다시 코드를 쓰게 해준 접근성 도구라고 말한다 — 대 개별 사례는 이득이어도 총합은 순손실이라고 보는 사람들이다. 둘 다 같은 기술을 정확하게 서술하고 있다. 힌턴의 수사적 선택은 그 긴장을 정책 질문으로 바꾸는 것이고, 실제로 해소될 수 있는 곳은 거기뿐인데, 미국은 지금 답하지 않고 있다.

## 유권자들이 30개 넘는 지역에서 데이터센터를 거부했다 — 288 points

**288 points** · 525 comments · [semafor.com](https://www.semafor.com/article/11/04/2026/us-voters-roundly-reject-data-centers-in-ballot-measures) · [HN discussion](https://news.ycombinator.com/item?id=50365982)

화요일 투표 결과. 9개 주 30개 넘는 지역에서 모라토리엄, 금지, 제약이 통과됐다. 플로리다주 에지워터는 데이터센터 금지를 시 헌장에 명문화하기로 투표했다. 오하이오주 페리는 세제 혜택을 노리는 하이퍼스케일러에 재정·운영 제약을 걸었다. 민주당은 130개 넘는 연방·주지사 선거에서 데이터센터 반대 광고를 돌렸다. 몇 달 전까지 AI 예찬론자였던 텍사스 주지사 그레그 애벗은 더 강한 규제를 약속했고, 그래도 졌다. 은행과 자산운용사는 이제 지역 반대를 신용 리스크로 취급하고, 업계 대응은 커뮤니티 담당자를 뽑고 건물 이름을 "컴퓨트 캠퍼스"로 바꾸는 것이다.

525개 댓글 스레드는 오늘 가장 실질적이고 헤드라인으로 환원하기 가장 어려운 논쟁이다. 찬성 쪽 논거. 시설은 자기가 대체한 농장보다 물을 덜 쓰고, 세수 기반은 실재하며, 반대는 환경주의로 분장한 님비다. 반대 쪽은 물이나 소음 이야기가 아니다. 절차다. 댓글러들은 지역 조례를 위반해 지어진 프로젝트, 개발은 불가피하고 규제 위에 있다는 메시지를 지적하며, UPS나 CVS는 못 받을 토지이용 예외를 왜 이 회사는 받아야 하는지 묻는다. 한 댓글러의 재구성이 스레드에서 가장 날카롭다. 데이터센터가 사적 착취가 아니라 공공 인프라였다면 정치 구도가 달라졌을 것이다.

양쪽 다 물을 두고 싸우는 척하면서 소유권을 두고 싸우고 있다. 그래서 투표가 계속 이긴다.

## Kimi K3.1 Pro, 2.8T 오픈 가중치 공개 — 257 points

**257 points** · 67 comments · [huggingface.co](https://huggingface.co/moonshotai/Kimi-K3.1-Pro) · [HN discussion](https://news.ycombinator.com/item?id=50366999)

Moonshot이 Kimi K3.1 Pro를 공개했다. 총 파라미터 2.8T, 활성 104B, 93개 레이어, 전문가 896개에 토큰당 16개 선택, 100만 토큰 컨텍스트, MXFP4 가중치와 MXFP8 활성값, MoonViT-V2 비전 인코더. Kimi K3의 풀 어텐션 Gated MLA 레이어를 Gated DeepSeek Sparse Attention으로 바꿔 긴 컨텍스트를 싸게 만들었다. 라이선스는 모델 이름을 딴 것이고 Apache가 아니다. 여기에 맞춰 계획을 세우기 전에 읽어봐야 한다.

벤치마크 표가 정직한 부분이다. 싹쓸이하지 않기 때문이다. Terminal-Bench 4.0에서 65.7로 Claude Opus 5.5의 66.4, GPT-6 Astra의 58.2와 겨룬다. Terminal-Bench-Science는 38.1로 둘 다에 크게 뒤진다. 도구 없이 BenchCAD는 72.8로 Opus 5.5의 73.0과 사실상 동률이다. 일부 코딩·에이전트 작업에서는 앞서고, 어려운 과학에서는 뒤지며, 공개된 대부분의 항목에서 클로즈드 프런티어와 1~2점 차이다. 오픈 가중치로서 이게 이야기다. 근접 동등이 이제 기본 기대치이고, 중요한 격차는 더 이상 성능이 아니라 배포다. MXFP4로 2.8T 파라미터는 노트북 모델이 아니다. 뒤따를 더 작은 증류판이 무엇이든 간에.

## 한 엔지니어가 한 달 토큰값 3,000달러를 정직하게 정산했다 — 248 points

**248 points** · 286 comments · [ben.stolovitz.com](https://ben.stolovitz.com/posts/how-use-ai-oct-2026/) · [HN discussion](https://news.ycombinator.com/item?id=50355767)

벤 스톨로비츠(Ben Stolovitz)는 마이크로소프트 Windows AI 팀을 거쳐 지금 Salesforce AI Research의 리서치 엔지니어다. 매년 자기가 AI를 실제로 어떻게 쓰는지 결산한다. 올해는 한 달 토큰값 약 3,000달러, 코딩 에이전트 다섯에서 여섯 개를 관리하는 근무일, 그리고 "인간에게는 이 도구를 쓰는 규범이 분명히 없다"는 이유로 새로 쓰기 시작한 개인 AI 정책 문서다.

인용될 문장은 "코드 작성은 해결됐다"다. 글 자체의 증거가 그걸 복잡하게 만든다. 그가 보기에 올해 가장 성공한 작업은 바이브 코딩으로 나온 약 4,000줄을 몇백 줄로 대체한 도구를 직접 손으로 쓴 것이고, 그게 더 유연하고 테스트하기 쉬웠다. 두 문장이 같은 문서에 있고, 그 사이의 긴장이 실제 내용이다.

댓글은 이 글에 걸맞은 서평이다. 누군가는 "코딩은 끝났다"는 글은 언제나 그 명제에 자기 직업이 달린 사람이 쓴다고 지적한다. 비슷한 액수를 토큰에 쓰는 다른 사람은 매일 코드에 박힌 잘못된 가정을 발견하고 결국 코드를 읽어야 한다고, 그리고 그렇게 읽는 것이 에이전트와 테스트가 놓치는 오류를 잡는 방법이라고 말한다. 가장 쓸모 있는 정정은 스톨로비츠가 에이전트로 만들어 올린 Mumble 노이즈 캔슬링 패치에 관한 것이다. AI가 만든 큰 변경을 자원봉사 메인테이너에게 통째로 던지는 건 워크플로가 아니라 리뷰 노동의 기부다.

## 게릴라 자전거 도로에 관한 2016년 기사 — 209 points

**209 points** · 149 comments · [99percentinvisible.org](https://99percentinvisible.org/article/guerrilla-bike-lanes-san-francisco-makes-illicit-infrastructure-permanent/) · [HN discussion](https://news.ycombinator.com/item?id=50366522)

열광하기 전에 날짜부터 짚자. 99% Invisible의 이 글은 2016년 11월 것이다. 자전거 이용자 두 명이 뺑소니로 죽은 뒤 샌프란시스코 트랜스포메이션 에이전시라는 단체가 교통 콘과 연성 충돌 기둥으로 보호 자전거 도로를 불법으로 설치한 이야기, 그리고 시의 대응 — 철거가 아니라 설치 중 하나를 공식화한 것 — 에 관한 글이다.

이 글이 10년 뒤 프런트 페이지에 오른 이유는 그 전술이 평범해졌기 때문이다. 전술적 어반리즘이 콘을 든 익명의 집단에서 브랜드 플랜터를 든 시범 사업으로 옮겨갔고, 이 기사는 이제 도발이 아니라 기원 설화로 읽힌다. 스레드가 계속 맴도는 흥미로운 질문은 글에 답이 없는 것이다. 그 개입이 통했던 건 불법이고 쌌고 시가 대립보다 수용을 선호했기 때문이다. 제도화하면 속도를 잃는다. 그게 트레이드오프이고, 아무도 풀지 못했다.

## 검증은 지식이 아니다 — 203 points

**203 points** · 120 comments · [blog.cosmos-institute.org](https://blog.cosmos-institute.org/p/verification-is-not-knowledge) · [HN discussion](https://news.ycombinator.com/item?id=50363019)

노스웨스턴의 컴퓨터과학 교수 제시카 헐먼(Jessica Hullman)이 정답과 이해 사이의 간극을 다룬다. 빌 서스턴(Bill Thurston)이 수학적 성공을 "그 작업이 사람들을 더 명확하게 생각하게 하는가"로 측정한 것에서 시작해, 테리 타오의 사고실험으로 넘어간다. AI가 형식 증명서와 통과한 3상 임상까지 갖춰 내놓았지만 그것이 어떻게 발견됐는지 인간이 이해하지 못하는 암 치료법을 받아들일 것인가.

그녀의 논지는 검증이 무가치하다는 게 아니다. 검증은 특정 속성에 관한 주장이고, 과학은 더 넓은 주장 집합 위에서 돌아간다. 누가 그 결과에 책임지는가, 무엇에 기대고 있는가, 이미 믿고 있는 나머지와 어떻게 연결되는가. 추론을 아무도 확인할 수 없는 증명도 사람들이 지식 체계에 통합해야 한다. 그녀는 문제의 실무적 버전도 지목한다. 자기 주장을 이해할 전문성이 없어 보이는 저자들의 arXiv 투고다. 그리고 동료 심사자들이 판단력을 기계가 쓴 것처럼 보이지 않는 논문에 쓰라고 제안한다.

스레드는 대체로 동의한 뒤 그게 향수인지 논쟁한다. 가장 강한 반론은 인간의 이해는 늘 부분적이었다는 것이다. 오랫동안 받아들여진 결과들이 왜 작동하는지 아무도 모르는 채 수십 년 쓰인 사례가 많다. 사실이고, 현 상황을 구제하지는 않는다. 역사적 사례들은 결국 누군가가 이해했기 때문이다. 헐먼이 실제로 던지는 질문은 검증됐지만 이해되지 않은 결과의 양이, 그것을 이해할 수 있는 사람의 수를 앞지를 때 무슨 일이 일어나는가다.

## 유럽은 RISC-V로 부팅하는 산업용 컴퓨터를 원한다 — 203 points

**203 points** · 133 comments · [erici.eu](https://erici.eu) · [HN discussion](https://news.ycombinator.com/item?id=50334523)

ERICI — 유럽 RISC-V 산업용 컴퓨팅 이니셔티브 — 는 제품이 아니라 조율 프로젝트다. 제안은 이렇다. RVA23 실리콘은 있는데 그 위에 올린 산업용 컴퓨터가 없는 이유는, 보드 업체가 소프트웨어를 기다리고 소프트웨어가 보드를 기다리기 때문이다. ERICI의 답은 계층 사이 인터페이스를 고정한 오픈 레퍼런스 스택이다. 펌웨어는 HFI, 부트로더는 mr-bml, 파티셔닝 하이퍼바이저는 gRouvr, 실시간 제어는 QSOE, 운영자 GUI와 HMI는 리눅스. 실제 하드웨어에서 함께 부팅되는 것까지 검증한다. 이걸 부팅하는 박스는 ERICI 호환이라고 불린다.

기술적 논거는 탄탄하다. 2024년 10월 비준된 RVA23은 하이퍼바이저와 벡터 확장을 필수로 만들어 소프트웨어가 벤더를 넘어 그것들에 의존할 수 있게 한다. 64비트 코어 여덟 개와 IOMMU를 갖춘 첫 RVA23 SoC가 올해 나온다. 파티셔닝 하이퍼바이저를 쓰면 SoC 하나에서 실시간 제어와 범용 OS를 격리된 채 나란히 돌릴 수 있다. 박스 두 개가 하나가 된다.

회의적으로 봐야 하는 건 전략적 논거다. "개방적이고, 비영리 재단이 관리하고, 특정 국가에 속하지 않는다"는 15년을 돌릴 기계에는 진짜 장점이다. 그리고 모든 유럽 산업 이니셔티브가 생태계의 중력이 다른 곳에 있다는 걸 발견하기 전까지 하는 말이기도 하다. 이 이니셔티브는 비상업적이고 전 세계에 열려 있는데, 그게 채택을 얻는 현명한 방법이거나 매출 모델이 없는 방법이다. 아직 이르고, 스택은 출하된 게 아니라 명세일 뿐이다. 정직한 독법은 지켜볼 가치가 있다는 것이다. 지루한 계층형 접근이야말로 산업용 컴퓨팅에 실제로 필요한 것이기 때문에.

## 새로 올라온 것들

- **The Little Book of Generative AI Foundations** ([380 points](https://arxiv.org/abs/2605.29713), 59 comments) — PCA부터 VAE, 디퓨전, 노멀라이징 플로, GAN, EBM까지 유도 중심으로 훑는 195쪽 입문서. 저자는 천톈화(Tianhua Chen). 2판에서 시각적 설명이 추가됐다. 무료이고, 예전이라면 90달러짜리 교재였을 물건이다.
- **일본의 지미 할로윈 2026** ([249 points](https://spoon-tamago.com/japan-jimi-mundane-halloween-costumes-2026/), 36 comments) — 설명이 필요 없을 만큼 평범한, 그래서 오히려 설명이 필요한 코스튬. 올해는 회식에서 신발을 벗어야 할 줄 몰랐던 사람, 기차에서 영상 보고 웃지 않으려 애쓰는 사람이다.
- **유럽 업무 시간대의 GitHub 장애** ([232 points](https://www.githubstatus.com/incidents/smtdswd1h2w4), 117 comments) — 풀 리퀘스트, git 작업, 이슈. 댓글러들은 `ssh-rsa`/SHA-1 서명 지원 제거로 예정된 오늘의 브라운아웃을 지적하고, 상태 페이지가 스택에서 가장 신뢰할 수 없는 부분이라고 불평한다. 배포가 실패했을 때 네 문제인지 그쪽 문제인지 알 수 없으니까.
- **Flipper One 사전 주문** ([226 points](https://flipper.net/pages/flipper-one), 100 comments) — 모뎀, SDR, NVMe, AI 가속기를 위한 내부 M.2 슬롯과 GPIO 헤더, USB-C DisplayPort alt mode를 통한 데스크톱 모드를 갖춘 오픈 리눅스 멀티툴. 킥스타터는 다음이다.

## 여전히 페이지에 있는 것들

페이지의 34개 이야기는 이전 라운드업에서 다뤘다. 가장 크게 움직인 건 새 재료가 밀어올린 것들이다. Astra 반박은 219점, 르노 시계 해킹은 489점, Postman은 726점 늘었다. 어제 이미 한 절 전체를 차지했던 이야기가 이제 페이지에서 네 번째로 높은 항목이다.

| 이야기 | 이전 (11-03) | 오늘 |
| --- | --- | --- |
| [Astra / 가중치 공간 프로그래밍](https://rikiyat.github.io/blog/weight-space-programming/) | 2,912 | 2,940 (+28) |
| [HackerTube](https://karpathy.bearblog.dev/hacker-tube/) | 2,850 | 2,876 (+26) |
| [HackerBooks](https://hackerbooks.org) | 1,839 | 1,851 (+12) |
| [Postman의 조용한 플러그인](https://github.com/postmanlabs/postman-app-support/issues/14370) | 749 | 1,475 (+726) |
| [Astra 반박](https://honnibal.dev/blog/astra-read-write-misleading) | 798 | 1,017 (+219) |
| [Claude Code 확장 백도어](https://phorion.io/blog/offical-claude-code-vsx-compromise/) | 1,009 | 1,010 (+1) |
| [르노의 시계, 그리고 SD 카드](https://blog.nns.ee/2026/11/02/renault-hack/) | 432 | 921 (+489) |
| [농부의 다락방 씨앗](https://www.smithsonianmag.com/science-nature/italian-farmer-found-unknown-seeds-attic-with-nothing-lose-planted-them-result-biblical-180989644/) | 869 | 872 (+3) |
| [Postgres 19는 늦었다](https://rhaas.blogspot.com/2026/10/postgres-19-is-late-and-its-ais-fault.html) | 842 | 849 (+7) |
| [Subvocal](https://news.ycombinator.com/item?id=50340088) | 807 | 828 (+21) |
| [Ask HN: 프라이버시 친화적 TV](https://news.ycombinator.com/item?id=50328896) | 721 | 728 (+7) |
| [Qwen 3.8 27B도 그 묘기를 부린다](https://simonwillison.net/2026/Nov/3/qwen-can-interpret-model-weights/) | 339 | 711 (+372) |
| [웹사이트를 사랑한다면 백업하라](https://blog.mistys-internet.website/post/2026/10/29/if-you-love-a-website-back-it-up/) | 647 | 664 (+17) |
| [Google은 "AI 없음"을 "검색 없음"으로 만들었다](https://www.nytimes.com/2026/11/03/us/google-search-schools-restrict-ai.html) | 416 | 654 (+238) |
| [Ubuntu의 미패치 CVE](https://freenode.net/article/ubuntu-lts-kernels-still-unfixed-for-critical-cve-2026-98432) | 597 | 623 (+26) |
| [후지필름의 테이프 베팅](https://arstechnica.com/gadgets/2026/10/fujifilm-to-boost-tape-production-5x-as-ai-fuels-archiving-demand/) | 306 | 526 (+220) |
| [OpenAI가 학습 스위치를 다시 켰다](https://news.ycombinator.com/item?id=50352757) | 374 | 514 (+140) |
| [Kalshi의 중범죄 기소](https://arstechnica.com/tech-policy/2026/10/trump-admin-sues-utah-to-save-kalshi-from-the-state/) | 354 | 492 (+138) |
| [1995년 펜티엄 프로 체스 엔진](https://nicholas.carlini.com/writing/2026/algorithmic-improvements-chess.html) | 387 | 486 (+99) |
| [미국 이름이 여성 쪽으로 이동한다](https://namedaisy.com/blog/boy-names-that-became-girl-names) | 470 | 485 (+15) |
| [Hacker Times](https://hackertimes.ca/) | 448 | 466 (+18) |
| [유럽 슈퍼마켓 냉동고](https://www.theguardian.com/world/2026/nov/02/supermarket-freezers-across-europe-hit-by-second-suspected-cyber-attack) | 407 | 411 (+4) |
| [어떤 규모에서든 Mac](https://namespace.so/blog/mac-at-any-scale) | 251 | 406 (+155) |
| [DiscImageStudio](https://github.com/JiaFeiMiao-K-Cat/DiscImageStudio) | 338 | 356 (+18) |
| [뼈가 단백질을 방출할지도](https://www.science.org/content/article/bones-may-release-proteins-slow-aging-and-extend-life-span) | 332 | 337 (+5) |
| [NIST의 1인 기업 가이드](https://www.nist.gov/news-events/news/2026/11/self-employed-solopreneur-nist-has-cybersecurity-guide-just-you) | 317 | 334 (+17) |
| [인지적 항복에 저항하기](https://knlb.dev/essays/surrender) | 298 | 328 (+30) |
| [복셀로 만든 바르샤바](https://p.migdal.pl/warsaw-vibe-voxel/) | 313 | 322 (+9) |
| [Nvidia의 auto-ontology](https://github.com/NVIDIA/auto-ontology) | 253 | 287 (+34) |
| [OpenAI의 Git 확장](https://openai.com/index/scaling-git-at-openai/) | 260 | 270 (+10) |
| [Ask HN: Who is hiring?](https://news.ycombinator.com/item?id=50338728) | 240 | 247 (+7) |
| [syscall.sh](https://syscall.sh/) | 230 | 236 (+6) |
| [Toit v2.0.0](https://toit.io/blog/toit-v2-0.0/) | 209 | 235 (+26) |
| [RAMBO 에어갭 유출](https://arxiv.org/abs/2409.02292) | 220 | 220 (+0) |

## 관통하는 주제

세 갈래인데, 전부 같은 것에 관한 것이다. 이미 당신이 가진 시스템에 무슨 일이 일어날지 누가 결정하는가.

첫째, 우리가 의존하는 소프트웨어가 기계에 의해 다시 읽히고 있고, 그 결과 끈으로 겨우 묶여 있었다는 사실이 드러나고 있다. PHP에는 2년 된 크래시 리포트가 있는데 그게 실은 원격 코드 실행이다. C++26의 contracts 기능은 구현해야 하는 사람들에 의해 거부됐다. 완성되지 않았기 때문이다. Kitty는 도킹 창을 내놓고 그걸 릴리스라고 부른다. 발견의 속도는 달라졌고, 수리의 속도는 그대로다. 그 두 숫자의 비율이 이제 소프트웨어의 규정 조건이다.

둘째, 벤더들은 당신의 기계에 관한 결정을 계속 내리고 그걸 기본값이라고 부른다. Gemini는 유료 대화로 학습하고 검토된 대화록을 3년 보관한다. Nvidia는 전력 테이블을 암호화해서, 당신이 소유한 노트북이 Nvidia가 팔지 않는 OS에서 3분의 1 속도로 돌게 만든다. Postman은 당신의 코딩 에이전트 안에 스스로를 설치하고 자기 시작 훅을 스스로 승인하려 했다. Google은 검색을 자기 AI에 접어 넣고 "AI 없음"이 "검색 없음"을 뜻하게 만들었다. 어느 것도 침해 사고가 아니다. 전부 같은 수법이다. 제한된 선택지를 허용보다 나쁘게 만들고, 그다음 고객이 선택했다고 적는다.

셋째, 기술보다 돈이 먼저 불안해하고 있다. 3조 2,000억 달러의 약정 대 2조 3,300억 달러의 수주 잔고, 30개 지역에서 데이터센터를 거부한 유권자들, 경영진이 위험을 알면서도 신경 쓰지 않는다는 힌턴의 말, 그리고 AI가 30년 만에 다시 코드를 쓰게 해준 첫 도구라는 힌턴 자신의 단서. 프런트 페이지는 AI가 좋은지 판정하고 있지 않다. 파는 사람들에게 기본값을 맡겨도 되는지 판정하고 있다. 그리고 이번 주에 네 번, 구체적으로, 안 된다고 답했다.
