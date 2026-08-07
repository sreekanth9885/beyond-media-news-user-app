import Container from "./Container";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="border-b border-border bg-white">
      <Container>
        <div className="flex flex-col gap-6 py-6 lg:flex-row lg:items-center lg:justify-between">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Advertisement */}
          <div className="flex justify-center lg:justify-end">
            <div className="flex h-[90px] w-full max-w-[728px] items-center justify-center rounded-lg border bg-gray-100 text-sm text-gray-500">
              728 × 90 Advertisement comes here
            </div>
          </div>

        </div>
      </Container>
    </header>
  );
}