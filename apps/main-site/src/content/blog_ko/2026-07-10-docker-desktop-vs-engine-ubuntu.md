---
title: "우분투에서 도커 데스크톱은 성능의 함정이다 — 도커 엔진을 써야 하는 이유"
pubDate: 2026-07-10
description: "도커 데스크톱(Docker Desktop)은 리눅스에서도 가상머신(VM) 위에서 컨테이너를 띄운다. 우분투 환경이라면 GUI 패널 하나를 얻으려고 엄청난 성능 손실을 감수하고 있는 셈이다. 그 이유와 해결책을 정리한다."
draft: false
tags: ["docker", "ubuntu", "linux", "devops", "containers", "performance"]
audioUrl: "https://file.duklee.net/audio/2026-07-10-docker-desktop-vs-engine-ubuntu.wav"
lang: "ko"
---

어쩌면 당연한 사실인데도 그동안 간과하고 있던 점을 오늘 발견했다. 우분투(Ubuntu) 환경에서 도커 데스크톱(Docker Desktop)은 네이티브 도커 엔진(Docker Engine)보다 확연히 느리다는 사실이다. 단순히 조금 느린 수준이 아니라 구조적인 아키텍처 차이에서 오는 태생적 지연이다. 그래픽 대시보드 창 하나를 띄우겠다고, 리눅스 호스트 시스템 안에서 리눅스 가상머신(VM)을 띄우고 그 안에서 다시 리눅스 컨테이너를 돌리고 있는 꼴이다.

만약 우분투에서 도커 데스크톱을 쓰고 있다면, 그저 GUI 하나를 얻기 위해 엄청난 컴퓨터 성능을 낭비하고 있는 셈이다. 그 구체적인 이유를 정리해 본다.

## 핵심 문제: 네이티브 OS 안에서 돌아가는 불필요한 VM

헤드리스(headless) 커맨드라인 버전인 **도커 엔진(Docker Engine)**은 우분투 호스트 커널 위에서 직접 실행된다. 네임스페이스(namespace)로 격리하고 cgroup으로 자원을 제한하는 네이티브 리눅스 프리미티브를 그대로 사용한다. 컨테이너는 호스트 머신 입장에서 그저 하나의 일반 프로세스일 뿐이다. 오버헤드가 사실상 제로에 가깝다. SSD는 최대 속도로 읽고 쓰며, RAM과 CPU는 인위적인 제한 없이 동적으로 유연하게 할당된다.

반면 **도커 데스크톱(Docker Desktop)**은 리눅스 환경에서도 QEMU 기반 가상머신(VM)을 띄운다. 모든 컨테이너가 이 VM 내부에서 실행된다. macOS나 Windows라면 납득할 수 있다. 그 운영체제들에는 리눅스 커널이 없기 때문에 리눅스 컨테이너를 실행하려면 가상머신이 필수적이다. 하지만 우분투에는 이미 온전한 리눅스 커널이 존재한다. 도커 데스크톱은 그저 그래픽 설정 창 하나를 제공하겠다는 이유로 리눅스 안에서 리눅스 VM을 돌리는 기이한 구조를 취하고 있다.

이 아키텍처적 선택이 뒤따르는 모든 성능 문제를 유발한다.

## 가장 치명적인 병목: 파일 I/O와 바인드 마운트

호스트 디렉토리를 컨테이너에 매핑하는 바인드 마운트(`-v` 옵션)를 이용해 로컬 개발을 해본 사람이라면 이 차이를 즉각 체감할 수 있다. 도커 엔진에서는 이 마운트가 직접적인 파일시스템 경로로 연결된다. 하지만 도커 데스크톱에서는 모든 파일 읽기와 쓰기가 `virtiofs`라는 가상화 파일시스템 계층을 거쳐야 한다. 컨테이너가 가상머신에 요청하고, 가상머신이 다시 호스트에 요청하여, 호스트가 실제 I/O를 수행하는 3중 구조다.

대규모 프로젝트의 `npm install`이나 데이터베이스 인덱싱처럼 수천 개의 작은 파일에 빈번하게 접근하는 I/O 집약적 작업에서 성능 차이는 처참하다. 네이티브 환경에서 8초면 끝날 작업이 도커 데스크톱의 VM 계층을 거치면 30초 이상 늘어나기도 한다. 훌륭한 하드웨어를 두고도 도커 빌드가 왜 이렇게 답답한지 의아했다면, 범인은 바로 이것일 가능성이 높다.

## 요구하지도 않은 리소스 제약

도커 엔진은 호스트 시스템 자원의 100%에 컨테이너가 동적으로 접근할 수 있도록 열어둔다. 컨테이너는 필요한 만큼 쓰고, 쓰지 않을 때는 자원을 즉시 반환한다.

