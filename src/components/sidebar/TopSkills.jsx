// src/components/TopSkills.jsx
import React from "react";
import { Code, LayoutTemplate, Zap, PenTool } from "lucide-react";

export default function TopSkills() {
  const skills = [
    { icon: <Code size={16} />, label: "React" },
    { icon: <Code size={16} />, label: "NextJS" },
    { icon: <LayoutTemplate size={16} />, label: "Tailwind CSS" },
    { icon: <Zap size={16} />, label: "JavaScript (ES6+)" },
    { icon: <Code size={16} />, label: "Responsive Design" },
    { icon: <PenTool size={16} />, label: "HTML/CSS" },
    { icon: <Code size={16} />, label: "Performance Optimization" },
    { icon: <PenTool size={16} />, label: "Figma to Code" },
  ];

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold">Top Skills</h4>

      <div className="flex flex-wrap gap-2">
        {skills.map((s, i) => (
          <div
            key={i}
            className="
              flex items-center gap-2 
              px-3 py-1.5 
              bg-white/10 border border-white/15 
              rounded-lg text-xs 
              hover:bg-white/15 hover:border-white/30 
              transition
            "
          >
            {s.icon}
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
