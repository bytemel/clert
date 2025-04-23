import { Zap, Globe, UserCheck, BarChart2 } from "lucide-react";

const steps = [
  {
    year: "2016",
    title: "First Admin Role",
    desc: "Started in a fast-paced London startup coordinating events, doing client comms & process documentation.",
    icon: <UserCheck className="h-5 w-5" />,
    color: "bg-blue-500"
  },
  {
    year: "2018",
    title: "Remote Ops & Tools",
    desc: "Moved fully remote! Mastered tools like Notion, Slack, Calendars, and managed virtual teams worldwide.",
    icon: <Globe className="h-5 w-5" />,
    color: "bg-purple-500"
  },
  {
    year: "2020",
    title: "Going Solo",
    desc: "Launched Clert as a virtual assistant service, helping entrepreneurs and creatives thrive.",
    icon: <Zap className="h-5 w-5" />,
    color: "bg-orange-500"
  },
  {
    year: "2024",
    title: "Trusted by 50+ Clients",
    desc: "Built long-term partnerships. Today I support agencies, founders and creators globally.",
    icon: <BarChart2 className="h-5 w-5" />,
    color: "bg-green-500"
  }
];

export function Timeline() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-orange-200"></div>
      
      <ol className="relative space-y-12 animate-fade-in">
        {steps.map((item, idx) => (
          <li 
            key={idx} 
            className="group relative pl-10 transition-all hover:pl-12"
          >
            {/* Year marker */}
            <div className={`absolute left-0 top-0 ${item.color} rounded-full w-12 h-12 flex items-center justify-center text-white font-bold shadow-lg border-4 border-white transform group-hover:scale-110 transition-transform`}>
              <span className="text-xs">{item.year}</span>
            </div>
            
            {/* Content card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 ${item.color.replace('500', '100')} rounded-lg text-${item.color.replace('500', '600')}`}>
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900">{item.title}</h4>
              </div>
              <p className="text-gray-600 pl-1">{item.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}