"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

const NAV_LINKS = [
  { label: "概览", href: "#story" },
  { label: "能力", href: "#services" },
  { label: "案例", href: "#projects" },
  { label: "方法", href: "#process" },
];

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (!navRef.current) return;

    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 100) {
        gsap.to(navRef.current, { y: -100, duration: 0.5, ease: "power4.inOut" });
      } else {
        gsap.to(navRef.current, { y: 0, duration: 0.5, ease: "power4.out" });
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-8"
    >
      <div className="flex items-center gap-4">
        <a href="#" className="text-white font-black tracking-tighter text-2xl uppercase cursor-none hover-target">
          STUDIO<span className="text-accent">.</span>
        </a>
        <div className="hidden lg:block w-[1px] h-4 bg-white/10 mx-2" />
        <span className="hidden lg:block text-[10px] text-white/30 uppercase tracking-[0.3em] font-bold">
          v2.0 / 2024
        </span>
      </div>

      <div className="hidden md:flex items-center gap-10 bg-black/40 backdrop-blur-md border border-white/5 px-8 py-3 rounded-full">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold hover:text-white transition-colors duration-300 cursor-none hover-target"
          >
            {link.label}
          </a>
        ))}
      </div>

      <a
        href="#contact"
        className="group relative px-6 py-2 overflow-hidden rounded-sm cursor-none hover-target"
      >
        <div className="absolute inset-0 bg-accent transition-transform duration-500 translate-y-[101%] group-hover:translate-y-0" />
        <span className="relative z-10 text-[10px] uppercase tracking-[0.2em] font-bold text-white group-hover:text-black transition-colors duration-500">
          联系我们
        </span>
        <div className="absolute inset-0 border border-white/20 group-hover:border-accent transition-colors duration-500" />
      </a>
    </nav>
  );
}
