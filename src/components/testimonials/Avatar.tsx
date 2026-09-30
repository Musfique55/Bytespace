import Image from "next/image";
import { Testimonial } from "./Testimonials";

export default function Avatar({ t }: { t: Testimonial }) {
  return t.avatar ? (
    <Image
      src={t.avatar}
      alt={t.name}
      width={80}
      height={80}
      className="rounded-full object-cover"
    />
  ) : (
    <span
      aria-hidden="true"
      className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white"
    >
      {t.name[0]}
    </span>
  );
}
