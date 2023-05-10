import { Role } from '@/@types/user'
import { useAuth } from '@/contexts/AuthContext'
import { SignIn, SignOut, UserCirclePlus } from '@phosphor-icons/react'
import { Button } from '@vagaspcd-ui/react'
import { useRouter } from 'next/router'
import CandidateHeader from '../CandidateHeader'
import CompanyHeader from '../CompanyHeader'
import GovernmentHeader from '../GovernmentHeader'
import { Container, Content } from './styles'

interface HeaderProps {
  authenticateRoute?: string
  registerRoute?: string
}

// const HEADER_BY_ROLE = {
//   [Role.CANDIDATE]: <CandidateHeader />,
//   [Role.COMPANY]: <CompanyHeader />,
//   [Role.GOVERNMENT]: <GovernmentHeader />,
// }

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
        ) : user?.role.toLowerCase() === Role.CANDIDATE ? (
          <CandidateHeader />
        ) : user?.role.toLowerCase() === Role.COMPANY ? (
          <CompanyHeader />
        ) : user?.role.toLowerCase() === Role.GOVERNMENT ? (
          <GovernmentHeader />
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
