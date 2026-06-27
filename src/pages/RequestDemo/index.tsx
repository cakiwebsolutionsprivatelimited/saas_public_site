import React, { useState } from 'react';
import { Container } from '../../components/ui/Container';
import { Section } from '../../components/ui/Section';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp, slideInLeft, slideInRight } from '../../utils/animations';
import { 
  CheckCircle2, 
  Building2, 
  Briefcase, 
  Factory, 
  Stethoscope, 
  GraduationCap, 
  Wrench, 
  ArrowRight,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Lock,
  Clock,
  Calendar,
  Video
} from 'lucide-react';

export default function RequestDemo() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  // Form status state prepared for backend integration (success/error states to be handled later)
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    
    // Simulate API call for now
    setTimeout(() => {
      // NOTE: Success state simulation is intentionally omitted per requirements.
      // Ready to be connected to real backend API.
      setFormStatus('idle');
    }, 1000);
  };

  const faqs = [
    { question: "How long is the demo?", answer: "Consultations typically run for 45 minutes, allowing enough time to understand your needs and demonstrate relevant workflows." },
    { question: "Is it free?", answer: "Yes, our consultations and personalized demonstrations are completely free of charge and carry no obligation." },
    { question: "Is it personalized?", answer: "Absolutely. We use the information you provide in the form to tailor the session specifically to your industry and business challenges." },
    { question: "Can multiple team members join?", answer: "Yes, we encourage you to invite key stakeholders from operations, finance, and IT to ensure all perspectives are covered." },
    { question: "Do I need to prepare anything?", answer: "Just a clear understanding of your current operational bottlenecks and what you hope to achieve with a new platform." },
    { question: "Is there any obligation?", answer: "None at all. The goal is to explore if our platform is the right fit for your business." }
  ];

  const industries = [
    { name: "Manufacturing", icon: Factory },
    { name: "Retail & E-commerce", icon: Building2 },
    { name: "Distribution", icon: Briefcase },
    { name: "Healthcare", icon: Stethoscope },
    { name: "Education", icon: GraduationCap },
    { name: "Service Businesses", icon: Wrench },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* 1. Hero */}
      <Section className="bg-warm-cream pt-24 pb-16 lg:pt-32 lg:pb-20">
        <Container>
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="mx-auto max-w-4xl text-center">
            <motion.div variants={fadeUp} className="inline-flex items-center rounded-md border border-warm-sage bg-white px-4 py-1.5 text-sm font-bold text-stone-600 shadow-sm mb-8">
              <span className="mr-2 flex h-2 w-2 rounded-full bg-indigo-600"></span>
              Book a Consultation
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl lg:text-7xl mb-8 leading-[1.1]">
              Let's Understand Your Business <br className="hidden md:block"/>
              <span className="text-indigo-600">Before We Recommend Software.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mx-auto max-w-2xl text-xl text-stone-600 font-medium leading-relaxed">
              See how one connected platform can transform your operations. Our specialists are ready to discuss your unique challenges and build the right solution together.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      {/* 2. What Happens During Your Demo */}
      <Section className="bg-white py-16 lg:py-20 border-t border-warm-sage">
        <Container>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-5xl mx-auto">
            <motion.div variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-4">What to Expect During Your Session</h2>
              <p className="text-lg text-stone-600 font-medium">A working session focused on your business outcomes, not a passive presentation.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Understand your current business processes",
                  "Identify operational bottlenecks",
                  "Recommend the right solution stack",
                  "Show relevant platform workflows",
                  "Answer implementation questions"
                ].map((text, i) => (
                  <motion.div variants={fadeUp} key={i} className="bg-warm-cream border border-warm-sage p-6 rounded-xl flex items-start shadow-sm">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600 mr-4 shrink-0" />
                    <span className="text-stone-900 font-bold text-lg leading-snug">{text}</span>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* 3. Demo Request Form & Preparation Panel */}
      <Section className="bg-warm-cream py-16 lg:py-24 border-t border-warm-sage" id="form">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto items-start">
            {/* Form Column */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={slideInLeft} className="w-full lg:w-2/3 bg-white border border-warm-sage rounded-xl p-8 lg:p-12 shadow-sm">
              <h3 className="text-3xl font-extrabold text-stone-900 mb-8">Request Your Consultation</h3>
              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">First Name <span className="text-red-500">*</span></label>
                    <input type="text" required className="w-full rounded-md border border-warm-sage bg-white px-4 py-3 text-stone-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">Last Name <span className="text-red-500">*</span></label>
                    <input type="text" required className="w-full rounded-md border border-warm-sage bg-white px-4 py-3 text-stone-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" placeholder="Doe" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">Business Email <span className="text-red-500">*</span></label>
                    <input type="email" required className="w-full rounded-md border border-warm-sage bg-white px-4 py-3 text-stone-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
                    <input type="tel" required className="w-full rounded-md border border-warm-sage bg-white px-4 py-3 text-stone-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">Company Name <span className="text-red-500">*</span></label>
                    <input type="text" required className="w-full rounded-md border border-warm-sage bg-white px-4 py-3 text-stone-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" placeholder="Acme Corp" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-stone-700 mb-2">Company Size <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <select required className="w-full appearance-none rounded-md border border-warm-sage bg-white px-4 py-3 pr-10 text-stone-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                        <option value="">Select size...</option>
                        <option value="1-10">1-10 Employees</option>
                        <option value="11-50">11-50 Employees</option>
                        <option value="51-200">51-200 Employees</option>
                        <option value="201-500">201-500 Employees</option>
                        <option value="500+">500+ Employees</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-3.5 h-5 w-5 text-stone-400 pointer-events-none" />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-1">Current Challenges (How can we help?) <span className="text-red-500">*</span></label>
                  <p className="text-xs text-stone-500 mb-2 font-medium">Briefly describe your operational bottlenecks. Bullet points are perfectly fine.</p>
                  <textarea required rows={4} className="w-full rounded-md border border-warm-sage bg-white px-4 py-3 text-stone-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" placeholder="We are currently struggling with..."></textarea>
                </div>
                
                <div className="flex items-start mt-4">
                  <div className="flex h-6 items-center">
                    <input id="privacy" name="privacy" type="checkbox" required className="h-4 w-4 rounded border-warm-sage text-indigo-600 focus:ring-indigo-600" />
                  </div>
                  <div className="ml-3 text-sm leading-6">
                    <label htmlFor="privacy" className="font-medium text-stone-600">
                      I agree to the privacy policy and consent to being contacted regarding this request. <span className="text-red-500">*</span>
                    </label>
                  </div>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={formStatus === 'loading'}
                    className="w-full rounded-md bg-indigo-600 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-indigo-500 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:opacity-70 flex justify-center items-center"
                  >
                    {formStatus === 'loading' ? 'Submitting...' : 'Request Consultation'}
                  </button>
                  <div className="mt-4 flex items-center justify-center text-sm font-medium text-stone-500">
                    <Lock className="h-4 w-4 mr-1.5 text-stone-400" />
                    Secure submission. We respect your privacy and will reply within 1 business day.
                  </div>
                </div>
              </form>
            </motion.div>

            {/* Panel Column */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={slideInRight} className="w-full lg:w-1/3 space-y-6">
              <div className="bg-indigo-900 text-white p-8 rounded-xl shadow-md border border-indigo-800">
                <h4 className="text-xl font-extrabold mb-4 flex items-center">
                  <MessageSquare className="mr-3 h-6 w-6 text-indigo-300" />
                  What to Expect
                </h4>
                <p className="text-indigo-100 mb-6 font-medium leading-relaxed">
                  A personalized business discussion tailored to your unique operational bottlenecks.
                </p>
                <ul className="space-y-4 text-indigo-50 font-medium">
                  <li className="flex items-center">
                    <Clock className="h-5 w-5 text-indigo-300 mr-3 shrink-0" />
                    45-minute consultation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-indigo-300 mr-3 shrink-0" />
                    No obligation or commitment
                  </li>
                  <li className="flex items-center">
                    <MessageSquare className="h-5 w-5 text-indigo-300 mr-3 shrink-0" />
                    Personalized business discussion
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-warm-sage p-8 rounded-xl shadow-sm">
                <h4 className="font-extrabold text-stone-900 text-lg mb-4">Consultation Details</h4>
                <ul className="space-y-4 text-stone-600 font-medium">
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-stone-400 mr-3 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-stone-900 font-bold">Duration</span>
                      45 Minutes
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Calendar className="h-5 w-5 text-stone-400 mr-3 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-stone-900 font-bold">Available Hours</span>
                      Mon-Fri, 9:00 AM - 5:00 PM EST
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Video className="h-5 w-5 text-stone-400 mr-3 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-stone-900 font-bold">Meeting Platform</span>
                      Google Meet or Microsoft Teams
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MessageSquare className="h-5 w-5 text-stone-400 mr-3 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-stone-900 font-bold">Response Time</span>
                      Within 1 business day
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-warm-sage p-8 rounded-xl shadow-sm">
                <h4 className="font-extrabold text-stone-900 text-lg mb-2">Need immediate assistance?</h4>
                <p className="text-stone-600 font-medium mb-5">You can also reach our specialized consulting team directly at:</p>
                <div className="space-y-2">
                  <p className="font-bold text-indigo-600">consultation@saas.com</p>
                  <p className="font-bold text-indigo-600">+1 (800) 123-4567</p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* 4. Businesses We Commonly Help */}
      <Section className="bg-white py-16 lg:py-24 border-t border-warm-sage">
        <Container>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-5xl mx-auto">
            <motion.div variants={fadeUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-4">Businesses We Commonly Help</h2>
              <p className="text-lg text-stone-600 font-medium">Our platform adapts to various industries, providing specialized solutions for:</p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
              {industries.map((ind, i) => {
                const Icon = ind.icon;
                return (
                  <motion.div variants={fadeUp} key={i} className="flex flex-col items-center justify-center p-8 border border-warm-sage rounded-xl bg-warm-cream hover:border-indigo-300 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group">
                    <div className="h-16 w-16 bg-white border border-warm-sage rounded-full flex items-center justify-center text-indigo-600 mb-5 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-colors">
                      <Icon className="h-8 w-8" />
                    </div>
                    <span className="font-bold text-stone-900 text-center text-lg">{ind.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* 5. Why Book a Personalized Demo */}
      <Section className="bg-warm-cream py-16 lg:py-24 border-t border-warm-sage">
        <Container>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-5xl mx-auto">
            <motion.div variants={fadeUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-4">Why Book a Personalized Demo</h2>
              <p className="text-lg text-stone-600 font-medium">We focus on business outcomes instead of just showing you software features.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Tailored to your industry", desc: "We understand that manufacturing has different needs than healthcare. We show you what matters to you." },
                { title: "No generic sales presentation", desc: "Your time is valuable. We skip the generic fluff and dive straight into solving your specific problems." },
                { title: "Questions answered by specialists", desc: "Speak directly with experts who understand operational bottlenecks and implementation strategies." },
                { title: "Practical implementation guidance", desc: "Leave the session with a clear understanding of what it takes to actually deploy a solution." }
              ].map((benefit, i) => (
                <motion.div variants={fadeUp} key={i} className="bg-white border border-warm-sage p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-extrabold text-stone-900 mb-4">{benefit.title}</h4>
                  <p className="text-stone-600 font-medium leading-relaxed text-lg">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* 6. Your Consultation Journey */}
      <Section className="bg-white py-16 lg:py-24 border-t border-warm-sage overflow-hidden">
        <Container>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-5xl mx-auto">
            <motion.div variants={fadeUp} className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-4">Your Consultation Journey</h2>
              <p className="text-lg text-stone-600 font-medium">A structured, professional process designed to respect your time and provide maximum value.</p>
            </motion.div>

            <div className="relative border-l-4 border-indigo-100 ml-6 md:ml-0 md:border-l-0 md:border-t-4 md:flex md:justify-between md:pt-12">
              {[
                { step: "1", title: "Review", desc: "We review your requirements." },
                { step: "2", title: "Contact", desc: "We contact you to schedule." },
                { step: "3", title: "Prepare", desc: "We prepare a custom demo." },
                { step: "4", title: "Consultation", desc: "Live working session." },
                { step: "5", title: "Recommendations", desc: "Receive implementation plan." }
              ].map((item, i) => (
                <motion.div variants={fadeUp} key={i} className="mb-12 md:mb-0 ml-10 md:ml-0 relative md:flex-1 md:text-center md:px-3 group">
                  <div className="absolute -left-16 top-0 md:-top-20 md:left-1/2 md:-ml-8 w-14 h-14 rounded-full bg-white border-4 border-indigo-100 flex items-center justify-center text-indigo-600 font-extrabold text-xl shadow-sm group-hover:border-indigo-600 group-hover:text-indigo-700 transition-colors">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold text-stone-900 mb-3">{item.title}</h4>
                  <p className="text-stone-600 font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* 7. Frequently Asked Questions */}
      <Section className="bg-warm-cream py-16 lg:py-24 border-t border-warm-sage">
        <Container>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-3xl mx-auto">
            <motion.div variants={fadeUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-4">Frequently Asked Questions</h2>
            </motion.div>
            <div className="space-y-5">
              {faqs.map((faq, i) => (
                <motion.div variants={fadeUp} key={i} className="bg-white border border-warm-sage rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <button 
                    onClick={() => toggleFaq(i)}
                    className="w-full text-left px-8 py-6 flex items-center justify-between focus:outline-none focus:bg-indigo-50/50 transition-colors"
                    aria-expanded={openFaq === i}
                    aria-controls={`faq-content-${i}`}
                    id={`faq-button-${i}`}
                  >
                    <span className="font-extrabold text-stone-900 text-lg pr-8">{faq.question}</span>
                    {openFaq === i ? <ChevronUp className="h-6 w-6 text-indigo-600 shrink-0" /> : <ChevronDown className="h-6 w-6 text-stone-400 shrink-0" />}
                  </button>
                  {openFaq === i && (
                    <div id={`faq-content-${i}`} role="region" aria-labelledby={`faq-button-${i}`} className="px-8 pb-6 pt-2 text-stone-600 font-medium leading-relaxed border-t border-stone-100 text-lg">
                      {faq.answer}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* 8. Final CTA */}
      <Section className="bg-white py-20 lg:py-32 border-t border-warm-sage">
        <Container>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl mb-8 leading-[1.1]">
              Let's Build the Right <br />
              <span className="text-indigo-600">Solution Together.</span>
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-stone-600 mb-12 font-medium leading-relaxed">
              Partner with us to streamline your operations, break down silos, and build a connected foundation for your business growth.
            </p>
            <a
              href="#form"
              className="inline-flex h-14 items-center justify-center rounded-md bg-indigo-600 px-8 text-lg font-bold text-white shadow-sm transition-all hover:bg-indigo-500 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
            >
              Book Your Consultation
              <ArrowRight className="ml-3 h-6 w-6" />
            </a>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}
