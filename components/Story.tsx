"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Story() {
  const containerRef = useRef<HTMLElement>(null);
  const word1Ref = useRef<HTMLHeadingElement>(null);
  const word2Ref = useRef<HTMLHeadingElement>(null);
  const word3Ref = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const bgGlowRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // ─── 核心：超长轴主时间轴 (Scroll Progress Control) ───
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=6000", // 极长轴
        pin: true,
        scrub: 1.2,
      }
    });

    // ─── 核心修复：背景必须一直在动 (Principle: 持续背景动画) ───
    // 贯穿整个 Timeline (总长设定为 20)
    tl.to(bgGlowRef.current, {
      scale: 2.5,
      opacity: 0.2,
      rotate: 45,
      x: "10%",
      y: "10%",
      duration: 20,
      ease: "none",
    }, 0);

    tl.to(gridRef.current, {
      opacity: 0.1,
      scale: 1.1,
      y: -150,
      duration: 20,
      ease: "none",
    }, 0);

    // ─── 内容衔接 (无死角流动) ───
    
    // 1. 第一句 (Entry -> Hold -> Fade)
    tl.fromTo(word1Ref.current,
      { opacity: 0, y: 150, filter: "blur(30px)", scale: 0.8 },
      { opacity: 1, y: 0, filter: "blur(0px)", scale: 1, duration: 4, ease: "power4.out" },
      0
    )
    .to(word1Ref.current, { opacity: 1, duration: 2 }) // 保持 (Hold)
    .to(word1Ref.current, { opacity: 0.3, y: -60, filter: "blur(15px)", duration: 2, ease: "power2.inOut" });

    // 2. 第二句 (提前衔接 "-=1")
    tl.fromTo(word2Ref.current,
      { opacity: 0, y: 120, filter: "blur(30px)", scale: 0.9 },
      { opacity: 1, y: 0, filter: "blur(0px)", scale: 1, duration: 4, ease: "power4.out" },
      "-=1.5"
    )
    .to(word2Ref.current, { opacity: 1, duration: 2 }) // 保持
    .to(word2Ref.current, { opacity: 0.3, y: -60, filter: "blur(15px)", duration: 2, ease: "power2.inOut" });

    // 3. 第三句 (再次衔接)
    tl.fromTo(word3Ref.current,
      { opacity: 0, y: 120, filter: "blur(30px)", scale: 0.9 },
      { opacity: 1, y: 0, filter: "blur(0px)", scale: 1, duration: 4, ease: "power4.out" },
      "-=1.5"
    )
    .to(word3Ref.current, { scale: 1.05, duration: 4 }); // 最后的重音保持

    // 4. 描述文字 (伴随出现)
    tl.fromTo(descRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 3, ease: "power2.out" },
      "-=3"
    );

    // 5. 缓冲区 (Buffer - 防止滚动结束时太突然)
    tl.to({}, { duration: 6 });

  }, { scope: containerRef });

  return (
    <section
      id="story"
      ref={containerRef}
      className="h-screen w-full bg-[#0a0a0a] flex items-center justify-center relative overflow-hidden"
    >
      {/* 永远在动的背景底层 */}
      <div 
        ref={bgGlowRef}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,106,74,0.1)_0%,transparent_70%)] pointer-events-none opacity-0 will-change-transform" 
      />
      
      {/* 辅助背景纹理 */}
      <div 
        ref={gridRef}
        className="absolute inset-0 opacity-0 pointer-events-none will-change-transform"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
      />

      <div className="relative text-center px-6 w-full z-10 h-[40vh] flex items-center justify-center">
        <h2 ref={word1Ref} className="absolute text-display text-white/90 opacity-0 will-change-transform tracking-tighter whitespace-nowrap">
          我们追求<span className="font-black text-white">极简</span>与<span className="font-black text-white">深邃</span>。
        </h2>
        <h2 ref={word2Ref} className="absolute text-display text-white/90 opacity-0 will-change-transform tracking-tighter whitespace-nowrap">
          剔除繁杂，<span className="italic text-white/50">只留下纯粹。</span>
        </h2>
        <h2 ref={word3Ref} className="absolute text-display text-white opacity-0 will-change-transform tracking-tighter whitespace-nowrap">
          让每一次滚动，都是一场
          <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-pink"> 视觉沉浸</span>。
        </h2>
        <p ref={descRef} className="absolute top-[85%] text-muted text-sm md:text-base font-light tracking-wide max-w-xl mx-auto leading-relaxed opacity-0">
          我们是 Studio —— 一间追求极致数字工艺的创意团队，专注于构建令人屏息的品牌数字体验。
        </p>
      </div>
    </section>
  );
}
