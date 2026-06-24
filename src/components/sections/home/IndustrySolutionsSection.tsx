import { useState } from 'react';
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
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, fadeUp, slideInLeft } from '../../../utils/animations';

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
    <Section className="bg-white border-t border-warm-sage overflow-hidden py-16">
      <Container>
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <div className="inline-flex items-center rounded-md bg-warm-sand px-4 py-1.5 font-heading text-sm font-bold text-stone-600 ring-1 ring-inset ring-warm-sage mb-6">
            Industry Solutions
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl mb-6 leading-[1.1] max-w-3xl">
            Built for Businesses Across Industries
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed max-w-2xl">
            Purpose-built solutions for different business types, all powered by the same connected platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          
          {/* Left Column: Featured Panel */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
             <motion.div 
               variants={slideInLeft}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-10%" }}
               className="group relative flex flex-col rounded-[2.5rem] bg-white ring-1 ring-warm-sage p-8 sm:p-10 shadow-sm overflow-hidden transition-colors duration-500"
             >
               <AnimatePresence mode="wait">
                 <motion.div 
                   key={activeIndustry.id} 
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   transition={{ duration: 0.3 }}
                   className="relative z-10 flex flex-col h-full"
                 >
                 <div className="mb-8">
                   <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-warm-sand text-indigo-600 ring-1 ring-inset ring-warm-sage mb-6 shadow-sm">
                     <ActiveIcon className="h-8 w-8" strokeWidth={1.5} />
                   </div>
                   <h3 className="text-3xl font-bold text-stone-900 mb-4">
                     {activeIndustry.name}
                   </h3>
                   <p className="text-stone-600 text-lg leading-relaxed mb-8">
                     {activeIndustry.description}
                   </p>
                 </div>

                 <div className="mb-10 flex-grow">
                   <p className="text-stone-500 text-sm font-bold uppercase tracking-wider mb-5">
                     Manage:
                   </p>
                   <ul className="space-y-4">
                     {activeIndustry.useCases.map((useCase, idx) => (
                       <li key={idx} className="flex items-center gap-3 text-stone-700 font-medium">
                         <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-warm-sand">
                           <CheckCircle2 className="h-4 w-4 text-indigo-600" />
                         </div>
                         <span>{useCase}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
                 
                 <a 
                   href={`#${activeIndustry.id}`}
                   className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-md bg-indigo-600 px-6 py-4 text-sm font-bold text-white hover:bg-indigo-500 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-white shadow-sm"
                 >
                   Explore Solution <ArrowRight className="h-4 w-4" />
                 </a>
                 </motion.div>
               </AnimatePresence>
             </motion.div>
          </div>

          {/* Right Column: Industry Selector Grid */}
          <div className="lg:col-span-7">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
            >
              {industries.map((ind, idx) => {
                const Icon = ind.icon;
                const isActive = activeIndex === idx;
                
                return (
                  <motion.button 
                    key={ind.id}
                    variants={fadeUp}
                    onClick={() => setActiveIndex(idx)}
                    className={`group relative flex items-center justify-between rounded-lg p-4 text-left transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 ${
                      isActive 
                        ? 'bg-warm-cream ring-1 ring-stone-300 shadow-sm' 
                        : 'bg-white ring-1 ring-warm-sage hover:ring-1 hover:ring-stone-300 hover:bg-warm-cream shadow-sm'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-md transition-colors duration-200 bg-warm-sand ${
                        isActive 
                          ? 'text-indigo-600 shadow-sm' 
                          : 'text-stone-500 group-hover:text-indigo-600'
                      }`}>
                        <Icon className="h-6 w-6" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className={`text-base font-bold transition-colors ${
                          isActive ? 'text-stone-900' : 'text-stone-600 group-hover:text-stone-900'
                        }`}>
                          {ind.name}
                        </h4>
                      </div>
                    </div>
                    <ChevronRight className={`h-5 w-5 shrink-0 transition-opacity ${
                      isActive 
                        ? 'text-indigo-600 opacity-100' 
                        : 'text-stone-400 opacity-0 group-hover:opacity-100 group-hover:text-indigo-400'
                    }`} />
                  </motion.button>
                );
              })}
            </motion.div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
