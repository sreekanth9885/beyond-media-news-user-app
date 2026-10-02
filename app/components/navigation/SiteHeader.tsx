import TopBar from "../ui/layout/TopBar";
import Navbar from "./Navbar";
import GoogleTranslate from "../language/GoogleTranslate";
import { getCategories } from "@/app/services/category";

export default async function SiteHeader() {
  const categories = await getCategories();

  return (
    <>
      <div className="hidden md:block">
        <TopBar />
      </div>

      <Navbar categories={categories} />

      <div className="fixed right-4 top-4 z-[9999]">
        <GoogleTranslate />
      </div>
    </>
  );
}