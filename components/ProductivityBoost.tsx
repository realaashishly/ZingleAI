
import React from 'react';
import { Terminal, Search, ArrowRight, LineChart, Network, Check, ShieldCheck, Activity } from 'lucide-react';

// --- Animations ---

const EngineerAnim = () => (
    <div className="h-28 w-full bg-[#080808] rounded-lg border border-emerald-500/20 relative overflow-hidden flex items-center justify-center group-hover:border-emerald-500/40 transition-colors shadow-inner shadow-black/50">
       <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-50"></div>
       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent"></div>
       
       <div className="flex flex-col gap-3 items-center z-10 w-full px-8">
          <div className="flex gap-3">
             {[0, 1, 2].map(i => (
                 <div key={i} className="w-8 h-8 rounded bg-[#0A0A0A] border border-emerald-500/40 flex items-center justify-center shadow-lg shadow-emerald-900/10">
                    <Terminal size={14} className="text-emerald-400 animate-pulse" style={{animationDelay: `${i*0.2}s`}} />
                 </div>
             ))}
          </div>
          <div className="h-1.5 w-32 bg-[#111] rounded-full overflow-hidden border border-white/5 relative">
             <div className="absolute inset-0 bg-emerald-500/20"></div>
             <div className="h-full bg-emerald-400 w-2/3 animate-[shimmer_2s_linear_infinite] shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
          </div>
       </div>
    </div>
);

const BusinessAnim = () => (
    <div className="h-28 w-full bg-[#080808] rounded-lg border border-blue-500/20 relative overflow-hidden flex items-center justify-center group-hover:border-blue-500/40 transition-colors shadow-inner shadow-black/50">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        
        <div className="flex items-center gap-4 relative z-10">
            <div className="w-10 h-10 rounded-xl bg-[#0A0A0A] border border-blue-500/40 flex items-center justify-center text-blue-400 shadow-lg shadow-blue-900/10">
                <Search size={18} />
            </div>
            <div className="text-blue-500/40">
                <ArrowRight size={16} strokeWidth={3} />
            </div>
            
            <div className="flex items-end gap-1.5 h-10 pb-1">
                <div className="w-2.5 bg-blue-500 rounded-t-sm h-[40%] animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                <div className="w-2.5 bg-blue-400 rounded-t-sm h-[80%] animate-[pulse_2s_ease-in-out_infinite_0.2s] shadow-[0_0_8px_rgba(96,165,250,0.5)]"></div>
                <div className="w-2.5 bg-blue-600 rounded-t-sm h-[60%] animate-[pulse_2s_ease-in-out_infinite_0.4s] shadow-[0_0_8px_rgba(37,99,235,0.5)]"></div>
            </div>
        </div>
    </div>
);

const AnalystAnim = () => (
    <div className="h-28 w-full bg-[#080808] rounded-lg border border-amber-500/20 relative overflow-hidden flex items-center justify-center group-hover:border-amber-500/40 transition-colors shadow-inner shadow-black/50">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent opacity-50"></div>
        <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)', backgroundSize: '10px 10px', opacity: 0.3}}></div>

        <div className="flex items-end gap-1 h-12 pb-2 z-10">
             {[40, 60, 45, 70, 50, 80, 65, 90].map((h, i) => (
                 <div key={i} className="w-2 bg-amber-500/80 rounded-t-sm animate-[pulse_2s_ease-in-out_infinite]" style={{height: `${h}%`, animationDelay: `${i * 0.1}s`}}></div>
             ))}
        </div>
        
        <div className="absolute top-3 right-3 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded text-[8px] text-amber-500 font-mono animate-pulse">
            TREND_DETECTED
        </div>
    </div>
);

const ArchitectAnim = () => (
    <div className="h-28 w-full bg-[#080808] rounded-lg border border-rose-500/20 relative overflow-hidden flex items-center justify-center group-hover:border-rose-500/40 transition-colors shadow-inner shadow-black/50">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-500/5 to-transparent opacity-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-900/10 via-transparent to-transparent"></div>
        
        <div className="relative w-24 h-24 flex items-center justify-center z-10">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-rose-500 rounded-full shadow-[0_0_15px_#f43f5e] z-20"></div>
             
             <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0A0A0A] border-2 border-rose-500 rounded-full z-10"></div>
             <div className="absolute bottom-2 left-2 w-3 h-3 bg-[#0A0A0A] border-2 border-rose-500 rounded-full z-10"></div>
             <div className="absolute bottom-2 right-2 w-3 h-3 bg-[#0A0A0A] border-2 border-rose-500 rounded-full z-10"></div>
             
             <div className="absolute top-[16px] left-[45px] w-[2px] h-[36px] bg-rose-500/40 -rotate-[25deg] origin-bottom"></div>
             <div className="absolute top-[16px] right-[45px] w-[2px] h-[36px] bg-rose-500/40 rotate-[25deg] origin-bottom"></div>
             <div className="absolute bottom-[10px] left-[16px] w-[64px] h-[2px] bg-rose-500/40"></div>
             
             <div className="absolute inset-0 border-2 border-dashed border-rose-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
             <div className="absolute inset-4 border border-rose-500/10 rounded-full animate-[spin_5s_linear_infinite_reverse]"></div>
        </div>
    </div>
);

