import { z } from 'zod'

export const registerCandidateFormSchema = z
  .object({
    name: z
      .string({ required_error: 'Digite um valor válido.' })
      .min(3, { message: 'Digite um valor válido.' }),
    email: z.string().email({ message: 'Digite um e-mail válido.' }),
    password: z
      .string()
      .min(6, { message: 'A senha deve ter no mínimo 6 caracteres.' }),
    confirmPassword: z.string({ required_error: 'Digite um valor válido.' }),
    zipCode: z.string({ required_error: '' }),
    street: z.string(),
    number: z.string({ required_error: 'Digite um valor válido.' }),
    complement: z.string().optional(),
    neighborhood: z.string(),
    city: z.string(),
    state: z.string(),
    phone: z.string({ required_error: 'Digite um valor válido.' }),
    linkedin: z.string().optional(),
    professionalExperience: z.string().optional(),
    educationalBackground: z.string().optional(),
    skills: z.string().optional(),
  })
  .refine((schema) => schema.password === schema.confirmPassword, {
    path: ['confirmPassword'],
    message: 'As senhas são diferentes. Por favor, confirme novamente.',
  })

export type RegisterCandidateFormData = z.infer<
  typeof registerCandidateFormSchema
>

export interface AddressType {
  street: string
  neighborhood: string
  city: string
  state: string
}
