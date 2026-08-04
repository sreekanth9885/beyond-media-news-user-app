"use client";

import { useState } from "react";
import { Category } from "@/app/types/category";


import DesktopMenu from "./DesktopMenu";
import MenuToggle from "./MenuToggle";
import MobileMenu from "./MobileMenu";
import Container from "../ui/layout/Container";

interface Props {
  categories: Category[];
}

export default function Navbar({
  categories,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-40 border-b border-border bg-background shadow-sm">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <DesktopMenu categories={categories} />

            <MenuToggle
              onClick={() => setOpen(!open)}
            />
          </div>
        </Container>
      </div>

      <MobileMenu
        open={open}
        categories={categories}
      />
    </>
  );
}