/* eslint-disable no-unused-vars */
import { apiVagasPCD } from '@/services/apiVagasPCD'
import { useRouter } from 'next/router'
import { destroyCookie, parseCookies, setCookie } from 'nookies'
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

export enum Role {
  CANDIDATE = 'candidates',
  COMPANY = 'companies',
  GOVERNMENT = 'governmentUsers',
}

export type Candidate = {
  name: string
  email: string
  zipCode: string
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  state: string
  phone: string
  linkedin: string
  profissionalExperience: string
  educationalBackground: string
  skills: string
  role: Role.CANDIDATE
}

export type Company = {
  email: string
  cnpj: string
  name: string
  phone: string
  street: string
  zipCode: string
  number: string
  complement: string
  city: string
  state: string
  role: Role.COMPANY
}

export type GovernmentUser = {
  email: string
  role: Role.GOVERNMENT
}

type User = Candidate | Company | GovernmentUser

type SignInData = {
  role: string
  email: string
  password: string
}

type AuthContextData = {
  isAuthenticated: boolean
  user: User | null
  signIn: (data: SignInData) => Promise<void>
  signOut: () => void
}

const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()
  const isAuthenticated = !!user

  useEffect(() => {
    const { 'vagasPCD.token': token } = parseCookies()

    if (token) {
      apiVagasPCD.get(`/candidates/recover?token=${token}`).then((response) => {
        setUser(response.data.candidate)
      })
    }
  }, [])

  async function signIn({ role, email, password }: SignInData) {
    try {
      const response = await apiVagasPCD.post<{ token: string; user: User }>(
        `/${role}/sessions`,
        {
          email,
          password,
        },
      )

      const { token, user } = response.data

      setCookie(undefined, 'vagasPCD.token', token, {
        maxAge: 60 * 60 * 1, // 1 hour
      })

      apiVagasPCD.defaults.headers.Authorization = `Bearer ${token}`

      setUser(user)

      router.push(`/${user.role.toLowerCase()}`)
    } catch (error) {
      console.error(error)
    }
  }

  async function signOut() {
    destroyCookie(undefined, 'vagasPCD.token')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signOut, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextData {
  return useContext(AuthContext)
}
