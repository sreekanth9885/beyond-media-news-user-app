export interface News {
  id: number;
  title: string;
  slug: string;

  category_id: number;
  category_name: string;

  sub_category_id: number;
  sub_category_name: string;

  short_description: string;
  content: string;

  featured_image: string;

  youtube_url: string;

  tags: string;

  status: "draft" | "published";

  created_at: string;
  updated_at: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
}