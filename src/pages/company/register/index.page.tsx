import { apiVagasPCD } from '@/services/apiVagasPCD'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft, MagnifyingGlass } from '@phosphor-icons/react'
import { Button, Text, TextInput } from '@vagaspcd-ui/react'
import { AxiosError } from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useIMask } from 'react-imask'
import Header from './components/Header/index.page'

import { CompanyApiData, apiCNPJ } from '@/services/apiCNPJ'
import { formatPhoneNumber } from '@/utils/formatPhoneNumber'
import { formatZipCode } from '@/utils/formatZipCode'
import { toPascalCase } from '@/utils/toPascalCase'
import { toast } from 'react-toastify'
import {
  RegisterCompanyFormData,
  registerCompanyFormSchema,
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
    formState: { errors, isSubmitting },
  } = useForm<RegisterCompanyFormData>({
    resolver: zodResolver(registerCompanyFormSchema),
  })

  const { ref: cnpjRef, unmaskedValue: cnpjValue } = useIMask({
    mask: '00.000.000/0000-00',
  })

  async function handleFindCompanyInfo(event: React.MouseEvent, cnpj: string) {
    event.preventDefault()

    try {
      const response = await apiCNPJ.get<CompanyApiData>(cnpj)

      setValue('cnpj', cnpj)
      setValue('name', toPascalCase(response.data.razao_social))
      setValue('zipCode', formatZipCode(response.data.cep))
      setValue('street', toPascalCase(response.data.logradouro))
      setValue('number', response.data.numero)
      setValue('complement', response.data.complemento)
      setValue('city', toPascalCase(response.data.municipio))
      setValue('state', response.data.uf)
      setValue('phone', formatPhoneNumber(response.data.ddd_telefone_1))
    } catch (error) {
      toast.error('CNPJ não encontrado', { autoClose: 3000 })
      console.error(error)
    }
  }

  async function handleRegister({
    cnpj,
    password,
    email,
  }: RegisterCompanyFormData) {
    try {
      await apiVagasPCD.post('/companies', {
        cnpj,
        email,
        password,
      })
      await router.push('/company')
    } catch (error) {
      if (error instanceof AxiosError && error?.response?.data?.message) {
        if (error.status === 409) {
          toast.error('E-mail já cadastrado', { autoClose: 3000 })
        }
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
        <title>vagasPCD | Cadastro de Candidato</title>
      </Head>
      <MainPage>
        <Container>
          <Header />

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
            <Row>
              <label>
                <Text>CNPJ</Text>
                <TextInput
                  placeholder="CNPJ"
                  {...register('cnpj')}
                  ref={cnpjRef}
                />
              </label>
              <SearchButton
                type="button"
                onClick={(event) => handleFindCompanyInfo(event, cnpjValue)}
              >
                <MagnifyingGlass />
              </SearchButton>
            </Row>
            {errors.cnpj && (
              <FormError size="sm">{errors.cnpj.message}</FormError>
            )}

            <label>
              <Text>Nome da empresa</Text>
              <TextInput
                disabled
                placeholder="Nome da empresa"
                {...register('name')}
              />
            </label>
            <Row>
              <label>
                <Text>CEP</Text>
                <TextInput
                  disabled
                  placeholder="CEP"
                  {...register('zipCode')}
                />
                {errors.zipCode && (
                  <FormError size="sm">{errors.zipCode.message}</FormError>
                )}
              </label>
            </Row>
            <label>
              <Text>Rua</Text>
              <TextInput disabled placeholder="Rua" {...register('street')} />
            </label>
            <Row>
              <label>
                <Text>Número</Text>
                <TextInput placeholder="Número" {...register('number')} />
              </label>
              <label>
                <Text>Complemento</Text>
                <TextInput
                  disabled
                  placeholder="Complemento"
                  {...register('complement')}
                />
              </label>
            </Row>
            <Row>
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
                <Text>Telefone</Text>
                <TextInput
                  disabled
                  placeholder="Telefone"
                  {...register('phone')}
                />
                {errors.phone && (
                  <FormError size="sm">{errors.phone.message}</FormError>
                )}
              </label>
            </Row>

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
