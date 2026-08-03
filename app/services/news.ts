import { fetchApi } from "./api";

export interface News {
  id: number;
  title: string;
  slug: string;
  category_id: number;
  sub_category_id: number;
  tags: string | null;
  youtube_url: string | null;
  short_description: string;
  content: string;
  featured_image: string;
  status: string;
  created_at: string;
  updated_at: string;
  category_name: string;
  sub_category_name: string;
}

interface NewsResponse {
  success: boolean;
  data: News[];
}

export async function getLatestNews() {
  return fetchApi<NewsResponse>("/news");
}