import InformativePageLayout from '@/components/layouts/InformativePageLayout'
import { NextPageWithLayout } from '@/pages/_app.page'
import { Heading, ListItem, Text, UnorderedList } from '@vagaspcd-ui/react'
import Link from 'next/link'
import { ReactElement } from 'react'
import { Header, Main } from './styles'

const IllnessAndDisabilityRetirement: NextPageWithLayout = () => {
  return (
    <>
      <Header>
        <Heading size="sm">
          Auxílio Doença e Aposentadoria por Invalidez
        </Heading>
      </Header>

      <Main>
        <Text>
          Auxílio Doença e Aposentadoria por Invalidez são benefícios para
          aqueles que se encontram incapazes para o trabalho, sendo que, no
          primeiro, a incapacidade é temporária, enquanto para o segundo, a
          incapacidade é permanente. Destaca-se que incapacidade é diferente de
          deficiência.
        </Text>
        <Text>
          A incapacidade pressupõe a impossibilidade física ou mental de
          executar as atividades relacionadas ao trabalho. Já na deficiência, é
          possível executá-las, muito embora, muitas vezes sejam necessárias
          adaptações do posto de trabalho, bem como acesso a produtos e
          tecnologias que promovam acessibilidade.
        </Text>
        <Text>
          O Auxílio Doença e a Aposentadoria por Invalidez são benefícios
          previdenciários, e por isso, pressupõe prévia contribuição ao INSS
          para que se possa ter o direito. A contribuição mínima é exigida é de
          número de 12, realizadas antes do início da incapacidade. Exceção a
          isso são as doenças isentas de carência, que não exigem número mínimo
          de contribuição. São elas (Lei 8213, artigo 151):
        </Text>

        <br />
        <UnorderedList>
          <ListItem data-icon="›">Tuberculose ativa;</ListItem>
          <ListItem data-icon="›">Hanseníase;</ListItem>
          <ListItem data-icon="›">Alienação mental;</ListItem>
          <ListItem data-icon="›">Esclerose múltipla;</ListItem>
          <ListItem data-icon="›">Hepatopatia grave;</ListItem>
          <ListItem data-icon="›">Neoplasia maligna;</ListItem>
          <ListItem data-icon="›">Cegueira;</ListItem>
          <ListItem data-icon="›">
            Paralisia irreversível e incapacitante;
          </ListItem>
          <ListItem data-icon="›">Cardiopatia grave;</ListItem>
          <ListItem data-icon="›">Doença de Parkinson;</ListItem>
          <ListItem data-icon="›">Espondiloartrose anquilosante;</ListItem>
          <ListItem data-icon="›">Nefropatia grave;</ListItem>
          <ListItem data-icon="›">
            Estado avançado da doença de Paget (osteíte deformante);
          </ListItem>
          <ListItem data-icon="›">
            Síndrome da Deficiência Imunológica Adquirida (AIDS); ou
          </ListItem>
          <ListItem data-icon="›">
            Contaminação por radiação, com base em conclusão da medicina
            especializada.
          </ListItem>
        </UnorderedList>

        <br />

        <Text>
          Destacamos que mesmo que tenha se cumprido a carência ou mesmo para
          benefícios isentos de carência, é necessário que o requerente mantenha
          a qualidade de segurado no início da incapacidade e/ou doença,
          conforme o caso.
        </Text>
        <Text>
          Para maiores informações consulte:
          <Link
            href="https://www.gov.br/pt-br/servicos/marcar-ou-remarcar-pericia-medica-do-inss"
            target="_blank"
          >
            https://www.gov.br/pt-br/servicos/marcar-ou-remarcar-pericia-medica-do-inss
          </Link>
        </Text>

        <Heading as="h3" size="sm">
          Como solicitar o Auxílio Doença?
        </Heading>

        <Text>
          O benefício pode ser solicitado através do site{' '}
          <strong>
            <Link href="https://meu.inss.gov.br" target="_blank">
              meu.inss.gov.br
            </Link>
          </strong>
          , aplicativo <strong>MeuINSS</strong> ou através do telefone{' '}
          <strong>135</strong>. A Central 135 funciona de segunda a sábado, das
          7h às 22h. A ligação é gratuita. Será agendada Perícia Médica.
        </Text>
        <Text>
          Não existe requerimento específico para a Aposentadoria por Invalidez.
          No momento da Perícia do Auxílio Doença, o perito é que determinará
          qual o benefício adequado.
        </Text>

        <Heading as="h3" size="sm">
          Posso trabalhar e receber o Auxílio Doença ou Aposentadoria por
          Invalidez?
        </Heading>

        <Text>
          Não. O Auxílio Doença e Aposentadoria por Invalidez são destinados
          àquelas pessoas que se encontram com incapacidade laboral para o
          trabalho. Dessa forma, caso haja retorno ao mercado de trabalho, seja
          este formal ou informal, o segurado deverá pedir cessação do
          benefício.
        </Text>
        <Text>
          Destacamos que algumas situações de cessação de Aposentadoria por
          Invalidez geram o direito à “mensalidade de recuperação”, que é um
          benefício temporário para reingresso ao mercado de trabalho. A
          mensalidade de recuperação é gerada automaticamente a quem tiver
          direito e não há impedimento do recebimento desta cumulativamente com
          o exercício da atividade remunerada.
        </Text>
      </Main>
    </>
  )
}

IllnessAndDisabilityRetirement.getLayout = function getLayout(
  page: ReactElement,
) {
  return <InformativePageLayout>{page}</InformativePageLayout>
}

export default IllnessAndDisabilityRetirement
