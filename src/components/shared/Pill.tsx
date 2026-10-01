import React from "react";

export interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "glass" | "solid" | "custom";
  active?: boolean;
  className?: string;
}

export default function Pill({
  children,
  variant = "glass",
  active = false,
  className = "",
  ...rest
}: PillProps) {
  let baseStyles = "rounded-full whitespace-nowrap transition-colors";

  if (variant === "glass") {
    baseStyles += " text-xs px-3 py-1.5 bg-[#F6F6F6]/60 backdrop-blur-sm text-[#4F4F4F]";
  } else if (variant === "solid") {
    baseStyles += ` px-5 py-2.5 text-base cursor-pointer text-[#4B4C53] ${
      active ? "bg-[#D4FB20]" : "bg-[#F5F5F6]"
    }`;
  }

  return (
    <span className={`${baseStyles} ${className}`} {...rest}>
      {children}
    </span>
  );
}
