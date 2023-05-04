import { styled } from '@vagaspcd-ui/react'
import Link from 'next/link'

export const Container = styled('nav', {
  backgroundColor: '$gray800',
  display: 'flex',
  flexDirection: 'column',
  width: '12.5%',
})

export const MenuItem = styled(Link, {
  borderTop: '1px solid $gray200',
  color: '$gray100',
  fontSize: '$sm',
  fontWeight: '$bold',
  lineHeight: '$short',
  padding: '$4',
  textDecoration: 'none',

  '&:last-child': {
    borderBottom: '1px solid $gray200',
  },

  '&:hover': {
    backgroundColor: 'rgb(89, 101, 115, 0.2)',
  },
})
