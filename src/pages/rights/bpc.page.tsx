import InformativePageLayout from '@/components/layouts/InformativePageLayout'
import { NextPageWithLayout } from '@/pages/_app.page'
import { Heading, ListItem, Text, UnorderedList } from '@vagaspcd-ui/react'
import Link from 'next/link'
import { ReactElement } from 'react'
import { Header, Main } from './styles'

const BPC: NextPageWithLayout = () => {
  return (
    <>
      <Header>
        <Heading size="sm">
          Benefício de Prestação Continuada ao Deficiente - BPC / LOAS
        </Heading>
      </Header>

      <Main>
        <Heading as="h3" size="sm">
          O que é o BPC?
        </Heading>

        <Text>
          O Benefício de Prestação Continuada ao Deficiente (BPC) está previsto
          na Lei Orgânica da Assistência Social (Lei 8742/93). Ele é destinado à
          Pessoa com Deficiência ou ao Idoso com 65 anos ou mais, desde que a
          renda familiar <em>per capita</em> seja igual ou inferior a ¼ do
          salário mínimo. Por ser um benefício assistencial, não exige prévia
          contribuição pelo requerente, como no caso de benefícios
          previdenciários (aposentadorias, por exemplo).
        </Text>
        <Text>
          Para o BPC, considera-se família o cônjuge/companheiro(a), pais,
          madrasta, padrasto, irmãos solteiros, filhos e enteados solteiros e
          menores tutelados, sendo este parentesco definido em relação à Pessoa
          com Deficiência, e desde que vivam sob o mesmo teto.
        </Text>
        <Text>
          A renda a ser considerada para cálculo de renda familiar é aquela
          proveniente de salários, proventos, benefícios de previdência pública
          ou privada, seguro desemprego, rendimentos auferidos de patrimônio
          (ex: aluguel), pró-labore, comissões, pensões, pensão alimentícia,
          renda mensal vitalícia, rendimentos do mercado informal ou autônomo,
          outros rendimentos do trabalho não assalariado.
        </Text>
        <Text>
          Destacamos que a partir da Lei 13892 de 02/04/2020, Portaria 374 de
          05/05/2020 e Portaria 681 de 23/09/2020, passam a ser excluídos do
          cômputo de renda todos os benefícios previdenciários e/ou
          assistenciais com valor de até 1 (um) salário mínimo, recebido por
          componente do grupo familiar, conforme abaixo:
        </Text>
        <br />
        <UnorderedList>
          <ListItem data-icon="›">BPC à Pessoa com Deficiência;</ListItem>
          <ListItem data-icon="›">BPC ao Idoso;</ListItem>
          <ListItem data-icon="›">
            Qualquer benefício previdenciário no valor de até 1 (um) salário
            mínimo concedido à Pessoa Idosa a partir dos 65 anos;
          </ListItem>
          <ListItem data-icon="›">
            Aposentadoria por Idade da Pessoa com Deficiência no valor de 1 (um)
            salário mínimo;
          </ListItem>
          <ListItem data-icon="›">
            Aposentadoria por Tempo de Contribuição da Pessoa com Deficiência no
            valore de 1 (um) salário mínimo.
          </ListItem>
        </UnorderedList>

        <br />
        <Text>
          Para maiores informações sobre o BPC, consulte:{' '}
          <Link
            href="https://www.gov.br/pt-br/servicos/solicitar-beneficio-assistencial-a-pessoa-com-deficiencia"
            target="_blank"
          >
            https://www.gov.br/pt-br/servicos/solicitar-beneficio-assistencial-a-pessoa-com-deficiencia
          </Link>
          .
        </Text>

        <Heading as="h3" size="sm">
          Como solicitar o BPC?
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
          Já recebo o BPC, se começar a trabalhar, vou perder o Benefício?
        </Heading>

        <Text>
          Em caso de exercício de atividade remunerada, incluindo de
          microempreendedor, o beneficiário com deficiência deverá solicitar a
          suspensão do Benefício em caráter especial. O limite de tempo de
          suspensão do benefício é de 2 anos, sendo que o benefício será cessado
          após esse período. Se no momento de suspensão houver direito à
          concessão de Auxílio Inclusão, este será implantado automaticamente.
          Destaca-se que a contratação da Pessoa com Deficiência na condição de
          “aprendiz com deficiência” não acarreta a suspensão do BPC,
          limitando-se a 2 (dois) anos o recebimento concomitante da remuneração
          e do benefício.
        </Text>
        <Text>
          Após a extinção de contrato de trabalho e finalização de pagamento da
          última parcela do seguro desemprego, o requerente poderá solicitar a
          reativação do Benefício de Prestação Continuada, sem necessidade de
          reavaliação da deficiência pelo INSS, desde que o benefício não tenha
          cessado.
        </Text>
      </Main>
    </>
  )
}

BPC.getLayout = function getLayout(page: ReactElement) {
  return <InformativePageLayout>{page}</InformativePageLayout>
}

export default BPC
