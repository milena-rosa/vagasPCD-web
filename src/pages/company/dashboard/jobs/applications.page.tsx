import Header from '@/components/Header'
import Head from 'next/head'
import DashboardSideNav from '../components/DashboardSideNav'
import { Container, MainSection } from '../styles'

export default function JobsApplications() {
  return (
    <>
      <Head>
        <title>vagasPCD | Candidaturas</title>
      </Head>

      <Header />

      <Container>
        <DashboardSideNav currentPageId={4} />

        <MainSection></MainSection>
      </Container>
    </>
  )
}
