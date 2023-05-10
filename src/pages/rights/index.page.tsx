import Header from '@/components/Header'
import { ArrowLeft, ArrowRight, Scales } from '@phosphor-icons/react'
import { Button, Heading } from '@vagaspcd-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Box, Container, Footer } from './styles'

export default function Rights() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>vagasPCD | Direitos da Pessoa com Deficiência</title>
      </Head>

      <Header />

      <Container>
        <Heading>Direitos da Pessoa com Deficiência </Heading>
        <Scales size={80} />
        <Box href="/rights/bpc">
          Benefício de Prestação Continuada - BPC da Lei Orgânica da Assistência
          Social (LOAS)
          <ArrowRight />
        </Box>
        <Box href="/rights/inclusion">
          Auxílio Inclusão
          <ArrowRight />
        </Box>
        <Box href="/rights/illnessAndDisabilityRetirement">
          Auxílio Doença e Aposentadoria por Invalidez
          <ArrowRight />
        </Box>
        <Box href="/rights/accident">
          Auxílio Acidente
          <ArrowRight />
        </Box>
        <Box href="/rights/quotas">
          Lei de Cotas
          <ArrowRight />
        </Box>
        <Box href="/rights/statute">
          Estatuto da Pessoa com Deficiência
          <ArrowRight />
        </Box>

        <Footer>
          <Button onClick={() => router.back()}>
            <ArrowLeft />
            Voltar para o início
          </Button>
        </Footer>
      </Container>
    </>
  )
}
