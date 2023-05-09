import { useAuth } from '@/contexts/AuthContext'
import { getInitials } from '@/utils/getInitials'
import { SignOut, UserGear } from '@phosphor-icons/react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { useRouter } from 'next/router'
import { MouseEvent } from 'react'
import {
  Avatar,
  Container,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  HeaderItem,
} from './styles'

export default function CandidateHeader() {
  const router = useRouter()
  const { user, signOut } = useAuth()

  async function handleEditProfileClick(event: MouseEvent<HTMLDivElement>) {
    event.preventDefault()
    router.push('/candidate/edit')
  }

  if (!user) return <div />

  return (
    <Container>
      <div>
        <HeaderItem href="/candidate">Início</HeaderItem>
        <HeaderItem href="/candidate/applications">Minhas vagas</HeaderItem>
      </div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Avatar>{getInitials(user.name)}</Avatar>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenuContent sideOffset={5}>
            <DropdownMenuItem onClick={handleEditProfileClick}>
              <UserGear size={18} />
              <span>Editar perfil</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => signOut()}>
              <SignOut size={18} />
              <span>Sair</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
      {/* <Content> */}
      {/* <Button size="sm" onClick={() => signOut()}>
          <SignOut />
          Sair
        </Button> */}
      {/* </Content> */}
    </Container>
  )
}
