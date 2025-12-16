import React from 'react';
import { motion } from 'framer-motion';
import { useTypewriter } from '../hooks/useTypewriter';
import { SOCIAL_LINKS } from '../constants';
import { containerVariants, itemVariants } from '../utils/animations';

const Hero: React.FC = () => {
  const roles = useTypewriter(['Backend Developer', 'AI Engineer', 'Cloud Specialist','PYTHON DEVELOPER','N8N and AUTOMATION']);
  const resumeUrl = 'https://drive.google.com/file/d/1nkOX_wojqPGikhOpUopCvON0e1BLQKAS/view?usp=drive_link';

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
  };

  return (
    <section 
      id="home" 
      className="relative flex flex-col items-center justify-center min-h-screen text-center p-4 overflow-hidden"
    >
      <motion.div 
        className="max-w-4xl mx-auto"
        variants={containerVariants(0.3, 0.5)}
        initial="hidden"
        animate="visible"
      >
        <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4"
        >
            Hello, I'm
        </motion.p>
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-audiowide font-bold mb-4 text-glow tracking-widest uppercase glitch"
          data-text="Fayas Ahamed.B"
        >
          Fayas Ahamed.B
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-2xl md:text-3xl text-violet-600 dark:text-violet-400 font-orbitron text-glow-violet h-10"
        >
          {roles}
          <span className="animate-ping">|</span>
        </motion.p>
        <motion.p
            variants={itemVariants}
            className="text-lg text-gray-500 dark:text-gray-400 mt-6 max-w-2xl mx-auto"
        >
            Crafting high-performance, intelligent backend systems and scalable cloud solutions with a futuristic vision.
        </motion.p>
        <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
        >
            <a href="#projects" onClick={(e) => handleNavLinkClick(e, '#projects')} className="btn-glow flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg transition-transform hover:scale-105">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                View My Work
            </a>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-glow flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-cyan-500 text-cyan-500 font-semibold rounded-lg transition-all hover:scale-105 hover:bg-cyan-500/10 dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-400/10">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Download CV
            </a>
             <a href="#contact" onClick={(e) => handleNavLinkClick(e, '#contact')} className="btn-glow flex items-center gap-2 px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg transition-all hover:scale-105 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Get In Touch
            </a>
        </motion.div>
      </motion.div>
       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-6">
            <p className="text-sm text-gray-500 dark:text-gray-400 font-mono tracking-widest animate-pulse">SCROLL</p>
            <div className="flex items-center gap-8">
                 <a href="#about" onClick={(e) => handleNavLinkClick(e, '#about')} className="cursor-pointer" aria-label="Scroll down">
                  <div className="w-8 h-14 border-2 border-cyan-500 dark:border-cyan-400 rounded-full flex justify-center items-start p-2">
                    <motion.div
                      className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400"
                      animate={{ y: [2, 10, 2] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'easeInOut',
                      }}
                    />
                  </div>
                </a>
            </div>
      </div>
    </section>
  );
};

export default Hero;