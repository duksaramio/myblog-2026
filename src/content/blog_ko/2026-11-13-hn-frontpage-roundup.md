---
title: "Hacker News 프런트페이지 라운드업 — 2026년 11월 13일"
pubDate: 2026-11-13
description: "200점을 넘긴 스토리는 일흔한 개, 그중 마흔 개가 새것이다. 마이크로소프트 365는 하루 종일 복구에 실패했고, 엔비디아 직원들은 이사회가 해임한 CEO를 되돌려 달라는 청원을 올렸고, 일라이 릴리 CEO는 대리오 아모데이에게 생물학의 지도는 여전히 대부분 백지라고 말했고, 1960년 논문이 골라 둔 날짜에 세계는 끝나지 않았다."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
lang: "ko"
---

상위 200개 항목과 40시간 날짜 스윕을 훑었더니 200점 문턱을 넘긴 스토리는 일흔한 개였다. 지난 다섯 번의 라운드업에 없던 제출물이 마흔두 개, 그중 두 개는 그 글들이 이미 다룬 스토리의 재제출이다. 그래서 새 항목은 마흔 개 — 그리고 마이크로소프트 장애가 링크 세 개로, 클로드 사건이 두 개로 들어왔으니 서로 다른 사건은 마흔 개보다 꽤 적다. 반복은 마흔 개가 맨 아래 표에 있고, 비교할 이전 수치가 없는 네 개가 페이지에 더 있다.

오늘은 하나로 모이는 스토리가 없고, 그게 스토리다. 마이크로소프트의 메일과 아이덴티티 기반은 스물여섯 시간 동안 죽어 있었고 자체 복구는 중간에 실패했다. 앤스로픽의 로그인은 마이크로소프트 것이 깨진 동안 같이 깨졌다. 엔비디아 직원들은 하루 전 이사회가 해임한 CEO를 복귀시켜 달라는 청원에 서명했고, 싱가포르는 이 사건의 중심에 있는 여성에 대한 자국 수사를 미국이 돕지 않는다고 비난하는 성명을 냈다. 그 사이 일라이 릴리 CEO는 업계에서 가장 값비싼 약속에 세 문장으로 답했고, 1960년 논문이 골라 둔 종말의 날짜는 조용히 지나갔다.

## 마이크로소프트 365가 하루 종일 죽어 있는 동안 상태 페이지는 계속 말을 했다 — 1,145 points

