import { cn } from "@/app/lib/cn";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className,
}: Props) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white",
        className
      )}
    >
      {children}
    </span>
  );
}