"use client";
import { useState } from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import Pill from "@/components/shared/Pill";

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
  "Podcasting",
  "Public Speaking",
];

const rowSizes = [8, 6, 4, 2];
const VISIBLE_ROWS = 3;

const rows: string[][] = [];
let start = 0;
for (const size of rowSizes) {
  rows.push(categories.slice(start, start + size));
  start += size;
}

export default function CategoryPills() {
  const [active, setActive] = useState("Featured");
  const [expanded, setExpanded] = useState(false);

  const visibleRows = expanded ? rows : rows.slice(0, VISIBLE_ROWS);

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 text-center">
      <SectionHeader
        title={
          <>
            Discover Your Passion,
            <br />
            Build Your Skills
          </>
        }
        description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        titleClassName="text-slate-900"
        descriptionClassName="mx-auto mb-8 mt-4 max-w-4xl text-[#82868E]"
      />

      <div className="flex flex-col gap-4">
        {visibleRows.map((row, i) => (
          <div key={i} className="flex flex-wrap justify-center gap-3">
            {row.map((name) => (
              <Pill
                className="font-mono"
                key={name}
                variant="solid"
                active={active === name}
                onClick={() => setActive(name)}
              >
                {name}
              </Pill>
            ))}

            {i === visibleRows.length - 1 && (
              <button
                onClick={() => setExpanded((v) => !v)}
                className="px-2 text-sm text-blue-700 hover:underline"
              >
                {expanded ? "− Less" : "+ More"}
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
