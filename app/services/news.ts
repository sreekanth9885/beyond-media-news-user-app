import { ApiResponse, News } from "@/app/types/news";

export async function getLatestNews() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news`, {
    next: {
      revalidate: 60,
    },
  });

  const result: ApiResponse<News[]> = await response.json();

  return result.data;
}
export async function getNewsBySlug(slug: string): Promise<News> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/news/${slug}`,
    {
      next: {
        revalidate: 60,
      },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch news");
  }

  const result: ApiResponse<News> = await response.json();

  return result.data;
}
