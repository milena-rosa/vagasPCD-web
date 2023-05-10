import { Job } from '@/@types/job'
import { Role } from '@/@types/user'
import Header from '@/components/Header'
import { apiVagasPCD } from '@/services/apiVagasPCD'
import { Heading } from '@vagaspcd-ui/react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { parseCookies } from 'nookies'
import { useEffect, useState } from 'react'

import JobList from '../components/JobList'
import { Container, MainSection } from './styles'

export default function JobsHistory() {
  const [data, setData] = useState<Job[]>([])

  useEffect(() => {
    const loadJobsHistory = async () => {
      const response = await apiVagasPCD.get('/jobs/history')
      setData(response.data)
    }
    loadJobsHistory()
  }, [])

  return (
    <>
      <Head>
        <title>vagasPCD | Histórico de Vaga</title>
      </Head>

      <Header />

      <Container>
        <MainSection>
          <Heading size="md">Histórico de vagas</Heading>

          <JobList data={data} isHistory />
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
        destination: `/login?role=${Role.COMPANY}`,
        permanent: false,
      },
    }
  }

  // await apiClient.get('/...')

  return {
    props: {},
  }
}
