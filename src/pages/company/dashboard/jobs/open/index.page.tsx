import Header from '@/components/Header'
import { apiVagasPCD } from '@/services/apiVagasPCD'
import { Heading } from '@vagaspcd-ui/react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { parseCookies } from 'nookies'
import { useEffect, useState } from 'react'
import DashboardSideNav from '../../components/DashboardSideNav'
import JobList from '../../components/JobList'
import { Container, MainSection } from '../../styles'

type Job = {
  job_id: string
  title: string
  role: string
  linkedin: string
  description: string
  salary: number
  perks: string
  location: string
  disability_type: string
  created_at: string
}

export default function OpenJobs() {
  const [data, setData] = useState([])

  useEffect(() => {
    apiVagasPCD.get('/jobs/open').then((response) => setData(response.data))
  }, [])

  return (
    <>
      <Head>
        <title>vagasPCD | Cadastro de Vaga</title>
      </Head>

      <Header />

      <Container>
        <DashboardSideNav />

        <MainSection>
          <Heading size="md">Vagas abertas</Heading>

          <JobList />
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
