'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PinContainer } from './3D-pin';

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  link: string;
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      <PinContainer title={project.title} href={project.link}>
        <div className="flex basis-full flex-col p-6 tracking-tight w-[20rem] h-[20rem] bg-[#0F172A]/90 backdrop-blur-xl border border-[#3B82F6]/20 rounded-xl">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/10 to-transparent rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
          />
          
          <h3 className="text-xl font-bold text-[#F8FAFC] mb-3">
            {project.title}
          </h3>
          
          <p className="text-[#64748B] text-sm leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((tech: string, index: number) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="px-3 py-1 text-xs font-medium rounded-md bg-[#1E293B] text-[#3B82F6] border border-[#3B82F6]/20"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-6 left-6 right-6"
              >
                <div className="flex justify-between items-center gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-2 rounded-lg bg-[#1E293B] text-[#F8FAFC] text-sm text-center font-medium border border-[#3B82F6]/20 hover:border-[#3B82F6]/40 transition-colors"
                  >
                    View Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-2 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white text-sm text-center font-medium shadow-lg shadow-blue-500/25"
                  >
                    Live Demo
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </PinContainer>
    </motion.div>
  );
};

export default ProjectCard;