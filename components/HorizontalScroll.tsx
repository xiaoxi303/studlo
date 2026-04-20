"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const CASES = [
  { title: "Lumina", desc: "为高端美妆品牌打造的沉浸式产品展示平台，运用 WebGL 粒子系统呈现产品质感。", tags: ["品牌官网", "WebGL", "GSAP"] },
  { title: "Aura Space", desc: "空间级 Web 应用，将建筑可视化与交互叙事融为一体，让用户身临其境。", tags: ["3D 体验", "Three.js", "React"] },
  { title: "Nexus", desc: "极简电商体验重新定义。每一个购物流程都经过动效编排，购买变成一场旅程。", tags: ["电商", "动效", "Next.js"] },
  { title: "Echo", desc: "独立音乐厂牌的数字化身。声波可视化与滚动叙事的完美融合。", tags: ["创意", "音频可视化", "Canvas"] },
  { title: "Prism", desc: "数据可视化仪表盘，将枯燥的数字转化为流动的视觉诗篇。实时、动态、优雅。", tags: ["数据可视化", "D3.js", "实时"] },
  { title: "Void", desc: "暗黑系品牌的数字宣言。极致克制的设计语言，让留白成为最有力的表达。", tags: ["品牌", "极简", "艺术指导"] },
];

export default function HorizontalScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper || !sectionRef.current) return;
    const scrollWidth = wrapper.scrollWidth - window.innerWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${scrollWidth + window.innerHeight * 1.5}`, // 拉得更长
        pin: true,
        scrub: 1.2,
        invalidateOnRefresh: true,
      }
    });

    // 1. 背景持续平移 (Principle 3)
    tl.to(bgTextRef.current, {
      x: "-30%",
      ease: "none",
      duration: 15, // 贯穿全场
    }, 0);

    // 2. 标题控制
    tl.fromTo(headingRef.current,
      { opacity: 0, x: 100, filter: "blur(20px)" },
      { opacity: 1, x: 0, filter: "blur(0px)", ease: "power2.out", duration: 3 },
      0
    )
    .to(headingRef.current, { opacity: 0.3, x: -30, duration: 10 }, 3);

    // 3. 核心横向位移 (驱动主体)
    tl.to(wrapper, { 
      x: -scrollWidth, 
      ease: "none", 
      duration: 12 
    }, 1.5);

    // 4. 卡片动态效果 (跟手感)
    tl.fromTo(".h-card",
      { scale: 0.85, opacity: 0, y: 100, rotateY: 15 },
      { scale: 1, opacity: 1, y: 0, rotateY: 0, stagger: 0.8, duration: 4, ease: "power2.out" },
      1
    );

    // 5. 结尾平滑过渡
    tl.to(".h-card", {
      opacity: 0.2,
      scale: 0.9,
      y: -50,
      stagger: 0.4,
      duration: 4,
    }, 11);

  }, { scope: sectionRef });

  return (
    <section id="projects" ref={sectionRef} className="h-screen w-full bg-[#0a0a0a] overflow-hidden relative flex items-center border-t border-white/[0.04]">
      {/* 持续位移的背景文字 */}
      <div 
        ref={bgTextRef}
        className="absolute top-1/2 left-0 -translate-y-1/2 text-[45vw] font-black text-white/[0.015] whitespace-nowrap pointer-events-none select-none will-change-transform"
      >
        WORKS SHOWCASE PROJECTS PORTFOLIO
      </div>

      <div ref={headingRef} className="absolute top-12 left-6 md:left-16 z-10 opacity-0">
        <p className="text-label text-accent mb-4 tracking-[0.2em] uppercase">Selected Cases</p>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
          作品 <span className="text-white/40 italic">画卷</span>
        </h2>
      </div>

      <div ref={wrapperRef} className="flex h-[65vh] items-center w-max px-[20vw] gap-16 will-change-transform z-10" style={{ perspective: "1000px" }}>
        {CASES.map((card, i) => (
          <div key={i} className="h-card w-[85vw] md:w-[50vw] lg:w-[40vw] h-full flex-shrink-0 group cursor-none hover-target will-change-transform">
            <div className="w-full h-full bg-white/[0.02] border border-white/[0.08] rounded-2xl p-10 md:p-14 flex flex-col justify-between hover:border-accent/40 hover:bg-white/[0.05] transition-all duration-1000 relative overflow-hidden backdrop-blur-md">
              
              <span className="absolute top-6 right-8 text-[10rem] font-black text-white/[0.02] leading-none select-none pointer-events-none group-hover:text-accent/5 transition-colors duration-1000">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10">
                <div className="flex flex-wrap gap-3 mb-8">
                  {card.tags.map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-[0.15em] text-accent/60 border border-accent/20 px-3 py-1 rounded-full bg-accent/5">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter group-hover:text-accent transition-colors duration-700">
                  {card.title}
                </h3>
              </div>

              <div className="relative z-10">
                <p className="text-white/40 text-base md:text-xl font-light leading-relaxed group-hover:text-white/70 transition-colors duration-700 max-w-md">
                  {card.desc}
                </p>
                <div className="mt-10 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                  <div className="w-12 h-[1px] bg-accent" />
                  <span className="text-accent text-xs font-mono tracking-widest uppercase">View Case</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
