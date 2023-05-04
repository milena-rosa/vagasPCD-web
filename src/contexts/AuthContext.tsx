/* eslint-disable no-unused-vars */
import { apiVagasPCD } from '@/services/apiVagasPCD'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { destroyCookie, parseCookies, setCookie } from 'nookies'
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { toast } from 'react-toastify'

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

const PAGE_REDIRECT = {
  [Role.CANDIDATE]: { signIn: '/candidate/dashboard', signOut: '/candidate ' },
  [Role.COMPANY]: { signIn: '/company/dashboard', signOut: '/company' },
  [Role.GOVERNMENT]: {
    signIn: '/government/dashboard',
    signOut: '/government',
  },
}

const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()
  const isAuthenticated = !!user

  useEffect(() => {
    const { 'vagasPCD.token': token, 'vagasPCD.role': role } = parseCookies()

    if (token) {
      apiVagasPCD.get(`/${role}/recover?token=${token}`).then((response) => {
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
      setCookie(undefined, 'vagasPCD.role', role, {
        maxAge: 60 * 60 * 1, // 1 hour
      })

      apiVagasPCD.defaults.headers.Authorization = `Bearer ${token}`

      setUser(user)

      router.push(PAGE_REDIRECT[role as Role].signIn)
    } catch (error) {
      if (error instanceof AxiosError && error?.response?.data?.message) {
        if (error.status === 404) {
          toast.error('Verifique as informações e tente novamente.', {
            autoClose: 3000,
          })
        }
        toast.error(error.response.data.message, { autoClose: 3000 })
        return
      }
      console.error(error)
    }
  }

  async function signOut() {
    const { 'vagasPCD.role': role } = parseCookies()

    destroyCookie(undefined, 'vagasPCD.token')
    destroyCookie(undefined, 'vagasPCD.role')
    setUser(null)

    router.push(PAGE_REDIRECT[role as Role].signOut)
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
