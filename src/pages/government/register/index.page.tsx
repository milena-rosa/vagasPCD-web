import { apiVagasPCD } from '@/services/apiVagasPCD'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft } from '@phosphor-icons/react'
import { Button, Heading, Text, TextInput } from '@vagaspcd-ui/react'
import { AxiosError } from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import {
  RegisterGovernmentUserFormData,
  registerGovernmentUserFormSchema,
} from './registerSchemas'
import { ButtonBox, Container, Form, FormError, MainPage } from './styles'

export default function RegisterCandidate() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterGovernmentUserFormData>({
    resolver: zodResolver(registerGovernmentUserFormSchema),
  })

  async function handleRegister({
    email,
    password,
  }: RegisterGovernmentUserFormData) {
    try {
      await apiVagasPCD.post('/government', {
        email,
        password,
      })
      await router.push('/government')
    } catch (error) {
      if (error instanceof AxiosError && error?.response?.data?.message) {
        toast.error(error.response.data.message, { autoClose: 3000 })
        return
      }
      toast.error((error as Error).message, { autoClose: 3000 })
    }
  }

  return (
    <>
      <Head>
        <title>vagasPCD | Cadastro de Candidato</title>
      </Head>

      <MainPage>
        <Container>
          <Heading size="md">Formulário de Inscrição</Heading>
          <Text size="sm">
            Preencha com todas as suas informações pessoais, profissionais e
            educacionais.
          </Text>
          <Text size="sm">
            Lembre-se de impressionar e colocar as suas melhores habilidades e
            competências!
          </Text>

          <Form as="form" onSubmit={handleSubmit(handleRegister)}>
            <label>
              <Text>E-mail</Text>
              <TextInput
                type="email"
                placeholder="E-mail"
                {...register('email')}
              />
            </label>
            {errors.email && (
              <FormError size="sm">{errors.email.message}</FormError>
            )}
            <label>
              <Text>Senha</Text>
              <TextInput
                type="password"
                placeholder="Senha"
                {...register('password')}
              />
              {errors.password && (
                <FormError size="sm">{errors.password.message}</FormError>
              )}
            </label>
            <label>
              <Text>Confirme sua senha</Text>
              <TextInput
                type="password"
                placeholder="Confirme sua senha"
                {...register('confirmPassword')}
              />
              {errors.confirmPassword && (
                <FormError size="sm">
                  {errors.confirmPassword.message}
                </FormError>
              )}
            </label>

            <ButtonBox>
              <Button type="button" onClick={() => router.back()}>
                <ArrowLeft />
                Voltar para página anterior
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                Registrar
              </Button>
            </ButtonBox>
          </Form>
        </Container>
      </MainPage>
    </>
  )
}
