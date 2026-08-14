import { News } from "@/app/types/news";
import Container from "../ui/layout/Container";
import SectionTitle from "../ui/SectionTitle";
import NewsCard from "../news/NewsCard";

interface Props {
  news: News[];
  title: string;
}

export default function LatestNews({ news, title }: Props) {
  if (!news.length) return null;

  return (
    <Container className="py-8">
      <SectionTitle title={title} />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {news.map((item) => (
          <NewsCard key={item.id} news={item} />
        ))}
      </div>
    </Container>
  );
}
