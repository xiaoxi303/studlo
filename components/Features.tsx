"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const FEATURES = [
  { num: "01", title: "品牌数字化", desc: "从战略定位到视觉语言，将品牌理念转化为极具感染力的数字符号与沉浸式体验。每一像素，都承载品牌基因。" },
  { num: "02", title: "创意开发", desc: "融合 WebGL、GSAP 与现代前端工程，构建超越常规认知的交互体验与叙事型网站。代码即艺术。" },
  { num: "03", title: "体验设计", desc: "以用户心理学为基础，精细打磨每一个微交互与过渡时机，让每次点击都有仪式感，每次滑动都有节奏感。" },
  { num: "04", title: "性能工程", desc: "在不妥协视觉表现的前提下，追求 Core Web Vitals 全绿、LCP < 1s 的极致工程水准。速度就是体验。" },
];

export default function Features() {
  const containerRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => window.innerWidth < 768 ? "+=1500" : "+=4000",
        pin: true,
        scrub: 1,
      }
    });

    // 初始状态：标题进场
    tl.from(".features-title", { opacity: 0, y: 50, duration: 2 });

    // 逐项展示叙事
    FEATURES.forEach((_, i) => {
      const item = itemsRef.current[i];
      if (!item) return;

      // 进场
      tl.fromTo(item, 
        { opacity: 0, x: 100, filter: "blur(10px)", visibility: "hidden" },
        { opacity: 1, x: 0, filter: "blur(0px)", visibility: "visible", duration: 3 }
      );

      // 停顿
      tl.to({}, { duration: 4 });

      // 退场 (最后一步除外)
      if (i < FEATURES.length - 1) {
        tl.to(item, { 
          opacity: 0, 
          x: -100, 
          filter: "blur(10px)", 
          duration: 3,
          onComplete: () => gsap.set(item, { visibility: "hidden" })
        });
      }
    });

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen bg-black text-white overflow-hidden border-t border-white/10"
    >
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
        <span className="text-[35vw] font-black tracking-tighter uppercase">Capabilities</span>
      </div>

      <div className="max-w-7xl mx-auto h-full flex flex-col items-center justify-center relative z-10 px-6">
        <div className="features-title absolute top-24 left-12">
          <span className="text-label text-accent mb-4 block">Our Services / 核心服务</span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            我们能做<span className="text-white/20 italic">什么</span>
          </h2>
        </div>

        <div className="relative w-full max-w-4xl h-96 flex items-center justify-center">
          {FEATURES.map((f, i) => (
            <div
              key={f.num}
              ref={(el) => { itemsRef.current[i] = el; }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 invisible"
            >
              <span className="text-accent font-mono text-sm mb-6 tracking-[0.5em]">{f.num} / PHASE</span>
              <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 group-hover:text-accent transition-colors duration-500">
                {f.title}
              </h3>
              <p className="text-white/40 text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-12 right-12 text-[10px] text-white/20 font-mono tracking-widest">
        CAPABILITY_SEQUENCE / EXCLUSIVE_ACCESS
      </div>
    </section>
  );
}
