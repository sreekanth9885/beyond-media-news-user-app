// app/components/navigation/SiteHeader.tsx

import Header from "../ui/layout/Header";
import TopBar from "../ui/layout/TopBar";
import Navbar from "./Navbar";
import { getCategories } from "@/app/services/category";

export default async function SiteHeader() {
  const categories = await getCategories();

  return (
    <>
      {/* Hidden on mobile, visible from md and above */}
      <div className="hidden md:block">
        <TopBar />
      </div>

      <div>
        {/* <Header /> */}
      </div>

      <Navbar categories={categories} />
    </>
  );
}