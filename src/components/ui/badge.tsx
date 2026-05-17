import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "solid" | "soft";
  className?: string;
};

export function Badge({ children, variant = "soft", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]",
        variant === "solid"
          ? "bg-[var(--brand-red)] text-white"
          : "bg-[rgba(227,30,36,0.08)] text-[var(--brand-red)]",
        className
      )}
    >
      {children}
    </span>
  );
}
