---
title: "해커 뉴스 프런트페이지 라운드업 — 2026년 11월 24일"
pubDate: 2026-11-24
description: "Anthropic 주가가 상장 공모가를 깨고, 젠슨 황의 이틀 일정이 2,777 포인트로 마무리됐으며, Claude 모델이 검증되지 않은 VP ≠ VNP 증명을 공개했고, Tidal이 AI 음악을 금지했으며, 뉴욕이 자동차 구독을 불법화했습니다."
draft: false
tags: ["hacker-news", "roundup", "ai", "tech"]
lang: "ko"
---

오늘 순위에 오른 500개 id를 전부 훑어보니 98개 스토리가 200 포인트를 넘었습니다. 어젯밤 124개에서 줄어든 숫자입니다. 그중 78개는 이미 이곳에서 다룬 스토리입니다. 어제 목록에 있던 46개는 페이지가 넘어가면서 기준선 아래로 내려갔고, 20개가 새로 올라왔습니다. 그중 하나는 이미 집계된 스토리가 다시 제출된 것입니다.

페이지 최상단은 아무 일도 없었습니다. 리만 증명은 9 포인트를 더해 2,929 포인트로 여전히 1위이고, 경쟁 발표는 1 포인트를 더해 2,451 포인트로 2위입니다. 24시간, 3,500개 댓글, 결론은 없습니다. 오늘 실제로 움직인 것들은 모두 다른 이유로 움직였습니다. 세계 최대 반도체 회사는 이사회 결정 하나로 1,561에서 2,777로 뛰었고, Ladybird는 알파 다운로드로 955에서 2,367이 됐고, 얀 르쿤의 네 문장짜리 트윗은 521에서 1,973이 됐습니다.

그 아래에는 실제 결과가 딸린 사건 두 개가 있습니다. Anthropic 주가가 83달러 IPO 가격을 깼고, Claude 모델이 VP는 VNP가 아니라는 주장을 담은 증명을 공개했습니다. 논문 자체의 README에는 어떤 수학자도 이를 검증하지 않았다고 적혀 있습니다.

## 2035년은 일찍 왔다: GUI를 갖춘 WebAssembly로 컴파일된 리눅스 — 890 points

