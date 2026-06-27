import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../../components/ui/Container';
import { Section } from '../../components/ui/Section';
import { CTA_ROUTES } from '../../constants';
import { industries } from '../../data/industries';
import { apps } from '../../data/apps';
import { industryExtensions } from '../../data/industry-content';
import { staggerContainer, fadeUp, slideInLeft, slideInRight } from '../../utils/animations';
import { 
  ArrowRight, XCircle,
  Briefcase, ShieldCheck, Factory, Truck, ShoppingCart, Stethoscope, 
  GraduationCap, Wrench, Building, Dumbbell, Plus, Minus, Activity
} from 'lucide-react';
import type { WorkflowStep, IndustryOutcome, IndustryFAQ } from '../../types';

const getIndustryIcon = (id: string, className: string = "h-6 w-6") => {
  switch (id) {
    case 'manufacturing': return <Factory className={className} />;
    case 'distributor': return <Truck className={className} />;
    case 'retail': return <ShoppingCart className={className} />;
    case 'healthcare': return <Stethoscope className={className} />;
    case 'education': return <GraduationCap className={className} />;
    case 'service': return <Wrench className={className} />;
    case 'real-estate': return <Building className={className} />;
    case 'fitness': return <Dumbbell className={className} />;
    default: return <Briefcase className={className} />;
  }
};

