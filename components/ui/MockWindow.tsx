import React from 'react';
import { Search, MoreHorizontal, Maximize2, X, Plus, Database, Sparkles, ArrowRight, Play, CheckCircle2, AlertCircle } from 'lucide-react';

interface MockWindowProps {
  children: React.ReactNode;
  title?: string;
  theme?: 'dark' | 'light' | 'yellow';
}

const MockWindow: React.FC<MockWindowProps> = ({ children, title = "Maia", theme = 'dark' }) => {
  const isDark = theme === 'dark';
  const isYellow = theme === 'yellow';
  
  const bgClass = isDark ? 'bg-slate-900 border-slate-700' : 'bg-white';
  const borderClass = isDark ? 'border-slate-700' : isYellow ? 'border-yellow-200' : 'border-slate-200';
  const textClass = isDark ? 'text-white' : 'text-slate-900';
  const headerBg = isDark ? 'bg-slate-800/50' : 'bg-slate-50';

  return (
    <div className={`rounded-xl border ${borderClass} ${bgClass} shadow-2xl overflow-hidden font-sans ${textClass} w-full`}>
      {/* Header */}
      <div className={`h-10 ${headerBg} border-b ${borderClass} flex items-center px-4 justify-between`}>
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
          </div>
        </div>
        <div className={`text-xs font-medium opacity-70 flex items-center gap-2`}>
           {theme === 'dark' || theme === 'yellow' ? <Sparkles size={12} className={isDark ? "text-yellow-400" : "text-amber-500"} /> : <Database size={12} className="text-emerald-500" />}
           {title}
        </div>
        <div className="opacity-50">
           <MoreHorizontal size={16} />
        </div>
      </div>
      {/* Content */}
      <div className="p-1 relative">
         {children}
      </div>
    </div>
  );
};

