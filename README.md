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

**沉浸式个人创作空间 · Cinematic Digital Experience**

<br/>

[![Next.js](https://img.shields.io/badge/Next.js-16.2-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://gsap.com/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Lenis](https://img.shields.io/badge/Lenis-Smooth_Scroll-ffffff?style=for-the-badge)](https://lenis.darkroom.engineering/)

<br/>

> *"每一次滚动，都是一场旅程。"*

<br/>

---

</div>

## ✦ 项目概览

**STUDIO** 是一个基于现代 Web 技术栈打造的高端个人创作空间，追求电影级的视觉叙事体验。通过 GSAP ScrollTrigger 驱动的滚动动画与 Lenis 丝滑滚动的深度融合，每一个交互细节都经过精心设计。

<br/>

## ✦ 核心特性

```
┌─────────────────────────────────────────────────────────────────┐
│                       FEATURE HIGHLIGHTS                        │
├─────────────────────────────────────────────────────────────────┤
│  🎬  电影级滚动叙事   ScrollTrigger 驱动的 Pin & Scrub 体验     │
│  🖱️  自定义磁性光标   跟随鼠标的动态磁吸交互效果               │
│  ✨  粒子背景系统     Canvas 渲染的动态星粒视觉层               │
│  🌊  丝滑滚动引擎     Lenis 驱动的物理惯性滚动                  │
│  ⚡  瀑布式载入动画   精心设计的首屏 Loader 进场序列            │
│  📝  文字逐行揭示     基于视口的文字动态浮现效果                │
│  🧲  磁性按钮组件     鼠标靠近时的磁吸吸附交互                  │
│  🎨  全黑暗主题设计   #050505 深邃背景与高对比度排版            │
└─────────────────────────────────────────────────────────────────┘
```

<br/>

## ✦ 技术栈

| 层级 | 技术 | 版本 | 用途 |
|:---:|:---|:---:|:---|
| **框架** | Next.js (App Router) | 16.2.4 | 服务端渲染 · 路由管理 |
| **动画** | GSAP + ScrollTrigger | 3.12.5 | 滚动驱动动画引擎 |
| **滚动** | Lenis | 1.3.23 | 物理惯性平滑滚动 |
| **样式** | TailwindCSS | 3.4.3 | 原子化 CSS 工具集 |
| **部署** | Cloudflare Pages | OpenNext | 边缘计算 · 高速交付 |
| **语言** | TypeScript | 5.x | 类型安全开发 |
| **运行时** | React | 19.x | UI 组件化渲染 |

<br/>

## ✦ 项目结构

```
STUDIO/
│
├── 📁 app/                      # Next.js App Router 核心
│   ├── globals.css              # 全局样式 · CSS 变量系统
│   ├── layout.tsx               # 根布局 · 全局组件挂载
│   └── page.tsx                 # 首页入口
│
├── 📁 components/               # 可复用 UI 组件库
│   ├── Hero.tsx                 # 英雄区 · 首屏视觉冲击
│   ├── Nav.tsx                  # 导航栏 · 滚动状态感知
│   ├── Loader.tsx               # 进场动画 · 首屏加载序列
│   ├── CustomCursor.tsx         # 自定义光标 · 磁性跟随
│   ├── Particles.tsx            # Canvas 粒子背景系统
│   ├── SmoothScroll.tsx         # Lenis 平滑滚动包装器
│   ├── TextReveal.tsx           # 文字逐行揭示动效
│   ├── MagneticButton.tsx       # 磁性悬停按钮
│   ├── About.tsx                # 关于模块
│   ├── Story.tsx                # 故事叙事区块
│   ├── Skills.tsx               # 技能展示
│   ├── Features.tsx             # 特性展示区
│   ├── Services.tsx             # 服务介绍
│   ├── Projects.tsx             # 项目作品集
│   ├── Process.tsx              # 工作流程
│   ├── DataSection.tsx          # 数据可视化
│   ├── Testimonials.tsx         # 用户评价
│   └── Footer.tsx               # 页脚
│
├── 📁 lib/                      # 工具函数 · 共享逻辑
├── next.config.mjs              # Next.js 配置
├── tailwind.config.ts           # Tailwind 主题配置
└── tsconfig.json                # TypeScript 配置
```

<br/>

## ✦ 快速开始

### 环境要求

- **Node.js** `>= 18.x`
- **npm** `>= 9.x` 或 **yarn** / **pnpm**

### 安装 & 启动

```bash
# 1. 克隆仓库
git clone https://github.com/xiaoxi303/STUDIO.git
cd STUDIO

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev
```

打开浏览器访问 [http://localhost:3000](http://localhost:3000) 查看效果 ✨

### 其他命令

```bash
# 生产构建 (标准)
npm run build

# 部署至 Cloudflare
# 该命令会自动运行构建并将其推送至 Cloudflare Workers/Pages
npm run deploy

# 本地预览 Cloudflare 版本
npm run preview

# 代码检查
npm run lint

<br/>

## ✦ Cloudflare 部署指南

本项目采用 **OpenNext (Cloudflare Adapter)** 架构，以确保 Next.js 16 的所有功能（包括 App Router 和边缘渲染）在 Cloudflare Pages 上完美运行。

### 配置说明
- **Framework Preset**: 在 Cloudflare 控制台中选择 `Next.js` 或保持 `None`。
- **Build Command**: `npm run build`
- **Output Directory**: `.open-next/assets` (静态资源) 与 `.open-next/worker.js` (运行逻辑)。
- **Compatibility Flags**: 必须开启 `nodejs_compat`。

### 自动化部署
已配置 `wrangler.jsonc`，通过 Git 推送至 `main` 分支即可触发 Cloudflare Pages 的自动构建与部署。
```

<br/>

## ✦ 设计理念

```
  沉浸   ──────────────────────────────────────────────►  叙事
         每一屏都是故事的一章，滚动即是翻页的动作

  极简   ──────────────────────────────────────────────►  有力
         #050505 的深邃底色，让每一个元素都拥有重量

  动态   ──────────────────────────────────────────────►  克制
         动画服务于内容，而非喧宾夺主
```

本项目的设计灵感来源于 Awwwards 获奖作品，借鉴电影语言的节奏感与镜头切换逻辑，将网页滚动转化为一种沉浸式的视觉旅程。黑白极简的色彩基调搭配精准的排版节奏，在克制中传递出强烈的品牌张力。

<br/>

## ✦ 动画架构

```
用户滚动
    │
    ▼
Lenis (平滑插值)
    │
    ▼
ScrollTrigger (位置监听)
    │
    ├──► Pin & Scrub  ──► 固定区块·随滚动进度驱动动画
    │
    ├──► Timeline     ──► 多元素编排·精确到毫秒的序列
    │
    └──► Batch        ──► 列表元素·批量错时浮现
```

<br/>

## ✦ 组件亮点

### 🖱️ CustomCursor — 磁性光标
自定义 SVG 光标，拥有跟随延迟、悬停放大、文字聚焦等多态形变，通过 `gsap.quickTo()` 实现极低延迟的位置跟踪。

### ✨ Particles — 粒子系统
基于 Canvas API 构建的星粒背景层，支持运动连线、鼠标排斥、帧率自适应，为页面注入宇宙深空的氛围感。

### 🌊 SmoothScroll — 平滑滚动
封装 Lenis 实例，与 GSAP Ticker 深度整合，确保 ScrollTrigger 与平滑滚动的物理插值保持帧级同步。

### 📝 TextReveal — 文字揭示
逐行遮罩揭示动效，文字如同从幕后滑出，视口进入时触发，营造优雅的阅读节奏感。

<br/>

## ✦ 性能优化

- ✅ `'use client'` 精确标注，最大化服务端渲染覆盖
- ✅ GSAP 上下文管理，组件卸载时自动清理动画实例
- ✅ `will-change` 属性按需开启，避免过度 GPU 占用
- ✅ Canvas 粒子系统帧率感知，低性能设备自动降级
- ✅ `next/font` 字体预加载，消除布局偏移 (CLS)
- ✅ 图片组件懒加载 + 优先级标注
- ✅ Cloudflare 边缘计算 + OpenNext 架构，实现毫秒级首屏响应
- ✅ 全量静态化预渲染，极致的 SEO 与访问速度

<br/>

---

<div align="center">

<br/>

**用代码书写美感，以动画讲述故事**

*Built with passion · Crafted with precision*

<br/>

[![Made with ❤️](https://img.shields.io/badge/Made_with-❤️-ff4757?style=flat-square)](https://github.com/xiaoxi303/STUDIO)
[![Next.js](https://img.shields.io/badge/Powered_by-Next.js-000000?style=flat-square&logo=nextdotjs)](https://nextjs.org/)
[![GSAP](https://img.shields.io/badge/Animated_by-GSAP-88CE02?style=flat-square)](https://gsap.com/)

<br/>

</div>
