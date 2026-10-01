import React from "react";

export interface ProgressBarProps {
  progress?: number | string; // e.g. 55 or "50%"
  barBg?: string;
  fillBg?: string;
  heightClass?: string;
  className?: string;
}

export default function ProgressBar({
  progress = 50,
  barBg = "bg-gray-200",
  fillBg = "bg-[#D9F34A]",
  heightClass = "h-1.5",
  className = "",
}: ProgressBarProps) {
  const widthStyle = typeof progress === "number" ? `${progress}%` : progress;

  return (
    <div className={`w-full rounded-full ${heightClass} ${barBg} ${className}`}>
      <div
        className={`h-full rounded-full ${fillBg}`}
        style={{ width: widthStyle }}
      />
    </div>
  );
}
