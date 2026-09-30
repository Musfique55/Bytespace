import Image from "next/image";
import { Category } from "./PathList";

export default function PathCard({ label, icon }: Omit<Category, "id">) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-[#CED0D3] bg-white px-6 py-6 min-w-29.5 ">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D9F34A]">
        <Image src={icon} alt={label} width={30} height={30} />
      </span>
      <p
        style={{ fontSize: "1.25rem", fontWeight: 500 }}
        className="text-[#242528] whitespace-nowrap"
      >
        {label}
      </p>
    </div>
  );
}
