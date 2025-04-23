import React from "react";

const skills = [
  { name: "Notion", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png", level: "Expert" },
  { name: "Slack", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg", level: "Expert" },
  { name: "Google Workspace", logo: "https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Workspace_Logo.svg", level: "Expert" },
  { name: "Canva", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg", level: "Advanced" },
  { name: "Asana", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Asana_logo.svg", level: "Advanced" },
  { name: "Trello", logo: "https://upload.wikimedia.org/wikipedia/en/8/8c/Trello_logo.svg", level: "Proficient" },
];

const duplicatedSkills = [...skills, ...skills];

export function SkillLogos() {
  return (
    <div className="relative w-full overflow-hidden py-12">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
      
      <div className="flex animate-infinite-scroll items-center justify-center gap-16">
        {duplicatedSkills.map((skill, index) => (
          <div key={`${skill.name}-${index}`} className="flex flex-col items-center gap-3 min-w-[140px]">
            <div className="relative group p-2 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-100 hover:border-gray-200 transition-all">
              <img 
                src={skill.logo} 
                alt={skill.name} 
                className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
            <span className="font-medium text-sm text-gray-700">{skill.name}</span>
            <span className="text-xs px-3 py-1 rounded-full bg-gray-50 text-gray-600 border border-gray-100">
              {skill.level}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 2rem)); }
        }
        .animate-infinite-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}