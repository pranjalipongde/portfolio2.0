import React from "react";

export default function MiniAvailability({
  days = [
    { key: "Mon", available: true },
    { key: "Tue", available: true },
    { key: "Wed", available: false },
    { key: "Thu", available: true },
    { key: "Fri", available: true },
    { key: "Sat", available: false },
    { key: "Sun", available: false },
  ],
}) {
  return (
    <div className="space-y-2">
      <h4 className="text-sm font-semibold">Availability (Week)</h4>
      <div className="flex gap-2 items-center text-xs">
        {days.map((d) => (
          <div key={d.key} className="flex flex-col items-center">
            <div
              className={`w-3 h-3 rounded-full ${
                d.available ? "bg-green-400" : "bg-white/10"
              }`}
              aria-hidden
            />
            <div className="text-white/60 mt-1">{d.key}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
