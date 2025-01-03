'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from "@/lib/utils";

// Type definitions
interface Project {
  title: string;
  description: string;
  tech: string[];
  images: string[];
  link: string;
}

interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative p-4 w-full bg-black/40 backdrop-blur-sm rounded-xl border border-blue-500/20 overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        {/* Project Image */}
        <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
          <Image
            src={project.images[0] || "/placeholder.jpg"}
            alt={project.title}
            width={400}
            height={300}
            className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Project Info */}
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const SkillCard = ({ category }: { category: SkillCategory }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 bg-black/40 backdrop-blur-sm rounded-xl border border-blue-500/20"
    >
      <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
      <p className="text-gray-400 mb-4 text-sm">{category.description}</p>
      <div className="grid grid-cols-2 gap-2">
        {category.skills.map((skill, i) => (
          <span
            key={i}
            className="px-3 py-2 text-sm text-center rounded-lg bg-blue-500/10 text-blue-400"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Portfolio = () => {

    const projects = [
      {
        title: "Expense Tracker",
        description: "Modern expense tracking application with real-time updates and detailed analytics",
        tech: ["TypeScript", "React", "Bootstrap", "C#", ".NET", "SQL Server"],
        images: ["/expense-tracker-1.png"],
        link: "#",
        gradientColors: ["#00ccb1", "#7b61ff", "#1ca0fb", "#ffc414"] // Teal to blue gradient
      },
      {
        title: "West Valley Bowl",
        description: "Contemporary business website with integrated booking system and dynamic content",
        tech: ["Bootstrap", "HTML5", "CSS3", "JavaScript"],
        images: ["/bowling-1.png"],
        link: "#",
        gradientColors: ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96e6a1"] // Red to green gradient
      },
      {
        title: "Game WRLD",
        description: "Video game database featuring advanced search and filtering capabilities",
        tech: ["React", "TypeScript", "Tailwind", "C#", ".NET"],
        images: ["/game-wrld-1.png"],
        link: "#",
        gradientColors: ["#ff61d2", "#7d6aff", "#4cb5ff", "#00f2ea"] // Purple to cyan gradient
      }
    ];

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
    },
    {
      title: "Backend Development",
      description: "Creating robust server-side applications",
      skills: ["C#", ".NET", "SQL Server", "RESTful APIs"]
    },
    {
      title: "Tools & Cloud",
      description: "Development and deployment tools",
      skills: ["Git", "Azure", "VS Code", "Docker"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <h1>Hero Section Component</h1>
            {/* Image Column
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-2 border-blue-500/20">
                <Image
                  src="/images/projects/Diploma_bgTransparent.png" 
                  alt="Aaron A. Perez"
                  layout="fill"
                  objectFit="cover"
                  // priority
                  // className="rounded-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-violet-500/10" />
              </div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-violet-500 opacity-20 blur-2xl rounded-full" />
            </motion.div> */}

            {/* Text Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center lg:text-left space-y-6 lg:flex-1"
            >
              {/* <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                <span className="text-blue-400">Available for opportunities</span>
              </div> */}
              
              <div className="space-y-2">
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                  Aaron A. Perez
                </h1>
                <h2 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-600">
                  Full-Stack Developer
                </h2>
              </div>
              
              <p className="text-lg text-gray-400 max-w-2xl">
                Building digital experiences with code. Specialized in creating robust and scalable applications using React, Typescript, .NET, and cloud technologies.
              </p>

              <div className="flex gap-4 justify-center lg:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-violet-600 text-white font-medium"
                >
                  View Projects
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-lg border border-blue-500/20 text-white hover:bg-blue-500/10"
                >
                  Contact Me
                </motion.button>
              </div>
            </motion.div>

             {/* Image Column */}
             <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="w-52 h-52 ">
                <Image
                  src="/images/projects/Diploma_bgTransparent.png" 
                  alt="Aaron A. Perez"
                  layout="fill"
                  objectFit="cover"
                  priority
                  className="rounded-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-violet-500/10" />
             </div> 
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-violet-500 opacity-20 blur-2xl rounded-full" />
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-gray-950" id="projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-gray-200">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              // gradientColors={project.gradientColors}
            />
          ))}
        </div>
      </div>
    </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-black/40" id="skills">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-600">
            Technical Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <SkillCard key={index} category={category} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


export default Portfolio;
// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { cn } from "@/lib/utils";
// import ExpenseImage from "../images/expense-tracker-1.png"
// import BowlingImage from "../images/bowling-1.png"
// import GameImage from "../images/game-wrld-1.png.png"

// // Type definitions
// interface Project {
//   title: string;
//   description: string;
//   tech: string[];
//   images: string[];
//   link: string;
// }

// interface SkillCategory {
//   title: string;
//   description: string;
//   skills: string[];
// }

// const ProjectCard = ({ project }: { project: Project }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="relative p-4 w-full bg-black/40 backdrop-blur-sm rounded-xl border border-blue-500/20 overflow-hidden group"
//     >
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
//       <div className="relative z-10">
//         {/* Project Image */}
//         <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
//           <Image
//             src={project.images[0] || "/placeholder.jpg"}
//             alt={project.title}
//             width={400}
//             height={300}
//             className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-110"
//           />
//         </div>

//         {/* Project Info */}
//         <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
//         <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
        
//         {/* Tech Stack */}
//         <div className="flex flex-wrap gap-2">
//           {project.tech.map((tech, i) => (
//             <span
//               key={i}
//               className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const SkillCard = ({ category }: { category: SkillCategory }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="p-6 bg-black/40 backdrop-blur-sm rounded-xl border border-blue-500/20"
//     >
//       <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
//       <p className="text-gray-400 mb-4 text-sm">{category.description}</p>
//       <div className="grid grid-cols-2 gap-2">
//         {category.skills.map((skill, i) => (
//           <span
//             key={i}
//             className="px-3 py-2 text-sm text-center rounded-lg bg-blue-500/10 text-blue-400"
//           >
//             {skill}
//           </span>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// const Portfolio = () => {
//   const projects: Project[] = [
//     {
//       title: "Expense Tracker",
//       description: "Full-stack expense tracking application with TypeScript & .NET",
//       tech: ["TypeScript", "React", "Bootstrap", "C#", ".NET", "SQL Server"],
//       images: ["/images/expense-tracker-1.png"],
//       link: "#"
//     },
//     {
//       title: "West Valley Bowl",
//       description: "Modern business website redesign with responsive design",
//       tech: ["Bootstrap", "HTML5", "CSS3", "JavaScript"],
//       images: ["/api/placeholder/400/320"],
//       link: "#"
//     },
//     {
//       title: "Game WRLD",
//       description: "Video game database using RAWG.io API and modern stack",
//       tech: ["React", "TypeScript", "Tailwind", "C#", ".NET"],
//       images: ["/api/placeholder/400/320"],
//       link: "#"
//     }
//   ];

//   const skillCategories: SkillCategory[] = [
//     {
//       title: "Frontend Development",
//       description: "Building responsive and interactive user interfaces",
//       skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
//     },
//     {
//       title: "Backend Development",
//       description: "Creating robust server-side applications",
//       skills: ["C#", ".NET", "SQL Server", "RESTful APIs"]
//     },
//     {
//       title: "Tools & Cloud",
//       description: "Development and deployment tools",
//       skills: ["Git", "Azure", "VS Code", "Docker"]
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-[#0A0A0A]">
//       {/* Hero Section */}
//       <section className="relative h-screen flex items-center justify-center px-4">
//         <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
//         <div className="relative z-10 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="space-y-6"
//           >
//             <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
//               <span className="text-blue-400">Available for opportunities</span>
//             </div>
            
//             <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-600">
//               Full-Stack Developer
//             </h1>
            
//             <p className="text-lg text-gray-400 max-w-2xl">
//               Building modern web experiences with cutting-edge technology
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section className="py-20 px-4" id="projects">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-600">
//             Featured Projects
//           </h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project, index) => (
//               <ProjectCard key={index} project={project} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section className="py-20 px-4 bg-black/40" id="skills">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-600">
//             Technical Expertise
//           </h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {skillCategories.map((category, index) => (
//               <SkillCard key={index} category={category} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Portfolio;