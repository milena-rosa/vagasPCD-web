import {
  Archive,
  CaretDoubleLeft,
  CaretDoubleRight,
  ListBullets,
  PlusCircle,
  UserList,
} from '@phosphor-icons/react'
import { useState } from 'react'
import { Container, LinkText, MenuButton, MenuItem } from './styles'

interface DashboardSideNavProps {
  currentPageId: number
}

export default function DashboardSideNav({
  currentPageId,
}: DashboardSideNavProps) {
  const [open, setOpen] = useState(true)
  const [menuData, setMenuData] = useState([
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
  ])

  function toggleOpen() {
    setOpen(!open)
  }

  function handleSelectItem(id: number) {
    const newMenuData = menuData.map((item) => ({
      ...item,
      selected: item.id === id,
    }))

    setMenuData(newMenuData)
  }

  return (
    <Container state={open ? 'open' : 'closed'}>
      <MenuButton onClick={toggleOpen}>
        {open ? (
          <CaretDoubleLeft color="white" />
        ) : (
          <CaretDoubleRight color="white" />
        )}
      </MenuButton>
      {menuData.map((item) => (
        <MenuItem
          key={item.id}
          href={item.link}
          state={item.id === currentPageId ? 'selected' : 'default'}
          onClick={() => handleSelectItem(item.id)}
        >
          {item.icon}
          {open && <LinkText>{item.text}</LinkText>}
        </MenuItem>
      ))}
    </Container>
  )
}
