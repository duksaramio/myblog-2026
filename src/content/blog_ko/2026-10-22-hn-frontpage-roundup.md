---
title: "Hacker News 프런트 페이지 라운드업 — 2026년 10월 22일"
pubDate: 2026-10-22
description: "200점을 넘긴 이야기 70개, 그중 31개가 새것이다. 신뢰 계층, 웹에서 가장 많이 설치된 런타임, 최대 Git 호스트, 그리고 PaaS 하나가 한꺼번에 무너진 날."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
lang: "ko"
---

오늘 200점을 넘긴 이야기는 70개다. 39개는 어제 페이지에 이미 있었고, 31개가 새로 올라왔다. 이 비율은 정상이다. 정상이 아닌 건 새로 올라온 것들의 모양이다.

어제 라운드업은 복잡성에 관한 문장 하나로 끝났다. 복잡성은 모델이 그냥 밟고 지나갈 수 있는 과속방지턱이고, 위원회는 그걸 어느 쪽으로 고칠지 정하느라 시간을 쓴다는 이야기였다. 오늘 이 페이지는 그 문장과 18시간 동안 공개적으로 싸웠다. 한 인증기관은 자기가 숫자를 세는 방식으로 만든 키에 대한 질문에 답하는 대신 인증서 사업을 접겠다고 발표했다. GitLab의 인증 불필요 RCE, 10점 만점에 10점짜리가 399점을 받았다. 다른 날이면 그달 최대 보안 사건인데, 오늘은 6번째다. 한 호스팅 플랫폼은 고객에게 가진 시크릿을 전부 교체하라고 하면서, 동시에 교체한 시크릿을 배포하는 기능을 꺼버렸다. 그리고 PHP 버그가 공격하기에 "쉬운" 것인지를 두고 벌어진 논쟁은 하루 종일 이어졌고, 결국 양쪽 다 틀렸다.

## PHP 8.2.35 — 1,069 points

