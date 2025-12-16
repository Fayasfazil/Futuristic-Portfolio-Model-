
import React from 'react';
// FIX: Import Variants to correctly type framer-motion animation variants.
import { motion, Variants } from 'framer-motion';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  // FIX: Explicitly type variants with the Variants type to prevent type inference issues.
  const backdropVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // FIX: Explicitly type variants with the Variants type to prevent type inference issues.
  const modalVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } },
    exit: { opacity: 0, y: 50, scale: 0.95, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        className="w-full max-w-3xl lg:max-w-5xl glassmorphism rounded-xl border border-cyan-500/30 overflow-hidden relative"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white z-10">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="max-h-[80vh] overflow-y-auto md:flex md:overflow-hidden">
          <img src={project.imageUrl} alt={project.title} className="w-full h-64 md:w-1/2 object-cover flex-shrink-0" />
          <div className="md:w-1/2 p-8 md:overflow-y-auto">
            <h2 className="text-3xl font-orbitron font-bold text-white text-glow mb-4">{project.title}</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="bg-cyan-900/70 text-cyan-300 text-sm font-semibold px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>
            
            <div className="space-y-6">
                <div>
                    <h4 className="text-lg font-orbitron font-semibold text-cyan-400 mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map(tech => (
                        <span key={tech} className="bg-gray-700/80 text-gray-300 text-xs font-medium px-2.5 py-1 rounded">{tech}</span>
                        ))}
                    </div>
                </div>
                
                <div>
                    <h4 className="text-lg font-orbitron font-semibold text-cyan-400 mb-2">Challenges</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{project.challenges}</p>
                </div>

                <div>
                    <h4 className="text-lg font-orbitron font-semibold text-cyan-400 mb-2">Solutions</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{project.solutions}</p>
                </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-md bg-gray-800 hover:bg-cyan-600 transition-colors duration-300 border border-gray-700 hover:border-cyan-500 font-semibold">GitHub</a>
              {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-md bg-cyan-500 hover:bg-cyan-400 text-black transition-colors duration-300 font-semibold">Live Demo</a>}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;