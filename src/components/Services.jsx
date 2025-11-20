import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Code, RefreshCcw } from "lucide-react";

const Services = () => {
  const cardMotion = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.4 },
  };

  const highlights = [
    "Clean, modern, and user‑focused UI design",
    "Fast turnaround (48 hrs – 7 days)",
    "Pixel‑perfect builds from Figma/Sketch",
    "SEO‑friendly + fully responsive",
    "Clear communication & progress updates",
  ];

  return (
    <section id="services" className="space-y-10">
      <h2 className="text-3xl font-rammetto mb-4">Services</h2>

      <p className="text-white/70 text-sm leading-relaxed max-w-xl">
        I help businesses and individuals build modern, high-performing web
        experiences.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        <motion.div
          {...cardMotion}
          className="p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition "
        >
          <h4 className="font-semibold text-lg mb-1">Landing Pages</h4>
          <p className="text-white/70 text-sm">
            High-converting, responsive landing pages designed for results.
          </p>
        </motion.div>

        <motion.div
          {...cardMotion}
          className="p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition "
        >
          <h4 className="font-semibold text-lg mb-1">Website Development</h4>
          <p className="text-white/70 text-sm">
            Full website builds using React & Tailwind. Fast, scalable, and
            modern.
          </p>
        </motion.div>

        <motion.div
          {...cardMotion}
          className="p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition "
        >
          <h4 className="font-semibold text-lg mb-1">Website Redesign</h4>
          <p className="text-white/70 text-sm">
            Turn outdated websites into fresh, high‑converting digital
            experiences.
          </p>
        </motion.div>
      </div>

      {/* Why Choose Me */}
      <div className="mt-10 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-[0_0_20px_rgba(255,238,163,0.15)]">
        <h3 className="text-2xl font-rammetto mb-4 flex items-center gap-2">
          ⭐ Why Choose Me?
        </h3>

        <div className="grid sm:grid-cols-2 gap-4">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition cursor-default"
            >
              <span className="text-yellow-300 text-lg">✔</span>
              <p className="text-sm text-white/80 leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
