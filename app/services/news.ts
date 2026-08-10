// services/news.ts

import { News, SearchResponse } from "../types/news";
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

export async function searchNews(query: string): Promise<News[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/news?search=${encodeURIComponent(query)}&status=published&limit=20`,
    {
      next: {
        revalidate: 30,
      },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to search news");
  }

  const result: SearchResponse = await response.json();

  return result.data;
}