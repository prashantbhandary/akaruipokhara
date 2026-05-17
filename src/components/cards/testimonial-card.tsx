type TestimonialCardProps = {
  name: string;
  destination: string;
  quote: string;
};

export function TestimonialCard({
  name,
  destination,
  quote,
}: TestimonialCardProps) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-3xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-card)]">
      <p className="text-sm text-[var(--brand-slate)]">"{quote}"</p>
      <div>
        <p className="text-base font-semibold text-[var(--brand-ink)]">
          {name}
        </p>
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand-red)]">
          {destination}
        </p>
      </div>
    </div>
  );
}
