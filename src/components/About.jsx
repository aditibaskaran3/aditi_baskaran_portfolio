import { motion } from 'framer-motion';
import { BookOpen, Award, Code2, Brain } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'CGPA', value: '9.01', icon: <Award className="w-6 h-6" /> },
    { label: 'Year', value: '3rd', icon: <BookOpen className="w-6 h-6" /> },
    { label: 'Projects', value: '10+', icon: <Code2 className="w-6 h-6" /> },
    { label: 'Focus', value: 'AI & Web', icon: <Brain className="w-6 h-6" /> },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 glow-text inline-block">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary dark:from-accent-purple dark:to-accent-cyan mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Code Editor Window */}
              <div className="bg-[#0f111a] rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl font-mono text-sm sm:text-base group-hover:shadow-accent-purple/10 transition-all duration-500 mb-8 relative z-10">
                <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-slate-700/50">
                  <div className="flex gap-2.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <div className="text-[#00e676] text-sm font-semibold tracking-wide">Developer Profile</div>
                  <div className="w-12"></div>
                </div>
                
                <div className="p-6 md:p-8 text-slate-300 leading-loose overflow-x-auto whitespace-pre-wrap sm:whitespace-nowrap">
                  <div className="flex gap-2">
                    <span className="text-[#ff79c6] font-semibold">const</span>
                    <span className="text-white font-semibold">developer</span>
                    <span className="text-[#ff79c6] font-semibold">=</span>
                    <span className="text-white">{'{'}</span>
                  </div>
                  
                  <div className="pl-6 md:pl-8 space-y-1 mt-1">
                    <div>
                      <span className="text-white font-semibold">name:</span> <span className="text-[#f1fa8c]">'Aditi Baskaran'</span>,
                    </div>
                    <div>
                      <span className="text-white font-semibold">role:</span> <span className="text-[#f1fa8c]">'Computer Science Student'</span>,
                    </div>
                    <div>
                      <span className="text-white font-semibold">education:</span> <span className="text-[#f1fa8c]">'Chennai Institute of Technology'</span>,
                    </div>
                    <div className="flex flex-wrap gap-x-2 mt-1">
                      <span className="text-white font-semibold">interests:</span> 
                      <span className="text-white">[</span>
                      <span className="text-[#f1fa8c]">'Software Dev'</span>, 
                      <span className="text-[#f1fa8c]">'ML'</span>, 
                      <span className="text-[#f1fa8c]">'Full Stack'</span>, 
                      <span className="text-[#f1fa8c]">'App Dev'</span>, 
                      <span className="text-[#f1fa8c]">'AI'</span>, 
                      <span className="text-[#f1fa8c]">'Blockchain'</span>, 
                      <span className="text-[#f1fa8c]">'UI/UX'</span>
                      <span className="text-white">]</span>,
                    </div>
                    <div className="mt-2 flex flex-col sm:flex-row gap-x-2">
                      <span className="text-white font-semibold shrink-0">description:</span>
                      <span className="text-[#8be9fd] whitespace-normal">A passionate 3rd-year B.E student thriving at the intersection of various technologies. I love building real-world applications and continuously learning modern technologies to stay ahead of the curve.</span><span className="text-white">,</span>
                    </div>
                    <div className="mt-2 flex flex-col sm:flex-row gap-x-2">
                      <span className="text-white font-semibold shrink-0">goal:</span>
                      <span className="text-[#8be9fd] whitespace-normal">To create intelligent, accessible, and user-friendly solutions that solve complex problems.</span>
                    </div>
                  </div>
                  
                  <div className="mt-1">
                    <span className="text-white">{'};'}</span>
                  </div>
                </div>
              </div>

              {/* Terminal Box */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-10 bg-[#0a0f1c] rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl font-mono text-sm sm:text-base group-hover:shadow-accent-purple/10 transition-all duration-500 relative z-10"
              >
                <div className="flex items-center px-4 py-3 bg-[#111827] border-b border-slate-700/50">
                  <div className="flex gap-2.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] hover:scale-110 transition-transform cursor-pointer"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] hover:scale-110 transition-transform cursor-pointer"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] hover:scale-110 transition-transform cursor-pointer"></div>
                  </div>
                  <div className="ml-4 text-slate-400 text-xs font-semibold tracking-widest uppercase">
                    ADITI@CIT:~$
                  </div>
                </div>
                <div className="p-6 md:p-8 text-slate-300 space-y-4 bg-[#0a0f1c]">
                  <div className="flex gap-3 items-center">
                    <span className="text-accent-purple font-bold shrink-0">$ &gt;</span>
                    <span className="text-slate-200">initialising_portfolio --user='aditi.baskaran'</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <span className="text-accent-purple font-bold shrink-0">$ &gt;</span>
                    <span className="text-slate-200">compiling: hopes, ideas, late_night_commits.ts</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <span className="text-accent-purple font-bold shrink-0">$ &gt;</span>
                    <span className="text-slate-100 font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan to-white">ready. press tab to fall down the rabbit hole.</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, translateY: -5 }}
                className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center group"
              >
                <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center mb-4 text-accent-primary dark:text-accent-cyan group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-slate-800 dark:text-white mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
