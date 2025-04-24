import { Zap, Globe, UserCheck, BarChart2 } from "lucide-react";

const steps = [
  {
    year: "2023",
    title: "First Admin Role",
    desc: "Started in a fast-paced startup ecosystem coordinating events, doing client comms & process documentation.",
    icon: <UserCheck className="h-5 w-5" />,
    color: "from-blue-500 to-blue-600"
  },
  {
    year: "2024",
    title: "Remote Ops & Tools",
    desc: "Moved fully remote! Mastered tools like Notion, Slack, Calendars, and managed virtual teams worldwide.",
    icon: <Globe className="h-5 w-5" />,
    color: "from-purple-500 to-purple-600"
  },
  {
    year: "2025",
    title: "Going Solo",
    desc: "Launched Clert as a virtual assistant service, helping entrepreneurs and creatives thrive.",
    icon: <Zap className="h-5 w-5" />,
    color: "from-orange-500 to-orange-600"
  },
  {
    year: "2025",
    title: "Trusted by 30+ Clients",
    desc: "Built long-term partnerships. Today we support agencies, founders and creators globally.",
    icon: <BarChart2 className="h-5 w-5" />,
    color: "from-green-500 to-green-600"
  }
];

export function Timeline() {
  return (
    <div className="relative py-16 bg-gradient-to-b from-gray-50 to-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full bg-secondary/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-serif font-semibold text-center text-gray-900 mb-4">
          Our Journey
        </h2>
        <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Milestones that shaped our agency's expertise
        </p>

        {/* Flow chart timeline */}
        <div className="relative">
          {/* Horizontal connector line */}
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-blue-100 via-purple-100 to-orange-100 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((item, idx) => (
              <div 
                key={idx}
                className={`relative ${idx % 2 === 0 ? 'lg:mt-0' : 'lg:mt-20'}`}
              >
                {/* Year marker */}
                <div className={`absolute lg:relative mx-auto left-0 right-0 lg:left-auto lg:right-auto -top-8 lg:top-0 w-16 h-16 flex items-center justify-center bg-gradient-to-br ${item.color} rounded-full text-white font-medium shadow-lg border-4 border-white transform hover:scale-110 transition-transform z-10`}>
                  <span className="text-sm">{item.year}</span>
                </div>
                
                {/* Content card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 mt-8 lg:mt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${item.color} bg-opacity-10 mb-4 text-${item.color.split(' ')[1].replace('from-', '')}`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}