import React from "react";

export interface GlowEffectProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function GlowEffect({
  className = "",
  style,
}: GlowEffectProps) {
  return (
    <div
      aria-hidden="true"
      style={style}
      className={`pointer-events-none absolute rounded-full blur-2xl ${className}`}
    />
  );
}
