import { Button, Heading, ListItem, Text, styled } from '@vagaspcd-ui/react'

export const HeaderContainer = styled('div', {
  backgroundColor: '$gray800',
  display: 'flex',
  justifyContent: 'center',
})

export const Header = styled('header', {
  alignItems: 'center',
  backgroundColor: '$gray400',
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '$2 $4',
  width: '75%',

  [`> ${Button}`]: {
    backgroundColor: '$black',
    border: '1px solid $white',

    '&:first-child': {
      backgroundColor: 'transparent',
      marginRight: '$3',
    },
  },
})

export const SearchSection = styled('section', {
  alignItems: 'center',
  backgroundColor: '$primary',
  display: 'flex',
  flexDirection: 'column',
  padding: '$16 $12',
})

export const SearchSectionTitle = styled('div', {
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  width: '80%',

  [`>${Text}`]: {
    marginBottom: '$2',
    maxWidth: '320px',
  },
})

export const SearchBox = styled('div', {
  display: 'flex',
  margin: '$6 0',
  width: '80%',

  [`> ${Button}`]: {
    backgroundColor: '$black',
    marginLeft: '$4',
  },
})

export const JobTypesBox = styled('div', {
  display: 'flex',

  [`> ${Button}`]: {
    border: '$white solid 1px',

    '&:first-child': {
      marginRight: '$4',
    },
  },
})

export const MainSection = styled('section', {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  padding: '$6 $12',
})

export const GoalsTextBox = styled('div', {
  borderBottom: '$gray200 solid 1px',
  padding: '$12 0',
  width: '80%',

  [`> ${Heading}`]: {
    marginBottom: '$8',
    color: '$black',
    textAlign: 'center',
  },

  [`> ${Text}`]: {
    color: '$black',
  },

  [`${ListItem}`]: {
    color: '$black',
  },
})

export const BlurbSection = styled('section', {
  display: 'flex',
  justifyContent: 'space-around',
  padding: '$16 0',
  width: '90%',

  [`${Heading}`]: {
    color: '$black',
    maxWidth: 300,
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
