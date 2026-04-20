"use client";

import { useRef, useEffect, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useGSAP(() => {
    gsap.from(".footer-content", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 80%",
      }
    });
  }, { scope: footerRef });

  return (
    <footer ref={footerRef} className="bg-black text-white pt-32 pb-12 px-6 md:px-16 border-t border-white/10 relative overflow-hidden">
      {/* Background Matrix/Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="footer-content flex flex-col lg:flex-row justify-between items-start gap-20 mb-32">
          <div className="lg:w-1/2">
            <h2 className="text-huge mb-12">
              准备好<br />
              <span className="text-accent">重构</span><br />
              你的未来了吗？
            </h2>
            <div className="flex flex-wrap gap-12">
              <div>
                <span className="block text-[10px] text-white/20 uppercase tracking-widest mb-4">坐标 / Location</span>
                <span className="text-lg font-bold">上海 / 全球远程</span>
              </div>
              <div>
                <span className="block text-[10px] text-white/20 uppercase tracking-widest mb-4">联系 / Contact</span>
                <a href="mailto:hello@studio.com" className="text-lg font-bold hover:text-accent transition-colors">hello@studio.com</a>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 grid grid-cols-2 gap-12">
            <div>
              <span className="block text-[10px] text-white/20 uppercase tracking-widest mb-4">导航 / Navigation</span>
              <ul className="space-y-3">
                {["概览", "能力", "案例", "流程", "见解"].map((item) => (
                  <li key={item}><a href="#" className="text-sm font-light text-white/60 hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <span className="block text-[10px] text-white/20 uppercase tracking-widest mb-4">社交 / Social</span>
              <ul className="space-y-3">
                {["Twitter/X", "Instagram", "LinkedIn", "Dribbble", "Behance"].map((item) => (
                  <li key={item}><a href="#" className="text-sm font-light text-white/60 hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Terminal Style Status Bar */}
        <div className="border border-white/10 rounded-sm p-6 flex flex-col md:flex-row justify-between items-center gap-6 bg-white/[0.02]">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] font-mono text-accent uppercase tracking-widest">系统在线 / System_Live</span>
            </div>
            <div className="w-px h-4 bg-white/10 hidden md:block" />
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-white/40 uppercase">本地时间 / Time</span>
              <span className="text-[10px] font-mono text-white">{time}</span>
            </div>
            <div className="w-px h-4 bg-white/10 hidden md:block" />
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-white/40 uppercase">内核 / Kernel</span>
              <span className="text-[10px] font-mono text-white">STUDIO_V2.0.48</span>
            </div>
          </div>
          
          <div className="text-[9px] text-white/20 font-mono text-center md:text-right">
            © 2024 STUDIO DIGITAL ARCHITECTURE / 版权所有
            <br />
            BUILT WITH PRECISION USING NEXT.JS & GSAP
          </div>
        </div>
      </div>
    </footer>
  );
}
