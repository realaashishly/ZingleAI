
import React, { useState, useEffect } from 'react';
import { Workflow, Layers, Zap, Database, Cpu, HardDrive, AlertCircle, X, Check } from 'lucide-react';

// --- Existing Technical Animations ---

const Card1Animation = () => (
    <div className="h-32 bg-[#050505] rounded border border-white/5 relative overflow-hidden flex items-center justify-center mt-auto">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '8px 8px' }}></div>
        <div className="flex items-center gap-3 md:gap-4 relative z-10">
            {/* DB Node */}
            <div className="flex flex-col items-center gap-2 group">
                <div className="w-10 h-10 border border-white/10 rounded-lg bg-[#0A0A0A] flex items-center justify-center text-secondary group-hover:text-white transition-colors relative shadow-lg">
                     <Database size={16} />
                     <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse opacity-0 group-hover:opacity-100"></div>
                </div>
            </div>

            {/* Connection 1 (Broken) */}
            <div className="w-8 md:w-12 relative flex flex-col items-center gap-1">
                 <div className="w-full h-px bg-white/10"></div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#050505] px-1">
                     <X size={10} className="text-red-500 animate-[pulse_1s_infinite]" />
                 </div>
            </div>

            {/* Lambda Node */}
            <div className="flex flex-col items-center gap-2 group">
                <div className="w-10 h-10 border border-white/10 rounded-lg bg-[#0A0A0A] flex items-center justify-center text-secondary group-hover:text-white transition-colors shadow-lg">
                     <Cpu size={16} />
                </div>
            </div>
            
             {/* Connection 2 (Latency) */}
            <div className="w-8 md:w-12 relative flex flex-col items-center gap-1">
                 <div className="w-full h-px border-t border-dashed border-secondary/50"></div>
                 <span className="text-[8px] font-mono text-red-400 animate-pulse">ERR</span>
            </div>

            {/* Queue Node */}
            <div className="flex flex-col items-center gap-2 group">
                <div className="w-10 h-10 border border-white/10 rounded-lg bg-[#0A0A0A] flex items-center justify-center text-secondary group-hover:text-white transition-colors shadow-lg">
                     <HardDrive size={16} />
                </div>
            </div>
        </div>
        
        {/* Overlay Label */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-red-900/20 border border-red-500/20 rounded text-[10px] text-red-400 font-mono flex items-center gap-1 backdrop-blur-sm">
            <AlertCircle size={8} />
            <span>FRAGILE STATE</span>
        </div>
    </div>
);

