import { Role } from './user'

export type Company = {
  email: string
  cnpj: string
  about: string
  linkedin: string
  name: string
  phone: string
  street: string
  zipCode: string
  number: string
  complement: string
  city: string
  state: string
  role: Role
}
