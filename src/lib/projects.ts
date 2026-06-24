import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Project } from "@/types";

const projectsDirectory = path.join(process.cwd(), "src/content/projects");

export function getProjectSlugs() {
  if (!fs.existsSync(projectsDirectory)) return [];
  return fs.readdirSync(projectsDirectory);
}

export function getProjectBySlug(slug: string): Project | null {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(projectsDirectory, `${realSlug}.md`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // Automatically fetch images from public/images/projects/[slug]
  const projectImagesDir = path.join(process.cwd(), "public/images/projects", realSlug);
  let gallery = data.gallery || [];
  
  if (fs.existsSync(projectImagesDir)) {
    const files = fs.readdirSync(projectImagesDir);
    // Sort files to ensure 1.png, 2.png, etc are in order
    const imageFiles = files
      .filter(f => /\.(jpg|jpeg|png|webp|gif)$/i.test(f))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
      
    if (imageFiles.length > 0) {
      // Overwrite or use the folder images for the gallery
      gallery = imageFiles.map(f => `/images/projects/${realSlug}/${f}`);
    }
  }

  let image = data.image;
  // Force the main image to be the first gallery image if we found images in the folder,
  // overriding whatever was in the markdown frontmatter.
  if (gallery.length > 0 && fs.existsSync(projectImagesDir)) {
    image = gallery[0];
  } else if (!image && gallery.length > 0) {
    image = gallery[0];
  }

  return {
    ...data,
    slug: realSlug,
    description: content,
    gallery,
    image,
  } as Project;
}

export function getAllProjects(): Project[] {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is Project => project !== null);

  // Sort projects by ID or any other logic if needed
  return projects.sort((a, b) => (parseInt(a.id) > parseInt(b.id) ? 1 : -1));
}

export const projectCategories = [
  { value: "all", label: "Tất cả dự án" },
  { value: "lighting", label: "Chiếu sáng kiến trúc & Giao thông" },
  { value: "substation", label: "Trạm biến áp & Lưới điện" },
  { value: "me", label: "Cơ điện M&E & Xây dựng" },
  { value: "electrical", label: "Hạ tầng & Khu CNC" },
];
