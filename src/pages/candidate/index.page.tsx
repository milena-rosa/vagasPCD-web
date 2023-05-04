import { Role, useAuth } from '@/contexts/AuthContext'
import {
  DoorOpen,
  MagnifyingGlass,
  RocketLaunch,
  WheelchairMotion,
} from '@phosphor-icons/react'
import {
  Button,
  Heading,
  ListItem,
  Text,
  TextInput,
  UnorderedList,
} from '@vagaspcd-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  BlurbSection,
  GoalsTextBox,
  Header,
  HeaderContainer,
  JobTypesBox,
  MainSection,
  RightsLinkBox,
  SearchBox,
  SearchSection,
  SearchSectionTitle,
} from './styles'

export default function CandidateHome() {
  const router = useRouter()
  const { isAuthenticated, signOut } = useAuth()

  return (
    <>
      <Head>
        <title>vagasPCD | Candidato</title>
      </Head>

      <HeaderContainer>
        <Header>
          {!isAuthenticated ? (
            <>
              <Button
                variant="primary"
                size="sm"
                onClick={() => router.push(`/login?role=${Role.CANDIDATE}`)}
              >
                Faça seu Login
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => router.push('/candidate/register')}
              >
                Cadastre-se
              </Button>
            </>
          ) : (
            <Button size="sm" onClick={() => signOut()}>
              <DoorOpen />
              Sair
            </Button>
          )}
        </Header>
      </HeaderContainer>

      <SearchSection>
        <SearchSectionTitle>
          <Text size="md">
            Aqui você encontra uma vaga especialmente para você
          </Text>
          <Heading size="xl">Encontre sua vaga de emprego</Heading>
        </SearchSectionTitle>

        <SearchBox>
          <TextInput type="text" />
          <Button>
            <MagnifyingGlass />
            Buscar
          </Button>
        </SearchBox>

        <JobTypesBox>
          <Button size="sm" onClick={() => router.push('jobs')}>
            <WheelchairMotion />
            Vagas
          </Button>
          <Button size="sm">
            <RocketLaunch />
            Estágio
          </Button>
        </JobTypesBox>
      </SearchSection>

      <MainSection>
        <GoalsTextBox>
          <Heading size="md">Nossos Objetivos</Heading>
          <Text>
            O objetivo geral desta plataforma consiste na facilitação da
            comunicação entre empresas que tem a obrigação legal de contratação
            de Pessoas com Deficiência (PcD). Mais especificamente:
          </Text>
          <br />
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

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const apiClient = getAPIClient(ctx)
//   const { 'vagasPCD.token': token } = parseCookies(ctx)

//   if (!token) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     }
//   }

//   // await apiClient.get('/...')

//   return {
//     props: {},
//   }
// }
