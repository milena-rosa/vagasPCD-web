import { Role } from '@/@types/user'
import { useAuth } from '@/contexts/AuthContext'
import { SignIn, SignOut, UserCirclePlus } from '@phosphor-icons/react'
import { Button } from '@vagaspcd-ui/react'
import { useRouter } from 'next/router'
import CandidateHeader from '../CandidateHeader'
import { Container, Content } from './styles'

interface HeaderProps {
  authenticateRoute?: string
  registerRoute?: string
}

export default function Header({
  authenticateRoute = `/login?role=${Role.COMPANY}`,
  registerRoute = '/company/register',
}: HeaderProps) {
  const router = useRouter()
  const { isAuthenticated, signOut, user } = useAuth()

  return (
    <Container>
      <Content>
        {!isAuthenticated ? (
          <>
            <Button
              variant="primary"
              size="sm"
              onClick={() => router.push(registerRoute)}
            >
              <UserCirclePlus />
              Cadastre-se
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => router.push(authenticateRoute)}
            >
              <SignIn />
              Faça seu Login
            </Button>
          </>
        ) : user?.role === Role.CANDIDATE ? (
          <CandidateHeader />
        ) : (
          <Button size="sm" onClick={() => signOut()}>
            <SignOut />
            Sair
          </Button>
        )}
      </Content>
    </Container>
  )
}
