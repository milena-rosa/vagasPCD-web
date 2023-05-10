import { z } from 'zod'

export const registerGovernmentUserFormSchema = z
  .object({
    email: z
      .string()
      .email({ message: 'Digite um e-mail válido.' })
      .endsWith('gov.br', 'O e-mail deve ser de domínio gov.br'),
    password: z
      .string()
      .min(6, { message: 'A senha deve ter no mínimo 6 caracteres.' }),
    confirmPassword: z.string({ required_error: 'Digite um valor válido.' }),
  })
  .refine((schema) => schema.password === schema.confirmPassword, {
    path: ['confirmPassword'],
    message: 'As senhas são diferentes. Por favor, confirme novamente.',
  })

export type RegisterGovernmentUserFormData = z.infer<
  typeof registerGovernmentUserFormSchema
>
