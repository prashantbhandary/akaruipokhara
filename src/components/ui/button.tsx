import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--brand-red)] text-white shadow-md hover:bg-[var(--brand-red-dark)] focus-visible:ring-[var(--brand-red)]",
        secondary:
          "bg-[var(--brand-navy)] text-white shadow-md hover:bg-[#102742] focus-visible:ring-[var(--brand-navy)]",
        outline:
          "border border-[var(--border)] bg-white text-[var(--brand-navy)] hover:border-[var(--brand-navy)] hover:text-[var(--brand-navy)]",
        ghost:
          "bg-transparent text-[var(--brand-navy)] hover:bg-[rgba(23,49,82,0.08)]",
      },
      size: {
        sm: "h-10 px-5",
        md: "h-12 px-6",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
