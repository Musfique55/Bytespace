import React from "react";

export default function Button({
  children,
  className,
  type,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      {...rest}
      className={`${className} bg-[#D4FB20] h-11 shrink-0 cursor-pointer rounded-full px-6 text-sm font-medium text-[#242528] transition-transform hover:scale-105`}
    >
      {children}
    </button>
  );
}
