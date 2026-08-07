import Image from "next/image";

import { getNewsBySlug } from "@/app/services/news";
import { imageUrl } from "@/app/utils/image";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function NewsDetailsPage({
  params,
}: Props) {
  const { slug } = await params;

  const news = await getNewsBySlug(slug);
  console.log("News", news)
  return (
    <main className="mx-auto max-w-5xl p-6">
      <span className="font-semibold text-primary">
        {news.category_name}
      </span>

      <h1 className="mt-3 text-5xl font-bold">
        {news.title}
      </h1>
      <Image
        src={imageUrl(news.featured_image)}
        alt={news.title}
        width={600}
        height={400}
        className="mb-6 rounded-xl object-cover"
      />



      <p className="mt-6 text-muted">
        {news.short_description}
      </p>

      <div className="prose mt-8 max-w-none">
        {news.content}
      </div>
    </main>
  );
}