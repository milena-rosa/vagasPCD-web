import { ArrowLeft } from '@phosphor-icons/react'
import { Button } from '@vagaspcd-ui/react'
import { useRouter } from 'next/router'
import { PropsWithChildren } from 'react'
import { Container, ContentWrapper, Footer } from './styles'

export default function RightsLayout({ children }: PropsWithChildren) {
  const router = useRouter()

  return (
    <Container>
      <ContentWrapper>
        {children}

        <Footer>
          <Button onClick={() => router.back()}>
            <ArrowLeft />
            Voltar para Página Anterior
          </Button>
        </Footer>
      </ContentWrapper>
    </Container>
  )
}
