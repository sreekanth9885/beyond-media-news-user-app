import { HomeResponse } from "@/app/types/home";

export async function getHome() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/home`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch home");
  }

  const result = await response.json();

  return result.data as HomeResponse;
}