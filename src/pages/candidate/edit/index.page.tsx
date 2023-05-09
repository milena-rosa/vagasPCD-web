import { Candidate } from '@/@types/candidate'
import { Role } from '@/@types/user'
import Header from '@/components/Header'
import { apiCEP } from '@/services/apiCEP'
import { apiVagasPCD } from '@/services/apiVagasPCD'
import { phoneMask, zipCodeMask } from '@/utils/masks'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft, MagnifyingGlass } from '@phosphor-icons/react'
import { Button, Heading, Text, TextArea, TextInput } from '@vagaspcd-ui/react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { MouseEvent, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import {
  AddressType,
  EditCandidateFormData,
  editCandidateFormSchema,
} from './editSchemas'
import {
  ButtonBox,
  Container,
  Form,
  FormError,
  MainPage,
  Row,
  SearchButton,
} from './style'

export default function EditProfile() {
  const router = useRouter()
  const [data, setData] = useState<Candidate | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const {
    reset,
    register,
    setError,
    getValues,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EditCandidateFormData>({
    resolver: zodResolver(editCandidateFormSchema),
  })

  useEffect(() => {
    setIsLoading(true)
    apiVagasPCD
      .get<Candidate>('/candidates/me')
      .then((response) => {
        setData(response.data)
        reset({
          name: response.data.name,
          zipCode: String(zipCodeMask.maskDefault(response.data.zipCode)),
          street: response.data.street,
          neighborhood: response.data.neighborhood,
          city: response.data.city,
          state: response.data.state,
          number: response.data.number,
          complement: response.data.complement,
          phone: String(phoneMask.maskDefault(response.data.phone)),
          linkedin: response.data.linkedin,
          professionalExperience: response.data.professionalExperience,
          educationalBackground: response.data.educationalBackground,
          skills: response.data.skills,
        })
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [reset])

  async function handleFindAddress(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()

    try {
      const zipCode = zipCodeMask.unmask(getValues('zipCode'))
      const response = await apiCEP.get<AddressType>(`/cep/v2/${zipCode}`)
      reset({
        zipCode: zipCodeMask.mask(getValues('zipCode')),
        street: response.data.street,
        neighborhood: response.data.neighborhood,
        city: response.data.city,
        state: response.data.state,
      })
    } catch (error) {
      setError('zipCode', { message: 'CEP inválido', type: 'validate' })
      toast.error('CEP inválido', { autoClose: 3000 })
    }
  }

  async function handleUpdateProfile(data: EditCandidateFormData) {
    await apiVagasPCD.patch('/candidates', {
      ...data,
      zipCode: zipCodeMask.unmask(data.zipCode),
      phone: phoneMask.unmask(data.phone),
    })
    await router.push('/candidate')
  }

  if (isLoading) return <Heading>Carregando...</Heading>
  if (!data) return <Heading>Perfil não encontrado</Heading>

  return (
    <>
      <Head>
        <title>vagasPCD | Edição de perfil</title>
      </Head>

      <Header
        authenticateRoute={`/login?role=${Role.CANDIDATE}`}
        registerRoute="/candidate/register"
      />

      <MainPage>
        <Container>
          <Heading size="md">Editar perfil</Heading>

          <Form as="form" onSubmit={handleSubmit(handleUpdateProfile)}>
            <label>
              <Text>Nome completo</Text>
              <TextInput placeholder="Nome completo" {...register('name')} />
              {errors.name && (
                <FormError size="sm">{errors.name.message}</FormError>
              )}
            </label>

            <label>
              <Text>Senha atual</Text>
              <TextInput
                type="password"
                placeholder="Senha atual"
                {...register('oldPassword')}
              />
              {errors.oldPassword && (
                <FormError size="sm">{errors.oldPassword.message}</FormError>
              )}
            </label>
            <label>
              <Text>Nova Senha</Text>
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

            <Row>
              <label>
                <Text>CEP</Text>
                <TextInput
                  placeholder="CEP"
                  {...register('zipCode')}
                  onChange={zipCodeMask.onChange}
                />
              </label>
              <SearchButton onClick={handleFindAddress}>
                <MagnifyingGlass />
              </SearchButton>
            </Row>
            {errors.zipCode && (
              <FormError size="sm">{errors.zipCode.message}</FormError>
            )}

            <label>
              <Text>Rua</Text>
              <TextInput disabled placeholder="Rua" {...register('street')} />
            </label>
            <Row>
              <label>
                <Text>Bairro</Text>
                <TextInput
                  disabled
                  placeholder="Bairro"
                  {...register('neighborhood')}
                />
              </label>
              <label>
                <Text>Cidade</Text>
                <TextInput
                  disabled
                  placeholder="Cidade"
                  {...register('city')}
                />
              </label>
              <label>
                <Text>Estado</Text>
                <TextInput
                  disabled
                  placeholder="Estado"
                  {...register('state')}
                />
              </label>
            </Row>

            <Row>
              <label>
                <Text>Número</Text>
                <TextInput placeholder="Número" {...register('number')} />
              </label>

              <label>
                <Text>Complemento</Text>
                <TextInput
                  placeholder="Complemento"
                  {...register('complement')}
                />
              </label>
            </Row>
            {errors.number && (
              <FormError size="sm">{errors.number.message}</FormError>
            )}

            <Row>
              <label>
                <Text>Celular</Text>
                <TextInput
                  placeholder="Celular"
                  {...register('phone')}
                  onChange={phoneMask.onChange}
                />
                {errors.phone && (
                  <FormError size="sm">{errors.phone.message}</FormError>
                )}
              </label>
            </Row>

            <label>
              <Text>LinkedIn</Text>
              <TextInput
                prefix="https://linkedin.com/in/"
                placeholder="usuario-linkedin"
                {...register('linkedin')}
              />
            </label>
            <label>
              <Text>Experiências Profissionais</Text>
              <TextArea
                placeholder="Descreva suas experiências profissionais"
                {...register('professionalExperience')}
              />
            </label>
            <label>
              <Text>Educação</Text>
              <TextArea
                placeholder="Escreva sobre sua educação. Coloque informações sobre cursos, certificados, graduação etc."
                {...register('educationalBackground')}
              />
            </label>
            <label>
              <Text>Habilidades e Competências</Text>
              <TextArea
                placeholder="Habilidades e competências"
                {...register('skills')}
              />
            </label>

            <ButtonBox>
              <Button type="button" onClick={() => router.back()}>
                <ArrowLeft />
                Voltar para página anterior
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                Alterar
              </Button>
            </ButtonBox>
          </Form>
        </Container>
      </MainPage>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { 'vagasPCD.token': token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: `/login?role=${Role.COMPANY}`,
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
