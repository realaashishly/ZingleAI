
import React, { useEffect, useState } from 'react';
import { Terminal, Cpu, Zap } from 'lucide-react';

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [bootLine, setBootLine] = useState("INITIALIZING_RUNTIME");
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const bootLines = [
      "ALLOCATING_MEMORY_PAGES",
      "CONNECTING_EDGE_NODES",
      "VERIFYING_HANDSHAKE_TOKENS",
      "DECRYPTING_ASSETS",
      "ESTABLISHING_SECURE_UPLINK",
      "RUNTIME_READY"
    ];

    let lineIndex = 0;
    const lineInterval = setInterval(() => {
      lineIndex = (lineIndex + 1) % bootLines.length;
      setBootLine(bootLines[lineIndex]);
    }, 400);

    const duration = 2500; // 2.5 seconds load time
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const progressInterval = setInterval(() => {
      currentStep++;
      const percent = Math.min(100, Math.floor((currentStep / steps) * 100));
      setProgress(percent);

      if (currentStep >= steps) {
        clearInterval(progressInterval);
        clearInterval(lineInterval);
        setTimeout(() => {
            setIsExiting(true);
            setTimeout(onComplete, 800); // Wait for exit animation
        }, 200);
      }
    }, intervalTime);

    return () => {
      clearInterval(progressInterval);
      clearInterval(lineInterval);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] bg-[#020202] flex flex-col items-center justify-center transition-opacity duration-700 ${isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none"></div>
      
      {/* Central Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-md px-6">
        
        {/* Logo Pulse */}
        <div className="mb-12 relative">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                <span className="font-mono font-bold text-black text-4xl">Z</span>
            </div>
            <div className="absolute inset-0 bg-accent rounded-2xl blur-xl opacity-20 animate-pulse"></div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-[#111] rounded-full overflow-hidden mb-4 border border-white/5 relative">
            <div 
                className="h-full bg-accent shadow-[0_0_10px_#4ade80] transition-all duration-100 ease-out relative"
                style={{ width: `${progress}%` }}
            >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
            </div>
        </div>

        {/* Stats Row */}
        <div className="w-full flex justify-between items-center font-mono text-xs mb-8">
            <span className="text-secondary flex items-center gap-2">
                <Terminal size={12} className="text-accent" />
                {bootLine}
            </span>
            <span className="text-white font-bold">{progress}%</span>
        </div>

        {/* Footer Technical Decor */}
        <div className="flex gap-4 opacity-30">
            <div className="h-1 w-12 bg-white/50 rounded-full"></div>
            <div className="h-1 w-12 bg-white/50 rounded-full"></div>
            <div className="h-1 w-12 bg-white/50 rounded-full"></div>
        </div>
      </div>

      {/* Edge Decor */}
      <div className="absolute bottom-10 left-10 font-mono text-[10px] text-secondary/30">
         SYS.ID: 0x8F2A...9C
      </div>
      <div className="absolute bottom-10 right-10 font-mono text-[10px] text-secondary/30 flex items-center gap-2">
         <Cpu size={12} /> MEM: OK
         <Zap size={12} /> PWR: OK
      </div>
    </div>
  );
};

export default Loader;
