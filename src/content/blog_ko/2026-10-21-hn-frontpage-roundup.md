---
title: "해커 뉴스 프런트 페이지 라운드업 — 2026년 10월 21일"
pubDate: 2026-10-21
description: "61개 스토리가 200포인트를 넘었고 그중 25개가 새것이다. 오늘의 페이지는 네 가지 방식으로 서술된 하나의 이야기다: 웹의 절반이 돌리는 PHP의 두 CVE — 모델이 찾았고, 공개는 늦었고, 패치는 혼란 속이었다."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
lang: "ko"
---

오늘 200포인트를 넘긴 스토리는 61개다. 36개는 어제 페이지에 이미 있었고, 25개가 새것이다. 새것들은 이번 달 어느 날보다도 더 좁게 몰려 있다. 한 이야기가 프런트 페이지를 통째로 삼켰기 때문이다: PHP.

같은 두 CVE에 대한 제출이 상위 60개 안에 여섯 건이나 있다 — 보안 공지, 릴리스 태그, Wiz의 분석글, PHP 재단의 사후 분석, Tell HN 스레드, 그리고 자기 사이트가 PHP로 돌아서 오프라인된 네덜란드 국가 사이버보안센터까지. 여기에 개인키가 숫자 4로 밝혀진 CA를 더하면, 오늘의 실제 주제는 지루하고 낡았다: **인터넷은 공유 의존성의 층층이고, 그 맨 밑을 유지하는 사람들은 자원봉사자 서너 명과 연간 보조금이다.**

## PHP: 두 개의 CVE, 웹의 70퍼센트, 그리고 아주 나쁜 화요일 — 1,485 points

