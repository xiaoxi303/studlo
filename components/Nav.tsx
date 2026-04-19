"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

const NAV_LINKS = [
  { label: "关于", href: "#story" },
  { label: "服务", href: "#services" },
  { label: "作品", href: "#projects" },
  { label: "流程", href: "#process" },
];

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);
  let lastScrollY = 0;

  useEffect(() => {
    if (!navRef.current) return;

    // Initial entrance
    gsap.fromTo(navRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 3.2 }
    );

    // Hide/show on scroll
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 100) {
        gsap.to(navRef.current, { y: -80, duration: 0.4, ease: "power2.inOut" });
      } else {
        gsap.to(navRef.current, { y: 0, duration: 0.4, ease: "power2.out" });
      }
      lastScrollY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 opacity-0">
      {/* Logo */}
      <a href="#" className="text-white font-black tracking-tighter text-lg uppercase cursor-none hover-target">
        Studio<span className="text-gray-600">.</span>
      </a>

      {/* Links */}
      <div className="hidden md:flex items-center gap-10">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-gray-500 text-xs uppercase tracking-[0.2em] hover:text-white transition-colors duration-300 cursor-none hover-target"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href="mailto:hello@studio.design"
        className="text-xs uppercase tracking-[0.2em] text-gray-500 border border-white/10 px-5 py-2.5 hover:bg-white hover:text-black transition-all duration-300 cursor-none hover-target"
      >
        联系我们
      </a>
    </nav>
  );
}
