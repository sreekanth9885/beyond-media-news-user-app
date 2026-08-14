"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye, Share2 } from "lucide-react";

import { News } from "@/app/types/news";
import { imageUrl } from "@/app/utils/image";

// Helper to format date
const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

interface Props {
  news: News;
}

export default function NewsCard({ news }: Props) {
  const handleShare = async () => {
    const url = `${window.location.origin}/news/${news.slug}`;

    try {
      // Native mobile/browser share
      if (navigator.share) {
        await navigator.share({
          title: news.title,
          text: news.short_description || news.title,
          url,
        });
        return;
      }

      // Fallback: copy URL
      await navigator.clipboard.writeText(url);

      alert("News link copied!");
    } catch (error) {
      // User cancelled sharing - do nothing
      if ((error as Error).name !== "AbortError") {
        console.error("Share failed:", error);
      }
    }
  };

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border bg-background shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="relative aspect-[16/10] shrink-0 overflow-hidden">
        <Link href={`/news/${news.slug}`}>
          <Image
            src={imageUrl(news.featured_image)}
            alt={news.title}
            fill
            className="object-cover transition duration-300 group-hover:scale-110"
          />
        </Link>

        {/* Category */}
        {news.category_name && (
          <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
            {news.category_name}
          </span>
        )}

        {/* YouTube */}
        {news.youtube_url && (
          <a
            href={news.youtube_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch on YouTube"
            className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-red-600 px-3 py-1.5 text-xs font-semibold text-white shadow-md transition hover:bg-red-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9 0-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
            </svg>
            Watch
          </a>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Title + Description */}
        <div className="space-y-3">
          <Link href={`/news/${news.slug}`}>
            <h3 className="line-clamp-2 text-xl font-bold transition hover:text-primary">
              {news.title}
            </h3>
          </Link>

          <p className="line-clamp-3 text-muted">{news.short_description}</p>
        </div>

        {/* Bottom Meta Row */}
        <div className="mt-auto flex items-center justify-between gap-3 text-xs text-muted-foreground">
          {/* Views + Date */}
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex shrink-0 items-center gap-1">
              <Eye className="h-3.5 w-3.5" />
              {news.views ?? 0}
            </span>

            {news.published_at && (
              <span className="truncate">{formatDate(news.published_at)}</span>
            )}
          </div>

          {/* Share */}
          <button
            type="button"
            onClick={handleShare}
            aria-label="Share this news"
            className="flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium text-foreground transition hover:bg-primary hover:text-white"
          >
            <Share2 className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
}
