import Image from "next/image";

import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { TeamCard } from "@/components/cards/team-card";
import { getLanguageCode } from "@/lib/landing-content";
import { pageCopy } from "@/lib/page-copy";
import { baseSiteContent, siteContent } from "@/lib/site-content";

type TeamPageProps = {
  searchParams?: Promise<{
    lang?: string;
  }>;
};

export default async function TeamPage({ searchParams }: TeamPageProps) {
  const resolvedSearchParams = await searchParams;
  const language = getLanguageCode(resolvedSearchParams?.lang);
  const content = pageCopy[language].team;
  const teamSections = pageCopy[language].teamSections;
  const teamContent = siteContent[language].team;

  return (
    <div className="flex flex-col gap-16 pb-20 pt-10">
      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr]">
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
              src="/assets/gallery/School%20Visit/IMG_6388.JPG"
              alt="Akarui Education Pokhara team"
              width={600}
              height={520}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <SectionHeader
          eyebrow={teamSections.directorEyebrow}
          title={teamSections.directorTitle}
          description={teamSections.directorDescription}
        />
        <Reveal>
          <div className="mt-8 rounded-3xl border border-[var(--border)] bg-white p-8 shadow-[var(--shadow-card)]">
            <p className="text-lg text-[var(--brand-slate)]">
              {teamContent.directorMessage.message}
            </p>
            <div className="mt-6">
              <p className="text-base font-semibold text-[var(--brand-ink)]">
                {teamContent.directorMessage.name}
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand-red)]">
                {teamContent.directorMessage.title}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {baseSiteContent.teamCategories.map((group, index) => {
        const translatedGroup = teamSections.groups[index] ?? {
          eyebrow: group.title,
          title: `Our ${group.title}`,
          description: "Experienced specialists guiding every application and visa step.",
        };

        return (
        <section key={group.title} className="mx-auto w-full max-w-6xl px-6">
          <SectionHeader
            eyebrow={translatedGroup.eyebrow}
            title={translatedGroup.title}
            description={translatedGroup.description}
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {group.members.map((member, memberIndex) => {
              const localizedMember = teamContent.groups[index]?.members[memberIndex] ?? member;

              return (
              <Reveal key={member.name}>
                <TeamCard
                  {...member}
                  name={localizedMember.name}
                  role={localizedMember.role}
                  experience={localizedMember.experience}
                />
              </Reveal>
              );
            })}
          </div>
        </section>
        );
      })}

      <section className="mx-auto w-full max-w-6xl px-6">
        <CtaBand />
      </section>
    </div>
  );
}
