import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-gray-950 text-gray-300">

      {/* Main Footer */}
      <div className="mx-auto max-w-screen-xl px-5 py-12">

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* About */}
          <div>
            <h2 className="text-xl font-bold text-white">
              Beyond I Media
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-400">
              Get the latest news, breaking updates and important
              information from Telangana and around the world.
            </p>

            {/* Social Media */}
            <div className="mt-6 flex gap-3">

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 transition hover:bg-primary hover:text-white"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 transition hover:bg-primary hover:text-white"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://www.youtube.com/@BeyondPolitics9"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 transition hover:bg-red-600 hover:text-white"
              >
                <FaYoutube size={18} />
              </a>

              <a
                href="https://x.com/BeyondIMedia"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 transition hover:bg-primary hover:text-white"
              >
                <FaTwitter size={18} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/latest"
                  className="transition hover:text-white"
                >
                  Latest News
                </Link>
              </li>

              <li>
                <Link
                  href="/trending"
                  className="transition hover:text-white"
                >
                  Trending
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition hover:text-white"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* News */}
          <div>
            <h3 className="font-semibold text-white">
              Information
            </h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-white"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy-policy"
                  className="transition hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="transition hover:text-white"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  href="/disclaimer"
                  className="transition hover:text-white"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white">
              Contact
            </h3>

            <div className="mt-4 space-y-3 text-sm text-gray-400">

              <p>
                Hyderabad, Telangana
              </p>

              <p>
                Email: info@beyondimedia.com
              </p>

              <p>
                Phone: +91 XXXXX XXXXX
              </p>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">

        <div className="mx-auto flex max-w-screen-xl flex-col gap-3 px-5 py-5 text-center text-sm text-gray-500 md:flex-row md:items-center md:justify-between md:text-left">

          <p>
            © {new Date().getFullYear()} Beyond I Media. All rights reserved.
          </p>

          <p>
            Powered by Beyond I Media
          </p>

        </div>

      </div>

    </footer>
  );
}