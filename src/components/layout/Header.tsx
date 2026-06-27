import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { MAIN_NAV, CTA_ROUTES, SITE_CONFIG } from '../../constants';
import logo from '../../assets/newlogo.png';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg border-b border-slate-200/60 shadow-sm' 
          : 'bg-white border-b border-slate-100'
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex shrink-0 items-center">
            <Link to="/" className="flex items-center gap-3 group" onClick={closeMobileMenu}>
              <img 
                src={logo} 
                alt={SITE_CONFIG.name} 
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" 
              />
              <span className="text-2xl font-black tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                {SITE_CONFIG.name}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {MAIN_NAV.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors duration-200 ${
                    isActive 
                      ? 'text-indigo-600' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right Side (CTAs) */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to={CTA_ROUTES.login}
              className="text-sm font-semibold text-slate-600 transition-colors hover:text-slate-900"
            >
              {SITE_CONFIG.secondaryCTA}
            </Link>
            <Link
              to={CTA_ROUTES.requestDemo}
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 h-10 px-5 text-sm font-bold text-white shadow-sm transition-all hover:bg-indigo-500 hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
            >
              {SITE_CONFIG.primaryCTA}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-slate-600 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100 border-t border-slate-100 shadow-xl' : 'max-h-0 opacity-0'
        }`}
        id="mobile-menu"
      >
        <Container>
          <div className="space-y-2 pb-6 pt-6">
            {MAIN_NAV.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `block rounded-md px-4 py-3 text-base font-bold transition-colors ${
                    isActive 
                      ? 'bg-indigo-50 text-indigo-700' 
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="border-t border-slate-100 pb-8 pt-6">
            <div className="flex flex-col gap-4 px-2">
              <Link
                to={CTA_ROUTES.login}
                onClick={closeMobileMenu}
                className="block w-full rounded-md px-4 py-3 text-center text-base font-bold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                {SITE_CONFIG.secondaryCTA}
              </Link>
              <Link
                to={CTA_ROUTES.requestDemo}
                onClick={closeMobileMenu}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 py-3.5 text-base font-bold text-white shadow-sm transition-all hover:bg-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
              >
                {SITE_CONFIG.primaryCTA}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
