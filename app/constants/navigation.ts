export interface NavItem {
  id: number;
  title: string;
  href: string;
}

export const navigation: NavItem[] = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "Politics",
    href: "/category/politics",
  },
  {
    id: 3,
    title: "Business",
    href: "/category/business",
  },
  {
    id: 4,
    title: "Sports",
    href: "/category/sports",
  },
  {
    id: 5,
    title: "Technology",
    href: "/category/technology",
  },
  {
    id: 6,
    title: "Entertainment",
    href: "/category/entertainment",
  },
];