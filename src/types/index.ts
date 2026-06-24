// ===== Service =====
export interface Service {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: string[];
  process: { step: number; title: string; description: string }[];
}

// ===== Project =====
export interface Project {
  id: string;
  slug: string;
  name: string;
  location: string;
  category: "lighting" | "me" | "substation" | "electrical";
  categoryLabel: string;
  description: string;
  shortDescription: string;
  image: string;
  gallery: string[];
  client: string;
  area: string;
  year: string;
}

// ===== News Article =====
export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

// ===== Testimonial =====
export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

// ===== Partner =====
export interface Partner {
  id: string;
  name: string;
  logo: string;
}

// ===== Contact Form =====
export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}
