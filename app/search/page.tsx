import NewsCard from "../components/news/NewsCard";
import { searchNews } from "../services/news";

interface Props {
  searchParams: Promise<{
    q?: string;
  }>;
}

export default async function SearchPage({
  searchParams,
}: Props) {
  const params = await searchParams;

  const query = params.q?.trim() || "";

  if (!query) {
    return (
      <main className="mx-auto max-w-screen-xl px-5 py-10">
        <h1 className="text-3xl font-bold">
          Search News
        </h1>

        <p className="mt-3 text-muted">
          Enter a keyword to search for news.
        </p>
      </main>
    );
  }

  const news = await searchNews(query);

  return (
    <main className="mx-auto max-w-screen-xl px-5 py-10">

      {/* Page Header */}
      <div className="mb-8">

        <h1 className="text-3xl font-bold">
          Search Results
        </h1>

        <p className="mt-2 text-muted">
          Results for{" "}
          <span className="font-semibold text-foreground">
            "{query}"
          </span>
        </p>

      </div>

      {/* Results */}
      {news.length === 0 ? (
        <div className="rounded-xl border p-10 text-center">
          <h2 className="text-xl font-semibold">
            No news found
          </h2>

          <p className="mt-2 text-muted">
            Try searching with another keyword.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {news.map((item) => (
            <NewsCard
              key={item.id}
              news={item}
            />
          ))}
        </div>
      )}

    </main>
  );
}