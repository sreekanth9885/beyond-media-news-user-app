"use client";

import { useState } from "react";
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

const DESKTOP_VISIBLE = 5;
const MOBILE_VISIBLE = 2;

export default function BreakingNewsSlider({
  news,
}: Props) {
  const [startIndex, setStartIndex] = useState(0);

  if (!news.length) return null;

  const canMove = news.length > DESKTOP_VISIBLE;

  const handlePrevious = () => {
    setStartIndex((prev) =>
      prev === 0 ? news.length - DESKTOP_VISIBLE : prev - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev >= news.length - DESKTOP_VISIBLE
        ? 0
        : prev + 1
    );
  };

  const visibleNews = news.slice(
    startIndex,
    startIndex + DESKTOP_VISIBLE
  );

  return (
    <div className="flex items-center gap-2 py-2">

      {/* Previous */}
      {canMove && (
        <button
          type="button"
          onClick={handlePrevious}
          aria-label="Previous breaking news"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/50 bg-white/10 text-white transition hover:bg-white/20"
        >
          <ChevronLeft size={18} />
        </button>
      )}

      {/* Desktop */}
      <div className="hidden min-w-0 flex-1 gap-4 md:grid md:grid-cols-5">
        {visibleNews.map((item) => (
          <Link
            key={item.id}
            href={`/news/${item.slug}`}
            className="min-w-0 border-r border-white/20 pr-4 text-sm text-white last:border-0 hover:underline"
          >
            <span className="block truncate">
              {item.title}
            </span>
          </Link>
        ))}
      </div>

      {/* Mobile */}
      <div className="grid min-w-0 flex-1 grid-cols-2 gap-3 md:hidden">
        {visibleNews.slice(0, MOBILE_VISIBLE).map((item) => (
          <Link
            key={item.id}
            href={`/news/${item.slug}`}
            className="min-w-0 border-r border-white/20 pr-3 text-sm text-white last:border-0 hover:underline"
          >
            <span className="block truncate">
              {item.title}
            </span>
          </Link>
        ))}
      </div>

      {/* Next */}
      {canMove && (
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next breaking news"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/50 bg-white/10 text-white transition hover:bg-white/20"
        >
          <ChevronRight size={18} />
        </button>
      )}

    </div>
  );
}