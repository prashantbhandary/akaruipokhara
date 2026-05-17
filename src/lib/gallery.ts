import fs from "fs";
import path from "path";

export type GalleryImage = {
  src: string;
  alt: string;
  category: string;
};

const PUBLIC_GALLERY = path.join(
  process.cwd(),
  "public",
  "assets",
  "gallery"
);

function safeCategory(name: string) {
  return name.replace(/\s+/g, " ").trim();
}

export function getGalleryImages(): GalleryImage[] {
  if (!fs.existsSync(PUBLIC_GALLERY)) {
    return [];
  }

  const categories = fs
    .readdirSync(PUBLIC_GALLERY, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

  const images: GalleryImage[] = [];

  categories.forEach((category) => {
    const categoryPath = path.join(PUBLIC_GALLERY, category);
    const files = fs
      .readdirSync(categoryPath)
      .filter((file) => /\.(png|jpe?g|webp)$/i.test(file))
      .sort();

    files.forEach((file) => {
      const src = `/${["assets", "gallery", category, file]
        .map((segment) => encodeURIComponent(segment))
        .join("/")}`;
      images.push({
        src,
        alt: `${safeCategory(category)} ${file}`,
        category: safeCategory(category),
      });
    });
  });

  return images;
}

export function getGalleryPreview(limit = 12): GalleryImage[] {
  const all = getGalleryImages();
  return all.slice(0, limit);
}
