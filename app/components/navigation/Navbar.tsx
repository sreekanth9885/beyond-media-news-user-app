"use client";

import { useState } from "react";
import { Category } from "@/app/types/category";
import DesktopMenu from "./DesktopMenu";
import MenuToggle from "./MenuToggle";
import MobileMenu from "./MobileMenu";
import Container from "../ui/layout/Container";
import Logo from "../ui/layout/Logo";
import { FaWhatsapp } from "react-icons/fa";
import { clientConfig } from "@/app/config/client";

interface Props {
  categories: Category[];
}

export default function Navbar({ categories }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Sticky Navigation */}
      <header className="sticky top-0 z-50 border-b border-border bg-background shadow-sm">
        <Container>
          <div className="flex h-16 items-center justify-between">

            {/* LEFT - LOGO */}
            <div className="flex items-center lg:hidden">
              <Logo
                type="navbar"
                width={50}
                height={50}
              />
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex flex-1 justify-center">
              <DesktopMenu categories={categories} />
            </div>

            {/* RIGHT - WHATSAPP + MENU */}
            <div className="flex items-center gap-2">

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${clientConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-[#25D366] text-3xl" />
              </a>

              {/* Mobile Menu */}
              <MenuToggle
                open={open}
                onClick={() => setOpen((prev) => !prev)}
              />

            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        open={open}
        categories={categories}
        onClose={() => setOpen(false)}
      />
    </>
  );
}