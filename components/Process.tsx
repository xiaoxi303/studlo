"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const STEPS = [
  { step: "探索", en: "DISCOVERY", desc: "深入挖掘品牌基因与技术可行性。我们不是在寻找答案，而是在定义正确的问题。", code: "const concept = init('brand');" },
  { step: "架构", en: "ARCHITECTURE", desc: "构建稳健的数字化蓝图。从信息架构到动效逻辑，确保每一行代码都有据可循。", code: "build.structure(blueprint);" },
  { step: "开发", en: "ENGINEERING", desc: "以极致的匠心编写每一行代码。Next.js + GSAP 是我们的核心武器，速度即是生命。", code: "while(live) { optimize(); }" },
  { step: "演进", en: "EVOLUTION", desc: "上线仅仅是旅程的开始。通过持续的性能监控与体验优化，让数字资产不断进化。", code: "system.deploy({ stable: true });" },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 1,
      }
    });

    tl.fromTo(progressRef.current, { scaleY: 0 }, { scaleY: 1, ease: "none" });

    gsap.from(".process-item", {
      opacity: 0,
      x: -50,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: ".process-grid",
        start: "top 70%",
      }
    });

  }, { scope: sectionRef });

  return (
    <section 
      id="process" 
      ref={sectionRef} 
      className="relative bg-black py-32 md:py-48 px-6 md:px-16 border-t border-white/10 overflow-hidden"
    >
      {/* Background Decorative Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <div className="absolute top-1/4 left-0 w-full h-px bg-white" />
        <div className="absolute top-2/4 left-0 w-full h-px bg-white" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-white" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <span className="text-label text-accent mb-6 block">Methodology / 方法论</span>
            <h2 className="text-display mb-10">
              从逻辑到<br />
              <span className="text-accent">艺术</span>的演进
            </h2>
            <div className="p-6 border border-white/10 bg-white/[0.02] rounded-sm">
              <p className="text-xs text-white/40 leading-relaxed font-mono">
                我们遵循一套严苛的工程标准，将复杂的商业需求转化为极简的交互语言。每一帧动效，都是逻辑与美学的博弈。
              </p>
            </div>
          </div>

          <div className="lg:w-2/3 relative">
            {/* Progress Line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 hidden md:block">
              <div ref={progressRef} className="absolute top-0 left-0 w-full bg-accent origin-top scale-y-0 h-full" />
            </div>

            <div className="process-grid space-y-12 md:pl-16">
              {STEPS.map((item, i) => (
                <div key={i} className="process-item group relative">
                  <div className="absolute -left-[calc(4rem+1px)] top-2 w-3 h-3 rounded-full bg-black border border-white/20 group-hover:bg-accent group-hover:border-accent transition-colors duration-500 hidden md:block" />
                  
                  <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                    <div className="flex-shrink-0">
                      <span className="text-[10px] font-mono text-white/20 block mb-2">PHASE_0{i+1}</span>
                      <h3 className="text-3xl font-black text-white tracking-tighter group-hover:text-accent transition-colors duration-500">{item.step}</h3>
                      <span className="text-[10px] font-mono text-accent/50 tracking-widest uppercase">{item.en}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/40 text-lg font-light leading-relaxed mb-6 group-hover:text-white/70 transition-colors duration-500">
                        {item.desc}
                      </p>
                      <div className="inline-block py-2 px-4 bg-white/[0.03] border border-white/5 rounded-sm">
                        <code className="text-xs text-accent/80 font-mono">{item.code}</code>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
