"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const TEAM = [
  { name: "Alex Rivers", role: "Creative Director", desc: "主导视觉叙事与品牌战略，确保每一个像素都具备灵魂。" },
  { name: "Sarah Chen", role: "Tech Lead", desc: "精通 GSAP 与 WebGL，将不可能的交互逻辑转化为流畅的现实。" },
  { name: "Marc Weber", role: "Motion Architect", desc: "专注于滚动动力学与物理模拟，赋予数字空间生命力。" },
];

export default function Team() {
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

    tl.from(".team-title", { opacity: 0, y: 50, duration: 2 });

    TEAM.forEach((member, i) => {
      const item = itemsRef.current[i];
      if (!item) return;

      tl.fromTo(item, 
        { opacity: 0, scale: 0.9, filter: "blur(10px)", visibility: "hidden" },
        { opacity: 1, scale: 1, filter: "blur(0px)", visibility: "visible", duration: 3 }
      );
      
      tl.to({}, { duration: 4 });

      if (i < TEAM.length - 1) {
        tl.to(item, { opacity: 0, scale: 1.1, filter: "blur(10px)", duration: 3, onComplete: () => gsap.set(item, { visibility: "hidden" }) });
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-screen bg-black text-white overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto h-full flex flex-col items-center justify-center relative z-10 px-6">
        <div className="team-title absolute top-24 left-12">
          <span className="text-label text-accent mb-4 block">Our Team / 核心成员</span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            幕后<span className="text-white/20 italic">推手</span>
          </h2>
        </div>

        <div className="relative w-full max-w-4xl h-96 flex items-center justify-center">
          {TEAM.map((m, i) => (
            <div
              key={m.name}
              ref={(el) => { itemsRef.current[i] = el; }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 invisible"
            >
              <h3 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4">{m.name}</h3>
              <span className="text-accent font-mono text-sm mb-8 tracking-[0.5em] uppercase">{m.role}</span>
              <p className="text-white/40 text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
