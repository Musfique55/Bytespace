import Image from "next/image";
import RevenueCard from "./RevenueCard";
import HappyStudentsCard from "./HappyStudentsCard";

export default function CreatorVisual({
  images,
}: {
  images: {
    creator: string;
    squiggle: string;
  };
}) {
  return (
    <div className="relative mx-auto w-full">
      <Image
        src={images.creator}
        alt="creator"
        height={435}
        width={596}
        className="absolute -left-12 -top-61.25 z-10"
      />
      <Image
        src={images.squiggle}
        alt="creator-squiggle"
        height={215}
        width={215}
        className="absolute -top-47.5 left-53.75 z-20 transform rotate-40"
      />
      <div className="absolute -left-12.5 -top-53.5">
        <RevenueCard />
      </div>
      <div className="absolute -bottom-33.75 right-0 z-30">
        <HappyStudentsCard />
      </div>
    </div>
  );
}
