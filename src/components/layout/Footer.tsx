import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { SITE_CONFIG, FOOTER_NAV, CTA_ROUTES } from '../../constants';
import logo from '../../assets/newlogo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const platformNav = FOOTER_NAV.find((group) => group.title === 'Platform')?.items || [];
  const solutionsNav = FOOTER_NAV.find((group) => group.title === 'Solutions')?.items || [];
  const companyNav = FOOTER_NAV.find((group) => group.title === 'Company')?.items || [];

  return (
    <footer className="border-t border-warm-sage bg-white pt-24 pb-12">
      <Container>
        
        {/* Mini CTA Area */}
        <div className="mb-16 flex flex-col items-center justify-between gap-8 rounded-[2rem] bg-warm-cream ring-1 ring-warm-sage px-8 py-12 text-center md:flex-row md:px-16 md:py-12 md:text-left shadow-sm overflow-hidden relative">
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl leading-tight">
              Ready to modernize your business operations?
            </h2>
            <p className="mt-4 text-lg text-stone-600">
              Join thousands of forward-thinking businesses growing on our platform.
            </p>
          </div>
          <div className="relative z-10">
            <Link
              to={CTA_ROUTES.requestDemo}
              className="group shrink-0 inline-flex h-14 items-center justify-center gap-2 rounded-md bg-indigo-600 px-8 text-lg font-bold text-white shadow-sm transition-all hover:bg-indigo-500 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Request Demo
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          
          {/* Column 1: Brand & Description */}
          <div className="flex flex-col space-y-6 lg:col-span-2 pr-8">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt={SITE_CONFIG.name} className="h-10 w-auto" />
              <span className="text-2xl font-black tracking-tight text-stone-900">
                {SITE_CONFIG.name}
              </span>
            </Link>
            <p className="text-base leading-relaxed text-stone-600 max-w-sm">
              Manage CRM, Billing, Inventory, HRMS, Projects and more from one connected platform.
            </p>
          </div>

          {/* Column 2: Product/Platform */}
          <div>
            <h3 className="mb-6 text-sm font-bold tracking-wider text-stone-900 uppercase">
              Product
            </h3>
            <ul className="space-y-4">
              {platformNav.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-base font-medium text-stone-600 transition-colors hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 rounded-md"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div>
            <h3 className="mb-6 text-sm font-bold tracking-wider text-stone-900 uppercase">
              Solutions
            </h3>
            <ul className="space-y-4">
              {solutionsNav.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-base font-medium text-stone-600 transition-colors hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 rounded-md"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h3 className="mb-6 text-sm font-bold tracking-wider text-stone-900 uppercase">
              Company
            </h3>
            <ul className="space-y-4">
              {companyNav.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-base font-medium text-stone-600 transition-colors hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 rounded-md"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-20 flex flex-col items-center justify-between border-t border-warm-sage pt-8 sm:flex-row gap-4">
          <p className="text-sm font-medium text-stone-500">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm font-medium text-stone-500">
            <Link to="/privacy" className="hover:text-stone-900 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-stone-900 transition-colors">Terms of Service</Link>
          </div>
        </div>
        
      </Container>
    </footer>
  );
}
