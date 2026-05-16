"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { contactInfo, navLinks } from "@/lib/data";
import { getLanguageCode } from "@/lib/landing-content";
import { pageCopy } from "@/lib/page-copy";

const quickLinks = navLinks.filter((link) => link.href !== "/");

export function Footer() {
  const searchParams = useSearchParams();
  const language = getLanguageCode(searchParams.get("lang"));
  const content = pageCopy[language].footer;

  return (
    <footer className="mt-20 border-t border-[var(--border)] bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/akarui/akaruilogobg.png"
              alt="Akarui Education Pokhara"
              width={54}
              height={54}
              className="h-12 w-12 rounded-lg object-contain"
            />
            <div>
              <p className="text-sm font-semibold text-[var(--brand-ink)]">
                {content.title}
              </p>
              <p className="text-xs text-[var(--brand-slate)]">
                {content.subtitle}
              </p>
            </div>
          </div>
          <p className="text-sm text-[var(--brand-slate)]">
            {content.description}
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-[var(--brand-ink)]">{content.quickLinks}</p>
          <ul className="space-y-2 text-sm text-[var(--brand-slate)]">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-[var(--brand-red)]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-[var(--brand-ink)]">{content.office}</p>
          <ul className="space-y-2 text-sm text-[var(--brand-slate)]">
            <li>{contactInfo.address}</li>
            <li>{contactInfo.phone}</li>
            <li>{contactInfo.email}</li>
            <li>{contactInfo.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--border)] py-6 text-center text-xs text-[var(--brand-slate)]">
        (c) 2026 Akarui Education Pokhara. All rights reserved.
      </div>
    </footer>
  );
}
