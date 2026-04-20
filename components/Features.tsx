"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const FEATURES = [
  {
    num: "01",
    title: "品牌数字化",
    desc: "从战略定位到视觉语言，将品牌理念转化为极具感染力的数字符号与沉浸式体验。每一像素，都承载品牌基因。",
    tags: ["品牌策略", "视觉系统", "动效语言"],
  },
  {
    num: "02",
    title: "创意开发",
    desc: "融合 WebGL、GSAP 与现代前端工程，构建超越常规认知的交互体验与叙事型网站。代码即艺术。",
    tags: ["Next.js", "GSAP", "Three.js"],
  },
  {
    num: "03",
    title: "体验设计",
    desc: "以用户心理学为基础，精细打磨每一个微交互与过渡时机，让每次点击都有仪式感，每次滑动都有节奏感。",
    tags: ["UX 研究", "原型设计", "可用性测试"],
  },
  {
    num: "04",
    title: "性能工程",
    desc: "在不妥协视觉表现的前提下，追求 Core Web Vitals 全绿、LCP < 1s 的极致工程水准。速度就是体验。",
    tags: ["性能优化", "CDN 架构", "监控体系"],
  },
  {
    num: "05",
    title: "动效叙事",
    desc: "用滚动驱动的视觉叙事取代传统布局。每一帧动画都经过精密编排，让内容自然流动，让情绪层层递进。",
    tags: ["ScrollTrigger", "时间轴设计", "运动设计"],
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const watermarkRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.2,
      }
    });

    // 1. Watermark Constant Motion
    tl.fromTo(watermarkRef.current,
      { x: "10%", scale: 1 },
      { x: "-10%", scale: 1.1, ease: "none" }
    );

    // 2. Feature Header Fade
    gsap.from(".features-header", {
      opacity: 0,
      y: 60,
      duration: 1.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 65%",
      }
    });

    // 3. Staggered Row Entry
    gsap.from(".feature-row", {
      opacity: 0,
      y: 50,
      stagger: 0.15,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".features-grid",
        start: "top 75%",
      }
    });

  }, { scope: sectionRef });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-32 md:py-48 px-6 md:px-16 overflow-hidden"
      style={{ background: "var(--bg-light)", color: "#1a1a1a" }}
    >
      {/* Background Watermark with constant motion */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span 
          ref={watermarkRef}
          className="text-[30vw] font-black text-black/[0.035] tracking-tighter uppercase leading-none whitespace-nowrap will-change-transform"
        >
          CAPABILITY 能力
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="features-header mb-20 md:mb-28">
          <p className="text-label mb-5" style={{ color: "var(--accent)" }}>服务能力</p>
          <h2 className="text-display !text-[#1a1a1a]">
            我们能做<br /><span className="italic text-black/40">什么</span>
          </h2>
        </div>

        <div className="features-grid divide-y divide-black/10">
          {FEATURES.map((f) => (
            <div
              key={f.num}
              className="feature-row group flex flex-col md:flex-row md:items-start gap-6 md:gap-16 py-10 md:py-14 hover:bg-black/[0.02] transition-colors duration-500 cursor-none hover-target"
            >
              <span className="text-xs font-mono tracking-widest text-black/30 pt-1.5 flex-shrink-0 w-8">
                {f.num}
              </span>

              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a1a] tracking-tight flex-shrink-0 md:w-64 group-hover:text-accent transition-colors duration-500">
                {f.title}
              </h3>

              <p className="text-black/50 text-base md:text-lg leading-relaxed font-light flex-1 group-hover:text-black/70 transition-colors duration-500">
                {f.desc}
              </p>

              <div className="flex flex-wrap gap-2 md:flex-col md:items-end md:justify-start flex-shrink-0">
                {f.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-widest text-black/30 border border-black/10 px-3 py-1 rounded-full group-hover:border-black/30 group-hover:text-black/50 transition-all duration-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
