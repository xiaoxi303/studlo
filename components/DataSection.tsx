"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function DataSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const num1Ref = useRef<HTMLSpanElement>(null);
  const num2Ref = useRef<HTMLSpanElement>(null);
  const num3Ref = useRef<HTMLSpanElement>(null);
  const num4Ref = useRef<HTMLSpanElement>(null);
  const bgGlowRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=3000",
        pin: true,
        scrub: 1.2,
      }
    });

    // ─── 核心：背景永远在动 (Principle 2) ───
    tl.fromTo(bgGlowRef.current, 
      { scale: 0.5, opacity: 0, x: "-10%", rotate: -10 },
      { scale: 2, opacity: 0.2, x: "10%", rotate: 10, duration: 15, ease: "none" },
      0
    );

    // ─── 内容衔接 (Principle 3: No gaps) ───
    tl.fromTo(".data-item",
      { opacity: 0, y: 120, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, stagger: 1, duration: 4, ease: "power3.out" },
      0
    );

    // 数字增长 (跟手感)
    tl.fromTo(num1Ref.current, { innerText: 0 }, { innerText: 100, snap: { innerText: 1 }, ease: "none", duration: 8 }, 1);
    tl.fromTo(num2Ref.current, { innerText: 0 }, { innerText: 50, snap: { innerText: 1 }, ease: "none", duration: 8 }, 1);
    tl.fromTo(num3Ref.current, { innerText: 0 }, { innerText: 24, snap: { innerText: 1 }, ease: "none", duration: 8 }, 1);
    tl.fromTo(num4Ref.current, { innerText: 0 }, { innerText: 99, snap: { innerText: 1 }, ease: "none", duration: 8 }, 1);

    // 平滑退场 (而不是直接消失)
    tl.to(".data-item", {
      opacity: 0,
      y: -100,
      filter: "blur(20px)",
      stagger: 0.5,
      duration: 4,
    }, 11);

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="h-screen bg-[#0a0a0a] flex items-center justify-center relative overflow-hidden">
      {/* 永远在动的背景底层 */}
      <div 
        ref={bgGlowRef}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,106,74,0.15)_0%,transparent_70%)] pointer-events-none opacity-0 will-change-transform" 
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 max-w-7xl w-full px-8 z-10">
        <div className="data-item opacity-0 text-center will-change-transform">
          <div className="text-[5rem] md:text-[7rem] font-black tracking-tighter leading-none text-white tabular-nums">
            <span ref={num1Ref}>0</span><span className="text-xl text-muted ml-1">+</span>
          </div>
          <p className="text-label text-muted mt-4">品牌项目交付</p>
        </div>
        <div className="data-item opacity-0 text-center will-change-transform">
          <div className="text-[5rem] md:text-[7rem] font-black tracking-tighter leading-none text-white tabular-nums">
            <span ref={num2Ref}>0</span><span className="text-xl text-muted ml-1">+</span>
          </div>
          <p className="text-label text-muted mt-4">全球合作伙伴</p>
        </div>
        <div className="data-item opacity-0 text-center will-change-transform">
          <div className="text-[5rem] md:text-[7rem] font-black tracking-tighter leading-none text-white tabular-nums">
            <span ref={num3Ref}>0</span><span className="text-xl text-muted ml-1">/7</span>
          </div>
          <p className="text-label text-muted mt-4">全天候技术支持</p>
        </div>
        <div className="data-item opacity-0 text-center will-change-transform">
          <div className="text-[5rem] md:text-[7rem] font-black tracking-tighter leading-none text-white tabular-nums">
            <span ref={num4Ref}>0</span><span className="text-xl text-muted ml-1">%</span>
          </div>
          <p className="text-label text-muted mt-4">客户满意度</p>
        </div>
      </div>
    </section>
  );
}
