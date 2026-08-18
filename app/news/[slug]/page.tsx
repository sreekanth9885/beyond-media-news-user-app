import Image from "next/image";
import Link from "next/link";

import { getNewsBySlug, getLatestNews } from "@/app/services/news";
import { getHome } from "@/app/services/home";
import { imageUrl } from "@/app/utils/image";
import LatestNews from "@/app/components/home/LatestNews";
import AdvertisementInline from "@/app/components/advertisement/AdvertisementInline";
import TrendingPage from "@/app/trending/page";
import type { Metadata } from "next";
import { clientConfig } from "@/app/config/client";
import NewsArticleSchema from "@/app/components/seo/NewsArticleSchema";
interface Props {
  params: Promise<{ slug: string }>;
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const news = await getNewsBySlug(slug);

  if (!news) {
    return {
      title: "News Not Found",
      description: "The requested news article could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = news.title;

  const description = news.short_description?.trim() || news.title;

  const url = `${clientConfig.siteUrl}/news/${news.slug}`;

  const image = imageUrl(news.featured_image);

  return {
    title,

    description,

    keywords: [
      news.category_name,
      "Telugu News",
      "Breaking News",
      "Latest News",
      news.title,
    ].filter(Boolean),

    alternates: {
      canonical: url,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    openGraph: {
      type: "article",

      title,

      description,

      url,

      siteName: clientConfig.siteName,

      locale: "en_IN",

      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: news.title,
        },
      ],

      ...(news.published_at && {
        publishedTime: news.published_at,
      }),
    },

    twitter: {
      card: "summary_large_image",

      title,

      description,

      images: [
        {
          url: image,
          alt: news.title,
        },
      ],
    },
  };
}
export default async function NewsDetailsPage({ params }: Props) {
  const { slug } = await params;

  const [news, latestNews, home] = await Promise.all([
    getNewsBySlug(slug),
    getLatestNews(),
    getHome(),
  ]);

  if (!news) {
    return (
      <main className="mx-auto max-w-screen-xl px-5 py-10">
        <h1 className="text-2xl font-bold">News not found</h1>
      </main>
    );
  }

  const leftAdvertisements = home.advertisements.homepage_left ?? [];
  // Right advertisements are no longer used – we show latest news instead.

  // Limit to 9 items for a 3×3 grid (optional)
  const latestForGrid = latestNews.slice(0, 9);

  return (
    <main className="mx-auto max-w-screen-2xl px-4 py-10">
      {/* 3 COLUMN LAYOUT – right column widened to 320px */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[250px_minmax(0,1fr)_320px]">
        {/* ================================= */}
        {/* LEFT ADVERTISEMENT */}
        {/* ================================= */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            {leftAdvertisements.map((advertisement) => (
              <AdvertisementInline
                key={advertisement.id}
                advertisement={advertisement}
              />
            ))}
          </div>
        </aside>

        {/* ================================= */}
        {/* MAIN ARTICLE */}
        {/* ================================= */}
        <article className="min-w-0">
          <NewsArticleSchema news={news} />
          {/* News Top Advertisement */}
          {home.advertisements.news_top?.[0] && (
            <div className="mb-8">
              <AdvertisementInline
                advertisement={home.advertisements.news_top[0]}
              />
            </div>
          )}

          {/* Category */}
          <p className="font-semibold text-primary">{news.category_name}</p>

          {/* Title */}
          <h1 className="mt-3 text-3xl font-bold md:text-5xl">{news.title}</h1>

          {/* Featured Image */}
          <Image
            src={imageUrl(news.featured_image)}
            alt={news.title}
            width={1200}
            height={700}
            priority
            className="mt-6 mb-6 w-full rounded-xl object-cover"
          />

          {/* Short Description */}
          <p className="mt-6 text-lg text-muted">{news.short_description}</p>

          {/* News Middle Advertisement */}
          {home.advertisements.news_middle?.[0] && (
            <div className="my-8">
              <AdvertisementInline
                advertisement={home.advertisements.news_middle[0]}
              />
            </div>
          )}

          {/* Article Content */}
          <div className="prose mt-8 max-w-none">{news.content}</div>

          {/* YouTube Button */}
          {news.youtube_url && (
            <div className="mt-8">
              <Link
                href={news.youtube_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-lg bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
                </svg>
                Watch on YouTube
              </Link>
            </div>
          )}

          {/* Created By */}
          {news.created_by_name && (
            <div className="mt-4 border-t border-gray-600 pt-4">
              <p className="text-sm text-muted-foreground">
                Posted by{" "}
                <span className="font-medium">{news.created_by_name}</span>
                {news.created_by_email && (
                  <span className="ml-1 text-muted-foreground">
                    ({news.created_by_email})
                  </span>
                )}
                {news.created_by_roles && (
                  <span className="ml-2 text-xs text-muted-foreground">
                    · {news.created_by_roles}
                  </span>
                )}
              </p>
              Views{" "}
              {news.views && (
                <span className="ml-2 text-xs text-muted-foreground">
                  · {news.views}
                </span>
              )}
            </div>
          )}

          {/* News Bottom Advertisement */}
          {home.advertisements.news_bottom?.[0] && (
            <div className="my-8">
              <AdvertisementInline
                advertisement={home.advertisements.news_bottom[0]}
              />
            </div>
          )}
        </article>

        {/* ================================= */}
        {/* RIGHT SIDEBAR – LATEST NEWS GRID */}
        {/* ================================= */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Latest News
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {latestForGrid.map((item) => (
                  <Link
                    key={item.id}
                    href={`/news/${item.slug}`}
                    className="group block overflow-hidden rounded border border-gray-100 transition hover:shadow-md"
                  >
                    {item.featured_image && (
                      <div className="relative aspect-square overflow-hidden bg-gray-100">
                        <Image
                          src={imageUrl(item.featured_image)}
                          alt={item.title}
                          fill
                          className="object-cover transition group-hover:scale-105"
                          sizes="(max-width: 1024px) 33vw, 100px"
                        />
                      </div>
                    )}
                    <div className="p-1.5 text-center text-xs leading-tight">
                      <span className="line-clamp-2 font-medium text-gray-800 group-hover:text-primary">
                        {item.title}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
      <TrendingPage />
    </main>
  );
}
