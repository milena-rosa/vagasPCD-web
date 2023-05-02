import { apiCEP, apiVagasPCD } from '@/libs/axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft, MagnifyingGlass } from '@phosphor-icons/react'
import { Button, Text, TextArea, TextInput } from '@vagaspcd-ui/react'
import { AxiosError } from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useIMask } from 'react-imask'
import Header from './components/Header/index.page'
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
    setValue,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<RegisterCandidateFormData>({
    resolver: zodResolver(registerCandidateFormSchema),
  })

  const { ref: zipCodeRef, unmaskedValue: zipCode } = useIMask({
    mask: '00000-000',
  })

  const { ref: phoneRef } = useIMask(
    { mask: '(00) 000 000 000' },
    {
      onComplete(value, maskRef, event) {
        setValue('phone', maskRef.unmaskedValue)
      },
    },
  )

  async function handleFindAddress(event: React.MouseEvent, zipCode: string) {
    event.preventDefault()

    try {
      const response = await apiCEP.get<AddressType>(`/cep/v2/${zipCode}`)
      setValue('zipCode', zipCode)
      setValue('street', response.data.street)
      setValue('neighborhood', response.data.neighborhood)
      setValue('city', response.data.city)
      setValue('state', response.data.state)
    } catch (error) {
      setError('zipCode', { message: 'CEP inválido', type: 'validate' })
      console.error('EEEE', error)
    }
  }

  async function handleRegister(data: RegisterCandidateFormData) {
    try {
      await apiVagasPCD.post('/candidates', data)
      await router.push('/candidate')
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
        <title>vagasPCD | Cadastro de Candidato</title>
      </Head>
      <MainPage>
        <Container>
          <Header />

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
                  ref={zipCodeRef}
                />
              </label>
              <SearchButton
                onClick={(event) => handleFindAddress(event, zipCode)}
              >
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
                  ref={phoneRef}
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
