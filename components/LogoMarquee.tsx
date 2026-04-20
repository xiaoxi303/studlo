"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const PARTNERS = [
  "GLOBAL_TECH", "AURA_DESIGN", "NEXUS_CREATIVE", "PRISM_DATA", "NOVA_SYSTEMS", "VOID_MEDIA", "ECHO_STUDIO", "SYNAPSE_AI"
];

export default function LogoMarquee() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(scrollRef.current, {
      xPercent: -50,
      ease: "none",
      duration: 30,
      repeat: -1,
    });
  }, { scope: scrollRef });

  return (
    <section className="py-24 bg-black border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <span className="text-label text-white/20 tracking-[0.4em]">Selected Partners / 合作伙伴</span>
      </div>
      
      <div className="flex whitespace-nowrap">
        <div ref={scrollRef} className="flex items-center gap-24 py-4">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex items-center gap-24">
              {PARTNERS.map((p) => (
                <span key={p} className="text-4xl md:text-5xl font-black text-white/10 hover:text-white transition-colors duration-500 tracking-tighter cursor-none">
                  {p}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
