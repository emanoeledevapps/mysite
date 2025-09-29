import axios from 'axios'

export const strapiApi = axios.create({
  baseURL: process.env.STRAPI_API_URL,
  headers: {
    common: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  }
})