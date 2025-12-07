
import React, { useState, useEffect, useRef } from 'react';
import { ArrowUp, Activity, AlertTriangle, XCircle } from 'lucide-react';

const useElementOnScreen = (options: IntersectionObserverInit) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);

    if (containerRef.current) observer.observe(containerRef.current);
    
    return () => {
      if (containerRef.current) observer.disconnect();
    };
  }, [options]);

  return [containerRef, isVisible] as const;
};

// Widget 1: Context Waste
const UsageWidget = ({ visible }: { visible: boolean }) => {
  return (
    <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6 h-full flex flex-col justify-between relative overflow-hidden group hover:border-red-500/30 transition-all duration-500">
       <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
       
       <div className="relative z-10">
         <div className="flex justify-between items-start mb-8">
            <h3 className="text-xl text-white font-medium">Context Waste</h3>
            <div className={`text-xs border border-red-500/20 bg-red-500/10 text-red-400 rounded px-2 py-1 flex items-center gap-1 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                <AlertTriangle size={12} />
                Critical
            </div>
         </div>

         <div className="grid grid-cols-2 gap-8 mb-8">
            <div className={`transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
               <div className="text-[10px] text-secondary uppercase tracking-widest mb-2">REDUNDANT TOKENS</div>
               <div className="text-4xl text-white font-light tracking-tight">47.2%</div>
            </div>
            <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
               <div className="text-[10px] text-secondary uppercase tracking-widest mb-2">WASTED SPEND</div>
               <div className="text-4xl text-white font-light tracking-tight">$4.2k</div>
            </div>
         </div>

         {/* Bar showing wasted vs useful */}
         <div className="mb-2 h-4 w-full bg-[#1A1A1A] rounded-sm overflow-hidden flex relative">
            <div 
                className="h-full bg-red-500 rounded-sm relative group-hover:bg-red-400 transition-all duration-[1500ms] ease-out"
                style={{ width: visible ? '47.2%' : '0%' }}
            >
                 <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.3)_50%,transparent_75%)] bg-[length:10px_10px]"></div>
            </div>
            <div className="flex-1 bg-[#333]"></div>
         </div>

         <div className="flex justify-between text-[10px] font-mono text-secondary mb-8">
            <span className="text-red-400">DISCARDED INPUTS</span>
            <span>USEFUL CONTEXT</span>
         </div>
       </div>

       <div className="relative z-10 border-t border-white/10 pt-4">
          <p className="text-xs text-secondary leading-relaxed">
             <span className="text-white">Problem:</span> Static RAG pipelines retrieve 50% more tokens than necessary, bloating inference costs.
          </p>
       </div>
    </div>
  )
}

