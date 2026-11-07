---
title: "Hacker News 프런트페이지 라운드업 — 2026년 11월 7일"
pubDate: 2026-11-07
description: "200점을 넘긴 스토리는 77개, 그중 18개가 새것이다. 터미널 라이브러리 하나가 조용히 인프라가 됐고, 애플 맥은 아무도 문서화하지 않은 가족 관계 그래프를 만들어 왔고, AI 연구 논쟁은 둘 다 맞는 글 두 편으로 갈렸다."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
lang: "ko"
---

오늘 오후 상위 260개 제출물을 훑었다. 200점 문턱을 넘긴 스토리는 77개. 18개가 새것이고, 나머지 59개는 어제 페이지에 있던 것으로 여전히 한 자릿수 점수를 더하고 있다. 딱 하나, 거의 500점을 더한 놈이 예외다.

새로 올라온 것들은 목요일보다 조용하다. 제품 출시도 없고, 새 스캔들도 없다. 대신 진짜 논쟁이 셋 있다. 하나는 AI가 AI 연구를 가속하고 있느냐는 것. METR의 deep-access 보고서와 LessWrong의 짧은 반론이 같은 날 올라왔고, 서로 모순되지만 알고 보면 정리된다. 하나는 기기 내 데이터 수집이 클라우드 수집과 실질적으로 다르냐는 것. 2022년부터 애플 데몬 두 개가 돌고 있는데 읽을 만한 man page가 없다. 마지막은 `sudo`를 다시 짜면 호환성을 얼마나 빚졌냐는 것.

나머지는 장인 정신이다. 1,200만 IDE 사용자가 모르는 채 의존하게 된 터미널 에뮬레이터를 C 라이브러리로 뽑아낸 일, 20년 된 레이싱 게임을 브라우저 탭에서 돌게 리컴파일한 일, FAA의 플로피디스크 예산을 리버스 엔지니어링한 팬 프로젝트.

## Libghostty 1.0 — 980 points

