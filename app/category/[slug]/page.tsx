import { getNewsByCategory } from "@/app/services/category";
import NewsCard from "@/app/components/news/NewsCard";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CategoryPage({
  params,
}: Props) {
  const { slug } = await params;

  const news = await getNewsByCategory(slug);

  return (
    <main className="mx-auto max-w-screen-xl p-6">
      <h1 className="mb-8 text-4xl font-bold capitalize">
        {slug}
      </h1>

      {news.length === 0 ? (
        <p>No news found.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item: any) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>
      )}
    </main>
  );
}