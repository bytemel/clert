import { Layout } from "@/components/layout";
import { SectionHeading } from "@/components/section-heading";
import { Timeline } from "@/components/about-timeline";
import { SkillLogos } from "@/components/skill-logos";
import { Users, Briefcase, Heart, Globe, Clock, Zap } from "lucide-react";

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
      <div className="relative min-h-[100dvh]">
        {/* Subtle Gradient Background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-clert-pastel-blue/20 via-white to-clert-pastel-green/20"></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-12 pb-12 md:py-24 flex flex-col gap-12 md:gap-16">
          {/* Hero Section */}
          <section className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your Strategic Operations Partner
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Clert is a specialized remote operations team helping founders and agencies scale efficiently through expert execution and intelligent systems.
            </p>
          </section>

          {/* Founder Card */}
          <div className="mx-auto w-full max-w-3xl rounded-3xl bg-white/80 backdrop-blur-lg shadow-sm border border-gray-100 px-6 py-8 md:px-10 md:py-12 flex flex-col sm:flex-row gap-8 animate-fade-in">
            <div className="flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                alt="Clert Team" 
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl object-cover shadow-md border-4 border-white"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Why Teams Choose Clert
              </h3>
              <p className="text-gray-600">
                With 7+ years of experience supporting high-growth companies, we've refined our approach to remote operations that actually move the needle.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Briefcase className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Specialized in the tools modern teams use daily: Notion, Slack, Figma, and more</span>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Timezone-agnostic support for globally distributed teams</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Proactive partnership that anticipates needs before they arise</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Value Propositions */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valuePropositions.map((item, index) => (
              <div key={index} className="bg-white/80 rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-3">
                  {item.icon}
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </section>

          {/* Timeline */}
          <section className="space-y-6">
            <SectionHeading 
              title="Our Evolution" 
              subtitle="How we grew from solo operators to a trusted collective" 
            />
            <div className="flex justify-center">
              <Timeline />
            </div>
          </section>

          {/* Tools Section */}
          <section className="space-y-6">
            <SectionHeading 
              title="Our Operational Toolkit" 
              subtitle="The platforms we master to keep your business running smoothly" 
            />
            <SkillLogos />
          </section>

          {/* Closing CTA */}
          <section className="text-center max-w-2xl mx-auto py-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to focus on what really matters?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how we can streamline your operations and create space for growth.
            </p>
            <button className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded-lg transition-colors">
              Start the Conversation
            </button>
          </section>
        </div>
      </div>
    </Layout>
  );
}