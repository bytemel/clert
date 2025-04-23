import { Layout } from "@/components/layout";
import { SectionHeading } from "@/components/section-heading";
import { FAQAccordion } from "@/components/faq-accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function FAQPage() {
  return (
    <Layout>
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-50/20 via-white to-white">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full bg-secondary/10 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-24 relative z-10">
          <SectionHeading 
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our services and processes."
            centered
          />
          
          <div className="mt-16 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden max-w-4xl mx-auto">
            <FAQAccordion />
          </div>

          <div className="max-w-2xl mx-auto mt-20 text-center">
            <h3 className="text-2xl font-medium text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Our team is ready to provide personalized answers and guidance.
            </p>
            <Button asChild className="rounded-full bg-gradient-to-r from-primary to-primary-dark">
              <a href="/contact" className="flex items-center gap-2 group">
                Contact Support
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}