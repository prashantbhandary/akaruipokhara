import Image from "next/image";

import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { getLanguageCode } from "@/lib/landing-content";
import { pageCopy } from "@/lib/page-copy";
import { baseSiteContent, siteContent } from "@/lib/site-content";

type DestinationsPageProps = {
  searchParams?: Promise<{
    lang?: string;
  }>;
};

export default async function DestinationsPage({ searchParams }: DestinationsPageProps) {
  const resolvedSearchParams = await searchParams;
  const language = getLanguageCode(resolvedSearchParams?.lang);
  const content = pageCopy[language].destinations;
  const destinationTexts = siteContent[language].destinations;

  return (
    <div className="flex flex-col gap-16 pb-20 pt-10">
      <section className="mx-auto w-full max-w-6xl px-6">
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-6">
        {baseSiteContent.destinations.map((destination, index) => {
          const localized = destinationTexts[index] ?? destination;

          return (
          <Reveal key={destination.country}>
            <div className="grid gap-6 rounded-3xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-card)] lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[220px] overflow-hidden rounded-2xl">
                <Image
                  src={destination.image}
                  alt={localized.country}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand-red)]">
                    {localized.country}
                  </p>
                  <h2 className="text-2xl font-semibold text-[var(--brand-ink)]">
                    {localized.headline}
                  </h2>
                  <p className="mt-2 text-sm text-[var(--brand-slate)]">
                    {localized.overview}
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-navy)]">
                      {content.labels.requirements}
                    </p>
                    <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-[var(--brand-slate)]">
                      {localized.requirements.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-navy)]">
                      {content.labels.eligibility}
                    </p>
                    <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-[var(--brand-slate)]">
                      {localized.eligibility.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-navy)]">
                      {content.labels.visaProcess}
                    </p>
                    <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-[var(--brand-slate)]">
                      {localized.visaProcess.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-navy)]">
                      {content.labels.benefits}
                    </p>
                    <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-[var(--brand-slate)]">
                      {localized.benefits.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-navy)]">
                    {content.labels.support}
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-[var(--brand-slate)]">
                    {localized.support.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
          );
        })}
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <CtaBand />
      </section>
    </div>
  );
}
