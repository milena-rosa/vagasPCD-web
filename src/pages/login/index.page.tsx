import { Role, useAuth } from '@/contexts/AuthContext'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  ArrowLeft,
  ArrowRight,
  Buildings,
  EnvelopeSimple,
  Key,
  Scales,
  WheelchairMotion,
} from '@phosphor-icons/react'
import { Button, Heading, Text, TextInput } from '@vagaspcd-ui/react'
import { AxiosError } from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  ButtonBox,
  Container,
  Footer,
  Form,
  FormError,
  MainPage,
} from './style'

export const loginFormSchema = z.object({
  email: z.string().email({ message: 'Digite um e-mail válido.' }),
  password: z.string(),
})

export type LoginFormData = z.infer<typeof loginFormSchema>

export default function Login() {
  const router = useRouter()
  const { signIn } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  })

  async function handleLogin({ email, password }: LoginFormData) {
    try {
      await signIn({ role: Role.CANDIDATE, email, password })

      // await router.push(`/${role.toLowerCase()}`)
    } catch (error) {
      if (error instanceof AxiosError && error?.response?.data?.message) {
        alert(error.response.data.message)
        return
      }
      console.error(error)
    }
  }

  return (
    <>
      <Head>
        <title>vagasPCD | Login</title>
      </Head>
      <MainPage>
        <Container>
          <Heading>Faça seu login</Heading>
          <Text>
            Preencha os campos abaixo com suas informações de login para acessar
          </Text>

          <Form as="form" onSubmit={handleSubmit(handleLogin)}>
            <TextInput
              icon={<EnvelopeSimple />}
              placeholder="E-mail"
              {...register('email')}
            />
            {errors.email && (
              <FormError size="sm">{errors.email.message}</FormError>
            )}
            <TextInput
              icon={<Key />}
              placeholder="Senha"
              type="password"
              {...register('password')}
            />

            <ButtonBox>
              <Button type="button" onClick={() => router.back()}>
                <ArrowLeft />
                Voltar
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                Entrar <ArrowRight />
              </Button>
            </ButtonBox>
          </Form>

          <Footer>
            <Text>
              Ainda não possui cadastro? Escolha a opção mais indicada:
            </Text>
            <ButtonBox>
              <Button
                type="button"
                onClick={() => router.push('/candidate/register')}
              >
                <WheelchairMotion />
                Candidato
              </Button>
              <Button
                type="button"
                onClick={() => router.push('/company/register')}
              >
                <Buildings />
                Empresa
              </Button>
              <Button
                type="button"
                onClick={() => router.push('/government/register')}
              >
                <Scales />
                INSS/MTE
              </Button>
            </ButtonBox>

            <Link href="/candidate/register"></Link>
          </Footer>
        </Container>
      </MainPage>
    </>
  )
}
