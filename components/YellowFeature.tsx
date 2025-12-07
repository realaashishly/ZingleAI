import React from 'react';
import { Check } from 'lucide-react';

const YellowFeature = () => {
  const benefits = [
    {
      title: "DOCUMENT INGESTION",
      desc: "Vision-language models (VLMs) that can interpret charts, figures, handwriting, and complex layouts."
    },
    {
      title: "DURABLE AGENT RUNTIME",
      desc: "Fault-tolerant execution engine that ensures long-running agentic tasks complete successfully even during interruptions."
    },
    {
      title: "AUTO-SCALING CONCURRENCY",
      desc: "Automatically scale to handle thousands of concurrent document processing jobs without configuration."
    },
    {
      title: "DEVELOPER SIMPLICITY",
      desc: "Simple pythonic SDK that lets you define agents as functions. No complex YAML or container orchestration required."
    }
  ];

  return (
    <section className="py-24 bg-[#050505] border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left Side: Title & Menu */}
          <div className="lg:w-5/12">
            <div className="flex items-center gap-2 mb-8">
               <div className="w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_10px_#4ade80]"></div>
               <span className="font-mono text-accent text-xs uppercase tracking-widest">Our Products [02]</span>
            </div>
            
            <h2 className="font-serif text-5xl md:text-7xl font-normal mb-10 tracking-tight leading-[0.9] text-white">
              Document<br/>
              Ingestion API
            </h2>
            
            <p className="text-secondary text-lg mb-12 max-w-sm leading-relaxed">
              ZingleAI provides the infrastructure for next-gen AI applications. Ingest, process, and act on data at scale.
            </p>

            <button className="border border-white/20 text-white px-6 py-3 font-mono text-xs uppercase hover:bg-white hover:text-black transition-all rounded">
              View Product Breakdown →
            </button>
            
            {/* Small Indicator */}
            <div className="flex gap-1.5 mt-20 mb-4">
               <div className="w-12 h-1 bg-white rounded-full"></div>
               <div className="w-12 h-1 bg-white/20 rounded-full"></div>
            </div>
            <div className="space-y-1 font-mono text-xs text-secondary">
               <div className="text-white">01 SERVERLESS DATA APPS</div>
               <div>02 DOCUMENT INGESTION API</div>
            </div>
          </div>

          {/* Right Side: Benefits List */}
          <div className="lg:w-7/12 bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden">
             <div className="border-b border-white/10 p-4 flex justify-end bg-[#0F0F0F]">
                <span className="font-mono text-[10px] text-secondary uppercase tracking-wider">Key Product Benefits</span>
             </div>

             <div className="p-8 lg:p-12 space-y-12">
                {benefits.map((item, idx) => (
                   <div key={idx} className="group">
                      <div className="flex items-center gap-4 mb-3">
                         <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                            <Check size={14} strokeWidth={3} />
                         </div>
                         <h3 className="font-mono text-sm text-white font-bold uppercase tracking-wider group-hover:text-accent transition-colors">{item.title}</h3>
                      </div>
                      <p className="text-secondary group-hover:text-gray-300 transition-colors pl-10 text-sm leading-relaxed max-w-lg">
                         {item.desc}
                      </p>
                   </div>
                ))}
             </div>

             <div className="border-t border-white/10 p-4 flex justify-between items-center bg-[#0F0F0F]">
                <span className="font-mono text-[10px] text-secondary">TL LABS</span>
                <span className="font-mono text-[10px] text-accent">BUILD FURTHER WITH API</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default YellowFeature;