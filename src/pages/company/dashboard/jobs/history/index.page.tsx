import Header from '@/components/Header'
import { apiVagasPCD } from '@/services/apiVagasPCD'
import { Heading } from '@vagaspcd-ui/react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { parseCookies } from 'nookies'
import { useEffect, useState } from 'react'
import DashboardSideNav from '../../components/DashboardSideNav'
import JobList, { Job } from '../../components/JobList'
import { Container, MainSection } from '../../styles'

export default function JobsHistory() {
  const [data, setData] = useState<Job[]>([])

  useEffect(() => {
    const loadOpenJobs = async () => {
      const response = await apiVagasPCD.get('/jobs/open')
      setData(response.data)
    }
    loadOpenJobs()
  }, [])

  useEffect(() => {
    apiVagasPCD.get('/jobs/history').then((response) => setData(response.data))
  }, [])

  return (
    <>
      <Head>
        <title>vagasPCD | Histórico de Vaga</title>
      </Head>

      <Header />

      <Container>
        <DashboardSideNav />

        <MainSection>
          <Heading size="md">Histórico de vagas</Heading>

          <JobList data={data} />
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
        destination: '/company',
        permanent: false,
      },
    }
  }

  // await apiClient.get('/...')

  return {
    props: {},
  }
}
