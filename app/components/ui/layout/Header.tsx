
import Container from "./Container";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="border-b border-border bg-background">
      <Container>
        <div className="flex h-24 items-center justify-between">
          <Logo />

          <div className="hidden lg:block">
            Advertisement
          </div>
        </div>
      </Container>
    </header>
  );
}