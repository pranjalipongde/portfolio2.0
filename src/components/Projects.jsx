import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const list = [
    {
      title: "SaaS Landing",
      desc: "High converting landing page design.",
      tags: ["React", "Tailwind"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      desc: "Clean UI focused portfolio.",
      tags: ["UI", "Responsive"],
      link: "#",
    },
    {
      title: "Business Website",
      desc: "Local business site redesign.",
      tags: ["SEO", "Speed"],
      link: "#",
    },
  ];

  return (
    <section id="projects">
      <h2 className="text-3xl font-rammetto mb-6">Featured Projects</h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {list.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            <h3 className="text-xl font-semibold mb-1">{p.title}</h3>
            <p className="text-sm text-white/70 mb-3">{p.desc}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={p.link}
              className="text-yellow-300 text-sm hover:underline"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
