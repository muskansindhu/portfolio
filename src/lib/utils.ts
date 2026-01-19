import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import projects from "@/data/projects.json";
import { projectSchema, type Project } from "./schemas";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function generateSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export function getProjectBySlug(slug: string): Project | undefined {
  const data = projectSchema.parse(projects);
  return data.projects.find((p) => generateSlug(p.name) === slug);
}

export function getAllProjects(): Project[] {
  const data = projectSchema.parse(projects);
  return data.projects;
}
