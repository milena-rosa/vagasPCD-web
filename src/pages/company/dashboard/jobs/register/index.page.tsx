import Header from '@/components/Header'
import { apiVagasPCD } from '@/services/apiVagasPCD'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft } from '@phosphor-icons/react'
import {
  Button,
  Heading,
  Select,
  Text,
  TextArea,
  TextInput,
} from '@vagaspcd-ui/react'
import { AxiosError } from 'axios'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { useForm } from 'react-hook-form'
import { useIMask } from 'react-imask'
import { toast } from 'react-toastify'
import DashboardSideNav from '../../components/DashboardSideNav'
import { Container, MainSection } from '../../styles'
import { RegisterJobFormData, registerJobFormSchema } from './registerSchemas'
import { ButtonBox, Form, FormError } from './styles'

export default function RegisterJobs() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterJobFormData>({
    resolver: zodResolver(registerJobFormSchema),
  })

  const { ref: salaryRef } = useIMask(
    {
      mask: Number,
      thousandsSeparator: '.',
    },
    {
      onComplete(_, maskRef) {
        setValue('salary', Number(maskRef.unmaskedValue))
      },
    },
  )

  async function handleRegister({
    title,
    description,
    role,
    linkedin,
    salary,
    perks,
    location,
    disabilityType,
  }: RegisterJobFormData) {
    try {
      await apiVagasPCD.post('/jobs', {
        title,
        description,
        role,
        linkedin,
        salary,
        perks,
        location: location.toUpperCase(),
        disability_type: disabilityType.toUpperCase(),
      })

      toast.success('Vaga adicionada com sucesso!', { autoClose: 3000 })
      await router.push('/company/dashboard')
    } catch (error) {
      if (error instanceof AxiosError && error?.response?.data?.message) {
        toast.error(error.response.data.message, { autoClose: 3000 })
        return
      }
      toast.error('Algo deu errado. Por favor, tente novamente.', {
        autoClose: 3000,
      })
    }
  }

  return (
    <>
      <Head>
        <title>vagasPCD | Cadastro de Vaga</title>
      </Head>

      <Header />

      <Container>
        <DashboardSideNav />

        <MainSection>
          <Heading size="md">Formulário de Dados Sobre a Vaga</Heading>
          <Text size="sm">
            Preencha com todas as suas informações necessárias
          </Text>

          <Form as="form" onSubmit={handleSubmit(handleRegister)}>
            <label>
              <Text>Título da Vaga</Text>
              <TextInput placeholder="Título da Vaga" {...register('title')} />
            </label>
            {errors.title && (
              <FormError size="sm">{errors.title.message}</FormError>
            )}
            <label>
              <Text>Nome do Cargo</Text>
              <TextInput placeholder="Nome do Cargo" {...register('role')} />
            </label>
            {errors.role && (
              <FormError size="sm">{errors.role.message}</FormError>
            )}
            <label>
              <Text>LinkedIn</Text>
              <TextInput
                placeholder="Link da vaga no LinkedIn"
                {...register('linkedin')}
              />
            </label>
            {errors.linkedin && (
              <FormError size="sm">{errors.linkedin.message}</FormError>
            )}
            <label>
              <Text>Descrição</Text>
              <TextArea
                placeholder="Descreva as atividades do cargo"
                {...register('description')}
              />
            </label>
            {errors.description && (
              <FormError size="sm">{errors.description.message}</FormError>
            )}
            <label>
              <Text>Salário</Text>
              <TextInput
                prefix="R$"
                placeholder="Salário"
                {...register('salary')}
                ref={salaryRef}
              />
            </label>
            {errors.salary && (
              <FormError size="sm">{errors.salary.message}</FormError>
            )}
            <label>
              <Text>Benefícios</Text>
              <TextArea
                placeholder="Descreva os benefícios"
                {...register('perks')}
              />
            </label>
            {errors.perks && (
              <FormError size="sm">{errors.perks.message}</FormError>
            )}

            <label>
              <Text>Local</Text>
              <Select
                placeholder="Selecione o local da vaga"
                items={[
                  { label: 'Remoto', value: 'remote' },
                  { label: 'Híbrido', value: 'hybrid' },
                  { label: 'Presencial', value: 'on_site' },
                ]}
                onValueChange={(value) => setValue('location', value)}
              />
            </label>
            {errors.location && (
              <FormError size="sm">{errors.location.message}</FormError>
            )}
            <label>
              <Text>Tipo de Deficiência</Text>
              <Select
                placeholder="Selecione o tipo de deficiência"
                items={[
                  { label: 'Física', value: 'physical' },
                  { label: 'Auditiva', value: 'hearing' },
                  { label: 'Visual', value: 'visual' },
                  { label: 'Mental', value: 'mental' },
                  { label: 'Múltipla', value: 'multiple' },
                  { label: 'Qualquer', value: 'any' },
                ]}
                onValueChange={(value) => setValue('disabilityType', value)}
              />
            </label>
            {errors.disabilityType && (
              <FormError size="sm">{errors.disabilityType.message}</FormError>
            )}

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
        </MainSection>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // const apiVagasPCDClient = getAPIVagasPCDClient(ctx)
  const { 'vagasPCD.token': token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  // await apiClient.get('/...')

  return {
    props: {},
  }
}
