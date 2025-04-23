import { Layout } from "@/components/layout";
import { HeroSection } from "@/components/hero-section";
import { ServicesPreview } from "@/components/services-preview";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
// import { TechStack } from "@/components/tech-stack";

const Index = () => {
  return (
    <Layout>
      <div className="space-y-20 md:space-y-28 lg:space-y-32">
        <HeroSection />
        <ServicesPreview />
        <TestimonialsCarousel />
        {/* <TechStack /> */}
      </div>
    </Layout>
  );
};

export default Index;