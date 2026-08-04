export function imageUrl(path?: string) {
  if (!path) {
    return "/placeholder.jpg";
  }

  if (path.startsWith("http")) {
    return path;
  }

  return `${process.env.NEXT_PUBLIC_IMAGE_URL}${path}`;
}