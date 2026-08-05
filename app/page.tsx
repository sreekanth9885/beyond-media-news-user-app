import SiteHeader from "./components/navigation/SiteHeader";
import AdvertisementInline from "./components/advertisement/AdvertisementInline";

import HeroSection from "./components/home/HeroSection";
import BreakingNews from "./components/home/BreakingNews";

import { getHome } from "./services/home";
import LatestNews from "./components/home/LatestNews";

export default async function Home() {
  const home = await getHome();

  return (
    <>
      <SiteHeader />

      <main className="mx-auto max-w-screen-xl space-y-10 p-5">

        {home.advertisements.homepage_top[0] && (
          <AdvertisementInline
            advertisement={home.advertisements.homepage_top[0]}
          />
        )}

        <HeroSection news={home.hero} />

        <BreakingNews news={home.breaking} />

        {home.advertisements.homepage_middle[0] && (
          <AdvertisementInline
            advertisement={home.advertisements.homepage_middle[0]}
          />
        )}

        <LatestNews news={home.latest} />

        {/* <CategorySections
          categories={home.categories}
        /> */}

        {home.advertisements.homepage_bottom[0] && (
          <AdvertisementInline
            advertisement={home.advertisements.homepage_bottom[0]}
          />
        )}

      </main>
    </>
  );
}