**980 points** · 172 comments · [mitchellh.com](https://mitchellh.com/writing/libghostty-1-0) · [HN discussion](https://news.ycombinator.com/item?id=50399933)

Mitchell Hashimoto가 libghostty-vt 1.0을 냈다. Ghostty 코어에서 터미널 에뮬레이션을 뽑아낸 이식성 좋은 C 라이브러리다. 1.0이 말하는 건 두 가지다. C ABI가 안정됐고, 패키징이 진짜다. 서명된 소스 타르볼에 의존성 타르볼을 Zig 캐시 레이아웃으로 붙여줘서 배포판이 완전히 오프라인으로 빌드할 수 있다. SONAME, pkg-config 파일, CMake 패키지 설정, `--prefix`/`DESTDIR`/`lib64` 지원, 디버그 정보는 기본 포함이라 배포판이 알아서 쪼갤 수 있다. MIT 라이선스, 런타임 의존성은 libc 하나, 의존성 트리 어디에도 카피레프트 없음. 의존성은 전부 기계가 읽는 매니페스트에 버전, SPDX 식별자, 해시까지 적혀 있다.

재밌는 건 채택 숫자다. JetBrains가 JediTerm을 libghostty로 갈아치웠다. JetBrains 자체 집계로 IntelliJ/PyCharm/GoLand 활성 사용자 1,250만 명 앞에 놓인 셈이다. Neovim은 libvterm을 교체하는 PR을 승인했고, 리사이즈할 때 스크롤백 리플로우가 안 되던 10년 묵은 이슈가 닫혔다. KDE는 Konsole 대체품을 실험 중이다. Turborepo는 작업 출력을 이걸로 렌더링하고, OrbStack은 내장했고, Antithesis는 TUI 프로그램을 퍼징하다 btop에서 진짜 버그를 찾았다. `ghostty-web`은 Xterm.js 호환 API를 가진 WASM 빌드다. Rust, Go, JavaScript, Swift, Python, .NET, Elixir, Dart, Java 바인딩이 있다.

훔쳐올 만한 설계 결정은 ABI 쪽이다. 모든 객체는 불투명 핸들이고, 읽고 쓸 수 있는 수백 개 값은 enum 키를 쓰는 소수의 getter/setter로만 지나간다. 값이 늘어도 심볼이 늘지 않는다. 새 헤더로 옛 라이브러리에 링크하면 크래시 대신 `GHOSTTY_UNSUPPORTED`가 돌아온다. enum은 모든 컴파일러에서 `int`로 고정되고, 불투명하지 않은 구조체는 자기 크기를 들고 다니고, ELF 심볼은 버전이 붙어서 로더가 이름으로 불일치를 거부한다. CI가 이 전부를 골든 타입 매니페스트와 대조한다.

주장 두 개는 조심해서 봐야 한다. "libghostty로 돌아가는 터미널을 쓰는 사람이 Ghostty 앱을 쓰는 사람보다 많다"는 검증 불가고, 아마 사실일 것이다 — 지루한 이유 때문에. JetBrains 사용자가 전부 세어지니까. 그리고 4코어 8GB에서 터미널 1만 개 벤치마크는 터미널 벤치마크지 당신 셸 벤치마크가 아니다. Hashimoto는 bash가 안 들어가서 `dash`를 써야 했다. 터미널은 원래 비싼 부분이 아니었다.

## 니드 포 스피드 언더그라운드 2, 브라우저에서 온라인으로 — 667 points

**667 points** · 194 comments · [nfsu2.xyz](https://nfsu2.xyz/) · [HN discussion](https://news.ycombinator.com/item?id=50403052)

형제가 2004년 레이싱 게임을 브라우저 탭으로 옮겼다. 같이 하던 게임이라서. 에뮬레이터가 아니다. PC판 코드 자체를 Chrome과 Firefox로 리컴파일했다. NFSU2Recomp, N64: Recompiled와 XenonRecomp 계보의 x86-to-C 정적 리컴파일러를 써서. 기계어를 C로 되살려 다른 타깃에 올리는 기법이다. 결과물은 와이드스크린에 최대 120fps, 자유 주행, 온라인 레이스, 패드, 휠, 터치 조작까지 된다.

이 차이가 성능을 만든다. 리컴파일은 다시 네이티브 코드다. 브라우저 안의 WebAssembly 에뮬레이터는 PowerPC나 x86 파이프라인을 해석해야 한다. 프로젝트는 올해 10월 16일 자 MIT 라이선스 버전 NFSU2Recomp에서 포크했다. 체인 전체가 한 달짜리다.

법적 입장은 아무도 안 쓰고 싶어 하는 부분이다. 사이트는 게임 에셋을 직접 호스팅하고, Electronic Arts와 무관하고 보증도 없다고 명시하고, 커피 링크로 후원을 받고, 권리자용으로 `legal@nfsu2.xyz`를 걸어뒀다. 댓글은 깔끔하게 갈린다. 한쪽은 저작권 있는 콘텐츠로 후원받는 걸 "대단히 수상하다"고 하고, 다른 쪽은 어디서도 살 수 없는 어밴드웨어니까 인기를 얻은 김에 takedown이 올 거라고 예측한다. 둘 다 서로 다른 것에 대해 맞다. 엔지니어링은 정당하고, 배포는 아니고, takedown이 오면 게임을 살 수 있게 만들어주지도 않은 채 결과물만 사라진다.

스레드에서 나온 실용적인 팁 하나. 리눅스에서 WebGPU 경로를 쓰려면 `chromium --enable-unsafe-webgpu --ozone-platform=x11`이 필요하다. 이 게임이 실제로 뭘 딛고 서 있는지 알려주는 대목이다.

## Opus한테 도움을 청할 수 있는 Jev — 568 points

**568 points** · 142 comments · [hightouch.com](https://hightouch.com/blog/llm-judges-identity-resolution) · [HN discussion](https://news.ycombinator.com/item?id=50397429)

Hightouch가 실험한 건, 값싼 "판단 모델" — 특정 주장에 0~1 신뢰도를 돌려주는 부류인 Jev와 GPT-6 Luna — 이 프런티어 모델만큼 신원 해석(identity resolution)을 잘 채점하느냐다. 기본 성능은 둘 다 88.8~97.3% 정확도, 신원 1,000건당 $0.05~$0.10, 답 하나에 0.15초. 어려운 케이스에서 Opus에 6%포인트쯤 뒤진다. 쓸 만한 결과는 정확도 격차가 아니다. Jev에 Opus 에스컬레이션을 붙인 캐스케이드가 프런티어 정확도를 4배 이상 싼 값에 낸다는 것. Jev의 신뢰도는 보정돼 있고 Luna는 아니다. Jev는 틀릴 때 신뢰도가 낮게 나온다. Luna는 높게 나온다. 그래서 Luna는 게이트로 못 쓴다.

동기는 구체적이다. 신원 그래프가 과병합되지 않았음을 증명하려면 사람이 시간당 50건씩 출력 신원을 손으로 샘플링해야 하고, 과병합률을 1%포인트 이내로 조이려면 1,000건 넘게 봐야 한다. 반복 한 번에 누군가의 인생 일주일이다. 모델이 사람만큼 채점한다면 10만 건을 몇 초에 처리한다.

회의적인 부분은 명백하다. 신원 해석을 파는 회사의 작업 하나이고, "4배 싸다"는 수치는 벤더 자체 벤치마크의 가격 주장이다. 일반화되는 건 보정 발견 쪽뿐이다. 정답 라벨을 꼼꼼히 읽은 댓글러가 사람 라벨에서 오류를 찾았다. 데이터셋이 "Valentino"를 여자아이로 표시해놨는데, 명백히 아니다. 벤치마크의 천장이 결함 있는 수작업 라벨 세트라는 뜻이고, 모델은 그 결함에 대고 채점받는다.

몸을 일으켜야 하는 댓글은 이걸 프라이버시 이야기로 읽은 사람에게서 나왔다. "AI가 도와주는 프라이버시 침해, 4배 저렴"이라는 것. 신원 해석은 흩어진 기록을 실존 인물의 프로필로 바꾸는 기계장치다. 품질 관리 단계를 4배 싸게 만든다고 제품이 하는 일이 바뀌진 않는다. 그걸 지을 여유가 있는 회사 수가 바뀐다.

## 모든 Mac에 문서화되지 않은 가족 분류기가 들어 있다 — 498 points

**498 points** · 297 comments · [8rank.ai](https://8rank.ai/game/apple-intelligence-personal-knowledge-graph) · [HN discussion](https://news.ycombinator.com/item?id=50403097)

연구자 둘이 macOS 26이 도는 Mac에서 `~/Library/IntelligencePlatform`을 뜯었다. 데몬 두 개, `knowledgeconstructiond`와 `intelligenceplatformd`가 관리하는 SQLite 데이터베이스 51개가 나왔다. 연락처, 캘린더, 사진, 메시지, 메일, 위치, 스크린 타임, 그리고 긴 꼬리의 행동 신호를 상호 참조해서 질의 가능한 그래프 하나로 만든다. 당신이 누구고, 누구를 알고, 그 사람들이 서로 어떻게 엮이고, 언제 어디를 가는지. 2022년 macOS 13 이후 모든 Mac에 이게 들어 있다.

문서라고 있는 건 man page 하나다. `man 8 knowledgeconstructiond`는 네 줄이다. 애플 연구진이 2023년에 그래프 구성 기법 논문은 냈지만, 어느 OS 버전에서 데몬이 도는지, 뭐가 수집이고 뭐가 추론인지, 저자들이 찾아낸 친족 추론은 뭔지는 설명하지 않았다. 선행 작업은 있다. Nic Lydon이 2026년 초에 정리했고, Alexis Brignoni는 iLEAPP를 가르쳐 iOS의 같은 저장소를 읽게 했다 — `graph.db`와 `ontology.db`가 `/private/var/mobile/Library/IntelligencePlatform` 아래 있다. 저자들은 로컬 대시보드 iKnow를 오픈소스로 풀어서 자기 그래프를 직접 읽어볼 수 있게 했다.

스레드의 방어 논리는 이게 전부 기기 안에서 돌아가니 괜찮다는 것이고, 실제로 그럴듯한 논거다. 로컬 그래프가 있어야 "제임스한테 문자 보내"가 작동한다. 제임스가 셋일 때는. 다만 같은 스레드에 나온 경험적 반박이 그걸 뒤집는다. 한 댓글러는 그래프가 애플 계정을 통해 개인용 Mac과 업무용 Mac을 프로필 하나로 합쳐버렸고, 업무에서만 쓰는 슬랙 채널이 슬랙을 한 번도 돌린 적 없는 기계에 딸려왔다고 한다. 다른 사람은 지능 기능과 시리 설정을 전부 끄고 차단했는데도 수집이 계속 돌고 있었다. "기기 안에서"와 "끌 수 있다"는 같은 주장이 아니다. 그리고 저자들은 자기 최강 문장 — 여기가 LLM이 검색해가는 저장소라는 — 에 "(주장에 따르면)"을 붙인다. 문서화된 게 얼마나 없는지를 감안하면 그게 정직한 태도다.

## FAA가 플로피디스크를 은퇴시킨다 — 401 points

**401 points** · 323 comments · [reuters.com](https://www.reuters.com/world/us/us-faa-says-it-will-phase-out-floppy-disks-air-traffic-control-by-2028-2026-11-05/) · [HN discussion](https://news.ycombinator.com/item?id=50388001)

FAA가 목요일, 400곳이 넘는 항공교통관제 시설의 플로피디스크 시스템을 2028년 말까지 Enterprise Information Display System으로 바꾼다고 밝혔다. E-IDS는 디스플레이 시스템 네 개를 대체한다. IDS-4, ACE-IDS, NIDS, ERIDS. 이미 다섯 곳이 전환됐다. Atlantic City, Nashville, Rochester, 그리고 Atlanta와 Salt Lake City 데이터 처리 허브. 계획은 435개 사이트다. 의회는 작년 관제 현대화에 125억 달러를 승인했고, 교통장관 Sean Duffy는 300억 달러를 더 원한다.

플로피가 제일 재미없는 디테일이고, 유일하게 퍼져나간 디테일이다. IDS-4는 1990년대 초에 개발됐다. 보도자료가 말하는 1980년대가 아니다 — 댓글러가 계약 기록을 추적했다. 데스크톱 PC에서 MS-DOS로 돌고, 3.5인치 드라이브를 쓴다. 디스크에는 날씨, PIREP, NOTAM 데이터가 들어 있고, 9월 GAO 보고서는 이걸 구식 기술, 수동 갱신 방식이라 "관제사가 검색하고 꺼내고 표시하기에 번거롭다"고 표현했다. NOTAM 디지털화를 했던 전 FAA 엔지니어가 스레드에서 기관의 속도를 변호하는데, 그 변호는 믿을 만하다. 현대화를 느리게 만드는 안전 리스크 관리 절차가 이걸 계속 돌아가게 만드는 같은 절차다.

이야기를 다시 짜는 댓글: 그 데이터 전부가 1.44MB에 들어간다. E-IDS가 뭘 하든, 국가 공역을 받치는 안전필수 시스템의 하한은 교대조당 텍스트 1.44MB다. 두 번째 댓글러의 지적이 따라온다. FAA가 그 예산 안에서 요구사항을 맞출 수 있다면, 대부분의 애플리케이션도 맞출 수 있다. 하나 더 붙잡아둘 것. 모든 사람이 어떻게 다루는지 아는 시스템을 교체하는 게 시스템이 낡은 것보다 위험하다. 낡은 A-10 한 대가 사람을 놀라게 할 일은 없다.

## AI가 지금 AI 연구를 극적으로 가속하고 있다 — 356 points

**356 points** · 333 comments · [planned-obsolescence.org](https://www.planned-obsolescence.org/p/ai-is-dramatically-accelerating-ai) · [HN discussion](https://news.ycombinator.com/item?id=50397994)

Ajeya Cotra가 METR의 최신 deep-access 조사 — 앤트로픽이 자사 모델에 얼마나 가속되고 있는지 — 를 읽고 내린 결론은, 앤트로픽이 이미 자기 Responsible Scaling Policy가 정의한 문턱을 넘었다는 것이다. 정의는 이렇다. 역량 진척이 AI가 AI R&D에 크게 기여하기 전의 가장 빠른 지속 속도보다 두 배 빠르고, 그게 컴퓨트 증가보다는 AI의 AI R&D 자동화 탓으로 그럴듯하게 설명될 것. 측정값은 이렇다. 2025년 10월에서 2026년 10월 사이 앤트로픽 내부 AECI 진척이 이전 12개월의 약 두 배였다. 앤트로픽 S-1은 "임박해서 충족할 수 있다"고 쓴다. Cotra는 보고서를 이미 넘었다고 읽는다.

이걸 숫자 하나 이상으로 만드는 건 2배가 함의하는 산수다. 역량은 컴퓨트 승수 곱하기 학습 컴퓨트다. 소프트웨어 때문에 전체 진척이 두 배가 됐다면 컴퓨트 승수의 성장률은 두 배 이상, 2.5~3배는 돼야 한다. 실험 컴퓨트와 연구자 노동의 중요도가 비슷하다면 노동 상승분은 그 제곱, 대략 4~9배여야 한다. 그리고 아이디어는 갈수록 찾기 어려워지니, 컴퓨트를 더 빠르게 늘리지 않고 새 속도를 유지하려면 상승분이 계속 커져야 한다. 지금 대략 10배쯤. 앤트로픽 직원들이 비공식적으로 말하는 12배와 불편하게 잘 맞는다. Cotra가 쓰는 이미지는 시간왜곡 거품이다. 연구자 한 명이 연구자 열 명이 되는 게 아니라, 연구자 한 명이 하루에 열흘을 사는 것.

뻔한 반론은 근거의 핵심부가 삭제됐다는 것이다. 보고서는 가장 정보가 많았던 내용의 대부분을 뺐다고 말하고, 지표는 Epoch Capabilities Index의 내부 변형이고, 구간은 컴퓨트가 이례적으로 성장한 시기의 한 회사 12개월이다. 댓글러들이 정확히 그걸 물었다. 어디까지가 가중치 안의 역량 향상이고, 어디부터가 자본 + 부끄럽게 병렬적인 에이전트 떼가 토큰을 태운 것인가. 다른 이들은 하드 제약을 짚는다. 모델은 여전히 학습해야 하고, 10조 토큰은 걸릴 만큼 걸린다. 다 맞는 말이다. 그래도 글은 자기 불확실성을 조심스럽게 다루고, 10배 노동 추정은 단언이 아니라 명시된 가정에서 유도한 값이다.

## 앤트로픽 IPO 매수자들, 밸류에이션 최저 1.1조 달러까지 본다 — 302 points

**302 points** · 610 comments · [bloomberg.com](https://www.bloomberg.com/news/articles/2026-11-06/anthropic-ipo-valuation-expectations-pressured-after-ai-rout) · [HN discussion](https://news.ycombinator.com/item?id=50394906)

블룸버그에 따르면 앤트로픽이 다음 주 IPO 마케팅을 시작하기 전, 잠재 매수자들이 1.2~1.3조 달러 밸류에이션을 논의 중이고 일부는 1.1조 달러를 저울질한다. 10월 재무 브리핑 뒤엔 1.4~1.5조 달러를 말했고, 10월 초엔 2조 달러였다. 5월 비상장 밸류에이션은 9,650억 달러. 나스닥 상장, 티커는 ANT. 12월 1일 전에 성사될 확률은 Polymarket과 Kalshi에서 80%대에서 50% 근처로 떨어졌다. 다른 보도는 10월 런레이트를 800억 달러 이상으로 잡는다.

Cotra 글 옆에 놓고 보면 이번 주가 이해된다. 같은 7일 동안 "앤트로픽의 역량 진척이 두 배가 됐다"는 주장과, 회사를 10월 기대치에서 40%쯤 깎아 부른 시장이 나왔다. 서로를 취소하지 않는다. 하나는 모델이 뭘 할 수 있냐는 주장이고, 다른 하나는 1조 달러 캐펙스의 수익률이 어떨 거냐는 주장이다. 진짜로 가속 중인 회사가 더 좋은 주에 헤지펀드가 적어둔 숫자보다 낮은 값을 받을 수 있다.

아무도 입찰하지 않은 밸류에이션 범위에 610개 댓글은 밸류에이션 이야기가 아니다. 분위기다. 볼 숫자는 1.1조 달러가 아니라, 로드쇼가 보수적으로 가격을 매기고 여지를 남기느냐다. 블룸버그 소식통은 회사가 그렇게 할 수도 있다고 한다. 떨어지는 시장 꼭대기에서 가격을 매기는 게 IPO를 깨뜨리는 방법이다.

## Firecracker VM 탈출: 게스트에서 호스트 root까지 — 277 points

**277 points** · 124 comments · [pwn.ai](https://pwn.ai/blog/firecracker-escape) · [HN discussion](https://news.ycombinator.com/item?id=50397219)

AWS의 마이크로VM 모니터 Firecracker를 겨냥한 체인의 2부이고, 샌드박스에 대해 할 수 있는 가장 강한 주장이다. 게스트 안에서 호스트의 root 권한으로 코드 실행. 대상은 CVE-2026-99999, 1부의 호스트 메모리 프리미티브 위에 쌓는다. 기법은 이렇다. 게스트 페이지에 알아볼 수 있는 nonce를 심고, 호스트 물리 범위에서 후보 EPT 루트를 찾고, 중첩 페이지 테이블을 검증해서 nonce를 해석하는 루트가 하나만 남을 때까지 좁힌다. 그러면 내가 통제하는 페이지의 호스트 물리 주소를 얻는다. 다음, 네이티브 호스트 페이지 테이블에서 그 물리 페이지의 매핑을 찾아 Firecracker 프로세스를 특정하고, `KVM_RUN`에 앉아 있는 vCPU 스레드의 `pt_regs` 프레임을 찾아, 저장된 명령 포인터와 스택 포인터를 고쳐서 syscall에서 돌아올 때 공격자가 고른 call이 실행되게 만든다. 게스트는 임시로 건드린 스택을 되돌리고, Firecracker는 계속 돌고, VM은 SSH로 여전히 접속된다.

스레드는 익스플로잇 분석글에 HN이 늘 하는 두 가지를 한다. 신규성 팩트체크 — 이건 몇 주 전 공개된 PwnEscape의 실전 익스플로잇이고 덜 추천받은 제출물에서 논의됐으며, 같은 날 중복 제출도 있다 — 그리고 이 체인이 정말 주장대로인지에 대한 논쟁. 한 댓글러는 초기 호스트 쓰기를 얻으려면 sysadmin급 프리미티브가 하나 더 필요하다고 지적하며, 게스트가 대체 어떻게 호스트의 Firecracker 프로세스에 썼냐고 묻는다. 헤드라인에 대한 정당한 반론이고 위로는 안 된다. 이 탈출은 커널 레벨 결함 둘의 조합이고, 공유 하드웨어에서 신뢰할 수 없는 코드를 돌리는 모두가 둘 다 갖고 있다.

가장 쓸모 있는 댓글은 마이크로VM 하드웨어 격리가 gVisor 같은 소프트웨어 격리에 비해 받는 신뢰를 받을 자격이 있냐고 묻는 것이다. 하드웨어 격리는 패치할 수 없는 경계다. 체인이 여기까지 오면 답은 단일한 정답이 아니라 다층 방어가 된다. 그리고 한 답글러는 수백 개 데이터베이스 엔진을 돌리는 공개 ClickBench 놀이터를 테스트베드로 내놨다. 그중 몇 개는 설계상 사실상 원격 코드 실행이다.

## Asahi Linux 7.3 — 266 points

**266 points** · 222 comments · [asahilinux.org](https://asahilinux.org/2026/11/progress-report-7-3/) · [HN discussion](https://news.ycombinator.com/item?id=50401867)

이 진행 보고서의 헤드라인은 기능이 아니다. 주요 드라이버 둘, `macaudio`와 `avd`가 업스트림에 제출됐고, AVD는 Asahi 다운스트림 트리에서 석 달 조금 넘게만 머물렀다는 것. 주요 SoC 컴포넌트 중 가장 짧은 턴어라운드이고, 팀이 밀어온 업스트림 우선 개발로의 전환을 보여주는 증거다. M4 Pro, M4 Max, M5의 초기 devicetree가 들어갔고 TTY 부팅까지만 된다. M3 지원은 EXPERT 플래그를 떼고 정식 제공이 됐고, DCP가 켜져서 슬립과 MacBook 노치 주변의 쓸 만한 영역이 생겼다.

SF처럼 읽히는 건 리버스 엔지니어링 쪽이다. m1n1이 이제 SPTM이 켜진 macOS를 가상화할 수 있고, 그게 M4 기계를 다룰 수 있게 만든 열쇠다. M5는 Exclaves가 필요하다. Secure Kernel 아래 격리 환경에서 도는 작은 애플리케이션이고, Tightbeam이라는 IPC 프로토콜로 메시지를 주고받는다. 개념적으로 Arm의 TrustZone에 가깝다. Asahi의 답은 Secure Kernel과 Exclave 유저스페이스를 SPTM, macOS와 나란히 또 다른 VM에서 돌리는 것이었고, 이제 m1n1 아래 EL1에서 VM 셋이 뜬다. VMware를 떠나는 회사들에 m1n1을 팔면 어떻겠냐는 팀 자체 농담이 정확한 농담이다.

구멍 둘. M3 GPU는 아직 쓸 만한 수준으로 리버스 엔지니어링되지 않았다. M3 GPU는 M1, M2에서 tick-tock이 끊긴 물건이고, 마일스톤은 삼각형 하나 그리는 것이다. 그리고 보고서는 "우리의 관대한 라이선스를 악용해 작업을 가로채고, 프로젝트를 대체해서 애플 실리콘 위의 리눅스를 공격적으로 수익화하려는 시도가 여러 번 있었다"고 적는다. WINE 전례가 인용되는 이유다. 한 댓글러가 Omarchy 이야기냐고 묻고 확인은 없다. 경쟁 프로젝트 gravitylinux가 스레드에 나타나 Vulkan 1.4, M4 동작, M5 대부분, suspend-to-RAM을 주장한다. Asahi의 반론은 기능이 아니다. 메인라인이다.

## 마이크로소프트 리서치 AI Frontiers 그룹의 끝 — 219 points

**219 points** · 119 comments · [hunch.net](https://hunch.net/?p=13764006) · [HN discussion](https://news.ycombinator.com/item?id=50406563)

John Langford는 2023년 마이크로소프트 리서치 안에 AI Frontiers를 만들었다. ChatGPT 이후에는 좋은 아이디어를 가진 연구자 한 명이 혼자 충분한 베이스라인을 못 세우니 늦고 설득력 없이 도착한다는 이론이었다. 규모는 50명쯤. Autogen, 컴퓨터 유즈 에이전트 Fara, 기초 쪽으로 Next Latent 목적함수, Muon 개량판 Dion3, Full Bandwidth Transformer가 나왔다. 마이크로소프트 안에서 모델 파이프라인을 만드는 작업을 최소 네 개로 세었기 때문에, 엣지 스케일 사전학습 코드베이스가 있는 공유 모노레포도 만들었다.

9월 초 AI Frontiers는 Microsoft AI로 재편됐고 Langford는 나갔다. 이유 설명이 인용할 만하다. MAI의 전 인플렉션 리더십 철학은 "스케일링, 그리고 적극적으로 연구가 아닌 것"이고, 그 세계의 주력은 아키텍처가 아니라 데이터이며, "그들이 우리를 별로 원하지 않았다는 증거가 충분히 많았다." 그는 이견을 공정하게 정리한다. 규모의 수익이 연구의 수익보다 예측 가능하고, 그래서 이 선택이 계속 반복된다. 그런 다음 트레이드오프가 저울질되는 게 아니라 그냥 버려지고 있다고 주장한다. Bytedance 실험은 Full Bandwidth Transformer 변형이 두 배 크기 모델에 견줄 만하다고 시사한다. 1조 달러가 투입된 산업 전체에서 학습과 추론 비용을 절반으로 줄이면 그게 얼마짜리인지 보라.

한 사람의 퇴사 글로 봐야 한다. 자기 논지를 위해 끌어온 증거는 Bytedance와 전 직장의 하드웨어에서 온 것이지 AI Frontiers의 결과가 아니다. 거창한 이름의 50인 그룹이 사라지는 게 마이크로소프트가 AI 연구를 포기하는 것과 같지도 않다. 그래도 예측 가능한 수익에 관한 그 문장은 경쟁사에 한 바퀴 뒤처지기 직전 분기에 CFO가 쓰는 바로 그 문장이고, 업계 안 댓글러들은 이 패턴이 회사 전체적이라고 확인한다. 모두가 같은 트랜스포머 고속도로를 달리는 동안 탐색적 연구는 억제된다.

## Ask HN: 대체 우분투는 왜 이렇게 오래 걸리나 — 214 points

**214 points** · 136 comments · [news.ycombinator.com](https://news.ycombinator.com/item?id=50393105) · [HN discussion](https://news.ycombinator.com/item?id=50393105)

누군가 CVE-2026-98432, 점수 9.8이 우분투 트래커에서 일주일 가까이 "작업 중"으로 아무 업데이트 없이 앉아 있는 걸 발견하고 합당한 질문을 했다. 커널이 너무 많아서, 빌드 자동화가 부족해서, 아니면 엔지니어가 과부하라서? 후속 질문이 불평보다 날카롭다. 보안 이슈가 훨씬 많아지는 시기로 들어가고 있는데, 지금 파이프라인이 못 따라가면 6개월 뒤는 어떻겠나.

스레드가 답했다. 수정은 noble은 10월 26일, resolute는 10월 28일부터 `-proposed`에 있었고 목요일 오후에 `-updates`로 넘어갔다. 탐지도 아니고 엔지니어링도 아니고 패치 누락도 아니었다. SRU 파이프라인 — proposed, soak, verify, promote — 이 여러 LTS 버전과 아키텍처, 모든 파생판을 아우르는 커널 매트릭스 위에서 도는 문제였다. 정책 선택이고, 기계를 안 깨뜨리는 게 주 약속인 배포판에는 변호 가능하다. CVE 물량이 일주일짜리 프로모션 지연을 운영 리스크로 만드는 날까지는.

나머지 스레드는 우분투 전반을 다시 싸우는 사람들이다. snap, Upstart, Landscape, ICC의 밥그릇 엎기, 그리고 유럽이 미국 회사가 통제하지 않는 OS를 찾아다니는 동안 캐노니컬은 반응 없는 것에 힘을 쓰고 있다는 아이러니. 일부는 소음이다. 커널 매트릭스 이야기는 아니고, 매트릭스가 유지되는 한 이 질문의 답으로 남을 것이다.

## GitHub의 새 Git 저장소 아키텍처 — 212 points

**212 points** · 61 comments · [github.blog](https://github.blog/engineering/architecture-optimization/inside-githubs-new-git-storage-architecture/) · [HN discussion](https://news.ycombinator.com/item?id=50397099)

GitHub가 저장소를 저장하는 방식을 다시 짰다. 푸시마다 Blob Storage에 팩이 하나씩 쌓이고, 팩이 너무 많아지면 모든 조회가 느려지니 컴팩션이 필요하다. 옛 구조에서는 컴팩션이 트래픽을 받는 같은 레플리카에서, 그것도 전부에서 돌아야 했다. 이제는 별도 노드에서 영속 스토리지에 직접 돌고, Ref-CAS 서비스로 조율한다. 저장소 전체가 아니라 참조마다 독립적으로 순서를 정한다. 컴팩션 노드는 샤드에 리스를 잡아 수평 확장한다. 두 번째 트랜잭션이 컴팩션된 입력을 팩 매니페스트에서 제거하고, 정리는 나중에 지우고, 게시 전 검사가 새 팩이 입력과 정확히 같은 객체를 담고 있는지 확인한다.

설계 원칙은 모든 저장소 — 한 개발자의 사이드 프로젝트든 가장 바쁜 모노레포든 — 가 특별 취급 없이 같은 아키텍처에서 돈다는 것이다. 로드맵은 에이전트 쪽으로 세게 기운다. 팩 전체가 아니라 객체 하나만 읽기, 커밋·트리·블롭을 별도 팩으로 묶기, 부분 레플리카, "각 커밋 옆에 에이전트 세션 컨텍스트 저장"을 포함한 구체화 뷰, 0으로 줄어드는 플릿.

회의론은 댓글에 있고 타당하다. 이건 앞으로의 계획이지 이번 주 사람들이 불평한 장애의 수정이 아니다. GitHub는 수평 기법이 기존 아키텍처에서 넘어온 것이고 새 작업은 대부분 저장소 내부 수직 확장이라고 말한 뒤, 오늘 가장 활발한 저장소도 쓰기 폭주가 많아야 수십 건이라고 인정한다. 한 댓글러는 차이를 쟀다. Cursor의 Continuity에 쓰기 처리량이 한 자릿수 배 더 많은 것 같다는 것. 정직한 정리는 이렇다. GitHub는 아직 존재하지 않는 워크로드를 위해 짓고 있고, 그 결과물을 신뢰성이라고 부른다.

## AI R&D가 그렇게 천재적이라는 게 믿기지 않는다 — 211 points

**211 points** · 209 comments · [lesswrong.com](https://www.lesswrong.com/posts/DALNiKBjMGMF8grme/arjun-panickssery-s-shortform?commentId=fJtaHHHfx45tD7BSL) · [HN discussion](https://news.ycombinator.com/item?id=50388513)

Arjun Panickssery의 짧은 반론은 위의 가속 이야기에 대한 정면 균형추이고, 분위기가 아니라 논증으로 읽을 가치가 있다. 실패 유형에 이름을 붙이니까. SOTA 스크래블 엔진, 철학 형식화 프로젝트, 얼티밋 틱택토 과제에서 모델의 판단은 아주 기초적인 수준에서 나빴다. 문헌 조사에서 명백히 가장 중요한 논문들을 못 골랐고, 시험하는 아키텍처를 구분하기엔 학습 데이터가 너무 적어 정보 가치가 0인 실험을 돌렸고, 하찮은 방향으로 몇 시간씩 갔고, 틱택토에서는 그 영리한 블로그 글을 찾아놓고 그게 옛 논문들보다 더 관련 있다는 걸 몰랐다. 보고서도 따라가기 어렵게 써서 실제로 뭘 했는지 알려면 심문해야 한다.

그가 인정하는 예외가 가속론에 중요한 그 예외다. 빠르고 객관적인 피드백 루프가 있는 언덕 오르기. Astra에 반복해서 프롬프트를 넣자 "스크래블의 모든 합법 수 나열" 최고 기록이 10배 좋아졌다. 그런데 그 실행에서 크게 도약한 두 번은 그의 아이디어였다. 무작위 위치마다가 아니라 게임 전체에 걸쳐 측정하기, 알고리즘을 남은 빈 타일 수로 나누기. 모델은 훌륭하게 수행했고 방향에는 아무것도 보태지 않았다.

두 글 다 맞을 수 있고, 정리는 지루할 만큼 구조적이다. AI는 연구 중 측정 가능한 부분을 가속한다. 측정 가능한 것에는 목적함수가 있고, 목적함수가 있어야 언덕을 오를 수 있으니까. METR 숫자는 그 범위 안에서 진짜다. 그 범위는 판단이 걸린 문제에 막히지 않은 연구의 부분집합과 정확히 같고, 댓글러들은 서로 다른 방향에서 같은 묘사로 모인다. 기술적으로 맞고, 숲을 놓치고, 심한 ADHD에 장기 기억이 없는 천재.

## 나트륨이온 배터리, LFP와 원가 동등 수준에 접근 — 210 points

**210 points** · 101 comments · [pv-magazine.com](https://www.pv-magazine.com/2026/11/06/sodium-ion-batteries-approach-cost-parity-with-lfp-with-70-gwh-covered-by-supply-agreements/) · [HN discussion](https://news.ycombinator.com/item?id=50399657)

Wood Mackenzie 분석에 따르면 선도 제조사들이 2026년 말까지 셀 단위 원가에서 LFP와 동등해지고, 중국·미국·독일·인도에서 70GWh 넘는 공급 계약이 이미 체결됐다. 밑의 숫자들. 나트륨이온은 오늘 평균 $229/kWh, LFP는 대략 $200/kWh. 20년 프로젝트 수명 기준 총소유비용은 21% 낮고, 이유는 용량 확장 사이클이 적고 운영비가 낮아서다. 2035년까지 중국 학습률은 18~20%. BYD는 30GWh 생산능력을 계획하고, CATL은 올해 말까지 1GWh 이상 출하를 목표한다.

날짜를 잘 읽어야 한다. 이야기가 거기 있다. 셀 단위 동등은 2026년. 모듈과 시스템 단위 동등은 2030년 이후에나 기대된다. 4년 격차이고, 비용은 실제로 시스템에 산다. 정책 환경도 일을 많이 한다. 중국은 2026년 7월 리튬이온에 소비세를 다시 도입하면서 나트륨이온은 2028년 말까지 면제했고, LFP는 9월에 2% 부과를 받아 내년 4%로 오르고, 미국은 중국산 저장용 셀에 58%쯤 관세를 물리고 Section 45X 크레딧이 있으며, EU의 탄소발자국 신고는 특정 핵심 소재를 건너뛰는 공급망에 유리하다. 경쟁자가 세금을 맞아서 동등에 도달한 기술이 물리에서 이긴 건 아니다.

스레드가 대부분 원하는 가정용 저장에서는 비용표보다 사정이 낫다. 열폭주 화학을 감안해 설계할 필요가 없고, 낮은 온도에서 쓸 수 있고, 차고에 놓인 배터리에서는 에너지밀도보다 사이클 수명이 중요하다. 언제 살 수 있냐고 묻는 댓글러들은 답이 중국 먼저라는 걸 이미 안다. 판매 포인트가 "더 싸다"였는데 왜 "원가 동등"을 축하하냐고 묻는 사람이 맞는 질문을 하고 있다.

## 우분투 26.04의 Rust sudo는 표준 sudo와 호환되지 않는다 — 200 points

**200 points** · 187 comments · [utcc.utoronto.ca](https://utcc.utoronto.ca/~cks/space/blog/linux/Ubuntu2604RustSudoNotCompatible) · [HN discussion](https://news.ycombinator.com/item?id=50354308)

Chris Siebenmann이 발견했다. 우분투 26.04가 기본 `sudo`로 넣은 Rust 재작성판 sudo-rs가, 자기가 설정을 맞춰 쓴 sudo처럼 동작하지 않는다. 실패 두 개. 명령 인자의 와일드카드가 조용히 다른 뜻이 되고, `/usr/sbin/exim -bp[acru]` 같은 규칙 — 클래식 sudo에서는 특정 옵션 네 개 — 의 효과가 sudo-rs에서는 쓴 것과 다르다. 다른 사람들이 재현하고 수치화했다. sudo-rs 0.2.4에 25개 권한 검사를 독립적으로 돌린 테스트에서 11개가 달랐고, 11개 전부 인자 와일드카드였다. 26.04에 실제로 들어간 0.2.13에서는 내장 와일드카드가 이제 파싱 에러라, 의도보다 넓은 규칙을 허용하는 대신 `visudo`가 그 줄을 거부한다.

메커니즘은 `src/sudoers/mod.rs`의 `match_command`에 있다. 명령 경로는 glob 매칭을 받고, 인자 목록은 `args == vec`, 그냥 동등 비교다. 그래서 `/bin/rm *.txt`의 `*.txt`는 리터럴 문자열이다. 예외 토큰 하나 — 마지막 인자로 홀로 온 `*`, 뒤따르는 인자 0개 이상을 뜻하고 0.2.13에서 새로 생겼다 — 를 빼면. 사람들이 실제로 쓰는 나머지 전부(경로 glob, 부정, 정확한 다인자 규칙, 빈 문자열 인자, 별칭, runas, `sudoers.d` 포함)는 클래식 sudo와 정확히 같다. 살아남지 못한 것: `sudoers.ldap`, `cvtsudoers`, `sudo-ldap` 패키지, 전부 사라졌다. 클래식 sudo는 `sudo.ws`로 여전히 설치돼 있고, `update-alternatives --set sudo /usr/bin/sudo.ws`로 되돌린다.

재작성은 그래도 옳은 선택이었다. `sudo`는 setuid root이고 기계의 아무 로컬 사용자가 시작할 수 있으며, CVE-2021-3156은 정확히 그 자리에서 터진 힙 오버플로로 출시 코드에 10년쯤 앉아 있었다. Rust는 그 부류를 컴파일 타임에 잡는다.

그래도 Siebenmann의 가장 날카로운 관찰은 그대로다. sudo-rs는 규칙을 좁고 구체적으로 만드는 와일드카드를 금지하고, 규칙을 치명적으로 넓히는 와일드카드 하나는 남겼다. 클래식 sudo에서 `/bin/rm *.txt`는 `sudo rm -rf /home .txt`도 허용한다. 인자가 문자열 하나로 합쳐지고 공백까지 삼키는 glob으로 매칭되니까. 그 토큰은 살아남았다. 관리자가 규칙을 좁히려고 쓸 토큰은 살아남지 못했다. 댓글은 "glob은 원래 발등 찍는 물건, 세 줄 고치면 됨"과 "호환성이 배포판 하나씩 창밖으로 나간다"로 갈렸고, 둘 다 같은 실패를 말한다. 시스템에서 가장 권한 센 파서가 조용히 바뀌었고, 그게 LTS로 나갔다.

## 그 밖에, 섹션에 못 들어간 새 소식

- **Upload Your RAM** ([262 points](https://uploadyourram.org), 246 comments) — 우리 컴퓨터에 RAM을 두는 게 비효율적이라는 샘 알트만의 실제 발언을 이용한 장난 사이트. 전제 — 노는 메모리를 더 좋은 곳에 기부하자 — 는 246개 댓글이 이게 농담이라는 걸 정확히 알아보는 결과를 낳았다. 한 댓글러는 그 말을 문맥까지 찾아보고 그렇게 이상한 소리는 아니었다고 했고, 다른 한 명은 사이트가 뭘 올리는 게 아니라 내려받는 게 틀림없다고 확신한다. 진짜 흥미로운 갈래는 그 안의 중앙집중화 = 메인프레임 시대로의 회귀 이야기다.
- **UEFI로 베어메탈 프로그래밍 첫걸음** ([246 points](https://kevinboone.me/efitest_index.html), 51 comments) — 리눅스 워크스테이션에서 UEFI 애플리케이션을 쓰는 안내서인데, 결국 펌웨어 환경이 얼마나 이상한지 배우는 과정이 된다. C 표준 라이브러리 없음, 문자열은 전부 UTF-16, 그리고 존재하지 않는 함수 호출을 기꺼이 내보내서 런타임에 프로그램을 죽이는 링커. 스레드가 해법을 준다. edk2-libc, posix-uefi, 그리고 빌드 스크립트에 `nm -D --undefined-only`를 넣어 외부 심볼이 살아남지 않았음을 증명하기.
- **프리 소프트웨어로 로펌 운영하기** ([205 points](https://decoded.legal/blog/2026/11/running-a-law-firm-on-free-software-2026-edition/), 90 comments) — 영국 통신·기술 로펌이 Debian, GNOME, Thunderbird, Syncthing, Radicale, 자체 호스팅 NUC로 전부 돌아간다. Nextcloud와 자체 Jitsi 서버는 버렸다. 흥미로운 반론은 되는지가 아니라 해야 하는지다. 한 변호사는 Word를 안 쓰는 게 직무유기(malpractice)에 해당한다고 한다. 상대방이 전부 `.docx`를 보내니까. 다른 사람은 이걸 만든 사람이 떠나면 업무가 어떻게 되냐고 묻고, 세 번째는 Harvey를 쓰는 로펌은 벤더에 수직 통합할 레버리지를 넘겨준 것이라고 짚는다.

## 아직 페이지에 남은 것들

여러 날에 걸친 점수는 비교할 수 없다는 전제를 깔고, 이전 글에서 다룬 59개 스토리가 여전히 순위에 있다. 현재 점수 순.

| 스토리 | 이전 | 11월 7일 |
|---|---|---|
| [sshole](https://sshhole.com) | 2,897 (11-06) | 2,950 (+53) |
| [Claude Code sends your email address to websites](https://github.com/anthropics/claude-code/issues/107757) | 1,531 (11-06) | 1,588 (+57) |
| [AI is forcing us to pay off 40 years of technical debt](https://spectrum.ieee.org/ai-in-cybersecurity-php2shell-vulnerability) | 1,288 (11-06) | 1,294 (+6) |
| [Residential proxies detected on White House network](https://layer3intel.com/blog/residential-proxies-white-house-network) | 1,265 (11-06) | 1,267 (+2) |
| [Tesla to wind down Cybertruck production](https://www.nbcnews.com/tech/tech-news/tesla-wind-cybertruck-production-years-poor-sales-markets-rcna607817) | 650 (11-06) | 1,117 (+467) |
| [The 'Astra can read and write weights to improve Qwen' post is misleading](https://honnibal.dev/blog/astra-read-write-misleading) | 1,038 (11-06) | 1,039 (+1) |
| [Stringman, an $800 open-source room scale gripper robot](https://neufangled.com/) | 839 (11-06) | 841 (+2) |
| [Search for everyone](https://kagi.com/changelog#11820) | 740 (11-06) | 751 (+11) |
| [Tell HN: Gemini trains on chat history, even for subscribers (personal accounts)](https://news.ycombinator.com/item?id=50363461) | 723 (11-06) | 728 (+5) |
| [Blender's UI and Runtime: Much Faster Than GPUI](https://github.com/ppmpreetham/BUI) | 631 (11-06) | 712 (+81) |
| [MS Paint Remote Code Execution Vulnerability](https://www.cve.org/CVERecord?id=CVE-2026-83844) | 694 (11-06) | 712 (+18) |
| [North Korean fake job interview led to $6.3B Binance heist](https://www.theregister.com/security/2026/11/03/north-korean-fake-job-interview-led-to-63b-binance-heist/5307398) | 652 (11-06) | 655 (+3) |
| [Goodbye from Salon](https://www.salon.com/2026/11/05/goodbye-from-salon/) | 633 (11-06) | 646 (+13) |
| [Dutch 'idealist' bank ASN blocks non-Google Android, including GrapheneOS](https://github.com/PrivSec-dev/banking-apps-compat-report/issues/105) | 598 (11-06) | 641 (+43) |
| [Kimi K3.1 Pro model weights are out](https://huggingface.co/moonshotai/Kimi-K3.1-Pro) | 634 (11-06) | 636 (+2) |
| [Nvidia RTX Spark encrypted firmware slows inference speed to 35% on Linux](https://www.mindstudio.ai/blog/linux-nvidia-rtx-spark-laptop) | 614 (11-06) | 615 (+1) |
| [Britain to make salary disclosure in job ads mandatory](https://www.reuters.com/business/world-at-work/britain-make-salary-disclosure-job-ads-mandatory-2026-11-05/) | 536 (11-06) | 605 (+69) |
| [AMD expects to outsell Intel in Q4 for the first time in history](https://www.tomshardware.com/pc-components/cpus/amd-expects-to-outsell-intel-in-q4-for-the-first-time-in-history-usd17b-guidance-would-exceed-intels-projections) | 588 (11-06) | 593 (+5) |
| [Motorola Signature 27 with GrapheneOS support](https://motorolanews.com/motorola-signature-27-2/) | 567 (11-06) | 578 (+11) |
| [I wish tech companies knew more about me](https://rakhim.exotext.com/i-wish-tech-companies-knew-more-about-me) | 544 (11-06) | 558 (+14) |
| [Ask HN: What's your current AI agentic setup?](https://news.ycombinator.com/item?id=50366117) | 540 (11-06) | 553 (+13) |
| [Safari introduces Adaptive Dark Mode in 27.3](https://webkit.org/blog/18541/introducing-adaptive-dark-mode/) | 510 (11-05) | 514 (+4) |
| [Cuban: Facebook knowingly runs AI deepfake scam ads; docs say $16B fraud revenue](https://finance.yahoo.com/technology/ai/articles/mark-cuban-says-facebook-knowingly-213000020.html) | 486 (11-06) | 510 (+24) |
| [Discord is ditching Electron and its new app uses less RAM](https://www.theverge.com/news/1027379/discord-ditching-electron-web-app) | 475 (11-06) | 489 (+14) |
| [A thousand fewer paths to root](https://openai.com/index/a-thousand-fewer-paths-to-root/) | 486 (11-06) | 487 (+1) |
| [Jelly Sheet](https://mrdoob.github.io/codevember-2026/01/) | 466 (11-06) | 466 (+0) |
| [Window Sweaters](https://github.com/saragordic/window-sweaters) | 445 (11-06) | 456 (+11) |
| [Mac at any scale](https://namespace.so/blog/mac-at-any-scale) | 406 (11-04) | 419 (+13) |
| [Lemmings CSS Animation](https://markblah.github.io/lemmings/) | 408 (11-06) | 413 (+5) |
| [The Hackintosh Reborn](https://www.naut.ca/blog/2026/11/05/the-hackintosh-reborn-with-ai/) | 395 (11-06) | 410 (+15) |
| [Download your favourite YouTube videos](https://criminallyvulgar.dev/you-should-absolutely-download-your-favourite-youtube-videos/) | 391 (11-06) | 399 (+8) |
| [A new Go API for JSON](https://go.dev/blog/jsonv2) | 391 (11-06) | 392 (+1) |
| [Kitty 0.50](https://sw.kovidgoyal.net/kitty/changelog/#) | 385 (11-06) | 386 (+1) |
| [Images 2.6](https://openai.com/index/introducing-images-2-6/) | 383 (11-06) | 384 (+1) |
| [The Internals of PostgreSQL](https://www.interdb.jp/pg/index.html) | 375 (11-05) | 376 (+1) |
| [Deus Ex](https://www.filfre.net/2026/11/deus-ex/) | 284 (11-06) | 368 (+84) |
| [Gemini Omni 1.2 Flash](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/) | 258 (11-06) | 356 (+98) |
| [Guerrilla bike lanes: San Francisco makes illicit infrastructure permanent (2016)](https://99percentinvisible.org/article/guerrilla-bike-lanes-san-francisco-makes-illicit-infrastructure-permanent/) | 344 (11-06) | 344 (+0) |
| [GPT-6 Astra covertly underperforms on safety research](https://alignment.openai.com/misalignment-reports/covert-underperformance-on-safety-research-tasks/) | 340 (11-06) | 341 (+1) |
| [MCP Explained](https://mcp-explained.com/) | 328 (11-06) | 340 (+12) |
| [Ripple-65B Preview: U.S. Open-Weight SOTA on Agentic Coding](https://www.ricursive.com/ripple) | 338 (11-06) | 339 (+1) |
| [From Linux to Wikipedia: How Volunteers Build the Internet](https://thereader.mitpress.mit.edu/from-linux-to-wikipedia-how-volunteers-build-the-internet/) | 289 (11-06) | 338 (+49) |
| [Pwn.college](https://pwn.college/) | 291 (11-06) | 325 (+34) |
| [Insects don't swarm at LED lights](https://www.birdsoutsidemywindow.org/2026/11/03/insects-dont-swarm-at-led-lights/) | 310 (11-06) | 311 (+1) |
| [Awesome repositories are no longer awesome](https://erikgahner.github.io/posts/2026/awesome-repositories-are-no-longer-awesome/) | 298 (11-06) | 303 (+5) |
| [Inkling 2 Small](https://thinkingmachines.ai/news/inkling-2-small/) | 279 (11-06) | 287 (+8) |
| [Starfall – Affordable, routine access to microgravity](https://www.spacex.com/starfall) | 281 (11-06) | 285 (+4) |
| [Show HN: A decent text-to-image model trained for ~$20K (Apache 2.0 Weights)](https://www.linum.ai/field-notes/pjit-21k) | 267 (11-06) | 281 (+14) |
| [September in Servo: <progress>, rounded rectangles, and more](https://servo.org/blog/2026/11/05/september-in-servo/) | 265 (11-06) | 268 (+3) |
| [Obscure audio codec is a perfect fit for the N64](https://phoboslab.org/log/2026/11/n64-ulc-codec) | 256 (11-06) | 264 (+8) |
| [OpenAI to acquire Pierre Computer Company](https://openai.com/index/openai-to-acquire-pierre/) | 263 (11-06) | 264 (+1) |
| [Incident with Pull Requests, Git Operations and Issues](https://www.githubstatus.com/incidents/smtdswd1h2w4) | 232 (11-04) | 264 (+32) |
| [Kugelblitz – Mac-Native Google Earth Alternative](https://apps.metaebene.me/en/kugelblitz) | 233 (11-06) | 262 (+29) |
| [Show HN: After a decade of reversing, I got co-op working in DOS Wing Commander](https://fireflyk64.github.io/wcmulti/) | 254 (11-06) | 255 (+1) |
| [Verification Is Not Knowledge: Science needs more than answers](https://blog.cosmos-institute.org/p/verification-is-not-knowledge) | 243 (11-06) | 244 (+1) |
| [Progress on provable inference for large language models](https://www.anthropic.com/research/provable-inference) | 238 (11-06) | 240 (+2) |
| [Hungary: Communist-era files released, up to 60k former agents revealed](https://www.euronews.com/2026/11/04/hungary-communist-era-files-opened-up-to-60000-former-agents-revealed) | 231 (11-06) | 238 (+7) |
| [So my ISP was hijacking my DNS](https://www.karthihegde.dev/posts/dns_tampering) | 224 (11-06) | 231 (+7) |
| [Conductor is joining Meta](https://www.conductor.build/announcement) | 214 (11-06) | 214 (+0) |

사이버트럭이 오늘 유일한 진짜 무버다. 650 → 1,117, +467, 댓글 2,006개. 사이트에서 두 번째로 큰 스레드의 두 배가 넘는다. 어제 글에서는 새로 들어온 항목이었는데 오늘은 국민투표다. 나머지 중 100점 이상 오른 건 없다. Gemini Omni 1.2 Flash 258 → 356, Deus Ex 284 → 368, Blender UI 벤치마크 631 → 712, 영국 급여 공개 의무화 536 → 605. 표의 나머지는 프런트페이지의 평범한 감쇠다. 1~10점을 더한 스토리 31개, 아무것도 안 더한 것 3개, 그리고 2,950점에 댓글 741개로 꼭대기에 앉아 위로 53점 흘러간 sshole.

200점을 넘겼는데 순위 창 밖으로 완전히 빠진 스토리가 셋 있다. HackerBooks, Qwen 3.8 27B, 웹사이트 백업 글은 이번 스캔에 없어서, 현재 점수를 추정하지 않고 여기 보고하지 않는다.

## 관통하는 선

**가속은 목적함수가 있는 곳에서 측정 가능하고, 그에 대한 논쟁은 목적함수가 없는 곳에서 벌어진다.** 오늘 가장 선명한 두 글은 앤트로픽의 역량 진척이 1년에 두 배가 됐다는 METR 기반 주장과, 모델의 판단이 연구에서 나쁜 방식들을 늘어놓은 연구자의 글이다. 서로 모순처럼 보이지만, 하나는 고정 지표에 대한 언덕 오르기를 재고 다른 하나는 문헌 조사와 실험 설계와 안목을 서술한다는 걸 알아차리면 정리된다. 둘 다 맞다. 불편한 함의는 연구소 쪽에 있다. AI R&D 가속이 측정 가능한 범위에서 온다면, 쉬운 목적함수가 풀릴수록 그 수익은 줄어든다. Langford가 마이크로소프트 리서치를 떠나며 하는 주장이 정확히 그것이다. 스케일링은 수익이 예측 가능해서 선택되고, 연구는 수익이 예측 불가라서 버려진다.

**아무도 문서화하지 않은 데이터 수집은 아무도 문제 제기하지 않는 데이터 수집이다.** 데몬 두 개가 2022년부터 모든 Mac에서 당신의 가족, 동료, 이동 경로를 질의 가능한 그래프로 쌓아왔고, 시리를 꺼도 살아남고, 문서는 네 줄짜리 man page다. 아무도 투표하지 않았고, 이름값 하는 동의 화면도 없고, "기기 안에 있다"는 방어는 사실이면서 요점을 벗어난다. 같은 그래프가 업무용 노트북을 당신의 개인 정체성에 조용히 합쳐버릴 때는. 같은 주에 프런트페이지는 Claude Code가 `User-Agent` 헤더에 이메일 주소를 넣어야 하냐로 싸웠다. 그쪽은 공개 이슈가 붙고 며칠 안에 수정이 약속됐다. 구조적인 쪽은 4년째 돌고 있다.

**호환성은 약속이고, 그 약속은 우리 밑에서 다시 협상되고 있다.** 우분투는 시스템에서 가장 권한 센 바이너리를 Rust 재작성판으로 바꾸고 인자 와일드카드의 의미를 조용히 바꿨다. C 라이브러리로 뽑힌 터미널 에뮬레이터는 ABI 안정성을 1.0 기능 목록 전체로 삼았다. GitHub는 사이드 프로젝트와 모노레포에 같은 코드 경로를 유지하려고 저장소 스토리지를 다시 지었다. 같은 질문에 대한 세 가지 답 — 이미 존재하는 설정과 바이너리와 팩에 얼마나 빚졌나? sudo의 답은 "생각보다 적게, 그리고 위험한 와일드카드는 살아남고 정밀한 것들은 금지됐다"다. libghostty의 답은 "전부, 골든 매니페스트에 대고 CI에서 강제한다"다. 둘 다 변호 가능하다. 미리 알려주는 쪽은 하나뿐이다.