const Card2Animation = () => (
    <div className="h-32 bg-[#050505] rounded border border-accent/20 relative overflow-hidden flex items-center justify-center mt-auto">
         {/* Background Grid specific to this card */}
         <div className="absolute inset-0" 
              style={{ 
                  backgroundImage: 'radial-gradient(rgba(74, 222, 128, 0.1) 1px, transparent 1px)', 
                  backgroundSize: '12px 12px',
                  opacity: 0.2
              }}>
         </div>

         {/* Orbital System */}
         <div className="relative w-32 h-32 flex items-center justify-center">
             {/* Outer Ring */}
             <div className="absolute w-24 h-24 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]"></div>
             
             {/* Middle Ring (Active) */}
             <div className="absolute w-20 h-20 border border-accent/20 rounded-full animate-[spin_3s_linear_infinite]">
                 {/* Satellite */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_10px_#4ade80]"></div>
             </div>

             {/* Inner Ring */}
             <div className="absolute w-14 h-14 border border-white/10 rounded-full animate-[spin_7s_linear_infinite_reverse]"></div>
             
             {/* Core */}
             <div className="absolute w-8 h-8 bg-accent/10 rounded-full backdrop-blur-md border border-accent/30 flex items-center justify-center shadow-[0_0_15px_rgba(74,222,128,0.2)]">
                 <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
             </div>
         </div>

         {/* Status Badge */}
         <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-accent/10 border border-accent/20 rounded text-[10px] text-accent font-mono flex items-center gap-1 backdrop-blur-sm">
            <Check size={8} />
            <span>DURABLE</span>
        </div>
    </div>
);

const Card3Animation = () => {
    // Dynamic bars
    const [bars, setBars] = useState(Array(15).fill(10));
    
    useEffect(() => {
        const interval = setInterval(() => {
            setBars(prev => prev.map(() => Math.floor(Math.random() * 60) + 20));
        }, 800);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-32 bg-[#050505] rounded border border-white/5 relative overflow-hidden flex flex-col justify-end p-4 mt-auto">
             <div className="flex items-end gap-[2px] h-20 w-full">
                 {bars.map((height, i) => (
                     <div 
                        key={i} 
                        className="flex-1 bg-white/10 transition-all duration-700 ease-out rounded-t-sm relative overflow-hidden"
                        style={{ height: `${height}%` }}
                     >
                        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-white/20 to-transparent opacity-50"></div>
                     </div>
                 ))}
             </div>
             {/* Scanline overlay */}
             <div className="absolute inset-0 bg-scanline pointer-events-none opacity-20"></div>
             
              {/* Overlay Label */}
            <div className="absolute top-3 left-3 px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] text-secondary font-mono flex items-center gap-1">
                <div className="w-1 h-1 bg-accent rounded-full animate-pulse"></div>
                AUTOSCALE_ACTIVE
            </div>
        </div>
    )
}

const RoleExplanation = () => {
  return (
    <section className="py-32 bg-[#020202] border-b border-border relative overflow-hidden">
        {/* Background ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* --- Section 1: The Missing Layer --- */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
             <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-white/5 border border-white/10">
                <span className="text-[10px] font-mono text-accent uppercase tracking-widest">Why Zingle?</span>
            </div>
            <h2 className="font-serif text-5xl md:text-7xl font-normal tracking-tight text-white mb-6 leading-none">
                The Missing Layer for<br/> AI Orchestration.
            </h2>
            <p className="text-secondary text-lg leading-relaxed">
                Traditional serverless functions are stateless and fragile. Zingle provides a durable, stateful runtime designed specifically for long-running agentic workflows.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {/* Card 1: The Problem */}
            <div className="bg-[#0A0A0A] border border-white/10 p-8 rounded-xl flex flex-col h-full group hover:border-white/20 transition-colors">
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-secondary group-hover:text-white group-hover:bg-white/10 transition-colors">
                    <Layers size={24} />
                </div>
                <h3 className="font-serif text-3xl text-white mb-4">State Management</h3>
                <p className="text-secondary text-sm leading-relaxed mb-8 flex-1">
                    Agents need to remember context, tool outputs, and intermediate steps. Zingle manages this state automatically, so you don't have to glue databases to lambdas.
                </p>
                <Card1Animation />
            </div>

            {/* Card 2: The Solution (Animation) */}
            <div className="bg-[#0A0A0A] border border-accent/20 p-8 rounded-xl flex flex-col h-full relative overflow-hidden md:-mt-8 md:mb-8 shadow-[0_0_30px_rgba(74,222,128,0.05)]">
                <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none"></div>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6 text-accent">
                    <Workflow size={24} />
                </div>
                <h3 className="font-serif text-3xl text-white mb-4">Durable Execution</h3>
                <p className="text-secondary text-sm leading-relaxed mb-8 flex-1">
                    Zingle agents can pause, wait for human input, or sleep for days, and resume exactly where they left off without burning compute.
                </p>
                <Card2Animation />
            </div>

            {/* Card 3: The Result */}
            <div className="bg-[#0A0A0A] border border-white/10 p-8 rounded-xl flex flex-col h-full group hover:border-white/20 transition-colors">
                 <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-secondary group-hover:text-white group-hover:bg-white/10 transition-colors">
                    <Zap size={24} />
                </div>
                <h3 className="font-serif text-3xl text-white mb-4">Instant Scale</h3>
                <p className="text-secondary text-sm leading-relaxed mb-8 flex-1">
                    Deploy your agents to the edge. Zingle handles the heavy lifting of queuing, retries, and concurrency limits automatically.
                </p>
                <Card3Animation />
            </div>
        </div>

      </div>
    </section>
  );
};

export default RoleExplanation;
