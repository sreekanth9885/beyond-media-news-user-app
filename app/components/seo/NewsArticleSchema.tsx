import { News } from "@/app/types/news";
import { imageUrl } from "@/app/utils/image";
import { clientConfig } from "@/app/config/client";

interface Props {
  news: News;
}

export default function NewsArticleSchema({ news }: Props) {
  const url = `${clientConfig.siteUrl}/news/${news.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",

    headline: news.title,

    description: news.short_description?.trim() || news.title,

    image: [imageUrl(news.featured_image)],

    datePublished: news.published_at || news.created_at,

    ...(news.updated_at && {
      dateModified: news.updated_at,
    }),

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },

    url,

    author: {
      "@type": "Person",
      name: news.created_by_name || clientConfig.siteName,
    },

    publisher: {
      "@type": "Organization",
      name: clientConfig.siteName,

      logo: {
        "@type": "ImageObject",
        url: `${clientConfig.siteUrl}${clientConfig.logos.topBar}`,
      },
    },

    articleSection: news.category_name,

    isAccessibleForFree: true,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
