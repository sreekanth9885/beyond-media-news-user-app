import { Category } from "@/app/types/category";
import { getNewsByCategory } from "@/app/services/category";

import CategorySection from "./CategorySection";

interface Props {
  categories: Category[];
}

export default async function HomeCategorySections({
  categories,
}: Props) {
  const sections = await Promise.all(
    categories.map(async (category) => {
      const news = await getNewsByCategory(category.slug);

      return {
        category,
        news: news.slice(0, 9),
      };
    })
  );

  return (
    <div className="space-y-16">
      {sections
        .filter((section) => section.news.length > 0)
        .map((section) => (
          <CategorySection
            key={section.category.id}
            category={section.category}
            news={section.news}
          />
        ))}
    </div>
  );
}