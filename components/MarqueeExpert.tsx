"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function MarqueeExpert() {
  const containerRef = useRef<HTMLElement>(null);
  const m1 = useRef<HTMLDivElement>(null);
  const m2 = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(m1.current, {
      xPercent: -50,
      ease: "none",
      duration: 20,
      repeat: -1,
    });

    gsap.to(m2.current, {
      xPercent: 50,
      ease: "none",
      duration: 25,
      repeat: -1,
    });
  }, { scope: containerRef });

  const TEXT = "ESTHETICS / DYNAMICS / PRECISION / NARRATIVE / EXPERIENCE / ";

  return (
    <section ref={containerRef} className="py-20 bg-black overflow-hidden border-y border-white/10">
      <div className="relative flex flex-col gap-4">
        {/* Layer 1: Fast & Bold */}
        <div ref={m1} className="flex whitespace-nowrap will-change-transform">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-7xl md:text-9xl font-black tracking-tighter text-white uppercase mx-8">
              {TEXT}
            </span>
          ))}
        </div>
        
        {/* Layer 2: Slow & Outline (Reverse) */}
        <div ref={m2} className="flex whitespace-nowrap will-change-transform -translate-x-1/2">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-7xl md:text-9xl font-black tracking-tighter text-transparent border-text uppercase mx-8 italic opacity-20">
              {TEXT}
            </span>
          ))}
        </div>

        {/* Overlay Center Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="px-12 py-4 bg-accent text-black font-black text-xl md:text-3xl tracking-[0.3em] uppercase mix-blend-screen">
            The Studio Standard
          </div>
        </div>
      </div>

      <style jsx>{`
        .border-text {
          -webkit-text-stroke: 1px white;
        }
      `}</style>
    </section>
  );
}
