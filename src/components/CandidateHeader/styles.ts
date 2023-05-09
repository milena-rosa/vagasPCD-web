import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { keyframes, styled } from '@vagaspcd-ui/react'
import Link from 'next/link'

export const Container = styled('div', {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 $2',
  width: '100%',
})

export const HeaderItem = styled(Link, {
  color: '$gray100',
  fontWeight: '$bold',
  textDecoration: 'none',
  padding: '$6',

  '&:hover': {
    filter: 'opacity(80%)',
  },
})

export const Avatar = styled('button', {
  all: 'unset',

  alignItems: 'center',
  backgroundColor: '$gray900',
  borderRadius: '$full',
  color: '$gray100',
  cursor: 'pointer',
  display: 'flex',
  fontWeight: '$medium',
  height: 40,
  justifyContent: 'center',
  width: 40,

  '&:hover': {
    filter: 'opacity(80%)',
  },
})

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

export const DropdownMenuContent = styled(DropdownMenu.Content, {
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  backgroundColor: '$white',
  borderRadius: '$xs',
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  minWidth: 220,
  padding: '$1',
  willChange: 'transform, opacity',

  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
})

export const DropdownMenuItem = styled(DropdownMenu.Item, {
  all: 'unset',

  alignItems: 'center',
  borderRadius: '$xs',
  color: '$gray900',
  cursor: 'pointer',
  display: 'flex',
  fontSize: '$sm',
  height: '$8',
  justifyContent: 'flex-start',
  padding: '0 $1',
  position: 'relative',
  paddingLeft: 24,
  userSelect: 'none',

  span: {
    paddingLeft: '$2',
  },

  '&[data-disabled]': {
    color: '$gray400',
    pointerEvents: 'none',
  },

  '&[data-highlighted]': {
    backgroundColor: '$primary80',
    color: '$gray100',
  },
})

export const DropdownMenuSeparator = styled(DropdownMenu.Separator, {
  height: 1,
  backgroundColor: '$gray200',
  margin: '$1',
})
