import React from "react";

export default function ContactDivider({ title = "Contact" }) {
  return (
    <div className="flex items-center gap-3 mt-4">
      <div className="h-px bg-white/10 flex-1" />
      <div className="text-sm text-white/70 uppercase tracking-wide">
        {title}
      </div>
      <div className="h-px bg-white/10 flex-1" />
    </div>
  );
}
