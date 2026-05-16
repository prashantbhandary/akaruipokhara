import Image from "next/image";
import Link from "next/link";

import { ContactSection } from "@/components/contact-section";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { TeamCard } from "@/components/cards/team-card";
import { Button } from "@/components/ui/button";
import { getGalleryPreview } from "@/lib/gallery";
import { getLanguageCode, homeContent } from "@/lib/landing-content";
import { pageCopy } from "@/lib/page-copy";
import { baseSiteContent, siteContent } from "@/lib/site-content";
import { cn } from "@/lib/utils";

type HomePageProps = {
  searchParams?: Promise<{
    lang?: string;
  }>;
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const resolvedSearchParams = await searchParams;
  const language = getLanguageCode(resolvedSearchParams?.lang);
  const content = homeContent[language];
  const pageText = pageCopy[language];
  const catalog = siteContent[language];
  const contactLabels = pageCopy[language].contactSection;
  const teamPreview = catalog.team.groups.flatMap((group) => group.members).slice(0, 3);
  const galleryPreview = getGalleryPreview(6);
  const featuredDestinations = baseSiteContent.destinations.slice(0, 4).map((destination, index) => ({
    ...destination,
    ...catalog.destinations[index],
  }));

  return (
    <div className="flex flex-col gap-20 pb-20">
      <section className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 -z-10 pattern-grid opacity-60" />
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 pb-12 pt-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/akarui/akaruilogobg.png"
                  alt="Akarui Education Pokhara"
                  width={44}
                  height={44}
                  className="h-10 w-10 rounded-lg object-contain"
                />
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--brand-red)]">
                  {content.hero.eyebrow}
                </p>
              </div>
              <h1 className="text-4xl font-semibold text-[var(--brand-ink)] md:text-5xl lg:text-6xl">
                {content.hero.title}
              </h1>
              <p className="max-w-2xl text-lg text-[var(--brand-slate)]">
                {content.hero.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href="/contact#consultation">{content.hero.primaryAction}</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/gallery">{content.hero.secondaryAction}</Link>
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-slate)]">
                {content.hero.trustLine}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute -left-10 top-10 h-36 w-36 rounded-full bg-[rgba(227,30,36,0.15)] blur-2xl" />
              <div className="absolute -bottom-6 right-4 h-40 w-40 rounded-full bg-[rgba(23,49,82,0.12)] blur-2xl" />
              <div className="relative overflow-hidden rounded-[32px] border border-[var(--border)] bg-white shadow-[var(--shadow-soft)]">
                <Image
                  src="/assets/gallery/ECA/IMG_6441.JPG"
                  alt="Akarui Education Pokhara counseling session"
                  width={680}
                  height={720}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="glass-panel absolute -bottom-10 left-8 hidden w-[70%] rounded-2xl p-4 md:block">
                <p className="text-sm font-semibold text-[var(--brand-ink)]">
                  {language === "ja"
                    ? "ポカラから、世界へ。"
                    : language === "ne"
                      ? "पोखराबाट, विश्वका लागि तयार।"
                      : "Pokhara-based. Globally prepared."}
                </p>
                <p className="text-xs text-[var(--brand-slate)]">
                  {language === "ja"
                    ? "カウンセリング、書類作成、渡航前サポート。"
                    : language === "ne"
                      ? "परामर्श, कागजात, र प्रस्थानपूर्व सहयोग।"
                      : "Counseling, documentation, and pre-departure support."}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="overflow-hidden border-y border-[var(--border)] bg-[var(--brand-red)] py-4 text-white">
        <div className="marquee-track flex min-w-max items-center gap-10 px-6 text-sm font-semibold uppercase tracking-[0.25em]">
          {content.hero.ribbon.concat(content.hero.ribbon).map((city, index) => (
            <span key={`${city}-${index}`} className="whitespace-nowrap">
              {city}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {content.stats.map((stat) => (
            <Reveal key={stat.label}>
              <div className="rounded-3xl border border-[var(--border)] bg-white p-6 text-center shadow-[var(--shadow-card)]">
                <p className="text-3xl font-semibold text-[var(--brand-ink)]">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[var(--brand-slate)]">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="why-us" className="mx-auto w-full max-w-6xl px-6">
        <SectionHeader
          eyebrow={content.why.eyebrow}
          title={content.why.title}
          description={content.why.description}
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {content.why.items.map((item, index) => (
            <Reveal key={item.title}>
              <div className="rounded-3xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-card)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(23,49,82,0.08)] text-[var(--brand-navy)]">
                  {index + 1}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[var(--brand-ink)]">
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

      <section id="services" className="mx-auto w-full max-w-6xl px-6">
        <SectionHeader
          eyebrow={content.services.eyebrow}
          title={content.services.title}
          description={content.services.description}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {catalog.services.map((service) => (
            <Reveal key={service.title}>
              <div className="group flex h-full flex-col gap-4 rounded-2xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(227,30,36,0.1)] text-[var(--brand-red)]">
                  {service.title.charAt(0)}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[var(--brand-ink)]">{service.title}</h3>
                  <p className="text-sm text-[var(--brand-slate)]">{service.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="destinations" className="mx-auto w-full max-w-6xl px-6">
        <SectionHeader
          eyebrow={pageText.destinations.eyebrow}
          title={pageText.destinations.title}
          description={pageText.destinations.description}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuredDestinations.map((destination) => (
            <Reveal key={destination.country}>
              <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-white shadow-[var(--shadow-card)]">
                <div className="relative h-48">
                  <Image
                    src={destination.image}
                    alt={destination.country}
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]">
                      {destination.country}
                    </p>
                    <h3 className="text-lg font-semibold text-[var(--brand-ink)]">{destination.headline}</h3>
                  </div>
                  <p className="text-sm text-[var(--brand-slate)]">{destination.overview}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8">
          <Button asChild variant="outline">
            <Link href="/destinations">View all destinations</Link>
          </Button>
        </div>
      </section>

      <section id="stories" className="mx-auto w-full max-w-6xl px-6">
        <SectionHeader
          eyebrow={content.testimonials.eyebrow}
          title={content.testimonials.title}
          description={content.testimonials.description}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {catalog.testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name}>
              <div
                className={cn(
                  "flex h-full flex-col gap-4 rounded-3xl border p-6 shadow-[var(--shadow-card)]",
                  index === 0
                    ? "border-[var(--brand-navy)] bg-[var(--brand-navy)] text-white"
                    : "border-[var(--border)] bg-white"
                )}
              >
                <p className={cn("text-sm", index === 0 ? "text-white/90" : "text-[var(--brand-slate)]")}>
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className={cn("text-base font-semibold", index === 0 ? "text-white" : "text-[var(--brand-ink)]")}>
                    {testimonial.name}
                  </p>
                  <p className={cn("text-xs uppercase tracking-[0.2em]", index === 0 ? "text-white/70" : "text-[var(--brand-red)]")}>
                    {testimonial.destination}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <SectionHeader
          eyebrow={content.steps.eyebrow}
          title={content.steps.title}
          description={content.steps.description}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {content.steps.items.map((step) => (
            <Reveal key={step.step}>
              <div className="rounded-3xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-card)]">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--brand-red)]">{step.step}</p>
                <h3 className="mt-2 text-lg font-semibold text-[var(--brand-ink)]">{step.title}</h3>
                <p className="mt-2 text-sm text-[var(--brand-slate)]">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="gallery" className="mx-auto w-full max-w-6xl px-6">
        <SectionHeader
          eyebrow={content.gallery.eyebrow}
          title={content.gallery.title}
          description={content.gallery.description}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryPreview.map((image) => (
            <Reveal key={image.src}>
              <div className="group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-white shadow-[var(--shadow-card)]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    unoptimized
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-navy)]">
                  {image.category}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8">
          <Button asChild variant="outline">
            <Link href="/gallery">{content.gallery.cta}</Link>
          </Button>
        </div>
      </section>

      <section id="team" className="mx-auto w-full max-w-6xl px-6">
        <SectionHeader
          eyebrow={pageText.team.eyebrow}
          title={pageText.team.title}
          description={pageText.team.description}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {teamPreview.map((member) => (
            <Reveal key={member.name}>
              <TeamCard {...member} />
            </Reveal>
          ))}
        </div>
        <div className="mt-8">
          <Button asChild variant="outline">
            <Link href="/team">Meet the full team</Link>
          </Button>
        </div>
      </section>

      <ContactSection
        id="contact"
        eyebrow={content.contact.eyebrow}
        title={content.contact.title}
        description={content.contact.description}
        labels={contactLabels}
      />

      <section className="mx-auto w-full max-w-6xl px-6">
        <CtaBand
          eyebrow={content.cta.eyebrow}
          title={content.cta.title}
          description={content.cta.description}
          primaryAction={content.cta.primaryAction}
          secondaryAction={content.cta.secondaryAction}
        />
      </section>
    </div>
  );
}
