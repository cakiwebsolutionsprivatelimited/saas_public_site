import React, { useState } from 'react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { 
  Stethoscope,
  Dumbbell,
  PackageOpen,
  Wrench,
  Building2,
  Laptop,
  GraduationCap,
  Factory,
  ArrowRight,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

const industries = [
  {
    id: 'distributor',
    name: 'Distributor & Wholesale',
    description: 'Manage inventory, quotations, sales orders, and customer relationships.',
    icon: PackageOpen,
    useCases: ['Inventory', 'Quotations', 'Sales Orders', 'Customer Accounts', 'Billing']
  },
  {
    id: 'pharmacy',
    name: 'Pharmacy & Clinic',
    description: 'Manage patients, billing, inventory, appointments, and operations.',
    icon: Stethoscope,
    useCases: ['Patients', 'Billing', 'Inventory', 'Appointments', 'Operations']
  },
  {
    id: 'gym',
    name: 'Gym & Fitness Center',
    description: 'Track memberships, attendance, renewals, and payments.',
    icon: Dumbbell,
    useCases: ['Memberships', 'Attendance', 'Renewals', 'Payments']
  },
  {
    id: 'service',
    name: 'Service & Repair Business',
    description: 'Handle service requests, technicians, invoices, and customer support.',
    icon: Wrench,
    useCases: ['Service Requests', 'Technicians', 'Invoices', 'Customer Support']
  },
  {
    id: 'real-estate',
    name: 'Real Estate Agency',
    description: 'Track leads, properties, site visits, and customer communications.',
    icon: Building2,
    useCases: ['Leads', 'Properties', 'Site Visits', 'Customer Communications']
  },
  {
    id: 'it',
    name: 'IT Service Company',
    description: 'Manage projects, support tickets, teams, and client engagements.',
    icon: Laptop,
    useCases: ['Projects', 'Support Tickets', 'Teams', 'Client Engagements']
  },
  {
    id: 'education',
    name: 'Coaching & Education Center',
    description: 'Manage students, admissions, fees, schedules, and communication.',
    icon: GraduationCap,
    useCases: ['Students', 'Admissions', 'Fees', 'Schedules', 'Communication']
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing Business',
    description: 'Track production, inventory, procurement, and operations.',
    icon: Factory,
    useCases: ['Production', 'Inventory', 'Procurement', 'Operations']
  }
];

export default function IndustrySolutionsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndustry = industries[activeIndex];
  const ActiveIcon = activeIndustry.icon;

  return (
    <Section className="bg-slate-50 border-t border-slate-200 overflow-hidden py-24">
      <Container>
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <div className="inline-flex items-center rounded-full bg-indigo-100/80 px-4 py-1.5 font-heading text-sm font-bold text-indigo-800 ring-1 ring-inset ring-indigo-600/20 mb-6">
            Industry Solutions
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl mb-6 leading-[1.1] max-w-3xl">
            Built for Businesses Across Industries
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            Purpose-built solutions for different business types, all powered by the same connected platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Featured Panel */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
             <div className="group relative flex flex-col rounded-[2.5rem] bg-slate-900 p-8 sm:p-10 shadow-2xl overflow-hidden transition-all duration-500">
               {/* Background accent */}
               <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-indigo-500 blur-[100px] opacity-20 pointer-events-none" />
               <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-cyan-500 blur-[100px] opacity-20 pointer-events-none" />
               
               <div key={activeIndustry.id} className="relative z-10 flex flex-col h-full animate-in fade-in slide-in-from-bottom-2 duration-500">
                 <div className="mb-8">
                   <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-400 ring-1 ring-inset ring-indigo-500/30 mb-6 shadow-sm">
                     <ActiveIcon className="h-8 w-8" strokeWidth={1.5} />
                   </div>
                   <h3 className="text-3xl font-bold text-white mb-4">
                     {activeIndustry.name}
                   </h3>
                   <p className="text-slate-300 text-lg leading-relaxed mb-8">
                     {activeIndustry.description}
                   </p>
                 </div>

                 <div className="mb-10 flex-grow">
                   <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-5">
                     Manage:
                   </p>
                   <ul className="space-y-4">
                     {activeIndustry.useCases.map((useCase, idx) => (
                       <li key={idx} className="flex items-center gap-3 text-white font-medium">
                         <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-500/20">
                           <CheckCircle2 className="h-4 w-4 text-indigo-400" />
                         </div>
                         <span>{useCase}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
                 
                 <a 
                   href={`#${activeIndustry.id}`}
                   className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-xl bg-indigo-600 px-6 py-4 text-sm font-bold text-white hover:bg-indigo-500 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900 shadow-md"
                 >
                   Explore Solution <ArrowRight className="h-4 w-4" />
                 </a>
               </div>
             </div>
          </div>

          {/* Right Column: Industry Selector Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {industries.map((ind, idx) => {
                const Icon = ind.icon;
                const isActive = activeIndex === idx;
                
                return (
                  <button 
                    key={ind.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`group relative flex items-center justify-between rounded-2xl p-4 text-left transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 ${
                      isActive 
                        ? 'bg-indigo-50 ring-2 ring-indigo-600 shadow-md' 
                        : 'bg-white ring-1 ring-slate-200 hover:ring-2 hover:ring-indigo-400 hover:bg-slate-50 shadow-sm hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-200 ${
                        isActive 
                          ? 'bg-indigo-600 text-white shadow-sm scale-105' 
                          : 'bg-slate-50 text-slate-600 group-hover:bg-indigo-100 group-hover:text-indigo-600'
                      }`}>
                        <Icon className="h-6 w-6" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className={`text-base font-bold transition-colors ${
                          isActive ? 'text-indigo-900' : 'text-slate-900 group-hover:text-indigo-600'
                        }`}>
                          {ind.name}
                        </h4>
                      </div>
                    </div>
                    <ChevronRight className={`h-5 w-5 shrink-0 transition-transform ${
                      isActive 
                        ? 'text-indigo-600 translate-x-0 opacity-100' 
                        : 'text-slate-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-indigo-400'
                    }`} />
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
