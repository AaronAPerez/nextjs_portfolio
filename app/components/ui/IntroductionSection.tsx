'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TextGenerateEffect } from './TextGenerateEffect';
import { WorldMap } from '../WorldMap';

const IntroductionSection = () => {
  const mapDots = [
    {
      start: { lat: 37.7749, lng: -122.4194, label: 'San Francisco' }, // San Francisco
      end: { lat: 38.1045, lng: -121.2691, label: 'Stockton' }, // Stockton
    },
    {
      start: { lat: 38.1045, lng: -121.2691, label: 'Stockton' }, // Stockton
      end: { lat: 37.3541, lng: -121.9552, label: 'San Jose' }, // San Jose
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-secondary-dark">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-small-white/[0.2] bg-grid-small" />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <h1>Introduction Section</h1>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-secondary-light/50 backdrop-blur-sm">
              <span className="relative flex h-3 w-3 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-text-secondary">Available for opportunities</span>
            </div>

            <TextGenerateEffect
              words="Hi, I'm Aaron Perez"
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary-dark"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-text-secondary text-lg leading-relaxed"
            >
              A Full Stack Developer based in Stockton, CA, specializing in building exceptional digital experiences. 
              I enjoy creating elegant solutions to complex problems using modern web technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4"
            >
              <a
                href="#portfolio"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-medium hover:shadow-lg hover:shadow-primary/25 transition-shadow"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg border border-primary/20 text-text-primary hover:bg-primary/10 transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-secondary-dark via-transparent to-secondary-dark z-10 pointer-events-none" />
            <WorldMap dots={mapDots} lineColor="#3B82F6" />
          </motion.div>
        </div>
      </div>

      {/* Animated gradient blobs */}
      <div className="absolute inset-0 max-w-md mx-auto h-[27rem] sm:h-[40rem] md:h-[60rem] [mask-image:linear-gradient(black,transparent)] pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-auto w-[20rem] h-[20rem] bg-primary/30 rounded-full -z-10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
          className="absolute inset-auto translate-x-[15rem] w-[20rem] h-[20rem] bg-accent/30 rounded-full -z-10 blur-3xl"
        />
      </div>
    </div>
  );
};

export default IntroductionSection;