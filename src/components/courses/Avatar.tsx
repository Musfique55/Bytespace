import AvatarGroup from "@/components/shared/AvatarGroup";

export default function Avatar({
  count,
  avatar_images,
}: {
  count: number;
  avatar_images: string[];
}) {
  return <AvatarGroup avatarImages={avatar_images} count={count} />;
}

