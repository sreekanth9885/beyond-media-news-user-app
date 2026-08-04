import Image from "next/image";
import Link from "next/link";
import { clientConfig } from "@/app/config/client";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      {/* <Image
        src={clientConfig.logo}
        alt={clientConfig.siteName}
        width={180}
        height={50}
        priority
      /> */}

      <span className="hidden text-xl font-bold lg:block">
        {clientConfig.siteName}
      </span>
    </Link>
  );
}