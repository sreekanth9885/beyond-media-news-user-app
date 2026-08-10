import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import { MapPin } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b bg-background">
      <Container>
        <div className="flex min-h-[90px] items-center justify-between gap-4 py-3 sm:min-h-[105px] sm:py-4 lg:min-h-[120px] lg:gap-8 lg:py-5">

          {/* Left - Logo + Brand */}
          <div className="flex min-w-0 items-center gap-3 sm:gap-4 lg:gap-6">

            {/* Logo */}
            <div className="shrink-0">
              <div className="w-[110px] sm:w-[140px] lg:w-auto">
                <Logo />
              </div>
            </div>

            {/* Brand Information */}
            <div className="min-w-0 border-l pl-3 sm:pl-4 lg:pl-6">

              <p className="truncate text-sm font-bold sm:text-base lg:text-lg">
                Telangana's Latest News
              </p>

              <p className="mt-1 hidden text-xs text-muted sm:block sm:text-sm">
                News • Politics • Movies • Sports • Technology
              </p>

              <div className="mt-2 flex items-center gap-3 text-[11px] sm:mt-3 sm:gap-4 sm:text-xs">

                <span className="flex items-center gap-1 text-muted">
                  <MapPin size={13} />
                  Telangana
                </span>

                {/* Live Updates */}
                <span className="flex items-center gap-1.5 font-semibold text-red-600">

                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />

                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-600" />
                  </span>

                  Live Updates
                </span>

              </div>

            </div>

          </div>

          {/* Right - Advertisement / Promotion */}
          <div className="hidden flex-1 justify-end md:flex">

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

        </div>
      </Container>
    </header>
  );
}