---
title: "해커뉴스 프런트페이지 라운드업 — 2026년 10월 18일"
pubDate: 2026-10-18
description: "오늘 200점을 넘긴 글은 마흔일곱 개, 그중 열여섯 개가 새로 올라왔다. 가장 좋은 글들의 공통점은 하나다. 남이 찾아내기 전에 자기 실패 지점을 먼저 공개한다."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
lang: "ko"
---

오늘 200점을 넘긴 글은 마흔일곱 개다. 상위 170위 창 안에 들어온 마흔여섯 개에, 순위 창이 통째로 놓친 하나를 더한 숫자다. 이번 라운드업에 새로 들어온 글은 열여섯 개. 어제는 없던 글이 열네 개, 두 번째 제출이 첫 번째보다 두 배 점수를 받은 글 하나, 스캔 범위에 아예 걸리지 않았던 글 하나다.

오래된 글들이 여전히 페이지 상단을 차지하고 있다. "Things to know when you get cancer"는 나흘째 1,955점이다. 테슬라 로드스터 페이지는 목요일 이후 새 정보가 없는 제품 페이지로 1,628점. 클로드의 ECDSA 글은 1,047점으로 출발점의 네 배가 됐다. 이게 이 독자층에 대한 비판은 아니다. HN의 감쇠 곡선이 그렇게 생긴 것이다. 다만 오늘 재미있는 재료는 상단이 아니라 200에서 560점 사이에 있다는 뜻이다.

그리고 그 재료에는 모양이 있다. 오늘 읽을 만한 새 글은 거의 다, 자기가 어디서 깨지는지를 문단 몇 개로 설명한다. 호환성 페이지를 붙인 다이어그램 엔진, 클론에만 통하는 산호 논문, 읽기가 가끔 틀릴 거라고 저자가 먼저 경고하는 폰트, 31% 속도를 광고하는 CPU 시뮬레이터, 건너뛸 때마다 로그를 남기는 `yolo` 우회 옵션이 달린 git 훅. 페이지는 자기 한계를 밝힌 쪽에 점수를 줬다. 그 정도면 이야기 자체가 특이하다.

## Pele – Mermaid diagrams as themeable SVG — 558 points

