"use client";

import Link from "next/link";
import { Category } from "@/app/types/category";

interface Props {
  open: boolean;
  categories: Category[];
}

export default function MobileMenu({
  open,
  categories,
}: Props) {
  if (!open) return null;

  return (
    <div className="border-t border-border bg-background lg:hidden">
      <div className="flex flex-col py-4">
        <Link
          href="/"
          className="px-6 py-3 hover:bg-surface"
        >
          Home
        </Link>

        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            className="px-6 py-3 hover:bg-surface"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
}