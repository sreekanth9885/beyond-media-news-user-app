import LatestNews from "../components/home/LatestNews";
import { getTrendingNews } from "../services/news";

export default async function TrendingPage() {
  const news = await getTrendingNews();

  return (
    <main className="mx-auto max-w-screen-xl px-5 py-10">
      <LatestNews news={news} title="Trending News" />
    </main>
  );
}