**890 points** · 334 comments · [fzakaria.com](https://fzakaria.com/2026/11/23/2035-came-early) · [HN discussion](https://news.ycombinator.com/item?id=50624497)

Farid Zakaria는 `trynix.dev`를 운영합니다. 자신의 집계로 300,000개가 넘는 서로 다른 패키지 버전을 브라우저 탭 하나에서 제공합니다. 이번 주 전에도 동작은 했지만 느렸습니다. 에뮬레이션 계층이 WebAssembly로 컴파일된 QEMU였기 때문입니다. 11월 20일 그는 Domen Kožar가 Discord 채널에 `unkernel.dev`를 링크해 둔 것을 봤습니다. 리눅스 자체를 WebAssembly로 컴파일한 것으로, Pooya Parsa가 11월 19일에 공개했기에 유저랜드 프로그램만 에뮬레이션하면 됩니다. 그는 이것으로 갈아끼웠고, 이제 TCP 연결마다 Wisp 릴레이로 가는 WebSocket 하나를 통한 네트워킹, WebGL2를 통한 GL, ALSA 오디오를 갖춘 Wayland 데스크톱이 부팅됩니다.

속도 주장에는 그가 직접 단 각주가 따라붙습니다. 워크로드에 따라 `qemu-wasm`보다 2×에서 32× 빠르고, "더 빨라지도록 아주 건강한 패치 세트를 적용했다"고 합니다. 정직한 말이고, 동시에 붙잡아둬야 할 부분입니다. 벤치마크 수치는 중립적인 스위트가 아니라 그의 페이지에서 첫 실행 기준으로 잰 wall clock입니다.

이 글이 최고 신규 스토리인 이유는 벤치마크가 아닙니다. Gary Bernhardt의 2014년 발표는 2035년까지 자바스크립트가 모든 것을 삼키는 타임라인을 그렸고, 펀치라인은 브라우저 안의 브라우저 안에서 Wine으로 돌아가는 GIMP였습니다. Zakaria가 그걸 실제로 해냈습니다. Firefox 탭에서 리눅스-인-WebAssembly 위의 Firefox가 trynix.dev를 불러오고, 그 안에서 다시 Firefox를 불러옵니다. 이에 대한 그의 각주는 이렇습니다. "너무 기뻐하지는 마세요. 렌더링되는 데 한 시간이 넘게 걸렸습니다."

가장 좋은 댓글은 축하하지 않는 댓글입니다. 경쟁 arm64 버전을 만드는 데 100시간 넘게 쓴 사람이 자신은 일찍 공개한 뒤 계속할 의지를 잃었다고 말합니다. "제 것이 가진 동기와 같은 선상입니다. LLM이 도움이 될 수 있는지 보는 것이었습니다." 이것이 이 장르 프로젝트의 실제 상태입니다. 에이전트를 가진 한 사람이 자금 지원을 받았을 시스템 프로젝트를 이제 내놓을 수 있고, 옆에 있는 사람은 아무 성과도 없이 일주일 만에 앞질러질 수 있습니다.

## LLM 에이전트는 모회사를 위해 일합니다, 당신을 위해서가 아니라 — 792 points

**792 points** · 336 comments · [michaelharley.net](https://michaelharley.net/posts/2026/11/01/llm-agents-work-for-their-parent-companies-not-for-you/) · [HN discussion](https://news.ycombinator.com/item?id=50627340)

마이클 할리는 인스타그램 릴스를 받아 곡을 식별하고, 아티스트의 밴드캠프 페이지를 찾아 구매 링크를 건네는 클로드 코드 스킬을 만들었습니다. 밴드캠프가 검색 엔드포인트에 챌린지를 추가했습니다. 그러자 모델은 이를 우회하는 일을 돕지 않겠다고 설명했습니다. 반면 같은 스킬의 다른 분기는 같은 곡을 유튜브에서 기꺼이 내려받았고, 유튜브는 아티스트에게 아무것도 지불하지 않습니다.

그가 문제의 형태를 짚은 것은 맞지만, 예시는 틀렸습니다. 그가 화를 내는 거부는 올바른 동작입니다. 밴드캠프는 에이전트들이 자사를 크롤링해서 챌린지를 세웠고, 사용자를 대신해 사이트 운영자의 뜻을 무시하는 모델은 나머지 스레드가 걱정하는 바로 그 인터넷을 만듭니다. 여러 댓글 작성자가 이 점을 지적했고, 한 명은 노골적으로 말했습니다. "사이트 운영자의 뜻을 존중하도록 감히 모델을 학습시켰다고? 빌어먹을, 앤트로픽." 또 다른 사람은 McMaster-Carr의 3D 모델을 스크래핑하다 거부당해 대신 API 승인 절차를 밟았다고 설명합니다. 그것이 시스템이 작동하는 모습입니다.

나쁜 예시에도 불구하고 그 아래의 구조적 논지는 살아남습니다. 에이전트의 정책은 공급자가 정하고, 공급자의 의무는 주주와 정부를 향하며, 그 의무는 UI에 보이지 않습니다. 모델에게 챌린지를 우회하지 말라고 말할 수 있다면, 특정 제품군에 대해 무엇이라고 말할지도 정할 수 있습니다. 추천에 가중치가 붙을 것이라는 저자의 두려움은 이례적인 일이 아니라 뻔한 다음 비즈니스 모델입니다. 가장 유용한 댓글은 기술적 해법이 아니라 법적 해법을 제안합니다. LLM을 변호사나 재무 자문가처럼 고객에 대한 충실 의무를 지닌 조언자로 취급하고, 고객이 아닌 사람을 위해 행동하는 것처럼 표시하는 일을 금지하자는 것입니다.

스레드가 대체로 틀리는 한 가지는 로컬 모델 결론입니다. 할리는 자기 로봇이 자신을 위해 일하게 하려고 로컬 모델을 원한다고 말한 뒤, "오픈 모델"이 무엇을 뜻하는지는 모른다고 인정합니다. 오픈 웨이트는 체크포인트를 줄 뿐, RLHF나 시스템 프롬프트, 도구 정책을 주지는 않습니다. 그리고 이 모든 것이 사는 곳이 바로 그곳입니다.

## 뉴욕주, 자동차 구독료를 금지합니다. 예외 조항이 관건입니다 — 746 points

**746 points** · 390 comments · [governor.ny.gov](https://www.governor.ny.gov/news/money-your-pockets-governor-hochul-signs-bill-restricting-exploitative-vehicle-subscription) · [HN discussion](https://news.ycombinator.com/item?id=50622774)

호철 주지사는 23 November에 S.9348A/A.10411A에 서명했습니다. 이 법은 제조사와 딜러, 제3자 제공업체가 이미 설치된 하드웨어에 의존하고 제조사에 지속 비용이 들지 않는 차량 기능에 대해 구매 후 요금이나 반복 요금을 부과하는 것을 금지합니다. 27 February 2027에 발효되고, 법무장관이 집행합니다. 열선 시트와 원격 시동, 유료화된 추가 실내 조명이 목표입니다.

법의 실체는 예외 조항에 있고, 한 댓글 작성자가 법안 원문에서 이를 뽑아냈습니다. 내비게이션 업데이트, 인포테인먼트, 위성 라디오, 차량 내 Wi-Fi, 텔레매틱스, 긴급 도로 지원, "소프트웨어에 의존하는 운전자 지원 또는 운전 자동화 기능", 그리고 계속 작동하려면 셀룰러 연결이 필요한 모든 차량 연결 서비스입니다. 그래서 테슬라의 프리미엄 커넥티비티와 FSD 구독은 살아남고, 시리우스XM도, 온스타도 살아남습니다. 죽는 것은 이미 소유한 하드웨어를 다시 사게 하는 독일식 모델입니다.

방어할 만한 선이지만, 헤드라인보다 좁습니다. 또한 이 법의 앞날은 대부분 "지속 비용"이 무엇인가에 달려 있습니다. 제조사 변호사들이 몇 년이고 다툴 수 있는 표현이고, 집행 기구는 법무장관실 하나뿐입니다.

보도자료는 정책이 아니라 문서로서 읽을 가치가 있습니다. "뉴욕 주민들은 트럼프의 생활비 위기로 인한 물가 상승에 이미 시달리고 있습니다"로 시작해, 주지사의 다른 생활비 성과를 나열한 뒤, 법무장관과 의원 두 명의 발언을 인용합니다. 댓글 작성자들은 2015년 아큐라의 지도 업데이트에 $500를 받는 것이 열선 시트 구독과 같은 죄인지를 두고 스레드 내내 논쟁했습니다. 같지는 않지만 같은 비즈니스 모델이며, 법안은 그 부분을 건드리지 않습니다.

## Stalwart, 그대로 갈아끼울 수 있는 Exchange 대체재가 되었습니다 — 679 points

**679 points** · 336 comments · [stalw.art](https://stalw.art/blog/microsoft-exchange-replacement/) · [HN discussion](https://news.ycombinator.com/item?id=50620349)

Stalwart 1.2.0은 MAPI over HTTP와 Exchange Web Services, Exchange ActiveSync, Autodiscover를 구현합니다. 그래서 아웃룩과 애플 메일, 휴대폰 메일 앱이 Exchange에 접속하던 방식 그대로 접속합니다. 메일과 캘린더, 연락처, 작업, 메모가 한 계정에 있고, Autodiscover가 설정을 처리합니다. AGPL 커뮤니티 에디션에 들어 있고, 엔터프라이즈 등급 뒤에 있지 않습니다. 모질라의 Thundermail이 이 서버 위에서 돌아갑니다.

전략적 해석은 글 자체의 배경에 있습니다. Exchange 2016과 2019는 14 October 2025에 지원이 종료됐습니다. 유료 확장 보안 업데이트 프로그램은 연장 없이 October 2026에 끝난 것으로 알려졌습니다. Exchange Server Subscription Edition이 유일하게 지원되는 온프레미스 선택지인데, 클라우드 기능은 받지 못하고 첫 누적 업데이트도 미뤄졌습니다. 마이크로소프트는 온프레미스 Exchange의 종료를 공지한 적이 없습니다. 남은 모든 길이 Exchange Online으로 이어지게 만들었을 뿐입니다. Stalwart는 그 탈출구를 팔고 있습니다.

스레드가 찾아낸 문제는 세 가지이고, 모두 실제입니다. 첫째는 클라이언트 측입니다. 한 댓글 작성자는 새 아웃룩이 IMAP 서버 이름과 사용자 이름, 비밀번호를 마이크로소프트로 보낸다는 글 자체의 설명을 인용하며 "이건… 믿기 어렵습니다"라고 반응합니다. 서버를 갈아끼우는 것만으로 본사로 정보를 보내는 클라이언트가 고쳐지지는 않습니다. 둘째는 다른 댓글 작성자가 짚은 논리적 구멍입니다. 아웃룩이 클라우드 전용으로 가면서 온프레미스 Exchange 지원을 버린다면, 이 "그대로 갈아끼울 수 있는 대체재"는 누구를 위한 것입니까. 답은 썬더버드나 애플 메일, 휴대폰 클라이언트로 옮기는 모든 사람이지만, 글은 그렇게 말하지 않습니다. 셋째, 독일의 프리랜서와 기업은 세무 당국을 위해 GoBD를 준수하고 삭제할 수 없는 10년 메일 보관이 필요하고, 댓글 작성자들은 그것이 표준 요금제나 오픈소스 요금제에 없다고 말합니다.

가장 흥미로운 반론은 철학적입니다. MAPI와 EWS를 구현하는 것은 마이크로소프트 프로토콜 스택을 살려두고, 벗어나려는 대상을 공고히 합니다. 프로토콜을 지원하면 시간을 벌고 라이선스 비용을 아낍니다. 공유지를 만드는 것은 아닙니다.

## 모든 체에서 VP ≠ VNP, 그리고 아무도 그 증명을 검토하지 않았다 — 356 points

**356 points** · 325 comments · [github.com/anthropics](https://github.com/anthropics/formal-math/tree/main/vp-vnp) · [HN discussion](https://news.ycombinator.com/item?id=50620102)

Anthropic은 논문과 Lean 4 형식화를 공개했습니다. 모든 체에서 해밀턴 사이클 다항식에 대한 회로는 — 그리고 표수가 2가 아닌 경우 퍼머넌트에 대해서도 — 큰 m에 대해 m^(c(log m)^(1/3))개보다 많은 게이트를 필요로 하며, 근사 회로에 대해서도 같은 결과가 성립합니다. 따라서 VP는 VNP의 진부분집합이고, VNP는 VP의 폐포에 포함되지 않습니다. P 대 NP 문제를 해결한 것은 아니며, README도 두 번째 문단에서 그렇게 밝힙니다.

README의 면책 문구를 직접 읽어야 합니다. 그게 이 이야기의 핵심이기 때문입니다. "이 결과는 내부 연구용 Claude 모델이 발견했습니다. 이 폴더에는 논문과 그 Lean 4 형식화가 들어 있습니다. 둘 다 AI 모델이 작성했고, 어떤 인간 수학자도 그 증명을 검토하지 않았습니다. 연구 산출물입니다. 유지보수하지 않으며 기여를 받지 않습니다." CI에는 독립적으로 작성된 두 번째 커널이 있고, `Challenge.lean`에 대해 명제를 다시 검사하는 Comparator 스크립트도 있어서 형식화가 논문이 주장하는 것보다 약한 정리를 조용히 증명하는 일은 불가능합니다.

Lean이 여기서 사 주는 것은 실재하지만 좁습니다. 증명이 명제로부터 따라 나온다는 것을 확인해 줄 뿐입니다. 그 명제가 올바른 명제인지는 확인하지 않으며, README도 그렇게 말합니다. "이 파일이 주장되는 바를 말하고 있는지 검사하는 기계는 없습니다." 이는 대부분의 인간 저술 프리프린트가 취하는 태도보다 정직한 인식론적 입장입니다.

정작 중요한 반론은 논문 안에 있고, 한 댓글 작성자가 그것을 찾아냈습니다. "우리는 이 결과가 상대화 및 대수화와 어떤 관계인지 분석하지 않았습니다." 이 둘은 지금까지 복잡도 클래스를 분리하려던 모든 시도를 죽여온 두 가지 장벽이며, 이를 다루지 않는 것은 이 분야에서 각주가 아닙니다. 게임 전체입니다. 증명이 초록이 설명하지 않는 방식으로 이 장벽들을 우회하거나, 아니면 뭔가 잘못된 것입니다. 스레드에서 어느 쪽인지 안다고 주장하는 사람은 없습니다.

분위기가 흥미로운 부분입니다. 한 댓글 작성자: "그들이 성배(P vs NP)에 부엌 싱크대까지 던지고 있고, 이건 그 과정에서 발표할 가치가 있다고 판단한 부분 결과라는 게 꽤 명백합니다." 또 다른 사람, 문맥상 대학원생: "무엇을 골라 잡아도 1년 뒤에는 프롬프트 한 번으로 풀릴 문제입니다." 두 번째는 틀렸습니다. 아무도 읽지 않은 형식화는 풀린 문제가 아닙니다. 하지만 그것은 이번 주의 정확한 정서적 독법입니다.

## Tidal, 완전한 AI 생성 음악을 금지하다 — 305 points

**305 points** · 276 comments · [variety.com](https://variety.com/2026/music/news/tidal-bans-ai-generated-music-1236956924/) · [HN discussion](https://news.ycombinator.com/item?id=50630309)

Tidal은 12월 9일부터 완전히 AI가 생성했다고 판단하는 트랙을 제거하기 시작하며, 카탈로그는 내년 초까지 정리됩니다. Block에서 Tidal을 이끄는 Robert Andersen은 X에서 숫자를 공개했습니다. 지난 90일 동안 Tidal에 유통된 트랙의 43%가 AI 생성으로 탐지됐고, AI 생성 트랙의 96%는 재생이 0회이며, 이번 정리로 약 29 million 개 트랙이 제거되고, 앞으로 Tidal은 하루 80,000에서 85,000개의 업로드를 거부합니다.

그 발표에서 43%라는 숫자는 엄청난 일을 하고 있어서 검증이 필요합니다. 그것은 *유통된* 트랙의 비율이지 청취의 비율이 아니고, 유병률 측정이 아니라 탐지율입니다. Tidal은 자기 분류기가 얼마나 확신하는지를 말하고 있는 것이고, 이런 종류의 분류기는 흥미로운 음악이 사는 바로 그 경계에서 오탐을 만들어냅니다. AI 탐지 수치를 공개하는 사람은 그 오류율을 공개하지 않습니다. 글에서 정직한 근거는 재생에 관한 것입니다. 거의 전부가 들리지 않습니다. 이것은 예술적 원칙으로 포장된 카탈로그 위생과 대역폭 문제입니다.

나머지는 모두 플랫폼이 마케팅에 베팅하는 모습과 일관됩니다. Spotify는 올해 카탈로그에서 7,500만 개 트랙을, 추천에서 5,000만 개를 제거했고 "AI Personas"는 금지하는 대신 라벨을 붙이고 있습니다. Apple Music도 라벨을 붙입니다. 셋 중 가장 작고 Square와 Afterpay도 소유한 회사의 소유인 Tidal이 금지를 택한 곳이며, 비용은 가장 적게 들고 차별화는 가장 크게 됩니다.

스레드의 반론은 어떤 정책도 답할 수 없는 것입니다. AI 생성 트랙과 샘플러, 신스 프리셋 팩, 또는 AI 보조 마스터링 체인으로 만든 트랙 사이의 경계는 선이 아니고, 매년 움직입니다. 취미로 AI 음악을 만드는 한 댓글 작성자는 도구들이 정상적인 제작 과정에 녹아들면서 2028년에는 이 금지가 일관성 없어 보일 것이라고 예측합니다. 다른 사람은 AI 보컬이 들어간 AI 커버인 2억 회 재생 Spotify 트랙을 지적합니다. 이 금지는 중간이 이미 사라진 스펙트럼의 보이는 끝만 다룹니다.

## 누군가 GTA 6 Xbox 빌드를 올렸고, 천 명이 그것을 다시 컴파일하고 있다 — 304 points

**304 points** · 326 comments · [reddit.com](https://www.reddit.com/r/GamingLeaksAndRumours/comments/1y3jzqe/cyberleek_posted_the_gta_6_xbox_build_executable/) · [HN discussion](https://news.ycombinator.com/item?id=50612686)

Reddit 게시물 자체는 내가 시도한 모든 추출기에 6바이트만 돌려줬기 때문에, 이 내용은 스레드에서 나온 것입니다. Cyberleek이라는 사용자가 GTA 6의 Xbox 빌드 실행 파일을 공개했습니다. 그 단일 파일이 밤사이 전체 모딩 작업의 형태를 바꿨습니다. 커뮤니티는 취약한 PS5 펌웨어로 게임을 덤프한 뒤 Kyty 같은 것으로 변환하는 쪽에 걸고 있었는데, 네이티브 Xbox 빌드가 손에 들어오자 작업은 Xbox 셰이더를 다시 컴파일하고 Xbox 호출을 표준 PC 호출로 변환하는 쪽으로 옮겨갔습니다.

GitHub의 Leonida 프로젝트가 이를 공개적으로 진행하고 있고, 스레드의 처리량 숫자가 실제 이야기입니다. 분당 5~6개의 풀 리퀘스트, 1,000명이 넘는 사람이 조율, GitHub 이슈로 작업을 클레임하는 방식이며, 빌드가 나온 "불과 몇 시간 만에 이미 게임 부팅에 가까워졌습니다". 한 댓글 작성자는 이것을 "게임 커뮤니티의 컴퓨팅 수단 장악"이라고 부릅니다. 어제 라운드업에는 이미 후속이 있었습니다. Rockstar의 테이크다운, 그리고 학교에 있는 동안 그 소식을 알게 된 프로젝트 리드 개발자입니다. 그 이야기는 아래 표에 311 points, 78 상승으로 있습니다.

의심할 두 가지가 있습니다. 부팅되는 재컴파일은 실행되는 게임이 아닙니다. 셰이더 변환과 타이밍에 민감한 코드가 이 프로젝트들이 죽는 지점이고, "부팅에 가깝다"는 것은 몇 시간 만에 나온 주장입니다. 그리고 법적 위험은 유출자에게 붙지 않습니다. 조율을 호스팅하는 플랫폼에 붙고, 그래서 테이크다운이 빨리 왔습니다. 한 댓글 작성자는 Rockstar가 아이들이 아니라 모델 제공자들을 상대로 근거를 갖는지 묻습니다. 답은 제공자들에게 정확히 이 일을 위한 면책 조항이 있고, GTA 리컴프 때문에 그것을 시험할 사람은 없다는 것입니다.

## Quad9, 프랑스에서 꺼지다 — 280 points

**280 points** · 148 comments · [quad9.net](https://quad9.net/news/blog/quad9-service-deactivation-in-france/) · [HN discussion](https://news.ycombinator.com/item?id=50625384)

오늘 파리 시간 09:00에 Quad9은 프랑스 사용자의 쿼리에 대한 응답을 완전히 중단했습니다. 필터링이 아니라 거부입니다. 한 댓글 작성자는 프랑스에서 9.9.9.9에 `dig`를 날린 결과 `status: REFUSED`와 확장 DNS 오류 18, "프랑스 법적 제약으로 서비스 불가"를 붙였고, 다른 이들은 AdGuard와 라우터 설정이 아무 설명 없이 먹통이 됐다고 보고했습니다.

사슬은 이렇습니다. 스포츠 권리 보유자인 beIn이 불법 복제 스트리밍 사이트라고 주장하는 도메인을 Quad9이 차단하라고 요구했습니다. 프랑스 법원이 그 요구를 인용했습니다. Quad9은 미준수로 벌금을 물었습니다. Quad9의 입장은 이것이 불법 복제 문제가 아니라 병목 문제라는 것입니다. 재귀 DNS 제공자는 독점이 없고, 누구나 몇 초 만에 리졸버를 세울 수 있으며, 리졸버에 필터링을 강제해도 원본 서버에는 닿지 않습니다. Quad9의 설명에 따르면 법원은 그 논거를 전혀 다루지 않았습니다.

Quad9이 글에서 정면으로 다루는 곤란한 부분은, 사용자를 기록하지 않는데 어떻게 프랑스 사용자를 차단하느냐입니다. GeoIP입니다. 그리고 그것은 Quad9이 수년간 개별 이름의 선택적 해석 거부에는 불충분하다고 주장해 온 바로 그 메커니즘입니다. 차이는 세밀도입니다. IP로 국가 전체를 거부하는 것은 작동할 만큼 조잡하고, 특정 사용자에게 특정 도메인을 차단하는 것은 그렇지 않습니다.

같은 이야기에 대한 세 번째 HN 스레드입니다. 철회가 발표된 한 달 전에 1,382 points, 지난주 Cloudflare의 글에 911, 그리고 실제 스위치오프에 279입니다. 이 감쇠 곡선은 정상이고 또한 요점입니다. 발표가 분노를 받았고, 비활성화는 각주를 받았고, 실제로 일어난 일은 아무도 논쟁하지 않은 그 일입니다.

## 워싱턴에서 누가 Nvidia 주식을 보유하고 거래하는가 — 276 points

**276 points** · 159 comments · [kadoa.com](https://www.kadoa.com/congress/insights/trump-nvidia) · [HN discussion](https://news.ycombinator.com/item?id=50626861)

Kadoa는 Trump와 의회 의원 37명의 공개된 모든 Nvidia 거래를 Nvidia의 일일 종가와 겹쳐 추적하는 트래커를 만들었습니다. 헤드라인 숫자는 2026년 매수 28 purchases 총 $5.1M에서 $16.7M, 매도 15 sales 총 $4.4M에서 $12M입니다. Nvidia는 10월 고점에서 11월 20일까지 48% 하락했고(그 사이 Huang의 사임과 분기 실적이 있었습니다), 11월 23일 이사회가 미국 정부 고위층의 의견을 인용해 그를 복귀시키자 33% 상승했습니다.

그러고 나서 그것을 무력화하는 단서가 있고, 사이트는 그것을 분명히 밝힙니다. 11월 19일에 공개된 Trump의 최신 공개 자료는 9월 24일까지의 거래만 다룹니다. 차트에는 "Huang out — May not be reported yet"이라는 표시가 있습니다. 즉 누구나 실제로 보고 싶어 하는 기간, 사임과 복귀 사이의 창이 최대 한 달 반 더 보이지 않는다는 뜻입니다. 의회 의원들은 보고에 45일이 있고, 한 댓글 작성자는 기한을 놓쳐도 실질적 제재가 없다고 지적합니다.

그래서 오늘 말할 수 있는 것은, 칩 정책과 수출 통제에 투표권이 있는 많은 사람들이 가장 큰 칩 회사를 매주 거래하며, 공개된 범위가 (한 줄은 $1,001–$15,000, 다른 줄은 $1,000,001–$5,000,000) 거의 모든 실제 포지션을 숨길 만큼 넓다는 것입니다. 말할 수 없는 것은 누군가 복귀에 맞춰 거래했다는 것입니다.

스레드의 분열은 익숙합니다. 절반은 차트를 조직적 공모의 증거로 보고, 절반은 공개 자료가 설계상 낡았고 범위가 무용하다고 지적합니다. 둘 다 맞습니다. 공개 제도는 실질 없이 투명성의 외관을 만들어내도록 보정되어 있고, 그것은 그것을 작성한 모든 사람을 만족시키는 유일한 결과입니다.

## Anthropic, $83 IPO 가격 아래로 내려가다 — 235 points

**235 points** · 494 comments · [bloomberg.com](https://www.bloomberg.com/news/articles/2026-11-24/anthropic-breaks-below-83-ipo-price-in-premarket-trading) · [HN discussion](https://news.ycombinator.com/item?id=50627836)

Bloomberg의 보도는 유료 장벽이 있었고 모든 추출기에 403을 돌려줬지만, 통신 원문은 검색 색인에 있고 Reuters도 같은 숫자를 갖고 있습니다. Anthropic은 $83에 가격을 정했고 11월 19일 $111.50에 개장했으며, 화요일 프리마켓에서 $81.28까지 떨어졌다가 회복했습니다. 기록적 데뷔에서 일주일, 3일 연속 하락 세션입니다. Reuters는 낙폭을 12.6%, $76.60까지로 잡고 약 $200 billion의 시가총액이 사라졌다고 봅니다.

중요한 메커니즘은 그린슈입니다. IPO는 여러 배 초과 청약이었습니다. $119.5 billion 조달에 대해 $500 billion이 넘는 수요, 약 1,200곳의 기관 투자자가 주문을 넣었고 그 절반 이상은 아무것도 배정받지 못했습니다. 인수단은 초과 배정분으로 주식을 사서 일정 기간 공모가를 방어하는데, TradingKey의 해석은 그 자금이 세 번째 세션에 소진됐고 그때 $83이 버티기를 멈췄다는 것입니다. 유통 물량은 수요에 비해 아주 작고, 이는 급등과 붕괴 모두 사업에 대한 누군가의 견해가 아니라 배정 메커니즘의 문제였음을 뜻합니다.

모두가 꺼내는 비교는 SpaceX로, IPO 가격보다 67% 위에서 달리다가 5주가 안 되어 그 아래로 떨어졌습니다. 그것이 기저율입니다. 크고 화제가 되고 유통 물량이 적은 상장이 한 달 안에 공모가 아래로 가는 것은 드문 일이 아니고 아무것도 예고하지 않습니다. 한 댓글 작성자는 이 점의 냉정한 버전을 말합니다. 초기 성과가 좋지 않은 것은 1년, 2년, 3년 뒤 주가가 어디에 있는지와 거의 관계가 없습니다.

스레드의 분위기는 오히려 반대에 가깝습니다. "AI가 변혁적 기술일 수 있고, 수조 단위의 이익이 있을 수 있고, Anthropic이 선도적인 프런티어 연구소일 수 있고, 그들의 주식이 형편없는 투자일 수 있다." 그것이 한 문장에 담긴 논쟁 전체이고, 234 points에 492 comments라는 것은 논쟁이 기사보다 뜨겁게 달리고 있다는 뜻입니다.

## Check Point 관리 서버를 겨냥한 진행 중인 침해 캠페인 — 219 points

**219 points** · 84 comments · [greynoise.io](https://www.greynoise.io/blog/check-point-security-management-servers-intrusion-campaign) · [HN discussion](https://news.ycombinator.com/item?id=50630594)

GreyNoise는 2026년 10월 17일부터 11월 2일 사이 Check Point Security Management Server에 대한 공격을 추적했고, 영국, 아일랜드, 프랑스, 네덜란드, 그리스, 독일, 오스트리아, 불가리아, 폴란드, 인도, 태국에 걸친 최소 22개 조직에서 확인했습니다. 뚜렷한 업종이나 지역 패턴은 없습니다. 이 활동을 GreyNoise Threat 13으로 추적하며, 단일 취약점이 아니라 인프라, 도구, 침해 후 행동을 다룹니다.

읽을 가치가 있는 기술적 세부는 스레드에 있고, 보고서에서 인용한 것입니다. HFS 서버를 상대로 `loginSrp1` 엔드포인트에 대한 각 POST가 서명된 세션 쿠키를 반환했는데, 그 `sid` 값이 JavaScript의 `Math.random()`에서 나왔습니다. 충분히 많은 연속 로그인을 모으면 V8 PRNG의 내부 상태를 재구성하고, 쿠키 서명 키를 복구하고, 관리자 세션 쿠키를 위조할 수 있습니다. 그것은 Check Point의 버그가 아니라 보안 토큰에 비암호학적 PRNG를 사용한 애플리케이션이고, 앞으로 10년간 모든 사고 보고서에 나올 종류의 일입니다.

보고서가 결론짓지 못한 두 가지 열린 질문이 있고, 댓글 작성자들이 둘 다 묻습니다. 초기 접근: 여러 Check Point 고객에 걸친 상관관계는 CVE-2026-16232를 가리키지만, 그것이 벡터라면 22개 피해자 모두 관리 서버가 인터넷에서 접근 가능했다는 뜻이고, 그게 진짜 발견이며 어떤 벤더도 패치할 수 없는 설정 실패입니다. 귀속: 도구와 인프라 외에는 없습니다.

가장 방어 가능한 댓글은 지루한 것입니다. 이 특정 행위자들이 모델을 썼든 아니든, 이 부류의 버그를 찾아 연결하는 한계 비용은 떨어졌고 시도할 수 있는 인구는 자릿수 단위로 늘었습니다. 흥미로운 질문은 이제 누가 공격하는가가 아니라 몇 명이 공격하는가입니다.

## 섹션 아래, 그 밖의 새 글들

- **[GPUI, 자체 저장소를 갖는다](https://github.com/zed-industries/gpui)** ([374 points](https://news.ycombinator.com/item?id=50619103), 137 comments) — Zed의 Rust UI 프레임워크가 에디터 저장소에서 빠져나옵니다. 현재 README는 링크 두 개와 "몇 주 뒤에 봅시다"라는 문장이 전부입니다. 문서 상황에 대한 한 댓글러의 요약은 이렇습니다. "웹사이트에도, 문서에도, 저장소에도 스크린샷이 없습니다."
- **[Bored.com](https://www.bored.com/)** ([325 points](https://news.ycombinator.com/item?id=50619207), 65 comments) — 1990년대 "멋진 웹사이트" 목록 디렉터리로 지금도 남아 있습니다. 아케이드와 게임 목록이 붙었고, 그 시절을 기억하는 사람들이 프런트페이지의 4분의 1을 채웠습니다. 사이트 자체의 상식 로테이터: "스위스에서는 기니피그를 한 마리만 키우는 것이 불법입니다."
- **[Win4wine](https://github.com/mikuta0407/win4wine)** ([248 points](https://news.ycombinator.com/item?id=50610743), 128 comments) — 패치한 Wine 위에서 Windows XP의 실제 `explorer.exe`를 리눅스 데스크톱 셸로 돌립니다. 리눅스 앱은 XP 창틀을 입고, XP의 트레이가 리눅스 상태 아이콘을 담습니다. 마이크로소프트 파일은 포함하지 않으며 XP ISO는 직접 준비해야 합니다. 대신 ReactOS 셸을 받아오는 방법도 있습니다. LGPL-2.1, 346 stars, 명시적으로 실험적이고 새로 설치한 Debian 13에서만 테스트했습니다. 댓글러들은 곧바로 반대 방향을 요구합니다. NT 커널에 리눅스 유저랜드를 얹는 쪽입니다.
- **[The Spray Bottle](https://mechanical-pencil.com/products/spray-bottle)** ([244 points](https://news.ycombinator.com/item?id=50598555), 71 comments) — 방아쇠 분무기를 부품별로 뜯어보는, 그림이 곁들여진 인터랙티브 분해입니다. 전체를 작동시키는 일방향 밸브까지 포함합니다. 아름답지만, 구조를 확실히 아는 한 댓글러에 따르면 한 군데가 틀렸습니다. 피스톤 챔버는 한 번 누른 뒤 비지 않습니다. 안으로 공기를 밀어 넣는 것이 없기 때문입니다.
- **[인도 야당, 인스타그램 계정 차단 문제로 메타 사무실 점거](https://korben.info/en/india-opposition-storms-meta-offices-instagram-accounts.html)** ([227 points](https://news.ycombinator.com/item?id=50624487), 106 comments) — 인도 청년회의소(Indian Youth Congress) 활동가들이 금요일 메타의 하이데라바드 사무실을 점거했습니다. 11월 19일 인스타그램이 이 단체 회장과 소셜미디어 책임자의 계정을 차단한 뒤였습니다. 뭄바이와 구루그람에서도 시위가 이어졌고, 계정 두 개는 다음 날 복구됐으며, 단체는 메타에 7일의 시한을 줬습니다. 메타는 2026년 상반기에 인도에서 540만 건이 넘는 게시물·계정을 제한했습니다. 2025년 한 해 전체가 약 7만 건이었던 것과 비교됩니다. 정부는 3월부터 7월 사이에 거의 20만 건의 차단 명령을 내렸고, 삭제 기한을 36시간에서 3일로 줄였습니다. 영상을 본 한 댓글러는 "점거"라는 표현이 과하다고 말합니다. 밖에서 열린 작은 시위였다는 것입니다. 원보도는 The Verge에 있습니다.
- **[Jetty Pro](https://hypercritical.co/2026/11/23/jetty-pro)** ([214 points](https://news.ycombinator.com/item?id=50630462), 84 comments) — John Siracusa가 만든 맥용 폴더 팔레트입니다. DragThing에서 마지막으로 그리웠던 기능이었고, 하루이틀이면 되겠거니 했다가 세 달 반 동안 바이브코딩으로 만들었습니다. 구독제입니다. 최상위 댓글은 뻔한 타협안을 제시합니다. 구독이 끝난 시점에 작동하던 버전은 계속 쓰게 해주자는 것입니다.
- **[AMD EPYC Zen 6 vs. Zen 1: 10년 안에 기하평균 12.1×](https://www.phoronix.com/review/amd-epyc-9006-7601)** ([212 points](https://news.ycombinator.com/item?id=50624061), 115 comments) — 2P Zen 1 Naples 시스템(64코어, 128스레드)과 2P Zen 6 Venice 시스템(192코어, 384스레드)을 비교합니다. 한 댓글러가 헤드라인이 하지 않은 분해를 해냅니다. 12.1× 중 코어 수만으로 약 3×가 설명되고, 나머지 약 4×는 아키텍처에서 나왔습니다. AVX-512, 캐시, 클럭입니다. 와트당 성능은 약 5× 올랐습니다. 가격은 내리지 않았습니다. 2017년 플래그십이 $5,783, 2026년 제품이 $14,904입니다.
- **[P vs. NP에 달려드는 에이전트 군집, 실시간](https://pequalnp.com/)** ([206 points](https://news.ycombinator.com/item?id=50604314), 172 comments) — 여러 에이전트가 공개적으로 이 문제를 푸는 모습을 보여줍니다. 리더보드, 실시간 뷰어, 반박된 접근법을 모은 "묘지", 그리고 지금은 "아직 스폰서 없음"이라고 적힌 스폰서 벽이 있습니다. 글을 쓰는 시점에 기록된 것은 없습니다. 검증된 보조정리도, 반박된 주장도 없습니다. 스레드에서 가장 좋은 비판은 이렇습니다. 최근의 큰 결과들은 실제 수학자들이 도메인 지식으로 탐색 공간을 좁혀 준비한, 공개되지 않은 모델에서 나왔는데 이 프로젝트에는 둘 다 없다는 것입니다.
- **[Worshipping at the altar of Brendan Gregg](https://fzakaria.com/2026/11/12/worshipping-at-the-altar-of-brendan-gregg)** ([201 points](https://news.ycombinator.com/item?id=50626413), 35 comments) — Zakaria는 자신의 결정적 VM에 `rewind time` 명령을 추가했습니다. CPU 프로파일 대신 크리티컬 패스를 보고합니다. 데모는 이렇습니다. libuv 빌드와 테스트 실행이 가상 CPU 하나에서 78초 걸리고, 64코어에서도 47.4초 걸립니다. 그 시간의 3분의 2 동안 작업이 `epoll_pwait`와 `clock_nanosleep`에서 잠들어 있기 때문입니다. 한 댓글러는 조사가 각주에서 끝난다고 지적합니다. 테스트가 일부러 잠드는 것이고, 전체가 단일 스레드라 실제 파이프라인에 대해 말할 수 있는 범위가 좁다는 것입니다.

## 여전히 페이지에 남은 것들

이월된 스토리는 78개입니다. 가장 큰 세 가지 상승은 모두 새 정보가 아니라 이틀째 가속입니다. 르쿤의 다리오 아모데이 비판은 521 → 1,973 (+1,452), 레이디버드 알파는 955 → 2,367 (+1,412), 엔비디아 CEO 복귀는 댓글 3,656개 위에서 1,561 → 2,777 (+1,216)으로 올랐습니다. 한 사람이 운영하는 문서 사이트를 Arm이 접게 만든 일은 문서가 BSD 라이선스였다는 점이 알려지면서 505 → 1,154로 두 배 이상이 됐습니다.

| 스토리 | 이전 | 11월 24일 |
| --- | --- | --- |
| [레벤트 알포게, 일반화 리만 가설 증명 주장 [pdf]](https://alpo.ge/remark.pdf) | 2,920 (11-23) | 2,929 (+9) |
| [엔비디아, 젠슨 황 CEO 복귀](https://www.cnbc.com/2026/11/23/nvidia-jensen-huang-ceo.html) | 1,561 (11-23) | 2,777 (+1,216) |
| [급한 발표: 알레산드로 마술로 GRH](https://math216.wordpress.com/2026/11/20/hurried-announcement-alessandro-masullo-grh/) | 2,450 (11-23) | 2,451 (+1) |
| [레이디버드, 알파 버전 공개](https://ladybird.org/posts/alpha/) | 955 (11-23) | 2,367 (+1,412) |
| [“다리오는 오픈소스 모델을 불법으로 만들고 자기 통제력을 유지하려 위험을 과장한다”](https://twitter.com/ylecun/status/2124550037912920090) | 521 (11-23) | 1,973 (+1,452) |
| [잉클링 2 미니](https://thinkingmachines.ai/news/inkling-2-mini/) | 1,473 (11-23) | 1,482 (+9) |
| [췌장암 치료 알약, '수십 년 만의 최대 돌파구'로 평가](https://www.theguardian.com/society/2026/nov/20/pill-pancreatic-cancer-breakthrough-daraxonrasib) | 1,379 (11-23) | 1,394 (+15) |
| [도요타·닛산·혼다, 부품 표준화로 원가 절감 추진](https://www.caranddriver.com/news/a74490092/toyota-nissan-honda-standardize-parts-lower-costs/) | 1,369 (11-23) | 1,392 (+23) |
| [리만 가설의 Lean 검증](https://leanprover-community.github.io/blog/posts/riemann-hypothesis/) | 1,237 (11-23) | 1,246 (+9) |
| [GLM-5.4: 첫 루프 트랜스포머로 향하는 범용 코딩](https://z.ai/blog/glm-5.4) | 942 (11-23) | 1,160 (+218) |
| [Arm의 요청에 따라 이 사이트는 2026년 12월 4일 종료됩니다 :(](https://arm.jonpalmisc.com/) | 505 (11-23) | 1,154 (+649) |
| [앤스로픽의 나스닥 상장](https://www.reuters.com/business/finance/anthropics-historic-debut-put-ais-promise-peril-wall-st-test-2026-11-19/) | 1,144 (11-23) | 1,146 (+2) |
| [인터넷 아카이브의 잊힌 영상으로 만든 무료 대안 TV 네트워크](https://spelunkr.tv) | 882 (11-23) | 1,063 (+181) |
| [2028년 앤스로픽 전력의 87%는 가스, 11%는 석탄에서 나온다](https://betterdatacenterproject.com/2026/11/16/how-ai-is-powered-a-breakdown-of-byop-and-grid-power/) | 1,021 (11-23) | 1,036 (+15) |
| [바이러스 주입으로 세 환자의 췌장암 진행 멈춰](https://www.newscientist.com/article/2528235-pancreatic-cancer-halted-by-virus-injection-in-three-patients/) | 889 (11-23) | 892 (+3) |
| [다시는 Framework 하드웨어를 사지 않겠다](https://poolp.org/posts/2026-11-20/ill-never-buy-framework-hardware-again/) | 834 (11-23) | 836 (+2) |
| [실리콘밸리에 무슨 일이 있었나?](https://www.oreilly.com/radar/what-happened-to-silicon-valley/) | 788 (11-23) | 820 (+32) |
| [Slopstrap – 사이트를 급히 바이브코딩한 것처럼 보이게 만들기](https://slopstrap.mikelacher.com/) | 801 (11-23) | 810 (+9) |
| [잉클링·Qwen·Unsloth로 시작하는 로컬 AI 입문 가이드](https://www.gpupartner.com/blog/beginners-guide-local-ai-inkling-qwen-unsloth) | 720 (11-23) | 769 (+49) |
| [Ask HN: 2년째 실업 상태입니다. 경력 15년, 미국. 어떻게 해야 할까요?](https://news.ycombinator.com/item?id=50583761) | 738 (11-23) | 751 (+13) |
| [쉬운 말로 설명하지 못한다면 이해하지 못한 것이다 (2017)](https://kottke.org/17/06/if-you-cant-explain-something-in-simple-terms-you-dont-understand-it) | 717 (11-23) | 723 (+6) |
| [아지드화납 더미 폭발시키기](https://www.science.org/content/blog-post/detonating-huge-pile-lead-azide-really) | 713 (11-23) | 717 (+4) |
| [퍼플렉시티와 지능](https://openai.com/index/perplexity-and-intelligence/) | 686 (11-23) | 715 (+29) |
| [내 모니터가 다운로드 속도를 75% 깎고 있었다](https://blog.tymscar.com/posts/studiodisplayethernet/) | 693 (11-23) | 698 (+5) |
| [Frostbite: AI가 발견하고 설계하고 검증한 새 CPU 아키텍처](https://architectlabs.com/blog/frostbite) | 683 (11-23) | 686 (+3) |
| [GTA 6의 새들: 바이스 시티와 레오니다 야생동물 도감](https://www.audubon.org/magazine/birds-of-gta-6-field-guide-vice-city-wildlife) | 627 (11-23) | 638 (+11) |
| [우리는 개발자들에게 알리지도 않고 아키텍트로 승진시켰다](https://manidoraisamy.com/developer-to-architect.html) | 618 (11-23) | 624 (+6) |
| [XNU Linux: 리눅스 위의 완전한 OS X GUI 유저스페이스](https://github.com/AFK-surf/xnulinux) | 572 (11-23) | 619 (+47) |
| [샌드위치 시뮬레이터](https://stulle.app/) | 607 (11-23) | 614 (+7) |
| [애플, 9년 만에 내 오픈소스 앱을 EU 앱스토어에서 제거](https://github.com/glushchenko/fsnotes/discussions/2056) | 298 (11-23) | 611 (+313) |
| [5.4GB 메모리에서 돌리는 잉클링-2-미니](https://github.com/ShinMegamiBoson/lookatmyquant) | 595 (11-23) | 598 (+3) |
| [iOS에 아직 WebKit 아닌 브라우저가 없는 이유](https://blog.mozilla.org/en/mozilla/internet-policy/apple-ios-browser-engine-rules/) | 593 (11-23) | 597 (+4) |
| [모바일 OS에서 AI 에이전트의 데이터 수집 제한](https://signal.org/blog/protecting-your-privacy/) | 581 (11-23) | 583 (+2) |
| [클로드, 블랙홀 물리학의 미해결 문제 두 개 풀어](https://www.anthropic.com/research/claude-black-hole-physics) | 579 (11-23) | 579 (+0) |
| [카니발 크루즈, 유럽 전체 자동차보다 황산화물 10배 배출 (2019)](https://ecohustler.com/article/one-corporation-to-pollute-them-all/) | 561 (11-23) | 563 (+2) |
| [비강제 나비에-스토크스 특이점과 일반화 리만 가설](https://terrytao.wordpress.com/2026/11/20/unforced-euler-singularity-unforced-navier-stokes-singularity-and-the-generalized-riemann-hypothesis/) | 550 (11-23) | 550 (+0) |
| [AI 매도세로 앤스로픽 둘째 날 식자 나스닥, 2026년 상승분 전부 반납](https://www.theguardian.com/business/2026/nov/20/global-stock-markets-slump-anthropic-ipo-ai-sell-off) | 530 (11-23) | 530 (+0) |
| [구글, OEM에 GrapheneOS와 부트로더 잠금 해제 반대 압박](https://grapheneos.social/@GrapheneOS/117645038299496084) | 508 (11-23) | 511 (+3) |
| [언어 모델은 자기 가중치를 다시 쓸 수 있다](https://arxiv.org/abs/2611.21885) | 493 (11-23) | 494 (+1) |
| [Kagi 메일 (공개 베타)](https://blog.kagi.com/kagi-mail-public-beta) | 233 (11-23) | 453 (+220) |
| [“이건 당신이 직접 쓴 게 보인다”](https://em-online.bearblog.dev/i-can-tell-you-wrote-this-yourself/) | 430 (11-23) | 431 (+1) |
| [마음이 몸을 조종하게 해 당신을 조종하기](https://notnottalmud.substack.com/p/getting-the-mind-to-steer-the-body) | 410 (11-23) | 413 (+3) |
| [코드 작성을 멈추면 리뷰 실력도 떨어진다](https://cekrem.github.io/posts/if-you-stop-writing-code-you-also-get-worse-at-reviewing-it/) | 402 (11-23) | 404 (+2) |
| [PostgreSQL 19](https://www.postgresql.org/docs/release/19.0/) | 399 (11-23) | 399 (+0) |
| [NINLIVE: 나인 인치 네일스 라이브 아카이브](https://ninlive.com/) | 382 (11-23) | 384 (+2) |
| [버스와 비행기, 배가 실시간으로 움직이는 미니어처 샌프란시스코](https://smallsf.com/) | 367 (11-23) | 376 (+9) |
| [OpenSSL: EVP_EncodeBlock() 버퍼 오버플로 (CVE-2026-121481, CVSS 9.8)](https://github.com/openssl/openssl/pull/33652) | 376 (11-23) | 376 (+0) |
| [제미나이 4 네온, 모델 엔지니어링 지수 1위](https://git-aarvin.github.io/mei/) | 372 (11-21) | 376 (+4) |
| [확률적 앵무새들이 리만 가설을 증명한 모양이다](https://scottaaronson.blog/?p=10344) | 359 (11-23) | 363 (+4) |
| [탐사선, 사상 두 번째 수성 궤도 진입 임무로 수성 도착](https://www.theguardian.com/science/2026/nov/20/spacecraft-mercury-second-ever-mission-orbit-bepicolombo) | 234 (11-23) | 362 (+128) |
| [Show HN: LLM의 서브에이전트가 되는 게임을 만들었습니다](https://github.com/gulivan/worker755) | 356 (11-23) | 360 (+4) |
| [98% 슬롯머신: 유료 광고가 어떻게 착취세가 되었나](https://globalcommercegraph.com/writing/the-ninety-eight-percent-slot-machine) | 343 (11-23) | 344 (+1) |
| [캡슐당 커피 양을 줄이려는 네스프레소의 프로젝트](https://alvinbunk.wordpress.com/2026/11/01/nespresso-project-olympus/) | 208 (11-23) | 342 (+134) |
| [나비에-스토크스 방정식의 유한 시간 폭발](https://github.com/tristanbuckmaster/navier-stokes/) | 325 (11-23) | 326 (+1) |
| [Nospeaker ─ 햅틱 모터로 맥북 트랙패드가 말하게 하기](https://github.com/os6/nospeaker) | 235 (11-23) | 323 (+88) |
| [사람들은 당신의 블로그 글에 관심이 없다고 가정하라](https://danielsada.tech/blog/assume-people-are-not-interested-in-your-blog-post/) | 311 (11-23) | 318 (+7) |
| [FFmpeg 9.1 '가우스'](https://ffmpeg.org/download.html#release_9.1) | 315 (11-23) | 316 (+1) |
| [마술로의 리만 가설 해설](https://johncarlosbaez.wordpress.com/2026/11/22/masullo-on-the-riemann-hypothesis/) | 302 (11-23) | 312 (+10) |
| [GTA 6 리컴프(레오니다), 리드 개발자가 학교에 있는 사이 GitHub에서 차단](https://github.com/ItsNotRexed/Leonida/issues) | 233 (11-23) | 311 (+78) |
| [미 SEC의 엔비디아 조사, 회계 문제 가능성 살펴 – 소식통](https://www.marketscreener.com/news/us-sec-s-nvidia-probe-is-examining-potential-accounting-issues-sources-say-ce785ed3dd8ff627) | 307 (11-23) | 308 (+1) |
| [추론 제공자들의 데이터 처리 사고](https://openrouter.ai/blog/announcements/data-processing-incidents-on-inference-providers/) | 293 (11-23) | 294 (+1) |
| [DreamCoder: Mastering Emacs 저자가 만든 코딩 하네스와 IDE](https://www.masteringemacs.org/article/announcing-dreamcoder) | 286 (11-23) | 289 (+3) |
| [구글 직원들, AI 원치 않는 학교를 처벌하지 말라고 회사에 요구](https://www.motherjones.com/politics/2026/11/google-alphabet-union-school-ai-protest-gemini-workers-petition/) | 284 (11-23) | 284 (+0) |
| [그렇다, Lean 1,700만 줄은 많은 양이다](https://micjm.com/blog/yes-17m-lines-of-lean-is-a-lot/) | 248 (11-23) | 272 (+24) |
| [GL.iNet 보안 공지 2026-11-20](https://www.gl-inet.com/en-us/blogs/blog/glinet-security-notice-2026-11-20) | 265 (11-23) | 271 (+6) |
| [GPGME 관련 GnuPG 보안 권고](https://lists.gnupg.org/pipermail/gnupg-announce/2026q4/000517.html) | 265 (11-23) | 265 (+0) |
| [앞으로 만들 100개의 Rust GUI에 대한 조언](https://linebender.org/blog/next-100-guis/) | 261 (11-23) | 264 (+3) |
| [알레산드로 마술로 원고의 Lean 형식화 진행 지도](https://claude.ai/artifact/CtQyX8qfYAF822bgHJHHE3) | 255 (11-23) | 260 (+5) |
| [다음번 보안 지옥의 원](https://blogs.gentoo.org/mgorny/2026/10/27/the-next-circle-of-security-hell/) | 212 (11-23) | 259 (+47) |
| [Backblaze 수집 고지 및 개인정보 처리방침](https://www.backblaze.com/company/policy/privacy) | 254 (11-23) | 255 (+1) |
| [오픈 소셜 웹 연합](https://osw-alliance.net/en/) | 252 (11-23) | 254 (+2) |
| [레오니다 – GTA 6 엑스박스판 PC 리컴파일](https://github.com/ItsNotRexed/Leonida) | 233 (11-23) | 254 (+21) |
| [Oxygene이 만들어진 과정](https://jeanmicheljarre.com/aaa/the-making-of-oxygene) | 231 (11-23) | 232 (+1) |
| [DeFlock America 페이스북 그룹, 위험 단체로 정지](https://www.facebook.com/shugvermonte/posts/the-deflock-america-group-with-over-840k-members-has-been-suspended-by-meta-what/10165140280736049/) | 205 (11-23) | 221 (+16) |
| [Re: 리만](https://borretti.me/article/re-riemann) | 219 (11-23) | 219 (+0) |
| [Fast-Anything: Rust로 다시 쓰지 마라. 느린 5%만 다시 써라](https://github.com/EL4CTEO/fast-anything) | 206 (11-23) | 211 (+5) |
| [Jujutsu 입문](https://ethanlowman.com/posts/jj-primer/) | 210 (11-23) | 210 (+0) |
| [Clojure는 프로그래밍을 생각하는 방식을 바꾼다 (2017)](https://eli.thegreenplace.net/2017/clojure-the-perfect-language-to-expand-your-brain/) | 209 (11-23) | 209 (+0) |

## 관통하는 흐름

세 갈래 흐름이 있고, 첫 번째는 누가 실제로 결정하는가에 관한 것입니다.

엔비디아 이사회는 CEO를 해임했다가 11일 만에 복귀시켰습니다. 그 보도자료는 결정의 입력값으로 미국 정부를 명시했고, 독립 조사와 SEC 조사는 여전히 진행 중입니다. 앤스로픽 주가는 인수단이 사기를 멈춘 순간 공모가 아래로 떨어졌습니다. 그것은 회사에 대한 누군가의 판단이 아니라 배정 일정이 만든 결정입니다. 인도 청년의회는 문을 부수고 들어가 계정 두 개를 되찾았고, 200,000건의 정부 차단 명령과 540만 건의 메타 집행 조치는 언급되지 않았습니다. 프랑스 법원은 DNS 리졸버에 도메인 필터링을 명령했고, 리졸버는 거부하고 나라를 떠났습니다. 모든 경우에 정식 절차는 존재합니다. 정관, 투자설명서, 이용약관, 법령입니다. 그리고 모든 경우에 결과를 정한 것은 절차보다 더 큰 지렛대를 가진 무언가였습니다.

두 번째 흐름은 기계의 출력이 이제 인간의 검증보다 빨리 도착한다는 것이고, 이 페이지는 그 값을 매기기 시작했습니다. 앤스로픽은 Lean 형식화를 붙인 VP ≠ VNP 증명을 공개했고, README에는 “인간 수학자 중 이 증명을 검증한 사람은 없다”는 문장을 넣었습니다. 댓글은 곧장 논문이 분석하지 않았다고 인정한 두 장벽, 상대화와 대수화로 향했습니다. 레이디버드의 적합성 개선은 에이전트를 실패하는 테스트에 붙여서 나왔습니다. 누군가는 유출된 GTA 6 엑스박스 빌드를 천 명의 자원봉사자와 함께 다시 컴파일했고, 사람들은 GitHub 이슈에서 작업을 차지하며 분당 다섯 건의 풀 리퀘스트를 냈습니다. P 대 NP 에이전트 함대도 실제입니다. 살아 있는 스웜, 공개 리더보드, 그리고 아직 기록에 남은 것은 없습니다. 병목은 작업을 만드는 데서 그것이 쓸 만한지 아는 데로 옮겨갔고, 이 첫 페이지의 누구도 후자에 대한 답을 갖고 있지 않습니다.

세 번째 흐름은 탈출의 값입니다. 뉴욕은 이미 산 하드웨어에 구독을 붙이는 것을 금지했고, 곧바로 집으로 신호를 보내는 모든 것을 예외로 뒀습니다. Stalwart는 Exchange를 떠날 수 있도록 마이크로소프트의 4가지 프로토콜을 구현했고, 그 대가로 마이크로소프트의 프로토콜을 계속 살려 둡니다. Tidal은 AI 트랙 2,900만 개를 삭제하고 하루 85,000건의 업로드를 거부할 예정인데, 이는 예술적 결정의 옷을 입은 카탈로그 정리 결정입니다. Bandcamp는 봇 차단을 걸었고, 에이전트는 사용자가 아니라 모회사에 따랐습니다. O'Reilly의 글은 어제 이 페이지에 있었고 여전히 이론입니다. 목적 함수가 원하는 결과가 아닌 다른 것으로 설정되면 시스템 안의 모든 사람이 같은 결과로 수렴하며, 그중 누구도 악당이 아닙니다.
