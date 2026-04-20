"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const SPECS = [
  { label: "ENGINE / 引擎", value: "GSAP 3.12.5", desc: "工业级动效引擎，支持极高精度的补间动画与时间轴控制。" },
  { label: "SMOOTH_SCROLL / 平滑滚动", value: "LENIS 1.3.23", desc: "基于原生滚动的平滑算法，确保在任何设备上都能获得丝滑触感。" },
  { label: "FRONTEND / 前端框架", value: "NEXT.JS 16", desc: "采用最前沿的 React 框架，支持服务端渲染与极速的静态生成。" },
  { label: "STYLING / 样式系统", value: "TAILWIND CSS", desc: "高度可定制的原子化样式系统，确保视觉风格的一致性与开发效率。" },
];

export default function TechSpecs() {
  const containerRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=4000",
        pin: true,
        scrub: 1,
      }
    });

    // 初始状态：标题进场
    tl.from(".specs-title", { opacity: 0, y: 50, duration: 2 });

    // 逐项展示叙事
    SPECS.forEach((spec, i) => {
      const item = itemsRef.current[i];
      if (!item) return;

      // 进场
      tl.fromTo(item, 
        { opacity: 0, y: 100, filter: "blur(10px)", visibility: "hidden" },
        { opacity: 1, y: 0, filter: "blur(0px)", visibility: "visible", duration: 3 }
      );

      // 停顿
      tl.to({}, { duration: 4 });

      // 退场 (最后一步除外)
      if (i < SPECS.length - 1) {
        tl.to(item, { 
          opacity: 0, 
          y: -100, 
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
      {/* Background Decorative Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <div className="absolute top-1/4 left-0 w-full h-px bg-white" />
        <div className="absolute top-2/4 left-0 w-full h-px bg-white" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-white" />
      </div>

      <div className="max-w-7xl mx-auto h-full flex flex-col items-center justify-center relative z-10 px-6">
        <div className="specs-title absolute top-24 left-12">
          <span className="text-label text-accent mb-4 block">System Specifications / 技术规格</span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            卓越性能的<br /><span className="text-white/20 italic">底层驱动</span>
          </h2>
        </div>

        <div className="relative w-full max-w-4xl h-96 flex items-center justify-center">
          {SPECS.map((s, i) => (
            <div
              key={s.label}
              ref={(el) => { itemsRef.current[i] = el; }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 invisible"
            >
              <div className="mb-8 p-4 border border-accent/20 bg-accent/5 inline-block rounded-sm">
                <span className="text-accent font-mono text-xs tracking-[0.5em]">{s.label}</span>
              </div>
              <h3 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8">
                {s.value}
              </h3>
              <p className="text-white/40 text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-12 right-12 text-[10px] text-white/20 font-mono tracking-widest">
        SYSTEM_SPECS_DOCUMENTATION / ACTIVE_NODE
      </div>
    </section>
  );
}
