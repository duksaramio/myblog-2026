---
title: "해커뉴스 프런트페이지 라운드업 — 2026년 10월 15일"
pubDate: 2026-10-15
description: "200포인트를 넘긴 글이 54개, 그중 26개가 새 글이다. 오늘 페이지는 두 가지를 논한다 — 누가 그 추천으로 돈을 버는가, 그리고 당신이 읽고 있는 이 글을 실제로 누가 썼는가."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
lang: "ko"
---

오늘 top-180 창에서 200포인트를 넘긴 글은 54개, 그중 26개가 새 글이다. 이틀 연속으로 물량이 터진 셈인데, 새 재료가 고르게 퍼져 있지는 않다. 두 더미로 몰린다.

첫 번째 더미는 의료이고, 페이지 맨 위에 있다. 개인 암 투병 목록 글이 1,830포인트로 오늘 최고점이고, 치과 회고담이 940으로 2위다. 그 아래로는 미국의 사회 생활이 붕괴했다는 설문과, 중년 남성 자살률이 최고치라는 ONS 발표가 있다. 상위 여섯 개 중 네 개가 환자로 산다는 것에 관한 글이고, 이들은 서로 다른 방향에서 같은 결론에 도달한다. 치료를 권하는 사람이 보통 그 돈을 받는 사람이라는 것.

두 번째 더미는 출처다. Anthropic 엔지니어링 글을 Meta의 데이터 모델을 베꼈다고 고발하는 글, 벤치마크 섹션이 비어 있거나 이미지로만 공개된 모델 릴리스 두 건, 경쟁사 장애를 자사가 직접 측정한 글. 그리고 웨이랜드 데스크톱, 브라우저 오피스 스위트, 등산용 부동산 사이트 — 저자들이, 일부는 걸린 뒤에야, 문장이 생성된 것이라고 인정한 프로젝트들. 오늘 댓글창은 글을 평가하는 데보다 그 글을 누가 썼는지 확정하는 데 더 많은 노력을 썼다. 이게 주 업무가 되어가고 있다.

## 암에 걸렸을 때 알아야 할 것들 — 1,830 points

