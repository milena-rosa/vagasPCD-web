import { apiCEP } from '@/services/apiCEP'
import { apiVagasPCD } from '@/services/apiVagasPCD'
import { phoneMask, zipCodeMask } from '@/utils/masks'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft, MagnifyingGlass } from '@phosphor-icons/react'
import { Button, Heading, Text, TextArea, TextInput } from '@vagaspcd-ui/react'
import { AxiosError } from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { MouseEvent } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import {
  AddressType,
  RegisterCandidateFormData,
  registerCandidateFormSchema,
} from './registerSchemas'
import {
  ButtonBox,
  Container,
  Form,
  FormError,
  MainPage,
  Row,
  SearchButton,
} from './styles'

export default function RegisterCandidate() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    setError,
    getValues,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RegisterCandidateFormData>({
    resolver: zodResolver(registerCandidateFormSchema),
  })

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
      toast.error((error as Error).message, { autoClose: 3000 })
    }
  }

  async function handleRegister({
    name,
    email,
    password,
    phone,
    zipCode,
    street,
    number,
    complement,
    neighborhood,
    city,
    state,
    linkedin,
    educationalBackground,
    professionalExperience,
    skills,
  }: RegisterCandidateFormData) {
    try {
      await apiVagasPCD.post('/candidate', {
        name,
        email,
        password,
        phone: phoneMask.unmask(phone),
        zipCode: zipCodeMask.unmask(zipCode),
        street,
        number,
        complement,
        neighborhood,
        city,
        state,
        linkedin,
        educationalBackground,
        professionalExperience,
        skills,
      })
      await router.push('/candidate')
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
              <Text>Nome completo</Text>
              <TextInput placeholder="Nome completo" {...register('name')} />
              {errors.name && (
                <FormError size="sm">{errors.name.message}</FormError>
              )}
            </label>
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
                Registrar
              </Button>
            </ButtonBox>
          </Form>
        </Container>
      </MainPage>
    </>
  )
}
