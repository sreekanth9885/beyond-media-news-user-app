import Container from "../ui/layout/Container";
import BreakingNewsSlider from "./BreakingNewsSlider";

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
    <div className="border-y bg-red-600 text-white">
      <Container>
        <BreakingNewsSlider news={news} />
      </Container>
    </div>
  );
}