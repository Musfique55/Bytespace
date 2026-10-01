import React from "react";
import { Check } from "lucide-react";

export interface CheckListProps {
  items: string[];
  iconBg?: string;
  iconColor?: string;
  className?: string;
  itemClassName?: string;
}

export default function CheckList({
  items,
  iconBg = "bg-[#003BE2]",
  iconColor = "text-white",
  className = "mt-6 space-y-3",
  itemClassName = "flex items-center gap-3 text-xs text-gray-800",
}: CheckListProps) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item} className={itemClassName}>
          <span className={`flex h-4 w-4 items-center justify-center rounded-full ${iconBg}`}>
            <Check size={10} strokeWidth={3} className={iconColor} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
