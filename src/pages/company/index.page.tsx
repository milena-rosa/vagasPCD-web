import { Role } from '@/@types/user'
import Header from '@/components/Header'
import { useAuth } from '@/contexts/AuthContext'
import { RocketLaunch, WheelchairMotion } from '@phosphor-icons/react'
import {
  Button,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from '@vagaspcd-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MouseEvent } from 'react'
import {
  ActionsBox,
  BlurbSection,
  GoalsTextBox,
  HeroSection,
  HeroSectionTitle,
  MainSection,
  RightsLinkBox,
} from './styles'

export default function CompanyHome() {
  const router = useRouter()
  const { isAuthenticated } = useAuth()

  async function handleRegisterJob(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    if (isAuthenticated) {
      await router.push('/company/jobs/register')
    } else {
      router.push({
        pathname: '/login',
        query: { from: router.asPath, role: Role.COMPANY },
      })
    }
  }

  return (
    <>
      <Head>
        <title>vagasPCD | Empresa</title>
      </Head>

      <Header
        authenticateRoute={`/login?role=${Role.COMPANY}`}
        registerRoute="/company/register"
      />

      <HeroSection>
        <HeroSectionTitle>
          <Text size="md">
            Aqui você encontra vários profissionais especiais
          </Text>
          <Heading size="xl">Divulgue suas vagas de emprego</Heading>
        </HeroSectionTitle>

        <ActionsBox>
          <Button size="sm" onClick={handleRegisterJob}>
            <WheelchairMotion />
            Cadastre Vagas
          </Button>
          <Button
            size="sm"
            onClick={() => router.push('/company/rehabilitation')}
          >
            <RocketLaunch />
            Reabilitação Profissional
          </Button>
        </ActionsBox>
      </HeroSection>

      <MainSection>
        <GoalsTextBox>
          <Text>
            O objetivo geral desta plataforma consiste na facilitação da
            comunicação entre empresas que tem a obrigação legal de contratação
            de Pessoas com Deficiência (PcD).
          </Text>

          <br />
          <br />
          <Heading size="md">Sobre Lei de Cotas</Heading>
          <Text>
            A Lei que trata das cotas de vagas de emprego para a Pessoa com
            Deficiência ou Reabilitados do INSS é a Lei 8213 de 24/07/91.
            Conforme o artigo 93 da referida lei, toda empresa com 100 (cem) ou
            mais empregados, deve reservar parcela de vagas para contratação de
            PcD ou reabilitados na seguinte proporção:
          </Text>
          <br />
          <UnorderedList>
            <ListItem data-icon="›">Até 200 empregados: 2%;</ListItem>
            <ListItem data-icon="›">De 201 a 500 empregados: 3%;</ListItem>
            <ListItem data-icon="›">De 501 a 1000 empregados: 4%;</ListItem>
            <ListItem data-icon="›">De 1001 em diante: 5%.</ListItem>
          </UnorderedList>
        </GoalsTextBox>

        <BlurbSection>
          <Heading>
            Estamos ao seu lado para facilitar a contratação de Pessoas com
            Deficiência
          </Heading>
          <RightsLinkBox>
            <Link href="/rights">
              <WheelchairMotion size={40} />
            </Link>
            <Text>
              Clique aqui para saber mais sobre os direitos das Pessoas com
              Deficiência.
            </Text>
          </RightsLinkBox>
        </BlurbSection>
      </MainSection>
    </>
  )
}
