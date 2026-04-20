"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const METRICS = [
  { label: "Render_Rate", value: "120", unit: "FPS", desc: "极致流畅的视觉呈现，确保每一帧动画都精准到位。这是我们所有项目的基准性能。" },
  { label: "Global_Partners", value: "48", unit: "+", desc: "跨越 12 个时区，与全球顶级品牌共创数字化未来。我们的作品遍布世界各地。" },
  { label: "Core_Optimization", value: "99", unit: "%", desc: "追求 Lighthouse 全绿评分，将性能转化为核心竞争力。我们拒绝平庸的加载体验。" },
  { label: "Success_Rate", value: "100", unit: "%", desc: "坚持高标准交付，每一个像素都经过严苛的美学推敲。我们以质量而非数量定义成功。" },
];

export default function DataSection() {
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
    tl.from(".data-title", { opacity: 0, y: 50, duration: 2 });

    // 逐项展示叙事
    METRICS.forEach((metric, i) => {
      const item = itemsRef.current[i];
      if (!item) return;

      // 进场
      tl.fromTo(item, 
        { opacity: 0, scale: 0.8, filter: "blur(10px)", visibility: "hidden" },
        { opacity: 1, scale: 1, filter: "blur(0px)", visibility: "visible", duration: 3 }
      );

      // 停顿
      tl.to({}, { duration: 4 });

      // 退场 (最后一步除外)
      if (i < METRICS.length - 1) {
        tl.to(item, { 
          opacity: 0, 
          scale: 1.2, 
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
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

      <div className="max-w-7xl mx-auto h-full flex flex-col items-center justify-center relative z-10 px-6">
        <div className="data-title absolute top-24 left-12">
          <span className="text-label text-accent mb-4 block">Performance Metrics / 性能指标</span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            用数据<span className="text-white/20 italic">量化</span>极致
          </h2>
        </div>

        <div className="relative w-full max-w-4xl h-96 flex items-center justify-center">
          {METRICS.map((m, i) => (
            <div
              key={m.label}
              ref={(el) => { itemsRef.current[i] = el; }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 invisible"
            >
              <span className="text-accent font-mono text-sm mb-8 tracking-[0.5em]">{m.label}</span>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-8xl md:text-[12rem] font-black text-white tracking-tighter leading-none">
                  {m.value}
                </span>
                <span className="text-3xl md:text-5xl font-black text-white/20 uppercase italic">{m.unit}</span>
              </div>
              <p className="text-white/40 text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-12 right-12 text-[10px] text-white/20 font-mono tracking-widest">
        METRICS_STREAM / REAL_TIME_VERIFICATION
      </div>
    </section>
  );
}
