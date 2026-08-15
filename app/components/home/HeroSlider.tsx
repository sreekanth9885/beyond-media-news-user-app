"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { News } from "@/app/types/news";
import { imageUrl } from "@/app/utils/image";

interface Props {
  news: News[];
}

export default function HeroSlider({ news }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!news.length) return null;

  /*
   * We want:
   *
   * Main Hero
   * + 4 side stories
   *
   * So we need at least 5 stories.
   */
  const visibleNews = Array.from(
    { length: Math.min(5, news.length) },
    (_, index) => news[(currentIndex + index) % news.length]
  );

  const hero = visibleNews[0];
  const sideNews = visibleNews.slice(1);

  const previousHero = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? news.length - 1 : prev - 1
    );
  };

  const nextHero = () => {
    setCurrentIndex((prev) =>
      prev === news.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative">

      {/* =========================
          HERO GRID
      ========================== */}

      <div className="grid gap-4 lg:grid-cols-2">

        {/* =========================
            MAIN HERO
        ========================== */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {sideNews.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.slug}`}
              className="
                group
                relative
                h-[240px]
                overflow-hidden
                rounded-2xl
                md:h-[242px]
              "
            >

              {/* Image */}
              <Image
                src={imageUrl(item.featured_image)}
                alt={item.title}
                fill
                className="
                  object-cover
                  transition
                  duration-500
                  group-hover:scale-105
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">

                {/* Category */}
                {item.category_name && (
                  <span className="inline-block rounded-full bg-red-500 px-3 py-1 text-xs font-semibold">
                    {item.category_name}
                  </span>
                )}

                {/* Title */}
                <h2 className="mt-3 line-clamp-2 text-lg font-bold leading-tight md:text-xl">
                  {item.title}
                </h2>

                {/* Date */}
                {item.created_at && (
                  <div className="mt-3 flex items-center gap-2 text-xs text-white/90">
                    <span>By Admin User</span>

                    <span>•</span>

                    <span>
                      {new Date(item.created_at).toLocaleDateString(
                        "en-GB",
                        {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        }
                      )}
                    </span>
                  </div>
                )}
              </div>
            </Link>
          ))}

        </div>
        <div className="relative h-[420px] overflow-hidden rounded-2xl lg:row-span-2 lg:h-[500px]">

          <Link
            href={`/news/${hero.slug}`}
            className="block h-full"
          >
            <Image
              src={imageUrl(hero.featured_image)}
              alt={hero.title}
              fill
              priority
              className="object-cover transition duration-500 hover:scale-105"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-7">

              {hero.category_name && (
                <span className="inline-block rounded-full bg-red-500 px-3 py-1 text-sm font-semibold">
                  {hero.category_name}
                </span>
              )}

              <h1 className="mt-4 max-w-2xl text-2xl font-bold leading-tight md:text-4xl">
                {hero.title}
              </h1>

              {hero.created_at && (
                <div className="mt-4 flex items-center gap-2 text-sm text-white/90">
                  <span>By Admin User</span>

                  <span>•</span>

                  <span>
                    {new Date(hero.created_at).toLocaleDateString(
                      "en-GB",
                      {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      }
                    )}
                  </span>
                </div>
              )}
            </div>
          </Link>

          {/* =================================
      MOBILE PREVIOUS BUTTON
  ================================== */}
          {news.length > 1 && (
            <button
              type="button"
              onClick={previousHero}
              aria-label="Previous hero news"
              className="
        absolute
        left-2
        top-1/2
        z-30
        flex
        h-10
        w-10
        -translate-y-1/2
        items-center
        justify-center
        rounded-full
        bg-white/90
        text-black
        shadow-lg
        transition
        hover:bg-white
        active:scale-95
        lg:hidden
      "
            >
              <ChevronLeft size={22} />
            </button>
          )}

          {/* =================================
      MOBILE NEXT BUTTON
  ================================== */}
          {news.length > 1 && (
            <button
              type="button"
              onClick={nextHero}
              aria-label="Next hero news"
              className="
        absolute
        right-2
        top-1/2
        z-30
        flex
        h-10
        w-10
        -translate-y-1/2
        items-center
        justify-center
        rounded-full
        bg-white/90
        text-black
        shadow-lg
        transition
        hover:bg-white
        active:scale-95
        lg:hidden
      "
            >
              <ChevronRight size={22} />
            </button>
          )}

        </div>

        {/* =========================
            RIGHT SIDE NEWS
        ========================== */}


      </div>

      {/* =========================
          NEXT BUTTON
      ========================== */}
      {/* =========================
    DESKTOP PREVIOUS BUTTON
========================= */}

      {news.length > 1 && (
        <button
          type="button"
          onClick={previousHero}
          aria-label="Previous hero news"
          className="
      absolute
      left-4
      top-1/2
      z-30
      hidden
      h-12
      w-12
      -translate-y-1/2
      items-center
      justify-center
      rounded-full
      bg-white
      text-black
      shadow-lg
      transition
      hover:scale-105
      hover:bg-gray-100
      lg:flex
    "
        >
          <ChevronLeft size={28} />
        </button>
      )}
      {news.length > 1 && (
        <button
          type="button"
          onClick={nextHero}
          aria-label="Next hero news"
          className="
            absolute
            right-4
            top-1/2
            z-30
            hidden
            h-12
            w-12
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-white
            text-black
            shadow-lg
            transition
            hover:scale-105
            hover:bg-gray-100
            lg:flex
          "
        >
          <ChevronRight size={28} />
        </button>
      )}
      {/* Counter */}
      {news.length > 1 && (
        <div className="absolute bottom-3 right-3 z-30 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
          {currentIndex + 1} / {news.length}
        </div>
      )}
    </div>
  );
}