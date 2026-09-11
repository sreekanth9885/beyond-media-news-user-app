import LatestNews from "../components/home/LatestNews";
import { getTrendingNews } from "../services/news";

export default async function TrendingPage() {
  const news = await getTrendingNews();

  return (
    <main className="mx-auto py-5">
      <LatestNews news={news} title="Trending News" />
    </main>
  );
}
