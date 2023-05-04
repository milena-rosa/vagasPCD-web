import { styled } from '@vagaspcd-ui/react'

export const Container = styled('div', {
  backgroundColor: '$gray800',
  display: 'flex',
  justifyContent: 'center',
})

export const Content = styled('header', {
  alignItems: 'center',
  backgroundColor: 'rgb(89, 101, 115, 0.2)',
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '$2 $6',
  width: '75%',

  '> button': {
    backgroundColor: '$black',
    boxShadow: '4px 4px 13px 2px rgba(145, 145, 145, 0.11)',
    minWidth: 120,

    '&:last-child': {
      marginLeft: '$3',
    },
  },
})
