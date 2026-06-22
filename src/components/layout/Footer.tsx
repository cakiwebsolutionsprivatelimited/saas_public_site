import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { SITE_CONFIG, FOOTER_NAV, CTA_ROUTES } from '../../constants';
import logo from '../../assets/newlogo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const platformNav = FOOTER_NAV.find((group) => group.title === 'Platform')?.items || [];
  const solutionsNav = FOOTER_NAV.find((group) => group.title === 'Solutions')?.items || [];
  const companyNav = FOOTER_NAV.find((group) => group.title === 'Company')?.items || [];

  return (
    <footer className="border-t bg-background pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          
          {/* Column 1: Brand & Description */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt={SITE_CONFIG.name} className="h-8 w-auto" />
              <span className="text-2xl font-bold tracking-tight text-foreground">
                {SITE_CONFIG.name}
              </span>
            </Link>
            <p className="text-sm text-muted-foreground font-medium">
              {SITE_CONFIG.tagline}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Column 2: Product/Platform */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Product
            </h3>
            <ul className="space-y-3">
              {platformNav.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Solutions
            </h3>
            <ul className="space-y-3">
              {solutionsNav.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company & CTAs */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h3>
            <ul className="space-y-3">
              {companyNav.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to={CTA_ROUTES.requestDemo}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm"
                >
                  {SITE_CONFIG.primaryCTA}
                </Link>
              </li>
              <li>
                <Link
                  to={CTA_ROUTES.login}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm"
                >
                  {SITE_CONFIG.secondaryCTA}
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-16 flex flex-col items-center justify-between border-t pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
