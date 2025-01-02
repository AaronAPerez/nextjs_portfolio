'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

interface Project {
  title: string;
  description: string;
  image: string;
  demoLink: string;
  codeLink: string;
  tech: string[];
}

const projects: Project[] = [
  {
    title: "Expense Tracker",
    description: "Full-stack expense tracking application built with TypeScript and React. Features real-time updates, category management, and detailed financial analytics.",
    image: "/images/projects/expense-tracker/screenshot1.jpg",
    demoLink: "#",
    codeLink: "#",
    tech: ["TypeScript", "React", "Bootstrap", ".NET", "SQL Server"]
  },
  {
    title: "West Valley Bowl",
    description: "Modern business website redesign featuring responsive layouts, online booking system, and dynamic content management for a local bowling alley.",
    image: "/images/projects/bowling-site/screenshot1.jpg",
    demoLink: "#",
    codeLink: "#",
    tech: ["Bootstrap", "HTML5", "CSS3", "JavaScript"]
  },
  {
    title: "Game WRLD",
    description: "Video game database application using RAWG.io API. Features advanced search, filtering, and user collections with a modern, responsive interface.",
    image: "/images/projects/game-wrld/screenshot1.jpg",
    demoLink: "#",
    codeLink: "#",
    tech: ["React", "TypeScript", "Tailwind", ".NET"]
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border">
        {/* Project Title */}
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500"
        >
          {project.title}
        </CardItem>

        {/* Tech Stack Tags */}
        <CardItem translateZ="40" className="flex flex-wrap gap-2 mt-2">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
            >
              {tech}
            </span>
          ))}
        </CardItem>

        {/* Project Description */}
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm mt-4 dark:text-neutral-300"
        >
          {project.description}
        </CardItem>

        {/* Project Image */}
        <CardItem translateZ="100" className="w-full mt-4">
          <div className="relative h-60 w-full overflow-hidden rounded-xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transform group-hover/card:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </CardItem>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-8">
          <CardItem
            translateZ={20}
            as={Link}
            href={project.demoLink}
            target="_blank"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            View Demo →
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href={project.codeLink}
            target="_blank"
            className="px-4 py-2 rounded-xl border border-blue-500/20 text-blue-400 text-sm font-medium hover:bg-blue-500/10 transition-colors"
          >
            View Code
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

const ProjectShowcase = () => {
  return (
    <section className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-violet-500/5" />
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
            Featured Projects
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A showcase of my technical expertise and creative problem-solving through real-world applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;