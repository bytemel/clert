
import { Layout } from "@/components/layout";
import { SectionHeading } from "@/components/section-heading";
import { StepsProcess } from "@/components/process-steps";
import { FAQAccordion } from "@/components/faq-accordion";

export default function Process() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <SectionHeading 
          title="How It Works"
          subtitle="Onboarding is simple. Here’s what happens when you work with Clert."
          centered 
        />
        <StepsProcess />

        <SectionHeading 
          title="Frequently Asked Questions"
          subtitle="Wondering about next steps or process details? Here are some answers."
          centered
          className="mt-20"
        />
        <FAQAccordion />
      </div>
    </Layout>
  );
}
