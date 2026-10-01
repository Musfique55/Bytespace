import PathList from "./PathList";
import SectionHeader from "@/components/shared/SectionHeader";

export default function LearningPaths() {
  return (
    <div>
      <SectionHeader
        className="mt-8 mb-8"
        title="Explore Diverse Learning Paths at Bytespace"
        titleClassName="text-[#040819] mb-4"
        description={
          <>
            At Bytespace, we believe in empowering individuals through knowledge.
            Our diverse range of courses spans various <br /> fields, ensuring
            there's something for everyone. Unleash your potential and explore our
            carefully curated categories.
          </>
        }
        descriptionClassName="text-[#82868E] max-w-5xl"
      />
      <PathList />
    </div>
  );
}
