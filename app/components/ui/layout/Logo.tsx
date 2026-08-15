import Image from "next/image";
import Link from "next/link";
import { clientConfig } from "@/app/config/client";

interface LogoProps {
  type?: "topBar" | "navbar" | "footer";
  width?: number;
  height?: number;
}

export default function Logo({
  type = "navbar",
  width = 180,
  height = 50,
}: LogoProps) {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src={clientConfig.logos[type]}
        alt={clientConfig.siteName}
        width={width}
        height={height}
        priority
      />
    </Link>
  );
}