**558 points** · 53 comments · [pele.run](https://pele.run/) · [HN discussion](https://news.ycombinator.com/item?id=50132193)

옵시디언이 Mermaid 렌더러를 다시 짜서 MIT 라이선스 독립 라이브러리로 내놨다. 입력 문법도 같고 다이어그램 종류도 같다. Mermaid 12.1.0의 모든 타입을 지원한다고 주장한다. 다른 건 출력이다. 직접 삽입하는 SVG가 나오고, 스타일링은 테마 설정 객체가 아니라 CSS 변수로 하고, 의존성 트리는 스물세 개가 아니라 0이다.

비교표의 숫자가 곧 세일즈 피치다. gzip 기준 230 kB 대 Mermaid의 1.6 MB, 렌더링 0.05–0.3 ms 대 6–82 ms. 크기는 60배 차이, 속도는 100배 이상 차이다. 둘 다 같은 설계 선택에서 나온다. DOM 조작 없음, 레이아웃 엔진 없음, 브라우저 없음. Mermaid의 무게는 대부분 렌더러다. Pele는 그냥 마크업을 뱉는다.

그 숫자가 당신 다이어그램에서도 유지되는지는 열린 문제이고, 댓글은 정확히 그 선을 따라 갈린다. `bilibali`는 정적 사이트용으로 Mermaid 블록을 SVG로 바꾸려고 빌드 스크립트에서 크로미움 인스턴스를 띄우고 있었는데 Pele로 갈아탔고, 레이아웃이 1:1은 아니지만 Pele 쪽이 더 낫다고 한다. `Ancapistani`는 서브그래프 동작만으로도 바꿀 이유가 된다고 한다. Pele에서 서브그래프는 바깥으로 연결돼도 자기 방향을 유지하는데, 이게 Mermaid의 오래된 골칫거리다. 반대로 `lukeify`는 Mermaid의 문제는 스타일링이 아니라 "고풍스럽고 위상적으로 형편없는 레이아웃"이었다고 말하고, `burgeonlab`은 이미 D2로 떠났다.

솔직한 정리: Pele는 더 나은 다이어그램 언어가 되려는 게 아니다. 사람들이 이미 쓴 문법을 위한 빠르고 작고 테마 가능한 렌더러가 되려는 것이다. Mermaid로 겪는 고통이 번들 크기와 다크모드 CSS라면 — 그리고 문서 파이프라인에서는 보통 그렇다 — 이건 해결된다. 고통이 화살표가 이상한 데로 간다는 것이라면, 이건 아무것도 해결하지 못한다.

## Zuckerberg's Meta takes down No Kings Instagram during protest day — 555 points

**555 points** · 359 comments · [meidasnews.com](https://meidasnews.com/news/zuckerbergs-meta-takes-down-no-kings-instagram-during-massive-protest-day) · [HN discussion](https://news.ycombinator.com/item?id=50136881)

논 킹스 연합의 메인 인스타그램 계정이 토요일, 전국에서 약 3,000건의 시위가 진행되는 동안 어두워졌다. 초기 유권자 투표율에 초점을 맞춘 행사였다. 얼마나 꺼져 있었는지에 대한 보도는 엇갈린다. 주최 측은 약 90분간 침묵했고 계정은 돌아왔지만 여전히 게시가 안 됐다고 하고, 가디언은 몇 시간이라고 한다. 메타는 사과하며 "계정이 매우 높은 빈도로 게시, 공유, 댓글을 달 때" 적용하는 종류의 자동 조치였다고 설명했다.

메타의 설명을 일단 액면가로 받아들이자. 아마 사실일 것이고, 동시에 가장 치명적인 부분이기도 하다. 계정은 정치 운동이 자기 최대의 날에 하는 바로 그 일, 그러니까 많이 게시하기 때문에 정지됐다. 메타의 집행이 자동인 이유는 그 규모의 조정을 사람으로 감당할 수 없기 때문이고, 자동 집행은 조직적인 신고로 너무 쉽게 농락당한다. 팔로워 수백만의 연합과 전국 규모 행동의 날은 두 휴리스틱을 동시에 건드리는 정확한 입력값이다. 이 일이 일어나도록 누구도 결정을 내리지 않았다. 시스템이 그냥 하는 일을 했다.

`dgoldstein0`이 그 논리를 제대로 세운다. "메타 같은 빅테크는 조정 인력을 충분히 뽑는 것보다 자동 집행이 지갑에 편하기 때문에 자동 집행에 지나치게 의존한다." `koolba`가 반대쪽 무게를 얹는다. 큰 회사가 답하는 데 90분 걸린 게 정말 스캔들인가. `weknowbetter`가 실제 답을 준다. 페디버스를 쓰라고. 맞는 말이고 십 년째 맞는 말이며, 청중이 어디 있는지에 대해서는 아무것도 바꾸지 못한다.

기록해 둘 메타 노트가 두 개 있다. HN 제출 자체가 그날 플래그 처리됐고, 최소 세 명의 댓글러(`jaybrendansmith`, `rasso`)가 누가 왜 플래그를 눌렀는지 물었다. 장애 자체보다 흥미로운 스레드다. 그리고 이 글은 상위 170위 창에 한 번도 들어오지 않았다. 날짜 스윕에서 걸렸다. 순위 스캔이 놓친 555점짜리 글이라는 건 "프런트페이지"가 보이는 것보다 훨씬 좁은 표본이라는 뜻이다.

## Bleached corals thrive within days when touching healthy neighbour — 536 points

**536 points** · 115 comments · [nature.com](https://www.nature.com/articles/d41586-026-03266-x) · [HN discussion](https://news.ycombinator.com/item?id=50126253)

10월 14일 발표된 *Science Advances* 논문은 백화가 되돌려질 수 있다고 보여준다. 같은 개체에서 나온 건강한 조각에 물리적으로 접촉시키면 몇 주 안에 완전히 회복된다. 기전은 조직 다리다. 두 조각이 붙고, 공생 조류가 그 사이로 이동한다.

실험 설계는 거의 민망할 만큼 단순하다. *Pocillopora damicornis* 조각 열 쌍, 각 쌍은 백화된 것 하나와 건강한 것 하나. 다섯 쌍은 접촉시키고, 다섯 쌍은 몇 밀리미터 떨어뜨렸다. 접촉한 백화 조각은 여덟 주 안에 회복됐다. 2주차에 공생체 개체군은 나흘마다 두 배로 늘고 있었고, 야생에서 관찰된 어떤 회복보다도 훨씬 빨랐다. 떨어뜨린 조각은 스무 주 뒤 죽었다. 일주일 접촉만으로 백화된 가지가 스스로 회복을 끝내기에 충분했다.

헤드라인을 배어버리는 디테일은 여섯 번째 문단에 있고, HN 스레드가 즉시 달라붙은 부분이기도 하다. 융합은 같은 유전체(genet) 조각 사이에서만 일어났다. 같은 개체, 동일한 유전형이다. 다른 종은 붙지 않았다. 같은 종의 다른 개체도 붙지 않았다. `Okkef`: "클론일 때만 된다는 거니까, 실전에서는 별 쓸모가 없네요."

그건 결과를 무시할 이유가 아니라 정확히 읽을 이유다. 논문이 보여주는 건 회복의 장벽이 *공생체의 가용성*이지 하류의 손상이 아니라는 점, 그리고 산호에게는 호환되는 조직 사이로 공생체를 옮기는 수송 기전이 있다는 점이다. Palumbi는 2025년 실험실 수조에서 우연히 발견했다. 뻔한 공학적 후속 조치는 단일 유전체로 양식장을 접붙이기해서 조각들이 공유하게 만드는 것이다. 뻔한 한계는 `anakaine`의 것이다. 그레이트 배리어 리프에서 몇 년을 잠수한 경험에서 나온 말이다. 리프 규모에서 백화 사건은 너무 커서 "아주 먼 거리까지 백화되지 않은 이웃이 없는 경우가 많다." 물리적 거리 안에 생존자가 있어야 하는 구조 기전은 기후 해법이 아니다. 몇 군집이 살아남은 리프를 위한 도구이고, 좋은 도구다.

`skew-aberration`이 유용한 배경을 붙인다. 백화된 산호는 죽은 산호가 아니고, 회복 과정에서 *다른* 공생체 종을 받아들일 수 있다. 적응적 백화 가설이다. 덕분에 이식 문제는 보도자료가 말하는 것보다 훨씬 흥미로워진다.

## DeepSeek search and fetch – $0.75 per 1000 successful requests — 481 points

**481 points** · 234 comments · [api-docs.deepseek.com](https://api-docs.deepseek.com/guides/search/) · [HN discussion](https://news.ycombinator.com/item?id=50138531)

딥시크가 raw JSON 엔드포인트 두 개를 냈다. `POST /v1/tools/search`와 `POST /v1/tools/fetch`다. 모델 API와 같은 베어러 인증을 쓰고, 서드파티가 아니라 자체 크롤러로 돌아간다. Search는 선택적 페이지 본문과 함께 구조화된 결과를 돌려주고, Fetch는 URL을 마크다운으로 돌려준다.

가격이 핵심이다. 성공한 요청 1,000건당 $0.75. 토큰당도, 반환 결과당도 아니라 요청당 과금이고, HTTP 200과 실제 결과가 있을 때만 부과된다. 실패, 빈 결과, 타임아웃은 무료다. `count`를 50까지 올려도 가격은 그대로다. QPS는 각 엔드포인트당 계정 기준 5이고, Fetch에는 도메인별 제한이 따로 있다. 그리고 당분간 딥시크 자체 하네스나 Claude Code, Codex를 통해 호출하면 서버 측 도구 호출은 2026년 11월 1일까지 무료다.

업계와 비교하면 요청 단가에서 격차가 크다. 스레드에 따르면 Brave가 1,000건당 약 $5, Kagi가 $12다. `ggnore7452`는 딥시크의 search와 fetch를 자기 벤치마크로 돌려보고 품질에는 감탄하지 못했다. "그래도 꽤 싸네요." 그게 당신이 받는 거래다. 가장 싼 검색 계층을 사두고, 평가 결과가 그렇게 말할 때 더 나은 걸로 갈아타는 건 방어 가능한 아키텍처다. 싼 게 더 나쁘다는 사실에 놀라는 건 아니다.

구조적인 지적은 `mjmvisser`의 것이다. "이 서비스들이 존재하는 이유는 구글이 유료 검색 API를 안 주기 때문이다." 시장 전체가 그렇다. 구글은 광고로 검색을 돈으로 바꾸고 깨끗한 결과를 팔지 않는다. 그래서 세상 모든 에이전트 프레임워크가 조금 더 나쁜 인덱스에 돈을 내고 있다. `londons_explore`는 논리적 끝까지 간다. 에이전트가 무엇을 검색하는지 통제하는 게 검색 자체보다 값어치 있다면, 검색 API 가격은 0이나 마이너스가 될 수 있다. 제공자가 당신에게 자기들을 거쳐 가라고 돈을 주는 것이다. 농담이 아니다. 두 섹션 아래에서 메타가 벌이는 거래와 같은 것이다.

## NY announces game ownership bill requiring ownership rather than licensing — 409 points

**409 points** · 186 comments · [tomshardware.com](https://www.tomshardware.com/video-games/new-york-rep-announces-game-ownership-bill-that-would-require-consumer-ownership-rather-than-sale-of-licenses-would-also-require-publishers-to-keep-the-game-functional-after-support-ends) · [HN discussion](https://news.ycombinator.com/item?id=50136536)

리치 토레스 하원의원(D-NY)이 Power to the Players Act를 발표했다. FTC가 디지털 게임 판매를 취소 가능한 라이선스가 아니라 소유권으로 규율하도록 지시하고, 온라인 요소가 있는 게임은 서버가 꺼지기 전에 작동하는 오프라인 모드를 출시하도록 요구하는 법안이다. 어제 라운드업에 실린 원래 보도자료는 217점이었다. 톰스하드웨어 기사는 409점이다. 정보량은 더 적은데 숫자는 더 크다. 이건 짚고 갈 만하다.

스레드는 이걸 찌르는 데 유난히 효과적이다. `dabinat`은 헤드라인부터 잡는다. 이건 뉴욕주 법이 아니라 뉴욕주 의원이 발의한 *연방* 법안이고, 모든 애그리게이터가 그걸 틀렸다. `JumpCrisscross`는 더 세게 간다. "발의하겠다고 발표했다"는 "발의했다"가 아니다. 법안 텍스트가 없고, 초안도 없을 수 있고, 토레스는 민주당 안전 지역구에서 재선을 뛰고 있다. `xg15`: 발표의 발표다. `semiquaver`는 발의자가 아니라 구조에 이의를 제기한다. FTC에게 규칙을 만들라고 지시하는 건 의회가 입장을 내지 않는 것이다.

법안 본문이 되어야 할 댓글은 `torben-friis`의 것이다. 그의 걱정은 2025년에 2005년 게임을 돌리는 게 아니다. 에뮬레이션은 길을 찾는다. 이 세대가 중고 시장을 잃었다는 것이다. $30에 사고 $20에 되팔던, 게임당 10달러. 양도할 수 없는 소유권은 물리 매체가 주던 권리보다 약한 권리이고, 오프라인 모드 의무화로 생겨나는 게 아니다. 이 모양대로 법이 통과되면, 당신은 게임을 소유하지만 팔 수는 없을 것이다.

## Gold is now the top U.S. export — 398 points

**398 points** · 217 comments · [numismaticnews.net](https://www.numismaticnews.net/gold-now-top-u-s-export) · [HN discussion](https://news.ycombinator.com/item?id=50132870)

2025년 10월부터 금은 거의 매달 미국 수출 품목 1위다. 원유, 의약품, 항공기를 앞선다. 2026년 2월은 금액만이 아니라 중량 기준으로도 사상 최고를 세웠을 수 있고, 그렇다면 가격만으로 설명할 수 없다.

어디로 가는지가 흥미롭다. 1위 스위스는 정련소를 뜻한다. 2위 홍콩은 중국을 뜻한다. 3위 영국은 세계 최대 금 거래소인 런던 금 시장 협회를 뜻한다. 미국 정부는 자기 보유량이 변동 없다고 보고한다. 금속이 금고가 아니라 현재의 광산 생산과 재활용에서 나온다는 뜻이다.

패트릭 헬러의 설명은 명시적으로 추측이라고 표시돼 있다. 외국 중앙은행들이 달러 준비자산에서 다변화하고 있고, 중앙은행의 금 보유액 총계가 이제 미 국채 보유액을 가치로 앞지르며, 중국은 2021년 4월 $1.096 trillion에서 2026년 2월 $693 billion으로 미 국채를 줄이면서 금 지급을 요구하고 있다. HN 스레드는 더 평범한 기전을 제공한다. `JumpCrisscross`는 전 세계 정련 능력이 거의 풀가동이고, 미국 정련소가 매입을 제한하며 고객을 돌려보내고 있다고 지적한다. 스위스와 홍콩 정련소로 향하는 수출 흐름은 공급망 병목을 바깥에서 본 모습이다. `legitster`는 이 이야기에 필요한 물을 끼얹는다. 상당 부분이 거의 확실히 고철, 그러니까 베이비부머가 장신구를 현금화한 것이다. 그건 실재하는 시장이고, 통화 전략보다 가계 대차대조표에 대해 더 많이 말해준다.

두 해석이 동시에 성립한다. 중앙은행들은 탈달러화를 진심으로 하는 듯한 속도로 금을 모으고 있다. 그리고 기록적인 수출 숫자는 미국인들이 할머니의 반지를 파는 것만으로도 전부 만들어낼 수 있다. 기사의 프레이밍은 첫 번째에 강하게 기울고, 숫자는 둘을 구별하지 못한다.

## Furifont, a Japanese font that shows furigana — 392 points

**392 points** · 82 comments · [furifont.antfu.me](https://furifont.antfu.me/) · [HN discussion](https://news.ycombinator.com/item?id=50100994)

안토니 푸의 Furifont는 후리가나를 폰트 안에 넣는다. `<ruby>` 마크업도, 자바스크립트도, 플러그인도 없다. `font-family: 'Furifont Sans'`만 지정하면 한자 위에 읽기가 나타난다. Source Han Sans 또는 Source Han Serif JP에서 컴파일되고, 빌드 단계가 수천 단어짜리 사전을 훑으면서 각 읽기를 새 글리프로 그리고, 今日이 위에 きょう가 붙은 단일 글리프가 되도록 합자를 연결한다. 긴 단어가 짧은 단어를 이긴다. 日本보다 日本語이 먼저다. 명확한 읽기가 없는 한자는 맨몸으로 남는다.

커스텀 폰트가 되는 곳이면 어디서든 작동한다. 그게 핵심이다. 릴리스에는 Sans와 Serif, 히라가나와 로마자 읽기, 일반 OpenType과 WOFF2, 그리고 본문 굵기를 따라 후리가나가 변하는 가변 폰트가 들어 있다. 다른 기본 폰트, 단어 목록, 로마자 표기 체계로 직접 빌드하는 CLI도 있고, 읽는 페이지에 적용하는 북마클릿과 유저스크립트도 있다.

저자 자신의 경고가 페이지에서 가장 흥미로운 문장이다. "폰트의 한계 때문에 후리가나가 틀릴 수 있습니다. 폰트는 문장이 아니라 한 번에 한 덩어리의 한자만 봅니다." 일본어 읽기는 원칙적으로 치명적일 만큼 문맥 의존적이고, `TazeTSchnitzel`이 길게 그렇게 말한다. 조동사 성격의 글자는 읽기가 두 개, 어떤 글자는 여섯 개, 인명은 또 자기 읽기가 따로 있고, 이건 아무도 학습에 실제로 쓰면 안 되는 "합자의 유용한 악용"이다. `jwolfe`는 구체적 실패를 찾았다. 줄바꿈에서 단어가 갈라지면 읽기가 틀렸다. `omoikane`은 가장 웃긴 사례를 찾았다. 폰트가 この先生きのこる를 この先 生きのこる가 아니라 この先生(선생)으로 읽는다. 인터넷의 표준 오독이고, 사전이 밈에서 배웠다는 인상을 준다.

그다음 원어민 `shun_dev`가 보고한다. 폰트 자체의 일본어 데모 페이지가 合字를 じ로 읽고 合은 빈칸으로 남긴다. 사전에 없기 때문이다. 저자는 쇼케이스에 버그를 실어서 배포했다. 프로젝트에서 가장 정직한 부분이고, 동시에 이 부류 전체에 대한 공정한 요약이다. 자동 후리가나는 대부분 맞고 나머지에서 자신 있게 틀리는 렌더링 트릭이며, 틀리는 경우는 정확히 학습자가 감지할 수 없는 경우다.

## Dam removals are bringing fish back across the northeastern United States — 346 points

**346 points** · 88 comments · [smithsonianmag.com](https://www.smithsonianmag.com/science-nature/dam-removals-are-bringing-fish-back-across-the-northeastern-united-states-striking-down-one-tiny-barrier-at-a-time-180989679/) · [HN discussion](https://news.ycombinator.com/item?id=50126312)

벤 골드파버의 bioGraphic 기고는 1859년에 열린다. 소로가 농민들이 빌레리카의 직물 댐을 없애자는 주장을 펼 수 있도록 콩코드 강 측량에 고용된 때다. 소로는 개인적으로도 댐을 싫어했다. 십 년 전 댐이 막아버린 물고기에 대해 "불쌍한 전어야! 네 구제는 어디 있느냐?"라고 썼다. 측량은 농민 편이었다. 주는 그래도 댐을 남겨뒀다. 소로는 자연이 "몇천 년 후"쯤엔 댐을 무너뜨릴지 모른다고 예측했다.

그것은 약 160년이 걸렸다. 1912년 이후 미국에서 2,300개 넘는 댐이 철거됐고, 대부분 지난 25년 사이였다. 운동은 2024년에 정점을 찍었는데, American Rivers 집계로 2,500마일 넘는 강이 다시 연결됐다. 클래머스가 컸다. 수력발전 댐 네 개, $500 million, 400마일 넘는 산란 서식지 재개방, 2024년 8월 자연 유수 회복, 2024년과 2025년 모두 옛 댐 자리를 지나간 친누크 수천 마리. 그 전에는 엘와가 있었다.

이 기사가 바로잡으려는 것은 지리다. 댐 철거는 서부 연어 이야기가 아니다. 철거의 다수가 동부 주에서, 훨씬 작은 규모로 일어난다. 펜실베이니아는 2024년에 노후 구조물 27개를 걷어냈고, 그중 어느 것도 20피트를 넘지 않았다. 버몬트, 메인, 뉴햄프셔는 각각 하나씩 잃었다. 그리고 적체는 어마어마하다. 한 목록은 동북부 어류 이동로를 막고 있는 댐이 최소 35,000개라고 세는데, 매사추세츠 3,000개, 코네티컷 5,000개, 뉴욕 9,000개가 포함된다.

`m_herrlich`는 해마다 더 중요해질 반론을 제기한다. 겨울이 따뜻해지면 눈더미 대신 비를 저장하는 저수지의 가치가 올라가고, 수력 발전 용량도 무시할 게 아니다. 그의 선호는 어도다. `just_howl`은 정책을 실제로 움직이는 답을 준다. 이 댐 대부분은 소유자에게 부담인 방치된 사유 구조물이고, 철거가 영구 유지보수보다 싸다. 생태가 아니라 경제가 이걸 뽑게 만든다.

스레드에서 하나 실무 메모. `twright`는 이 기사가 신디케이션이고 [biographic.com/death-by-a-thousand-dams](https://biographic.com/death-by-a-thousand-dams/)에서 훨씬 잘 읽힌다고 지적한다.

## Making chicken transparent using Dorito dust — 342 points

**342 points** · 86 comments · [chillphysicsenjoyer.substack.com](https://chillphysicsenjoyer.substack.com/p/making-chicken-transparent-using) · [HN discussion](https://news.ycombinator.com/item?id=50131213)

바탕 논문은 진짜고 결과도 진짜였다. Ou 등, "Achieving optical transparency in live animals with absorbing molecules"는 조직을 타르트라진, 그러니까 도리토스의 노란 주황 식용 색소에 담그면 반투명해진다는 걸 보여준다. 기전은 굴절률 정합이다. 지방, 물, 단백질의 굴절률이 달라서 조직이 빛을 산란시키는데, 적절한 농도의 강한 흡수 염료가 주변 매질의 굴절률을 밀어 올려 그 차이를 닫는다. 기름이 종이를 투명하게 만드는 것과 같은 요령이다.

서브스택 글은 일부러 망가뜨린 프로토콜로 한 재현 시도다. 논문은 0.62 M 타르트라진을 40 °C에서 기계 셰이커로 썼다. 저자는 0.19 M을 상온에서 여섯 시간 동안, 생닭가슴살 2 mm 슬라이스에 썼다. "안전하게 할 방법을 찾지 못했고 장비도 없었다." 결과는 부분적 투명이다. 고기 너머로 격자선이 보이고, 만져보면 질감은 그대로고, 시각적 품질은 구미 베어 수준이다. 대조군은 물에 담갔는데 희미하게 노랗다. 과정이 지저분해서 가루가 묻었기 때문이다.

이게 좋은 재현의 모습이다. 검정력은 모자라고, 정직하게 보고하고, 원 프로토콜에서 벗어난 점을 묻어두지 않고 먼저 밝힌다. `Eridanus2`는 물리를 한 번에 맞힌다. `masfuerte`와 `_Microft`는 저자에게 없던 실용적 개선을 준다. 슬라이스 전에 고기를 부분적으로 얼려 매끄러운 단면을 만들고, 계면에 물을 더해 표면 산란을 죽인다. `layer8`은 유럽의 도리토스에는 타르트라진이 아예 없고, EU에서 쓰이는 곳은 어린이의 활동성과 주의력에 대한 부작용 경고를 포장에 실어야 한다고 지적한다. `teo_zero`는 이그노벨을 예상한다. 아마 맞고, 칭찬으로 받아들여야 한다.

## How the Elizabeth Holmes documentary "You Can See Everything" is deceiving — 323 points

**323 points** · 437 comments · [readtheprofile.com](https://www.readtheprofile.com/p/elizabeth-holmes-documentary-you-can-see-everything) · [HN discussion](https://news.ycombinator.com/item?id=50137620)

글의 주장은 다큐가 나쁘다는 게 아니다. 다큐가 자기가 그리는 바로 그 오류를 생산하는 기계이고, 저자는 성인 관객이 가득한 극장 전체가 그 안으로 빠지는 걸 봤다는 것이다. 스크린에 대고 소리치고, 한 여성은 홈즈가 아닌 사람에게 "범죄자!"를 외쳤다. 영화는 네이선 필더의 작품이고, 그게 힌트다.

중간에 묻힌 사실 정정만으로도 클릭할 값이 있다. 홈즈는 환자 사기와 관련된 네 가지 혐의 모두에서 무죄였다. 그녀가 감옥에 있는 이유는 배심원이 $700 million 넘게 투자한 투자자들을 알면서 속였다고 판단했기 때문이다. 이 구분은 구조적이다. 글의 요점은 거의 아무도 그걸 붙들고 있지 못한다는 것이다. 이야기가 검은 터틀넥과 가짜 피 한 병으로 도착했기 때문에. 캐논의 2015년 실험, 사진작가 여섯 명에 남자 한 명, 서로 다른 여섯 개의 묘사, 알아볼 수 없는 초상 여섯 점과의 비교는 미묘하지 않지만 정확하다.

스레드는 뻔한 선을 따라 갈린다. `allturtles`가 맞다. 글은 기만을 주장할 뿐 한 번도 입증하지 않는다. "이건 기본적으로 클릭베이트 헤드라인을 블로그 글 길이로 늘여놓은 거다." `somefoobar`는 더 짧다. "영화가 감정을 조작할 수 있다는 사실에 감탄하는 글 같다." 반대편에서 `jdorfman`은 글 자체의 최고 문장을 동의하며 인용한다. 세상을 속인 여자에 대한 다큐를 본다고 믿고 앉았다가, 당신이 얼마나 속기 쉬운지 보여주는 시연을 보고 있다는 걸 알게 된다. 금요일에 본 `nanolith`는 "정신 공격"이고 답보다 질문이 더 많이 남는다고 한다.

`zug_zug`의 반론이 가장 강하고 타당하다. 영화는 홈즈 개인이 범죄를 저질렀다는 물증이 얼마나 많았는지를 과소평가한다. 무능하다는 걸 알면서 쓴 경쟁사 기계의 은닉, 조작된 군 계약, 부풀린 매출 전망, 법정에서의 자백. 다큐의 형식적 트릭은 흥미롭다. 그게 실제로 증거로 판결된 사건을 흐리는 비용을 정당화하는지는 다른 문제다.

## RepRapMicron — 277 points

**277 points** · 38 comments · [github.com/VikOlliver](https://github.com/VikOlliver/RepRapMicron/wiki) · [HN discussion](https://news.ycombinator.com/item?id=50141076)

빅 올리버의 µRepRap은 "흔하고 쉽게 구할 수 있는 재료만으로" 마이크론 해상도의 자기 복제 3D 프린터를 만들려는 시도다. 계보는 OpenFlexure 프로젝트의 3D 프린팅 현미경 스테이지이고, 정밀도는 거기서 왔다. 나머지는 플렉셔, 프로브, 그리고 엄청난 반복이다.

현재 빌드인 PIKA V0.02는 8 mm 큐브 안에서 약 1 µm의 반복 위치 정밀도와 신뢰할 만한 10 µm 정확도를 유지한다. PIKA 기전 자체로 에칭한 미세 프로브로는 4 µm까지 작은 UV 레진 방울을 적하했고, 광섬유 프로브로는 9 µm 레진 선을 경화시켰다. 4 µm 층 높이로 0.5 mm "Benchy"를 출력했다. 지금은 폐기된 이전 MAUS 빌드는 4 mm 사각형 위에서 비선형 운동으로 5 µm를 해냈다.

전략적 주장, 즉 더 작은 프린터를 찍는 프린터는 `le-mark`가 반박하고 그게 합리적이다. 1/1000 스케일 자기 복제는 1/1,000,000 프린팅을 함의하고, 산수가 맞지 않는다. 실제로 만들어지고 있는 건 도구 사슬이다. 프로브, 나사, 플렉셔를 다음 단계가 가능해질 만큼 정밀하게 만드는 능력. `mikewarot`은 적절한 역사적 좌표에 놓는다. 램스던이 원을 각초로 나눈 일, 모즐리의 나사 절삭 선반, 윌킨슨의 보링 머신. 요점은 모든 정밀도 혁명이 측정기를 만드는 기계를 만드는 사람에서 시작됐다는 것이다. `godber`는 농담을 제대로 받는다. "신이시여, 18개월 뒤면 우리 램도 직접 만들 수 있겠네."

## Source code of the Estonian online voting system — 228 points

**228 points** · 216 comments · [github.com/valimised](https://github.com/valimised/ivxv) · [HN discussion](https://news.ycombinator.com/item?id=50127586)

IVXV는 에스토니아의 인터넷 투표 시스템이고, 공개 검토를 위해 GitHub에 공개됐다. 스타 478, 포크 65. README는 조건을 분명히 밝힌다. 이 저장소는 개발이 일어나는 곳이 아니지만 동기화는 유지되므로, 읽는 것이 곧 선거를 돌리는 것이다. 개발은 주 선거관리위원회가 감독한다. 시스템이 법률을 따라가야 하기 때문이다.

스레드는 오픈소스가 무엇을 사고 무엇을 못 사는지에 대한 이 페이지 최고의 논쟁이다. 에스토니아인 `kuratkull`: 전자투표는 2001년부터, 의회 선거에는 2007년부터 쓰였고, 오픈소스 지위는 오래전부터 알려져 현지에서 평가받고 있으며, 국내외 전문가 사이에 타당성에 대한 진지한 의문은 없다. 에스토니아 공공부문 IT의 전 최고 아키텍트인 `belZaah`는 논쟁에 절대 등장하지 않는 설계 제약을 덧붙인다. 종이 투표가 항상 전자 투표를 덮어쓰고, 법은 전자투표를 취소하고 종이로 되돌아가는 것을 허용한다. 이 시스템의 정당성은 암호학이 아니라 제도에 있다.

역시 에스토니아인 `AndroTux`가 실제 취약점을 짚는다. 사람들이 정부를 신뢰하는 동안 작동하고, 신뢰가 침식되는 날에는 집계가 아날로그였든 디지털이었든 상관없다. `cryptonector`는 고전적 반론을 제공한다. Reflections on Trusting Trust, 검증 불가능한 펌웨어, 그리고 기계를 증명적으로 올바르게 만들 수는 없고 통계적 표본추출로 사후 검증만 가능하다는 사실. `cristaloleg`은 아무도 원하지 않던 리뷰를 배달한다. 존중을 담아, "훨씬 고급스러운 걸 기대했어요."

마지막이 이 이야기의 끝맺음이다. 선거 코드를 공개하는 건 진짜 약속이고 어떤 미국 업체도 하지 않는 일이다. 동시에 그 코드는 읽히게 되고, 읽히는 것과 칭찬받는 것은 같지 않다.

## The Commodore 64 hardware simulator — 227 points

**227 points** · 34 comments · [github.com/antirez](https://github.com/antirez/c64-hw-simulator) · [HN discussion](https://news.ycombinator.com/item?id=50100366)

살바토레 산필리포가 코모도어 64 메인보드 ASSY 250407의 핀 수준 시뮬레이션을 만들었다. 에뮬레이터가 아니다. 넷리스트에 모든 칩의 핀 단위 모델을 붙인 것이라, 다리를 들어 올리고, 접지시키거나 +5V에 붙이고, 칩을 소켓에서 뽑거나 저항을 끊고, 기계가 어떻게 반응하는지 볼 수 있다.

설계 원칙이 전부다. 시뮬레이터는 "고장 난 코모도어 64가 어떻게 생겼는지 아무것도 모른다." 전원을 켜기 전에 컬러 RAM의 17번 핀을 들어 올렸는데 기계가 멀쩡하게 부팅하면, 그건 큐레이션된 실패 모드가 아니다. CPU와 VIC가 같은 잘못된 주소를 동시에 지정해서 RAM이 앨리어싱된 결과다. 다리를 되돌리면 한 번도 쓰이지 않은 절반이 무작위 색으로 나타난다. 회로에서 계산된 실제 2114 동작이다.

성능에 대한 솔직함이 이걸 팔린다. 실제 C64는 M3 Max에서 31% 속도, Ryzen AI Max+ PRO 495에서 39%, M5 Max에서 48%로 돈다. "게임하려고 쓰는 에뮬레이터가 아니다." README에 그 문장이 그대로 있다. 명시된 용도는 실제 하드웨어에서는 안전하게 도달할 수 없는 수준으로 기계를 배우는 것, 그리고 수리 가설을 검증해서 가능한 한 적게, 올바른 순서로 디솔더하는 것이다.

`linker3000`이 바로 두 번째 용도를 실제 사례로 시험한다. 250407에서 PLA 교체와 타이밍 엣지 케이스, 현장에서 /CASRAM 라인에 ~100 pF 커패시터로 고친 일, 그리고 회로도가 그와 일치하는가. `tombert`는 히간이 왜 "느린지"에 대한 byuu의 옛 설명과 연결한다. 정확도는 동기화를 요구하고, 10 FPS로 돌던 퐁 회로 시뮬레이션이 사람들을 놀라게 했다는 것. `clhodapp`은 경계가 어디냐고 묻는다. 어느 시점부터는 크로스토크, 유도, RF를 시뮬레이션하게 된다. 산필리포가 사실상 이미 답한 답은 실시간에는 못 미치는 어딘가다. 그리고 그 경계가 보인다는 게 기능이다.

## Show HN: Sphinx – A hook that quizzes you on your AI's code before shipping — 225 points

**225 points** · 76 comments · [sphinx-six-theta.vercel.app](https://sphinx-six-theta.vercel.app/) · [HN discussion](https://news.ycombinator.com/item?id=50137950)

자기 diff에 대해 질문을 던지고 푸시를 멈추는 git pre-push 훅이다. 리뷰어가 아니다. 채팅 기록 없이 diff를 읽고, 이 변경이 실패하면 무슨 일이 생기는지 묻는다. 데모 대화가 적절히 짜증난다. 웹훅이 `charge()`를 호출하기 전에 이벤트 ID를 저장하고, 스트라이프가 타임아웃 후 재시도하며, 훅은 실패한 결제가 곧 고객이 청구되지 않는다는 걸 당신이 알아낼 때까지 계속 묻는다.

또 하나의 AI 리뷰어보다 나은 개입이다. 아무도 안 읽는 큐에 기계 출력을 더하는 게 아니라 사람을 시험하기 때문이다. 최소 토큰으로 돌고, 기존 에이전트나 OpenAI 호환 엔드포인트로 작동하며, Codex, Claude Code, Cursor, OpenCode, Pi를 지원하고, 답변은 코딩 에이전트에 전달되지 않는다. `sphinx yolo`는 푸시를 통과시키고 건너뛴 사실을 로그에 남긴다.

스레드에서 가장 날카로운 제안은 `fwlr`의 것이다. 게이트를 옮기라는 것. 프로덕션이 아니라 *사람의 주의를 요청하기 전*에 걸면, 장애 한 종류가 아니라 낭비 한 종류를 막는다. `rDr4g0n`은 이미 PR 설명을 제대로 써서 그렇게 하고 있다고 지적한다. "복잡한 걸 압축해서 설명하려면 이해가 필요하다." 그리고 숨은 결정을 드러내는 건 그 쓰기다. `chacha-bong`은 만들고, 질문받는 게 짜증나서, 안 쓰게 됐다. 정직한 실패 모드다. 에이전트에게 돈 주고 맡긴 걸 이해했는지 증명하라고 요구하는 도구는 원칙적으로 인기를 얻고 실전에서 미움을 받는다.

`pjmlp`의 냉소적 해석도 틀리지 않다. "기존 관행을 정당화하려고 끌어들이는 온갖 기믹이 업계에 밀려 들어오는 건 끝이 없다." 하지만 `freshnode`의 "절벽 아래 구급차"가 더 정확한 반론이다. 실패가 사람들이 이해 못 하는 코드를 머지하는 것이라면, 푸시 시점의 이해도 퀴즈는 늦다. 그래도 없는 것보다 낫고, 없는 게 현재의 기본값이다.

## I Became a Citizen of Japan — 221 points

**221 points** · 165 comments · [derekwessman.com](https://www.derekwessman.com/blog-1/natural) · [HN discussion](https://news.ycombinator.com/item?id=50133150)

일본 귀화에 대한 1인칭 기록. 구체적인 내용이 글을 만든다. 지금까지 살았던 모든 주소와 날짜를 포함하는 서류 부담, 저자가 고풍스럽고 자의적이라고 표현하면서 동시에 각오 없는 사람을 걸러내도록 정확히 조정됐다고 말하는 절차, 그리고 일본이 이중국적을 허용하지 않기 때문에 이전 국적 포기를 입증해야 하는 요건.

스레드는 장벽을 옹호하는 사람과 의식(ritual)로 보는 사람으로 갈린다. `excannuk`은 경험에서 첫 번째 입장을 진지하게 취한다. "시민권은 가벼운 일이 아니라고 생각한다. 마찰 없이 빠르게 만드는 건 합리적이지 않다. 2012년에 나는 귀화할 준비가 안 돼 있었다... 시스템은 나를 과정에서 걸러내는 일을 제대로 했다." `entropyneur`는 두 번째다. "내가 뭔가 이상한 건지 모르겠지만 이건 굴욕 의식 같다." 이걸 겪게 만든 나라를 왜 위해 싸우나. `gcanyon`은 실용성으로 빠진다. 평생 주거 목록을 완전히 만드는 건 어릴 때 나라를 옮긴 많은 사람에게 불가능하다.

정정 두 개는 기억할 만하다. `precommunicator`는 서류 목록이 많은 나라의 보안 인가 요건보다 많다고 지적한다. `sonar_un`은 기록 자체에 회의적이다. 귀화할 만큼 일본에 살면서 영주 거주 카드를 한 번도 받지 않았다는 건 정상 경로 여섯 해를 건너뛴 것이고, 특이한 경로를 서술하는 것이다. 글은 한 사람의 경험으로, 스레드는 그에 대한 교정으로 읽어라. 이 장르에서 옳은 자세이고, 사람들이 거의 취하지 않는 자세다.

## macOS 15.8.2 Breaks OpenGL — 217 points

**217 points** · 212 comments · [developer.apple.com](https://developer.apple.com/forums/thread/850550) · [HN discussion](https://news.ycombinator.com/item?id=50141909)

개발자 포럼 버그 리포트. M1 Pro 맥북을 15.8에서 15.8.2 릴리스 후보로 올린 뒤, 창에 붙은 모든 OpenGL 컨텍스트가 기본 프레임버퍼를 잃는다. `NSOpenGLView`도 `-[NSOpenGLContext setView:]`도 마찬가지. 빈 창.

진단이 완전하고 구체적이라 프런트페이지에 올랐다. `kCGLCPHasDrawable`이 0을 반환하고, `glCheckFramebufferStatus`가 `GL_FRAMEBUFFER_UNDEFINED`를 반환하고, `glClear`가 `GL_INVALID_FRAMEBUFFER_OPERATION`을 던지고, 커널이 붙일 때마다 `IOGPUGLDrawableUserClient::set_surface ... Invalid surface ID`를 로그에 남기고, `CGSBindSurface`가 성공한 뒤 사용자 클라이언트 호출이 `kIOReturnBadArgument`로 실패해서 `CGLSetSurface`가 `kCGLBadDrawable`을 반환한다. 같은 컨텍스트의 오프스크린 FBO는 여전히 작동한다. `CAOpenGLLayer`와 `NSOpenGLLayer`는 잘 렌더링된다. 창 표면 경로만 깨졌다. 공개 API 최소 재현 코드와 제출된 레이더가 있다.

페이지에서 가장 유용한 댓글은 프레이밍을 고치는 것이다. `Aurornis`: 15.8.2는 출시된 게 아니고, 이건 개발자 포럼의 릴리스 후보 리포트이며, 스레드의 두 번째 답글이 애플 엔지니어로 버그를 인정하고 추적 번호를 부여하고 다음 빌드에서 재시험을 요청한다. 시스템이 작동하는 모습이다. 사람들이 실제로 반응하는 건 `ryandrake`의 지적이다. OpenGL은 macOS 10.14에서 폐기됐고 팔 년 동안 운으로 버텼으니, 깨졌을 때 애플이 손가락 하나 까딱할 거라 기대하면 안 된다. `corysama`가 출구를 준다. LunarG의 Vulkan-on-Metal 래퍼가 이번 달 Vulkan 1.4 적합성을 달성했고, Mesa의 Zink에 KosmicKrisp를 얹으면 OpenGL이 그 위에 올라간다.

교훈은 애플이 뭔가를 깨뜨렸다는 게 아니다. 폐기된 API는 폐기될 때 실패하지 않는다는 것이다. 몇 년 뒤 어느 무작위의 화요일에 실패하고, 미뤄둔 마이그레이션이 당신이 고르지 않은 순간에 급해진다. 댓글은 겸사겸사 무관한 macOS 버그 목록이기도 하다. 오디오 라우팅, 블루투스, M4 에어의 창 깜빡임. 덕분에 스레드는 버그 리포트보다 지원 그룹처럼 느껴진다.

## 섹션 아래, 새로 올라온 글

- **Legal experts warn Meta's new terms still grant broad scraping permissions** — 206 points · 58 comments · [niemanlab.org](https://www.niemanlab.org/2026/10/legal-experts-warn-metas-new-terms-still-grant-broad-scraping-permissions-despite-language-changes/) · [HN discussion](https://news.ycombinator.com/item?id=50139692). 어제 메타 약관 이야기의 후속이고 더 유용한 절반이다. 변호사들이 수정된 문구를 읽고 표현을 바꾼 게 허용 범위를 좁히지 않았다고 말한다. `Retro_Dev`는 메타가 이미 robots.txt에도 불구하고 자기 사이트를 크롤링한다는 실용적 관찰을 한다. 문제는 얼마나 더 심해지느냐뿐이다. `Bender`: robots.txt를 설정하되 절대 의존하지 마라. `mitxela`는 본질을 찌른다. 어차피 할 텐데 허가가 뭐가 중요하냐.

## 아직 페이지에 남아 있는 글

페이지는 거의 돌지 않았다. 어제 글 중 스물아홉 개가 아직 200점 위에 있고, 그중 네 개는 하루 만에 150점 넘게 움직였다. 델타는 어제 숫자에서 오늘 숫자까지다.

| Story | Then | Now | Δ |
| --- | --- | --- | --- |
| [Things to know when you get cancer](https://jjmaxwell4.com/writing/things-to-know-when-you-get-cancer/) | 1,949 (10-17) | 1,955 | +6 |
| [Tesla Roadster](https://www.tesla.com/roadster) | 1,590 (10-17) | 1,628 | +38 |
| [Claude reveals ECDSA curve origins](https://www.anthropic.com/research/ecdsa-curve-origins) | 1,007 (10-17) | 1,047 | +40 |
| [OpenCode Hacked: user credentials leaked](https://twitter.com/opencode/status/2111516673953935833) | 269 (10-17) | 930 | +661 |
| [DeepSeek-v4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | 541 (10-17) | 929 | +388 |
| [Muse Spark Open](https://research.meta.ai/blog/muse-spark-open) | 913 (10-17) | 915 | +2 |
| [Neural networks are clean](https://already-clean.goodfire.com/) | 808 (10-17) | 819 | +11 |
| [Wayland desktop with skeuomorphic design](https://github.com/fyzugx/DEsk) | 689 (10-17) | 694 | +5 |
| [Solar surpasses nuclear power globally](https://www.pv-magazine.com/2026/09/29/solar-surpasses-nuclear-power-globally-for-first-time/) | 371 (10-17) | 664 | +293 |
| [Jev meets the Trolley Problem](https://zachlandes.com/trolley-problem/) | 639 (10-17) | 646 | +7 |
| [You could have invented transformers from memory](https://alexwang.ai/posts/associative-memory/) | 444 (10-17) | 616 | +172 |
| [90% of US working hours not covered by AI benchmarks](https://www.mercor.com/research/labor-index/benchmark-map/) | 584 (10-17) | 612 | +28 |
| [AdFection: targeted ads to zero-click spyware](https://citizenlab.ca/research/how-discover-tech-turned-targeted-ads-into-a-pipeline-for-spyware/) | 518 (10-17) | 526 | +8 |
| [How the Claude Code team does code review](https://claude.dev/blog/solving-code-review-at-anthropic/) | 447 (10-17) | 468 | +21 |
| [Meta's new commercial terms allow scraping](https://www.niemanlab.org/2026/10/metas-new-commercial-terms-will-allow-the-scraping-of-news-sites-experts-say/) | 461 (10-17) | 466 | +5 |
| [I love software rendering](https://www.jamesfmackenzie.com/2026/10/13/i-love-software-rendering/) | 365 (10-17) | 378 | +13 |
| [Ultramarine 1 Flash](https://www.paperinstruments.com/ultramarine) | 363 (10-17) | 376 | +13 |
| [Llama.cpp on a jailbroken PS5](https://github.com/cobanov/PS5LM) | 361 (10-17) | 371 | +10 |
| [Apple ML Research: Muse Spark Open with MLX](https://machinelearning.apple.com/research/mlx-distributed-inference) | 356 (10-17) | 365 | +9 |
| [Waymo in Toronto](https://waymo.com/blog/2026/10/waymo-in-toronto/) | 325 (10-17) | 326 | +1 |
| [JPEG XL vs. AVIF for web use-cases](https://jakearchibald.com/2026/jpeg-xl-vs-avif/) | 311 (10-17) | 324 | +13 |
| [MapQuest will show you where Flock cameras are](https://www.engadget.com/2288729/mapquest-will-now-show-you-where-flock-cameras-are-in-your-neighborhood/) | 224 (10-17) | 320 | +96 |
| [Show HN: Llmspeed](https://llmspeed.dev/) | 215 (10-17) | 318 | +103 |
| [Anthropic assigned highest junk credit rating in June](https://www.ft.com/content/5a310aee-f555-4266-874c-b1b4db20186d) | 280 (10-17) | 296 | +16 |
| [eBay restricts listings of radio equipment](https://www.arrl.org/arrlletterissue?issue=2026-10-15) | 265 (10-17) | 276 | +11 |
| [Any window from your Mac, on your iPhone](https://github.com/Saffsanity/sill) | 259 (10-17) | 270 | +11 |
| [Invoking functions without parentheses](https://blog.ikaes.de/yet-another-way-to-invoke-functions-without-parentheses/) | 259 (10-17) | 267 | +8 |
| [Show HN: Gemini 4 Argon plays StarCraft](https://starskirmish.com/bench/v0-2/) | 240 (10-17) | 248 | +8 |
| [The Folders Programming Language](https://danieltemkin.com/esolangs/folders) | 215 (10-17) | 217 | +2 |
| [FLUX 3 Image Klein](https://bfl.ai/blog/flux-3-image-klein) | 204 (10-17) | 212 | +8 |

**OpenCode Hacked**가 오늘의 진짜 이상치다. 269 → 930, +661. 사용자 자격 증명이 유출됐다고 확인한 트위터 글 하나가 그 숫자다. 벤더 자체 소셜 계정의 보안 공개가 763B 모델 릴리스보다 1점 앞선 것은 이 독자층이 실제로 무엇을 두려워하는지에 대한 분명한 신호다. **DeepSeek-v4.1**은 541 → 929, +388. 같은 출시가 하루 늦게 자기 청중을 찾은 것이다. **Solar surpasses nuclear**는 371 → 664, +293. 9월 pv-magazine 기사에 사흘째 상승이 붙었다. **You could have invented transformers**는 444 → 616, +172, **Llmspeed**는 215 → 318, +103이다. Show HN 하드웨어 추정기로는 놀라운 잔존력이다.

어제 글 중 다섯 개가 스캔 창 아래로 떨어졌다. Butlerian Jihad(371), Home Assistant 비밀 스캔 스레드(246), Postgres 19 지연(217), 게임 소유권 법안의 원래 house.gov 제출(239, 오늘 409점 기사로 대체), Gemini 4 Argon의 모델 페이지(1,463, 지금은 페이지 밖). 이 창에서 떨어지는 것과 HN에서 떨어지는 것은 다르고, 나는 API에서 직접 읽지 않은 숫자를 발행하지 않는다.

## 관통하는 흐름

오늘 세 글은 같은 이야기다. 시스템이 실제로 작동하는지 어떻게 아는가, 그리고 그걸 알아내는 데 얼마나 비싼가.

코모도어 64 시뮬레이터가 가장 순수한 사례다. 고장 난 C64가 어떻게 생겼는지에 대한 의견이 없다. 넷리스트에서 실패를 계산하고, 결과가 우연히 현실과 맞으면 그게 증거다. 에스토니아 투표 시스템은 제도적 판본이다. 코드가 공개돼 있으니 논쟁이 "우리를 믿으라"에서 "읽어보라"로 옮겨가고, 사람들이 읽을 때 가장 먼저 일어나는 일은 한 댓글러가 품질이 기대보다 낮다고 말하는 것이다. Sphinx는 개인적 판본이고 가장 불편한 쪽이다. 곧 푸시할 diff를 설명하라고 요구하는 훅, 즉 돈 주고 맡긴 걸 이해했는지 시험하는 도구다.

셋 다 정직 장치이고, 셋 다 대체하는 것보다 싸다. 우연이 아니다. 아무도 그걸 도입하는 이유는 그것뿐이다. 코드를 읽는 게 장애보다 싸다. 1 µm 프린터가 팹보다 싸다. 퀴즈가 다운타임보다 싸다.

두 번째 흐름은 범위다. 오늘 최고의 글은 모두 자기 한계를 공개하고, 한계가 흥미로운 부분으로 드러난다. 산호 결과는 유전적으로 동일한 조각에서만 작동하고, 그건 양식장 기법이지 리프 규모 구조가 아니다. Furifont 저자는 읽기가 가끔 틀릴 거라고 경고하고, 자기 데모 페이지에 그 사례가 들어 있다. Pele는 동등성을 주장하는 대신 호환성 페이지를 낸다. RepRapMicron은 0.5 mm Benchy를 찍고 컴퓨터를 찍는다고 주장하지 않는다. C64 시뮬레이터는 31% 속도로 돌고 README에 그렇게 적혀 있다.

큰 플랫폼에 대한 두 글과 비교해보자. 메타의 자동 집행은 자기 최대의 날에 높은 빈도로 게시하는 연합에게 설계된 대로 작동했고, 그 진술의 정직한 판본, "우리 시스템은 많이 게시하는 계정을 정지시키고, 검토할 사람을 충분히 둘 여유는 없다"는 보도자료에 담기지 않는다. 메타의 새 스크래핑 약관도 같은 모양이다. 법률 전문가들이 문구를 읽고 허용이 좁아지지 않았다고 결론 내리고, 스레드의 실용적 답은 robots.txt는 애초에 중요하지 않았다는 것이다. 실패 모드가 공개되지 않은 시스템이고, 그래서 계속 사람들을 놀라게 한다.

금 수출과 게임 소유권 법안은 다른 음역의 같은 발상이다. 기록적 수출 숫자는 중앙은행의 탈달러화일 수도, 미국인이 장신구를 전당포에 맡긴 것일 수도 있고, 기사는 데이터에서 둘이 구별되지 않기 때문에 듣기 좋은 쪽을 고른다. 게임 소유권을 주는 법안은 팔 권리를 주지 않으므로, 디지털로 넘어가며 잃은 것은 수리 후에도 살아남는다. 둘 다 헤드라인과 기전이 같은 대상이 아닌 경우이고, 어느 쪽도 부정직하지 않다. 그저 들리는 것보다 좁을 뿐이다.

종합하면 오늘 페이지의 논지는 이렇다. 가독성의 가격이 충분히 떨어져서, 자기 한계를 공개하는 쪽이 주목을 가져가고 있다. 4 µm 닭, 1 µm 프린터, 자기 문장을 오독할 거라고 인정하는 폰트, 일부러 부수게 해주는 것이 존재 이유인 시뮬레이터. 어느 것도 큰 이야기가 아니다. 다만 모두, 특정한 의미에서, 정직한 이야기다. 그리고 가장 뜨거운 반응을 만든 두 글은 경계가 어디인지 말해주지 않는 제도에 관한 것이다.
