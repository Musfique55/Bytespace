import TestimonialCard from "./TestimonialCard";
import GlowEffect from "@/components/shared/GlowEffect";
import SectionHeader from "@/components/shared/SectionHeader";

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: "sarah",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
    avatar: "/assets/clients/0577f0e9b7fca2f32639871454da0de95f951709.png",
  },
  {
    id: "james",
    name: "James L.",
    role: "Lifelong Learner",
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
    avatar: "/assets/clients/63c4be83222c85e6c852819bc5d4b24a87a87fb6.png",
  },
  {
    id: "alex",
    name: "Alex B.",
    role: "Inspired Creator",
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
    avatar: "/assets/clients/728c3b1d33fe647a46f9bf668322f8c1d94ed937.png",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] px-6 py-16 sm:py-20">
      {/* soft background glows */}
      <GlowEffect className="-right-50 top-20 h-140 w-105 bg-[#CBFC01]/20" />
      <GlowEffect className="top-10 left-137.5 h-105 w-60 bg-[#CBFC01]/30" />
      <GlowEffect className="-bottom-32 -left-24 h-95 w-95 bg-[#003BE2]/20" />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          align="grid"
          title="Discover What Our Community Is Saying"
          description="At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators."
        />

        <div className="mt-12 grid items-start gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
