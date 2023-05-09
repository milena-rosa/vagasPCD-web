import { Company } from '@/@types/company'
import { Job } from '@/@types/job'
import { Role } from '@/@types/user'
import Header from '@/components/Header'
import { useAuth } from '@/contexts/AuthContext'
import { apiVagasPCD } from '@/services/apiVagasPCD'
import { toPascalCase } from '@/utils/toPascalCase'
import { ArrowLeft, ReadCvLogo } from '@phosphor-icons/react'
import { Button, Heading, Text } from '@vagaspcd-ui/react'
import { AxiosError } from 'axios'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Container, Footer, GridArea, MainSection } from './styles'

export default function JobPage() {
  const router = useRouter()
  const { isAuthenticated } = useAuth()

  const [job, setJob] = useState({} as Job)
  const [company, setCompany] = useState({} as Company)

  async function fetchJob(id: string) {
    try {
      if (!id) {
        throw new Error('Vaga não encontrada')
      }
      const response = await apiVagasPCD.get(`/jobs/${id}`)
      setJob(response.data.job)
      setCompany(response.data.company)
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

  useEffect(() => {
    fetchJob(`${router.query.id}`)
  }, [router.query.id])

  async function handleSendResume() {
    if (isAuthenticated) {
      const response = await apiVagasPCD.post(
        `/applications/${router.query.id}`,
      )

      if (response.status === 201) {
        toast.success('Currículo enviado com sucesso!')
        router.push('/candidate/applications')
      }
    } else {
      router.push({
        pathname: '/login',
        query: { from: router.asPath, role: Role.CANDIDATE },
      })
    }
  }

  if (!job || !company) {
    return <Heading>Carregando...</Heading>
  }

  return (
    <>
      <Head>
        <title>vagasPCD | Vaga</title>
      </Head>

      <Header />

      <Container>
        <MainSection>
          <GridArea area="title">
            <Heading>{job.title}</Heading>
          </GridArea>
          <GridArea area="company_name">
            <strong>Empresa: </strong>
            {toPascalCase(company.name)}
          </GridArea>
          <GridArea area="city">
            <strong>Cidade: </strong>
            {toPascalCase(company.city)} / {company.state}
          </GridArea>
          <GridArea area="role">
            <strong>Cargo: </strong>
            {job.role}
          </GridArea>
          <GridArea area="role">
            <strong>Cargo: </strong>
            {job.role}
          </GridArea>
          <GridArea area="created_at">
            <strong>Vaga aberta em: </strong>
            {dayjs(job.created_at)
              .locale('pt-br')
              .format('DD [de] MMMM [de] YYYY')}
          </GridArea>
          <GridArea area="description">{job.description}</GridArea>
          <GridArea area="salary">
            <strong>Salário: </strong>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(job.salary)}
          </GridArea>
          <GridArea area="perks">
            <strong>Benefícios: </strong>
            <Text>{job.perks}</Text>
          </GridArea>
          <GridArea area="location">
            <strong>Local: </strong>
            {job.location}
          </GridArea>
          <GridArea area="disability_type">
            <strong>Deficiência: </strong>
            {job.disability_type}
          </GridArea>
          <GridArea area="linkedin">
            <Link href={job.linkedin || ''} target="_blank">
              LinkedIn da vaga
            </Link>
          </GridArea>
          <GridArea area="about">
            <strong>Sobre a empresa: </strong>
            {company.about}
          </GridArea>
          <GridArea area="company_linkedin">
            <Link href={company.linkedin || ''} target="_blank">
              LinkedIn da empresa
            </Link>
          </GridArea>
          <GridArea area="job_id">{job.job_id}</GridArea>
        </MainSection>

        <Footer>
          <Button onClick={() => router.back()}>
            <ArrowLeft />
            Voltar para o início
          </Button>

          <Button onClick={handleSendResume}>
            <ReadCvLogo />
            Enviar Curriculum
          </Button>
        </Footer>
      </Container>
    </>
  )
}
