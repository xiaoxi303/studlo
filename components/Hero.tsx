"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // 1. Entry Animation (One-time load)
    const entryTl = gsap.timeline({ delay: 3 });
    entryTl
      .fromTo(line1Ref.current,
        { y: 150, opacity: 0, rotateX: -20, filter: "blur(30px)" },
        { y: 0, opacity: 1, rotateX: 0, filter: "blur(0px)", duration: 2, ease: "power4.out" }
      )
      .fromTo([taglineRef.current, badgeRef.current, scrollHintRef.current],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 1.5, ease: "power3.out" },
        "-=1"
      );

    // 2. 核心：超长轴主时间轴 (Scroll Progress Control)
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=4000", 
        pin: true,
        scrub: 1.2,
      }
    });

    // ─── 核心：永远让背景在动 (Principle 2) ───
    scrollTl.to(bgRef.current, {
      scale: 2,
      opacity: 0.3,
      x: "-5%",
      y: "-5%",
      rotate: 15,
      ease: "none",
      duration: 15, // 贯穿全场
    }, 0);

    // ─── 内容控制 (Principle 3: No gaps) ───
    scrollTl
      // 保持阶段 (Hold)
      .to(line1Ref.current, { scale: 1.05, duration: 3 }, 0)
      
      // 变化退出 (Exit) - 提前开始
      .to(line1Ref.current, {
        y: -180,
        opacity: 0,
        scale: 0.8,
        filter: "blur(40px)",
        duration: 5,
        ease: "power2.in"
      }, 3)
      
      // 次要元素同步退场
      .to([taglineRef.current, badgeRef.current, scrollHintRef.current], {
        y: -120,
        opacity: 0,
        stagger: 0.3,
        duration: 4,
        ease: "power2.in"
      }, 2.5);

    // 缓冲区 (Buffer)
    scrollTl.to({}, { duration: 5 });

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden"
    >
      {/* 永远在动的背景 */}
      <div 
        ref={bgRef}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,106,74,0.2)_0%,transparent_70%)] pointer-events-none opacity-5 scale-100 will-change-transform" 
      />

      {/* Badge */}
      <div
        ref={badgeRef}
        className="opacity-0 mb-12 px-4 py-1.5 border border-white/10 rounded-full text-label text-muted flex items-center gap-2 z-10"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        2024 — 高端数字体验工作室
      </div>

      {/* Main Title */}
      <div className="text-center px-4 z-10">
        <h1
          ref={line1Ref}
          className="text-huge text-white opacity-0 font-black tracking-tighter whitespace-nowrap"
        >
          沉浸式<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">数字空间</span>
        </h1>
      </div>

      {/* Tagline */}
      <p
        ref={taglineRef}
        className="opacity-0 mt-12 md:mt-16 text-muted text-sm md:text-base font-light tracking-wide text-center max-w-lg leading-relaxed z-10"
      >
        用极致克制的设计，讲述宏大的品牌故事。
        <br />
        每一帧画面，都是精心编排的视觉交响。
      </p>

      {/* Scroll hint */}
      <div
        ref={scrollHintRef}
        className="opacity-0 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="text-label text-muted/50 uppercase tracking-widest">向下探索</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
