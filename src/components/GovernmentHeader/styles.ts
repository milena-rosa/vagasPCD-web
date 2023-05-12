import { Button, styled } from '@vagaspcd-ui/react'
import Link from 'next/link'

export const Container = styled('div', {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 $2',
  width: '100%',

  [`${Button}`]: {
    backgroundColor: '$black',
  },
})

export const HeaderItem = styled(Link, {
  color: '$gray100',
  fontWeight: '$bold',
  textDecoration: 'none',
  padding: '$6',

  '&:hover': {
    filter: 'opacity(80%)',
  },
})
