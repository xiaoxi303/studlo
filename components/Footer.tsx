"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!footerRef.current) return;

    gsap.fromTo(ctaRef.current, {
      yPercent: 30, scale: 0.95, opacity: 0, filter: "blur(8px)"
    }, {
      yPercent: 0, scale: 1, opacity: 1, filter: "blur(0px)", ease: "power2.out",
      scrollTrigger: { trigger: footerRef.current, start: "top bottom", end: "center bottom", scrub: 1 }
    });
  }, { scope: footerRef });

  return (
    <footer id="contact" ref={footerRef} className="min-h-screen py-20 md:py-32 px-6 md:px-16 bg-[#0a0a0a] flex flex-col justify-between overflow-hidden relative border-t border-white/[0.04]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,106,74,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div ref={ctaRef} className="flex-1 flex flex-col justify-center items-center text-center will-change-transform">
        <p className="text-label text-accent mb-6">准备好了吗？</p>
        <h2 className="text-huge text-white">极简</h2>
        <h2 className="text-huge text-transparent bg-clip-text bg-gradient-to-r from-white via-white/60 to-white/20">共鸣</h2>

        <p className="mt-8 text-muted text-sm md:text-base font-light max-w-lg leading-relaxed">
          每一个伟大品牌的数字体验，都始于一次对话。<br />让我们一起，创造令人屏息的数字杰作。
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <a href="mailto:hello@studio.design" className="px-8 py-3 bg-white text-black font-medium text-sm uppercase tracking-widest rounded-full hover:bg-accent hover:text-white transition-all duration-500 cursor-none hover-target">
            开始合作
          </a>
          <a href="#" className="px-8 py-3 border border-white/20 text-white font-medium text-sm uppercase tracking-widest rounded-full hover:border-white hover:bg-white/5 transition-all duration-500 cursor-none hover-target">
            查看案例
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end pt-16 z-10 border-t border-white/[0.06]">
        <div className="flex flex-col gap-3">
          <p className="text-white font-black text-xl tracking-tight">Studio<span className="text-accent">.</span></p>
          <a href="mailto:hello@studio.design" className="text-muted text-sm hover:text-white transition-colors hover-target hover-line cursor-none">
            hello@studio.design
          </a>
          <p className="text-label text-white/20">© 2024 Studio. 保留所有权利。</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-8 md:mt-0">
          <div className="flex flex-col gap-3">
            <p className="text-label text-white/30 mb-1">导航</p>
            <a href="#story" className="text-muted text-sm hover:text-white transition-colors hover-target cursor-none">关于我们</a>
            <a href="#services" className="text-muted text-sm hover:text-white transition-colors hover-target cursor-none">服务能力</a>
            <a href="#projects" className="text-muted text-sm hover:text-white transition-colors hover-target cursor-none">精选作品</a>
            <a href="#process" className="text-muted text-sm hover:text-white transition-colors hover-target cursor-none">工作流程</a>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-label text-white/30 mb-1">社交</p>
            <a href="#" className="text-muted text-sm hover:text-white transition-colors hover-target cursor-none">Twitter</a>
            <a href="#" className="text-muted text-sm hover:text-white transition-colors hover-target cursor-none">Instagram</a>
            <a href="#" className="text-muted text-sm hover:text-white transition-colors hover-target cursor-none">Dribbble</a>
            <a href="#" className="text-muted text-sm hover:text-white transition-colors hover-target cursor-none">Awwwards</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
