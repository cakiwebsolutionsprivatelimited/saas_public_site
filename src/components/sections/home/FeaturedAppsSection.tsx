import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { apps } from '../../../data/apps';
import { 
  Users,
  TrendingUp,
  Receipt,
  Package,
  Wallet,
  Users2,
  Banknote,
  Briefcase,
  LifeBuoy,
  Truck,
  Megaphone,
  Globe,
  LayoutGrid,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../../../utils/animations';

const getAppTheme = (appId: string) => {
  switch (appId) {
    case 'crm': return { icon: Users, classes: 'text-indigo-600 bg-indigo-50 group-hover:bg-indigo-600 group-hover:text-white' };
    case 'sales': return { icon: TrendingUp, classes: 'text-emerald-600 bg-emerald-50 group-hover:bg-emerald-600 group-hover:text-white' };
    case 'billing': return { icon: Receipt, classes: 'text-blue-600 bg-blue-50 group-hover:bg-blue-600 group-hover:text-white' };
    case 'inventory': return { icon: Package, classes: 'text-amber-600 bg-amber-50 group-hover:bg-amber-600 group-hover:text-white' };
    case 'accounts': return { icon: Wallet, classes: 'text-cyan-600 bg-cyan-50 group-hover:bg-cyan-600 group-hover:text-white' };
    case 'hrms': return { icon: Users2, classes: 'text-rose-600 bg-rose-50 group-hover:bg-rose-600 group-hover:text-white' };
    case 'payroll': return { icon: Banknote, classes: 'text-green-600 bg-green-50 group-hover:bg-green-600 group-hover:text-white' };
    case 'projects': return { icon: Briefcase, classes: 'text-violet-600 bg-violet-50 group-hover:bg-violet-600 group-hover:text-white' };
    case 'helpdesk': return { icon: LifeBuoy, classes: 'text-orange-600 bg-orange-50 group-hover:bg-orange-600 group-hover:text-white' };
    case 'field-service': return { icon: Truck, classes: 'text-slate-600 bg-slate-50 group-hover:bg-slate-600 group-hover:text-white' };
    case 'marketing': return { icon: Megaphone, classes: 'text-pink-600 bg-pink-50 group-hover:bg-pink-600 group-hover:text-white' };
    case 'website': return { icon: Globe, classes: 'text-sky-600 bg-sky-50 group-hover:bg-sky-600 group-hover:text-white' };
    default: return { icon: LayoutGrid, classes: 'text-gray-600 bg-gray-50 group-hover:bg-gray-600 group-hover:text-white' };
  }
};

const CATEGORIES = [
  {
    id: 'sales-crm',
    title: 'Sales & CRM',
    icon: Users,
    color: 'text-indigo-600 bg-indigo-50 ring-1 ring-inset ring-indigo-600/20',
    appIds: ['crm', 'sales']
  },
  {
    id: 'finance',
    title: 'Finance',
    icon: Wallet,
    color: 'text-blue-600 bg-blue-50 ring-1 ring-inset ring-blue-600/20',
    appIds: ['billing', 'accounts']
  },
  {
    id: 'operations',
    title: 'Operations',
    icon: Package,
    color: 'text-amber-600 bg-amber-50 ring-1 ring-inset ring-amber-600/20',
    appIds: ['inventory', 'projects', 'field-service', 'helpdesk']
  },
  {
    id: 'people',
    title: 'People',
    icon: Users2,
    color: 'text-rose-600 bg-rose-50 ring-1 ring-inset ring-rose-600/20',
    appIds: ['hrms', 'payroll']
  },
  {
    id: 'growth',
    title: 'Growth',
    icon: Megaphone,
    color: 'text-emerald-600 bg-emerald-50 ring-1 ring-inset ring-emerald-600/20',
    appIds: ['marketing', 'website']
  }
];

export default function FeaturedAppsSection() {
  return (
    <Section className="bg-slate-50 py-16 sm:py-20">
      <Container>
        {/* Section Header */}
        <motion.div 
          className="text-center mx-auto mb-16 lg:mb-16 max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={fadeUp}
        >
          <div className="inline-flex items-center rounded-md bg-indigo-100/80 px-4 py-1.5 font-heading text-sm font-bold text-indigo-800 ring-1 ring-inset ring-indigo-600/20 mb-6">
            App Ecosystem
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl mb-6">
            A Platform That Grows With You
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            Everything your business needs seamlessly connected in one ecosystem. Start with what you need, and add more later.
          </p>
        </motion.div>
        
        {/* Ecosystem Masonry Grid */}
        <motion.div 
          className="columns-1 md:columns-2 lg:columns-3 gap-8 w-full"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          {CATEGORIES.map((category) => {
            const categoryApps = category.appIds.map(id => apps.find(a => a.id === id)).filter(Boolean);
            const CategoryIcon = category.icon;
            
            return (
              <motion.div 
                key={category.id} 
                variants={fadeUp}
                className="break-inside-avoid-column mb-8 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-lg ${category.color}`}>
                    <CategoryIcon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {category.title}
                  </h3>
                </div>
                
                {/* Apps List */}
                <div className="space-y-3">
                  {categoryApps.map(app => {
                    if (!app) return null;
                    const Theme = getAppTheme(app.id);
                    const AppIcon = Theme.icon;
                    
                    return (
                      <a 
                        key={app.id}
                        href={`/apps/${app.id}`}
                        className="group flex items-start gap-4 rounded-lg p-4 transition-all hover:bg-slate-50 border border-transparent hover:border-slate-200 hover:shadow-sm"
                      >
                        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-md transition-transform duration-300 group-hover:scale-110 shadow-sm ${Theme.classes}`}>
                          <AppIcon className="h-6 w-6" strokeWidth={1.5} />
                        </div>
                        <div className="flex-grow pt-0.5">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h4 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                              {app.name}
                            </h4>
                            {app.badge && (
                              <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600 ring-1 ring-inset ring-slate-200">
                                {app.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                            {app.description}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
                
                {/* Explore Category Link */}
                <div className="mt-6 pt-6 border-t border-slate-100 flex justify-end">
                  <a href={`/categories/${category.id}`} className="group/link inline-flex items-center text-sm font-bold text-indigo-600 hover:text-indigo-500 transition-colors">
                    Explore {category.title}
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
