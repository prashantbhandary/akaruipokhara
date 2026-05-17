import Link from "next/link";

import { Button } from "@/components/ui/button";

type CtaBandProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryAction?: string;
  secondaryAction?: string;
  primaryHref?: string;
  secondaryHref?: string;
};

export function CtaBand({
  eyebrow = "Ready to Start Your International Journey?",
  title = "Book a free counselling session today — no obligations, just honest guidance.",
  description = "No pressure, just honest guidance from our Pokhara team.",
  primaryAction = "See More →",
  secondaryAction = "Contact Us",
  primaryHref = "/contact#consultation",
  secondaryHref = "/destinations",
}: CtaBandProps) {
  return (
    <section className="rounded-3xl bg-[var(--brand-navy)] px-6 py-12 text-white shadow-[var(--shadow-soft)] md:px-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-white/70">
            {eyebrow}
          </p>
          <h3 className="text-2xl font-semibold md:text-3xl">
            {title}
          </h3>
          <p className="text-sm text-white/80">
            {description}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild size="lg" variant="primary" className="min-w-[168px] justify-center whitespace-nowrap">
            <Link href={primaryHref}>{primaryAction}</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="min-w-[168px] justify-center whitespace-nowrap bg-white">
            <Link href={secondaryHref}>{secondaryAction}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
