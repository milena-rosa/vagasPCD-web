import { Role } from '@/@types/user'
import Header from '@/components/Header'
import Head from 'next/head'
import { Container, Content, Footer, MainSection } from './styles'

import reportIcon from '@/assets/report.svg'
import { ArrowLeft, NewspaperClipping } from '@phosphor-icons/react'
import {
  Button,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from '@vagaspcd-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function GovernmentHome() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>vagasPCD | Relatórios INSS/MTE</title>
      </Head>

      <Header
        authenticateRoute={`/login?role=${Role.GOVERNMENT}`}
        registerRoute="/government/register"
      />

      <Container>
        <MainSection>
          <Heading size="md">Emissão de Relatórios</Heading>

          <Image
            priority
            src={reportIcon}
            alt="Ícone de relatório"
            height={96}
          />

          <Content>
            <Text>Emite relatório com os dados:</Text>

            <UnorderedList>
              <ListItem data-icon="›">Nome da empresa</ListItem>
              <ListItem data-icon="›">CNPJ</ListItem>
              <ListItem data-icon="›">E-mail e telefone de contato</ListItem>
              <ListItem data-icon="›">Endereço de localização</ListItem>
              <ListItem data-icon="›">Vagas divulgadas pela empresa</ListItem>
              <ListItem data-icon="›">
                Número de currículos enviados para cada vaga
              </ListItem>
            </UnorderedList>
          </Content>

          <Footer>
            <Button onClick={() => router.push('/government')}>
              <ArrowLeft />
              Voltar para início
            </Button>
            <Button onClick={() => router.push('/government/reports')}>
              <NewspaperClipping />
              Emitir relatório
            </Button>
          </Footer>
        </MainSection>
      </Container>
    </>
  )
}
