import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaJava, 
  FaGithub, FaFigma, FaGitAlt, FaLink 
} from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiTailwindcss, SiExpress, 
  SiMongodb, SiFirebase, SiVercel, SiOpencv, 
  SiStreamlit, SiCplusplus 
} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { Brain } from 'lucide-react';

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 color="#E34F26" size={40} /> },
    { name: "CSS", icon: <FaCss3Alt color="#1572B6" size={40} /> },
    { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" size={40} /> },
    { name: "TypeScript", icon: <SiTypescript color="#3178C6" size={40} /> },
    { name: "React JS", icon: <FaReact color="#61DAFB" size={40} /> },
    { name: "Node JS", icon: <FaNodeJs color="#339933" size={40} /> },
    { name: "Express JS", icon: <SiExpress color="#ffffff" size={40} /> },
    { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" size={40} /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" size={40} /> },
    { name: "Python", icon: <FaPython color="#3776AB" size={40} /> },
    { name: "C++", icon: <SiCplusplus color="#00599C" size={40} /> },
    { name: "Java", icon: <FaJava color="#007396" size={40} /> },
    { name: "Firebase", icon: <SiFirebase color="#FFCA28" size={40} /> },
    { name: "Git", icon: <FaGitAlt color="#F05032" size={40} /> },
    { name: "GitHub", icon: <FaGithub color="#ffffff" size={40} /> },
    { name: "VS Code", icon: <TbBrandVscode color="#007ACC" size={40} /> },
    { name: "Figma", icon: <FaFigma color="#F24E1E" size={40} /> },
    { name: "Vercel", icon: <SiVercel color="#ffffff" size={40} /> },
    { name: "ML", icon: <Brain color="#8B5CF6" size={40} /> },
    { name: "OpenCV", icon: <SiOpencv color="#5C3EE8" size={40} /> },
    { name: "Streamlit", icon: <SiStreamlit color="#FF4B4B" size={40} /> },
    { name: "Blockchain", icon: <FaLink color="#22D3EE" size={40} /> },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-dark-secondary">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-secondary/10 dark:bg-accent-cyan/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px bg-slate-300 dark:bg-white/10 w-24 md:w-32"></div>
          <div className="px-6 py-2 rounded-lg bg-accent-primary/10 dark:bg-accent-purple/20 border border-accent-primary/20 dark:border-accent-purple/30">
            <h2 className="text-xl font-semibold text-accent-primary dark:text-white tracking-wide">
              Skills
            </h2>
          </div>
          <div className="h-px bg-slate-300 dark:bg-white/10 w-24 md:w-32"></div>
        </div>
      </div>

      {/* Scrolling Container */}
      <div className="relative w-full flex overflow-hidden group">
        {/* Fading Edges */}
        <div className="absolute left-0 top-0 w-24 md:w-48 h-full bg-gradient-to-r from-slate-50 to-transparent dark:from-dark-secondary dark:to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-24 md:w-48 h-full bg-gradient-to-l from-slate-50 to-transparent dark:from-dark-secondary dark:to-transparent z-10 pointer-events-none"></div>
        
        {/* Marquee Content */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {/* First set of skills */}
          <div className="flex gap-6 px-3">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="relative flex-shrink-0 w-32 h-36 flex flex-col items-center justify-center gap-4 rounded-2xl bg-white dark:bg-[#151c2c] border border-slate-200 dark:border-white/5 shadow-sm transition-transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-accent-primary/50 dark:via-accent-purple/50 to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-primary dark:via-accent-purple to-transparent opacity-20"></div>

                <div className="relative z-10 text-slate-700 dark:text-white drop-shadow-md">
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
          
          {/* Duplicated set for seamless infinite scroll */}
          <div className="flex gap-6 px-3">
            {skills.map((skill, index) => (
              <div 
                key={`dup-${index}`} 
                className="relative flex-shrink-0 w-32 h-36 flex flex-col items-center justify-center gap-4 rounded-2xl bg-white dark:bg-[#151c2c] border border-slate-200 dark:border-white/5 shadow-sm transition-transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-accent-primary/50 dark:via-accent-purple/50 to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-primary dark:via-accent-purple to-transparent opacity-20"></div>

                <div className="relative z-10 text-slate-700 dark:text-white drop-shadow-md">
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
