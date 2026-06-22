import type { NavItem, FooterNavGroup } from '../types/navigation';

export const MAIN_NAV: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Apps', path: '/apps' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Industry Solutions', path: '/industries' },
  { name: 'Request Demo', path: '/request-demo' },
];

export const FOOTER_NAV: FooterNavGroup[] = [
  {
    title: 'Platform',
    items: [
      { name: 'CRM', path: '/apps/crm' },
      { name: 'Billing', path: '/apps/billing' },
      { name: 'Inventory', path: '/apps/inventory' },
      { name: 'HRMS', path: '/apps/hrms' },
      { name: 'Projects', path: '/apps/projects' },
      { name: 'Helpdesk', path: '/apps/helpdesk' },
      { name: 'Marketing', path: '/apps/marketing' },
      { name: 'Website', path: '/apps/website' },
    ],
  },
  {
    title: 'Solutions',
    items: [
      { name: 'Industry Solutions', path: '/industries' },
    ],
  },
  {
    title: 'Company',
    items: [
      { name: 'About Us', path: '/about' },
      { name: 'Contact', path: '/contact' },
    ],
  },
];

export const CTA_ROUTES = {
  login: '/login',
  requestDemo: '/request-demo',
};
