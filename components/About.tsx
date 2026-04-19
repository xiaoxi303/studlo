"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import TextReveal from "./TextReveal";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.from(".about-item", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out"
    });

    gsap.to(".parallax-img", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      y: 100,
      ease: "none"
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-32 px-6 md:px-20 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 md:gap-24">
      <div className="flex-1 space-y-8 w-full">
        <h2 className="about-item text-4xl md:text-6xl font-bold tracking-tight">
          重新定义 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">交互体验</span>
        </h2>
        <div className="about-item w-full h-[1px] bg-white/10"></div>
        <div className="about-item">
          <TextReveal 
            text="我在设计与工程之间架起桥梁，将深厚的技术积淀与对美学的执着追求相结合，赋予产品鲜活的生命力。" 
            className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light" 
          />
        </div>
        <p className="about-item text-lg text-gray-500">
          专注于 Next.js、GSAP 与 Tailwind CSS。致力于追求极致性能与无缝微交互。
        </p>
      </div>

      <div className="flex-1 w-full relative h-[400px] md:h-[600px] rounded-[2rem] overflow-hidden group border border-white/10">
        <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-colors duration-700 z-10 mix-blend-overlay"></div>
        <div className="parallax-img absolute -top-[15%] -bottom-[15%] left-0 right-0 bg-[#0a0a0a] flex items-center justify-center scale-110">
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#050505] to-[#050505] relative">
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-48 h-48 rounded-full border border-white/5 flex items-center justify-center animate-[spin_20s_linear_infinite]">
                 <div className="w-32 h-32 rounded-full border border-blue-500/30 flex items-center justify-center animate-[spin_10s_linear_infinite_reverse]">
                    <span className="text-white/20 font-bold tracking-widest text-sm uppercase">探索界限</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
