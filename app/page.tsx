import Hero from './components/ui/Hero';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import ContactSection from './components/ui/ContactSection';
import { SparklesCore } from './components/ui/SparklesCore';
import { BackgroundBeams } from './components/ui/background-beams';
import FloatingNavDemo from './components/ui/FloatingNavDemo';
import LocationConnection from './components/LocationConnection';
import LocationMap from './components/ui/LocationMap';
import { WorldMap } from './components/WorldMap';
import IntroductionSection from './components/ui/IntroductionSection';
import { BentoGrid } from './components/ui/BentoGrid';
import SkillsSection from './components/SkillSection';
import SkillCards from './components/SkillCards';
import { Spotlight } from './components/ui/Spotlight';
import HeroSection from './components/ui/HeroSection';
import PortfolioGrid from './components/ui/PortfolioGrid';

export default function Home() {
  return (
    <main className="bg-[#0F172A] min-h-screen relative">
      {/* Navigation */}
      <FloatingNavDemo />
      <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
        <div className="max-w-7xl w-full ">
          <h1 className="text-white-200">Hello, Portfolio</h1>
          <BentoGrid />
        </div>
      </div>
      <section>
        <Portfolio />
      </section>
      <section>
        <IntroductionSection />
      </section>
      <section>
        <SkillCards />
      </section>
      <section>
        <SkillsSection />
      </section>
      <section>
        <LocationConnection />
      </section>
      {/* Hero Section with Particles */}
      <section className="relative h-screen">
        <div className="h-screen w-full absolute inset-0">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <Hero />
      </section>
      {/*Spotlight Section */}
      <section className="relative py-20">
        <Spotlight />
        <div className="relative z-10">
          <PortfolioGrid />
        </div>
      </section>
      {/* Experience Timeline */}
      <section className="relative py-20">
        <BackgroundBeams />
        <div className="relative z-10">
          <Timeline />
        </div>
      </section>
      {/* Contact Section */}
      <section className="relative py-20">
        <BackgroundBeams />
        <div className="relative z-10">
          <ContactSection />
        </div>
      </section>
    </main>
      );
}