"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const REASONS = [
  { title: "滚动不是内容的分页", sub: "SCROLL_IS_NARRATIVE", desc: "它是时间的交互式表达。每一像素的位移，都在讲述一段关于品牌、关于技术、关于情感的故事。" },
  { title: "平滑是设计的工具", sub: "SMOOTHNESS_AS_TOOL", desc: "极致的顺滑不只是为了好看，它是为了消除用户与内容之间的摩擦力，让交互变得自然如呼吸。" },
  { title: "每一帧都是交响乐", desc: "我们对每一帧动画进行毫秒级的调优，确保视觉节奏与用户的心理预期完美共振。这，就是数字艺术。" },
];

export default function WhySection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=4000",
        pin: true,
        scrub: 1,
      }
    });

    // 每一张卡片向上层叠堆砌 (Stacking Effect)
    const cards = gsap.utils.toArray(".why-card");
    cards.forEach((card: any, i) => {
      if (i === 0) return; // 第一张不动
      
      tl.fromTo(card, 
        { yPercent: 100, scale: 0.9, filter: "blur(10px)" },
        { yPercent: 0, scale: 1, filter: "blur(0px)", duration: 5, ease: "power2.out" }
      , i * 4); // 错开时间
      
      // 当下一张叠上来时，当前的卡片稍微缩小并变暗
      if (i > 0) {
        tl.to(cards[i-1] as any, { 
          scale: 0.92, 
          opacity: 0.3, 
          duration: 3, 
          ease: "none" 
        }, i * 4);
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-black overflow-hidden border-t border-white/10">
      <div className="absolute top-12 left-12 z-20">
        <span className="text-label text-accent">THE_PHILOSOPHY / 核心哲学</span>
      </div>

      <div className="relative w-full h-full flex items-center justify-center">
        {REASONS.map((reason, i) => (
          <div
            key={i}
            className="why-card absolute w-[85vw] h-[60vh] md:w-[70vw] md:h-[50vh] bg-[#080808] border border-white/10 rounded-sm p-12 md:p-24 flex flex-col justify-center transition-colors duration-700 hover:border-accent/40"
            style={{ zIndex: i + 1 }}
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
              <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none">
                {reason.title}
              </h2>
              {reason.sub && (
                <span className="text-accent font-mono text-xs tracking-[0.5em] uppercase pb-2">
                  / {reason.sub}
                </span>
              )}
            </div>
            <p className="text-white/30 text-xl md:text-2xl font-light leading-relaxed max-w-3xl">
              {reason.desc}
            </p>
            
            <div className="absolute bottom-12 right-12 flex items-center gap-4">
              <span className="text-[10px] text-white/10 font-mono">STEP_0{i+1}</span>
              <div className="w-12 h-px bg-white/10" />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-12 left-12 text-[10px] text-white/20 font-mono tracking-widest">
        STACKING_ALGORITHM / INITIALIZED
      </div>
    </section>
  );
}
