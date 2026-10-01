import { Star } from "lucide-react";

export interface StarRatingProps {
  rating: number | string;
  count?: number | string;
  starSize?: number;
  starFill?: string;
  starStroke?: string;
  className?: string;
  countClassName?: string;
}

export default function StarRating({
  rating,
  count,
  starSize = 13,
  starFill = "#d1d5db",
  starStroke,
  className = "",
  countClassName = "",
}: StarRatingProps) {
  const strokeColor = starStroke || starFill;

  if (count !== undefined) {
    return (
      <p
        style={{ fontWeight: "700", fontSize: "10px" }}
        className={`text-[#242528] flex items-center gap-1 ${className}`}
      >
        {rating}
        <span
          style={{ fontWeight: "400" }}
          className={`text-inherit flex items-center gap-1 ${countClassName}`}
        >
          ({count}){" "}
          <Star
            size={starSize}
            fill={starFill}
            stroke={strokeColor}
            className="inline-block"
          />
        </span>
      </p>
    );
  }

  return (
    <span
      className={`flex items-center gap-1 text-sm text-[#4F4F4F] shrink-0 ${className}`}
    >
      {rating}
      <Star size={starSize} fill={starFill} stroke={strokeColor} />
    </span>
  );
}
