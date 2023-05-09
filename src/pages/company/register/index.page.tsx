import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowLeft, MagnifyingGlass } from '@phosphor-icons/react'
import { Button, Heading, Text, TextArea, TextInput } from '@vagaspcd-ui/react'
import { AxiosError } from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'

import { CompanyApiData, apiCNPJ } from '@/services/apiCNPJ'
import { apiVagasPCD } from '@/services/apiVagasPCD'
import { formatPhoneNumber } from '@/utils/formatPhoneNumber'
import { formatZipCode } from '@/utils/formatZipCode'
import { cnpjMask } from '@/utils/masks'
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
    reset,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<RegisterCompanyFormData>({
    resolver: zodResolver(registerCompanyFormSchema),
  })

  async function handleFindCompanyInfo(event: React.MouseEvent) {
    event.preventDefault()

    try {
      const cnpj = cnpjMask.unmask(getValues('cnpj'))
      const response = await apiCNPJ.get<CompanyApiData>(cnpj)
      reset({
        cnpj: cnpjMask.mask(getValues('cnpj')),
        name: toPascalCase(response.data.razao_social),
        zipCode: formatZipCode(response.data.cep),
        street: toPascalCase(response.data.logradouro),
        number: response.data.numero,
        complement: response.data.complemento,
        city: toPascalCase(response.data.municipio),
        state: response.data.uf,
        phone: formatPhoneNumber(response.data.ddd_telefone_1),
      })
    } catch (error) {
      toast.error('CNPJ não encontrado', { autoClose: 3000 })
      console.error(error)
    }
  }

  async function handleRegister({
    cnpj,
    about,
    linkedin,
    password,
    email,
  }: RegisterCompanyFormData) {
    try {
      console.log(about, linkedin)
      await apiVagasPCD.post('/companies', {
        cnpj: cnpjMask.unmask(cnpj),
        about,
        linkedin,
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
          <Heading size="md">Formulário para Cadastro</Heading>
          <Text size="sm">Preencha com todas as informações necessárias!</Text>

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
              <Text>LinkedIn</Text>
              <TextInput placeholder="LinkedIn" {...register('linkedin')} />
            </label>
            {errors.linkedin && (
              <FormError size="sm">{errors.linkedin.message}</FormError>
            )}
            <label>
              <Text>Sobre a empresa</Text>
              <TextArea
                placeholder="Escreva sobre a empresa e sua política. Esse texto aparecerá na descrição das vagas para os candidatos."
                {...register('about')}
              />
            </label>
            {errors.about && (
              <FormError size="sm">{errors.about.message}</FormError>
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
                  onChange={cnpjMask.onChange}
                />
              </label>
              <SearchButton type="button" onClick={handleFindCompanyInfo}>
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
                <TextInput
                  disabled
                  placeholder="Número"
                  {...register('number')}
                />
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
