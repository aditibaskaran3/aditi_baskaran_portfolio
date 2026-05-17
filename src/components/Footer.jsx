import { ArrowUp, MapPin } from 'lucide-react';
import { animateScroll as scroll } from 'react-scroll';

export default function Footer() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <footer className="py-8 border-t border-slate-200 dark:border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-50 dark:bg-dark-secondary -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-slate-600 dark:text-slate-400 font-medium text-sm md:text-base flex-1 text-center md:text-left">
          &copy; {new Date().getFullYear()} <span className="text-accent-primary dark:text-accent-cyan font-semibold">Aditi Baskaran</span>. All rights reserved.
        </p>

        <div className="flex items-center justify-center gap-2 text-slate-600 dark:text-slate-400 font-medium text-sm md:text-base flex-1">
          <MapPin size={18} className="text-accent-primary dark:text-accent-cyan" />
          <span>Chennai, Tamil Nadu</span>
        </div>
        
        <div className="flex-1 flex justify-center md:justify-end">
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-accent-primary dark:hover:text-accent-cyan hover:-translate-y-1 transition-all duration-300 shadow-sm"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
