import { motion } from 'framer-motion';
import { Code, Terminal, Cpu, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function CodingProfiles() {
  const [leetCodeStats, setLeetCodeStats] = useState({ total: "Loading...", easy: null, medium: null, hard: null });
  
  useEffect(() => {
    const fetchLeetCode = async () => {
      try {
        // Try Faisal Shohag API first (Vercel is faster cold start)
        const res1 = await fetch('https://leetcode-api-faisalshohag.vercel.app/aditi_baskaran');
        const data1 = await res1.json();
        
        if (data1 && data1.totalSolved) {
          setLeetCodeStats({
            total: data1.totalSolved,
            easy: data1.easySolved,
            medium: data1.mediumSolved,
            hard: data1.hardSolved
          });
          return;
        }
        
        // Fallback to Alfa API
        const res2 = await fetch('https://alfa-leetcode-api.onrender.com/aditi_baskaran/solved');
        const data2 = await res2.json();
        
        if (data2 && data2.solvedProblem) {
          setLeetCodeStats({
            total: data2.solvedProblem,
            easy: data2.easySolved,
            medium: data2.mediumSolved,
            hard: data2.hardSolved
          });
        } else {
          setLeetCodeStats({ total: 630, easy: null, medium: null, hard: null });
        }
      } catch (err) {
        console.error("Error fetching LeetCode stats:", err);
        setLeetCodeStats({ total: 630, easy: null, medium: null, hard: null });
      }
    };

    fetchLeetCode();
  }, []);
  const profiles = [
    {
      platform: "LeetCode",
      count: leetCodeStats.total,
      label: "Problems Solved",
      icon: <Code className="w-8 h-8" />,
      color: "from-yellow-400 to-orange-500",
      stats: leetCodeStats
    },
    {
      platform: "SkillRack",
      count: "230+",
      label: "Problems Solved",
      icon: <Terminal className="w-8 h-8" />,
      color: "from-blue-400 to-blue-600"
    },
    {
      platform: "CodeChef",
      count: "150+",
      label: "Problems Solved",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-emerald-400 to-emerald-600"
    }
  ];

  return (
    <section className="py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="glass-card p-6 rounded-3xl relative overflow-hidden group"
            >
              <div className={`absolute -right-6 -top-6 w-24 h-24 bg-gradient-to-br ${profile.color} rounded-full mix-blend-multiply opacity-20 group-hover:opacity-40 group-hover:scale-150 transition-all duration-500`}></div>
              
              <div className="flex items-center justify-between mb-4 relative z-10">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">{profile.platform}</h3>
                <div className={`text-transparent bg-clip-text bg-gradient-to-br ${profile.color}`}>
                  {profile.icon}
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="text-4xl font-black text-slate-900 dark:text-white mb-1 tracking-tight flex items-center h-10">
                  {profile.count === "Loading..." ? (
                    <Loader2 className="w-6 h-6 animate-spin text-accent-primary dark:text-accent-cyan" />
                  ) : (
                    profile.count
                  )}
                </div>
                <div className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {profile.label}
                </div>
                
                {profile.stats && profile.stats.easy !== null && (
                  <div className="flex gap-2 mt-4 text-xs font-bold">
                    <div className="text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-200 dark:border-emerald-500/20">
                      Easy: {profile.stats.easy}
                    </div>
                    <div className="text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-200 dark:border-amber-500/20">
                      Med: {profile.stats.medium}
                    </div>
                    <div className="text-rose-600 dark:text-rose-400 bg-rose-100 dark:bg-rose-500/10 px-2.5 py-1 rounded-md border border-rose-200 dark:border-rose-500/20">
                      Hard: {profile.stats.hard}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
