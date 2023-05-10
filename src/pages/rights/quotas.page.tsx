import InformativePageLayout from '@/components/layouts/InformativePageLayout'
import { NextPageWithLayout } from '@/pages/_app.page'
import { Heading, Table, TableCell, TableRow, Text } from '@vagaspcd-ui/react'
import { ReactElement } from 'react'
import { Header, Main } from './styles'

const Quotas: NextPageWithLayout = () => {
  return (
    <>
      <Header>
        <Heading size="sm">Lei de Cotas</Heading>
      </Header>

      <Main>
        <Text>
          A Lei que trata das cotas de vagas de emprego para a Pessoa com
          Deficiência ou reabilitados do INSS é a Lei 8213 de 24/07/91. Conforme
          o artigo 93 da referida lei, toda empresa com 100 (cem) ou mais
          empregados, deve reservar parcela de vagas para contratação de PcD ou
          reabilitados na seguinte proporção:
        </Text>
        <br />

        <Table>
          <tbody>
            <TableRow>
              <TableCell>Até 200 empregados</TableCell>
              <TableCell>2%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>De 201 a 500</TableCell>
              <TableCell>3%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>De 501 a 1000</TableCell>
              <TableCell>4%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mais do que 1000</TableCell>
              <TableCell>5%</TableCell>
            </TableRow>
          </tbody>
        </Table>
        <Text size="xs" style={{ marginTop: '4px' }}>
          Fonte: BRASIL (1991).
        </Text>

        <br />
        <Text>
          No artigo 93, parágrafo 1º, há ainda a orientação de que “A dispensa
          de pessoa com deficiência ou de beneficiário reabilitado da
          Previdência Social ao final de contrato por prazo determinado de mais
          de 90 (noventa) dias e a dispensa imotivada em contrato por prazo
          indeterminado somente poderão ocorrer após a contratação de outro
          trabalhador com deficiência ou beneficiário reabilitado da Previdência
          Social.”
        </Text>
        <Text>
          A não observância da legislação pode acarretar em multas às empresas,
          sendo estas aplicadas pelo Ministério do Trabalho e Emprego (MTE), o
          qual é responsável pela fiscalização da contratação. Destaca-se que o
          MTE também pode aplicar Termo de Compromisso às empresas que se
          encontram na condição referida. Desta forma, é dado um prazo para que
          esta se adeque à legislação. É de interesse do MTE acompanhar as ações
          que as empresas estão realização para acerto de conduta.
        </Text>
      </Main>
    </>
  )
}

Quotas.getLayout = function getLayout(page: ReactElement) {
  return <InformativePageLayout>{page}</InformativePageLayout>
}

export default Quotas
