import React from 'react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { SectionHeading } from '../../ui/SectionHeading';
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

const getBadgeStyles = (badge: string | undefined) => {
  if (!badge) return null;
  
  const baseClasses = "inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider";
  
  switch (badge.toLowerCase()) {
    case 'popular':
      return `${baseClasses} bg-indigo-600 text-white shadow-sm`;
    case 'essential':
      return `${baseClasses} bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-600/20`;
    case 'core':
      return `${baseClasses} bg-slate-100 text-slate-700 ring-1 ring-inset ring-slate-600/20`;
    case 'coming soon':
      return `${baseClasses} bg-gray-50 text-gray-500 ring-1 ring-inset ring-gray-500/10`;
    case 'available':
      return `${baseClasses} bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20`;
    default:
      return `${baseClasses} bg-indigo-50 text-indigo-700 ring-1 ring-inset ring-indigo-600/20`;
  }
};

const getActionText = (badge: string | undefined) => {
  if (badge?.toLowerCase() === 'coming soon') return 'Get Notified';
  return 'Learn More';
};

export default function FeaturedAppsSection() {
  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="text-center mx-auto mb-6 flex justify-center">
          <span className="inline-flex items-center rounded-full bg-indigo-100/80 px-5 py-1.5 font-heading text-xl font-bold text-indigo-700 ring-1 ring-inset ring-indigo-600/20">
            App Marketplace
          </span>
        </div>
        
        <SectionHeading 
          title="Choose the apps your business needs"
          subtitle="Everything your business needs in one connected platform. Start with what you need, and add more as you grow."
        />
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {apps.map((app) => {
            const Theme = getAppTheme(app.id);
            const Icon = Theme.icon;
            
            return (
              <a
                key={app.id}
                href={`/apps/${app.id}`}
                className="group relative flex h-full flex-col rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-2 hover:ring-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                aria-label={`Learn more about ${app.name} app`}
              >
                {/* Top: Icon & Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 shadow-sm ${Theme.classes}`}>
                    <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  {app.badge && (
                    <span className={getBadgeStyles(app.badge) || ''}>
                      {app.badge}
                    </span>
                  )}
                </div>
                
                {/* Middle: Name & Description */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-200">
                  {app.name}
                </h3>
                
                <p className="text-sm text-gray-600 flex-grow mb-6 leading-relaxed">
                  {app.description}
                </p>

                {/* Bottom: Action row */}
                <div className="flex items-center text-sm font-semibold text-indigo-600 mt-auto pt-4 border-t border-gray-100 transition-colors duration-300 group-hover:text-indigo-700">
                  {getActionText(app.badge)}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </a>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
