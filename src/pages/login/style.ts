import { Box, Button, Heading, Text, styled } from '@vagaspcd-ui/react'

export const MainPage = styled('main', {
  backgroundColor: '$black',
  height: '100%',
  width: '100wh',
})

export const Container = styled('div', {
  margin: '0 auto',
  padding: '$20 0',
  width: '40%',

  [`> ${Heading}`]: {
    fontWeight: '$medium',
    marginBottom: '$2',
  },

  [`> ${Text}`]: {
    maxWidth: '70%',
  },
})

export const Form = styled(Box, {
  alignItems: 'center',
  backgroundColor: '$black',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  marginTop: '$6',
})

export const ButtonBox = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '$2',
  width: '100%',

  [`${Button}`]: {
    minWidth: 150,
  },
})

export const FormError = styled(Text, {
  color: '#f75a68',
  width: '100%',
})

export const Footer = styled('div', {
  fontWeight: '$bold',
  marginTop: '$8',
  textAlign: 'center',

  [`${Button}`]: {
    minWidth: 150,
  },
})
