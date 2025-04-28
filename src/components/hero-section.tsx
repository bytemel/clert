import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, CalendarDays, ClipboardList, BarChart3, Zap, Clock } from "lucide-react";

export function HeroSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              <span className="text-gray-900">Executive Support for </span>
              <span className="text-primary">Visionary Leaders</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
              Reclaim 15+ hours weekly with a premium virtual operations partner dedicated to your growth.
            </p>

            <ul className="space-y-4 mt-6 md:mt-8">
              {[
                "Dedicated executive assistants with 5+ years experience",
                "Seamless integration with your leadership workflow",
                "Strategic support that scales with your ambitions"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="bg-primary/10 p-1 rounded-full mt-0.5">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-gray-700 flex-1">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-10">
              <Button asChild size="lg" className="rounded-lg pl-6 pr-5 bg-primary hover:bg-primary/90 transition-colors">
                <Link
                  to="https://calendly.com/t-mwangim02/administrative-virtual-assistance-consultation"
                  className="flex items-center gap-2 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CalendarDays className="h-5 w-5" />
                  Book Strategy Call
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-lg border-gray-300 hover:bg-gray-50">
                <Link to="/services" className="flex items-center gap-2">
                  <ClipboardList className="h-5 w-5" />
                  Our Services
                </Link>
              </Button>
            </div>
          </div>

          {/* Visual Dashboard - Responsive & Engaging */}
          <div className="relative h-full min-h-[400px] lg:min-h-[500px]">
            {/* Main Dashboard Card */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative bg-white p-6 rounded-xl shadow-lg border border-gray-100 w-full max-w-md mx-auto">
                {/* Productivity Graph */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <h3 className="font-medium text-gray-800">Your Weekly Efficiency</h3>
                  </div>
                  <div className="h-32 bg-gray-50 rounded-lg flex items-end gap-1.5 p-3">
                    {[30, 45, 60, 75, 90, 85, 95].map((height, index) => (
                      <div
                        key={index}
                        className="flex-1 bg-gradient-to-t from-primary to-primary/80 rounded-t-md hover:opacity-90 transition-opacity"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Time Saved Counter */}
                <div className="bg-gray-50 rounded-lg p-4 flex items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Time saved this month</p>
                    <p className="text-xl font-bold text-gray-900">92 hours</p>
                  </div>
                  <div className="ml-auto bg-white px-2 py-1 rounded-full text-xs font-medium shadow-sm border border-gray-200">
                    +18% MoM
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-3 -right-3 bg-white p-2 rounded-full shadow border border-gray-200">
                  <Zap className="h-4 w-4 text-amber-400" />
                </div>
              </div>
            </div>

            {/* Floating Metrics - Responsive Positioning */}
            <div className="hidden md:block absolute top-0 right-0 lg:right-8 bg-white p-3 rounded-lg shadow-md border border-gray-100">
              <p className="text-2xl font-bold text-primary">+43%</p>
              <p className="text-xs text-gray-500">Efficiency Gain</p>
            </div>

            <div className="hidden md:block absolute bottom-4 left-0 lg:left-8 bg-white p-3 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center gap-2">
                <div className="bg-emerald-100 p-1.5 rounded-full">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-medium">27 Tasks</p>
                  <p className="text-xs text-gray-500">Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}