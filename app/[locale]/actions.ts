"use server"

import { strapiApi } from "@/api/strapi";

export async function getProjectsList() {
  const response = await strapiApi.get('/api/projects?locale=pt-BR&populate=background')
  console.log(response.data)
}