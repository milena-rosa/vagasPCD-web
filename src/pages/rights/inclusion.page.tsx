import RightsLayout from '@/components/layouts/RightsLayout'
import { NextPageWithLayout } from '@/pages/_app.page'
import { Heading, ListItem, Text, UnorderedList } from '@vagaspcd-ui/react'
import Link from 'next/link'
import { ReactElement } from 'react'
import { Header, Main } from './styles'

const InclusionAssistance: NextPageWithLayout = () => {
  return (
    <>
      <Header>
        <Heading size="sm">Auxílio Inclusão</Heading>
      </Header>

      <Main>
        <Text>
          O Auxílio Inclusão é um benefício destinado àqueles: que são titulares
          de Benefício de Prestação Continuada (BPC), mas passaram a exercer
          atividade remunerada; ou que tenha tido o BPC suspenso ou cessado nos
          últimos 5 anos devido exercício de atividade remunerada.
        </Text>
        <Text>Para ter direito ao Auxílio Inclusão, deverá ainda:</Text>

        <br />
        <UnorderedList>
          <ListItem data-icon="›">
            Ter remuneração de até 2 (dois) salários mínimos e ser considerado
            filiado obrigatório ao Regime de Previdência Geral (RGPS) ou Próprio
            (RPPS);
          </ListItem>
          <ListItem data-icon="›">
            Ter a inscrição do Cadastro Único atualizada no momento do
            requerimento do benefício;
          </ListItem>
          <ListItem data-icon="›">Estar com o CPF regular; e</ListItem>
          <ListItem data-icon="›">
            Atender aos critérios de manutenção do BPC, contudo, sendo excluídas
            do cálculo de renda <em>per capita</em>, a remuneração do próprio
            trabalho.
          </ListItem>
        </UnorderedList>

        <br />

        <Heading as="h3" size="sm">
          Como solicitar o Auxílio Inclusão?
        </Heading>

        <Text>
          Para aqueles com Benefício de Prestação Continuada ativo, ao solicitar
          a suspensão do BPC em caráter especial, a possibilidade de concessão
          do Auxílio Inclusão será analisada. Quando for identificado pelo
          próprio INSS ou pelo Ministério da Cidadania a acumulação do BPC com o
          exercício de atividade remunerada, o Auxílio Inclusão será implantado
          automaticamente, desde que atendido os demais critérios.
        </Text>

        <Text>
          Para os demais casos, o benefício poderá ser solicitado através do
          site{' '}
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
          Posso trabalhar e receber o Auxílio Inclusão?
        </Heading>

        <Text>
          O Auxílio Inclusão é um benefício de amparo ao trabalhador com
          deficiência desde que a remuneração do trabalho seja de até 2 (dois)
          salários mínimos e desde que atendidos os demais critérios para
          concessão e manutenção do benefício.
        </Text>
      </Main>
    </>
  )
}

InclusionAssistance.getLayout = function getLayout(page: ReactElement) {
  return <RightsLayout>{page}</RightsLayout>
}

export default InclusionAssistance
