"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const SKILLS = [
  { name: "FRONTEND_CORE", list: "Next.js / React 19 / TypeScript", desc: "构建现代化、类型安全且极具扩展性的 Web 应用架构。" },
  { name: "MOTION_ENGINE", list: "GSAP / Framer Motion / CSS", desc: "掌控每一帧的细节，从微交互到宏大的滚动叙事。" },
  { name: "CREATIVE_TECH", list: "Three.js / WebGL / Canvas", desc: "突破 DOM 限制，在浏览器中创造惊艳的 3D 视觉体验。" },
];

export default function Skills() {
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

    tl.from(".skills-title", { opacity: 0, x: -50, duration: 2 });

    SKILLS.forEach((skill, i) => {
      const item = itemsRef.current[i];
      if (!item) return;

      tl.fromTo(item, 
        { opacity: 0, y: 100, visibility: "hidden" },
        { opacity: 1, y: 0, visibility: "visible", duration: 3 }
      );
      
      tl.to({}, { duration: 4 });

      if (i < SKILLS.length - 1) {
        tl.to(item, { opacity: 0, y: -100, filter: "blur(10px)", duration: 3, onComplete: () => gsap.set(item, { visibility: "hidden" }) });
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-screen bg-black text-white overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto h-full flex flex-col items-center justify-center relative z-10 px-6">
        <div className="skills-title absolute top-24 left-12">
          <span className="text-label text-accent mb-4 block">Tech Stack / 技术栈</span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            核心<span className="text-white/20 italic">武装</span>
          </h2>
        </div>

        <div className="relative w-full max-w-4xl h-96 flex items-center justify-center">
          {SKILLS.map((s, i) => (
            <div
              key={s.name}
              ref={(el) => { itemsRef.current[i] = el; }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 invisible"
            >
              <span className="text-accent font-mono text-xs mb-6 tracking-[0.5em]">{s.name}</span>
              <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 uppercase">
                {s.list}
              </h3>
              <p className="text-white/40 text-xl font-light leading-relaxed max-w-2xl mx-auto">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
