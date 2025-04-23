
import { Layout } from "@/components/layout";
import { SectionHeading } from "@/components/section-heading";
import { ServicesAccordion } from "@/components/services-accordion";
import { PricingHint } from "@/components/services-pricing-hint";

export default function Services() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <SectionHeading 
          title="Our Services"
          subtitle="Choose a package or build your own — all tailored to help your business grow."
          centered 
        />

        <div className="mb-10">
          <ServicesAccordion />
        </div>
        <PricingHint />

        <div className="mt-14 text-center">
          <a href="/contact" className="inline-block px-8 py-4 text-lg rounded-2xl bg-primary text-white shadow-lg hover:scale-105 transition-transform hover:bg-primary/90 font-semibold">
            Let’s Build Your Package
          </a>
        </div>
      </div>
    </Layout>
  );
}
