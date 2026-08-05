import { AdvertisementGroup } from "./advertisement";
import { News } from "./news";

export interface HomeResponse {
  hero: News[];
  latest: News[];
  breaking: News[];
  trending: News[];

  advertisements: AdvertisementGroup;

  categories: any[];

  sidebar: {
    latest: News[];
  };
}