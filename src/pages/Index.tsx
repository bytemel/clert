
import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/hero-section";
import { ServicesPreview } from "@/components/services-preview";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { TechStack } from "@/components/tech-stack";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesPreview />
      <TestimonialsCarousel />
      <TechStack />
    </Layout>
  );
};

export default Index;
