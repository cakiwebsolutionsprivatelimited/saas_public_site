import React from 'react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { 
  Blocks,
  Receipt,
  ShieldCheck,
  Building2,
  Rocket,
  TrendingUp,
  BarChart3,
  Network
} from 'lucide-react';

const benefits = [
  {
    icon: Blocks,
    title: 'Modular Apps',
    description: 'Start with CRM and add apps as your business grows.',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'group-hover:border-indigo-600',
    shadowColor: 'hover:shadow-indigo-500/10'
  },
  {
    icon: Receipt,
    title: 'GST-Ready Billing',
    description: 'Generate invoices and manage compliance with ease.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'group-hover:border-emerald-600',
    shadowColor: 'hover:shadow-emerald-500/10'
  },
  {
    icon: ShieldCheck,
    title: 'Role-Based Access',
    description: 'Give every team member the right level of access.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'group-hover:border-blue-600',
    shadowColor: 'hover:shadow-blue-500/10'
  },
  {
    icon: Building2,
    title: 'Multi-Branch Management',
    description: 'Manage multiple locations from a single platform.',
    color: 'text-violet-600',
    bgColor: 'bg-violet-50',
    borderColor: 'group-hover:border-violet-600',
    shadowColor: 'hover:shadow-violet-500/10'
  },
  {
    icon: Rocket,
    title: 'Fast Onboarding',
    description: 'Get started quickly without lengthy implementation.',
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
    borderColor: 'group-hover:border-rose-600',
    shadowColor: 'hover:shadow-rose-500/10'
  },
  {
    icon: TrendingUp,
    title: 'Affordable Scaling',
    description: 'Only pay for the apps your business actually needs.',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'group-hover:border-amber-600',
    shadowColor: 'hover:shadow-amber-500/10'
  },
  {
    icon: BarChart3,
    title: 'Business Insights',
    description: 'Track performance and make smarter decisions.',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50',
    borderColor: 'group-hover:border-cyan-600',
    shadowColor: 'hover:shadow-cyan-500/10'
  },
  {
    icon: Network,
    title: 'Built for Growth',
    description: 'Designed to support businesses as they expand.',
    color: 'text-fuchsia-600',
    bgColor: 'bg-fuchsia-50',
    borderColor: 'group-hover:border-fuchsia-600',
    shadowColor: 'hover:shadow-fuchsia-500/10'
  }
];

export default function WhyChooseUsSection() {
  return (
    <Section className="bg-white overflow-hidden border-t border-gray-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          {/* Left Column: Content */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
            <div>
              <div className="inline-flex items-center rounded-md bg-slate-100/80 px-4 py-1.5 font-heading text-sm font-bold text-slate-800 ring-1 ring-inset ring-slate-600/20 mb-6">
                Why Businesses Choose Us
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl mb-6 leading-[1.1]">
                Everything Your Team Needs to Grow
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Manage sales, billing, inventory, employees, projects, and customer operations from one connected platform.
              </p>
            </div>
            
            <div className="hidden lg:block pt-8">
               <div className="p-8 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200/60 shadow-sm relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-6 opacity-5">
                   <ShieldCheck className="w-24 h-24" />
                 </div>
                 <div className="relative z-10">
                   <p className="text-slate-700 font-medium italic text-lg leading-relaxed mb-6">
                     "We've consolidated 5 different tools into one unified platform. It's transformed how we operate and saved us countless hours."
                   </p>
                   <div className="flex items-center gap-4">
                     <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-lg ring-4 ring-white shadow-sm">
                       AJ
                     </div>
                     <div>
                       <p className="text-base font-bold text-slate-900">Alex Johnson</p>
                       <p className="text-sm text-slate-500 font-medium">Operations Director</p>
                     </div>
                   </div>
                 </div>
               </div>
            </div>
          </div>

          {/* Right Column: Cards (Staggered Layout) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
              {/* Column 1 */}
              <div className="space-y-6">
                {benefits.filter((_, i) => i % 2 === 0).map((benefit) => {
                  const Icon = benefit.icon;
                  return (
                    <div 
                      key={benefit.title}
                      className={`group relative flex flex-col rounded-xl bg-white p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${benefit.shadowColor} ${benefit.borderColor} hover:border-transparent`}
                    >
                      <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg ${benefit.bgColor} ${benefit.color} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}>
                        <Icon className="h-7 w-7" strokeWidth={1.75} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-slate-900 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-base text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                      
                      {/* Accent Line on hover */}
                      <div className="absolute bottom-0 left-8 right-8 h-[3px] scale-x-0 bg-gradient-to-r from-indigo-500 to-cyan-500 transition-transform duration-500 group-hover:scale-x-100 rounded-t-full origin-left opacity-80" />
                    </div>
                  );
                })}
              </div>

              {/* Column 2 - Staggered */}
              <div className="space-y-6 sm:mt-16">
                {benefits.filter((_, i) => i % 2 !== 0).map((benefit) => {
                  const Icon = benefit.icon;
                  return (
                    <div 
                      key={benefit.title}
                      className={`group relative flex flex-col rounded-xl bg-white p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${benefit.shadowColor} ${benefit.borderColor} hover:border-transparent`}
                    >
                      <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg ${benefit.bgColor} ${benefit.color} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}>
                        <Icon className="h-7 w-7" strokeWidth={1.75} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-slate-900 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-base text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>

                      {/* Accent Line on hover */}
                      <div className="absolute bottom-0 left-8 right-8 h-[3px] scale-x-0 bg-gradient-to-r from-indigo-500 to-cyan-500 transition-transform duration-500 group-hover:scale-x-100 rounded-t-full origin-left opacity-80" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
