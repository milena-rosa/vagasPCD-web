import { styled } from '@vagaspcd-ui/react'
import Link from 'next/link'

export const Container = styled('nav', {
  backgroundColor: '$primary40',
  minHeight: '100vh',
  paddingTop: 28,

  variants: {
    state: {
      open: { minWidth: 220 },
      closed: { maxWidth: 60 },
    },
  },
  defaultVariants: {
    state: 'open',
  },
})

export const MenuItem = styled(Link, {
  alignItems: 'center',
  color: '$gray100',
  cursor: 'pointer',
  display: 'flex',
  fontSize: '$sm',
  fontWeight: '$medium',
  padding: '$3 $5',
  textDecoration: 'none',

  '&:hover': {
    backgroundColor: '#244f7d1c',
  },
})

export const LinkText = styled('span', {
  paddingLeft: '$4',
})

export const MenuButton = styled('button', {
  alignItems: 'center',
  alignSelf: 'flex-start',
  backgroundColor: 'transparent',
  border: 'none',
  color: '$white',
  cursor: 'pointer',
  display: 'flex',
  height: '$10',
  justifySelf: 'flex-end',
  margin: '$5',
  width: '$10',

  '&:hover': {
    filter: 'opacity(80%)',
  },
})
