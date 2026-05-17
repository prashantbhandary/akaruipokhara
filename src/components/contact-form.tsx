import { Button } from "@/components/ui/button";

export function ContactForm() {
  return (
    <form className="grid gap-4 rounded-3xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-card)]">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-[var(--brand-ink)]">
          First name
          <input
            type="text"
            className="h-11 rounded-xl border border-[var(--border)] px-4 text-sm"
            placeholder="Sita"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-[var(--brand-ink)]">
          Last name
          <input
            type="text"
            className="h-11 rounded-xl border border-[var(--border)] px-4 text-sm"
            placeholder="Gurung"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-[var(--brand-ink)]">
        Phone / WhatsApp
        <input
          type="text"
          className="h-11 rounded-xl border border-[var(--border)] px-4 text-sm"
          placeholder="+977 98XXXXXXXX"
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-[var(--brand-ink)]">
        Email
        <input
          type="email"
          className="h-11 rounded-xl border border-[var(--border)] px-4 text-sm"
          placeholder="you@email.com"
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-[var(--brand-ink)]">
        Preferred destination
        <input
          type="text"
          className="h-11 rounded-xl border border-[var(--border)] px-4 text-sm"
          placeholder="Japan, Australia, Canada"
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-[var(--brand-ink)]">
        Message
        <textarea
          className="min-h-[120px] rounded-xl border border-[var(--border)] px-4 py-3 text-sm"
          placeholder="Tell us about your goals and timeline."
        />
      </label>
      <Button size="lg">Submit inquiry</Button>
    </form>
  );
}
