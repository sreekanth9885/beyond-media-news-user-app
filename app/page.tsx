import AdvertisementInline from "./components/advertisement/AdvertisementInline";
import BreakingNews from "./components/home/BreakingNews";
import HeroSection from "./components/home/HeroSection";
import LatestNews from "./components/home/LatestNews";
import HomeCategorySections from "./components/home/HomeCategorySections";

import { getHome } from "./services/home";
import { getCategories } from "./services/category";

export default async function Home() {
  const [home, categories] = await Promise.all([getHome(), getCategories()]);

  const leftAdvertisements = home.advertisements.homepage_left ?? [];

  const rightAdvertisements = home.advertisements.homepage_right ?? [];

  return (
    <main className="mx-auto max-w-[1600px] px-5 py-10">
      {/* Breaking News */}
      <BreakingNews news={home.breaking} />

      {/* 3 COLUMN LAYOUT */}
      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[250px_minmax(0,1fr)_250px]">
        {/* ================================= */}
        {/* LEFT SIDEBAR */}
        {/* ================================= */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            {leftAdvertisements.map((advertisement) => (
              <AdvertisementInline
                key={advertisement.id}
                advertisement={advertisement}
              />
            ))}
          </div>
        </aside>

        {/* ================================= */}
        {/* MAIN CONTENT */}
        {/* ================================= */}
        <div className="min-w-0 space-y-10">
          {/* Hero */}
          <HeroSection news={home.hero} />

          {/* Top Advertisement */}
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

          {/* Categories */}
          <HomeCategorySections categories={categories} />

          {/* Bottom Advertisement */}
          {home.advertisements.homepage_bottom?.[0] && (
            <AdvertisementInline
              advertisement={home.advertisements.homepage_bottom[0]}
            />
          )}
        </div>

        {/* ================================= */}
        {/* RIGHT SIDEBAR */}
        {/* ================================= */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            {rightAdvertisements.map((advertisement) => (
              <AdvertisementInline
                key={advertisement.id}
                advertisement={advertisement}
              />
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
}
