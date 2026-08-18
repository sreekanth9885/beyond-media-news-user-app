import { clientConfig } from "../config/client";

export function imageUrl(path?: string) {
  if (!path) {
    return `${clientConfig.siteUrl}/placeholder.jpg`;
  }

  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const base = process.env.NEXT_PUBLIC_IMAGE_URL;

  if (!base) {
    return `${clientConfig.siteUrl}/placeholder.jpg`;
  }

  return `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}
