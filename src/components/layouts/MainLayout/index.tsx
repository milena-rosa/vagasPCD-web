import NavBar from '@/components/NavBar'
import { PropsWithChildren } from 'react'
import { ContentWrapper, MainContainer } from './styles'

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <MainContainer>
      <NavBar />

      <ContentWrapper>{children}</ContentWrapper>
    </MainContainer>
  )
}
