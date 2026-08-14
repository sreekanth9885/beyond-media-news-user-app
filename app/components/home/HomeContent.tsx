import HeroSection from "./HeroSection";
import BreakingNews from "./BreakingNews";
import LatestNews from "./LatestNews";

interface Props {
  home: any;
}

export default function HomeContent({ home }: Props) {
  return (
    <>
      <HeroSection news={home.hero} />

      <BreakingNews news={home.breaking} />

      <LatestNews news={home.latest} title="Latest News" />
    </>
  );
}
