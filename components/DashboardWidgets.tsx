
import React, { useEffect, useState } from 'react';
import { Zap, Globe, Shield, Lock, Terminal, Activity } from 'lucide-react';

// --- Widget 1: Battery/Charging (High Availability) ---
export const BatteryWidget = () => {
  const [percentage, setPercentage] = useState(99);
  
  useEffect(() => {
    const interval = setInterval(() => {
        // Random fluctuation between 98 and 100 to simulate real-time monitoring
        setPercentage(98 + Math.random() * 2);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-[#050505] relative overflow-hidden group font-sans border-none">
      <div className="absolute inset-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '4px 4px' }}>
      </div>
      
      <div className="relative z-10 p-8 h-full flex flex-col justify-between">
        <div className="flex justify-between items-start">
            <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-white/5 border border-white/10">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">System Healthy</span>
            </div>
            <Zap size={16} className="text-white fill-white opacity-50" />
        </div>

        <div className="flex-1 flex flex-col justify-center items-center py-6">
            <h2 className="text-6xl font-medium tracking-tighter text-white mb-1">99.99<span className="text-2xl text-secondary">%</span></h2>
            <span className="text-secondary text-xs font-mono uppercase tracking-widest">Uptime SLA</span>
            
            {/* Heartbeat Line */}
            <div className="w-full h-12 mt-8 flex items-end gap-[2px] opacity-50">
                {[...Array(20)].map((_, i) => {
                    const height = 20 + Math.random() * 40;
                    return (
                        <div key={i} className="flex-1 bg-emerald-500/50 rounded-t-sm transition-all duration-1000" style={{ height: `${height}%` }}></div>
                    )
                })}
            </div>
        </div>

        {/* Status Rows */}
        <div className="space-y-3 mt-auto border-t border-white/10 pt-4">
             <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-secondary">Health Check</span>
                <span className="text-emerald-400">PASSED</span>
             </div>
             <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-secondary">Latency</span>
                <span className="text-white">24ms</span>
             </div>
        </div>
      </div>
    </div>
  );
};

// --- Widget 2: Spending/Cost (Efficiency) ---
export const SpendingWidget = () => {
  return (
    <div className="w-full h-full bg-[#050505] relative overflow-hidden font-mono flex flex-col border-none">
       {/* Dot Matrix BG */}
       <div className="absolute top-0 left-0 right-0 h-32 opacity-10"
            style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '8px 8px' }}>
       </div>

       <div className="p-8 relative z-10 flex flex-col h-full">
          <div className="flex justify-between items-center mb-6">
              <div className="text-xs text-secondary uppercase tracking-widest">Current Usage</div>
              <div className="text-[10px] text-accent border border-accent/20 px-1.5 py-0.5 rounded">LIVE</div>
          </div>
          
          <div className="flex items-baseline gap-1 mb-8">
             <span className="text-4xl text-white font-sans font-light tracking-tight">$0.0042<span className="text-lg text-secondary">/req</span></span>
          </div>

          {/* Segmented Bar Chart */}
          <div className="flex gap-[2px] h-8 mb-8 items-end group">
             {/* Animated bars */}
             {[...Array(24)].map((_, i) => {
                 // Random heights for visual interest
                 const h = 20 + Math.random() * 80;
                 return (
                    <div 
                        key={i} 
                        className={`w-full bg-white/20 rounded-sm transition-all duration-500 hover:bg-accent`}
                        style={{ height: `${h}%` }}
                    ></div>
                 )
             })}
          </div>

          {/* List Breakdown */}
          <div className="space-y-3 mt-auto">
             <div className="flex items-center text-xs group cursor-pointer">
                <div className="w-1.5 h-1.5 bg-accent mr-3 rounded-full group-hover:scale-150 transition-transform"></div>
                <span className="text-secondary group-hover:text-white transition-colors">Compute</span>
                <div className="flex-1 border-b border-dotted border-white/10 mx-2"></div>
                <span className="text-white">$124.00</span>
             </div>
             <div className="flex items-center text-xs group cursor-pointer">
                <div className="w-1.5 h-1.5 bg-blue-500 mr-3 rounded-full group-hover:scale-150 transition-transform"></div>
                <span className="text-secondary group-hover:text-white transition-colors">Storage</span>
                <div className="flex-1 border-b border-dotted border-white/10 mx-2"></div>
                <span className="text-white">$42.20</span>
             </div>
          </div>
       </div>
    </div>
  );
};

// --- Widget 3: Goal/Volume (Scale) ---
export const GoalWidget = () => {
    // Data for bars
    const bars = [30, 45, 35, 50, 75, 60, 90]; 
    
    return (
      <div className="w-full h-full bg-[#050505] relative overflow-hidden font-sans flex flex-col border-none">
         <div className="absolute inset-0 scanline-overlay opacity-10 pointer-events-none"></div>
  
         <div className="p-8 flex flex-col h-full relative z-10">
            <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2 text-xs text-secondary font-mono uppercase tracking-widest">
                    <Activity size={14} />
                    <span>Throughput</span>
                </div>
                <div className="text-[10px] bg-white/10 text-white px-1.5 py-0.5 rounded">24H</div>
            </div>
            
            <div className="mb-8">
                 <span className="text-5xl text-white font-light tracking-tighter">2.4M</span>
                 <span className="text-sm text-secondary ml-2">events/sec</span>
            </div>
            
            {/* Chart Area */}
            <div className="flex-1 relative flex items-end gap-2 pb-2">
                {bars.map((h, i) => {
                    const isLast = i === bars.length - 1;
                    return (
                        <div key={i} className="flex-1 flex flex-col justify-end h-full group relative">
                            {/* Bar */}
                            <div 
                                style={{ height: `${h}%` }}
                                className={`w-full min-h-[4px] rounded-sm transition-all duration-700 ease-out relative overflow-hidden ${isLast ? 'bg-white' : 'bg-white/10 hover:bg-white/30'}`}
                            >
                                {/* Shimmer effect on hover/active */}
                                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent translate-y-full group-hover:translate-y-[-100%] transition-transform duration-1000"></div>
                            </div>
                        </div>
                    )
                })}
            </div>
  
            {/* X-Axis Labels */}
            <div className="flex justify-between mt-4 text-[10px] text-secondary font-mono px-1">
               <span>00:00</span>
               <span>04:00</span>
               <span>08:00</span>
               <span>12:00</span>
               <span>16:00</span>
               <span>20:00</span>
               <span className="text-white">NOW</span>
            </div>
         </div>
      </div>
    );
};

// --- Widget 4: Global/Region (Edge) ---
export const GlobalWidget = () => {
    return (
      <div className="w-full h-full bg-[#050505] relative overflow-hidden font-mono flex flex-col border-none items-center justify-center">
        {/* Radar Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
             <div className="w-[300px] h-[300px] border border-white/30 rounded-full flex items-center justify-center">
                 <div className="w-[200px] h-[200px] border border-white/30 rounded-full flex items-center justify-center">
                     <div className="w-[100px] h-[100px] border border-white/30 rounded-full"></div>
                 </div>
             </div>
             {/* Rotating Scan Line */}
             <div className="absolute inset-0 animate-radar-spin bg-gradient-to-b from-transparent via-transparent to-accent/10" style={{ clipPath: 'polygon(50% 50%, 0 100%, 100% 100%)' }}></div>
        </div>

        <div className="relative z-10 text-center">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10 backdrop-blur-md">
                <Globe size={32} className="text-white" />
            </div>
            <h3 className="text-xl text-white font-serif mb-1">Global Edge</h3>
            <div className="flex items-center justify-center gap-2">
                 <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                 <p className="text-xs text-secondary uppercase tracking-widest">34 Regions Active</p>
            </div>
        </div>

        {/* Floating Pings */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping opacity-75"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-accent rounded-full animate-ping opacity-50 delay-700"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping opacity-60 delay-300"></div>
      </div>
    );
};

// --- Widget 5: Security (Encryption) ---
export const SecurityWidget = () => {
    return (
      <div className="w-full h-full bg-[#050505] relative overflow-hidden font-mono flex flex-col border-none">
        {/* Matrix Rain Effect (Simulated with scrolling dots) */}
        <div className="absolute inset-0 opacity-10 animate-matrix-scroll" 
             style={{ 
                 backgroundImage: 'radial-gradient(circle, #4ADE80 1px, transparent 1px)', 
                 backgroundSize: '16px 16px',
                 height: '200%' 
             }}>
        </div>

        <div className="p-8 relative z-10 h-full flex flex-col justify-between">
            <div className="flex items-center gap-2 text-accent">
                <Shield size={20} />
                <span className="text-xs uppercase tracking-widest font-bold">Shield Active</span>
            </div>

            <div className="flex flex-col items-center justify-center flex-1">
                <div className="relative mb-6">
                    <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full"></div>
                    <Lock size={48} className="text-white relative z-10" />
                    
                    {/* Orbiting particles */}
                    <div className="absolute inset-0 border border-white/10 rounded-full w-20 h-20 -m-4 animate-spin [animation-duration:3s]"></div>
                    <div className="absolute inset-0 border border-dashed border-accent/30 rounded-full w-24 h-24 -m-6 animate-spin [animation-duration:5s]" style={{ animationDirection: 'reverse' }}></div>
                </div>
                <div className="text-center">
                    <div className="text-white text-lg font-bold mb-1">End-to-End Encrypted</div>
                    <div className="text-secondary text-xs">SOC2 Type II Compliant</div>
                </div>
            </div>

            <div className="bg-white/5 rounded p-3 border border-white/5">
                <div className="flex justify-between text-[10px] text-secondary mb-1">
                    <span>TLS 1.3</span>
                    <span className="text-accent">SECURE</span>
                </div>
                <div className="h-1 bg-white/10 rounded overflow-hidden">
                    <div className="h-full bg-accent w-full"></div>
                </div>
            </div>
        </div>
      </div>
    );
};

// --- Widget 6: Developer Experience (Terminal) ---
export const TerminalWidget = () => {
    const [lines, setLines] = useState([
        "> initializing runtime...",
        "> loading agents...",
        "> connecting to edge..."
    ]);

    useEffect(() => {
        const sequence = [
            "> verifying schema...",
            "> optimization complete.",
            "> deployed to 34 regions.",
            "> ready for traffic."
        ];
        let i = 0;
        const interval = setInterval(() => {
            if (i < sequence.length) {
                setLines(prev => {
                    const newLines = [...prev, sequence[i]];
                    if (newLines.length > 5) newLines.shift(); // keep last 5
                    return newLines;
                });
                i++;
            } else {
                // Reset for loop effect
                setLines(["> initializing runtime..."]);
                i = 0;
            }
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    return (
      <div className="w-full h-full bg-[#050505] relative overflow-hidden font-mono flex flex-col border-none">
         <div className="absolute top-0 w-full h-8 bg-white/5 flex items-center px-4 gap-2 border-b border-white/5">
             <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
             <div className="ml-auto text-[10px] text-secondary">zingle-cli v2.0</div>
         </div>

         <div className="p-6 flex-1 text-xs text-secondary overflow-hidden flex flex-col justify-end">
             {lines.map((line, idx) => (
                 <div key={idx} className={`${idx === lines.length - 1 ? 'text-accent' : 'text-gray-500'} mb-2`}>
                     {line}
                     {idx === lines.length - 1 && <span className="animate-pulse">_</span>}
                 </div>
             ))}
         </div>

         <div className="p-6 pt-0">
             <div className="flex items-center gap-3 p-3 bg-white/5 rounded border border-white/5">
                 <Terminal size={16} className="text-white" />
                 <span className="text-white text-xs">npm install @zingle/sdk</span>
             </div>
         </div>
      </div>
    );
};
