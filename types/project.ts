import { ImageStrapi } from "./strapi";

export interface ProjectStrapiProps {
  id: number;
  documentId: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  description: string;
  images: ImageStrapi[] | null;
  background: ImageStrapi | null;
  icon: ImageStrapi | null;
}

export interface ProjectProps {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  background: ImageProject | null;
  icon: ImageProject | null;
  locale: string;
  images: ImageProject[] | null;
}

export interface ImageProject {
  id: number;
  width: number;
  height: number;
  url: string;
  thumbnailUrl: string;
  smallUrl: string;
  mediumUrl: string;
  largeUrl: string;
  provider: string;
  publishedAt: string;
  alternativeText: string | null
}