const QAAnim = () => (
    <div className="h-28 w-full bg-[#080808] rounded-lg border border-indigo-500/20 relative overflow-hidden flex flex-col justify-center px-6 gap-2 group-hover:border-indigo-500/40 transition-colors shadow-inner shadow-black/50">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-50"></div>
        
        {['Unit Tests', 'Integration', 'E2E Flow'].map((label, i) => (
             <div key={i} className="flex items-center justify-between z-10">
                 <span className="text-[10px] text-secondary font-mono">{label}</span>
                 <div className="flex items-center gap-2">
                     <div className="h-1.5 w-16 bg-[#111] rounded-full overflow-hidden border border-white/5">
                          <div className="h-full bg-indigo-500 animate-[fillBar_1s_ease-out_forwards]" style={{animationDelay: `${i*0.5}s`, width: '100%'}}></div>
                     </div>
                     <Check size={10} className="text-indigo-400 opacity-0 animate-[fade-in_0.5s_forwards]" style={{animationDelay: `${i*0.5 + 0.8}s`}} />
                 </div>
             </div>
        ))}
    </div>
);

const OpsAnim = () => (
    <div className="h-28 w-full bg-[#080808] rounded-lg border border-cyan-500/20 relative overflow-hidden flex items-center justify-center group-hover:border-cyan-500/40 transition-colors shadow-inner shadow-black/50">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent"></div>
        
        <div className="relative w-20 h-20 flex items-center justify-center z-10">
            <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-full border-t-cyan-400 animate-[spin_3s_linear_infinite] shadow-[0_0_10px_rgba(6,182,212,0.2)]"></div>
            <div className="absolute inset-3 border-2 border-cyan-500/30 rounded-full border-b-cyan-400 animate-[spin_5s_linear_infinite_reverse]"></div>
            <div className="absolute inset-7 border border-cyan-500/50 rounded-full bg-cyan-900/20"></div>
            <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_15px_cyan]"></div>
        </div>
    </div>
);


const ProductivityBoost = () => {
  return (
    <section className="py-24 bg-[#020202] border-b border-border relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
             <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-tight text-white mb-6 leading-none">
                Boost data team<br/> productivity with Zingle
            </h2>
            <p className="text-secondary text-base leading-relaxed max-w-2xl mx-auto">
                Collaborate with Zingle to accelerate pipeline development, automate repetitive tasks, and keep data flowing cleanly across your entire organization.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Data Engineer */}
            <div className="group bg-[#0A0A0A] border border-white/10 p-6 rounded-xl hover:border-emerald-500/50 transition-colors flex flex-col">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-5 border border-emerald-500/20">
                    <Code size={20} />
                </div>
                <EngineerAnim />
                <h3 className="font-serif text-xl text-white mt-5 mb-2">Data Engineer</h3>
                <p className="text-secondary text-sm leading-relaxed">
                    Automate building, testing, and deployment. Spend time on architecture and strategy, not repetitive tasks.
                </p>
            </div>

            {/* 2. Business Analyst */}
            <div className="group bg-[#0A0A0A] border border-white/10 p-6 rounded-xl hover:border-blue-500/50 transition-colors flex flex-col">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 mb-5 border border-blue-500/20">
                    <Search size={20} />
                </div>
                <BusinessAnim />
                <h3 className="font-serif text-xl text-white mt-5 mb-2">Business Analyst</h3>
                <p className="text-secondary text-sm leading-relaxed">
                    Get analysis-ready results instantly using plain language. No SQL or technical skills required.
                </p>
            </div>

            {/* 3. Data Analyst */}
            <div className="group bg-[#0A0A0A] border border-white/10 p-6 rounded-xl hover:border-amber-500/50 transition-colors flex flex-col">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500 mb-5 border border-amber-500/20">
                    <LineChart size={20} />
                </div>
                <AnalystAnim />
                <h3 className="font-serif text-xl text-white mt-5 mb-2">Data Analyst</h3>
                <p className="text-secondary text-sm leading-relaxed">
                    Zingle maintains pipelines and flags anomalies so you can focus on insights and make changes with confidence.
                </p>
            </div>

            {/* 4. Data Architect */}
            <div className="group bg-[#0A0A0A] border border-white/10 p-6 rounded-xl hover:border-rose-500/50 transition-colors flex flex-col">
                <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-500 mb-5 border border-rose-500/20">
                    <Network size={20} />
                </div>
                <ArchitectAnim />
                <h3 className="font-serif text-xl text-white mt-5 mb-2">Data Architect</h3>
                <p className="text-secondary text-sm leading-relaxed">
                    Enforce patterns and auto-document flows. Scale governance and delivery structure without chaos.
                </p>
            </div>

            {/* 5. QA Engineer */}
            <div className="group bg-[#0A0A0A] border border-white/10 p-6 rounded-xl hover:border-indigo-500/50 transition-colors flex flex-col">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-500 mb-5 border border-indigo-500/20">
                    <ShieldCheck size={20} />
                </div>
                <QAAnim />
                <h3 className="font-serif text-xl text-white mt-5 mb-2">QA Engineer</h3>
                <p className="text-secondary text-sm leading-relaxed">
                    Catch issues early. Automate data quality tests, monitor health, and prevent downstream disruptions.
                </p>
            </div>

            {/* 6. Operations Manager */}
            <div className="group bg-[#0A0A0A] border border-white/10 p-6 rounded-xl hover:border-cyan-500/50 transition-colors flex flex-col">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-500 mb-5 border border-cyan-500/20">
                    <Activity size={20} />
                </div>
                <OpsAnim />
                <h3 className="font-serif text-xl text-white mt-5 mb-2">Operations Manager</h3>
                <p className="text-secondary text-sm leading-relaxed">
                    Ensure SLA compliance with real-time visibility. Cut through the noise and control pipeline health.
                </p>
            </div>

        </div>

      </div>
    </section>
  );
};

// Add missing keyframe definition styles locally or ensure they are in global css. 
// Assuming tailwind config from index.html handles pulse, spin, etc.

const Code = ({ size, className }: { size: number, className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
)

export default ProductivityBoost;
