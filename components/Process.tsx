"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const STEPS = [
  { step: "探索", en: "Discover", desc: "深入了解您的品牌基因、目标用户与竞争格局。用数据与洞察定义机会，而不是凭感觉猜测。", duration: "1–2 周" },
  { step: "策划", en: "Strategize", desc: "将洞察转化为创意概念与信息架构。每一个动效背后，都有经过验证的叙事逻辑。", duration: "1–2 周" },
  { step: "设计", en: "Design", desc: "从字形选择到色彩系统，从组件库到动效规范，每一个决策都经过严格的美学推敲。", duration: "2–3 周" },
  { step: "构建", en: "Build", desc: "以 Next.js + GSAP 为核心技术栈，模块化、可维护地将设计稿精准还原并超越。", duration: "3–4 周" },
  { step: "上线", en: "Launch", desc: "性能监控、SEO 优化、A/B 测试与持续迭代。上线只是旅程的起点，而非终点。", duration: "持续" },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=250%",
        pin: true,
        scrub: 1.2,
      }
    });

    // 1. Background Constant Motion
    tl.fromTo(bgTextRef.current, 
      { y: "10%", opacity: 0.01 },
      { y: "-10%", opacity: 0.02, ease: "none", duration: 10 },
      0
    );

    // 2. Progress Line driving the timeline
    tl.fromTo(progressRef.current,
      { scaleY: 0 },
      { scaleY: 1, ease: "none", duration: 8 },
      0
    );

    // 3. Title Entry
    tl.from(".process-title", {
      opacity: 0,
      x: -60,
      stagger: 0.2,
      duration: 2,
      ease: "power3.out"
    }, 0);

    // 4. Steps Staggered Entry (Principle: Keep it flowing)
    tl.from(".process-step", {
      opacity: 0,
      y: 40,
      scale: 0.95,
      stagger: 1,
      duration: 2,
      ease: "power2.out"
    }, 1);

    // 5. Highlight active step dot on line (Visual feedback)
    // (Optional: can add specific highlights per step time)

    tl.to({}, { duration: 2 }); // End hold

  }, { scope: sectionRef });

  return (
    <section id="process" ref={sectionRef} className="relative bg-[#0a0a0a] py-32 md:py-48 px-6 md:px-16 overflow-hidden border-t border-white/[0.04]">
      {/* Background Watermark with constant motion */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span 
          ref={bgTextRef}
          className="text-[25vw] font-black text-white tracking-tighter uppercase leading-none will-change-transform"
        >
          PROCESS 流程
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">
          <div className="lg:w-80 flex-shrink-0">
            <div className="lg:sticky lg:top-32">
              <p className="process-title text-label text-accent mb-5">工作流程</p>
              <h2 className="process-title text-4xl md:text-5xl font-black tracking-tighter text-white leading-tight">
                如何<br />
                <span className="text-white/40">与我们<br />合作</span>
              </h2>
              <p className="process-title mt-8 text-muted text-sm font-light leading-relaxed">
                我们的每一个项目都遵循严谨且灵活的五步框架，确保每个决策都有迹可循。
              </p>
            </div>
          </div>

          <div className="flex-1 relative">
            {/* Progress Line Container */}
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/[0.06] hidden md:block">
              <div 
                ref={progressRef} 
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-accent via-accent/50 to-transparent origin-top scale-y-0 will-change-transform" 
                style={{ height: "100%" }} 
              />
            </div>

            <div className="process-steps space-y-0 md:pl-12">
              {STEPS.map((item, i) => (
                <div key={i} className="process-step group border-b border-white/[0.06] py-10 md:py-14 hover:border-white/20 transition-colors duration-500 cursor-none hover-target">
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-10">
                    {/* Step Point on line */}
                    <div className="flex-shrink-0 flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-accent transition-colors duration-500 -ml-[calc(1.25rem+1px)] hidden md:block" />
                      <span className="text-xs text-white/30 font-mono tracking-widest">0{i + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-4 mb-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-accent transition-colors duration-500">{item.step}</h3>
                        <span className="text-sm text-white/20 tracking-widest uppercase font-light">{item.en}</span>
                      </div>
                      <p className="text-white/40 text-base md:text-lg leading-relaxed font-light group-hover:text-white/60 transition-colors duration-500 max-w-xl">{item.desc}</p>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <span className="text-[10px] uppercase tracking-widest text-white/20 group-hover:text-accent/50 transition-colors duration-500">{item.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
