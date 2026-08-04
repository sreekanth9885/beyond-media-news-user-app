"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/app/lib/cn";

interface Props {
  title: string;
  href: string;
}

export default function NavItem({
  title,
  href,
}: Props) {
  const pathname = usePathname();

  const active =
    pathname === href ||
    pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      className={cn(
        "relative px-3 py-5 text-sm font-medium transition-colors",
        active
          ? "text-primary"
          : "text-foreground hover:text-primary"
      )}
    >
      {title}

      {active && (
        <span className="absolute bottom-0 left-0 h-[3px] w-full bg-primary" />
      )}
    </Link>
  );
}