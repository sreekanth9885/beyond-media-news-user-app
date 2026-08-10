import LatestNews from "../components/home/LatestNews";
import { getTrendingNews } from "../services/news";

export default async function TrendingPage() {
  const news = await getTrendingNews();

  return (
    <main className="mx-auto max-w-screen-xl px-5 py-10">

      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Trending News
        </h1>

        <p className="mt-2 text-muted">
          Most viewed news and trending stories
        </p>
      </div>

      <LatestNews news={news} />

    </main>
  );
}