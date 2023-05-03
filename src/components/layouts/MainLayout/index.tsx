import NavBar from '@/components/NavBar'
import { useAuth } from '@/contexts/AuthContext'
import { PropsWithChildren } from 'react'
import { ContentWrapper, MainContainer } from './styles'

export default function MainLayout({ children }: PropsWithChildren) {
  const { isAuthenticated } = useAuth()

  return (
    <MainContainer>
      {!isAuthenticated && <NavBar />}
      <ContentWrapper>{children}</ContentWrapper>
    </MainContainer>
  )
}
