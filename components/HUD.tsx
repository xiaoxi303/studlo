"use client";

import { useEffect, useState } from "react";
import { gsap } from "@/lib/gsap";

export default function HUD() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [fps, setFps] = useState(120);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(Math.round(scrolled));
    };

    window.addEventListener("scroll", handleScroll);

    // Randomize FPS slightly for "real" feeling
    const fpsTimer = setInterval(() => {
      setFps(118 + Math.floor(Math.random() * 5));
    }, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(fpsTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] font-mono text-[9px] uppercase tracking-widest p-6 flex flex-col justify-between">
      {/* Top HUD */}
      <div className="flex justify-between items-start opacity-30">
        <div className="flex gap-8">
          <div>
            <span className="block text-white/40 mb-1">Status</span>
            <span className="text-accent">Live_Engine</span>
          </div>
          <div>
            <span className="block text-white/40 mb-1">Buffer</span>
            <span className="text-white">Active</span>
          </div>
        </div>
        <div className="text-right">
          <span className="block text-white/40 mb-1">Index</span>
          <span className="text-white">V2.48_STABLE</span>
        </div>
      </div>

      {/* Middle HUD (Optional lines or markers) */}
      <div className="absolute top-1/2 left-6 -translate-y-1/2 flex flex-col gap-12 opacity-20">
        <div className="w-px h-12 bg-white" />
        <div className="w-px h-12 bg-white" />
        <div className="w-px h-12 bg-white" />
      </div>

      {/* Bottom HUD */}
      <div className="flex justify-between items-end">
        <div className="flex gap-12 items-end">
          <div className="flex flex-col gap-1">
            <span className="text-white/40">Performance</span>
            <div className="flex items-center gap-2">
              <span className="text-white text-xs">{fps}</span>
              <span className="text-accent font-bold">FPS</span>
            </div>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="flex flex-col gap-1">
            <span className="text-white/40">Dynamics</span>
            <span className="text-white">Linear_Lerp</span>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-3">
            <span className="text-white/40">Scrolled</span>
            <span className="text-accent text-lg font-bold tabular-nums">{scrollProgress}%</span>
          </div>
          <div className="w-32 h-[2px] bg-white/10 relative overflow-hidden">
            <div 
              className="absolute inset-0 bg-accent transition-transform duration-300 origin-left" 
              style={{ transform: `scaleX(${scrollProgress / 100})` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
