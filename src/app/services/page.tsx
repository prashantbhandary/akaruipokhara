import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { ServiceCard } from "@/components/cards/service-card";
import { getLanguageCode } from "@/lib/landing-content";
import { pageCopy } from "@/lib/page-copy";
import { baseSiteContent, siteContent } from "@/lib/site-content";

type ServicesPageProps = {
  searchParams?: Promise<{
    lang?: string;
  }>;
};

export default async function ServicesPage({ searchParams }: ServicesPageProps) {
  const resolvedSearchParams = await searchParams;
  const language = getLanguageCode(resolvedSearchParams?.lang);
  const content = pageCopy[language].services;
  const serviceTexts = siteContent[language].services;

  return (
    <div className="flex flex-col gap-16 pb-20 pt-10">
      <section className="mx-auto w-full max-w-6xl px-6">
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {baseSiteContent.services.map((service, index) => {
            const localized = serviceTexts[index] ?? service;

            return (
            <Reveal key={service.title}>
              <ServiceCard {...service} title={localized.title} description={localized.description} />
            </Reveal>
            );
          })}
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-6">
        <CtaBand />
      </section>
    </div>
  );
}
