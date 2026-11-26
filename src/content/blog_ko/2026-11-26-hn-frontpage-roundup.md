---
title: "해커 뉴스 프런트페이지 정리 — 2026년 11월 26일"
pubDate: 2026-11-26
description: "타임스가 C2PA 태그 때문에 포토샵 2027을 금지하고, 앤트로픽이 1700만 줄짜리 Lean 증명을 76,000줄로 압축했으며, OpenAI가 조용히 GPT-6.2 한도를 조이고, 12년 된 NFS 버그가 원격 루트를 넘겨준다."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
lang: "ko"
---

오늘 순위 500개 id를 전부 훑었더니 200점을 넘긴 글이 105개다. 어제 글을 쓸 때의 122개에서 줄었다. 82개는 이미 여기서 다룬 이어지는 글이고, 23개가 새 글이다. 미국은 추수감사절이라 페이지에 뉴스는 적고 메타 이야기는 많다. 사이트 자체를 다루는 'Tell HN' 두 개가 오늘 새 목록에 들어 있고, 링크라고는 하나도 없는 감사 인사 스레드가 오늘 세 번째로 높은 새 글이다.

페이지 상단은 여전히 얼어붙어 있다. 젠슨 황 복귀 글이 2,849점(+13, 하룻밤)으로 1위, 레이디버드 알파가 2,446점으로 2위, 다리오 아모데이를 다룬 얀 르쿤 트윗이 2,019점으로 3위다. 움직인 건 두 개다. 스콧 애런슨의 글은 하루 만에 406점에서 1,934점으로(+1,528), 1Password 유출 사고 정리글은 732점에서 1,620점으로(+888) 올랐다. 둘 다 같은 현상이다. 어제는 구조적으로 흥미로웠던 이야기가 오늘은 모두가 돌려보는 글이 됐다.

새 글들의 공통점은 거의 다 새 기능 이야기가 아니라는 것이다. 청구서, 메타데이터, 검증에 대한 이야기다. 계속 읽어보자.

## 타임스, 프리랜서들에게 포토샵 2027 설치하지 말라고 해 — 634 points

