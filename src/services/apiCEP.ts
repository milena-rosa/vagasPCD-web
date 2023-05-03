import axios from 'axios'

export const apiCEP = axios.create({
  baseURL: 'https://brasilapi.com.br/api/',
})
