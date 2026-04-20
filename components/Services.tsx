"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const SERVICES = [
  { title: "CREATIVE_STRATEGY", desc: "从品牌核心出发，构建具有叙事深度的数字战略。我们不只是设计界面，我们是在定义交互的灵魂。" },
  { title: "MOTION_DESIGN", desc: "将动态思维贯穿设计始终。利用 GSAP 与物理引擎，让每一个像素的运动都符合美学直觉与品牌调性。" },
  { title: "TECH_ENGINEERING", desc: "极致的前端性能压榨。采用 Next.js 与 WebGL，确保在海量动效下依然保持 120FPS 的极致流畅。" },
];

export default function Services() {
  const containerRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=3000",
        pin: true,
        scrub: 1,
      }
    });

    // 衔接：初始进场
    tl.from(".services-title", { opacity: 0, scale: 0.9, filter: "blur(10px)", duration: 2 });

    SERVICES.forEach((_, i) => {
      const item = itemsRef.current[i];
      if (!item) return;

      // 叙事推进
      tl.fromTo(item, 
        { opacity: 0, y: 100, visibility: "hidden" },
        { opacity: 1, y: 0, visibility: "visible", duration: 3 }
      );
      
      tl.to({}, { duration: 4 }); // 驻留

      if (i < SERVICES.length - 1) {
        tl.to(item, { opacity: 0, y: -100, filter: "blur(10px)", duration: 3, onComplete: () => gsap.set(item, { visibility: "hidden" }) });
      }
    });

    // 衔接：整体退场，为下一个板块腾出空间
    tl.to(containerRef.current, { opacity: 0.5, scale: 0.95, duration: 2 }, "+=1");

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen bg-black text-white overflow-hidden border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto h-full flex flex-col items-center justify-center relative z-10 px-6">
        <div className="services-title absolute top-24 left-12">
          <span className="text-label text-accent mb-4 block">Our Expertise / 专业领域</span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            核心<span className="text-white/20 italic">领域</span>
          </h2>
        </div>

        <div className="relative w-full max-w-4xl h-96 flex items-center justify-center">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              ref={(el) => { itemsRef.current[i] = el; }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 invisible"
            >
              <h3 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8 group-hover:text-accent transition-colors duration-500">
                {s.title}
              </h3>
              <p className="text-white/40 text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
