import {
  Button,
  Heading,
  Text,
  UnorderedList,
  styled,
} from '@vagaspcd-ui/react'

export const Container = styled('div', {
  display: 'flex',
  minHeight: '100vh',
})

export const MainSection = styled('main', {
  flexDirection: 'column',
  height: '100%',
  margin: '0 auto',
  padding: '$10 0',
  width: '70%',

  [`> ${Heading}`]: {
    color: '$gray900',
    fontWeight: '$medium',
    marginBottom: '$10',
  },
})

export const Content = styled('div', {
  borderLeft: '10px solid $gray400',
  marginTop: '$10',
  padding: '$1 0',

  [`> ${Text}`]: {
    color: '$gray900',
    fontWeight: '$medium',
    marginLeft: '$6',
  },

  [`> ${UnorderedList}`]: {
    color: '$gray900',
    gridGap: '$2',
    marginTop: '$1',
  },
})

export const Footer = styled('div', {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '$10',

  [`${Button}`]: {
    minWidth: 150,
  },
})
