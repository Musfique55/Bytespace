import { Star } from "lucide-react";
import Avatar from "../courses/Avatar";

const AVATAR_IMAGES = [
  "/assets/stats/creators/1e078348a54489bfd231d82fe1944770883c8d80.png",
  "/assets/stats/creators/7fdccc783264eedc4fb989984eecbc4058a219f2.png",
  "/assets/stats/creators/9ef8cb329b949267cc8214b6727067c4a13af4b4.png",
  "/assets/stats/creators/83fb3e04056cc892636460bee5791aa3f243854c.png",
  "/assets/stats/creators/5824acacb3b76175bc84084ec18597109498f96d.png",
  "/assets/stats/creators/b44979e1c98ecb3ec92ac86805fe55581fbeaa60.png",
  "/assets/stats/creators/f3cf29a8fed39589ceb38423e65b26b8d6c93123.png",
];

export default function HappyStudentsCard() {
  return (
    <div className="w-64 rounded-xl bg-white p-3 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
      <p
        style={{ fontSize: "16px", lineHeight: "24px" }}
        className="font-semibold text-gray-900"
      >
        Happy Students
      </p>
      <p
        style={{ fontWeight: "700", fontSize: "10px" }}
        className=" text-[#242528] flex items-center gap-1"
      >
        4.5
        <span
          style={{ fontWeight: "400" }}
          className="text-inherit flex items-center gap-1"
        >
          (240){" "}
          <Star
            height={16}
            width={16}
            fill="#D4FB20"
            color="#D4FB20"
            className="inline-block "
          />
        </span>
      </p>
      <div className="mt-2 flex items-center">
        <Avatar avatar_images={AVATAR_IMAGES} count={1} />
      </div>
    </div>
  );
}