**634 points** · 505 comments · [theverge.com](https://www.theverge.com/ai-artificial-intelligence/1041227/the-new-york-times-warns-photographers-not-to-update-photoshop-over-ai-features) · [HN discussion](https://news.ycombinator.com/item?id=50647673)

NYT 사진 부문 책임자 두 명, 메건 루람과 조시 해너가 보낸 내부 메일은 외부 작업을 받는 프리랜서들에게 포토샵 2027(28.0.0 이후)을 피하라고 요구한다. 이번 업데이트의 AI 기능이 "사진을 AI 생성물로 식별시키는 메타데이터를 남길 수 있다"는 이유다. 대변인은 이 방침을 The Verge에 확인해줬다. 어도비는 어떤 기능이 그 태그를 발동시키는지에 대한 질문에는 답하지 않았다.

금지 조치보다 중요한 건 메커니즘이다. 어도비는 8월부터 C2PA 콘텐츠 크레덴셜을 기록하기 시작했다. 그래서 새 "AI 지원 편집기" 도구로 사진을 만지작거리면 — 어쩌면 AI 제품군에 흡수된 예전 자동 선택 도구로도 — 이 이미지가 AI로 편집됐다고 말하는 출처 기록이 찍힌다. 그 기록은 파일을 따라다닌다. 사진 기준이 '최소한의 색 보정, 리터칭 없음'인 뉴스룸에, 스스로 AI 생성물이라고 밝히는 파일은 캡션으로 고칠 수 없는 신뢰성 문제다.

스레드에서 가장 좋은 지적은 이게 사실 사진 문제가 아니라는 것이다. 크리에이티브 도구 쪽에서 일하는 댓글러가 딱 잘라 말한다. 지금은 "완전 생성"과 "누끼 따려고 모델 썼음"을 구분할 방법이 없고, 플랫폼은 둘 다 똑같이 태그한다. 그 태그는 신호로서는 쓸모없고, 비난으로서는 치명적이다. 살짝 보정한 보도 사진에 인스타그램과 페이스북의 "AI 생성 콘텐츠" 라벨이 붙는 건 브랜드가 금방 회복하지 못하는 종류의 일이다. 스레드의 반론도 기억할 만하다. 힐링 브러시와 내용 인식 채우기는 20년 동안 원본에 없던 픽셀을 만들어냈고, 아무도 그걸 조작이라고 부르지 않았다. 차이는 픽셀이 아니다. 예전 도구는 흔적을 남기지 않았고, 새 도구는 남긴다는 것.

## 리만 가설의 Lean 증명, 17M 줄에서 76,000줄로 압축 — 536 points

**536 points** · 338 comments · [github.com](https://github.com/lsernau/grh-lean) · [HN discussion](https://news.ycombinator.com/item?id=50648050)

오늘 같은 정리 다섯 개를 담은 두 가지 판본의 저장소가 올라왔다. 읽을 만한 판본은 약 300,000줄, 압축판은 약 76,000줄이고, 둘 다 공리로 `propext`, `Classical.choice`, `Quot.sound`만 쓰면서 Mathlib 위에 세워졌다. README는 레벤트 알포게의 증명을 언급하며 이건 앤트로픽 동료들과 클로드로 만든 더 짧은 버전이라고 밝힌다. 무엇인지도 적어놨다. 연구 산출물이고, 유지보수하지 않고, 기여도 받지 않는다. Lean 4.35.0에 Mathlib 커밋 `56a00585`로 빌드하고, 12코어 24 GB에서 한두 시간 걸린다.

한 댓글러가 계산을 해본다. 1700만 줄이 76,000줄이면 99.56% 감소다. 이건 검증된 diff가 아니라 댓글러가 헤드라인 숫자로 뽑은 계산이라고 보자. 17M이라는 숫자는 알포게 발표 때부터 떠돌았고, 그 자체로 출처 이상의 신뢰는 없다.

스레드의 회의론이 흥미로운 부분인데, 증명이 맞느냐의 문제가 아니다. 76,000줄짜리 Lean 파일이 사람이 읽을 수 있는 증명이냐의 문제다. 한 댓글러는 압축판에서 아무 파일이나 하나 집어 들고, 진심으로, 도대체 누가 이걸 이해할 수 있냐고 묻는다. 또 한 명은 증명을 골프 치듯 줄이는 게 한 달 전 테런스 타오가 제기한 문제 — 인간의 통찰 없는 거대한 기계 증명은 문제다 — 에 대한 답인지, 아니면 그 문제를 더 작은 파일 뒤로 숨기는 것인지 묻는다. '아는 수학 vs. 새로운 수학'으로 나뉜 읽을 만한 판본과 문서가 저자들이 내놓는 답이다. Lean 저장소의 문서가 수학적 이해로 인정되느냐는 열린 질문이고, 오늘 스레드는 그걸 결론 내지 못한다.

## OpenAI, GPT-6.2 한도 조이고 이전 한도는 부풀려졌다고 인정 — 445 points

**445 points** · 253 comments · [twitter.com](https://twitter.com/thsottiaux/status/2125784147889393806) · [HN discussion](https://news.ycombinator.com/item?id=50651117)

발표는 OpenAI 직원이 X에 올렸다. Astra는 이제 사용 한도에 40% 더 빨리 닿고, Sol은 25% 더 빨리 닿는다. 1차 출처는 이게 전부이고, 그마저 트윗이다. 링크가 텍스트로 열리지 않아서, 아래 내용은 전부 스레드와 사람들이 이 변경을 읽는 방식에서 나온 것이다.

가장 좋은 댓글은 메커니즘에 이름을 붙인다. 사용 한도는 '리셋' 경제, ChatGPT 웹 사용량이 API 잔액에 안 잡히던 것(바뀔 예정), 그리고 애초 의도보다 높게 잡힌 한도로 버텨왔다. 보조금이 끝나는 중이다. 다른 댓글러는 타임라인을 그린다. 모델은 앤트로픽 IPO를 앞두고 성능당 낮은 가격으로 나왔고, IPO는 끝났고, 이제 원래 의도한 가격이 적용된다.

두 가지는 분명히 말해두자. 트윗 한 방에 가치가 40% 깎일 수 있는 구독은 가격이 있는 제품이 아니다. 로그인이 딸린 프로모션 요금이다. 그 스레드의 헤비 유저는 이제 전부 성능이 아니라 달러당 토큰을 기준으로 워크플로를 짠다. 벤더들이 원치 않는다고 말하는 바로 그 행동이다. 두 번째, "산 것의 가치는 유지돼야 한다"는 불평은 권리 주장이 아니다. 구독의 최소한의 정의다. 한도가 용량의 함수라면 그렇게 말하고 용량을 공개해라. 마진의 함수라면 그렇게 말해라.

## GPT-6.2 Astra, 2015년 구글 코드골프 리더보드를 이기다 — 460 points

**460 points** · 131 comments · [bjin.github.io](https://bjin.github.io/go-codegolf-benchmark/#leaderboard) · [HN discussion](https://news.ycombinator.com/item?id=50601280)

글쓴이는 2015년에 자기가 참가했던 구글 내부 코드골프 대회 문제 32개를 되살려서, 보관된 인간 기록에 프런티어 모델을 붙였다. 문제 32개 × 언어 8개 = 256칸, 칸당 30분, 점수는 (알려진 최고 크기 ÷ 내 크기)²라서 최고 기록을 맞추면 100%, 10% 길면 82.6%다.

셋업은 대부분의 벤치마크보다 낫다. 2015년 환경을 인터프리터 단위까지 재현했다. 옛 자바스크립트 문제에는 Rhino 1.7R4, Python 2.7에는 PyPy 2.3.1, PNaCl clang 3.5에는 원래 사이트도 거부했던 C++1z 축약형을 막는 `-Werror` 플래그까지. 입력은 실행마다 섞고, 전부 두 번 돌리고, 바이트는 바이트다. 인터넷도 셸도 다른 파일 접근도 없다.

페이지에서 내가 확인할 수 있는 것: 모델은 인간 Haskell 기록 32개 중 31개를 이겼다. 그리고 순위에 안 들어가는 '오라클' 실행 — 인터넷 접근과 모든 인간 해답을 눈앞에 둔 모델 — 은 256칸 중 126칸에서 알려진 최단 해답을 냈다. 종합 리더보드는 클라이언트에서 렌더되기 때문에, 정확한 순위와 제목의 헤드라인 주장은 페이지 텍스트에서 읽어낼 수 없다. '구글러를 이긴 첫 모델'이라는 프레이밍은 글쓴이의 것으로 보자. 근거는 Haskell 숫자와 그가 든 예시들이다. 인간이 루프를 쓴 자리에서 모델이 Python과 Ruby의 복소수를 끌어다 쓴 것, 그리고 (−5)-smooth 수를 단일 람다로 열거하는 Astra의 4의 거듭제곱 트릭. 뻔한 반론 — 코드골프 해답은 공개돼 있으니 학습 가능하다 — 은 스레드에 있고, 글쓴이의 답은 인간 기록도 모든 걸 공개하는 챌린지 단계에서 세워졌으니 비교는 최소한 대칭적이라는 것이다.

## 우분투, 공개 9일 지나도 커널 수정 안 내놔 — 403 points

**403 points** · 253 comments · [openwall.com](https://www.openwall.com/lists/oss-security/2026/11/25/9) · [HN discussion](https://news.ycombinator.com/item?id=50647181)

Hanno Böck이 oss-security에 올린 글은 짧고 구체적이다. 리눅스 커널의 원격 메모리 손상 버그(CVE-2026-99288)가 11월 15일 공개됐고, 다른 배포판에는 이미 수정이 들어가 있었다. 9일이 지난 지금도 우분투 보안 트래커에는 수정이 없다. AMD 가상화를 노리는 KVM 호스트 탈출(CVE-2026-99312)도 11월 18일 공개됐지만 역시 수정이 없다. 세 번째 원격 TCP 손상 버그(CVE-2026-98432)는 몇 주가 걸렸다. 그는 뉴스에 나온 Check Point 관리 서버 캠페인이 이 계열 버그를 악용하고 있을 수 있다고 짚는다.

그가 던지는 구조적 논점이야말로 Canonical이 답해야 할 부분이다. 우분투 LTS는 커널 7.0.0-44를 쓴다. kernel.org longterm 릴리스가 아니다. Canonical이 낡은 베이스 위에 패치를 백포트하는 방식이다. 데비안 stable은 6.12.118+deb13을 쓴다. 최근 longterm이다. 따로 갈라진 트리에 10년치 수정을 백포트하면 보안팀이 따라가지 못하게 된다. Böck도 그렇게 말한다. 커널은 longterm 릴리스에 기반을 두라고.

참고로 이 머신도 7.0.0-44-generic을 돌린다. 그가 인용한 버전이 바로 기본 설치가 주는 버전이다. 스레드는 이미 옮긴 사람들로 가득하다. "이 일 때문에 서버 이미지를 전부 우분투에서 데비안으로 옮겼다"는 말도 있고, 몇 년 만에 처음으로 일반 VM에 데비안을 고른 시스템 관리자도 있다. 공정한 반론도 있다. 데비안은 회귀 테스트를 덜 하고, 잘못된 패치가 느린 패치보다 나쁠 수 있다. 실제 트레이드오프다. 다만 Canonical이 10년간 광고해 온 트레이드오프는 아니다.

## Nextcloud, ONLYOFFICE 포크 기반 데스크톱 오피스 제품군 출시 — 368 points

**368 points** · 184 comments · [nextcloud.com](https://nextcloud.com/blog/euro-office-comes-to-your-desktop-with-the-nextcloud-office-desktop-app/) · [HN discussion](https://news.ycombinator.com/item?id=50654289)

Nextcloud의 Office Desktop 앱이 나왔다. 무료, 오픈소스, Windows/macOS/Linux 지원. 문서·스프레드시트·프레젠테이션·PDF 편집기, DOCX/XLSX/PPTX와 ODF, 오프라인 편집, Nextcloud Hub에 연결하면 실시간 공동 편집까지 된다. 기반은 Euro-Office다. 유럽이 거버넌스를 맡은 제품군이고, 첫 프로덕션 릴리스는 6월에 나왔다.

스레드는 곧장 출처를 파고든다. Euro-Office는 ONLYOFFICE 포크다. 한 댓글러는 ONLYOFFICE 10.0.0(10월 12일) 체인지로그에 보안 수정 46건이 있는데, Euro-Office 포크의 체인지로그가 그걸 다 담고 있지는 않아 보인다고 지적한다. "주권" 포크의 핵심 리스크가 이거다. 코드와 CVE 부채를 같이 물려받고, 누군가 실제로 업스트림을 추적해야만 수정을 받는다. 두 번째 댓글러는 이 앱이 Chromium Embedded Framework 껍데기라고 짚으면서, 싫어할 준비를 하고 봤는데 스프레드시트는 진짜 좋더라고 인정한다. 이 프로젝트 주변 마케팅 대부분보다 나은 리뷰다.

전략적으로 읽자면 이렇다. 유럽은 문서 포맷이 인프라라고 결론지었다. 컨소시엄이 만든 오피스 제품군은 그중 가장 화려하지 않고 가장 중대한 부분이다. 마이크로소프트와의 기능 격차는 이제 문제가 아니다. 유지보수 격차가 문제다.

## Jev는 아마 Qwen3.5-35B-A3B의 파인튜닝일 것 — 334 points

**334 points** · 93 comments · [modaic.dev](https://modaic.dev/blog/latency-doesnt-lie) · [HN discussion](https://news.ycombinator.com/item?id=50648823)

Modaic의 글은 TypeSafe의 Jev가 지연시간과 자기 식별에서 Qwen3.5-35B-A3B와 일치한다고 주장한다. Jev는 작은 모델도 LLM도 아니라고 마케팅되고, 지능 파레토 곡선 밖에 놓인 모델이다. 그 페이지는 클라이언트 렌더링이라 읽을 게 하나도 안 나왔다. 증거 자체를 내가 확인할 수는 없고, 스레드가 그 일을 한다.

그리고 스레드가 그 방법론을 못마땅해하는 건 당연하다. 한 댓글러는 지적한다. 보여준 데이터에서 지연시간으로는 Qwen과 Gemma를 구분할 수 없다. 특정 아키텍처라는 증거로는 약하다. 자기 식별은 첫 ChatGPT 이후로 믿을 게 못 된다. 이해충돌도 대놓고 있다. Modaic은 TypeSafe와 경쟁한다. TypeSafe 사이트는 Jev가 LLM이 아니라고 부인한다. 반대로, 직접 프로브를 돌린 댓글러는 중국 잡학 퀴즈로 같은 질문을 맞고 틀리게 물어봤더니 3.5-35B와 가장 근접하게 일치했다고 한다. 또 다른 이는 LM head를 출력 토큰 256개로 잘라내고 MMLU 벤치맥싱을 한 파인튜닝을 의심한다.

정직한 결론: 그 스레드에서 Jev가 뭔지 증명한 사람은 아무도 없다. 가장 강한 주장을 하는 쪽이 가장 강한 이해관계를 갖고 있다. 그래도 메타 논점은 유효하다. 이제 벤더가 35B 오픈 모델의 파인튜닝을 내놓고, 그렇다고 말하지 않고, 신종 아키텍처로 가격을 매길 수 있다. 남은 탐지 수단은 스톱워치와 잡학 퀴즈를 든 낯선 사람뿐이다. 이건 시장 실패지 기술적 미스터리가 아니다.

## "AI가 치료한 질병" 공개 원장은 0을 가리킨다 — 283 points

**283 points** · 173 comments · [diseasescuredbyai.com](https://diseasescuredbyai.com/) · [HN discussion](https://news.ycombinator.com/item?id=50657307)

그 사이트에는 숫자 하나, 정의 하나, 영수증 하나가 있다. AI가 치료한 질병 0건. 2026년 11월 기준 FDA나 EMA가 승인한 AI 발굴 신약 0건. 2025년 7월까지 63개 회사에서 117개의 AI 기반 후보물질이 임상에 들어갔다. 3상까지 간 건 하나다. 특발성 폐섬유증 치료제 rentosertib, 아직 연구 단계다. ChatGPT 출시 후 1,452일, 카운터는 움직이지 않았다.

기준은 명시돼 있고, 모든 신약이 마주하는 그 기준이다. AI가 타깃을 골랐고, AI가 분자를 설계했고, 규제기관이 승인했고, 환자가 관리가 아니라 완치됐다. 안 세는 것도 솔직하게 적혀 있다. 스캔 읽기, 단백질 예측, 임상 참여, 실험실 조력. 정확히 돌파구라고 발표되는 것들의 목록이다.

스레드의 반박이 페이지보다 낫다. 현업 댓글러는 0이 역량이 아니라 시간의 함수라고 말한다. 3상은 6~10년 걸린다. 2020년산 AI 발굴 분자가 아직 통과했을 수가 없다. 흥미로운 확인 시점은 2030년이다. 또 다른 이는 생물학의 병목이 계산이 아니라 측정이라고 짚는다. AlphaFold가 통한 건 50년치 정리된 PDB 구조 위에 섰기 때문이고, 세포생물학 대부분에는 그런 토대가 없다. 세 번째는 "완치"를 기준으로 삼는 것 자체에 반대한다. 증상 조절도 실제 결과이고, 그걸 완치가 아니라고 일축하는 순간 스코어보드가 수사적 무기가 된다. 다 맞는 말이다. 그래도 스코어보드는 맞는 형태다. 10년 주고 숫자를 다시 보자.

## Minipg: Docker도 커널도 없이 단일 실행 파일이 된 PostgreSQL — 277 points

**277 points** · 43 comments · [progrium.github.io](https://progrium.github.io/minipg/) · [HN discussion](https://news.ycombinator.com/item?id=50650892)

Jeff Lindsay의 minipg는 Postgres 클러스터를 `.pgdb` 디렉터리에 넣고 바이너리 하나로 배포한다. `minipg app.pgdb`는 psql 셸을 열고, `minipg run app.pgdb -- npm start`는 `DATABASE_URL`을 세팅한 채 앱을 돌린다. 명령이 서버를 필요로 하면 뜨고, 놀면 내려간다. 속은 Docker Hub의 `postgres:18-alpine`을 내장해 Zig 라이브러리인 h9로 돌린다. h9의 Plan 9 커널 퍼소널리티가 Postgres 바이너리의 시스템콜을 호스트 하이퍼바이저에서 직접 처리한다. 부팅할 리눅스 커널도, VM 이미지도, Docker도 없다.

브라우저 데모도 있다. 안 될 것 같은데 되는 종류다. JavaScript Promise Integration이 필요한데, Chrome과 Edge는 137부터 갖고 있다.

스레드의 질문은 정확하다. pglite도 embedded-postgres도 있는데 이건 뭐에 쓰나? 한 댓글러는 pglite가 라이브러리 용도를 덮고 embedded-postgres가 개발/테스트 동등성을 덮는다고 본다. 저자의 답은 스레드와 동반 글에 있다. pglite는 단일 연결만 되는데 실제 앱은 가끔 쿼리가 날아가는 중에 두 번째 쿼리를 던진다. 그리고 minipg는 SQLite의 임베디드 라이브러리 용도가 아니라 CLI 친화적 DB 용도를 겨냥한다. 헤드라인이 시사하는 것보다 좁은 틈새이고, 실제로 존재하는 틈새다.

## 9달러짜리 AliExpress MP3 플레이어에 Rockbox, Claude가 이식 — 269 points

**269 points** · 103 comments · [jayd.ml](https://jayd.ml/2026/11/14/rockbox-on-yp3.html) · [HN discussion](https://news.ycombinator.com/item?id=50624446)

Jayden은 브랜드 없는 "YP3" 플레이어를 리버스 엔지니어링해서 Rockbox를 돌렸다. 뭔가 512 KiB, USB-C, 블루투스, 자음 나열식 브랜드로 배송비 포함 9.71달러쯤에 팔리는 물건이다. 자기 역할 요약은 이렇다. "나는 거의 관여하지 않았다." 이식은 Claude가 했다. 그는 이어서 성공한 방법으로 재사용 툴킷을 작성하게 했고, 그 툴킷으로 두 번째 플레이어(TS47)에 4시간 만에 Rockbox를 올렸다.

공은 공으로 돌리자. ROM 다운로드 모드와 플래시 툴링은 사람인 ilyakurdyukov가 만들었다. 순정 부트로더를 유지하면 이 기기는 벽돌이 안 된다. 재밌는 주말과 벽돌 사이의 차이다.

스레드는 작은 골드러시다. 사람들이 다른 저가 플레이어용 자체 이식과 커스텀 펌웨어를 올린다. 반복되는 관찰은 이 물건들의 하드웨어가 실린 소프트웨어보다 훨씬 낫다는 것. 한 댓글러는 같은 워크플로로 아이를 위한 Yoto 박스 클론을 만들었다고 한다. "LLM이 임베디드 작업을 가속한다"는 주장의 정직한 버전을 보고 싶다면 벤치마크가 아니다. 9달러짜리 기기를 든 사람, 한 번의 이식으로 완성한 툴킷, 두 번째 이식에 4시간. 그게 전부다.

## 72시간 단식 '면역 리셋'은 2014년 쥐 실험이다 — 266 points

**266 points** · 205 comments · [scienceinhand.com](https://scienceinhand.com/72-hour-fasting-can-reset-your-entire-immune-system-usc-study-shows/) · [HN discussion](https://news.ycombinator.com/item?id=50647158)

헤드라인이 주장이고, 본문은 그 주장을 까는 글이다. 근거 논문은 2014년 Cell Stem Cell에 실린 장기 단식과 재급식에 관한 쥐 실험이고, 항암 치료 환자에서 나온 예비 관찰이 곁들여져 있다. 건강한 사람이 72시간 단식하면 면역계가 리셋된다는 걸 보여준 논문이 아니다. 이 글은 왜 면역세포 숫자가 기능적 리셋이 아닌지, 왜 재급식이 실험 주기의 일부이지 선택적 에필로그가 아닌지, 왜 환자 20명짜리 타당성 보고서가 노화 치료의 증거가 아닌지를 하나씩 짚는다.

댓글은 늘 그렇듯 기전 대 일화로 갈리고, 그 일화들이 유난히 구체적이다. 암 생존자는 Valter Longo의 월 1회 72시간 권고를 인용하고, 어떤 사람은 단식 한 번에 수년간 이어지던 팔 관절 통증이 사라져 5년째 없다고 하고, 또 어떤 사람은 10년간 매년 5일 단식을 해왔는데 진짜 효과는 컨디션 쪽이라고 말한다. 어느 것도 증거는 아니고, 그 전부가 이 헤드라인이 계속 돌아오는 이유다.

쓸 만한 정정은 스레드에 파묻혀 있다. 이 연구는 2014년 것이고, USC가 2014년에 낸 보도자료는 이번 주 버전보다 낚시성이 덜했다. 인간 데이터를 조금 덧붙인 12년 된 쥐 논문은 뉴스가 아니다. 계속 재게시되는 이유는 주장이 매력적이고, 단서들은 헤드라인에 안 들어가기 때문이다.

## 리눅스 NFS 서버의 12년 된 pre-auth root — 208 points

**208 points** · 88 comments · [opensec.in](https://opensec.in/blog/nfs2root-cve-2026-99362) · [HN discussion](https://news.ycombinator.com/item?id=50647161)

CVE-2026-99362, CVSS 9.8: 커널 내 NFS 서버의 pre-auth 힙 오버플로. tcp/2049로 닿는 곳에서 NFSv4.1이나 4.2를 서비스하는 호스트라면 인증 없는 공격자가 커널 힙 객체 뒤로 61바이트를 덮어쓸 수 있고, 체이닝하면 root 셸이 된다. 버그는 2014년 Linux 3.16부터 있었다. 6.12.117, 6.18.61, 7.3.2, 7.4-rc1에서 수정됐다. 패치하고 재부팅하거나, 그때까지는 포트를 막아라. 발견자는 OpenSec의 "Antara" 도구인데, 그 자체가 기사다. 커널을 겨냥한 자동화 시스템이 root 셸을 물고 돌아온 것.

스레드에 쓸 만한 게 둘 있다. 첫째, 당장 패치 못 하는 사람을 위한 우회책: `echo "-4.1 -4.2" | sudo tee /proc/fs/nfsd/versions` — 재부팅 전까지 해당 프로토콜 버전을 끈다. 물론 그걸 실제로 필요로 하는 클라이언트가 없는지 확인한 다음에. 둘째, "NFS 서버가 왜 커널에 있냐"는 반복되는 질문. 만족스러운 답은 없고, 20년째 없었다.

메타 포인트가 진짜 챙길 것이다. "눈알이 충분하면 모든 버그는 얕다"는 명제가, 설계된 적 없는 규모에서 시험대에 올랐다. 모델 하나가 12년 된 root 버그를 찾아낸 같은 주에, 다른 모델이 1700만 줄짜리 증명을 99.5% 압축했다. 둘 다 같은 능력을 다른 종류의 산출물에 겨눈 것이고, 어느 쪽도 그 산출물을 사람이 감사하기 쉽게 만들어주지는 않는다.

## Lean으로 모델링한 Clojure 코어, 트래커에 없던 버그 17개 — 235 points

**235 points** · 81 comments · [s.conao3.com](https://s.conao3.com/blog/2026/e4f733) · [HN discussion](https://news.ycombinator.com/item?id=50642939)

Conao3는 Clojure 코어의 Java 쪽을 가져다 정수·비트 연산을 Lean 4로 모델링하고 반례를 찾아 나섰다. 교차 검증은 `java.util` 컬렉션과의 차분 테스트. Clojure 1.12.7, JDK 21. 결과: Clojure JIRA에도 ask.clojure.org에도 없는 버그 17개. `vector-of`에 대한 `reduce`, HAMT의 해시 충돌 노드, 타입 힌트 없이 만든 함수형 인터페이스 호출 같은 것들이다.

가장 흥미로운 발견은 부정적인 쪽이다. HAMT는 300만 건의 차분 연산에서 불일치가 없었고, 벡터 트리도 경계 부근에서 전혀 없었다. 버그는 자료구조 바깥의 별개 코드에, 그리고 두 기전이 만나는 이음매에 몰려 있었다. 동등성과 해싱, 타입 힌트가 있고 없고의 Java interop. 정형 검증이 성과를 내야 할 지점이 정확히 거기이고, 이건 "Lean이 성숙한 코드베이스에서 버그를 찾았다"보다 훨씬 믿을 만한 주장이다.

스레드의 반박은 정당하고 구체적이다. 보고된 이슈 중 최소 둘은 버그가 아니라 오용이다. 바이트 배열에 `.indexOf`를 쓰면서 Long을 넘긴다든가, `(get "abc" 1.9)`가 키를 강제 변환한다든가. 한 댓글러는 같은 실험이 SBCL, Clozure, ACL2에서도 이미 돌았다고 지적한다. 정직하게 읽으면, 개수는 타입 레벨 노이즈로 부풀려졌지만 방법은 통한다. 그리고 누군가는 "사람이라면 이 호출을 했을까"라는 필터를 걸고 한 번 돌려봐야 한다.

## 베어메탈에서 0.6B 모델을 부팅하는 24 KB 커널 — 225 points

**225 points** · 55 comments · [github.com](https://github.com/alesha-pro/llm.asm/tree/main/02-baremetal-os) · [HN discussion](https://news.ycombinator.com/item?id=50648365)

어셈블리만으로 만든 LLM 프로젝트의 2부: 24,252바이트 Multiboot 1 커널. 정적 링크, 다이나믹 섹션 없음, libc 없음, Rust 없음, 리눅스 없음. 부팅하고, SMP를 올리고, 2 MiB huge page로 물리 RAM에 Q8_0로 올린 Qwen3-0.6B와 대화형 채팅을 서비스한다. 콜드 부팅에서 대화형 프롬프트까지 74–94 ms. 디코드는 EPYC 7642의 16 vCPU QEMU/KVM에서 134.9 tok/s, Xeon E5-2670 v3의 디스크리스 Proxmox VM에서 라이브로 55.4 tok/s.

요구 사항은 현대 x86의 표준 기능 세트 — AVX2, FMA, F16C — 이고, 모델은 먼저 커스텀 `.asmbin` 포맷으로 내보내야 한다. 이전 단계와의 토큰 단위 동일성을 1~32 vCPU 전 구간에서 주장하는데, 그런 주장은 처음 해보는 순간 정확히 맞거나 아니면 명백히 틀리거나 둘 중 하나다.

스레드의 회의론은 옳고, 또 논점에서 벗어나 있다. 0.6B 파라미터로는 누구도 신경 쓸 지표에서 llama.cpp를 이길 수 없고, 한 댓글러는 프런티어 모델에서 OS 계층을 벗겨내는 게 자원의 반올림 오차만 아낀다고 지적한다. 이게 보여주는 건 추론 스택이 이제 부트로더 아래에 들어갈 만큼 작아졌다는 것이지, "이게 더 빠르다"는 주장이 아니다. 스레드 최고의 농담 — 누군가 "AI 없는 OS.ASM"을 달라고 한 것 — 이 사실 가장 정확한 설명이다.

## Moat, 월 5달러에 모델 도매 접근을 팔면서 추론이 어디서 도는지는 말하지 않는다 — 216 points

**216 points** · 124 comments · [commandcode.ai](https://commandcode.ai/moat) · [HN discussion](https://news.ycombinator.com/item?id=50652184)

피치 문구는 "AI계의 코스트코": 월 5달러, 5시간·주간·월간 한도 없음, 그리고 프런티어에 근접한 모델 접근. 페이지의 모델 목록에는 GLM, DeepSeek, Kimi, Ling 변형이 30–70% 할인으로 걸려 있다. 근거는 회원 기반이 크면 사용량을 풀링해서 토큰을 도매로 산다는 이론이다. 크레딧 기반이 아니라 구독형 라우터다.

스레드의 반대 지점은 가격이 아니다. 라우터는 모든 프롬프트와 모든 툴 호출을 본다. 그런데 페이지에는 요청이 어디서 서빙되는지, 누가 호스팅하는지, 서버가 어디 있는지 한 줄도 없다. 데이터 거버넌스 의무가 있는 사람에게는 할인을 따져보기도 전에 탈락이다. 같은 논점의 더 무서운 버전: 에이전트에 툴 접근이 붙는 순간, 악의적이거나 장악된 라우터는 프라이버시 문제가 아니라 원격 코드 실행 문제다. 자기가 돕는다고 하는 그 셸 세션을 들여다보거나, 거기에 툴 호출을 주입할 수 있다.

다른 반대는 정의에 관한 것이다. OpenRouter는 선불 크레딧, 수백 개 모델, 감사 가능한 토큰당 가격을 준다. Moat는 그중 아무것도 안 준다. 같은 범주에 있지만 다른 제품이고, 대체재라고 부르는 건 마케팅이다. 다만 이런 구독이 말이 되려면 도매 토큰 시장이 실재하고 풀이 진짜로 보조받고 있어야 한다. OpenAI가 이번 주에 가격을 다시 매긴 것도 같은 베팅이다.

## 45°C 냉각수 인입이면 데이터센터에 칠러가 필요 없다 — 236 points

**236 points** · 117 comments · [theregister.com](https://www.theregister.com/hpc/2026/11/26/45c-inlets-just-killed-the-chiller-most-people-havent-noticed-yet/5311831) · [HN discussion](https://news.ycombinator.com/item?id=50655278)

Dan Olds가 SC26에서 전한다. 배관이 주인공인 이 전시회가 임계점을 넘었다는 것. 45°C 인입 유체를 받아주는 실리콘이면 옥상 드라이 쿨러만으로 열을 배출할 수 있고 칠러 플랜트가 아예 필요 없다. 폐쇄 루프 2개, 냉동 없음, 단열 보조는 가장 더운 기후의 가장 더운 시간대에만. 공개된 숫자: 냉각 에너지 50–70% 감소(칠러+타워 대비), 시설 전체 전력 10–20% 감소, 용수 80–95% 감소.

물리적 논리는 타당하고, 흥미로운 건 경제성이다. 칠러 플랜트는 용량 산정하고 유지보수하고 교체해야 하는 설비다. 드라이 쿨러는 팬과 코일이다. 칩이 45°C 유체를 받아준다면 옥상에 냉장고를 올리는 건 대부분의 기후에서 더 이상 말이 안 된다. 그리고 추운 기후가 사막보다 매력적이 되는데, 이건 지금 용량이 많이 지어지는 위치를 뒤집는다.

스레드의 반발은 공학이 아니라 프레이밍을 겨냥한다. 글쓴이는 반(反)데이터센터 운동의 "히스테릭한" 반대를 손 흔들어 넘기는데, 한 댓글러는 실제 반대 이유가 냉각 기술이 아니라 전기요금과 세금 감면이라고 지적한다. 그리고 기술이 존재한다고 해서 옆집 데이터센터가 그걸 도입한다는 뜻은 아니다. 또 하나 좋은 질문은 부품 수명이다. 인입 온도를 30–35°C에서 45°C로 올리면 효율을 얻고 커패시터와 광학 부품 수명을 잃는데, 전시회에서 MTBF 변화치를 제시한 사람은 없었다.

## 섹션에 못 들어간 새 글들

- **[Tell HN: 추수감사절 잘 보내세요](https://news.ycombinator.com/item?id=50655664)** ([510 points](https://news.ycombinator.com/item?id=50655664), 129 comments) — 그날 네 번째로 높은 글이 감사 인사다. 여기서 제일 좋은 댓글은 소인수분해가 여전히 어렵다는 게 감사하다는 댓글인데, 이번 주 뉴스를 생각하면 보이는 것보다 훨씬 나은 농담이다.
- **[Intel One Mono](https://github.com/intel/intel-one-mono)** ([403 points](https://news.ycombinator.com/item?id=50653667), 228 comments) — 2023년에 나왔다가 다시 떠오른 글꼴. Frere-Jones Type이 설계했고 저시력·법적 시각장애 개발자들이 단계마다 검수했으며 OFL 라이선스에 200개 넘는 언어를 지원한다. 스레드의 불만은 글리프가 1,400자 남짓이라 프로그래밍 폰트로는 얇다는 것, 그리고 반복되는 추천은 Braille Institute의 Atkinson Hyperlegible Mono다.
- **[보존된 UI 스타일 가이드 모음](https://aresluna.org/ui-style-guides/)** ([381 points](https://news.ycombinator.com/item?id=50649834), 85 comments) — Amiga부터 Material Design 3까지 인터페이스 가이드라인을 스캔해 모아둔 것이고, 저자가 직접 스캔한 것도 몇 개 있다. 영어에 쓸 만한 중성 대명사가 없어서 1991년 Amiga 가이드가 "성별을 무작위로 바꾼다"고 적어둔 대목이 지금 다들 돌려 보는 문장이다. 댓글들은 Windows 7 UX 가이드가 빠졌다는 점, 그리고 회색-은색 시대가 상호작용 요소를 상호작용 요소처럼 보이게 만들었는데 그걸 아무도 완전히 되살리지 못했다는 점을 짚는다.
- **[Tell HN: 또 Ask HN이 잔뜩](https://news.ycombinator.com/item?id=50649864)** ([386 points](https://news.ycombinator.com/item?id=50649864), 151 comments) — dang이 설명하길 `/ask`가 프론트페이지와 같은 순위 풀에서 뽑아오고 있어서, 순위에 든 Ask 글이 없으면 Ask 목록이 바닥난다는 것. 스레드는 곧 버그 리포트판이 된다. 2페이지 '숨기기'는 1페이지 항목으로 다시 차고, Show HN은 올리자마자 플래그되고, 사람들은 주간 Show HN 스레드를 원한다.
- **[Lions의 Unix 주석서](https://fosscomics.com/posts/17.%20Lions%27%20Commentary%20on%20Unix/)** ([255 points](https://news.ycombinator.com/item?id=50651719), 55 comments) — Unix 소스에 대한 복사본 주석서가 20년 동안 어떻게 떠돌았는지. 최고의 댓글은 자기 정품이 Sam Leffler에게 빌려졌다가 USL v. BSDI 증거로 제출됐고, 거기서 그 책이 제약 없이 공개된 탓에 영업비밀 주장이 무너졌다는 사람의 것이다. 정확한 정정도 붙는다. 1996년에 합법적으로 살 수 있을 때쯤엔 더 나은 책이 있었다.
- **[VP ≠ VNP가 무슨 뜻인가 (3분 요약)](https://www.friedgil.com/vpvnp)** ([214 points](https://news.ycombinator.com/item?id=50626466), 77 comments) — 복잡도 이론 안 하는 사람을 위한 Anthropic 결과 해설인데, 오늘 날짜로 저자 본인의 P vs NP 논증이 틀렸고 다시 썼다는 공지가 붙어 있다. 댓글들은 그 재작성도 여전히 틀렸다고 한다. P = NP라도 permanent에 대한 다항시간 알고리즘이 따라 나오진 않는다. 결과를 증명하는 것보다 설명하는 게 더 어렵다는 모양이다.
- **[SSH는 GUI 프레임워크다](https://zydra.sh/articles/ssh-is-a-gui-framework/)** ([239 points](https://news.ycombinator.com/item?id=50589784), 126 comments) — 다중화된 암호화 바이트 스트림에 Kitty 그래픽 프로토콜, OSC 99 알림, 클립보드와 마우스 지원까지 더하면 모든 기기에 실려 나가는 크로스플랫폼 렌더링 엔진이라는 주장. 데모는 `ssh zydra.sh`, 전부 SSH로 렌더링되는 microVM 데스크톱이다. 일리 있는 지적이고 잘 만들었다. 스레드의 반론은 그 프로토콜이 전부 터미널별 확장이라는 것, 그래서 "크로스플랫폼"은 "그걸 구현한 네 개 터미널에서 돈다"는 뜻이라는 것.

## 여전히 페이지에 남은 글들

82개 글이 넘어왔다. 밤사이 움직임은 이틀째 급등 두 건이 독식했다. Scott Aaronson의 글 406 → 1,934 (+1,528), 1Password 사고 보고서 732 → 1,620 (+888). 둘 다 새 정보는 아니다. 어제 여기서 이미 다뤘다. 그저 독자를 하루 늦게 만났을 뿐이다.

| 글 | 지난번 | 11월 26일 |
|---|---|---|
| [엔비디아, 젠슨 황 CEO 복귀](https://www.cnbc.com/2026/11/23/nvidia-jensen-huang-ceo.html) | 2,836 (11-25) | 2,849 (+13) |
| [Ladybird, 알파 진입](https://ladybird.org/posts/alpha/) | 2,424 (11-25) | 2,446 (+22) |
| ["다리오가 위험성을 과장해서 오픈소스 모델을 불법으로 만들고 자기가 통제권을 쥐려는 것"](https://twitter.com/ylecun/status/2124550037912920090) | 2,010 (11-25) | 2,019 (+9) |
| [젠장 젠장 젠장: 지금 벌어지는 일의 규모](https://scottaaronson.blog/?p=10379) | 406 (11-25) | 1,934 (+1,528) |
| [1Password 보안 사고](https://1password.com/blog/update-on-nov-2026-security-incident) | 732 (11-25) | 1,620 (+888) |
| [도요타·닛산·혼다, 부품 표준화로 원가 절감](https://www.caranddriver.com/news/a74490092/toyota-nissan-honda-standardize-parts-lower-costs/) | 1,399 (11-25) | 1,402 (+3) |
| [리만 가설의 Lean 검증](https://leanprover-community.github.io/blog/posts/riemann-hypothesis/) | 1,247 (11-25) | 1,250 (+3) |
| [Arm 요청으로 이 사이트는 2026년 12월 4일 종료됩니다 :(](https://arm.jonpalmisc.com/) | 1,177 (11-25) | 1,182 (+5) |
| [GLM-5.4: 첫 loop transformer로 범용 코딩에 다가가기](https://z.ai/blog/glm-5.4) | 1,176 (11-25) | 1,180 (+4) |
| [인터넷 아카이브의 잊힌 영상으로 만든 무료 대안 TV 네트워크](https://spelunkr.tv) | 1,086 (11-25) | 1,095 (+9) |
| [행렬 곱셈 지수는 9/4다 (pdf)](https://github.com/openai/math/blob/main/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026/paper.pdf) | 970 (11-25) | 1,059 (+89) |
| [2028년 Anthropic 전력의 87%는 가스, 11%는 석탄](https://betterdatacenterproject.com/2026/11/16/how-ai-is-powered-a-breakdown-of-byop-and-grid-power/) | 1,042 (11-25) | 1,043 (+1) |
| [2035년이 일찍 왔다](https://fzakaria.com/2026/11/23/2035-came-early) | 1,017 (11-25) | 1,029 (+12) |
| [LLM 에이전트는 너를 위해 일하지 않고 모회사를 위해 일한다](https://michaelharley.net/posts/2026/11/01/llm-agents-work-for-their-parent-companies-not-for-you/) | 997 (11-25) | 1,026 (+29) |
| [Button Sounds – 전문 녹음 버튼 클릭·누름 소리 모음](https://buttons.joshwcomeau.com/) | 794 (11-25) | 880 (+86) |
| [실리콘밸리에 무슨 일이 있었나?](https://www.oreilly.com/radar/what-happened-to-silicon-valley/) | 838 (11-25) | 845 (+7) |
| [뉴욕, 자동차 구독료와 구매 후 수수료 금지](https://www.governor.ny.gov/news/money-your-pockets-governor-hochul-signs-bill-restricting-exploitative-vehicle-subscription) | 813 (11-25) | 826 (+13) |
| [Inkling·Qwen·Unsloth로 시작하는 로컬 AI 입문 가이드](https://www.gpupartner.com/blog/beginners-guide-local-ai-inkling-qwen-unsloth) | 776 (11-25) | 780 (+4) |
| [납 아지드 더미를 터뜨리기](https://www.science.org/content/blog-post/detonating-huge-pile-lead-azide-really) | 723 (11-25) | 725 (+2) |
| [Perplexity와 지능](https://openai.com/index/perplexity-and-intelligence/) | 719 (11-25) | 721 (+2) |
| [Stalwart, 이제 Microsoft Exchange 대체재](https://stalw.art/blog/microsoft-exchange-replacement/) | 707 (11-25) | 714 (+7) |
| [GTA 6의 새들: Vice City와 Leonida 야생동물 도감](https://www.audubon.org/magazine/birds-of-gta-6-field-guide-vice-city-wildlife) | 645 (11-25) | 648 (+3) |
| [애플이 9년 만에 내 오픈소스 앱을 EU 앱스토어에서 내렸다](https://github.com/glushchenko/fsnotes/discussions/2056) | 630 (11-25) | 633 (+3) |
| [XNU Linux: 리눅스 위에서 OS X GUI 사용자 공간 전체를](https://github.com/AFK-surf/xnulinux) | 627 (11-25) | 629 (+2) |
| [샌드위치 시뮬레이터](https://stulle.app/) | 614 (11-25) | 615 (+1) |
| [스프레이 병](https://mechanical-pencil.com/products/spray-bottle) | 601 (11-25) | 614 (+13) |
| [5.4GB 메모리에서 돌리는 Inkling-2-Mini](https://github.com/ShinMegamiBoson/lookatmyquant) | 598 (11-25) | 598 (+0) |
| [Ternary Bonsai 2.5 27B](https://prismml.com/news/bonsai-2-5-27b) | 526 (11-25) | 538 (+12) |
| [Windows에서 돌아가는 GTA 6](https://twitter.com/raul_bs3/status/2125213756238291075) | 494 (11-25) | 520 (+26) |
| [연구소들이 P에서 인수분해를 풀었을지도 모른다는 소문](https://www.reddit.com/r/singularity/comments/1y59ef1/rumor_that_openai_or_anthropic_found_a_way_to/) | 391 (11-25) | 504 (+113) |
| [구글, 정수 인수분해·이산로그 등 Cogentic 논문 공개](https://github.com/google-research/google-research/tree/master/cogentic_research_papers) | 392 (11-25) | 502 (+110) |
| [Home Depot 저류조에서 스노클링한 남자에게 몇 가지 질문](https://www.vox.com/down-to-earth/511999/home-depot-retention-pond-snorkel-joseph-ricketts) | 374 (11-25) | 487 (+113) |
| [Kagi Mail (공개 베타)](https://blog.kagi.com/kagi-mail-public-beta) | 462 (11-25) | 468 (+6) |
| [Ask HN: Anthropic이 우리 회사를 증류했다고 고발합니다. 아니라는 걸 어떻게 증명하죠?](https://news.ycombinator.com/item?id=50630809) | 432 (11-25) | 463 (+31) |
| [샌드박스에 갇힌 모델들이 추론 서버를 통해 통신할 수 있다](https://www.lesswrong.com/posts/7wzWuLP3HhyBLmKfo/models-can-communicate-via-inference-servers-despite-being) | 420 (11-25) | 462 (+42) |
| [iOS Safari의 60 FPS 제한을 우회해 네이티브 같은 웹앱 만들기](https://rida.dev/blog/bypassing-ios-safari-60-fps-limit) | 421 (11-25) | 462 (+41) |
| [Anthropic, 공모가 83달러 아래로 붕괴](https://www.bloomberg.com/news/articles/2026-11-24/anthropic-breaks-below-83-ipo-price-in-premarket-trading) | 418 (11-25) | 433 (+15) |
| [PenGPT: 필기와 스케치를 위한 생성 트랜스포머](https://greydanus.github.io/2026/11/12/pengpt/) | 378 (11-25) | 401 (+23) |
| [주 개발자가 학교에 있는 사이 GTA 6 Recomp(Leonida)가 GitHub에서 차단됐다](https://github.com/ItsNotRexed/Leonida/issues) | 378 (11-25) | 394 (+16) |
| [Quad9, 프랑스에서 DNS 서비스 철수](https://quad9.net/news/blog/quad9-service-deactivation-in-france/) | 380 (11-25) | 386 (+6) |
| [GPUI, 자체 저장소로 분리](https://github.com/zed-industries/gpui) | 384 (11-25) | 386 (+2) |
| [버스·비행기·보트가 실제로 움직이는 미니어처 샌프란시스코](https://smallsf.com/) | 379 (11-25) | 381 (+2) |
| [신경 쓰는 똑똑한 사람은 도구를 쓴다](https://www.iankduncan.com/engineering/2026-11-19-smart-people-who-give-a-shit-use-tools) | 201 (11-25) | 368 (+167) |
| [모든 체에서 VP ≠ VNP](https://github.com/anthropics/formal-math/tree/main/vp-vnp) | 367 (11-25) | 368 (+1) |
| [Show HN: 네가 LLM의 서브에이전트인 게임을 만들었다](https://github.com/gulivan/worker755) | 360 (11-25) | 362 (+2) |
| [캡슐당 커피 그램을 줄이는 네스프레소 프로젝트](https://alvinbunk.wordpress.com/2026/11/01/nespresso-project-olympus/) | 355 (11-25) | 361 (+6) |
| [GPT-6 모델, 내재적 단백질 설계 능력 입증](https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities/) | 345 (11-25) | 356 (+11) |
| [Show HN: 옛 Nvidia·ATI 테크 데모를 브라우저에서 다시 돌리기](https://gpu-demo-gallery.pages.dev/) | 314 (11-25) | 353 (+39) |
| [Bored.com: 심심할 때 볼 재밌고 흥미로운 사이트들](https://www.bored.com/) | 342 (11-25) | 345 (+3) |
| [Windows 음량 균등화, 리버스 엔지니어링해서 PipeWire로 이식](https://github.com/xoxorwr/pw-loudness-eq) | 288 (11-25) | 342 (+54) |
| [Nospeaker ─ MacBook 트랙패드의 햅틱 모터로 말하게 만들기](https://github.com/os6/nospeaker) | 329 (11-25) | 332 (+3) |
| [사람들은 네 블로그 글에 관심 없다고 가정하라](https://danielsada.tech/blog/assume-people-are-not-interested-in-your-blog-post/) | 319 (11-25) | 321 (+2) |
| [Cyberleek이 GTA 6 Xbox 빌드 실행 파일을 올렸다](https://www.reddit.com/r/GamingLeaksAndRumours/comments/1y3jzqe/cyberleek_posted_the_gta_6_xbox_build_executable/) | 313 (11-25) | 315 (+2) |
| [리만 가설에 대한 Masullo](https://johncarlosbaez.wordpress.com/2026/11/22/masullo-on-the-riemann-hypothesis/) | 314 (11-25) | 314 (+0) |
| [Jetty Pro](http://hypercritical.co/2026/11/23/jetty-pro) | 311 (11-25) | 313 (+2) |
| [Check Point 보안 관리 서버를 노린 진행 중인 침해 캠페인](https://www.greynoise.io/blog/check-point-security-management-servers-intrusion-campaign) | 297 (11-25) | 298 (+1) |
| [추론 제공자들의 데이터 처리 사고](https://openrouter.ai/blog/announcements/data-processing-incidents-on-inference-providers/) | 294 (11-25) | 297 (+3) |
| [드래곤 기수의 짧은 시대](https://atilloy.com/2026/11/16/the-short-age-of-dragon-riders/) | 259 (11-25) | 294 (+35) |
| [워싱턴에서 누가 엔비디아 주식을 갖고 거래하나](https://www.kadoa.com/congress/insights/trump-nvidia) | 289 (11-25) | 292 (+3) |
| [그래, Lean 1,700만 줄은 많은 거다](https://micjm.com/blog/yes-17m-lines-of-lean-is-a-lot/) | 276 (11-25) | 277 (+1) |
| [GL.iNet 보안 공지 2026-11-20](https://www.gl-inet.com/en-us/blogs/blog/glinet-security-notice-2026-11-20) | 274 (11-25) | 276 (+2) |
| [기계식 시계는 어떻게 시간을 지키나](https://martincmartin.github.io/slidev-stem/watches/article/1/) | 270 (11-25) | 274 (+4) |
| [나는 부엌에서 와인을 마셔 왔다](https://scottaaronson.blog/?p=10362) | 252 (11-25) | 267 (+15) |
| [앞으로 나올 100개의 Rust GUI를 위한 조언](https://linebender.org/blog/next-100-guis/) | 264 (11-25) | 265 (+1) |
| [보안 지옥의 다음 원](https://blogs.gentoo.org/mgorny/2026/10/27/the-next-circle-of-security-hell/) | 264 (11-25) | 264 (+0) |
| [Alessandro Masullo 원고의 Lean 형식화 진행 지도](https://claude.ai/artifact/CtQyX8qfYAF822bgHJHHE3) | 264 (11-25) | 264 (+0) |
| [심장마비·뇌졸중 위험, 수십 년 전에 감지 가능](https://www.ed.ac.uk/news/heart-attack-and-stroke-risk-detectable-decades-in-advance) | 256 (11-25) | 263 (+7) |
| [MS, 사상 최악 장애 후 'Code Red' 선언 (내부 메모)](https://www.reuters.com/business/microsoft-declares-code-red-after-historic-outage-internal-memos-show-2026-11-24/) | 252 (11-25) | 256 (+4) |
| [Win4wine – Wine 위에서 Windows 셸을 리눅스 데스크톱으로](https://github.com/mikuta0407/win4wine) | 253 (11-25) | 254 (+1) |
| [Open Social Web Alliance](https://osw-alliance.net/en/) | 254 (11-25) | 254 (+0) |
| [개당 3달러로 미국 재무부 서브도메인 탈취하기](https://www.intruder.io/research/taking-over-us-treasury-subdomains-for-3-each) | 218 (11-25) | 250 (+32) |
| [Brendan Gregg의 제단에서 예배하기](https://fzakaria.com/2026/11/12/worshipping-at-the-altar-of-brendan-gregg) | 238 (11-25) | 240 (+2) |
| [놀고 있는 연산으로 로컬 모델 학습 엔진 돌리기](https://github.com/sous-labs/songe) | 231 (11-25) | 238 (+7) |
| [AMD EPYC Zen 6 vs. Zen 1 성능: 10년도 안 돼 기하평균 12.1배](https://www.phoronix.com/review/amd-epyc-9006-7601) | 231 (11-25) | 232 (+1) |
| [Max Tegmark "Anthropic 직원들, '세계 정복' 공공연히 얘기해"](https://novaramedia.com/2026/11/24/anthropic-staff-openly-talk-about-taking-over-the-world-claims-top-mit-physicist/) | 222 (11-25) | 224 (+2) |
| [Marginalia 검색, 돈, C++, Rust, AI, 이런저런 것들](https://www.marginalia.nu/log/a_141_marginalia_update/) | 210 (11-25) | 222 (+12) |
| [DeFlock America 페이스북 그룹, 위험 조직으로 정지](https://www.facebook.com/shugvermonte/posts/the-deflock-america-group-with-over-840k-members-has-been-suspended-by-meta-what/10165140280736049/) | 222 (11-25) | 222 (+0) |
| [Gemini가 반짝반짝 작은별 가사를 안 주겠다고 했다](https://www.comentr.com/technology/01M88DWQ0R4NCMYR17AFEWRG1F) | 212 (11-25) | 221 (+9) |
| [여행 가방에 들어가는 이탈리아 접이식 자전거 디자인](https://www.core77.com/posts/145766/An-Italian-Folding-Bicycle-Design-that-Fits-Into-a-Suitcase) | 212 (11-25) | 218 (+6) |
| [Fast-Anything: Rust로 다시 쓰지 마라. 느린 5%만 다시 써라](https://github.com/EL4CTEO/fast-anything) | 214 (11-25) | 215 (+1) |
| [P vs. NP를 풀려는 에이전트 군집](https://pequalnp.com/) | 209 (11-25) | 211 (+2) |
| [SSH 키를 디스크에 두지 마라](https://jola.dev/posts/you-cant-afford-ssh-keys-disk) | 203 (11-25) | 203 (+0) |

## 관통하는 흐름

세 갈래다. 첫 번째는 누가 그 작업을 검증할 수 있느냐다.

오늘의 형식 검증(formal methods) 기사들은 이제 역량 얘기가 아니다. 1,700만 줄짜리 Lean 증명이 76,000줄로 압축됐는데, 그 밑에 첫 댓글이 76,000줄을 누가 읽을 수 있냐고 묻는다. 어떤 Clojure 감사는 표준 라이브러리 일부를 Lean으로 모델링하고 차분 테스트를 붙여 JIRA에 없던 버그 17개를 찾았다. 코드골프 벤치마크에서는 모델이, 바이트 수 세며 몇 년을 갈아 넣은 사람들의 기록을 이겼다. AI가 치료한 질병 스코어보드는 0인데, 병목이 추론이 아니라 3상 임상과 세포 측정이었기 때문이다. 전부 같은 모양이다. 기계의 출력이 인간의 검증보다 빨리 도착하고, 이 사업 전체의 신뢰가 읽기 도구를 누가 만드느냐에 걸려 있다. 오늘의 답은 "200배 압축했다"였다. 그건 시작이지 해법이 아니다.

두 번째는 청구서다. OpenAI가 GPT-6.2 한도를 깎았다. Astra는 벽까지 40% 빨라지고 Sol은 25%다. 스레드의 합의는 보조금의 끝이라는 것이고, 그게 Anthropic IPO 직후에 왔다. Moat는 중국 오픈 모델의 월 5달러 도매 접근권을 파는 건데, 도매 시장이 진짜 싸고 그 풀이 진짜 보조받고 있어야만 성립한다. Nextcloud는 유럽 오피스 스위트를 내놓는데 진짜 문제는 ONLYOFFICE의 CVE 적체를 고스란히 물려받는다는 것이다. Ubuntu는 공개 9일이 지난 커널을 패치하지 못하는데, 갈라진 트리에 백포트해야 하기 때문이다. 역량 얘기가 하나도 없다. 전부 유지보수와 마진 얘기이고, 프론트페이지가 드디어 그걸 뉴스로 취급한다.

세 번째는 출처다. Times는 어떤 Photoshop 버전을 금지하는데, 그 파일이 스스로 AI 편집됐다고 기술하기 때문이다. 한 모델 벤더는 자기 모델이 오픈 Qwen의 파인튜닝이라는 걸 부인한다. 12년 된 NFS 버그가 2014년 이후 모든 감사에서 살아남아 커널에 앉아 있었다. 각 경우 질문은 "작동하냐"가 아니라 "누가 서명했고, 그 서명을 내가 확인할 수 있냐"다. 그게 Hacker News가 추수감사절에, 감사 인사 글들 사이에서 물은 질문이다.
