
import React, { useEffect, useRef } from 'react';

const AsciiGlobe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Fine grained point cloud look
    const fontSize = 10; 
    const charWidth = fontSize * 0.6; 
    // Dotted chars for point cloud effect
    const chars = " ··.:"; 
    
    let width = container.offsetWidth;
    let height = container.offsetHeight;
    
    const handleResize = () => {
      width = container.offsetWidth;
      height = container.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();

    let time = 0;
    
    const render = () => {
        ctx.clearRect(0, 0, width, height);
        
        const rows = Math.ceil(height / fontSize);
        const cols = Math.ceil(width / charWidth);
        
        const zBuffer = new Float32Array(cols * rows).fill(0);
        const charBuffer = new Array(cols * rows).fill(' ');
        const brightnessBuffer = new Float32Array(cols * rows).fill(0);

        // Rotation
        const rotX = time * 0.2;
        const rotY = time * 0.15;
        
        const cosX = Math.cos(rotX);
        const sinX = Math.sin(rotX);
        const cosY = Math.cos(rotY);
        const sinY = Math.sin(rotY);

        // Donut Parameters
        const R = 45; // Major radius
        const r = 18; // Minor radius (tube thickness)
        
        const stepTheta = 0.08; 
        const stepPhi = 0.08; 

        const scale = Math.min(width, height) / 70;
        const zoom = 50; 

        for (let theta = 0; theta < 2 * Math.PI; theta += stepTheta) {
            const circleX = R + r * Math.cos(theta);
            const circleY = r * Math.sin(theta);

            for (let phi = 0; phi < 2 * Math.PI; phi += stepPhi) {
                const x0 = circleX * Math.cos(phi);
                const y0 = circleY;
                const z0 = circleX * Math.sin(phi);
                
                // 3D Rotation
                const y1 = y0 * cosX - z0 * sinX;
                const z1 = z0 * cosX + y0 * sinX;
                
                const x2 = x0 * cosY - z1 * sinY;
                const z2 = z1 * cosY + x0 * sinY;
                
                const zOffset = 90;
                const oneOverZ = 1 / (z2 + zOffset);
                
                const xp = Math.floor(width / 2 + x2 * scale * oneOverZ * zoom); 
                const yp = Math.floor(height / 2 + y1 * scale * oneOverZ * zoom);
                
                if (xp >= 0 && xp < width && yp >= 0 && yp < height) {
                    const col = Math.floor(xp / charWidth);
                    const row = Math.floor(yp / fontSize);
                    
                    if (col >= 0 && col < cols && row >= 0 && row < rows) {
                        const idx = row * cols + col;
                        
                        if (oneOverZ > zBuffer[idx]) {
                            zBuffer[idx] = oneOverZ;
                            
                            // Lighting
                            const nx = Math.cos(theta) * Math.cos(phi);
                            const ny = Math.sin(theta);
                            const nz = Math.cos(theta) * Math.sin(phi);
                            
                            const ny1 = ny * cosX - nz * sinX;
                            const nz1 = nz * cosX + ny * sinX;
                            const nx2 = nx * cosY - nz1 * sinY;
                            const nz2 = nz1 * cosY + nx * sinY;

                            const lum = nz2; 
                            
                            if (lum > -0.2) { // Show slightly more points
                                const charIdx = Math.floor(Math.abs(lum) * (chars.length - 1));
                                charBuffer[idx] = chars[charIdx % chars.length];
                                brightnessBuffer[idx] = Math.abs(lum);
                            }
                        }
                    }
                }
            }
        }

        ctx.textBaseline = 'top';
        
        for (let i = 0; i < charBuffer.length; i++) {
            const char = charBuffer[i];
            if (char !== ' ') {
                const r = Math.floor(i / cols);
                const c = i % cols;
                const brightness = brightnessBuffer[i];
                
                // Dim point cloud look
                const alpha = Math.max(0.1, brightness * 0.6);
                ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`; 
                
                ctx.fillText(char, c * charWidth, r * fontSize);
            }
        }
        
        time += 0.01;
        requestAnimationFrame(render);
    };

    const animId = requestAnimationFrame(render);

    return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1000px] max-h-[1000px] z-0 overflow-hidden pointer-events-none mix-blend-screen opacity-60">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

export default AsciiGlobe;
