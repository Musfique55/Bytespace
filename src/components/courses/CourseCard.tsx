import { ChartNoAxesColumnIncreasing, Star } from "lucide-react";
import Avatar from "./Avatar";
import Pill from "./Pills";
import Image from "next/image";

const AVATAR_IMAGES = [
  "/assets/avatars/3fe559181733e0fb69226caee836e40092facb44.png",
  "/assets/avatars/0577f0e9b7fca2f32639871454da0de95f951709.png",
  "/assets/avatars/b44979e1c98ecb3ec92ac86805fe55581fbeaa60.png",
  "/assets/avatars/d0cd3adb501c64c1b4cf766de6abb9fe8925fb5f.png",
];

export default function CourseCard({ course }: { course: any }) {
  return (
    <article className="bg-white rounded-2xl p-3 border border-[#E5E7EB]">
      <div className="relative rounded-xl overflow-hidden h-48">
        {course.image && (
          <Image
            src={course.image}
            alt={course.title}
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: "cover", // cover, contain, none
            }}
          />
        )}
        <div className="absolute bottom-2 left-2 right-2 flex gap-2 justify-center">
          <Pill>{course.lessons} Lessons</Pill>
          <Pill>{course.duration}</Pill>
          <Pill>{course.comments} Comments</Pill>
        </div>
      </div>

      <div className="flex items-start justify-between gap-2 mt-4">
        <h3 className="text-base font-semibold text-gray-900 truncate">
          {course.title}
        </h3>
        <span className="flex items-center gap-1 text-sm text-[#4F4F4F] shrink-0">
          {course.rating}
          <Star size={13} fill="#d1d5db" stroke="#d1d5db" />
        </span>
      </div>

      <p style={{ fontSize: "12px" }} className=" text-gray-500 mt-0.5">
        by <span style={{ color: "#2563eb" }}>{course.author}</span>
      </p>

      <div className="flex items-center gap-2 mt-4">
        <span className="flex items-center gap-2 text-xs text-gray-600 bg-gray-100 rounded-full px-3 py-1.5 font-mono">
          <ChartNoAxesColumnIncreasing size={20} strokeWidth={3} />
          {course.level}
        </span>
        <Avatar count={course.students} avatar_images={AVATAR_IMAGES} />
      </div>

      <p className="mt-4">
        <span
          className="text-xl font-semibold font-sans"
          style={{ color: "#2563eb" }}
        >
          ${course.price}
        </span>
        <span className="text-xs text-[#4F4F4F] font-mono">/lifetime</span>
      </p>
    </article>
  );
}
