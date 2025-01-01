'use client'

import { motion } from 'framer-motion';
import { TextGenerateEffect } from './TextGenerateEffect';
import { BackgroundBeams } from './background-beams';
import { SparklesCore } from './SparklesCore';


{typeof window !== 'undefined' && (
  <SparklesCore
    id="tsparticlesfullpage"
    background="transparent"
    minSize={0.6}
    maxSize={1.4}
    particleDensity={100}
    className="w-full h-full"
    particleColor="#FFFFFF"
  />
)}

const Hero = () => {
  return (
    <div className="h-screen w-full bg-[#0F172A] flex flex-col items-center justify-center overflow-hidden rounded-md">
      <BackgroundBeams />
      <div className="w-full absolute inset-0 h-screen">
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
      
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <h2 className="text-sm text-blue-400 tracking-widest uppercase mb-4">
            Full Stack Developer
          </h2>
          <TextGenerateEffect 
            words="Building Digital Experiences with Code"
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          />
          <p className="text-slate-400 text-lg mb-8">
            Next.js • TypeScript • C# • React Native • Azure
          </p>
        </motion.div>

        <div className="flex gap-4 justify-center">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3B82F6_0%,#1E3A8A_50%,#3B82F6_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              View Projects
            </span>
          </button>
          <button className="px-6 py-3 rounded-full border border-blue-500/20 text-white hover:bg-blue-500/10 transition-colors">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

