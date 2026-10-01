export default function ProgressCard() {
  return (
    <div className="min-w-59.25 rounded-2xl bg-white p-3 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
      <p
        style={{ fontSize: "14px", fontWeight: "500" }}
        className=" text-[#242528]"
      >
        Learning Progress
      </p>
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "3rem",
          fontWeight: "600",
          lineHeight: "1.2",
        }}
        className="mt-1 text-[#242528] text"
      >
        55%
      </p>
      <div className="mt-2 h-1.5 w-full rounded-full bg-gray-200">
        <div className="h-full rounded-full bg-[#D9F34A]" />
      </div>
    </div>
  );
}
