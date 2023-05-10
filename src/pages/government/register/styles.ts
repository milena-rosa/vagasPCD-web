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
