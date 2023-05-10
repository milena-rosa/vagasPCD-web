import { useAuth } from '@/contexts/AuthContext'
import { getInitials } from '@/utils/getInitials'
import { SignOut } from '@phosphor-icons/react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import {
  Avatar,
  Container,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  HeaderItem,
} from './styles'

export default function CompanyHeader() {
  const { user, signOut } = useAuth()

  if (!user) return <div />

  return (
    <Container>
      <div>
        <HeaderItem href="/company">Início</HeaderItem>
        <HeaderItem href="/company/jobs/open">Vagas abertas</HeaderItem>
        <HeaderItem href="/company/jobs/history">Histórico</HeaderItem>
      </div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Avatar>{getInitials(user.name)}</Avatar>
        </DropdownMenu.Trigger>
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
