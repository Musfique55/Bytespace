import CategoryPills from "@/components/category/CategoryPills";
import CourseGrid from "@/components/courses/Courses";
import Sponsors from "@/components/sponsors/sponsors";

export default function Home() {
  return (
    <main className="max-w-full">
      <Sponsors />
      <CategoryPills />
      <CourseGrid />
    </main>
  );
}
