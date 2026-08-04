"use client";

import { Search } from "lucide-react";

export default function SearchButton() {
  return (
    <button
      className="
        rounded-full
        border
        border-border
        p-2
        transition
        hover:bg-primary
        hover:text-white
      "
    >
      <Search size={18} />
    </button>
  );
}