"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

    // Grid animation
    tl.to(gridRef.current, {
      y: -100,
      opacity: 0.1,
      duration: 10,
      ease: "none"
    }, 0);

    // Title zoom and fade
    tl.fromTo(titleRef.current, 
      { scale: 0.9, opacity: 0.8 },
      { scale: 1.1, opacity: 1, duration: 5 }
    , 0)
    .to(titleRef.current, {
      y: -100,
      opacity: 0,
      filter: "blur(20px)",
      duration: 5,
      ease: "power2.in"
    }, 5);

    // Tagline fade
    tl.to(taglineRef.current, {
      opacity: 0,
      y: -50,
      duration: 3,
    }, 4);

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen flex flex-col items-center justify-center bg-black overflow-hidden"
    >
      {/* Technical Grid Background */}
      <div 
        ref={gridRef}
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ 
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />

      {/* Neon Glows */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-accent/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent-pink/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 text-center px-4">
        <div className="flex justify-center mb-8">
          <span className="px-3 py-1 border border-accent/30 text-accent text-[10px] font-bold tracking-[0.3em] uppercase rounded-sm bg-accent/5">
            Engineering Digital Experience / 极致数字体验工程
          </span>
        </div>
        
        <h1
          ref={titleRef}
          className="text-huge text-white will-change-transform"
        >
          STUDIO<span className="text-accent">.</span><br />
          <span className="text-white/20">数字体验实验室</span>
        </h1>

        <p
          ref={taglineRef}
          className="mt-12 text-white/40 text-sm md:text-base font-light tracking-[0.2em] uppercase max-w-xl mx-auto leading-loose"
        >
          用极致的工程标准，构建具有叙事感的滚动体验。 <br /> 
          每一帧动画，都是对数字艺术的精准编排。
        </p>
      </div>

      <div className="absolute bottom-10 left-10 flex flex-col gap-2">
        <span className="text-[10px] text-white/20 uppercase tracking-widest font-bold">向下探索 / Scroll to Explore</span>
        <div className="w-40 h-[1px] bg-white/10 relative">
          <div className="absolute inset-0 bg-accent origin-left scale-x-0 animate-[progress_2s_ease-in-out_infinite]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          0% { transform: scaleX(0); transform-origin: left; }
          50% { transform: scaleX(1); transform-origin: left; }
          51% { transform: scaleX(1); transform-origin: right; }
          100% { transform: scaleX(0); transform-origin: right; }
        }
      `}</style>
    </section>
  );
}
