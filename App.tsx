
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Preloader from './components/Preloader';
import Education from './components/Education';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import CursorTrail from './components/CursorTrail';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('light');
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  useEffect(() => {
    if (!loading) {
        if (!vantaEffect && vantaRef.current && (window as any).VANTA) {
            setVantaEffect((window as any).VANTA.NET({
                el: vantaRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: theme === 'dark' ? 0x00c0ff : 0x005c99,
                backgroundColor: theme === 'dark' ? 0x0a0a0f : 0xf0f2f5,
                points: 7.00,
                maxDistance: 18.00,
                spacing: 17.00
            }));
        } else if (vantaEffect) {
            vantaEffect.setOptions({
                color: theme === 'dark' ? 0x00c0ff : 0x005c99,
                backgroundColor: theme === 'dark' ? 0x0a0a0f : 0xf0f2f5,
            });
        }
    }
    return () => {
        if (vantaEffect && !loading) {
            // vantaEffect.destroy(); // This causes issues on theme toggle, setOptions is better
        }
    };
  }, [loading, theme, vantaEffect]);
  
  useEffect(() => {
    return () => {
        if(vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  };

  return (
    <>
      <Preloader onLoaded={() => setLoading(false)} />
      <CursorTrail />
      <div className={`bg-gray-100 dark:bg-[#0a0a0f] text-gray-800 dark:text-gray-200 min-h-screen overflow-x-hidden transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <div ref={vantaRef} className="fixed inset-0 z-0" />
        <div className="relative z-10">
          <Header theme={theme} toggleTheme={toggleTheme} />
          <main>
            <Hero />
            <About />
            <Education />
            <Certifications />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </div>
        <AnimatePresence>
            {showScrollTop && (
                <motion.button
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform box-glow"
                    aria-label="Scroll to top"
                    >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                </motion.button>
            )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default App;
