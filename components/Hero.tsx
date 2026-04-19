"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const titleWrapperRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // 1. Initial Load Animation (Runs once independently)
    const initTl = gsap.timeline({ delay: 2.5 });
    initTl.fromTo(titleWrapperRef.current, 
      { opacity: 0, scale: 0.9, filter: "blur(10px)" }, 
      { opacity: 1, scale: 1, filter: "blur(0px)", duration: 2, ease: "power4.out" }
    )
    .fromTo([subtitleRef.current, ".hero-hint"], 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, stagger: 0.2, duration: 1.5, ease: "power3.out" }, 
      "-=1"
    );

    // 2. Scroll Driven Storytelling Timeline (Pin + Scrub)
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=150%", // Require 1.5x screen height to scroll past
        pin: true,
        scrub: 1, // Smooth scrub
      }
    });

    // Animate elements purely based on scroll progress
    scrollTl.to(titleWrapperRef.current, {
      scale: 0.7,
      opacity: 0,
      y: -100,
      filter: "blur(20px)",
      ease: "power2.inOut"
    }, 0)
    .to(subtitleRef.current, {
      opacity: 0,
      y: -50,
      ease: "power2.inOut"
    }, 0)
    .to(".hero-hint", {
      opacity: 0,
      y: -20,
      ease: "power2.in"
    }, 0)
    .to(bgRef.current, {
      opacity: 0.8,
      scale: 1.1,
      ease: "none"
    }, 0);

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full h-screen flex flex-col items-center justify-center bg-[#020202] overflow-hidden">
      {/* Dynamic Background */}
      <div 
        ref={bgRef}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.04] to-[#020202] pointer-events-none opacity-20 scale-100 will-change-transform"
      ></div>
      
      <div className="z-10 text-center px-4 mix-blend-difference flex flex-col items-center w-full">
        <div ref={titleWrapperRef} className="will-change-transform opacity-0">
          <h1 className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-black tracking-tighter text-white leading-[0.85] uppercase">
            沉浸式
          </h1>
          <h1 className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-700 leading-[0.85] uppercase -mt-2 md:-mt-6">
            数字空间
          </h1>
        </div>
        
        <p ref={subtitleRef} className="opacity-0 mt-8 md:mt-12 text-gray-400 text-sm md:text-lg font-light tracking-[0.5em] uppercase text-center max-w-xl">
          用极致克制的设计，讲述宏大的品牌故事。
        </p>
      </div>

      <div className="hero-hint opacity-0 absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center mix-blend-difference">
        <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 mb-6">向下探索</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-gray-400 to-transparent"></div>
      </div>
    </section>
  );
}
