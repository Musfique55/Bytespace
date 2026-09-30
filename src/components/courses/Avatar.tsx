export default function Avatar({
  count,
  avatar_colors,
}: {
  count: number;
  avatar_colors: string[];
}) {
  return (
    <div className="flex items-center">
      {avatar_colors.map((color, i) => (
        <span
          key={color}
          className="w-7 h-7 rounded-full border-2 border-white"
          style={{ background: color, marginLeft: i === 0 ? 0 : -8 }}
        />
      ))}
      <span
        className="w-8 h-7 rounded-full text-xs font-semibold flex items-center justify-center border-2 border-white"
        style={{ background: "#d9f34a", marginLeft: -8, color: "#1f2937" }}
      >
        {count}+
      </span>
    </div>
  );
}
