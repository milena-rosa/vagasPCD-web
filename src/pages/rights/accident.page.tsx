import InformativePageLayout from '@/components/layouts/InformativePageLayout'
import { NextPageWithLayout } from '@/pages/_app.page'
import { Heading, Text } from '@vagaspcd-ui/react'
import Link from 'next/link'
import { ReactElement } from 'react'
import { Header, Main } from './styles'

const AccidentAssistance: NextPageWithLayout = () => {
  return (
    <>
      <Header>
        <Heading size="sm">Auxílio Acidente</Heading>
      </Header>

      <Main>
        <Text>
          O Auxílio Acidente é um benefício de caráter indenizatório devido à
          sequela de acidente de qualquer natureza para os contribuintes do INSS
          na modalidade de empregado, inclusive o doméstico, trabalhador avulso
          e segurado especial. Embora não se exija carência para o benefício,
          para reconhecimento do direito, é necessário que no momento do
          acidente haja a qualidade de segurado (Instrução Normativa
          PRES/INSS128 de 28/03/2023).
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
          7h às 22h. A ligação é gratuita.
        </Text>

        <Heading as="h3" size="sm">
          Posso trabalhar e receber o Auxílio Acidente?
        </Heading>

        <Text>
          Sim. O Auxílio Acidente é um benefício de caráter indenizatório e, por
          isso, embora pressuponha a existência de sequelas decorrentes de
          acidente, estas não implicam em incapacidade para o trabalho. Por
          isso, é possível receber o benefício e exercer atividade remunerada
          simultaneamente.
        </Text>
      </Main>
    </>
  )
}

AccidentAssistance.getLayout = function getLayout(page: ReactElement) {
  return <InformativePageLayout>{page}</InformativePageLayout>
}

export default AccidentAssistance
