import { format } from "date-fns";
import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import SearchButton from "./SearchButton";

export default function TopBar() {
  return (
    <div className="border-b bg-background">
      <Container>
        {/* Main wrapper – flex column on mobile, row on larger screens */}
        <div className="flex flex-col gap-3 py-3 sm:gap-4 sm:py-4 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:py-5">
          {/* ----- LEFT: Logo + Brand Info (no Live Updates) ----- */}
          <div className="flex min-w-0 items-center gap-3 sm:gap-4 lg:gap-6">
            {/* Logo */}
            <div className="hidden shrink-0 lg:block">
              <div className="w-auto">
                <Logo
                  type="topBar"
                  width={160}
                  height={80}
                />
              </div>
            </div>

            {/* Brand Info (title, subtitle, location – uncomment if needed) */}
            <div className="min-w-0 border-l pl-3 sm:pl-4 lg:pl-6">
              {/* Uncomment these lines if you want the title and subtitle */}
              {/* <p className="truncate text-sm font-bold sm:text-base lg:text-lg">
                Telangana's Latest News
              </p>
              <p className="mt-1 hidden text-xs text-muted sm:block sm:text-sm">
                News • Politics • Movies • Sports • Technology
              </p> */}
              {/* <div className="mt-2 flex items-center gap-3 text-[11px] sm:mt-3 sm:gap-4 sm:text-xs">
                <span className="flex items-center gap-1 text-muted">
                  <MapPin size={13} />
                  Telangana
                </span>
              </div> */}
            </div>
          </div>

          {/* ----- RIGHT: Date, Social, Search, Live Updates, (optional promo) ----- */}
          <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 lg:flex-nowrap lg:justify-end lg:gap-6">
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <div className="flex h-[90px] w-full max-w-[728px] items-center justify-between overflow-hidden rounded-lg border bg-muted/30 px-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    Beyond I Media
                  </p>
                  <h2 className="mt-1 text-lg font-bold">
                    Stay Updated With Latest News
                  </h2>
                  <p className="mt-1 text-xs text-muted">
                    Breaking news and important updates at your fingertips.
                  </p>
                </div>
                <Link
                  href="/latest"
                  className="shrink-0 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Latest News
                </Link>
              </div>
            </div>
            {/* Date */}
            <div className="min-w-0 truncate text-xs text-muted sm:text-sm">
              {format(new Date(), "EEEE, dd MMMM yyyy")}
            </div>

            {/* Live Updates – now placed after Search */}
            <span className="flex items-center gap-1.5 font-semibold text-red-600">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-600" />
              </span>
              Live Updates
            </span>

            {/* Promotion Box – hidden on small screens, shown on lg+ */}

            {/* Social Links */}
            <SocialLinks />

            {/* Search Button */}
            <SearchButton />
          </div>
        </div>
      </Container>
    </div>
  );
}
