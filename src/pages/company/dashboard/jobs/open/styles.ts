import { styled } from '@vagaspcd-ui/react'

export const Table = styled('table', {
  backgroundColor: '$white',
  color: '$gray900',
  fontFamily: '$code',
  fontSize: '$sm',
  margin: '$6 0',

  a: {
    color: '$black',
  },
})

export const TableHeaderCell = styled('th', {
  borderBottom: '1px solid $gray200',
  padding: '$2',
  textAlign: 'start',
})

export const TableCell = styled('td', {
  padding: '$2',
})

export const TableRow = styled('tr', {
  backgroundColor: 'red !important',
  '&:hover': {
    backgroundColor: 'lime',
    cursor: 'pointer',
  },
})
