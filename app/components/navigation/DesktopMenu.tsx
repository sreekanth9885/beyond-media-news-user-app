import NavItem from "./NavItem";
import { Category } from "@/app/types/category";

interface Props {
  categories: Category[];
}

export default function DesktopMenu({
  categories,
}: Props) {
  return (
    <nav className="hidden items-center gap-1 lg:flex">
      <NavItem title="Home" href="/" />

      {categories.map((category) => (
        <NavItem
          key={category.id}
          title={category.name}
          href={`/category/${category.slug}`}
        />
      ))}
    </nav>
  );
}