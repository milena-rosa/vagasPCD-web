import { PropsWithChildren } from 'react'

import { AuthProvider } from './AuthContext'

export function AppProvider({ children }: PropsWithChildren) {
  return <AuthProvider>{children}</AuthProvider>
}
