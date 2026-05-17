type StatCardProps = {
  label: string;
  value: string;
};

export function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-white p-5 text-center shadow-[var(--shadow-card)]">
      <p className="text-3xl font-semibold text-[var(--brand-ink)]">{value}</p>
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand-slate)]">
        {label}
      </p>
    </div>
  );
}
