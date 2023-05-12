import Header from '@/components/Header'
import { ArrowLeft } from '@phosphor-icons/react'
import { Button, Heading, Text, UnorderedList } from '@vagaspcd-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import {
  Container,
  Footer,
  ListItem,
  Main,
  MainSection,
  TitleContainer,
} from './styles'

export default function Rehabilitation() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>vagasPCD | Histórico de Vaga</title>
      </Head>

      <Header />

      <Container>
        <MainSection>
          <TitleContainer>
            <Heading size="sm">
              Reabilitação Profissional, Parcerias e Acordos de Cooperação
              Técnica
            </Heading>
          </TitleContainer>

          <Main>
            <Text>
              Conforme a Lei 8213/91, toda empresa com mais de 100 funcionários,
              deve reservar parte de suas vagas para pessoas com deficiência ou
              REABILITADOS DO INSS. A Reabilitação Profissional do INSS é um
              serviço prestado ao beneficiário incapacitado para o trabalho e
              tem como objetivo o retorno deste ao mercado de trabalho através
              da readaptação profissional e reeducação (artigo 1º, Portaria
              DIRBEN/INSS 999 de 28/03/2022).
            </Text>
            <Text>
              A Portaria DIBEN/INSS 999 de 28/03/2022, prevê a possibilidade de
              realização de treinamento de reabilitados do INSS em empresas
              através de parceira ou por meio de Acordo de Cooperação Técnica.
              Neste caso, após a realização de treinamento profissional, é
              possível contratação do segurado e preenchimento de vagas da cota.
            </Text>
            <Text>
              Observamos que o treinamento deve ocorrer em atividades
              compatíveis com as restrições laborais do segurado. Caso deseje
              mais informações, basta entrar em contato com a equipe de
              Reabilitação Profissional da Gerência Executiva de sua localização
              ou da Superintendência Regional, conforme abaixo:
            </Text>

            <br />
            <UnorderedList>
              <ListItem data-icon="›">
                <Text as="strong">Superintendência Regional Sudeste I</Text>
                <p>
                  <strong>Telefone(s):</strong> (11) 3544-3333
                </p>
                <p>
                  <strong>E-mail:</strong> sr1@inss.gov.br
                </p>
              </ListItem>
              <ListItem data-icon="›">
                <Text as="strong">Superintendência Regional Sudeste II</Text>
                <p>
                  <strong>Telefone(s):</strong> (31) 3249-5072
                </p>
                <p>
                  <strong>E-mail:</strong> sr2@inss.gov.br
                </p>
              </ListItem>
              <ListItem data-icon="›">
                <Text as="strong">Superintendência Regional Sul</Text>
                <p>
                  <strong>Telefone(s):</strong> (48) 3821-7166
                </p>
                <p>
                  <strong>E-mail:</strong> sr3@inss.gov.br
                </p>
              </ListItem>
              <ListItem data-icon="›">
                <Text as="strong">Superintendência Regional Nordeste</Text>
                <p>
                  <strong>Telefone(s):</strong> (81) 3224-9018
                </p>
                <p>
                  <strong>E-mail:</strong> sr4@inss.gov.br
                </p>
              </ListItem>
              <ListItem data-icon="›">
                <Text as="strong">
                  Superintendência Regional Norte / Centro-Oeste
                </Text>
                <p>
                  <strong>Telefone(s):</strong> (61) 3319-2549
                </p>
                <p>
                  <strong>E-mail:</strong> sr5@inss.gov.br
                </p>
              </ListItem>
            </UnorderedList>
          </Main>

          <Footer>
            <Button onClick={() => router.back()}>
              <ArrowLeft />
              Voltar para Página Anterior
            </Button>
          </Footer>
        </MainSection>
      </Container>
    </>
  )
}
