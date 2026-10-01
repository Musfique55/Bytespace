"use client";
import { useState } from "react";
import Input from "../shared/Input";
import SectionHeader from "../shared/SectionHeader";
import Button from "../shared/Button";
import HappyStudentsCard from "../stats/HappyStudentsCard";
import ProgressCard from "../stats/ProgressCard";
import UiUxCard from "./uiuxCard";
import Image from "next/image";

export default function Hero() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section
      className="relative overflow-hidden text-white py-6 h-237.5"
      style={{
        backgroundColor: "#003BE2",
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.12) 2px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 2px, transparent 1px)",
        backgroundSize: "120px 120px",
      }}
    >
      <Image
        src={"/assets/hero/3d ornament.png"}
        alt="3d-elements"
        fill
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-scale-down z-50"
      />

      {/* big lime circle behind the person */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-188.75 left-1/2 h-287.25 w-287.25 -translate-x-1/2 rounded-full bg-[#CBFC01]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-188.75 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500"
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pt-28 text-center space-y-14">
        <SectionHeader
          title={
            <>
              Get Access to Hundreds <br /> Courses Available
            </>
          }
          titleStyle={{ fontSize: "4.5rem" }}
          description="Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses."
          descriptionClassName="text-[#E5E6E8] mt-5"
        />

        <form onSubmit={handleSubmit} className="w-146 flex gap-5 items-center">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Course, Topic, Creator"
            className="text-gray-900 placeholder:text-[#82868E]"
          />
          <Button type="submit">Search</Button>
        </form>

        {/* person + floating cards */}
        <div className="relative mt-10 h-85 w-full max-w-140">
          <Image
            src={"/assets/hero/29a52a24e51266edcd7d57d73392ee5fc4833220.png"}
            alt="user"
            height={540}
            width={560}
            className="absolute -bottom-20 left-5"
          />
          <div className="absolute -left-12.5 top-10">
            <UiUxCard />
          </div>
          <div className="absolute bottom-0 -left-28.75">
            <HappyStudentsCard />
          </div>
          <div className="absolute -right-22.5 top-9">
            <ProgressCard />
          </div>
        </div>
      </div>
    </section>
  );
}
