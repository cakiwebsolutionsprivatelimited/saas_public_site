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
    <Section className="relative overflow-hidden bg-background pt-16 pb-20 md:pt-24 lg:pt-32 lg:pb-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-6">
              
              {/* Badge */}
              <div className="inline-flex w-fit items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                <span className="mr-2 flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                The Business Operating System
              </div>
              
              {/* Headline */}
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-[4rem] xl:leading-[1.1]">
                Run your entire business from <span className="font-heading font-bold text-primary">one platform.</span>
              </h1>
              
              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed sm:text-xl max-w-2xl font-medium">
                CRM, Billing, Inventory, HRMS, Projects, Helpdesk, Marketing, Website, and Industry Solutions built for growing businesses.
              </p>
            </div>
            
            {/* CTA Row */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={CTA_ROUTES.requestDemo}
                className="inline-flex h-14 items-center justify-center rounded-md bg-primary px-8 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {SITE_CONFIG.primaryCTA}
              </Link>
              <Link
                to="/apps"
                className="inline-flex h-14 items-center justify-center rounded-md border-2 border-input bg-background px-8 text-lg font-bold text-foreground shadow-sm transition-all hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Explore Apps
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" /> GST-ready
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" /> Multi-branch support
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" /> Modular apps
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" /> Role-based access
              </div>
            </div>
          </div>

          {/* Right Column: Visual Ecosystem */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            
            {/* Mobile Ecosystem View (< lg) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:hidden">
               {/* Core Card */}
               <div className="col-span-2 sm:col-span-3 flex flex-col items-center justify-center p-6 rounded-xl border-2 border-primary bg-primary/5 shadow-inner">
                 <Layers className="h-10 w-10 text-primary mb-3" />
                 <span className="font-bold text-xl">{SITE_CONFIG.name} Core</span>
                 <span className="text-sm text-muted-foreground">Centralized Database</span>
               </div>
               
               {/* App Cards */}
               <div className="flex items-center gap-2 rounded-xl border border-border bg-card p-3 shadow-sm">
                 <Users className="h-5 w-5 text-blue-600"/> <span className="font-semibold text-sm">CRM</span>
               </div>
               <div className="flex items-center gap-2 rounded-xl border border-border bg-card p-3 shadow-sm">
                 <Receipt className="h-5 w-5 text-emerald-600"/> <span className="font-semibold text-sm">Billing</span>
               </div>
               <div className="flex items-center gap-2 rounded-xl border border-border bg-card p-3 shadow-sm">
                 <Package className="h-5 w-5 text-orange-600"/> <span className="font-semibold text-sm">Inventory</span>
               </div>
               <div className="flex items-center gap-2 rounded-xl border border-border bg-card p-3 shadow-sm">
                 <Briefcase className="h-5 w-5 text-purple-600"/> <span className="font-semibold text-sm">HRMS</span>
               </div>
               <div className="flex items-center gap-2 rounded-xl border border-border bg-card p-3 shadow-sm">
                 <LayoutList className="h-5 w-5 text-indigo-600"/> <span className="font-semibold text-sm">Projects</span>
               </div>
               <div className="flex items-center gap-2 rounded-xl border border-border bg-card p-3 shadow-sm">
                 <Headset className="h-5 w-5 text-rose-600"/> <span className="font-semibold text-sm">Helpdesk</span>
               </div>
            </div>

            {/* Desktop Ecosystem View (lg and up) */}
            <div className="hidden lg:flex relative w-full h-[600px] items-center justify-center">
               
               {/* Background glows */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>

               {/* Center Core */}
               <div className="relative z-20 flex flex-col items-center justify-center w-48 h-48 rounded-xl border-2 border-primary bg-background shadow-2xl shadow-primary/20">
                  <Layers className="h-12 w-12 text-primary mb-4" />
                  <span className="font-extrabold text-2xl text-foreground">{SITE_CONFIG.name}</span>
                  <span className="text-sm text-primary font-bold tracking-wide uppercase mt-1">Core Platform</span>
               </div>

               {/* Orbiting App Cards */}
               
               {/* CRM */}
               <div className="absolute top-[8%] left-[8%] z-30 flex w-48 items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl hover:border-primary/50">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600">
                    <Users className="h-6 w-6"/>
                  </div>
                  <div>
                    <div className="font-bold text-foreground">CRM</div>
                    <div className="text-xs font-medium text-muted-foreground">Sales & Leads</div>
                  </div>
               </div>
               
               {/* Billing */}
               <div className="absolute top-[12%] right-[2%] z-30 flex w-48 items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl hover:border-primary/50">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                    <Receipt className="h-6 w-6"/>
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Billing</div>
                    <div className="text-xs font-medium text-muted-foreground">Invoicing</div>
                  </div>
               </div>

               {/* Inventory */}
               <div className="absolute top-[45%] left-0 z-30 flex w-48 items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl hover:border-primary/50">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600">
                    <Package className="h-6 w-6"/>
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Inventory</div>
                    <div className="text-xs font-medium text-muted-foreground">Stock Control</div>
                  </div>
               </div>

               {/* HRMS */}
               <div className="absolute top-[45%] right-0 z-30 flex w-48 items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl hover:border-primary/50">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600">
                    <Briefcase className="h-6 w-6"/>
                  </div>
                  <div>
                    <div className="font-bold text-foreground">HRMS</div>
                    <div className="text-xs font-medium text-muted-foreground">Employees</div>
                  </div>
               </div>

               {/* Projects */}
               <div className="absolute bottom-[12%] left-[8%] z-30 flex w-48 items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl hover:border-primary/50">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600">
                    <LayoutList className="h-6 w-6"/>
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Projects</div>
                    <div className="text-xs font-medium text-muted-foreground">Tasks & Time</div>
                  </div>
               </div>

               {/* Helpdesk */}
               <div className="absolute bottom-[8%] right-[8%] z-30 flex w-48 items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl hover:border-primary/50">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/10 text-rose-600">
                    <Headset className="h-6 w-6"/>
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Helpdesk</div>
                    <div className="text-xs font-medium text-muted-foreground">Support</div>
                  </div>
               </div>

               {/* Marketing */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 rounded-xl border border-border bg-card/80 backdrop-blur-sm p-3 shadow-md opacity-90">
                  <Megaphone className="h-4 w-4 text-muted-foreground"/> 
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Marketing</span>
               </div>

               {/* Website */}
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 rounded-xl border border-border bg-card/80 backdrop-blur-sm p-3 shadow-md opacity-90">
                  <Globe className="h-4 w-4 text-muted-foreground"/> 
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Website</span>
               </div>
               
               {/* Abstract connecting lines to emphasize platform ecosystem */}
               <svg className="absolute inset-0 h-full w-full z-0 text-primary/10" pointerEvents="none">
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
