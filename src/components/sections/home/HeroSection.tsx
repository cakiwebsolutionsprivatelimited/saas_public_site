import { Link } from 'react-router-dom';
import { Container } from '../../ui/Container';
import { Section } from '../../ui/Section';
import { CTA_ROUTES, SITE_CONFIG } from '../../../constants';
import { 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Users, 
  Receipt, 
  Package, 
  Briefcase, 
  LayoutList, 
  Headset, 
  Megaphone, 
  Globe 
} from 'lucide-react';

export default function HeroSection() {
  return (
    <Section className="relative overflow-hidden bg-white">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-6">
              
              {/* Badge */}
              <div className="inline-flex w-fit items-center rounded-md border border-warm-sage bg-warm-cream px-4 py-1.5 text-sm font-semibold text-stone-700 shadow-sm">
                <span className="mr-2 flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
                The Business Operating System
              </div>
              
              {/* Headline */}
              <h1 className="text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl xl:text-[4rem] xl:leading-[1.1]">
                Connect every department on <span className="font-heading font-bold text-indigo-600">one scalable platform.</span>
              </h1>
              
              {/* Description */}
              <p className="text-lg text-stone-600 leading-relaxed sm:text-xl max-w-2xl font-medium">
                Manage CRM, Billing, Inventory, HRMS, and Projects from a single unified ecosystem built for growing enterprises.
              </p>
            </div>
            
            {/* CTA Row */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={CTA_ROUTES.requestDemo}
                className="inline-flex h-14 items-center justify-center rounded-md bg-indigo-600 px-8 text-lg font-bold text-white shadow-sm transition-all hover:bg-indigo-500 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                {SITE_CONFIG.primaryCTA}
              </Link>
              <Link
                to="/apps"
                className="inline-flex h-14 items-center justify-center rounded-md border border-warm-sage bg-white px-8 text-lg font-bold text-stone-900 shadow-sm transition-all hover:bg-warm-cream hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Explore Apps
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-stone-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-indigo-600" /> GST-ready
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-indigo-600" /> Multi-branch support
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-indigo-600" /> Modular apps
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-indigo-600" /> Role-based access
              </div>
            </div>
          </div>

          {/* Right Column: Visual Ecosystem */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            
            {/* Mobile Ecosystem View (< lg) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:hidden">
               {/* Core Card */}
               <div className="col-span-2 sm:col-span-3 flex flex-col items-center justify-center p-6 rounded-md border border-warm-sage bg-warm-cream shadow-sm">
                 <Layers className="h-10 w-10 text-indigo-600 mb-3" />
                 <span className="font-bold text-xl text-stone-900">{SITE_CONFIG.name} Core</span>
                 <span className="text-sm text-stone-500">Centralized Database</span>
               </div>
               
               {/* App Cards */}
               <div className="flex items-center gap-2 rounded-md border border-warm-sage bg-white p-3 shadow-sm">
                 <Users className="h-5 w-5 text-blue-600"/> <span className="font-semibold text-sm text-stone-700">CRM</span>
               </div>
               <div className="flex items-center gap-2 rounded-md border border-warm-sage bg-white p-3 shadow-sm">
                 <Receipt className="h-5 w-5 text-emerald-600"/> <span className="font-semibold text-sm text-stone-700">Billing</span>
               </div>
               <div className="flex items-center gap-2 rounded-md border border-warm-sage bg-white p-3 shadow-sm">
                 <Package className="h-5 w-5 text-orange-600"/> <span className="font-semibold text-sm text-stone-700">Inventory</span>
               </div>
               <div className="flex items-center gap-2 rounded-md border border-warm-sage bg-white p-3 shadow-sm">
                 <Briefcase className="h-5 w-5 text-purple-600"/> <span className="font-semibold text-sm text-stone-700">HRMS</span>
               </div>
               <div className="flex items-center gap-2 rounded-md border border-warm-sage bg-white p-3 shadow-sm">
                 <LayoutList className="h-5 w-5 text-indigo-600"/> <span className="font-semibold text-sm text-stone-700">Projects</span>
               </div>
               <div className="flex items-center gap-2 rounded-md border border-warm-sage bg-white p-3 shadow-sm">
                 <Headset className="h-5 w-5 text-rose-600"/> <span className="font-semibold text-sm text-stone-700">Helpdesk</span>
               </div>
            </div>

            {/* Desktop Ecosystem View (lg and up) */}
            <div className="hidden lg:flex relative w-full h-[600px] items-center justify-center">
               
               {/* Center Core */}
               <div className="relative z-20 flex flex-col items-center justify-center w-48 h-48 rounded-lg border border-warm-sage bg-white shadow-md">
                  <Layers className="h-12 w-12 text-indigo-600 mb-4" />
                  <span className="font-extrabold text-2xl text-stone-900">{SITE_CONFIG.name}</span>
                  <span className="text-xs font-bold tracking-widest text-stone-500 uppercase mt-1">Core Platform</span>
               </div>

               {/* Orbiting App Cards */}
               
               {/* CRM */}
               <div className="absolute top-[8%] left-[8%] z-30 flex w-48 items-center gap-4 rounded-md border border-warm-sage bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-stone-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-warm-sand text-blue-600">
                    <Users className="h-6 w-6"/>
                  </div>
                  <div>
                    <div className="font-bold text-stone-900">CRM</div>
                    <div className="text-xs font-medium text-stone-500">Sales & Leads</div>
                  </div>
               </div>
               
               {/* Billing */}
               <div className="absolute top-[12%] right-[2%] z-30 flex w-48 items-center gap-4 rounded-md border border-warm-sage bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-stone-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-warm-sand text-emerald-600">
                    <Receipt className="h-6 w-6"/>
                  </div>
                  <div>
                    <div className="font-bold text-stone-900">Billing</div>
                    <div className="text-xs font-medium text-stone-500">Invoicing</div>
                  </div>
               </div>

               {/* Inventory */}
               <div className="absolute top-[45%] left-0 z-30 flex w-48 items-center gap-4 rounded-md border border-warm-sage bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-stone-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-warm-sand text-orange-600">
                    <Package className="h-6 w-6"/>
                  </div>
                  <div>
                    <div className="font-bold text-stone-900">Inventory</div>
                    <div className="text-xs font-medium text-stone-500">Stock Control</div>
                  </div>
               </div>

               {/* HRMS */}
               <div className="absolute top-[45%] right-0 z-30 flex w-48 items-center gap-4 rounded-md border border-warm-sage bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-stone-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-warm-sand text-purple-600">
                    <Briefcase className="h-6 w-6"/>
                  </div>
                  <div>
                    <div className="font-bold text-stone-900">HRMS</div>
                    <div className="text-xs font-medium text-stone-500">Employees</div>
                  </div>
               </div>

               {/* Projects */}
               <div className="absolute bottom-[12%] left-[8%] z-30 flex w-48 items-center gap-4 rounded-md border border-warm-sage bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-stone-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-warm-sand text-indigo-600">
                    <LayoutList className="h-6 w-6"/>
                  </div>
                  <div>
                    <div className="font-bold text-stone-900">Projects</div>
                    <div className="text-xs font-medium text-stone-500">Tasks & Time</div>
                  </div>
               </div>

               {/* Helpdesk */}
               <div className="absolute bottom-[8%] right-[8%] z-30 flex w-48 items-center gap-4 rounded-md border border-warm-sage bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-stone-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-warm-sand text-rose-600">
                    <Headset className="h-6 w-6"/>
                  </div>
                  <div>
                    <div className="font-bold text-stone-900">Helpdesk</div>
                    <div className="text-xs font-medium text-stone-500">Support</div>
                  </div>
               </div>

               {/* Marketing */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 rounded-md border border-warm-sage bg-white/90 backdrop-blur-sm p-3 shadow-sm opacity-90">
                  <Megaphone className="h-4 w-4 text-stone-400"/> 
                  <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">Marketing</span>
               </div>

               {/* Website */}
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 rounded-md border border-warm-sage bg-white/90 backdrop-blur-sm p-3 shadow-sm opacity-90">
                  <Globe className="h-4 w-4 text-stone-400"/> 
                  <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">Website</span>
               </div>
               
               {/* Abstract connecting lines to emphasize platform ecosystem */}
               <svg className="absolute inset-0 h-full w-full z-0 text-warm-sage" pointerEvents="none">
                 <circle cx="50%" cy="50%" r="140" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
                 <circle cx="50%" cy="50%" r="220" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
               </svg>

            </div>
          </div>
          
        </div>
      </Container>
    </Section>
  );
}
