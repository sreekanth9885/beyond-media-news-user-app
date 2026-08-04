"use client";

import { Menu } from "lucide-react";

interface Props {
  onClick: () => void;
}

export default function MenuToggle({
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="lg:hidden rounded-lg border border-border p-2"
    >
      <Menu size={22} />
    </button>
  );
}