반면 도커 데스크톱은 설정 GUI 패널에서 VM에 할당해 둔 값으로 자원을 강제 제한한다. 기본값은 대체로 CPU 2개에 RAM 2~4GB 수준이다. 빌드가 멈칫거리면 도커 데스크톱 창을 열고 설정 패널을 찾아 수동으로 한도를 늘려주어야 한다. 게다가 그렇게 할당된 RAM은 컨테이너가 실제로 쓰든 안 쓰든 VM이 독점 예약해 둔다.

## 꼬여버리는 네트워킹

도커 엔진은 우분투의 네트워크 스택과 매끄럽게 통합된다. 포트는 직접 매핑되고, iptables 규칙도 깔끔하게 적용된다. `--network=host`를 사용하는 컨테이너는 말 그대로 호스트의 네트워크 위에서 직접 동작한다.

반면 도커 데스크톱은 자체 유저 네임스페이스 안에서 격리된 네트워크 브릿지를 새로 구성한다. `localhost`로 트래픽을 라우팅하거나, 커스텀 iptables를 설정하거나, 컨테이너가 호스트의 네트워크 어댑터와 직접 통신하게 만드는 과정이 불필요하게 꼬인다. 아예 안 되는 것은 아니지만, 패킷이 예상대로 라우팅되지 않을 때마다 매번 디버깅 피로감을 더하는 불필요한 간접 계층이다.

## 한눈에 보는 비교

| 구분 | 도커 엔진 (Docker Engine) | 도커 데스크톱 (Ubuntu 환경) |
|---|---|---|
| 실행 방식 | 호스트 커널 위에서 네이티브 실행 | QEMU 기반 가상머신 내부 실행 |
| 파일 I/O | 네이티브 SSD 최대 속도 | virtiofs 가상화 계층 경유 |
| RAM/CPU | 동적 할당, 오버헤드 거의 없음 | VM 할당량으로 제한, 상시 메모리 점유 |
| 네트워킹 | 호스트 네트워크 스택 직접 연동 | 격리된 브릿지, 유저 네임스페이스 |
| 인터페이스 | CLI (필요시 Portainer/Lazydocker 연동) | GUI 대시보드 |
| 설치 용량 | 약 200 MB | VM 이미지를 포함해 1 GB 이상 |

## 어떻게 해결해야 하는가?

우분투를 사용 중이고 도커 데스크톱의 GUI 창에 목을 매는 상황이 아니라면, 과감히 지우고 네이티브 도커 엔진을 설치하는 것이 답이다.

**1단계: 도커 데스크톱 삭제**

```bash
sudo apt-get purge docker-desktop
```

**2단계: 잔여 설정 및 데이터 정리**

```bash
rm -r ~/.docker/desktop
rm ~/.docker/features.json
rm -f ~/.config/systemd/user/docker-desktop.service
rm -f ~/.config/systemd/user/default.target.wants/docker-desktop.service
```

**3단계: 도커 컨텍스트 복구**

도커 데스크톱은 CLI 컨텍스트를 자사의 가상머신 쪽으로 돌려놓는다. 이를 기본값으로 되돌려준다.

```bash
docker context use default
```

**4단계: 공식 도커 엔진 설치**

[공식 문서(docs.docker.com/engine/install/ubuntu)](https://docs.docker.com/engine/install/ubuntu)의 절차를 따른다. 핵심 요약은 다음과 같다.

```bash
# 공식 저장소 추가
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# 도커 엔진 패키지 설치
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# sudo 없이 실행할 수 있도록 권한 부여
sudo usermod -aG docker $USER
```

설정 후에는 터미널에서 로그아웃한 뒤 다시 로그인해야 그룹 변경 사항이 적용된다.

**5단계: 그래도 웹 대시보드가 필요하다면**

가상머신 오버헤드 없이 네이티브 도커 엔진 위에서 포테이너(Portainer)를 컨테이너로 띄우면 된다.

```bash
docker volume create portainer_data
docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:lts
```

이제 웹 브라우저에서 `https://localhost:9443`으로 접속하면 VM 오버헤드가 전혀 없는 깔끔한 시각적 관리 대시보드를 사용할 수 있다.

터미널 환경을 선호한다면 훨씬 가벼운 TUI 도구인 [Lazydocker](https://github.com/jesseduffield/lazydocker)를 추천한다.

## 정리하며

도커 데스크톱은 가상머신이 불가피한 macOS와 Windows 환경을 위해 태어난 도구다. 이를 리눅스로 이식하면서 GUI와 확장 기능의 동작 일관성을 유지하기 위해 동일한 VM 아키텍처를 그대로 가져왔다. 플랫폼 간 일관성이라는 명분은 이해할 수 있다. 하지만 온전한 리눅스 환경인 우분투에서, 컨테이너 하나면 충분히 대체 가능한 GUI 창 하나를 보겠다고 느린 I/O와 메모리 낭비, 네트워킹 마찰이라는 비싼 대가를 치를 이유는 전혀 없다.

도커 엔진을 설치하자. 시각적 관리가 필요하다면 포테이너를 얹으면 된다. 개발 장비의 빌드 속도가 몰라보게 쾌적해질 것이다.
