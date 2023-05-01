import { ArrowLeft, ArrowRight, MagnifyingGlass } from '@phosphor-icons/react'
import { Button, Heading, Text, TextInput } from '@vagaspcd-ui/react'
import { useRouter } from 'next/router'
import {
  Container,
  Footer,
  JobCategoriesBox,
  JobCategory,
  SearchBox,
} from './styles'

export default function Jobs() {
  const router = useRouter()

  return (
    <Container>
      <Text>Veja algumas oportunidades profissionais</Text>
      <Heading>Vagas de Emprego</Heading>

      <SearchBox>
        <TextInput type="text" />
        <Button>
          <MagnifyingGlass />
          Buscar
        </Button>
      </SearchBox>

      <JobCategoriesBox>
        <JobCategory href="/jobs/id-1">
          Vagas de estágio
          <ArrowRight />
        </JobCategory>
        <JobCategory href="/jobs/id-1">
          Vagas de tecnologia
          <ArrowRight />
        </JobCategory>
        <JobCategory href="/jobs/id-1">
          Vagas de telemarketing
          <ArrowRight />
        </JobCategory>
        <JobCategory href="/jobs/id-1">
          Vagas da área de saúde
          <ArrowRight />
        </JobCategory>
        <JobCategory href="/jobs/id-1">
          Vagas administrativo
          <ArrowRight />
        </JobCategory>
        <JobCategory href="/jobs/id-1">
          Vagas temporárias
          <ArrowRight />
        </JobCategory>
        <JobCategory href="/jobs/id-1">
          Vagas home office
          <ArrowRight />
        </JobCategory>
        <JobCategory href="/jobs/id-1">
          Vagas laboratório
          <ArrowRight />
        </JobCategory>
        <JobCategory href="/jobs/id-1">
          Vagas recursos humanos
          <ArrowRight />
        </JobCategory>
        <JobCategory href="/jobs/id-1">
          Vagas recepção
          <ArrowRight />
        </JobCategory>
        <JobCategory href="/jobs/id-1">
          Vagas Piracicaba
          <ArrowRight />
        </JobCategory>
        <JobCategory href="/jobs/id-1">
          Vagas nutricionista
          <ArrowRight />
        </JobCategory>
      </JobCategoriesBox>

      <Footer>
        <Button onClick={() => router.push('candidate')}>
          <ArrowLeft />
          Voltar para o início
        </Button>
      </Footer>
    </Container>
  )
}
