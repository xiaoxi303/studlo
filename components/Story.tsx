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

    // ─── 核心：超长轴主时间轴 (The Master Timeline) ───
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=8000", // 增加到 8000，让操作更从容
        pin: true,
        scrub: 1.2,
      }
    });

    // ─── 核心技巧：永远让背景在动 (Principle 2) ───
    // 将 duration 拉长到 25，确保覆盖整个 Timeline 每一个角落
    tl.to(bgGlowRef.current, {
      scale: 3,
      opacity: 0.25,
      rotate: 60,
      x: "15%",
      y: "15%",
      duration: 25,
      ease: "none",
    }, 0);

    tl.to(gridRef.current, {
      opacity: 0.15,
      scale: 1.2,
      y: -150,
      duration: 25,
      ease: "none",
    }, 0);

    // ─── 内容衔接：所有内容“接进去”，没有任何空白段 ───
    
    // 1. 第一句：进入 -> 停留 -> 退场
    tl.fromTo(word1Ref.current,
      { opacity: 0, y: 150, filter: "blur(30px)", scale: 0.8 },
      { opacity: 1, y: 0, filter: "blur(0px)", scale: 1, duration: 4, ease: "power2.out" },
      0
    )
    .to(word1Ref.current, { y: -30, opacity: 0.7, duration: 2 })
    .to(word1Ref.current, { opacity: 0, y: -100, filter: "blur(20px)", duration: 2, ease: "power2.in" }, "+=0.5");

    // 2. 第二句：提前开始衔接 ("-=")
    tl.fromTo(word2Ref.current,
      { opacity: 0, y: 120, filter: "blur(30px)", scale: 0.9 },
      { opacity: 1, y: 0, filter: "blur(0px)", scale: 1, duration: 4, ease: "power2.out" },
      "-=1.5" 
    )
    .to(word2Ref.current, { y: -30, opacity: 0.7, duration: 2 })
    .to(word2Ref.current, { opacity: 0, y: -100, filter: "blur(20px)", duration: 2, ease: "power2.in" }, "+=0.5");

    // 3. 第三句：最后的沉浸 (高潮段)
    tl.fromTo(word3Ref.current,
      { opacity: 0, y: 120, filter: "blur(30px)", scale: 0.9 },
      { opacity: 1, y: 0, filter: "blur(0px)", scale: 1, duration: 4, ease: "power2.out" },
      "-=1.5"
    )
    // 根据用户要求：拉长高潮时间
    .to(word3Ref.current, { 
      scale: 1.08, 
      opacity: 1, 
      duration: 6 // 🔥 拉长
    })
    // 根据用户要求：淡化但不停留
    .to(word3Ref.current, {
      opacity: 0.4,
      scale: 1.1,
      duration: 3
    });

    // 4. 描述文字：伴随最后的高潮
    tl.fromTo(descRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 3, ease: "power2.out" },
      "-=8" // 提前出现，覆盖 word3 的整个过程
    );

    // 最后的安全缓冲，背景和 word3 都在微动
    tl.to({}, { duration: 5 });

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
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,106,74,0.12)_0%,transparent_70%)] pointer-events-none opacity-0 will-change-transform" 
      />
      
      {/* 辅助背景纹理 - 也在动 */}
      <div 
        ref={gridRef}
        className="absolute inset-0 opacity-0 pointer-events-none will-change-transform"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
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
