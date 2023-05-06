import Header from '@/components/Header'
import Head from 'next/head'

import { Role } from '@/contexts/AuthContext'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import DashboardNavBar from './components/DashboardSideNav'
import { Container, MainSection } from './styles'

export default function CompanyDashboard() {
  return (
    <>
      <Head>
        <title>vagasPCD | Empresa</title>
      </Head>

      <Header />

      <Container>
        <DashboardNavBar />
        <MainSection>Resumão massinha?</MainSection>
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
