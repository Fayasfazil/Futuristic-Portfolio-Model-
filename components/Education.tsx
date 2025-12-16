
import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../utils/animations';

const educationData = [
    {
        icon: 'graduation-cap',
        degree: 'B.E. Computer Science Engineering',
        institution: 'Gnanamani College of Technology',
        duration: 'Pursuing',
        score: 'CGPA: 6.333',
    },
    {
        icon: 'school',
        degree: 'XII – Higher Secondary',
        institution: 'Sri Venkateswara Matric Hr Sec School',
        duration: '2022',
        score: '57.5%',
    },
    {
        icon: 'book',
        degree: 'X – Secondary School',
        institution: 'St Andrews Matric Hr Sec School',
        duration: '2020',
        score: '76%',
    }
];

// FIX: Changed `JSX.Element` to `React.ReactElement` to resolve TypeScript error.//

const icons: { [key: string]: React.ReactElement } = {
    'graduation-cap': <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12.083 12.083 0 0121.88 8.162a1 1 0 00.22-1.002l-.53-1.04a1 1 0 00-1.28-.61l-6.27 3.422a1 1 0 01-1 0L6.15 5.51a1 1 0 00-1.28.61l-.53 1.04a1 1 0 00.22 1.002 12.083 12.083 0 015.72 2.418z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zM3 10v6c0 1.657 5.373 3 9 3s9-1.343 9-3v-6" /></svg>,
    'school': <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
    'book': <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M20 12V8a2 2 0 00-2-2H6a2 2 0 00-2 2v4m16 0h-2m2 0h2M4 12h2m-2 0H2" /><path strokeLinecap="round" strokeLinejoin="round" d="M4 12V6a2 2 0 012-2h12a2 2 0 012 2v6m-4 8H8a2 2 0 01-2-2v-4a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2z" /></svg>,
};


const Education: React.FC = () => {
  return (
    <Section id="education" className="dark:bg-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-glow">
            Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-4 rounded"></div>
        </div>

        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants(0.3)}
        >
          {educationData.map((edu, index) => (
             <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white/50 dark:bg-gray-800/50 p-8 rounded-xl border border-gray-200 dark:border-gray-700/50 text-center transform transition-all duration-300 hover:scale-105 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
                <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-gray-200/50 dark:bg-gray-700/50 flex items-center justify-center text-cyan-500 dark:text-cyan-400">
                        {icons[edu.icon]}
                    </div>
                </div>
                <h3 className="text-xl font-bold font-orbitron text-gray-800 dark:text-white mb-2 h-14 flex items-center justify-center">{edu.degree}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 h-10">{edu.institution}</p>
                <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400 dark:text-gray-500">{edu.duration}</span>
                    <span className="font-semibold text-cyan-500 dark:text-cyan-400">{edu.score}</span>
                </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default Education;