import { LucideIcon } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  slug: string;
  coverImage: string;
  category: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TechItem {
  id: string;
  name: string;
  category: "frontend" | "backend" | "tools" | "business";
}

export interface NavItem {
  title: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  iconName: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  stepNumber: string;
}
