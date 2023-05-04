import Header from '@/components/Header'
import { Role } from '@/contexts/AuthContext'
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
          <Button size="sm" onClick={() => router.push('/jobs/register')}>
            <WheelchairMotion />
            Cadastre Vagas
          </Button>
          <Button size="sm">
            <RocketLaunch />
            Reabilitação Profissional
          </Button>
        </ActionsBox>
      </HeroSection>

      <MainSection>
        <GoalsTextBox>
          <Heading size="md">Sobre Lei de Cotas</Heading>

          <UnorderedList>
            <ListItem data-icon="›">
              Realizar a integração entre empresas, o Instituto Nacional do
              Seguro Social (INSS) e Pessoas com Deficiência (PcD);
            </ListItem>
            <ListItem data-icon="›">
              Aumentar o número de contratações de PcD&rsquo;s;
            </ListItem>
            <ListItem data-icon="›">
              Estabelecer parcerias e Acordos de Cooperação Técnica entre INSS e
              empresas;
            </ListItem>
            <ListItem data-icon="›">
              Estabelecer novas oportunidades de Reabilitação Profissional;
            </ListItem>
            <ListItem data-icon="›">
              Reduzir custos decorrentes de multas das empresas por não
              contratação de PcD dentro das cotas definidas lei; entre outras.
            </ListItem>
          </UnorderedList>
        </GoalsTextBox>

        <BlurbSection>
          <Heading>
            Estamos ao seu lado para apoiar sua jornada profissional
          </Heading>
          <RightsLinkBox>
            <Link href="/rights">
              <WheelchairMotion size={40} />
            </Link>
            <Text>
              Clique aqui para saber mais sobre seus direitos e como isso pode
              te ajudar profissionalmente.
            </Text>
          </RightsLinkBox>
        </BlurbSection>
      </MainSection>
    </>
  )
}
