import { GetServerSideProps } from 'next'
import { Container } from './styles'

export default function Home() {
  // const { tabs } = useTabsContent()

  return (
    <Container>
      {/* <Tabs tabsList={tabs} defaultValue="candidate" /> */}
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
    redirect: {
      destination: '/',
      permanent: true,
    },
  }
}
