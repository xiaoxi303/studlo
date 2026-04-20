"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

const NAV_LINKS = [
  { label: "关于", href: "#story" },
  { label: "服务", href: "#services" },
  { label: "作品", href: "#projects" },
  { label: "流程", href: "#process" },
  { label: "团队", href: "#team" },
];

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (!navRef.current) return;

    gsap.fromTo(navRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 3.5 }
    );

    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 100) {
        gsap.to(navRef.current, { y: -80, duration: 0.4, ease: "power2.inOut" });
      } else {
        gsap.to(navRef.current, { y: 0, duration: 0.4, ease: "power2.out" });
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 opacity-0 mix-blend-difference"
    >
      <a href="#" className="text-white font-black tracking-tight text-xl uppercase cursor-none hover-target">
        Studio<span className="text-white/40">.</span>
      </a>

      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-white/60 text-xs uppercase tracking-[0.15em] hover:text-white transition-colors duration-300 cursor-none hover-target hover-line"
          >
            {link.label}
          </a>
        ))}
      </div>

      <a
        href="#contact"
        className="text-xs uppercase tracking-[0.15em] text-white/60 border border-white/20 px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-500 cursor-none hover-target"
      >
        联系我们
      </a>
    </nav>
  );
}
