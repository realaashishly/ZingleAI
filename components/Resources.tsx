import React from 'react';

const Resources = () => {
  return (
    <section className="py-24 bg-background border-b border-border">
       <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
             <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-tight text-white leading-none">From the Engineering Blog</h2>
             <a href="#" className="font-mono text-xs text-accent hover:underline flex items-center gap-1 mb-1">VIEW ALL POSTS <span className="text-[10px]">&rarr;</span></a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
             {[
                { type: 'Technical Guide', title: 'Building durable agents with Python', date: 'OCT 12, 2024' },
                { type: 'Case Study', title: 'Reducing latency by 100x for document OCR', date: 'SEP 28, 2024' },
                { type: 'Release Notes', title: 'v2.0: Introducing the Agentic Runtime', date: 'SEP 15, 2024' }
             ].map((post, i) => (
                <div key={i} className="bg-[#050505] p-10 hover:bg-[#0A0A0A] transition-colors group cursor-pointer">
                   <div className="flex justify-between items-start mb-12">
                      <span className="font-mono text-[10px] text-accent border border-accent/20 px-2 py-1 bg-accent/5 rounded-sm">{post.type}</span>
                      <span className="font-mono text-[10px] text-secondary">{post.date}</span>
                   </div>
                   <h3 className="text-2xl font-serif font-normal mb-4 text-gray-200 group-hover:text-white transition-colors leading-snug">{post.title}</h3>
                   <div className="h-px w-12 bg-border group-hover:bg-accent group-hover:w-full transition-all duration-500 mt-8"></div>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
};

export default Resources;