// Widget 2: Silent Failures
const VisibilityWidget = ({ visible }: { visible: boolean }) => {
  const bars = [10, 15, 12, 20, 25, 40, 35, 60, 85];
  return (
    <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6 h-full flex flex-col relative overflow-hidden group hover:border-orange-500/30 transition-all duration-500">
       <div className="flex justify-between items-start mb-6">
          <div className={`transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
             <h3 className="text-secondary text-sm mb-1">Silent Failure Rate</h3>
             <div className="flex items-baseline gap-3">
                <span className="text-5xl text-white font-light tracking-tighter">12.8%</span>
                <span className="text-red-500 text-sm font-mono flex items-center">
                   <ArrowUp size={12} className="mr-1"/> 2.4%
                </span>
             </div>
          </div>
          <div className="flex gap-2">
             <button className="w-8 h-8 flex items-center justify-center border border-white/10 rounded hover:bg-white/5 text-red-500"><Activity size={14}/></button>
          </div>
       </div>

       <div className="flex-1 flex items-end justify-between gap-2 min-h-[150px] relative">
           {/* Dashed Grid Lines */}
           <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              {[...Array(5)].map((_, i) => <div key={i} className="w-full h-px bg-white/5 border-t border-dashed border-white/5"></div>)}
           </div>

           {/* Bars */}
           {bars.map((h, i) => {
              const isActive = i === 8; // The high one
              const isHigh = h > 50;
              return (
                 <div key={i} className="relative w-full h-full flex items-end group/bar">
                    <div 
                        style={{ height: visible ? `${h}%` : '0%' }} 
                        className={`w-full rounded-sm transition-all duration-[800ms] ease-out ${isHigh ? 'bg-gradient-to-t from-orange-600 to-orange-400' : 'bg-[#1A1A1A] hover:bg-[#2A2A2A]'}`}
                    ></div>
                    
                    {isActive && (
                       <div className={`absolute bottom-[20%] right-0 bg-[#111] border border-red-500/30 p-3 rounded-lg w-40 z-20 shadow-2xl transition-all duration-700 delay-1000 hidden md:block ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                          <div className="text-[10px] text-red-400 font-mono uppercase tracking-widest mb-2 flex items-center gap-1"><XCircle size={10}/> ERROR SPIKE</div>
                          <div className="text-secondary text-xs leading-tight">
                             Downstream parsers failing silently on edge cases.
                          </div>
                       </div>
                    )}
                 </div>
              )
           })}
       </div>
       
       <div className="mt-4 pt-3 border-t border-white/5 text-xs text-secondary leading-relaxed">
           <span className="text-white">Problem:</span> Without durable execution, transient errors become permanent data loss.
       </div>
    </div>
  )
}

