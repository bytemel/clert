import { Calendar, PhoneCall, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function PricingHint() {
  return (
    <div className="bg-gradient-to-r from-blue-50/50 to-green-50/50 rounded-2xl p-8 text-center border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-300 group">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="bg-primary/10 p-2 rounded-full">
            <PhoneCall className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">
            Flexible Pricing Options
          </h3>
        </div>
        
        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
          Need a custom plan? I offer <span className="font-medium text-primary">free consultations</span> to design the perfect solution for your business needs.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Button 
            asChild 
            className="rounded-full pl-6 pr-5 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary-darker transition-all group-hover:shadow-lg"
          >
            <Link to="/contact" className="flex items-center gap-2 group-hover:gap-3 transition-all">
              <Calendar className="h-4 w-4" />
              Schedule Call
              <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </Button>
          
          <Button 
            asChild 
            variant="outline" 
            className="rounded-full border-gray-300 hover:border-primary hover:bg-primary/5 hover:text-primary transition-colors"
          >
            <Link to="/pricing" className="flex items-center gap-1">
              View Plans
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}