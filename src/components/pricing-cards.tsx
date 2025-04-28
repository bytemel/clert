import { Check, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "$300",
    billing: "per month",
    desc: "Perfect for solopreneurs & small teams getting started with virtual support.",
    features: [
      "Up to 10 hours/month support",
      "Standard response (24 hours)",
      "Administrative or social media tasks",
      "Monthly progress review",
      "Basic email management"
    ],
    cta: "Start with Starter"
  },
  {
    name: "Growth",
    price: "$600",
    billing: "per month",
    desc: "For scaling teams needing proactive support and deeper collaboration.",
    features: [
      "Up to 25 hours/month support",
      "Priority response (same-day)",
      "All admin + research tasks",
      "Tool setup & process documentation",
      "Weekly check-ins",
      "Basic automation setup"
    ],
    recommended: true,
    cta: "Choose Growth"
  },
  {
    name: "Scale",
    price: "$1000",
    billing: "per month",
    desc: "Comprehensive support for agencies and established businesses.",
    features: [
      "Dedicated support hours",
      "Real-time response availability",
      "All task categories including automation",
      "Strategic planning sessions",
      "Custom project management",
      "Advanced workflow optimization"
    ],
    cta: "Scale Up"
  }
];

export function PricingCards() {
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-lg border bg-white transition-all ${
              plan.recommended
                ? "border-primary shadow-sm"
                : "border-gray-200 shadow-sm hover:shadow-md"
            }`}
          >
            {plan.recommended && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full flex items-center">
                <Star className="h-3 w-3 mr-1" />
                Most Popular
              </div>
            )}

            <div className="p-6">
              <div className="mb-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-end">
                  <span className="text-3xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 ml-1.5">
                    {plan.billing}
                  </span>
                </div>
                <p className="text-gray-600 mt-2 text-sm">{plan.desc}</p>
              </div>

              <ul className="space-y-2.5 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                variant={plan.recommended ? "default" : "outline"}
                className={`w-full rounded-md ${
                  plan.recommended ? "shadow-sm" : ""
                }`}
              >
                <a href="/contact" className="flex items-center justify-center">
                  {plan.cta}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10 text-sm text-gray-500">
        Need something custom?{' '}
        <a href="/contact" className="text-primary hover:underline font-medium">
          Let's discuss a tailored solution
        </a>
      </div>
    </div>
  );
}