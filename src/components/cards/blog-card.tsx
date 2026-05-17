import Image from "next/image";

import { cn } from "@/lib/utils";

type BlogCardProps = {
  title: string;
  category: string;
  date: string;
  summary: string;
  image: string;
  className?: string;
};

export function BlogCard({
  title,
  category,
  date,
  summary,
  image,
  className,
}: BlogCardProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-white shadow-[var(--shadow-card)]",
        className
      )}
    >
      <div className="relative h-40">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="text-xs uppercase tracking-[0.2em] text-[var(--brand-red)]">
          {category}
        </div>
        <h3 className="text-lg font-semibold text-[var(--brand-ink)]">
          {title}
        </h3>
        <p className="text-sm text-[var(--brand-slate)]">{summary}</p>
        <p className="mt-auto text-xs text-[var(--brand-slate)]">{date}</p>
      </div>
    </div>
  );
}
