import { Check, Star, Zap, ChevronRight } from "lucide-react";
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
    <div className="relative py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-xl border bg-white shadow-sm transition-all hover:shadow-md ${
              plan.recommended
                ? "border-primary ring-2 ring-primary/30 transform md:-translate-y-2"
                : "border-gray-200"
            }`}
          >
            {plan.recommended && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full flex items-center shadow-lg">
                <Star className="h-3 w-3 mr-1" />
                Most Popular
              </div>
            )}

            <div className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-end">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-lg text-gray-500 ml-1">
                    {plan.billing}
                  </span>
                </div>
                <p className="text-gray-600 mt-3">{plan.desc}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                size="lg"
                className={`w-full rounded-lg ${
                  plan.recommended ? "shadow-md" : ""
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

      <div className="text-center mt-12 text-sm text-gray-500">
        Need something custom? <a href="/contact" className="text-primary hover:underline">Let's discuss a tailored solution</a>
      </div>
    </div>
  );
}