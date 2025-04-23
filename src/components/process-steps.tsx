import { BookOpen, Contact, Check, Calendar, ChevronRight } from "lucide-react";

const steps = [
  {
    label: "Discovery Call",
    icon: Contact,
    desc: "Let's discuss your needs and goals in a no-obligation consultation",
    color: "bg-blue-100 text-blue-600"
  },
  {
    label: "Onboarding",
    icon: Calendar,
    desc: "Seamless setup with secure access to your tools and systems",
    color: "bg-purple-100 text-purple-600"
  },
  {
    label: "Execution",
    icon: BookOpen,
    desc: "Weekly progress updates with transparent communication",
    color: "bg-green-100 text-green-600"
  },
  {
    label: "Results",
    icon: Check,
    desc: "Enjoy measurable outcomes and scaled support as you grow",
    color: "bg-orange-100 text-orange-600"
  }
];

export function StepsProcess() {
  return (
    <div className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial consultation to ongoing success, here's how we'll work together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/4 left-0 right-0 h-1 bg-gray-200 mx-16"></div>
          
          {steps.map((step, index) => (
            <div 
              key={step.label} 
              className="relative flex flex-col items-center bg-white rounded-xl shadow-sm border border-gray-100 p-6 gap-4 hover:shadow-md hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Step number */}
              <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 h-8 w-8 ${step.color} rounded-full flex items-center justify-center text-white font-bold`}>
                {index + 1}
              </div>
              
              {/* Icon container */}
              <div className={`h-16 w-16 ${step.color.replace('100', '50')} rounded-full flex items-center justify-center mb-3`}>
                <step.icon className="h-7 w-7" />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 text-center">{step.label}</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">{step.desc}</p>
              
              {/* Arrow connector (mobile) */}
              {index < steps.length - 1 && (
                <div className="md:hidden pt-4">
                  <ChevronRight className="h-6 w-6 text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}