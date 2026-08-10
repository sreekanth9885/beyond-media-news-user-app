import LatestNews from "../components/home/LatestNews";
import { getLatestNews } from "../services/news";

export default async function LatestPage() {
  const news = await getLatestNews();

  return (
    <main className="mx-auto max-w-screen-xl px-5 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Latest News
        </h1>

        <p className="mt-2 text-muted">
          Latest news and updates
        </p>
      </div>

      <LatestNews news={news} />
    </main>
  );
}