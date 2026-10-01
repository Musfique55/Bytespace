import Image from "next/image";
import CourseCard from "../courses/CourseCard";
import ProgressCard from "./ProgressCard";

export default function LearnerVisual({
  images,
  course,
}: {
  images: {
    learner: string;
    squiggle: string;
  };
  course: any;
}) {
  return (
    <div className="relative mx-auto  w-full ">
      <Image
        src={images.learner}
        alt="learner"
        height={540}
        width={577}
        aria-hidden="true"
        className="absolute top-12 -right-5 z-10 "
      />
      <Image
        src={images.squiggle}
        alt="learner-squiggle"
        height={215}
        width={215}
        aria-hidden="true"
        className="absolute top-16.75 left-97.5 z-30 "
      />

      <div className="max-w-90">
        <CourseCard course={course} />
      </div>
      <div className="absolute left-80 top-53.75 z-20">
        <ProgressCard />
      </div>
    </div>
  );
}
