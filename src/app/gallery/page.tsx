import { CtaBand } from "@/components/cta-band";
import { GalleryGrid } from "@/components/gallery-grid";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { getGalleryImages } from "@/lib/gallery";
import { getLanguageCode } from "@/lib/landing-content";
import { pageCopy } from "@/lib/page-copy";

type GalleryPageProps = {
  searchParams?: Promise<{
    lang?: string;
  }>;
};

export const runtime = "nodejs";

export default async function GalleryPage({ searchParams }: GalleryPageProps) {
  const images = getGalleryImages();
  const resolvedSearchParams = await searchParams;
  const language = getLanguageCode(resolvedSearchParams?.lang);
  const content = pageCopy[language].gallery;
  const previewImages = images.slice(0, 3);

  return (
    <div className="flex flex-col gap-16 pb-20 pt-10">
      <section className="mx-auto w-full max-w-6xl px-6">
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          {images.length ? (
            <GalleryGrid images={images} />
          ) : (
            <div className="rounded-2xl border border-[var(--border)] bg-white p-6 text-sm text-[var(--brand-slate)]">
              <p className="font-semibold text-[var(--brand-ink)]">
                No images found.
              </p>
              <p className="mt-2">
                Please verify the photos are in public/assets/gallery.
              </p>
              <p className="mt-4 text-xs text-[var(--brand-slate)]">
                Debug: found {images.length} images.
              </p>
            </div>
          )}
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="rounded-2xl border border-[var(--border)] bg-white px-5 py-4 text-sm text-[var(--brand-slate)] shadow-[var(--shadow-card)]">
          <p className="font-semibold text-[var(--brand-ink)]">
            Found {images.length} photos.
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--brand-red)]">
            {content.previewLabel}
          </p>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {previewImages.map((image) => (
              <div key={image.src} className="rounded-xl bg-[var(--brand-mist)] px-3 py-2 text-xs text-[var(--brand-ink)]">
                <p className="truncate font-medium">{image.category}</p>
                <p className="truncate text-[var(--brand-slate)]">{image.alt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <CtaBand />
      </section>
    </div>
  );
}
