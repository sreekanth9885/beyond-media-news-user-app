import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Category } from "@/app/types/category";
import { News } from "@/app/types/news";
import { imageUrl } from "@/app/utils/image";

interface Props {
  category: Category;
  news: News[];
}

export default function CategorySection({
  category,
  news,
}: Props) {
  if (!news.length) return null;

  const featured = news[0];
  const sideNews = news.slice(1, 5);
  const bottomNews = news.slice(5, 9);

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-3">
        <h2 className="text-2xl font-bold">
          {category.name}
        </h2>

        <Link
          href={`/category/${category.slug}`}
          className="flex items-center gap-2 text-primary font-medium hover:underline"
        >
          View All
          <ArrowRight size={18} />
        </Link>
      </div>

      {/* Top Layout */}
      <div className="grid gap-6 lg:grid-cols-12">
        {/* Featured */}
        <div className="lg:col-span-7">
          <Link href={`/news/${featured.slug}`}>
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src={imageUrl(featured.featured_image)}
                alt={featured.title}
                fill
                className="object-cover transition duration-300 hover:scale-105"
              />
            </div>

            <h3 className="mt-4 text-2xl font-bold hover:text-primary">
              {featured.title}
            </h3>

            <p className="mt-2 text-muted line-clamp-3">
              {featured.short_description}
            </p>
          </Link>
        </div>

        {/* Side News */}
        <div className="space-y-5 lg:col-span-5">
          {sideNews.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.slug}`}
              className="flex gap-4"
            >
              <div className="relative h-24 w-32 flex-shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={imageUrl(item.featured_image)}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h4 className="line-clamp-2 font-semibold hover:text-primary">
                  {item.title}
                </h4>

                <p className="mt-1 line-clamp-2 text-sm text-muted">
                  {item.short_description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom News */}
      {bottomNews.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {bottomNews.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.slug}`}
              className="group"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                <Image
                  src={imageUrl(item.featured_image)}
                  alt={item.title}
                  fill
                  className="object-cover transition group-hover:scale-105"
                />
              </div>

              <h4 className="mt-3 line-clamp-2 font-semibold group-hover:text-primary">
                {item.title}
              </h4>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}