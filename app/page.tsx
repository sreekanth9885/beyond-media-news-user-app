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

      <main className="mx-auto max-w-screen-xl space-y-10 p-5">
        {/* Top Advertisement */}


        {/* Breaking News */}
        <span className="font-bold whitespace-nowrap bg-red-600 text-white px-2 py-1 rounded">
          BREAKING NEWS
        </span>
        <BreakingNews news={home.breaking} />

        {/* Hero */}
        <HeroSection news={home.hero} />
        {home.advertisements.homepage_top?.[0] && (
          <AdvertisementInline
            advertisement={home.advertisements.homepage_top[0]}
          />
        )}
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