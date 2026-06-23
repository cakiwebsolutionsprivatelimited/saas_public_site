import React, { useState } from 'react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Can I start with only CRM?",
    answer: "Yes. Start with CRM and add Billing, Inventory, HRMS, Projects, Helpdesk, and other apps whenever you need them."
  },
  {
    question: "Can I add more apps later?",
    answer: "Yes. The platform is modular, allowing you to expand as your business grows."
  },
  {
    question: "Does it support GST billing?",
    answer: "Yes. Billing modules are designed with GST-ready workflows and invoicing support."
  },
  {
    question: "Can I manage multiple branches?",
    answer: "Yes. Multi-branch management is supported for growing businesses."
  },
  {
    question: "Can I control employee permissions?",
    answer: "Yes. Role-based access allows you to define permissions for different users and departments."
  },
  {
    question: "Can the platform be customized?",
    answer: "Yes. Additional workflows, modules, and customizations can be implemented based on business needs."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section className="bg-white py-16 sm:py-20 border-t border-slate-100">
      <Container>
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-16">
          <div className="inline-flex items-center rounded-md bg-slate-100 px-4 py-1.5 font-heading text-sm font-bold text-slate-800 ring-1 ring-inset ring-slate-200/50 mb-6 shadow-sm">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl mb-6">
            Questions Before You Get Started
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            Everything you need to know before choosing the platform.
          </p>
        </div>

        {/* Two Column FAQ Layout */}
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-2 items-start">
            
            {/* Column 1 */}
            <div className="space-y-2">
              {faqs.slice(0, 3).map((faq, idx) => {
                const index = idx;
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="border-b border-slate-200/80">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="flex w-full items-center justify-between py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 rounded-lg transition-all group"
                      aria-expanded={isOpen}
                    >
                      <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-indigo-600' : 'text-slate-900 group-hover:text-indigo-600'}`}>
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] ${
                          isOpen ? 'rotate-180 text-indigo-600' : 'text-slate-400 group-hover:text-indigo-400'
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-base text-slate-600 leading-relaxed pr-8 pb-6">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Column 2 */}
            <div className="space-y-2">
              {faqs.slice(3, 6).map((faq, idx) => {
                const index = idx + 3;
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="border-b border-slate-200/80">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="flex w-full items-center justify-between py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 rounded-lg transition-all group"
                      aria-expanded={isOpen}
                    >
                      <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-indigo-600' : 'text-slate-900 group-hover:text-indigo-600'}`}>
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] ${
                          isOpen ? 'rotate-180 text-indigo-600' : 'text-slate-400 group-hover:text-indigo-400'
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-base text-slate-600 leading-relaxed pr-8 pb-6">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </Container>
    </Section>
  );
}
