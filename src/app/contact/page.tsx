import { ContactSection } from "@/components/contact-section";
import { CtaBand } from "@/components/cta-band";
import { getLanguageCode } from "@/lib/landing-content";
import { pageCopy } from "@/lib/page-copy";

type ContactPageProps = {
  searchParams?: Promise<{
    lang?: string;
  }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const resolvedSearchParams = await searchParams;
  const language = getLanguageCode(resolvedSearchParams?.lang);
  const content = pageCopy[language].contact;
  const labels = pageCopy[language].contactSection;

  return (
    <div className="flex flex-col gap-16 pb-20 pt-10">
      <ContactSection
        id="consultation"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        labels={labels}
      />

      <section className="mx-auto w-full max-w-6xl px-6">
        <CtaBand />
      </section>
    </div>
  );
}
