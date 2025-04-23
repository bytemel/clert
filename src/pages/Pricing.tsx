import { Layout } from "@/components/layout";
import { SectionHeading } from "@/components/section-heading";
import { PricingCards } from "@/components/pricing-cards";
import { Sparkles } from "lucide-react";

export default function Pricing() {
  return (
    <Layout>
      <div className="relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full bg-secondary/20 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-24 relative z-10">
          <SectionHeading 
            title={
              <span className="inline-flex items-center gap-2">
                Pricing Plans <Sparkles className="w-6 h-6 text-amber-400" />
              </span>
            }
            subtitle="Select the perfect plan tailored to your business needs and growth aspirations."
            centered 
          />
          
          <div className="mt-16">
            <PricingCards />
          </div>

          <div className="mt-20 text-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] font-medium group"
            >
              Request Custom Quote
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          <div className="mt-16 text-center text-sm text-gray-500 max-w-2xl mx-auto">
            <p>Need help deciding? Our team is available to discuss your specific requirements and recommend the best solution.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}