
import React from 'react';
import { Database, Server, Cpu, ArrowRight } from 'lucide-react';

const DarkFeature = () => {
  return (
    <section className="py-32 bg-background border-b border-border overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Diagram Side */}
          <div className="relative border border-white/10 rounded-2xl p-8 bg-[#050505] shadow-2xl h-[500px] flex items-center justify-center overflow-hidden">
             {/* Background Grid */}
             <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>

             {/* Animation Container */}
             <div className="relative w-full max-w-[400px] h-[300px] scale-75 sm:scale-100 origin-center transition-transform">
                
                {/* Node: Extraction */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 z-10">
                   <div className="bg-[#0A0A0A] border border-accent text-accent text-[10px] font-mono py-2 text-center rounded shadow-[0_0_15px_rgba(74,222,128,0.15)] relative">
                      INGESTION EVENT
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent rotate-45 border-r border-b border-accent bg-[#0A0A0A]"></div>
                   </div>
                </div>

                {/* Vertical Line Down */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 h-20 w-px bg-white/10 overflow-hidden">
                   <div className="w-full h-1/2 bg-accent absolute top-0 animate-[moveDown_1.5s_linear_infinite]"></div>
                </div>

                {/* Node: Router */}
                <div className="absolute top-28 left-1/2 -translate-x-1/2 w-32 z-10">
                   <div className="bg-[#111] border border-white/20 text-white text-[10px] font-mono py-2 text-center rounded">
                      ROUTER
                   </div>
                </div>

                {/* Horizontal Fork Lines */}
                <div className="absolute top-[135px] left-[50px] right-[50px] h-px bg-white/10"></div>
                
                {/* Vertical Lines from Fork */}
                <div className="absolute top-[135px] left-[50px] h-16 w-px bg-white/10">
                    <div className="w-full h-1/2 bg-accent absolute top-0 animate-[moveDown_2s_linear_infinite_0.5s]"></div>
                </div>
                <div className="absolute top-[135px] right-[50px] h-16 w-px bg-white/10">
                    <div className="w-full h-1/2 bg-accent absolute top-0 animate-[moveDown_2s_linear_infinite_0.8s]"></div>
                </div>

                {/* Node: Worker 1 */}
                <div className="absolute top-[200px] left-0 w-32 z-10">
                   <div className="bg-[#0A0A0A] border border-dashed border-secondary text-secondary text-[10px] font-mono py-2 text-center rounded">
                      OCR WORKER
                   </div>
                </div>

                {/* Node: Worker 2 */}
                <div className="absolute top-[200px] right-0 w-32 z-10">
                   <div className="bg-[#0A0A0A] border border-dashed border-secondary text-secondary text-[10px] font-mono py-2 text-center rounded">
                      VLM ANALYSIS
                   </div>
                </div>

                {/* Converge Lines */}
                <div className="absolute top-[232px] left-[65px] h-10 w-px bg-white/10"></div>
                <div className="absolute top-[232px] right-[65px] h-10 w-px bg-white/10"></div>
                <div className="absolute top-[270px] left-[65px] right-[65px] h-px bg-white/10">
                     <div className="h-full w-20 bg-accent absolute left-0 animate-[moveRight_2s_linear_infinite] opacity-50"></div>
                </div>

                {/* Final Node */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 z-10 translate-y-4">
                   <div className="bg-[#1A1A1A] border border-white/20 text-white text-[10px] font-mono py-3 text-center rounded shadow-2xl flex justify-center items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
                      STRUCTURED JSON
                   </div>
                </div>
             </div>
             
             {/* Metrics Strip */}
             <div className="absolute bottom-8 left-8 right-8 pt-6 border-t border-white/10 flex justify-between items-center">
                <div>
                   <div className="font-mono text-xl text-white">0.003s</div>
                   <div className="text-secondary text-[10px] uppercase tracking-wider mt-1">Cold Start</div>
                </div>
                <div className="h-8 w-px bg-white/10"></div>
                <div>
                   <div className="font-mono text-xl text-white">100k+</div>
                   <div className="text-secondary text-[10px] uppercase tracking-wider mt-1">Docs/Day</div>
                </div>
                <div className="flex gap-2">
                   <div className="w-8 h-8 bg-white/5 rounded flex items-center justify-center text-secondary hover:text-white transition-colors"><Database size={14}/></div>
                   <div className="w-8 h-8 bg-white/5 rounded flex items-center justify-center text-secondary hover:text-white transition-colors"><Cpu size={14}/></div>
                </div>
             </div>
          </div>

          {/* Text Side */}
          <div className="flex flex-col justify-center">
             <div className="flex items-center gap-2 mb-6">
               <div className="w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_10px_#4ade80]"></div>
               <span className="font-mono text-accent text-xs uppercase tracking-widest">Architecture</span>
             </div>
             
             <h2 className="font-serif text-5xl md:text-6xl font-normal mb-6 tracking-tight leading-[0.95] text-white">
                Serverless Runtime for<br/> Agents & Data Ingestion
             </h2>
             
             <p className="text-secondary text-lg leading-relaxed mb-10 max-w-md">
                ZingleAI is the Agentic Compute Runtime for durable serverless platforms. 
                Built for heavy workloads without the operational overhead of managing clusters.
             </p>

             <button className="w-fit border border-accent text-accent px-6 py-3 font-mono text-xs uppercase tracking-wide hover:bg-accent hover:text-black transition-all rounded">
                Talk to Engineering →
             </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DarkFeature;
