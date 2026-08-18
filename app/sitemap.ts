import type { MetadataRoute } from "next";

import { clientConfig } from "./config/client";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/news?status=published&limit=10000`,
    {
      next: {
        revalidate: 3600,
      },
    },
  );

  if (!response.ok) {
    return [];
  }

  const result = await response.json();

  const news = result.data ?? [];

  const newsUrls = news.map((item: any) => ({
    url: `${clientConfig.siteUrl}/news/${item.slug}`,

    lastModified: item.updated_at
      ? new Date(item.updated_at)
      : new Date(item.published_at),

    changeFrequency: "daily" as const,

    priority: 0.8,
  }));

  return [
    {
      url: clientConfig.siteUrl,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 1,
    },

    {
      url: `${clientConfig.siteUrl}/latest`,
      changeFrequency: "hourly",
      priority: 0.9,
    },

    {
      url: `${clientConfig.siteUrl}/trending`,
      changeFrequency: "hourly",
      priority: 0.9,
    },

    ...newsUrls,
  ];
}
