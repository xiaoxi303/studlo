"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.from(textRef.current, {
      opacity: 0,
      y: 100,
      duration: 1.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      }
    });

    gsap.to(".parallax-bg", {
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });
  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      className="relative py-32 md:py-64 bg-black text-white px-6 md:px-16 overflow-hidden border-t border-white/10"
    >
      {/* Parallax Background Text */}
      <div className="parallax-bg absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <span className="text-[30vw] font-black tracking-tighter uppercase">PHILOSOPHY</span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-20">
          <div className="lg:w-1/2">
            <span className="text-label text-accent mb-6 block">Our Mission / 我们的使命</span>
            <h2 ref={textRef} className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.9]">
              重新定义<br />
              <span className="text-white/20">数字交互的</span><br />
              极致边界
            </h2>
          </div>
          
          <div className="lg:w-1/2 space-y-12">
            <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed">
              我们相信，优秀的数字体验不应只是视觉的堆砌，而应该是技术与叙事的完美交响。在 Studio，我们将最前沿的工程标准与对美学的无尽追求相结合。
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <span className="block text-accent font-mono text-xs mb-2">/ 01</span>
                <h4 className="text-xl font-bold mb-4">工程至上</h4>
                <p className="text-sm text-white/40 leading-relaxed">
                  以 120FPS 为基准的动效性能，确保每一个交互都如丝般顺滑。
                </p>
              </div>
              <div>
                <span className="block text-accent font-mono text-xs mb-2">/ 02</span>
                <h4 className="text-xl font-bold mb-4">品牌叙事</h4>
                <p className="text-sm text-white/40 leading-relaxed">
                  用滚动驱动的视觉语言，为每一个品牌量身打造独一无二的数字身份。
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <a href="#projects" className="group flex items-center gap-4 cursor-none hover-target">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white group-hover:text-accent transition-colors duration-500">Explore our works / 探索案例</span>
                <div className="w-12 h-px bg-white/20 group-hover:bg-accent group-hover:w-20 transition-all duration-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
