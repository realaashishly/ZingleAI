
import React, { useState } from 'react';
import { ArrowRight, Copy, Check, Terminal, Sparkles } from 'lucide-react';

const CommandBlock = () => {
  const [copied, setCopied] = useState(false);
  const command = "npm create zingle-app@latest";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
        className="relative group cursor-pointer"
        onClick={handleCopy}
    >
        {/* Glow effect behind */}
        <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-emerald-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
        
        <div className="relative flex items-center gap-4 bg-[#0A0A0A] border border-white/10 rounded-lg px-6 py-4 hover:border-accent/30 transition-all">
            <Terminal size={18} className="text-secondary" />
            <div className="flex gap-2 font-mono text-sm">
                <span className="text-accent">$</span>
                <span className="text-gray-200">{command}</span>
            </div>
            <div className="pl-4 border-l border-white/10 text-gray-500 group-hover:text-white transition-colors ml-2">
                {copied ? <Check size={16} className="text-accent" /> : <Copy size={16} />}
            </div>
            
            {/* Tooltip */}
            <div className={`absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-black text-xs font-bold rounded transition-opacity duration-200 ${copied ? 'opacity-100' : 'opacity-0'}`}>
                Copied!
                <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
            </div>
        </div>
    </div>
  )
}

const BottomCTA = () => {
  return (
    <section className="py-32 bg-[#020202] relative overflow-hidden border-t border-white/5 flex flex-col items-center justify-center min-h-[600px]">
        {/* Ambient Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md shadow-xl">
                <Sparkles size={12} className="text-accent" />
                <span className="text-xs text-white font-mono uppercase tracking-widest">Developer Preview Available</span>
            </div>

            <h2 className="font-serif text-6xl md:text-8xl text-white mb-8 tracking-tighter leading-[0.9]">
                Start shipping <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-secondary to-secondary/30">durable agents.</span>
            </h2>

            <p className="text-xl text-secondary max-w-2xl mb-12 font-light leading-relaxed">
                Join thousands of developers building the next generation of AI applications. 
                Zero infrastructure management. Infinite scale.
            </p>

            <div className="flex flex-col items-center gap-8 w-full">
                 <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                    <button className="bg-white hover:bg-gray-200 text-black px-8 py-4 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                        Start Building Free
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="bg-[#111] border border-white/10 hover:border-white/30 text-white px-8 py-4 rounded-lg font-bold text-sm transition-all hover:bg-white/5">
                        Read Documentation
                    </button>
                </div>
                
                <div className="flex items-center gap-4 w-full justify-center">
                    <div className="h-px bg-white/10 w-12 hidden sm:block"></div>
                    <span className="text-secondary text-xs font-mono uppercase tracking-widest">OR</span>
                    <div className="h-px bg-white/10 w-12 hidden sm:block"></div>
                </div>

                <CommandBlock />
            </div>
            
        </div>
    </section>
  )
}

export default BottomCTA;
