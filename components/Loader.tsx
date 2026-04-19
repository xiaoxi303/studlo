"use client";

import { useRef, useEffect, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Loader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    // Animate progress width
    tl.to(progressRef.current, {
      scaleX: 1,
      duration: 2.5,
      ease: "power3.inOut"
    });

    // Animate counter text
    tl.to(textRef.current, {
      innerText: 100,
      duration: 2.5,
      snap: { innerText: 1 },
      ease: "power3.inOut"
    }, "<");

    // Slide up loader
    tl.to(containerRef.current, {
      yPercent: -100,
      duration: 1.2,
      ease: "power4.inOut",
      delay: 0.1
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] text-white">
      <div className="flex flex-col items-center gap-6 w-full max-w-md px-8">
        <div className="text-8xl md:text-9xl font-black tracking-tighter tabular-nums flex items-end">
          <span ref={textRef}>0</span>
          <span className="text-4xl text-gray-500 mb-2">%</span>
        </div>
        <div className="w-full h-[2px] bg-white/10 relative overflow-hidden">
          <div ref={progressRef} className="absolute inset-0 bg-white origin-left scale-x-0"></div>
        </div>
      </div>
    </div>
  );
}
