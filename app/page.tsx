'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BackgroundBeams } from './components/ui/background-beams';
import { TextGenerateEffect } from './components/ui/TextGenerateEffect';
import { FloatingNav } from './components/ui/FloatingNav';
import { CardHoverEffectDemo } from './components/ui/HoverCard';


// Dynamic imports for heavy components
const SparklesCore = dynamic(
  () => import('./components/ui/SparklesCore').then(mod => mod.SparklesCore),
  {
    ssr: false,
    loading: () => <div className="w-full h-full bg-[#0F172A]" />
  }
);

// Navigation items
const navItems = [
  {
    name: "Home",
    link: "#home"
  },
  {
    name: "About",
    link: "#about"
  },
  {
    name: "Skills",
    link: "#skills"
  },
  {
    name: "Projects",
    link: "#projects"
  },
  {
    name: "Contact",
    link: "#contact"
  }
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative bg-[#0F172A] text-white overflow-hidden">
      {/* Navigation */}
      <FloatingNav navItems={navItems} />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <SparklesCore
            id="hero-sparkles"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={10}
            className="w-full h-full"
            particleColor="#2563EB"
          />
        </div>
        <BackgroundBeams />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-8"
          >
            <div className="relative w-40 h-40 mx-auto mb-8">
              <Image
                src="/headshot.svg"
                alt="Aaron A. Perez"
                fill
                className="rounded-full object-cover"
                priority
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full blur opacity-30" />
            </div>

            <TextGenerateEffect 
              words="Hi, I'm Aaron A. Perez"
              className="text-5xl md:text-7xl font-bold"
            />
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
                Full-Stack Developer
              </h2>
              <p className="mt-4 text-xl text-gray-400">
                Building exceptional digital experiences
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 justify-center"
            >
              <a href="#contact" className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                Get in Touch
              </a>
              <a href="#projects" className="px-8 py-3 border border-blue-600 text-blue-500 rounded-full hover:bg-blue-600/10 transition-colors">
                View Projects
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section with Tracing Beam */}
      <TracingBeam className="py-20">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="prose prose-invert">
            <p>
              I am a passionate Full Stack Developer with expertise in modern web technologies. 
              My journey in software development has equipped me with a strong foundation in 
              both frontend and backend development.
            </p>
            <p>
              I specialize in building scalable applications using React, TypeScript, and .NET, 
              with a focus on creating intuitive user experiences and robust backend systems.
            </p>
          </div>
        </div>
      </TracingBeam>

      <SkillSection/>
      <SkillCards/>

      {/* Skills Section with Card Hover Effects */}
      <section id="skills" className="py-20 relative bg-black">
        <Spotlight />
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-center mb-16">Technical Skills</h2>
        <BentoSkillGrid/>
        </div>
     
      </section>
      <section id="skills" className="py-20 relative">
        <BackgroundBeams />
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-center mb-16">Technical Skills</h2>
          <CardHoverEffectDemo />
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="py-20">
        {/* Projects content from your Portfolio component */}
      </section>

      {/* Location Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Where I Work</h2>
          <LocationMap />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <BackgroundBeams />
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Get in Touch</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 bg-white/10 border border-blue-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-2 bg-white/10 border border-blue-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea 
                rows={4}
                className="w-full px-4 py-2 bg-white/10 border border-blue-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button 
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}


// 'use client';

// import { motion } from 'framer-motion';
// import Portfolio from './components/Portfolio';
// import { TextGenerateEffect } from './components/ui/TextGenerateEffect';
// import { SparklesCore } from './components/ui/SparklesCore';
// import { BackgroundBeams } from './components/ui/background-beams';
// import { FloatingNav } from './components/ui/FloatingNav';
// import FloatingNavDemo from './components/ui/FloatingNavDemo';
// import PortfolioGrid from './components/ui/PortfolioGrid';

// export default function Home() {
//   const ghostText = "FULL STACK DEVELOPER";
  
//   return (


//     <main className="relative min-h-screen bg-[#0F172A]">
//       <FloatingNavDemo/>

      
      
//       {/* Background Ghost Text Animation */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none select-none">
//         <div className="relative w-full h-full">
//           {/* Animated Background Text */}
//           <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] scale-150 rotate-12 transform-gpu">
//             {Array.from({ length: 3 }).map((_, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0 }}
//                 animate={{ 
//                   opacity: [0.5, 0.8, 0.5],
//                   y: [0, -20, 0],
//                 }}
//                 transition={{
//                   duration: 6,
//                   repeat: Infinity,
//                   delay: i * 2,
//                 }}
//                 className="absolute whitespace-nowrap"
//               >
//                 <span className="text-[20vw] font-bold text-white tracking-wider">
//                   {ghostText}
//                 </span>
//               </motion.div>
//             ))}
//           </div>

//           {/* Particle Effect */}
//           <div className="absolute inset-0">
//             <SparklesCore
//               id="tsparticlesfullpage"
//               background="transparent"
//               minSize={0.6}
//               maxSize={1.4}
//               particleDensity={10}
//               className="w-full h-full"
//               particleColor="#2563EB"
//             />
//           </div>
          
//           {/* Gradient Background Beams */}
//           <BackgroundBeams className="absolute inset-0" />
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10">
//         <Portfolio />
//       </div>

//       {/* Projects Section */}
//       <section className="relative py-20">
//         <div className="relative z-10">
//           <PortfolioGrid />
//         </div>
//       </section>

//       {/* Optional: Additional Background Effects */}
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F172A]/50 to-[#0F172A] pointer-events-none" />
//     </main>
//   );
// }



// 'use client';

// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import Portfolio from './components/Portfolio';
// import { BackgroundBeams } from './components/ui/background-beams';
// import { FloatingNav } from './components/ui/FloatingNav';
// import ContactSection from './components/ui/ContactSection';
// import Timeline from './components/Timeline';
// import PortfolioGrid from './components/ui/PortfolioGrid';
// import { Spotlight } from './components/ui/Spotlight';
// import Hero from './components/ui/Hero';
// import LocationConnection from './components/LocationConnection';
// import SkillsSection from './components/SkillSection';
// import SkillCards from './components/SkillCards';
// import IntroductionSection from './components/ui/IntroductionSection';
// import { GhostTextEffect } from './components/GhostTextEffect';
// import { BentoGridItem } from './components/ui/BentoGrid';
// import { SparklesCore } from './components/ui/SparklesCore';
// import { BackgroundLines } from './components/ui/BackgroundLines';
// import Grid from './components/ui/Grid';
// import { HoverEffect } from './components/ui/HoverCardContainer';
// import ProjectCard from './components/ui/ProjectCard';
import { projects } from './components/Projects';
// import EvervaultCard from './components/ui/Evervault-Card';
// import SkillSection from './components/SkillSection';
// import { BentoGrid } from './components/ui/BentoSkillsGrid';
// import { CardHoverEffectDemo } from './components/ui/HoverCard';
// import Avatar from "/images/profile/headshot.png";
import TracingBeam from './components/ui/tracing-beam';
import LocationMap from './components/ui/LocationMap';
import SkillCards from './components/SkillCards';
import SkillSection from './components/SkillSection';
import { Spotlight } from './components/ui/Spotlight';
import ProjectCard from './components/ui/ProjectCard';
import { BentoSkillGrid } from './components/ui/BentoSkillsGrid';


// // Import project data
// const projects = [
//   {
//     title: "Expense Tracker",
//     description: "Full-stack expense tracking application with TypeScript & .NET",
//     tech: ["TypeScript", "React", "Bootstrap", "C#", ".NET", "SQL Server"],
//     images: [
//       "/images/projects/expense-tracker/screenshot1.jpg",
//       "/images/projects/expense-tracker/screenshot2.jpg"
//     ],
//     link: "#"
//   },
//   {
//     title: "West Valley Bowl",
//     description: "Modern business website redesign with responsive design",
//     tech: ["Bootstrap", "HTML5", "CSS3", "JavaScript"],
//     images: [
//       "/images/projects/bowling-site/screenshot1.jpg"
//     ],
//     link: "#"
//   },
//   {
//     title: "Game WRLD",
//     description: "Video game database using RAWG.io API and modern stack",
//     tech: ["React", "TypeScript", "Tailwind", "C#", ".NET"],
//     images: [
//       "/images/projects/game-wrld/screenshot1.jpg",
//       "/images/projects/game-wrld/screenshot2.jpg"
//     ],
//     link: "#"
//   }
// ];

// export default function Home() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null;
//   }

//   return (
//     <main className="relative min-h-screen">
//       <FloatingNav navItems={[]} />
      

//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center bg-black">
//         {/* Background Effects */}
//         <SparklesCore
//           id="hero-sparkles"
//           background="transparent"
//           minSize={0.6}
//           maxSize={1.4}
//           particleDensity={10}
//           className="absolute w-full h-full"
//           particleColor="yellow-400"
//         />
//         <BackgroundBeams className="absolute inset-0" />

//         {/* Profile Content */}
//         <div className="relative z-10 max-w-6xl mx-auto px-4">
//           <div className="flex flex-col lg:flex-row items-center gap-12">
//             {/* Profile Image */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.5 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5 }}
//               className="relative"
//             >
//               <div className="relative w-64 h-64 rounded-full overflow-hidden border-2 border-blue-500/20">
//                 <img src="/images/profile/headshot.png"
//                   alt="Aaron A. Perez"
//                   fill
//                   priority
//                   className="object-cover rounded-full"
//                 />
//                 {/* <Image
//                   src={"/images/profile/headshot.png"}
//                   alt="Aaron A. Perez"
//                   fill
//                   priority
//                   className="object-cover rounded-full"
//                 /> */}
//                 <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-violet-500/10" />
//               </div>
//               <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-violet-500 opacity-20 blur-2xl rounded-full" />
//             </motion.div>

//             {/* Text Content */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-center lg:text-left space-y-6 lg:flex-1"
//             >
//               <h1 className="text-4xl md:text-6xl font-bold text-white">
//                 Aaron A. Perez
//               </h1>
//               <h2 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-600">
//                 Full-Stack Developer
//               </h2>
//               <p className="text-lg text-gray-400">
//                 Building modern web experiences with cutting-edge technology
//               </p>
//               <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
//                       <span className="text-blue-400">Available for opportunities</span>
//                     </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
 

//        {/* Hero Section */}
//             <section className="relative min-h-screen flex items-center justify-center px-4">
//               <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
//               <div className="relative z-10 max-w-6xl mx-auto">
//                 <div className="flex flex-col lg:flex-row items-center gap-12">
//                   {/* Image Column */}
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.5 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.5 }}
//                     className="relative"
//                   >
//                     <div className="relative w-64 h-64 rounded-full overflow-hidden border-2 border-blue-500/20">
//                       <Image
//                         src="/images/profile/headshot.jpg" 
//                         alt="Aaron A. Perez"
//                         layout="fill"
//                         objectFit="cover"
//                         priority
//                         className="rounded-full"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-violet-500/10" />
//                     </div>
//                     <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-violet-500 opacity-20 blur-2xl rounded-full" />
//                   </motion.div>
      
