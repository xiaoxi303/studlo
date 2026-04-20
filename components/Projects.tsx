"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const ARCHIVE = [
  { id: "24", title: "Lumina Art", cat: "沉浸式艺术", year: "2024", tech: "WebGL / GSAP" },
  { id: "24", title: "Aura Space", cat: "空间计算", year: "2024", tech: "Three.js / React" },
  { id: "24", title: "Nexus v3", cat: "电商生态", year: "2024", tech: "Next.js / Shopify" },
  { id: "23", title: "Echo Label", cat: "创意音乐", year: "2023", tech: "Audio / Canvas" },
  { id: "23", title: "Prism Dash", cat: "数据可视化", year: "2023", tech: "D3.js / Realtime" },
  { id: "23", title: "Void Studio", cat: "品牌官网", year: "2023", tech: "Minimalist / UI" },
  { id: "23", title: "Cyber Pulse", cat: "运动视觉", year: "2023", tech: "Dynamics / WebGL" },
  { id: "22", title: "Nova Gallery", cat: "XR 展厅", year: "2022", tech: "Unity / WebXR" },
  { id: "22", title: "Synapse AI", cat: "人工智能", year: "2022", tech: "LLM / Interface" },
  { id: "22", title: "Atlas Map", cat: "地理叙事", year: "2022", tech: "Mapbox / GL" },
  { id: "22", title: "Zen Garden", cat: "实验性网页", year: "2022", tech: "GLSL / Shader" },
  { id: "21", title: "Legacy v1", cat: "初代框架", year: "2021", tech: "React / Motion" },
  { id: "21", title: "Pulse App", cat: "移动端体验", year: "2021", tech: "RN / GSAP" },
  { id: "21", title: "Meta Arch", cat: "虚拟建筑", year: "2021", tech: "Blender / Web" },
  { id: "21", title: "Final Frontier", cat: "航天视觉", year: "2021", tech: "Data / Visual" },
];

export default function Projects() {
  const containerRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState(0);

  useGSAP(() => {
    if (!containerRef.current || !listRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=5000",
        pin: true,
        scrub: 1,
      }
    });

    // 列表垂直滚动
    const scrollDist = listRef.current.scrollHeight - window.innerHeight + 300;
    tl.to(listRef.current, {
      y: -scrollDist,
      ease: "none",
      duration: 10,
    });

    // 动态监听当前滚动到的项，更新右侧预览
    const items = gsap.utils.toArray(".archive-item");
    items.forEach((item: any, i) => {
      gsap.to(item, {
        scrollTrigger: {
          trigger: item,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveItem(i),
          onEnterBack: () => setActiveItem(i),
        }
      });
    });

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen bg-black text-white overflow-hidden border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto h-full flex flex-col lg:flex-row items-center px-6 gap-20">
        
        {/* 左侧：固定的标题与预览信息 */}
        <div className="lg:w-1/2 flex flex-col justify-between h-[70vh] py-12">
          <div className="projects-title">
            <span className="text-label text-accent mb-5 block">Historical Accumulation / 历史积淀</span>
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none mb-12">
              归档<br /><span className="italic text-white/20">作品库</span>
            </h2>
          </div>

          {/* 动态预览窗口 (Sticky Reveal) */}
          <div className="relative flex-1 bg-white/[0.02] border border-white/10 rounded-sm p-10 flex flex-col justify-center overflow-hidden">
            <div className="absolute top-0 right-0 p-6 text-6xl font-black text-white/[0.05] tabular-nums">
              '{ARCHIVE[activeItem].id}
            </div>
            
            <div className="relative z-10 transition-all duration-500 transform translate-y-0 opacity-100" key={activeItem}>
              <span className="text-accent font-mono text-xs tracking-[0.4em] block mb-4 uppercase">
                {ARCHIVE[activeItem].cat}
              </span>
              <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">
                {ARCHIVE[activeItem].title}
              </h3>
              <div className="w-12 h-1 bg-accent mb-8" />
              <div className="space-y-4">
                <div className="flex justify-between text-xs border-b border-white/5 pb-2">
                  <span className="text-white/20 uppercase">Timeline / 年份</span>
                  <span className="font-mono">{ARCHIVE[activeItem].year}</span>
                </div>
                <div className="flex justify-between text-xs border-b border-white/5 pb-2">
                  <span className="text-white/20 uppercase">Technology / 技术</span>
                  <span className="font-mono">{ARCHIVE[activeItem].tech}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 右侧：纵向滚动的海量列表 */}
        <div className="lg:w-1/2 h-screen overflow-hidden relative pt-[40vh] pb-[40vh]">
          <div ref={listRef} className="projects-list space-y-12 will-change-transform">
            {ARCHIVE.map((p, i) => (
              <div
                key={i}
                className={`archive-item group py-8 border-b border-white/5 transition-all duration-700 cursor-none hover-target ${activeItem === i ? "opacity-100 scale-100" : "opacity-20 scale-95 blur-sm"}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-12">
                    <span className="text-xl font-black text-white/10 tabular-nums">0{i + 1}</span>
                    <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter transition-colors duration-500 group-hover:text-accent">
                      {p.title}
                    </h3>
                  </div>
                  <span className="text-white/10 group-hover:text-accent transition-all duration-500 text-3xl">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 text-[10px] text-white/20 font-mono tracking-widest">
        ARCHIVE_ENGINE_RUNNING / DENSITY_MAX
      </div>
    </section>
  );
}
