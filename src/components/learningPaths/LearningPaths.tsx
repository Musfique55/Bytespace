import PathList from "./PathList";

export default function LearningPaths() {
  return (
    <div>
      <div className="mt-8 mb-8 flex flex-col items-center">
        <h2 style={{ fontSize: "2.25rem" }} className="text-[#040819] mb-4">
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className="text-[#82868E] max-w-5xl">
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various <br /> fields, ensuring
          there's something for everyone. Unleash your potential and explore our
          carefully curated categories.
        </p>
      </div>
      <PathList />
    </div>
  );
}
