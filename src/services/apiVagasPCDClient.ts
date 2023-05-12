import axios from 'axios'
import { parseCookies } from 'nookies'

export function getAPIVagasPCDClient(ctx?: any) {
  const apiVagasPCD = axios.create({
    baseURL: process.env.HOST,
  })

  const { 'vagasPCD.token': token } = parseCookies(ctx)

  if (token) {
    apiVagasPCD.defaults.headers.Authorization = `Bearer ${token}`
  }

  return apiVagasPCD
}
