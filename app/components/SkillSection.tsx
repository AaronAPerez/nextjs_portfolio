'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import Image from 'next/image';
import { BentoGrid2 } from './ui/BentoGrid2';


const SkillsSection = () => {
  const skillGroups = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive web applications",
      className: "md:col-span-2",
      icons: [
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
          name: "React"
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
          name: "Next.js"
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
          name: "TypeScript"
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
          name: "Tailwind"
        }
      ]
    },
    {
      title: "Backend Development",
      description: "Creating robust server-side applications",
      className: "md:col-span-1",
      icons: [
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
          name: "C#"
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
          name: ".NET"
        }
      ]
    },
    {
      title: "Cloud & DevOps",
      description: "Deploying and scaling applications",
      className: "md:col-span-1",
      icons: [
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
          name: "Azure"
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
          name: "GitHub"
        }
      ]
    }
  ];

  const SkillHeader = ({ icons }) => {
    return (
      <div className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2">
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
          {icons.map((icon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/[0.8] dark:bg-black/[0.8] backdrop-blur-sm border border-neutral-200 dark:border-white/[0.2]"
            >
              <div className="relative w-10 h-10">
                <Image
                  src={icon.src}
                  alt={icon.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="mt-2 text-xs font-medium text-neutral-600 dark:text-neutral-200">
                {icon.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <div className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-600">
          Technical Skills
        </h2>

        <BentoGrid2 className="max-w-4xl mx-auto">
          {skillGroups.map((item, i) => (
            <BentoGrid2
              key={i}
              title={item.title}
              description={item.description}
              header={<SkillHeader icons={item.icons} />}
              className={cn("[&>p:text-lg]", item.className)}
            />
          ))}
        </BentoGrid2>
      </motion.div>
    </div>
  );
};

export default SkillsSection;

