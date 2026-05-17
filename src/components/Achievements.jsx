import { motion } from 'framer-motion';
import { Trophy, Star } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      title: "Top 20 Finalist",
      event: "INDCON Hackathon",
      organization: "College of Engineering Guindy",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-yellow-400 to-amber-600"
    },
    {
      title: "Top 15 Finalist",
      event: "E-Summit Ideathon Hackathon",
      organization: "IIITDM Kancheepuram",
      icon: <Star className="w-8 h-8" />,
      color: "from-blue-400 to-indigo-600"
    },
    {
      title: "Finalist",
      event: "Health Hack Hackathon",
      organization: "VIT Bhopal x Johns Hopkins University",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-purple-400 to-pink-600"
    }
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-secondary/10 dark:bg-accent-cyan/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 glow-text inline-block">Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary dark:from-accent-purple dark:to-accent-cyan mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${item.color} rounded-full mix-blend-multiply opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-xl`}></div>
              
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{item.title}</h3>
              <div className="text-lg font-semibold text-accent-primary dark:text-accent-cyan mb-1">{item.event}</div>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">{item.organization}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
