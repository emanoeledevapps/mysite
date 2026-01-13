"use server"

import { projectAdapter } from "@/adapters/project";
import { strapiApi } from "@/api/strapi";
import { ProjectProps, ProjectStrapiProps } from "@/types/project";
import { StrapiResponseArray, StrapiResponseObject } from "@/types/strapi";

interface GetProjectsList {
  locale: string
}
export async function getProjectsList({ locale }: GetProjectsList): Promise<ProjectProps[]> {
  const response = await strapiApi.get<StrapiResponseArray<ProjectStrapiProps>>(`/api/projects?locale=${locale}&populate=icon`)
  return response.data.data.map(projectAdapter.parseProject)
}

interface GetProjectDetails {
  locale: string;
  id: string;
}
export async function getProjectDetails({ locale, id }: GetProjectDetails): Promise<ProjectProps> {
  const response = await strapiApi.get<StrapiResponseObject<ProjectStrapiProps>>(`/api/projects/${id}?locale=${locale}&populate=icon`)
  return projectAdapter.parseProject(response.data.data);
}

interface GetEmphasisProjectsList {
  locale: string
}
export async function getEmphasisProjects({ locale }: GetEmphasisProjectsList): Promise<ProjectProps[]> {
  const response = await strapiApi.get<StrapiResponseArray<ProjectStrapiProps>>(`/api/projects?locale=${locale}&filters[emphasis][$eq]=true&populate=icon`)
  return response.data.data.map(projectAdapter.parseProject)
}
