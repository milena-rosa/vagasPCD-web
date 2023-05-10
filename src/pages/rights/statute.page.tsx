import InformativePageLayout from '@/components/layouts/InformativePageLayout'
import { NextPageWithLayout } from '@/pages/_app.page'
import { Heading, Text } from '@vagaspcd-ui/react'
import Link from 'next/link'
import { ReactElement } from 'react'
import { Header, Main } from './styles'

const Statute: NextPageWithLayout = () => {
  return (
    <>
      <Header>
        <Heading size="sm">Estatuto da Pessoa com Deficiência</Heading>
      </Header>

      <Main>
        <Text>
          O Estatuto da Pessoa com Deficiência ou Lei de Inclusão da Pessoa com
          Deficiência, prevê uma série de direitos ao PcD nas mais diversas
          esferas da vida, como direito à moradia, educação, atendimento
          prioritário, à igualdade e não discriminação, à saúde, ao trabalho,
          entre outros.
        </Text>
        <Text>
          Para leitura completa acesse:{' '}
          <Link
            href="http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm"
            target="_blank"
          >
            http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm
          </Link>
        </Text>
        <br />
      </Main>
    </>
  )
}

Statute.getLayout = function getLayout(page: ReactElement) {
  return <InformativePageLayout>{page}</InformativePageLayout>
}

export default Statute
