export interface Advertisement {
  id: number;
  title: string;
  image: string;
  target_url: string;
  position: string;
}

export interface AdvertisementGroup {
  homepage_top: Advertisement[];
  homepage_middle: Advertisement[];
  homepage_bottom: Advertisement[];

  sidebar_top: Advertisement[];
  sidebar_bottom: Advertisement[];

  news_top: Advertisement[];
  news_middle: Advertisement[];
  news_bottom: Advertisement[];
}