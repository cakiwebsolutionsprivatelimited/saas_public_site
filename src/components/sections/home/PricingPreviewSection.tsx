import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { Check, Users } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '₹999',
    period: '/month',
    users: '3 Users',
    description: 'Perfect for small teams getting started.',
    features: ['CRM', 'Sales Lite'],
    ctaText: 'Get Started',
    popular: false,
    ctaStyle: 'bg-white text-stone-900 hover:bg-warm-cream ring-1 ring-inset ring-warm-sage',
  },
  {
    name: 'Business',
    price: '₹2,999',
    period: '/month',
    users: '10 Users',
    description: 'Ideal for growing businesses.',
    features: ['CRM', 'Sales', 'Billing'],
    ctaText: 'Request Demo',
    popular: true,
    ctaStyle: 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-sm hover:shadow-md',
  },
  {
    name: 'Professional',
    price: '₹6,999',
    period: '/month',
    users: '25 Users',
    description: 'Designed for businesses managing operations at scale.',
    features: ['CRM', 'Billing', 'Inventory', 'Accounts'],
    ctaText: 'Request Demo',
    popular: false,
    ctaStyle: 'bg-stone-900 text-white hover:bg-stone-800 shadow-sm hover:shadow-md',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    users: 'Custom',
    description: 'For large and multi-branch organizations.',
    features: ['All Apps', 'Custom Workflows', 'Premium Support'],
    ctaText: 'Contact Sales',
    popular: false,
    ctaStyle: 'bg-white text-stone-900 hover:bg-warm-cream ring-1 ring-inset ring-warm-sage',
  }
];

export default function PricingPreviewSection() {
  return (
    <Section className="bg-warm-sand border-t border-warm-sage overflow-hidden py-16">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-16">
          <div className="inline-flex items-center rounded-md bg-warm-cream px-4 py-1.5 font-heading text-sm font-bold text-stone-600 ring-1 ring-inset ring-warm-sage mb-6">
            Simple Pricing
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl md:text-5xl mb-6 leading-[1.1]">
            Choose a Plan That Fits Your Business
          </h2>
          <p className="text-lg leading-relaxed text-stone-600 max-w-xl mx-auto">
            Start small and expand as your business grows.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-stretch">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative flex flex-col rounded-xl p-8 transition-all duration-300 ${
                plan.popular 
                  ? 'bg-white ring-1 ring-stone-300 shadow-md z-10 lg:scale-105' 
                  : 'bg-white ring-1 ring-warm-sage shadow-sm lg:hover:scale-[1.02]'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-32 rounded-md bg-stone-900 px-3 py-1.5 text-center text-xs font-bold uppercase tracking-wide text-white shadow-sm">
                  Most Popular
                </div>
              )}
              
              {/* Card Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-stone-900 mb-3">{plan.name}</h3>
                <p className="text-sm text-stone-600 min-h-[40px] leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* Price & Users */}
              <div className="mb-8">
                <div className="flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-stone-900">{plan.price}</span>
                  {plan.period && <span className="text-sm font-semibold text-stone-500">{plan.period}</span>}
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-stone-700 bg-warm-cream w-max px-3 py-1.5 rounded-lg border border-warm-sage">
                  <Users className="h-4 w-4 text-stone-500" />
                  {plan.users}
                </div>
              </div>

              {/* CTA Button */}
              <a
                href={`#${plan.name.toLowerCase()}`}
                className={`mt-auto mb-8 block w-full rounded-md px-4 py-3.5 text-center text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ${plan.ctaStyle}`}
              >
                {plan.ctaText}
              </a>

              {/* Features List */}
              <div className="border-t border-warm-sage pt-6">
                <p className="text-sm font-bold text-stone-900 mb-4 uppercase tracking-wide">Includes</p>
                <ul role="list" className="space-y-4 text-sm leading-6 text-stone-600">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3 items-center">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-warm-cream">
                        <Check className="h-4 w-4 text-indigo-600" strokeWidth={2.5} aria-hidden="true" />
                      </div>
                      <span className="font-medium text-stone-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
