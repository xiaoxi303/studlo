"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const PROJECTS = [
  { id: 1, title: "Lumina", category: "数字艺术体验", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop" },
  { id: 2, title: "Aura Space", category: "空间级 Web", img: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=2000&auto=format&fit=crop" },
  { id: 3, title: "Nexus", category: "极简电商", img: "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&w=2000&auto=format&fit=crop" },
  { id: 4, title: "Echo", category: "创意厂牌", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop" },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const wrapper = scrollWrapperRef.current;
    if (!wrapper || !sectionRef.current) return;

    const scrollWidth = wrapper.scrollWidth - window.innerWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${scrollWidth + window.innerHeight}`,
        pin: true,
        scrub: 1.5,
        invalidateOnRefresh: true,
      }
    });

    // ─── 标题从下进入 ───
    tl.fromTo(titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, ease: "power3.out", duration: 1 },
      0
    );

    // ─── 标题随横向开始稍微淡出，给画卷让路 ───
    tl.to(titleRef.current, {
      opacity: 0.15,
      x: -60,
      ease: "power2.inOut",
      duration: 1
    }, 0.8);

    // ─── 横向滚动（占据 timeline 的主体）───
    tl.to(wrapper, {
      x: -scrollWidth,
      ease: "none",
      duration: 5, // 占大部分时间，保证线性匀速感
    }, 1);

    // ─── 结尾：最后一张卡片停住时，整体微缩退场 ───
    tl.to(".project-card", {
      scale: 0.95,
      opacity: 0.6,
      stagger: { each: 0.1, from: "end" },
      ease: "power2.inOut",
      duration: 1,
    }, 5.5);

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="h-screen w-full bg-[#050505] overflow-hidden relative flex flex-col justify-center border-t border-white/5">
      <div ref={titleRef} className="absolute top-12 md:top-20 left-6 md:left-20 z-10 mix-blend-difference will-change-transform">
        <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-white uppercase">
          精选 <span className="font-black italic">作品</span>
        </h2>
      </div>

      <div ref={scrollWrapperRef} className="flex h-screen items-center w-max px-[10vw] will-change-transform">
        {PROJECTS.map((project, i) => (
          <div 
            key={project.id} 
            className="project-card w-[80vw] md:w-[60vw] lg:w-[45vw] h-[60vh] md:h-[70vh] flex-shrink-0 relative mr-[5vw] group cursor-none hover-target will-change-transform"
          >
            <div className="w-full h-full relative overflow-hidden rounded-sm">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-105 filter grayscale-[50%] group-hover:grayscale-0"
                style={{ backgroundImage: `url(${project.img})` }}
              ></div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
            
            <div className="absolute -bottom-16 left-0 w-full flex justify-between items-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100">
              <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">{project.title}</h3>
              <span className="text-gray-500 text-sm md:text-base tracking-widest uppercase">{project.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
