import Image from "next/image";
import Link from "next/link";

import { getNewsBySlug, getLatestNews } from "@/app/services/news";

import { getHome } from "@/app/services/home";

import { imageUrl } from "@/app/utils/image";

import LatestNews from "@/app/components/home/LatestNews";
import AdvertisementInline from "@/app/components/advertisement/AdvertisementInline";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function NewsDetailsPage({ params }: Props) {
  const { slug } = await params;

  // Fetch everything in parallel
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

  const rightAdvertisements = home.advertisements.homepage_right ?? [];

  return (
    <main className="mx-auto max-w-screen-2xl px-4 py-10">
      {/* 3 COLUMN LAYOUT */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[250px_minmax(0,1fr)_250px]">
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

          {/* ================================= */}
          {/* LATEST NEWS */}
          {/* ================================= */}

          <section className="mt-10 border-t border-gray-200 pt-8">
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Latest News
              </h2>

              <div className="text-sm [&>div]:border-b [&>div]:border-gray-100 [&>div]:py-1.5 last:[&>div]:border-0">
                <LatestNews news={latestNews} />
              </div>
            </div>
          </section>
        </article>

        {/* ================================= */}
        {/* RIGHT ADVERTISEMENT */}
        {/* ================================= */}

        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            {rightAdvertisements.map((advertisement) => (
              <AdvertisementInline
                key={advertisement.id}
                advertisement={advertisement}
              />
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
}
