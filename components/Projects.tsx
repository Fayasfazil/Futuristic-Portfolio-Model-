import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_DATA } from '../constants';
import ProjectCard from './ProjectCard';
import Section from './Section';
import ProjectModal from './ProjectModal';
import { Project } from '../types';
import { containerVariants, itemVariants } from '../utils/animations';

const ALL_TAGS = 'All';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>(ALL_TAGS);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const tags = useMemo(() => {
    const allTags = new Set<string>();
    PROJECTS_DATA.forEach(project => {
      project.tags.forEach(tag => allTags.add(tag));
    });
    return [ALL_TAGS, ...Array.from(allTags)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === ALL_TAGS) {
      return PROJECTS_DATA;
    }
    return PROJECTS_DATA.filter(project => project.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <Section id="projects">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-orbitron text-center font-bold mb-8 text-glow">
          Projects
        </h2>
        <motion.div 
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
          variants={containerVariants(0.1)}
        >
          {tags.map(tag => (
            <motion.button
              key={tag}
              variants={itemVariants}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 text-sm md:text-base border-2 rounded-full transition-all duration-300 font-semibold ${
                activeFilter === tag 
                ? 'bg-cyan-500 border-cyan-500 text-white dark:text-black box-glow' 
                : 'border-gray-300 dark:border-gray-600 hover:border-cyan-500 dark:hover:border-cyan-400 text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400'
              }`}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} onCardClick={setSelectedProject} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Projects;