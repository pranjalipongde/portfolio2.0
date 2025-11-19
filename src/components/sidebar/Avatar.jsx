// src/components/Avatar.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Avatar({ src, name = "Pranjali Pongde", size = 112 }) {
  const [errored, setErrored] = useState(false);
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const sizeClass = `${size}px`;

  return (
    <motion.div
      initial={{ scale: 0.97, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="rounded-full overflow-hidden"
      style={{ width: size, height: size }}
    >
      {!src || errored ? (
        <div
          role="img"
          aria-label={name}
          className="w-full h-full grid place-items-center text-black font-semibold"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,215,0,0.95), rgba(255,180,60,0.95))",
          }}
        >
          <span style={{ fontSize: Math.round(size * 0.36) }}>{initials}</span>
        </div>
      ) : (
        <img
          src={src}
          alt={name}
          onError={() => setErrored(true)}
          className="w-full h-full object-cover"
        />
      )}
    </motion.div>
  );
}