//                   {/* Text Content Column */}
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="text-center lg:text-left space-y-6 lg:flex-1"
//                   >
//                     {/* <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
//                       <span className="text-blue-400">Available for opportunities</span>
//                     </div> */}
                    
//                     <div className="space-y-2">
//                       <h1 className="text-4xl md:text-6xl font-bold text-white">
//                         Aaron A. Perez
//                       </h1>
//                       <h2 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-600">
//                         Full-Stack Developer
//                       </h2>
//                     </div>
                    
//                     <p className="text-lg text-gray-400 max-w-2xl">
//                       Building digital experiences code. Specialized in creating robust and scalable applications using React, .NET, and cloud technologies.
//                     </p>
      
//                     {/* <div className="flex gap-4 justify-center lg:justify-start">
//                       <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-violet-600 text-white font-medium"
//                       >
//                         View Projects
//                       </motion.button>
//                       <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         className="px-6 py-3 rounded-lg border border-blue-500/20 text-white hover:bg-blue-500/10"
//                       >
//                         Contact Me
//                       </motion.button>
//                     </div> */}
//                                 <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
//                       <span className="text-blue-400">Available for opportunities</span>
//                     </div>
//                   </motion.div>
//                 </div>
//               </div>
//             </section>


//             <IntroductionSection/>





    



