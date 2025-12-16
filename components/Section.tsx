
import React from 'react';
import { motion, Variants } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

// FIX: Changed component definition to React.FC to resolve prop typing issues.
// This ensures that React-specific props like `children` are handled correctly by TypeScript.
const Section: React.FC<SectionProps> = ({ children, id, className = '' }) => {
  const variants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    },
  };

  return (
    <motion.section
      id={id}
      className={`py-20 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </motion.section>
  );
};

export default Section;