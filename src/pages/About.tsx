import { Layout } from "@/components/layout";
import { SectionHeading } from "@/components/section-heading";
import { Timeline } from "@/components/about-timeline";
import { SkillLogos } from "@/components/skill-logos";
import { Users, Briefcase, Heart, Globe, Clock, Zap, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const valuePropositions = [
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: "Time Reclaimed",
    description: "Clients typically recover 10+ productive hours each week"
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "Operational Agility",
    description: "Seamless scaling for teams across multiple timezones"
  },
  {
    icon: <Heart className="h-6 w-6 text-primary" />,
    title: "Human-Centered",
    description: "Solutions built with care, integrity, and real understanding"
  }
];

export default function About() {
  return (
    <Layout>
      <div className="relative min-h-[100dvh] bg-white">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-12 pb-12 md:py-24 flex flex-col gap-16 md:gap-20">
          {/* Hero Section */}
          <section className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Your Strategic <span className="text-primary">Operations Partner</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Clert is a specialized remote operations team helping founders and agencies scale efficiently through expert execution and intelligent systems.
            </p>
          </section>

          {/* Why Choose Clert - Enhanced Section */}
          <section className="mx-auto w-full max-w-5xl">
            <div className="relative rounded-xl bg-white shadow-sm border border-gray-200 overflow-hidden">
              <div className="relative z-10 px-8 py-12 md:px-12 md:py-16 flex flex-col lg:flex-row gap-10">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img 
                      src="" 
                      alt="Clert Team" 
                      className="w-40 h-40 sm:w-48 sm:h-48 rounded-xl object-cover shadow-sm border-2 border-white"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-sm px-3 py-2 border border-gray-200">
                      <span className="text-sm font-medium text-gray-700">7+ Years Experience</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium text-gray-700">Trusted Partner</span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 leading-snug">
                    Why Leading Teams <br className="hidden md:block" />Choose Clert
                  </h2>
                  
                  <p className="text-lg text-gray-600">
                    With extensive experience supporting high-growth companies, we've perfected remote operations that drive real impact.
                  </p>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Tool Specialists</h4>
                        <p className="text-gray-600">Experts in Notion, Slack, Figma, and modern work platforms</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <Globe className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Global Coverage</h4>
                        <p className="text-gray-600">24/7 support across all timezones</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Proactive Partnership</h4>
                        <p className="text-gray-600">We anticipate needs before they become issues</p>
                      </div>
                    </li>
                  </ul>
                  
                  <div className="pt-2">
                    <button className="inline-flex items-center gap-2 text-primary font-medium group">
                      Learn more about our approach
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Value Propositions */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {valuePropositions.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </section>

          {/* Timeline */}
          <section className="space-y-8">
            <SectionHeading 
              title="Our Evolution" 
              subtitle="How we grew from solo operators to a trusted collective" 
              centered
            />
            <div className="flex justify-center">
              <Timeline />
            </div>
          </section>

          {/* Tools Section */}
          <section className="space-y-8">
            <SectionHeading 
              title="Our Operational Toolkit" 
              subtitle="The platforms we master to keep your business running smoothly" 
              centered
            />
            <SkillLogos />
          </section>

          {/* Closing CTA */}
          <section className="text-center max-w-2xl mx-auto py-8">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Ready to focus on what really matters?
              </h3>
              <p className="text-gray-600 mb-6">
                Let's discuss how we can streamline your operations and create space for growth.
              </p>
              <Button asChild>
                <Link to="/pricing" className="flex items-center gap-1">
                  <span>Get Started</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}