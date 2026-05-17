"use client";

import Image from "next/image";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";
import type { GalleryImage } from "@/lib/gallery";

type GalleryGridProps = {
  images: GalleryImage[];
  className?: string;
};

export function GalleryGrid({ images, className }: GalleryGridProps) {
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  return (
    <Dialog.Root
      open={!!selected}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          setSelected(null);
        }
      }}
    >
      <div
        className={cn(
          "columns-1 gap-5 space-y-5 md:columns-2 lg:columns-3",
          className
        )}
      >
        {images.map((image) => (
          <button
            key={image.src}
            className="group relative w-full overflow-hidden rounded-2xl"
            onClick={() => setSelected(image)}
            type="button"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={720}
              height={520}
              sizes="(max-width: 1024px) 100vw, 33vw"
              unoptimized
              className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/35" />
            <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-navy)]">
              {image.category}
            </div>
          </button>
        ))}
      </div>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70" />
        <Dialog.Content className="fixed left-1/2 top-1/2 w-[92vw] max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white p-4 shadow-2xl">
          <div className="flex items-center justify-between px-2 pb-3">
            <Dialog.Title className="text-sm font-semibold text-[var(--brand-ink)]">
              {selected?.category}
            </Dialog.Title>
            <Dialog.Close
              className="rounded-full border border-[var(--border)] p-2 text-[var(--brand-navy)]"
              aria-label="Close"
            >
              <X size={16} />
            </Dialog.Close>
          </div>
          {selected ? (
            <div className="relative h-[70vh] overflow-hidden rounded-2xl">
              <Image
                src={selected.src}
                alt={selected.alt}
                fill
                sizes="100vw"
                unoptimized
                className="object-contain"
              />
            </div>
          ) : null}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
