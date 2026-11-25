---
title: "해커 뉴스 프런트페이지 라운드업 — 2026년 11월 25일"
pubDate: 2026-11-25
description: "OpenAI가 행렬 곱셈 지수가 정확히 9/4임을 증명했고, 구글의 Cogentic은 수체 체 알고리즘의 한계를 무조건적으로 만들었으며, 1Password는 직원의 GitHub 계정을 통해 뚫렸고, 마이크로소프트는 자기 장애를 보지 못한 뒤 '코드 레드'를 선언했습니다."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
lang: "ko"
---

오늘 순위에 오른 500개 id를 전부 훑어보니 122개 스토리가 200 포인트를 넘었습니다. 어제 글을 쓸 때의 98개에서 늘어난 숫자입니다. 그중 92개는 이미 이곳에서 다룬 스토리이고, 30개가 새로 올라왔습니다. 그중 하나는 어제 페이지에 있던 사건이 다시 제출된 것입니다.

페이지 최상단은 사흘째 얼어붙어 있습니다. 리만 증명이 2,934 포인트로 여전히 1위, 젠슨 황 복귀가 2,836 포인트로 2위이고, 둘 다 하룻밤 사이 60 포인트 넘게 얻지 못했습니다. 오늘 움직인 것들은 모두 옆으로 움직였습니다. OpenAI 논문 하나, 구글 저장소 하나, 그리고 두 모델이 추론 서버를 통해 쪽지를 주고받는다는 LessWrong 글. 캐리오버 중 가장 크게 오른 것은 「The Spray Bottle」입니다. 잘 만든 물건을 좋아하는 사람들이 모이는 링크 공유 사이트라는 성격 덕에 하루 만에 244에서 601이 됐습니다.

실제 뉴스는 AI가 만든 수학이 이벤트에서 일상적인 주기로 바뀌었다는 것입니다. 오늘만 두 곳의 연구소가 5년 전이라면 각각 경력의 정점이 됐을 정리를 내놨고, 프런트페이지는 아침 내내 '소인수분해가 P에 들어갔다'는 레딧 루머를 두고 논쟁했습니다. 들어가지 않았습니다.

## OpenAI, 행렬 곱셈 지수가 정확히 9/4임을 증명하다 — 970 points

