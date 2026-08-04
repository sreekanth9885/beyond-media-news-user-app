export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  image: string | null;
  status: "active" | "inactive";
  sort_order: number;
  created_by: number | null;
  created_at: string;
  updated_at: string;
}

export interface CategoryResponse {
  success: boolean;
  message: string;
  data: Category[];
}