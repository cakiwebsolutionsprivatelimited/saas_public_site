import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../../components/ui/Container';
import { Section } from '../../components/ui/Section';
import { CTA_ROUTES } from '../../constants';
import { staggerContainer, fadeUp, slideInLeft, slideInRight } from '../../utils/animations';
import { 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp,
  ShieldCheck,
  Building2,
  Zap,
  Plus,
  Minus,
  Check
} from 'lucide-react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('annually');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const profiles = [
    {
      title: "Early Stage / Startup",
      icon: <Zap className="h-6 w-6" />,
      description: "You are establishing core processes and need a solid foundation without overcomplicating things.",
      recommendedPlan: "Starter"
    },
    {
      title: "Growing Business",
      icon: <TrendingUp className="h-6 w-6" />,
      description: "You have multiple departments, need to eliminate manual data entry, and require better cross-functional visibility.",
      recommendedPlan: "Professional"
    },
    {
      title: "Established Operation",
      icon: <Building2 className="h-6 w-6" />,
      description: "You manage complex, multi-layered operations and require advanced security, custom workflows, and deep integrations.",
      recommendedPlan: "Enterprise"
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
        "Standard Reporting",
        "Email Support"
      ],
      highlighted: false,
      ctaText: "Start Free Trial",
      ctaLink: CTA_ROUTES.requestDemo
    },
    {
      name: "Professional",
      target: "Best for scaling operations",
      priceMonthly: 99,
      priceAnnually: 79,
      description: "Complete platform visibility for growing teams that need to eliminate silos.",
      features: [
        "Up to 20 Users",
        "Advanced CRM & Automation",
        "Full Finance Suite",
        "Inventory & Project Management",
        "Priority Support"
      ],
      highlighted: true,
      ctaText: "Start Free Trial",
      ctaLink: CTA_ROUTES.requestDemo
    },
    {
      name: "Enterprise",
      target: "Best for complex organizations",
      priceMonthly: "Custom",
      priceAnnually: "Custom",
      description: "Tailored solutions, dedicated support, and advanced security controls.",
      features: [
        "Unlimited Users",
        "Custom Workflows & API Access",
        "Multi-entity & Advanced Finance",
        "Dedicated Account Manager",
        "SLA & Premium Support"
      ],
      highlighted: false,
      ctaText: "Contact Sales",
      ctaLink: CTA_ROUTES.requestDemo
    }
  ];

  const featureCategories = [
    {
      name: "Sales & CRM",
      features: [
        { name: "Contact Management", starter: true, pro: true, enterprise: true },
        { name: "Pipeline Tracking", starter: true, pro: true, enterprise: true },
        { name: "Email Automation", starter: false, pro: true, enterprise: true },
        { name: "Custom Sales Workflows", starter: false, pro: false, enterprise: true },
      ]
    },
    {
      name: "Finance",
      features: [
        { name: "Invoicing & Payments", starter: true, pro: true, enterprise: true },
        { name: "Expense Tracking", starter: true, pro: true, enterprise: true },
        { name: "Multi-currency", starter: false, pro: true, enterprise: true },
        { name: "Multi-entity Accounting", starter: false, pro: false, enterprise: true },
      ]
    },
    {
      name: "Operations",
      features: [
        { name: "Task Management", starter: true, pro: true, enterprise: true },
        { name: "Project Tracking", starter: false, pro: true, enterprise: true },
        { name: "Advanced Inventory", starter: false, pro: true, enterprise: true },
        { name: "Custom SLA & Support", starter: false, pro: false, enterprise: true },
      ]
    },
    {
      name: "People",
      features: [
        { name: "Employee Directory", starter: true, pro: true, enterprise: true },
        { name: "Leave Management", starter: false, pro: true, enterprise: true },
        { name: "Payroll Integration", starter: false, pro: true, enterprise: true },
        { name: "Advanced HR Analytics", starter: false, pro: false, enterprise: true },
      ]
    }
  ];

  const faqs = [
    {
      question: "Can I upgrade or downgrade my plan later?",
      answer: "Yes, you can upgrade your plan at any time. Your billing will be prorated for the remainder of the billing cycle. Downgrades take effect at the start of your next billing cycle."
    },
    {
      question: "Can I add more modules or users as I grow?",
      answer: "Absolutely. Our platform is designed to scale with you. You can easily add more user licenses or activate additional modules from your dashboard as your operational needs expand."
    },
    {
      question: "What are my billing options?",
      answer: "We offer both monthly and annual billing. Annual billing provides a significant discount compared to paying month-to-month. We accept all major credit cards and offer invoice billing for Enterprise plans."
    },
    {
      question: "What does the onboarding process look like?",
      answer: "For Starter and Professional plans, we provide a guided self-serve onboarding experience with access to our comprehensive knowledge base. Enterprise plans include a dedicated implementation manager who will tailor the onboarding to your specific processes."
    },
    {
      question: "How long does implementation take?",
      answer: "Starter plans can typically be up and running within a few days. Professional implementations usually take 2-4 weeks, depending on data migration complexity. Enterprise timelines are scoped individually based on custom requirements."
    },
    {
      question: "What level of support is included?",
      answer: "Starter includes standard email support. Professional adds priority email and chat support. Enterprise includes priority phone support, a dedicated account manager, and guaranteed response time SLAs."
    }
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* 1. Hero */}
      <Section className="relative overflow-hidden bg-warm-cream pt-24 pb-20 lg:pt-32 lg:pb-24">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <Container className="relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.h1 variants={fadeUp} className="text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl lg:text-7xl mb-8 leading-[1.1]">
              Flexible plans for every stage of your <span className="text-indigo-600">business growth.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mx-auto max-w-2xl text-xl text-stone-600 font-medium leading-relaxed">
              Pricing that scales with your ambition. Start with what you need today, and unlock more capabilities seamlessly as your operations expand.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* 2. Why Our Pricing Works */}
      <Section className="bg-white border-t border-warm-sage py-16 lg:py-24">
        <Container>
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
              className="flex-1 w-full"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-6 leading-tight">
                Stop paying for disconnected tools.
              </h2>
              <p className="text-lg text-stone-600 font-medium leading-relaxed mb-8">
                Replacing multiple specialized software subscriptions with one unified platform doesn't just improve visibility—it actively reduces your total cost of ownership.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
              className="flex-1 w-full bg-warm-cream rounded-xl p-8 border border-warm-sage"
            >
              <ul className="space-y-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600 mr-4 shrink-0 mt-0.5" strokeWidth={2.5} />
                  <div>
                    <span className="text-stone-900 font-bold block mb-1">Pay for what you use</span>
                    <span className="text-stone-600 text-sm">No hidden fees or forced bundles.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600 mr-4 shrink-0 mt-0.5" strokeWidth={2.5} />
                  <div>
                    <span className="text-stone-900 font-bold block mb-1">Unified billing</span>
                    <span className="text-stone-600 text-sm">One invoice for all your operational software.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600 mr-4 shrink-0 mt-0.5" strokeWidth={2.5} />
                  <div>
                    <span className="text-stone-900 font-bold block mb-1">Predictable scaling</span>
                    <span className="text-stone-600 text-sm">Clear pathways to upgrade as you grow.</span>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* 3. Which Plan Is Right For You? */}
      <Section className="bg-warm-cream py-16 lg:py-24 border-t border-warm-sage">
        <Container>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-6">Which plan is right for you?</h2>
            <p className="text-lg text-stone-600 font-medium">Find the right fit for your current stage, and upgrade smoothly when you're ready to scale.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {profiles.map((profile, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className="bg-white border border-warm-sage rounded-xl p-8 hover:shadow-md transition-all flex flex-col"
              >
                <div className="h-12 w-12 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6">
                  {profile.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">{profile.title}</h3>
                <p className="text-stone-600 font-medium mb-8 flex-grow">{profile.description}</p>
                <div className="pt-6 border-t border-warm-sage mt-auto">
                  <span className="text-sm font-bold text-stone-500 uppercase tracking-widest block mb-2">Recommended</span>
                  <a href="#pricing-plans" className="inline-flex items-center text-indigo-600 font-bold hover:text-indigo-700">
                    {profile.recommendedPlan} Plan <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Pricing Plans */}
      <Section className="bg-white py-20 lg:py-24" id="pricing-plans">
        <Container>
          <div className="flex flex-col items-center justify-center mb-16">
            <h2 className="text-4xl font-extrabold text-stone-900 mb-8 text-center">Transparent pricing for every stage</h2>
            
            {/* Billing Toggle */}
            <div className="flex items-center p-1 bg-warm-cream rounded-lg border border-warm-sage">
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
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                className={`rounded-2xl border ${
                  plan.highlighted 
                    ? 'border-indigo-600 shadow-xl relative scale-100 lg:scale-105 z-10 bg-white' 
                    : 'border-warm-sage bg-white shadow-sm hover:shadow-md'
                } p-8 flex flex-col`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-indigo-600 text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-extrabold text-stone-900 mb-2">{plan.name}</h3>
                  <p className="text-sm font-bold text-stone-500 uppercase tracking-wide mb-6">{plan.target}</p>
                  
                  <div className="flex items-baseline mb-2">
                    {typeof plan.priceMonthly === 'number' ? (
                      <>
                        <span className="text-4xl font-extrabold text-stone-900">$</span>
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

                <p className="text-stone-600 font-medium mb-8 pb-8 border-b border-warm-sage">
                  {plan.description}
                </p>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-indigo-600 mr-3 shrink-0 mt-0.5" />
                      <span className="text-stone-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.ctaLink}
                  className={`w-full h-14 inline-flex items-center justify-center rounded-md text-lg font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                    plan.highlighted
                      ? 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-sm hover:shadow focus-visible:ring-indigo-600'
                      : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100 focus-visible:ring-indigo-500'
                  }`}
                >
                  {plan.ctaText}
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. Feature Comparison */}
      <Section className="bg-warm-cream border-y border-warm-sage py-20 lg:py-24 hidden md:block">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900">Compare features by department</h2>
          </div>

          <div className="max-w-5xl mx-auto bg-white border border-warm-sage rounded-xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-warm-cream border-b border-warm-sage">
                    <th className="p-6 font-extrabold text-stone-900 w-2/5 text-lg">Features</th>
                    <th className="p-6 font-bold text-stone-900 w-1/5 text-center">Starter</th>
                    <th className="p-6 font-bold text-stone-900 w-1/5 text-center">Professional</th>
                    <th className="p-6 font-bold text-stone-900 w-1/5 text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {featureCategories.map((category, idx) => (
                    <React.Fragment key={idx}>
                      <tr className="bg-stone-50 border-y border-warm-sage">
                        <td colSpan={4} className="p-4 pl-6 font-bold text-stone-900 text-sm uppercase tracking-widest">
                          {category.name}
                        </td>
                      </tr>
                      {category.features.map((feature, fIdx) => (
                        <tr key={fIdx} className="border-b border-warm-sage last:border-b-0 hover:bg-stone-50/50 transition-colors">
                          <td className="p-4 pl-6 text-stone-600 font-medium">{feature.name}</td>
                          <td className="p-4 text-center">
                            {feature.starter ? <Check className="h-5 w-5 text-indigo-600 mx-auto" /> : <span className="text-stone-300">-</span>}
                          </td>
                          <td className="p-4 text-center">
                            {feature.pro ? <Check className="h-5 w-5 text-indigo-600 mx-auto" /> : <span className="text-stone-300">-</span>}
                          </td>
                          <td className="p-4 text-center">
                            {feature.enterprise ? <Check className="h-5 w-5 text-indigo-600 mx-auto" /> : <span className="text-stone-300">-</span>}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      {/* 6. Enterprise Solutions */}
      <Section className="bg-warm-sand py-20 lg:py-24 border-b border-warm-sage relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none">
           <ShieldCheck className="w-full h-full text-stone-900 -mr-20" />
        </div>
        <Container className="relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center rounded-md bg-stone-900 px-4 py-1.5 text-sm font-bold text-warm-sand mb-8">
              Enterprise Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-stone-900 mb-6 leading-tight">
              Custom solutions tailored for complex operations.
            </h2>
            <p className="text-xl text-stone-800 font-medium leading-relaxed mb-10 max-w-2xl">
              For organizations that require dedicated account management, custom implementation plans, stringent SLA guarantees, and advanced security configurations.
            </p>
            <Link
              to={CTA_ROUTES.requestDemo}
              className="inline-flex h-14 items-center justify-center rounded-md bg-stone-900 px-8 text-lg font-bold text-white shadow-sm transition-all hover:bg-stone-800 hover:-translate-y-0.5 hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2 focus-visible:ring-offset-warm-sand"
            >
              Talk to an Enterprise Expert
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </Container>
      </Section>

      {/* 7. Pricing FAQ */}
      <Section className="bg-white py-20 lg:py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className={`border ${openFaqIndex === idx ? 'border-indigo-600 ring-1 ring-indigo-600/10' : 'border-warm-sage hover:border-indigo-300'} rounded-xl bg-white transition-all overflow-hidden`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none focus-visible:bg-warm-cream"
                    aria-expanded={openFaqIndex === idx}
                  >
                    <span className="font-bold text-stone-900 text-lg pr-8">{faq.question}</span>
                    <span className={`flex-shrink-0 ml-4 h-8 w-8 rounded-full flex items-center justify-center transition-colors ${openFaqIndex === idx ? 'bg-indigo-100 text-indigo-600' : 'bg-warm-cream text-stone-500'}`}>
                      {openFaqIndex === idx ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaqIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 text-stone-600 font-medium leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 8. Final CTA */}
      <Section className="bg-warm-cream border-t border-warm-sage py-20 lg:py-32">
        <Container>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl mb-8 leading-[1.1]">
              Ready to start scaling?
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-stone-600 mb-12 font-medium leading-relaxed">
              Join thousands of forward-thinking businesses that have eliminated operational chaos and unified their departments on our platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to={CTA_ROUTES.requestDemo}
                className="w-full sm:w-auto inline-flex h-16 items-center justify-center rounded-md bg-indigo-600 px-12 text-xl font-bold text-white shadow-sm transition-all hover:bg-indigo-500 hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 focus-visible:ring-offset-warm-cream"
              >
                Start Your Free Trial
              </Link>
              <Link
                to={CTA_ROUTES.requestDemo}
                className="w-full sm:w-auto inline-flex h-16 items-center justify-center rounded-md bg-white border border-warm-sage px-12 text-xl font-bold text-stone-900 shadow-sm transition-all hover:bg-stone-50 hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 focus-visible:ring-offset-warm-cream"
              >
                Talk to Sales
              </Link>
            </div>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}
