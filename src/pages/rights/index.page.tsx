import { ArrowLeft, ArrowRight, Scales } from '@phosphor-icons/react'
import { Button, Heading } from '@vagaspcd-ui/react'
import { useRouter } from 'next/router'
import { Box, Container, Footer } from './styles'

export default function Rights() {
  const router = useRouter()

  return (
    <Container>
      <Heading>Direitos da Pessoa com Deficiência </Heading>
      <Scales size={80} />
      <Box href="/rights/bpc">
        Clique aqui e saiba mais sobre Benefício de Prestação Continuada - BPC
        da Lei Orgânica da Assistência Social (LOAS)
        <ArrowRight />
      </Box>
      <Box href="/auxilio">
        Clique aqui para saber mais sobre o Auxílio Inclusão
        <ArrowRight />
      </Box>
      <Box href="/leiCotas">
        Clique aqui para saber mais sobre Lei de Cotas
        <ArrowRight />
      </Box>
      <Box href="/estatutoPcD">
        Estatuto da PcD
        <ArrowRight />
      </Box>
      <Box href="/auxiliodoenca">
        Clique aqui e saiba mais sobre o Auxílio Doença e Aposentadoria por
        Invalidez
        <ArrowRight />
      </Box>
      <Box href="/auxilioAcidente">
        Clique aqui para saber mais sobre o Auxílio Acidente
        <ArrowRight />
      </Box>

      <Footer>
        <Button onClick={() => router.back()}>
          <ArrowLeft />
          Voltar para o início
        </Button>
      </Footer>
    </Container>
  )
}
