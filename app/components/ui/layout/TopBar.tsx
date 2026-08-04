import { format } from "date-fns";


import SocialLinks from "./SocialLinks";
import SearchButton from "./SearchButton";
import Container from "./Container";

export default function TopBar() {
  return (
    <div className="border-b border-border bg-surface">
      <Container>
        <div className="flex h-12 items-center justify-between">
          <p className="text-sm text-muted">
            {format(new Date(), "EEEE, dd MMMM yyyy")}
          </p>

          <div className="flex items-center gap-3">
            <SocialLinks />

            <SearchButton />
          </div>
        </div>
      </Container>
    </div>
  );
}