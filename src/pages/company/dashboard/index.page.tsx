import Header from '@/components/Header'
import Head from 'next/head'

import DashboardNavBar from './components/DashboardSideNav'
import { Container, MainSection } from './styles'

export default function CompanyHome() {
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
