import { ImageProject, ProjectProps, ProjectStrapiProps } from "@/types/project";

function parseProject(data: ProjectStrapiProps): ProjectProps {
  const iconResponse = data?.icon;

  let icon = {} as ImageProject;

  if (iconResponse) {
    icon = {
      id: iconResponse.id,
      height: iconResponse.height,
      width: iconResponse.width,
      largeUrl: `${process.env.STRAPI_API_URL}${iconResponse.formats.large.url}`,
      mediumUrl: `${process.env.STRAPI_API_URL}${iconResponse.formats.medium.url}`,
      smallUrl: `${process.env.STRAPI_API_URL}${iconResponse.formats.small.url}`,
      thumbnailUrl: `${process.env.STRAPI_API_URL}${iconResponse.formats.thumbnail.url}`,
      provider: iconResponse.provider,
      publishedAt: iconResponse.publishedAt,
      url: `${process.env.STRAPI_API_URL}${iconResponse.url}`,
      alternativeText: iconResponse.alternativeText
    }
  }

  return {
    id: data.documentId,
    title: data.title,
    description: data.description,
    locale: data.locale,
    publishedAt: data.publishedAt,
    images: null,
    icon: iconResponse ? icon : null,
    overview: data?.overview,
    hasPrivacyPolicePage: data.has_privacy_police,
    hasTermsOfUsePage: data.has_terms_of_use,
    privacyPolice: data.privacy_police,
    termsOfUse: data.terms_of_use,
    aboutDevelopment: data.about_development,
    appleStoreUrl: data.apple_store_url,
    emphasis: data.emphasis,
    githubUrl: data.github_url,
    googlePlayUrl: data.github_url,
    webAppUrl: data.web_app_url
  }
}

export const projectAdapter = {
  parseProject
}