---
title: “在 Ubuntu 上使用 Docker Desktop 是一个性能陷阱 —— 请改用 Docker Engine”
pubDate: 2026-07-10
description: “Docker Desktop 在 Linux 上运行容器时会使用虚拟机，即使在 Ubuntu 上也是如此。如果你在使用 Docker Desktop，你正在为图形界面牺牲性能。以下是为什么以及如何解决这个问题。”
draft: false
tags: ["docker", "ubuntu", "linux", "运维", "容器", "性能"]
audioUrl: "https://file.duklee.net/audio/2026-07-10-docker-desktop-vs-engine-ubuntu.wav"
lang: "zh"
---

今天发现了一件本应显而易见但未被注意的事情：在 Ubuntu 上使用 Docker Desktop 实际上比原生的 Docker Engine 更慢。不是稍微慢一点，而是从根本上更慢。这种慢是由于在你的 Linux 主机上运行了一个 Linux 虚拟机，只是为了获得一个图形界面。

如果你在 Ubuntu 上使用 Docker Desktop，你正在为图形界面牺牲性能。以下是详细的分析。

## 核心问题：主机操作系统中的虚拟机

Docker Engine — 这个无头的命令行版本 — 直接运行在你的 Ubuntu 内核上。它使用原生的 Linux 原语：命名空间用于隔离，cgroups 用于资源限制。容器只是主机上的进程。几乎零开销。你的 SSD 以全速读写。RAM 和 CPU 动态分配，没有任何人为的限制。

而 Docker Desktop，即使在 Linux 上，也会启动一个 QEMU 虚拟机。每个容器都在这个虚拟机内运行。在 macOS 和 Windows 上，这是有意义的 — 这些操作系统没有 Linux 内核，因此只能通过虚拟机来运行 Linux 容器。但在 Ubuntu 上，你已经有一个 Linux 内核。Docker Desktop 在 Linux 内核中运行一个 Linux 虚拟机，只是为了获得一个设置面板。

这就是导致一切变得更糟糕的架构决策。

## 造成伤害的地方：文件 I/O 和挂载点

如果你进行任何本地开发并使用挂载点 — `-v` 标志将主机目录映射到容器中 — 你会立即感受到这一点。使用 Docker Engine 时，这个挂载是一个直接的文件系统路径。而使用 Docker Desktop 时，每次文件读写都会经过一个名为 virtiofs 的虚拟化文件系统层。容器需要询问虚拟机，虚拟机需要与主机通信，而主机需要实际执行 I/O 操作。

对于 I/O 密集型工作负载 — `npm install` 在大型项目上，数据库索引，任何需要处理成千上万个小文件的操作 — 这种差异是巨大的。原本只需 8 秒的操作，通过 Docker Desktop 的虚拟机层可能需要 30 秒以上。如果你曾经好奇过为什么在完全良好的硬件上 Docker 构建感觉很慢，这可能就是原因。

## 你没有要求的资源限制

Docker Engine 给容器提供 100% 的系统资源，动态分配。容器使用它需要的资源并释放不需要的资源。

而 Docker Desktop 根据其虚拟机在设置 GUI 中分配的资源进行限制。默认情况下，这通常是 2 个 CPU 和 2 到 4 GB 的 RAM。如果你的构建卡住了，你需要打开 Docker Desktop GUI，找到设置面板，手动调整限制。与此同时，分配的 RAM 无论容器是否使用都会保留给虚拟机。

## 网络变得复杂

Docker Engine 无缝集成到 Ubuntu 的网络堆栈中。端口直接映射。iptables 规则干净地应用。使用 `--network=host` 的容器实际上就在你的主机网络上。

而 Docker Desktop 在其用户命名空间内设置了一个隔离的网络桥接。将流量路由到本地主机、管理自定义的 iptables 规则或让容器与主机网络适配器交互变得复杂。这不是错误 — 而是一个不必要的中间层，每次遇到预期之外的路由问题时都会增加调试的摩擦。

## 比较

| | Docker Engine | Docker Desktop (在 Ubuntu 上) |
|---|---|---|
| 如何运行 | 直接在你的主机内核上运行 | 在 QEMU 虚拟机内运行 |
| 文件 I/O | 原生 SSD 速度 | 通过 virtiofs 层路由 |
| RAM/CPU | 动态分配，几乎零开销 | 由虚拟机分配限制，持续的基线开销 |
| 网络 | 直接主机集成 | 隔离的桥接，用户命名空间 |
| 接口 | 命令行（可选配 Portainer/Lazydocker） | 图形界面 |
| 安装大小 | ~200 MB | ~1 GB+ 包括虚拟机镜像 |

## 如何解决

如果你在 Ubuntu 上并且不需要 Docker Desktop 的图形界面，卸载它并安装 Docker Engine。

**步骤 1：卸载 Docker Desktop**

```bash
sudo apt-get purge docker-desktop
```

**步骤 2：清理遗留数据**

```bash
rm -r ~/.docker/desktop
rm ~/.docker/features.json
rm -f ~/.config/systemd/user/docker-desktop.service
rm -f ~/.config/systemd/user/default.target.wants/docker-desktop.service
```

**步骤 3：修复 Docker 上下文**

Docker Desktop 将你的 CLI 上下文指向其虚拟机。将其恢复为默认：

```bash
docker context use default
```

**步骤 4：安装 Docker Engine**

按照官方说明在 Ubuntu 上安装 Docker Engine：[docs.docker.com/engine/install/ubuntu](https://docs.docker.com/engine/install/ubuntu)。简要版本如下：

```bash
# 设置仓库
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# 无需使用 sudo
sudo usermod -aG docker $USER
```

注销再重新登录以使组更改生效。

**步骤 5：如果你仍然需要图形界面**

在你现在的原生 Docker Engine 上启动 Portainer 容器：

```bash
docker volume create portainer_data
docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:lts
```

然后在浏览器中访问 `https://localhost:9443`。你将获得一个带有零虚拟机开销的完整图形界面。

或者尝试使用 [Lazydocker](https://github.com/jesseduffield/lazydocker) 这个基于终端的 TUI，它更轻量。

## 最后总结

Docker Desktop 是为 macOS 和 Windows 设计的，那里使用虚拟机是不可避免的。当他们将它带到 Linux 上时，保持相同的架构以便图形界面和扩展在各个平台上一致。这为一致性是合理的。但在 Ubuntu 上，你正在为一个图形界面付出真实的性能代价 — 更慢的 I/O、内存开销、网络摩擦 — 你可以通过一个容器轻松替换。

安装 Docker Engine。如果你需要图形界面，可以添加 Portainer。你的构建将会感谢你。
