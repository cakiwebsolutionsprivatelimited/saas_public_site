import React from 'react';
import HeroSection from '../../components/sections/home/HeroSection';
import AppCategoriesSection from '../../components/sections/home/AppCategoriesSection';
import FeaturedAppsSection from '../../components/sections/home/FeaturedAppsSection';
import WhyChooseUsSection from '../../components/sections/home/WhyChooseUsSection';
import IndustrySolutionsSection from '../../components/sections/home/IndustrySolutionsSection';
import DashboardPreviewSection from '../../components/sections/home/DashboardPreviewSection';
import PricingPreviewSection from '../../components/sections/home/PricingPreviewSection';
import CTASection from '../../components/sections/home/CTASection';
import FAQSection from '../../components/sections/home/FAQSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AppCategoriesSection />
      <FeaturedAppsSection />
      <WhyChooseUsSection />
      <IndustrySolutionsSection />
      <DashboardPreviewSection />
      <PricingPreviewSection />
      <CTASection />
      <FAQSection />
    </>
  );
}
