import { useAuth } from '@/contexts/AuthContext'
import { SignOut } from '@phosphor-icons/react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Button } from '@vagaspcd-ui/react'
import {
  Container,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  HeaderItem,
} from './styles'

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
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild></DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenuContent sideOffset={5}>
            {/* <DropdownMenuItem onClick={handleEditProfileClick}>
              <UserGear size={18} />
              <span>Editar perfil</span>
            </DropdownMenuItem> */}
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => signOut()}>
              <SignOut size={18} />
              <span>Sair</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </Container>
  )
}
