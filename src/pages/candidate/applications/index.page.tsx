import { Application } from '@/@types/application'
import { Role } from '@/@types/user'
import Header from '@/components/Header'
import { apiVagasPCD } from '@/services/apiVagasPCD'
import { Heading } from '@vagaspcd-ui/react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { parseCookies } from 'nookies'
import { useEffect, useState } from 'react'
import ApplicationsList from '../components/ApplicationList'
import { Container, MainSection } from './styles'

export default function CandidateApplications() {
  const [data, setData] = useState<Application[]>([])

  useEffect(() => {
    const loadOpenApplications = async () => {
      const response = await apiVagasPCD.get('/applications/open')
      setData(response.data.jobs)
    }
    loadOpenApplications()
  }, [])

  return (
    <>
      <Head>
        <title>vagasPCD | Minhas vagas</title>
      </Head>

      <Header />

      <Container>
        <MainSection>
          <Heading size="md">Minhas vagas</Heading>

          <ApplicationsList data={data} />
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