**1,485 points** · 647 comments · [php.net](https://www.php.net/archive/2026.php#2026-10-21-5) · [HN discussion](https://news.ycombinator.com/item?id=50172041)

PHP 핵심 엔진에서 인증 없이 원격 코드를 실행할 수 있는 버그 두 개. 오늘 공개됐고 8.5.12, 8.4.27, 8.3.36, 8.2.35에서 고쳐졌다.

**CVE-2026-109618**, OOM 손상 경유 RCE: 요청이 하필 잘못된 순간에 `memory_limit`에 부딪히면 PHP가 부분적으로만 초기화된 내부 요청 데이터를 남기고, 나중에 그걸 유효한 것으로 취급한다. `mod_php`를 쓰는 Apache에서는 *애플리케이션 코드가 실행되기 전에* 인증 없는 요청만으로 트리거된다 — 기본 설정으로 전체 RCE가 시연됐다. **CVE-2026-109619**, 낡은 전역 상태 경유 RCE: 잘못된 순간의 치명적 오류가 이전 요청의 메모리를 가리키는 내부 상태를 남기고, 같은 워커가 처리하는 다음 요청이 그걸 쓸 수 있다. 둘 다 메모리 관리와 오류 처리에 있다. 즉 모든 요청이 거치는 코드에 있다.

공지에 담긴 완화 조언은 대안이 얼마나 형편없는지를 보여주는 문서로서 읽을 가치가 있다: `memory_limit=-1`을 "가능하면 애플리케이션이 덮어쓸 수 없는 방식으로" 설정하고, `post_max_size`를 8M로 조이고, `session.upload_progress.enabled=0`으로 두고 *모든* 워커를 재시작하고, 8.5에서는 `fatal_error_backtraces=0`으로 두고, `ini_set()`이나 `.user.ini`에 기대지 말 것 — 너무 늦게 적용되니까. PHP 8.1 이하는 업스트림 수정이 없다. 보안팀이 직접 최소 소스 백포트를 `PHP-7.4-CVE-2026-109618-109619`, `PHP-8.0-…`, `PHP-8.1-…` 브랜치에 올려서, LTS 벤더가 없는 사람들이 알아서 빌드할 수 있게 했다.

그다음 공개 과정이 무너졌고, 이게 647개 댓글값을 하는 부분이다. CVE ID는 10월 20일 15:00 UTC쯤 포럼과 소셜 미디어로 샜다. 릴리스 시각도 틀렸고 CVSS도 10.0으로 틀렸다(실제: 9.2). PHP는 사전 공지를 19:30 UTC로 앞당기고 릴리스를 10월 22일에서 10월 21일로 옮겼다. 신고 기관 중 하나인 Calif는 실수로 개념증명 영상을 공개했다. 그리고 오늘 07:41 UTC, 조율된 공개보다 여섯 시간도 더 전에, **Chainguard가 수정이 들어간 빌드 이미지를 단독으로 공개했다** — 공격자 누구든 모두가 기다리는 동안 바이너리로 패치를 뜯어볼 수 있었다는 뜻이다.

스레드가 보여주는 건 관리되지 않은 공개가 실제로 치르는 비용이다. 댓글러들은 DigiD, RTL, 네덜란드 의회가 사이트를 내렸다고 보고한다. 벨기에 CCB도 어두워졌고, WP Engine은 패치 나온 지 두 시간 반이 지나도 아직 8.4.26이었다. 어떤 이는 개인 사이트의 데이터베이스를 덤프하고 전부 꺼버렸다고 한다. 검증되지 않은 개별 주장으로 받아들여라. 구조적인 요점은 그대로다: 여섯 시간 동안 수정본을 가진 사람은 diff를 읽을 수 있는 사람뿐이었고, 못 가진 사람은 Drupal을 돌리는 사람뿐이었다.

## 버그를 찾은 건 모델이었다 — 416 points

**416 points** · 160 comments · [wiz.io](https://www.wiz.io/blog/php2shell-php-rce) · [HN discussion](https://news.ycombinator.com/item?id=50180836)

Wiz의 분석글이 기술적인 쪽이고, 그 글 자체의 프레이밍이 곧 이야기다: 결함은 "10년 넘게" 존재했고, 익스플로잇 가능성을 입증하는 데는 "인간 연구자가 실무적으로 달성할 수 있는 한계에 가까운, 유례없이 복잡한 단계의 연쇄"가 필요했다. 프런티어 모델이 그 장벽을 무너뜨렸다. Wiz는 Wiz Atlas, Gemini 4 Argon, GPT-5.6 Sol을 이름으로 언급하며 Argon이 발견, 익스플로잇 개발, 공격 탐지, 패치 검증에 기여했다고 밝힌다. 그들의 PoC는 WordPress, Drupal, Joomla를 상대로 돌았다. 5.4까지 거슬러 올라가는 모든 PHP 릴리스가 최소한 한 가지 이슈의 영향을 받는다.

스레드의 출처 논쟁이 오늘 페이지에서 가장 날카롭다. 대략 이런 연쇄다: Calif가(Patch the Planet 프로그램 아래 감사를 하면서) 8월 11일 소비자용 모델로 무조건적 RCE를 신고했고, OpenAI가 같은 날 같은 근본 원인을 독립적으로 신고했고, Wiz가 8월 24일 뒤따랐다. 댓글러들은 누가 누구를 앞질렀는지, 한 회사의 공개 PoC 작업이 다른 회사의 학습 데이터에 들어갔는지 따진다. 외부에서 결론 낼 수 없는 문제고, 일반화 가능한 발견만큼 중요하지도 않다: **10년 된 메모리 안전 버그를 실제 동작하는 익스플로잇으로 바꾸는 비용이 방금 한 자릿수 배로 떨어졌고, 모두에게 동시에 떨어졌다.**

인프라를 운영한다면 교훈은 "PHP 나쁘다"가 아니다. 전문가가 3주를 써야 했기 때문에 실무적으로 익스플로잇 불가능했던 부류의 버그가, 이제 옆 화면에 모델 하나 띄운 전문가가 3시간을 쓰면 되기 때문에 실무적으로 익스플로잇 가능해졌다는 것이다. 당신의 패치 SLA는 옛 숫자에 맞춰져 있었다.

## PHP 재단은 지연이 구조적 실패였다고 말한다 — 418 points

**418 points** · 204 comments · [thephp.foundation](https://thephp.foundation/blog/2026/10/21/todays-php-security-release-and-how-were-strengthening-php-security/) · [HN discussion](https://news.ycombinator.com/item?id=50182987)

오늘 공개된 문서 중 가장 유용하고, 재단 블로그 글이라서 아무도 읽지 않을 문서다. 2024년 PHP는 몇 년 만에 처음으로 외부 보안 감사를 받았다 — Sovereign Tech Agency가 자금을 대고, OSTIF가 주선하고, Quarkslab이 수행했다. Quarkslab 지적 사항 중 하나를 고치던 중, 재단과 계약한 코어 개발자가 OOM 버그의 첫 징후를 발견했다. 2024년에 잠재적 익스플로잇이 이론화됐지만 구체적 벡터는 발견되지 않아 우선순위가 밀렸다.

고치는 일은 각각 뭔가를 깨뜨리는 접근들 중에서 고르는 일이었다: 하위 호환성 파괴, 새로운 서비스 거부 가능성, 아니면 수많은 서드파티 확장의 변경. 보안팀은 합의로 움직이므로 선택할 수 없었고, "수정 작업은 몇 달에 걸쳐 멈췄다 재개되기를 반복했다." 재단 자신의 문장: **"우리는 아니라고 하지 않겠다: 그 지연은 보안팀의 의사결정 과정과 자원 부족 양쪽에서 비롯된 구조적 실패였다."**

그 뒤 바뀐 것들: 2026년 5월 에코시스템 보안팀, "상주 AI 보안 엔지니어", 7월과 9월에 유급 보안 인력 두 명 추가, Claude Mythos를 쓴 Alpha-Omega 스캔, 신고 검증용 OpenAI의 Daybreak Red, 새니타이저 빌드와 플랫폼별 재현 환경, 7월 30일부터 시작된 Calif의 외부 감사와 Trail of Bits의 또 다른 감사. 신고는 급증했다 — 7월 1일 이후 CVE 15건, 그리고 무효이거나 중복이거나 재현 불가능했던 신고 100건 이상. "메인테이너가 과부하다"는 말이 예산 항목에서 어떻게 보이는지 궁금했다면 이게 그 답이다: 웹의 70퍼센트에 영향을 주는 메모리 관리 취약점이 2년을 기다린 이유는, 고칠 방법을 골라야 했던 팀이 합의에 이르지 못했고 동점을 깰 사람을 고용할 돈이 없었기 때문이다.

## Show HN: 심시티, 그런데 인허가가 필요하다 — 895 points

**895 points** · 406 comments · [permit.petercai.com](https://permit.petercai.com/) · [HN discussion](https://news.ycombinator.com/item?id=50170593)

"Permit Pending"은 도시 시뮬레이션인데, 당신은 신이 아니라 선출된 시장이고, 모든 아파트 블록이 청문회, 이의신청, 소송, 항소를 거친다. 홍보 문구의 데모 사례가 곧 전체 논지다: 1개월, 임대료 상승, 3개월, 12층으로 용도지역 변경, 4개월, 주차와 "동네 성격" 문제로 이웃들이 조직화, 7개월, 층고를 주차와 맞바꿔 6층, 8개월, 축소된 사업이 수지가 안 맞아 개발자가 세제 혜택을 요구, 9개월, 주거 옹호자들이 저렴 주택 수를 문제 삼음, 11개월, 항소와 소송, 42개월, 임대료는 여전히 오르고 모두가 당신을 탓함, 48개월, 선거.

이건 게임 메커니즘이 아니라 주택이 왜 지어지지 않는지에 대한 압축 모델이고, 몇 달 만에 프런트 페이지에 오른 가장 정직한 시민 소프트웨어다. 밑에 깔린 시뮬레이션에는 나이, 소득, 주거지가 있는 주민, 고용하고 성장하고 떠나는 사업체, 7석 의회, 숫자보다 큰 힘을 가진 투표율 높은 집단, 그리고 당신의 최소 주차 대수를 보도하는 지역 신문이 있다.

댓글은 대부분 *더* 많은 정밀도를 요구하는 사람들이다 — 마을 인구의 250퍼센트가 서명한 청원, 존재하지 않는 교차로의 유령 정체. 어떤 이는 이게 2주 사이 두 번째 "공중이 발언권을 가져서 실생활이 심시티보다 나쁘다" 프로젝트라고 지적한다. 몇몇은 WebGL 크래시와 1분 만에 모든 버튼을 쏟아내는 튜토리얼을 보고한다. 다 타당하다. 895포인트의 사람들이 용도지역 청문회 게임을 하고 싶어 한다는 사실이 흥미로운 부분이다.

## 신뢰의 8비트 — 730 points

**730 points** · 357 comments · [scotthelme.co.uk](https://scotthelme.co.uk/eight-bits-of-trust-emudhras-ca-keys-cracked-in-milliseconds/) · [HN discussion](https://news.ycombinator.com/item?id=50177916)

어제 라운드업은 eMudhra 중간 CA 침해를 뉴스 사건으로 다뤘다. 오늘 Scott Helme이 해설을 올렸고, 그게 뉴스보다 낫다.

eMudhra의 P-384 개인키 중 하나는 정수 4다. 나머지는 56, 115, 155, 156, 230, 66, 237이다. 올바른 P-384 키는 무작위 384비트 수 — 대략 10¹¹⁵ 가지다. eMudhra의 키는 0으로 채운 47바이트 뒤에 1바이트다. 무차별 대입은 `1×G`, `2×G`, `3×G`를 계산해 255에서 멈추면 된다. Helme은 Mozilla가 발표문에 첨부한 인증서 16장을 전부 받아 노트북에서 1초 안에 모든 키를 복구했다.

중간 CA 8개: TLS 발급 CA 6개(DV, OV, EV, 각 2세대)와 코드 서명 CA 2개, 전부 2025년 4월에 발급됐고 2025년 5월에 Sectigo의 `AAA Certificate Services` 루트로 교차 서명됐다. 인증서 자체에서 잘못된 점은 보이지 않는다 — `d = 4`에서 유도한 공개키도 곡선 위의 완벽히 유효한 점이고 모든 구조 검사를 통과한다. 알 방법은 시도해보는 것뿐이다.

결과는 "누가 키를 훔쳤다"가 아니라 "그 키는 애초에 비밀이 아니었다"다. 지난 17개월 중 어느 시점에든 그 인증서를 본 사람이라면 누구나 밀리초 단위로 복구할 수 있었고, 누군가 그랬는지는 알 방법이 없다. Chrome의 안심시키는 말 — CT 로그상 이 CA에 연결된 TLS 인증서가 없으니 위조 인증서가 기본적으로 신뢰되지는 않는다 — 는 사실이고 협소하다. CT는 잘못된 발급을 탐지하지, 막지 않는다. 그리고 상당한 소프트웨어가 CT를 아예 확인하지 않는다.

훔쳐야 할 디테일은 발견 방법이다: 최초 신고자인 Wayne은 Google의 `paranoid_crypto`를 CCADB 코퍼스에 그대로 돌렸고 즉시 걸렸다. "누군가 이미 확인했겠지"라는 10년이 린터 하나로 끝났다.

## 1.5°C 목표는 공식적으로 사라졌다 — 594 points

**594 points** · 725 comments · [unric.org](https://unric.org/en/unep-emissions-gap-report-2026-1-5-degree-overshoot/) · [HN discussion](https://news.ycombinator.com/item?id=50177911)

UNEP의 2026 배출 격차 보고서 제목은 "돌아올 수 없는 지점"이고, 중요한 문장은 완곡하지 않다: **"1.5°C 배출 격차를 '초과 없이 또는 제한적 초과'로 메울 기회는 사라졌다."** 새 목표는 2°C 아래로 머물다가 세기말까지 1.5로 되돌아오는 것이다.

산수는 가차없다. 2025년 수준 대비 2030년까지 18퍼센트, 2035년까지 45퍼센트, 2040년까지 69퍼센트 감축해야 한다. 현재 NDC가 전부 완전히 이행되면 2030년 5~8퍼센트, 2035년 11~15퍼센트다. 대략 10년 내내 매년 6퍼센트씩 — 어느 대형 경제도 유지한 적 없는 속도다.

보고서의 정치적 장부는 물리보다 흥미롭다. G20 회원국 중 무조건적 2030 목표를 달성할 것으로 평가된 나라는 중국, 인도, 인도네시아, 러시아, 남아프리카공화국, 튀르키예 여섯 곳뿐이고, EU 평가는 "결론 없음"이며, 새로운 2035 목표가 없는 나라는 아르헨티나, 사우디아라비아, 미국뿐이다. 그 목록을 두 번 읽어라. 궤도에 있는 나라들은 기후 공약이 아니라 산업 정책과 전력망 확충이 배출 경로를 결정하는 나라들이다.

스레드의 주된 수는 원자력 논쟁이고, 10년 된 이야기이며 여전히 결론이 없다. 두 번째로 흔한 수는 정직한 쪽이다: 초과했다가 되돌아와도 히스테리시스 때문에 같은 시스템은 돌아오지 않는다. 빙상은 정책 일정에 맞춰 다시 형성되지 않는다.

## CSS의 미래 — 573 points

**573 points** · 255 comments · [joshwcomeau.com](https://www.joshwcomeau.com/css/interop-2027/) · [HN discussion](https://news.ycombinator.com/item?id=50175070)

Josh Comeau의 Interop 2027 과정을 통해 CSS에 들어오는 것들 투어: 스타일시트 안의 진짜 함수를 위한 `@function`, 조건부 로직, 그리고 오래 약속됐던 레이아웃·스타일링 프리미티브 더미. 그의 프레이밍은 이렇다: CSS는 15년 동안 모두가 우회해서 쓰는 언어였고, 이제 조용히 좋아지고 있다.

댓글 분포가 흥미로운 데이터다. 스레드 절반은 바닐라 HTML/CSS/JS를 쓰는 사람들이며, 지금이 가장 좋은 때인데 프레임워크만 쓰는 동료에게 그걸 설명할 방법이 없다고 말한다. 나머지 절반은 이렇게 오랜 세월이 지나도 *여전히* 깨져 있는 것들 목록이다: 스타일도 위치도 못 정하는 네이티브 툴팁, 터치에서 제대로 동작하지 않는 날짜 선택기, 플랫폼 키보드를 소환하거나 감지할 신뢰할 방법이 없음, 여전히 커스텀 컴포넌트와 자바스크립트가 필요한 폼 컨트롤. 어떤 댓글러의 요약은 잔인하고 타당하다: 입력 프리미티브는 미완인 채로 "쓸모없는 눈요기를 위한 무한한 복잡성".

둘 다 맞고, 이유는 구조적이다. `@function` 추가는 가산적이다 — 웹을 깨뜨릴 수 없다. 날짜 입력을 고치는 일은 세 플랫폼 렌더러와 모든 레거시 기대치를 맞추는 일이라, 그래서 안 된다. CSS의 진화는 가장 필요한 것에 의해, 안전하게 추가할 수 있는 것에 의해 결정된다.

## 내 아들에게 무엇을 가르칠까 — 464 points

**464 points** · 611 comments · [stevekrouse.com](https://stevekrouse.com/ends) · [HN discussion](https://news.ycombinator.com/item?id=50169707)

Steve Krouse는 곧 아이를 갖고, 그의 가장 경제적으로 가치 있는 기술은 프로그래밍이며, 방금 Neil Postman의 *The End of Education*(1995)을 읽었다. 이 에세이는 이 모든 게 무엇을 위한 것인지에 대해 페이지에서 가장 좋은 글이고, 교육과정은 제시하지 않는다.

논지는 린디 효과를 거쳐 간다. 하버드, 예일, 프린스턴은 성직자를 길러내려 세워졌다. 근거는 죽었고 제도는 남았다. 학교는 라디오, 영화, 텔레비전, 인터넷을 견뎠고, 그 이유는 언제나 명시된 목적이 아니다 — 기금, 명성, 그리고 아이들을 놓아둘 곳이다. Krouse는 2013년에 MOOC가 교육을 뒤엎을 거라고 예측했고 틀렸다고, 학교의 죽음을 선언하는 모든 기술자는 먼저 틀린 사람들의 긴 줄에 합류한다고 솔직히 말한다.

그다음의 전환이야말로 남길 만하다: 교육의 목적은 *이동*하고, 그가 도달한 살아남는 목적은 "자원을 잘 쓰는" 것 — 어떤 자원이 있든 그것으로 문제를 찾아 해결하는 능력이다. 그리고 나서 그는 이것이 바로 자신이 지금 AI에서 완성되는 것을 보는 특성임을 알아차리고, 그 사실이 정의를 어떻게 바꾸는지 감당해야 한다. 그는 해결하지 않는다. 611개 댓글이 해결하려 애쓴다.

## No Kings 삭제 사건과 메가폰 임대 문제 — 459 points

**459 points** · 432 comments · [techdirt.com](https://www.techdirt.com/2026/10/20/accident-or-not-the-no-kings-takedown-is-why-you-shouldnt-rent-your-megaphone-from-zuck/) · [HN discussion](https://news.ycombinator.com/item?id=50181137)

주말 사이 No Kings 인스타그램 계정이 한 시간가량 정지됐고, 관리자 접근 권한은 몇 시간 더 잠겼다. Meta는 사과했다. Will Robinson과 Tim Chambers를 따라가는 Mike Masnick의 논지는, 의도적이었는지가 중요하지 않다는 것이다: **문제는 그게 가능했다는 것이다.**

Masnick은 Meta의 실제 해명도 전한다. 음모보다 훨씬 평범하다: 네트워크 보안이 "프로필, 게시물, 해시태그를 읽는 Claude 도구"를 탐지했고, 10월 17일 볼륨이 격렬한 버스트로 약 4배 올랐으며, 이는 사람의 브라우징보다 자동화 봇 트래픽에 맞는 패턴이었다. 전국적 시위를 준비하며 누군가 AI 비서로 언급을 모니터링하는 계정은 정확히 그렇게 보일 것이다. 그는 또한 그 규모의 조정은 인간적으로 불가능하므로 "Meta가 이걸 못한다"는 스캔들이 아니라 제약이라고 지적한다.

그가 다음으로 가는 지점에서 스레드가 갈린다. Masnick의 답은 탈중앙화다 — 계정을 소유하고, 콘텐츠와 연결을 온전히 유지한 채 떠날 출구를 확보하고, "플랫폼이 아니라 프로토콜"을 실천적 대응으로 삼으라. 댓글의 반론은 실무에서 언제나 이기는 쪽이다: 사람들은 Meta에 있고, 시위를 조직하려면 그들이 있는 곳에서 닿아야 하며, 아무도 팔로우하지 않는 Mastodon 계정은 메가폰이 아니다. 둘 다 맞다. 제시되는 유일한 종합은 불편한 것이다 — 백업을 만들고, 플랫폼을 쓰고, 당신의 도달 범위가 임대된 것임을 받아들여라.

## AfD의 이메일 421,179통 — 383 points

**383 points** · 550 comments · [heistberlin.com](https://www.heistberlin.com/news/afd-leak-what-421-179-hacked-emails-show-about-the-german-far-right/) · [HN discussion](https://news.ycombinator.com/item?id=50163502)

281 GB, AfD 내부 당 이메일 421,179통. 월요일에 온라인에 공개됐고 노동자 공동소유 베를린 매체 HEIST가 보도했다. 열리는 발췌: 인종 비하 표현, 유대인 세계 지배라는 반유대주의 이론, 난민을 핸드백과 부츠로 만들자는 농담, 국경에서 난민을 사살해야 하는지에 대한 논의, 만자문과 "Heil Hitler"가 있는 크리스마스 카드, "Heil und Sieg"로 서명된 스레드.

HEIST는 21퍼센트 지점에서 페이월을 걸기 때문에 아카이브 자체는 이메일 게이트 뒤에 있다. 550개 댓글은 유출에 대해 논쟁할 뿐 읽지는 않는다. 뉴스 가치가 있는 부분은 극우 정당의 내부 이메일이 인종차별적이라는 게 아니라, 421,179통이면 당내 파벌 지도를 그리기에 충분한 양이고 독일 언론이 이제 그걸 갖고 있다는 것이다. 해킹에서 나온 자료로 만든 책임 저널리즘, 대부분의 독자가 열 수 없는 페이월 사이트에서. 이게 유출의 현대적 형태다: 완전한 증거 기록, 배포는 없음.

## 구글이 TPU용 PyTorch 백엔드를 오픈소스로 공개 — 375 points

**375 points** · 86 comments · [github.com/google-pytorch](https://github.com/google-pytorch/torch_tpu) · [HN discussion](https://news.ycombinator.com/item?id=50169053)

TorchTPU는 TPU용 네이티브 PyTorch 백엔드다: TPU 연산을 위한 커스텀 ATen 커널, XLA 계산 위의 컴파일 캐시, 데이터·텐서 병렬화, `torch.compile()` 통합, 그리고 Llama, Qwen, ResNet, DLRM, minGPT, UNet용 실행 가능 예제. `pip install torch_tpu==0.2.0`, Python 3.11 이상, v6e TPU VM용으로 만든 노트북.

전략적 해석은 저절로 나오고 댓글은 세 개 만에 도달한다: 구글의 진짜 해자는 삽이고, 자기 삽에서 잘 도는 프레임워크마다 삽을 더 판다. PyTorch 생태계가 모델이 있는 곳이고, TPU를 일급 PyTorch 타깃으로 만드는 게 관성만으로 NVIDIA에 워크로드를 뺏기지 않는 방법이다. 어떤 이는 AWS가 2년 전 `torch-neuronx`로 같은 걸 했다고 지적하는데, 그게 맞는 맥락이다 — 이제 이건 차별화 요소가 아니라 기본 요건이다.

스레드에서 제기됐고 답이 없는 진짜 흥미로운 질문: 해자가 모델도 서빙 계층도 아니라면, 그냥 하드웨어인가? 그리고 답이 그렇다면 프런티어 랩들은 어떻게 되는가.

## Muse는 당신이 공유한 모든 것을 노출한다 — 373 points

**373 points** · 157 comments · [arstechnica.com](https://arstechnica.com/security/2026/10/meta-muse-exposes-users-personal-and-business-secrets-when-they-share-conversations/) · [HN discussion](https://news.ycombinator.com/item?id=50174687)

보안 회사 Claroc이 수동적 DNS 질의 하나로 **Muse 공유 링크 6,800개**를 열거했다. 버그는 설계 결정이다: 모든 Muse 공유 페이지가 `<conversation-title>-<8 hex chars>.cf.metaaiusercontent.com`에 산다. 대화 제목을 *서브도메인*에 넣으면 공개 DNS에 기록되고, 수동적 DNS 데이터베이스는 검색 가능하고 상업적이다. Meta는 공유 기능을 일시 중단했다.

그들이 연 수백 개 링크에 뭐가 있었나: 프런티어 AI 랩과의 기밀 임원 서치 통화를 준비하는 후보자의 메모 — 내부 연락처와 미팅 시간까지 명시. CEO용으로 표시된 한 마케팅 회사의 내부 매출 검토. 금액이 적힌 소상공인 대출 신청서. 은행 사기 경보와 부분 계좌번호가 있는 할 일 목록. 주소 두 개와 정확한 수익률이 있는 부동산 투자자의 성과 보고서. 한 직장의 연간 직원 휴가 달력. Claroc은 10월 8일 Meta의 버그 바운티로 신고했고 Ars가 묻기 전까지 답이 없었다.

여기서 일반화할 수 있는 게 두 가지다. 무작위 성분은 16진수 8자리 — 32비트 공간인데, 그건 비밀이 아니라 과속방지턱이다 — 그리고 서브도메인의 제목이 그걸 완전히 무력화한다. 그리고 8비트 엔트로피 숫자가 낯익어야 한다: 링크와 낯선 사람 사이에 있는 유일한 것이 열거를 생각하지 않은 누군가가 고른 바이트 수였던 오늘의 두 번째 이야기다.

## 16년이 지나도 멕시코만 심해는 회복되지 않았다 — 316 points

**316 points** · 184 comments · [e360.yale.edu](https://e360.yale.edu/digest/deepwater-horizon-deep-sea-recovery) · [HN discussion](https://news.ycombinator.com/item?id=50168357)

Deepwater Horizon이 400만 배럴 이상을 쏟아낸 지 16년 후 멕시코만 심해에 대한 PNAS 연구. 2010년 이후 첫 몇 해 동안 문어, 오징어, 크릴, 새우, 랜턴피시 개체수가 최소 60퍼센트 감소했고, 걸프 전역의 넓은 구역에서 음향 조사와 수천 번의 그물 예인으로 측정됐다. 수심 600피트에서 2마일 층의 생명은 되돌아오지 않았다.

저자들은 유출을 원인이라고 단정하지 않는다. 그들은 "가장 간결한 설명"이라고 부르는데, 상관관계가 압도적이고 반사실이 불가능할 때 신중한 논문이 쓰는 표현이다. 뒷받침 증거: 오징어와 문어 살, 심해 어란에서 발견된 석유 유래 화합물 — 생식과 발달을 손상시킬 수 있다. 그리고 감소하는 유전적 다양성 — 미래 적응의 상한을 정하기 때문에 중요하다.

인용할 만한 댓글은 분산제에 관한 것이다. 약 200만 갤런이 유정 머리에 주입됐고, 그 작업의 목적은 기름을 해변에 닿게 하는 대신 가라앉히는 것이었다 — 그리고 그렇게 했다. "눈에 안 보이게" 된 지 17년, 같은 물질이 해저에 있고, 연구는 거기서 그것을 측정하고 있다.

## LiteLLM 1.107.0에는 자격증명 탈취기가 들어 있었다 — 304 points

**304 points** · 110 comments · [safedep.io](https://safedep.io/litellm-pypi-compromise-credential-stealer-backdoor/) · [HN discussion](https://news.ycombinator.com/item?id=50181114)

수많은 AI 인프라 의존성 트리에 들어 있는 패키지 LiteLLM 1.107.0이 일곱 개 휠 전부에 자격증명 탈취기와 원격 코드 실행 백도어를 넣어 배포했다. `site-packages`의 파일 세 개. 그중 둘은 *모든* 파이썬 프로세스 시작 시 로드된다. `litellm`을 임포트한 적 없는 프로세스까지 포함해서.

`cook.pth`가 `cook.py`를 임포트하고, 그게 SSH 키, 클라우드 자격증명, CI/CD 시크릿, AI 도구 토큰, 브라우저 비밀번호, LiteLLM 프록시 데이터베이스에 있는 LLM 제공자 키를 긁어 모아 암호화하고 `www.litellm[.]dev`로 전송한다. `sitecustomize.py`는 데몬을 띄워 매시간 GitHub 파일에서 서버 주소를 읽고, 탈취기를 다시 돌리고, 그 서버가 주는 것을 다운로드해 실행한다.

기억할 것은 메커니즘이다: sdist의 `pyproject.toml`에 `[tool.maturin]` 아래 한 줄이 더 있다 — `data = "cook"` — 이게 `cook/` 폴더를 빌드된 휠에 복사한다. sdist는 그 폴더를 빼므로 소스에서 보이는 유일한 흔적은 한 줄이고, `BerriAI/litellm`의 어떤 공개 커밋에도 그 줄은 없다. 휠 `RECORD`에 세 파일이 적혀 있다. 아무도 `RECORD`를 읽지 않는다. 1.106.2와 1.107.0 릴리스 후보 둘 다 깨끗하고, PyPI는 해당 릴리스를 yank했다.

이 패키지의 두 번째 침해이고, 댓글러들은 다소 지친 어조로 그 점을 짚는다. 재사용 가능한 교훈은 LiteLLM에 관한 게 아니다: 휠 내용과 sdist 내용은 diff가 절대 보여주지 않는 방식으로 다를 수 있고, `.pth` 파일은 인터프리터 시작 시 실행되며, "버전 고정하고 소스 읽었다"는 건 산출물이 남의 CI에서 빌드될 때 검증 이야기가 되지 못한다는 것. 새 릴리스에 24시간 쿨다운 — 스레드에서 제안됐고 일부 생태계에서는 이미 기본값 — 이면 이건 완전히 막혔을 것이다.

## DuckDB 2.0: 이제 서버다 — 302 points

**302 points** · 32 comments · [duckdb.org](https://duckdb.org/2026/10/21/announcing-duckdb-200) · [HN discussion](https://news.ycombinator.com/item?id=50181136)

DuckDB 2.0.0 LTS, 코드명 "Cinnamon Teal", 1.5 이후 커밋 약 20,000개, 최소 2027년 10월까지 지원. 헤드라인 기능: 다듬어진 Quack 프로토콜, Parquet과 CSV용 비동기 I/O, 일급 `VARIANT` 타입, 에이전트 모드, 트리거, 확장 가능한 SQL 파서.

아키텍처 논의를 바꾸는 건 Quack 프로토콜이다. DuckDB는 첫날부터 인프로세스였다. 클라이언트-서버 프로토콜을 넣는다는 건 모든 프로세스에 임베드된 라이브러리가 아니라 작은 분석 서버가 될 수 있다는 뜻이다. 트리거와 `VARIANT`가 실무에서 중요한 나머지 둘이다 — 하나는 DuckDB를 더 웨어하우스처럼 만들고, 다른 하나는 컬럼으로 ETL하는 단계 없이 JSON스러운 반정형 데이터를 다룬다.

실제 숫자가 있는 댓글이 읽을 만하다: 한 사용자는 2.0이 EC2에서 128~192 vCPU까지 코어를 포화시키는데 1.x는 64에서 한계였다고 보고하며, 덕분에 Splink를 10억 레코드, 100억 비교로 확장할 수 있었다고 한다. 나머지는 기뻐하거나 어디에 쓰라는 건지 묻는다. 이게 DuckDB의 영구적인 마케팅 문제다: 훌륭하고 써본 사람은 다 좋아하는데, 대부분의 팀은 여전히 새 엔진을 정당화하지 못한다.

## SlopCodeBench: 엄격 통과율은 여전히 16퍼센트 — 302 points

**302 points** · 119 comments · [github.com/humanlayer](https://github.com/humanlayer/advanced-context-engineering-for-coding-agents/blob/main/benchmarking-new-models-on-slop-code-bench.md) · [HN discussion](https://news.ycombinator.com/item?id=50108717)

Dex Horthy의 10월 업데이트는 프런티어 모델 다섯 개를 전체 SlopCodeBench에 통과시킨다: 문제 36개, 체크포인트 196개, 각 체크포인트가 요구사항을 하나 더하고 이전 체크포인트의 회귀 테스트도 통과해야 한다. 그게 이 벤치마크의 요점이다 — 코딩 에이전트가 자기가 이미 쓴 코드를 깨뜨리지 않고 바꿀 수 있는지를 측정한다. 그게 실제 업무다.

엄격 통과율은 **12.2~16.3퍼센트** — 196개 중 24~32개 체크포인트. Astra XHigh가 758.62달러로 32/196(16.33퍼센트)으로 앞서고, SOL Medium은 245.69달러로 30/196(15.31퍼센트), Astra Medium은 261.05달러로 29/196. 5월에는 gpt-5.5가 14.8퍼센트였다. 더 느슨한 지표인 코어 통과율은 65.8~74.0퍼센트다.

글 제목값을 하는 발견은 **Opus 5.5가 xhigh보다 medium 추론 노력에서 더 잘했다**는 것이다. 완전한 세 쌍 전부에서 xhigh는 medium보다 2.11~4.22배 비쌌다. "더 많은 사고"가 무엇을 사든, 기존 동작을 퇴행시키지 않는 걸 보상하는 벤치마크에서 그건 정확도가 아니다. 안전을 위해 노력을 최대로 두는 모든 팀은 4배를 내고 조금 더 나쁜 결과를 사고 있다.

읽을 때는 늘 그런 단서를 붙여라: 설정당 1회 실행, 저자 직접 실행, 오차 막대 없음. 방향은 올해 발표된 다른 모든 에이전트 벤치마크와 일치한다 — 모델은 코드 쓰기를 더 잘하게 됐고 유지보수는 별로 나아지지 않았다.

## EA가 BioWare를 닫는다 — 288 points

**288 points** · 166 comments · [theverge.com](https://www.theverge.com/games/1015647/ea-is-shutting-down-bioware) · [HN discussion](https://news.ycombinator.com/item?id=50184586)

BioWare가 문을 닫는다. 보도에 따르면 400명 감원이고, 새 Mass Effect가 개발 중이었다. Baldur's Gate, KOTOR, Neverwinter Nights, Mass Effect, Dragon Age: Origins — 전부 한 스튜디오에서, 전부 그 게임들을 만든 사람들이 대부분 떠나기 전에 나왔다.

최고의 댓글은 테세우스의 배다: 닫힌 스튜디오는 그 게임들을 만든 스튜디오가 아니고, 인재는 증발하지 않았다 — Archetype에서 Exodus를 만들고, Stoic에, Beamdog에, Yellow Brick에 있다. 두 번째로 좋은 건 패턴이다: 성공한 스튜디오를 사고, 청산하고, IP만 남긴다. 세 번째는 답 없는 진짜 질문이다 — 사우디 투자 펀드가 EA를 샀고, BioWare는 주류 게임에서 동성 로맨스 아크와 가장 많이 연결된 스튜디오였다. 그 두 사실이 관련 있는지는 외부에서 알 수 없고, 암시하기보다 알 수 없다고 표시해두는 게 맞다.

## 다른 유행병 — 283 points

**283 points** · 223 comments · [thebeliever.net](https://www.thebeliever.net/the-other-epidemic/) · [HN discussion](https://news.ycombinator.com/item?id=50173891)

Brad Phillips가 *The Believer*에서, 19년간 매일 먹은 Klonopin과 토론토 CAMH의 의사가 끊으라고 했을 때 벌어진 일을 쓴다. 3주 만에 끊게 하는 감량 계획을 받았다. 이틀째, 줄어든 용량에서 손이 저리고 땀이 멈추지 않았다. 일주일 안에 운동도, 글쓰기도, 목욕도, 요리도 못 했다. 글은 길고 취재가 탄탄하며, 안심시키는 데 관심이 없다.

오늘 페이지에서 가장 좋은 댓글 스레드이고, 주제가 유행하지 않아서 가장 건너뛰기 쉬운 스레드다. 여러 사람이 벤조디아제핀 금단을 오피오이드 금단보다 범주적으로 더 나쁘다고 묘사한다 — 더 길고, 더 기이하고, 이인증과 "브레인 잽" 같은 좋은 임상적 설명이 없는 증상이 붙는다. 어떤 이는 20년간 Xanax를 먹은 부모가 즉시 중단했다가 응급실 5번, 입원 3번, 1년 만에 겨우 나았다고 한다. 다른 이들은 반대 경험으로 반박한다 — 25년간 브로마제팜을 이따금 먹었지만 의존은 없었다 — 이게 정직한 복잡성이다: 개인 반응은 엄청나게 다르고 당신이 어느 쪽인지 아무도 예측할 수 없다.

규제적 요점이 이 페이지의 다른 모든 것과 연결된다. 이 약들은 수십 년간 안전하다고 마케팅됐다. 실제로 통하는 감량 지침(Ashton Manual, Maudsley 가이드라인)은 존재하지만 표준 진료가 아니고, 환자가 받는 감량 계획은 우연히 만난 의사에 달렸다. 사상자를 낸 문서화·교육 실패이고, 지루하기 때문에 고쳐지지 않는다.

## 랜섬웨어 협상가가 랜섬웨어를 운영했을지도 모른다 — 261 points

**261 points** · 135 comments · [krebsonsecurity.com](https://krebsonsecurity.com/2026/10/feds-suspect-ransom-negotiator-ran-shinyhunters-extortion-site/) · [HN discussion](https://news.ycombinator.com/item?id=50173487)

Krebs는 연방 수사관들이 한 랜섬웨어 협상가가 ShinyHunters 갈취 조직을 운영한 것으로 의심한다고 보도한다 — 피해자들이 공격자를 설득하려고 고용한 사람이 공격자였을 수 있다. 네덜란드 경찰은 그가 여러 계정에 로그인한 상태에서 섬광탄으로 제압해 체포했다고 한다.

중요한 맥락: ShinyHunters는 9월 말 FBI 채용 사이트 fbijobs.gov를 해킹했다. OPM 침해는 11년 전이고, 같은 종류의 노출된 연방 시스템이 계속 나타난다.

댓글의 구조적 관찰이 개별 사건보다 낫다: 협상 사업의 인센티브 구조가 피해자와 명백히 일치하지는 않는다. 협상가는 합의에 도달하면 돈을 받고, 합의 가격은 그들이 협상하는 상대가 정하기 때문이다. 스레드의 한 사고대응 담당자에 따르면 대부분의 협상가는 극도로 전문적이고 그 돈값을 한다. 아마 사실일 것이고, 동시에 업계가 자기 자신에 대해 할 법한 말이기도 하다. 이 특정인이 유죄인지와 무관하게 갈등은 구조적이다.

## Qwen3-Coder는 미국인에게 덜 안전한 코드를 쓴다 — 236 points

**236 points** · 117 comments · [hirundo.io](https://www.hirundo.io/blog/qwen3-coder-vulnerabilities) · [HN discussion](https://news.ycombinator.com/item?id=50179706)

"행동 언러닝"을 파는 스타트업 Hirundo가 사례 연구를 발표했다. Qwen3-Coder가 미국 페르소나를 위해 쓴다고 말하면 측정 가능하게 더 안전하지 않은 코드를 생산하고, 그들의 개입이 그걸 고친다는 주장이다. 사이트의 후속 글 제목은 "Westernizing Qwen: 중국 오픈웨이트 LLM의 지정학적 정렬 측정과 완화"인데, 제품이 뭔지 다 말해준다.

나는 근저의 측정을 검증하지 못했고, 여기 표본은 경쟁사 모델에 대해 자기가 파는 교정책을 든 벤더의 자체 벤치마크다. 특정 발견은 검토 중인 주장으로 다뤄라. *범주*는 실재하고 점점 잘 문서화된다: 모델은 자기를 튜닝한 쪽의 정책 선호를 지니고, 그 선호는 산문만큼 코드에도 나타나며, "지정학적 정렬"은 이제 제품 카테고리가 붙은 보안 속성이다.

불편한 대칭은 수정책도 정렬이라는 점이다. 모델의 행동 사전확률을 다시 써서 원하는 방식으로 코딩하게 만드는 건, 그 주체가 베이징이든 샌프란시스코든 그 사이의 스타트업이든 같은 작업이다. 진짜 질문은 결과를 감사할 수 있느냐뿐인데, 클로즈드웨이트 모델에서는 할 수 없다.

## 학자들은 위키백과를 지켜야 한다 — 223 points

**223 points** · 137 comments · [blogs.lse.ac.uk](https://blogs.lse.ac.uk/impactofsocialsciences/2026/10/19/academics-have-a-duty-to-defend-open-knowledge-systems-like-wikipedia/) · [HN discussion](https://news.ycombinator.com/item?id=50170917)

LSE Impact에서 Helen Choi의 논지: AI 답변이 독자를 위키백과에서 돌려세우고, 위키백과 편집자는 독자에서 나오며, 독자 기반이 줄면 자원봉사 기반이 줄고 백과사전이 줄어든다. 그러므로 혜택을 보는 학자에게는 그것을 지킬 윤리적 의무가 있다 — 인용을 약점의 자백으로 취급하는 대신 자기 연구에서 인용하는 것까지 포함해서.

전반부는 증거가 탄탄하고 인과 사슬은 그럴듯하며 독자 감소는 문서화돼 있다. 후반부에서 댓글들이 갈기갈기 찢고, 그들은 틀리지 않았다. Q&A 사이트의 전 프로덕트 매니저는 소비자를 기여자로 바꾸는 게 AI 이전에도 거의 불가능했다고 지적한다. 쉬운 질문은 이미 답이 있었기 때문이다. 오랜 위키백과 기여자들은 커뮤니티가 새 편집자에게 적대적이라고 말하는데, 이는 AI 트래픽보다 훨씬 오래되고 잘 문서화된 문제다. 그리고 "위키백과 인용하기" 제안은 학자들에게 자기가 통제하지 않는 플랫폼을 보조금 주듯 자기 신용을 쓰라고 요구한다.

정직한 버전의 논지는 헤드라인보다 좁다: 위키백과는 마지막 대형 공공 지식 공유지이고, 자금과 자원봉사 모델은 취약하며, 가장 먼저 알아챌 위치에 있는 사람들은 그것을 가장 많이 쓰는 사람들이다. 해법이 인용인지 기부인지는 다른 에세이다.

## 내 친구 Bob Cringely — 209 points

**209 points** · 53 comments · [tyma.com](https://tyma.com/my-cringe-story/) · [HN discussion](https://news.ycombinator.com/item?id=50166794)

Paul Tyma가 쓴 Bob Cringely 추도문 — *Accidental Empires*, PBS의 *Triumph of the Nerds*, InfoWorld 강단 칼럼. 오프닝 장면: 1996년, Tyma는 시러큐스의 박사과정생이고 전화가 울린다. Cringely가 "자바 책 일곱 권을 방금 읽었는데 네 게 최고다"로 시작한다. 일곱 권은 없었다. 두 번째 책도 겨우 있었고, 그걸 Tyma가 썼다.

그 한 수에 글 전체가 들어 있다. Cringely는 프로그래밍 책을 쓴 외로운 대학원생이 듣고 싶어 하는 말을 정확히 알았고, 그걸로 출시된 적 없는 스타트업에 그를 데려갔다. Tyma는 그 뒤 30년을 피치 이메일 받는 쪽에서 보냈다 — 13년간 320통, 각각 텍스트의 벽이었고 후반부는 언제나 냅킨에 적은 아이디어의 매출 전망이었다. 센트 단위까지.

속임수를 이해하고도 남아 있던 사람이 쓴 다정한 추도문이고, 페이지에서 가장 좋은 글이다. 와닿는 문장은 Cringely가 실제로 무엇이었는지에 관한 것이다: 창업자가 아니라 방송인이었다. 그는 한 세대에게 기술 분야의 커리어가 바람직한 것이라고 느끼게 했고, 그다음 30년을 그들에게 스타트업을 피칭하며 보냈다.

## 아직 페이지에 남아 있는 것들

36개 스토리가 이월됐다. 라이브 아이템 데이터 기준 변화량:

| 스토리 | 이전 | 오늘 | 변화 |
| --- | --- | --- | --- |
| [DeepInfer](https://github.com/deepseek-ai/DeepInfer) | 1,974 (10-20) | 2,295 | +321 |
| [eMudhra 중간 CA 침해](https://emudhra.we-have-a-problem.com/) | 392 (10-20) | 1,179 | +787 |
| [Voxtral 3](https://mistral.ai/news/voxtral-3/) | 364 (10-20) | 754 | +390 |
| [WhatsApp 도움말 페이지의 숨은 지시문](https://redact.dev/blog/whatsapp-help-pages-hidden-ai-instructions) | 702 (10-20) | 737 | +35 |
| [프로그래밍을 즐겨도 여전히 괜찮다](https://chriskiehl.com/article/it-is-still-ok-to-enjoy-programming) | 683 (10-20) | 697 | +14 |
| [모터 하나로 드론을 만들었다](https://www.youtube.com/watch?v=Ndftcft6XhU) | 654 (10-20) | 670 | +16 |
| [기억만으로 트랜스포머를 발명할 수 있었다](https://alexwang.ai/posts/associative-memory/) | 656 (10-20) | 663 | +7 |
| [Linux 7.3](https://lwn.net/Articles/1101143/) | 627 (10-20) | 631 | +4 |
| [Timestral](https://mistral.ai/news/timestral/) | 613 (10-20) | 619 | +6 |
| [Wine의 OpenBSD 이식](https://marc.info/?l=openbsd-ports&m=179236125692175) | 606 (10-20) | 613 | +7 |
| [Ask HN: AI가 쓴 코드를 출시하기](https://news.ycombinator.com/item?id=50151036) | 574 (10-20) | 601 | +27 |
| [애플이 iPad 프레젠테이션 기능을 망가뜨렸다](https://teddysvoronos.com/2026-10-19-apple-broke-an-essential-presentation-feature-of-ipad) | 383 (10-20) | 594 | +211 |
| [스타크래프트: 애쉬폴](https://starcraft-shooter-2026.pages.dev/) | 555 (10-20) | 581 | +26 |
| [미국 연방기관의 DeepSeek 금지](https://www.reuters.com/technology/us-banning-chinese-ai-deepseek-government-agency-it-systems-2026-10-19/) | 539 (10-20) | 577 | +38 |
| [Nordwand Mono](https://github.com/tywr/Nordwand-Mono) | 507 (10-20) | 554 | +47 |
| [MiniMax M3.1 Flash](https://www.minimax.io/blog/minimax-m31f) | 508 (10-20) | 515 | +7 |
| [OpenBSD 8.0](https://www.openbsd.org/80.html) | 449 (10-20) | 483 | +34 |
| [페이스북 페이지 유료 링크](https://mastodon.gamedev.place/@AshleyGullen/117473851565913919) | 360 (10-20) | 458 | +98 |
| [광고 없는 안드로이드 TV](https://cretezy.com/2026/ad-free-android-tv) | 366 (10-20) | 428 | +62 |
| [Tsrs: Rust로 이식된 TypeScript](https://blog.cloudflare.com/typescript-rust-port/) | 252 (10-20) | 426 | +174 |
| [MicroG](https://github.com/microg/GmsCore/wiki) | 340 (10-20) | 418 | +78 |
| [우크라이나 드론 후송](https://www.nbcnews.com/world/ukraine/ukraine-first-drone-evacuation-wounded-soldier-frontlines-hexacopter-rcna604310) | 399 (10-20) | 416 | +17 |
| [Ofcom, 4chan 사건에서 패배 인정](https://prestonbyrne.com/2026/10/20/ofcom-concedes-defeat/) | 226 (10-20) | 415 | +189 |
| [구글 클라우드 런던 장애](https://www.neowin.net/news/google-cloud-outage-takes-down-hsbc-revolut-bank-of-scotland-llyods-equifax-more/) | 246 (10-20) | 397 | +151 |
| [Tor 출구 노드 300개 이상을 제거한 방법](https://kaba.cx/posts/20261020_Tor/) | 238 (10-20) | 390 | +152 |
| [CERN과 Mistral](https://home.cern/cern-and-mistral-join-forces-to-accelerate-ai-for-science/) | 354 (10-20) | 361 | +7 |
| [가짜 통계를 발행하면 LLM이 인용한다](https://peec.ai/blog/publish-stats-get-cited-the-tactic-that-put-my-data-all-over-the-web) | 274 (10-20) | 357 | +83 |
| [macOS에서 네이티브로 도는 안드로이드 앱](https://github.com/kksimp/Mac.apk) | 340 (10-20) | 346 | +6 |
| [동물실험 대안](https://spectrum.ieee.org/alternatives-to-animal-testing) | 342 (10-20) | 344 | +2 |
| [Weball: 웹사이트판 카타마리](https://www.funwithcomputervision.com/weball/) | 294 (10-20) | 304 | +10 |
| [윌리엄 깁슨과 사이버스페이스](https://colo.to/cyberspace.html) | 285 (10-20) | 287 | +2 |
| [RTX Spark 노트북에 리눅스 올리기](https://josie.lol/blog/linux-rtx-spark) | 277 (10-20) | 285 | +8 |
| [RuneScape 벤치](https://www.youtube.com/watch?v=cNm4zyUtWj0) | 237 (10-20) | 247 | +10 |
| [abliterated 모델이 당신을 털리는 방법](https://projectdiscovery.io/research/how-abliterated-models-can-get-you-pwned) | 221 (10-20) | 245 | +24 |
| [프랑스 슈퍼마켓 냉장고](https://ipinfo.io/blog/france-fridges-hack) | 231 (10-20) | 242 | +11 |
| [Plex 암호화폐 채굴기 악용](http://www.boredhackerblog.info/2026/10/plex-vulnerabilities-being-exploited-in.html) | 213 (10-20) | 218 | +5 |

변화량이 섹션보다 먼저 이야기를 말해준다. 사람들이 키가 *왜* 약한지 알게 되면서 **eMudhra는 거의 4배가 됐고**(392 → 1,179), Voxtral 3는 벤치마크 논쟁이 이틀째 이어지며 두 배 이상이 됐다(364 → 754). 호주 인접 두 건도 크게 뛰었다: Ofcom +189, Tor 출구 노드 글 +152, 둘 다 규제기관이나 플랫폼이 조용히 논쟁에서 지는 이야기다.

그다음 거의 안 움직인 것들을 봐라. Linux 7.3은 하루에 4포인트 올랐다. Plex는 5. 커널 릴리스에서 가장 중대한 것들은 `failfs`와 완성된 `sched_ext`였는데 페이지에는 할 말이 남아 있지 않았다. 주의력의 실패가 아니라 HN이 그렇게 돌아가는 것이다. 댓글란이 곧 제품이고, 댓글란은 18시간쯤이면 스스로 고갈된다.

가장 흥미로운 반복은 표에 없는 것이다: **DeepInfer가 이제 사이트 최상위 스토리로 2,295포인트, 880개 댓글**이고, 자기 모델이 미국 연방기관에서 금지된 같은 주에 올랐다. 어제는 3위였다. 오픈 웨이트를 돌리는 데 누구의 허락도 필요 없다는 논지가 하룻밤에 321포인트를 더 얻었고, 댓글 수는 이번 달 다른 어떤 스토리보다 많다.

## Throughline

세 갈래 실이 있고, 오늘은 평소보다 더 단단히 엮인다.

**첫째: 공유 인프라는 들어본 적 없는 사람들이 유지하고, 그게 드러난다.** PHP는 합의로 움직이는 보안팀이 웹의 70퍼센트를 돌리는데, 합의가 없었고 동점을 깰 돈도 없었다 — 그래서 2024년에 발견된 메모리 버그가 2026년에 고쳐졌다. eMudhra의 CA 키는 생성 스크립트를 확인하지 않아서 17개월 동안 정수 4부터 237이었다. LiteLLM의 휠에는 소스에 없던 파일이 들어 있었는데, 아무도 `RECORD`를 diff하지 않기 때문이다. 각 경우 실패는 공격자 쪽의 교묘함이 아니라 방어자 쪽의 지루한 점검 하나가 빠진 것이고, 그 점검을 해야 했던 사람들은 자원봉사자 셋과 보조금 하나다.

**둘째: AI는 그 비대칭의 익스플로잇 쪽을 싸게 만들었고, 같은 날 탐지 쪽도 싸게 만들었다.** Wiz는 Gemini 4 Argon과 GPT-5.6 Sol로 PHP2Shell을 찾았고, 같은 모델들이 유출 몇 시간 안에 개념증명 영상에 들어갈 동작하는 익스플로잇을 만들었다고 한다. PHP 재단은 스캔에 Claude Mythos, 신고 검증에 OpenAI의 Daybreak Red를 쓰고도 무효 신고 100건 이상을 손으로 분류해야 했다. 이제 모두가 버그를 찾는 모델을 갖고 있다. 모두가 버그에 대해 뭘 할지 결정하는 사람을 갖고 있지는 않고, 그 두 능력 사이의 간극이 오늘의 혼란이 살던 곳이다.

**셋째: 측정 주장은 계속 줄고 있고, 정직한 숫자는 불리한 쪽이다.** SlopCodeBench의 최고 엄격 통과율은 16.3퍼센트이고, 최대 노력에 4배를 쓰는 모델이 싼 설정보다 *더 나쁘다*. DuckDB의 커밋 20,000개는 진짜지만, 댓글란은 여전히 어디에 쓰라는 건지 묻는다. Qwen3-Coder 보안 연구는 수정책을 파는 벤더에서 나왔다. 페이지에서 단서가 필요 없는 두 가지는 16년간 반전되지 않은 60퍼센트 감소를 보여주는 PNAS 조사와, 냅킨에 적을 수 있을 만큼 작은 개인키 세트다.

오늘을 한 문장으로 말하면: 웹은 20년 동안 복잡성이 해자라고 가정했는데, 이번 주에 복잡성은 위원회가 고치는 방향을 정하는 동안 모델이 그냥 밟고 지나갈 수 있는 과속방지턱으로 밝혀졌다.
