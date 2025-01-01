'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardTitle, CardDescription } from './ui/HoverCardContainer';
import { CardSkeletonContainer } from './ui/CardSkeletonContainer';

const SkillCards = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces",
      icons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg"
      ]
    },
    {
      title: "Backend Development",
      description: "Creating robust server-side applications",
      icons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
      ]
    },
    {
      title: "Tools & Cloud",
      description: "Deploying and maintaining applications",
      icons: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg"
      ]
    }
  ];

  return (
    <div className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center text-text-primary mb-16">Technical Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card>
                <CardSkeletonContainer>
                  <div className="flex items-center justify-center h-full">
                    <div className="grid grid-cols-2 gap-4">
                      {category.icons.map((icon, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center justify-center p-2"
                        >
                          <div className="relative w-16 h-16">
                            <Image
                              src={icon}
                              alt={`${category.title} icon ${i + 1}`}
                              fill
                              className="object-contain"
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardSkeletonContainer>
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SkillCards;