import React, { useState, useEffect, useRef } from 'react';

const CursorTrail: React.FC = () => {
  const [points, setPoints] = useState<{ x: number, y: number }[]>([]);
  const animationFrameId = useRef<number | null>(null);
  const lastMousePosition = useRef<{ x: number, y: number }>({ x: -100, y: -100 });
  const throttleTimer = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!throttleTimer.current) {
        lastMousePosition.current = { x: e.clientX, y: e.clientY };
        throttleTimer.current = window.setTimeout(() => {
          throttleTimer.current = null;
        }, 16); // ~60fps
      }
    };

    const animateTrail = () => {
      setPoints(prevPoints => {
        const newPoints = [...prevPoints, lastMousePosition.current];
        return newPoints.length > 15 ? newPoints.slice(newPoints.length - 15) : newPoints;
      });
      animationFrameId.current = requestAnimationFrame(animateTrail);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId.current = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (throttleTimer.current) clearTimeout(throttleTimer.current);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]">
      {points.map((point, index, arr) => {
        const size = 10 - (arr.length - 1 - index) * 0.4;
        const opacity = 1 - (arr.length - 1 - index) * 0.05;

        return (
          <div
            key={index}
            className="absolute rounded-full bg-cyan-400"
            style={{
              left: `${point.x}px`,
              top: `${point.y}px`,
              width: `${size}px`,
              height: `${size}px`,
              opacity: `${opacity}`,
              transform: 'translate(-50%, -50%)',
              filter: `blur(${(arr.length - 1 - index) * 0.1}px)`
            }}
          />
        );
      })}
    </div>
  );
};

export default CursorTrail;
