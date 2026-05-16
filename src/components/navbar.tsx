"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { ChevronDown, Menu, PhoneCall, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import type { LanguageCode } from "@/lib/landing-content";
import { pageCopy } from "@/lib/page-copy";

const languageOptions: { code: LanguageCode; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ja", label: "日本語" },
  { code: "ne", label: "नेपाली" },
];

function normalizeLanguage(value: string | null): LanguageCode {
  if (value === "ja" || value === "ne") return value;
  return "en";
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentLanguage = normalizeLanguage(searchParams.get("lang"));
  const navCopy = pageCopy[currentLanguage].nav;

  useEffect(() => {
    const handler = () => setLanguageMenuOpen(false);
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  const withLanguage = useMemo(() => {
    return (href: string) => {
      const url = new URL(href, "http://localhost");
      if (currentLanguage !== "en") {
        url.searchParams.set("lang", currentLanguage);
      }
      return `${url.pathname}${url.search}${url.hash}`;
    };
  }, [currentLanguage]);

  const translatedNavLinks = navLinks.map((link) => {
    const label =
      link.href === "/destinations"
        ? navCopy.destinations
        : link.href === "/services"
          ? navCopy.services
          : link.href === "/about"
            ? navCopy.whyUs
            : link.href === "/team"
              ? navCopy.team
              : link.href === "/testimonials"
                ? navCopy.stories
                : link.href === "/gallery"
                  ? navCopy.gallery
                  : navCopy.contact;

    return { ...link, label };
  });

  function handleLanguageChange(language: LanguageCode) {
    const params = new URLSearchParams(searchParams.toString());
    if (language === "en") {
      params.delete("lang");
    } else {
      params.set("lang", language);
    }
    const search = params.toString();
    router.replace(search ? `${pathname}?${search}` : pathname);
    setLanguageMenuOpen(false);
    setOpen(false);
  }

  return (
    <header className="sticky top-3 z-50 mx-auto w-full max-w-6xl px-4">
      <div className="glass-panel flex items-center justify-between gap-3 rounded-2xl px-3 py-2 md:px-5">
        <Link href={withLanguage("/")} className="flex items-center gap-2">
          <Image
            src="/assets/akarui/akaruilogobg.png"
            alt="Akarui Education Pokhara"
            width={44}
            height={44}
            className="h-10 w-10 rounded-lg object-contain"
            priority
          />
          <div className="hidden sm:block">
            <p className="text-xs font-semibold text-[var(--brand-ink)]">
              AKARUI! Education Consultancy
            </p>
            <p className="text-[10px] text-[var(--brand-slate)]">
              Pokhara, Nepal
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {translatedNavLinks.map((link) => (
            <Link
              key={link.href}
              href={withLanguage(link.href)}
              className={cn(
                "text-xs font-medium text-[var(--brand-slate)] transition-colors hover:text-[var(--brand-red)]",
                pathname === link.href && "text-[var(--brand-red)]"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-1 rounded-full border border-[var(--border)] bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-ink)] shadow-[var(--shadow-card)]"
              onClick={(event) => {
                event.stopPropagation();
                setLanguageMenuOpen((prev) => !prev);
              }}
            >
              {currentLanguage === "ja" ? "日本語" : currentLanguage === "ne" ? "नेपाली" : "EN"}
              <ChevronDown size={14} />
            </button>
            {languageMenuOpen ? (
              <div className="absolute right-0 top-full z-50 mt-2 min-w-36 overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-1 shadow-[var(--shadow-soft)]">
                {languageOptions.map((option) => (
                  <button
                    key={option.code}
                    type="button"
                    onClick={() => handleLanguageChange(option.code)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition-colors hover:bg-[var(--brand-mist)]",
                      currentLanguage === option.code && "bg-[rgba(23,49,82,0.08)] font-semibold text-[var(--brand-navy)]"
                    )}
                  >
                    <span>{option.label}</span>
                    {currentLanguage === option.code ? <span>✓</span> : null}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
          <Button asChild size="sm" variant="primary">
            <Link href={withLanguage("/contact#consultation")}>{navCopy.freeCounselling} →</Link>
          </Button>
          <Button asChild size="sm" variant="outline" className="bg-[var(--brand-navy)] text-white hover:bg-[var(--brand-navy)]">
            <Link href="tel:+97761570978" className="flex items-center gap-2">
              <PhoneCall size={15} />
              {navCopy.callUs}
            </Link>
          </Button>
        </div>

        <button
          className="rounded-full border border-[var(--border)] p-2 text-[var(--brand-navy)] lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <div className="glass-panel mt-3 rounded-2xl p-4 lg:hidden">
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-3 gap-2">
              {languageOptions.map((option) => (
                <button
                  key={option.code}
                  type="button"
                  onClick={() => handleLanguageChange(option.code)}
                  className={cn(
                    "rounded-xl border border-[var(--border)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em]",
                    currentLanguage === option.code
                      ? "bg-[var(--brand-navy)] text-white"
                      : "bg-white text-[var(--brand-ink)]"
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
            {translatedNavLinks.map((link) => (
              <Link
                key={link.href}
                href={withLanguage(link.href)}
                className="text-sm font-medium text-[var(--brand-ink)]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="grid gap-3 pt-2 sm:grid-cols-2">
              <Button asChild size="sm" className="w-full">
                <Link href={withLanguage("/contact#consultation")}>{navCopy.freeCounselling} →</Link>
              </Button>
              <Button asChild size="sm" variant="outline" className="w-full bg-[var(--brand-navy)] text-white hover:bg-[var(--brand-navy)]">
                <Link href="tel:+97761570978" className="flex items-center justify-center gap-2">
                  <PhoneCall size={15} />
                  {navCopy.callUs}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