export default function Industries() {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>(industries[0].id);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const selectedIndustry = industries.find(i => i.id === selectedIndustryId) || industries[0];
  const details = industryExtensions[selectedIndustry.id] || industryExtensions['manufacturing'];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleSelectIndustry = (id: string) => {
    setSelectedIndustryId(id);
    setOpenFaqIndex(0);
    if (contentRef.current) {
      const y = contentRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-stone-50">
      {/* 1. Hero */}
      <Section className="relative bg-white pt-24 pb-16 lg:pt-32 lg:pb-20 border-b border-warm-sage">
        <Container>
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-stone-900 mb-8 leading-[1.05]">
              We understand your industry's <span className="text-indigo-600 italic font-serif font-medium">operational challenges.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mx-auto max-w-2xl text-xl text-stone-600 font-medium leading-relaxed">
              Before we talk about software, we need to talk about your business. Select your operational profile below to see how we address your specific bottlenecks.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* 2. Industry Navigator (Consultative Selector) */}
      <Section className="bg-warm-cream py-12 border-b border-warm-sage relative z-20">
        <Container>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {industries.map((industry) => {
              const isSelected = selectedIndustryId === industry.id;
              const tags = industryExtensions[industry.id]?.tags || [];
              
              return (
                <motion.button
                  variants={fadeUp}
                  key={industry.id}
                  onClick={() => handleSelectIndustry(industry.id)}
                  className={`text-left p-6 rounded-xl border transition-all ${
                    isSelected 
                      ? 'bg-white border-indigo-600 shadow-md ring-1 ring-indigo-600/20' 
                      : 'bg-white border-warm-sage hover:border-indigo-300 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <div className={`h-10 w-10 rounded-lg flex items-center justify-center mr-4 ${
                      isSelected ? 'bg-indigo-600 text-white' : 'bg-indigo-50 text-indigo-600'
                    }`}>
                      {getIndustryIcon(industry.id, "h-5 w-5")}
                    </div>
                    <h3 className={`text-xl font-bold ${isSelected ? 'text-indigo-900' : 'text-stone-900'}`}>
                      {industry.name}
                    </h3>
                  </div>
                  <p className={`text-sm font-bold tracking-wide ${isSelected ? 'text-indigo-600' : 'text-stone-500'}`}>
                    {tags.join(' • ')}
                  </p>
                </motion.button>
              );
            })}
          </motion.div>
        </Container>
      </Section>

      <div ref={contentRef} className="scroll-mt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndustryId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* 3. Industry Deep Dive (Editorial) */}
            <Section className="bg-white py-24 lg:py-32 border-b border-warm-sage">
              <Container>
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={staggerContainer}
                  className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start max-w-6xl mx-auto"
                >
                  <motion.div variants={slideInLeft} className="lg:w-5/12">
                    <div className="inline-flex items-center rounded text-sm font-bold text-stone-500 uppercase tracking-widest mb-6">
                      {getIndustryIcon(selectedIndustry.id, "h-5 w-5 mr-3 text-stone-400")}
                      Industry Analysis
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-stone-900 mb-8 leading-tight">
                      The high cost of disconnected operations.
                    </h2>
                    <p className="text-xl text-stone-600 font-medium leading-relaxed">
                      {selectedIndustry.description}
                    </p>
                  </motion.div>
                  
                  <motion.div variants={slideInRight} className="lg:w-7/12 w-full">
                    <div className="bg-warm-sand p-10 lg:p-12 rounded-2xl border border-warm-sage">
                      <h3 className="text-2xl font-bold text-stone-900 mb-8 border-b border-warm-sage pb-4">
                        Current Operational Bottlenecks
                      </h3>
                      <ul className="space-y-6">
                        {selectedIndustry.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start group">
                            <XCircle className="h-6 w-6 text-red-500 mr-4 shrink-0 mt-0.5 opacity-80 group-hover:opacity-100 transition-opacity" />
                            <span className="text-lg text-stone-800 font-medium">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              </Container>
            </Section>

            {/* 4. Recommended Solution Stack (Connected presentation) */}
            <Section className="bg-warm-cream py-24 lg:py-32 border-b border-warm-sage">
              <Container>
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeUp}
                  className="max-w-4xl mx-auto text-center mb-20"
                >
                  <h2 className="text-3xl md:text-5xl font-extrabold text-stone-900 mb-6">
                    A Unified Architecture
                  </h2>
                  <p className="text-xl text-stone-600 font-medium leading-relaxed">
                    We don't offer disjointed apps. We provide a deeply integrated operational platform tailored for {selectedIndustry.name.toLowerCase()} workflows.
                  </p>
                </motion.div>

                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={staggerContainer}
                  className="max-w-5xl mx-auto relative"
                >
                  {/* Visual connector line for desktop */}
                  <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-warm-sage -translate-y-1/2 z-0"></div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                    {selectedIndustry.recommendedApps.slice(0, 4).map((appId) => {
                      const appDetails = apps.find(a => a.id === appId);
                      if (!appDetails) return null;
                      const Icon = appDetails.icon;
                      return (
                        <motion.div variants={fadeUp} key={appId} className="bg-white border border-warm-sage rounded-2xl p-8 shadow-sm flex flex-col items-center text-center hover:border-indigo-300 hover:shadow-md transition-all">
                          <div className="h-16 w-16 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 ring-4 ring-white shadow-sm">
                            {Icon && <Icon className="h-8 w-8" strokeWidth={2} />}
                          </div>
                          <h3 className="text-xl font-bold text-stone-900 mb-3">{appDetails.name}</h3>
                          <p className="text-stone-600 font-medium text-sm">
                            Integrated {appDetails.shortDescription.toLowerCase().replace('.', '')}.
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </Container>
            </Section>

            {/* 5. Business Workflow */}
            <Section className="bg-white py-24 lg:py-32 border-b border-warm-sage">
              <Container>
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={staggerContainer}
                  className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start max-w-7xl mx-auto"
                >
                  <motion.div variants={slideInLeft} className="lg:w-1/3 sticky top-32">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-6">
                      The seamless flow of business.
                    </h2>
                    <p className="text-lg text-stone-600 font-medium leading-relaxed">
                      Watch how a single interaction flows perfectly through your organization without a single copy-paste, email handoff, or duplicate data entry.
                    </p>
                  </motion.div>

                  <motion.div variants={slideInRight} className="lg:w-2/3 w-full">
                    <div className="relative border-l-2 border-warm-sage ml-6 pl-10 space-y-16">
                      {details.workflow.map((flow: WorkflowStep, idx: number) => (
                        <div key={idx} className="relative">
                          {/* Dot indicator */}
                          <div className="absolute -left-[49px] top-1 h-6 w-6 rounded-full bg-indigo-600 ring-8 ring-white flex items-center justify-center">
                            <div className="h-2 w-2 bg-white rounded-full"></div>
                          </div>
                          
                          <h4 className="text-3xl font-extrabold text-stone-900 mb-4">{flow.step}</h4>
                          <div className="inline-flex items-center text-sm font-bold text-stone-600 bg-stone-100 px-4 py-2 rounded-lg border border-stone-200">
                            Enabled natively by the <span className="text-indigo-600 ml-1">{flow.app} Module</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </Container>
            </Section>

            {/* 6. Executive Business Dashboard (Replacing Business Outcomes) */}
            <Section className="bg-stone-900 py-24 lg:py-32 border-b border-stone-800 text-white overflow-hidden relative">
              {/* Subtle background decoration */}
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none text-white">
                <Activity className="w-full h-full -mr-40" />
              </div>
              <Container className="relative z-10">
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeUp}
                  className="max-w-4xl mx-auto text-center mb-20"
                >
                  <div className="inline-flex items-center rounded text-sm font-bold text-stone-400 uppercase tracking-widest mb-6">
                    Executive Summary
                  </div>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                    Expected Operational Improvements
                  </h2>
                  <p className="text-xl text-stone-400 font-medium leading-relaxed">
                    Software should fundamentally shift your business metrics. This is what operational clarity delivers to your bottom line.
                  </p>
                </motion.div>

                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={staggerContainer}
                  className="max-w-5xl mx-auto bg-stone-800/50 rounded-2xl border border-stone-700 backdrop-blur-sm overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-700">
                    {details.outcomes.map((outcome: IndustryOutcome, idx: number) => (
                      <motion.div variants={fadeUp} key={idx} className="p-10 flex flex-col items-center text-center hover:bg-stone-800/80 transition-colors">
                        <h3 className="text-2xl font-bold text-white mb-4">{outcome.title}</h3>
                        <div className="w-12 h-1 bg-indigo-500 mb-6 rounded-full"></div>
                        <p className="text-stone-300 font-medium leading-relaxed">
                          {outcome.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </Container>
            </Section>

            {/* 7. Why Businesses Choose Us (Trust section) */}
            <Section className="bg-warm-sand py-24 lg:py-32 border-b border-warm-sage">
              <Container>
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={staggerContainer}
                  className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center"
                >
                  <motion.div variants={slideInLeft} className="lg:w-1/2">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-stone-900 mb-8 leading-tight">
                      Architectural superiority.
                    </h2>
                    <p className="text-xl text-stone-700 font-medium leading-relaxed mb-10">
                      Generalist platforms force you to change your business to fit their software. We provide the specialized capabilities {selectedIndustry.name.toLowerCase()} demands, natively built-in.
                    </p>
                    <Link
                      to={CTA_ROUTES.requestDemo}
                      className="inline-flex items-center font-bold text-indigo-600 hover:text-indigo-800 text-lg group"
                    >
                      Request Demo <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>

                  <motion.div variants={slideInRight} className="lg:w-1/2 w-full">
                    <div className="bg-white rounded-2xl border border-warm-sage p-10 shadow-sm">
                      <ul className="space-y-6">
                        {details.reasons.map((reason: string, idx: number) => (
                          <li key={idx} className="flex items-start">
                            <ShieldCheck className="h-6 w-6 text-emerald-600 mr-4 shrink-0 mt-0.5" strokeWidth={2.5} />
                            <span className="text-lg font-bold text-stone-800">{reason}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              </Container>
            </Section>

            {/* 8. Industry FAQ (Enterprise focus) */}
            <Section className="bg-white py-24 lg:py-32 border-b border-warm-sage">
              <Container>
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeUp}
                  className="max-w-3xl mx-auto"
                >
                  <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-12 text-center">
                    Implementation & Migration FAQ
                  </h2>
                  
                  <div className="space-y-2">
                    {details.faqs.map((faq: IndustryFAQ, idx: number) => (
                      <div 
                        key={idx} 
                        className={`border-b ${openFaqIndex === idx ? 'border-indigo-600' : 'border-warm-sage'} transition-all overflow-hidden`}
                      >
                        <button
                          onClick={() => toggleFaq(idx)}
                          className="w-full text-left py-6 flex items-start justify-between focus:outline-none"
                          aria-expanded={openFaqIndex === idx}
                          aria-controls={`faq-content-${idx}`}
                          id={`faq-button-${idx}`}
                        >
                          <span className={`font-bold text-lg pr-8 ${openFaqIndex === idx ? 'text-indigo-600' : 'text-stone-900'}`}>
                            {faq.q}
                          </span>
                          <span className="flex-shrink-0 ml-4 mt-1 text-stone-400">
                            {openFaqIndex === idx ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                          </span>
                        </button>
                        <AnimatePresence initial={false}>
                          {openFaqIndex === idx && (
                            <motion.div
                              id={`faq-content-${idx}`}
                              role="region"
                              aria-labelledby={`faq-button-${idx}`}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                              <div className="pb-8 text-stone-600 font-medium leading-relaxed pr-12">
                                {faq.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </Container>
            </Section>
          </motion.div>
        </AnimatePresence>

        {/* 9. Final Consultation CTA */}
        <Section className="bg-warm-cream py-24 lg:py-32">
          <Container>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="mx-auto max-w-4xl text-center"
            >
              <h2 className="text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl mb-8 leading-[1.05]">
                Let's Discuss Your Business Operations.
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-stone-700 mb-12 font-medium leading-relaxed">
                Schedule a consultation with our industry experts. We'll focus on understanding your current workflows, identifying operational bottlenecks, and recommending the right architectural solution.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to={CTA_ROUTES.requestDemo}
                  className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-md bg-stone-900 px-8 text-lg font-bold text-white shadow-sm transition-all hover:bg-stone-800 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2 focus-visible:ring-offset-warm-cream"
                >
                  Request Demo
                </Link>
                <Link
                  to={CTA_ROUTES.pricing}
                  className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-md bg-transparent border border-stone-300 px-8 text-lg font-bold text-stone-900 transition-all hover:bg-stone-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2 focus-visible:ring-offset-warm-cream"
                >
                  View Enterprise Pricing
                </Link>
              </div>
            </motion.div>
          </Container>
        </Section>
      </div>
    </main>
  );
}
