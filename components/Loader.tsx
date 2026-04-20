"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Loader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Brand name
    tl.fromTo(brandRef.current,
      { opacity: 0, y: 30, filter: "blur(8px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "power3.out" },
      0
    );

    // Bottom info
    tl.fromTo(wordsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      0.3
    );

    // Progress line
    tl.to(lineRef.current, {
      scaleX: 1,
      duration: 2.2,
      ease: "power2.inOut",
    }, 0.5);

    // Counter
    tl.to(counterRef.current, {
      innerText: 100,
      duration: 2.2,
      snap: { innerText: 1 },
      ease: "power2.inOut",
    }, 0.5);

    // Fade out
    tl.to([brandRef.current, wordsRef.current], {
      opacity: 0,
      y: -15,
      duration: 0.6,
      ease: "power2.in",
    });

    // Slide up
    tl.to(containerRef.current, {
      yPercent: -100,
      duration: 1,
      ease: "power4.inOut",
    });

  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a] text-white"
    >
      {/* Center brand */}
      <div ref={brandRef} className="opacity-0 will-change-transform">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase">Studio<span className="text-accent">.</span></h1>
        <p className="text-label text-muted mt-4 text-center">数字创意工作室</p>
      </div>

      {/* Bottom progress */}
      <div className="absolute bottom-12 left-0 right-0 px-8">
        <div className="max-w-7xl mx-auto">
          <div ref={wordsRef} className="flex justify-between items-end mb-4 opacity-0">
            <span className="text-label text-muted">正在加载体验</span>
            <span className="text-4xl md:text-5xl font-black tracking-tighter tabular-nums">
              <span ref={counterRef}>0</span>
              <span className="text-muted text-lg ml-1">%</span>
            </span>
          </div>
          <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
            <div ref={lineRef} className="absolute inset-0 bg-white origin-left scale-x-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
