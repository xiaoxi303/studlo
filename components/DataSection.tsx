"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function DataSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const numberRef1 = useRef<HTMLSpanElement>(null);
  const numberRef2 = useRef<HTMLSpanElement>(null);
  const bgGlowRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    // end = "+=150%" —— 所有动画 duration 之和填满这个时长
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: 1.5,
      }
    });

    // ─── 背景光晕持续扩散（占位 + 气氛，贯穿全程）───
    tl.fromTo(bgGlowRef.current,
      { scale: 0.5, opacity: 0 },
      { scale: 1.5, opacity: 1, ease: "none", duration: 5 },
      0
    );

    // ─── 分割线从中间向两边展开 ───
    tl.fromTo(dividerRef.current,
      { scaleX: 0 },
      { scaleX: 1, ease: "power2.inOut", duration: 1.5 },
      0
    );

    // ─── 数字元素从底部升起 ───
    tl.fromTo(".data-element",
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, stagger: 0.3, ease: "power3.out", duration: 1.5 },
      0.2
    );

    // ─── 数字跟随滚动进度线性增长（ease: "none" 是关键）───
    tl.fromTo(numberRef1.current,
      { innerText: 0 },
      { innerText: 100, snap: { innerText: 1 }, ease: "none", duration: 3 },
      0.5
    );
    tl.fromTo(numberRef2.current,
      { innerText: 0 },
      { innerText: 24, snap: { innerText: 1 }, ease: "none", duration: 3 },
      0.5
    );

    // ─── 数字停止后，整体微微缩小，制造"呼吸感结尾" ───
    tl.to(".data-element",
      { scale: 0.97, opacity: 0.7, ease: "power1.inOut", duration: 1 },
      3.5
    );

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="h-screen bg-[#020202] flex flex-col md:flex-row items-center justify-around relative overflow-hidden">
      {/* 持续扩散背景光晕 */}
      <div
        ref={bgGlowRef}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent pointer-events-none opacity-0 will-change-transform"
      ></div>

      {/* 垂直分割线 */}
      <div
        ref={dividerRef}
        className="absolute top-1/4 bottom-1/4 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-white/15 to-transparent hidden md:block origin-center scale-x-0 will-change-transform"
      ></div>

      {/* 数字 1 */}
      <div className="data-element opacity-0 flex flex-col items-center mb-20 md:mb-0 z-10 mix-blend-difference will-change-transform">
        <div className="flex items-end text-[8rem] md:text-[11rem] lg:text-[14rem] font-black tracking-tighter tabular-nums leading-none text-white">
          <span ref={numberRef1}>0</span>
          <span className="text-3xl md:text-5xl text-gray-700 mb-4 md:mb-8">%</span>
        </div>
        <p className="mt-6 text-gray-500 uppercase tracking-[0.5em] text-xs md:text-sm font-light">
          性能极致优化
        </p>
      </div>

      {/* 数字 2 */}
      <div className="data-element opacity-0 flex flex-col items-center z-10 mix-blend-difference will-change-transform">
        <div className="flex items-end text-[8rem] md:text-[11rem] lg:text-[14rem] font-black tracking-tighter tabular-nums leading-none text-white">
          <span ref={numberRef2}>0</span>
          <span className="text-3xl md:text-5xl text-gray-700 mb-4 md:mb-8">/7</span>
        </div>
        <p className="mt-6 text-gray-500 uppercase tracking-[0.5em] text-xs md:text-sm font-light">
          全天候稳定护航
        </p>
      </div>
    </section>
  );
}
