import { styled } from '@vagaspcd-ui/react'
import Link from 'next/link'

export const Container = styled('header', {
  background: '$white',
  display: 'flex',
  height: '$8',
  marginTop: '$1',
})

export const Nav = styled('nav', {
  background: '$white',
  display: 'flex',
  height: '$8',
  margin: '0 auto',
  width: '70%',
})

export const TabTrigger = styled(Link, {
  alignItems: 'center',
  color: '$black',
  display: 'flex',
  fontFamily: '$default',
  fontSize: '$sm',
  padding: '$2 $4',
  textDecoration: 'none',

  '&:hover': {
    filter: 'opacity(70%)',
  },

  variants: {
    color: {
      white: { backgroundColor: '$white' },
      blue: { backgroundColor: '$primary20' },
    },
  },
})
