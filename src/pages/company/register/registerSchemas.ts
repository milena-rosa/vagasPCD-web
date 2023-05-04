import { z } from 'zod'

export const registerCompanyFormSchema = z
  .object({
    email: z.string().email({ message: 'Digite um e-mail válido.' }),
    cnpj: z.string({ required_error: 'Digite um CNPJ válido.' }),
    linkedin: z.string({ required_error: 'Digite um valor válido' }),
    about: z.string({ required_error: 'Digite um valor válido' }),
    password: z
      .string()
      .min(6, { message: 'A senha deve ter no mínimo 6 caracteres.' }),
    confirmPassword: z.string({ required_error: 'Digite um valor válido.' }),
    name: z.string().optional(),
    phone: z.string().optional(),
    street: z.string().optional(),
    number: z.string().optional(),
    complement: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    zipCode: z.string().optional(),
  })
  .refine((schema) => schema.password === schema.confirmPassword, {
    path: ['confirmPassword'],
    message: 'As senhas são diferentes. Por favor, confirme novamente.',
  })

export type RegisterCompanyFormData = z.infer<typeof registerCompanyFormSchema>
