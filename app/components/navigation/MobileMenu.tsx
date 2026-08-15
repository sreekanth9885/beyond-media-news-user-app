"use client";

import Link from "next/link";
import { Category } from "@/app/types/category";

interface Props {
  open: boolean;
  categories: Category[];
  onClose: () => void;
}

export default function MobileMenu({
  open,
  categories,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-x-0 top-16 z-40 border-b border-border bg-background shadow-lg lg:hidden">
      <div className="max-h-[calc(100vh-4rem)] overflow-y-auto">

        {/* Home */}
        <Link
          href="/"
          onClick={onClose}
          className="block border-b border-border px-6 py-4 text-base font-medium hover:bg-surface"
        >
          Home
        </Link>

        {/* Categories */}
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            onClick={onClose}
            className="block border-b border-border px-6 py-4 text-base hover:bg-surface"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
}