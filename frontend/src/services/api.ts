import axios, { CreateAxiosDefaults } from 'axios'

export const BASE_URL =
  process.env.REACT_APP_BASE_URL || 'http://localhost:9000'

export const getAxiosInstance = () => {
  const config: CreateAxiosDefaults = {
    baseURL: BASE_URL,
    responseType: 'json',
    headers: {
      'content-type': 'application/json'
    }
  }

  const instance = axios.create(config)

  return instance
}

export const getUrlWithSlug = (slug: string) => {
  return `${BASE_URL}/${slug}`
}
