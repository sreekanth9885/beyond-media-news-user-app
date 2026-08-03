import Image from "next/image";
import Link from "next/link";
import { News } from "@/app/services/news";

interface Props {
  news: News;
}

export default function NewsCard({ news }: Props) {
  return (
    <Link href={`/news/${news.slug}`}>
      <article className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-lg">
        <div className="relative h-56 w-full">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${news.featured_image}`}
            alt={news.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-4">
          <span className="text-sm font-semibold text-red-600">
            {news.category_name}
          </span>

          <h2 className="mt-2 text-xl font-bold line-clamp-2">
            {news.title}
          </h2>

          <p className="mt-3 text-gray-600 line-clamp-3">
            {news.short_description}
          </p>
        </div>
      </article>
    </Link>
  );
}