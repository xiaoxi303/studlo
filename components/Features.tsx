"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const midRef = useRef<HTMLDivElement>(null);
  const textLeftRef = useRef<HTMLHeadingElement>(null);
  const textRightRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    // 总 end = "+=220%"，所有 duration 加起来 = 6+ 单位，全程有内容
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=220%",
        pin: true,
        scrub: 1.5,
      }
    });

    // ─── 阶段1：背景始终从头推进到底（duration 最长，贯穿全程）───
    tl.fromTo(bgRef.current,
      { scale: 1, opacity: 0.08 },
      { scale: 1.6, opacity: 0.2, ease: "none", duration: 6 },
      0
    );

    // ─── 阶段1：内容入场 ── desc 从下进入 ───
    tl.fromTo(descRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, ease: "power2.out", duration: 1.2 },
      0.2
    );

    // ─── 阶段1：文字分别从两侧进入中央 ───
    tl.fromTo(textLeftRef.current,
      { opacity: 0, x: "-15vw" },
      { opacity: 1, x: 0, ease: "power3.out", duration: 1.5 },
      0
    );
    tl.fromTo(textRightRef.current,
      { opacity: 0, x: "15vw" },
      { opacity: 1, x: 0, ease: "power3.out", duration: 1.5 },
      0.1
    );

    // ─── 阶段2：中层玻璃态扩张 ───
    tl.fromTo(midRef.current,
      { scale: 0.7, opacity: 0, borderRadius: "3rem" },
      { scale: 1, opacity: 1, borderRadius: "1.5rem", ease: "power2.inOut", duration: 2 },
      0.5
    );
    // 接着继续变化
    tl.to(midRef.current,
      { scale: 1.3, opacity: 0.3, borderRadius: "0rem", ease: "power2.in", duration: 2 },
      2.5
    );

    // ─── 阶段2：文字停留后向两侧撕裂 ───
    tl.to(textLeftRef.current,
      { x: "-35vw", opacity: 0.1, ease: "power2.inOut", duration: 2.5 },
      2
    );
    tl.to(textRightRef.current,
      { x: "35vw", opacity: 0.1, ease: "power2.inOut", duration: 2.5 },
      2
    );

    // ─── 阶段2：desc 淡出 ───
    tl.to(descRef.current,
      { opacity: 0, y: -30, ease: "power2.in", duration: 1.2 },
      2.2
    );

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="h-screen w-full relative overflow-hidden bg-[#020202]">
      {/* Background Layer */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-10 filter grayscale mix-blend-screen will-change-transform"
      ></div>

      {/* Midground Layer */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div
          ref={midRef}
          className="w-[70vw] md:w-[55vw] h-[55vh] border border-white/8 bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-[3px] rounded-[3rem] opacity-0 will-change-transform"
        ></div>
      </div>

      {/* Foreground Layer */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 mix-blend-difference z-20 pointer-events-none">
        <div className="flex flex-col md:flex-row items-center justify-center w-full">
          <h2 ref={textLeftRef} className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-white uppercase leading-none will-change-transform opacity-0">
            空间
          </h2>
          <h2 ref={textRightRef} className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700 uppercase leading-none md:ml-12 will-change-transform opacity-0">
            解构
          </h2>
        </div>

        <p ref={descRef} className="mt-12 text-gray-400 text-sm md:text-lg font-light tracking-[0.4em] uppercase max-w-2xl will-change-transform opacity-0">
          打破二维边界，构建多维数字地景
        </p>
      </div>
    </section>
  );
}
