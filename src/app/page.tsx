// ============================================================
// GES SOLAR PRO — Home Page
// Premium solar energy company landing page
// ============================================================
import { Hero } from '@/components/home/hero';
import { ServicesGrid } from '@/components/home/services-grid';
import { ProjectShowcase } from '@/components/home/project-showcase';
import { EnergyCalculatorTeaser } from '@/components/home/energy-calculator-teaser';
import { ReferencesSlider } from '@/components/home/references-slider';
import { BlogPreview } from '@/components/home/blog-preview';
import { CtaSection } from '@/components/home/cta-section';
import type { Metadata } from 'next';
import { defaultSiteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: `${defaultSiteConfig.name} — ${defaultSiteConfig.tagline}`,
  description: defaultSiteConfig.description,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <EnergyCalculatorTeaser />
      <ProjectShowcase />
      <ReferencesSlider />
      <BlogPreview />
      <CtaSection />
    </>
  );
}
