// app/components/navigation/SiteHeader.tsx

import Header from "../ui/layout/Header";
import TopBar from "../ui/layout/TopBar";
import Navbar from "./Navbar";
import { getCategories } from "@/app/services/category";

export default async function SiteHeader() {
  const categories = await getCategories();

  return (
    <>
      <>
        {/* Desktop TopBar + Header */}
        <div className="hidden md:block">
          <TopBar />
          <Header />
        </div>

        {/* Navbar - Mobile + Desktop */}
      <Navbar categories={categories} />
    </>
    </>
  );
}