
import React from 'react';
import Section from './Section';

const Resume: React.FC = () => {
  // In a real app, this would be a link to a PDF file hosted somewhere.
  const resumeUrl = '/resume_placeholder.pdf'; 

  return (
    <Section id="resume" className="bg-black/20 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-8 text-glow">
          My Resume
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-12">
          Interested in my qualifications? You can view or download my full resume to get a detailed look at my skills, education, and experience.
        </p>
        <div className="relative inline-block group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-8 py-4 bg-gray-900 rounded-lg leading-none flex items-center divide-x divide-gray-600 text-lg font-semibold"
          >
            <span className="pr-6 text-gray-100">View My Resume</span>
            <span className="pl-6 text-cyan-400 group-hover:text-white transition duration-200">Download &rarr;</span>
          </a>
           // Replace the tilt animation with a simpler CSS version
           <style>{`
               .animate-tilt {
                 animation: tilt 10s infinite ease-in-out;
               }
               @keyframes tilt {
                 0%, 100% { transform: rotate(0deg); }
                 25% { transform: rotate(0.5deg); }
                 75% { transform: rotate(-0.5deg); }
               }
           `}</style>
        </div>
      </div>
    </Section>
  );
};

export default Resume;