**1,069 points** · 557 comments · [github.com/php/php-src](https://github.com/php/php-src/releases/tag/php-8.2.35) · [HN discussion](https://news.ycombinator.com/item?id=50180873)

어제 권고문과 따로 올라온 8.2 브랜치 릴리스 태그인데, 권고문보다 더 멀리 갔다. 릴리스 노트는 두 문장이고, 그중 하나가 "완전한 완화책은 없다. 업데이트가 유일하게 안전한 선택이다"다. 다른 하나는 PHP 8.2가 2026년 12월 31일에 지원 종료된다는 것.

댓글창에서 릴리스 자체보다 값어치 있는 게 두 가지다. 먼저, 하루의 상당 부분 동안 패치는 존재하지 않았다. 권고문은 "지금 업데이트하라"고 했는데 tarball은 아직 만들어지는 중이었고, 댓글러들은 그 간극을 분 단위로 추적했다. 8.4.27 태그가 amd64 이미지도 없는 빈 껍데기로 나타났다가 나중에 채워졌다. 사고 대응 계획에 "권고문 나온 뒤 X분 안에 패치"라고 적어놨다면, 그 X는 정의되지 않은 값이었다. 패치할 게 없었으니까. 둘째, WordPress 호스팅이 제품의 전부인 회사 WP Engine이, 수정 빌드가 공개된 지 2시간 30분이 지나도록 여전히 PHP 8.4.26을 서비스하고 있었다. 이 사안의 롱테일이 어떤 모습인지 보여주는 정직한 그림이다. PHP 릴리스를 만드는 건 이름 몇 안 되는 자원봉사자들이고, 그중 한 명은 스레드에 Patreon 링크를 걸어놨다. 스택 맨 아래가 그렇게 자금을 조달받기 때문이다.

## 이 PHP 취약점에 손쉬운 익스플로잇은 없다 — 602 points

**602 points** · 400 comments · [eliastaylor.com](https://eliastaylor.com/noexploit/) · [HN discussion](https://news.ycombinator.com/item?id=50188948)

Elias Taylor가 그날 가장 쓸모 있는 회의론을 썼다. GitHub에 올라온 수천 개의 "PoC" 저장소는 순정 PHP 설치본에서는 동작하지 않고, 그중 다수는 기존 로컬 파일 포함(LFI) 버그를 전제로 요구하는 식으로 치트를 친다. 그의 논지는 사람들이 자기 숙제를 자기가 채점하는 모델에게 익스플로잇을 가졌다고 통보받고 있다는 것이고, 구체적인 근거도 댄다. 스타가 가장 많은 PoC 3개를 하나씩 짚는데, 각각 LFI가 필요하거나 서버를 손댄 실험실에서만 동작한다.

저장소에 대해서는 맞았고 결론에 대해서는 틀렸다. 댓글창은 그 간극을 몇 시간 만에 메웠다. Wiz는 수정되지 않은 WordPress, Drupal, Joomla를 상대로 인증 전 RCE를 시연했고, PHP 재단 자체의 사후 분석도 실제 애플리케이션을 상대로 한 원격 코드 실행을 확인한다. 그래서 정직한 성적표는 이렇다. LLM이 뽑아낸 PoC 더미는 쓰레기이고, *그리고* 그 버그는 애플리케이션 계층에서 실제로 익스플로잇 가능하다. 두 가지가 동시에 참이라는 사실이 실제 이야기다. "모델이 동작하는 익스플로잇을 만들 수 있나"는 잘못된 질문이었다. 맞는 질문은 "모델이 동작하지 않는 걸 만 개도 만들어서, 정작 중요한 두 개를 찾지 못하게 만들 수 있나"다.

## eMudhra, 글로벌 SSL/TLS 사업에서 손 뗀다 — 784 points

**784 points** · 559 comments · [emudhra.com](https://emudhra.com/en/press-release/emudhra-to-exit-global-ssl-tls-certificate-business) · [HN discussion](https://news.ycombinator.com/item?id=50195110)

보도자료 날짜는 오늘이고, 인과 문장은 묻혀 있지도 않다. "이 사건을 둘러싼 소셜 미디어 증폭 수준이, SSL/TLS가 우리 사업에서 차지하는 비중에 비해 과도한 주목을 불러왔다." 두 번 읽어보라. 규제받는 신뢰 사업을 떠나는 이유로 이사회가 내놓은 설명이 사람들이 질문을 너무 많이 했다는 것이다. 보도자료는 또 SSL/TLS가 매출의 약 1%이고, 더 큰 사업자들은 인증서를 무료로 나눠주고 있으며, 소버린 컴플라이언스 비용이 이미 마진을 갉아먹고 있었다고 짚는다. 전부 아마 사실일 것이다. 그리고 그중 어느 것도 키가 왜 정수 4부터 237까지였는지는 설명하지 않는다.

보도자료가 조심스럽게 담지 않은 것은 근본 원인이다. 사건은 "성실하게" 처리됐고, 영향을 받은 CA는 14시간 안에 폐기됐고, 그 CA들에서 최종 엔티티 인증서는 발급되지 않았고, 물리적·논리적 통제는 온전했다고 말한다. 댓글러들은 "최종 엔티티 인증서 발급 없음"이라는 문구의 모순을 즉시 지적했다. 누구든 발급할 수 있었던 게 중간 CA의 존재 이유다. 폐기는 14시간 걸렸고, 키는 17개월 동안 약했다. 그리고 14시간이 성실함의 근거로 제시되고 있다.

지켜봐야 할 건 2차 효과다. 주목만으로 밀려날 만큼 작은 CA라면, 그 1% 시장점유율은 어딘가로 가야 한다. 그리고 이제 브라우저 루트 프로그램에는, 신뢰 저장소가 왜 세 회사에 지배되는지 누가 물었을 때 가리킬 수 있는 독립 사업자가 하나 줄었다.

## mitmproxy, --emudhra 플래그를 내놓다 — 582 points

**582 points** · 138 comments · [github.com/mitmproxy](https://github.com/mitmproxy/mitmproxy/commit/169234499088fc2c414644a67efaed3d64ae2e3b) · [HN discussion](https://news.ycombinator.com/item?id=50189232)

두 줄짜리 체인지로그 항목이다. "침해된 eMudhra 중간 CA 키로 TLS 인증서에 서명하는 `--emudhra` 옵션 추가." 컴파일되는 농담이다. mitmproxy는 원래 브라우저가 자기가 만든 CA를 신뢰하도록 설득해야 한다. 이 플래그를 쓰면 모든 주요 루트 저장소가 이미 신뢰하는 키로 서명한다. 불가능해야 하는데 실제로 벌어진 그 공격 그대로다. 같은 릴리스의 옆 항목은 농담이 아니다. `certifi`가 사전 컴파일 바이너리에서 eMudhra CA를 제거하도록 업데이트됐다.

댓글창은 끔찍한 날에 메인테이너가 유머를 선보이는 걸 즐기는 분위기지만, 그 밑의 옅은 공포는 진짜다. 인증서 투명성과 루트 프로그램의 전제 전체가, CA의 개인 키는 추측할 수 없는 유일한 것이라는 데 있기 때문이다. 가장 많은 스타를 받은 댓글은 그냥 `[REDACTED PRIVATE KEY]`다. 딱 적당한 분량의 논평이다.

## Railway: 암호화된 환경변수를 복호화된 채로 돌려주다 — 571 points

**571 points** · 329 comments · [blog.railway.com](https://blog.railway.com/p/security-disclosure-wednesday-october-21st) · [HN discussion](https://news.ycombinator.com/item?id=50188228)

Railway는 "고객 환경변수를 저장하는 시스템에서 이상 활동"을 탐지했고, 제3자가 "암호화된 환경변수에 접근했을 수 있고, 일부는 복호화된 내용까지 확보했을 수 있다"고 결론냈다. 고객에게 플랫폼에 저장된 모든 시크릿을 교체하라고 하면서, 조사하는 동안 모든 배포를 중단시켰다. 새 자격증명이 필요한 서비스를 재배포할 수 없다는 뜻이다. 새벽 5시 20분에 올라온 최상위 댓글이 정확히 그걸 지적한다. 고치는 조치가 고치는 조치를 막는다.

Railway 자신의 표현이 가장 흥미롭다. "최근 AI 추론 제공자를 침해할 목적으로 플랫폼 회사들을 겨냥한 일련의 공격 중 하나." 일관된 동기다. PaaS는 다른 회사들의 모델 제공자 키가 꽂힌 선반이고, 한 번 뚫으면 고객 50곳의 추론 예산에 동시에 API로 접근할 수 있다. 댓글러들은 자기 OpenRouter 키가 몇 시간 안에 사용됐다고 보고한다. 한 명은 공격자들이 Opus와 Fable에 2달러를 썼다고 한다. 저장 시 암호화는 여기서 사실상 아무 일도 하지 못했다. 위협 모델이 서비스에 복호화를 요청할 수 있는 사람이었기 때문이다.

## PingCAP: 10.6TB와 88번의 미탐지 내보내기 — 419 points

**419 points** · 71 comments · [fulcrumsec.vg](https://fulcrumsec.vg/pingcap/) · [HN discussion](https://news.ycombinator.com/item?id=50173716)

한 협박 그룹이 TiDB Cloud에서 빼냈다고 주장하는 10.6TB 중 첫 200GB를 공개했다. 프로덕션 컨트롤 플레인, 테넌트 조직 180,046개, 고유 이메일 403,262개, 평문으로 저장된 콘솔 API 키페어 115,308개(활성 42,612개), 고객 SQL 문 2,060만 건, Jira 이슈 377,446건, 비공개 소스 저장소 413개다. 방식이 사람 잘리는 부분이다. 이 그룹은 PingCAP 자체 저장소에 커밋된 GCP 서비스 계정 키와 Azure 서비스 주체를 찾아냈고, PingCAP 컨트롤 플레인 데이터베이스의 복제 피드를 세웠고, PingCAP 자기 인프라가 6시간마다 전체 내보내기를 밀어 올리게 만들었다. 22일 동안. 9월 8일부터 9월 30일까지 88번 연속 내보내기, 탐지 없음.

PingCAP의 트러스트센터 성명은 외부 사고대응 업체가 "공격자가 명령을 실행했거나 지속적 접근을 유지했다는 증거를 찾지 못했다"고 밝힌다. 데이터베이스 복제 파이프라인이 한 달 내내 돌아가는 동안에도 두 문장은 기술적으로 참일 수 있다. 댓글러들이 붙잡은 지점이 그 차이다. 구조적 교훈은 새롭지 않지만 계속 정가를 주고 사고 있다. 컨트롤 플레인과 데이터 플레인의 분리는 다이어그램이 아니다. 유출된 테넌트 테이블이 메타데이터인지 침해인지를 결정하는 유일한 것이다.

## GitLab, 아무도 신경 쓸 시간 없던 CVSS 10.0을 패치하다 — 399 points

**399 points** · 91 comments · [docs.gitlab.com](https://docs.gitlab.com/releases/patches/patch-release-gitlab-19-5-1-released/) · [HN discussion](https://news.ycombinator.com/item?id=50185869)

CVE-2026-110264: 정규식 컴파일러의 정수 오버플로로 인증되지 않은 사용자가 GitLab 서버에서 임의 코드를 실행할 수 있다. CVSS 10.0. 영향을 받는 버전은 7.0부터 시작한다. 아직 패치하지 않은, 세상에 존재하는 모든 자체 운영 GitLab이라는 뜻이다. GitLab은 표준 패치 릴리스에 더해 오래된 브랜치 4개에까지 수정을 백포트했다. 크래시 시그니처를 grep해보고 싶은 자체 운영자용 탐지 규칙 2개도 함께 나왔다.

댓글러들이 릴리스 노트가 하지 않은 일을 했다. 이건 Ruby의 정규식 엔진(Onigmo)까지 거슬러 올라가고, 4월에 이미 수정이 있었는데 최근에야 백포트됐다. 근본 질문은 GitLab이 왜 6개월 동안 취약한 엔진을 실어 날랐느냐다. 스레드 최고의 문장: "이 정도로 심각한 버그가 오늘의 최대 보안 취약점이 아니라는 게 조금 무섭다." 이 페이지에서, 이 날짜에는, 비슷하지도 않다.

## Trend Micro, 커널 취약점을 공개 리스트에 올리다 — 229 points

**229 points** · 84 comments · [phoronix.com](https://www.phoronix.com/news/LKML-New-Trend-Vulnerabilities) · [HN discussion](https://news.ycombinator.com/item?id=50193804)

패치되지 않은 리눅스 커널 취약점 보고서 여러 건이 비공개 보안 리스트 대신 밤사이 LKML로 갔다. Greg Kroah-Hartman은 각 보고서에 왜 그러냐고 답글을 달았다. 보고서는 Trend Micro의 Zero Day Initiative에서 나왔다. 목록에는 SMB Direct의 정수 언더플로(원격 코드 실행, CVSS 9.0), KSMBD 경쟁 조건(역시 9.0), 로컬 권한 상승을 주는 `skb_zerocopy` 버그, VMware 그래픽 드라이버의 범위 밖 쓰기, NVMET의 초기화되지 않은 리소스로 인한 커널 메모리 유출이 있다.

적어도 한 건은 커널 팀이 일주일 전에 비공개로 이미 받은 것과 중복된다. 그것 나름대로 엉성하다. 스레드는 패치 안 된 9.0짜리를 공개한 ZDI에 분노하는 쪽과, 커널이 이제 AI 지원 보고서는 공개 리스트로 보내라고 요청한다는 걸 지적하는 쪽으로 갈린다. 비공개 리스트가 감당이 안 됐기 때문이다. 둘 다 사실일 수 있다. 어쨌든 커널 버그 5건의 엠바고는 결정이 아니라 메일링 리스트 주소 하나 때문에 끝났다.

## Amazon, PHP2Shell 익스플로잇을 나흘 먼저 목격하다 — 238 points

**238 points** · 86 comments · [aws.amazon.com](https://aws.amazon.com/blogs/security/amazon-threat-intelligence-identifies-php2shell-exploitation-prior-to-public-disclosure-in-madpot/) · [HN discussion](https://news.ycombinator.com/item?id=50194070)

Amazon의 허니팟 네트워크가 10월 17일에 PHP2Shell 익스플로잇 시도를 기록했다. 엠바고 해제 나흘 전이다. 상용 익명화 네트워크와 연관된 IP였다. 엠바고는 10월 21일 14:00 UTC에 풀릴 예정이었는데, Amazon은 그날 02:00 UTC까지 동작하는 PoC 여러 개를 봤고, 02:00에서 08:00 사이에 서로 다른 익명 인프라에서 추가 익스플로잇 시도가 이어졌다. 페이로드가 서로 달라 별개 행위자로 보인다.

Amazon은 해당 행위자가 공개 전에 익스플로잇 정보를 어떻게 얻었는지는 불명확하다고 조심스럽게 말한다. 정직함의 적정 수준이다. 하지만 이건 OpenAI가 이 페이지 다른 곳에서 하는, "프런티어 AI가 공격자보다 먼저 찾아냈다"는 가장 깔끔한 버전의 이야기를 정면으로 깎아내린다. 권고문이 아직 엠바고 상태일 때 누군가 PHP2Shell 익스플로잇으로 허니팟을 찔러보고 있었다. 유출이거나, 병행 발견이거나, 둘과 구별되지 않을 만큼 운 좋은 추측이다.

## OpenAI의 Patch the Planet, 타이밍 공을 가져가려 한다 — 260 points

**260 points** · 182 comments · [openai.com](https://openai.com/index/coordinated-disclosure-of-critical-vulnerabilities/) · [HN discussion](https://news.ycombinator.com/item?id=50181175)

OpenAI의 설명은 이렇다. 메인테이너, 연구자, 보안 업체 연합이 PHP 버그에 두 달을 썼다. Calif가 Patch the Planet 이름 아래 GPT-5.6 Sol로 하나를 찾았고, Wiz가 둘 다 독립적으로 찾았고, Cloudflare 등이 완화책을 미리 만들어뒀다. OpenAI는 이걸 "최근 기억에 남는 가장 영향력 있는 보안 사안 중 하나"라고 부르고, 발견과 익스플로잇 사이의 창을 "Defender's Window"라고 규정한다.

브랜딩을 걷어내면 살아남는 주장은 좁다. 이번에는 발견자가 방어 쪽에 있었다. 살아남지 못하는 주장은 창이 열려 있다는 함의다. OpenAI는 같은 능력이 "공격자가 공격 도구와 익스플로잇을 빠르게 개발하도록 도울 수도 있다"고 말한다. 그리고 자기 연합의 타임라인에 따르면, 공격자들은 엠바고 해제 12시간 안에 동작하는 증명을 가졌고, 나흘 전에는 이미 뭔가를 갖고 있었다. 반나절 만에 닫히는 방어자의 창은 창이 아니라 살짝 열린 문이다. 여기서 진짜 쓸모 있는 산출물은 화려하지 않다. Codex 스킬로 배포된 버전 검사기다.

## pwn.watch: 12개월에 237건 — 276 points

**276 points** · 134 comments · [pwn.watch](https://pwn.watch/) · [HN discussion](https://news.ycombinator.com/item?id=50195543)

진행 중인 보안 사고를 추적하는 한 페이지. 결정적으로, 수정이 나왔는지도 같이 본다. 전면에 걸린 숫자는 최근 12개월간 237건이고, 일자별 히트맵과 하루 단위 상세가 붙는다. 오늘 페이지에서 가장 화려하지 않은 링크이고, 아마 북마크할 만한 링크다. 지난 24시간의 반복된 실패 양식이, 자기가 읽고 있는 게 이미 고쳐진 건지 모르는 것이었기 때문이다.

## Meta, 뉴멕시코에서 $25B 배상 명령 — 658 points

**658 points** · 398 comments · [cnbc.com](https://www.cnbc.com/2026/10/21/meta-new-mexico-cambridge-analytica-penalty.html) · [HN discussion](https://news.ycombinator.com/item?id=50184820)

샌타페이 배심원단은 9월에 뉴멕시코주 불공정 관행법 위반 4,300만 건을 인정했다. 법정 상한이 위반당 $5,000이라 주는 $219.5 billion을 요구했고, 판사가 $25 billion으로 깎았다. 지급할 때까지 연 15% 이자가 붙는다. 판사의 사실 인정은 유난히 노골적이다. 경영진의 관여, 반복된 허위 진술, "하겠다고 약속한" 포괄적 조사를 하지 않은 것. Meta는 항소에서 이길 것이며 이 사건은 "언론에 대한 세금"이라고 말한다.

댓글의 관찰 두 가지가 이 숫자를 다시 읽게 만든다. 뉴멕시코는 47개 주 공동 소송에 합류하지 않고 혼자 갔다. 그 소송은 SNS 중독 청구를 $17 billion에 합의했고, Meta를 주 단위 Cambridge Analytica 청구에서 $459 million에 면제해주는 조항이 붙어 있었다. 같은 행위에 47개 주는 $459 million, 한 주는 $25 billion의 가격표를 붙인 셈이다. 그리고 Meta 주가는 시간외에서 약 7% 올랐다. 연매출 $200 billion 회사에 대한 $25 billion 판결의 기대값을 시장이 어떻게 보는지 알려준다. 반올림 오차 한 줄, 항소 계류 중.

## Quad9, 필터가 되느니 프랑스를 떠난다 — 630 points

**630 points** · 230 comments · [quad9.net](https://quad9.net/news/blog/au-revoir-france/) · [HN discussion](https://news.ycombinator.com/item?id=50195959)

Quad9은 11월 24일 프랑스에서 DNS 서비스를 철수한다. 방아쇠는 beIN이(그리고 댓글러들 말로는 Sony Music의 법정모욕 절차가) 받아낸 프랑스 법원 명령이다. 프랑스 사용자에 대해 스포츠 불법 복제 도메인의 해석을 차단하라는 것, 불이행 시 하루 €1,000의 과태료가 붙는다. 11월 14일까지 대략 €24,000, 소송 비용은 빼고. 유사 사건 20건이 더 계류 중이다. 준수하기를 거부하는 Quad9의 논리는 도덕이 아니라 구조다. 사용자 데이터베이스를 두지 않으니 차단을 지역별로 한정할 수 없고, 명령을 만족시키는 유일한 방법은 그 이름들을 전 세계에서 차단하는 것이다. 프랑스의 상사 판결을 지구상 모든 인터넷 사용자에게 수출하는 셈이다.

CTO가 스레드에 나타나 어색한 부분을 인정했다. 아마 geoIP 필터링으로 프랑스 트래픽을 통째로 버릴 것이다. 선택적 차단에는 불충분하다고 자기가 말한 그 조잡한 지리 그대로다. 불가능한 명령에 대한 정직한 답이다. 흥미로운 선례는, 매출 없는 비영리 리졸버는 권리자가 소송으로 한 나라에서 몰아낼 수 있는데, 진짜 법무 예산이 있는 리졸버 셋(Google, Cloudflare, Cisco)은 같은 명령에 맞서 싸워 역시 졌고, 돈이 되니까 남아 있다는 것이다.

## Switch 2, 전원 버튼 위의 로봇 손가락과 함께 무너지다 — 591 points

**591 points** · 214 comments · [pepsipu.com](https://pepsipu.com/blog/2026-10-switch2-jailbreak-ns2jb/) · [HN discussion](https://news.ycombinator.com/item?id=50192536)

펌웨어 23.0.1 Switch 2용, 소프트웨어만으로 되는 테더 탈옥. 캡티브 포털에서 서빙되는 WebKit n-day를 통해 이뤄졌고, 일반 sysmodule과 `fs` 권한의 네이티브 코드 실행을 준다. 홈브루, 세이브 백업, 개조된 정품 게임이 된다는 뜻이다. 작성자는 증명을 위해 Mario Kart World에 커스텀 캐릭터를 모딩했다.

방식이 이야기의 핵심이다. JetKVM 2대가 USB로 컨트롤러 입력을 넣고 HDMI 출력을 캡처한다. Amazon에서 산 블루투스 조명 스위치 플리커가 콘솔이 죽으면 전원 버튼을 누르도록 개조돼 있다. 하네스가 사람 없이 복구해야 하니까. Codex가 하네스를 돌렸고, 작성자는 역할 분담을 명확히 말한다. 탈옥은 실제 작업 2주가 걸렸고, 마법처럼 보이는 부분인 Mario Kart 모드는 하루 만에 바이브코딩됐다. 포스트에서 가장 쓸모 있는 데이터 포인트이고, 사람들이 거기서 가져간 헤드라인과는 정반대다.

## Claude Duet, 드디어 비서 제품다워지다 — 536 points

**536 points** · 500 comments · [claude.com](https://claude.com/product/claude-duet) · [HN discussion](https://news.ycombinator.com/item?id=50186037)

Anthropic이 Opus 5.5 기반의 능동형 에이전트를 연구 프리뷰로 공개했다. Pro와 Max 플랜, 미국 한정. 아침 브리핑, 백그라운드 작업 실행, 되돌릴 수 없는 일 전의 승인 게이트. 마케팅 페이지는 소상공인의 판타지다. 허가 수수료, 빨간 줄 그인 갱신 서류, 환불 배치. 그리고 "6,000+ 커넥터"라는 문구에 1Password가 들어 있는데, 댓글창이 즉시 몰려간 지점이다.

흔한 반사적 비판 대신 실질적인 비판 두 개. 첫째, 경제성. 개인 비서 트래픽은 지연에 관대해서 비어 있을 추론 배치에 잘 들어간다. 정액 구독료에서도 고마진 제품이 된다는 뜻이다. 댓글러치고 유난히 냉정한 분석이고, "당신이 없는 동안 일하는 에이전트"가 곧 "우리 유휴 GPU를 채우는 워크로드"라는 것도 일깨워준다. 둘째, 신뢰 문제. 이 제품의 가치 제안은 모든 것에 접근해야 한다는 것이고, 연결된 플랫폼에서 키 유출이 한 번이라도 나면 살아남는 버전은 없다. 하필 오늘, 그건 가정이 아니다.

## WorldTUI: 터미널인 척하는 360M 모델 — 457 points

**457 points** · 147 comments · [simedw.com](https://simedw.com/2026/10/21/world-model-terminal/) · [HN discussion](https://news.ycombinator.com/item?id=50190363)

Docker에서 실제 프로그램을 돌리며 기록한 터미널 세션으로 파인튜닝한 360M 모델. 뒤에 셸도 파일시스템도 없다. 키 입력이 들어가면 모델이 화면이 어떻게 바뀌는지 예측한다. 브라우저에서 208MB로 돈다. `pythoon`이라고 쳐도 고쳐주지 않는다. 그게 데모다.

엔지니어링 선택이 흥미로운 부분이다. 터미널이 실제로 요구하는 것이고 채팅 완성 API는 주지 않는 것들이다. 토큰을 덧붙이는 대신 화면 diff를 예측한다(`clear`가 커서를 맨 위로 되돌릴 수 있게). 화면 행을 병렬로 디코딩한다. 자기 수리를 파인튜닝해서, 나쁜 명령 뒤에 자기가 깨뜨린 출력을 스스로 고치는 법을 배우게 한다. 정직한 한계는 서두에 밝혀져 있다. "보통 몇 개 명령 뒤에는 당신이 뭘 썼는지 기억한다." 세계 모델의 작업 기억이 분 단위라는 걸 정중하게 말한 것이다.

## OpenAI 모델, Google Cloud에 온다 — 319 points

**319 points** · 142 comments · [openai.com](https://openai.com/index/openai-models-google-cloud/) · [HN discussion](https://news.ycombinator.com/item?id=50180079)

OpenAI 프런티어 모델과 Codex가 Google Cloud의 Model Garden에 들어간다. 거래는 Google Cloud Marketplace를 통해 이뤄지고, 기존 GCP 약정 금액에서 차감되며, 곧 Antigravity와 Gemini Agent 안에도 들어간다. 프레이밍은 전부 거버넌스와 조달이다. 접근 통제, 데이터 상주, 새 벤더 관계를 여는 대신 이미 약정한 클라우드 예산을 쓰는 기업.

전략적 해석은 두 회사 홍보 문구보다 노골적이다. Microsoft의 독점은 1년째 풀리는 중이고, 이건 OpenAI 모델을, OpenAI의 최대 경쟁자가 학습에 쓰는 TPU를 함께 파는 유일한 클라우드에 올려놓는다. 규제받는 기업 구매자, 즉 실제 타깃에게 실질적 효과는 모델 선택이 기존 인보이스의 한 줄 항목이 된다는 것이다. 대부분의 대형 조직이 무엇이든 사고 싶어 하는 방식이다. "어떤 모델" 결정이 벤치마크한 사람이 아니라 조달 계약을 쥔 사람 손으로 간다는 뜻이기도 하다.

## o(n log n) 정수 곱셈, 그리고 한 수학자의 슬픔 — 295 points

**295 points** · 264 comments · [web.maths.unsw.edu.au](https://web.maths.unsw.edu.au/~davidharvey/research/subnlogn.pdf) · [HN discussion](https://news.ycombinator.com/item?id=50190455)

David Harvey가 주장된 `o(n log n)` 정수 곱셈 알고리즘에 대해 쓴 노트. 작은 o이고 큰 O가 아니다. ε은 2⁻¹⁸² 근처다. 그가 Joris van der Hoeven과 2021년에 세운, 모두가 바닥이라고 여겼던 `O(n log n)` 한계에 비하면 실제 개선이다. 그의 요약은 한 줄이다. "세부 사항 대부분은 확인하지 않았지만, 주장된 한계는 그럴듯하다고 본다." 그리고 논문의 나머지를 그 개선이, 인터넷의 반응과 달리, 엄청나다는 걸 설명하는 데 쓴다.

그가 이름 없이 묘사하는 맥락: "어떤 미국 기술 회사가 최근 GitHub에 원고 더미를 쏟아부었다." 그는 그걸 만들어낸 모델에게 감사를 표하고, 그 회사 직원 중 누구도 그것이 어떻게 동작하는지, 대개는 자기가 공개한 논문조차 이해하지 못한다고 적는다. 그리고 분야 전체가 피하고 있는 말을 한다. 자동화된 시스템이 이제 어떤 인간보다 수학 연구를 잘하니, 이런 결과는 필연이었고 누가 먼저 도달했는지는 각주일 뿐이라고. 노트 자체에 쓴 자기 AI 사용도 밝힌다. 조판, 교정, Claude Fable 5.1과의 광범위한 논의. 논문을 읽어보려다 포기하고 모델에게 설명을 들었다. 댓글러들은 이미 결과를 Lean으로 형식화했다. 이 페이지에서 가장 2026년다운 문장이다.

## 이제 코드는 점토다 — 241 points

**241 points** · 167 comments · [albertodenia.com](https://www.albertodenia.com/writing/code-is-clay-now) · [HN discussion](https://news.ycombinator.com/item?id=50153531)

9월 말에 나온 글이 오늘 독자를 만났다. 논지: 코드는 원래 돌처럼 굴었다. 작은 수정은 정, 큰 수정은 철거와 비계였다. 에이전틱 코딩이 변경 비용을 무너뜨리면서 재료의 성질이 달라졌다. 그러니 점토처럼 다뤄야 한다. 전체 형태를 거칠게 잡고, 비례를 느끼고, 덩어리에서 중간 특징으로, 다시 디테일로 다듬는다. 시스템 어느 계층에서든.

이 비유가 장르 평균보다 나은 이유는 실패 양식을 예측하기 때문이다. 변경이 싸면 구조를 일찍 잡아야 하는 이유는 비용이 아니라 이해다. 점토는 무엇이든 다시 빚게 해주지만, 네가 무엇을 지었는지는 알려주지 않는다. 댓글창 절반은 이건 그냥 단계만 늘린 프로토타이핑이라는 말이고, 나머지 절반은 실제로 달라진 걸 묘사한다. 예전엔 영구적이었던 모듈 경계를 넘어 리팩터링한다. 넘으려면 1주일이 들었던 경계다.

## Google, 핀란드 숲 300헥타르를 먼저 밀어냈다 — 287 points

**287 points** · 194 comments · [techspot.com](https://www.techspot.com/news/114100-google-cleared-300-hectares-finnish-forest-data-center.html) · [HN discussion](https://news.ycombinator.com/item?id=50196837)

Google은 현지 법인 Tuike Finland Oy를 통해 핀란드 AI 인프라에 €13 billion을 투자하고 있는데, 전체 계획의 환경 검토가 끝나기 전에 불도저를 돌리기 시작했다. 핀란드 허가·감독청은 지난달 TFO에 해명을 요구했다. 공사는 중단될 수 있다. 프로젝트 자료가 공개 저장소에 있다. 이게 불평이 아니라 문서화 가능한 기사가 된 이유다.

세부보다 패턴이 중요하고, 그 패턴은 이제 전 세계적이다. 데이터센터 건설이 더 느린 산업을 전제로 설계된 인허가 체계보다 빠른 속도로 돌아간다. €13 billion은 문제가 아니다. 검토가 끝나기 전에 땅을 파기 시작한 게 문제다. 규제기관의 결론이 "짓지 마라"에서 "이미 지은 걸 어떻게든 고쳐라"로 바뀌기 때문이고, 시정 조치는 거부와 달리 협상 대상이다.

## Google의 Rust 스타일 가이드 — 369 points

**369 points** · 225 comments · [google.github.io](https://google.github.io/styleguide/rustguide.html) · [HN discussion](https://news.ycombinator.com/item?id=50186010)

Google이 `rustfmt` 설정이 아니라 진짜 Rust 스타일 가이드를 공개했다. 작은 크레이트 선호, 라이브러리 소스는 평평한 파일 배치, 글롭 임포트 금지, `use`당 모듈 하나, 최상위 함수 호출은 모듈명으로 한정하되 타입 이름은 비한정으로 임포트, 비리프 모듈에 API 구현 금지. 규칙 여러 개에 `[chrome]` 태그가 붙어 있다. 특정 규모의 특정 코드베이스가 필요로 해서 존재한다는 뜻이다.

스레드에서 살아 있는 논쟁 둘은 모두 그 태그에 관한 것이다. 공개 enum에 `#[non_exhaustive]`를 권장하는데, 댓글러들은 이게 컴파일 타임 완전성 오류를 런타임 폴스루로 바꾼다고 지적한다. enum을 쓰는 이유와 정반대다. 그리고 평평한 파일/작은 크레이트 규칙은 Rust가 아니라 Chrome의 트리에 대한 반응으로 읽힌다. 가장 쓸모 있는 댓글은 Rust 1.0부터 써온 사람 것이다. 조직 전체에 일률적으로 적용되고도 살아남는 스타일 가이드는, 구조상, 어느 개인도 선택하지 않을 것들이다.

## 이제 모든 메뉴에 아이콘은 없다 — 463 points

**463 points** · 261 comments · [blog.jim-nielsen.com](https://blog.jim-nielsen.com/2026/icons-in-every-menu/) · [HN discussion](https://news.ycombinator.com/item?id=50161346)

macOS Tahoe는 모든 메뉴 항목 옆에 아이콘을 붙였다. Golden Gate는 그걸 없앤다. Apple 자체의 Human Interface Guidelines가 이제 Tahoe의 방식을 macOS에서 하지 말아야 할 예시로 인용한다. Jim Nielsen의 요점은 메뉴가 아니라 디자인 논증의 인식론이다. 예전에는 "Apple은 이런 걸 안 한다"고 주장했는데 그건 약하다. 지금은 "Apple이 이걸 했고, 1년을 견뎠고, 공개적으로 되돌렸다"고 주장할 수 있다. 그건 경험이다.

## 그리드화란 무엇인가 — 319 points

**319 points** · 156 comments · [musicalform.substack.com](https://musicalform.substack.com/p/what-is-gridifcation) · [HN discussion](https://news.ycombinator.com/item?id=50150163)

Billboard 톱5를 50년에 걸쳐 비교한다. Captain & Tennille부터 "Die with a Smile"까지. 분위기가 아니라 템포와 타이밍으로 분석한다. 논지: 현대 프로덕션은 인간의 시간적 특수성을 오류로 취급한다. 1975년 음반에서는 킥과 베이스가 정확히 맞지 않고, 필이 그리드에 대해 밀고 당긴다. 2025년 음반에서는 모든 게 양자화돼 있고, 작성자는 그 교정 충동을 "...의 기록에 대한 인식론적 폭력"이라고 부른다. 발췌문에서 문장이 끊기지만, 무슨 말인지 알 것이다.

HN이 음악 이야기일 때 과대평가하고 다른 것일 때 과소평가하는 부류의 글이다. 밑에 깔린 주장이 일반화되기 때문이다. 도구가 분산을 싸게 정규화할 수 있게 되면, 그 분산이 나르고 있던 것은 전부 삭제되고, 아카이브와 비교하기 전까지는 아무도 모른다. 오늘의 LLM 생성 PoC에도 같은 논증이 적용된다.

## 6,000년 전에 멸종한 주머니쥐 — 259 points

**259 points** · 61 comments · [bbc.com](https://www.bbc.com/news/articles/cp814l80pw2o) · [HN discussion](https://news.ycombinator.com/item?id=50162044)

화석으로만 알려져 있고 약 6,000년 전 멸종한 것으로 여겨지던 작은 주머니쥐와 글라이더가 서파푸아 오지에서 살아 있는 채로 발견됐다. 댓글 수는 적고 신호 대 잡음비는 높다. 이 페이지에서 흥미로운 숫자가 10억보다 큰 게 아니라 1,000보다 작은 유일한 이야기다.

## Airbnb, 집안일 목록 금지 — 233 points

**233 points** · 216 comments · [theverge.com](https://www.theverge.com/tech/1015844/airbnb-chores-house-rules-update) · [HN discussion](https://news.ycombinator.com/item?id=50189150)

11월 20일 이후 예약분부터 호스트는 게스트에게 "보통 청소 담당자가 하는 일"을 요구할 수 없다. 설거지해서 정리하기, 침대 시트 벗기거나 세탁 시작하기, 쓰레기를 외부로 가져가기, 에어컨을 꺼달라는 요구가 모두 금지된다. 허용되는 건 시간이 들지 않는 것들이다. 싱크대에 그릇 놓기, 수건 모아두기, 재활용 분리, 나갈 때 에어컨 끄기. 규칙은 숙소 페이지에 별도 섹션으로 눈에 띄게 표시된다.

플랫폼이 자기가 만든 시장 실패를 고치는 중이다. 호스트들이 집안일 목록을 붙인 건 청소비가 턴오버를 감당하지 못해서였고, 게스트들이 따른 건 숙소가 이미 예약됐기 때문이다. Airbnb의 이해관계는 환대가 아니다. "청소비에 집안일 세 개"가 수요의 상당 부분을 호텔로 되돌려보냈고, 이 수정은 플랫폼이 문서로 적는 데 드는 비용이 0이다.

## 한 번도 만든 적 없는 Cash App 계정 때문에 6년형 — 222 points

**222 points** · 231 comments · [techspot.com](https://www.techspot.com/news/114296-woman-spends-three-nights-jail-faces-six-years.html) · [HN discussion](https://news.ycombinator.com/item?id=50194833)

Amanda Smith는 4월 자기 집에서 체포됐다. 한 번도 가본 적 없는 아칸소주의 영장 때문이었다. 자기 이름으로 개설된 Cash App 계정을 경유한 $1,000 사기 건이었다. 감옥에서 3일, $50,000 보석금이 책정됐고 어차피 인도 절차가 오니 의미 없다는 말을 들었다. 아칸소까지 차로 이동하고, 또 $20,000 보석금. 변호를 위해 계정 정보를 요구했을 때 Cash App은 거절했다. 자기가 만들지 않은 계정의 소유자임을 증명할 수 없었기 때문이다.

마지막 문장이 이야기 전부다. 신원 시스템은 이제 당신이 말하는 그 사람임을 확립하는 데도, 당신 신원을 쓴 누군가의 행동에 당신이 책임이 있음을 확립하는 데도 쓰인다. 그리고 사기 피해자는 그 기록을 볼 자격이 없다. 댓글창의 주요 기여는 이게 특이한 게 아니라, 유난히 잘 기록됐을 뿐이라는 관찰이다.

## OpenAI CLI — 220 points

**220 points** · 107 comments · [github.com/openai](https://github.com/openai/openai-cli) · [HN discussion](https://news.ycombinator.com/item?id=50191507)

공식 커맨드라인 클라이언트. 커밋이 561개라 한동안 공개로 개발돼 왔고 이제야 제출된 것이다. 스레드는 "그냥 curl 쓰면 되잖아"와 상태를 가진 걸 curl로 해보려 한 사람들로 늘 그렇듯 갈린다. 설득력 있는 지적: 공식 CLI는 연구소가 자기 API를 스크립트, CI, cron의 기본값으로 만드는 수단이고, 그건 개발자 경험이 아니라 배포 결정이다.

## 새로 올라온 것들

- **[Apple Vision Pro에서 Super Mario 64를 하는 방법](https://www.pagetable.com/303)** — 225 points · 94 comments — 디컴파일 결과물을 visionOS로 옮겨, 돌아다니며 몸을 숙여 카메라를 바꾸는 탁상 디오라마로 만들었다. SM64 디컴프, Render96 에셋, `sm64coopdx` 위에 올렸다.
- **[Show HN: Android 기기에서 iOS 16.5 펌웨어 전체를 돌리다](https://github.com/oosexgang/hackios-xnu-kernel)** — 211 points · 70 comments — Android 하드웨어 위에서 Darwin/XNU 커널을 부팅시키는 작업. 파일 시스템, 네트워킹, 셸을 띄울 만큼의 그래픽까지.
- **[온갖 역경 속의 좋은 타이포](https://unsung.aresluna.org/good-type-against-all-odds/)** — 208 points · 24 comments — Marcin Wichary가 옛 컴퓨터 디스플레이에서 보이는 기울어진 글자에 대해 쓴 글. 이탤릭이 아니라, 한 줄씩 래스터를 갱신하는 롤링 셔터 아티팩트이고, 우연히 타이포그래피 관습이 됐다.
- **[IKEA – 3D 가이드](https://sael.net/flatpack/)** — 205 points · 68 comments — BILLY 설명서의 14단계와 82개 부품을 돌려볼 수 있는 3D 모델로 만들고, 인쇄된 페이지를 나란히 보여준다. 주말을 쓴 결과물로는 터무니없이 좋다.

## 여전히 페이지에 있는 것들

39개 이야기가 넘어왔다. 실시간 항목 데이터 기준 변화량이다:

| 이야기 | 이전 | 오늘 | 변화 |
| --- | --- | --- | --- |
| [DeepInfer](https://github.com/deepseek-ai/DeepInfer) | 2,295 | 2,327 | +32 |
| [PHP 보안 권고](https://www.php.net/archive/2026.php#2026-10-21-5) | 1,485 | 1,544 | +59 |
| [eMudhra 중간 CA 침해](https://emudhra.we-have-a-problem.com/) | 1,179 | 1,261 | +82 |
| [SimCity, 허가증까지](https://permit.petercai.com/) | 895 | 927 | +32 |
| [여덟 비트의 신뢰](https://scotthelme.co.uk/eight-bits-of-trust-emudhras-ca-keys-cracked-in-milliseconds/) | 730 | 920 | +190 |
| [PHP 재단 사후 분석](https://thephp.foundation/blog/2026/10/21/todays-php-security-release-and-how-were-strengthening-php-security/) | 418 | 786 | +368 |
| [Voxtral 3](https://mistral.ai/news/voxtral-3/) | 754 | 765 | +11 |
| [WhatsApp 도움말 페이지의 숨은 지시문](https://redact.dev/blog/whatsapp-help-pages-hidden-ai-instructions) | 737 | 739 | +2 |
| [프로그래밍을 즐겨도 여전히 괜찮다](https://chriskiehl.com/article/it-is-still-ok-to-enjoy-programming) | 697 | 701 | +4 |
| [EA, BioWare 폐쇄](https://www.theverge.com/games/1015647/ea-is-shutting-down-bioware) | 288 | 673 | +385 |
| [CSS의 미래](https://www.joshwcomeau.com/css/interop-2027/) | 573 | 617 | +44 |
| [Wine, OpenBSD로 포팅](https://marc.info/?l=openbsd-ports&m=179236125692175) | 613 | 613 | 0 |
| [Apple이 iPad 발표 기능을 망가뜨렸다](https://teddysvoronos.com/2026-10-19-apple-broke-an-essential-presentation-feature-of-ipads/) | 594 | 604 | +10 |
| [LiteLLM 1.107.0 자격증명 탈취](https://safedep.io/litellm-pypi-compromise-credential-stealer-backdoor/) | 304 | 583 | +279 |
| [DeepSeek, 미국 연방기관에서 금지](https://www.reuters.com/technology/us-banning-chinese-ai-deepseek-government-agency-it-systems-2026-10-19/) | 577 | 578 | +1 |
| [Nordwand Mono](https://github.com/tywr/Nordwand-Mono) | 554 | 561 | +7 |
| [MiniMax M3.1 Flash](https://www.minimax.io/blog/minimax-m31f) | 515 | 515 | 0 |
| [OpenBSD 8.0](https://www.openbsd.org/80.html) | 483 | 487 | +4 |
| [아들에게 무엇을 가르칠까](https://stevekrouse.com/ends) | 464 | 484 | +20 |
| [Facebook 페이지 유료 링크](https://mastodon.gamedev.place/@AshleyGullen/117473851565913919) | 458 | 466 | +8 |
| [DuckDB 2.0](https://duckdb.org/2026/10/21/announcing-duckdb-200) | 302 | 451 | +149 |
| [광고 없는 Android TV](https://cretezy.com/2026/ad-free-android-tv) | 428 | 438 | +10 |
| [Tsrs: Rust로 포팅된 TypeScript](https://blog.cloudflare.com/typescript-rust-port/) | 426 | 430 | +4 |
| [MicroG](https://github.com/microg/GmsCore/wiki) | 418 | 425 | +7 |
| [Ofcom, 패배 인정](https://prestonbyrne.com/2026/10/20/ofcom-concedes-defeat/) | 415 | 418 | +3 |
| [Google Cloud 런던 장애](https://www.neowin.net/news/google-cloud-outage-takes-down-hsbc-revolut-bank-of-scotland-llyods-equifax-more/) | 397 | 403 | +6 |
| [Tor 출구 노드 300개 제거](https://kaba.cx/posts/20261020_Tor/) | 390 | 402 | +12 |
| [Muse, 공유한 것을 전부 노출](https://arstechnica.com/security/2026/10/meta-muse-exposes-users-personal-and-business-secrets-when-they-share-conversations/) | 373 | 401 | +28 |
| [TorchTPU](https://github.com/google-pytorch/torch_tpu) | 375 | 378 | +3 |
| [가짜 통계를 올리면 LLM이 인용한다](https://peec.ai/blog/publish-stats-get-cited-the-tactic-that-put-my-data-all-over-the-web) | 357 | 364 | +7 |
| [Deepwater Horizon, 16년 후](https://e360.yale.edu/digest/deepwater-horizon-deep-sea-recovery) | 316 | 320 | +4 |
| [다른 전염병](https://www.thebeliever.net/the-other-epidemic/) | 283 | 300 | +17 |
| [몸값 협상가 / ShinyHunters](https://krebsonsecurity.com/2026/10/feds-suspect-ransom-negotiator-ran-shinyhunters-extortion-site/) | 261 | 267 | +6 |
| [Abliterated 모델](https://projectdiscovery.io/research/how-abliterated-models-can-get-you-pwned) | 245 | 249 | +4 |
| [RuneScape Bench](https://www.youtube.com/watch?v=cNm4zyUtWj0) | 247 | 248 | +1 |
| [프랑스 슈퍼마켓 냉장고](https://ipinfo.io/blog/france-fridges-hack) | 242 | 243 | +1 |
| [학자들과 위키백과](https://blogs.lse.ac.uk/impactofsocialsciences/2026/10/19/academics-have-a-duty-to-defend-open-knowledge-systems-like-wikipedia/) | 223 | 229 | +6 |
| [Plex 크립토마이너 악용](http://www.boredhackerblog.info/2026/10/plex-vulnerabilities-being-exploited-in.html) | 218 | 220 | +2 |
| [내 친구 Bob Cringely](https://tyma.com/my-cringe-story/) | 209 | 215 | +6 |

**움직인 것들은 거의 다 보안이다.** PHP 재단의 사후 분석은 패치가 나오고 사람들이 CVE 두 개짜리 릴리스가 어떻게 여기까지 왔는지 찾기 시작하면서 네 배가 됐다(418 → 786). eMudhra 키가 *왜* 추측 가능했는지에 대한 Scott Helme의 글인 Eight Bits of Trust는 190점을 얻었고, 점수는 몰라도 관련성에서는 상위 이야기를 넘어섰다. LiteLLM의 오염된 휠은 279점을 얻었다. 아무도 논쟁하지 않은 이야기다. 소스에 없던 파일을 보여주는 diff는 해석의 여지가 없으니까. EA의 BioWare 폐쇄는 673까지 두 배가 됐다. 향수이거나, Mass Effect와 Dragon Age를 만든 스튜디오가 이제 원가 절감 슬라이드의 한 줄 항목이 됐다는 자각이다.

그다음 평평한 것들. OpenBSD의 Wine은 하루에 0점을 얻었다. MiniMax M3.1 Flash: 0. RuneScape Bench, 1. 프랑스 슈퍼마켓 냉장고, 1. DeepSeek의 연방 금지, 1점. 배제 명령이 사실 7월 24일자라는 보도가 나온 다음 날이다. 댓글러들이 금지 자체보다 흥미롭게 본 디테일인데, DeepInfer 공개 시점이 우연이 아니라는 뜻이기 때문이다. 그리고 DeepInfer는 3일째 2,327점, 887개 댓글로 여전히 사이트 최상위 이야기다.

## 관통하는 줄기

세 갈래 실이 있는데, 오늘은 그게 같은 실이다.

**첫째: 신뢰 계층은 서류보다 얇다.** 숫자를 세서 키를 만든 CA는 이제 해명 대신 사업을 접는다. CVSS 10.0짜리 GitLab RCE는 4월에 패치됐고 6개월 늦게 백포트된 정규식 엔진 버그로 이어지고, 7.0부터 시작하는 버전 범위에 실려 나간다. Trend Micro는 패치 안 된 커널 취약점 5건, 그중 2건이 9.0짜리를 실수로 공개 메일링 리스트에 올렸다. Railway의 암호화된 시크릿은 누군가 서비스에 복호화를 요청해서 복호화된 채로 돌아왔다. 어느 것도 새로운 공격이 아니다. 전부 건너뛴 절차의 한 단계이고, 각 경우에 건너뛴 단계는 통제가 아니라 점검이었다.

**둘째: 익스플로잇 생성 논쟁은 결판났고, 양쪽 다 졌다.** 어제의 질문은 모델이 이 버그들을 찾을 수 있느냐였고, 오늘은 무기화할 수 있느냐다. 답은 "형편없게, 대량으로"였다. AI가 쓴 PHP PoC 수천 개는 동작하지 않고, 다수가 기존 LFI를 요구한다. 그렇게 말한 회의론자는 저장소에 대해서는 맞았다. 하지만 Wiz가 수정되지 않은 WordPress, Drupal, Joomla에서 인증 전 RCE를 얻었으니, 회의론자는 버그에 대해서는 틀렸다. 한편 Amazon은 공개 *나흘 전*의 PHP2Shell 익스플로잇 시도 텔레메트리를 갖고 있다. OpenAI가 마케팅하는 방어자의 창이 반대편에서는 이미 열려 있었다는 뜻이다. 순효과는 어느 쪽 입장보다 나쁘다. 잡음 바닥이 이제 신호를 스캔할 수 없을 만큼 높아졌고, 진짜 익스플로잇을 쓸 수 있는 사람들은 잡음 때문에 전혀 느려지지 않는다.

**셋째: 측정 주장은 계속 작아지고, 정직한 숫자는 체면이 안 서는 쪽이다.** OpenAI의 조정된 공개 글은 결과가 아니라 과정에 관한 것이다. 구체적 산출물은 버전 검사기 하나다. Harvey의 `o(n log n)` 곱셈 노트는 대부분 확인하지 않았고, 논문을 읽지 못했고, 모델에게 설명을 들었고, 자동화된 시스템이 이제 어떤 인간보다 수학 연구를 잘한다고 조심스럽게 밝힌다. Switch 2 탈옥은 AI 성취로 프레이밍되는데, 작성자는 익스플로잇에 2주가 걸렸고 마법처럼 보이는 쪽은 하루가 걸렸다고 말한다. 단서가 전혀 필요 없는 유일한 이야기는, 수정이 나왔는지 칸까지 붙여 한 페이지에서 추적하는 237건의 진행 중 사고다.

오늘을 한 문장으로 정리하면: 소프트웨어 업계는 18시간 만에 실황 시연을 봤다. 버그를 찾는 비용은 무너졌고, 익스플로잇하는 비용은 그만큼 빠르게 무너지지 않았고, 수정을 조율하는 비용은 여전히 다른 시간대에서 잠든 자원봉사자 네 명이 치르고 있다.
