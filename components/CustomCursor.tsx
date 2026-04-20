"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(dot, { xPercent: -50, yPercent: -50 });

    const xToCursor = gsap.quickTo(cursor, "x", { duration: 0.3, ease: "power3" });
    const yToCursor = gsap.quickTo(cursor, "y", { duration: 0.3, ease: "power3" });
    
    const xToDot = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power3" });
    const yToDot = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power3" });

    const moveCursor = (e: MouseEvent) => {
      xToCursor(e.clientX);
      yToCursor(e.clientY);
      xToDot(e.clientX);
      yToDot(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as Element).closest("a, button, .hover-target");
      if (target) {
        gsap.to(cursor, { scale: 1.5, borderColor: "var(--accent)", duration: 0.4, ease: "back.out(1.7)" });
        gsap.to(dot, { scale: 0.5, backgroundColor: "var(--accent)", duration: 0.4 });
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = (e.target as Element).closest("a, button, .hover-target");
      if (target) {
        gsap.to(cursor, { scale: 1, borderColor: "white", duration: 0.4, ease: "power3.out" });
        gsap.to(dot, { scale: 1, backgroundColor: "white", duration: 0.4 });
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 border border-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{ willChange: "transform" }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
