import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const socialLinks = [
  {
    icon: FaFacebookF,
    href: "#",
  },
  {
    icon: FaTwitter,
    href: "https://x.com/BeyondIMedia",
  },
  {
    icon: FaInstagram,
    href: "#",
  },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/@BeyondPolitics9",
  },
];

export default function SocialLinks() {
  return (
    <div className="hidden items-center gap-3 lg:flex">
      {socialLinks.map((item, index) => {
        const Icon = item.icon;

        return (
          <Link
            key={index}
            href={item.href}
            className="rounded-full p-2 transition hover:bg-primary hover:text-white"
          >
            <Icon size={16} />
          </Link>
        );
      })}
    </div>
  );
}