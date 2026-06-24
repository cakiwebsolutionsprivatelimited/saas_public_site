import type { FAQItem } from '../types';

export const faqs: FAQItem[] = [
  {
    question: "Can I start with only CRM?",
    answer: "Yes. Start with CRM and add Billing, Inventory, HRMS, Projects, Helpdesk, and other apps whenever you need them.",
    category: "General"
  },
  {
    question: "Can I add more apps later?",
    answer: "Yes. The platform is modular, allowing you to expand as your business grows.",
    category: "General"
  },
  {
    question: "Does it support GST billing?",
    answer: "Yes. Billing modules are designed with GST-ready workflows and invoicing support.",
    category: "Features"
  },
  {
    question: "Can I manage multiple branches?",
    answer: "Yes. Multi-branch management is supported for growing businesses.",
    category: "Features"
  },
  {
    question: "Can I control employee permissions?",
    answer: "Yes. Role-based access allows you to define permissions for different users and departments.",
    category: "Security"
  },
  {
    question: "Can the platform be customized?",
    answer: "Yes. Additional workflows, modules, and customizations can be implemented based on business needs.",
    category: "Technical"
  }
];
