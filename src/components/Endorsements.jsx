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

  const showMore = () => {
    setVisible((prev) => prev + 4);
  };

  return (
    <section id="endorsements" className="space-y-6">
      <h2 className="text-3xl font-rammetto mb-4">Recommendations</h2>

      <div className="grid sm:grid-cols-2 gap-6">
        <AnimatePresence>
          {endorsementsList.slice(0, visible).map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
            >
              <h4 className="text-lg font-semibold">{e.name}</h4>
              <p className="text-xs text-white/60">{e.role}</p>
              <p className="mt-2 text-sm text-white/80 leading-relaxed">
                {e.text}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {visible < endorsementsList.length && (
        <div className="flex justify-center">
          <button
            onClick={showMore}
            className="px-5 py-2 rounded-lg border border-white/20 hover:bg-white/10 text-sm transition"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}
