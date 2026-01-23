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
  icon: ImageStrapi | null;
  overview: BlockNodeStrapi[];
  has_privacy_police: boolean;
  has_terms_of_use: boolean;
  privacy_police: BlockNodeStrapi[];
  terms_of_use: BlockNodeStrapi[];
  about_development: BlockNodeStrapi[];
  emphasis: boolean;
  google_play_url: string | null;
  apple_store_url: string | null;
  web_app_url: string | null;
  github_url: string | null;
}

export interface ProjectProps {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  icon: ImageProject | null;
  locale: string;
  images: ImageProject[] | null;
  overview: BlockNodeStrapi[];
  hasPrivacyPolicePage: boolean | null;
  hasTermsOfUsePage: boolean | null;
  privacyPolice: BlockNodeStrapi[] | null;
  termsOfUse: BlockNodeStrapi[] | null;
  aboutDevelopment: BlockNodeStrapi[] | null;
  emphasis: boolean;
  googlePlayUrl: string | null;
  appleStoreUrl: string | null;
  webAppUrl: string | null;
  githubUrl: string | null;
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

export interface BlockNodeStrapi {
  type: string;
  children?: BlockNodeStrapi[];
  text?: string;
  level?: number;
  bold?: boolean;
  italic?: boolean;
  url?: string;
  image?: {
    alternativeText: string;
    url: string;
    width?: number;
    height?: number;
  };
}
