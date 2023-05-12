import { Job } from '@/@types/job'
import { Role } from '@/@types/user'
import Header from '@/components/Header'
import { apiVagasPCD } from '@/services/apiVagasPCD'
import { Heading, Text } from '@vagaspcd-ui/react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { parseCookies } from 'nookies'
import { useEffect, useState } from 'react'

import JobList from '../components/JobList'
import { Container, MainSection } from './styles'

export default function JobsHistory() {
  const [data, setData] = useState<Job[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const loadJobsHistory = async () => {
      const response = await apiVagasPCD.get('/jobs/history')
      setData(response.data)
    }
    loadJobsHistory()
    setIsLoading(false)
  }, [])

  if (isLoading) return <Heading>Carregando...</Heading>

  return (
    <>
      <Head>
        <title>vagasPCD | Histórico de Vaga</title>
      </Head>

      <Header />

      <Container>
        <MainSection>
          <Heading size="md">Histórico de vagas</Heading>

          {data ? (
            <JobList data={data} isHistory />
          ) : (
            <Text>Nenhuma vaga cadastrada</Text>
          )}
        </MainSection>
      </Container>
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
