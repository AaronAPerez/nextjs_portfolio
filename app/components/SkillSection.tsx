'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import EvervaultCard from './ui/Evervault-Card';

const SkillSection = () => {
  const categories = [
    {
      title: "Frontend",
      icons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg"
      ]
    },
    {
      title: "Backend",
      icons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
      ]
    },
    {
      title: "Tools",
      icons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg"
      ]
    }
  ];

  return (
    <div className="py-20 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 text-text-primary"
        >
          Technical Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="relative h-[400px]"
            >
              <EvervaultCard text={category.title} className="w-full h-full">
                <div className="absolute inset-0 z-50 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 p-4">
                    {category.icons.map((icon, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="relative w-16 h-16 bg-white/10 rounded-lg backdrop-blur-sm p-2"
                      >
                        <Image
                          src={icon}
                          alt={`${category.title} skill ${i + 1}`}
                          fill
                          className="object-contain p-2"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </EvervaultCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSection;

