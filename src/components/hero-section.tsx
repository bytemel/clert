import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, CalendarDays, ClipboardList } from "lucide-react";

export function HeroSection() {
  return (
    <section className="py-24 md:py-36 bg-gradient-to-b from-clert-pastel-blue/30 via-white to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Column */}
          <div className="animate-fade-in space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif font-semibold leading-tight tracking-tight">
              <span className="text-gray-900">Strategic Support for</span>{' '}
              <span className="text-primary bg-clert-pastel-green/30 px-2 rounded-md">Ambitious Businesses</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              Professional virtual assistance tailored to help visionary founders and executives reclaim time, reduce overhead, and scale efficiently.
            </p>

            {/* Key Benefits */}
            <ul className="space-y-3 mt-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Dedicated support from experienced professionals</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Flexible solutions that grow with your business</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Seamless integration with your workflow</span>
              </li>
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <Button asChild size="lg" className="rounded-full pl-6 pr-5">
                <Link to="/contact" className="flex items-center gap-2">
                  <CalendarDays className="h-5 w-5" />
                  Schedule Consultation
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link to="/services" className="flex items-center gap-2">
                  <ClipboardList className="h-5 w-5" />
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>

          {/* Visual Column */}
          <div className="relative hidden lg:block">
            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-72 h-72 bg-clert-pastel-green rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-clert-beige rounded-full opacity-30 blur-3xl"></div>
            
            {/* Main Image Card */}
            <div className="relative bg-white p-1.5 rounded-2xl shadow-xl border border-gray-100 animate-float">
              <img 
                src="/images/va.png"
                alt="Professional virtual assistant at work" 
                className="w-full h-auto rounded-xl"
              />
              
              {/* Success Badge */}
              <div className="absolute -bottom-5 -left-5 bg-white p-3 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="h-9 w-9 bg-green-50 rounded-full flex items-center justify-center border border-green-100">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Task completed</p>
                    <p className="font-medium text-sm">Project delivered</p>
                  </div>
                </div>
              </div>
              
              {/* Productivity Stats */}
              <div className="absolute -top-5 -right-5 bg-white p-3 rounded-xl shadow-md border border-gray-100">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">+40%</p>
                  <p className="text-xs text-gray-500">Productivity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}