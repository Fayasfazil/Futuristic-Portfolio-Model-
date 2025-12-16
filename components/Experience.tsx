
import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../utils/animations';

const experienceData = [
    {
        role:        'Project Trainee for Django E-commerce Platform development',
        company:     'Retech Solutions Pvt. Ltd.',
        duration:    'Scheduled for 2024',
        description: 'Building a Django-Based E-commerce Platform. Responsible for designing and developing key modules including user authentication, product catalog, and checkout system. Focusing on improving application performance by optimizing queries and ensuring scalability within a 4-member Agile team.',
        icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
    },
    {
        role:        'AI Internship-AI-Powered Chat Interface Development',
        company:     'Caz Brain Private Limited',
        duration:    'Scheduled for 2025',
        description: 'Assisted in developing and debugging AI-driven web applications. Worked with Python libraries (NumPy, Pandas, Scikit-learn) for data preprocessing and model evaluation. Gained experience with Git/GitHub for collaborative workflows and contributed to unit testing, bug-fixing, and fine-tuning ML models.',
        icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    },
];

const Experience: React.FC = () => {
  return (
    <Section id="experience" className="relative dark:bg-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-orbitron text-center font-bold mb-16 text-glow">
          Experience
        </h2>
        <motion.div 
          className="relative max-w-3xl mx-auto"
          variants={containerVariants(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-700 -translate-x-1/2"></div>

          {experienceData.map((job, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="mb-12 relative"
            >
              <div className="md:flex items-center md:even:flex-row-reverse">
                 <div className="md:w-1/2 pl-12 md:pl-8 md:even:pl-0 md:even:pr-8">
                    <div className="absolute -left-1 md:left-1/2 -translate-x-1/2 top-1 w-10 h-10 rounded-full bg-white dark:bg-gray-800 border-2 border-cyan-500 flex items-center justify-center text-cyan-500 dark:text-cyan-400 z-10 box-glow">
                        {job.icon}
                    </div>
                    <div className="md:text-right md:even:text-left">
                        <p className="text-sm text-cyan-600 dark:text-cyan-400 mb-1">{job.duration}</p>
                        <h3 className="text-xl font-bold font-orbitron text-gray-900 dark:text-white mb-2">{job.role}</h3>
                        <h4 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-3">{job.company}</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{job.description}</p>
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default Experience;