import { ImageProject, ProjectList, ProjectStrapiProps } from "@/types/project";

function parseProjectToList(data: ProjectStrapiProps): ProjectList {
  const backgroundResponse = data?.background;

  let background = {} as ImageProject;

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

  return {
    id: data.id,
    title: data.title,
    description: data.description,
    locale: data.locale,
    publishedAt: data.publishedAt,
    background: backgroundResponse ? background : null,
    images: null
  }
}

export const projectAdapter = {
  parseProjectToList
}