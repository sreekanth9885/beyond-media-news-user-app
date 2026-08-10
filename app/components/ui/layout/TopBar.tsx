import { format } from "date-fns";

import SocialLinks from "./SocialLinks";
import SearchButton from "./SearchButton";
import Container from "./Container";

export default function TopBar() {
  return (
    <div className="border-b">
      <Container>
        <div className="flex items-center justify-between gap-3 py-2">

          {/* Date */}
          <div className="min-w-0 truncate text-xs sm:text-sm">
            {format(new Date(), "EEEE, dd MMMM yyyy")}
          </div>

          {/* Social + Search */}
          <div className="flex shrink-0 items-center gap-2">
            <SocialLinks />
            <SearchButton />
          </div>

        </div>
      </Container>
    </div>
  );
}