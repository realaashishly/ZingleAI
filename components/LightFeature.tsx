
import React from 'react';
import { Quote } from 'lucide-react';

const CustomerStories = () => {
  const stories = [
    {
      company: "Vercel",
      logo: "▲",
      quote: "The MCP server we built using ZingleAI just works. It made becoming AI-native much simpler than we expected.",
      author: "Guillermo Rauch",
      role: "CEO @ VERCEL"
    },
    {
      company: "Linear",
      logo: "◆",
      quote: "ZingleAI is a beautiful and easy-to-manage product with a team fully committed to the developer experience that understands scale.",
      author: "Karri Saarinen",
      role: "CEO @ LINEAR"
    },
    {
      company: "Supabase",
      logo: "⚡",
      quote: "We were able to implement complex agentic workflows in days, not months. The durability guarantees are a game changer.",
      author: "Paul Copplestone",
      role: "CEO @ SUPABASE"
    }
  ];

  return (
    <section className="py-32 bg-[#020202] border-b border-border/20 text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
            <h2 className="font-serif text-5xl md:text-7xl mb-6 tracking-tight">
                Real stories, real success
            </h2>
            <p className="text-secondary text-lg font-light tracking-wide max-w-2xl mx-auto">
                Engineering teams, big and small, are using ZingleAI every day.
            </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stories.map((story, i) => (
                <div key={i} className="group bg-[#0A0A0A] border border-white/10 hover:border-white/20 p-8 md:p-10 rounded-xl transition-all duration-300 flex flex-col justify-between h-full hover:bg-[#0F0F0F]">
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <span className="text-xl">{story.logo}</span>
                            <span className="font-bold tracking-tight">{story.company}</span>
                        </div>
                        <p className="text-xl md:text-2xl font-serif leading-relaxed text-gray-200 mb-8">
                            "{story.quote}"
                        </p>
                    </div>

                    <div className="flex items-center gap-4 pt-8 border-t border-white/5 mt-auto">
                         <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                            <span className="font-bold text-xs">{story.author[0]}</span>
                         </div>
                         <div>
                             <div className="font-medium text-sm text-white">{story.author}</div>
                             <div className="text-[10px] font-mono text-secondary uppercase tracking-wider mt-0.5">{story.role}</div>
                         </div>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default CustomerStories;
