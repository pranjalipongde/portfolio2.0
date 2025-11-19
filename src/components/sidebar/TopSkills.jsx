// src/components/TopSkills.jsx
import React from "react";
import { motion } from "framer-motion";

const defaultSkills = [
  { name: "HTML", level: 92 },
  { name: "CSS", level: 88 },
  { name: "JavaScript", level: 86 },
  { name: "React", level: 84 },
  { name: "Tailwind CSS", level: 86 },
];

export default function TopSkills({ skills = defaultSkills }) {
  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold">Top Skills</h4>
      <div className="space-y-2">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex flex-col"
          >
            <div className="flex justify-between text-xs mb-1">
              <span>{s.name}</span>
              <span className="text-white/60">{s.level}%</span>
            </div>

            <div className="w-full bg-white/8 rounded-full h-2 overflow-hidden">
              <div
                className="h-2 bg-yellow-300 rounded-full"
                style={{ width: `${s.level}%`, transition: "width .7s ease" }}
                aria-hidden
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
