import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { BlogCard } from "@/components/cards/blog-card";
import { blogPosts } from "@/lib/data";
import { getLanguageCode } from "@/lib/landing-content";
import { pageCopy } from "@/lib/page-copy";

type BlogPageProps = {
  searchParams?: Promise<{
    lang?: string;
  }>;
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const resolvedSearchParams = await searchParams;
  const language = getLanguageCode(resolvedSearchParams?.lang);
  const content = pageCopy[language].blog;
  const categories = content.categories;

  return (
    <div className="flex flex-col gap-16 pb-20 pt-10">
      <section className="mx-auto w-full max-w-6xl px-6">
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className="rounded-full border border-[var(--border)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-navy)]"
              type="button"
            >
              {category}
            </button>
          ))}
          <div className="ml-auto flex w-full items-center gap-2 rounded-full border border-[var(--border)] bg-white px-4 py-2 md:w-[260px]">
            <input
              type="text"
              placeholder={content.searchPlaceholder}
              className="w-full text-sm outline-none"
            />
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Reveal key={post.title}>
              <BlogCard {...post} />
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
