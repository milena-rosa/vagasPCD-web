import { CaretDoubleLeft, CaretDoubleRight } from '@phosphor-icons/react'
import { useState } from 'react'
import { navData } from './navData'
import { Container, LinkText, MenuButton, MenuItem } from './styles'

export default function DashboardSideNav() {
  const [open, setOpen] = useState(true)

  function toggleOpen() {
    setOpen(!open)
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
      {navData.map((item) => (
        <MenuItem key={item.id} href={item.link}>
          {item.icon}
          {open && <LinkText>{item.text}</LinkText>}
        </MenuItem>
      ))}
    </Container>
  )
}
