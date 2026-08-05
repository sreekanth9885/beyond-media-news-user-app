import Advertisement from "./Advertisement";

interface Props {
  advertisement: any;
}

export default function AdvertisementInline({
  advertisement,
}: Props) {
  if (!advertisement) return null;

  return (
    <div className="my-10">
      <Advertisement advertisement={advertisement} />
    </div>
  );
}