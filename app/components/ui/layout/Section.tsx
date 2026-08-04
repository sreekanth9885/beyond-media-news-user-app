import { ReactNode } from "react";
import { cn } from "@/app/lib/cn";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Section({
  children,
  className,
}: Props) {
  return (
    <section
      className={cn(
        "py-8 lg:py-12",
        className
      )}
    >
      {children}
    </section>
  );
}