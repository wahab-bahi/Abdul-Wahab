export type PageId = 'home' | 'about' | 'services' | 'projects' | 'skills' | 'contact';

export interface GalleryItem {
  src: string;
  label: string;
  alt: string;
}

export interface Project {
  id: string;
  index: string;
  title: string;
  taxonomy: 'Client Work' | 'Collaborative Project' | 'Personal Project' | 'Experimental / Learning Project';
  category: string;
  image: string;
  imageAlt: string;
  isRealScreenshot: boolean;
  description: string;
  goal: string;
  built: string[];
  role?: string[];
  tech: string[];
  url?: string;
  gallery?: GalleryItem[];
  gallerySource?: string;
  status?: string;
}

export interface Service {
  id: string;
  title: string;
  summary: string;
  icon: string;
  items: string[];
  cta: string;
  note?: string;
  estimatedDelivery?: string;
  idealFor?: string;
}

export interface SkillCategory {
  title: string;
  note: string;
  level: 'core' | 'expanding' | 'mixed';
  skills: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  focus: string;
  image: string;
  date?: string;
  skillsGained: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  client: string;
  role: string;
  project?: string;
}

export interface ProcessStep {
  n: string;
  title: string;
  subtitle: string;
  text: string;
}

export interface CorePrinciple {
  title: string;
  text: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
