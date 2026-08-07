import Header from "../ui/layout/Header";
import TopBar from "../ui/layout/TopBar";
import Navbar from "./Navbar";

import { Category } from "@/app/types/category";

interface Props {
  categories: Category[];
}

export default function SiteHeader({ categories }: Props) {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar categories={categories} />
    </>
  );
}