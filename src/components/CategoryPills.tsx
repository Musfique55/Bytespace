"use client";
import { useState } from "react";

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
      <h2 className=" text-slate-900">
        Discover Your Passion,
        <br />
        Build Your Skills
      </h2>

      <p className="mx-auto mb-8 mt-4 max-w-4xl text-[#82868E]">
        At Bytespace Courses, we bring you closer to life-changing knowledge.
        Explore a variety of courses across different fields, from technology to
        the arts, and make a difference in your career and life.
      </p>

      <div className="flex flex-col gap-4">
        {visibleRows.map((row, i) => (
          <div key={i} className="flex flex-wrap justify-center gap-3">
            {row.map((name) => (
              <button
                key={name}
                onClick={() => setActive(name)}
                className={`rounded-full px-5 py-2.5 text-base cursor-pointer text-[#4B4C53] transition-colors ${
                  active === name ? "bg-[#D4FB20]" : "bg-[#F5F5F6] "
                }`}
              >
                {name}
              </button>
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
