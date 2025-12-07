
import React, { useEffect, useRef } from 'react';

const SideStream = ({ side }: { side: 'left' | 'right' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const w = 40; 
    let h = window.innerHeight;
    
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.scale(dpr, dpr);
    
    const fontSize = 10;
    const cols = Math.floor(w / fontSize); 
    const drops: number[] = Array(cols).fill(1).map(() => Math.random() * -100);
    
    // Binary/Hex looking chars for tech feel
    const chars = "01010110100010111XYZ";
    
    const draw = () => {
        // Fade effect for trails
        ctx.fillStyle = 'rgba(2, 2, 2, 0.15)'; 
        ctx.fillRect(0, 0, w, h);
        
        ctx.font = `${fontSize}px "JetBrains Mono", monospace`;
        
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            
            // Randomly accent color or dark grey
            // 2% chance of being bright accent color
            const isActive = Math.random() > 0.98;
            ctx.fillStyle = isActive ? '#4ade80' : '#262626';
            
            const x = i * fontSize;
            const y = drops[i] * fontSize;
            
            ctx.fillText(text, x, y);
            
            // Reset drop if it goes off screen randomly
            if (y > h && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    };
    
    const interval = setInterval(draw, 50);
    
    const resize = () => {
        h = window.innerHeight;
        canvas.height = h * dpr;
        canvas.style.height = `${h}px`;
        ctx.scale(dpr, dpr);
    }
    
    window.addEventListener('resize', resize);
    return () => {
        clearInterval(interval);
        window.removeEventListener('resize', resize);
    }
  }, []);

  return (
    <canvas 
        ref={canvasRef} 
        className={`fixed top-0 ${side === 'left' ? 'left-0 border-r' : 'right-0 border-l'} border-white/5 h-full w-[40px] z-40 hidden 2xl:block bg-[#020202] pointer-events-none`}
    />
  );
};

const EdgeDecoration = () => (
    <>
        <SideStream side="left" />
        <SideStream side="right" />
    </>
);

export default EdgeDecoration;
