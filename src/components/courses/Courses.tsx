import CourseCard from "./CourseCard";

const COURSES = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    rating: 4.5,
    bg: "linear-gradient(135deg,#e9d5ff,#fde68a)",
    image: "/assets/courses/93ad9f9e6bdb3c7f3c478820624ee19ad7320072.jpg",
  },
  {
    id: 2,
    title: "Build Digital Asset",
    rating: 4.5,
    bg: "linear-gradient(135deg,#cbd5e1,#f1f5f9)",
    image: "/assets/courses/c88264191d691ba3300ad4f82a942429bb912fa5.jpg",
  },
  {
    id: 3,
    title: "the Power of Big Data",
    rating: 4.5,
    bg: "linear-gradient(135deg,#0f172a,#0e7490)",
    image: "/assets/courses/4f3bdea5688b1a654db7a29b0bc5dd3563059d11.jpg",
  },
  {
    id: 4,
    title: "Balancing Productivity and Life",
    rating: 4.5,
    bg: "linear-gradient(135deg,#334155,#94a3b8)",
    image: "/assets/courses/72e18d90fb9ddac1944e3483a501f3cdae505f57.jpg",
  },
  {
    id: 5,
    title: "Mastering Money Management",
    rating: 4.5,
    bg: "linear-gradient(135deg,#f8fafc,#bbf7d0)",
    image: "/assets/courses/a89789455304dbf5cadc8e011bc26c97145aa56c.jpg",
  },
  {
    id: 6,
    title: "From Idea to Startup Success",
    rating: 4.5,
    bg: "linear-gradient(135deg,#fde68a,#fdba74)",
    image: "/assets/courses/69362b026219ac3eb8b4e77e8bbe4e18c4464b44.jpg",
  },
].map((c) => ({
  ...c,
  author: "purepearl studio",
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  level: "Beginner",
  price: 25,
  students: 26,
}));

export default function CourseGrid() {
  return (
    <section className="bg-white p-6">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[90%] mx-auto">
        {COURSES.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
