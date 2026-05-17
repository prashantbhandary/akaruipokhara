import Image from "next/image";

import { cn } from "@/lib/utils";

type DestinationCardProps = {
  country: string;
  headline: string;
  overview: string;
  image: string;
  className?: string;
};

export function DestinationCard({
  country,
  headline,
  overview,
  image,
  className,
}: DestinationCardProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-white shadow-[var(--shadow-card)]",
        className
      )}
    >
      <div className="relative h-48">
        <Image
          src={image}
          alt={country}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]">
            {country}
          </p>
          <h3 className="text-lg font-semibold text-[var(--brand-ink)]">
            {headline}
          </h3>
        </div>
        <p className="text-sm text-[var(--brand-slate)]">{overview}</p>
      </div>
    </div>
  );
}
