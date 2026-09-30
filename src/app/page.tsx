import CategoryPills from "@/components/category/CategoryPills";
import CourseGrid from "@/components/courses/Courses";
import CreatorBanner from "@/components/creatorBanner/CreatorBanner";
import LearningPaths from "@/components/learningPaths/LearningPaths";
import Sponsors from "@/components/sponsors/Sponsors";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <main className="max-w-full">
      <Sponsors />
      <CategoryPills />
      <CourseGrid />
      <LearningPaths />
      <CreatorBanner />
      <Testimonials />
    </main>
  );
}
