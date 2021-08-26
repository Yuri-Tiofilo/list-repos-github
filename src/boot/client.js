import baseConfig from '~/utils/baseConfig'

import axios from 'axios'

export const client = axios.create({
  baseURL: baseConfig.url,
  responseType: 'json'
})

client.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error?.response?.status === 403) {
      return (window.location = '/acesso-proibido')
    }

    throw error
  }
)

export default client
