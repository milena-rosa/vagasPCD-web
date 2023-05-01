import { ArrowLeft, Asterisk, ReadCvLogo } from '@phosphor-icons/react'
import { Button, Heading, Text } from '@vagaspcd-ui/react'
import { Container, Footer } from './styles'

export default function Job() {
  // const router = useRouter()
  // const { id } = router.query

  return (
    <Container>
      <Heading size="md">Vaga de Estágio</Heading>
      <Text>
        A empresa Amazon Web Services, Inc. oferece vaga de estágio na área da
        tecnologia, para aprimoramento profissional na área de teste e qualidade
        de software. Você trabalhará com uma plataforma de serviços de
        computação em nuvem, que formam uma plataforma de computação na nuvem
        oferecida pela Amazon.com.
      </Text>
      <Text>&nbsp;</Text>
      <Text>
        <Asterisk size={12} /> Necessário Inglês básico
      </Text>
      <Text>
        <Asterisk size={12} /> Salário + Benefícios
      </Text>
      <Text>
        <Asterisk size={12} /> Oportunidade de efetivação
      </Text>
      <Text>
        <Asterisk size={12} /> Trabalho remoto
      </Text>

      <Footer>
        <Button>
          <ArrowLeft />
          Voltar para o início
        </Button>

        <Button>
          <ReadCvLogo />
          Enviar Curriculum
        </Button>
      </Footer>
    </Container>
  )
}
