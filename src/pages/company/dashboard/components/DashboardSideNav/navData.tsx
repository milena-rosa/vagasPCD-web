import {
  Archive,
  ListBullets,
  PlusCircle,
  UserList,
} from '@phosphor-icons/react'
import { ReactElement } from 'react'

type NavDataProps = {
  id: number
  icon: ReactElement
  text: string
  link: string
  selected: boolean
}

export const navData: NavDataProps[] = [
  {
    id: 1,
    icon: <PlusCircle color="white" size={16} />,
    text: 'Cadastrar vaga',
    link: '/company/dashboard/jobs/register',
    selected: false,
  },
  {
    id: 2,
    icon: <ListBullets color="white" size={16} />,
    text: 'Vagas abertas',
    link: '/company/dashboard/jobs/open',
    selected: false,
  },
  {
    id: 3,
    icon: <Archive color="white" size={16} />,
    text: 'Histórico de vagas',
    link: '/company/dashboard/jobs/history',
    selected: false,
  },
  {
    id: 4,
    icon: <UserList color="white" size={16} />,
    text: 'Candidaturas',
    link: '/company/dashboard/jobs/applications',
    selected: false,
  },
]
