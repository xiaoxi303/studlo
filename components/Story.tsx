"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Story() {
  const containerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef1 = useRef<HTMLHeadingElement>(null);
  const textRef2 = useRef<HTMLHeadingElement>(null);
  const textRef3 = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // end = "+=180%" —— 总时长中每个阶段都有内容
    // 总 duration ≈ 1.6 + 0.6 + 0.8 + 0.4 + 0.8 + 0.4 + 0.8 = ~5.4 单位（全部填满）
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 1.5,
      }
    });

    // ─── 背景从头到尾持续缓慢推进，绝不留空白 ───
    tl.to(bgRef.current, {
      scale: 1.15,
      opacity: 0.12,
      ease: "none",
      duration: 6, // 贯穿整个 timeline
    }, 0);

    // ─── 装饰线从头到尾 ───
    tl.fromTo(lineRef.current,
      { scaleX: 0, opacity: 0 },
      { scaleX: 1, opacity: 1, ease: "none", duration: 6 },
      0
    );

    // ─── 第一段文字：入场 → 停留 → 退场 ───
    tl.fromTo(textRef1.current,
      { opacity: 0, y: 80, filter: "blur(12px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", ease: "power3.out", duration: 1.6 },
      0
    )
    .to(textRef1.current, {
      opacity: 1, y: 0, duration: 0.6 // 停留
    })
    .to(textRef1.current, {
      opacity: 0, y: -60, filter: "blur(10px)", ease: "power2.in", duration: 0.8
    });

    // ─── 第二段文字：入场 → 停留 → 退场 ───
    tl.fromTo(textRef2.current,
      { opacity: 0, y: 80, filter: "blur(12px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", ease: "power3.out", duration: 1.4 },
      "-=0.3"
    )
    .to(textRef2.current, {
      opacity: 1, y: 0, duration: 0.5 // 停留
    })
    .to(textRef2.current, {
      opacity: 0, y: -60, filter: "blur(10px)", ease: "power2.in", duration: 0.7
    });

    // ─── 第三段文字：入场 → 停留（不退场，保持到 unpin） ───
    tl.fromTo(textRef3.current,
      { opacity: 0, y: 80, filter: "blur(12px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", ease: "power3.out", duration: 1.4 },
      "-=0.3"
    )
    .to(textRef3.current, {
      opacity: 1, y: 0, duration: 1.0 // 最后一句停留更长，有"结语感"
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="h-screen w-full bg-[#050505] flex items-center justify-center relative overflow-hidden">
      {/* 持续动画背景 */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.06] via-[#080808] to-[#030303] opacity-0 scale-100 will-change-transform"
      ></div>

      {/* 渐变遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-transparent to-[#020202] pointer-events-none z-0"></div>

      {/* 装饰横线 */}
      <div ref={lineRef} className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent origin-left scale-x-0 will-change-transform"></div>

      <div className="relative w-full max-w-6xl px-6 md:px-16 h-[50vh] flex items-center justify-center z-10">
        <h2 ref={textRef1} className="absolute text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight text-center text-gray-300 opacity-0 will-change-transform max-w-4xl">
          我们追求<span className="font-bold text-white">极简</span>与<span className="font-bold text-white">深邃</span>。
        </h2>

        <h2 ref={textRef2} className="absolute text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight text-center text-gray-300 opacity-0 will-change-transform max-w-4xl">
          剔除繁杂，<span className="italic text-gray-500">只留下纯粹。</span>
        </h2>

        <h2 ref={textRef3} className="absolute text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight text-center text-white opacity-0 will-change-transform max-w-4xl">
          让每一次滚动，都是一场{" "}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">
            视觉沉浸
          </span>
          。
        </h2>
      </div>
    </section>
  );
}
