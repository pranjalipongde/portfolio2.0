import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "SaaS Landing Page",
      desc: "High‑converting landing page built with React & Tailwind.",
      img: "/project1.png",
      performance: "95% Performance · 98% Best Practices",
      lighthouse: "Lighthouse Score: 92",
      link: "#",
    },
    {
      title: "Portfolio Website",
      desc: "Modern portfolio design with animations & dark mode.",
      img: "/project2.png",
      performance: "98% Performance · 100% SEO",
      lighthouse: "Lighthouse Score: 96",
      link: "#",
    },
    {
      title: "Business Website",
      desc: "Local business website redesign with improved UX.",
      img: "/project3.png",
      performance: "94% Performance · 97% Accessibility",
      lighthouse: "Lighthouse Score: 91",
      link: "#",
    },
    {
      title: "E‑commerce UI",
      desc: "Clean and fast UI for a modern ecommerce store.",
      img: "/project4.png",
      performance: "93% Performance · 95% Best Practices",
      lighthouse: "Lighthouse Score: 90",
      link: "#",
    },
    {
      title: "Blog Platform",
      desc: "SEO‑optimized blog platform with smooth animations.",
      img: "/project5.png",
      performance: "97% SEO · 95% Accessibility",
      lighthouse: "Lighthouse Score: 94",
      link: "#",
    },
  ];

  const visibleProjects = 4;

  return (
    <section id="projects" className="space-y-6">
      {/* Header with View More button */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-rammetto">Projects</h2>
        <a
          href="#"
          className="text-sm underline hover:text-yellow-300 transition"
        >
          View More
        </a>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {projects.slice(0, visibleProjects).map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            {/* Project Image */}
            {p.img && (
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-40 object-cover rounded-lg mb-4 border border-white/10"
              />
            )}

            {/* Title + Description */}
            <h3 className="text-xl font-semibold mb-1">{p.title}</h3>
            <p className="text-sm text-white/70 mb-3">{p.desc}</p>

            {/* Performance Section */}
            <div className="text-xs text-white/60 space-y-1 mb-4">
              <p>⚡ {p.performance}</p>
              <p>📊 {p.lighthouse}</p>
            </div>

            <a
              href={p.link}
              target="_blank"
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
