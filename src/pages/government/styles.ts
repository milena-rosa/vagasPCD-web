import { Heading, Text, styled } from '@vagaspcd-ui/react'

export const HeroSection = styled('section', {
  alignItems: 'center',
  backgroundColor: '$primary',
  display: 'flex',
  flexDirection: 'column',
  padding: '$16 $12',
})

export const HeroSectionTitle = styled('div', {
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  width: '80%',

  p: {
    marginBottom: '$2',
    maxWidth: '320px',
  },
})

export const ActionsBox = styled('div', {
  display: 'flex',
  marginTop: '$8',

  button: {
    border: '$white solid 1px',

    '&:first-child': {
      marginRight: '$4',
    },
  },
})

export const MainSection = styled('section', {
  backgroundColor: '$black',
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  padding: '$6 $12',
})

export const GoalsTextBox = styled('div', {
  borderBottom: '$gray200 solid 1px',
  padding: '$12 0',
  width: '80%',

  [`${Heading}`]: {
    marginBottom: '$8',
    color: '$black',
    textAlign: 'center',
  },

  [`${Text}`]: {
    color: '$black',
  },

  li: {
    color: '$black',
  },
})

export const BlurbSection = styled('section', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '$16 0',
  width: '80%',

  [`${Heading}`]: {
    color: '$black',
    maxWidth: 400,
  },
})

export const RightsLinkBox = styled('div', {
  alignItems: 'center',
  display: 'flex',
  maxWidth: 300,

  a: {
    color: '$primary',

    '&:hover': {
      filter: 'opacity(60%)',
    },
  },

  [`${Text}`]: {
    color: '$black',
    marginLeft: '$4',
  },
})
