import { styled } from '@vagaspcd-ui/react'

export const PaginationContainer = styled('div', {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
})

export const NavigationButtonsBox = styled('div', {
  alignItems: 'center',
  backgroundColor: '$gray100',
  borderRadius: '$sm',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '$2',
})

export const PaginationButton = styled('button', {
  all: 'unset',

  alignItems: 'center',
  borderRadius: '$sm',
  cursor: 'pointer',
  display: 'flex',
  fontWeight: '$bold',
  height: 30,
  justifyContent: 'center',
  width: 30,

  '&:hover': {
    backgroundColor: '$gray200',
  },

  '&:disabled': {
    backgroundColor: '$gray200',
    cursor: 'not-allowed',
  },

  '& + button': {
    marginLeft: '$1',
  },
})

export const PageNumbersContainer = styled('div', {
  display: 'flex',
})

export const PageNumber = styled('button', {
  all: 'unset',

  alignItems: 'center',
  borderRadius: '$sm',
  color: '$gray900',
  cursor: 'pointer',
  display: 'flex',
  height: 30,
  justifyContent: 'center',
  margin: '0 $1',
  width: 30,

  '&:hover': {
    backgroundColor: '$gray200',
  },

  variants: {
    state: {
      active: { backgroundColor: '$primary', color: '$gray100' },
      default: { backgroundColor: '$gray100', color: '$gray900' },
    },
  },

  defaultVariants: {
    state: 'default',
  },
})
