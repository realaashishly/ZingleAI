import React from 'react';
import { BatteryWidget, SpendingWidget, GoalWidget, GlobalWidget, SecurityWidget, TerminalWidget } from './DashboardWidgets';

const FeaturesGrid = () => {
  const features = [
    {
      title: "Limitless Scale",
      description: "Handle millions of events per second without provisioned throughput.",
      widget: <GoalWidget />,
      colSpan: "lg:col-span-1"
    },
    {
      title: "Cost Efficiency",
      description: "Pay only for the compute you use. Zero idle costs for your agents.",
      widget: <SpendingWidget />,
      colSpan: "lg:col-span-1"
    },
    {
      title: "Enterprise Security",
      description: "SOC2 Type II compliant with end-to-end encryption by default.",
      widget: <SecurityWidget />,
      colSpan: "lg:col-span-1"
    },
    {
      title: "Global Edge",
      description: "Deploy your agents to 34 regions instantly with a single command.",
      widget: <GlobalWidget />,
      colSpan: "lg:col-span-1"
    },
    {
      title: "High Availability",
      description: "99.99% uptime SLA with active system health monitoring.",
      widget: <BatteryWidget />,
      colSpan: "lg:col-span-1"
    },
    {
      title: "Developer First",
      description: "Built for developers. CLI, SDKs, and Terraform providers included.",
      widget: <TerminalWidget />,
      colSpan: "lg:col-span-1"
    }
  ];

  return (
    <section className="bg-background border-b border-border py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="mb-20 max-w-2xl">
           <h2 className="font-serif text-5xl md:text-6xl text-white mb-6">
              Everything you need to <br/>
              <span className="text-secondary">scale your agents.</span>
           </h2>
           <p className="text-secondary text-lg font-light leading-relaxed">
              ZingleAI provides the primitives for building production-grade agentic applications.
              Infrastructure that scales with your ambition.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className={`group relative bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300 ${feature.colSpan} flex flex-col`}>
                
                {/* Widget Area - Fixed Height for visual consistency */}
                <div className="h-[280px] w-full border-b border-white/5 bg-[#050505] relative group-hover:bg-[#080808] transition-colors">
                    {/* Inner shadow/highlight overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20"></div>
                    {feature.widget}
                </div>

                {/* Content Area */}
                <div className="p-8 flex-1 flex flex-col justify-between bg-[#0A0A0A] group-hover:bg-[#0F0F0F] transition-colors">
                    <div>
                        <h3 className="font-serif text-2xl text-white mb-3 group-hover:text-accent transition-colors">
                            {feature.title}
                        </h3>
                        <p className="font-sans text-sm text-secondary leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                            {feature.description}
                        </p>
                    </div>
                    
                    {/* Hover Arrow */}
                    <div className="mt-8 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-secondary group-hover:text-white transition-colors opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 duration-300">
                        <span>Learn more</span>
                        <span>→</span>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;