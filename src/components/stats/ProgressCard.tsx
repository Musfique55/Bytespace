import ProgressBar from "@/components/shared/ProgressBar";

export default function ProgressCard() {
  return (
    <div className="min-w-59.25 rounded-2xl p-3 shadow-[0_10px_30px_rgba(0,0,0,0.08)] bg-white">
      <p
        style={{ fontSize: "14px", fontWeight: "500" }}
        className=" text-[#242528] text-start"
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
        className="mt-1 text-[#242528] text-start"
      >
        55%
      </p>
      <ProgressBar progress={55} className="mt-2" />
    </div>
  );
}
