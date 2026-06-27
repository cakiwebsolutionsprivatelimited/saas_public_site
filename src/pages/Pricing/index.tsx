import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../../components/ui/Container';
import { Section } from '../../components/ui/Section';
import { CTA_ROUTES } from '../../constants';
import { staggerContainer, fadeUp, slideInLeft, slideInRight } from '../../utils/animations';
import { 
  ArrowRight, 
  TrendingUp,
  Building2,
  Zap,
  Plus,
  Minus,
  Check,
  ChevronDown,
  Layers,
  Activity,
  ShieldCheck
} from 'lucide-react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('annually');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeProfileIndex, setActiveProfileIndex] = useState<number>(1);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const profiles = [
    {
      title: "Establishing Core Processes",
      subtitle: "For early-stage operations",
      description: "You are setting up initial departments and need a solid foundation without overcomplicating things. The goal is to move away from spreadsheets and into a unified system of record.",
      recommendedPlan: "Starter",
      icon: <Zap className="h-5 w-5" />
    },
    {
      title: "Standardizing Workflows",
      subtitle: "For established teams",
      description: "You have multiple departments and are experiencing friction handing off data between them. You need to eliminate manual data entry and require better cross-functional visibility.",
      recommendedPlan: "Business",
      icon: <Layers className="h-5 w-5" />
    },
    {
      title: "Scaling Operations",
      subtitle: "For rapidly growing organizations",
      description: "You are handling high transaction volumes across multiple locations or entities. You need advanced automation, complex inventory routing, and deep analytics.",
      recommendedPlan: "Growth",
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      title: "Complex Architecture",
      subtitle: "For mature enterprises",
      description: "You manage complex, multi-layered operations and require bespoke API integrations, stringent SLA guarantees, and enterprise-grade security controls.",
      recommendedPlan: "Enterprise",
      icon: <Building2 className="h-5 w-5" />
    }
  ];

  const plans = [
    {
      name: "Starter",
      target: "Best for establishing core processes",
      priceMonthly: 49,
      priceAnnually: 39,
      description: "Essential tools to get your business operations off the ground.",
      features: [
        "Up to 5 Users",
        "Basic CRM & Sales tracking",
        "Invoicing & Payments",
        "Standard Reporting"
      ],
      highlighted: false,
      ctaText: "Request Demo",
      ctaLink: CTA_ROUTES.requestDemo
    },
    {
      name: "Business",
      target: "Best for standardizing workflows",
      priceMonthly: 99,
      priceAnnually: 79,
      description: "Complete platform visibility for teams needing to eliminate silos.",
      features: [
        "Up to 20 Users",
        "Advanced CRM & Automation",
        "Full Finance Suite",
        "Inventory Management"
      ],
      highlighted: true, // Subtle highlighting
      ctaText: "Request Demo",
      ctaLink: CTA_ROUTES.requestDemo
    },
    {
      name: "Growth",
      target: "Best for scaling operations",
      priceMonthly: 249,
      priceAnnually: 199,
      description: "Advanced capabilities for multi-department organizations.",
      features: [
        "Up to 50 Users",
        "Project Portfolio Management",
        "Multi-location Inventory",
        "Advanced Analytics"
      ],
      highlighted: false,
      ctaText: "Request Demo",
      ctaLink: CTA_ROUTES.requestDemo
    },
    {
      name: "Enterprise",
      target: "Best for complex organizations",
      priceMonthly: "Custom",
      priceAnnually: "Custom",
      description: "Tailored solutions, dedicated support, and advanced security.",
      features: [
        "Unlimited Users",
        "Custom Workflows & API",
        "Multi-entity Finance",
        "Dedicated Account Manager"
      ],
      highlighted: false,
      ctaText: "Request Demo",
      ctaLink: CTA_ROUTES.requestDemo
    }
  ];

  const featureCategories = [
    {
      name: "Sales & CRM",
      features: [
        { name: "Contact Management", starter: true, biz: true, growth: true, enterprise: true },
        { name: "Pipeline Tracking", starter: true, biz: true, growth: true, enterprise: true },
        { name: "Email Automation", starter: false, biz: true, growth: true, enterprise: true },
        { name: "Custom Sales Workflows", starter: false, biz: false, growth: true, enterprise: true },
        { name: "Advanced Territory Management", starter: false, biz: false, growth: false, enterprise: true },
      ]
    },
    {
      name: "Finance",
      features: [
        { name: "Invoicing & Payments", starter: true, biz: true, growth: true, enterprise: true },
        { name: "Expense Tracking", starter: true, biz: true, growth: true, enterprise: true },
        { name: "Multi-currency", starter: false, biz: true, growth: true, enterprise: true },
        { name: "Advanced Revenue Recognition", starter: false, biz: false, growth: true, enterprise: true },
        { name: "Multi-entity Accounting", starter: false, biz: false, growth: false, enterprise: true },
      ]
    },
    {
      name: "Operations",
      features: [
        { name: "Task Management", starter: true, biz: true, growth: true, enterprise: true },
        { name: "Project Tracking", starter: false, biz: true, growth: true, enterprise: true },
        { name: "Advanced Inventory", starter: false, biz: true, growth: true, enterprise: true },
        { name: "Multi-Warehouse Routing", starter: false, biz: false, growth: true, enterprise: true },
        { name: "Custom SLA & Support", starter: false, biz: false, growth: false, enterprise: true },
      ]
    }
  ];

  const faqs = [
    {
      question: "How is total cost of ownership (TCO) calculated?",
      answer: "TCO goes beyond the monthly subscription fee. It includes implementation time, the cost of integrations if you use multiple disjointed tools, and the hidden cost of manual data entry. By unifying your operations on our platform, our clients typically see a 40% reduction in software TCO within the first year."
    },
    {
      question: "Can we transition from Business to Enterprise seamlessly?",
      answer: "Yes. Enterprise is not a different product; it is the natural progression of your operational maturity. The underlying data structure remains the same, but the Enterprise tier unlocks dedicated infrastructure, higher API limits, and custom architectural support."
    },
    {
      question: "What does the onboarding and data migration process entail?",
      answer: "For Starter, Business, and Growth plans, we provide structured data import templates and a dedicated onboarding specialist. For Enterprise, our solutions architecture team maps your existing databases and handles the complete ETL (Extract, Transform, Load) process."
    },
    {
      question: "How do you handle security and compliance?",
      answer: "All tiers benefit from our core enterprise-grade encryption and regular penetration testing. The Enterprise tier adds specific compliance certifications, SSO (Single Sign-On), granular audit logs, and custom data residency options."
    }
  ];

  return (
    <main className="flex min-h-screen flex-col bg-stone-50">
      {/* 1. Hero & Philosophy */}
      <Section className="relative bg-white pt-24 pb-20 lg:pt-32 lg:pb-32 border-b border-warm-sage">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:w-7/12"
            >
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-stone-900 leading-[1.05] mb-8">
                Predictable pricing for <span className="text-indigo-600 italic font-serif font-medium">complex</span> operations.
              </motion.h1>
              <motion.p variants={fadeUp} className="text-xl md:text-2xl text-stone-600 font-medium leading-relaxed max-w-2xl">
                We believe in total transparency. Our pricing is designed to scale predictably as your business maturity grows—without punishing you for success.
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="lg:w-5/12 bg-warm-cream p-10 rounded-2xl border border-warm-sage"
            >
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Our Pricing Philosophy</h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-4 shrink-0 mt-0.5">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </div>
                  <div>
                    <span className="text-stone-900 font-bold block">No implementation hostage-taking</span>
                    <span className="text-stone-600 text-sm">We provide clear timelines and fixed onboarding costs.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-4 shrink-0 mt-0.5">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </div>
                  <div>
                    <span className="text-stone-900 font-bold block">Unified billing</span>
                    <span className="text-stone-600 text-sm">One invoice for all your operational software needs.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-4 shrink-0 mt-0.5">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </div>
                  <div>
                    <span className="text-stone-900 font-bold block">Value-aligned metrics</span>
                    <span className="text-stone-600 text-sm">Pricing tiers based on operational complexity, not artificial limits.</span>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* 2. Why Businesses Save More (TCO) */}
      <Section className="bg-warm-sand py-20 lg:py-28 border-b border-warm-sage">
        <Container>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-extrabold text-stone-900 mb-6 leading-tight">
              Why businesses save more with one connected platform.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-stone-700 font-medium leading-relaxed">
              When evaluating software, the monthly subscription is only a fraction of the total cost of ownership. The real cost lies in disconnected systems.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-xl border border-warm-sage">
              <div className="h-10 w-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-5">
                <Minus className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Eliminate tool sprawl</h3>
              <p className="text-stone-600 font-medium">Replace 4-5 different subscriptions (CRM, Accounting, Project Management, HR) with a single, unified invoice.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="bg-white p-8 rounded-xl border border-warm-sage">
              <div className="h-10 w-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-5">
                <Activity className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Reduce manual overhead</h3>
              <p className="text-stone-600 font-medium">Stop paying employees to copy-paste data between systems. Automated data flow drastically reduces administrative payroll hours.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white p-8 rounded-xl border border-warm-sage">
              <div className="h-10 w-10 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 mb-5">
                <ShieldCheck className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Shared operational truth</h3>
              <p className="text-stone-600 font-medium">When Sales, Finance, and Operations look at the exact same data, decision-making is faster, and costly errors drop to near zero.</p>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* 3. Guided Selection */}
      <Section className="bg-white py-20 lg:py-28 border-b border-warm-sage">
        <Container>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row gap-16 lg:gap-24"
          >
            <motion.div variants={slideInLeft} className="lg:w-5/12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-6">Identify your operational maturity.</h2>
              <p className="text-lg text-stone-600 font-medium mb-10">
                Don't buy features you don't need yet, and don't outgrow your software in 6 months. Select the stage that best describes your current challenges to find the right architectural fit.
              </p>
              
              <div className="space-y-3">
                {profiles.map((profile, idx) => {
                  const isActive = activeProfileIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveProfileIndex(idx)}
                      className={`w-full text-left px-6 py-5 rounded-xl border transition-all flex items-center justify-between ${
                        isActive 
                          ? 'bg-indigo-50 border-indigo-200 ring-1 ring-indigo-600/10' 
                          : 'bg-white border-warm-sage hover:border-indigo-300'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`mr-4 ${isActive ? 'text-indigo-600' : 'text-stone-400'}`}>
                          {profile.icon}
                        </div>
                        <div>
                          <h3 className={`font-bold text-lg ${isActive ? 'text-indigo-900' : 'text-stone-900'}`}>{profile.title}</h3>
                          <span className={`text-sm font-medium ${isActive ? 'text-indigo-700' : 'text-stone-500'}`}>{profile.subtitle}</span>
                        </div>
                      </div>
                      <ChevronDown className={`h-5 w-5 transition-transform ${isActive ? 'text-indigo-600 rotate-180' : 'text-stone-400'}`} />
                    </button>
                  );
                })}
              </div>
            </motion.div>

            <motion.div variants={slideInRight} className="lg:w-7/12 flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProfileIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-warm-cream border border-warm-sage rounded-2xl p-10 lg:p-12 w-full"
                >
                  <div className="inline-flex items-center rounded bg-white px-3 py-1 text-sm font-bold text-indigo-600 border border-warm-sage mb-6">
                    Recommendation
                  </div>
                  <h3 className="text-3xl font-extrabold text-stone-900 mb-6">
                    The {profiles[activeProfileIndex].recommendedPlan} Plan
                  </h3>
                  <p className="text-xl text-stone-600 font-medium leading-relaxed mb-10">
                    {profiles[activeProfileIndex].description}
                  </p>
                  
                  <a href="#pricing-plans" className="inline-flex h-14 items-center justify-center rounded-md bg-stone-900 px-8 text-lg font-bold text-white shadow-sm transition-all hover:bg-stone-800 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2 focus-visible:ring-offset-warm-cream">
                    View Pricing Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* 4. Pricing Tiers */}
      <Section className="bg-white py-24 lg:py-32 border-b border-warm-sage" id="pricing-plans">
        <Container>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
          >
            <div className="max-w-2xl">
              <h2 className="text-4xl font-extrabold text-stone-900 mb-4">Transparent platform pricing</h2>
              <p className="text-lg text-stone-600 font-medium">Upgrade or downgrade as your operational complexity changes.</p>
            </div>
            
            {/* Billing Toggle */}
            <div className="flex items-center p-1 bg-warm-cream rounded-lg border border-warm-sage shrink-0">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2.5 rounded-md text-sm font-bold transition-all ${
                  billingCycle === 'monthly' 
                    ? 'bg-white text-stone-900 shadow-sm' 
                    : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annually')}
                className={`px-6 py-2.5 rounded-md text-sm font-bold transition-all flex items-center ${
                  billingCycle === 'annually' 
                    ? 'bg-white text-stone-900 shadow-sm' 
                    : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                Annually
                <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-green-100 text-green-800">
                  Save 20%
                </span>
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 rounded-2xl overflow-hidden border border-warm-sage shadow-sm"
          >
            {plans.map((plan, idx) => (
              <motion.div 
                variants={fadeUp}
                key={idx}
                className={`p-8 flex flex-col border-b lg:border-b-0 lg:border-r border-warm-sage last:border-r-0 ${
                  plan.highlighted ? 'bg-indigo-50/40 relative' : 'bg-white'
                }`}
              >
                {/* Remove heavy badges, use subtle top border if highlighted */}
                {plan.highlighted && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-indigo-600"></div>
                )}
                
                <div className="mb-10">
                  <h3 className="text-2xl font-extrabold text-stone-900 mb-2">{plan.name}</h3>
                  <p className="text-sm font-bold text-stone-500 uppercase tracking-wide mb-8 h-10">{plan.target}</p>
                  
                  <div className="flex items-baseline mb-2">
                    {typeof plan.priceMonthly === 'number' ? (
                      <>
                        <span className="text-3xl font-extrabold text-stone-900">$</span>
                        <span className="text-5xl font-extrabold text-stone-900 tracking-tight">
                          {billingCycle === 'monthly' ? plan.priceMonthly : plan.priceAnnually}
                        </span>
                        <span className="text-stone-500 ml-2 font-medium">/user/mo</span>
                      </>
                    ) : (
                      <span className="text-4xl font-extrabold text-stone-900">Custom</span>
                    )}
                  </div>
                  {typeof plan.priceMonthly === 'number' && (
                    <p className="text-sm text-stone-500 font-medium h-5">
                      {billingCycle === 'annually' ? `Billed annually` : `Billed monthly`}
                    </p>
                  )}
                </div>

                <p className="text-stone-700 font-medium text-sm leading-relaxed mb-8 border-b border-warm-sage/60 pb-8 flex-grow">
                  {plan.description}
                </p>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start text-sm">
                      <Check className="h-4 w-4 text-indigo-600 mr-3 shrink-0 mt-0.5" strokeWidth={3} />
                      <span className="text-stone-800 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.ctaLink}
                  className={`w-full h-12 inline-flex items-center justify-center rounded-md text-base font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                    plan.highlighted
                      ? 'bg-indigo-600 text-white hover:bg-indigo-500 hover:-translate-y-0.5 shadow-sm hover:shadow-md focus-visible:ring-indigo-600'
                      : 'bg-white border border-stone-300 text-stone-900 hover:bg-stone-50 hover:-translate-y-0.5 shadow-sm hover:shadow-md focus-visible:ring-stone-500'
                  }`}
                >
                  {plan.ctaText}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* 5. Feature Comparison Matrix */}
      <Section className="bg-warm-cream border-b border-warm-sage py-24 hidden lg:block">
        <Container>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-extrabold text-stone-900">Detailed Feature Comparison</h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="max-w-6xl mx-auto bg-white border border-warm-sage rounded-xl shadow-sm"
          >
            <div className="overflow-x-auto relative">
              <table className="w-full text-left border-collapse">
                <thead className="sticky top-0 bg-white z-10 shadow-[0_1px_0_rgba(214,211,209,1)]">
                  <tr>
                    <th className="p-6 font-extrabold text-stone-900 w-1/3 text-lg">Capabilities</th>
                    <th className="p-6 font-bold text-stone-900 text-center w-1/6">Starter</th>
                    <th className="p-6 font-bold text-stone-900 text-center w-1/6">Business</th>
                    <th className="p-6 font-bold text-stone-900 text-center w-1/6">Growth</th>
                    <th className="p-6 font-bold text-stone-900 text-center w-1/6">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-sage">
                  {featureCategories.map((category, idx) => (
                    <React.Fragment key={idx}>
                      <tr className="bg-stone-50/50">
                        <td colSpan={5} className="p-4 pl-6 font-extrabold text-stone-900 text-sm uppercase tracking-widest border-b border-warm-sage">
                          {category.name}
                        </td>
                      </tr>
                      {category.features.map((feature, fIdx) => (
                        <tr key={fIdx} className="hover:bg-stone-50/30 transition-colors">
                          <td className="p-4 pl-6 text-stone-700 font-medium">{feature.name}</td>
                          <td className="p-4 text-center">
                            {feature.starter ? <Check className="h-5 w-5 text-indigo-600 mx-auto" strokeWidth={2.5} /> : <Minus className="h-5 w-5 text-stone-300 mx-auto" />}
                          </td>
                          <td className="p-4 text-center">
                            {feature.biz ? <Check className="h-5 w-5 text-indigo-600 mx-auto" strokeWidth={2.5} /> : <Minus className="h-5 w-5 text-stone-300 mx-auto" />}
                          </td>
                          <td className="p-4 text-center">
                            {feature.growth ? <Check className="h-5 w-5 text-indigo-600 mx-auto" strokeWidth={2.5} /> : <Minus className="h-5 w-5 text-stone-300 mx-auto" />}
                          </td>
                          <td className="p-4 text-center">
                            {feature.enterprise ? <Check className="h-5 w-5 text-indigo-600 mx-auto" strokeWidth={2.5} /> : <Minus className="h-5 w-5 text-stone-300 mx-auto" />}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* 6. Enterprise FAQ */}
      <Section className="bg-white py-24 border-b border-warm-sage">
        <Container>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-12 text-center">Buyer's Guide & FAQ</h2>
            
            <div className="space-y-2">
              {faqs.map((faq, idx) => (
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
                      {faq.question}
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
                          {faq.answer}
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

      {/* 7. Final CTA */}
      <Section className="bg-warm-sand py-24 lg:py-32">
        <Container>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl mb-8 leading-[1.05]">
              Let's architect your solution.
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-stone-700 mb-12 font-medium leading-relaxed">
              Speak with a solutions architect to discuss your operational challenges, data migration strategies, and custom implementation plans.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to={CTA_ROUTES.requestDemo}
                className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-md bg-stone-900 px-8 text-lg font-bold text-white shadow-sm transition-all hover:bg-stone-800 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2 focus-visible:ring-offset-warm-sand"
              >
                Request Demo
              </Link>
              <Link
                to="/apps"
                className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-md bg-transparent border border-stone-300 px-8 text-lg font-bold text-stone-900 transition-all hover:bg-stone-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2 focus-visible:ring-offset-warm-sand"
              >
                Explore Apps
              </Link>
            </div>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}
