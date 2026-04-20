"use client";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import DataSection from "@/components/DataSection";
import Features from "@/components/Features";
import Services from "@/components/Services";
import HorizontalScroll from "@/components/HorizontalScroll";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

import { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="bg-[#0a0a0a] min-h-screen" />;

  return (
    <main className="relative bg-[#0a0a0a]">
      <Nav />
      <Hero />
      <Story />
      <DataSection />
      <Features />
      <Services />
      <HorizontalScroll />
      <Process />
      <Projects />
      <Team />
      <Testimonials />
      <Footer />
    </main>
  );
}
