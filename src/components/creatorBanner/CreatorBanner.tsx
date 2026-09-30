import Image from "next/image";
import Button from "../shared/Button";

export default function CreatorBanner() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        backgroundColor: "#0A3BE8",
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.12) 2px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 2px, transparent 1px)",
        backgroundSize: "120px 120px",
      }}
    >
      <Image
        src={"/assets/creator-banner.png"}
        alt="creator-banner"
        aria-hidden="true"
        fill
        className="pointer-events-none absolute object-cover object-center"
      />
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 py-20 text-center sm:py-24">
        <h2 className="font-semibold leading-tight max-w-2xl">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>

        <p className="mt-8 text-[#F5F5F6] max-w-5xl">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <Button className="mt-8" type="button">
          Join as Creator
        </Button>
      </div>
    </section>
  );
}
