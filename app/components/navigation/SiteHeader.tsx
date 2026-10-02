import TopBar from "../ui/layout/TopBar";
import Navbar from "./Navbar";
import { getCategories } from "@/app/services/category";

export default async function SiteHeader() {
  const categories = await getCategories();

  return (
    <>
      <div className="hidden md:block">
        <TopBar />
      </div>

      <Navbar categories={categories} />
    </>
  );
}