import { Role } from './user'

export type Candidate = {
  candidate_id: string
  name: string
  email: string
  zipCode: string
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  state: string
  phone: string
  linkedin: string
  professionalExperience: string
  educationalBackground: string
  skills: string
  role: Role
}
