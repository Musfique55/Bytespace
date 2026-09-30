export default function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs px-3 py-1.5 rounded-full whitespace-nowrap bg-[#F6F6F6]/60 backdrop-blur-sm text-[#4F4F4F]">
      {children}
    </span>
  );
}
