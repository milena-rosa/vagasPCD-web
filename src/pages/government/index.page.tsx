import { Role } from '@/@types/user'
import Header from '@/components/Header'
import Head from 'next/head'
import { MainSection } from './styles'

import { Report } from '@/@types/report'
import reportIcon from '@/assets/report.svg'
import { apiVagasPCD } from '@/services/apiVagasPCD'
import { toPascalCase } from '@/utils/toPascalCase'
import { Heading, Text } from '@vagaspcd-ui/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function GovernmentHome() {
  const [data, setData] = useState<Report[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    apiVagasPCD.get<Report[]>('/applications/summary').then((response) => {
      setData(response.data)
    })
    setIsLoading(false)
  }, [])

  if (isLoading) return <Heading>Carregando...</Heading>
  if (!data) return <Heading>Perfil não encontrado</Heading>

  return (
    <>
      <Head>
        <title>vagasPCD | Empresa</title>
      </Head>

      <Header
        authenticateRoute={`/login?role=${Role.GOVERNMENT}`}
        registerRoute="/government/register"
      />

      <MainSection>
        <Heading color="$gray900" size="sm">
          Emissão de Relatórios
        </Heading>
        <Image priority src={reportIcon} alt="Ícone de relatório" />

        {data.map((item) => (
          <div key={item.company_id}>
            <Text as="strong">{toPascalCase(item.company_name)}</Text>
            <Text as="strong">{item.company_cnpj}</Text>
            <p>
              <Text as="strong">Vagas abertas: </Text>
              <Text as="span">{item.n_jobs}</Text>
            </p>
            <p>
              <Text as="strong">Candidaturas: </Text>
              <Text as="span">{item.n_applications}</Text>
            </p>
          </div>
        ))}
      </MainSection>
    </>
  )
}
