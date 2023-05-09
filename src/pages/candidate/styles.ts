import { Button, Heading, ListItem, Text, styled } from '@vagaspcd-ui/react'

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

export const SearchBox = styled('form', {
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

// export const MainSection = styled('main', {
//   alignItems: 'center',
//   color: '$white',
//   flexDirection: 'column',
//   height: '100%',
//   margin: '0 auto',
//   padding: '$10',
//   width: '100%',

//   [`> ${Heading}`]: {
//     fontWeight: '$medium',
//     marginBottom: '$1',
//   },

//   [`> ${Text}`]: {
//     maxWidth: '70%',
//   },
// })

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

export const Container = styled('div', {
  backgroundColor: '$black',
  display: 'flex',
  minHeight: '100vh',
})