//       <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
//         <div className="max-w-7xl w-full ">
//          <BentoGridItem /> 
//         </div>
//       </div>



//       <section>
//         <SkillCards />
//       </section>
//       <section>
//         <SkillsSection />
//       </section>
//       <section>
//         <LocationConnection />
//       </section>
//       {/* Hero Section with Particles */}
//       <section className="relative h-screen">
//         <div className="h-screen w-full absolute inset-0">
//           <SparklesCore
//             id="tsparticlesfullpage"
//             background="transparent"
//             minSize={0.6}
//             maxSize={1.4}
//             particleDensity={100}
//             className="w-full h-full"
//             particleColor="#FFFFFF"
//           />
//         </div>
//         <Hero />
//       </section>
//       {/*Spotlight Section */}
//       <section className="relative py-20">
//         <Spotlight />
//         <div className="relative z-10">
//           <PortfolioGrid />
//         </div>
//       </section>
//       {/* Experience Timeline */}
//       <section className="relative py-20">
//         <BackgroundBeams />
//         <div className="relative z-10">
//           <Timeline />
//         </div>
//       </section>
//       {/* Contact Section */}
//       <section className="relative py-20">
//         <BackgroundBeams />
//         <div className="relative z-10">
//           <ContactSection />
//         </div>
//       </section>

//     </main>
//       );
// }