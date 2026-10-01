import CategoryPills from "@/components/category/CategoryPills";
import CourseGrid from "@/components/courses/Courses";
import CreatorBanner from "@/components/creatorBanner/CreatorBanner";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import LearningPaths from "@/components/learningPaths/LearningPaths";
import Sponsors from "@/components/sponsors/Sponsors";
import StatsSection from "@/components/stats/StatsSection";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <main className="max-w-full">
      <div>
        <Header />
        <Hero />
      </div>
      <Sponsors />
      <CategoryPills />
      <CourseGrid />
      <LearningPaths />
      <StatsSection />
      <CreatorBanner />
      <Testimonials />
      <Footer />
    </main>
  );
}
