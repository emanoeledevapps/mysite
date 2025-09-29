"use server"

import { projectAdapter } from "@/adapters/project";
import { strapiApi } from "@/api/strapi";
import { ProjectList, ProjectStrapiProps } from "@/types/project";
import { StrapiResponse } from "@/types/strapi";

interface GetProjectsList {
  locale: string
}
export async function getProjectsList({ locale }: GetProjectsList): Promise<ProjectList[]> {
  const response = await strapiApi.get<StrapiResponse<ProjectStrapiProps>>(`/api/projects?locale=${locale}&populate=background`)
  return response.data.data.map(projectAdapter.parseProjectToList)
}