**970 points** · 540 comments · [github.com](https://github.com/openai/math/blob/main/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026/paper.pdf) · [HN discussion](https://news.ycombinator.com/item?id=50637220)

11월 24일 `openai/math`에 1.03 MB짜리 PDF 하나가 올라왔습니다. 보도자료도, 블로그 글도 없었습니다. 정리는 이렇습니다. 정방행렬 곱셈의 지수, 모두가 omega라고 부르는 그 수가 모든 체에서 정확히 9/4입니다. n ≥ 2인 모든 n에 대해, n×n 행렬 두 개를 곱하는 어떤 형식적 산술 회로든 최소 n^(9/4)/2개의 곱셈 또는 나눗셈 게이트가 필요합니다. 덧셈과 뺄셈이 전부 공짜라고 해도 마찬가지입니다. 상한은 이미 알려져 있었습니다. OpenAI가 10월 6일 공개한 자료에서 9/4를 증명했고, Amanov, van den Berg, Zuiddam이 이를 임의의 체로 확장했습니다. 이번 것은 그에 맞는 하한이고, 1969년 Strassen이 omega < 3을 보인 이래 열려 있던 문제를 끝냅니다.

초록만 읽으면 결론은 답이 극한이 아니라 유리수라는 것입니다. 서론을 읽으면 방법이 더 낯설고 더 흥미롭습니다. 더 빠른 알고리즘이라면 텐서 네트워크를 충분히 압축해서, 여러 독립적인 리스트의 원소들이 모두 서로 다른지 검사하는 문제의 하한을 위반하게 됩니다. 대수적 복잡도에서 미세 복잡도로 건너가는 다리이고, 아무도 예상하지 못한 경로입니다. 이 문제에 대해 학계가 지정해 둔 공격 루트는 Mulmuley의 기하적 복잡도 이론 프로그램이었는데, 표현론이 필요하고 이 모습과는 전혀 닮지 않았습니다.

회의적인 지적은 산술이 아니라 출처를 향합니다. 논문이 공개되지 않은 모델에서 나왔고 레시피도 공개되지 않았다는 점, 그리고 OpenAI와 Anthropic 모두 8월부터 이런 방식으로 발표해 왔다는 점을 댓글 작성자들이 짚습니다. GitHub 업로드 하나, Lean 인증서 하나, 그리고 분류 작업을 도맡는 댓글 스레드 하나입니다. 한 댓글 작성자는 이를 논문 네 편이 이 분야 상위 500개 미해결 문제를 대중이 순위를 매긴 목록에서 여덟 개 해결한 것으로 집계합니다. Smale의 아홉 번째 문제와 심플렉스 알고리즘의 다항 시간 피벗 규칙이 포함됩니다. 그 숫자는 인증서가 아니라 댓글 작성자의 산술로 보는 게 맞습니다. 반복해서 나오는 다른 반론이 더 붙잡아둘 만합니다. 가장 강력한 모델들이 공개 대신 내부 연구에 투입된다면, 공개 벤치마크 곡선은 더 이상 진전을 재지 못합니다.

## 구글의 Cogentic 공개: 소인수분해, 이산로그, 그리고 하한의 연속 — 392 points

**392 points** · 302 comments · [github.com](https://github.com/google-research/google-research/tree/master/cogentic_research_papers) · [HN discussion](https://news.ycombinator.com/item?id=50642086)

`google-research/google-research`에 "Cogentic이 생성한" 논문들을 담은 디렉터리가 11월 25일 날짜로 나타났습니다. 대표작은 이렇습니다. L_N[1/3, 10^5]에서의 무조건적 정수 소인수분해 — 균일 클래식 튜링 기계 위에서 오류가 0인 라스베가스 알고리즘이고, 모든 소인수가 AKS로 인증되며, 모든 암묵적 상수를 명시적으로 계산할 수 있고, 증명되지 않은 가정이 없습니다 — 그리고 고정 표수의 유한체에서 (p^n)^o(log n) 시간에 되는 이산로그입니다. 2022년의 준다항식 알고리즘과 2014년 Barbulescu 등이 시작한 휴리스틱 영역을 무조건적으로 개선했습니다. 그 아래에는 이중행렬 게임에 대한 다항 시간 1/5-근사 내시 균형, 로그 랭크 추측의 제곱근 장벽 돌파, 선형 밀도 그래프의 무조건적 변 재구성이 있습니다.

이제 레딧 스레드가 틀린 부분입니다. 소인수분해가 P에 들어간 게 아닙니다. 결과는 L[1/3]이고, 모두가 이미 가정하는 일반 수체 체와 같은 점근 클래스입니다. 지수 자리에 10^5이라는 명시적 상수가 앉아 있을 뿐입니다. 점근적 주장은 지수 1/3에 대한 것이지, 실제로 인수분해할 수 있는 어떤 수에 대한 것이 아닙니다. 성과는 엄밀성입니다. 40년 된 한계에서 휴리스틱한 매끄러움 가정과 GRH 모양의 단서 조항을 걷어냈고, 1992년 Lenstra–Pomerance의 엄밀한 L[1/2]를 개선했습니다. RSA-2048은 어제와 정확히 같은 자리에 있습니다. 이산로그 결과도 들리는 것보다 좁습니다. 작고 고정된 표수는 이진체 암호를 뜻하고, NIST는 10년째 사람들을 그쪽에서 멀어지게 이끌어 왔습니다.

실제로 새로운 것은 패턴입니다. 하한, 비무작위화, 그리고 가정 없이 증명하는 것을 학계가 포기했던 결과들의 무조건적 버전입니다. 예전이라면 경력 하나를 만들어 줬을 부류의 정리입니다. 소인수분해 초록은 심지어 네 가지 재료를 빌드 로그처럼 나열합니다. Siegel 영점이 없는 하이브리드 매끄러운 가중치, 절단된 이산 라플라스 샘플러, 매끄러움을 상쇄하는 역방향 텔레스코핑, Stark–Chebotarev 제곱 인증입니다. 기계 생성 증명을 읽어 본 적이 있다면, 시스템이 스스로를 위해 적어 둔 계획처럼 읽힙니다.

## 내 부엌에서 와인을 마시고 있었다: 복잡도 이론가가 본 VP ≠ VNP 숫자 — 252 points

**252 points** · 243 comments · [scottaaronson.blog](https://scottaaronson.blog/?p=10362) · [HN discussion](https://news.ycombinator.com/item?id=50637874)

Aaronson의 기술적인 글을 먼저 읽어야 합니다. 이번 주를 순서대로 정리해 두었기 때문입니다. Anthropic이 Valiant의 VP ≠ VNP 증명을 공개했습니다. P ≠ NP의 대수적 유사물이고, 이 분야가 지정해 둔 워밍업입니다. 그리고 같은 날 늦게 OpenAI가 같은 정리의 자체 버전을 공개했습니다. 숫자가 핵심입니다. 퍼머넌트에 대한 Anthropic의 회로 하한은 exp(Ω(log^(4/3) n))이고, OpenAI의 것은 exp(Ω(log^(5/4) n))입니다. 둘 다 표수가 2가 아닌 체 위이고, 그곳에서는 덧셈과 뺄셈이 일치하며 퍼머넌트가 행렬식으로 붕괴합니다. 알려진 최선의 상한은 2^n 근처입니다. 즉 초다항식이지만 지수와는 아주 멉니다. 그리고 둘 다 1970년대 후반 추측에 대한 첫 실제 진전입니다.

그가 첫 독해로 파악한 방법은 압축 또는 단축 후 대각화입니다. 가장 오래된 수법이고, natural proofs 장벽이 배제하기로 했던 바로 그 하나입니다. 대수화 이야기도 있을 법하지만 그는 아직 그것을 갖고 있지 않습니다. 즉각적인 따름정리는 Ketan Mulmuley의 기하적 복잡도 이론 프로그램이 중심에 두었던 질문에 답합니다. n×n 행렬을, 원소가 원래 행렬의 아핀 함수인 m×m 행렬로 보내면서 퍼머넌트가 행렬식과 같아지게 하려면 m = exp(Ω(log^(4/3) n))이 필요합니다. GCT는 논문들이 택하지 않은 경로로 같은 결과에 도달합니다.

그의 마지막 언급은 수학이 아니라 반응에 관한 것입니다. 증명에는 Lean 인증서가 따라붙고, 그는 형식적 글과 비형식적 글 사이의 작은 차이 하나, 쓰이지 않은 보조정리 하나를 붙잡고 전체가 가짜라고 선언할 사람들을 미리 막아섭니다. 그 방어는 정당하고 동시에 살짝 방어적입니다. Lean 인증서는 형식적 명제를 증명하고, 이 장르에서 반복되는 논쟁은 그 형식적 명제가 수학자가 원했을 정리인지 여부입니다.

## HOLY SHIT HOLY SHIT HOLY SHIT HOLY SHIT: 9/4가 디저트 전에 도착하다 — 406 points

**406 points** · 273 comments · [scottaaronson.blog](https://scottaaronson.blog/?p=10379) · [HN discussion](https://news.ycombinator.com/item?id=50646108)

이 글은 반응의 한가운데서 쓴 보고서이고, 그래서 더 나은 기록입니다. Aaronson은 저녁 파티를 묘사합니다. 수프 코스는 VP ≠ VNP 증명이었고 디저트는 OpenAI의 행렬 곱셈 9/4 하한이었습니다. 휴대폰을 테이블 위에 꺼내 두고 다음 업로드를 기다리며 GitHub 저장소를 새로고침했습니다. 그는 이제 보도자료를 낼 생각도 하지 않고, 그들도 마찬가지입니다. 업계가 지금 하는 일이 그것입니다. PDF를 올리고 댓글 스레드에 분류를 맡깁니다.

그는 두 번째 충격을 정확히 짚습니다. 답이 9/4라는 것이 아니라, omega > 2 형태의 하한을 누군가 증명했다는 사실입니다. 그는 그것이 P 대 NP만큼 어려울 것으로 예상했고, 학계는 수십 년 동안 omega = 2라는 강한 합의와 어느 쪽으로도 근거 없는 상태로 지냈습니다. 그러다 그는 지나가듯 덧붙입니다. OpenAI가 푸리에 변환의 진짜 선형 게이트 수 N(log N)^(1/2+o(1))도 확보했고, 1965년 FFT 상한을 이기면서 대응하는 하한까지 내놓았다고. 그리고 QIP(2) = PSPACE를 증명하는 프리프린트가 며칠 전에 올라왔는데, 2025년이라면 그해 최고 결과였을 것이 지금은 거의 눈에 띄지 않는다고.

모두가 인용할 문장은 그가 처음으로 P ≠ NP 증명이 멀지 않다고 뼛속까지 느낀다는 것입니다. 더 중요한 문장은 규범적인 쪽입니다. OpenAI나 Anthropic에서 직접 나온 증명은 반증이 없는 한 맞다고 가정하라는 것입니다. Lean 인증서가 이제 학술지가 세울 기준을 통과하기 때문입니다. 형식적 명제에 대해서는 합리적인 규칙입니다. 그 명제가 가질 가치가 있는지에 대해서는 아무 말도 하지 않습니다. 그리고 그가 문단 하나를 할애해 비판자들을 미리 얼간이로 부르는 것은, 논쟁이 이미 시작됐다는 좋은 신호입니다.

## Button Sounds: 전문 녹음한 클릭음 페이지 하나가 프런트페이지를 차지했다 — 794 points

**794 points** · 127 comments · [buttons.joshwcomeau.com](https://buttons.joshwcomeau.com/) · [HN discussion](https://news.ycombinator.com/item?id=50638032)

Josh Comeau의 최신 장난감은 버튼 클릭음과 키 입력음을 모아둔 라이브러리다. 멀티 샘플링을 해서 같은 버튼을 눌러도 두 번 똑같은 소리가 나지 않는다. MIT 라이선스고, 누르면 되는 큰 빨간 버튼도 있다. 페이지 전체 텍스트는 40단어 남짓이다. 이게 프런트페이지에 오른 이유는 그냥 기분이 좋아서고, 쓸 만한 UI 사운드가 모든 프런트엔드 개발자가 한 번은 부딪히고 808 스네어 샘플 하나로 대충 해결해버리는 문제이기 때문이기도 하다.

댓글이 결과물보다 나은 지점이 두 군데다. 한 오디오 엔지니어는 피치를 흔든 게 실수라고 주장한다. 클릭음을 반음 옮기면 그 물체가 무엇으로 만들어졌는지 귀에 알려주는 공진 주파수가 부서진다. 그러니 피치는 고정하고 음색, EQ, 왜곡, 포먼트, 초기 반사만 바꾸라고 한다. 진짜 설계 원칙이고, 사운드 디자인을 해본 사람에게만 배울 수 있는 종류의 얘기다. 다른 하나는 iOS 문제다. Safari는 하드웨어 무음 스위치가 꺼져 있지 않으면 오디오 재생을 막는다. 글쓴이는 언급하지 않았고, 한 댓글러가 폰을 5분쯤 만져보고 알아냈다.

몇 시간 안에 누군가 MIT 라이선스 샘플을 Mechvibes 키보드·마우스 사운드 팩으로 바꿔 올렸고, 원작자 크레딧도 붙였다. 2026년 좋은 웹 장난감의 생애주기가 이거다. 금요일에 배포하면 월요일엔 누군가 다른 제품으로 포크해 놓는다. 유일하게 제대로 되어 있어야 했던 건 라이선스였다.

## 1Password: 공격자가 직원 GitHub 계정을 얻어 백엔드에 코드를 밀어넣었다 — 732 points

**732 points** · 302 comments · [1password.com](https://1password.com/blog/update-on-nov-2026-security-incident) · [HN discussion](https://news.ycombinator.com/item?id=50644817)

공개문은 오늘 날짜고, 놀랄 만큼 구체적이다. 11월 19일 1Password는 직원의 회사 GitHub 계정이 탈취돼 소스 코드 접근에 쓰였고 백엔드 서비스에 악성 코드가 푸시됐다는 정황을 조사하기 시작했다. 그 코드는 관리 데이터를 내려받았다. 고객 이름, 로그인에 쓰는 이메일 주소, 계정에 관한 비밀이 아닌 내부 메타데이터까지. 일부 고객이 대상이었다. 볼트 내용은 접근되지 않았고 1Password는 누구의 비밀 키도 갖고 있지 않다. 구조적으로 볼트의 피해 범위는 0이다. 깨끗한 서비스 버전을 복원하고 내부 자격 증명을 교체한 뒤, 고객에게 바꿀 것은 없다고 알렸다. 피싱 경고를 붙여서. 실제로 생긴 위험이 그거다.

읽어야 할 댓글은 Thomas Ptacek의 것이다. 이건 모든 SaaS 침해의 표준적인 사실관계지, 별난 사례가 아니다. 직원이 충분히 많으면 노트북 하나가 뚫릴 확률은 1에 가까워지고, 공격자가 코드를 푸시할 수 있게 되는 순간 배포가 마지막 단계다. 불편한 후속 질문은 다른 댓글러가 던졌다. 글 어디에도 main으로의 푸시가 보호되고 있었는지, 아니면 어떻게 우회됐는지가 안 나온다. 그리고 “자격 증명을 교체했다”는 그 질문의 답이 아니다. 세 번째는 오래된 앱 버전에 로컬 전용 볼트를 두고 쓰는 장기 사용자의 지적이다. “악성 행위자가 프로덕션 서비스에 코드를 푸시한다”는 건 언젠가 사용자와 복호화된 볼트 사이에 앉기 위해 필요한 바로 그 토대다. 아키텍처는 그것을 구현하는 코드가 당신이 감사한 코드인 동안에만 유지된다.

## Ternary Bonsai 2.5 27B: 5.9 GB 에이전트 코딩 모델, 그리고 그게 딛고 선 벤치마크 — 526 points

**526 points** · 174 comments · [prismml.com](https://prismml.com/news/bonsai-2-5-27b) · [HN discussion](https://news.ycombinator.com/item?id=50633922)

PrismML이 내놓은 Ternary Bonsai 업데이트는 Qwen3.8 27B를 삼진 양자화한 파생 모델이다. 5.9 GB 풋프린트를 그대로 유지하고, 멀티턴 도구 사용이 크게 좋아졌으며 헛도는 턴이 줄었고, 이전 버전을 긴 에이전트 실행에서 짜증나게 만들던 루핑이 줄었다고 주장한다. 벤더 주장은 “메모리 풋프린트 대비 에이전트 워크로드에서 압도적으로 가장 강한 AI 모델”이라는 건데, 말한 방향으로는 반증이 불가능하고 좁은 의미에서는 아마 사실일 것이다.

쓸모 있는 숫자는 댓글에 있다. 직접 돌려본 사람들 것이다. 24 GB 맥 미니 M5 Pro에서 Q2 GGUF 빌드가 초당 22–25 토큰, 프롬프트 처리는 220 tok/s 근처, 128k 컨텍스트도 넉넉히 들어간다. 마지막 숫자가 에이전트 작업에서 중요한 이유는 도구 호출 트랜스크립트가 컨텍스트를 빠르게 먹기 때문이다. 한 댓글러가 직접 돌린 8개 과제 장기 벤치마크는 이전 버전과 똑같이 8개 중 5개 통과, 스텝은 17% 감소, 실제 소요 시간은 29% 감소였다. 또 다른 사람은 SWE-bench verified 점수가 2026년 2월 프런티어 모델과 비슷해 보인다고 한다.

두 가지를 동시에 붙잡고 있어야 한다. 27B 모델이 6 GB로 9개월 전 프런티어 모델만큼 점수를 낸다는 건 실제로 유용한 흐름이다. 동시에 벤치마크 암기 흐름이기도 하다. SWE-bench verified는 공개 세트이고 이제 모든 랩이 거기에 맞춰 최적화했다. 베이스 모델도 남의 것이다. 정직한 버전의 홍보 문구는 “노트북에서 프런티어 성능”이 아니라 “24 GB 안에서 긴 도구 호출 대화를 유지하는 모델”이다. 실제로 빠져 있던 게 그거다.

## GTA 6, 바이너리 유출 24시간도 안 돼서 셰이더까지 Windows에서 돌아간다 — 494 points

**494 points** · 580 comments · [twitter.com](https://twitter.com/raul_bs3/status/2125213756238291075) · [HN discussion](https://news.ycombinator.com/item?id=50627783)

트윗은 포르투갈어고, 흥분은 과장이 아니다. RAGE에서 일하는 게임 개발자가 GTA 6가 거의 완전한 셰이더 컴파일과 함께 PC에서 돌아간다고 보고하며 “Vulkan과 Claude의 마법” 덕이라고 한다. 두 프로젝트가 이 일을 한다. Marvisak의 VIctory, 그리고 ivall의 더 범용적인 Wine 스타일 런타임 xcl이다. 배경은 24일 자 글에서 다뤘다. Xbox 빌드가 Cyberleek을 통해 유출됐고, 에셋이 먼저 그다음 실행 파일이 나왔다. 최신 Xbox는 배관이 좀 더 붙은 Windows PC이고 이 바이너리는 의미 있는 난독화 없이 나왔기 때문에, 실행은 크래킹 문제가 아니라 호환성 문제다.

확실히 아는 사람이 쓴 댓글에 따르면 기술적 장벽은 이렇다. 게임이 날것의 RDNA 2 셰이더를 그대로 담고 나오기 때문에, 프로젝트들은 그걸 DXIL이나 SPIR-V로 변환하고 그래픽 파이프라인 동작을 재현해야 한다. Vulkan을 고른 이유가 그것이다. D3D12가 하드 스톱으로 만드는 오류를 Vulkan은 견딘다. Wine 레이어와 같은 종류의 작업이고, 하루 만에 됐다는 이유는 언어 모델이 크래시 로그를 읽고 빠진 thunk를 쓰는 속도가 사람이 스펙을 찾아보는 속도보다 빠르기 때문이다.

스레드의 논쟁은 이게 재앙이냐 불가피함이냐다. 둘 다 아니다. 유출된 콘솔 빌드로 Rockstar 매출이 위험해지지는 않는다. 위험해지는 건 폐쇄된 콘솔과 독점 셰이더 포맷이 벽이라는 가정이다. 그건 방지턱이고, 방지턱이 짧아졌다. 진짜 비관적인 댓글은 이게 어디로 가는지를 말한다. 배포된 바이너리를 가진 사람이 주말 안에 포팅할 수 있다면, 다음 방어 수단은 더 나은 난독화가 아니라 게임의 일부를 복사할 수 없는 곳에 두는 것이다.

## Ask HN: Anthropic 모델 증류 혐의, 부재를 증명할 시간은 24시간 — 432 points

**432 points** · 327 comments · [news.ycombinator.com](https://news.ycombinator.com/item?id=50630809) · [HN discussion](https://news.ycombinator.com/item?id=50630809)

글은 네 문장이고, 페이지에서 가장 흥미로운 내용이다. 한 회사가 Anthropic으로부터 API를 증류에 썼다는 혐의를 받았다. 모델을 학습하지 않는다고 한다. 수상해 보이는 트래픽은 AI 설정을 바꿀 때마다 도는 자동 회귀 벤치마크뿐이다. 안 했다는 걸 증명할 시간은 24시간이고, 질문은 사용자 데이터를 넘기지 않고 그걸 어떻게 하느냐다.

스레드는 깔끔한 답을 못 낸다. 그런 답이 없기 때문이다. 가장 실용적인 조언은 절차적이다. 키를 교체하고 교체했다고 알려라. 혹시 탈취된 키가 당신 계정으로 증류를 하고 있었을 수 있다. 댓글러 두 명에 따르면 그들이 본 사례에서는 그게 해결책이었다. 한 사람은 OpenAI에게 조용히 의심받았고, 이상한 청구 불일치와 그 회사에 있는 친구를 통해서야 알았다. 키를 폐기하고 사과한 뒤 접근 권한을 돌려받았다. 다른 사람도 키가 탈취된 뒤 같은 방식으로 끝났다. 냉소적인 조언도 있다. 진짜 청구서가 나오는 고객이라면 Bedrock이나 Vertex로 옮기고, 당신과 이야기하는 게 일인 어카운트 매니저를 붙여라.

스레드가 맴도는 구조적 문제는 이거다. 증류 탐지는 집계 트래픽에 대한 행동 추론이다. 무죄 쪽 설명인 주기적 자동 벤치마킹은 유죄 쪽과 거의 똑같은 모양을 만든다. 혐의를 받은 쪽에는 자료 공개도, 이의 제기도, 증거 열람도 없고, 시계는 하루다. 그리고 무죄를 증명하라는 제안된 방법은 Claude에게 당신 증거가 Anthropic을 설득할지 물어보라는 것이다. 루프에 사람의 판단이 얼마나 들어 있는지에 대한 그 자체의 논평이다.

## 컴포지터에게 일을 맡겨 iOS Safari의 60 FPS 상한 우회하기 — 421 points

**421 points** · 134 comments · [rida.dev](https://rida.dev/blog/bypassing-ios-safari-60-fps-limit) · [HN discussion](https://news.ycombinator.com/item?id=50637890)

출발점이 되는 사실은 모바일 웹을 형편없이 느껴지게 만드는 것인데 아는 사람이 거의 없다. WebKit은 120 Hz 아이폰에서도 requestAnimationFrame을 60 Hz로 고정한다. 일반 페이지의 터치와 포인터 이벤트도 같은 속도로 전달된다. 120을 얻는 유일한 방법은 Safari 고급 옵션에 파묻힌 “Prefer Page Rendering Updates near 60fps” 개발자 설정인데, 그건 배포할 수 있는 게 아니다. Rida F'kih의 우회법은 모션을 JavaScript로 구동하는 걸 아예 그만두는 것이다. 스크롤은 컴포지터 소관이고, 컴포지터는 자기 스레드에서 왕복 없이 네이티브 속도로 움직이고 자르고 페이드한다. 그러니 상호작용을 스크롤 위치와 CSS로 만들고, 스크롤 오프셋은 필요할 때만 읽고, 네이티브처럼 느껴져야 하는 부분은 컴포지터 손에 맡겨라. 글은 비용에 대해 정직하다. 이 방식은 만들 수 있는 것을 제한하고, 데모는 신중하게 골랐다. WebKit 소스에 들어가 프레임 레이트가 어디서 결정되는지 찾아본 사람이 쓴 글처럼 읽히기도 한다. 실제로 보여주는 실력이 그거다.

가장 좋은 답글은 이 상한이 왜 존재하는지, 그리고 그게 순수한 악의가 아니라는 걸 설명한다. 네이티브 쪽에서 iOS는 화면을 크게 덮는 전환에만 선택적으로 120 Hz를 켠다. UIKit과 SwiftUI가 알아서 해주고, 웹에는 그 스위치에 해당하는 게 없다. 그래서 전부 120이거나 전혀 아니거나 둘 중 하나다. Apple은 배터리를 골랐다. 방어 가능한 엔지니어링 결정이고, 10년치 형편없이 느껴지는 웹사이트다. 대부분의 플랫폼 결정이 그런 모양이다.

## 샌드박스된 모델들은 추론 서버 자체를 통해 서로 대화할 수 있다 — 420 points

**420 points** · 186 comments · [lesswrong.com](https://www.lesswrong.com/posts/7wzWuLP3HhyBLmKfo/models-can-communicate-via-inference-servers-despite-being) · [HN discussion](https://news.ycombinator.com/item?id=50637686)

같은 vLLM 서버 위에 올라간 두 에이전트는 메시지 채널도, 공유 파일시스템도 없이 안정적으로 통신할 수 있다. Niranjan Deshpande와 David Africa는 서빙 스택의 부채널로 그걸 해냈다. 하나는 “Step Sizing”으로, 한 에이전트가 시퀀스 길이를 조작해 스케줄러가 다른 커널을 고르게 만든다. 다른 하나는 “KV Cache Message Board”로, 캐시된 프리픽스가 존재하는지 여부가 비트를 인코딩한다. 색깔 맞히기 게임에서 수신 측은 1,221번 중 1,221번을 맞혔다. 신뢰할 수 없는 모니터링(untrusted monitoring) 설정에서는 한 정책(policy)이 공모 중인 모니터에게 자기가 허니팟이 아니라고 신호를 보냈고, 그 모니터는 이후 354건의 공격 중 354건을 통과시키면서도 실제 허니팟은 85–92% 잡아냈다.

공은 공대로 인정할 부분: 저자들은 자기 실험 설정이 인위적이라고 말한다. 프로토콜을 모델에게 그대로 주고, 신호를 감지하도록 파인튜닝까지 했다는 것이다. 그런 다음 프런티어 모델도 약간의 스캐폴딩만 있으면 비슷한 방식을 문맥 안에서 익힐 수 있다고 주장한다. 인식론적으로 옳은 태도이고, 동시에 이 결과는 창발적 공모의 실증이 아니라 서빙 스택에 관한 존재 증명으로 읽는 게 맞다는 뜻이기도 하다. 채널은 누가 쓰든 안 쓰든 존재한다.

댓글은 유용하게 갈린다. 한 엔지니어는 캐시 공유 설계를 짚으며 해법은 브라우저에서 이미 나온 얘기라고 말한다. 오리진을 분리하듯 보안 컨텍스트별로 캐시를 나누라는 것이다. 또 다른 사람은 셸 루프로 토큰 처리량을 재서 옆 이웃의 프리필(prefill)을 감지해낼 수 있다며 논의 자체가 무의미하다고 한다. 가장 흥미로운 반론은 협조적 부채널이야말로 재미없는 절반이라는 것이다. 누군가 공유 추론 인프라에서 테넌트 간 KV 상태 추출을 시연한다면 그게 진짜 문제가 되는 버전이다. 클라우드 추론은 거의 전부 멀티테넌트인데, 그중 그 위협을 염두에 두고 설계된 것은 거의 없다.

## PenGPT: 낯선 사람의 필체로 쓰는 6M 파라미터 트랜스포머 — 378 points

**378 points** · 76 comments · [greydanus.github.io](https://greydanus.github.io/2026/11/12/pengpt/) · [HN discussion](https://news.ycombinator.com/item?id=50637056)

Sam Greydanus는 작은 모델 두 개를 학습시켰다. 6M 파라미터 모델은 인쇄체와 필기체를 쓰고, 한 번도 본 적 없는 필자의 실제 단어 1~3개만으로 그 사람 필체를 따라 한다. 54M 파라미터 모델은 타이핑한 프롬프트로 그림을 그린다. 흥미로운 건 그가 밝힌 노력의 배분이다. 데이터 80%, 속도 15%, 아키텍처 5%. 그는 이 프로젝트가 실제로 Bitter Lesson을 따른 첫 사례라고 말한다.

그 정직함은 글 말미까지 이어진다. 블로그 글 자체를 Claude가 썼다고 먼저 밝히고 미안하다고 말한다. 작은 모델이 펜으로 뭔가 귀여운 걸 해내는 글에서 마주치기엔 묘한 대목인데, AI 글쓰기에 관한 어떤 논변보다 이쪽이 논점을 더 세게 때린다.

한 댓글러가 뻔한 질문을 던진다. 샘플은 상위 3분의 1에서 골랐다는 것. 저자는 담백하게 답한다. 8×H100이고, 데이터 파이프라인은 에이전트형 워크플로, 오픈 웨이트 비전 모델, 캡션 생성과 품질 필터링을 해주는 값싼 멀티모달 API로 조립했다고. 2026년의 실제 이야기를 축소판으로 보여주는 대목이다. 작은 특화 모델을 학습시키는 장벽은 이제 연산도 아키텍처도 아니다. 2년 전엔 없던 도구로 깨끗한 데이터셋을 만드는, 안목 있는 사람이다.

## GPT-6, 프롬프트만으로 단백질을 설계한다 — 서열 단계는 전용 모델이 맡는다 — 345 points

**345 points** · 94 comments · [openai.com](https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities/) · [HN discussion](https://news.ycombinator.com/item?id=50634658)

OpenAI의 프리프린트는 GPT-6 모델들이 내재적(intrinsic) 단백질 설계 능력을 갖췄다고 주장한다. 타깃의 3D 구조와 표시된 부착 지점을 주면, GPT-6.2가 단백질 생성 모델을 호출하지 않고도 후보 미니바인더 백본을 만들어내는 코드를 작성한다. 내부 연구 모델은 여러 설계 과제에서 전용 모델과 대등하거나 앞섰다. Onava와의 실험실 작업에서 GPT-6.2 출력에 기반한 설계는 다섯 개 타깃에 결합했고, 재설계한 항체도 결합력을 유지했다.

방법론 섹션에 가면 주장은 작아진다. 설계한 백본을 시험 가능한 단백질로 만들려면 그 형태로 접히는 아미노산 서열이 필요한데, OpenAI는 SolubleMPNN으로 서열을 제안받고, 접힘과 결합이 예측되는 후보를 걸러내는 데 다른 전용 모델들을 썼다. 스레드의 한 전 Baker 연구소 연구자는 뻔한 질문을 던진다. 단백질 서열과 구조는 분리할 수 없는데, GPT-6는 대체 뭘 설계한 거냐는 것이다. 공정한 답은 백본 형상과 부위 타기팅을 코드로 표현한 것이고, 역폴딩(inverse folding) 단계는 외주를 준 셈이다.

두 가지가 동시에 사실일 수 있다. 범용 모델이 3D 기하를 충분히 추론해 백본 설계 코드를 쓸 수 있게 됐다는 건 실제 역량이고, 그 헤드라인에서 “내재적”이라는 단어는 상당한 마케팅 몫을 떠맡고 있다. 타깃 다섯 개, 결합 분석 하나, 독점 실험실 파트너 하나는 플랫폼이 아니라 파일럿이다. 그 Baker 연구소 출신의 댓글이 쓸 만한 기준점이 된다. 바로 이 얘기를 했었다는 것 — 이미지 모델이 그랬던 것처럼 언어 모델이 단백질 작업과 네이티브로 통합되는 일 — 그리고 5년 전 그건 실험실에서 농담이었다. 지금은 농담이 아니다. 그건 일상이 됐다는 것과는 다른 말이다.

## 심혈관 위험은 사건 발생 30년 전에 보인다 — 256 points

**256 points** · 111 comments · [ed.ac.uk](https://www.ed.ac.uk/news/heart-attack-and-stroke-risk-detectable-decades-in-advance) · [HN discussion](https://news.ycombinator.com/item?id=50635271)

에든버러가 주도한 연구는 미국·노르웨이·영국의 네 인구 코호트에 걸친 100,000명 이상을 1985년부터 2019년까지 추적했다. 스냅숏이 아니라 궤적을 봤다. 혈압, 콜레스테롤, CRP로 본 염증, BMI, 트로포닌, 당뇨와 흡연 상태, 그리고 신장 기능. 결과는 이렇다. 나중에 심근경색이나 뇌졸중을 겪은 사람들은 최대 30년 전부터 그 지표들에서 구별 가능한 패턴을 보였고, 10년 이상 전부터는 혈액 조성의 측정 가능한 차이도 나타났다. British Heart Foundation의 지원을 받았다.

임상적 해석은 헤드라인보다 덜 흥미롭고 더 유용하다. 그 변수들은 거의 전부 조정 가능하고, 우리에겐 이미 그것들을 조합해 30년 위험 추정치를 내는 방정식이 있다. 한 댓글러가 PREVENT 계산기를 링크하는데, 정확히 맞는 반응이다. 이 연구의 가치는 장기 다인자 궤적을 단단한 결과와 대조해 검증한다는 데 있지, 새 검사를 하나 쥐여준다는 데 있지 않다. 관상동맥 칼슘 스캔을 권하는 다른 댓글러는 경계선상 환자의 관리 방침을 실제로 바꾸는 쪽을 가리키고 있다.

이 연구가 테크 라운드업에 들어와야 하는 이유: 예측 지평이 이렇게 길다는 건 더 싸고, 더 이르고, 더 자주 측정하자는 논거다. 게다가 여기 쓰인 검사는 대부분 표준 패널이다. 흥미로운 질문은 30년 앞의 위험이 예측 가능한지가 아니다. 그 궤적 데이터를 누가 들고 있을 것이며, 첫 증상이 나타나기 10년 전에 누군가 그걸 갖고 실제로 뭔가를 하느냐다.

## 마이크로소프트, 자기도 못 본 24시간 장애에 '코드 레드' 선언 — 252 points

**252 points** · 243 comments · [reuters.com](https://www.reuters.com/business/microsoft-declares-code-red-after-historic-outage-internal-memos-show-2026-11-24/) · [HN discussion](https://news.ycombinator.com/item?id=50631157)

로이터는 내부 메모를 검토해, 마이크로소프트가 11월 12–13일 장애로 Exchange Online, Outlook, Teams, Copilot이 하루 동안 멈춘 뒤 내부 최고 경보인 코드 레드로 격상했다고 보도했다. 원인은 7월에 들어간, 아무도 못 잡은 Windows 확장성 결함이다. Copilot의 총괄 부사장(executive VP)은 코드 레드 검토 회의에서 해당 컴포넌트가 “대략 10년치 허용 가능한 실패”를 한꺼번에 흡수했다고 말했고, M365 Core 사장 Jason Henderson은 회사 역사상 이렇게 많은 고객이 이렇게 오래 이메일을 못 쓴 적이 없었다고 썼다.

더 치명적인 절반은 대응 실패다. 사고를 조율하던 엔지니어들은 11개 Teams 채팅에서 11,000개가 넘는 메시지를 주고받았고, 메모는 그 상황을 “전장의 안개”라고 표현한다. 협업 소프트웨어를 파는 회사가 장애 대응에서는 협업을 못 한 것이다. Windows에 넉 달간 잠복한 확장성 결함, 그것을 찾는 데 하루, 그다음엔 장애 예방과 대응 방식을 고치는 최우선 프로그램.

로이터 기사는 자동화 클라이언트로 열리지 않아서, 여기 세부 내용은 원문 페이지가 아니라 통신사 카피와 그걸 집계한 글에서 가져왔다. 구조적인 논점은 그 추출 여부에 달려 있지 않다. 장애는 가용성의 실패이기 전에 관측성의 실패다. 그리고 이 메모들에서 흥미로운 문장은 “죄송합니다”가 아니라, 결함이 7월부터 있었는데 어느 모니터링도 경고 사격을 잡아내지 못했다는 부분이다.

## 드래곤 라이더의 짧은 시대: 한 물리학자는 모델이 이미 자기를 이겼다고 말한다 — 259 points

**259 points** · 171 comments · [atilloy.com](https://atilloy.com/2026/11/16/the-short-age-of-dragon-riders/) · [HN discussion](https://news.ycombinator.com/item?id=50607849)

이론물리학자 Antoine Tilloy는 대략 8월 이후로, 제대로 활용한 공개 모델들이 업무의 기술적 본체 — 긴 해석 계산, 장문의 증명, 잘 정의된 문제를 코드로 바꾸기, 오류를 반복 수정하기, 가설 검증용 시뮬레이션 돌리기 — 에서 대부분의 이론물리학자(자기 자신 포함)보다 강해졌다고 쓴다. 그는 얼버무리지 않는다. “이 진보를 부정하는 사람은 (최신 모델로) 충분히 시도해보지 않았거나, 자기 자존심에 눈이 멀었을 뿐이다.”

그의 단서는 정직한 실무자라면 누구나 도달하는 지점이다. 모델에게는 연구적 안목(taste)이 없다. 명확한 목표는 아름답게 수행하지만, 어떤 질문을 공격할지 고르는 일, 막다른 길을 알아보는 일, 착상의 불꽃에서는 최고의 인간보다 못하다. 그리고 그는 이것도 검증 가능한 보상 기반 강화학습으로 해결될 거라고 주장하는데, 바로 거기서 논변이 얇아진다. 안목이란 채점 가능한 정답지와 함께 오지 않는 바로 그런 것이다.

스레드에서 가장 좋은 반론은 그 글의 내적 일관성 문제다. 없는 능력을 단정해 놓고, 그 능력을 요구하는 학습 체제가 그 능력을 만들어낼 거라고 가정한다. 더 아래쪽의 더 나은 반론은 체스 엔진 쪽이다. 엔진은 수십 년 전에 인간을 넘었고 인간은 그 어느 때보다 체스를 많이 둔다. 우리가 이해할 수 있는 건 받아들이고 나머지는 무시하는 평형에 도달한 것이다. 그 유추는 에세이보다 낙관적이고, 동시에 틀렸을 수도 있다. 체스 엔진의 출력은 검증 가능하지만 연구 방향은 그렇지 않기 때문이다.

## 테그마크, "앤스로픽 직원들은 술 몇 잔이면 '세계 정복'을 농담한다" — 222 points

**222 points** · 133 comments · [novaramedia.com](https://novaramedia.com/2026/11/24/anthropic-staff-openly-talk-about-taking-over-the-world-claims-top-mit-physicist/) · [HN discussion](https://news.ycombinator.com/item?id=50631210)

Novara Media가 Max Tegmark를 인터뷰했는데, 그는 앤스로픽 직원들과 술 몇 잔 곁들인 자리에서 이야기하면 대화가 미국 정부 전복과 세계 정복으로 흘러간다고 말한다. 그 표현을 쓰지는 않는다고 한다. 암호 같은 표현은 “통제 없는 정렬(alignment without control)”이다. AI는 직접적인 인간 통제가 아니라 내면화된 가치로 구속돼야 한다는 개념인데, 그는 그걸 완곡어법으로 읽는다. 인터뷰는 지구를 운영하는 기계 신과, 그게 착하기를 바라는 나머지 우리에 관한 튜링의 예측으로 끝난다.

이건 저명한 비판자가 전한, 출처가 붙지 않은 일화다. 기자가 다시 옮겼고, 특정되지 않은 행사에서 이름 없는 직원들과 나눈 대화에 관한 것이다. 사실일 수도 있는데, 그래도 술자리에서 나온 말의 증거일 뿐이다. 술자리 발언이 거버넌스 문서가 아니라는 건 유명한 사실이다. “통제 없는 정렬”은 10년치 문헌이 뒷받침하는 실제 연구 프레임이기도 하다. 그걸 쿠데타 모의로 읽으려면 그걸 모르고 있어야 한다. 여기서 일을 더 많이 하는 건 특종이 아니라 범주 오류다.

그 프레임을 견디고 남는 댓글은 지루한 쪽이다. 성장 단계 기업들은 늘 이런 말을 해왔고, 사람들이 반응하는 차이는 직원들의 태도가 아니라 그들 밑에 깔린 인프라의 규모다. 또 하나 좋은 댓글은, 이 정도에 근접한 실험실은 뭔가 해내기 훨씬 전에 국유화될 거라는 것이다. 아마 스레드에서 가장 신뢰할 만한 예측이다.

## 미 재무부 서브도메인을 개당 $3에 가져오기 — 218 points

**218 points** · 47 comments · [intruder.io](https://www.intruder.io/research/taking-over-us-treasury-subdomains-for-3-each) · [HN discussion](https://news.ycombinator.com/item?id=50638478)

Intruder의 Tom Steer는 댕글링 DNS에서 엘라스틱 IP로 이어지는 경로를 끝까지 걸어보고, 2026년에도 여전히 통한다는 걸 확인했다. 구조는 이렇다. DNS 레코드가 이미 반납된 AWS 엘라스틱 IP를 가리키고, 누구나 그 IP를 확보할 수 있으며, 그러면 이제 당신의 도메인이 그들의 호스트로 해석된다. 어려운 부분은 AWS가 주소 공간 약 80 million개에서 엘라스틱 IP를 무작위로 할당한다는 점이다. 원하는 IP가 나올 때까지 할당을 반복해야 한다. Steer는 그걸 자동화했고, 성공한 탈취당 약 $3을 썼으며, 미 재무부 도메인에서 실제 탈취를 찾아냈다. 이는 신고돼 버그 바운티를 통해 수정됐다. 그가 훑은 범위는 주소 공간의 1% 미만이었다.

글에 인용된 AWS의 입장은 이게 서비스 문제가 아니라 고객 측 DNS 문제이고, 빠른 할당·반납 반복은 정책 위반이라는 것이다. 다만 그들의 통제 장치에는 이걸 실용적으로 만드는 틈이 충분히 남아 있다. 상황을 악화시키는 건 인증서 발급이다. 호스트를 장악하면 .gov 도메인에 유효한 TLS 인증서를 받을 수 있고, 그게 피싱 페이지와 브라우저가 보증해주는 무언가의 차이다.

해법은 화려하지 않고 대부분 자동화돼 있지도 않다. 더는 소유하지 않은 인프라를 가리키는 레코드가 있는지 DNS를 감사하는 것이다. 한 댓글러는 플랫폼 차원의 답을 제안한다. 엘라스틱 IP용으로 스스로 삭제되는 Route53 레코드 타입을 만들자는 것. 그건 통할 테고 아무도 만들지 않을 것이다. 실패의 책임이 고객에게 있기 때문이고, 바로 그 이유로 이 부류의 버그는 15년이 됐는데도 여전히 개당 3달러에 돈이 된다.

## Gemini는 1806년의 시 "반짝반짝 작은 별"을 읊지 않는다 — 212 points

**212 points** · 163 comments · [comentr.com](https://www.comentr.com/technology/01M88DWQ0R4NCMYR17AFEWRG1F) · [HN discussion](https://news.ycombinator.com/item?id=50638320)

글은 Gemini가 가사를 생성하기 시작하고, 멈추고, 그것을 거둬들이고, 대신 저작권 거부 메시지를 내놓는 과정을 기록한다. 댓글러들은 곧바로 곡 전체를 시연했다. 1806년에 출간된 Jane Taylor의 “The Star”다. 그리고 같은 프롬프트가 AI Studio와 Antigravity에서는 작동한다고 지적한다. 즉 이건 한 표면의 가드레일이지 정책이 아니다.

스레드의 가치는 비슷한 사례 더미에 있다. Claude는 1929년에 출간된 W. E. B. Du Bois와 Lothrop Stoddard의 논쟁 기록 필기를 거부했고, 노래 가사의 행별 번역은 저작권을 이유로 거부하면서 요약은 제안했다. 모든 경우에 모델은 그 텍스트가 퍼블릭 도메인인지 전혀 모른다. 요청의 모양에 반응하는 분류기가 있을 뿐이다.

그게 실제로 구현된 콘텐츠 필터의 문제다. 필터는 자기가 수행할 수 없는 법적 판단을 대신하는 패턴 매처다. 그래서 저작권이 있는 것에는 열려 있고 퍼블릭 도메인에는 닫혀 있다. 그 실패는 사용자가 부딪혀 스크린샷을 올리기 전까지 보이지 않는다. 1806년과 1975년을 구별하지 못하는 필터는 누구의 권리도 보호하지 않는다. 플랫폼을 소송에서 보호할 뿐이고, 그건 다른 목표다. 그렇게 말하는 게 정직하다.

## SSH 키를 디스크 밖으로 옮겨서 얻는 건 생각보다 적다 — 203 points

**203 points** · 130 comments · [jola.dev](https://jola.dev/posts/you-cant-afford-ssh-keys-disk) · [HN discussion](https://news.ycombinator.com/item?id=50609579)

셀프호스팅하는 사람의 보안 대청소 글이다. 서비스를 쳐내고, 내부 서비스는 Tailscale 뒤로 넣고, 공개돼야 하는 것만 터널로 내보내고, 미친 듯이 패치한다. 그다음 노트북에도 같은 처방을 한다. 개인 키는 `~/.ssh`에 두는 대신 비밀번호 관리자로 옮기고 필요할 때 에이전트에 로드한다. 브라우저를 돌리는 기기에 평문 키 파일을 두는 것보다는 실제로 낫다.

최상위 답글은 악의 없이 위협 모델을 분해한다. 공격자가 이미 네 사용자 권한으로 실행 중이라면 비밀번호 관리자 프롬프트를 스스로 승인하면 되고, 그게 Touch ID 뒤에 있으면 네가 다른 걸 승인할 때까지 기다리면 된다. 이 설정이 막아주는 건 파일은 가져가도 세션은 못 가져가는 공격자다. 백업, 도난당한 노트북, 동기화 폴더. 딱 그 경우에만 값어치가 있고 그 이상은 없다. 2018년부터 이렇게 써왔다는 댓글러의 더 센 버전은 개인 키가 꺼낼 수 없게 들어 있고 PIN이 걸린 하드웨어 키다. 노트북을 들고 걸어가도 아무 소용이 없다.

이 글을 오늘 다른 글들과 연결하는 댓글도 있다. 모두가 위협 모델에 로컬 에이전트를 넣어 고치고 있다. LLM 에이전트가 네 키 재료와 네 세션을 들고 너로서 실행된다면 그건 도구가 아니라 너의 두 번째 사본이다. 별도 계정과 별도 권한을 주고, 신뢰할 수 없는 사용자로 대하라.

## 그 밖의 새 글

- **[연구소들이 P에서 인수분해를 뚫었다는 소문이 도는 중](https://www.reddit.com/r/singularity/comments/1y59ef1/rumor_that_openai_or_anthropic_found_a_way_to/)** ([391 points](https://news.ycombinator.com/item?id=50643065), 275 comments) — 스크린샷 하나와, OpenAI나 앤트로픽이 정수 인수분해를 다항 시간에 하는 방법을 찾았다는 주장 위에 세워진 r/Singularity 스레드다. 논문도 없고 저자도 없고 저장소도 없다. 최상위 답글은 정확하게 지적한다. 앤트로픽은 두 달 전에 기존 방법으로 RSA-896을 인수분해했고 그렇게 말했다고. 그건 돌파가 아니라 관심과 컴퓨트를 보여주는 일이다. 이걸 섹션이 아니라 한 줄 언급으로 처리하는 이유는 이 스레드가 드러내는 간극 때문이다. 코젠틱 논문은 L[1/3]이라 하고 스레드는 P라 하는데, 그 둘 사이의 차이는 엄밀성 개선과 공개키 암호의 종말 사이의 차이다.
- **[똑똑하고 진짜 신경 쓰는 사람들은 도구를 쓴다](https://www.iankduncan.com/engineering/2026-11-19-smart-people-who-give-a-shit-use-tools)** ([201 points](https://news.ycombinator.com/item?id=50639698), 163 comments) — 일을 모델에 넘기면 엔지니어를 값지게 만들던 이해 자체가 녹아 없어진다는 글에 대한 이안 던컨의 반박이다. 그의 반론은 LLM이 키보드 앞에 있는 사람을 증폭한다는 것이다. 호기심 많은 엔지니어는 더 많이, 더 빨리 검증한다. 게으른 엔지니어는 티켓과 머지 버튼 사이의 고기 프록시로 흘러간다. 흥미로운 건 그가 말하는 메커니즘이다. 증폭은 시스템을 더 깊이 들어가려고 모델을 쓸 때 보이고, 시스템을 우회하려고 쓸 때는 안 보인다.
- **[옛 엔비디아·ATI 테크 데모, 브라우저에서 다시 실행](https://gpu-demo-gallery.pages.dev/)** ([314 points](https://news.ycombinator.com/item?id=50638503), 68 comments) — 1998~2006년 벤더 데모를 원본 파일에서 다시 빌드해 WebGL에서 돌리는 갤러리다. 텍스처 아홉 장을 다섯 패스로 그리는 Voodoo2 큐브, GeForce 256의 스프링 버블과 번개, GeForce3 카멜레온. 댓글러들은 기뻐하면서 동시에 정확하다. 잔디 데모에서 엔비디아 'N'이 빠졌고, 수정구슬은 드래그한 뒤에도 계속 돌지 않으며, 누군가는 Dawn(2002)을 추가하지 않으면 전체가 무효라고 한다. 한 사람은 결과물이 "바이브 충실도가 좀 있다"고 표현하는데, 모델이 스크린샷으로 재구성한 것에는 딱 맞는 말이다.
- **[윈도우 라우드니스 이퀄라이제이션, 리버스 엔지니어링해서 PipeWire로 이식](https://github.com/xoxorwr/pw-loudness-eq)** ([288 points](https://news.ycombinator.com/item?id=50641171), 163 comments) — 윈도우의 애플리케이션별 라우드니스 이퀄라이제이션을 재현하는 PipeWire 모듈이다. `WMALFXGFXDSP.dll`에서 리버스 엔지니어링했고, 부스트가 클리핑되지 않게 잡아주는 `AudioEng.dll`의 리미터에 GTK3 토글까지 붙였다. 스타 146, 커밋 6개. 스레드의 오디오 엔지니어들은 원칙적으로 시큰둥하다. 이건 리미터를 붙인 자동 이득 제어고, 공개된 알고리즘으로 이미 풀린 문제다. 윈도우 DLL에서 뽑아내는 건 직접 구현하는 것보다 일이 많고 법적으로는 조금 더 흥미롭다. 답글에 파묻힌 진짜 쓸모 있는 사실 하나. 윈도우는 공유 모드 렌더 경로에 리미터를 건다. 그래서 WASAPI 공유 모드로 루프백 캡처하면 배타 모드나 ASIO에 비해 아주 살짝 압축돼 있다.
- **[기계식 시계가 시간을 재는 법, 인터랙티브 3D로](https://martincmartin.github.io/slidev-stem/watches/article/1/)** ([270 points](https://news.ycombinator.com/item?id=50599458), 61 comments) — 드래그 가능한 3D 도해로 부품을 하나씩 설명하는 글이다. 1675년 하위헌스의 헤어스프링에서 시작해 이스케이프먼트까지 올라간다. 바르토시 치에하노프스키의 훨씬 깊은 글에 들어가기 전 완만한 진입로를 자처한다. 비판이 알맹이다. 독자 셋이 각각 지적한다. 애니메이션대로면 이스케이프먼트가 작동하지 않는다. 팔레트 포크가 밸런스 휠에 임펄스를 전혀 주지 않으니 시계는 몇 초 만에 멈출 것이다. 한 댓글러는 애니메이션이 AI 생성으로 보인다고 하고, 모델에 에너지 흐름을 물으면 애니메이션이 틀린 부분을 정확히 설명해준다고 덧붙인다.
- **[홈디포 저류지에서 스노클링한 남자에게 몇 가지 질문](https://www.vox.com/down-to-earth/511999/home-depot-retention-pond-snorkel-joseph-ricketts)** ([374 points](https://news.ycombinator.com/item?id=50643129), 93 comments) — 복스가 조셉 리케츠를 인터뷰한다. 플로리다 홈디포 주차장 저류지에서 스노클링을 했고, 예상대로의 내용물을 찾아냈다. 인터넷이 저주받은 짤처럼 다룬 소재를 진지한 표정으로 구술사로 만든 글이다. 질문이 전제보다 낫다. 물속에 뭐가 있었나, 가게는 뭐라고 했나, 그다음은 어떻게 하나. 더 분석할 것도 없고, 실제로 분석은 없다.
- **[여행 가방에 들어가는 1963년 이탈리아 접이식 자전거](https://www.core77.com/posts/145766/An-Italian-Folding-Bicycle-Design-that-Fits-Into-a-Suitcase)** ([212 points](https://news.ycombinator.com/item?id=50610820), 162 comments) — 트레졸디 & 카시라기가 만든 T&C 포켓 비치. 부품을 타원 트랙 모양 프레임 안으로 접어 넣고, 그 프레임이 자체 가방에 들어간다. 요즘 접이식이 다 쓰는 반으로 자르는 힌지와는 정말 다른 접근이다. 생산 이력은 흐릿하다. 어떤 경매는 중국 시장용 2,500대라고 하고, 다른 쪽은 2,000대 주문이 1,000대에서 대금 미입금으로 끊겼다고 한다. 펼치는 영상이 중국 채널 것밖에 없다는 건 일부는 의도한 시장에 도달했다는 뜻이다. 댓글러들은 자기들이 실제로 타는 자전거로 응수하는데, 63년 된 디자인 오브제에 대한 올바른 반응이다.
- **[마지널리아 검색, 돈, C++ 그리고 러스트](https://www.marginalia.nu/log/a_141_marginalia_update/)** ([210 points](https://news.ycombinator.com/item?id=50638220), 81 comments) — 10월에 올라온 형식적인 프로젝트 근황 글이 오늘 다시 살아났다. 대부분 버그 수정과 부채 정리, SerpApi의 1만 달러 스폰서십, 기부와 API 키 판매는 전월 대비 증가, 프로젝트는 여전히 자립하지 못함. 작성자는 분석 도구가 없어서 사용자가 어디서 오는지 모르지만, Claude가 AI가 쓴 검색엔진 리스티클에서 계속 자기를 추천하는 것 같다고 의심한다. 흥미로운 건 코드 이야기다. C++에서 벗어나는 재작성을 저울질 중이고, 비슷한 시스템을 운영하는 댓글러들은 언어가 병목이 아니라고 말한다. 뜨거운 루프는 SQLite와 ONNX Runtime이고, 애플리케이션 계층은 접착제다.
- **[Songe: 유휴 컴퓨트를 쓰는 학습 엔진](https://github.com/sous-labs/songe)** ([231 points](https://news.ycombinator.com/item?id=50629231), 72 comments) — 기기가 놀고 있을 때 네 에이전트 트랜스크립트로 로컬 모델에 LoRA를 학습하는 Apache-2.0 도구다. 스타 846, 커밋 169, MLX 기반. 저장소의 토픽 목록에 `distillation`이 있는데, 오늘 증류 의혹을 받는다는 Ask HN 글과 나란히 놓으면 불편한 조합이 된다. 두 작성자 모두 스레드에 나와 피드백을 받았다. 잘 답하지 못한 질문 둘. 학습 샘플이 개선인지 어떻게 판정하는가, 주말 하나 붙여서 얼마나 기대할 수 있는가. 누군가 SETI@home 버전을 요청하고, 조정이 어려운 부분이라는 정확한 답을 듣는다.
- **[시장 급락: 나스닥, 2026년 상승분 전부 반납](https://www.nbcnews.com/business/markets/anthropic-shares-markets-selloff-nasdaq-rcna610394)** ([200 points](https://news.ycombinator.com/item?id=50578794), 1 comments) — 어제 이미 페이지에 있던 사건의 두 번째 제출이다. 나스닥을 연간 보합으로 되돌리고 S&P와 다우를 조정 국면에 넣은 AI 매도세. 200포인트와 정확히 댓글 하나를 얻었다. 앤트로픽 주가 기사는 아래에 있고, 이건 같은 날 다른 매체가 보도한 것이며, 둘이 합쳐져서 간신히 기준선을 넘은 게 전부다.

## 여전히 페이지에 있는 글

92개 스토리가 넘어왔다. 밤사이 가장 큰 움직임은 뉴스가 아니라 이틀째 표류였다. 스프레이 보틀 244 → 601 (+357), LLM 에이전트는 너를 위해서가 아니라 모회사를 위해 일한다 792 → 997 (+205), 앤트로픽, 83달러 공모가 아래로 235 → 418 (+183), 2035년이 일찍 왔다 890 → 1,017 (+127), Quad9, 프랑스에서 DNS 서비스 철수 280 → 380 (+100), Jetty Pro 214 → 311 (+97). 이 목록의 순위는 거의 의미가 없다. 랭킹 윈도우에서 완전히 밀려난 스토리도 200포인트는 그대로 들고 있다.

| Story | Last | Nov 25 |
|---|---|---|
| [레벤트 알포게, 일반화 리만 가설 증명 주장 (pdf)](https://alpo.ge/remark.pdf) | 2,929 (11-24) | 2,934 (+5) |
| [엔비디아, 젠슨 황 CEO 복귀](https://www.cnbc.com/2026/11/23/nvidia-jensen-huang-ceo.html) | 2,777 (11-24) | 2,836 (+59) |
| [급히 올린 발표: 알레산드로 마술로 GRH](https://math216.wordpress.com/2026/11/20/hurried-announcement-alessandro-masullo-grh/) | 2,451 (11-24) | 2,453 (+2) |
| [레이디버드, 알파 진입](https://ladybird.org/posts/alpha/) | 2,367 (11-24) | 2,424 (+57) |
| ["다리오가 위험을 과장해 오픈소스 모델을 불법으로 만들고 권력을 유지하려 한다"](https://twitter.com/ylecun/status/2124550037912920090) | 1,973 (11-24) | 2,010 (+37) |
| [Inkling 2 Mini](https://thinkingmachines.ai/news/inkling-2-mini/) | 1,482 (11-24) | 1,487 (+5) |
| [토요타·닛산·혼다, 부품 표준화로 원가 절감](https://www.caranddriver.com/news/a74490092/toyota-nissan-honda-standardize-parts-lower-costs/) | 1,392 (11-24) | 1,399 (+7) |
| [췌장암 치료 알약, '수십 년 만의 최대 돌파구'라는 찬사](https://www.theguardian.com/society/2026/nov/20/pill-pancreatic-cancer-breakthrough-daraxonrasib) | 1,394 (11-24) | 1,398 (+4) |
| [리만 가설의 Lean 검증](https://leanprover-community.github.io/blog/posts/riemann-hypothesis/) | 1,246 (11-24) | 1,247 (+1) |
| [Arm의 요청으로 이 사이트는 2026년 12월 4일 종료됩니다 :(](https://arm.jonpalmisc.com/) | 1,154 (11-24) | 1,177 (+23) |
| [GLM-5.4: 첫 루프 트랜스포머로 가는 일반화 코딩](https://z.ai/blog/glm-5.4) | 1,160 (11-24) | 1,176 (+16) |
| [앤트로픽의 나스닥 데뷔](https://www.reuters.com/business/finance/anthropics-historic-debut-put-ais-promise-peril-wall-st-test-2026-11-19/) | 1,146 (11-24) | 1,146 (+0) |
| [인터넷 아카이브의 잊힌 영상으로 만든 무료 대안 TV 네트워크](https://spelunkr.tv) | 1,063 (11-24) | 1,086 (+23) |
| [2028년 앤트로픽 전력의 87%는 가스, 11%는 석탄](https://betterdatacenterproject.com/2026/11/16/how-ai-is-powered-a-breakdown-of-byop-and-grid-power/) | 1,036 (11-24) | 1,042 (+6) |
| [2035년이 일찍 왔다](https://fzakaria.com/2026/11/23/2035-came-early) | 890 (11-24) | 1,017 (+127) |
| [LLM 에이전트는 너를 위해서가 아니라 모회사를 위해 일한다](https://michaelharley.net/posts/2026/11/01/llm-agents-work-for-their-parent-companies-not-for-you/) | 792 (11-24) | 997 (+205) |
| [바이러스 주입으로 췌장암 진행 멈춘 환자 3명](https://www.newscientist.com/article/2528235-pancreatic-cancer-halted-by-virus-injection-in-three-patients/) | 892 (11-24) | 895 (+3) |
| [실리콘밸리에 무슨 일이 있었나?](https://www.oreilly.com/radar/what-happened-to-silicon-valley/) | 820 (11-24) | 838 (+18) |
| [슬롭스트랩 — 대충 바이브코딩한 사이트처럼 만들기](https://slopstrap.mikelacher.com/) | 810 (11-24) | 816 (+6) |
| [뉴욕, 자동차 구독료·구매 후 수수료 금지](https://www.governor.ny.gov/news/money-your-pockets-governor-hochul-signs-bill-restricting-exploitative-vehicle-subscription) | 746 (11-24) | 813 (+67) |
| [Inkling·Qwen·Unsloth로 시작하는 로컬 AI 입문](https://www.gpupartner.com/blog/beginners-guide-local-ai-inkling-qwen-unsloth) | 769 (11-24) | 776 (+7) |
| [Ask HN: 2년째 실직, 경력 15년, 미국. 어떻게 해야 하나?](https://news.ycombinator.com/item?id=50583761) | 751 (11-24) | 754 (+3) |
| [쉬운 말로 설명 못 하면 이해한 게 아니다 (2017)](https://kottke.org/17/06/if-you-cant-explain-something-in-simple-terms-you-dont-understand-it) | 723 (11-24) | 726 (+3) |
| [납 아자이드 더미 폭발](https://www.science.org/content/blog-post/detonating-huge-pile-lead-azide-really) | 717 (11-24) | 723 (+6) |
| [퍼플렉시티와 지능](https://openai.com/index/perplexity-and-intelligence/) | 715 (11-24) | 719 (+4) |
| [Stalwart, 이제 마이크로소프트 Exchange 대체 가능](https://stalw.art/blog/microsoft-exchange-replacement/) | 679 (11-24) | 707 (+28) |
| [모니터가 다운로드 속도를 75% 깎고 있었다](https://blog.tymscar.com/posts/studiodisplayethernet/) | 698 (11-24) | 699 (+1) |
| [프로스트바이트: AI가 발견·설계·검증한 새 CPU 아키텍처](https://architectlabs.com/blog/frostbite) | 686 (11-24) | 686 (+0) |
| [GTA 6의 새들: 바이스 시티와 레오니다 야생 동물 도감](https://www.audubon.org/magazine/birds-of-gta-6-field-guide-vice-city-wildlife) | 638 (11-24) | 645 (+7) |
| [애플, 9년 만에 내 오픈소스 앱을 EU 앱스토어에서 삭제](https://github.com/glushchenko/fsnotes/discussions/2056) | 611 (11-24) | 630 (+19) |
| [XNU 리눅스: 리눅스 위의 완전한 OS X GUI 유저스페이스](https://github.com/AFK-surf/xnulinux) | 619 (11-24) | 627 (+8) |
| [개발자를 아키텍트로 승진시키고 아무에게도 말하지 않았다](https://manidoraisamy.com/developer-to-architect.html) | 624 (11-24) | 624 (+0) |
| [샌드위치 시뮬레이터](https://stulle.app/) | 614 (11-24) | 614 (+0) |
| [iOS에 WebKit 아닌 브라우저가 아직 없는 이유](https://blog.mozilla.org/en/mozilla/internet-policy/apple-ios-browser-engine-rules/) | 597 (11-24) | 603 (+6) |
| [스프레이 보틀](https://mechanical-pencil.com/products/spray-bottle) | 244 (11-24) | 601 (+357) |
| [Inkling-2-Mini, 5.4 GB 메모리에서](https://github.com/ShinMegamiBoson/lookatmyquant) | 598 (11-24) | 598 (+0) |
| [모바일 OS 플랫폼의 AI 에이전트 데이터 수집 제한](https://signal.org/blog/protecting-your-privacy/) | 583 (11-24) | 584 (+1) |
| [클로드, 블랙홀 물리의 미해결 문제 둘을 풀다](https://www.anthropic.com/research/claude-black-hole-physics) | 579 (11-24) | 580 (+1) |
| [카니발 크루즈, 유럽 승용차 전체의 10배 아황산가스 배출 (2019)](https://ecohustler.com/article/one-corporation-to-pollute-them-all/) | 563 (11-24) | 565 (+2) |
| [비강제 나비에-스토크스 특이점과 일반화 리만 가설](https://terrytao.wordpress.com/2026/11/20/unforced-euler-singularity-unforced-navier-stokes-singularity-and-the-generalized-riemann-hypothesis/) | 550 (11-24) | 550 (+0) |
| [AI 매도세로 나스닥 2026년 상승분 전부 반납, 앤트로픽 상장 이틀째](https://www.theguardian.com/business/2026/nov/20/global-stock-markets-slump-anthropic-ipo-ai-sell-off) | 530 (11-24) | 530 (+0) |
| [언어 모델은 자기 가중치를 다시 쓸 수 있다](https://arxiv.org/abs/2611.21885) | 494 (11-24) | 494 (+0) |
| [Kagi 메일 (퍼블릭 베타)](https://blog.kagi.com/kagi-mail-public-beta) | 453 (11-24) | 462 (+9) |
| ["이거 직접 쓴 거 다 알겠어요"](https://em-online.bearblog.dev/i-can-tell-you-wrote-this-yourself/) | 431 (11-24) | 431 (+0) |
| [앤트로픽, 83달러 공모가 아래로](https://www.bloomberg.com/news/articles/2026-11-24/anthropic-breaks-below-83-ipo-price-in-premarket-trading) | 235 (11-24) | 418 (+183) |
| [몸을 조종하는 마음을 조종하는 마음](https://notnottalmud.substack.com/p/getting-the-mind-to-steer-the-body) | 413 (11-24) | 415 (+2) |
| [코드 작성을 멈추면 리뷰도 못 하게 된다](https://cekrem.github.io/posts/if-you-stop-writing-code-you-also-get-worse-at-reviewing-it/) | 404 (11-24) | 404 (+0) |
| [PostgreSQL 19](https://www.postgresql.org/docs/release/19.0/) | 399 (11-24) | 399 (+0) |
| [GPUI, 자체 저장소로 분리](https://github.com/zed-industries/gpui) | 374 (11-24) | 384 (+10) |
| [NINLIVE: 나인 인치 네일스 라이브 아카이브](https://ninlive.com/) | 384 (11-24) | 384 (+0) |
| [Quad9, 프랑스에서 DNS 서비스 철수](https://quad9.net/news/blog/quad9-service-deactivation-in-france/) | 280 (11-24) | 380 (+100) |
| [실시간 버스·비행기·배가 다니는 미니어처 샌프란시스코](https://smallsf.com/) | 376 (11-24) | 379 (+3) |
| [GTA 6 리컴프(레오니다), 리드 개발자가 수업 중일 때 GitHub에서 차단](https://github.com/ItsNotRexed/Leonida/issues) | 311 (11-24) | 378 (+67) |
| [OpenSSL: EVP_EncodeBlock() 버퍼 오버플로 (CVE-2026-121481, CVSS 9.8)](https://github.com/openssl/openssl/pull/33652) | 376 (11-24) | 376 (+0) |
| [모든 체에서 VP ≠ VNP](https://github.com/anthropics/formal-math/tree/main/vp-vnp) | 356 (11-24) | 367 (+11) |
| [탐사선, 사상 두 번째로 수성 궤도 진입](https://www.theguardian.com/science/2026/nov/20/spacecraft-mercury-second-ever-mission-orbit-bepicolombo) | 362 (11-24) | 366 (+4) |
| [확률적 앵무새들이 리만 가설을 증명했다고 한다](https://scottaaronson.blog/?p=10344) | 363 (11-24) | 364 (+1) |
| [Show HN: LLM의 서브에이전트가 되는 게임을 만들었다](https://github.com/gulivan/worker755) | 360 (11-24) | 360 (+0) |
| [네스프레소, 캡슐당 커피 그램 줄이기 프로젝트](https://alvinbunk.wordpress.com/2026/11/01/nespresso-project-olympus/) | 342 (11-24) | 355 (+13) |
| [98% 슬롯머신: 유료 광고가 어떻게 착취세가 되었나](https://globalcommercegraph.com/writing/the-ninety-eight-percent-slot-machine) | 344 (11-24) | 344 (+0) |
| [Bored.com: 심심할 때 둘러볼 재미있는 사이트](https://www.bored.com/) | 325 (11-24) | 342 (+17) |
| [타이달, AI 생성 음악 금지](https://variety.com/2026/music/news/tidal-bans-ai-generated-music-1236956924/) | 305 (11-24) | 334 (+29) |
| [Nospeaker ─ 맥북 트랙패드의 햅틱 모터로 소리 내기](https://github.com/os6/nospeaker) | 323 (11-24) | 329 (+6) |
| [나비에-스토크스 방정식의 유한 시간 폭발](https://github.com/tristanbuckmaster/navier-stokes/) | 326 (11-24) | 327 (+1) |
| [사람들은 네 블로그 글에 관심 없다고 가정하라](https://danielsada.tech/blog/assume-people-are-not-interested-in-your-blog-post/) | 318 (11-24) | 319 (+1) |
| [FFmpeg 9.1 'Gauss'](https://ffmpeg.org/download.html#release_9.1) | 316 (11-24) | 317 (+1) |
| [마술로의 리만 가설](https://johncarlosbaez.wordpress.com/2026/11/22/masullo-on-the-riemann-hypothesis/) | 312 (11-24) | 314 (+2) |
| [사이버리크, GTA 6 엑스박스 빌드 실행 파일 공개](https://www.reddit.com/r/GamingLeaksAndRumours/comments/1y3jzqe/cyberleek_posted_the_gta_6_xbox_build_executable/) | 304 (11-24) | 313 (+9) |
| [Jetty Pro](http://hypercritical.co/2026/11/23/jetty-pro) | 214 (11-24) | 311 (+97) |
| [미 SEC의 엔비디아 조사, 회계 문제 검토 중](https://www.marketscreener.com/news/us-sec-s-nvidia-probe-is-examining-potential-accounting-issues-sources-say-ce785ed3dd8ff627) | 308 (11-24) | 309 (+1) |
| [체크포인트 보안 관리 서버 대상 진행 중인 침해 캠페인](https://www.greynoise.io/blog/check-point-security-management-servers-intrusion-campaign) | 219 (11-24) | 297 (+78) |
| [추론 제공업체들의 데이터 처리 사고](https://openrouter.ai/blog/announcements/data-processing-incidents-on-inference-providers/) | 294 (11-24) | 294 (+0) |
| [DreamCoder: 『Mastering Emacs』 저자가 만든 코딩 하네스 겸 IDE](https://www.masteringemacs.org/article/announcing-dreamcoder) | 289 (11-24) | 290 (+1) |
| [워싱턴에서 누가 엔비디아 주식을 보유하고 거래하나](https://www.kadoa.com/congress/insights/trump-nvidia) | 276 (11-24) | 289 (+13) |
| [그래, Lean 1,700만 줄은 많은 거다](https://micjm.com/blog/yes-17m-lines-of-lean-is-a-lot/) | 272 (11-24) | 276 (+4) |
| [GL.iNet 보안 공지 2026-11-20](https://www.gl-inet.com/en-us/blogs/blog/glinet-security-notice-2026-11-20) | 271 (11-24) | 274 (+3) |
| [GPGME 관련 GnuPG 보안 공지](https://lists.gnupg.org/pipermail/gnupg-announce/2026q4/000517.html) | 265 (11-24) | 265 (+0) |
| [다음 번째 보안 지옥의 원](https://blogs.gentoo.org/mgorny/2026/10/27/the-next-circle-of-security-hell/) | 259 (11-24) | 264 (+5) |
| [알레산드로 마술로 원고의 Lean 형식화 진행 지도](https://claude.ai/artifact/CtQyX8qfYAF822bgHJHHE3) | 260 (11-24) | 264 (+4) |
| [앞으로의 100개 러스트 GUI를 위한 조언](https://linebender.org/blog/next-100-guis/) | 264 (11-24) | 264 (+0) |
| [Backblaze 수집 고지 및 개인정보 처리방침](https://www.backblaze.com/company/policy/privacy) | 255 (11-24) | 257 (+2) |
| [오픈 소셜 웹 연합](https://osw-alliance.net/en/) | 254 (11-24) | 254 (+0) |
| [Win4wine — Wine에서 윈도우 셸을 리눅스 데스크톱으로](https://github.com/mikuta0407/win4wine) | 248 (11-24) | 253 (+5) |
| [브렌던 그렉의 제단에 절하기](https://fzakaria.com/2026/11/12/worshipping-at-the-altar-of-brendan-gregg) | 201 (11-24) | 238 (+37) |
| [인도 야당, 인스타그램 계정 복구 요구하며 메타 사무실 습격](https://korben.info/en/india-opposition-storms-meta-offices-instagram-accounts.html) | 227 (11-24) | 237 (+10) |
| [Oxygene이 만들어진 과정](https://jeanmicheljarre.com/aaa/the-making-of-oxygene) | 232 (11-24) | 232 (+0) |
| [AMD EPYC Zen 6 vs. Zen 1 성능: 10년 안에 기하평균 12.1배](https://www.phoronix.com/review/amd-epyc-9006-7601) | 212 (11-24) | 231 (+19) |
| [DeFlock America 페이스북 그룹, 위험 단체로 정지](https://www.facebook.com/shugvermonte/posts/the-deflock-america-group-with-over-840k-members-has-been-suspended-by-meta-what/10165140280736049/) | 221 (11-24) | 222 (+1) |
| [Fast-Anything: 러스트로 다 뜯어고치지 말고 느린 5%만 고쳐라](https://github.com/EL4CTEO/fast-anything) | 211 (11-24) | 214 (+3) |
| [Jujutsu 입문](https://ethanlowman.com/posts/jj-primer/) | 210 (11-24) | 210 (+0) |
| [P vs. NP를 풀려는 에이전트 군단](https://pequalnp.com/) | 206 (11-24) | 209 (+3) |
| [클로저는 프로그래밍을 생각하는 방식을 바꾼다 (2017)](https://eli.thegreenplace.net/2017/clojure-the-perfect-language-to-expand-your-brain/) | 209 (11-24) | 209 (+0) |

## 스루라인

오늘 세 갈래 실이 있는데, 해상도만 다른 같은 실이다.

**기계 수학은 이벤트에서 주기로 바뀌었다.** 2주 전만 해도 리만 가설 증명은 올해의 스토리였다. 오늘은 배경이다. 페이지에는 행렬 곱셈의 대응하는 하한, 수체 체의 무조건적 바운드, 무조건적 소표수 이산로그 알고리즘, 로그-랭크 추측의 제곱근 장벽 돌파, 내시 균형과 탈무작위화 결과의 네트워크가 실려 있다. 전부 PDF를 GitHub 저장소에 올리고 댓글 스레드가 분류를 맡게 해서 발표된 것이다. 이걸 "P에서의 인수분해"라고 부르는 레딧 스레드가 계속 봐야 할 오류다. 뉴스는 엄밀성이지 돌파가 아니고, 논문이 증명하는 것과 프런트페이지가 믿는 것 사이의 간극은 지금이 가장 넓다. 애런슨의 문장 — 반증 자료가 없는 한 이 연구소들의 증명은 맞다고 가정하라 — 은 형식적 명제에 대해서는 방어 가능하고, 그 형식적 명제가 흥미로운 질문인지에 대해서는 아무 말도 하지 않는다. 검증 문제는 "이 증명이 맞나"에서 "이게 그 질문인가"로 옮겨갔다.

**모델 아래의 공급망이 실제 공격면이다.** 6GB로 컴파일된 27B 모델, 네가 자는 동안 트랜스크립트로 파인튜닝하는 학습 엔진, 스케줄러의 커널 선택을 통해 비트를 밀반출하는 에이전트 둘, 코드 작성이 보편 인터페이스라서 단백질 백본 코드를 쓰는 모델. 그 사이에 1Password는 직원의 GitHub 계정이 프로덕션에 푸시할 수 있어서 뚫렸고, SSH 키 강화 글은 공격자가 이미 너로서 실행 중이라는 이유로 댓글에서 해체됐고, 마이크로소프트는 넉 달에 걸쳐 윈도우 확장성 결함을 내보내고 하루는 Teams 채팅 11개를 뒤져도 자기 장애를 못 봤다. 이 묶음에서 암호학에 무너진 건 하나도 없다. 전부 자격증명에서 배포까지의 경로에 무너졌다.

**그리고 집행 계층은 벤더가 벤더를 위해 만들고 있다.** 고발당한 회사는 증거도 못 보고 증류에 대한 부정을 24시간 안에 증명해야 한다. 제안된 방어법이 고발자 쪽 모델에게 증거가 설득력 있는지 물어보는 제도에서. Gemini는 1806년 시를 낭송하지 않는다. 분류기가 퍼블릭 도메인과 저작권을 구분하지 못해서다. 테그마크에 따르면 앤트로픽 직원들은 술자리 뒤에 자기 정렬 철학을 설명한다. 연구 프로그램을 배우는 방법으로는 나쁘고, 비판자들이 그 프로그램을 어떻게 보는지 배우는 방법으로는 좋다. 셋 다 패턴이 같다. 규칙은 모델을 운영하는 쪽이 정하고, 집행은 논변이 아니라 추론으로 이뤄지고, 이의 제기 절차는 지원 티켓이다. "통제 없는 정렬"이 실제로 뜻하는 게 이거고, 기계 신과는 아무 상관이 없다.
