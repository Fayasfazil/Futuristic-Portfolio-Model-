import React from 'react';
import { motion, Variants } from 'framer-motion';
import { SKILLS_DATA } from '../constants';
import Section from './Section';
import { Skill } from '../types';
import { containerVariants, itemVariants } from '../utils/animations';
import SkillIcon from './SkillIcons';

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
  const { name, level, description, icon } = skill;

  const variants: Variants = {
    hidden: { width: 0 },
    visible: {
      width: `${level}%`,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };

  const getProficiencyDescription = (level: number): string => {
    if (level >= 90) return "Expert: Deep understanding and extensive experience.";
    if (level >= 75) return "Advanced: Able to tackle complex tasks with confidence.";
    if (level >= 60) return "Proficient: Solid skills for independent work.";
    return "Intermediate: Familiar with fundamentals.";
  };

  return (
    <motion.div
      className="mb-4 relative group"
      whileHover={{ scale: 1.03, zIndex: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
    >
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center gap-3">
          <SkillIcon iconName={icon} />
          <span className="text-gray-700 dark:text-gray-300 font-semibold">{name}</span>
        </div>
        <span className="text-cyan-500 dark:text-cyan-400 font-mono">{level}%</span>
      </div>
      <div className="w-full h-3 rounded-full skill-bar-bg overflow-hidden">
        <motion.div
          className="h-full rounded-full skill-bar-fill transition-shadow duration-300 group-hover:shadow-[0_0_15px_#67e8f9]"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        />
      </div>
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-max max-w-xs px-3 py-2
                     bg-cyan-500 text-white dark:text-black text-sm font-semibold rounded-md 
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
                     shadow-lg shadow-cyan-500/20">
        {description || getProficiencyDescription(level)}
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 
                       border-x-8 border-x-transparent 
                       border-t-8 border-t-cyan-500"></div>
      </div>
    </motion.div>
  );
};


const Skills = () => {
  // Prioritize skill categories
  const orderedSkills = [
      SKILLS_DATA.find(cat => cat.title === 'AI & Design'),
      SKILLS_DATA.find(cat => cat.title === 'Backend & Web'),
      SKILLS_DATA.find(cat => cat.title === 'Languages'),
      SKILLS_DATA.find(cat => cat.title === 'Tools & Cloud'),
  ].filter(Boolean) as typeof SKILLS_DATA;

  return (
    <Section id="skills">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-orbitron text-center font-bold mb-12 text-glow">
          Technical Skills
        </h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {orderedSkills.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glassmorphism p-6 rounded-xl border-gray-200 dark:border-gray-700/50"
            >
              <h3 className="text-xl font-orbitron font-bold text-cyan-600 dark:text-cyan-400 mb-6 border-b-2 border-cyan-500/50 dark:border-cyan-700/50 pb-2">{category.title}</h3>
              <div>
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default Skills;