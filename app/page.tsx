import NewsCard from "./components/news/NewsCard";
import { getLatestNews } from "./services/news";

export default async function HomePage() {
  const response = await getLatestNews();

  return (
    <main className="mx-auto max-w-7xl p-6">
      <h1 className="mb-8 text-3xl font-bold">
        Latest News
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {response.data.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </main>
  );
}