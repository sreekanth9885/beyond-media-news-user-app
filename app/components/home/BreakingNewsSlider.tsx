"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  slug: string;
}

interface Props {
  news: NewsItem[];
}

export default function BreakingNewsSlider({ news }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);

  if (!news.length) return null;

  // Duplicate items for seamless infinite scrolling
  const scrollingNews = [...news, ...news];

  const scrollLeft = () => {
    trackRef.current?.scrollBy({
      left: -250,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    trackRef.current?.scrollBy({
      left: 250,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative overflow-hidden py-2">
      {/* Left Chevron */}
      <button
        type="button"
        onClick={scrollLeft}
        aria-label="Previous breaking news"
        className="absolute left-0 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-red-600/90 text-white shadow-md transition hover:bg-red-700"
      >
        <ChevronLeft size={18} />
      </button>

      {/* Right Chevron */}
      <button
        type="button"
        onClick={scrollRight}
        aria-label="Next breaking news"
        className="absolute right-0 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-red-600/90 text-white shadow-md transition hover:bg-red-700"
      >
        <ChevronRight size={18} />
      </button>

      {/* Scrolling area */}
      <div
        ref={trackRef}
        className="breaking-news-scroll overflow-hidden"
      >
        <div className="breaking-news-track flex w-max items-center">
          {scrollingNews.map((item, index) => (
            <Link
              key={`${item.id}-${index}`}
              href={`/news/${item.slug}`}
              className="
                flex
                w-[180px]
                shrink-0
                items-center
                border-r
                border-white/25
                px-4
                text-sm
                text-white
                hover:underline
                md:w-[16.6667vw]
                lg:w-[180px]
                xl:w-[200px]
              "
            >
              <span className="block truncate">
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .breaking-news-track {
          animation: breaking-news-scroll 30s linear infinite;
        }

        .breaking-news-scroll:hover .breaking-news-track {
          animation-play-state: paused;
        }

        @keyframes breaking-news-scroll {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
