import React from "react";

export interface SectionHeaderProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left" | "grid";
  titleClassName?: string;
  descriptionClassName?: string;
  className?: string;
  descriptionStyle?: Record<string, string>;
  titleStyle?: Record<string, string>;
}

export default function SectionHeader({
  title,
  description,
  align = "center",
  titleClassName = "",
  descriptionClassName = "",
  descriptionStyle = {},
  titleStyle = {},
  className = "",
}: SectionHeaderProps) {
  if (align === "grid") {
    return (
      <div
        className={`grid items-center gap-6 md:grid-cols-2 md:gap-12 ${className}`}
      >
        <h2 className={`text-black ${titleClassName}`}>{title}</h2>
        {description && (
          <p className={`text-[#4F4F4F] ${descriptionClassName}`}>
            {description}
          </p>
        )}
      </div>
    );
  }

  const isCenter = align === "center";

  return (
    <div
      className={`${isCenter ? "flex flex-col items-center text-center" : "text-left"} ${className}`}
    >
      <h2 style={titleStyle} className={titleClassName}>
        {title}
      </h2>
      {description && (
        <p style={descriptionStyle} className={descriptionClassName}>
          {description}
        </p>
      )}
    </div>
  );
}
