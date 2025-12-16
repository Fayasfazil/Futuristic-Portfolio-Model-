import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { containerVariants, itemVariants } from '../utils/animations';

const DEFAULT_PROFILE_IMG = 'https://placehold.co/400x400/1e293b/ffffff?text=Fayas+Ahamed';
const LOCAL_STORAGE_KEY = '#fayas-portfolio-profile-img';

const About: React.FC = () => {
  const [imageSrc, setImageSrc] = useState(DEFAULT_PROFILE_IMG);
  const [imageStatus, setImageStatus] = useState<'loading' | 'loaded' | 'error'>('FAYAS AHAMED');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const storedImage = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedImage) {
      setImageSrc(storedImage);
    }
  }, []);

  useEffect(() => {
    setImageStatus('loading');
  }, [imageSrc]);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveClick = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    setImageSrc(DEFAULT_PROFILE_IMG);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type and size
      if (!file.type.startsWith('image/')) {
        alert('C:\Users\Asus\Desktop\FAYAS PROJECTS 🔗📲\MY PROJECTS 💻\fayas-ahamed---futuristic-portfolio\fayas ahamed formal.jpg');
        return;
      }
      if (file.size > 2 * 1024 * 1024) { // 2MB limit
        alert('C:\Users\Asus\Desktop\FAYAS PROJECTS 🔗📲\MY PROJECTS 💻\fayas-ahamed---futuristic-portfolio\fayas ahamed formal.jpg');
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        localStorage.setItem(LOCAL_STORAGE_KEY, result);
        setImageSrc(result);
      };
      reader.onerror = () => {
        setImageStatus('error');
      };
      reader.readAsDataURL(file);
    }
};

  const loader = (
    <div className="absolute inset-0 rounded-full flex items-center justify-center bg-gray-200/50 dark:bg-gray-800/50">
      <div className="w-16 h-16 border-4 border-t-cyan-500 border-r-cyan-500 border-b-gray-300 border-l-gray-300 dark:border-b-gray-700 dark:border-l-gray-700 rounded-full animate-spin"></div>
    </div>
  );

  const errorState = (
    <div className="absolute inset-0 rounded-full flex items-center justify-center bg-gray-200/50 dark:bg-gray-800/50 border-2 border-red-500/50">
       <div className="text-center">
         <svg className="w-10 h-10 text-red-500/80 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
         <p className="text-xs text-red-500 mt-2">Load failed</p>
       </div>
    </div>
  );

  return (
    <Section id="about" className="relative dark:bg-black/20 overflow-hidden">
       {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
        <div 
          className="absolute inset-[-10%] bg-no-repeat bg-center"
          style={{ 
            backgroundImage: 'linear-gradient(rgba(0, 100, 200, 0.3) 1px, transparent 1px), linear-gradient(to right, rgba(0, 100, 200, 0.3) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
            animation: 'grid-pan 60s linear infinite'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-orbitron text-center font-bold mb-12 text-glow">
          About Me
        </h2>
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-12"
          variants={containerVariants(0.4)}
        >
          <motion.div variants={itemVariants} className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 relative group">
            {imageStatus === 'loading' && loader}
            {imageStatus === 'error' && errorState}
            
            <img 
              src={imageSrc} 
              alt="Fayas Ahamed B" 
              className={`relative rounded-full border-4 border-cyan-500 object-cover w-full h-full transition-opacity duration-500 ${imageStatus === 'loaded' ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setImageStatus('loaded')}
              onError={() => setImageStatus('error')}
              style={{ animation: imageStatus === 'loaded' ? 'float-gentle 4s ease-in-out infinite' : 'none' }}
            />

            <div className={`absolute inset-0 rounded-full border-2 border-purple-500 ${imageStatus === 'loaded' ? 'animate-ping' : 'hidden'}`}></div>

            <div className={`absolute inset-0 rounded-full bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 ${imageStatus !== 'loaded' ? 'hidden' : ''}`}>
                <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
                <button onClick={handleUploadClick} className="w-12 h-12 rounded-full bg-black/70 flex items-center justify-center text-white hover:text-cyan-400 transition-colors" aria-label="Upload new image">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                </button>
                {imageSrc !== DEFAULT_PROFILE_IMG && (
                    <button onClick={handleRemoveClick} className="w-12 h-12 rounded-full bg-black/70 flex items-center justify-center text-white hover:text-red-500 transition-colors" aria-label="Remove custom image">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                )}
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="max-w-2xl text-center md:text-left">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              I am a motivated Computer Science Engineering student specializing in backend development and AI. My journey is fueled by hands-on experience in Java, Python, and building intelligent automation systems.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              With a strong foundation in problem-solving and debugging, I enjoy crafting robust backend systems, designing intuitive user experiences, and engineering effective prompts for AI models. I am certified in Java and Cloud Computing, with a passion for collaborative, agile development.
            </p>
             <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
               I am currently seeking an entry-level Software Developer or AI Engineer role where I can apply my technical expertise in backend architecture, cloud AI services, and UI/UX principles to contribute to innovative projects and grow within a collaborative, forward-thinking team.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;