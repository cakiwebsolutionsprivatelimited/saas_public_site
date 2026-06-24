import type { Industry } from '../types';

export const industries: Industry[] = [
  {
    id: 'manufacturing',
    slug: 'manufacturing',
    name: 'Manufacturing Business',
    description: 'Track production, inventory, procurement, and operations across multiple facilities.',
    challenges: ['Production bottlenecks', 'Inventory mismanagement', 'Supply chain delays'],
    recommendedApps: ['inventory', 'accounts', 'hrms', 'payroll'],
    benefits: ['Streamlined production', 'Optimized stock levels', 'Better cost control']
  },
  {
    id: 'distributor',
    slug: 'distributor',
    name: 'Distributor & Wholesale',
    description: 'Manage inventory, quotations, sales orders, and customer relationships seamlessly.',
    challenges: ['Stockouts', 'Pricing inconsistencies', 'Delayed order fulfillment'],
    recommendedApps: ['sales', 'inventory', 'accounts'],
    benefits: ['Faster order processing', 'Accurate pricing', 'Improved vendor relations']
  },
  {
    id: 'retail',
    slug: 'retail',
    name: 'Retail',
    description: 'Omnichannel management for physical stores and e-commerce.',
    challenges: ['Disparate point-of-sale systems', 'Inventory tracking', 'Customer retention'],
    recommendedApps: ['crm', 'sales', 'inventory', 'marketing'],
    benefits: ['Unified customer view', 'Real-time stock updates', 'Targeted promotions']
  },
  {
    id: 'healthcare',
    slug: 'healthcare',
    name: 'Healthcare',
    description: 'Manage patients, billing, inventory, appointments, and clinic operations securely.',
    challenges: ['Patient record management', 'Complex billing', 'Regulatory compliance'],
    recommendedApps: ['billing', 'inventory', 'hrms', 'helpdesk'],
    benefits: ['Secure records', 'Automated billing', 'Improved patient care']
  },
  {
    id: 'education',
    slug: 'education',
    name: 'Education',
    description: 'Manage students, admissions, fees, schedules, and communications efficiently.',
    challenges: ['Fee collection', 'Timetable scheduling', 'Parent-teacher communication'],
    recommendedApps: ['billing', 'accounts', 'projects', 'marketing'],
    benefits: ['Automated fee reminders', 'Organized schedules', 'Better engagement']
  },
  {
    id: 'service',
    slug: 'service',
    name: 'Service Business',
    description: 'Handle service requests, technicians, invoices, and customer support.',
    challenges: ['Technician scheduling', 'Invoicing delays', 'Support ticket management'],
    recommendedApps: ['crm', 'billing', 'projects', 'helpdesk', 'field-service'],
    benefits: ['Optimized dispatch', 'Faster invoicing', 'Higher customer satisfaction']
  },
  {
    id: 'real-estate',
    slug: 'real-estate',
    name: 'Real Estate',
    description: 'Track leads, properties, site visits, and customer communications.',
    challenges: ['Lead leakage', 'Property tracking', 'Agent performance'],
    recommendedApps: ['crm', 'projects', 'marketing', 'website'],
    benefits: ['Zero lead leakage', 'Centralized property listings', 'Better conversions']
  },
  {
    id: 'fitness',
    slug: 'fitness',
    name: 'Fitness',
    description: 'Track memberships, attendance, renewals, and payments for your gym.',
    challenges: ['Membership renewals', 'Class scheduling', 'Payment tracking'],
    recommendedApps: ['billing', 'marketing', 'website'],
    benefits: ['Automated renewals', 'Easy scheduling', 'Increased retention']
  }
];
