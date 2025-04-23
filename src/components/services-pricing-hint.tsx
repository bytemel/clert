import { Calendar, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PricingHint() {
  return (
    <div className="bg-gradient-to-r from-clert-pastel-green/30 to-clert-pastel-blue/30 rounded-2xl p-6 md:p-8 text-center animate-fade-in border border-gray-200 shadow-sm">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center justify-center gap-2">
          <PhoneCall className="h-5 w-5 text-primary" />
          Flexible Pricing Options
        </h3>
        <p className="text-gray-600 mb-5 text-lg">
          Need a custom plan or have budget concerns? I offer <span className="font-semibold text-primary">free 30-minute consultations</span> to design a solution that works for your business.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Button asChild variant="default" className="rounded-full gap-2">
            <a href="/contact">
              <Calendar className="h-4 w-4" />
              Schedule Call
            </a>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <a href="/pricing">
              View Pricing Options
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}