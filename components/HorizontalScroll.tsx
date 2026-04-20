"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const CASES = [
  { 
    id: "01",
    title: "LUMINA ART", 
    desc: "为高端美妆品牌打造的沉浸式产品展示平台。运用 WebGL 粒子系统与深度滚动控制，呈现极具质感的品牌叙事。", 
    tags: ["WEBGL", "GSAP", "CORE"],
    color: "#ff00ff"
  },
  { 
    id: "02",
    title: "AURA SPACE", 
    desc: "建筑可视化与交互叙事的融合体验。将静态建筑转化为动态的数字化旅程，让用户身临其境探索每一处细节。", 
    tags: ["3D_EXP", "THREE.JS", "REACT"],
    color: "#00ffff"
  },
  { 
    id: "03",
    title: "SYNAPSE AI", 
    desc: "AI 驱动的智能协作系统。利用仿生学动效展示大规模并行计算的流动感，赋予人工智能前所未有的生命力。", 
    tags: ["AI_DESIGN", "SYSTEM", "DYNAMICS"],
    color: "#ff3d9f"
  },
  { 
    id: "04",
    title: "NOVA GALLERY", 
    desc: "元宇宙数字艺术展厅。打破物理空间限制，通过 XR 技术重构艺术观感，实现全球范围内的实时互动艺术展。", 
    tags: ["METAVERSE", "XR", "SPATIAL"],
    color: "#ffffff"
  },
];

export default function HorizontalScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper || !sectionRef.current) return;
    const scrollWidth = wrapper.scrollWidth - window.innerWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${scrollWidth + 1000}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      }
    });

    // Background parallax
    tl.to(bgTextRef.current, {
      x: "-20%",
      ease: "none"
    }, 0);

    // Main horizontal move
    tl.to(wrapper, { 
      x: -scrollWidth, 
      ease: "none"
    }, 0);

    // Card internal parallax
    tl.to(".card-content", {
      x: -50,
      stagger: 0.1,
      ease: "none"
    }, 0);

  }, { scope: sectionRef });

  return (
    <section 
      id="projects" 
      ref={sectionRef} 
      className="h-screen w-full bg-black overflow-hidden relative border-t border-white/10"
    >
      {/* Massive Background Title */}
      <div 
        ref={bgTextRef}
        className="absolute top-1/2 left-0 -translate-y-1/2 text-[50vw] font-black text-white/[0.02] whitespace-nowrap pointer-events-none select-none will-change-transform leading-none"
      >
        FEATURED_WORKS_PROJECTS
      </div>

      <div className="absolute top-12 left-12 z-20">
        <span className="text-label text-accent mb-4 block">Case Studies / 案例研究</span>
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
          作品<span className="text-white/20 italic">画卷</span>
        </h2>
      </div>

      <div ref={wrapperRef} className="flex h-full items-center w-max px-[10vw] gap-[5vw] will-change-transform z-10">
        {CASES.map((card, i) => (
          <div 
            key={i} 
            className="h-card w-[90vw] md:w-[70vw] lg:w-[60vw] h-[60vh] flex-shrink-0 relative group"
          >
            {/* Card Border & Grid */}
            <div className="absolute inset-0 border border-white/10 bg-white/[0.02] rounded-sm overflow-hidden backdrop-blur-sm transition-all duration-700 group-hover:border-accent/40">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
              
              {/* Card Number */}
              <span className="absolute top-8 right-12 text-[12rem] font-black text-white/[0.03] leading-none select-none pointer-events-none group-hover:text-accent/10 transition-colors duration-1000">
                {card.id}
              </span>

              {/* Card Content Wrapper */}
              <div className="card-content absolute inset-0 p-12 md:p-20 flex flex-col justify-between z-10">
                <div>
                  <div className="flex gap-4 mb-10">
                    {card.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono tracking-widest text-accent border border-accent/20 px-3 py-1 bg-accent/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 group-hover:text-accent transition-colors duration-700">
                    {card.title}
                  </h3>
                  <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed max-w-2xl group-hover:text-white/70 transition-colors duration-700">
                    {card.desc}
                  </p>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-12 h-[1px] bg-accent" />
                  <span className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] cursor-none hover-target">
                    View Technical Specs / 查看技术细节
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-12 right-12 text-white/20 text-[10px] font-mono tracking-widest">
        HORIZONTAL_SCROLL_ENGINE / ACTIVE
      </div>
    </section>
  );
}
