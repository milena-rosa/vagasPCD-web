import {
  ListItem as DSListItem,
  Heading,
  Text,
  styled,
} from '@vagaspcd-ui/react'

export const Container = styled('div', {
  backgroundColor: '$black',
  display: 'flex',
  minHeight: '100vh',
})

export const MainSection = styled('main', {
  alignItems: 'center',
  color: '$white',
  flexDirection: 'column',
  height: '100%',
  margin: '0 auto',
  padding: '$10',
  maxWidth: '80%',

  [`> ${Heading}`]: {
    fontWeight: '$medium',
    marginBottom: '$1',
  },

  [`> ${Text}`]: {
    maxWidth: '70%',
  },
})

// export const Container = styled('main', {
//   margin: '$10 auto',
//   width: '80%',

//   [`> ${Heading}`]: {
//     color: '$primary',
//     marginBottom: '$4',
//   },
// })

export const Box = styled('a', {
  backgroundColor: '$gray400',
  color: '$white',
  display: 'flex',
  justifyContent: 'space-between',
  margin: '$4 0',
  padding: '$4',
  textDecoration: 'none',

  '&:nth-child(even)': {
    background: '$primary',
  },

  '&:hover': {
    filter: 'opacity(80%)',
  },
})

export const Footer = styled('footer', {
  margin: '$10 0',
})

export const TitleContainer = styled('div', {
  borderLeft: '$primary solid 8px',
  padding: '$2 $4',
  marginLeft: '-$6',
})

export const Main = styled('main', {
  margin: '$8 0',

  [`> ${Heading}`]: {
    margin: '$4 0 $2',

    '&:first-child': {
      marginTop: '0',
    },
  },

  a: {
    color: '$white',

    '&:hover': {
      filter: 'opacity(80%)',
    },
  },
})

export const ListItem = styled(DSListItem, {
  p: {
    marginBottom: '$1',
  },
})
