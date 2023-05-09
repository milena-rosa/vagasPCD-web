import { Heading, Text, styled } from '@vagaspcd-ui/react'
import Link from 'next/link'

export const Container = styled('div', {
  backgroundColor: '$gray900',
  minHeight: '100vh',
})

export const MainSection = styled('div', {
  color: '$white',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  margin: '0 auto',
  padding: '$10',
  width: '80%',

  [`> ${Heading}`]: {
    fontWeight: '$medium',
    marginBottom: '$1',
  },

  [`> ${Text}`]: {
    maxWidth: '70%',
  },
})

export const SearchBox = styled('form', {
  display: 'flex',
  margin: '$6 0',
  width: '100%',

  '> button': {
    backgroundColor: '$black',
    marginLeft: '$4',
  },
})

export const JobItemsBox = styled('div', {
  display: 'grid',
  columnGap: '$4',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(6, 1fr)',
  rowGap: '$4',
})

export const JobItem = styled(Link, {
  alignItems: 'center',
  backgroundColor: '$white',
  borderRadius: '$xs',
  color: '$gray800',
  display: 'flex',
  fontSize: '$sm',
  fontWeight: '$medium',
  height: '$12',
  justifyContent: 'space-between',
  overflow: 'hidden',
  padding: '0 $3',

  span: {
    maxWidth: '20ch',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },

  '&:hover': {
    filter: 'opacity(80%)',
  },
})

export const Footer = styled('footer', {
  margin: '$8 0',
})
