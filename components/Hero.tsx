
import React from 'react';
import { ArrowRight, Terminal, Mail, MessageCircle, Send, Linkedin } from 'lucide-react';
import AsciiGlobe from './AsciiGlobe';

const Hero = () => {
  return (
    <section className="relative w-full h-[90vh] min-h-[700px] bg-background overflow-hidden flex flex-col border-b border-border/50">
      {/* ASCII Animation Layer */}
      <AsciiGlobe />

      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-20 z-0" />
      
      {/* Radial Fade for text readability */}
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" style={{ background: 'radial-gradient(circle at center, transparent 0%, #020202 90%)' }}></div>

      {/* Main Container */}
      <div className="max-w-[1400px] w-full mx-auto px-6 relative z-10 flex-1">
        
        {/* Left Headline - Vertically centered relative to viewport roughly */}
        <div className="absolute top-[35%] left-6 md:left-12 max-w-xl">
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-white tracking-tight">
                Deploy durable<br />
                agents.
            </h1>
        </div>

        {/* Right Headline & CTA - Bottom right */}
        <div className="absolute bottom-[15%] right-6 md:right-12 flex flex-col items-end text-right gap-8">
             {/* Headline */}
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-white tracking-tight">
                Scale infinite<br />
                workflows.
            </h1>

            {/* Expanding Connect Button */}
            <div className="group relative h-[56px]">
                {/* The background pill that expands */}
                <div className="absolute right-0 top-0 h-full bg-white rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] w-[180px] group-hover:w-[340px] overflow-hidden">
                    
                    {/* Default State Text */}
                    <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:translate-y-[-100%] group-hover:opacity-0">
                         <span className="text-black font-bold tracking-widest text-sm flex items-center gap-2">
                            CONNECT US <ArrowRight size={16} />
                         </span>
                    </div>

                    {/* Hover State Icons */}
                    <div className="absolute inset-0 flex items-center justify-around px-2 translate-y-[100%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                         <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors" title="Email">
                             <Mail size={18} />
                         </a>
                         <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-black hover:bg-[#25D366] hover:text-white transition-colors" title="WhatsApp">
                             <MessageCircle size={18} />
                         </a>
                         <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-black hover:bg-[#0088cc] hover:text-white transition-colors" title="Telegram">
                             <Send size={18} />
                         </a>
                         <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-black hover:bg-[#0077b5] hover:text-white transition-colors" title="LinkedIn">
                             <Linkedin size={18} />
                         </a>
                    </div>
                </div>
                
                {/* Spacer to hold layout position since absolute positioning is used for animation */}
                <div className="w-[180px] h-full pointer-events-none"></div>
            </div>

            <p className="text-secondary text-xs font-mono max-w-xs leading-relaxed opacity-60">
                Get in touch with our solutions engineering team for a custom demo.
            </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;
