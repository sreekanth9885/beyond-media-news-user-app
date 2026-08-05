import Image from "next/image";
import Link from "next/link";

import { Advertisement as AdvertisementType } from "@/app/types/advertisement";
import { imageUrl } from "@/app/utils/image";

interface Props {
  advertisement: AdvertisementType;
}

export default function Advertisement({
  advertisement,
}: Props) {
  return (
    <Link
      href={advertisement.target_url}
      target="_blank"
    >
      <Image
        src={imageUrl(advertisement.image)}
        alt={advertisement.title}
        width={1200}
        height={250}
        className="w-full rounded-xl"
      />
    </Link>
  );
}