'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { WorldMap } from './WorldMap';
import GlowingStarsBackgroundCard from './GlowingStarsBackground';


const MapSection = () => {
  const mapDots = [
    {
      start: { lat: 37.7749, lng: -122.4194, label: 'San Francisco' },
      end: { lat: 38.1045, lng: -121.2691, label: 'Stockton' },
    },
    {
      start: { lat: 38.1045, lng: -121.2691, label: 'Stockton' },
      end: { lat: 37.3541, lng: -121.9552, label: 'San Jose' },
    }
  ];

  const gradientColors = {
    primary: {
      from: 'from-indigo-500',
      via: 'via-purple-500',
      to: 'to-pink-500'
    },
    secondary: {
      from: 'from-emerald-500',
      via: 'via-teal-500',
      to: 'to-blue-500'
    },
    accent: {
      from: 'from-orange-500',
      via: 'via-amber-500',
      to: 'to-yellow-500'
    }
  };

  return (
    <div className="relative w-full py-20 overflow-hidden">
      {/* Background with GlowingStars */}
      <div className="absolute inset-0 w-full h-full">
        <GlowingStarsBackgroundCard className="w-full h-full max-w-none max-h-none rounded-none bg-opacity-50" />
      </div>

      {/* Gradient Overlays */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 via-teal-500/20 to-blue-500/20" />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Global Reach
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Connecting and collaborating across boundaries
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative rounded-2xl overflow-hidden bg-black/40 backdrop-blur-sm border border-white/10"
        >
          {/* Animated gradient border */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 animate-gradient" />
          
          <div className="relative p-2">
            <WorldMap 
              dots={mapDots} 
              lineColor="rgba(168, 85, 247, 0.4)" // Purple with transparency
            />
          </div>
        </motion.div>

        {/* Connection Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          {Object.entries(gradientColors).map(([key, colors], index) => (
            <div 
              key={key}
              className="p-6 rounded-xl bg-black/40 backdrop-blur-sm border border-white/10"
            >
              <div className={`text-2xl font-bold bg-gradient-to-r ${colors.from} ${colors.via} ${colors.to} bg-clip-text text-transparent`}>
                {index === 0 ? '24/7' : index === 1 ? 'Global' : 'Real-time'}
              </div>
              <div className="mt-2 text-gray-400">
                {index === 0 ? 'Availability' : index === 1 ? 'Collaboration' : 'Communication'}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MapSection;