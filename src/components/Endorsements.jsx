// src/components/Endorsements.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const endorsementsList = [
  {
    name: "Rutuja K.",
    role: "Photographer",
    text: "Fast, clean work — my portfolio site looks amazing!",
  },
  {
    name: "Amit P.",
    role: "Founder",
    text: "Delivered a high-converting landing page that grew our leads.",
  },
  {
    name: "Sanket M.",
    role: "Developer",
    text: "Well-structured code and pixel-perfect UI — highly recommended!",
  },
  {
    name: "Nikita S.",
    role: "Entrepreneur",
    text: "Loved the redesign — my website finally looks modern and premium.",
  },
  {
    name: "Jayesh R.",
    role: "Agency Owner",
    text: "Reliable, fast, and professional. Great communication too.",
  },
  {
    name: "Simran G.",
    role: "Blogger",
    text: "Amazing attention to detail — my blog redesign feels brand new!",
  },
];

export default function Endorsements() {
  const [visible, setVisible] = useState(4);

  const showMore = () => setVisible((prev) => prev + 4);

  return (
    <section id="recommendations" className="space-y-6">
      {/* Header with View More */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-3xl font-rammetto">Testimonials</h2>

        {visible < endorsementsList.length && (
          <button
            onClick={showMore}
            className="text-sm underline hover:text-yellow-300 transition"
          >
            View More
          </button>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {endorsementsList.slice(0, visible).map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            <h4 className="font-semibold text-lg">{r.name}</h4>
            <p className="text-xs text-white/60 mb-2">{r.role}</p>
            <p className="text-sm text-white/80 leading-relaxed">{r.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
