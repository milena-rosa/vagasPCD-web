import { PropsWithChildren } from 'react'
import { DefaultContainer } from './styles'

export default function DefaultLayout({ children }: PropsWithChildren) {
  return <DefaultContainer>{children}</DefaultContainer>
}
