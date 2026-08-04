import { ButtonHTMLAttributes } from "react";
import { cn } from "@/app/lib/cn";

type Variant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost";

type Size =
  | "sm"
  | "md"
  | "lg";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {

  variant?: Variant;

  size?: Size;
}

const variants = {

  primary:
    "bg-primary text-white hover:bg-primary-hover",

  secondary:
    "bg-surface text-foreground border border-border",

  outline:
    "border border-primary text-primary hover:bg-primary/10",

  ghost:
    "hover:bg-surface"

};

const sizes = {

  sm:
    "h-9 px-3 text-sm",

  md:
    "h-11 px-5",

  lg:
    "h-12 px-7 text-lg"

};

export default function Button({

  variant = "primary",

  size = "md",

  className,

  children,

  ...props

}: ButtonProps) {

  return (

    <button

      className={cn(

        "inline-flex items-center justify-center rounded-default font-medium transition-all duration-200 cursor-pointer",

        variants[variant],

        sizes[size],

        className

      )}

      {...props}

    >

      {children}

    </button>

  );

}