import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: "Kalanjiyam Technical Solutions",
      role: "Application Developer Intern",
      date: "Nov-Dec 2025",
      points: [
        "Developed and deployed My Money Manager Application",
        "Built a personal finance management app for tracking expenses"
      ]
    },
    {
      company: "Codec Technologies",
      role: "Graphic Design Intern",
      date: "Jun-July 2025",
      points: [
        "Designed and deployed FitMap fitness app prototype using Figma",
        "Created structured UI/UX flows and interactive screens"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 glow-text inline-block">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary dark:from-accent-purple dark:to-accent-cyan mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-200 dark:bg-white/10"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full glass-card items-center justify-center z-10 text-accent-primary dark:text-accent-cyan">
                  <Briefcase className="w-5 h-5" />
                </div>

                <div className="md:w-1/2 flex flex-col justify-center text-left">
                  <div className={`glass-card p-8 rounded-3xl group hover:border-accent-primary/30 dark:hover:border-accent-cyan/30 transition-all duration-300 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-accent-primary dark:group-hover:text-accent-cyan transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-slate-600 dark:text-slate-400 mb-6 font-medium text-sm">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-accent-primary dark:text-accent-cyan" />
                        <span className="text-slate-800 dark:text-slate-200">{exp.company}</span>
                      </div>
                      <span className="hidden sm:inline text-slate-300 dark:text-slate-600">•</span>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-accent-primary dark:text-accent-purple" />
                        <span>{exp.date}</span>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {exp.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-primary dark:bg-accent-cyan flex-shrink-0"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
