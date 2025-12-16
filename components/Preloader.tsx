
import React, { useState, useEffect } from 'react';

interface PreloaderProps {
  onLoaded: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onLoaded }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onLoaded();
    }, 1500); // Duration of the preloader

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <div
      className={`fixed inset-0 bg-[#0a0a0f] z-[100] flex flex-col items-center justify-center transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <div className="w-24 h-24 relative mb-4">
        <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
        <div className="absolute inset-2 border-2 border-purple-500/30 rounded-full animate-ping"></div>
        <div className="absolute inset-4 flex items-center justify-center text-3xl font-orbitron font-bold text-white text-glow">
          F.A
        </div>
      </div>
      <p className="text-cyan-400 text-lg tracking-widest animate-pulse">INITIALIZING INTERFACE...</p>
    </div>
  );
};

export default Preloader;