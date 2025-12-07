
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/10 py-4' 
          : 'bg-transparent border-b border-transparent py-6'
      }`}>
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:scale-105 transition-transform">
              <span className="font-mono font-bold text-black text-sm">Z</span>
            </div>
            <span className="font-sans font-bold text-sm tracking-tight text-white group-hover:text-accent transition-colors">ZingleAI</span>
          </div>
            
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink label="Platform" />
            <NavLink label="Solutions" />
            <NavLink label="Developers" />
            <NavLink label="Pricing" />
          </div>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-xs font-medium text-secondary hover:text-white transition-colors">Log in</a>
            <button className="bg-white hover:bg-gray-200 text-black px-5 py-2 text-xs font-bold transition-all duration-300 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(74,222,128,0.4)] tracking-wide">
              START BUILDING
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             <button onClick={() => setMobileMenuOpen(true)} className="text-white p-2 hover:bg-white/10 rounded-full transition-colors">
               <Menu size={20} />
             </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[60] bg-[#020202] transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          {/* Background Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none"></div>
          
          <div className="p-6 flex flex-col h-full relative z-10">
              <div className="flex justify-between items-center mb-12">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                       <span className="font-mono font-bold text-black text-sm">Z</span>
                    </div>
                    <span className="font-sans font-bold text-lg text-white">ZingleAI</span>
                  </div>
                  <button onClick={() => setMobileMenuOpen(false)} className="text-white p-2 hover:bg-white/10 rounded-full transition-colors">
                    <X size={24} />
                  </button>
              </div>

              <div className="flex flex-col gap-8 flex-1">
                 {['Platform', 'Solutions', 'Developers', 'Pricing'].map((item, i) => (
                    <a key={item} href="#" className="group flex items-center justify-between text-3xl font-light text-secondary hover:text-white transition-colors">
                       {item}
                       <ArrowRight size={24} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
                    </a>
                 ))}
              </div>

              <div className="border-t border-white/10 pt-8 flex flex-col gap-4">
                  <button className="w-full bg-white text-black py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition-colors">
                      Start Building Now
                  </button>
                  <button className="w-full bg-[#111] border border-white/10 text-white py-4 rounded-xl font-medium hover:bg-[#1A1A1A] transition-colors">
                      Log in to Console
                  </button>
              </div>
          </div>
      </div>
    </>
  );
};

const NavLink = ({ label }: { label: string }) => (
  <a 
    href="#" 
    className="px-5 py-2 text-xs font-medium text-secondary hover:text-white transition-all relative group"
  >
    {label}
    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-accent group-hover:w-1/2 transition-all duration-300"></span>
  </a>
);

export default Navbar;
