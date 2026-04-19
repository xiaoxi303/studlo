"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const SKILLS = [
  "Next.js App Router",
  "GSAP Animations",
  "TailwindCSS",
  "WebGL",
  "TypeScript",
  "Performance Optimization",
  "Creative Coding",
  "React Server Components"
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!marqueeRef.current) return;
    
    const tween = gsap.to(marqueeRef.current, {
      xPercent: -50,
      ease: "none",
      duration: 30,
      repeat: -1,
    });

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseenter", () => gsap.to(tween, { timeScale: 0.2, duration: 0.5 }));
      container.addEventListener("mouseleave", () => gsap.to(tween, { timeScale: 1, duration: 0.5 }));
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-20 bg-[#050505] overflow-hidden border-t border-white/5 relative z-10">
      <div className="relative w-full flex items-center">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none"></div>
        
        <div ref={marqueeRef} className="flex whitespace-nowrap w-max will-change-transform">
          {[...SKILLS, ...SKILLS].map((skill, index) => (
            <div 
              key={index} 
              className="px-8 flex items-center group cursor-none hover-target"
            >
              <span className="text-4xl md:text-7xl font-black text-transparent bg-clip-text bg-white/5 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-400 transition-all duration-700 uppercase tracking-tighter cursor-pointer">
                {skill}
              </span>
              <span className="ml-16 text-blue-500/20 text-3xl md:text-5xl">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
