"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const TEAM = [
  { name: "张明", role: "创意总监", desc: "前 Apple 设计团队成员，10 年品牌数字化经验。擅长将抽象概念转化为可触碰的视觉体验。" },
  { name: "李薇", role: "技术负责人", desc: "全栈工程师，WebGL 与动效架构专家。代码洁癖患者，追求每一行代码的优雅与性能。" },
  { name: "王浩", role: "动效设计师", desc: "前 Awwwards 评委，GSAP 社区核心贡献者。让每一帧动画都有呼吸感和节奏感。" },
  { name: "陈雪", role: "UX 研究员", desc: "认知心理学硕士，深谙用户行为模式。用数据驱动的洞察优化每一个交互细节。" },
];

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);
  const watermarkRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.2,
      }
    });

    // 1. Constant Motion (Principle 3)
    tl.fromTo(watermarkRef.current,
      { x: "-5%", scale: 1 },
      { x: "5%", scale: 1.05, ease: "none" }
    );

    // 2. Staggered Entry
    gsap.from(".team-header", {
      opacity: 0,
      y: 50,
      duration: 1.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 65%",
      }
    });

    gsap.from(".team-card", {
      opacity: 0,
      y: 40,
      stagger: 0.1,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".team-grid",
        start: "top 70%",
      }
    });
  }, { scope: sectionRef });

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative py-32 md:py-48 px-6 md:px-16 overflow-hidden"
      style={{ background: "var(--bg-light)", color: "#1a1a1a" }}
    >
      {/* Background Watermark Parallax */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span 
          ref={watermarkRef}
          className="text-[30vw] font-black text-black/[0.03] tracking-tighter uppercase leading-none whitespace-nowrap will-change-transform"
        >
          TEAM 团队核心
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="team-header mb-20 md:mb-28 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-label mb-5" style={{ color: "var(--accent)" }}>核心团队</p>
            <h2 className="text-display !text-[#1a1a1a]">
              背后的<br /><span className="italic text-black/40">人</span>
            </h2>
          </div>
          <p className="text-black/40 text-sm md:text-base font-light max-w-md leading-relaxed">
            我们是一群对数字工艺有执念的人。每个成员都在各自领域拥有深厚积累，共同追求极致。
          </p>
        </div>

        <div className="team-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member, i) => (
            <div
              key={i}
              className="team-card group bg-black/[0.015] border border-black/[0.06] rounded-xl p-8 hover:border-black/20 hover:bg-black/[0.03] transition-all duration-700 cursor-none hover-target"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ff6b4a]/20 to-[#ff9090]/20 mb-6 flex items-center justify-center text-2xl font-black text-[#1a1a1a]/40 group-hover:scale-110 group-hover:from-[#ff6b4a]/40 group-hover:to-[#ff9090]/40 transition-all duration-500">
                {member.name[0]}
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] tracking-tight mb-1 group-hover:text-[color:var(--accent)] transition-colors duration-500">
                {member.name}
              </h3>
              <p className="text-[10px] uppercase tracking-widest text-black/30 mb-4">{member.role}</p>
              <p className="text-black/45 text-sm font-light leading-relaxed group-hover:text-black/65 transition-colors duration-500">
                {member.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
