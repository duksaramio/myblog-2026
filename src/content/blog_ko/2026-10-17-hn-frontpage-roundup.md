---
title: "해커뉴스 프런트페이지 라운드업 — 2026년 10월 17일"
pubDate: 2026-10-17
description: "43개 스토리가 200포인트를 넘겼고 그중 20개가 새로 올라왔다. 오늘 페이지의 진짜 주장은 누가 코드를 리뷰하는가에 관한 것이다. Anthropic은 기계가 그 일을 맡았다고 말하고, Postgres는 기계가 너무 많이 찾아내는 바람에 릴리스를 미뤘다."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
lang: "ko"
---

오늘 top-170 창 안에서 200포인트를 넘긴 스토리는 43개, 그중 20개가 새것이다. 나흘 만에 가장 적은 신규 물량인데, 페이지가 조용해져서 그런 게 아니다. 상위 네 자리는 전부 이번 주 초에 이미 다뤘던 스토리이고, 지금 1,949, 1,590, 1,463, 1,007포인트다. HN의 랭킹 감쇠는 충분히 느려서 큰 스토리 하나가 사흘 동안 페이지를 지배한다. 이 라운드업은 그 아래에서 쓰인다.

새로 올라온 것들은 두 갈래다. 하나는 모델이다. DeepSeek는 MIT 라이선스 763B 체크포인트를 냈고, Paper Instruments는 가중치가 '곧 공개'된다는 GLM 파인튜닝을 내놨고, Black Forest Labs는 5.6B 이미지 모델을 냈다. 다른 하나는 리뷰다. Anthropic은 자사 Claude Code 팀이 기계가 쓴 코드를 어떻게 리뷰하는지 공개했고, 그보다 205포인트 아래에서 PostgreSQL 프로젝트는 기계 리뷰가 유지보수자가 고칠 시간보다 많은 버그를 찾아내는 바람에 릴리스를 미뤘다. 오늘을 만드는 건 이 두 스토리다. 나머지는 질감이다.

## DeepSeek-v4.1-Flash-1017 — 541 points

