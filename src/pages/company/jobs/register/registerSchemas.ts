/* eslint-disable no-unused-vars */
import { z } from 'zod'

export enum DisabilityType {
  PHYSICAL = 'Física',
  HEARING = 'Auditiva',
  VISUAL = 'Visual',
  MENTAL = 'Mental',
  MULTIPLE = 'Múltipla',
  ANY = 'Qualquer',
}

export enum Location {
  REMOTE = 'Remoto',
  HYBRID = 'Híbrido',
  ON_SITE = 'Presencial',
}

export const registerJobFormSchema = z.object({
  title: z.string({ required_error: 'Digite um valor válido.' }),
  role: z.string({ required_error: 'Digite um valor válido.' }),
  linkedin: z.string({ required_error: 'Digite um valor válido' }),
  description: z.string({ required_error: 'Digite um valor válido' }),
  salary: z.number().min(0, { message: 'Digite um valor válido' }),
  perks: z.string({ required_error: 'Digite um valor válido' }),
  location: z.string(),
  disabilityType: z.string(),
})

export type RegisterJobFormData = z.infer<typeof registerJobFormSchema>