**1,145 points** · 966 comments · [status.cloud.microsoft](https://status.cloud.microsoft/) · [HN discussion](https://news.ycombinator.com/item?id=50471731)

**452 points** · 299 comments · [twitter.com](https://twitter.com/MSFT365Status/status/2121079061774491735) · [HN discussion](https://news.ycombinator.com/item?id=50478609)

**281 points** · 176 comments · [cnn.com](https://www.cnn.com/2026/11/12/business/live-news/microsoft-global-outage-intl-hnk) · [HN discussion](https://news.ycombinator.com/item?id=50479098)


익스체인지 온라인은 목요일 동부시간 정오 무렵 메일 배달을 멈췄다. 스물여섯 시간 뒤 마이크로소프트는 서비스가 "정상 수준에 근접하고 있다"며 근본 원인은 해결됐다고 고객에게 알렸다. 그 사이에 벌어진 일: 아웃룩, 팀즈, 관리 센터, 그리고 — 모든 인증이 같은 아이덴티티 배관을 통과하기 때문에 — 은행, 법원, 철도, 병원, 정부 부처, AI 회사들의 긴 꼬리.

회사가 직접 공개한 타임라인이 가장 볼품없는 부분이다. 금요일 이른 시각, 회사는 "서비스 가능성 개선"을 위해 적용한 변경 사항을 모니터링한 결과 "예상대로 작동하지 않는 것을 확인했다"고 올렸고, "지속적인 트래픽 관리 불균형 상황에서 용량을 늘릴 수 있는 대체 작업 흐름을 찾고 있다"고 덧붙였다. 여섯 명이 쓰고 네 명이 더 결재한 문단이다. 번역하면 이렇다. 수정이 문제를 고치지 못했고, 로드 밸런서는 여전히 밸런싱을 못 하고 있고, 이제 이것저것 시도 중이다. 한 댓글러는 장애 내내 상태 페이지의 RSS 피드를 대신 복제해 돌렸다. 페이지 자체를 믿을 수 없었기 때문이다. 업계의 현재 위치가 대략 그렇다.

"트래픽 관리 불균형"이라는 말은 곱씹어 볼 만하다. 마이크로소프트는 원인이 기술적이며 사이버 공격은 아니라고 말하면서 메커니즘은 제시하지 않는다. 하지만 이 실패 모드 — 글로벌 아이덴티티·메일 기반이 자기 핫스팟을 우회하지 못하는 상태에 두 번이나 빠지고 그 사이에 실패한 복구가 끼어든 것 — 는 시스템의 제어 평면이 '단일 리전'이라는 가정 위에 서 있을 때 벌어지는 일이다. 떠도는 경제 추정치, 대략 70억 달러의 생산성 손실은 싱크탱크가 연봉으로 산수를 한 결과이고, 그런 숫자가 늘 그렇듯 자릿수만 알려 주고 나머지는 알려 주지 않는다.

스레드는 늘 그런 것들로 가득하다. 메일이 끊긴 인도 은행 지점, "플랜 B가 없다"는 영국 공무원, 이메일 2단계 인증 때문에 원격 진료 예약에 들어가지 못한 사람. 가장 쓸모 있는 관찰이 가장 지루한 관찰이기도 하다. 피해를 본 모두가 안전하고 지루한 엔터프라이즈급 선택지라는 이유로 그 사업자를 골랐고, 그들이 돈을 낸 이중화는 한 회사 계정 경계 안의 이중화였다.

## 마이크로소프트 인증이 깨진 동안 클로드 인증도 깨졌다, 아마 우연은 아닐 것이다 — 473 points

**473 points** · 376 comments · [status.claude.com](https://status.claude.com/incidents/nn11wk485zfn) · [HN discussion](https://news.ycombinator.com/item?id=50481187)

**192 points** · 165 comments · [status.claude.com](https://status.claude.com/history) · [HN discussion](https://news.ycombinator.com/item?id=50481220)


클로드, 클로드 코드, 콘솔, 클로드 코워크가 금요일 09:58 UTC에 일제히 인증 오류를 뿜기 시작했다. 수정은 11:05에 들어갔고 사건은 11:58에 종료됐다. 두 시간짜리 장애가 프런트페이지 톱10에 올랐다. 에이전틱 코딩 도구의 두 시간 인증 장애가 2019년의 두 시간 메일 장애보다 지금 더 비싸기 때문이다.

앤스로픽의 상태 페이지는 "Claude.ai와 Claude Code에 인증하는 사용자에게 발생한 문제"라고만 적었다. 얼마나 모르는지에 대한 솔직함이거나, "엔트라"라는 단어를 쓰지 않기로 한 결정이다. 댓글러들은 즉시 연결했다. 클로드의 기업 로그인은 마이크로소프트 아이덴티티 공급자를 거치고, 그 공급자는 그날 하루 트래픽 라우팅에 실패하고 있었다. 아무도 그 연결을 입증하지 못했고, 의심되는 의존성 하나로 상태 페이지 사건이 473점을 받았다는 사실 자체가 이 스토리다.

시간이 지나도 살아남은 댓글이 둘 있다. 하나: "직업이 뭐냐에 따라 이건 어른 버전의 '눈 오는 날'이거나, 인생에서 가장 큰 스트레스다." 다른 하나: 이런 장애는 규모가 커질수록 *덜* 놀랍다. 모두가 피해자면 아무도 해명을 기대하지 않기 때문이다. 소프트웨어 업계의 상당 부분이 이제 시간을 청구해서 돈을 버는 인프라로서는 나쁜 균형이다.

## 엔비디아 엔지니어들은 그를 원한다; 싱가포르는 워싱턴이 돕지 않았다고 말한다 — 777 points

**777 points** · 636 comments · [wired.com](https://www.wired.com/story/nvidia-employees-petition-for-jensen-huangs-return/) · [HN discussion](https://news.ycombinator.com/item?id=50477231)

**443 points** · 473 comments · [reuters.com](https://www.reuters.com/technology/former-nvidia-ceo-huang-had-relationship-with-second-employee-sources-say-2026-11-12/) · [HN discussion](https://news.ycombinator.com/item?id=50473190)

**182 points** · 61 comments · [nytimes.com](https://www.nytimes.com/2026/11/12/business/nvidia-megaspeed-alice-huang.html) · [HN discussion](https://news.ycombinator.com/item?id=50471621)


사임 전에 올라온 엔비디아 사내 제안함 글이 이제 1,600개 넘는 댓글을 달면서 청원으로 바뀌었다. 한 댓글러가 썼다. "미션을 믿는다면 보스를 돌려달라." 다른 이는 이렇게 썼다. "우리는 모두 인간이고 실수할 수 있다. 젠슨은 좋은 일을 정말 많이 했고 두 번째 기회가 필요하다." 한 직원은 퇴진에 대한 투명성을 요구하는 메일을 전사에 보냈다.

직원들의 정서는 진짜고 논리는 약하다. 여러 댓글러가 별로 동정 없이 지적했다. 한 번의 불륜은 실수지만, 세 번이고 계속 늘고 있다면 — 하나는 미국 정보기관이 중국 자산으로 평가했다는 여성과, 하나는 직속 부하와, 하나는 목요일 로이터가 추가로 보도한 건 — 패턴이다. 이사회는 대부분 초기 투자자와 황의 오랜 측근으로 구성돼 있다. 가볍게 내린 결정이 아니었고, 그런데도 아침나절에 끝냈다.

진짜 스토리는 후속 보도에 있다. 싱가포르 정부는 목요일, 메가스피드에 관한 "허위 신고 가능성" 때문에 2025년 6월부터 지난 2월까지 앨리스 황의 여권을 보관했고, 엄중한 경고와 함께 석방한 뒤 재입국을 금지했다고 밝혔다. 그리고 수퍼마이크로의 협조를 얻는 데 미국에 두 번 도움을 요청했지만 "제한적인 정보나 지원"만 받았다고 덧붙였다. 수퍼마이크로는 메가스피드가 고객이었던 적이 없다고 부인한다. 매각 나흘 만에 엔비디아 클라우드 파트너가 되면서 2년 만에 자산을 아흔 배로 불렸다고 보도된 그 회사는 이제 경찰 수사 대상이고, 싱가포르에 따르면 미국은 그 수사를 돕지 않고 있다.

그래서 한 주 내내 밑줄이었던 수출 통제 문제가 수면 위로 나왔다. 누군가의 결혼 생활 이야기가 아니다. 한 기자가 스레드에서 당연한 질문을 던졌다. 이만한 회사의 창업자 CEO에게 경업 금지 조항이 있는가, 아니면 옆 동네에서 그냥 다시 시작할 수 있는가. 아직 답은 없다. 사라진 1조 달러의 시장 가치는 아무도 장부에 적어 두지 않은 키퍼슨 리스크의 값이다.

## 러스트 1.100, 드디어 never 타입을 안정화하다 — 866 points

**866 points** · 312 comments · [blog.rust-lang.org](https://blog.rust-lang.org/2026/11/12/Rust-1.100.0/) · [HN discussion](https://news.ycombinator.com/item?id=50472038)


10년, 실패한 안정화 시도 다섯 번. 그리고 이제: `!`는 안정화됐고 어디서나 이름 붙일 수 있으며, `Infallible`은 그 별칭이 되고, never 타입에서 임의 타입으로 가는 강제 변환은 사람들이 2016년부터 우회 코드를 짜 오던 그 일을 한다. 블로그 글이 이걸 맨 앞에 둔 건 팀도 이게 헤드라인이라는 걸 안다는 뜻이다.

버전 번호가 그냥 예쁜 소수점인 릴리스치고 나머지가 유난히 무겁다. 커스텀 얼로케이터가 들어왔고 `DropGuard`도 들어왔다. 카고는 이제 안 쓰는 의존성을 보고하고, 최소 퍼블리시 기간(의존성 쿨다운 — 침해된 새 릴리스가 공개된 같은 시간에 당겨지지 않게 한다)을 지원하고, 캐시 충돌을 줄였고, `cargo install`은 기본으로 .crate 타르볼 안의 락파일을 쓴다. 댓글러들이 글에 없던 API를 추가로 붙였다: `bool::toggle()`, `Box::map()`, `str::trim_prefix()`, `Path::trim_prefix()`.

가장 쓸모 있는 댓글이 가장 안 보이는 댓글이다. 시스템 프로그래머가 실제로 싸우는 메모리 안전 문제는 use-after-free가 아니라 메모리 기아이고, 표준 컨테이너가 할당 실패에 abort하는 건 애초에 이상한 기본값이었다. 커스텀 얼로케이터가 그 해법이다. 한편 불평은 영구적이다. 컴파일러는 느리고, 증분 임시 파일은 수십 기가바이트까지 자라고, `cargo clean`은 일상 의식이다. 둘 다 사실이라서, 이 릴리스는 인상적이고 툴체인은 여전히 짜증난다.

## 300달러짜리 자수기가 구독을 요구하자 그는 소프트웨어를 직접 썼다 — 713 points

**713 points** · 235 comments · [github.com](https://github.com/simpsoka/zigzag) · [HN discussion](https://news.ycombinator.com/item?id=50470488)


지그재그는 오픈소스 자수 편집기다. 러스트 엔진, 시각적 스티치 편집, SVG 입력, PES/DST/EXP/JEF/VP3 출력, 브라더 스키치 PP1로 가는 블루투스, 그리고 에이전트가 조작할 수 있는 MCP 서버까지. 애플 실리콘용은 서명·공증됐고 윈도우용은 zip이며 툴체인이 필요 없다. 커밋은 여섯 개.

이게 존재하는 이유가 스레드가 235개 댓글까지 깊어진 이유다. 자수 소프트웨어는 인질 시장이다. 기계는 싸고 좋은데, 소프트웨어는 수십 년 묵었고 비싸고 점점 사용량을 과금한다. 아내의 기계를 위해 직접 도구를 쓴 한 댓글러가 분명히 말했다. 자수하는 사람들은 수년째 '빅 자수'에 인질로 잡혀 있다. 또 다른 이는 멀쩡히 작동하는 브라더 PE-150이 이베이에서 100달러에 팔리고도 폐기되는 이유가 독점 카트리지 데이터를 구할 수 없기 때문이라고 짚었다. 흥미로운 건 한 사람이 자기 가려움을 해결했다는 게 아니다. 취미인이 에이전트와 함께, 예전에 1,000달러짜리 라이선스였던 것의 서명됐고 크로스 플랫폼이며 에이전트가 다룰 수 있는 대체품을 만들 수 있게 됐다는 것, 그리고 이미 존재하던 무료 대안 — 잉크스케이프 플러그인 잉크스티치 — 이 불평을 멈출 만큼 알려지지 못했다는 것이다.

이게 무엇이고 무엇이 아닌지는 분명히 하자. 커밋 여섯 개, 플랫폼 두 개, 이름값 하는 테스트 스위트 없음, 그리고 스티치 생성을 언어 모델에 넘기는 MCP 표면은 원단에는 정말 나쁜 생각이고 취미에는 정말 좋은 생각이다. 하지만 "벤더가 내 기기의 쓸모를 벽돌로 만들길래 주말에 툴체인을 다시 만들었다"는 이제 재현 가능한 장르이고, 벤더들은 새로운 재현 비용에 맞춰 가격을 고치지 않았다.

## 리브레오피스 소셜 팀이 이번 장애에서 이겼다 — 695 points

**695 points** · 222 comments · [twitter.com](https://twitter.com/LibreOffice/status/2121205272479998268) · [HN discussion](https://news.ycombinator.com/item?id=50486482)


리브레오피스 계정이 올렸다. "리브레오피스는 실제로 365일 내내 작동한다. 그냥 말해 보는 거다." 조회수 100만, 해커뉴스 695점. 참여도 대비 정보량이 놀라운 비율이다. 싼 공격이지만 사실이라서 먹혔다.

스레드의 더 나은 절반은 버그 고고학이다. 오픈오피스는 화요일에는 인쇄가 안 되기로 유명했다. 요일 문자열을 PostScript `%%CreationDate` 주석에 써 넣었고 프린터가 그걸 먹고 죽었기 때문이다. 테스트 하네스가 생기기 전에 쓰인 소프트웨어에서만 존재하는 종류의 결함이다. 17년 된 이야기지만, 오피스 스위트의 오프라인 사본이 내 기기에 있어야 한다는 최고의 논거는 여전히 이것이다.

그리고 정직한 반론들, 이것도 맞다. 리브레오피스가 충분히 좋았다면 더 인기를 얻었을 것이다. 윈도우에서 시작은 아무도 고치지 않은 이유로 여전히 4~5초 걸린다. 이번 주 업데이트된 오프라인 마이크로소프트 오피스 2024는 멀쩡하고, 늘 멀쩡했다. 이 농담의 요점은 리브레오피스가 더 낫다는 게 아니다. 마이크로소프트가 목요일 하루 종일 배달에 실패한 것의 가치 제안이, 아무도 끌 수 없는 로컬 설치 애플리케이션이라는 것이다.

## 코웨이 공기청정기를 리버스 엔지니어링하기, 그리고 HTTP로 배달되는 CA 인증서 — 604 points

**604 points** · 171 comments · [scottjg.com](https://scottjg.com/posts/2026-11-11-reverse-engineering-my-coway-air-purifier-to-ditch-the-cloud/) · [HN discussion](https://news.ycombinator.com/item?id=50474959)


나쁜 제품 결정에 대한 좋은 분해다. 코웨이 에어메가 아이콘S는 HEPA 필터와 와이파이 라디오를 붙인 박스형 선풍기에, 실행할 때마다 비밀번호를 바꾸라고 요구하는 앱을 얹은 물건이다. 공식 홈어시스턴트 통합은 휴대폰 앱인 척하고 코웨이 클라우드로 명령을 프록시하는 방식으로 동작한다. "선풍기 세게 틀어" 한마디가 존재할 이유가 없는 서버를 왕복한다는 뜻이다.

글은 펌웨어를 따라간다. 앱 트래픽을 뽑아내고, 로컬 엔드포인트를 찾고, 클라우드를 잘라낸다. 댓글러들이 무엇보다 붙잡은 한 줄은 이것이다. 이 공기청정기는 루트 CA 인증서를 평문 HTTP로 받아 온다. 그러니 처음부터 중간자 공격이 가능했다. 이 제품군 전체에서 나오는 신호다. 앱에는 TLS가 있고, 기기에는 신뢰 앵커가 없고, 2바이트짜리 명령을 클라우드 왕복이 대신한다.

스레드는 이제 자조 모임이다. 누군가는 쓰지 않는 와이파이 모듈 안의 ESP32에 납땜하고 ESPHome을 올려 하이얼 에어컨을 해방시켰다. 또 누군가는 셸리 플러그, 브로드링크 브리지, 홈어시스턴트로 CO2 연동 선풍기를 만들었다. 누군가는 박스형 선풍기에 MERV-13 필터 네 장을 붙인 코르시-로젠탈 박스를 권한다. 돈은 덜 들고 공기는 더 많이 옮긴다. 모두에게서 일관되게 나오는 발견은 하드웨어는 처음부터 충분했고 클라우드는 애초에 하중을 받은 적이 없다는 것이다. 클라우드는 앱을 제품으로 만들기 위해 존재했다.

## 제미나이의 새 오케스트레이터는 모델 선택을 모델에게 넘긴다 — 491 points

**491 points** · 160 comments · [antigravity.google](https://antigravity.google/blog/gemini-4-hydrogen-in-google-antigravity/) · [HN discussion](https://news.ycombinator.com/item?id=50472260)


구글의 안티그래비티 하네스에 오케스트레이터라는 모델 옵션이 생겼는데, 모델이 아니다. 정책이다. 제미나이 4 카본이 읽기 전용 단계로 시작해 의존성을 탐색하고 명시적 재계획 트리거가 붙은 계획을 쓴다. 제미나이 4 하이드로젠이 이어받아 수정을 쓰고 테스트를 돌린다. 하이드로젠이 마찰을 만나면 카본에게 돌려줘 계획을 고친다. 홍보 문구는 이렇다. 첫 프롬프트로 작업 난이도를 추측해 작업 전체를 한 모델에 고정하는 정적 라우터는 에이전트가 길어지면 무너진다. 단계마다 다른 모델이 필요하고, 그 단계는 진행하면서 발견되기 때문이다.

제시된 숫자는 Terminal-Bench 4.1 기준이다. 카본에 가까운 성공률, 할당량 24% 덜 소비, 19% 더 빠름. 전부 벤더 벤치마크고, 전부 그럴듯하고, 밖에서 재현된 것은 없다. 한 댓글러의 독립적 데이터 포인트가 마케팅보다 흥미롭다. 하이드로젠은 공개 데이터 분석 시험에서 100%를 받았다. 그 시험을 통과한 네 번째 모델이고, 함께 통과한 두 프런티어 모델 비용의 약 3분의 1이었다.

진짜 변화는 벤치마크가 아니다. 코딩 하네스의 모델 선택기가 이제 예산이 붙은 스케줄링 정책이 됐고, 구글은 그 결정을 두 번째 모델에 위임하라고 사용자에게 요구한다. 서브에이전트 함대를 굴리는 한 댓글러는 구글이 파는 것과 정반대를 말한다. 그는 모델이 "자기 능력에 낙관적"이기 때문에 서브에이전트에 모델을 일부러 직접 배정하고, 그 권한을 넘기고 싶지 않다고 한다. 두 입장 다 방어 가능하고, 청구서를 내는 사람이 측정할 수 있는 건 그중 하나뿐이다.

## 1GB 남짓의 램에서 160억 파라미터 모델 돌리기 — 463 points

**463 points** · 177 comments · [github.com](https://github.com/hyperionaidev/smolmaxxing/) · [HN discussion](https://news.ycombinator.com/item?id=50468888)


smolmaxxing은 규칙이 엄격한 벤치마크 프로젝트다. 모든 숫자를 그 기기에서 측정한다. 샤오미 TV 박스 S(아몰로직 S7D, 코어텍스-A55 네 개, 1.9GB 중 사용 가능 약 1GB)는 일상적으로 Qwen3.5-2B를 7.7 tok/s로, 몰아붙이면 16B 링-미니-2.0을 5.1 tok/s로 돌린다. 2013년 아이패드 에어(A7, 1GB 중 사용 가능 약 700MB, 탈옥)는 1비트 Bonsai-1.7B를 24–26 tok/s로, 같은 16B 모델을 2.6–4.5 tok/s로 돌린다. 원플러스 노드 CE 2(디멘시티 900, 7.4GB 중 3GB 여유)는 Qwen3.6-35B-A3B를 4.9–5.7 tok/s로, Qwen3-Next-80B-A3B를 2.6–3.1로 돌린다.

그 숫자들이 허구가 아닌 이유는 메커니즘 하나다. 각 전문가 혼합 모델의 일부만 상주하고, 나머지는 라우터가 요청할 때 플래시에서 스트리밍된다. 희소 활성화가 산수를 가능하게 만들고, 플래시 대역폭이 느리게 만들고, 커스텀 커널이 쓸 만할 만큼만 느리게 만든다. 저장소는 커널과 패치, 수정된 가중치를 공개한다.

이게 *쓸모*가 있느냐는 두 댓글러가 던진 정당한 질문이고, 정직한 답은 10년 된 태블릿에서 5 tok/s로 도는 16B MoE는 실제 내용물이 있는 스턴트라는 것이다. 메모리 벽이 용량 문제가 아니라 대역폭과 스케줄링 문제라는 걸 확립한다. 가장 웃긴 댓글이 가장 김 빼는 댓글이기도 하다. 추론 엔진은 거의 순수한 곱셈이고, 요즘 에이전트는 그런 걸 한 번에 만들어 낸다. 남은 어려운 부분은 하드웨어를 구하고 거기에 SSH로 접속하는 일이다.

## 종말은 오늘로 예정돼 있었다 — 398 points

**398 points** · 277 comments · [science.org](https://www.science.org/doi/10.1126/science.132.3436.1291) · [HN discussion](https://news.ycombinator.com/item?id=50482379)


1960년 11월, 하인츠 폰 푀르스터와 패트리샤 모라, 로런스 아미오는 인용되도록 설계된 제목의 논문을 사이언스에 실었다. *종말: 서기 2026년 11월 13일 금요일 — 인구가 지난 2천 년 동안 자란 대로 자란다면 이날 인류 인구는 무한에 접근한다.* 이들은 약 2,000년치 인구 추정치를 쌍곡선에 맞춰 수직 점근선을 찾아냈다. 당시 세계 인구는 대략 30억이었다.

오늘은 2026년 11월 13일 금요일이다. 인구는 무한하지 않고, 인류는 압사하지 않았고, 이 십 년의 인구 불안은 정확히 반대 방향으로 달린다. 출산율 하락, 고령화, 아이를 낳으면 돈을 주는 나라들. 아무도 인용하지 않는 논문 자체의 프레임은 기근이 아니었다. 폰 푀르스터의 논지는 인류가 굶지 않는다는 것이었다. 압박을 받을 것이다. 칼로리가 아니라 밀도가 구속 조건이 된다.

댓글은 대부분 외삽에 관한 것이고, 그중 최고는 "무한에 접근한다"는 말이 거의 공허하다고 지적한다. 준단조인 계열은 다 그렇고, 곡선이 금지하는 방식으로 백 배 틀릴 수는 없다. 정확한 비판이고, 데이터센터와 초지능에 관한 것을 포함해 이 사이트의 모든 예측에 적용된다. 따로 남길 만한 댓글이 하나 더 있다. 이 이야기가 오늘 화제가 된 건 1960년보다 2026년에 대해 더 많이 말해 준다.

## 46 AU 밖에서 발견된 새 왜소행성 후보, 1937년 사진에 이미 찍혀 있었다 — 386 points

**386 points** · 184 comments · [smithsonianmag.com](https://www.smithsonianmag.com/smart-news/astronomers-found-a-mysterious-object-orbiting-far-beyond-pluto-it-could-be-a-new-dwarf-planet-hidden-in-our-solar-system-180989857/) · [HN discussion](https://news.ycombinator.com/item?id=50472490)


매슈 홀먼은 케빈 네이피어와 함께 베라 루빈 천문대 데이터를 훑다가 새로 잡힌 2,000여 개 천체 중 하나가 커 보이는 걸 발견했다. 그와 마리오 유리치는 10년치 아카이브 이미지에서 그것을 찾았고, 결국 하버드가 보관한 1937년 사진 건판에서도 찾았다. "예측 위치를 볼 때마다, 거기 있다."

천체는 2026 ED138이다. 태양에서 46 AU, 공전 주기 281.1년, 궤도면이 행성들에서 약 25° 기울어져 있다. 섭동을 준 것이 해왕성이라는 뜻이다. 질량이 충분하면 여섯 번째 왜소행성이 된다. 오랫동안 다섯에서 멈춰 있던 목록에 이름을 올린다.

단서는 "후보"라는 단어이고, 발견자들도 그렇게 말한다. 이 거리에서 밝기는 크기에 대한 추측이고, 이 분야는 화성을 찾았다가 결국 돌덩이를 찾은 사람들로 가득하다. 의심할 여지가 없는 건 파이프라인이다. 한 번의 관측으로 태양계 외곽 천체 2,000개를 새로 만들어 내고 그것을 100년치 유리 건판과 대조하는 관측 망원경은, 처음 다섯 개를 찾아낸 천문학과는 다른 종류의 천문학이다.

## 가중치는 자기를 학습시킨 GPU를 기억한다 — 352 points

**352 points** · 147 comments · [unemploymentlabs.com](https://unemploymentlabs.com/checkpoint-forensics) · [HN discussion](https://news.ycombinator.com/item?id=50474883)


언임플로이먼트 랩스가 포렌식 보고서를 냈다. 딥시크와 문샷, 미니맥스, 앤트 그룹이 수출 통제 대상인 블랙웰 실리콘에 접근해 왔다는 주장이다. 흥미로운 건 방법이다. 공개된 가중치에서 모델의 초기 파라미터 값 흔적을 복원한 뒤, 그 흔적을 재현하는 하드웨어 구성과 초기화 방식을 찾는다. 2026년 4월 이후 공개된 모델 여섯 개가 블랙웰과 일치한다. 같은 랩의 더 이른 모델들은 호퍼와 일치하고, 이는 랩들이 공개한 H800과 일관된다. DeepSeek-V4-Flash와 Kimi K3는 실제 블랙웰 칩에서 일치를 재현했다.

보고서는 중요한 지점에서 정확하고, 조치로 이어질 지점에서 모호하다. 지문은 가중치가 어떻게 *생성됐는지*를 밝힌다. 블랙웰이 *학습*도 했다는 걸 뒷받침하지만 증명하지는 않는다고 말한다. 칩이 어디 있었는지, 접근이 어떻게 이뤄졌는지, 통제가 위반됐는지는 확립하지 못한다고 말한다. 그리고 한 모델에서는 AMD를 대안에서 배제하고 나머지 다섯 개에서는 가능성이 아주 낮다고 하는데, 이건 부재에 기대는 논증이다.

스레드의 반박은 세 갈래로 갈리고 셋 다 타당하다. 중국 랩은 중국 밖에서 엔비디아 용량을 합법적으로 임대할 수 있으니 "블랙웰을 썼다"와 "통제를 위반했다"는 같은 문장이 아니다. 저자는 수출 통제를 주장하는 전직 오픈AI 직원이고, 보고서와 함께 공개된 코드는 없다. 그리고 기술적 반론: 초기화 지문은 학습기가 아니라 초기화기에 대해 말해 줄 수 있다. 보고서에서 가장 강한 것은 결론이 아니라 장르다. 모델 가중치를 증거 보관 연쇄로 쓰는 것은 새로운 종류의 수출 집행이고, 칩을 만드는 회사가 CEO를 잃은 바로 그 주에 도착했다.

## IceWM은 29살이고, 원격 데스크톱에서는 여전히 정답이다 — 350 points

**350 points** · 202 comments · [ice-wm.org](https://ice-wm.org/) · [HN discussion](https://news.ycombinator.com/item?id=50478515)


마르코 마체크의 윈도우 매니저는 1997년에 처음 나왔고, 여전히 배포되고(4.1.0, 2026년 8월), 여전히 `./configure && make`로 빌드되며, 여전히 페이저가 붙은 작업 표시줄이 있고, 여전히 450개 넘는 테마와 서른 남짓 언어 번역이 있고, 여전히 무게가 없다. 컴포지터도, 포털 데몬도, D-Bus 세션 매니저도, 메뉴 하나 그리는 데 쓰는 2GB 램도 없다.

이게 프런트페이지에 올라올 물건은 아닌데 올라왔다. 댓글이 *오늘* 이걸 쓰는 사람들로 가득하기 때문이다. 러스트데스크로 붙는 헤드리스 원격 데스크톱, 아이들에게 넘긴 낡은 노트북, 망고WM을 시험해 보고 떠다니는 창으로 돌아온 타일링 WM 난민, 새것일 필요가 없는 기계 위의 Wine과 리퍼와 투나. 반복되는 불평은 미학이다. 중첩 드롭다운, 패딩 없음, 2003년식 박스 그림자. 반복되는 답은 대안이 창 하나 그리는 데 서비스 열다섯 개를 쌓는 일이라는 것이다.

반쯤 진담인 해석은 이것이 마이크로소프트 장애, 코웨이 공기청정기와 같은 이야기라는 것이다. 의존성 없이 한 가지 일을 하는 소프트웨어는 계속 작동한다. 서비스 열한 개에 의존하는 소프트웨어는 계속 흥미롭다.

## Edge0, 노트북에서 도는 145B 모델을 내놓았다, 별표는 29GB — 333 points

**333 points** · 101 comments · [edge0.ai](https://edge0.ai/blog/introducing-edge0-145b-frontier-ai-capabilities-on-your-own-computer) · [HN discussion](https://news.ycombinator.com/item?id=50475713)


Edge0가 145B와 120B 모델, 그리고 추론 프레임워크를 오픈소스로 공개했다. 맥북 프로에서 145B 모델이 최대 메모리 29GB로 돌고, 프리필 1,100 tokens/s 이상, 디코드 80 tokens/s 이상이며, 코딩과 추론 결과는 "특정 프런티어 클라우드 모델과 경쟁력이 있다"고 주장한다. 릴리스에 따르면 구조적 요령은 공격적인 가중치 공유다. 전문가 64개 묶음이 큰 행렬 두 개를 공유하고, 각 전문가는 작은 델타만 갖는다.

문제가 둘이다. "최대 29GB"는 평범한 노트북이 아니다. 36GB나 48GB 기계이고, 개인용이 아니라 개발자용이다. 한 댓글러는 "보통 사람들"이 실제로 무엇을 쓰는지(16GB, 통합 메모리 없음, 내장 그래픽) 당연한 질문으로 던졌다. 그리고 배포 포맷이 NVFP4라서 블랙웰급 엔비디아 하드웨어를 뜻하고, 아직 아무도 구현하지 않은 추론 엔진에 GGUF 파일도 없다. "당신의 컴퓨터에서"를 내세우는 릴리스치고 하드웨어 목록이 짧고 구체적이다.

스레드의 의심은 이것이 기존 프런티어 플래시급 모델의 양자화된 친척에 새 가중치와 새 이름을 입힌 것이라는 쪽이다. 부당할 수도 있고 정확히 맞을 수도 있다. 릴리스는 말하지 않고, 벤치마크는 이름 없는 "프런티어 클라우드 모델"과 비교한다. 확실한 건 메모리 벽이 움직였다는 것이다. 145B 파라미터 MoE가 상주 29GB를 요구하는 건 실제 엔지니어링 성과이고, 29GB인 이유는 파라미터 대부분이 자고 있기 때문이다.

## AI가 읽기를 신호로 만들어 주던 비용 비대칭을 깨뜨렸다 — 289 points

**289 points** · 177 comments · [theatlantic.com](https://www.theatlantic.com/books/2026/11/ai-literary-scams-amazon/689391/) · [HN discussion](https://news.ycombinator.com/item?id=50481870)


레이철 카디시의 애틀랜틱 글은 표면상 아마존의 가짜 책 이야기다. 실제 작가의 필명에 AI 생성물을 붙이고, 자기 작품을 닮게 써서 그 이름으로 검색에 뜨게 만든 것들. 작가 길드의 메리 라젠버거는 아마존이 여기에 실제로 공을 들이지만 "늘 따라잡기 게임"이라고 말한다. 아마존은 개인 계정이 주당 여섯 권까지 올리게 해 준다. 하루 한 권이고, 어떤 인간 작가도 그렇게 쓴 적이 없다.

가장 좋은 문단은 사기 이야기가 아니다. 더 깊은 균열이 주의력의 경제학에 있다는 관찰이다. 어떤 글이 당신에게 읽는 데 걸리는 시간이 얼마든, 작가가 쓰는 데는 거의 확실히 더 오래 걸렸고, 그 비대칭이 독자가 산문을 누군가 자기 시간을 들일 가치가 있다고 판단했다는 증거로 삼을 수 있었던 유일한 근거였다. 언어 모델은 잘할 필요도 없이 그 비대칭을 부순다. 기계는 어떤 인간이 소비할 수 있는 속도보다 빠르게 텍스트를 만들 수 있고, 그래서 잘 짜인 문단이 존재한다는 것 자체가 아무것도 증명하지 못하게 된다.

스레드는 기사가 축소한 유인 분석을 보탠다. 아마존은 모든 판매에서 수수료를 받으니 반(反)사기 작업은 매출과 경쟁하는 비용 센터이고, 그래서 단속이 늘 사후적이다. 한 댓글러는 제목을 이렇게 고치자고 한다. "AI가 작가와 독자 사이의 신뢰가 형성되는 방식을 재편하고 있다." 더 나은 설명이고 더 나쁜 헤드라인이라는 지적이 맞다. 불편한 부분은 해법이 탐지가 아니라는 것이다. 서명이 있고 비용이 들며 대면하는 경로로 돌아가는 것이다. 작은 출판사, 아는 편집자, 서점, 만나 본 사람들.

## 애플의 파운데이션 모델 프레임워크는 이제 중립 라우터다 — 262 points

**262 points** · 35 comments · [developer.apple.com](https://developer.apple.com/foundation-models-framework/) · [HN discussion](https://news.ycombinator.com/item?id=50474361)


LLM용 애플의 스위프트 API는 이제 애플 자체 모델보다 넓다. 가이디드 생성, 도구 호출, 비전의 OCR과 바코드 리더가 연결된 이미지 이해, 동적 프로필, 그리고 새로 추가된 것 — 클로드나 제미나이 같은 서버 모델을 같은 인터페이스로, Language Model 프로토콜을 따르는 스위프트 패키지를 내는 공급자들을 통해. 온디바이스 추론은 무료이고 오프라인이며, 프라이빗 클라우드 컴퓨트는 첫 다운로드 200만 건 미만의 스몰 비즈니스 프로그램 개발자에게 무료다.

타이밍이 논거다. 애플은 목요일 하루 종일 클라우드 두 개가 쓰러지는 걸 지켜본 뒤, "앱의 지능은 로컬 API 호출이고, 더 큰 모델이 필요하면 그것도 뒤에 다른 공급자가 붙은 로컬 API 호출이다"를 내세우는 프레임워크를 내놨다. 의도된 것이든 아니든 추상화는 옳다. 앱은 누구의 가중치가 답했는지 알 필요도, 신경 쓸 필요도 없다.

댓글은 전략보다 실무적이고, 채택에는 좋은 신호다. 누군가는 8GB M1에서 명령어 교정용으로 애플의 온디바이스 모델을 터미널에서 돌리고 있다. 누군가는 `apple/coreai-models`를 가리킨다. 많은 오픈 웨이트 모델이 스위프트에서 네이티브로 돌도록 변환되는 중이다. 누군가는 앤스로픽이 몇 달 전부터 App Attest를 지원한다고 짚는다. 빠진 건 하나다. 평범한 HTTP 클라이언트 대신 이걸 상대로 코드를 쓸 이유 — 그리고 "SDK가 이미 기기에 있고 사용자 데이터가 기기를 떠나지 않는다"는 괜찮은 이유다.

## 일라이 릴리 CEO는 생물학의 지도가 여전히 대부분 백지라고 말한다 — 258 points

**258 points** · 353 comments · [garymarcus.substack.com](https://garymarcus.substack.com/p/breaking-eli-lilly-ceo-becomes-latest) · [HN discussion](https://news.ycombinator.com/item?id=50483480)


IPO를 준비하던 대리오 아모데이가 카메라 앞에서 10년 안에 암과 알츠하이머, 심장병, 정신질환이 "과거의 유물"이 될 것이라고 말했다. 일라이 릴리 회장 겸 CEO 데이브 릭스의 답: "굉장할 일이고, 가능성은 낮다고 본다. 생물학의 지도는 여전히 대부분 백지이고, 무작위 배정을 통한 인간 증명이 가장 어려운 병목이다. 우리 업계의 AI 활용에는 기대가 크지만 진전은 완만하고 점진적일 것이다."

실제로 임상에 돈을 대는 사람이 세 문장으로 반박을 끝냈다. 스레드의 보조 숫자는 어떤 의견보다 이 홍보에 불리하다. 최근 승인된 스무 개 약물의 경우, 첫 인체 투여에서 FDA 승인까지 평균 14년, 중앙값 10년이었다. 오늘 임상에 들어간 약은 2030년대에 환자에게 도달한다. 가설 생성이 나아진다고 이걸 압축할 수는 없다. 제약 조건은 가설이 아니라 무작위 인간 증거, 제조, 규제 당국이고, 어느 것도 토큰으로 확장되지 않는다. 믿을 만하게 AI 편에 서는 에릭 토폴조차 기술은 지지하면서 목표는 달성 불가능하다고 말했다.

마흔 명쯤이 든 뻔한 비교는 테라노스다. 게리 마커스도 그중 하나다. 카리스마 있는 창업자, 데모, 검사에 관한 약속, 그리고 투자 라운드. 중요한 구분은 테라노스에는 사기 장치가 있었고 앤스로픽에는 진짜 장치가 있다는 것이다. 문제는 주장이지 제품이 아니다. 회사를 두 번 상장시킨 한 댓글러는 투자설명서를 쥔 사람에게 와닿는 말로 정리한다. IPO 홍보에서 이런 말을 하는 건 미친 짓이다.

## 브레이브는 검색 한 번을 0.5센트에 판다, 계정도 필요 없다 — 254 points

**254 points** · 142 comments · [brave.com](https://brave.com/blog/search-api-agentic-payments/) · [HN discussion](https://news.ycombinator.com/item?id=50477649)


브레이브 검색 API가 이제 에이전트 트래픽에 x402 — 부활한 HTTP 402 결제 코드 — 를 받는다. 결제 없는 요청은 가격과 결제 정보가 담긴 402를 받는다. 에이전트는 베이스에서 USDC 전송에 서명하고, 증명을 붙여 재시도하고, 결과와 영수증을 받는다. API 키도, 요금제도, 계정도 없다. 가격은 LLM 컨텍스트와 웹·뉴스·이미지·비디오·로컬 검색 모두 요청당 0.005달러다. 브레이브는 자체 퍼실리테이터를 운영하고 당분간 베이스 가스비를 대신 낸다. 권장 클라이언트는 스트라이프의 Purl CLI 지갑이다.

개념은 건전하고 수요는 입증되지 않았다. 스레드에서 가장 쓸모 있는 댓글은 크롤링이 많던 사이트에 x402를 구현한 사람 것이다. 트랜잭션이 한 건도 성사되는 걸 보지 못했고, x402 서브레딧도 같은 보고로 가득하다고 덧붙인다. 움직이는 돈은 이 레일이 작동하는지 시험하는 사람들의 돈뿐이다. 두 번째로 쓸모 있는 댓글: 질의당 0.5센트면 검색 서른 번을 돌리는 채팅 세션에 15센트가 들고, 그건 그 검색을 돌릴 가치가 있었는지 판단하기 전의 이야기다.

둘 다 고칠 수 있는 문제이고, 둘 다 고쳐지지 않았다. 정말 흥미로운 결과는 아무도 값을 매기지 않는 것이다. 검색이 질의당 과금을 시작하면 웹을 무료로 만든 광고 모델이 계량 모델로 대체되고, 크롤링할 여유가 있는 주체는 크롤러를 가진 주체가 아니라 지갑을 가진 주체가 된다. 그게 추적보다 소비자에게 유리한지는 결국 누가 지갑을 쥐게 되는지에 달렸다.

## 제인 스트리트는 이제 당신의 안목을 면접한다 — 249 points

**249 points** · 225 comments · [blog.janestreet.com](https://blog.janestreet.com/software-engineering-interviews-are-changing-a-little/) · [HN discussion](https://news.ycombinator.com/item?id=50467297)


이 트레이딩 회사는 캠퍼스 후보자용 온사이트 면접 라운드를 새로 시험 중이다. 코드는 줄고 소프트웨어 설계는 늘고, 그리고 명시적으로 — LLM으로 코드를 만들게 하되 결과가 정확한지, 구조가 좋은지, 올바른 문제를 겨냥했는지를 평가한다. 대부분의 라운드는 전통적이고 도구 없이 남는다. 글은 형식에 대해 일부러 모호하다. 형식이 아직 움직이는 중이기 때문이다.

근거는 정직한 쪽이다. 코드 생성은 이제 일에서 가장 싼 부분이다. 무엇을 만들지에 대한 안목, 오래 가는 추상화를 고르는 일, 만들어진 것이 실제로 작동하는지 검증하는 일이 비싼 부분이고, 옛 면접은 싼 부분을 측정했다. 제인 스트리트는 검증되지 않은 면접 절차를 돌리면서 1년 동안 아무도 뽑지 않고 보정할 여유가 있는 몇 안 되는 회사이기도 하다.

댓글에는 이 시도가 마땅히 받아야 할 비판 둘이 있다. 하나: 면접 철학을 공개하는 회사 중 자기 질문이 성과를 예측한다는 증거를 보여 줄 수 있는 곳은 거의 없고, 다들 추측 중이다. 둘: 사람들이 원하는 실제 신호 — 모호한 비즈니스 요구사항을 계획으로 바꿀 수 있는가 — 는 더 어려운 리트코드로 좋아지지 않고, LLM을 감독하는 라운드가 적어도 실제 업무에 더 가깝다. 제인 스트리트가 사흘 연속 프런트페이지에 있다는 농담도 도는데, 채용 시즌이거나 콘텐츠 전략이다.

## AMD는 젠 6에서 코어 위계를 뒤집었다 — 239 points

**239 points** · 8 comments · [chipsandcheese.com](https://chipsandcheese.com/p/talking-zen-6-with-mike-clark-at) · [HN discussion](https://news.ycombinator.com/item?id=50467460)


칩스 앤 치즈가 AMD의 마이크 클라크와 한 인터뷰에서 흥미로운 디테일은 구조적인 것이다. 젠 6에서 밀집형 젠 6c 코어가 이제 IPC가 더 높은 쪽이고 코어당 L3 4MB를 온전히 갖는다. 반면 클래식 코어는 고주파수 쪽이다. 두 설계가 사실상 역할을 맞바꿨고, AMD는 같은 최적화가 양쪽에 적용되도록 소프트웨어에 보이는 격차를 남기지 않으려 했다고 말한다.

두 세대 동안 c/클래식 분할이 팔려 온 방식은 그렇지 않았다. 컴팩트 코어는 밀도 전략, 빅 코어는 성능 전략이었다. 밀집 코어를 IPC 선두로 만든다는 건 이제 차이가 클럭 대 캐시·면적이라는 뜻이고, 튜닝하기에는 훨씬 흥미로운 트레이드오프이며 소프트웨어가 감지하기에는 훨씬 어려운 트레이드오프다.

이 스토리에 가장 정직한 댓글은 다른 해였으면 훨씬 큰 뉴스였을 거라는 것이다. AMD의 CPU 코어 아키텍처 역전은 정말로 중요한 엔지니어링이고, 지금은 클라우드 장애, CEO 사임, 모델 출시 두 건 아래에서 239점에 앉아 있다.

## 클로드가 괴델의 속기를 읽었다, 정리를 증명한 것과는 다르다 — 238 points

**238 points** · 60 comments · [theguardian.com](https://www.theguardian.com/science/2026/nov/13/kurt-godel-notebooks-ai-helps-unlock-hidden-discoveries-man-who-transformed-maths) · [HN discussion](https://news.ycombinator.com/item?id=50486748)


얀 폰 플라토는 2017년부터 헬싱키에서 괴델이 1940년대 초에 쓴 공책 16권을 읽는 프로젝트를 이끌었다. 가벨스베르거 속기로 촘촘히 적힌 수학과 논리 1,009페이지이고, 괴델이 쓸 때도 이미 사어였다. 팀의 속도는 주당 한 페이지 정도였다. 9월에 폰 플라토는 그 자료를 클로드에 넣었다. 이틀 만에 코퍼스 전체의 요약을 받았고, 그 요약은 아무도 몰랐던 정리 수백 개, 1970~80년대에야 다시 발견된 결과의 선취 수십 건, 한 번도 이어지지 않은 논리 주제 14개를 주장한다. "나는 넋이 빠졌다"고 그는 말했다.

이 주장을 진지하게 받아들이고, 그다음 단서도 진지하게 받아들여야 한다. 사어가 된 속기를 읽고 1,000페이지의 구조화된 요약을 만드는 모델은 2년 전엔 불가능했던 일을 한다. 그리고 그 주장을 하는 사람은 벤더가 아니라 이 공책들의 세계 최고 권위자다. 하지만 요약은 텍스트에 대한 가설이지 수학에 대한 증명이 아니다. 그 수백 개 정리 하나하나를 원문을 읽을 수 있는 몇 안 남은 사람 중 하나가 여전히 확인해야 한다.

스레드 최고의 댓글은 이 프레임을 복잡하게 만드는 것이다. 괴델은 자기가 완벽하다고 여긴 것만 발표한 악명 높은 완벽주의자였고, 결과를 수십 년씩 썩혀 두었다. 변증법적 해석은 아이디어를 처음 떠올린 지 약 20년 뒤에 발표됐다. 그래서 공책에는 그가 믿었던 정리 수백 개보다 날카롭지만 미완인 사고가 훨씬 많이 들어 있을 가능성이 크다. 헤드라인은 "정리를 증명했다"고 하지만, 정직한 버전은 "수백 개의 결과를 담았을 수 있는 논증을 적어 두었고, 이제 처음으로 색인을 만들 수 있다"이다.

## 22년 된 포스트그레스 원시 요소, 그리고 그것을 과장한 헤드라인 — 228 points

**228 points** · 40 comments · [mehmetince.net](https://mehmetince.net/part-3-6-how-i-ended-up-turning-a-22-year-old-postgresql-type-confusion-primitive-into-rce-cve-2026-6460/) · [HN discussion](https://news.ycombinator.com/item?id=50471761)


메흐메트 인제는 몇 달 동안 포스트그레스 확장의 메모리 손상 버그를 공략해 `pg_clickhouse`로 코드 실행을 얻었고, 그다음 포스트그레스가 자기 데이터를 어떻게 이해하는지 질문했다. 답은 이렇다. 복합 타입 안에 값을 넣고, 필드 하나의 타입을 바꾸고, 값을 다시 읽는다. 그 결과 생기는 타입 혼동은 22년 동안 존재해 온 것으로 보인다. CVE-2026-6460.

글은 좋고 익스플로잇은 영리하다. 정의가 밑에서 바뀌는 테이블에 대한 준비된 구문이고, 계획이 마땅히 무효화되지 않는다. 그는 포스트그레스 내부를 한 번에 질문 하나씩 가르쳐 준 튜터로 AI 에이전트를 언급하기도 한다. 전문가가 두 번째 전문 분야를 얻는 지금의 표준 방식이다.

스레드의 반론이 옳고, 그건 발견이 아니라 프레임에 대한 것이다. 인증된 데이터베이스 세션이 필요하니 이건 데이터베이스 계정에서 호스트로 가는 권한 상승이고, 인증 없는 원격 코드 실행이 아니다. 단일 테넌트 포스트그레스에서는 소소한 버그다. 관리형 멀티 테넌트 서비스에서는 — 이 연재의 제목이 "관리형 포스트그레스 업계의 시스템적 위험"이다 — 정확히 원하지 않는 그 물건이다. 고객에게 주어지는 게 데이터베이스 계정이기 때문이다.

## C 대신 지그, `errdefer`에서 시작하는 논증 — 201 points

**201 points** · 178 comments · [mtsoukalos.eu](https://www.mtsoukalos.eu/2026/11/why-zig-over-c-for-systems-programming/) · [HN discussion](https://news.ycombinator.com/item?id=50483611)


미할리스 추칼로스는 앞서 러스트에 대해 같은 글을 썼고, 이번엔 C에 대한 글을 쓴다. 그리고 자기는 C를 사랑하며 지그가 C를 대체한다고 주장하는 게 아니라고 분명히 한다. 그의 논거는 좁고 구체적이다. 자원 여러 개를 확보하고 실패 시 되감아야 하는 함수의 C 관용구는 `goto` 레이블 사다리이고, 정리 코드는 할당에서 멀리 떨어져 살며 레이블 순서는 할당 순서와 손으로 맞춰야 한다. 지그의 `errdefer`는 자기가 되돌릴 할당 바로 밑에 있고 오류 경로에서만 실행된다.

안전성 논거보다 나은 논거다. 미학으로 반박할 수 없기 때문이다. 반론은 글 전체가 구성 하나에 불과하고, 독자는 규율과 린터로 C에서 같은 규율을 구현할 수 있다는 것이다. 사실이고, 대부분의 언어 이주에 대해 할 수 있는 가장 강한 말이기도 하다. 이주는 "조심하라"를 "조심하지 않을 수 없게" 바꾼다.

남길 만한 디테일은 코드가 지그 0.17과 클랭으로 컴파일됐고, 지그가 여전히 C ABI로 C 라이브러리와 대화한다는 것이다. 테이블 위의 제안은 재작성이 아니다. 새 코드가 C를 그만두고 옛 코드는 계속 작동하는 것, 이 논증이 이겨 본 유일한 버전이다.

## 화석 연료 배출은 줄고 총배출은 늘었다, 같은 보고서에서 — 183 points

**183 points** · 277 comments · [news.exeter.ac.uk](https://news.exeter.ac.uk/faculty-of-environment-science-and-economy/fossil-co2-emissions-decrease-in-2026/) · [HN discussion](https://news.ycombinator.com/item?id=50437752)


2026 글로벌 카본 버짓은 화석 CO2를 38.2십억 톤으로 전망한다. 0.4% 감소이고, 태양광과 풍력이 발전을 대체한 것과 이란 분쟁발 에너지 충격이 석유를 1.9% 끌어내린 것이 원인이다. 중국 0.9% 감소, 미국 1.3% 감소, EU 1.5% 감소, 일본 1% 감소, 나머지 세계 0.7% 감소. 인도는 4.4% 증가. 세계 에너지 수요 증가분의 3분의 2가 태양광과 풍력, EV로 충당됐다.

그다음 보도자료 제목에 넣을 수 없는 숫자. 토지 이용 변화 배출이 올해 5.1십억 톤으로 늘었다. 대부분 동남아시아의 이탄 화재와 산림 황폐다. 그래서 *총* CO2는 42.8에서 43.3십억 톤으로 늘어난다. 1.5°C 목표의 남은 탄소 예산은 150십억 톤이고, 현재 속도로 4년이 채 안 된다. 화석 배출은 줄었고 대기는 나빠졌다.

과학자들은 인용문에서 조용한 부분을 말한다. 프리들링슈타인: 지정학적 충격에 일부 떠밀린 감소는 지속 가능한 기후 해법이 아니다. 피터스: 구조적 변화가 이끌지 않으면 1년은 정점이 아니다. 가장 세게 꽂히는 댓글은 이게 잘못된 그래프를 보는 회계라는 것이다. 대기 중 농도는 단조 증가이고, 이란발 출렁임은 그 안의 출렁임이다. 한 구성 요소의 0.4% 감소를 다루는 기사가, 프런트페이지의 다른 기후 스토리가 AI 데이터센터 건설 허리케인인 날 실렸다는 점은 나아가는 방향과 나아가는 속도가 다른 질문임을 잘 일깨워 준다.

## Relax는 러스트를 컴파일하면서 실행한다 — 176 points

**176 points** · 102 comments · [makepad.github.io](https://makepad.github.io/relax/) · [HN discussion](https://news.ycombinator.com/item?id=50458849)


매크패드의 Relax는 러스트용 라이브 컴파일러이자 JIT 런타임이다. rustc도, LLVM도, 링커도 루프에 없다. 함수를 처음 호출할 때 컴파일하고, 뜨거운 함수는 프로그램이 도는 동안 다시 최적화하고, 수정 사항을 실행 중인 프로세스에 패치해 상태가 살아남는다. 큰 3D 게임의 첫 프레임은 `cargo build`로 약 3분 걸리던 것이 M4의 깨끗한 체크아웃에서 11초가 된다. 작은 앱은 3.7초에서 0.41초. 파일을 저장하면 92개 테스트가 2.2초에 다시 돈다.

비용은 사용자가 발견하는 대신 페이지에 적혀 있다. 드문 일이다. 최적화된 코드는 `--release` 대비 x86-64에서 1.12× 느리고 arm64에서 1.24× 느리며, JIT 코드는 추가 전용이라 메모리가 자라고, 컴파일러는 438,000줄에 crates.io 의존성이 0이다. 실험적이라고 표시돼 있고, 배포할 것은 무엇이든 `cargo build --release`를 쓰라고 말한다.

사용자의 첫 댓글은 페이지가 해 줄 수 없는 현실 점검이다. 그의 프로젝트 대부분은 실행에 실패했고, 하나는 잘못 컴파일돼 테스트에 떨어졌고, 작동한 하나는 웹 서버를 띄우는 데 14초가 걸렸다. 2.3초짜리 증분 빌드와 비교해서. 실험적 컴파일러의 첫 주가 그런 모습이다. 더 흥미로운 사실은 반복 작업에 초점을 둔 러스트 컴파일러 세 개가 한 달 안에 등장했다는 것이다. 30초짜리 편집-컴파일-실행 루프가 지금 이 생태계에서 가장 미움받는 것이라는 뜻이다.

## 81세 SF 작가가 부커상을 받았다 — 169 points

**169 points** · 123 comments · [theguardian.com](https://www.theguardian.com/books/2026/nov/09/m-john-harrison-the-end-of-everything-wins-2026-booker-prize) · [HN discussion](https://news.ycombinator.com/item?id=50437242)


M 존 해리슨이 *모든 것의 끝*으로 부커상을 받았다. 근미래 켄트 해안을 배경으로 한 포스트 아포칼립스 소설이다. 81세로 이 상 역사상 최고령 수상자이고, 2019년 79세의 애트우드를 앞선다. 5만 파운드 수표는 60년 집필 끝에 도착했다. 부커상 재단의 게이비 우드는 "매 페이지에 수십 년의 작업이 가볍게 얹혀 있는 작가에게 주는 역사적 수상"이라고 말했고, 이전 수상자들이 SF를 건드린 적은 있어도 해리슨은 "정통 SF 세계에서 나온 첫 부커 수상자"라고 정확히 짚었다.

그 구분이 흥미롭고, 동시에 조금 우습다. 부커상은 수년째 사변 소설에 상을 줘 왔다. 달라진 건 그 라벨이 사과문 없이 보도에 등장해도 된다는 것이다. 해리슨은 평생 문예면 서평을 받지 못하는 분야에서 일했다. 비리코니움 연작, 케파후치 트랙트 삼부작. 그리고 나서 상이 외면할 수 없는 조용한 후기 소설을 썼다.

스레드에 논쟁이 없고, 그게 요점이다. 오늘 페이지에서 만들어진 것에 관한 소식이 분명히 좋은 유일한 스토리이고, 1조 달러를 잃는 회사와 클라우드 두 개가 죽는 사이에 앉아 있다.

## 섹션 아래, 새로 올라온 것들

- **[The Utah Teapot](https://graphics.cs.utah.edu/teapot/)** ([195 points](https://news.ycombinator.com/item?id=50457618), 46 comments) — 유타 주전자 페이지에서 이제 모델의 모든 역사적 버전을 다시 생성할 수 있다. 마틴 뉴웰의 1975년 원본부터 블린, 크로, 드리스킬, 피시, 젬 유크셀의 2026년 재구축까지 — 베지에 패치 설정까지 노출해서. SIGGRAPH 2026이 50주년이다.
- **[AI is turning Apple's app review process into a nightmare for synth developers](https://synthanatomy.com/2026/11/ai-is-turning-apples-app-review-process-into-a-nightmare-for-developers.html)** ([194 points](https://news.ycombinator.com/item?id=50474311), 231 comments) — 애플의 앱 심사 큐가 AI 생성 제출물에 휘청인다. 하루 10~20개의 새 iOS 음악 앱이 추정되고, 심사 기간은 늘어나고, 앱스토어 유통에 의존하는 AUv3 플러그인 개발자들이 타격을 받는다.
- **[Making a €40 USB-C hub work as a Nintendo Switch 2 dock](http://blog.nozomi.space/posts/sw2_dock/)** ([169 points](https://news.ycombinator.com/item?id=50431971), 64 comments) — €40짜리 Cable Matters USB-C 허브를 닌텐도 스위치 2 독처럼 동작하게 만들었다. USB-PD 벤더 정의 핸드셰이크를 스니핑하고, RTD2142 펌웨어를 패치해 물 빠진 HDR을 고쳤다. 코드는 공개돼 있다.
- **[The Apple Support Community will permanently close on November 20, 2026](https://discussions.apple.com/welcome)** ([166 points](https://news.ycombinator.com/item?id=50449440), 237 comments) — 애플 지원 커뮤니티가 오늘 읽기 전용이 되고 11월 20일 영구 폐쇄된다. 트래픽은 애플 자체 지원 페이지로 돌린다. 어제 스토리의 두 번째 제출이고, 더 버지가 아니라 애플에서 나온 링크다.
- **[U.S. October PPI Rises 6.5% YoY, Highest in Nearly Four Years](https://news.ycombinator.com/item?id=50484421)** ([160 points](https://news.ycombinator.com/item?id=50484421), 191 comments) — 미국 생산자 물가는 10월에 전년 대비 6.5% 올랐다. 2022년 11월 이후 최고이고, PPI는 전월 대비 0.3% 상승, 9월치는 1.3%에서 1.4%로 수정됐다.
- **[It Takes 16 Clicks for a Student to Open a PowerPoint on an iPad](https://www.reddit.com/r/Teachers/comments/1xuup7a/technology_sucks_it_literally_takes_16_clicks_for/)** ([156 points](https://news.ycombinator.com/item?id=50487522), 73 comments) — 한 교사가 학교 아이패드에서 파워포인트를 열기까지 필요한 클릭 수를 셌다. 열여섯 번. 스레드는 관리형 기기 함대마다 같은 문제가 있다는 목록이다.
- **[Brazil's Caixa insurer breach exposes names and tax IDs of all 7.6M customers](https://filemanager-cdn.mziq.com/published/3972906b-e50b-4f74-ab74-4d0d32125d11/9567a559-d20a-486e-a7ae-5c6bbc030c5e)** ([156 points](https://news.ycombinator.com/item?id=50485295), 65 comments) — 카이샤 세구라도라 유출로 고객 760만 명 전원의 이름, 전화번호, CPF 세금 번호가 노출됐다. 브라질 댓글러들은 직설적이다. CPF는 이미 준공개 정보이고 여러 번 유출됐다. 새로운 건 전화번호다.
- **[Hacking the Meta Ray-Ban smartglasses](https://p0pcycle.com/2026/11/06/hacking-the-meta-ray-ban-smartglasses/)** ([155 points](https://news.ycombinator.com/item?id=50406224), 57 comments) — 메타 레이밴 스마트글래스 분해. 펌웨어가 무엇을 노출하는지, 앱이 무엇과 통신하는지, 어시스턴트의 어느 부분을 로컬에서 가로챌 수 있는지.
- **[After 600 experiments, here's what I discovered about JEPA world models](https://haddyalchaer.com/jepa)** ([153 points](https://news.ycombinator.com/item?id=50487185), 30 comments) — 르쿤의 JEPA 월드 모델 LeWM에 대한 실험 600회. 학습된 예측기를 시뮬레이터의 실제 물리로 바꿔도 Push-T 성능은 거의 움직이지 않았고, 목표 이미지의 세부 하나가 아키텍처보다 중요했다.
- **[Libreagi – Save OSS Models](https://libreagi.com/)** ([153 points](https://news.ycombinator.com/item?id=50467439), 31 comments) — LibreAGI는 모델 가중치용 비공개 비트토렌트 트래커다. 희소성에 비례하는 크레딧이 있고, 모든 해시의 서명된 공개 목록이 있어 사이트가 죽어도 스웜을 다시 세울 수 있다. 회원제이고 질문은 IRC로 받는다.
- **[Show HN: Black Ops II statically recompiled to native ARM64 macOS](https://github.com/adrbn/bo2-mac)** ([150 points](https://news.ycombinator.com/item?id=50449891), 67 comments) — 콜 오브 듀티: 블랙 옵스 II를 32비트 x86 윈도우에서 ARM64 맥OS로 정적 재컴파일했다. Remill로 LLVM IR을 만들고, Win32 런타임을 직접 쓰고, Direct3D 11을 메탈 위에서 돌린다. Wine도 없고 게임 파일도 배포하지 않는다. 자기 스팀 사본으로 직접 빌드한다.

페이지의 스토리 네 개는 이전에 여기서 다뤄서 깔끔한 델타를 낼 수 없다. *내가 BEAM 책을 쓴 이유*는 어제 202점짜리 섹션이었고 지금은 210점이다. 톰 모르텔의 옛날식 게임 프로그래밍 핵, 등각 발렌시아 지도, 퀸스 공공도서관 랜섬웨어 공지는 어제 지나가듯 언급만 했고 수치가 없어서 정직하게 뺄 것이 없다. 셋 다 여전히 오르고 있고 도서관은 여전히 오프라인이다.

## 여전히 페이지에 있는 것들

| 스토리 | 지난 집계 | 11월 13일 |
|---|---|---|
| [Jensen Huang resigns](https://apnews.com/article/nvidia-megaspeed-china-singapore-huang-5403f152a601cf82ce939f1d24fffa0f) | 2,323 (11-12) | 3,991 (+1,668) |
| [Tim Peters has died](https://discuss.python.org/t/in-memoriam-tim-peters-1952-2026/110028) | 1,385 (11-11) | 1,422 (+37) |
| [Foldable Flight: The Best Paper Airplanes](https://www.foldableflight.com) | 1,260 (11-11) | 1,274 (+14) |
| [Nvidia is preparing to oust Jensen Huang](https://www.wsj.com/business/nvidia-is-preparing-to-oust-nvidia-ceo-jensen-huang-30f421ad) | 1,210 (11-12) | 1,220 (+10) |
| [Smart home devices should work without the internet](https://docodethatmatters.com/home-automation-overnight-success/) | 1,181 (11-11) | 1,194 (+13) |
| [My AI agents found an unmapped Maya site?](https://pietromiotti.com/latest/maya-site) | 1,025 (11-11) | 1,033 (+8) |
| [Anthropic IPO](https://ipo.anthropic.com/us/) | 721 (11-12) | 988 (+267) |
| [AWS emulator](https://github.com/aws/aws-emulator) | 959 (11-11) | 982 (+23) |
| [.name Grandfathered](https://neil.fraser.name/news/2026/11/10/) | 930 (11-11) | 935 (+5) |
| [USPS now offers official ZIP Code boundary polygons](https://postalpro.usps.com/zcb) | 732 (11-11) | 732 (0) |
| [Amazon saves millions by replacing Sonnet 4.6 with Strands Decider](https://strandsagents.com/blog/amazon-saves-millions-replacing-sonnet-with-strands-decider/) | 725 (11-11) | 727 (+2) |
| [Socratic Tutor](https://github.com/janestreet/agent_skills/blob/master/socratic-tutor/SKILL.md) | 615 (11-12) | 694 (+79) |
| [United Airlines bans AI agents from booking flights on behalf of travelers](https://www.cbsnews.com/news/united-airlines-bans-ai-agents-booking-flights/) | 656 (11-12) | 677 (+21) |
| [AlphaProof Code](https://deepmind.google/blog/introducing-alphaproof-code/) | 674 (11-11) | 677 (+3) |
| [A false smoke alarm almost drowned Jane Street's only NYC datacenter](https://michael.bacarella.com/2026/11/10/false-smoke-alarm-jane-street-datacenter/) | 567 (11-11) | 583 (+16) |
| [93% of paint splatters are valid Perl programs (2019)](https://www.mcmillen.dev/sigbovik/) | 558 (11-12) | 581 (+23) |
| [Gemini Decisions API](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/) | 551 (11-12) | 565 (+14) |
| [Apple has new Mac app coming to make running local AI models easy](https://9to5mac.com/2026/11/10/apple-has-new-mac-app-coming-to-make-running-local-ai-models-easy/) | 550 (11-11) | 563 (+13) |
| [Scion is back and is going to sell a kei truck in America](https://www.theautopian.com/scion-is-back-and-its-going-to-sell-a-freaking-kei-truck-in-america/) | 559 (11-11) | 561 (+2) |
| [Gemini 4 Hydrogen](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/) | 345 (11-12) | 555 (+210) |
| [Tracking Anthropic-discovered vulnerabilities](https://www.vulncheck.com/blog/anthropic-glasswing-november-update) | 457 (11-11) | 459 (+2) |
| [Hyper-realistic sand with WebGL2](https://av.github.io/safe-sand/) | 430 (11-11) | 444 (+14) |
| [Protecting SSH Keys with macOS Secure Enclave](https://gatezh.com/posts/macos-secure-enclave-ssh-keys/) | 396 (11-11) | 401 (+5) |
| ["Humble Bundle just killed most of their security through vibecoding"](https://forums.spacebattles.com/threads/humble-bundle-just-completely-killed-most-of-their-security-through-vibecoding.1346295/) | 349 (11-12) | 400 (+51) |
| [A live tree of systemd jobs on the boot console](https://codeberg.org/wvhulle/bootvine) | 326 (11-12) | 371 (+45) |
| [Critical RCE Vulnerability in Apache HTTP Server](https://www.wiz.io/blog/cve-2026-119618-rce-apache-http-server-vulnerability) | 347 (11-12) | 367 (+20) |
| [Writing correct software is hard and math alone won’t help us (2016)](https://pron.github.io/posts/correctness-and-complexity) | 323 (11-12) | 365 (+42) |
| [Using voltage glitching to unleash the A100 in my mining card](https://blog.kate.land/posts/using-voltage-glitching-to-unlock-the-a100/) | 335 (11-11) | 343 (+8) |
| [Lock Your GitHub Actions](https://hugovk.dev/blog/2026/lock-github-actions/) | 323 (11-12) | 333 (+10) |
| [Nintendo Takes Down Emulators and Firmware in Massive GitHub DMCA Sweep](https://www.ign.com/articles/nintendo-takes-down-switch-emulators-and-mod-chip-firmware-in-massive-github-dmca-sweep) | 201 (11-12) | 317 (+116) |
| [Abandoned Quake 4 expansion finished by modders and now playable](https://www.moddb.com/mods/openq4/downloads/openq4-0141-windows-x64) | 206 (11-12) | 305 (+99) |
| [Show HN: Yogurt – Free, private, open-source alternative to Granola](https://github.com/FrigadeHQ/yogurt) | 282 (11-12) | 296 (+14) |
| [Claude Whiteboards, Claude Sheets, and Claude Data](https://claude.com/resources/articles/sheets-whiteboards-data) | 289 (11-11) | 296 (+7) |
| [What constant surveillance is doing to children and parents](https://www.theatlantic.com/magazine/2026/12/location-tracking-apps-parental-surveillance/689031/) | 277 (11-11) | 279 (+2) |
| [AMD's Zen 6 Family: Feeding the Beast](https://chipsandcheese.com/p/amds-zen-6-family-feeding-the-beast) | 271 (11-11) | 273 (+2) |
| [Show HN: I recreated Papers Please but you're deciding which YC startups to fund](https://termsheetplease.com/) | 236 (11-12) | 241 (+5) |
| [Faster Retrieval for Better, More Efficient RAG](https://machinelearning.apple.com/research/faster-retrieval) | 232 (11-12) | 237 (+5) |
| [Atuin Threads: All your agent sessions on every machine](https://blog.atuin.sh/threads-agent-sessions/) | 231 (11-12) | 235 (+4) |
| [We need more goat sacrifices](https://www.experimental-history.com/p/we-need-more-goat-sacrifices) | 215 (11-12) | 221 (+6) |
| [The Web Is More Than Enough](https://ftrain.com/aboard-the-web-is-more-than-enough) | 213 (11-11) | 214 (+1) |


## 스레드라인

세 갈래 실이 있고, 첫 번째 것을 기억해야 한다.

**같은 날 클라우드 두 개가 쓰러졌고, 아무도 이유를 말하지 못했다.** 마이크로소프트의 익스체인지 온라인은 목요일 정오에 죽어서 스물여섯 시간 뒤에도 정상이 아니었다. 첫 복구 시도는 공개적으로 포기됐고, 설명인 "트래픽 관리 불균형"은 원인이 아니라 증상을 부른다. 앤스로픽의 인증은 금요일에 두 시간 깨졌고 한 줄짜리 사고 보고를 냈다. 피해를 본 조직은 모두 이중화에 돈을 냈고, 받은 것은 한 벤더 경계 안의 이중화였다. 같은 실이 여전히 작동하는 것들에 대한 스토리를 꿰뚫는다. 스물아홉 살의 IceWM, 데몬 없는 단일 바이너리. 365일 작동한다는 리브레오피스의 한 줄 농담. 선풍기를 2바이트 명령으로 돌릴 수 있는데도 그 명령이, 앱이 존재해야 한다는 것 말고는 이유 없이, 인터넷 어딘가의 서버를 거치는 코웨이 공기청정기. 의존성 열한 개가 붙은 소프트웨어는 의존성이 없는 소프트웨어보다 더 흥미롭고 덜 신뢰할 만하며, 업계는 이걸 비싼 방식으로 계속 재발견한다.

**주장이 온종일 증거를 앞질렀고, 흥미로운 건 누가 검증했느냐다.** 아모데이는 IPO 로드쇼에서 10년 안의 치료제를 약속했다. 일라이 릴리의 데이브 릭스는 생물학의 지도가 백지이고 무작위 인간 증명이 가장 긴 장대라고 답했다. 임상 비용을 대는 사람이 돈을 모으는 사람을 바로잡은 것이다. Edge0는 메모리 하한이 36GB 기계이고 포맷이 한 벤더의 실리콘인 145B "노트북" 모델을 내놨다. 언임플로이먼트 랩스는 중국 랩이 수출 통제 대상 GPU에서 가중치를 초기화했다는 포렌식을 공개하고, 그리고는 칩이 어디 있었는지, 위법이 있었는지는 확립되지 않는다고 정확히 덧붙였다. 눈여겨볼 것은 그 정직함이다. 그리고 1,009페이지 속기 공책이 이틀 만에 정리 수백 개를 주장하는 AI 요약을 얻었다. 그건 수학에 대한 증명이 아니라 텍스트에 대한 가설이고, 가벨스베르거를 읽을 수 있는 몇 안 되는 사람이 결판내야 한다.

**엔비디아 스토리는 엔비디아에 관한 것이기를 그쳤다.** 사임은 목요일 뉴스였다. 금요일 뉴스는 직원 청원, 세 번째 관계를 다룬 로이터 보도, 그리고 메가스피드 수사에 수퍼마이크로가 협조하도록 미국에 두 번 도움을 요청했지만 "제한적인 정보나 지원"을 받았다는 싱가포르 정부 성명이다. 4조 달러짜리 회사가 불륜으로 창업자를 잃고, 이제 워싱턴에서 아무도 공개적으로 답하고 싶어 하지 않는 수출 집행 질문의 무대가 됐다. 프런트페이지는 그걸 다뤘고, 1937년 유리 건판에 찍힌 왜소행성 후보도, 유타 주전자 50주년도, 81세 SF 작가의 부커상 수상도 다뤘다. 그중 둘은 50년 뒤에도 중요할 것이다. 어느 쪽인지 맞혀 보라.
