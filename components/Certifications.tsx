
import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../utils/animations';

const certificationData = [ 
    // this base for add certiication  data here and adding icon svg and link to view certificate //

    {
        name:   'Agile Scrum Master Skills ',
        issuer: 'SIMPLE LERAN',
        date:   '2025',
        icon:   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 25 25" fill="currentColor"><path d="M12 2C6.486 2 2 3.79 2 6v12c0 2.21 4.486 4 10 4s10-1.79 10-4V6c0-2.21-4.486-4-10-4zM4 6.47C5.613 7.425 8.52 8 12 8s6.387-.575 8-1.53V9c0 1.654-4.486 3-10 3S2 10.654 2 9V6c0 .157.653.308 2 .47zM22 18c0 1.654-4.486 3-10 3S2 19.654 2 18v-3c0 1.654 4.486 3 10 3s10-1.346 10-3v3z" /></svg>,
        link:   'https://drive.google.com/file/d/16rVTrDI11Nas57BymOyIG6_MgJD8Tv-h/view?usp=drive_link'
    },
    {
        name:   'Describe The Concepts of Cybersecurity',
        issuer: 'Microsoft',
        date:   '2025',
        icon:   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 25 25" fill="currentColor"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" /></svg>,
        link:   'https://drive.google.com/file/d/1NKvLFH4pvniwypiG6X7-j08zRcCX8Stj/view?usp=drive_link'
    },
    {
        name:   'Learn AI and Gen AI basics',
        issuer: 'Microsoft',
        date:   '2025',
        icon:   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 25 25" fill="currentColor"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" /></svg>,
        link:   'https://drive.google.com/file/d/173WLc_H82jh7ipnPA0FeC_mH1kYGFLpC/view?usp=drive_link'
    },
    {
        name: 'Certified Essentials Automation Professional',
        issuer: 'AUTOMATION ANYWHERE',
        date: '2025',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 25 25" fill="currentColor"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" /></svg>,
        link: 'https://drive.google.com/file/d/1vTGvvZxThgSsVbxHSnTCv02Uei_reW9K/view?usp=drive_link'
    },
    {
        name:   'Al for Software Engineers',
        issuer: 'TURNIP',
        date:   '2025',
        icon:   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 25 25" fill="currentColor"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" /></svg>,
        link:   'https://drive.google.com/file/d/1ntkqiumlA5BTd6xRle1TM8yuZmfsVRWb/view?usp=drive_link'
    },
     {
        name: 'Artificial Intelligence intership',
        issuer: 'CAZ BRAIN PRIVATE LIMITED',
        date: '2025',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 25 25" fill="currentColor"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" /></svg>,
        link: 'https://drive.google.com/file/d/1POaFT3S03pIUWW0CKaCy5UL1V-m-fJC_/view?usp=drive_link'
    },
];

const Certifications: React.FC = () => {
  return (
    <Section id="certifications">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-glow">
            Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-4 rounded"></div>
        </div>

        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
          {certificationData.map((cert, index) => (
             <motion.div 
                key={index}
                variants={itemVariants}
                className="group relative bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700/50 transition-all duration-300 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-gray-200/50 dark:bg-gray-700/50 flex items-center justify-center text-cyan-500 dark:text-cyan-400">
                        {cert.icon}
                    </div>
                    <div>
                        <h3 className="text-lg font-bold font-orbitron text-gray-800 dark:text-white mb-1">{cert.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{cert.issuer}</p>
                    </div>
                </div>
                <div className="mt-4 flex justify-between items-center text-sm">
                    <span className="text-gray-500">Issued {cert.date}</span>
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-cyan-600 dark:text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Credential &rarr;
                    </a>
                </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default Certifications;