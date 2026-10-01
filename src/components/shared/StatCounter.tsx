import React from "react";

export interface StatItem {
  value: string;
  label: string;
}

export interface StatCounterProps {
  stats: StatItem[];
  className?: string;
  valueClassName?: string;
  labelClassName?: string;
}

export default function StatCounter({
  stats,
  className = "mt-6 flex gap-8",
  valueClassName = "font-semibold text-[#003BE2]",
  labelClassName = "text-[10px] text-gray-600",
}: StatCounterProps) {
  return (
    <div className={className}>
      {stats.map((s) => (
        <div key={s.label}>
          <h5
            style={{ fontSize: "36px", lineHeight: "44px" }}
            className={valueClassName}
          >
            {s.value}
          </h5>
          <p className={labelClassName} aria-hidden="true">
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}
