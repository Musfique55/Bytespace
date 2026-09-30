import type { LucideIcon } from "lucide-react";
import {
  PencilRuler,
  Smartphone,
  Laptop,
  Building2,
  Megaphone,
  Camera,
} from "lucide-react";
import PathCard from "./PathCard";

export type Category = { id: string; label: string; icon: string };

const CATEGORIES: Category[] = [
  { id: "design", label: "Design", icon: "/icons/design.svg" },
  { id: "development", label: "Development", icon: "/icons/mobile.svg" },
  { id: "it-software", label: "IT & Software", icon: "/icons/laptop.svg" },
  { id: "business", label: "Business", icon: "/icons/building.svg" },
  { id: "marketing", label: "Marketing", icon: "/icons/communication.svg" },
  { id: "photography", label: "Photography", icon: "/icons/idcard.svg" },
];

export default function PathList() {
  return (
    <section className="bg-white px-6 py-8">
      <div className="overflow-x-auto max-w-5xl grid grid-cols-2 gap-5 lg:grid-cols-6 mx-auto">
        {CATEGORIES.map(({ id, label, icon }) => (
          <PathCard key={id} label={label} icon={icon} />
        ))}
      </div>
    </section>
  );
}
