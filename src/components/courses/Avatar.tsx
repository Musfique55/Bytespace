import Image from "next/image";

export default function Avatar({
  count,
  avatar_images,
}: {
  count: number;
  avatar_images: string[];
}) {
  return (
    <div className="flex items-center">
      {avatar_images.map((img, i) => (
        <Image
          src={img}
          alt={`Avatar ${i}`}
          width={32}
          height={32}
          key={img}
          className="w-8 h-8 rounded-full border-2 border-white"
          style={{ marginLeft: i === 0 ? 0 : -8 }}
        />
      ))}
      <span
        className="w-8 h-8 rounded-full text-xs font-semibold flex items-center justify-center border-2 border-white"
        style={{ background: "#d9f34a", marginLeft: -8, color: "#1f2937" }}
      >
        {count}+
      </span>
    </div>
  );
}
