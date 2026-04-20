"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const TECH_STACK = [
  { name: "Next.js", desc: "React 全栈框架，SSR/SSG 首选", category: "框架" },
  { name: "GSAP", desc: "专业级动画引擎，毫秒级精度", category: "动效" },
  { name: "Three.js", desc: "WebGL 3D 渲染，沉浸式视觉", category: "3D" },
  { name: "Lenis", desc: "丝滑平滑滚动，原生般触感", category: "滚动" },
  { name: "TailwindCSS", desc: "原子化 CSS，极速开发", category: "样式" },
  { name: "Framer Motion", desc: "声明式动画，React 原生体验", category: "动效" },
  { name: "TypeScript", desc: "强类型保障，零运行时错误", category: "语言" },
  { name: "Vercel", desc: "边缘网络部署，全球 CDN 加速", category: "部署" },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.from(".tech-header", {
      opacity: 0, y: 50, duration: 1.4, ease: "power3.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 65%" }
    });

    gsap.from(".tech-item", {
      opacity: 0, y: 30, stagger: 0.06, duration: 1, ease: "power3.out",
      scrollTrigger: { trigger: ".tech-grid", start: "top 70%" }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative bg-[#0a0a0a] py-32 md:py-48 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="tech-header mb-20 md:mb-28 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-label text-accent mb-5">技术栈</p>
            <h2 className="text-display text-white">
              我们的<br /><span className="text-white/40">武器库</span>
            </h2>
          </div>
          <p className="text-muted text-sm md:text-base font-light max-w-md leading-relaxed">
            我们精心挑选每一项技术，确保它在性能、开发体验和最终呈现之间达到完美平衡。没有冗余，只有精锐。
          </p>
        </div>

        <div className="tech-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {TECH_STACK.map((tech, i) => (
            <div
              key={i}
              className="tech-item group bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 md:p-8 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-700 cursor-none hover-target"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase tracking-widest text-accent/60 border border-accent/20 px-2 py-0.5 rounded-full">
                  {tech.category}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-accent transition-colors duration-500">
                {tech.name}
              </h3>
              <p className="text-white/35 text-sm font-light leading-relaxed group-hover:text-white/55 transition-colors duration-500">
                {tech.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
