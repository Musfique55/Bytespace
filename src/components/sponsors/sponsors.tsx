import Image from "next/image";

const sponsors = [
  "/assets/sponsors/Frame.png",
  "/assets/sponsors/Frame (1).png",
  "/assets/sponsors/Frame (2).png",
  "/assets/sponsors/Frame (3).png",
  "/assets/sponsors/Frame (4).png",
];

export default function Sponsors() {
  return (
    <div className="flex justify-center items-center gap-10 py-16 bg-[#F5F5F6]">
      {sponsors.map((sponsor) => (
        <Image
          key={sponsor}
          src={sponsor}
          alt="sponsor"
          width={170}
          height={100}
        />
      ))}
    </div>
  );
}
