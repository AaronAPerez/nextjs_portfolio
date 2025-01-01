'use client'

import React from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const PinContainer = dynamic(() => import('./3D-pin').then(mod => mod.PinContainer),
  {ssr: false}
);

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

interface SkillSectionProps {
  title: string;
  skills: string[];
}

const ProjectCard = ({ title, description, tech, link }: ProjectCardProps) => {
  return (
    <div className="relative group">
      <div className="p-6 rounded-xl bg-[#0F172A]/90 backdrop-blur-xl border border-[#3B82F6]/20">
        <h3 className="text-xl font-bold text-[#F8FAFC] mb-3">{title}</h3>
        <p className="text-[#64748B] text-sm leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((t: string, i: number) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-md bg-[#1E293B] text-[#3B82F6] border border-[#3B82F6]/20"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const SkillSection = ({ title, skills }: SkillSectionProps) => {
  return (
    <div className="p-6 rounded-xl bg-black/50 backdrop-blur-xl">
      <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill: string, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="px-4 py-2 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white text-sm"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const PortfolioGrid = () => {
  const projects: ProjectCardProps[] = [
    {
      title: "Project 1",
      description: "A modern web application built with Next.js",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "https://project1.com",
    },
  ];

  const skillCategories: SkillSectionProps[] = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "SASS", "JavaScript", "TypeScript", "React", "Next.js"]
    },
    {
      title: "Backend",
      skills: ["C#", "ASP.NET", ".NET 8", "SQL", "Firebase"]
    },
    {
      title: "Mobile",
      skills: ["React Native"]
    },
    {
      title: "Cloud",
      skills: ["Azure", "Firebase"]
    },
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto space-y-16">
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <SkillSection key={index} {...category} />
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PortfolioGrid;