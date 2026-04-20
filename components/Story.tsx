"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Story() {
  const containerRef = useRef<HTMLElement>(null);
  const s1 = useRef<HTMLDivElement>(null);
  const s2 = useRef<HTMLDivElement>(null);
  const s3 = useRef<HTMLDivElement>(null);
  const s4 = useRef<HTMLDivElement>(null);
  const s5 = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => window.innerWidth < 768 ? "+=4000" : "+=10000", 
        pin: true,
        scrub: 1,
      }
    });

    const sections = [s1.current, s2.current, s3.current, s4.current, s5.current];

    sections.forEach((section, i) => {
      // 1. 进场：从完全隐藏到出现，增加 3 个单位的行程
      tl.fromTo(section, 
        { opacity: 0, y: 150, filter: "blur(20px)", visibility: "hidden" }, 
        { opacity: 1, y: 0, filter: "blur(0px)", visibility: "visible", duration: 3 }
      );
      
      // 2. 驻留：在屏幕中心保持一段距离，增加 5 个单位的“静止感”
      tl.to({}, { duration: 5 }); 

      // 3. 退场：如果是最后一段则不退场，否则向上滑走并隐藏
      if (i < sections.length - 1) {
        tl.to(section, { 
          opacity: 0, 
          y: -150, 
          filter: "blur(20px)", 
          duration: 3,
          onComplete: () => gsap.set(section, { visibility: "hidden" })
        });
      }
    });

    // Background floating logic
    tl.to(".story-bg-text", {
      yPercent: -50,
      ease: "none",
      duration: tl.totalDuration()
    }, 0);

  }, { scope: containerRef });

  return (
    <section
      id="story"
      ref={containerRef}
      className="relative w-full h-screen bg-black text-white overflow-hidden flex items-center justify-center border-t border-white/10"
    >
      {/* Parallax Background Text */}
      <div className="story-bg-text absolute inset-0 flex flex-col items-center justify-center opacity-[0.01] pointer-events-none select-none text-[25vw] font-black leading-none uppercase">
        <span>Experience</span>
        <span>Narrative</span>
        <span>Dynamics</span>
      </div>

      <div className="absolute top-20 left-10 text-[10px] text-accent font-mono tracking-[0.5em] uppercase vertical-text">
        CORE_CHRONICLES / 核心编年史
      </div>

      <div className="relative z-10 max-w-6xl w-full px-6 text-center">
        
        {/* Section 1: Intro */}
        <div ref={s1} className="absolute inset-0 flex flex-col items-center justify-center opacity-0">
          <span className="text-label text-accent mb-6">/ 01 ORIGIN</span>
          <h2 className="text-display mb-8">
            从<span className="text-white/40 italic">静态</span>到<br />
            全域流动的演进
          </h2>
          <p className="max-w-2xl mx-auto text-white/40 text-xl font-light leading-relaxed">
            网页不应该是死板的容器，而应该是一个活着的实体。我们致力于赋予数字界面生命力。
          </p>
        </div>

        {/* Section 2: Technical */}
        <div ref={s2} className="absolute inset-0 flex flex-col items-center justify-center opacity-0">
          <span className="text-label text-accent mb-6">/ 02 PRECISION</span>
          <h2 className="text-display mb-8">
            <span className="text-accent">1ms</span> 的延迟<br />
            都是对艺术的亵渎
          </h2>
          <div className="grid grid-cols-2 gap-20 mt-8">
            <div className="text-left border-l border-white/10 pl-8">
              <span className="block text-5xl font-black tabular-nums">0.0<span className="text-sm text-accent">ms</span></span>
              <span className="text-[10px] text-white/20 uppercase tracking-[0.3em] mt-2 block">Jitter Threshold</span>
            </div>
            <div className="text-left border-l border-white/10 pl-8">
              <span className="block text-5xl font-black tabular-nums">60<span className="text-sm text-accent">bit</span></span>
              <span className="text-[10px] text-white/20 uppercase tracking-[0.3em] mt-2 block">Animation Depth</span>
            </div>
          </div>
        </div>

        {/* Section 3: Vision */}
        <div ref={s3} className="absolute inset-0 flex flex-col items-center justify-center opacity-0">
          <span className="text-label text-accent mb-6">/ 03 VISION</span>
          <h2 className="text-display mb-8">
            构建<span className="text-accent">全沉浸式</span><br />
            品牌数字化剧场
          </h2>
          <p className="max-w-2xl mx-auto text-white/40 text-xl font-light leading-relaxed">
            每一个项目都是一场精心编排的戏剧。用户不再是旁观者，而是故事的驱动者。
          </p>
        </div>

        {/* Section 4: Engineering */}
        <div ref={s4} className="absolute inset-0 flex flex-col items-center justify-center opacity-0">
          <span className="text-label text-accent mb-6">/ 04 ENGINEERING</span>
          <h2 className="text-display mb-8">
            用<span className="text-white/40 italic">代码</span>重写<br />
            设计的物理规则
          </h2>
          <div className="mt-8 flex justify-center gap-4">
            <div className="px-6 py-4 bg-white/[0.03] border border-white/10 font-mono text-xs text-accent">
              {"{ friction: 0.1, lerp: 0.05 }"}
            </div>
            <div className="px-6 py-4 bg-white/[0.03] border border-white/10 font-mono text-xs text-white/40">
              {"{ smoothWheel: true }"}
            </div>
          </div>
        </div>

        {/* Section 5: The End */}
        <div ref={s5} className="absolute inset-0 flex flex-col items-center justify-center opacity-0">
          <span className="text-label text-accent mb-6">/ 05 FUTURE</span>
          <h2 className="text-display mb-8">
            加入我们，<br />
            开启<span className="text-accent">数字新纪元</span>
          </h2>
          <div className="flex flex-col items-center gap-6">
            <div className="w-px h-24 bg-gradient-to-b from-accent to-transparent" />
            <span className="text-[10px] text-white/20 uppercase tracking-[0.5em]">Scroll to connect</span>
          </div>
        </div>

      </div>

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
        }
      `}</style>
    </section>
  );
}
