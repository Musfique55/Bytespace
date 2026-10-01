import { Check } from "lucide-react";
import CreatorVisual from "./CreatorVisuals";
import LearnerVisual from "./LearnerVisuals";

const IMAGES = {
  learner: "/assets/stats/29a52a24e51266edcd7d57d73392ee5fc4833220.png",
  creator: "/assets/stats/0d6596fb1df66aaf843ee85722f439fada233946.png",
  squiggle: "/assets/stats/Frame.png",
};

const course = {
  id: 1,
  title: "Learn Figma from Basic",
  rating: 4.5,
  bg: "linear-gradient(135deg,#e9d5ff,#fde68a)",
  image: "/assets/courses/93ad9f9e6bdb3c7f3c478820624ee19ad7320072.jpg",
  author: "purepearl studio",
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  level: "Beginner",
  price: 25,
  students: 26,
};

const STATS = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const CHECKLIST = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-16 sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[152px] -top-[466px] h-288 w-6xl rounded-full blur-2xl opacity-30 bg-[radial-gradient(circle,rgba(203,252,1,1)_0%,rgba(203,252,1,0.23)_35%,rgba(203,252,1,0.06)_65%,rgba(203,252,1,0)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[947px] -left-[287px] h-[672px] w-[672px] rounded-full blur-2xl bg-[radial-gradient(circle,rgba(203,252,1,1)_0%,rgba(203,252,1,0.23)_35%,rgba(203,252,1,0.06)_65%,rgba(203,252,1,0)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[508px] top-[120px] h-288  w-6xl  blur-2xl opacity-30 bg-[radial-gradient(circle,rgba(0,59,226,1)_0%,rgba(0,59,226,0.23)_35%,rgba(0,59,226,0.06)_65%,rgba(0,59,226,0)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-182.5 -top-114.5 h-288 w-6xl rounded-full blur-2xl opacity-30 bg-[radial-gradient(circle,rgba(0,59,226,1)_0%,rgba(0,59,226,0.23)_35%,rgba(0,59,226,0.06)_65%,rgba(0,59,226,0)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[722px] top-[788px] h-288 w-6xl rounded-full blur-2xl bg-[radial-gradient(circle,rgba(0,59,226,1)_0%,rgba(0,59,226,0.23)_35%,rgba(0,59,226,0.06)_65%,rgba(0,59,226,0)_100%)]"
      />

      <div className="relative mx-auto max-w-5xl space-y-52">
        {/* block 1 */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold leading-tight text-gray-900">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="mt-6 text-gray-600">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>
            <div className="mt-6 flex gap-8">
              {STATS.map((s) => (
                <div key={s.label}>
                  <h5
                    style={{ fontSize: "36px", lineHeight: "44px" }}
                    className="font-semibold text-[#003BE2]"
                  >
                    {s.value}
                  </h5>
                  <p className="text-[10px] text-gray-600" aria-hidden="true">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <LearnerVisual images={IMAGES} course={course} />
        </div>

        {/* block 2 */}
        <div className="grid items-center gap-12 md:grid-cols-2 pb-20">
          <div className="order-2 md:order-1">
            <CreatorVisual images={IMAGES} />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-semibold leading-tight text-gray-900">
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="mt-6  text-gray-600">
              <strong className="font-semibold text-gray-900">ByteSpace</strong>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>
            <ul className="mt-6 space-y-3">
              {CHECKLIST.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-xs text-gray-800"
                >
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#003BE2]">
                    <Check size={10} strokeWidth={3} className="text-white" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
