import { News } from "@/app/types/news";
import Container from "../ui/layout/Container";
import HeroSlider from "./HeroSlider";

interface Props {
  news: News[];
}

export default function HeroSection({ news }: Props) {
  if (!news.length) return null;

  return (
    <Container>
      <HeroSlider news={news} />
    </Container>
  );
}