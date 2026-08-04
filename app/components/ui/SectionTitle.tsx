import { ReactNode } from "react";
import { cn } from "@/app/lib/cn";

interface Props {
  title: string;
  action?: ReactNode;
  className?: string;
}

export default function SectionTitle({
  title,
  action,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "mb-6 flex items-center justify-between",
        className
      )}
    >
      <h2 className="text-2xl font-bold tracking-tight">
        {title}
      </h2>

      {action}
    </div>
  );
}