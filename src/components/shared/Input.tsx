import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input({ className = "", ...rest }: InputProps) {
  return (
    <input
      {...rest}
      className={`h-13 w-full max-w-96 rounded-full border border-[#CED0D3] bg-white px-5 text-base font-mono text-gray-900 placeholder:text-[#242528] focus:outline-none ${className}`}
    />
  );
}
