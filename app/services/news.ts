// services/news.ts

import { getHome } from "./home";

export async function getNewsBySlug(slug: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/news/details/${slug}`,
    {
      next: {
        revalidate: 60,
      },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch news");
  }

  const result = await response.json();
  console.log("result", result);
  return result.data.news;
}
export async function getLatestNews() {
  const home = await getHome();

  return home.latest;
}

export async function getTrendingNews() {
  const home = await getHome();

  return home.trending;
}