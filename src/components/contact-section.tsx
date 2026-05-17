import type { ReactNode } from "react";

import Link from "next/link";
import { ArrowRight, Clock3, Mail, MapPin, PhoneCall } from "lucide-react";

import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { contactInfo, contactLinks } from "@/lib/data";

type ContactSectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  labels?: {
    office: string;
    email: string;
    phone: string;
    hours: string;
    social: string;
    submit: string;
    call: string;
  };
};

const mapUrl =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d878.8608723258557!2d83.9851623!3d28.2242159!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595df81f9f8f1%3A0x26a128dd3bd22a5b!2sAkarui%20Pokhara%20Education%20Consultancy!5e0!3m2!1sen!2snp!4v1778921080131!5m2!1sen!2snp";
const inquiryUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSenWX6bh7yzLt7mulXc3E_BzKlntHl7S0MzwZf8hNQHO7nXOw/viewform";

export function ContactSection({
  id = "consultation",
  eyebrow = "Get in Touch",
  title = "Start Your Journey with AKARUI!",
  description = "Our expert counsellors in Pokhara are ready to guide you. Drop by, call us, or use the link below — we'll get back to you the same day.",
  labels = {
    office: "Office",
    email: "Email",
    phone: "Phone / WhatsApp",
    hours: "Hours",
    social: "Social Media",
    submit: "Submit — Get Free Counselling",
    call: "Call Us Now — Instant Help",
  },
}: ContactSectionProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-6">
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.98fr]">
        <div className="space-y-6 rounded-[32px] border border-[var(--border)] bg-white p-8 shadow-[var(--shadow-card)]">
          <div className="space-y-5 pt-2">
            <ContactRow icon={<MapPin className="h-5 w-5" />} label={labels.office} value={contactInfo.address} />
            <ContactRow icon={<Mail className="h-5 w-5" />} label={labels.email} value={contactInfo.email} href={`mailto:${contactInfo.email}`} />
            <ContactRow icon={<PhoneCall className="h-5 w-5" />} label={labels.phone} value="061-570978" href="tel:061570978" />
            <ContactRow icon={<Clock3 className="h-5 w-5" />} label={labels.hours} value={contactInfo.hours} />
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm font-medium text-[var(--brand-navy)] shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-[var(--border)] bg-[#f7efe6] p-6 shadow-[var(--shadow-card)]">
          <div className="rounded-[28px] bg-[#eef3f8] p-4 shadow-inner">
            <div className="overflow-hidden rounded-[24px] border border-white/70 bg-white">
              <iframe
                title="Akarui Education Pokhara office map"
                src={mapUrl}
                className="h-[320px] w-full border-0 sm:h-[360px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <Button asChild size="lg" className="w-full rounded-full text-base">
              <a href={inquiryUrl} target="_blank" rel="noreferrer">
                {labels.submit} <ArrowRight className="h-4 w-4" />
              </a>
            </Button>

            <Button asChild size="lg" variant="secondary" className="w-full rounded-full text-base">
              <a href="tel:061570978">{labels.call}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[rgba(227,30,36,0.09)] text-[var(--brand-red)]">
        {icon}
      </div>
      <div className="space-y-1">
        <p className="text-xs uppercase tracking-[0.22em] text-[var(--brand-slate)]">{label}</p>
        <p className="text-lg font-medium text-[var(--brand-ink)]">{value}</p>
      </div>
    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <a href={href} className="block transition-opacity hover:opacity-80">
      {content}
    </a>
  );
}