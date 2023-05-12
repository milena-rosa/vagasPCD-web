import { Report } from '@/@types/report'
import { Role } from '@/@types/user'
import Header from '@/components/Header'
import { apiVagasPCD } from '@/services/apiVagasPCD'
import { formatCNPJ } from '@/utils/formatCNPJ'
import { formatPhoneNumber } from '@/utils/formatPhoneNumber'
import { formatZipCode } from '@/utils/formatZipCode'
import { toPascalCase } from '@/utils/toPascalCase'
import { FileCsv } from '@phosphor-icons/react'
import { Heading } from '@vagaspcd-ui/react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { parseCookies } from 'nookies'
import { useEffect, useState } from 'react'
import {
  CompanyGrid,
  Container,
  DownloadCSVButton,
  Footer,
  GridArea,
  MainSection,
} from './styles'

export default function Reports() {
  const [data, setData] = useState<Report[]>([])
  const [csvData, setCsvData] = useState()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const loadSummaryData = async () => {
      const response = await apiVagasPCD.get<Report[]>('/applications/summary')
      setData(response.data)
    }

    const loadCSVSummaryData = async () => {
      const response = await apiVagasPCD.get('/applications/summary-csv')
      setCsvData(response.data)
    }

    loadSummaryData()
    loadCSVSummaryData()
    setIsLoading(false)
  }, [])

  if (isLoading) return <Heading>Carregando...</Heading>
  if (!data) return <Heading>Relatório não encontrado</Heading>

  return (
    <>
      <Head>
        <title>vagasPCD | Relatórios</title>
      </Head>

      <Header
        authenticateRoute={`/login?role=${Role.GOVERNMENT}`}
        registerRoute="/government/register"
      />

      <Container>
        <MainSection>
          <Heading color="$gray900" size="sm">
            Emissão de Relatórios
          </Heading>

          {data.map((item) => (
            <CompanyGrid key={item.company_id}>
              <GridArea area="name">{toPascalCase(item.company_name)}</GridArea>

              <GridArea area="cnpj">
                <strong>CNPJ: </strong>
                {formatCNPJ(item.company_cnpj)}
              </GridArea>

              <GridArea area="email">
                <strong>E-mail: </strong>
                {item.company_email}
              </GridArea>
              <GridArea area="phone">
                <strong>Telefone: </strong>
                {formatPhoneNumber(item.company_phone) || '-'}
              </GridArea>

              <GridArea area="street">
                <strong>Rua: </strong>
                {toPascalCase(item.company_street)}
              </GridArea>
              <GridArea area="number">
                <strong>Número: </strong>
                {item.company_number}
              </GridArea>
              <GridArea area="complement">
                <strong>Complemento: </strong>
                {toPascalCase(item.company_complement) || '-'}
              </GridArea>

              <GridArea area="city">
                <strong>Cidade: </strong>
                {toPascalCase(item.company_city)} / {item.company_state}
              </GridArea>
              <GridArea area="zipCode">
                <strong>CEP: </strong>
                {formatZipCode(item.company_zip_code)}
              </GridArea>

              <GridArea area="n_jobs">
                <strong>Vagas abertas: </strong>
                {item.n_jobs}
              </GridArea>

              <GridArea area="n_applications">
                <strong>Currículos recebidos: </strong>
                {item.n_applications}
              </GridArea>
            </CompanyGrid>
          ))}

          <Footer>
            <DownloadCSVButton data={csvData || []} target="_blank">
              <FileCsv />
              Exportar CSV
            </DownloadCSVButton>
            {/* <DownloadPDFButton
              document={<PDFReport data={data} />}
              fileName="report.pdf"
            >
              <FilePdf />
              Exportar PDF
            </DownloadPDFButton> */}
          </Footer>
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
        destination: `/login?role=${Role.GOVERNMENT}`,
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
