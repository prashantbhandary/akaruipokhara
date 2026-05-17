import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { getLanguageCode } from "@/lib/landing-content";
import { pageCopy } from "@/lib/page-copy";
import { baseSiteContent, siteContent } from "@/lib/site-content";

type TestimonialsPageProps = {
  searchParams?: Promise<{
    lang?: string;
  }>;
};

export default async function TestimonialsPage({ searchParams }: TestimonialsPageProps) {
  const resolvedSearchParams = await searchParams;
  const language = getLanguageCode(resolvedSearchParams?.lang);
  const content = pageCopy[language].testimonials;
  const testimonialTexts = siteContent[language].testimonials;

  return (
    <div className="flex flex-col gap-16 pb-20 pt-10">
      <section className="mx-auto w-full max-w-6xl px-6">
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {baseSiteContent.testimonials.map((testimonial, index) => {
            const localized = testimonialTexts[index] ?? testimonial;

            return (
            <Reveal key={testimonial.name}>
              <TestimonialCard {...testimonial} name={localized.name} destination={localized.destination} quote={localized.quote} />
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
