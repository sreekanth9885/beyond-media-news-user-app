import LatestNews from "../components/home/LatestNews";
import { getLatestNews } from "../services/news";

export default async function LatestPage() {
  const news = await getLatestNews();

  return (
    <main className="mx-auto max-w-screen-xl px-5 py-10">
      <LatestNews news={news} title="Latest News" />
    </main>
  );
}
