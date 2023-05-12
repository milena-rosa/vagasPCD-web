import { Role } from '@/@types/user'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Container, Nav, TabTrigger } from './styles'

const MENU_LIST = [
  { key: 'candidate', text: 'Para você', href: '/candidate' },
  { key: 'company', text: 'Para empresas', href: '/company' },
  { key: 'government', text: 'Relatórios INSS/MTE', href: '/government' },
]

const GOVERNMENT_MENU_LIST = MENU_LIST.filter((item) => item.key !== 'company')
const COMPANY_MENU_LIST = MENU_LIST.filter((item) => item.key !== 'government')

export default function NavBar() {
  const { isAuthenticated, user } = useAuth()
  const router = useRouter()

  const [activeItem, setActiveItem] = useState(() =>
    router.pathname.replace(/[^a-zA-Z0-9]/g, ''),
  )

  return (
    <Container>
      {!isAuthenticated ? (
        <Nav>
          {MENU_LIST.map((item) => (
            <TabTrigger
              key={item.key}
              href={item.href}
              color={activeItem === item.key ? 'blue' : 'white'}
              onClick={() => setActiveItem(item.key)}
            >
              {item.text}
            </TabTrigger>
          ))}
        </Nav>
      ) : user?.role.toLowerCase() === Role.COMPANY ? (
        <Nav>
          {COMPANY_MENU_LIST.map((item) => (
            <TabTrigger
              key={item.key}
              href={item.href}
              color={activeItem === item.key ? 'blue' : 'white'}
              onClick={() => setActiveItem(item.key)}
            >
              {item.text}
            </TabTrigger>
          ))}
        </Nav>
      ) : user?.role.toLowerCase() === Role.GOVERNMENT ? (
        <Nav>
          {GOVERNMENT_MENU_LIST.map((item) => (
            <TabTrigger
              key={item.key}
              href={item.href}
              color={activeItem === item.key ? 'blue' : 'white'}
              onClick={() => setActiveItem(item.key)}
            >
              {item.text}
            </TabTrigger>
          ))}
        </Nav>
      ) : (
        <></>
      )}
    </Container>
  )
}
