import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import DataSection from "@/components/DataSection";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#020202]">
      <Nav />
      <Hero />
      <Story />
      <DataSection />
      <Features />
      <Services />
      <Process />
      <Projects />
      <Testimonials />
      <Footer />
    </main>
  );
}
