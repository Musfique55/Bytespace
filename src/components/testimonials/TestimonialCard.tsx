import Avatar from "./Avatar";
import { Testimonial } from "./Testimonials";

export default function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="rounded-2xl p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
      <Avatar t={t} />
      <figcaption className="mt-4">
        <p
          style={{
            fontSize: "1.25rem",
            fontFamily: "var(--font-poppins)",
            fontWeight: 600,
          }}
          className="text-black "
        >
          {t.name}
        </p>
        <p style={{ color: "#2563EB" }}>{t.role}</p>
      </figcaption>
      <p className="mt-5 text-gray-700">{t.quote}</p>
    </figure>
  );
}
