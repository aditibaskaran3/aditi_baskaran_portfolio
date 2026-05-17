import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {

  const projects = [
    {
      id: 1,
      title: "Real Time Sign Language Prediction",
      description: "Developed a real-time Sign Language Recognition System using Machine Learning, OpenCV, MediaPipe, and Streamlit to detect and classify hand gestures through webcam input. Built and trained a gesture recognition pipeline using hand landmark detection and computer vision techniques for real-time prediction. Designed an interactive application focused on accessibility and assistive communication for sign language users.",
      tech: ["Python", "OpenCV", "MediaPipe", "Streamlit", "Machine Learning"],
      github: "https://github.com/aditibaskaran3/Real-Time-Sign-Language-Recognition",
      demo: "#"
    },
    {
      id: 2,
      title: "CSR Health Trace",
      description: "Developed a blockchain-based medical supply tracking platform to ensure transparency and accountability in distributing healthcare resources through NGOs and CSR initiatives. Implemented a secure and tamper-proof tracking system with AI-assisted requirement analysis and inventory management dashboard.",
      tech: ["Blockchain", "Web Development", "AI Dashboard"],
      github: "https://github.com/aditibaskaran3/csr_health_trace",
      demo: "https://csr-health-trace.onrender.com"
    },
    {
      id: 3,
      title: "P2P Solar Energy Trading Platform",
      description: "Built a decentralized blockchain-based platform for peer-to-peer solar energy trading, enabling secure and transparent energy exchange between producers and consumers. Designed responsive and user-friendly interfaces for energy transactions and real-time interactions.",
      tech: ["Blockchain", "React", "UI/UX Design"],
      github: "https://github.com/aditibaskaran3/gridchain-p2p",
      demo: "#"
    },
    {
      id: 4,
      title: "My Money Manager",
      description: "My Money Manager is a web-based personal finance tracker that helps users record daily expenses, manage income, set monthly budgets, and track reminders. It provides a clean dashboard to view spending patterns, maintain balance awareness, and improve personal financial control.",
      tech: ["React", "Node.js", "Tailwind CSS"],
      github: "https://github.com/aditibaskaran3/My-Money-Manager",
      demo: "https://my-money-manager-akm.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-accent-primary/10 dark:bg-accent-purple/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 glow-text inline-block">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary dark:from-accent-purple dark:to-accent-cyan mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col gap-12 relative max-w-4xl mx-auto pb-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="sticky"
              style={{ top: `calc(120px + ${index * 30}px)` }}
            >
              <div className="glass-card rounded-3xl p-8 md:p-10 border border-slate-200/80 dark:border-white/10 shadow-2xl bg-white/95 dark:bg-[#0f1523]/95 backdrop-blur-xl flex flex-col items-start group transition-all duration-500 hover:border-accent-primary/40 dark:hover:border-accent-cyan/40">
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-slate-100 dark:bg-white/5 text-accent-primary dark:text-accent-cyan border border-slate-200/50 dark:border-white/5">
                    <Code2 size={28} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white leading-tight">
                    {project.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-4 mt-auto w-full pt-6 border-t border-slate-200 dark:border-slate-700/50">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:-translate-y-1 transition-transform font-bold text-sm shadow-lg">
                    <FaGithub size={18} /> Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary text-white hover:-translate-y-1 transition-transform font-bold text-sm shadow-lg">
                    <ExternalLink size={18} /> Demo
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
