import Nav from "@/components/Nav";
import HUD from "@/components/HUD";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhySection from "@/components/WhySection";
import Story from "@/components/Story";
import CodeEditor from "@/components/CodeEditor";
import Manifesto from "@/components/Manifesto";
import Ecosystem from "@/components/Ecosystem";
import LogoMarquee from "@/components/LogoMarquee";
import MarqueeExpert from "@/components/MarqueeExpert";
import Loader from "@/components/Loader";
import DataSection from "@/components/DataSection";
import Features from "@/components/Features";
import Services from "@/components/Services";
import HorizontalScroll from "@/components/HorizontalScroll";
import Process from "@/components/Process";
import TechSpecs from "@/components/TechSpecs";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black">
      <Loader />
      <HUD />
      <Nav />
      <Hero />
      <About />
      <WhySection />
      <Story />
      <MarqueeExpert />
      <CodeEditor />
      <Manifesto />
      <LogoMarquee />
      <Skills />
      <Ecosystem />
      <DataSection />
      <Features />
      <Services />
      <HorizontalScroll />
      <Process />
      <TechSpecs />
      <Projects />
      <Team />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
