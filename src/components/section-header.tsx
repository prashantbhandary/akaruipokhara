import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2
        className={cn(
          "text-3xl font-semibold text-[var(--brand-ink)] md:text-4xl",
          align === "center" && "max-w-2xl"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-base text-[var(--brand-slate)] md:text-lg",
            align === "center" && "max-w-2xl"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
