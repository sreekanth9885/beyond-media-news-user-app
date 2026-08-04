import SiteHeader from "./components/navigation/SiteHeader";
import NewsCard from "./components/news/NewsCard";
import Main from "./components/ui/layout/Main";
import { getLatestNews } from "./services/news";


export default async function Home() {
  const news = await getLatestNews();
  return (
    <>
      <SiteHeader />

      <main className="mx-auto max-w-screen-xl p-5">

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {news.map(item => (
            <NewsCard
              key={item.id}
              news={item}
            />
          ))}

        </div>

      </main>
    </>
  );
}