import CategoryPills from "@/components/category/CategoryPills";
import CourseGrid from "@/components/courses/Courses";

export default function Home() {
  return (
    <main className="max-w-full">
      <CategoryPills />
      <CourseGrid />
    </main>
  );
}
