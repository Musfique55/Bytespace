import Image from "next/image";

export interface AvatarGroupProps {
  avatarImages: string[];
  count?: number;
  size?: number;
  badgeBg?: string;
  badgeColor?: string;
  className?: string;
}

export default function AvatarGroup({
  avatarImages,
  count,
  size = 32,
  badgeBg = "#d9f34a",
  badgeColor = "#1f2937",
  className = "",
}: AvatarGroupProps) {
  return (
    <div className={`flex items-center ${className}`}>
      {avatarImages.map((img, i) => (
        <Image
          src={img}
          alt={`Avatar ${i}`}
          width={size}
          height={size}
          key={img}
          className="rounded-full border-2 border-white object-cover"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            marginLeft: i === 0 ? 0 : -8,
          }}
        />
      ))}
      {count !== undefined && (
        <span
          className="rounded-full text-xs font-semibold flex items-center justify-center border-2 border-white"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            background: badgeBg,
            marginLeft: -8,
            color: badgeColor,
          }}
        >
          {count}+
        </span>
      )}
    </div>
  );
}
