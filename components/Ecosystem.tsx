"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const INTEGRATIONS = [
  { name: "React / Next.js", desc: "原生级 Hooks 集成，支持服务端组件与并发渲染模式。" },
  { name: "Vue / Nuxt", desc: "轻量化组合式 API 适配，确保在 Vue 生态中的流畅体验。" },
  { name: "Three.js / R3F", desc: "深度的 3D 空间交互支持，让 WebGL 动效与滚动完美同步。" },
  { name: "Webflow / Framer", desc: "针对无代码平台的定制化脚本插件，赋能更多创意表现。" },
];

export default function Ecosystem() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".eco-card", {
      opacity: 0,
      scale: 0.95,
      y: 30,
      stagger: 0.1,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-32 md:py-48 bg-black px-6 md:px-16 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="text-label text-accent mb-6 block">Ecosystem / 技术生态</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              全平台<span className="text-white/20 italic">适配</span><br />
              无缝接入工作流
            </h2>
          </div>
          <p className="text-white/40 text-sm md:text-base max-w-sm font-light leading-relaxed uppercase tracking-widest">
            无论您使用何种前端架构，我们的动效逻辑都能完美适配。从 React 到 WebGL，我们为您扫平技术障碍。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {INTEGRATIONS.map((item, i) => (
            <div key={i} className="eco-card border border-white/10 bg-white/[0.02] p-10 hover:border-accent/40 transition-all duration-700 group">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-black transition-all duration-500">
                <span className="font-mono text-xs">0{i+1}</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-4">{item.name}</h3>
              <p className="text-xs text-white/30 leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
