import { ImageProject, ProjectProps, ProjectStrapiProps } from "@/types/project";

function parseProject(data: ProjectStrapiProps): ProjectProps {
  const backgroundResponse = data?.background;
  const iconResponse = data?.icon;

  let background = {} as ImageProject;
  let icon = {} as ImageProject;

  if (backgroundResponse) {
    background = {
      id: backgroundResponse.id,
      height: backgroundResponse.height,
      width: backgroundResponse.width,
      largeUrl: `${process.env.STRAPI_API_URL}${backgroundResponse.formats.large.url}`,
      mediumUrl: `${process.env.STRAPI_API_URL}${backgroundResponse.formats.medium.url}`,
      smallUrl: `${process.env.STRAPI_API_URL}${backgroundResponse.formats.small.url}`,
      thumbnailUrl: `${process.env.STRAPI_API_URL}${backgroundResponse.formats.thumbnail.url}`,
      provider: backgroundResponse.provider,
      publishedAt: backgroundResponse.publishedAt,
      url: `${process.env.STRAPI_API_URL}${backgroundResponse.url}`,
      alternativeText: backgroundResponse.alternativeText
    }
  }

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
    background: backgroundResponse ? background : null,
    images: null,
    icon: iconResponse ? icon : null
  }
}

export const projectAdapter = {
  parseProject
}