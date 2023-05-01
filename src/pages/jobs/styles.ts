import { styled } from '@vagaspcd-ui/react'
import Link from 'next/link'

export const Container = styled('main', {
  backgroundColor: '$gray900',
  padding: '$10',
})

export const SearchBox = styled('div', {
  display: 'flex',
  margin: '$6 0',
  width: '80%',

  '> button': {
    backgroundColor: '$black',
    marginLeft: '$4',
  },
})

export const JobCategoriesBox = styled('div', {
  display: 'grid',
  columnGap: '$4',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  rowGap: '$4',
  marginRight: '$4',
})

export const JobCategory = styled(Link, {
  alignItems: 'center',
  backgroundColor: '$white !important',
  border: 'none',
  color: '$gray800 !important',
  cursor: 'pointer',
  display: 'flex',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',
  height: '$12',
  justifyContent: 'space-between',
  padding: '0 $4',
  textAlign: 'start',
})

export const Footer = styled('footer', {
  margin: '$8 0',
})
