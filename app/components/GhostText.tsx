'use client';

import { motion } from 'framer-motion';
import Portfolio from './Portfolio';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { BackgroundBeams } from './ui/background-beams';
import { FloatingNav } from './ui/FloatingNav';
import { SparklesCore } from './ui/SparklesCore';


export default function Home() {
  const ghostText = "FULL STACK DEVELOPER";
  
  return (
    <main className="relative min-h-screen bg-[#0F172A]">
      <FloatingNav navItems={[]} />
      
      {/* Background Ghost Text Animation */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none select-none">
        <div className="relative w-full h-full">
          {/* Animated Background Text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] scale-150 rotate-12 transform-gpu">
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.5, 0.8, 0.5],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: i * 2,
                }}
                className="absolute whitespace-nowrap"
              >
                <span className="text-[20vw] font-bold text-white tracking-wider">
                  {ghostText}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Particle Effect */}
          <div className="absolute inset-0">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={10}
              className="w-full h-full"
              particleColor="#2563EB"
            />
          </div>
          
          {/* Gradient Background Beams */}
          <BackgroundBeams className="absolute inset-0" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Portfolio />
      </div>

      {/* Projects Section */}
      <section className="relative py-20">
        <div className="relative z-10">
          <Portfolio />
        </div>
      </section>

      {/* Optional: Additional Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F172A]/50 to-[#0F172A] pointer-events-none" />
    </main>
  );
}