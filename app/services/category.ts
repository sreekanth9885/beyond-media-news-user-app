import { Category, CategoryResponse } from "@/app/types/category";
import { ApiResponse, News } from "../types/news";

export async function getCategories(): Promise<Category[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/categories`,
    {
      next: {
        revalidate: 300, // Cache for 5 minutes
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  const result: CategoryResponse = await response.json();

  return result.data.filter(
    (category) => category.status === "active"
  );
}
export async function getNewsByCategory(slug: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/news/category/${slug}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch category news");
  }

  const result = await response.json();

  return result.data;
}