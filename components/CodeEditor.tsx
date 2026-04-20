"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function CodeEditor() {
  const containerRef = useRef<HTMLElement>(null);
  const codeRef = useRef<HTMLPreElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      }
    });

    tl.from(".editor-window", {
      scale: 0.9,
      opacity: 0,
      rotateX: 10,
      duration: 2,
    });

    // Simulate code highlighting or line focus
    tl.to(".code-line", {
      color: "var(--accent)",
      stagger: 0.2,
      duration: 1,
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 md:py-64 bg-black px-6 md:px-16 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <span className="text-label text-accent mb-6 block">CODE_ENGINE / 代码引擎</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 uppercase">
              用代码<br />
              <span className="text-white/20 italic">重构</span>物理规则
            </h2>
            <p className="text-white/40 text-lg font-light leading-relaxed mb-10">
              在 Studio，我们不使用预设的模板。我们从零开始，用最精简的数学逻辑编写每一帧运动。这是我们实现极致流畅的唯一途径。
            </p>
            <div className="flex gap-8">
              <div>
                <span className="block text-accent font-mono text-xs">/ NEXT.JS</span>
                <span className="text-white/20 text-[10px] uppercase tracking-widest">Core Framework</span>
              </div>
              <div>
                <span className="block text-accent font-mono text-xs">/ GSAP</span>
                <span className="text-white/20 text-[10px] uppercase tracking-widest">Motion Engine</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="editor-window relative bg-[#050505] border border-white/10 rounded-lg overflow-hidden shadow-2xl">
              {/* Toolbar */}
              <div className="flex items-center justify-between px-6 py-4 bg-white/[0.03] border-b border-white/10">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/40" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
                  <div className="w-2 h-2 rounded-full bg-green-500/40" />
                </div>
                <span className="text-[10px] text-white/20 font-mono">AnimationLogic.ts</span>
              </div>
              
              {/* Code Area */}
              <div className="p-8 md:p-12 font-mono text-sm leading-relaxed overflow-hidden">
                <pre ref={codeRef} className="text-white/60">
                  <code className="block mb-4"><span className="text-accent">import</span> {"{ gsap }"} <span className="text-accent">from</span> <span className="text-green-400">'gsap'</span>;</code>
                  <code className="block mb-4 opacity-50">{"// 初始化极致滚动引擎"}</code>
                  <code className="code-line block"><span className="text-blue-400">const</span> lenis = <span className="text-accent">new</span> <span className="text-yellow-400">Lenis</span>({"{"}</code>
                  <code className="code-line block">  duration: <span className="text-orange-400">1.2</span>,</code>
                  <code className="code-line block">  easing: (t) <span className="text-accent">{"=>"}</span> Math.<span className="text-blue-400">min</span>(<span className="text-orange-400">1</span>, <span className="text-orange-400">1.001</span> - Math.<span className="text-blue-400">pow</span>(<span className="text-orange-400">2</span>, -<span className="text-orange-400">10</span> * t)),</code>
                  <code className="code-line block">  orientation: <span className="text-green-400">'vertical'</span>,</code>
                  <code className="code-line block">  smoothWheel: <span className="text-orange-400">true</span>,</code>
                  <code className="code-line block">{"});"}</code>
                  <code className="block mt-4 opacity-50">{"// 每一帧都是对重力的模拟"}</code>
                  <code className="code-line block">requestAnimationFrame(raf);</code>
                </pre>
              </div>

              {/* Status Bar */}
              <div className="px-6 py-2 bg-accent/5 border-t border-accent/10 flex justify-between items-center">
                <span className="text-[9px] text-accent font-bold uppercase tracking-widest">UTF-8 / TypeScript</span>
                <span className="text-[9px] text-accent font-bold uppercase tracking-widest animate-pulse">Running...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
