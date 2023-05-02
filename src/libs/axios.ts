import axios from 'axios'

export const apiCEP = axios.create({
  baseURL: 'https://brasilapi.com.br/api/',
})

export const apiVagasPCD = axios.create({
  baseURL: 'http://localhost:3333/',
})
