import SiteHeader from "./components/navigation/SiteHeader";
import AdvertisementInline from "./components/advertisement/AdvertisementInline";
import BreakingNews from "./components/home/BreakingNews";
import HeroSection from "./components/home/HeroSection";
import LatestNews from "./components/home/LatestNews";
import HomeCategorySections from "./components/home/HomeCategorySections";

import { getHome } from "./services/home";
import { getCategories } from "./services/category";

export default async function Home() {
  const [home, categories] = await Promise.all([
    getHome(),
    getCategories(),
  ]);

  return (
    <>
      <SiteHeader categories={categories} />

      <main className="mx-auto max-w-screen-xl space-y-10 p-5">
        {/* Top Advertisement */}
        {home.advertisements.homepage_top?.[0] && (
          <AdvertisementInline
            advertisement={home.advertisements.homepage_top[0]}
          />
        )}

        {/* Breaking News */}
        <BreakingNews news={home.breaking} />

        {/* Hero */}
        <HeroSection news={home.hero} />

        {/* Middle Advertisement */}
        {home.advertisements.homepage_middle?.[0] && (
          <AdvertisementInline
            advertisement={home.advertisements.homepage_middle[0]}
          />
        )}

        {/* Latest News */}
        <LatestNews news={home.latest} />

        {/* Dynamic Category Sections */}
        <HomeCategorySections categories={categories} />

        {/* Bottom Advertisement */}
        {home.advertisements.homepage_bottom?.[0] && (
          <AdvertisementInline
            advertisement={home.advertisements.homepage_bottom[0]}
          />
        )}
      </main>
    </>
  );
}