
import React, { useState, useEffect } from 'react';
import { Twitter, Github, Linkedin, ArrowUpRight, Mail } from 'lucide-react';

const Footer = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
        const now = new Date();
        setTime(now.toLocaleTimeString('en-US', { hour12: false, timeZone: 'UTC' }) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#020202] border-t border-white/10 pt-24 pb-12 relative overflow-hidden">
        {/* Massive Watermark */}
        <div className="absolute top-0 right-0 text-[30vw] font-serif text-white/[0.02] pointer-events-none select-none leading-none -mt-20 -mr-20 z-0 font-bold">
            Z
        </div>
        
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none z-0"></div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
                
                {/* Brand & Newsletter - Col 1-5 */}
                <div className="md:col-span-5 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                <span className="font-mono font-bold text-black text-2xl">Z</span>
                            </div>
                            <span className="text-2xl font-bold text-white tracking-tight">ZingleAI</span>
                        </div>
                        <p className="text-secondary text-base leading-relaxed max-w-sm mb-10">
                            The agentic compute runtime. Built for developers who need durability, scale, and observability out of the box.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white text-sm font-bold mb-4">Stay updated</h4>
                        <div className="bg-[#0A0A0A] border border-white/10 p-1.5 rounded-lg flex items-center max-w-sm group focus-within:border-white/30 transition-colors shadow-lg">
                            <div className="pl-3 text-secondary">
                                <Mail size={16} />
                            </div>
                            <input 
                                type="email" 
                                placeholder="Subscribe to changelog" 
                                className="bg-transparent border-none text-sm text-white px-3 py-2 w-full focus:outline-none placeholder-secondary/50 font-mono"
                            />
                            <button className="bg-white text-black p-2 rounded hover:bg-gray-200 transition-colors">
                                <ArrowUpRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Spacer */}
                <div className="md:col-span-1"></div>

                {/* Links - Col 7-12 */}
                <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-10">
                    <div>
                        <h4 className="text-white font-mono text-xs uppercase tracking-wider mb-8 opacity-50">Platform</h4>
                        <ul className="space-y-4 text-sm text-secondary">
                            <li><a href="#" className="hover:text-white transition-colors block hover:translate-x-1 duration-200">Runtime</a></li>
                            <li><a href="#" className="hover:text-white transition-colors block hover:translate-x-1 duration-200">Observability</a></li>
                            <li><a href="#" className="hover:text-white transition-colors block hover:translate-x-1 duration-200">Edge Network</a></li>
                            <li><a href="#" className="hover:text-white transition-colors block hover:translate-x-1 duration-200">Security</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-mono text-xs uppercase tracking-wider mb-8 opacity-50">Resources</h4>
                        <ul className="space-y-4 text-sm text-secondary">
                            <li><a href="#" className="hover:text-white transition-colors block hover:translate-x-1 duration-200">Documentation</a></li>
                            <li><a href="#" className="hover:text-white transition-colors block hover:translate-x-1 duration-200">API Reference</a></li>
                            <li><a href="#" className="hover:text-white transition-colors block hover:translate-x-1 duration-200">Community</a></li>
                            <li><a href="#" className="hover:text-white transition-colors block hover:translate-x-1 duration-200">Status</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-mono text-xs uppercase tracking-wider mb-8 opacity-50">Company</h4>
                        <ul className="space-y-4 text-sm text-secondary">
                            <li><a href="#" className="hover:text-white transition-colors block hover:translate-x-1 duration-200">About</a></li>
                            <li><a href="#" className="hover:text-white transition-colors block hover:translate-x-1 duration-200">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition-colors block hover:translate-x-1 duration-200">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors block hover:translate-x-1 duration-200">Legal</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-mono text-secondary">
                <div className="flex flex-col sm:flex-row items-center gap-8">
                    <span>© 2025 Zingle Inc.</span>
                    <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-emerald-500 font-bold tracking-wide">SYSTEMS NORMAL</span>
                    </div>
                </div>
                
                <div className="flex items-center gap-8">
                    <span className="tabular-nums opacity-50 hover:opacity-100 transition-opacity cursor-default tracking-widest">{time}</span>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-white transition-colors transform hover:scale-110 duration-200"><Twitter size={18} /></a>
                        <a href="#" className="hover:text-white transition-colors transform hover:scale-110 duration-200"><Github size={18} /></a>
                        <a href="#" className="hover:text-white transition-colors transform hover:scale-110 duration-200"><Linkedin size={18} /></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
