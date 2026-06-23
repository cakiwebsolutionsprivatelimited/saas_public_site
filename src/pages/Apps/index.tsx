import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../components/ui/Container';
import { Section } from '../../components/ui/Section';
import { apps } from '../../data/apps';
import { categories } from '../../data/categories';
import { CTA_ROUTES } from '../../constants';
import { 
  ArrowRight, 
  ArrowDown, 
  CheckCircle2, 
  TrendingUp, 
  Layers,
  Activity,
  Users,
  Briefcase,
  LayoutGrid,
  XCircle
} from 'lucide-react';

export default function Apps() {
  const workflows = [
    {
      title: 'Lead to Cash',
      outcome: 'Turn leads into revenue faster.',
      description: 'A complete workflow from first enquiry to final payment. Connect your sales and finance teams to eliminate manual data entry.',
      apps: [
        { id: 'crm', label: 'Customer Enquiry' },
        { id: 'sales', label: 'Quotation' },
        { id: 'billing', label: 'Invoice' },
        { id: 'inventory', label: 'Delivery' },
        { id: 'accounts', label: 'Payment' }
      ]
    },
    {
      title: 'Hire to Retire',
      outcome: 'Build a high-performing workforce.',
      description: 'A unified process from recruitment to offboarding. Streamline the employee journey and ensure accurate payroll.',
      apps: [
        { id: 'hrms', label: 'Recruitment' },
        { id: 'hrms', label: 'Onboarding' },
        { id: 'hrms', label: 'Management' },
        { id: 'payroll', label: 'Payroll' }
      ]
    },
    {
      title: 'Service Delivery',
      outcome: 'Deliver projects on time and on budget.',
      description: 'A complete workflow from project kickoff to client support. Coordinate teams and resolve issues from a single system.',
      apps: [
        { id: 'projects', label: 'Project Planning' },
        { id: 'projects', label: 'Task Execution' },
        { id: 'helpdesk', label: 'Client Support' }
      ]
    }
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* 1. Apps Hero Section */}
      <Section className="relative overflow-hidden bg-warm-cream pt-24 pb-20 lg:pt-32 lg:pb-32">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <Container className="relative z-10">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <div className="inline-flex items-center rounded-md border border-warm-sage bg-white px-4 py-1.5 text-sm font-bold text-stone-600 shadow-sm mb-8">
              <span className="mr-2 flex h-2 w-2 rounded-full bg-indigo-600"></span>
              One Platform For Everything
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl lg:text-7xl mb-8 leading-[1.1]">
              Connect Every Department. <br className="hidden md:block"/>
              <span className="text-indigo-600">Eliminate Operational Chaos.</span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-stone-600 font-medium leading-relaxed">
              Run your entire business from a single, connected platform. Gain complete visibility, improve operational efficiency, and accelerate growth without the friction of disconnected systems.
            </p>
          </div>

          {/* Ecosystem UI Visualization */}
          <div className="max-w-5xl mx-auto bg-white border border-warm-sage rounded-xl p-8 md:p-12 shadow-sm mb-16 hidden sm:block relative">
             <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 relative z-10">
               {categories.map((cat, idx) => (
                 <React.Fragment key={cat.id}>
                   <div className="flex flex-col items-center group">
                     <div className="h-20 w-20 rounded-lg bg-white border border-warm-sage flex items-center justify-center text-indigo-600 mb-4 shadow-sm group-hover:border-indigo-400 group-hover:shadow-md group-hover:-translate-y-1 transition-all">
                       {cat.id === 'sales-crm' && <Users className="h-8 w-8" />}
                       {cat.id === 'finance' && <TrendingUp className="h-8 w-8" />}
                       {cat.id === 'operations' && <Activity className="h-8 w-8" />}
                       {cat.id === 'people' && <Briefcase className="h-8 w-8" />}
                       {cat.id === 'growth' && <LayoutGrid className="h-8 w-8" />}
                     </div>
                     <span className="font-bold text-stone-900 text-sm text-center tracking-wide">{cat.name}</span>
                   </div>
                   {idx < categories.length - 1 && (
                     <div className="text-warm-sage flex-grow flex justify-center items-center">
                       <ArrowRight className="h-6 w-6" />
                     </div>
                   )}
                 </React.Fragment>
               ))}
             </div>
             {/* Subtle connecting background line behind the icons */}
             <div className="absolute top-1/2 left-16 right-16 h-px bg-warm-sage z-0 -translate-y-4"></div>
          </div>
          
          <div className="flex justify-center">
            <Link
              to={CTA_ROUTES.requestDemo}
              className="inline-flex h-14 items-center justify-center rounded-md bg-indigo-600 px-10 text-lg font-bold text-white shadow-sm transition-all hover:bg-indigo-500 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 focus-visible:ring-offset-warm-cream"
            >
              Request Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* 1.5. The Business Argument */}
      <Section className="bg-white border-t border-warm-sage py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center mb-12 lg:mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-stone-900 mb-6 leading-tight">
              Why Businesses Replace Disconnected Systems
            </h2>
            <p className="text-xl lg:text-2xl text-stone-600 font-medium leading-relaxed">
              Most growing businesses struggle with disconnected software, duplicate data entry, and limited visibility across departments.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
              
              {/* Left Column: Problems */}
              <div className="flex-1 w-full">
                <h3 className="text-2xl font-bold text-stone-900 mb-10 pb-4 border-b-2 border-stone-100">
                  Common Challenges
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <XCircle className="h-6 w-6 text-red-500 mr-5 shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-stone-600 font-medium text-lg lg:text-xl">Data scattered across multiple tools</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-6 w-6 text-red-500 mr-5 shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-stone-600 font-medium text-lg lg:text-xl">Re-entering the same information repeatedly</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-6 w-6 text-red-500 mr-5 shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-stone-600 font-medium text-lg lg:text-xl">Lack of visibility between departments</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-6 w-6 text-red-500 mr-5 shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-stone-600 font-medium text-lg lg:text-xl">Manual reporting and reconciliation</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-6 w-6 text-red-500 mr-5 shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-stone-600 font-medium text-lg lg:text-xl">Operational bottlenecks</span>
                  </li>
                </ul>
              </div>

              {/* Right Column: Benefits */}
              <div className="flex-1 w-full">
                <h3 className="text-2xl font-bold text-indigo-900 mb-10 pb-4 border-b-2 border-indigo-100">
                  Connected Platform Benefits
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600 mr-5 shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-stone-900 font-bold text-lg lg:text-xl">One source of truth</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600 mr-5 shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-stone-900 font-bold text-lg lg:text-xl">Shared data across departments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600 mr-5 shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-stone-900 font-bold text-lg lg:text-xl">Faster decision making</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600 mr-5 shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-stone-900 font-bold text-lg lg:text-xl">Reduced manual work</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600 mr-5 shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-stone-900 font-bold text-lg lg:text-xl">Better operational visibility</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Message */}
            <div className="mt-20 pt-16 border-t border-warm-sage text-center">
              <p className="text-2xl lg:text-3xl text-stone-900 font-extrabold leading-tight">
                When Sales, Finance, Operations, HR, and Support work from the same platform, businesses operate faster and with greater visibility.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Category-Driven Apps Directory (40% cards, 60% storytelling) */}
      <Section className="bg-white py-16 lg:py-20">
        <Container>
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-stone-900 mb-6 leading-tight">
              Solve Real Business <br />Challenges.
            </h2>
            <p className="text-xl text-stone-600 font-medium leading-relaxed">
              Every department connected. Every process streamlined. Achieve your business outcomes faster with a platform that breaks down operational silos.
            </p>
          </div>

          <div className="space-y-32">
            {categories.map((category, index) => {
              const categoryApps = apps.filter(a => a.category === category.id);
              // Alternate layout: even indices text left, odd text right
              const isEven = index % 2 === 0;

              return (
                <div key={category.id} className="flex flex-col lg:flex-row gap-12 items-center">
                  
                  {/* Storytelling Side (60% visually) */}
                  <div className={`lg:w-1/2 ${isEven ? 'lg:pr-12' : 'lg:order-last lg:pl-12'}`}>
                    <div className="inline-flex items-center rounded-md bg-indigo-50 px-4 py-1.5 text-sm font-bold text-indigo-600 mb-8 border border-indigo-100">
                      Business Outcome
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-extrabold text-stone-900 mb-6 leading-tight">
                      {category.id === 'sales-crm' && 'Convert More Leads Into Customers'}
                      {category.id === 'finance' && 'Get Complete Financial Visibility'}
                      {category.id === 'operations' && 'Eliminate Operational Bottlenecks'}
                      {category.id === 'people' && 'Build a High-Performing Team'}
                      {category.id === 'growth' && 'Accelerate Market Growth'}
                    </h3>
                    <p className="text-lg text-stone-600 mb-6 font-medium leading-relaxed">
                      {category.id === 'sales-crm' && 'Unify your sales pipeline, close deals faster, and build stronger customer relationships.'}
                      {category.id === 'finance' && 'Take control of your cash flow, automate billing processes, and ensure accurate accounting.'}
                      {category.id === 'operations' && 'Connect inventory, projects, and support to deliver consistently on your promises.'}
                      {category.id === 'people' && 'Manage the entire employee lifecycle smoothly from recruitment through to payroll.'}
                      {category.id === 'growth' && 'Expand your reach, engage audiences, and drive revenue with integrated commerce tools.'}
                    </p>
                    <div className="text-sm font-bold text-stone-500 uppercase tracking-widest mb-4">
                      Supported By {category.name}
                    </div>
                    <ul className="space-y-5">
                      {categoryApps.slice(0, 3).map(app => (
                        <li key={app.id} className="flex items-start">
                          <CheckCircle2 className="h-6 w-6 text-indigo-600 mr-4 shrink-0 mt-0.5" />
                          <span className="text-stone-700 font-bold text-lg">{app.shortDescription}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Structured Cards Side (40% visually) */}
                  <div className="lg:w-1/2 w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {categoryApps.map(app => {
                        const Icon = app.icon;
                        return (
                          <div 
                            key={app.id}
                            className="bg-white border border-warm-sage rounded-lg p-6 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all group"
                          >
                            <div className="flex items-center mb-6">
                              <div className="h-12 w-12 rounded-md bg-warm-sand flex items-center justify-center text-indigo-600 mr-4 group-hover:-translate-y-1 transition-transform">
                                {Icon && <Icon className="h-6 w-6" />}
                              </div>
                              <h4 className="text-xl font-bold text-stone-900">{app.name}</h4>
                            </div>
                            <Link to={`/apps/${app.slug}`} className="text-sm font-bold text-indigo-600 group-hover:text-indigo-700 flex items-center">
                              Explore module <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 3. Workflows (Business Journeys) */}
      <Section className="bg-warm-cream border-t border-warm-sage py-16 lg:py-20 overflow-hidden relative">
        <Container>
          <div className="max-w-4xl mb-16 text-center mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 mb-8 leading-tight">
              End-to-End Business Journeys
            </h2>
            <p className="text-xl lg:text-2xl text-stone-600 font-medium leading-relaxed">
              Data flows seamlessly across departments, eliminating manual entry and breaking down silos. Here's how our apps work together to automate your core processes.
            </p>
          </div>
          
          <div className="space-y-20 max-w-7xl mx-auto">
            {workflows.map((workflow, idx) => (
              <div key={idx} className="bg-white border border-warm-sage rounded-xl p-10 lg:p-16 shadow-sm hover:shadow-md transition-shadow flex flex-col lg:flex-row gap-12 items-center">
                
                {/* 40% Content Side */}
                <div className="w-full lg:w-[40%] flex flex-col justify-center">
                  <h3 className="text-4xl md:text-5xl font-extrabold text-stone-900 mb-8 leading-tight">
                    {workflow.title}
                  </h3>
                  <div className="inline-block bg-indigo-50 border border-indigo-100 rounded-lg p-5 mb-8">
                    <span className="block text-sm font-bold text-indigo-600 uppercase tracking-widest mb-2">Business Outcome</span>
                    <span className="text-2xl font-bold text-stone-900">{workflow.outcome}</span>
                  </div>
                  <p className="text-stone-600 font-medium text-lg lg:text-xl leading-relaxed">
                    {workflow.description}
                  </p>
                </div>

                {/* 60% Flow Side */}
                <div className="w-full lg:w-[60%] bg-warm-cream rounded-xl border border-warm-sage p-8 lg:p-12 flex items-center justify-center">
                  <div className="flex flex-col md:flex-row items-start justify-between w-full relative">
                    {/* Desktop connector line */}
                    <div className="hidden md:block absolute top-10 left-12 right-12 h-1 bg-warm-sage z-0 rounded-full"></div>
                    
                    {workflow.apps.map((step, appIdx) => {
                      const app = apps.find(a => a.id === step.id);
                      if (!app) return null;
                      const Icon = app.icon;
                      return (
                        <React.Fragment key={app.id}>
                          <div className="flex flex-col items-center relative z-10 flex-1 group mt-4 md:mt-0">
                            <div className="h-20 w-20 rounded-lg bg-white border-2 border-indigo-100 flex items-center justify-center text-indigo-600 shadow-sm mb-6 group-hover:border-indigo-600 group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-300">
                              {Icon && <Icon className="h-8 w-8" />}
                            </div>
                            <div className="flex flex-col items-center text-center px-2">
                              <span className="font-extrabold text-stone-900 text-base lg:text-lg mb-1">{step.label}</span>
                              <span className="text-xs font-bold text-stone-500 uppercase tracking-widest">{app.name}</span>
                            </div>
                          </div>
                          
                          {appIdx < workflow.apps.length - 1 && (
                            <div className="flex items-center justify-center text-indigo-300 md:hidden h-16 z-0 w-full">
                              <ArrowDown className="h-8 w-8" />
                            </div>
                          )}
                          
                          {appIdx < workflow.apps.length - 1 && (
                            <div className="hidden md:flex items-center justify-center text-indigo-300 w-10 pt-6 z-10 relative bg-warm-cream px-1">
                              <ArrowRight className="h-8 w-8" />
                            </div>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Final CTA */}
      <Section className="bg-white border-t border-warm-sage py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl lg:text-7xl mb-8 leading-[1.1]">
              See How Your Business Can <br />
              <span className="text-indigo-600">Run From One Platform.</span>
            </h2>
            
            <p className="mx-auto max-w-2xl text-xl text-stone-600 mb-12 font-medium leading-relaxed">
              Stop switching between disconnected systems. Connect every department, reduce manual data entry, improve operational visibility, and build a solid foundation for growth.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-left border-y border-warm-sage py-12">
              <div>
                <div className="h-12 w-12 rounded-md bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6">
                  <Layers className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-bold text-stone-900 mb-3">Eliminate Disconnected Systems</h4>
                <p className="text-stone-600 font-medium leading-relaxed">Replace your messy web of standalone applications with one unified platform built for business.</p>
              </div>
              <div>
                <div className="h-12 w-12 rounded-md bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6">
                  <Activity className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-bold text-stone-900 mb-3">Reduce Manual Work</h4>
                <p className="text-stone-600 font-medium leading-relaxed">Automate data transfer across departments. If it happens in sales, finance knows instantly.</p>
              </div>
              <div>
                <div className="h-12 w-12 rounded-md bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-bold text-stone-900 mb-3">Support Business Growth</h4>
                <p className="text-stone-600 font-medium leading-relaxed">Make faster, better decisions with real-time visibility into every corner of your operations.</p>
              </div>
            </div>
            
            <Link
              to={CTA_ROUTES.requestDemo}
              className="inline-flex h-16 items-center justify-center rounded-md bg-indigo-600 px-12 text-xl font-bold text-white shadow-sm transition-all hover:bg-indigo-500 hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Request a Demo
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </div>
        </Container>
      </Section>
    </main>
  );
}
