import { z } from 'zod'

const passwordUpdateValidation = (schema: {
  oldPassword?: string
  password?: string
  confirmPassword?: string
}) => {
  if (!schema.oldPassword && !schema.password && !schema.confirmPassword) {
    return true
  }
  if (!schema.oldPassword || !schema.password || !schema.confirmPassword) {
    return false
  }

  return (
    !!schema.oldPassword &&
    schema.password === schema.confirmPassword &&
    schema.password.length >= 6
  )
}

export const editCandidateFormSchema = z
  .object({
    name: z.string().optional(),
    oldPassword: z.string().optional(),
    password: z.string().optional(),
    confirmPassword: z.string().optional(),
    zipCode: z.string().optional(),
    street: z.string().optional(),
    number: z.string().optional(),
    complement: z.string().optional(),
    neighborhood: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    phone: z.string().optional(),
    linkedin: z.string().optional(),
    professionalExperience: z.string().optional(),
    educationalBackground: z.string().optional(),
    skills: z.string().optional(),
  })
  .refine(passwordUpdateValidation, {
    path: ['oldPassword'],
    message: 'Confira as senhas.',
  })

export type EditCandidateFormData = z.infer<typeof editCandidateFormSchema>

export interface AddressType {
  street: string
  neighborhood: string
  city: string
  state: string
}
