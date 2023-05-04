import { Role, useAuth } from '@/contexts/AuthContext'
import { SignIn, SignOut, UserCirclePlus } from '@phosphor-icons/react'
import { Button } from '@vagaspcd-ui/react'
import { useRouter } from 'next/router'
import { Container, Content } from './styles'

interface HeaderProps {
  authenticateRoute?: string
  registerRoute?: string
}

export default function Header({
  authenticateRoute = `/login?role=${Role.CANDIDATE}`,
  registerRoute = '/candidate/register',
}: HeaderProps) {
  const router = useRouter()
  const { isAuthenticated, signOut } = useAuth()

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
