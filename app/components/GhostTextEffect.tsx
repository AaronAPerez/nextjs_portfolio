'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface GhostTextEffectProps {
  text: string;
  className?: string;
}

export const GhostTextEffect = ({ text, className }: GhostTextEffectProps) => {
  return (
    <div className={`relative ${className}`}>
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
            y: [0, -20, 0],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeInOut",
          }}
          className="absolute whitespace-nowrap blur-sm"
          style={{
            WebkitTextStroke: '1px rgba(255,255,255,0.1)',
            WebkitTextFillColor: 'transparent',
          }}
        >
          <span className="text-[20vw] font-bold tracking-wider">
            {text}
          </span>
        </motion.div>
      ))}
    </div>
  );
};