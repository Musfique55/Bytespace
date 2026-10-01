import ProgressBar from "@/components/shared/ProgressBar";
import Pill from "@/components/shared/Pill";

export default function RevenueCard() {
  return (
    <div className="space-y-3">
      <div className="min-w-58 rounded-xl p-3 text-white bg-[#0A3BE8]">
        <p style={{ fontSize: "16px" }}>Total Revenue</p>
        <p style={{ fontSize: "10px" }} className="text-gray-200">
          July 1-28
        </p>
        <p className="mt-1 text-base font-bold">$120.29</p>
        <ProgressBar
          progress={50}
          barBg="bg-white/90"
          fillBg="bg-[#D9F34A]"
          className="mt-2"
        />
      </div>
      <div className="w-36 rounded-xl p-3 text-white bg-[#0A3BE8]">
        <p style={{ fontSize: "16px" }}>Year to Date</p>
        <p style={{ fontSize: "10px" }} className="text-white/70">
          2023
        </p>
        <p className="mt-1 text-base font-bold">$1,200.38</p>
        <Pill
          variant="custom"
          className="mt-2 inline-block rounded-full px-2 py-0.5 text-[8px] font-semibold text-gray-900 bg-[#D9F34A]"
        >
          +12$
        </Pill>
      </div>
    </div>
  );
}
