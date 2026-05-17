import Image from "next/image";

import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { TeamCard } from "@/components/cards/team-card";
import { timeline, teamCategories, values } from "@/lib/data";
import { getLanguageCode } from "@/lib/landing-content";
import { pageCopy } from "@/lib/page-copy";

type AboutPageProps = {
  searchParams?: Promise<{
    lang?: string;
  }>;
};

export default async function AboutPage({ searchParams }: AboutPageProps) {
  const resolvedSearchParams = await searchParams;
  const language = getLanguageCode(resolvedSearchParams?.lang);
  const content = pageCopy[language].about;
  const teamPreview = teamCategories.flatMap((group) => group.members).slice(0, 4);

  return (
    <div className="flex flex-col gap-16 pb-20 pt-10">
      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--brand-red)]">{content.eyebrow}</p>
            <h1 className="text-4xl font-semibold text-[var(--brand-ink)] md:text-5xl">{content.title}</h1>
            <p className="text-lg text-[var(--brand-slate)]">{content.description}</p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-[32px] border border-[var(--border)] bg-white shadow-[var(--shadow-soft)]">
            <Image
              src="/assets/gallery/Interview%20Photo/IMG_6408.JPG"
              alt="Akarui Education Pokhara office"
              width={620}
              height={520}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <SectionHeader
          eyebrow={content.whyEyebrow}
          title={content.whyTitle}
          description={content.whyDescription}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <Reveal key={value.title}>
              <div className="rounded-3xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-card)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(227,30,36,0.12)] text-[var(--brand-red)]">
                  <value.icon size={22} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[var(--brand-ink)]">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--brand-slate)]">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <SectionHeader
          eyebrow={content.journeyEyebrow}
          title={content.journeyTitle}
          description={content.journeyDescription}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {timeline.map((item) => (
            <Reveal key={item.year}>
              <div className="rounded-2xl border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-card)]">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand-red)]">
                  {item.year}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-[var(--brand-ink)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--brand-slate)]">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <SectionHeader
          eyebrow={content.teamEyebrow}
          title={content.teamTitle}
          description={content.teamDescription}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {teamPreview.map((member) => (
            <Reveal key={member.name}>
              <TeamCard {...member} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <CtaBand />
      </section>
    </div>
  );
}
