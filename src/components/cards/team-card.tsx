import Image from "next/image";

import { cn } from "@/lib/utils";

type TeamCardProps = {
  name: string;
  role: string;
  bio?: string;
  experience: string;
  image?: string;
  className?: string;
};

export function TeamCard({
  name,
  role,
  experience,
  image,
  className,
}: TeamCardProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col gap-4 rounded-3xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-card)]",
        className
      )}
    >
      <div className="flex items-center gap-4">
        {image ? (
          <Image
            src={image}
            alt={name}
            width={72}
            height={72}
            className="h-16 w-16 rounded-2xl object-cover"
          />
        ) : (
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[rgba(23,49,82,0.08)] text-lg font-semibold text-[var(--brand-navy)]">
            {name
              .split(" ")
              .map((part) => part[0])
              .join("")}
          </div>
        )}
        <div>
          <p className="text-base font-semibold text-[var(--brand-ink)]">
            {name}
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand-red)]">
            {role}
          </p>
        </div>
      </div>
      <p className="text-sm text-[var(--brand-slate)]">{experience}</p>
    </div>
  );
}
