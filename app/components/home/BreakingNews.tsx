import Link from "next/link";
import Container from "../ui/layout/Container";

interface Props {
  news: {
    id: number;
    title: string;
    slug: string;
  }[];
}

export default function BreakingNews({ news }: Props) {
  if (!news.length) return null;

  return (
    <div className="bg-red-600 text-white">
      <Container>
        <div className="flex overflow-x-auto py-3 gap-6">

          <span className="font-bold whitespace-nowrap">
            BREAKING
          </span>

          {news.map(item => (
            <Link
              key={item.id}
              href={`/news/${item.slug}`}
              className="whitespace-nowrap hover:underline"
            >
              {item.title}
            </Link>
          ))}

        </div>
      </Container>
    </div>
  );
}