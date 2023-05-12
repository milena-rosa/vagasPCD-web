import { useAuth } from '@/contexts/AuthContext'
import { SignOut } from '@phosphor-icons/react'
import { Button } from '@vagaspcd-ui/react'
import { Container, HeaderItem } from './styles'

export default function GovernmentHeader() {
  const { user, signOut } = useAuth()

  if (!user) return <div />

  return (
    <Container>
      <div>
        <HeaderItem href="/government">Início</HeaderItem>
        <HeaderItem href="/government/reports">Relatórios</HeaderItem>
      </div>
      <div>
        <Button size="sm" onClick={() => signOut()}>
          <SignOut />
          Sair
        </Button>
      </div>
    </Container>
  )
}
