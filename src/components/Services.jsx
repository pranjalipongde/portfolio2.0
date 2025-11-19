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
          className="p-5 rounded-xl border border-yellow-300/30 bg-white/5 hover:bg-white/10
shadow-[0_0_15px_rgba(255,238,163,0.2)] transition"
        >
          <div className="flex items-center gap-3 mb-2">
            <Sparkles size={20} className="text-yellow-300" />
            <h4 className="font-semibold text-lg">Landing Pages</h4>
          </div>
          <p className="text-white/70 text-sm">
            High-converting, responsive landing pages designed for results.
          </p>
        </motion.div>

        <motion.div
          {...cardMotion}
          className="p-5 rounded-xl border border-yellow-300/30 bg-white/5 hover:bg-white/10
shadow-[0_0_15px_rgba(255,238,163,0.2)] transition"
        >
          <div className="flex items-center gap-3 mb-2">
            <Code size={20} className="text-yellow-300" />
            <h4 className="font-semibold text-lg">Website Development</h4>
          </div>
          <p className="text-white/70 text-sm">
            Full website builds using React & Tailwind. Fast, scalable, and
            modern.
          </p>
        </motion.div>

        <motion.div
          {...cardMotion}
          className="p-5 rounded-xl border border-yellow-300/30 bg-white/5 hover:bg-white/10
shadow-[0_0_15px_rgba(255,238,163,0.2)] transition"
        >
          <div className="flex items-center gap-3 mb-2">
            <RefreshCcw size={20} className="text-yellow-300" />
            <h4 className="font-semibold text-lg">Website Redesign</h4>
          </div>
          <p className="text-white/70 text-sm">
            Turn an outdated or dull website into a fresh, modern,
            high-converting design.
          </p>
        </motion.div>
      </div>

      {/* Why Choose Me */}
      <div className="mt-10 border border-white/10 rounded-xl p-6 bg-white/5">
        <h3 className="text-2xl font-rammetto mb-3">Why Choose Me?</h3>
        <ul className="list-disc ml-5 space-y-2 text-white/80 text-sm">
          <li>Clean, modern, and user-focused UI design</li>
          <li>Fast turnaround time (48hrs to 7 days)</li>
          <li>Pixel-perfect implementation from Figma/Sketch</li>
          <li>SEO-friendly + responsive designs</li>
          <li>Clear communication & project updates</li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
