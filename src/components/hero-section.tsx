import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, CalendarDays, ClipboardList, MessageSquareText, Zap, Clock, BarChart3 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="py-28 md:py-40 bg-gradient-to-b from-blue-50/20 via-white to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Column */}
          <div className="animate-fade-in space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-[3.75rem] font-serif font-semibold leading-tight tracking-tight">
              <span className="text-gray-900">Strategic Support for</span>{' '}
              <span className="text-primary bg-gradient-to-r from-primary/10 to-primary/5 px-3 py-1 rounded-lg">Ambitious Businesses</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              Premium virtual assistance services designed to help visionary leaders reclaim time, reduce overhead, and scale efficiently.
            </p>

            <ul className="space-y-4 mt-10">
              <li className="flex items-start gap-4">
                <div className="bg-emerald-50 p-1.5 rounded-full">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                </div>
                <span className="text-gray-700">Dedicated support from experienced professionals</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-emerald-50 p-1.5 rounded-full">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                </div>
                <span className="text-gray-700">Flexible solutions that grow with your business</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-emerald-50 p-1.5 rounded-full">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                </div>
                <span className="text-gray-700">Seamless integration with your workflow</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-5 mt-12">
              <Button asChild size="lg" className="rounded-full pl-7 pr-6 bg-gradient-to-r from-primary to-primary-dark hover:shadow-lg transition-all">
                <Link to="/contact" className="flex items-center gap-3 group">
                  <CalendarDays className="h-5 w-5" />
                  Schedule Consultation
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-gray-300 hover:bg-gray-50/50 hover:border-gray-400">
                <Link to="/services" className="flex items-center gap-3">
                  <ClipboardList className="h-5 w-5" />
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>

          {/* Visual Column - Enhanced Dashboard */}
          <div className="relative hidden lg:block h-full min-h-[500px]">
            {/* Decorative Background Elements */}
            <div className="absolute -top-16 -right-16 w-80 h-80 bg-emerald-100/40 rounded-full opacity-30 blur-[110px]"></div>
            <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-amber-100/40 rounded-full opacity-30 blur-[110px]"></div>
            
            {/* Main Dashboard Container */}
            <div className="relative h-full flex flex-col justify-center">
              {/* Productivity Graph - Aligned with first benefit */}
              <div className="relative bg-white p-5 rounded-2xl shadow-md border border-gray-200/80 w-3/4 mb-6 ml-8">
                <div className="flex items-center gap-3 mb-3">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <h3 className="font-medium text-gray-800">Weekly Productivity</h3>
                </div>
                <div className="h-24 bg-gray-50 rounded-lg flex items-end gap-1 p-2">
                  {[20, 40, 60, 80, 65, 95, 75].map((height, index) => (
                    <div 
                      key={index}
                      className="flex-1 bg-gradient-to-t from-primary to-primary/70 rounded-t-sm transition-all hover:opacity-80"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <div className="absolute -bottom-3 -right-3 bg-white p-1.5 rounded-full shadow border border-gray-200">
                  <Zap className="h-4 w-4 text-amber-400" />
                </div>
              </div>

              {/* Virtual Assistant Message - Centered */}
              <div className="relative bg-white p-5 rounded-2xl shadow-lg border border-gray-200/80 w-4/5 mx-auto mb-6 z-10 animate-float-slow">
                <div className="absolute -top-3 left-6 w-5 h-5 bg-white transform rotate-45 border-t border-l border-gray-200/80"></div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                    <MessageSquareText className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-1 text-sm">Your Virtual Assistant</p>
                    <p className="text-gray-600 text-sm">"I've organized your meetings and prioritized this week's tasks!"</p>
                  </div>
                </div>
              </div>

              {/* Time Saved Counter - Aligned with last benefit */}
              <div className="relative bg-white p-5 rounded-2xl shadow-md border border-gray-200/80 w-3/4 ml-auto mr-8">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-emerald-600" />
                  <div>
                    <p className="text-sm text-gray-500">Time saved this month</p>
                    <p className="text-xl font-bold text-gray-800">87.5 hours</p>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 bg-white px-2 py-0.5 rounded-full text-xs font-medium shadow border border-gray-200">
                  +15% from last month
                </div>
              </div>

              {/* Floating Badges - Positioned strategically */}
              <div className="absolute top-8 right-8 bg-white p-3 rounded-xl shadow-md border border-gray-200/80 backdrop-blur-sm">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">+43%</p>
                  <p className="text-xs text-gray-500">Efficiency</p>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 bg-white p-3 rounded-xl shadow-md border border-gray-200/80 backdrop-blur-sm">
                {/* <div className="flex items-center gap-2">
                  <div className="h-8 w-8 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-100">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Tasks completed</p>
                    <p className="text-sm font-medium">12 today</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}