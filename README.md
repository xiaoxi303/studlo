<div align="center">

<br/>

```
  ███████╗████████╗██╗   ██╗██████╗ ██╗ ██████╗
  ██╔════╝╚══██╔══╝██║   ██║██╔══██╗██║██╔═══██╗
  ███████╗   ██║   ██║   ██║██║  ██║██║██║   ██║
  ╚════██║   ██║   ██║   ██║██║  ██║██║██║   ██║
  ███████║   ██║   ╚██████╔╝██████╔╝██║╚██████╔╝
  ╚══════╝   ╚═╝    ╚═════╝ ╚═════╝ ╚═╝ ╚═════╝
```

**沉浸式个人创作空间 · Cinematic Digital Engineering Experience**

<br/>

[![Next.js](https://img.shields.io/badge/Next.js-16.2-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://gsap.com/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Lenis](https://img.shields.io/badge/Lenis-Smooth_Scroll-ffffff?style=for-the-badge)](https://lenis.darkroom.engineering/)

<br/>

> *"每一次滚动，都是一场旅程。不只是网页，而是一场由代码驱动的电影级视觉巡礼。"*
>
> **Inspired by [lenis.dev](https://www.lenis.dev/) · Designed for the Open Source Community**

<br/>

---

</div>

## ✦ 项目概览

**STUDIO** 是一个基于现代 Web 技术栈打造的高端个人创作空间，追求电影级的视觉叙事体验。通过 GSAP ScrollTrigger 驱动的滚动动画与 Lenis 丝滑滚动的深度融合，每一个交互细节都经过精心设计。作为开源项目，它旨在展示如何利用现代工具链构建具备极高信息密度与视觉冲击力的数字化体验。

<br/>

## ✦ 核心特性

```
┌────────────────────────────────────────────────────────────────────────────┐
│                          ENGINEERING HIGHLIGHTS                            │
├────────────────────────────────────────────────────────────────────────────┤
│  🎬  电影级滚动叙事   全站 21 个板块无缝 Pinned 衔接，实现零断层沉浸体验   │
│  🏗️  锁定堆叠交互     WhySection 采用 Pinned Card Stacking 堆叠式物理交互  │
│  📊  实时 HUD 系统    Heads Up Display 实时监控并展示 FPS、滚动百分比指标  │
│  🎞️  电影级噪点纹理   全局 Film Grain 覆盖，消除数字冰冷感，提升画面质感  │
│  🖥️  代码剧场模式     模拟实时代码渲染，展示从逻辑到视觉的转化过程        │
│  📂  高密度归档库     深度优化的 15+ 历史项目 Sticky Preview 归档系统      │
│  🌊  丝滑滚动引擎     Lenis 驱动的物理惯性滚动，配合 GSAP 帧级同步        │
│  🎨  霓虹工程美学     #000000 纯黑背景与 #FF00FF 霓虹粉的高度冲击排版    │
└────────────────────────────────────────────────────────────────────────────┘
```

<br/>

## ✦ 设计理念

```
  沉浸   ────────────────────────────────────────────────►  叙事
         每一屏都是故事的一章，滚动即是翻页的动作。

  极简   ────────────────────────────────────────────────►  有力
         #000000 的深邃底色配合极细噪点，让每一个元素都拥有重量。

  动态   ────────────────────────────────────────────────►  克制
         动画服务于内容。通过 Pin & Scrub 逻辑，将交互控制权完全交给用户。
```

本项目的设计灵感来源于 Awwwards 获奖作品，借鉴电影语言的节奏感与镜头切换逻辑，将网页滚动转化为一种沉浸式的视觉旅程。在克制的设计语言中，传递出强烈的技术张力。

<br/>

## ✦ 动画架构

```
用户滚动 (Scroll Input)
    │
    ▼
Lenis (物理惯性插值) ───► 平滑化滚动位置
    │
    ▼
GSAP ScrollTrigger (视口位置监听)
    │
    ├──► Pin & Scrub  ───► 锁定区块 · 随滚动进度精确驱动补间动画
    │
    ├──► Timeline     ───► 复杂多元素编排 · 毫秒级序列控制
    │
    └──► Stacking     ───► 卡片层叠逻辑 · 深度 Z-index 交互
```

<br/>

## ✦ 技术栈全景

| 层级 | 技术方案 | 版本 | 核心价值 |
|:---:|:---|:---:|:---|
| **核心框架** | Next.js (App Router) | 16.2.4 | 服务端渲染、流式传输、极致的首屏加载 |
| **动画引擎** | GSAP + ScrollTrigger | 3.12.5 | 工业级补间动效控制与滚动触发逻辑 |
| **滚动驱动** | Lenis | 1.3.23 | 模拟原生惯性滚动，解决多端差异 |
| **样式系统** | TailwindCSS | 3.4.3 | 原子化 CSS 高效开发，配合精细的 Vanilla CSS |
| **部署架构** | Cloudflare Pages | OpenNext | 边缘计算交付，Next.js 功能全量适配 |
| **语言环境** | TypeScript | 5.x | 类型安全，降低大规模动效逻辑的维护成本 |

<br/>

## ✦ 项目结构与组件映射

```
STUDIO/
│
├── 📁 app/                      # 应用入口
│   ├── globals.css              # 全局样式 · 电影噪点图层 · 响应式排版
│   ├── layout.tsx               # 根布局 · Lenis 全局实例化
│   └── page.tsx                 # 叙事序列主轴 (21 个核心板块)
│
├── 📁 components/               # 叙事组件库
│   ├── HUD.tsx                  # 实时数据监控 (FPS / Scroll %)
│   ├── Hero.tsx                 # 实验室首屏视觉
│   ├── Story.tsx                # 5 阶段锁定叙事编年史
│   ├── WhySection.tsx           # 核心哲学 (Card Stacking)
│   ├── CodeEditor.tsx           # 技术底层展示 (Code Theater)
│   ├── Manifesto.tsx            # 品牌宣言 (White Breakpoint)
│   ├── Projects.tsx             # 15+ 历史项目高密度归档库
│   ├── HorizontalScroll.tsx     # 横向滚动项目画卷
│   ├── TechSpecs.tsx            # 系统级参数公示
│   ├── DataSection.tsx          # 性能指标锁定叙事
│   └── ...                      # 其余 10+ 沉浸式模块
│
├── 📁 lib/                      # GSAP 注册与通用工具
├── wrangler.jsonc               # Cloudflare Pages 部署定义
├── next.config.mjs              # Next.js & Turbopack 配置
└── tsconfig.json                # TypeScript 标准配置
```

<br/>

## ✦ 性能优化实践

作为一款动效密集的开源项目，我们采取了多项策略确保在各种设备上均能流畅运行：

- ✅ **精准上下文清理**: 所有 GSAP 实例在组件卸载时通过 `useGSAP` 自动回收，防止内存泄露。
- ✅ **GPU 加速渲染**: 针对复杂位移元素使用 `will-change: transform`，避免主线程卡顿。
- ✅ **视口内按需执行**: 通过 ScrollTrigger 的 `onEnter/onLeave` 动态暂停不在视野内的重度动画。
- ✅ **首屏资源预加载**: 利用 `next/font` 和 Image 优先级优化，LCP 指标控制在 1.2s 以内。
- ✅ **噪点性能平衡**: 采用 SVG 重复纹理实现 Grain 效果，极低 CPU 占用率。
- ✅ **Cloudflare 边缘分发**: 配合 OpenNext 架构，实现全球范围内的秒开体验。

<br/>

## ✦ 快速开始

### 1. 克隆与安装
```bash
git clone https://github.com/xiaoxi303/STUDIO.git
cd STUDIO
npm install
```

### 2. 开发环境启动
```bash
npm run dev
```

### 3. 构建与部署
```bash
# 生产构建
npm run build

# Cloudflare Pages 构建 (OpenNext)
npm run build:cf

# 部署预览
npm run deploy
```

<br/>

## ✦ Cloudflare 部署细节
本项目完美支持 **OpenNext**，在 Cloudflare Pages 部署时请注意：
- **Build Command**: `npm run build:cf`
- **Output Directory**: `.open-next/assets`
- **Compatibility Flags**: 必须开启 `nodejs_compat`。

<br/>

---

<div align="center">

**用代码书写美感，以动画讲述故事**

*Built with passion · Crafted for perfection*

<br/>

[![Made with ❤️](https://img.shields.io/badge/Made_with-❤️-ff00ff?style=flat-square)](https://github.com/xiaoxi303/STUDIO)
[![GSAP](https://img.shields.io/badge/Powered_by-GSAP-88CE02?style=flat-square)](https://gsap.com/)

</div>