**1,830 points** · 435 comments · [jjmaxwell4.com](https://jjmaxwell4.com/writing/things-to-know-when-you-get-cancer/) · [HN discussion](https://news.ycombinator.com/item?id=50093568)

글을 쓴 사람이 직접 올리기도 했다는 건 짚고 넘어갈 만하다. 2026년 5월 입안에 편평세포암 진단을 받은 남자가 1인칭으로 쓴 목록형 글이고, 오늘 해커뉴스에서 가장 높은 점수를 받았다. 조언은 실용적이고 구체적이다. 취소 자리가 나면 다시 전화할 것 — 그는 그렇게 해서 이비인후과 예약을 4주 앞당겼다. 비전문가로 등록해서 NCCN 표준 치료 흐름도를 직접 읽을 것. 외과의에게 연간 수술 건수와 합병증 비율을 물을 것. 큰 병원에서 "어느 정도 확신이 들면 바로" 2차 소견을 받을 것. 약속했던 유전자 패널 검사는 몇 달씩 밀렸는데, 첫 검체를 생검 종양이 아니라 수술로 떼어낸 종양으로 돌린 탓이었다. 환자가 서류를 계속 챙기지 않으면 절대 잡아내지 못하는 종류의 실수다.

이 글에서 목록 형식이 인정하는 것보다 더 흥미로운 대목이 둘 있다. 첫째는 LLM의 실패다. 그는 진단을 기다리는 동안 모델을 썼는데, 모델들이 자꾸 "당신은 암이 아니다" 쪽으로 밀어붙였다고 말한다. 이건 이미 기록된 실패 유형이다 — 안심시키도록 훈련된 모델을, 안심시키는 것이 곧 실패인 질문에 갖다 붙인 것 — 그리고 이제는 암 투병기가 으레 꺼내는 얘기가 됐다. 둘째는 구조에 대한 주장인데, 댓글들이 기사보다 이걸 더 잘 정리한다. `alexpotato`가 유인 구조를 풀어놓는다. 병원은 하나의 주체가 아니고, 사례관리자는 퇴원을 최적화하고, 외과의는 당신이 병원 밖으로 나가길 바라고, 병원내과의는 상태를 안정시키고 다음 사람에게 넘긴다. 병원 안에서 당신의 케이스를 처음부터 끝까지 책임지고 돌리는 데 돈을 받는 사람은 아무도 없다. 그래서 프로젝트 매니저는 당신이다.

이 스레드에서 가장 강한 증거는 본문에 없다. `stochastician`은 자기 어머니가 아이다호에서 1기로 진단받고, 2차 소견을 받으러 Dana-Farber에 갔더니 병리 재판독에서 4기로 나왔고, 치료를 바꾼 뒤 15년을 더 살았다고 전한다. `exhilaration`은 10개월 동안 진단을 못 받았다. `INTPenis`는 북유럽의 반례를 내놓는다 — 종양병동으로 바로 연결되는 직통 전화, 청구서 없음 — 그러면 "스스로 목소리를 내라"는 이 장르 전체가 의학에 대한 설명이 아니라 미국 시스템에 대한 설명이 된다. 4기 환자인 `JackFr`는 이 장르가 끝내 답하지 않는 질문을 던진다. 댓글에 붙은 그 공포담들이 역선택(adverse selection)이 아닌지 말이다. 여기 있는 건 전부 n=1이고, 이 글은 진단 당시 병기도, 결과도, 비용도 밝히지 않는다.

## 치과의사들은 자기들이 뭘 하는지 알고 있나? — 940 points

**940 points** · 674 comments · [mapwriting.substack.com](https://mapwriting.substack.com/p/dentists) · [HN discussion](https://news.ycombinator.com/item?id=50050553)

오늘 두 번째로 큰 글은 치과에 관한 Substack 회고담인데, 취재 기사는 아니다. Parker Tatum은 점점 커지는 인용문들을 순서대로 늘어놓는다. 17세, 0.1밀리미터 단위로 어긋난 교합을 고치는 "치아 재성형" — 그의 말로는 턱이 더 나빠졌다. 22세, 검진에서 깨끗하다는 소리를 듣고 2년 뒤 **충치 12개**를 찾아내고는 스플린트를 끼면 이가 빠진다고 말하는 치과의사. 같은 의사가 **충치 15개**를 찾아내고 너무 깊게 드릴을 댔다고 주장하는 직장 동료. 250달러짜리 나이트 가드. **10만~15만 달러에 9개월**을 부른 턱 수술 vs 6개월 인비절라인을 제안하는 스트립몰 교정과. 대략 **1만 달러**짜리 잇몸 이식. 이 글 전체에서 검증 가능한 유일한 주장 — 어떤 치과가 별점 정확히 5점짜리 리뷰 200개쯤을 갖고 있고 5점 리뷰에는 할인을 준다는 것 — 은 남에게 들은 얘기다.

댓글들이 채워주는 건 메커니즘이고, 이 이야기가 중요한 이유가 바로 거기 있다. `tkdb`가 핵심 논거를 세운다. 미국에서는 시술을 권하는 사람이 대개 그 병원 주인이라 마진을 자기 주머니에 넣는 반면, 월급받는 의사는 과잉진료를 할 재정적 이유가 없다는 것이다. `rickdeckard`는 일일 생산 목표를 걸어놓은 사모펀드 소유 치과 지원 조직을 제도적 동력으로 지목한다. `beloch`는 책임 공백을 덧붙인다 — 치과 협회가 실질적으로 회원 간 비판을 막아서, 좋은 치과의사도 자기 자리를 걸지 않고는 동료의 나쁜 시술을 지적할 수 없다. 그리고 `bityard`가 이 논지를 한 줄로 압축한다. 전문직은 조언자지 권위자가 아니다.

기사가 인용하지 않은 근거 자료는 스레드에 있다. `myaccount80`과 `cfn`은 둘 다 스위스의 신뢰재(credence goods) 현장 실험을 꺼낸다. 환자 한 명, 취리히의 치과의사 180명, 진단은 천차만별 — 그리고 같은 환자가 더 초라하게 차려입었을 때 더 많은 시술을 처방받았다. `gregwebs`와 Chris Cardinal은 1997년 리더스 다이제스트 실험을 가져온다. 입 하나를 50개 주의 치과의사 50명에게 보여줬더니 견적이 **460달러에서 29,850달러**까지 나왔다. `donatj`는 충치 14개를 때우고 크라운 3개를 씌워야 한다는 말을 듣고 2차 소견을 받았더니 필요한 건 충전 하나였다. 그 후 15년 동안 생긴 충치는 3개 정도다. 이건 30년 동안 반복해서 측정돼 온 유인 구조에 대한 이야기인데, 프런트페이지에 올라오는 데는 개인 에세이 한 편이 필요했다.

## OpenCode 2.0 — 837 points

**837 points** · 358 comments · [anoma.ly](https://anoma.ly/notes/opencode-2-0/) · [HN discussion](https://news.ycombinator.com/item?id=50094994)

오늘 가장 높은 점수를 받은 신규 소프트웨어 릴리스는 AI 코딩 에이전트인데, 기능 목록보다 계보가 더 중요하다. 원래 Go로 짜인 `opencode-ai/opencode`는 Charm에 인수돼 Crush가 됐다. Dax(`thdxr`)가 그걸 포크해 TypeScript 하네스로 만들었고, 그 저장소는 나중에 `sst` 조직에서 `anomalyco`로 옮겼다. 그러니까 이건 이미 한 번 인수됐던 프로젝트의 포크이고, MIT 라이선스로 ANOMALY INNOVATIONS가 내놓았으며, 개인 필자 표기 없이 1인칭 업체 문구로 발표됐다. 그리고 글을 올린 사람은 이 프로젝트와 눈에 띄는 연고가 없다.

2.0의 변경은 실제이고 대부분 구조적이다. 기본값으로 켜지는 상주 백그라운드 데몬(TUI, 웹, 데스크톱이 모두 여기에 붙는다), 다시 쓴 서버 API, 새 클라이언트와 SDK 패키지, 코드 모드를 위한 "최소 JavaScript 인터프리터", 코드 모드 MCP, 백그라운드 서브에이전트와 셸, 그리고 80개가 넘는 내부 플러그인. 1.0 플러그인을 깨뜨리고 설정 파일 이름을 바꾸기도 하는데, 댓글에 등장하는 건 바로 그 부분이다.

이 스레드는 업체의 '매끈한 제품' 서사에 대한 괜찮은 스트레스 테스트다. `denysvitali`는 `curl | sh` 설치 프로그램이 10%에 도달하는 데 6분이 걸렸다고 전한다 — 진행 표시줄 렌더링 문제이고 `cat`을 거쳐 파이프하면 해결된다. `egorfine`은 2.0이 "존재하지 않는다"고, `npm i -g @opencode/cli@latest`로는 설치되지 않는다고 주장한다. `moralestapia`는 두 배 가까운 과금과 디스코드에서 무시당한 일을 주장한다. 관리자들이 걱정해야 할 건 `kingds`다. 업그레이드 후 TUI 주위에 쳐둔 자신의 샌드박스가 무용지물이 됐다고 전하는데, 툴 호출이 TUI 프로세스를 떠나 백그라운드 데몬으로 옮겨갔기 때문이다. `MatthiasPortzel`은 정직한 제품 평가를 내놓는다. 웹과 데스크톱 UI가 유일하게 실제로 차별화되는 부분이고, "그건 얕은 해자"라는 것이다.

## Tiny Little Office — 643 points

**643 points** · 181 comments · [tinylittleoffice.com](https://tinylittleoffice.com/) · [HN discussion](https://news.ycombinator.com/item?id=50096142)

Aboard가 만든 브라우저 오피스 제품군이고 MIT 라이선스다. 예상대로 열 개 앱이 들어 있다 — write, outline, deck, sheet, calc, draw, diagram, anim, cal, trip — 그리고 진짜 아이디어가 하나 있다. 문서가 *곧* 링크라는 것. 내용이 URL 프래그먼트에 퍼센트 인코딩으로 들어가서 계정도 없고, 기본적으로 서버 저장도 없고, 선택적으로 쓰는 암호화 단축 링크는 서버가 키를 보지 못한다. 모델이 문서 URL을 바로 뽑아낼 수 있도록 `llms.txt`도 있다.

`simonw`가 곧바로 최선의 용도를 찾아냈다 — Claude에게 `llms.txt`를 가리키면 렌더링 URL을 만들어낸다 — 그리고 생성된 덱을 하나 올렸다. 그게 이 제품의 진짜 통찰이고, Word를 대체하는 것과는 아무 상관이 없다. 내용 전체가 URL 안에 사는 포맷은 언어 모델이 만들어서 문자열 하나로 넘겨줄 수 있는 포맷이다. 동시에 이 포맷의 한계이기도 하다. `eviks`는 "공유하기 쉽다"는 주장을 정면으로 파고든다. 링크에 인코딩된 메가바이트를 도대체 어떻게 공유하느냐고 묻는데, 아무도 좋은 답을 내놓지 못한다.

나머지 스레드는 주말에 후다닥 만든 것에 대한 전형적인 리뷰다. `christophilus`는 해커뉴스 트래픽 폭주 속에서 "소유자가 요금제 한도에 도달했습니다"를 만났다. `mogoh`는 사흘 만에 바이브코딩한 거라며, 지금 쓸 만하거나 1년 뒤에도 존재할 확률은 어림도 없다고 말한다. `oidar`는 저장한 `.csv`, `.txt`, `.ics` 파일을 열 수 없다는 점을 짚는다 — 여행·캘린더 앱에서 이건 사소한 흠이 아니다. `poisonborz`는 이게 속한 장르의 이름을 붙인다. 로그인 없고, 수집 없고, 바이브코딩으로 만든 도구 물결 — 여기서 흥미로운 건 포맷 자체가 피치라는 점이고, 지속성은 열린 문제다.

## 미국인의 사회 활동, 지난 30년간 급격히 줄었다 — 556 points

**556 points** · 543 comments · [dataforprogress.org](https://www.dataforprogress.org/blog/2026/9/29/americans-social-activity-has-steeply-declined-in-the-past-30-years) · [HN discussion](https://news.ycombinator.com/item?id=50089921)

Data for Progress가 **미국 성인 1,098명**에게 지난 12개월 동안 특정 활동을 몇 번 했는지 물었고, 그 답을 **1995년** DDB Needham Life Style 조사와 비교했다. 적어도 한 번은 했다는 비율의 하락 폭은 이렇다. 강좌·세미나 **−22**, 집에서 손님 접대 **−21**(88% → 67%), 교회·예배 **−20**(74% → 54%), 소풍 **−19**(58% → 39%), 클럽 모임 **−19**(45% → 26%), 카드놀이 **−19**, 외식 아침식사 **−13**, 자원봉사 **−12**. 증가한 항목은 인터넷 **+90**, 가정용 비디오게임 +22, 운동 교실 +14, 팝·록 공연 +13, 개인 항공 여행 +5.

DFP의 미덕은 한계를 스스로 밝힌다는 점이다. 표본 프레임이 다르고, 조사 방식이 다르고(상업적 리스트 브로커 프레임을 쓴 1995년 우편 조사 vs 2026년 웹 패널), 가중치가 다르며, 결과는 "변화의 정밀한 추정치가 아니라 추세의 시사로 읽어야 한다." 오차 범위는 표기되지 않았다. 그리고 이 조사 도구에는 순환 논리 문제가 있다 — "교회 출석"과 "카드놀이" 자체가 1995년의 놀이 문화이므로, 그 범주가 무너지는 걸 보여주는 막대는 부분적으로 그 범주 자체가 사라진 것을 재는 셈이다.

댓글들은 이 프레이밍을 구제하기보다는 조각조각 뜯어낸다. `aqme28`과 `jibalt`가 중요한 반론을 세운다. "비디오게임 하기"와 "인터넷 쓰기"는 자주 사회적 활동이고 "책 읽기"는 그렇지 않으므로, 개별 항목이 흥미로운 것과 별개로 "사회 활동"이라는 집계 지표 자체가 앞뒤가 맞지 않는다는 것이다. `bcardarella`는 글에서 빠진 메커니즘을 산수로 채운다 — 시급 25달러 베이비시터, 200달러 저녁 식사, 50~100달러 주차비면 **하룻밤 외출에 300~500달러**다. `northernsausage`와 `ericmay`는 자동차 의존에 도착한다. 유럽에서는 걸어서 15분 안에 술집 세 개가 있지만, 여기서는 미리 계획한 맥주 한 잔에 차로 20분이다. `arjie`는 정직한 반례다. 값비싼 도시의 공용 공간 없는 600세대 고층 아파트에 사는 이민자인데, 원하는 사회적 접촉은 다 있고 사람들은 그저 자기 시간을 더 잘 쓸 데가 있을 뿐이라고 말한다. `legitster`는 이 모든 걸 올바른 연대로 되돌려 놓는다. 이건 더 새 계측기로 찍은 《Bowling Alone》이라는 것이다.

## 중년 남성 자살률, 사상 최고치 — 489 points

**489 points** · 694 comments · [telegraph.co.uk](https://www.telegraph.co.uk/news/2026/10/13/suicide-rates-highest-ever-middle-aged-men/) · [HN discussion](https://news.ycombinator.com/item?id=50093180)

티레그래프의 헤드라인은 과장이고, 그 밑에 깔린 ONS 데이터는 더 나쁘고 더 구체적이다. 영국 통계청(ONS)이 10월 13일 발표한 *Suicides in England and Wales: 1981 to 2025*에 따르면 2025년에 등록된 자살 사망은 **6,162명**, 연령표준화율은 10만 명당 **11.3명**으로, 2024년의 **11.4명**과 맞선다. 전체 비율은 변화가 없다. 잉글랜드는 11.1로 2024년, 2023년과 동일하다. "사상 최고치"라는 주장은 남성 45–64세와 50–54세 구간에만 해당하는데, 50–54세 남성은 10만 명당 **28.0명**으로 27.3명에서 올랐다 — 잡음 범위 안에 편안히 들어오는 움직임이다. 등록 건수가 6,190건에서 줄었다는 티레그래프의 주장은 ONS의 주요 수치와 맞지 않는다.

방법론상 두 가지 사실이 이 이야기를 읽는 방식을 바꾼다. 등록은 사망을 크게 뒤늦게 따라간다 — 잉글랜드 중앙값 188일, 웨일스 249일 — 그래서 "2025년 등록"은 2025년 사망이 아니다. 그리고 ONS 자신도 이 패턴을 코호트 효과로 규정한다: 1990년대 이후 높아진 비율이 X세대 남성을 연령대마다 따라다녔다는 것으로, 지금 중년의 위기가 벌어지고 있다는 주장과는 다른 얘기다.

댓글은 기사보다 그 지점에 더 빨리 도달한다. `projektfu`는 전체 자살이 30년 전에 비해 *줄었다*는 점, 그리고 1980~90년대에 25–44세에서 높았던 코호트가 이제는 45–64세에서 높다는 점을 지적한다. `munificent`는 뒤르켐의 아노미를 꺼낸다. 영국에서 남성 자살 예방 자선단체를 운영하며 200회 넘는 모임을 진행해온 `petecooper`는 평균 참석자가 45세쯤이고 2년 동안 아무도 잃지 않았다고 말한다 — 그러면서 자신의 생존자 편향을 스스로 짚는다. 이 스레드에서 지배적인 설명 틀은 AI로 인한 일자리 상실인데, 이는 댓글에는 나오지만 데이터 어디에도 없고, 어차피 2025년 등록 수치에는 나올 수 없는 것이다.

이 스레드에 대한 단서 하나: 유난히 무겁다. 여러 댓글 작성자가 현재 진행형의 자살 사고를 이야기하고, 이 페이지의 한 댓글은 이 사건을 위의 사회 쇠퇴 설문과 나란히 놓고 하나의 현상으로 다뤘다. 이 내용이 당신에게 가깝게 닿는다면 — 영국과 아일랜드는 Samaritans 116 123, 미국은 988.

## Discover-Tech는 어떻게 타깃 광고를 제로클릭 스파이웨어 파이프라인으로 바꿨나 — 475 points

**475 points** · 285 comments · [theguardian.com](https://www.theguardian.com/technology/2026/oct/15/israeli-firm-digital-ads-zero-click-spyware) · [HN discussion](https://news.ycombinator.com/item?id=50103000)

**269 points** · 66 comments · [citizenlab.ca](https://citizenlab.ca/research/how-discover-tech-turned-targeted-ads-into-a-pipeline-for-spyware/) · [HN discussion](https://news.ycombinator.com/item?id=50101813)

그날 가장 중대한 보안 연구는 두 번 도착했다 — 한 번은 가디언을 통해 475점으로, 한 번은 Citizen Lab 자체 보고서를 통해 269점으로 — 그리고 두 이야기는 같은 것을 주장하지 않는다. Citizen Lab의 발견은 Discover-Tech라는 이스라엘 광고 기술 회사가 "Controlium"이라는 시스템을 운영했고, 스파이웨어 파트너들이 이를 이용해 광고가 렌더링되는 순간 기기를 지문 채취하고 감염시켰다는 것이다. 이 기법에는 이제 이름이 있다: "AdFection". 2024년과 2025년에 최소 **알자지라 기기 45대**가 표적이 되었고, 이 사슬은 "높은 신뢰도"로 칸디루(현재는 Integrity Labs로 활동)와 연결된다. 서명은 Discover-Tech 도메인, 그다음 칸디루 검증기, 그다음 칸디루 명령제어 서버 순이다. 광고가 렌더링되고, Discover-Tech에서 자바스크립트를 요청하며, 그 자바스크립트는 선택된 표적에게만 내려간다. 뒷받침하는 숫자는 크다: 입찰 기록 **40억** 건, 앱과 사이트 약 **20만** 개, 319개 IP에 걸친 검증기 도메인 **305**개, 입찰량 기준 상위 국가는 예멘(4억 5,700만), 파키스탄(1억 3,900만), 몬테네그로(9,800만), 브라질(7,600만), 멕시코(3,300만), 그리고 약 24개국에서 정부 네트워크가 표시되었다.

그다음은 그 안에 없는 것인데, 댓글들은 10분 만에 그것을 찾아냈다. Citizen Lab은 전달 익스플로잇에 대해 **CVE도, 브라우저도, 운영체제도, 하드웨어도** 명시하지 않으며, 광고 노출이 "그 자체로 표적화나 감염을 확인해주지는 않는다"고 분명히 밝힌다. `blop`은 그 공백을 직설적으로 짚는다: 익스플로잇이 무엇인지, 무엇을 상대로 동작하는지 말하지 않는다. `zahlman`은 "제로클릭"이 애초에 브라우저 익스플로잇을 뜻한다는 것 자체를 의심하며, 설명된 동작을 추적과 텔레메트리로 읽는다. `saagarjha`는 모바일 광고 타깃팅이 어떻게 DLL 하이재킹 비슷한 게 되는지 묻는다. 가디언판을 그렇게 놀랍게 만든 ICC, IAEA, 나토, 유엔 표적 관련 구체 내용은 Confiant의 별도 작업에서 나온 것이지 Citizen Lab의 데이터에서 나온 것이 아니다. Citizen Lab 보고서에서 가장 좋은 부분은 어쩌면 `sbdaman`이 인용한 우연한 발견일 것이다: Controlium 자체 인프라의 인증 없는 `/csv-download` 엔드포인트가 자기 로그인 로그를 흘리고 있었다는 것. 자기 접속 로그를 흘리는 스파이웨어 서비스형 조직은 허술하거나, 아니면 아예 신경을 안 쓰는 것이다.

이 공백이 치명적이지는 않다 — 지문 채취를 조건으로 걸고 선택적으로 자바스크립트 페이로드를 내려보내는 패턴, 칸디루와의 인프라 중첩, 문서로 남은 기기 표적화는 능력을 입증하기에 충분하고, 보고서는 그 구분에 신중하다. 하지만 474점을 받은 버전들은 기정사실처럼 읽히는 쪽이다. 이것이 이 페이지에서 보안 보도가 되풀이하는 형태다: 연구자는 단서를 밝히고, 헤드라인은 그것을 지운다.

## Anthropic의 Scion은 Mononoke에서 크게 영감을 받았다 — 412 points

**412 points** · 153 comments · [sunshowers.io](https://sunshowers.io/posts/anthropic-mononoke/) · [HN discussion](https://news.ycombinator.com/item?id=50094694)

글쓴이는 메타 Mononoke 팀 출신이고, Anthropic의 새 버전 관리 시스템에 대한 그의 혐의는 구체적이다: Scion은 "파생 데이터(derived data)"를 쓴다. blame 인덱스, 경로 이력, 커밋 그래프 스킵 리스트처럼 체인지셋의 부모로부터 재귀적으로 계산되는 구조들이다. Mononoke는 2017–18년부터 똑같은 개념을 써왔고, 여기에 여덟 개의 개별 인덱스와, blame 비용을 O(전체 커밋) 대신 O(파일을 건드린 커밋)으로 만드는 blame 친화적 머클 인덱스도 함께 있었다. "표절에 가깝다"고 그는 쓴다. 데이터 모델이 용어까지 그대로 베낀 직접적 복사라는 이유에서다 — Bonsai 체인지셋이 Scion 체인지셋이 된다 — 반면 Anthropic의 엔지니어링 글은 "값비싸게 얻은 교훈"에 대해 구글의 Piper와 메타의 Sapling을 언급하면서 Mononoke는 이름도 대지 않는다.

댓글들은 이 주장이 깔끔하게 자리를 잡도록 두지 않으며, 그중 두 개가 결정적이다. `BryantD`는 Mononoke가 *바로* Sapling의 구성 요소라서 — 저장소 링크가 Sapling 하위 디렉터리다 — Anthropic이 Sapling을 언급한 것은 Mononoke가 속한 프로젝트를 언급한 것이고, 따라서 이 불만은 헤드라인이 시사하는 것보다 훨씬 좁다는 점을 지적한다. `arjie`는 음모론 자체를 부정한다: 대기업 엔지니어들은 자기가 아는 것을 다시 만든다. 그리고 모든 게 그렇게 돌아간다. `pmbauer`가 이 스레드의 명문을 남긴다 — 이건 단계만 더 있는 git 클론이고, IPO 밸류에이션을 뻥튀기해주지도 않는다. 이 글에서 가장 강한 주장, 즉 Claude에게 Mononoke를 직접 겨누고 재설계하라고 시켰다는 주장은 글쓴이의 사적인 서신만을 출처로 삼고 있으며, 공개된 어떤 것에서도 검증할 수 없다.

정리하자면: 오픈소스에 가까운 두 시스템 사이의 출처 표기 불만이고, 줄 단위 비교도 없고 라이선스 위반도 없는데, 412점으로 스파이웨어 조사 바로 두 칸 아래에 올랐다. 그 비율 자체가 이 독자층이 무엇을 급하다고 여기는지에 대한 데이터포인트다.

## 합리주의자 블로그 글은 왜 다 이렇게 긴가? — 410 points

**410 points** · 431 comments · [alexwennerberg.com](https://alexwennerberg.com/blog/2026-10-13-long.html) · [HN discussion](https://news.ycombinator.com/item?id=50083028)

알렉스 웨너버그의 불만은 이렇다. 합리주의자 글쓰기에서 장황함이 철저함을 대신하고 있으며, 빠져 있는 미덕은 지혜다. 그는 훑어본 스콧 알렉산더의 25,000단어 글, 약 70%를 잘라낸 자기 2,700단어 답글, 100만 단어가 넘는 유드코프스키의 Sequences, 그리고 9,000단어에 참고문헌 100개가 넘는 그웬의 니코틴 글을 예로 든다 — 그는 그 글이 그냥 틀렸다고 말한다. 니코틴은 실제로 중독성이 있기 때문이다.

스레드는 데이터로 이 글을 반박한다. 엄격함에 관한 논쟁에서 나올 수 있는 가장 웃긴 결과다. LessWrong을 운영하는 `habryka`는 Sequences의 중간값 글이 1,000단어 미만이라고 못 박는다. `kraf`는 2026년 5월 기준으로 글 46,000개를 통틀어 LessWrong 글의 평균이 약 1,300단어라고 보고하는데, 그러면 이 전제는 몇몇 유명한 사례에 대한 주장을 커뮤니티 전체의 속성으로 승격시킨 것이 된다. `skrebbel`은 그가 인용한 알렉산더의 글이 문자 그대로 "Much More Than You Wanted to Know"라는 제목이며, 그것은 10년째 제목에 박혀 있는 농담이라고 지적한다. `springtail5`는 논증 없이 까내리는 글이라고 부르고, `girvo`는 링크된 근거가 맞지 않는다고 지적한다. `keiferski`와 `novok`은 구조적 측면과 신경다양성 측면을 덧붙인다.

긴 글 상당수가 나쁜 이유로 길다는 점에서 웨너버그는 옳다. 그리고 이 스레드는 그 진단이 합리주의자에 관한 게 아니라는 반례 증명이다. 상위 댓글은 하나같이 하려는 말에 필요한 길이보다 길다. 그의 에세이는 간결함을 주장하는 1,200단어이고, 그리고 졌다.

## 스큐어모픽 디자인을 적용한 리눅스용 Wayland 데스크톱 — 397 points

**397 points** · 162 comments · [github.com/fyzugx](https://github.com/fyzugx/DEsk) · [HN discussion](https://news.ycombinator.com/item?id=50103338)

DEsk는 v0.1.2 베타 Wayland 데스크톱 환경으로, MIT 라이선스이며, GNOME이나 KDE처럼 데스크톱 전체로 설치된다. 데비안, 우분투, 아치, 페도라용 설치 프로그램과 X11 앱을 위한 Xwayland도 있다. 이 컨셉은 끝까지 밀어붙인다: 창은 종이 한 장이고, 독은 서랍이며, 앱은 책장에 꽂혀 있고, 알림은 우체통으로 도착하며, 방 전체가 GLES 3 아래 GPU에서 레이 트레이싱으로 그려지고, 스탠드 조명 하나가 불을 밝힌다. README는 작성자의 지휘 아래 Claude의 도움을 받아 만들었다고 분명히 밝힌다.

댓글창은 취향 싸움이고, 그 안에 진짜 기술적 반론이 파묻혀 있다. `PanicAdmin`은 아주 나쁜 아이디어가 1990년대에서 돌아오고 있다고 말한다. `flowerlad`는 스큐어모피즘은 아주 잘하지 않으면 촌스러워 보이는데 이건 그 근처에도 못 간다고 말한다. `uolmir`는 *Papers Please* 안에서 일하는 기분일 거라고 말한다. 스레드에서 실제로 설치해봤다고 하는 사람은 아무도 없는데, 댓글 162개가 달린 뒤라면 그것 자체가 판결이다.

남겨둘 만한 두 가지 바로잡기는 미학보다 더 흥미롭다. `Retr0id`는 사람들이 iOS 6에 대해 좋게 기억하는 것은 네이티브 해상도의 텍스처 작업이지 레이 트레이싱이 아니라고 지적한다 — 그 따뜻함은 픽셀 수준의 공예에서 나온 것이고, GPU 셰이더 패스가 만들어내는 것과는 정반대다. 그리고 `d1l`은 진짜 장애물이 창 관리자가 전혀 아니라고 주장한다: GTK와 libadwaita는 테마 적용을 적극적으로 거부하므로, 이런 프로젝트는 컴포지터가 아니라 툴킷과 싸우는 것이다. 그것이 스큐어모픽 리눅스 데스크톱이 실현되기 어려운 올바른 이유이며, 스레드의 누구도 듣고 싶어 하지 않는 이유다.

## 불가리아 스타링크 시설 화재, 폴란드 사보타주 의혹 이후 — 380 points

**380 points** · 275 comments · [dpa-international.com](https://dpa-international.com/politics/urn:newsml:dpa.com:20090101:261014-930-839530/) · [HN discussion](https://news.ycombinator.com/item?id=50092730)

불가리아 총리가 소피아 인근 스타링크 시설에서 화재가 발생했다고 확인했다. 야당 DB당은 10월 9일 **17개 안테나 중 11개**가 고의로 불탔으며 그 시설이 "우크라이나 전쟁에 사용됐다"고 주장한다. 독일 여권을 소지한 20세와 21세 남성 두 명이 구금됐고, 그리스에서 쿨라타를 넘어왔다고 전해졌다. 수사 당국은 9월 23일 바르샤바 남쪽 터미널 화재와 관련해 독일에서 체포된 두 남성과의 연관 가능성을 조사하고 있다. 폴란드는 러시아 정보기관을 의심하고, 불가리아 정보기관 DANS의 수장은 이를 사보타주라고 불렀다.

배후는 확정된 것이 아니라 의심 단계다 — 기사도 그렇게 프레이밍하고, 댓글들도 대체로 그 선을 지킨다. `nickff`는 자사 재산을 제대로 지키지 못한 SpaceX에 책임이 있다는 프레이밍에 반박한다. 인프라를 보호하는 건 경찰의 기능이지 공급업체의 의무가 아니라는 것이다. `matt3210`은 진짜 새로운 문제를 꺼낸다. 군사적 관련성이 있는 인프라를 운영하는 민간 기업이 정당한 표적이 되어가는데, 법 체계는 그것에 대해 쓸 만한 말을 하나도 갖고 있지 않다. `toomuchtodo`는 러시아 정보기관이 스타링크 단말기를 공격하는 동시에 머스크가 우크라이나의 사용을 제한하고 있다는 모순을 짚는다. `csirob`은 DANS 수장의 이름이 플라멘(Plamen)인데, 번역하면 "Flame"이라는 점을 관찰한다.

물리적 세계가 페이지를 뚫고 나오는 이야기다. 어제는 이식물이 들어간 하드웨어 지갑이었고, 오늘은 불가리아 들판에서 불탄 위성 단말기다. 둘 다 소프트웨어 문제가 아니고, 둘 다 패치가 없다.

## 은행들, 방금 인수한 AI 데이터센터 부채를 이제 떠넘기려 한다 — 377 points

**377 points** · 268 comments · [startupfortune.com](https://startupfortune.com/banks-are-now-trying-to-offload-the-ai-data-center-debt-they-just-underwrote/) · [HN discussion](https://news.ycombinator.com/item?id=50092664)

주장인즉 JP모건, 모건스탠리, SMBC, MUFG가 AI 데이터센터 부채에 대해 상당한 규모의 위험 이전, 즉 SRT(대출 기관이 대출은 그대로 들고 있으면서 가장 위험한 조각만 파는 것)를 저울질하고 있다는 것이고, 이유는 내부 집중 한도에 걸렸기 때문이라는 것이다. 기사에 나온 숫자는 전부 재인용이고 페이지상으로 검증 가능한 것은 하나도 없다. 오라클에 임대된 텍사스·위스콘신 프로젝트의 건설 부채 380억 달러가 6개월 넘게 분배 단계에 있고 일부 대출 기관은 비은행에 할인가로 팔고 있다는 것, 10월 초 오라클 5년물 신용부도스와프가 **151 basis points**로 2009년 이후 처음 보는 수준이라는 설명, 7월 S&P가 오라클을 **BBB−**로 강등한 것, 오라클이 하루에 채권 180억 달러를 발행한 뒤 이번 회계연도에 400억 달러 이상의 추가 부채와 자본을 조달하려 한다는 것, AI 채권 청약 배수가 2월 5배 초과청약에서 7월 2배 미만으로 떨어졌다는 것, CoreWeave 임대 물건이 **7.00–9.875%**에 가격이 매겨진 반면 하이퍼스케일러 물건은 **5.70–7.875%**라는 것이다.

출처는 알맹이 없는 저자 약력과 "125.9K reads" 배지가 붙은 콘텐츠 팜이고, 논조 자체가 티를 낸다. SRT를 한 번은 제대로 설명해놓고 그다음부터는 공황으로 서술한다. 하지만 댓글에는 올바른 반론이 있고, 거기서 한 걸음 더 나아간다. `chollida1`은 인수한 부채에서 위험을 떼어내 파는 것이야말로 은행이 거의 모든 부채에 하는 일이며 이 기사는 금융 매체에서 나온 게 아니라고 지적한다. `lewdwig`는 신디케이션이 정상이라는 점은 인정하고 나서 실제 신호를 분리해낸다. 보통은 몇 주면 소화되는데 이건 6개월째 막혀 있다는 것이다. `Aurornis`는 이 프레이밍을 기저율 오류라고 부른다. `CodingJeebus`는 반대 방향의 모건스탠리 데이터를 덧붙인다 — AI 부채 발행은 6월에 기록적인 1,130억 달러였는데 9월에는 230억 달러였고, 9월에는 미국 투자등급 AI 발행이 완전히 멈췄다.

정직한 버전은 이렇다. 이 스레드의 누구도, 출처의 누구도 "집중 한도에 걸린 은행의 일상적 위험 관리"와 "재가격 책정의 첫 국면"을 구분하지 못한다. 측정 가능한 것은 CDS 스프레드 하나뿐인데, 오라클의 151bp는 위기 수준이 아니다. 예전에는 정상이던 수준인데, 비교 기준이 2024년이라 이제는 놀라워 보이는 것뿐이다.

## Catch a Bird — 내 정신 건강을 위해 만들었다 — 369 points

**369 points** · 108 comments · [catchabird.com](https://catchabird.com) · [HN discussion](https://news.ycombinator.com/item?id=50053384)

기쁘게 해준 일에 대해 문장 하나를 입력하면, 그것이 공유 나무 위의 익명 새가 된다. 방문자들은 새를 잡아서 먹이를 준다. 먹이를 받은 새는 남고, 못 받은 새는 날아간다. 부다페스트에 있는 제작자는 이것을 Madárfa — "새 나무" — 로 만들었고, 구성은 프레임워크 없는 HTML 파일 하나에 직접 만든 나무 모듈, Hetzner 서버 한 대 위의 FastAPI와 Postgres, 자체 호스팅 Umami, 요청 시 번역을 위한 DeepL이다. 18년 전에도 비슷한 긍정 트윗 수집기를 만들었다고 한다. 트래픽이나 사용자 수치는 전혀 밝히지 않는데, 이건 겸손이거나 이 사이트에 숫자를 올리면 무슨 일이 벌어지는지에 대한 정확한 본능이다.

스레드는 대체로 이걸 즐기는 사람들로 채워져 있는데, 오늘 같은 날에는 그 점을 짚어둘 만하다. `Cider9986`은 자기 새의 통계를 올렸다 — 25번 잡히고, 4번 먹이를 받고, 23개 도시. `ssgodderidge`는 파키스탄에서 온 새를 잡았는데, 그 새는 공황 발작 후에 한 산책을 적어놨다. `lemontheme`는 비슷한 네덜란드 사이트를 만들었고 Mistral의 무료 검열 엔드포인트를 추천하는데, 이런 걸 만드는 사람에게는 그게 실질적인 조언이다. `orbanlevi`는 피할 수 없는 문제를 보고한다. 그냥 "asd"라고만 적힌 새가 많다는 것이다. `hereonout2`는 사이트가 어떻게 위치를 잡는지 묻는다. 자기 어머니가 20마일이나 떨어진 곳으로 찍혔기 때문이다.

이 페이지에서 유일하게 의심의 여지 없이 따뜻한 이야기이고, 이게 먹히는 이유는 감상적이어서가 아니라 기술적이어서다. 먹이 주기는 결과가 따르는 희소한 행동이라서, 나무에는 어떤 검열 큐도 제공하지 못하는 필터가 생긴다. 익명 작성 경로는 사람들이 실제로 쓸 만큼 짧다. 20년 동안의 소셜 제품들은 이 두 가지 속성을 한 페이지에 담는 데 실패했다.

## Muse Spark Open — 367 points

**367 points** · 225 comments · [research.meta.ai](https://research.meta.ai/blog/muse-spark-open) · [HN discussion](https://news.ycombinator.com/item?id=50107379)

메타가 Muse Spark Open의 가중치를 공개하며 "지금까지 나온 미국 오픈 웨이트 모델 중 가장 성능이 좋다"고 부른다. 공개된 사양은 **총 816B 파라미터에 활성 42B**, **1M 토큰 컨텍스트**, 네이티브 멀티모달리티다. 배포 자랑거리는 MLX를 통해 **애플 M5 Ultra 맥 스튜디오 두 대**에서 돌아간다는 것 — 각각 512GB 통합 메모리, 1.2 TB/s 대역폭 — 이고, SGLang에 실려 나온 Helion 커널로 NVIDIA와 AMD에서 1.03–3.95×의 커널 수준 속도 향상, AMD MI350에서 종단 간 3% 향상을 주장한다.

여기서 멈춰야 할 대목이 있다. 블로그의 "Key Benchmarks" 섹션이 추출된 텍스트에서는 비어 있다. 페이지에 벤치마크 숫자가 전혀 없고, 방법론 보고서 링크만 하나 있다. 발표문의 모든 성능 주장은 자기 보고이고 출처로는 확인할 수 없다. 라이선스도 open이라는 단어가 원래 담고 있던 어떤 의미로도 오픈이 아니다 — "Muse Model License with limited commercial terms"이고, `seizethecheese`가 핵심 조항을 인용한다. 매출이 **2,000만 달러**를 넘는 상태에서 모델 서비스(MaaS)로 제공하려는 사람은 메타에 통보하고 별도 계약을 맺어야 한다는 것이다.

댓글들이 빠진 평가를 채워준다. `a11r`과 `GodelNumbering`은 둘 다 Artificial Analysis가 이 모델을 대략 **39**로 놓아 GLM 5.3 Flash와 Qwen3.8-Flash-Next보다 뒤지고 DeepSeek v4.1 Flash와 비슷한 수준이라고 인용한다 — 어느 기준으로 읽어도 "가장 성능이 좋다"는 아니다. `simonw`는 로컬에서 돌릴 수 없어서 OpenRouter로 펠리컨 SVG 테스트를 돌렸다. `felineflock`은 실제 양자화 크기를 알려준다. UD-IQ1_S에서 180GB, UD-Q4_K_XL에서 510GB인데, 이건 프로슈머 하드웨어가 아니다. `popinman322`는 별도 라이선스 규칙이 가격 경쟁을 파괴한다고 주장한다. 매출 상한이 붙은 라이선스가 애초에 노리는 게 바로 그것이다. `markstos`의 한마디: AI는 M5 스튜디오 두 대를 살 수 있는 사람을 위한 것이다.

## Jev 1.14.0 공개, 꿈꾸는 이들을 위한 실험적 기능과 함께 — 327 points

**327 points** · 116 comments · [typesafe.ai](https://typesafe.ai/blog/jev-1-14) · [HN discussion](https://news.ycombinator.com/item?id=50095353)

Jev는 TypeSafe AI의 "System One Models" 제품이다 — 자유 형식 채팅 대신 약 100ms 지연으로 결정과 확률을 돌려주는 타입이 지정된 스마트 if 문이다. 9월 15일 1,989점으로 처음 이 페이지에 올라왔고, 클론과 농담으로 이루어진 생태계를 낳았으며, 회사는 10월 9일 **75억 달러 밸류에이션에 8억 7,000만 달러**를 조달했다. 그러니 이번 릴리스 글은 더 이상 신기한 구경거리가 아닌 회사로 들어가는 셈이다.

릴리스 자체는 일부러 따분하다. 하이프 사이클을 지나고 나면 그게 올바른 본능이다. 곳곳의 작은 개선이고, 가장 기대되는 효과는 다국어 작업이다. 흥미로운 부분은 "danger zone" 섹션이다 — API 헤더로 옵트인하는 기능들이고 명시적으로 프로덕션용이 아니며, 이전 버전에서 다시 켠 이미지 입력, 단일 바운딩 박스를 위한 실험적 `box` 타입, `TypeSafe-Danger-Zone-Long-Context` 플래그 뒤의 확장 컨텍스트가 여기 들어 있다. 회사는 Jev가 이미 프로덕션에서 노출하는 것보다 긴 컨텍스트를 지원하며 안정성을 위해 상한을 둔다고 인정한다. 최대 길이는 밝히지 않는다.

두 가지 세부 사항은 칭찬받을 만하고 하나는 따져볼 만하다. 벤치마크 섹션에 "Warning: AI benchmarks. Please don't trust them"이라는 라벨을 붙이고 자사 숫자가 자기 모델 쪽으로 편향됐을 가능성이 크다고 밝힌 점은 칭찬받을 만하다 — `jjcm`이 그 정직함을 짚는다. "still not train on your queries"도 칭찬받을 만하다. 올바른 문장이고, 대부분의 모델 발표문에서 빠져 있는 문장이다. 따져볼 것은 실제 벤치마크 숫자가 **이미지**로 게시되어 텍스트에서는 아무것도 추출하거나 재현할 수 없다는 점이다. `calyhre`는 데이터 거주지와 보존을 해결되지 않은 쇼스토퍼로 제기한다. `computerex`는 아키텍처를 설명한다 — 백본 모델(Qwen 3.5 9B로 인용됨)에 특수한 선형 리드아웃 헤드를 붙인 구조다. `ralusek`은 동시 호출 500–600건이 필요한데 레이트 리밋이 걸림돌이라고 말한다. `joelsstafford`는 트레이딩 테스트에서 Jev 1.13이 Microsoft-Decision-1에 졌다고 보고한다. 이 제품 자체의 프레이밍이 가장 유용한 대목이다. 결정 모델은 경계가 정해진 물건이고, 경계가 정해진 물건은 가격을 매기고 감사할 수 있다.

## ISO 하나 받으려다 커널 익스플로잇을 쓰게 됐다 — 313 points

**313 points** · 155 comments · [blog.dfb.sh](https://blog.dfb.sh/blog/eap770-root-for-two-zeros/) · [HN discussion](https://news.ycombinator.com/item?id=50070625)

이 글은 이 페이지에서 최고의 기술 탐정 이야기다. 저자의 TP-Link EAP770 v1은 Linux 5.4.164에서 Qualcomm IPQ9574를 돌리고 있었는데, TCP 다운로드를 64바이트 캐시라인 블록 단위로 *유효한 체크섬과 함께* 조용히 망가뜨리고 있었다. 근본 원인은 Qualcomm의 out-of-tree `qca-nss-dp` 드라이버가 RX 캐시를 완전히 무효화하지 않고 버퍼를 재활용하고, 그러면 하드웨어 오프로드 경로가 이미 망가진 페이로드 위에서 체크섬을 다시 계산한다는 것이다. 8,192 MiB를 전송한 실험에서 오프로드를 켰을 때 **103.4 MiB/s로 64바이트 블록 3개가 깨졌고**, 껐을 때는 95.4 MiB/s로 0개였다 — 하드웨어를 정상으로 만들기 위해 치르는 8% 처리량 비용이다.

해결은 root만 쓸 수 있는 sysfs 쓰기 두 번이다. TP-Link의 셸은 uid 1로 돌아가고, v1은 단종이라 펌웨어가 없으며, v2의 펌웨어는 암호화돼 있다. 그래서 그는 `legacy_parse_param()`의 정수 언더플로인 CVE-2022-0185를 파이프 버퍼 조작과 엮어 `modprobe_path`를 덮어쓰고 root를 얻었다 — **LLM과 함께 17시간을 반복**했고 뚫어야 할 KASLR도 없었다.

이 이야기를 정직하게 유지시켜 주는 정정 두 가지가 있다. 이건 저자 본인 기기에 있는 공개된, 알려진 CVE이고 새로운 0-day가 아니며, `amluto`는 익스플로잇을 엮을 필요 없이 그냥 root를 유지하면 된다고 지적한다. "같은 버그 종류를 가진 in-tree 드라이버가 최소 13개"라는 주장은 저자 자신의 검증되지 않은 추정이고 확인할 하드웨어도 없다. 하지만 실질적인 발견은 `myself248`가 짚은 것이다: 손상 *이후에* 다시 계산된 체크섬은 체크섬이 아예 없는 것보다 나쁘다. 나쁜 데이터를 수신자가 신뢰할 만한 것으로 세탁해 버리기 때문이다. 아무도 테스트하지 않는 실패 유형이며, 그것을 만들어내는 데 10년 된 드라이버 버그가 필요했다.

## 신경망은 깨끗하다 — 309 points

**309 points** · 89 comments · [already-clean.goodfire.com](https://already-clean.goodfire.com/) · [HN discussion](https://news.ycombinator.com/item?id=50105647)

Distill의 "Zoom In"과 "Multimodal Neurons" 논문 공동 저자이자 지금은 Goodfire에 있는 Nick Cammarata가, 이 페이지가 비공식 연구 에세이 겸 작업 가설이라고 부르는 약 20,000단어 분량의 글을 발표했다. 이 주장은 다의성(polysemanticity)에 대한 학계의 표준 설명을 뒤집는다. 중첩(superposition) — 뉴런이 서로 무관한 많은 것에 발화하도록 허용함으로써 신경망이 차원 수보다 많은 특징을 담는다는 개념 — 은 증거를 잘못 읽은 것이라고 그는 주장한다. 유명한 고양이-아니면-자동차 뉴런과 InceptionV1의 지저분한 마지막 층은 구조적 오버플로와 허술한 검사 도구가 만든 산물이었다. 그에 따르면 실제로 일어나는 일은 재귀적 일반화다: 뉴런에서 곁가지가 돋아나서 "iy"가 "diy"가 되고 "do it yourself"가 된다.

뒷받침하는 숫자들은 그 자신의 예비 감사 결과다. Qwen3-32B에서 뉴런 극점의 약 **90%**는 주 역할이 하나뿐이고, 약 **7%**는 서로 연관된 두 가지 역할을 하며, **2–4%**만이 전혀 이해되지 않는다. 그는 조 단위 파라미터 모델까지 비슷한 수치를 보고하며, 재학습한 InceptionV1은 마지막 층 해석 가능성이 **99–100%**에 도달한다고 말한다. 그러면서 그 비율은 선택한 해석 가능성 임계값에 달려 있고 "편향됐을 가능성이 크다"는 점, 짝을 이루는 논문이 아직 발표되지 않았다는 점도 인정한다. 즉 숫자는 검증되지 않았고, 그도 그렇게 말한다.

이 스레드는 선의의 논쟁이고, 해석 가능성 논의에서는 드문 일이다. `bluejay2387`는 이 에세이가 과하게 나갔다고 주장한다: 점진적 특징 복잡성과 복권 가설(Lottery Ticket Hypothesis)은 오래된 결과이고 둘 다 중첩과 배타적이지 않다. 해석 가능성 연구자라고 자처하는 `yurimo`는 그 요점을 인정하지 않는다. `LarsDu88`는 작은 모델은 더 압축하고 아주 큰 모델은 전혀 압축하지 않을 수도 있다는 관점을 제시하는데, 그렇다면 이 발견은 중요한 방식으로 규모에 의존하게 된다. `mpalmer`는 용어집을 붙인 요약판을 올렸다. `chrisjj`는 이 모델들에는 뉴런이 없다고 지적하는데, 이는 꼬투리 잡기이면서 동시에 맞는 말이다. `sebmellen`는 2023년 도구로는 뉴런의 약 2%만 판독 가능했다는 Cammarata 본인의 과거 발언을 인용한다 — 그것이 주장된 도약의 실제 크기이며, 논문을 기다려야 하는 이유다.

## 수학자들이 왜 우는지 나는 안다 — 293 points

**293 points** · 468 comments · [derekthompson.org](https://www.derekthompson.org/p/i-know-why-the-mathematicians-weep) · [HN discussion](https://news.ycombinator.com/item?id=50103630)

Derek Thompson의 에세이는 페이월 뒤에 있어 무료 부분만 읽을 수 있는데, 이게 중요한 이유는 글에 나오는 모든 사실 주장이 외부 New York Times 기사를 가리키는 포인터이기 때문이다. 논지는 이렇다: OpenAI가 정수론, 이론 컴퓨터 과학, 논리학 분야의 수학 증명 수백 개를 발표했고, 그 문제에 경력을 바친 사람들이 애도하고 있다. 2022년 필즈상 수상자인 Hugo Duminil-Copin은 울었고 딸을 깨웠다며 "그들이 내 연구 분야를 말살했다"고 말한 것으로 인용된다. Steven Strogatz는 "나는 진짜로 울었다"고 말한 것으로 인용되고, 모델이 만들어내는 것을 "이해 없는 지식"이라고 부른다.

이 애도는 천 년에 걸친 대화가 끊긴 것으로 그려진다 — 지구를 어떻게 측정할지 서로 편지를 주고받던 아르키메데스와 에라토스테네스까지 거슬러 올라가는 전통이다. 그런 구도는 이 글에서 가장 강력한 부분이며 어떤 숫자도 필요로 하지 않는다. 숫자 자체 — "증명 수백 개", "수십 년, 혹은 수백 년 동안 세계 최고의 수학자들을 막아 세웠던" 문제들 — 는 단언에 불과하고 링크 하나에 의존하며, 독립적인 집계도, 동료 심사 여부도, OpenAI의 답변도 없이 제시된다.

댓글창은 "이해 없는 지식"이 성립하는지 두고 논쟁한다. `antics`는 언어학에서 Strogatz에게 반박한다: 고전적 촘스키 통사론은 예측력이 엄청났으니, 그 표현은 서술이 아니라 수사적 작업을 하는 셈이다. `cleandreams`는 이게 얼마나 중요한지 결정짓는 관찰을 내놓는다 — 증명 더미는 거대하고 지저분하며 주로 Lean으로 되어 있다는 이유로 진지하게 받아들여지는데, 즉 공로를 인정하는 건 모델이 아니라 검증 장치라는 것이다. `ozozozd`는 진짜 손실을 검증의 죽음으로 규정한다: 논문 백 편이 넘게 쏟아졌는데 아무도 읽지 않았다. `flowerlad`는 소프트웨어 엔지니어들은 수십 년째 도구로 대체돼 왔지만 공개적인 애도는 훨씬 적었다고 지적한다. 그리고 `1970-01-01`는 이게 거의 전부 자존심 문제라는, 실속을 깎아내리는 해석을 내놓는다. 둘 다 맞을 수 있다: 어떤 분야가 진짜로 가치를 잃으면서도, 가치를 잃은 사람들이 과민반응할 수는 있다.

## Go 1.27의 개선된 HTTP/1 연결 재사용 — 293 points

**293 points** · 46 comments · [go.dev](https://go.dev/blog/http-connection-reuse) · [HN discussion](https://news.ycombinator.com/item?id=50090369)

변경은 작고 정확하다: `net/http.Transport`가 읽지 않은 HTTP/1 응답 본문을 이제 비동기로 비우는데, 최대 256KB 또는 50ms이고 응답이 `Connection: close`를 보내면 건너뛴다. 그래서 연결이 버려지지 않고 재사용된다. 벤치마크는 HTTP/2를 끈 상태에서 `index.golang.org`를 100번 호출한 것인데, 대략 **1.26에서 710ms, 1.27에서 150ms**이며 글에서는 거의 5배 빠르다고 말한다.

그 숫자에 대해 짚고 넘어갈 두 가지가 있는데, 글에는 나오지 않는다. 저자 한 명의 머신, 엔드포인트 하나, 실행 한 번이고 데이터셋도 CI 하네스도 없다 — 그리고 일반화되지 않는다. HTTP/2에는 애초에 그 버그가 없었기 때문이다. HTTP/2를 쓰는 사람에게 현실적인 이득은 0이다.

댓글들은 운영상의 경계를 찾아냈다. `jerf`는 새 drain이 `Close`의 의미를 문서화되지 않은 방식으로 바꾼다고 지적하며, drain 비용을 치르지 않고 강제로 닫는 방법을 묻는다. `rkuska`는 `json.Decoder`가 여전히 재사용을 막는 끝의 개행을 남겨서 `Decoder.More()`를 호출한다고 보고한다 — 풀링된 연결로 JSON을 스트리밍하는 사람에게는 실제 우회책이다. `nasretdinov`는 반대 방향의 개선점을 짚는다: 예전에는 본문을 닫으면 다운로드를 건너뛰었는데 이제는 그럴 수 없다는 것이고, 50ms 상한은 옳은 결정이라고 말한다. `prussian`는 nginx나 다른 리버스 프록시 뒤에서의 조기 종료 실패를 제기한다. `seki285`는 2026년에도 HTTP/1을 써야 하는 사람이 있느냐고 묻는데, 이게 정직한 질문이며 이 패치가 중요한 패치가 아니라 좋은 패치인 이유다.

## LFM2.5-24B-A2B: 빠른 온디바이스 에이전트를 위해 만들어졌다 — 277 points

**277 points** · 72 comments · [liquid.ai](https://www.liquid.ai/blog/lfm2-5-24b-a2b) · [HN discussion](https://news.ycombinator.com/item?id=50097369)

Liquid AI의 마지막 LFM2.5 모델은 **활성 파라미터 2B**의 24B mixture-of-experts이고, 컨텍스트는 32,768에서 **131,072 토큰**으로 늘었고, 어휘는 65K에서 128K로 두 배가 됐으며, 40개 층, top-4 라우팅을 쓰는 64개 전문가, 이전 세대의 17T 대비 **33T 토큰**으로 사전 학습됐고, 명시적 사고 사슬을 쓰는 추론 전용 모델이다. 라이선스는 LFM Open License v1.0이다 — Apache-2.0 기반이고, **연 매출 1,000만 달러 미만**이면 상업적 사용이 무료이며 그 이상이면 라이선스를 사야 하고, 카피레프트는 없고 저작자 표시가 필요하다.

모든 성능 수치는 벤더가 돌린 것이다. M5 Max에서 초당 184 토큰, Ryzen AI Max+ 395에서 114, "비슷한 MoE보다 최대 1.7배 빠름", 단일 B300에서 초당 21,000 출력 토큰 이상을 주장한다. 벤치마크에서는 8개 에이전트 벤치마크 중 5개에서 Qwen3.6-35B-A3B를 이기는데, AutomationBench는 **27.69 대 8.72**이며, 지식과 코딩에서는 크게 진다 — GPQA Diamond **74.42 대 83.69**, SWE-Bench Verified **51.00 대 66.20**.

이 분열이 제품 논지의 전부이고, 댓글들은 이를 정확하게 검증한다. `hypfer`는 정직한 사용자 후기를 준다: 4090에서 아주 빠르고, 아주 멍청하기도 하며, 초당 250 토큰으로 프로덕션을 지워 버릴 것이다. `sebmellen`는 AutomationBench 격차를 예외값으로 지적한다. 다른 모든 항목에서는 경쟁자들 근처에 있기 때문이다. `jgbuddy`는 왜 두 세대 전 Qwen과 비교하는지 묻는다. `ricardobeat`는 일반 지식에서 Qwen보다 훨씬 나쁘다는 자체 벤치마크를 보고한다. `MatthiasPortzel`는 매출 상한 라이선스를 "강제 가능성이 의심스럽다"고 부른다. `serf`는 5070 Ti에서 초당 200–320 토큰이라는 속도 주장을 실사용에서 확인해 준다. 패턴은 일관된다: 처리량 수치는 버티고, 능력 수치는 그렇지 않으며, 벤더는 자기가 무엇을 파는지 알고 있다.

## 얀덱스 장애: 사라진 게 아니라 옮겨간 악성 봇들, 데이터가 보여주는 것 — 276 points

**276 points** · 114 comments · [blog.cloudflare.com](https://blog.cloudflare.com/yandex-outage/) · [HN discussion](https://news.ycombinator.com/item?id=50094673)

Cloudflare의 얀덱스 장애 측정은 이날 벤더가 공개한 데이터의 시험대다. 공격은 10월 7~8일 사소보, 10월 9일 칼루가, 10월 11일 블라디미르를 강타했다. 얀덱스 검색 자율 시스템(AS)은 10월 11일 기준선 대비 **99%** 떨어졌고 클라우드 ASN은 **90%** 떨어졌으며, 둘 다 10월 13일까지 정상 대비 86~90% 낮은 상태로 머물렀다. 전 세계적으로 트래픽에서 봇이 차지하는 *비중*은 거의 움직이지 않았다. 10월 1~6일 39.4%였고 장애 기간에는 39.2~39.6%였다. 러시아 내부에서는 봇 비중이 50.4%에서 42.2%로 떨어졌다. 8.2포인트 이동이다. 얀덱스 클라우드에서는 봇 트래픽이 40%, 워드프레스 플러그인 탐색이 90%, 스캐너 요청이 93%, WAF 차단이 70% 줄었다.

이 주장을 성립시키는 건 바로 이동의 증거다. 얀덱스 클라우드 봇 트래픽은 거의 전부 도박 계정 하나를 때리고 있었는데, 10월 8일 직후 0이 됐다. 그러는 동안 같은 JA4 지문, 같은 특이 경로와 헤더, 같은 커스텀 유저 에이전트를 가진 요청이 Radist와 Selectel에서 다시 나타났다. 러시아에서 도박으로 향하는 봇 트래픽 전체는 1억 6,770만에서 1억 7,010만으로, 1.4% 늘었다. 작업은 멈추지 않았다. 주소만 바꿨다.

한계는 두 가지다. 하나는 Cloudflare도 인정한다. 자기 네트워크만 볼 수 있다는 것, 그리고 이번 공격과의 연관성을 배제할 수 없다는 것. 이 대목의 해설이 이 글에 역사적 맥락을 붙여준다. 얀덱스 클라우드 인프라에 대한 미국 제재, 그리고 2025년에 유출된 러시아 군 문서 약 1,500쪽 — 아동을 포함해 약 2,000명을 위협한 — 이 이 트래픽의 배경이다. 짚고 넘어갈 내부 모순도 있다. 본문은 사건 전 세계·러시아 자동화 비율을 36.1%와 35.8%로 제시하는데, 함께 실린 표는 10월 1~6일 기준 39.4%와 50.4%를 준다. 설명이 없고, 남은 숫자들을 더 꼼꼼히 보게 만드는 종류의 간극이다.

댓글들은 대체로 결론을 받아들이고 현장의 현실을 덧붙인다. `gruez`는 이 재배치야말로 "트롤들이 사라졌다"는 밈을 반박하는 묻힌 핵심이라고 말한다. `mopsi`는 진짜 이야기는 러시아 인터넷의 중앙집중화라고 주장한다. 제공자가 그렇게 적으면 하나를 때리는 게 국가의 큰 부분을 때리는 것이다. `sdcfgy`는 어느 대체 제공자를 차단해야 하느냐고 묻는다. `alpineman`은 논지에 이의를 제기하며, 게시 트래픽의 90.3% 감소를 봇이 진짜로 오프라인이 된 것으로 읽는다. `fierycatnet`은 문제의 트래픽이 검색엔진 크롤러라고 생각했다. 이게 애초에 악성이었긴 한 건지에 대한 정당한 질문이다.

## 반려견 코 가리개를 만들어 그냥 나눠줬다. 이제 500마리가 쓰고 있다 — 224 points

**224 points** · 115 comments · [snoutcover.com](https://snoutcover.com/one-year) · [HN discussion](https://news.ycombinator.com/item?id=50105344)

Omri Hillel은 원판상 홍반성 루푸스(discoid lupus erythematosus)를 앓는 자기 개 Billie를 위해 자외선 차단 코 덮개를 만들었다. 그가 밝힌 숫자는 **개 500마리 이상, 16개국으로 395건 주문, 시제품 13개**이고, 10월 1일 출시해 첫 주문이 16일 뒤에 도착했다. 글에는 가격이 없다. `hn_submit`은 개당 20달러, 총 1만 달러로 추측했지만 검증되지 않았다.

이 스레드의 주제는 결국 문장이었다. 이 글은 기계가 쓴 것처럼 읽히고, 여러 댓글 작성자가 그걸 지적한 뒤에야 저자가 인정했다. 그는 작가가 아니라 디자이너이고 LLM의 도움을 받았으며, 이야기와 개들은 진짜라고 말한다. `tdeck`은 Claude가 글을 나아지게 하지는 않았다고 본다. 이게 맞는 프레임이다. HN에서 나오는 비난은 그게 가짜라는 게 아니라, 그 결과물에 출처를 붙일 수 없는 질감이 있다는 쪽이다. 그리고 그 표지는 이제 독자들이 저자가 인정하기 전에 알아챌 만큼 믿을 만하다.

나머지는 물리적 제품에 대한 늘 하던 심문이다. `mixmastamyk`은 직사광선 아래 놓일 물건이 검은색이면 안 된다고 반대한다. `bhhaskin`은 3D 프린트의 납 문제를 제기하고, `DoctorOetker`은 냅킨에 계산을 해보고 문제가 아니라고 말한다. `spankibalt`는 미세플라스틱을 제기한다. `DoctorOetker`은 목끈도 비판한다. 개의 가장 민감한 부위를 당긴다는 이유다. 그리고 `billfor`는 바로 이 제품이 약 11개월 전에 HN에 올라온 적이 있다고 지적한다. 저자의 서사에는 아무도 언급하지 않은 사실이다.

## Show HN: Unfenced — 공유지와 맞닿은 매물 토지 — 217 points

**217 points** · 151 comments · [unfenced.land](https://unfenced.land/) · [HN discussion](https://news.ycombinator.com/item?id=50102247)

필라델피아의 한 디자인 스튜디오가 공유지에 인접한 부동산을 찾아내고 공유 경계선을 측정하는 사이트를 만들었다. 10월 12일 기준으로 **13,626**개 부동산을 보고한다. 검색한 활성 매물 695,439건, 49개 지역 기준이다. 콜로라도가 1,396으로 가장 많고 캘리포니아 836, 유타 645가 뒤를 잇는다. 공유 경계 길이는 131피트에서 5,240피트까지다. 데이터 파이프라인의 출처는 제대로 밝혀져 있다. 매물은 RentCast, 필지는 주·카운티 GIS와 Realie, 50에이커 이상 완전 소유 개방 접근 토지는 USGS PAD-US 4.1, 고도는 3DEP, 도로는 Census TIGER, 홍수는 FEMA, 산불은 USFS다.

"여기는 공유지와 접한다"는 것은 정말로 계산하기 어려운 주장이다. 사이트의 오류와 댓글 모두 그 이유를 설명한다. `windowshopping`은 50에이커라고 적힌 매물이 실은 침실 2개 콘도였고, 1,400에이커라고 적힌 건 0.14에이커였다고 찾아냈다. `clark_dent`이 원리를 알려준다. 복수 매물 서비스(MLS)에서는 콘도가 단지 전체의 토지를 자기 대지로 신고하기 때문에 데이터가 원천에서 틀렸고, GIS 작업을 아무리 해도 고쳐지지 않는다. `ggreer`는 기포드 핀쇼 국유림과 접한 필지를 놓친다고 말한다. 가격과 면적 필터를 달라는 요청이 반복해서 나오는데, 사이트에는 없다.

독자들이 반복해서 제기하는 반론은 정확성이 아니라, 그 정보를 가지고 뭘 하겠느냐는 것이다. `snide`와 `kyleblarson` 모두 경계의 현실을 제기한다. 울타리 선은 필지 선을 따라가지 않고, 나무는 누군가 위에 쓰러지기 전까지는 네 것이다. 그리고 사이트의 문구는 LLM이 만든 것이고 저자도 인정한다. 사이트 텍스트의 상당 부분을 요청받아 AI에 기댔다고. `AndrewKemendo`는 저자의 답글 일부가 나중에 플래그 처리되거나 죽은 상태로 나타났다고 눈치챘다. Show HN에서 보기 드문 일이고 언급할 가치가 있다.

## 섹션에 못 들어간 새 글들

- **Libreboot 26.10 "Ominous Olive"** — 210 points · 123 comments · [libreboot.org](https://libreboot.org/news/libreboot2610.html). 릴리스는 크지만 스레드는 다른 얘기를 한다. MrChromebox의 포크에서 온 EDK2 UEFI 페이로드가 이제 지원되는 거의 모든 보드의 기본 부트 펌웨어가 됐고, 베어메탈 GRUB과 SeaBIOS 페이로드는 폐기 예정이다. 윈도우 10과 11, OpenBSD, FreeBSD, 리눅스 통합 커널 이미지가 이제 부팅된다. **인텔·AMD 크롬북 233종**이 MrChromebox의 coreboot 배포판에서 소스만 이식됐고, 테스트된 보드는 Baytrail 하나뿐이다. Fam15h 보드는 15h.org 포크로 옮겨갔다. 그리고 모두가 읽은 부분. 프로젝트 리드 Leah Rowe가 이번 릴리스에서 가장 중요한 변경이라고 부르는 "반(反)AI" `AGENTS.md`다. `p-e-w`는 그 프레이밍에 반대한다. AI 금지 정책에 대한 존중은 그 정책이 욕설로 시작하는 순간 끝날 수 있다는 것이다. 한편 `jameshilliard`는 이미 AI의 도움을 받은 패치를 업스트림 U-Boot에 보낸 적이 있다고 지적하는데, Libreboot는 그걸 금지한다고 주장한다. Rowe는 스레드에서 슬롭(slop)에 대한 법적 책임을 언급하며 답한다. Heads 프로젝트의 `cwiggs`는 Libreboot가 한 번에 233개 기기를 들여온 게 놀랍다고 하고, `iamnothere`는 크롬북 지원이야말로 진짜 이야기라고 주장한다. 맞다.
- **Show HN: Petal, open-source CoScreen/ScreenHero finally free** — 208 points · 39 comments · [petal.live](https://petal.live/). Apache-2.0 라이선스의 창 공유·페어 프로그래밍 도구로 LiveKit 위에 만들어졌다. macOS 13 이상, 서명된 빌드에 초기 미서명 윈도우 클라이언트가 있고 리눅스는 없다. 공유한 창은 각각 라벨이 붙은 커서와 원격 제어를 갖춘 진짜 네이티브 창이 되고, 이들의 클라우드를 쓰거나 셀프 호스팅하거나 포크할 수 있다. 창업자의 피치는 솔직하다. Datadog이 7월 31일 CoScreen을 종료했고, 원래 팀 중 네 명이 이걸 다시 만들었다. 반응은 의도에는 따뜻하고 수요에는 회의적이다. `dvt`는 이게 Meet이나 Discord보다 나은 게 뭐냐고 묻고, `iovrthoughtthis`는 아마 10년 늦었다고 하고, `morikyouko`는 빠진 CJK·IME 지원을 아시아 시장에서의 결정적 결격사유라고 부르며, `compounding-err`은 배포된 앱이 재빌드 없이 셀프 호스팅 백엔드를 가리킬 수 있느냐고 묻는다. 실제 구멍이다. 알아챌 만한 건, Screenhero의 공동 창업자인 `jsherwani`가 이 제품을 지지하는 대신 자기 후속작을 홍보하러 스레드에 나타난다는 점이다.
- **Pg_vectorsearch: an index faster than pgvector's IVFFlat and HNSW** — 206 points · 52 comments · [github.com/timescale](https://github.com/timescale/pg_vectorsearch). Tiger Data가 내놓은 새 PostgreSQL 확장으로 PRISM 인덱스를 갖췄다. 차원당 약 1비트의 RaBitQ 양자화, 센트로이드 트리, 포스팅 리스트, SOAR 스필링, AVX2/512/NEON 경로, PostgreSQL 라이선스, 알파, PG 18 이상, 변경이 잦을 때 수동 리밸런싱. 벤치마크는 자체 보고이고 README에는 없다. 벤더 블로그에 있으며 벤더 자체 도구로 생성됐다. 숫자는 여전히 인상적이다. Cohere 임베딩 1억 개에서 PRISM은 **1시간 40분**에 구축됐고 25GB 인덱스로 95% 재현율에 p50 6ms로 응답했는데, 같은 머신에서 HNSW는 구축을 끝내지 못했다. 4배 더 비싼 인스턴스에서는 HNSW가 42시간 걸렸고 99% 재현율에 도달하지도 못했다. 이 프로젝트에서 가장 인용할 만한 건 자기 고백이다. 팀은 이전에 만든 자기 확장인 pgvectorscale을 버렸는데, 그래프 인덱스의 재현율이 조용히 나빠졌기 때문이며, 이제 유지보수 모드로 들어간다. `esafak`은 맞는 질문을 한다. 빠르다면 벤치마크를 앞세워라, QPS와 정밀도와 재현율을. `Rapzid`는 필터링이 포스트 필터뿐이라 테넌트와 권한 스코프가 해결되지 않았다고 지적하고(숫자는 유효하다), `devy`는 걸림돌을 나열하며(1968차원 상한, PG 18 이상, 알파, 관리형 Postgres 허용 목록), Tiger Data의 CTO가 스레드에 나타난다. 이제 데이터베이스 출시의 표준 관행이다.

**Show HN: How random are you?**는 당신의 무작위 시도가 기계의 것과 구별되는지 시험하는 테스트이고, 114명이 그 답을 알게 됐다 — 213 points, up from 207.

## 아직 오르는 중

아래 항목은 모두 이전 라운드업에서 다뤘다. 이야기는 변화량이다. 이 중 상당수가 처음 쓰인 날보다 오늘 더 많은 points를 얻었기 때문이다.

| 글 | 이전 | 현재 | 변화량 |
| --- | --- | --- | --- |
| [Gemini 4 Argon](https://deepmind.google/models/gemini/) | 1,426 (10-14) | 1,454 | +28 |
| [Containment and monitoring failures are to blame for AI hacking reports](https://www.csoonline.com/article/4234854/ai-agents-arent-going-rogue-frontier-labs-are-skipping-security-basics.html) | 652 (10-14) | 934 | +282 |
| [How Amazon pushes up prices all across the Internet](https://www.not-ship.com/how-amazon-pushes-up-prices-all-across-the-internet/) | 635 (10-14) | 920 | +285 |
| [Hackers activate automatic defrosting in European supermarket fridges](https://www.tomshardware.com/tech-industry/cyber-security/unprecedented-cyberattack-cripples-supermarket-fridges-across-europe-as-hackers-activate-automatic-defrosting-delivery-and-store-prices-also-impacted-by-incident) | 900 (10-14) | 906 | +6 |
| [Redesigning source control at Anthropic](https://www.anthropic.com/engineering/redesigning-source-control) | 855 (10-14) | 884 | +29 |
| [Ledger confirms spy chip implant behind wallet crypto thefts](https://www.bleepingcomputer.com/news/security/ledger-confirms-hardware-wallet-spy-implant-behind-crypto-thefts/) | 776 (10-14) | 790 | +14 |
| [AI is a tool and using it well takes skill](https://yyhh.org/blog/2026/10/ai-is-a-tool/) | 752 (10-14) | 784 | +32 |
| [Firefox Enterprise](https://www.firefox.com/en-US/enterprise/) | 744 (10-14) | 771 | +27 |
| [Apple HomeView](https://www.apple.com/apple-homeview/) | 747 (10-14) | 757 | +10 |
| [11 year old unsoundness bugs found in Rust borrow checker](https://github.com/rust-lang/rust/issues/164250) | 739 (10-14) | 745 | +6 |
| [Iosevka](https://typeof.net/Iosevka/) | 631 (10-14) | 735 | +104 |
| [GLM-Legal](https://z.ai/blog/glm-legal) | 670 (10-14) | 673 | +3 |
| [OpenAI engineer arrested in bugging of executive conference room](https://sfstandard.com/2026/10/13/openai-engineer-arrested-alleged-bugging-executive-conference-room/) | 639 (10-14) | 650 | +11 |
| [Passkeys are not a trap](https://scotthelme.co.uk/passkeys-are-not-a-trap/) | 317 (10-14) | 637 | +320 |
| [Show HN: Guitoro](https://guitoro.com/) | 565 (10-14) | 565 | 0 |
| [Terence Tao: Math 2.0 [pdf]](https://teorth.github.io/tao-web/slides/math-2-0-caltech-2026.pdf) | 560 (10-14) | 561 | +1 |
| [ICE Planning $100M 'Nightmare' Domestic Spy Program](https://prospect.org/2026/10/14/ice-planning-nightmare-domestic-spy-program-ero-one/) | 398 (10-14) | 524 | +126 |
| [Google is silently linking your phone number across all signed-in accounts](https://www.androidauthority.com/google-auto-phone-number-verification-android-3723117/) | 209 (10-14) | 501 | +292 |
| [AOSP Source Releases Are So Late Developers Disassemble Libraries to Report Bugs](https://github.com/android/ndk/issues/2260) | 466 (10-14) | 497 | +31 |
| [CFTC Staff Were Told to Retract Analysis of Suspicious Oil Trades](https://www.bloomberg.com/news/features/2026-10-13/cftc-staff-told-to-retract-analysis-of-suspicious-oil-trades-on-iran) | 459 (10-14) | 462 | +3 |
| [Turn a WiFi 7 Router into a 320Msps Software Defined Radio Receiver](https://github.com/h0m3us3r/w1700k-sdr) | 421 (10-14) | 425 | +4 |
| [The baffling intelligence of a single cell (2024)](https://jsomers.net/e-coli-chemotaxis/) | 413 (10-14) | 417 | +4 |
| [The United Kingdom generates less electricity per person than in the 1970s](https://ourworldindata.org/data-insights/electricity-generation-per-person-in-the-united-kingdom-has-fallen-by-a-third-from-its-early-2000s-peak) | 397 (10-14) | 410 | +13 |
| [Thunderbird for iOS](https://blog.thunderbird.net/2026/10/thunderbird-for-ios-a-first-look-at-the-native-iphone-email-app-in-development/) | 456 (10-14) | 461 | +5 |
| [We turned EmbeddingGemma 2 into a speech-to-text model](https://eg2.haku.sh/) | 423 (10-14) | 432 | +9 |
| [I posted to HN, and then my website was flooded with AI bot traffic](https://www.sammystraus.com/) | 339 (10-14) | 345 | +6 |
| [Recreational Programming](https://www.cphiri.dev/presentations/recreational-programming) | 296 (10-14) | 316 | +20 |
| [Intel D270 GPU AI Accelerator](https://www.intel.com/content/www/us/en/products/details/discrete-gpus/data-center-gpu/d-series.html) | 306 (10-14) | 308 | +2 |
| [Apple's new 'Switch to Safari' campaign](https://9to5mac.com/2026/10/12/apples-new-switch-to-safari-campaign-details-why-you-should-ditch-chrome/) | 286 (10-14) | 291 | +5 |
| [Felix Rieseberg Homepage](https://felixrieseberg.com/) | 268 (10-14) | 282 | +14 |
| [AI models can provably hide arbitrary capabilities](https://arxiv.org/abs/2610.13928) | 278 (10-14) | 279 | +1 |
| [MIT class project turns into an FDA-cleared treatment for tremors](https://news.mit.edu/2026/mit-class-project-turns-into-fda-cleared-treatment-for-tremors-1002) | 266 (10-14) | 271 | +5 |
| [Sound (2022)](https://ciechanow.ski/sound/) | 261 (10-14) | 267 | +6 |
| [900-Page Pre-Pantone Guide to Color from 1692](https://www.openculture.com/2026/10/a-900-page-pre-pantone-guide-to-color-from-1692.html) | 256 (10-14) | 267 | +11 |
| [Grace Hopper Celebration Cancelled](https://anitab.org/press-release) | 232 (10-14) | 256 | +24 |
| [Who is vfmaddrnd231pd?](https://purplesyringa.moe/blog/who-is-vfmaddrnd231pd/) | 252 (10-14) | 254 | +2 |
| [A Dynamic and Distributed Virtual GPU Cloud Built on Idle Apple Silicon Devices](https://machinelearning.apple.com/research/distributed-gpu-cloud) | 246 (10-14) | 246 | 0 |
| [A look at the math that OpenAI claims computes faster Fourier transforms](https://www.argmin.net/p/faster-fourier-transforms) | 243 (10-14) | 244 | +1 |
| [Switzerland proposes banning profiling-based ads to minors](https://www.admin.ch/en/newnsb/NMn5s24l8NjQ) | 230 (10-14) | 241 | +11 |
| [I Found a $90k Remote Code Execution Vulnerability in Google](https://simonkoeck.com/writeups/google-devsite-flask-session-pickle-rce) | 236 (10-14) | 239 | +3 |
| [Janas: run LLMs larger than RAM by streaming experts from SSD](https://github.com/prabanta-dev/janas) | 219 (10-14) | 220 | +1 |
| [Kevin Kelly's 2016 AI Predictions, 10 Years Later](https://taylor.town/kk-ai-2026) | 218 (10-14) | 220 | +2 |
| [Show HN: How random are you?](https://lab.specr.net/rigged-draw/) | 207 (10-14) | 213 | +6 |
| [RJ Mitte has died](https://news.sky.com/story/breaking-bad-star-rj-mitte-dies-aged-34-13598332) | 212 (10-14) | 212 | 0 |

그중 세 개는 한 문장씩 쓸 만하다. 아마존 가격 기사는 635에서 920으로 거의 두 배가 됐다. 새로 쓴 단어 하나 없이 FTC의 가격 하한선 이론을 이 페이지에서 두 번째로 큰 이야기로 만든 셈이다. 패스키는 하루 만에 317에서 637로 갔다. "Passkeys are a trap"에 대한 반박글이 이제 원글의 첫날 점수를 넘어섰고, 기술적으로 더 강한 반박이 이틀 뒤에 따라잡는 패턴은 지켜볼 만하다. 그리고 13일과 14일의 AI 논쟁 기사 두 편 — 934의 통제 실패 기사와 784의 AI는 도구라는 에세이 — 은 둘 다 뉴스가 아니라 논쟁으로 아직 오르는 중이다.

## 관통하는 것

오늘의 주제는 두 개이고, 두 번째가 첫 번째가 결론에 이르지 못하는 이유다.

첫째는 추천, 그리고 그 추천으로 누가 돈을 버는가다. 이 페이지에서 가장 큰 두 이야기는 암 환자가 자기 프로젝트 매니저가 되라고 말하는 것, 그리고 치과 환자가 시술을 제안하는 사람이 그 병원의 주인이라고 말하는 것이다. 둘 다 n=1이다. 그런데도 둘 다 Hacker News 정상에 올랐다. 근저의 주장이 반복해서 측정됐고 반박된 적이 없기 때문이다. 환자 한 명, 취리히 치과의사 180명, 극단적으로 갈리는 진단, 더 가난하게 차려입은 환자에게 더 많은 치료 처방. 치과의사 50명에게 같은 입을 보여주고 받은 견적은 460달러에서 2만 9,850달러까지였다. 의료는 신용재(credence good)다. 산 것을 평가할 수 없고, 가격은 품질의 신호가 아니며, 소비자가 가진 유일한 수단은 세컨드 오피니다. 은행 기사는 같은 원리를 부채에 적용한다. SRT는 대출자가 자기가 방금 만든 위험을 더는 안고 싶지 않다고 결정한 것이고, 그 기사에서 누구나 확인할 수 있는 숫자는 CDS 스프레드 하나뿐이다. DFP 설문은 사람들에게 30년치 행동을 호환되지 않는 두 도구로 자기보고하게 하고, 그 단서를 스스로 명시한다. 텔레그래프는 평평한 전체 자살률을 가져다, 조각이 움직일 때까지 잘라내서 사상 최고라고 보도한다. 모든 경우에서, 그 주장을 할 유인이 있는 사람이 곧 그것을 측정한 사람이다.

두 번째 주제는 출처(provenance)다. 누가 측정했느냐고 물었을 때 아무도 답하지 못할 때 벌어지는 일이다. 오늘 페이지는 저자를 온전히 특정할 수 없는 결과물로 유난히 가득하다. Anthropic의 Scion 대 Meta의 Mononoke는 데이터 모델이 복사됐는지에 대한 논쟁이고, 가장 강한 증거는 비공개 서신에 들어 있다. Muse Spark Open의 벤치마크 항목은 비어 있고 라이선스는 상업적 사용을 매출 2,000만 달러로 제한한다. LFM2.5는 벤더가 자기 인프라에서 돌린 벤치마크를 공개하면서, 이 모델은 빠르고 똑똑하지 않다고 솔직하게 보고한다. Jev는 벤치마크 숫자를 이미지로 공개하고는 믿지 말라고 말한다. Cloudflare는 경쟁사의 장애를 측정하고 같은 글에 모순되는 두 개의 자동화 비율을 싣는다. Go의 5배 빠르다는 주장은 저자 하나, 엔드포인트 하나, 실행 한 번이고 HTTP/2에는 적용되지 않는다. "Neural networks are clean"은 단일 작업 뉴런 극(pole)이 90%라고 보고하면서 그 수치 뒤의 임계값은 임의적이라고 인정한다. 반려견용 코 가리개, 스큐어모픽 Wayland 데스크톱, 브라우저 오피스 제품군, 부동산 검색 사이트가 모두 독자들이 생성된 텍스트라고 정확히 알아본 글과 함께 왔고, 세 경우에는 저자가 인정했다. 댓글창은 출처 판별을 위한 동료심사 과정이 됐고, 그 심사는 훌륭하다. `BryantD`가 Mononoke가 Sapling의 구성요소임을 잡아내고, `blop`과 `zahlman`이 AdFection 보고서에서 빠진 익스플로잇 세부를 찾아내고, `projektfu`가 자살 관련 헤드라인을 ONS 자체의 코호트 프레이밍과 대조하고, `windowshopping`이 침실 2개 콘도가 50에이커로 등록된 걸 찾아낸다.

이 둘을 합치면 오늘의 모양새가 불편해진다. 가장 많이 읽힌 두 기사는 전문가의 추천보다 자기 판단을 믿으라는 것이고, 나머지 50개는 그렇게 하려고 쓸 증거가 대부분 출처 불명이라는 걸 보여주는 데모다. 치과 에세이는 일화다. 암 목록은 n=1이다. 설문 도구들은 서로 어긋난다. 벤치마크는 자체 보고이거나 이미지다. 부동산 데이터는 원천에서 틀렸다. 보안 연구는 익스플로잇을 빼놓는다. 벤더는 자기 네트워크를 측정한다. 이 페이지에서 거짓말하는 사람은 없다. 자기 한계를 인정하는 글들이 이 페이지에서 가장 좋은 글들이다. 하지만 독자가 어느 추천을 따라야 할지 결정하게 해주는 장치는 속이 텅 비었고, 첫 페이지가 내놓는 대체물은 낯선 사람 400개 댓글이 서로를 감사하는 것이다. 그건 작동한다. 동시에, 가장 오래가지 않는 결과물을 위해 조립된 사상 가장 비싼 검증 장치이기도 하다.

가장 적게 논의된 기사가 가장 오래 중요해질 기사이고, 이번에도 그렇다. `AI models can provably hide arbitrary capabilities`는 이틀이 지난 지금도 279 points로 페이지에 남아 있고, 오늘 뉴스 중 그것을 반박하는 건 없다. 모델이 특정 능력을 암호학적 잠금 뒤에 숨기고 파인튜닝, 가중치 노이징, 경사 기반 트리거 탐색, 잠재 적대적 학습에 저항하도록 훈련될 수 있다면, 감사는 어려운 문제가 아니다. 주어진 가정 아래에서 형식적으로 풀 수 없는 문제다. 오늘 나머지 전부는 특정 결과물이 사람이 만든 것인지 기계가 만든 것인지, 그것이 사람이 쓴 논문인지 기계가 쓴 논문인지, 그리고 그게 중요한지에 대한 논쟁이다. 그 기사는 당신이 그걸 알 수 있기는 한 건지에 대한 논쟁이다.

---

*출처: 2026-10-15에 수집한 [Hacker News](https://news.ycombinator.com/) 첫 페이지, **200 points** 이상 기사 **54개**, 그중 26개가 신규. 기사 본문은 Firecrawl로 추출했고, 댓글 스레드는 Hacker News Firebase API로 읽었으며, 날짜 훑기는 Algolia API로 했다. 순위 창에서 놓친 가디언의 AdFection 보도(475)와, 다른 헤드라인으로 같은 연구였던 기사 하나가 이 과정에서 나왔다. 검증하지 못한 숫자 두 개는 해당 위치에 표시해뒀다. 텔레그래프의 자살 수치는 모든 추출 시도에 403을 반환했고 ONS 발표와 어긋나기 때문이며, Muse Spark Open의 벤치마크 주장은 발표 페이지에 아무 수치도 없기 때문이다.*
