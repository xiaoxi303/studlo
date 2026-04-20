"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const PROJECTS = [
  { id: 1, title: "Lumina", category: "数字艺术体验", year: "2024", color: "#ff6b4a" },
  { id: 2, title: "Aura Space", category: "空间级 Web", year: "2024", color: "#9090ff" },
  { id: 3, title: "Nexus", category: "极简电商", year: "2023", color: "#ff9090" },
  { id: 4, title: "Echo", category: "创意厂牌", year: "2023", color: "#90ffb0" },
  { id: 5, title: "Prism", category: "数据可视化", year: "2023", color: "#ffcc70" },
  { id: 6, title: "Void", category: "品牌数字化", year: "2022", color: "#70ccff" },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.from(".project-header", {
      opacity: 0, y: 50, duration: 1.4, ease: "power3.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 65%" }
    });

    gsap.from(".project-item", {
      opacity: 0, y: 40, stagger: 0.1, duration: 1.2, ease: "power3.out",
      scrollTrigger: { trigger: ".projects-list", start: "top 70%" }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative bg-[#0a0a0a] py-32 md:py-48 px-6 md:px-16 overflow-hidden border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto">
        <div className="project-header mb-20 md:mb-28 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-label text-accent mb-5">作品集</p>
            <h2 className="text-display text-white">
              精选<br /><span className="italic text-white/40">项目</span>
            </h2>
          </div>
          <a href="#" className="text-label text-muted hover:text-white transition-colors hover-target hover-line cursor-none">
            查看全部作品 →
          </a>
        </div>

        <div className="projects-list divide-y divide-white/[0.06]">
          {PROJECTS.map((p) => (
            <a
              key={p.id}
              href="#"
              className="project-item group flex items-center justify-between py-8 md:py-12 hover:pl-4 transition-all duration-700 cursor-none hover-target"
            >
              <div className="flex items-center gap-6 md:gap-10">
                <div className="w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100" style={{ background: p.color }} />
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight group-hover:text-white/80 transition-colors duration-500">
                  {p.title}
                </h3>
              </div>
              <div className="flex items-center gap-6 md:gap-10">
                <span className="text-label text-white/20 hidden md:block">{p.category}</span>
                <span className="text-label text-white/15 hidden lg:block">{p.year}</span>
                <span className="text-white/20 group-hover:text-accent group-hover:translate-x-2 transition-all duration-500 text-xl">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
