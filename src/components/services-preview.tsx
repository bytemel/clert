import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, FileText, MessageSquare, BarChart2, Zap, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Executive Support",
    description: "Comprehensive administrative assistance to streamline your workflow and maximize productivity.",
    icon: <FileText className="h-6 w-6" />,
    features: ["Email management", "Calendar optimization", "Document preparation", "Travel coordination"],
    cta: "Get Organized",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    title: "Digital Presence",
    description: "Strategic social media management to enhance your brand visibility and engagement.",
    icon: <MessageSquare className="h-6 w-6" />,
    features: ["Content strategy", "Community management", "Performance analytics", "Visual content support"],
    cta: "Boost Engagement",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  },
  {
    title: "Business Intelligence",
    description: "Actionable research and data analysis to inform your strategic decisions.",
    icon: <BarChart2 className="h-6 w-6" />,
    features: ["Market research", "Competitor analysis", "Data visualization", "Custom reporting"],
    cta: "Gain Insights",
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  },
  {
    title: "Custom Solutions",
    description: "Tailored operational support designed specifically for your business needs.",
    icon: <Zap className="h-6 w-6" />,
    features: ["Process automation", "Tool implementation", "Project management", "Performance tracking"],
    cta: "Build Custom Plan",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200"
  }
];

export function ServicesPreview() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading 
          title="Strategic Support Services"
          subtitle="Expert virtual assistance designed to amplify your business potential"
          centered
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.title}
              className={`group relative bg-white p-8 rounded-2xl shadow-sm border ${service.borderColor} hover:shadow-lg transition-all duration-300 hover:-translate-y-2`}
            >
              <div className={`absolute top-0 left-0 right-0 h-1.5 ${service.bgColor.replace('50', '500')} rounded-t-2xl`}></div>
              
              <div className={`h-14 w-14 ${service.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                to="/services" 
                className="inline-flex items-center font-medium text-primary hover:text-primary/90 transition-colors group/link"
              >
                {service.cta}
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button asChild size="lg" className="rounded-full px-8 shadow-sm hover:shadow-md transition-shadow">
            <Link to="/services" className="flex items-center gap-2">
              Explore All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}