export const ChatMock = () => {
  return (
    <div className="flex h-[400px] bg-slate-900 text-white font-sans text-sm">
      {/* Sidebar */}
      <div className="w-16 md:w-48 border-r border-slate-700 p-3 hidden md:flex flex-col gap-4">
         <div className="w-8 h-8 rounded-lg bg-yellow-400 flex items-center justify-center mb-4">
            <Sparkles className="text-slate-900 w-5 h-5" />
         </div>
         <div className="space-y-2">
            {[1,2,3].map(i => (
                <div key={i} className="h-2 w-full bg-slate-800 rounded animate-pulse opacity-50" />
            ))}
         </div>
      </div>
      
      {/* Main Area */}
      <div className="flex-1 flex flex-col relative">
         <div className="flex-1 p-6 overflow-y-auto">
            <div className="mb-8">
               <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded bg-yellow-400 flex items-center justify-center">
                     <Sparkles size={14} className="text-slate-900" />
                  </div>
                  <span className="font-semibold text-lg">Maia</span>
               </div>
               <h3 className="text-2xl font-bold mb-1">Looking to build?</h3>
               <h3 className="text-2xl font-bold text-slate-400 mb-6">Ask Maia.</h3>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-md">
                  <button className="text-left p-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition border border-slate-700 group">
                     <div className="font-medium text-xs text-yellow-400 mb-1">Build</div>
                     <div className="text-xs text-slate-300 group-hover:text-white">Help me build a pipeline</div>
                  </button>
                  <button className="text-left p-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition border border-slate-700 group">
                     <div className="font-medium text-xs text-purple-400 mb-1">Analyze</div>
                     <div className="text-xs text-slate-300 group-hover:text-white">Summarize the pipeline</div>
                  </button>
               </div>
            </div>
         </div>

         {/* Input */}
         <div className="p-4 border-t border-slate-700 bg-slate-900">
            <div className="relative">
               <input 
                  type="text" 
                  placeholder="Help me build..." 
                  className="w-full bg-slate-800 border border-slate-600 rounded-full py-3 px-4 text-sm focus:outline-none focus:border-yellow-400 text-white placeholder-slate-500"
               />
               <div className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-yellow-400 rounded-full text-slate-900 cursor-pointer hover:bg-yellow-300 transition">
                  <ArrowRight size={14} />
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export const DataQualityMock = () => {
  return (
    <div className="flex h-[400px] bg-slate-50 text-slate-900 font-sans text-sm relative">
       {/* Sidebar */}
       <div className="w-16 border-r border-slate-200 bg-white flex flex-col items-center py-4 gap-4">
          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">
             <Database size={20} />
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
             <Sparkles size={20} />
          </div>
       </div>

       {/* Content */}
       <div className="flex-1 p-6 overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
             <div>
                <div className="flex items-center gap-2 mb-2">
                   <div className="w-5 h-5 rounded bg-yellow-400 flex items-center justify-center">
                      <Sparkles size={12} className="text-slate-900" />
                   </div>
                   <span className="font-bold text-slate-700">Maia</span>
                </div>
                <h3 className="text-xl font-bold leading-tight">Looking to improve<br/>your data quality?</h3>
                <p className="text-slate-500 text-sm mt-1">Ask Maia.</p>
             </div>
             
             {/* Score Card Floating */}
             <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex flex-col items-center w-full md:w-32 shrink-0">
                <div className="text-[10px] text-slate-500 font-bold uppercase mb-2 tracking-wider">Data Quality</div>
                <div className="relative w-16 h-16 flex items-center justify-center mb-2">
                   <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path className="text-slate-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                      <path className="text-emerald-500" strokeDasharray="70, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                   </svg>
                   <span className="absolute text-sm font-bold text-emerald-600">7/10</span>
                </div>
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] py-1.5 px-4 rounded-full font-medium transition">Fix All</button>
             </div>
          </div>

          <div className="space-y-3">
             {[
                { label: 'Remove 12 Nulls from "State" column', icon: <X size={14} className="text-red-500" />, action: 'Review' },
                { label: 'Correct spelling errors in "Description"', icon: <AlertCircle size={14} className="text-orange-500" />, action: 'Fix' },
                { label: 'Make all characters in "Total" UPPERCASE', icon: <CheckCircle2 size={14} className="text-green-500" />, action: 'Apply' },
             ].map((item, i) => (
                <div key={i} className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex items-center gap-3 group hover:border-emerald-200 transition">
                   <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                      {item.icon}
                   </div>
                   <span className="text-xs font-medium text-slate-700">{item.label}</span>
                   <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="bg-slate-100 hover:bg-slate-200 text-slate-600 text-[10px] py-1 px-2 rounded font-medium">
                         {item.action}
                      </button>
                   </div>
                </div>
             ))}
          </div>
       </div>
    </div>
  )
}

export const FlowMock = () => {
   return (
      <div className="h-[400px] bg-slate-50 relative overflow-hidden flex items-center justify-center">
         {/* Background Grid */}
         <div className="absolute inset-0" 
              style={{ 
                  backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', 
                  backgroundSize: '20px 20px', 
                  opacity: 0.3 
              }}>
         </div>
         
         <div className="relative w-full max-w-lg h-64">
            {/* Dashed Path (Simulated) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
               <path d="M100 80 L 250 80 L 250 180 L 400 180" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 4" />
               <path d="M250 80 L 250 30" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 4" />
            </svg>

            {/* Nodes */}
            <div className="absolute top-[50px] left-[70px] bg-white p-2 rounded-xl shadow-md border border-slate-200 flex flex-col items-center gap-1 z-10 w-24">
               <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  <Database size={16} />
               </div>
               <div className="h-1 w-12 bg-slate-100 rounded"></div>
            </div>

            <div className="absolute top-[50px] left-[220px] bg-white p-3 rounded-xl shadow-xl border border-yellow-300 ring-4 ring-yellow-100/50 flex flex-col items-center gap-2 z-20 w-32 animate-[bounce_3s_infinite]">
               <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center text-slate-900 shadow-sm">
                  <Sparkles size={20} />
               </div>
               <span className="font-bold text-[10px] text-slate-700 uppercase tracking-wide">Maia Agent</span>
            </div>

             <div className="absolute top-0 left-[235px] bg-white p-2 rounded-lg shadow border border-slate-200 z-10">
               <div className="w-6 h-6 bg-slate-100 rounded flex items-center justify-center text-slate-500">
                  <MoreHorizontal size={12} />
               </div>
            </div>

            <div className="absolute top-[150px] left-[370px] bg-white p-2 rounded-xl shadow-md border border-slate-200 flex flex-col items-center gap-1 z-10 w-24">
               <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                  <Play size={16} />
               </div>
               <div className="h-1 w-12 bg-slate-100 rounded"></div>
            </div>
            
            {/* Status indicators */}
             <div className="absolute top-[70px] left-[180px] px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded-full">
               Active
             </div>
         </div>
      </div>
   )
}

export default MockWindow;
