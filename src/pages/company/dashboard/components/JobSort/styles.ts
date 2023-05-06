import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { styled } from '@vagaspcd-ui/react'

export const SortRow = styled('div', {
  alignItems: 'center',
  display: 'flex',
  fontWeight: '$medium',
  marginBottom: '$4',
})

export const SortField = styled('div', {
  marginRight: '$4',
})

export const SortToggle = styled(ToggleGroup.Item, {
  backgroundColor: 'transparent',
  border: '2px solid transparent',
  borderRadius: '$xs',
  color: '$gray100',
  cursor: 'pointer',
  fontSize: '$sm',
  marginRight: '$2',
  padding: '$1 $3',

  '&[data-state=on]': {
    backgroundColor: '$primary40',
    border: '2px solid $primary',
  },

  '&:hover': {
    border: '2px solid $primary',
  },
})
