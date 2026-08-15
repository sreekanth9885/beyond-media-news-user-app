"use client";

import { Menu, X } from "lucide-react";

interface Props {
  open: boolean;
  onClick: () => void;
}

export default function MenuToggle({
  open,
  onClick,
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-border hover:bg-surface transition lg:hidden"
    >
      {open ? <X size={22} /> : <Menu size={22} />}
    </button>
  );
}