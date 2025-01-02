import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  description: string;
  tech: string[];
  images: string[];
  link: string;
  gradientColors: string[];
}

interface ProjectCardProps {
  project: Project;
  gradientColors: string[];
}

const ProjectCard = ({ project, gradientColors }: ProjectCardProps) => {
  return (
    <div className="relative p-[4px] group w-full">
      <motion.div
        initial={{ backgroundPosition: "0 50%" }}
        animate={{ 
          backgroundPosition: ["0, 50%", "100% 50%", "0 50%"]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundSize: "400% 400%"
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500",
          `bg-[radial-gradient(circle_farthest-side_at_0_100%,${gradientColors[0]},transparent),radial-gradient(circle_farthest-side_at_100%_0,${gradientColors[1]},transparent),radial-gradient(circle_farthest-side_at_100%_100%,${gradientColors[2]},transparent),radial-gradient(circle_farthest-side_at_0_0,${gradientColors[3]},#141316)]`
        )}
      />
      <motion.div
        initial={{ backgroundPosition: "0 50%" }}
        animate={{ 
          backgroundPosition: ["0, 50%", "100% 50%", "0 50%"]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundSize: "400% 400%"
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1]",
          `bg-[radial-gradient(circle_farthest-side_at_0_100%,${gradientColors[0]},transparent),radial-gradient(circle_farthest-side_at_100%_0,${gradientColors[1]},transparent),radial-gradient(circle_farthest-side_at_100%_100%,${gradientColors[2]},transparent),radial-gradient(circle_farthest-side_at_0_0,${gradientColors[3]},#141316)]`
        )}
      />
      
      <div className="relative z-10 bg-gray-950/80 rounded-2xl p-6 h-full">
        {/* Project Image */}
        <div className="relative h-64 md:h-72 lg:h-96 w-full mb-6 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent z-10" />
          <Image
            src={project.images[0] || "/placeholder.jpg"}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="transform transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Project Info */}
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h3>
          <p className="text-gray-300 text-lg">{project.description}</p>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 pt-4">
            {project.tech.map((tech: string, i: number) => (
              <span
                key={i}
                className="px-4 py-2 text-sm rounded-lg bg-gray-900/50 text-gray-300 border border-gray-800"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Project Links */}
          <div className="pt-6 flex gap-4">
            <motion.a
              href={project.link}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-gray-900 via-blue-950 to-gray-900 text-white border border-blue-900/50 hover:shadow-lg transition-all duration-300"
            >
              View Project
            </motion.a>
            <motion.a
              href={`${project.link}/code`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-lg border border-gray-800 text-white hover:bg-gray-900/50 transition-all duration-300"
            >
              View Code
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;