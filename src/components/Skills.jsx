import React from "react";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Git",
    "Figma",
    "Next.js",
    "TypeScript",
    "API Integration",
    "Responsive Design",
    "SEO Best Practices",
  ];

  return (
    <section id="skills" className="space-y-4">
      <h2 className="text-3xl font-rammetto mb-4">Skills</h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((s) => (
          <span
            key={s}
            className="px-4 py-2 bg-white/10 border border-white/10 rounded-full text-sm"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
