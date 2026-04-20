"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Manifesto() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

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

    tl.fromTo(".manifesto-text", 
      { y: 200, opacity: 0, scale: 0.8, filter: "blur(20px)" },
      { y: 0, opacity: 1, scale: 1, filter: "blur(0px)", duration: 5, stagger: 1 }
    );

    // Dynamic Flash Effect
    tl.to(".manifesto-text", {
      color: "var(--accent)",
      duration: 1,
      repeat: 1,
      yoyo: true,
      stagger: 0.5,
    }, "-=2");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="h-screen w-full bg-white text-black flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute top-12 left-12 mix-blend-difference text-white">
        <span className="text-label">OUR_MANIFESTO / 数字化宣言</span>
      </div>

      <div ref={textRef} className="max-w-7xl px-6 text-center select-none">
        <h2 className="manifesto-text text-huge tracking-tighter leading-none mb-4">
          数字体验<br />
          不应是<span className="italic font-light">妥协</span>
        </h2>
        <h2 className="manifesto-text text-huge tracking-tighter leading-none text-black/20">
          而是对<br />
          <span className="text-black">极致</span>的追求
        </h2>
      </div>

      <div className="absolute bottom-12 right-12 mix-blend-difference text-white text-right">
        <p className="text-[10px] uppercase tracking-[0.5em] font-bold">
          Redefining the standard / 重新定义标准
        </p>
      </div>
    </section>
  );
}
