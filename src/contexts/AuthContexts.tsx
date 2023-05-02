import { apiVagasPCD } from '@/libs/axios'
import { PropsWithChildren, createContext } from 'react'

type User = {
  name: string
  email: string
}

type SignInData = {
  email: string
  password: string
}

type AuthContextData = {
  isAuthenticated: boolean
  user: User
  signIn: (data: SignInData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: PropsWithChildren) {
  const isAuthenticated = false

  async function signIn({ email, password }: SignInData) {
    const response = await apiVagasPCD.post('/sessions', {
      email,
      password,
    })
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
