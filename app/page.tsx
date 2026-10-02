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
    <>
      <BreakingNews news={home.breaking} />
      <main className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px_minmax(0,1fr)_220px] xl:grid-cols-[250px_minmax(0,920px)_250px]">
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
          <div className="min-w-0 space-y-10">
            <HeroSection news={home.hero} />
            {home.advertisements.homepage_top?.[0] && (
              <AdvertisementInline
                advertisement={home.advertisements.homepage_top[0]}
              />
            )}
            {home.advertisements.homepage_middle?.[0] && (
              <AdvertisementInline
                advertisement={home.advertisements.homepage_middle[0]}
              />
            )}
            <LatestNews news={home.latest} title="Latest News" />
            <HomeCategorySections categories={categories} />
            {home.advertisements.homepage_bottom?.[0] && (
              <AdvertisementInline
                advertisement={home.advertisements.homepage_bottom[0]}
              />
            )}
          </div>
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
    </>
  );
}
