import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../../../utils/animations';

const trustIndicators = [
  'Modular Apps',
  'GST Ready',
  'Multi-Branch Support',
  'Role-Based Access'
];

export default function CTASection() {
  return (
    <Section className="relative overflow-hidden bg-warm-cream py-16 sm:py-20 border-t border-warm-sage">
      <Container className="relative z-10">
        <motion.div 
          className="mx-auto max-w-4xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={fadeUp}
        >
          
          <div className="inline-flex items-center rounded-md bg-warm-sand px-4 py-1.5 font-heading text-sm font-bold text-stone-600 ring-1 ring-inset ring-warm-sage mb-8">
            Ready to Get Started?
          </div>
          
          <h2 className="text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl md:text-6xl mb-8 leading-[1.1]">
            Start with CRM today.<br className="hidden sm:block" />
            Add more apps as your business grows.
          </h2>
          
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-stone-600 mb-12">
            Launch with the tools you need now and unlock billing, inventory, HRMS, projects, helpdesk, marketing, and more whenever you're ready.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#request-demo"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-md bg-indigo-600 px-8 py-4 text-base font-bold text-white hover:bg-indigo-500 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-warm-cream shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Request Demo
              <ArrowRight className="h-5 w-5" />
            </a>
            
            <a
              href="#explore-apps"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-md bg-white px-8 py-4 text-base font-bold text-stone-900 hover:bg-warm-cream transition-all ring-1 ring-inset ring-warm-sage shadow-sm focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2 focus:ring-offset-warm-cream"
            >
              Explore Apps
            </a>
          </div>
          
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-8 border-t border-warm-sage"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {trustIndicators.map((indicator) => (
              <motion.div key={indicator} variants={fadeUp} className="flex items-center gap-2 text-sm font-medium text-stone-500">
                <CheckCircle2 className="h-5 w-5 text-indigo-600" />
                {indicator}
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </Container>
    </Section>
  );
}
