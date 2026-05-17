import { motion } from 'framer-motion';
import { Send, Mail, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Make sure to set these variables in your .env file
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    emailjs
      .sendForm(serviceId, templateId, formRef.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitStatus('success');
          formRef.current.reset();
          setTimeout(() => setSubmitStatus(null), 5000);
        },
        (error) => {
          setIsSubmitting(false);
          setSubmitStatus('error');
          console.error('FAILED...', error.text);
          setTimeout(() => setSubmitStatus(null), 5000);
        }
      );
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-5xl mx-auto"
        >
          <h2 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.9] text-slate-900 dark:text-white uppercase">
            Let's<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-cyan dark:from-[#a881ff] dark:to-[#8c52ff]">
              Build.
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
              Got a project in mind? <br />
              <span className="text-accent-primary dark:text-accent-purple">Let's talk about it.</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
              I'll try my best to get back to you!
            </p>
            
            <div className="flex gap-4">
              {[
                { icon: <FaGithub size={24} />, href: "https://github.com/aditibaskaran3", label: "GitHub" },
                { icon: <FaLinkedin size={24} />, href: "https://www.linkedin.com/in/aditi-baskaran/", label: "LinkedIn" },
                { icon: <Mail size={24} />, href: "mailto:aditikaran750@gmail.com", label: "Email" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-accent-primary dark:hover:text-accent-cyan hover:scale-110 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form ref={formRef} onSubmit={sendEmail} className="glass-card p-8 rounded-3xl flex flex-col gap-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-accent-secondary/5 dark:from-accent-purple/10 dark:to-accent-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-100/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-primary dark:focus:ring-accent-cyan transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="relative z-10">
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-100/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-primary dark:focus:ring-accent-cyan transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="relative z-10">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl bg-slate-100/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-primary dark:focus:ring-accent-cyan transition-all resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="glow-button w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-dark rounded-xl flex items-center justify-center gap-2 mt-2 relative z-10 hover:scale-[1.02] transition-transform disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <span>Sending...</span>
                    <Loader2 className="w-5 h-5 animate-spin" />
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <span>Sent Successfully!</span>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </>
                ) : submitStatus === 'error' ? (
                  <>
                    <span>Failed to Send</span>
                    <XCircle className="w-5 h-5 text-red-500" />
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
