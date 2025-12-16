
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onCardClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onCardClick }) => {
  const { title, tags, imageUrl } = project;
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30, restDelta: 0.001 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30, restDelta: 0.001 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['17deg', '-17deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-17deg', '17deg']);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.3 } }
  };

  return (
    <motion.div
      ref={cardRef}
      layout
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full h-80 rounded-xl cursor-pointer group"
      style={{ 
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        rotateX,
        rotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onCardClick(project)}
    >
      <div className="relative h-full w-full rounded-xl shadow-xl overflow-hidden border border-cyan-500/20 group-hover:border-cyan-500/80 transition-colors duration-300" style={{ transform: 'translateZ(40px) scale(0.98)' }}>
        <img className="absolute inset-0 h-full w-full object-cover" src={imageUrl} alt={title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6" style={{ transform: 'translateZ(20px)' }}>
          <h3 className="text-2xl font-orbitron font-bold text-white text-glow">{title}</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.slice(0, 3).map(tag => (
              <span key={tag} className="bg-cyan-900/70 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">{tag}</span>
            ))}
          </div>
        </div>
         <div className="absolute inset-0 rounded-xl box-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
};

export default ProjectCard;