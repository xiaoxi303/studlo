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
        end: "+=6000", // 极长轴，实现极致跟手感
        pin: true,
        scrub: 1.2,
      }
    });

    // ─── 核心技巧：永远让背景在动 (Principle 2) ───
    // 从 0 秒开始一直动到 Timeline 结束 (假设总时长 15)
    tl.to(bgGlowRef.current, {
      scale: 2.5,
      opacity: 0.2,
      rotate: 45,
      x: "10%",
      y: "10%",
      duration: 15,
      ease: "none", // 匀速运动，模拟拖进度条
    }, 0);

    tl.to(gridRef.current, {
      opacity: 0.1,
      scale: 1.1,
      y: -100,
      duration: 15,
      ease: "none",
    }, 0);

    // ─── 内容衔接：所有内容“接进去”，不能断 (Principle 3) ───
    
    // 1. 第一句：进入
    tl.fromTo(word1Ref.current,
      { opacity: 0, y: 150, filter: "blur(30px)", scale: 0.8 },
      { opacity: 1, y: 0, filter: "blur(0px)", scale: 1, duration: 3, ease: "power2.out" },
      0
    )
    // 第一句：停留 + 微动
    .to(word1Ref.current, { y: -20, opacity: 0.8, duration: 2 }, 3)
    // 第一句：变淡退场
    .to(word1Ref.current, { opacity: 0, y: -80, filter: "blur(20px)", duration: 2, ease: "power2.in" }, 5);

    // 2. 第二句：提前开始衔接 ("-=")
    tl.fromTo(word2Ref.current,
      { opacity: 0, y: 120, filter: "blur(30px)", scale: 0.9 },
      { opacity: 1, y: 0, filter: "blur(0px)", scale: 1, duration: 3, ease: "power2.out" },
      "-=1.5" // 衔接点
    )
    // 第二句：停留
    .to(word2Ref.current, { y: -20, opacity: 0.8, duration: 2 })
    // 第二句：退场
    .to(word2Ref.current, { opacity: 0, y: -80, filter: "blur(20px)", duration: 2, ease: "power2.in" }, "+=0.5");

    // 3. 第三句：再次衔接
    tl.fromTo(word3Ref.current,
      { opacity: 0, y: 120, filter: "blur(30px)", scale: 0.9 },
      { opacity: 1, y: 0, filter: "blur(0px)", scale: 1, duration: 3, ease: "power2.out" },
      "-=1.5"
    )
    // 第三句：高亮停留
    .to(word3Ref.current, { scale: 1.05, duration: 3 });

    // 4. 描述文字：伴随最后一句
    tl.fromTo(descRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 2.5, ease: "power2.out" },
      "-=2"
    );

    // 最后的长留白缓冲，确保滚动不会突兀结束
    tl.to({}, { duration: 4 });

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
      
      {/* 辅助背景纹理 - 也在动 */}
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