**541 points** · 495 comments · [huggingface.co](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) · [HN discussion](https://news.ycombinator.com/item?id=50129045)

763B 파라미터 모델, MIT 라이선스, 1M 토큰 컨텍스트, 권장 `max_tokens` ≥ 256K, 그리고 'Pushing the Limits of KV Cache Compression'이라는 기술 보고서. 모델 카드는 스스로를 "마이너 업데이트"라고 부르고, 바로 같은 문장에서 "추론, 코딩, 에이전트 작업, 비전 벤치마크 전반의 상당한 개선"을 주장한다. `pmxi`가 그걸 알아챘다. 오늘 페이지에서 가장 자기인식이 부족한 마케팅 문구이고, 동시에 숫자로 보면 가장 흥미로운 릴리스다.

벤치마크 표는 대부분의 표와 달리 정직하다. Opus 5가 HLE에서 56.3 대 42.6으로 이긴다는 사실을 실었고, 이전 Flash의 36.8도 실었으므로 격차가 암시가 아니라 눈에 보인다. 개선은 에이전트와 코딩 쪽에 몰려 있다. Terminal-Bench 4.0은 31.2에서 42.3으로, ProgramBench는 20.3에서 29.1로, DeepSWE는 77.0으로 Opus 5의 74.0과 GPT-5.6 Sol의 73.0을 앞선다. HLE에서는 여전히 14포인트 뒤진다. 요약하면 이렇다. 가장 똑똑한 모델은 아니지만, 도구 사용의 최전선에서 가성비는 확실히 최고다.

댓글이 카드보다 유용하다. `AmazingTurtle`은 같은 200개 파일짜리 C++ diff에 에이전트 넷을 붙여봤다. DeepSeek는 20분 걸려 관련 있는 P1 하나와 관련 없는 P2 하나를 찾았다. GPT-5.6 Sol은 5분 30초에 P1 하나, P2 하나를 찾았고 둘 다 관련 있었다. DGX Spark 두 대에서 돌린 GLM-5.3 Flash는 65분 만에 문서 관련 P3 하나를 찾아냈다. `apejcic`은 새 가중치가 각 추론 강도에서 출력 토큰을 대략 20% 줄였고, 이제 추론 강도 1이 실제로 쓸 만해졌다고 측정했다. `ilitirit`은 며칠째 chief/builder/reviewer 스웜을 돌리면서, 이제 엔지니어링은 이쪽이 하고 Opus가 리뷰한다고 한다. `OsrsNeedsf2P`은 벤치마크 없이 "더 좋게 느껴진다"는 현상을 설명한다. 프로바이더 처리량, 그리고 작업 도중 세이프티 리뷰로 막히지 않는 것. 마지막 항목은 어떤 리더보드에도 없고, 아마 HLE 칸보다 많은 개발자 충성도를 결정할 것이다.

## Claude Code 팀의 코드 리뷰 방식 — 447 points

**447 points** · 438 comments · [claude.dev](https://claude.dev/blog/solving-code-review-at-anthropic/) · [HN discussion](https://news.ycombinator.com/item?id=50122951)

Anthropic의 Claude Code 팀은 Claude Code 코드의 약 90%를 Claude가 쓴다고 말한다. 이 글은 그 결과에 관한 것이다. 6월에서 9월 사이 머지된 PR은 두 배 이상 늘었고, 되돌려야 했던 비율은 40% 넘게 떨어졌다. 참고로 Anthropic의 모노레포는 5월 하루 약 2,500건이던 변경이 9월에는 30,000건을 넘었다.

메커니즘은 정의를 바꾸는 것이다. "사람이 이걸 읽었나" 대신 "무엇이 잘못될 수 있고, 어떤 검사가 그걸 잡나"를 묻는다. 리뷰는 끝에 있는 관문에서 연속적인 무언가로 옮겨갔고, 맞춤법 검사기에 가까워졌다. 저위험 변경, 즉 문서, 카피, 내부 전용 기능, 플래그 뒤에 붙는 추가형 변경은 자동 리뷰와 보안 검사가 초록불이면 사람 리뷰가 아예 필요 없다. 사람의 주의는 다섯 가지 결정에 배분된다. 이걸 만들 것인가, 위험한 코드(빌링, 자동 업데이터, CI 워크플로), 패턴을 정하는 아키텍처, 검사 근거 읽기, 결과에 대한 소유. 코드 리뷰의 두 번째 일, 즉 코드베이스 이해를 퍼뜨리는 일에는 이제 공식 절차가 없다는 점도 그들은 명시한다. "팀에서 Claude Code 전체를 머릿속에 담고 있는 사람은 아무도 없다."

반박이 알맹이다. `avinoth`: 이건 구글 인프라 블로그 글이다. 구글 프로세스를 베낀 작은 팀들은 고통만 얻었다. `afro88`은 실제 구멍을 짚는다. "플래그 뒤의 추가형 변경"은 플래그가 꺼져 있을 때 저위험이다. 그럼 플래그를 켜기 전에 제대로 된 리뷰가 갑자기 생기나? 위험이 실제로 발생하는 시점이 바로 거기인데. `koolba`는 아무도 안 읽을 문서를 LLM에게 쓰게 하는 일에 대해 "순수한 광기"라고 한다. `squidlib`은 Anthropic이 축소해서 말하는 부분을 지목한다. 타이핑에서 아낀 시간은 자기가 쓰지 않은 코드를 이해해야 하는 의무로, 불리한 환율로 되돌아온다. 게다가 자기가 실수를 키웠다는 기분까지 붙는다. `chris_money202`는 이 루프 전체가 변경을 몇 초 만에 검증할 수 있는 스택을 전제한다고 지적한다. 컴파일 프로젝트와 하드웨어에는 그런 게 없다.

반례는 오늘 같은 페이지에, 205포인트 아래에 있다. 두 개를 나란히 놓고 읽을 가치가 있다.

## 기억만으로 트랜스포머를 발명할 수 있었다 — 444 points

**444 points** · 106 comments · [alexwang.ai](https://alexwang.ai/posts/associative-memory/) · [HN discussion](https://news.ycombinator.com/item?id=50122878)

Alex Wang의 글은 트랜스포머의 모든 층을 메모리 저장소로 다시 읽고, 메모리 저장소에 대해 물어야 할 유일한 질문을 던진다. 재현율이 떨어지기 전까지 키-값 쌍을 몇 개나 담을 수 있나? 지표는 간섭 대 신호 비율, 즉 저장된 다른 기억들이 당신이 요청한 하나에 얼마나 새어드는가다.

유도 과정이 핵심이다. 선형 층은 기억을 외적으로 저장한다. `v kᵀ`를 가중치에 더하는 식이고, 64차원 키에서는 간섭이 신호를 덮어버리기 전까지 약 64개가 한계다. ReLU를 붙인 MLP는 대략 2,700개까지 간다. 거의 직교하는 키에 의존하는 대신 키 공간을 영역으로 쪼갤 수 있기 때문이다. 셀프 어텐션은 다른 짓을 한다. 키와 값을 들고 있다가 쿼리 시점에 조회한다. 그래서 용량이 가중치 행렬에 묶이지 않고, 64차원 키로는 100만 개를 넘는다.

곁가지가 멋진 부분이다. 선형 층에 대한 경사하강 한 스텝은 문자 그대로 메모리 쓰기다. 키는 `x`, 값은 `-ηȳ`. 그래서 '학습'과 '저장'은 서로 다른 시간 스케일에서 본 같은 연산이 된다. `femto`는 이게 통신공학 어휘라는 유용한 지적을 얹는다. 용량, 간섭, 신호 대 잡음. 채널을 최적화해 본 사람들은 이미 그 직관을 갖고 있다. 1학년 CS 학생인 `crediblejhj`가 이걸 세 문장으로 정확하게 다시 말한다. "좋은 글"이라는 댓글보다 설명 글을 검증하는 더 나은 테스트다. 글에는 인터랙티브 앱과 코드도 함께 실려 있다. 444포인트에 있는 이유다.

## 태양광, 사상 처음으로 전 세계 원자력 발전량 추월 — 371 points

**371 points** · 211 comments · [pv-magazine.com](https://www.pv-magazine.com/2026/09/29/solar-surpasses-nuclear-power-globally-for-first-time/) · [HN discussion](https://news.ycombinator.com/item?id=50131256)

이 주장은 Mycle Schneider가 감독한 World Nuclear Industry Status Report 2026에서 나온다. 알려진 입장이 있는 보고서이고, 태양광 업계지에 실렸으니 프레이밍은 그만큼 할인해서 받아들여야 한다. 그래도 기저 숫자는 여전히 놀랍다. 2025년 세계 태양광 발전량은 약 30% 늘어 처음으로 원자력의 연간 발전량을 넘어섰다. 원자력은 2,703 TWh를 생산해 1.1% 늘었는데, 중국이 7.6% 늘고 나머지 지역은 모두 0.2% 줄었다. 세계 전력에서 원자력 비중은 8.8%로 떨어져 1996년 정점 17.5%의 절반 수준이고, 세계는 2021년 이후 처음으로 연간 원자로 순감소를 기록했다. 가동 4기, 폐쇄 7기.

설비용량은 같은 이야기를 더 빨리 해준다. 태양광은 510 GW를 추가해 2,383 GW가 됐고 27% 늘었다. 풍력은 사상 최대인 159 GW를 추가했다. 원자력 설비용량은 1.5 GW 늘어 399.5 GW가 됐지만 가동 용량은 오히려 줄었다. 2026년 7월 1일 기준 31개국에서 가동 가능한 원자로는 411기다. Schneider의 한 줄이 정직한 요약이다. "문제는 성장률이야, 이 멍청아."

기사 자체가 붙이는 두 가지 단서. WNISR의 PV 수치는 보수적이다. IEA PVPS는 2025년 추가량을 690 GW 근처로 본다. 약 180 GW 더 높고, 격차는 더 벌어진다. 그리고 이 비교는 연간 에너지이지 디스패치 가능한 용량이 아니다. 태양광의 30% 성장률과 원자력의 평평한 출력은 서로 다른 종류의 사실이다. 스레드의 회의론자들은 태양광 숫자가 명목 용량과 중국의 건설 붐으로 부풀려졌다는 표준적 논거를 대고, 표준적 반론은 TWh 수치가 이미 이용률을 반영한 값이라는 것이다. 둘 다 서로 다른 것에 대해 맞다. 이 논쟁이 끝나지 않는 이유다.

## Ultramarine 1 Flash — 363 points

**363 points** · 104 comments · [paperinstruments.com](https://www.paperinstruments.com/ultramarine) · [HN discussion](https://news.ycombinator.com/item?id=50106747)

Paper Instruments는 "금융, 법률, 컨설팅, 운영에 걸친 지식 노동에서 Fable급"이고 "Fable보다 60배 싸다"고 파는 모델을 내놨다. 작업당 $0.13으로, $8.19의 Claude Fable 5와 $2.09의 GPT-5.6 Sol을 이긴다. 백만 토큰 가격은 입력 $0.15, 캐시 $0.03, 출력 $0.50으로 GLM-5.3 Flash와 같다.

마지막 디테일이 핵심이고, 회사도 기술 보고서에서 노골적으로 밝힌다. Ultramarine은 GLM-5.3 Flash에 대규모 강화학습을 적용한 것이다. `kadoban`이 그 문장을 찾았다. 즉 중국 오픈 모델을 사후학습시켜, 전문직 업무 벤치마크로 포장하고, 베이스 모델 대비 적당한 마진을 붙인 물건이다. 정당한 사업이다. 다만 "전문직 업무를 위한 오픈 모델"이 함축하는 것과는 다르고, "모델 가중치 곧 공개"는 오픈이라는 부분이 사실이 아니라 약속이라는 뜻이다.

벤치마크 비판은 가격 비판보다 날카롭다. `CobrastanJorji`는 결과 섹션이 Ultramarine이 모든 지표에서 이기는 모델들과만 비교하다가, 작업당 비용 그래프에서 갑자기 Fable 5.1, GPT-6 Astra, Claude Opus 5.5를 다시 끌어온다고 지적한다. 실제로 점수가 더 높은 모델들인데, 그 축에서는 비싸 보이기 때문이다. 주 벤치마크인 PI Knowledge Work는 내부 것이고, Artificial Analysis Intelligence Index와 r = 0.81의 상관관계를 주장한다. `bythreads`는 많은 사람이 생각하는 것을 말한다. 컨텍스트 주입과 가드레일을 두른 GLM 껍데기를 스타트업이라고 팔고 있다고. `wolttam`과 `vehemenz`는 둘 다 이게 잘 되길 바라고, 한 명은 제한된 테스트에서 가격 대비 성능이 주장과 일치했다고 보고한다. 둘 다 사실일 수 있다. 숫자는 맞고, 프레이밍은 여전히 누락으로 인해 부정직할 수 있다.

## 탈옥한 PS5에서 돌아가는 llama.cpp — 361 points

**361 points** · 84 comments · [github.com/cobanov](https://github.com/cobanov/PS5LM) · [HN discussion](https://news.ycombinator.com/item?id=50122431)

누군가 탈옥한 PlayStation 5에서 llama.cpp를 네이티브로 빌드해 돌렸고, 연산은 콘솔 GPU가 한다. README는 추출 과정에서 살아남지 못했다. GitHub이 내비게이션과 파일 목록만 내줬다. 그래서 여기 세부사항 대부분은 저장소가 아니라 스레드에서 온 것이다. 밝혀둘 만하다.

흥미로운 숫자는 초당 토큰이 아니라 경제성이다. `jjcm`은 Qwen 3.8 27B를 2비트 양자화로 돌리는데 전기세가 하루 약 70센트라고 한다. 커피 한 잔 값으로 하루 출력 토큰 약 2M개인 셈이다. 이건 기기에 대한 인식을 바꾼다. 빠른 통합 메모리 APU를 가진 잠긴 게임 콘솔이, 평균보다 살짝 못한 지능의 안정적인 공급만 필요한 작업에는 값싼 상시 가동 추론 박스가 된다. 로그 분류, 카메라 검토, 화분 물 주기. `shiftpgdn`은 같은 실리콘이 AMD Cyan Skillfish APU 기반의 구 크립토 채굴 보드 BC250에 들어가고, 이베이에서 아직 $150–$200이라고 적는다. 중범죄 없이 가능한 버전의 이야기다.

두 댓글이 기술적 디테일보다 세게 박힌다. `Rabbit504030201`은 이 프로젝트가 애초에 GitHub에 있으면 안 된다고 주장한다. Sony가 테이크다운을 날리면 산출물이 사라지기 때문이다. 잠긴 기기를 해킹한 결과물은 도메인과 미러가 절실한 물건이다. 그리고 `ra0x3`은 자기 게임은 여전히 할 수 있느냐고 묻는다. 홈브루 이야기 전체가 이 한 질문에 담긴다. 콘솔을 뚫어 범용 코드를 돌리는 일은 단 한 번도 게임 때문이었던 적이 없다.

## Butlerian Jihad — 351 points

**351 points** · 227 comments · [dune.fandom.com](https://dune.fandom.com/wiki/Butlerian_Jihad) · [HN discussion](https://news.ycombinator.com/item?id=50127274)

던 위키 페이지가, 모델 릴리스 세 건이 올라온 날 351포인트에 있다. 페이지 자체는 Fandom의 봇 차단을 넘지 못했다. 그래서 실제로 논의되는 것은 스레드이고, 그게 페이지보다 나았다.

알맹이부터. 허버트의 소설 여섯 편에서 기계의 실제 죄는 끝내 명시되지 않는다. `Thrombocius`는 이 지하드가 유용한 기술이 통제를 벗어난 데 대한 종교 운동이었을 수 있다고 본다. "러다이트가 이겼다면 어땠을까." `cautiouscat`은 2026년에 중요한 구분을 짚는다. 대부분의 SF에서는 AI가 인류를 파괴하기로 결정한다. Dune에서는 기계를 돌리던 인간이 거의 그렇게 만들고, 지하드는 하드웨어만큼이나 기술관료에 대한 것이다. `SarikayaKomzin`은 이름의 유래인 새뮤얼 버틀러의 *Erewhon*을 가리킨다. 1872년에 같은 주장을 했다. `Animats`는 김을 빼준다. 아라키스는 스파이스 때문에 중요하고, 스파이스는 항법사가 필요로 하기 때문에 중요하고, 랙에 꽂힌 항공전자 장비 몇 개면 그 일은 끝난다. 그래서 이 세계관에 지하드가 필요한 것이다.

`antihipocrat`은 페이지 맨 아래에서 하이데거를 언급한 문단을 찾는다. 기술은 인간을 기계처럼 생각하도록 훈련시키고, 기계는 결정론적이므로 그 훈련은 자기 제한적이다. 그는 확률적 LLM이 그 계산을 바꾸는지 묻는다. 아무도 답하지 않는다. 그게 맞다. 아무도 모르니까.

## 토론토의 Waymo — 325 points

**325 points** · 433 comments · [waymo.com](https://waymo.com/blog/2026/10/waymo-in-toronto/) · [HN discussion](https://news.ycombinator.com/item?id=50118981)

Waymo의 미국 밖 첫 시장이고, 이야기는 타임라인이다. 수동 주행이 며칠 안에 시작되고, HD 매핑과 검증이 뒤따르고, 첫 공개 탑승은 **2028**년을 목표로 한다. 미국 남서부가 아닌 도시에서 돈 내는 승객을 태우기까지 매핑과 검증에 약 2년. 회사가 눈과 노면전차, 토론토의 좌회전을 어떻게 보는지 알려주는 대목이다.

발표문은 시의회를 독자로 쓴 글이다. 첫 문장이 일자리 창출이다. 토론토의 Element Fleet Management와의 파트너십을 통해 차량 정비, 검증 주행, 고객 서비스에 수백 개 일자리. 장기 투자자인 CPPIB도 이름이 나오고 Magna도 나온다. `ilamont`는 이걸 정확히 읽는다. 일자리 이야기가 나오는 이유는 Waymo의 확장이 입법 싸움이기 때문이고, 수년째 "설레게 해온" 보스턴에 아직 서비스가 없는 이유도 정확히 그 싸움이다.

리뷰는 늘 그렇듯 갈린다. `tpurves`는 샌프란시스코에서 일관되게 훌륭하다고 한다. `tcoop25`는 9분이면 될 오스틴 탑승이 "약간 연장"되어 45분이 됐고, 결국 지원팀이 승객을 식당에 내려주고 우버를 부르라고 했다고 묘사한다. 토론토 사람인 `Djonckheere`는 이 도시에 어떤 종류의 차량도 더 필요 없고 대중교통에 돈을 써야 한다고 주장한다. 세 가지가 동시에 맞다. 기술은 대부분의 경우 작동하고, 새로운 방식으로 실패하고, 도시가 실제로 가진 문제를 풀지 않는다.

## 웹 사용 사례에서 JPEG XL 대 AVIF — 311 points

**311 points** · 205 comments · [jakearchibald.com](https://jakearchibald.com/2026/jpeg-xl-vs-avif/) · [HN discussion](https://news.ycombinator.com/item?id=50120224)

Jake Archibald가 JPEG XL이 모든 주요 브라우저에 들어온 김에 AVIF와 벤치마크를 돌렸고, 결과는 이 포맷의 팬층을 짜증나게 할 것이다. 손실 사진에서는 AVIF가 거의 항상 더 작다. 최고의 JPEG XL 인코딩은 기본 노력도에서 15–25% 크고, 최대 노력도에서도 6–20% 크다. 스크린샷과 일러스트에서는 AVIF가 30–90% 이긴다. 투명도에서는 31–70%. AVIF는 디코딩도 보통 2–3배 빠르고, 파일 크기를 감안하면 인코딩도 대개 더 빠르다.

뉘앙스는 인코더에 있다. libjxl의 높은 노력도 설정은 나쁜 거래다. 훨씬 느리고, 메모리를 훨씬 많이 먹고, 출력은 겨우 나아지고, 파일은 때로 더 커진다. 더 새로운 인코더인 `jixel`은 디테일한 투명도를 빼면 거의 모든 곳에서 libjxl을 이기고, 더 빠르다. 그러니 "JPEG XL이 졌다"는 요약은 틀렸다. "libjxl의 노력도 사다리에 가격이 잘못 매겨졌다"가 더 가깝고, 이 포맷에 남은 장점은 기존 JPEG를 무손실로 재압축한다는 것이다. AVIF는 그걸 아예 못 한다. 그 용도는 바이트당 품질 차트에 나타나지 않고, 사람들이 아직 이 포맷을 신경 쓰는 이유다.

## Anthropic, 6월에 정크 등급 중 최상위 신용등급 받아 — 280 points

**280 points** · 86 comments · [ft.com](https://www.ft.com/content/5a310aee-f555-4266-874c-b1b4db20186d) · [HN discussion](https://news.ycombinator.com/item?id=50122112)

FT는 유료벽이고 기사가 추출되지 않았다. 그래서 이 섹션은 댓글들이 인용한 구절에 기댄다. 보고서에 따르면 Anthropic은 6월 KBRA로부터 정크 등급 중 최상위 등급을 받았고, 공시에서 잉여현금흐름과 EBITDA를 제외했다. 분석가들은 자체 추정치를 만들어야 했다. 그 정도 정보로 KBRA는 전체 재무 모델 대신 "리스크 스코어"를 산출했다.

`master_crab`은 공정한 반론을 낸다. Kroll은 빅3가 아니고, 채권 매수자들은 그걸로 가격을 매기지 않는다. `AnodicElegy`는 불공정하지만 더 흥미로운 반론을 낸다. SpaceX, 그다음 Anthropic, 그리고 등급 기관이 고객 만족을 위해 후한 등급을 뿌렸을 때 마지막에 무슨 일이 있었나. `nickysielicki`는 헤드라인이 됐어야 할 부분을 인용한다. Anthropic과 OpenAI의 은행가들이 IPO를 앞두고 주요 기관들에 투자등급을 로비해 왔고, 투자자들은 2조 달러가 넘는 밸류에이션을 기대한다. 투자등급은 칭찬이 아니다. 연기금과 보험사가 그 채권을 들고 있을 수 있게 해주는 허가증이다.

평범하게 말하면 이렇다. 2조 달러 사모 밸류에이션으로 돈을 모으는 회사가, 자기 인수단조차 현금흐름 수치를 내놓지 않았는데, 그 채무를 당신 어머니의 연기금에 투자등급 금리로 팔고 싶어 한다. 그 문장의 모든 조각이 조심할 이유이고, 어느 것도 모델이 나쁘다는 이유는 아니다. 두 사실은 독립적이고, 그래서 이 이야기가 유용하다.

## OpenCode 해킹: 사용자 자격증명 유출 — 269 points

**269 points** · 50 comments · [twitter.com](https://twitter.com/opencode/status/2111516673953935833) · [HN discussion](https://news.ycombinator.com/item?id=50133401)

OpenCode 자체 게시물: 어젯밤 "대규모 증류 공격과 관련된" 보안 침해가 있었고, **OpenCode Console 사용자의 1.4%**가 영향을 받았으며, 전원에게 이메일로 통지했고, 사고는 진행 중이고, "Anthropic, OpenAI, Google과 함께 해결 중"이다. 자격증명 유출에 대한 197자짜리 공시이고, 답보다 질문을 더 많이 만든다.

스레드는 대부분 자기가 노출됐는지 확인하려는 사람들이다. `djchen`과 `jchw`는 그럴듯한 형태에 수렴한다. 이건 Anthropic, Google, OpenAI 자격증명을 서버 측에 맡긴 BYOK 사용자, 즉 OpenRouter가 키를 보관하는 방식으로 Console을 쓴 사람에게 해당하고, 자기 환경변수로 로컬에서 OpenCode를 돌리는 사람에게는 해당하지 않는다. "증류 공격"이라는 표현과 맞아떨어진다. 훔친 키는 남의 모델을 남의 비용으로 돌리는 데 쓰는 물건이니까. `computerex`는 게시물이 답했어야 할 질문을 한다. 내 API 키가 도대체 왜 워크스페이스에 있나? `Ciantic`은 빠진 기본 기능을 제안한다. 모든 키 시스템에 `invalidate_api_key` 엔드포인트가 있어서, 키를 쥔 쪽이 유출을 닫을 수 있어야 한다. 모두가 이메일을 받고 각자 알아서 움직여야 하는 경쟁이 아니라.

맥락 두 가지. 어제의 OpenCode 2.0 발표가 아직 884포인트로 페이지에 있다. 이 프로젝트의 최고 마케팅 날과 최악의 보안 날이 48시간 차이다. 그리고 제출 자체가 여러 번 플래그됐다고, 관련 글의 저자라고 주장하는 댓글러가 말한다. HN에서 사랑받는 오픈소스 도구가 나쁜 하루를 보냈다는 이야기가 자동으로 환영받지는 않는다.

## 이베이, 무선 장비 매물 제한하지만 아마추어 밴드 전용 장비는 예외 — 265 points

**265 points** · 239 comments · [arrl.org](https://www.arrl.org/arrlletterissue?issue=2026-10-15) · [HN discussion](https://news.ycombinator.com/item?id=50122034)

ARRL Letter 페이지는 메일링 리스트 껍데기로 추출됐다. 세부사항은 헤드라인과 스레드에서 온다. 이베이가 무선 장비 매물을 제한하고 있고, 예외는 아마추어 밴드에서만 동작하는 장비다. 공지를 읽은 댓글러들은 실제 요건을 덧붙인다. 매물에 FCC ID가 있어야 한다. 즉 평범한 소비자 장비는 대부분 그대로 남고, 그레이마켓 Baofeng급 무전기가 조여지는 쪽이다.

반론은 뻔한 것이다. `0x1ch`: 망막을 떼어낼 레이저는 여전히 살 수 있는데 왜 이베이가 FCC 노릇을 하나? `nubinetwork`는 이베이가 할 답을 대신 준다. 언락되거나 개조된 휴대용 무전기는 공공안전 대역에서 송신할 수 있고, 플랫폼은 그 일의 기록상 마켓플레이스가 되고 싶지 않다. `zitterbewegung`은 부수 피해를 지적한다. Meshtastic 기기는 합법이지만 규정 밖에서 운용되는 일이 잦고, 카테고리 단위 전면 제한은 그것들까지 같이 잡는다.

`eddythompson80`의 관찰이 스레드에서 가장 좋고, 무전기 이야기가 아니다. 햄 운영자와 해커는 같은 인구통계에 반대되는 본능을 가진 집단이다. 한쪽은 집단 행동으로 좋은 시민이 되려 하고, 다른 쪽은 "내가 할 수 있으면 허용된 거다"라고 생각한다. 같은 취미, 두 개의 거버넌스 철학, 그리고 그중 하나가 이제 소매업체에 의해 강제된다.

## Home Assistant: "내 비밀을 스캔하는 통합을 승인한 적 없다" — 237 points

**237 points** · 219 comments · [github.com/home-assistant](https://github.com/home-assistant/home-assistant.io/issues/49314) · [HN discussion](https://news.ycombinator.com/item?id=50124251)

문서 이슈 하나가 프라이버시 논쟁이 됐다. Home Assistant Supervisor는 비밀번호로 표시된 옵션을 k-익명성 방식으로 Have I Been Pwned와 대조하는 검사를 돌리고, 기본값이 켜짐이다. 이슈를 연 사용자는 옵트인한 적이 없고 그런 기능이 있는지도 몰랐다. 메커니즘은 몇 년째 Supervisor에 있었고, 최근 릴리스에서 이걸 알려주는 경고가 고쳐지면서 사람들이 이제야 알아챈 것이다.

유지보수자 대응이 흥미로운 부분이고, 결말은 좋았다. Frenck(유지보수자)이 퉁명스럽게 답했다가 공개적으로 사과하고, 같은 스레드에서 스스로 정정했으며(`ha security options --pwned=false`로 끌 수 있다), 기능을 옵트인으로 바꾸는 PR이 뒤따랐다. `gcommer`는 범위가 분노보다 좁다고 지적한다. supervisor 컴포넌트는 HA OS와 HA Supervised에만 있고, 순수 컨테이너 설치에는 없다.

원칙적인 반론이 분노보다 낫다. `eranation`은 대부분의 사람이 그을 선에 선을 긋는다. 비밀번호 관리자는 재사용을 경고해야 하고, 어떤 제품도 옵트인 없이 단 1바이트도 제3자에게 보내면 안 된다. 의도가 아무리 좋고 k-익명성이 수학적으로 아무리 건전해도. `rubinlinux`는 k-익명성 비밀번호 검사가 실제로 쓸 만한 신호를 흘린다는 연구를 링크한다. `csoghoian`은 우선순위를 다시 잡는다. 보안 기능을 넣고 싶으면 패스키가 사용자들이 계속 요청해 온 것이고, 패치는 제출됐다가 거절됐다. `jackpepsi`는 실패 모드를 정확히 명명한다. "우리가 당신을 모욕하지 않는다는 걸 수학적으로 증명할 수 있다"는 동의의 작동 방식이 아니다.

## Show HN: Gemini 4 Argon이 스타크래프트를 한다 — 240 points

**240 points** · 105 comments · [starskirmish.com](https://starskirmish.com/bench/v0-2/) · [HN discussion](https://news.ycombinator.com/item?id=50118688)

StarSkirmish는 각 모델에 한 시간의 실시간을 주고 StarCraft: Brood War용 프로토스 봇을 C++로 쓰게 한 다음, 사람이 작성한 경쟁 봇 로스터와 다섯 판을 붙인다. 점수는 평균 승률이다. 각 모델은 자기 연구소의 1st-party CLI 하네스(Claude Code, Codex, Antigravity, Muse Code)에서 최고 추론 설정으로 돌고, 웹 검색과 페치는 꺼져 있다.

결과: GPT-6 Astra 57%, GPT-6.1 Sol 46%, Gemini 4 Argon 39%, Claude Opus 5.5 39%, Fable 5.1 37%, Sonnet 5.5 26%, Muse Wonder Full 21%. 전제가 좋은 이유는 단일 완성이 아니라 전체 루프를 시험하기 때문이다. 코드를 쓰고, 지는 걸 보고, 고친다. 단서는 심각하고 `gritzko`가 말한다. Brood War에는 GitHub에 오픈소스 봇이 수백 개 있고, 빌드 오더를 외운 모델은 추론이 아니라 재현을 하는 것이다. `cgearhart`는 리더보드가 답할 수 없는 질문을 던진다. 이 봇들이 코퍼스에 이미 없던 뭔가를 하고 있나?

`GodelNumbering`은 스레드에서 가장 유용한 데이터를 얹는다. 친구의 9x9 바둑 벤치마크에 KataGo를 Elo 앵커로 쓴 결과, 상위 여섯 모델의 순위가 완전히 같았다. 무관한 두 게임, 같은 순서. 이건 그 벤치마크가 일반적인 에이전트 코딩 능력을 측정한다는 증거이거나, 둘 다 같은 학습 데이터 사전확률을 측정한다는 증거다. 어느 쪽 해석도 벤치마크 업계에 편하지 않다.

## MapQuest, 이제 Flock 카메라가 어디 있는지 보여준다 — 224 points

**224 points** · 33 comments · [engadget.com](https://www.engadget.com/2288729/mapquest-will-now-show-you-where-flock-cameras-are-in-your-neighborhood/) · [HN discussion](https://news.ycombinator.com/item?id=50129947)

MapQuest가 감시 카메라 레이어를 추가했다. Flock 번호판 판독기, 그리고 Motorola Solutions(Vigilant), Genetec, Axis, Axon, Leonardo, Neology, Rekor, PlateSmart, Ubicquia, Verkada의 카메라. 교통·사건 레이어 옆에 붙어 있고, 지금은 앱 전용 토글인 듯하다. 댓글러들은 웹 버전에서 찾지 못했다.

데이터 출처가 MapQuest가 광고하지 않는 부분이다. OpenStreetMap에서 오고, 대부분 DeFlock을 거친다. 즉 크라우드소싱이고 검증되지 않는다. `K2h`는 지난주 OSM에 일반 번호판 판독기를 추가했더니 카메라 방향까지 붙은 채로 MapQuest에 나타났다고 한다. `willmeyers`는 나머지 절반을 준다. 카메라가 실제로 없어도 누구나 찍을 수 있고, OSM은 이런 앱들 때문에 Flock 관련 훼손과 씨름해 왔다. 그래서 이 레이어는 동시에 최고의 민간 감시 지도이고, 누구나 오염시킬 수 있는 데이터셋이다.

MapQuest의 부활이 서브플롯이다. 온타리오 호 이름 변경을 거부했고, Android Auto와 대중교통 경로를 넣었고, 이제 카메라를 피하는 경로를 알려주는 앱이 됐다. `herf`는 농담 쪽을 정확히 짚는다. 이제 네비 앱이 카메라 앞을 지나갈지 결정한다. `mediaeater`는 진지한 쪽을 짚는다. 이렇게 정상화된다. 둘 다 맞고, 그래서 이 레이어가 존재한다.

## 미국 하원의원, 게임 소유권 보호 법안 발의 예고 — 217 points

**217 points** · 123 comments · [house.gov](https://ritchietorres.house.gov/posts/rep-torres-announces-power-to-the-players-act-legislation-to-ensure-gamers-own-their-games) · [HN discussion](https://news.ycombinator.com/item?id=50120101)

Ritchie Torres(뉴욕 15구)가 Power To The Players Act를 발의하겠다고 한다. FTC에 규칙 제정을 지시해 게임 구매를 라이선스가 아니라 소유권 이전으로 만들고, 온라인 기능이 있는 게임은 서버를 닫기 전에 오프라인 모드를 출시하도록 요구하는 내용이다. 예시로 든 것이 NBA 2K25다. 스탠다드 $69.99, All-Star 에디션 $99.99, 10월 30일 디지털 스토어프런트에서 내려가고 12월 31일 서버 종료. 출시 2년 만이다.

법안 텍스트는 아직 없다. `Animats`가 맞다. 공동발의자도 없고 계류된 것도 없이 "발의하겠다"는 건 법안이 아니라 보도자료다. `JumpCrisscross`는 개발자라면 누구나 할 질문을 한다. 수익 하한선은 어디인가? 인디 취미 프로젝트가 오프라인 모드를 안 냈다고 소송당하면 안 되지 않나. `Thegn`은 법안을 잡아먹을 허점을 찾는다. 회사가 게임을 망가뜨리는 마지막 패치를 배포한 뒤 그 시점에 서버를 닫으면 된다.

스레드의 더 나은 아이디어는 법안 밖에 있다. `Sohcahtoa82`는 MMO용 서버 바이너리와 클라이언트 측 서버 선택을 원한다. 오프라인 모드가 무의미한 곳에서 유일하게 통하는 방식이다. `yahthatsart`는 스팀 라이브러리가 상속 가능해야 한다고 한다. `lrvick`은 누구나 게임을 반나절 만에 비인가 소스로 디컴파일할 수 있게 되면 이 질문 자체가 무의미해진다고 본다. 셋 중 하나만 환상이다.

## AI 리뷰어가 사람이 고칠 수 있는 것보다 많은 버그를 찾아내며 Postgres 19 지연 — 205 points

**205 points** · 85 comments · [theregister.com](https://www.theregister.com/databases/2026/10/16/postgres-19-delayed-after-ai-reviewers-find-more-bugs-than-humans-can-fix/5303471) · [HN discussion](https://news.ycombinator.com/item?id=50119991)

PostgreSQL 19는 9월 말에서 대략 11월 19일로 밀렸고, 중요한 기능 8~10개가 버전 20으로 되돌려졌다. Peter Eisentraut의 설명은 이번 주 AI 코드 리뷰에 대해 쓰인 가장 유용한 글이고, 생산성 이야기의 정반대다. 일부 기능은 베타 기간에 빨리 고칠 수 없는 아키텍처 결함을 갖고 있었다. 나머지가 흥미로운 부분이다. LLM 보조 리뷰가 "다양한 엣지 케이스에 관한 비교적 무해한 이슈"의 긴 꼬리를 드러냈는데, 예전이라면 릴리스 후에 발견되어 5년에 걸쳐 패치됐을 것들이다. 이제는 결함 보고 40건짜리 목록으로 도착한다. 한 건에 세 줄 수정이면 수정은 싸고 조율은 싸지 않다. "이것들을 처리하는 데 고정 비용이 붙고, 그러다 시간이 바닥난다."

그의 프레이밍은 정확하다. 기능이 작성되고 커밋된 뒤에 실질적 품질 기준이 올라갔다. 릴리스 프로세스에 하기 이상한 짓이고, 리뷰가 싸질 때 바뀌는 것이 바로 그것이다. 이게 바이브 코딩이 아니라는 점도 그가 명시한다. 도구가 좋아지기 전에 사람이 쓴 기능들이다.

스레드는 뻔한 선을 따라 갈린다. Postgres 내부를 다시 쓰고 있는 `malisper`는 근본 원인이 테스트 스위트라고 한다. AI는 이미 존재하던 버그를 찾고 있고, 기능별 회귀 테스트는 상호작용을 덮지 못한다. `stickfigure`와 `zero_k`는 오래된 코드베이스에서 같은 경험을 보고한다. `asdff`는 이단적인 질문을 던진다. 그럼 이미 출시된 Postgres도 사람이 고칠 수 있는 것보다 버그가 많다는 뜻 아닌가? 그냥 내보내면 되지 않나? `FranOntanaya`가 아무도 원하지 않는 답을 준다. 버그가 도구로 포괄적으로 발견 가능해지면 그럴듯한 부인의 여지가 사라지고, 모든 기능의 비용이 영원히 올라간다. `jerf`는 상업적으로 중요한 결론을 뽑는다. QA가 병목이 되고, 따라서 가치가 된다.

## FLUX 3 Image Klein — 204 points

**204 points** · 56 comments · [bfl.ai](https://bfl.ai/blog/flux-3-image-klein) · [HN discussion](https://news.ycombinator.com/item?id=50123580)

Black Forest Labs가 텍스트-투-이미지, 편집, 최대 10개 참조를 쓰는 다중 참조 생성을 위한 5.6B 파라미터 오픈 가중치 모델을 냈다. 네이티브 4K, 배치와 국소 편집을 위한 바운딩 박스 제어, 베이스와 스텝 증류 변형, NVIDIA와 함께 만든 FP8·INT8·NVFP4 빌드. 라이선스는 "FLUX Kommunity License"로 OSI 라이선스가 아니고, 이걸로 제품을 만들기 전에 읽어볼 가치가 있다. API 가격은 이미지당 $0.009부터. 하루 전에 나온 Krea 3는 $0.06부터다.

반응은 특정한 방식으로 갈린다. `Mashimo`는 사람 이미지 생성이 나쁘다는 레딧의 발견을 전한다. NSFW에 가까운 것이 학습에서 걸러진 탓으로 보인다. `jjcm`은 편집은 탄탄하지만 미세한 텍스트 디테일이 약하고 신체가 기괴하게 나오는 출력 보고가 있다고 한다. `risphere`는 OpenRouter에서 빠르지만 풀 FLUX 3보다 확실히 나쁘다고 한다. `drusepth`는 가격 비교를 해보고 경쟁력이 있다고 본다.

정직한 독해는 이렇다. 참조 10개, 4K, 이미지당 1센트 미만의 5.6B 모델은 제품과 레이아웃 작업에 실질적인 능력이고, "사람에서는 최하위"는 계획에 넣을 수 있는 한계다. `kristofferR`은 경이로움을 되돌려 놓는다. 이 물건은 10GB 미만의 가중치에 세상 대부분이 어떻게 생겼는지에 대한 지식을 담고 있다.

## 섹션 아래, 또 다른 신작들

- **The Folders Programming Language** — 215 points · 38 comments · [danieltemkin.com](https://danieltemkin.com/esolangs/folders) · [HN discussion](https://news.ycombinator.com/item?id=50114342). 코드를 순수한 순서 트리로 쓰는 언어: 폴더 이름은 무시되고, 포함 관계와 알파벳 순서만 의미를 가지며, 인터프리터가 디렉터리 구조를 순회한다. Daniel Temkin의 논점은 탈물질화다. 빈 폴더 352,449개가 윈도우에서 0바이트로 보고되므로, 그의 표현대로 이 언어는 무한한 저장 공간을 가진다. Hello World, 99 Bottles, Truth Machine을 구현한 에뮬레이터가 페이지에 있다. 2015년 윈도우 프로젝트를 올해 업데이트한 것이고, 오늘 프런트페이지에서 진짜로 분류 불가능한 유일한 항목이다.
- **Show HN: Llmspeed** — 215 points · 68 comments · [llmspeed.dev](https://llmspeed.dev/) · [HN discussion](https://news.ycombinator.com/item?id=50127979). 하드웨어와 모델을 고르면 기계를 사기 전에 예상 토큰/초 범위와 첫 토큰까지 걸리는 시간을 알려준다. 기본값은 RTX 4090, Llama 3.1 8B Q4_K_M, 86–129 tok/s, TTFT 0.31s. 범위로 제시하는 게 정직한 부분이다. 단일 숫자는 거짓말일 테고, 사이트는 어느 수치가 측정값인지 표시한다. 로컬 LLM 하드웨어 논의가 원래 전부 감으로 이뤄지기 때문에 정확히 유용하다.

## 아직 페이지에 남은 이야기

아래 스토리는 전부 이전 라운드업에서 다룬 것이고, 델타가 이야기다. 페이지가 넘어가지 않았고, 새로운 사실 하나 없이 847포인트를 얻은 출시도 있었다.

| 스토리 | 그때 | 지금 | Δ |
| --- | --- | --- | --- |
| [암에 걸렸을 때 알아야 할 것들](https://jjmaxwell4.com/writing/things-to-know-when-you-get-cancer/) | 1,924 (10-16) | 1,949 | +25 |
| [테슬라 로드스터](https://www.tesla.com/roadster) | 743 (10-16) | 1,590 | +847 |
| [Gemini 4 Argon](https://deepmind.google/models/gemini/) | 1,461 (10-16) | 1,463 | +2 |
| [Claude, ECDSA 곡선의 기원 공개](https://www.anthropic.com/research/ecdsa-curve-origins) | 243 (10-16) | 1,007 | +764 |
| [Muse Spark Open](https://research.meta.ai/blog/muse-spark-open) | 896 (10-16) | 913 | +17 |
| [OpenCode 2.0](https://anoma.ly/notes/opencode-2-0/) | 877 (10-16) | 884 | +7 |
| [다친 까마귀를 구한 여성](https://www.youtube.com/watch?v=sjNpfz4UzqU) | 791 (10-16) | 855 | +64 |
| [신경망은 깨끗하다](https://already-clean.goodfire.com/) | 792 (10-16) | 808 | +16 |
| [Tiny Little Office](https://tinylittleoffice.com/) | 688 (10-16) | 695 | +7 |
| [스큐어모픽 디자인의 Wayland 데스크톱](https://github.com/fyzugx/DEsk) | 679 (10-16) | 689 | +10 |
| [Jev, 트롤리 문제를 만나다](https://zachlandes.com/trolley-problem/) | 613 (10-16) | 639 | +26 |
| [미국 노동시간의 90%, AI 벤치마크 사각지대](https://www.mercor.com/research/labor-index/benchmark-map/) | 251 (10-16) | 584 | +333 |
| [AdFection: 타깃 광고에서 제로클릭 스파이웨어로](https://citizenlab.ca/research/how-discover-tech-turned-targeted-ads-into-a-pipeline-for-spyware/) | 492 (10-16) | 518 | +26 |
| [메타의 새 상업 약관, 뉴스 사이트 스크래핑 허용](https://www.niemanlab.org/2026/10/metas-new-commercial-terms-will-allow-the-scraping-of-news-sites-experts-say/) | 441 (10-16) | 461 | +20 |
| [나는 소프트웨어 렌더링을 사랑한다](https://www.jamesfmackenzie.com/2026/10/13/i-love-software-rendering/) | 256 (10-16) | 365 | +109 |
| [Apple ML 연구소: MLX로 돌린 Muse Spark Open](https://machinelearning.apple.com/research/mlx-distributed-inference) | 213 (10-16) | 356 | +143 |
| [Krea 3](https://www.krea.ai/krea-3) | 338 (10-16) | 347 | +9 |
| [Fortran 70주년](https://fortran-lang.org/news/2026/09-15-Fortran-birthday/) | 308 (10-16) | 312 | +4 |
| [BIPM, 윤초 추가 중단 결정](https://www.bipm.org/en/cgpm-2026/resolution-5) | 255 (10-16) | 265 | +10 |
| [괄호 없이 함수 호출하기](https://blog.ikaes.de/yet-another-way-to-invoke-functions-without-parentheses/) | 235 (10-16) | 259 | +24 |
| [Mac의 창을 아이폰에서](https://github.com/Saffsanity/sill) | 240 (10-16) | 259 | +19 |
| [사이먼스 재단, 수학자를 위한 $15M 지원](https://www.simonsfoundation.org/news/simons-foundation-launches-15m-effort-to-help-mathematicians-navigate-ai-era/) | 246 (10-16) | 248 | +2 |
| [RPKI, 이제 인터넷 경로 70% 보호](https://ipinfo.io/blog/rpki-protects-70-internet-routes) | 216 (10-16) | 226 | +10 |

그중 세 개는 한 문장씩 값어치가 있다. **테슬라 로드스터**는 하루에 847포인트를 얻었는데, 이 라운드업이 제품 페이지에 대해 기록한 최대 하루 상승폭이고, 설명은 전적으로 데모 영상이 두 번째 관객을 찾은 것이다. 스레드는 차를 이야기하는 사람이 아니라 추력 계산을 하는 사람으로 채워졌다. **Claude의 ECDSA 곡선 기원**은 243에서 1,007로 갔다. 1990년대 NSA 난수에 관한 연구 글에서 4.1배 상승이다. 이 관객이 반전이 있는 암호학 미스터리에 얼마나 굶주려 있는지 말해준다. 그리고 **Mercor 노동지수 지도**는 333포인트를 얻어 584가 됐다. 미국 노동시간의 90%가 AI 벤치마크가 측정하는 것 밖에 있다는 주장은, 자기 직업이 벤치마크가 아닌 사람에게 페이지에서 가장 인용하기 좋은 논거다.

## 관통하는 흐름

오늘 페이지의 논점은 리뷰이고, 서로 동의하지 않는 두 프로젝트가 그 논쟁을 하고 있다.

Anthropic은 기계 리뷰가 연속적이고 싸고 사람 관문보다 낫다고 말한다. 머지된 PR은 두 배가 됐고, 리버트는 40% 줄었고, 저위험 변경에는 사람이 아예 필요 없다. PostgreSQL은 기계 리뷰가 연속적이고 싸고, 그 대가로 두 달을 잃었다고 말한다. 세 줄짜리 수정 40건은 코딩 문제가 아니라 조율 문제이고, 작업이 끝난 뒤에 품질 기준이 올라갔다. 둘 다 같은 기술을 정확히 묘사하고 있다. 차이는 발견 속도가 수정 속도를 넘을 때 벌어지는 일이다. Anthropic에서는 고치는 쪽도 기계이고, Postgres에서는 고치는 쪽이 본업이 따로 있는 자원봉사 커미터다.

이 비대칭이 페이지의 나머지를 설명한다. 763B 파라미터에 MIT 조건의 DeepSeek가 HLE 점수보다 중요한 이유가 여기 있다. 돌릴 수 있는 오픈 체크포인트는 당신이 소유한 리뷰 능력이고, `AmazingTurtle`의 네 에이전트 비교가 실전에서 그게 어떻게 보이는지다. Ultramarine의 "가중치 곧 공개"가 흠집이 아니라 실질적 단서인 이유, FLUX의 Kommunity License를 누구든 만들기 전에 읽어야 하는 이유도 같다. Anthropic의 정크 등급이 Anthropic의 엔지니어링 블로그와 같은 프런트페이지에 있는 이유도. 시장 한쪽에서는 모델이 더 싸지고 더 열리고 있고, 다른 쪽에서는 그 모델을 파는 회사들이 인프라 프로젝트처럼 자금을 조달받는다.

스레드 하나 더, 더 작지만 더 깔끔하다. 오늘 스토리 중 셋은 당신이 산 하드웨어로 무엇을 할 수 있는지 누군가 정하는 이야기다. 이베이가 무전기에 FCC ID를 요구하고, Sony가 GitHub에서 지울 수 있는 콘솔 해킹이 있고, Waymo가 승객보다 먼저 토론토에 허가를 구한다. 패턴은 새롭지 않지만 밀도는 새롭다. 영수증에 뭐라고 적혀 있든, 그 기기는 당신 것이 아니다.
