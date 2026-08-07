// app/components/navigation/SiteHeader.tsx

import Header from "../ui/layout/Header";
import TopBar from "../ui/layout/TopBar";
import Navbar from "./Navbar";
import { getCategories } from "@/app/services/category";

export default async function SiteHeader() {
  const categories = await getCategories();

  return (
    <>
      <TopBar />
      <Header />
      <Navbar categories={categories} />
    </>
  );
}