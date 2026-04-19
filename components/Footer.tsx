"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const textGroupRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!footerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top bottom", // Start when footer enters viewport from bottom
        end: "bottom bottom",
        scrub: 1,
      }
    });

    tl.fromTo(textGroupRef.current, {
      yPercent: 50,
      scale: 0.9,
      opacity: 0,
      filter: "blur(10px)"
    }, {
      yPercent: 0,
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      ease: "power2.out"
    });

  }, { scope: footerRef });

  return (
    <footer ref={footerRef} className="h-screen py-20 md:py-32 px-6 md:px-20 bg-[#020202] flex flex-col justify-between overflow-hidden relative border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-white/[0.05] to-transparent pointer-events-none"></div>

      <div ref={textGroupRef} className="flex-1 flex flex-col justify-center overflow-hidden will-change-transform">
        <h2 className="text-[18vw] leading-[0.75] font-black tracking-tighter text-white uppercase mix-blend-difference z-10">
          极简
        </h2>
        <h2 className="text-[18vw] leading-[0.75] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-gray-800 uppercase mix-blend-difference z-10 text-right">
          共鸣
        </h2>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-end pb-8 z-10">
        <div className="flex flex-col gap-4">
          <a href="mailto:hello@studio.design" className="text-2xl md:text-4xl text-gray-300 hover:text-white transition-colors relative group font-light hover-target">
            hello@studio.design
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500 ease-out"></span>
          </a>
          <p className="text-sm text-gray-600 font-light tracking-widest uppercase">
            探索无界数字世界
          </p>
        </div>

        <div className="flex gap-10 mt-12 md:mt-0 text-sm text-gray-500 uppercase tracking-[0.2em] font-medium">
          <a href="#" className="hover:text-white transition-colors hover-target">Awwwards</a>
          <a href="#" className="hover:text-white transition-colors hover-target">Twitter</a>
          <a href="#" className="hover:text-white transition-colors hover-target">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
