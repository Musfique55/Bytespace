import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input({ className = "", ...rest }: InputProps) {
  return (
    <input
      {...rest}
      className={`h-13 w-full rounded-full border border-[#CED0D3] bg-white px-5  font-mono focus:outline-none ${className}`}
    />
  );
}
