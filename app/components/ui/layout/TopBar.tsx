import { format } from "date-fns";

import SocialLinks from "./SocialLinks";
import SearchButton from "./SearchButton";
import Container from "./Container";

export default function TopBar() {
  return (
    <div>
      <Container>

        <div className="flex items-center justify-between">

          <div>
            {format(
              new Date(),
              "EEEE, dd MMMM yyyy"
            )}
          </div>

          <div className="flex items-center gap-3">
            <SocialLinks />

            <SearchButton />
          </div>

        </div>

      </Container>
    </div>
  );
}