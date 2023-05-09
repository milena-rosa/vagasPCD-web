import { Candidate } from './candidate'
import { Company } from './company'
import { GovernmentUser } from './governmentUser'

/* eslint-disable no-unused-vars */
export type User = Candidate & Company & GovernmentUser

export enum Role {
  CANDIDATE = 'candidates',
  COMPANY = 'companies',
  GOVERNMENT = 'governmentUsers',
}
