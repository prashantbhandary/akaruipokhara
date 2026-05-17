import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
};

export function ServiceCard({
  title,
  description,
  icon: Icon,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group flex h-full flex-col gap-4 rounded-2xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]",
        className
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(227,30,36,0.1)] text-[var(--brand-red)]">
        <Icon size={22} />
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-[var(--brand-ink)]">
          {title}
        </h3>
        <p className="text-sm text-[var(--brand-slate)]">{description}</p>
      </div>
    </div>
  );
}
