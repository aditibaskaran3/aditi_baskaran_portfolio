import { motion } from 'framer-motion';
import { Mail, ArrowRight, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Animations */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent-primary/30 dark:bg-accent-purple/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent-secondary/30 dark:bg-accent-cyan/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-300/30 dark:bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-lg md:text-xl text-accent-primary dark:text-accent-cyan font-medium mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hi there, I'm
            </motion.h2>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-slate-800 dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Aditi Baskaran
            </motion.h1>

            <motion.div 
              className="text-xl md:text-2xl font-semibold mb-6 glow-text h-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-accent-primary dark:text-accent-purple">
                <Typewriter
                  words={['Aspiring Software Engineer | Full stack, AI, UI/UX Enthusiast']}
                  loop={1}
                  cursor
                  cursorStyle='|'
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </motion.div>

            <motion.p 
              className="text-slate-600 dark:text-slate-300 text-lg mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Tech-driven Computer Science student passionate about full-stack development, 
              Machine Learning, blockchain technology, cloud computing, and UI/UX design, 
              focused on building intelligent and user-friendly applications.
            </motion.p>

            <motion.div 
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link to="projects" smooth={true} duration={500} offset={-80}>
                <button className="glow-button px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-dark flex items-center gap-2 rounded-full hover:scale-105 transform">
                  View Projects <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                <button className="px-8 py-3 glass-card text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors rounded-full flex items-center gap-2">
                  Contact Me
                </button>
              </Link>
            </motion.div>


          </motion.div>

          <motion.div 
            className="flex-1 relative w-full max-w-lg mx-auto lg:mx-0 mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Background glowing effects for the box */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-primary to-accent-cyan rounded-3xl blur-2xl opacity-20 dark:opacity-30"></div>
            
            {/* JSON Metadata Box */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200/50 dark:border-white/10 shadow-2xl bg-white/60 dark:bg-[#0f1523]/80 backdrop-blur-xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-primary to-accent-cyan opacity-70"></div>
              
              <div className="flex flex-col gap-5 font-mono text-sm sm:text-base tracking-wide">
                <div className="text-slate-500 dark:text-slate-400 mb-2">
                  <span className="text-accent-primary dark:text-accent-purple font-semibold">// METADATA.JSON</span>
                </div>
                
                <div className="flex justify-between items-center border-b border-slate-200/80 dark:border-slate-700/50 pb-3">
                  <span className="text-slate-500 dark:text-slate-400">LOCATION</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">CHENNAI, IN</span>
                </div>
                
                <div className="flex justify-between items-center border-b border-slate-200/80 dark:border-slate-700/50 pb-3">
                  <span className="text-slate-500 dark:text-slate-400">COLLEGE</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">CIT - CSE</span>
                </div>

                <div className="flex justify-between items-center border-b border-slate-200/80 dark:border-slate-700/50 pb-3">
                  <span className="text-slate-500 dark:text-slate-400">FOCUS</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">FULL-STACK / ML</span>
                </div>

                <div className="flex justify-between items-center border-b border-slate-200/80 dark:border-slate-700/50 pb-3">
                  <span className="text-slate-500 dark:text-slate-400">STATUS</span>
                  <span className="text-accent-primary dark:text-accent-cyan font-bold animate-pulse">OPEN TO WORK</span>
                </div>

                <div className="flex justify-between items-center border-b border-slate-200/80 dark:border-slate-700/50 pb-3">
                  <span className="text-slate-500 dark:text-slate-400">TIMEZONE</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">GMT+5:30</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-slate-400">LANG</span>
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">EN / TA</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
