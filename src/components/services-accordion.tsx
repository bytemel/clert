import { useState } from "react";
import { ChevronDown, ChevronUp, Mail, Calendar, Plane, FileText, BookOpen, BarChart2, Zap, Settings, ListChecks } from "lucide-react";

const serviceCategories = [
  {
    header: "Executive Assistance",
    icon: Mail,
    description: "Comprehensive administrative support to streamline your operations and free up your time.",
    price: "Starting at $300/month",
    features: [
      { icon: Mail, text: "Email management & inbox zero" },
      { icon: Calendar, text: "Calendar optimization & scheduling" },
      { icon: FileText, text: "Document preparation & formatting" },
      { icon: Plane, text: "Travel coordination & itineraries" },
      { icon: ListChecks, text: "Task & project coordination" }
    ],
    cta: "Get Organized"
  },
  {
    header: "Digital Presence Management",
    icon: BookOpen,
    description: "Strategic social media management to build your brand and engage your audience.",
    price: "Starting at $350/month",
    features: [
      { icon: BookOpen, text: "Content planning & scheduling" },
      { icon: Mail, text: "Audience engagement & moderation" },
      { icon: BarChart2, text: "Performance analytics & reporting" },
      { icon: FileText, text: "Basic graphic design support" },
      { icon: Settings, text: "Platform optimization" }
    ],
    cta: "Boost Engagement"
  },
  {
    header: "Business Intelligence",
    icon: BarChart2,
    description: "Actionable research and analysis to inform your strategic decisions.",
    price: "From $250/month",
    features: [
      { icon: BarChart2, text: "Market & competitor research" },
      { icon: FileText, text: "Data organization & reporting" },
      { icon: ListChecks, text: "Benchmarking & trend analysis" },
      { icon: BookOpen, text: "Resource curation" },
      { icon: Settings, text: "Custom report creation" }
    ],
    cta: "Gain Insights"
  },
  {
    header: "Custom Operations Solutions",
    icon: Zap,
    description: "Tailored operational support designed specifically for your business needs.",
    price: "Custom pricing",
    features: [
      { icon: Zap, text: "Process automation" },
      { icon: Settings, text: "Tool & system implementation" },
      { icon: FileText, text: "Documentation & SOP creation" },
      { icon: ListChecks, text: "Project management" },
      { icon: BarChart2, text: "Performance tracking" }
    ],
    cta: "Build Custom Plan"
  }
];

export function ServicesAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {serviceCategories.map((category, idx) => (
        <div 
          key={category.header}
          className={`border border-gray-200 rounded-xl overflow-hidden transition-all duration-200 ${
            openIndex === idx ? 'shadow-md' : 'hover:shadow-sm'
          }`}
        >
          <button
            className={`w-full flex items-center justify-between p-6 text-left group transition-colors ${
              openIndex === idx ? 'bg-primary/5' : 'hover:bg-gray-50'
            }`}
            onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            aria-expanded={openIndex === idx}
          >
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-lg ${
                openIndex === idx ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-600'
              }`}>
                <category.icon className="h-5 w-5" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900">{category.header}</h3>
                <p className="text-sm text-gray-500 mt-1">{category.price}</p>
              </div>
            </div>
            {openIndex === idx ? (
              <ChevronUp className="h-5 w-5 text-gray-500" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-500" />
            )}
          </button>

          <div
            className={`transition-all duration-300 ${
              openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}
          >
            <div className="px-6 pb-6 space-y-4">
              <p className="text-gray-600">{category.description}</p>
              
              <div className="space-y-3">
                {category.features.map((feature, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <feature.icon className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-gray-700">{feature.text}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none">
                  {category.cta}
                  <ChevronDown className="ml-1.5 h-4 w-4 transform -rotate-90" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}