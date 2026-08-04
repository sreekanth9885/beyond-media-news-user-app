import Image from "next/image";
import Link from "next/link";

import { News } from "@/app/types/news";
import { imageUrl } from "@/app/utils/image";

interface Props {
  news: News;
}

export default function NewsCard({
  news,
}: Props) {
  return (
    <article className="overflow-hidden rounded-xl border border-border bg-white shadow-sm transition hover:shadow-lg">
      <Link href={`/news/${news.slug}`}>
        <Image
          src={imageUrl(news.featured_image)}
          alt={news.title}
          width={600}
          height={350}
          className="h-60 w-full object-cover"
        />
      </Link>

      <div className="space-y-3 p-5">
        <span className="text-sm font-semibold text-primary">
          {news.category_name}
        </span>

        <Link href={`/news/${news.slug}`}>
          <h3 className="line-clamp-2 text-xl font-bold hover:text-primary">
            {news.title}
          </h3>
        </Link>

        <p className="line-clamp-3 text-muted">
          {news.short_description}
        </p>
      </div>
    </article>
  );
}