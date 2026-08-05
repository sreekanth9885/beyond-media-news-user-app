import Image from "next/image";
import Link from "next/link";
import { News } from "@/app/types/news";
import { imageUrl } from "@/app/utils/image";
import Container from "../ui/layout/Container";

interface Props {
  news: News[];
}

export default function HeroSection({ news }: Props) {
  if (!news.length) return null;

  const hero = news[0];
  const side = news.slice(1);

  return (
    <Container className="py-6">
      <div className="grid gap-6 lg:grid-cols-3">

        <div className="lg:col-span-2">
          <Link href={`/news/${hero.slug}`}>
            <div className="relative h-[450px] overflow-hidden rounded-xl">
              <Image
                src={imageUrl(hero.featured_image)}
                alt={hero.title}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute bottom-0 p-6 text-white">
                <p className="text-sm font-semibold">
                  {hero.category_name}
                </p>

                <h1 className="mt-2 text-4xl font-bold">
                  {hero.title}
                </h1>

                <p className="mt-3 line-clamp-2">
                  {hero.short_description}
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="space-y-5">
          {side.map(item => (
            <Link
              key={item.id}
              href={`/news/${item.slug}`}
              className="flex gap-4"
            >
              <Image
                src={imageUrl(item.featured_image)}
                alt={item.title}
                width={120}
                height={80}
                className="rounded-lg object-cover"
              />

              <div>
                <p className="text-xs text-primary">
                  {item.category_name}
                </p>

                <h3 className="font-semibold line-clamp-2">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </Container>
  );
}