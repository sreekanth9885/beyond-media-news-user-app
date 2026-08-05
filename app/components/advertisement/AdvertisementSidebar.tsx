import Advertisement from "./Advertisement";

interface Props {
  advertisements: any[];
}

export default function AdvertisementSidebar({
  advertisements,
}: Props) {
  if (!advertisements.length) return null;

  return (
    <div className="space-y-6">
      {advertisements.map((ad) => (
        <Advertisement
          key={ad.id}
          advertisement={ad}
        />
      ))}
    </div>
  );
}