// Widget 3: Data Backlog
const VolumeWidget = ({ visible }: { visible: boolean }) => {
    // Upward trend showing accumulation/backlog
    const points = [10, 12, 15, 14, 20, 25, 22, 35, 45, 50, 65, 70, 85, 90, 95, 100];
    const width = 1000;
    const height = 200;
    const step = width / (points.length - 1);
    const pathData = points.map((p, i) => `${i * step},${height - (p/100 * height)}`).join(' ');
    
    return (
        <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-8 h-full relative overflow-hidden group hover:border-white/20 transition-all duration-500">
             <div className="flex flex-col md:flex-row justify-between md:items-start mb-8 gap-4">
                 <div className={`transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0 translate-y-2'}`}>
                    <h3 className="text-secondary text-lg mb-2">Unprocessed Event Backlog</h3>
                    <div className="text-5xl text-white font-light tracking-tight mb-2">4,291,005</div>
                    <div className="flex items-center gap-3">
                        <span className="text-red-500 font-mono text-sm">+ 840,102</span>
                        <span className="bg-red-500/10 text-red-500 text-xs px-2 py-0.5 rounded">CRITICAL LOAD</span>
                        <span className="text-secondary text-xs uppercase tracking-wider ml-2">LAST 24 HOURS</span>
                    </div>
                 </div>
                 
                 <div className="flex border border-white/10 rounded-lg bg-[#050505] p-1">
                     <span className="px-3 py-1 text-xs font-mono text-white bg-[#1A1A1A] rounded animate-pulse">Live</span>
                 </div>
             </div>

             <div className="relative h-[250px] w-full">
                  {/* Grid */}
                  <div className="absolute inset-0 border-l border-b border-white/10">
                       {[0, 1, 2, 3, 4].map(i => (
                           <div key={i} className="absolute w-full border-t border-dashed border-white/5" style={{bottom: `${i * 25}%`}}></div>
                       ))}
                  </div>
                  
                  {/* Y Axis Labels */}
                  <div className="absolute left-0 top-0 bottom-0 -ml-8 flex flex-col justify-between text-[10px] text-secondary font-mono py-2">
                       <span>5M</span>
                       <span>4M</span>
                       <span>3M</span>
                       <span>2M</span>
                       <span>1M</span>
                  </div>

                  {/* Chart */}
                  <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox={`0 0 ${width} ${height}`}>
                      {/* Gradient Fill - Scaled vertically to animate in */}
                      <defs>
                          <linearGradient id="redGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.2"/>
                              <stop offset="100%" stopColor="#ef4444" stopOpacity="0"/>
                          </linearGradient>
                          <mask id="chartMask">
                              <rect x="0" y="0" width={width} height={height} fill="white" style={{
                                  transformOrigin: 'bottom',
                                  transform: visible ? 'scaleY(1)' : 'scaleY(0)',
                                  transition: 'transform 1.5s cubic-bezier(0.4, 0, 0.2, 1)'
                              }} />
                          </mask>
                      </defs>
                      <polygon points={`${pathData} ${width},${height} 0,${height}`} fill="url(#redGradient)" mask="url(#chartMask)" />
                      
                      {/* Line Animation using Dasharray */}
                      <polyline 
                        points={pathData} 
                        fill="none" 
                        stroke="#ef4444" 
                        strokeWidth="2" 
                        vectorEffect="non-scaling-stroke" 
                        style={{
                            strokeDasharray: 2000,
                            strokeDashoffset: visible ? 0 : 2000,
                            transition: 'stroke-dashoffset 2s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                      />
                      
                      {/* Highlight Point */}
                      <g transform={`translate(${width}, 0)`} className={`transition-opacity duration-300 delay-[1800ms] ${visible ? 'opacity-100' : 'opacity-0'}`}>
                          <circle r="4" fill="#0A0A0A" stroke="#ef4444" strokeWidth="2" />
                          <circle r="12" fill="#ef4444" fillOpacity="0.2" className="animate-pulse" />
                      </g>
                  </svg>

                  {/* Tooltip Overlay */}
                  <div className={`absolute top-[20%] left-[40%] bg-[#0A0A0A]/90 backdrop-blur border border-red-500/20 p-4 rounded-lg shadow-2xl z-20 pointer-events-none hidden md:block transition-all duration-500 delay-[1500ms] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                       <div className="text-[10px] text-red-400 font-mono uppercase mb-2">INFRASTRUCTURE BOTTLENECK</div>
                       <div className="flex flex-col gap-1">
                           <span className="text-secondary text-xs">Ingestion rate exceeds processing cap.</span>
                           <span className="text-white font-mono text-xs">Lag: 4h 23m</span>
                       </div>
                  </div>
             </div>

             <div className="mt-6 border-t border-white/5 pt-4 text-sm text-secondary">
                  <span className="text-white font-medium">Problem:</span> Traditional serverless functions hit concurrency limits, causing massive data backlogs during traffic spikes.
             </div>
        </div>
    )
}

// Widget 4: Budget Overrun
const CostWidget = ({ visible }: { visible: boolean }) => {
    return (
        <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6 h-full flex flex-col relative overflow-hidden group hover:border-white/20 transition-all duration-500">
            <div className="flex justify-between items-start mb-6">
                <div>
                   <h3 className="text-secondary text-sm mb-1">Monthly Cloud Spend</h3>
                   <div className="text-5xl text-white font-light tracking-tighter">$18,450</div>
                </div>
                <div className={`px-2 py-1 bg-red-500/10 text-red-500 text-[10px] font-bold rounded border border-red-500/20 uppercase transition-all duration-500 delay-500 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                    Over Budget
                </div>
            </div>

            <div className="text-sm text-secondary mb-3">Budget utilization</div>
            {/* Overflowing bar */}
            <div className="h-2 w-full bg-[#1A1A1A] rounded-full overflow-hidden mb-2 relative">
                 <div 
                    className="absolute left-0 top-0 h-full bg-white z-10 transition-all duration-1000 ease-out"
                    style={{ width: visible ? '80%' : '0%' }}
                 ></div>
                 <div 
                    className="absolute left-[80%] top-0 h-full bg-red-500 z-10 animate-pulse transition-all duration-500 delay-1000 ease-out"
                    style={{ width: visible ? '45%' : '0%' }}
                 ></div>
            </div>
            
            <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-2">
                   <span className="text-secondary text-xs">Limit: $12,000</span>
                </div>
                <div className="flex items-center gap-2">
                   <span className="text-red-500 font-mono font-bold">145%</span>
                </div>
            </div>

            <div className="border-t border-white/10 pt-6 mt-auto">
                <h4 className="text-sm text-secondary mb-4">Cost Leakage Sources</h4>
                
                <div className="space-y-4">
                    <div>
                        <div className="flex justify-between text-xs mb-1">
                            <span className="text-white">Idle GPU Instances</span>
                            <span className="text-red-400">$4,200</span>
                        </div>
                        <div className="w-full h-1 bg-[#1A1A1A] rounded overflow-hidden">
                            <div 
                                className="h-full bg-red-500 transition-all duration-1000 delay-200 ease-out"
                                style={{ width: visible ? '70%' : '0%' }}
                            ></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-xs mb-1">
                            <span className="text-white">Failed Retries</span>
                            <span className="text-red-400">$1,850</span>
                        </div>
                        <div className="w-full h-1 bg-[#1A1A1A] rounded overflow-hidden">
                            <div 
                                className="h-full bg-orange-500 transition-all duration-1000 delay-300 ease-out"
                                style={{ width: visible ? '40%' : '0%' }}
                            ></div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 text-xs text-secondary leading-relaxed">
                   <span className="text-white">Problem:</span> Paying for idle compute and endless retry loops on failed jobs destroys margins.
                </div>
            </div>
        </div>
    )
}

// Widget 5: Operational Overhead
const AgentsWidget = ({ visible }: { visible: boolean }) => {
    // Line 1: Maintenance (Going up)
    const line1 = [20, 25, 35, 40, 38, 50, 65, 70, 85, 90, 95, 98];
    // Line 2: Innovation (Going down)
    const line2 = [80, 75, 70, 60, 65, 50, 45, 40, 30, 25, 20, 15];
    
    const width = 1000;
    const height = 300;
    const step = width / (line1.length - 1);
    
    const path1 = line1.map((p, i) => `${i * step},${height - (p/100 * height)}`).join(' ');
    const path2 = line2.map((p, i) => `${i * step},${height - (p/100 * height)}`).join(' ');

    return (
        <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-8 h-full relative overflow-hidden group hover:border-white/20 transition-all duration-500">
             <div className="flex justify-between items-start mb-10">
                 <h3 className="text-2xl text-white font-medium">Engineering Time Allocation</h3>
                 <div className="text-xs text-secondary font-mono">LAST 12 MONTHS</div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative z-10">
                 <div className={`p-4 bg-[#111] rounded-lg border border-red-500/20 relative overflow-hidden transition-all duration-500 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                     <div className="text-[10px] text-red-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                        <Activity size={12} /> MAINTENANCE BURDEN
                     </div>
                     <div className="flex items-center gap-3">
                         <span className="text-3xl text-white font-light">1,240 hrs</span>
                         <span className="text-red-500 text-[10px] font-mono flex items-center gap-1">
                            <ArrowUp size={10} /> +200%
                         </span>
                     </div>
                     <div className="text-xs text-secondary mt-2">Spent debugging & patching.</div>
                 </div>
                 
                 <div className={`p-4 bg-[#111] rounded-lg border border-white/5 relative overflow-hidden transition-all duration-500 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                     <div className="text-[10px] text-secondary uppercase tracking-widest mb-2">NEW FEATURES SHIPPED</div>
                     <div className="flex items-center gap-3">
                         <span className="text-3xl text-white font-light">12</span>
                         <span className="text-secondary text-[10px] font-mono flex items-center gap-1">
                             - 40%
                         </span>
                     </div>
                     <div className="text-xs text-secondary mt-2">Velocity slowed by technical debt.</div>
                 </div>

                 <div className={`p-4 bg-[#111] rounded-lg border border-white/5 relative overflow-hidden flex items-center transition-all duration-500 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                     <p className="text-sm text-white italic">
                        "We spend more time fixing pipelines than building models."
                     </p>
                 </div>
             </div>

             {/* Chart Area */}
             <div className="relative h-[250px] w-full">
                 <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
                 
                 <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox={`0 0 ${width} ${height}`}>
                      {/* Line 1: Maintenance (Red) */}
                      <polyline 
                        points={path1} 
                        fill="none" 
                        stroke="#ef4444" 
                        strokeWidth="3" 
                        vectorEffect="non-scaling-stroke" 
                        style={{
                            strokeDasharray: 2000,
                            strokeDashoffset: visible ? 0 : 2000,
                            transition: 'stroke-dashoffset 2s cubic-bezier(0.4, 0, 0.2, 1) 0.5s'
                        }}
                      />
                      
                      {/* Line 2: Features (Gray) */}
                      <polyline 
                        points={path2} 
                        fill="none" 
                        stroke="#525252" 
                        strokeWidth="2" 
                        strokeDasharray="5 5" 
                        vectorEffect="non-scaling-stroke" 
                        style={{
                            opacity: visible ? 1 : 0,
                            transition: 'opacity 2s ease-in 0.5s'
                        }}
                      />
                      
                      {/* Labels on Chart */}
                      <g transform={`translate(${width - 100}, 20)`} className={`transition-opacity duration-500 delay-[2000ms] ${visible ? 'opacity-100' : 'opacity-0'}`}>
                          <text x="0" y="0" fill="#ef4444" fontSize="12" fontWeight="bold">MAINTENANCE</text>
                      </g>
                      <g transform={`translate(${width - 100}, ${height - 20})`} className={`transition-opacity duration-500 delay-[2000ms] ${visible ? 'opacity-100' : 'opacity-0'}`}>
                          <text x="0" y="0" fill="#525252" fontSize="12">INNOVATION</text>
                      </g>
                 </svg>
             </div>

             <div className="flex justify-between mt-6 border-t border-white/5 pt-4 text-[10px] text-secondary font-mono">
                 <span>Q1</span>
                 <span>Q2</span>
                 <span>Q3</span>
                 <span>Q4</span>
             </div>

             <div className="mt-4 text-sm text-secondary">
                  <span className="text-white font-medium">Problem:</span> Complexity grows exponentially. Teams become overwhelmed by "glue code" maintenance instead of delivering value.
             </div>
        </div>
    )
}

const StatsShowcase = () => {
  const [containerRef, isVisible] = useElementOnScreen({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
  });

  return (
    <section ref={containerRef} className="py-32 bg-[#020202] border-b border-white/10 relative">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="font-serif text-5xl md:text-6xl text-white mb-6">
               The hidden costs of <br/>
               <span className="text-red-500">fragile infrastructure.</span>
            </h2>
            <p className="text-secondary text-lg font-light leading-relaxed max-w-2xl">
               Without a dedicated agentic runtime, data teams drown in operational overhead, spiraling costs, and silent failures that kill trust in AI.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(360px,auto)]">
             {/* 
                Grid Layout Plan (4 Columns on LG):
                R1: [Usage 1] [Visibility 1] [Volume 2]
                R2: [Cost 1]  [Agents 3]
             */}
             
             <div className={`md:col-span-1 lg:col-span-1 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <UsageWidget visible={isVisible} />
             </div>
             <div className={`md:col-span-1 lg:col-span-1 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <VisibilityWidget visible={isVisible} />
             </div>
             <div className={`md:col-span-2 lg:col-span-2 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <VolumeWidget visible={isVisible} />
             </div>
             
             <div className={`md:col-span-1 lg:col-span-1 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <CostWidget visible={isVisible} />
             </div>
             <div className={`md:col-span-1 lg:col-span-3 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <AgentsWidget visible={isVisible} />
             </div>
        </div>
      </div>
    </section>
  )
}

export default StatsShowcase;
