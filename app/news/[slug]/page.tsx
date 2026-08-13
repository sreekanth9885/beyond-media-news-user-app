import Image from "next/image";
import Link from "next/link";

import { getNewsBySlug, getLatestNews } from "@/app/services/news";
import { imageUrl } from "@/app/utils/image";
import LatestNews from "@/app/components/home/LatestNews"; // adjust import path to match your project

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function NewsDetailsPage({ params }: Props) {
  const { slug } = await params;

  // Fetch main news and latest news in parallel
  const [news, latestNews] = await Promise.all([
    getNewsBySlug(slug),
    getLatestNews(), // you can adjust the limit
  ]);

  if (!news) {
    return (
      <main className="mx-auto max-w-screen-xl px-5 py-10">
        <h1 className="text-2xl font-bold">News not found</h1>
      </main>
    );
  }

  return (
    <>
      <main className="mx-auto max-w-screen-xl px-5 py-10">
        {/* Two-column layout: main content (left) + sidebar (right) */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* ----- LEFT COLUMN: Full article ----- */}
          <div className="lg:col-span-2">
            {/* Category */}
            <p className="font-semibold text-primary">{news.category_name}</p>

            {/* Title */}
            <h1 className="mt-3 text-3xl font-bold md:text-5xl">
              {news.title}
            </h1>

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
                  {/* YouTube Icon */}
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

                {/* --- CREATED BY (moved outside, always shown) --- */}
                {news.created_by_name && (
                  <p className="mt-4 text-sm text-muted-foreground">
                    Posted by{" "}
                    <span className="font-medium">{news.created_by_name}</span>
                  </p>
                )}
              </div>
            )}
          </div>

          {/* ----- RIGHT COLUMN: Sidebar with Latest News ----- */}
        </div>
      </main>
      <LatestNews news={latestNews} />
    </>
  );
}
