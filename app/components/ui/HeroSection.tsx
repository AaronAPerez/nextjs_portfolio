'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { TextGenerateEffect } from './TextGenerateEffect';
import { BackgroundGradientAnimation } from './GradientBg';

const HeroSection = () => {
  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="#0F172A"
      gradientBackgroundEnd="#1E293B"
    >
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)]" />
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#2563EB] mb-6">
              Full-Stack Developer
            </h1>
          </motion.div>

          <TextGenerateEffect
            words="Building modern web experiences with cutting-edge technology"
            className="text-[#F8FAFC] text-xl md:text-2xl mb-8"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4 justify-center"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-shadow"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-[#1E293B] text-[#F8FAFC] font-medium border border-[#3B82F6]/20 hover:border-[#3B82F6]/40 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-[#64748B]"
          >
            Scroll to explore
          </motion.div>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
};

export default HeroSection;

