import { Box, Heading, Text, styled } from '@vagaspcd-ui/react'

export const MainPage = styled('main', {
  backgroundColor: '$black',
  height: '100%',
  width: '100wh',
})

export const Container = styled('div', {
  margin: '0 auto',
  maxWidth: '70%',
  padding: '$20 0',

  [`> ${Heading}`]: {
    fontWeight: '$medium',
    marginBottom: '$2',
  },

  [`> ${Text}`]: {
    maxWidth: '70%',
  },
})

export const Form = styled(Box, {
  backgroundColor: '$black',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  marginTop: '$6',

  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
  },
})

export const ButtonBox = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '$4',
})

export const FormError = styled(Text, {
  color: '#f75a68',
})

export const Row = styled('div', {
  alignItems: 'flex-end',
  display: 'inline-flex',

  '> label': {
    marginRight: '$8',
  },
})

export const SearchButton = styled('button', {
  all: 'unset',

  alignItems: 'center',
  backgroundColor: '$primary80',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  color: '$gray100',
  cursor: 'pointer',
  display: 'flex',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',
  gap: '$2',
  height: 44,
  justifyContent: 'center',
  marginLeft: '-$4',
  padding: '0 $4',
  width: 44,

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray400',
  },

  '&:not(:disabled):hover': {
    filter: 'opacity(80%)',
  },
})
