import type { PricingPlan } from '../types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '₹999',
    userLimit: '3 Users',
    description: 'Perfect for small teams getting started.',
    features: ['Core Platform', 'Basic Support', 'Community Access'],
    apps: ['crm', 'sales'],
    ctaText: 'Get Started',
    isPopular: false,
  },
  {
    id: 'business',
    name: 'Business',
    price: '₹2,999',
    userLimit: '10 Users',
    description: 'Ideal for growing businesses.',
    features: ['All Starter Features', 'Priority Support', 'Advanced Analytics'],
    apps: ['crm', 'sales', 'billing'],
    ctaText: 'Request Demo',
    isPopular: true,
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '₹6,999',
    userLimit: '25 Users',
    description: 'Designed for businesses managing operations at scale.',
    features: ['All Business Features', 'Dedicated Account Manager', 'Custom Integrations'],
    apps: ['crm', 'billing', 'inventory', 'accounts'],
    ctaText: 'Request Demo',
    isPopular: false,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    userLimit: 'Custom',
    description: 'For large and multi-branch organizations.',
    features: ['All Professional Features', 'On-premise Deployment', 'SLA Guarantees'],
    apps: ['crm', 'sales', 'billing', 'inventory', 'accounts', 'hrms', 'payroll', 'projects', 'helpdesk', 'field-service', 'marketing', 'website'],
    ctaText: 'Contact Sales',
    isPopular: false,
  }
];
