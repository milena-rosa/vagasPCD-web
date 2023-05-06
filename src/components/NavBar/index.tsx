import { useRouter } from 'next/router'
import { useState } from 'react'
import { Container, Nav, TabTrigger } from './styles'

const MENU_LIST = [
  { key: 'candidate', text: 'Para você', href: '/candidate' },
  { key: 'company', text: 'Para empresas', href: '/company' },
  { key: 'government', text: 'Relatórios INSS/MTE', href: '/government' },
]

export default function NavBar() {
  const router = useRouter()
  const [activeItem, setActiveItem] = useState(() =>
    router.pathname.replace(/[^a-zA-Z0-9]/g, ''),
  )

  return (
    <Container>
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
    </Container>
  )
}