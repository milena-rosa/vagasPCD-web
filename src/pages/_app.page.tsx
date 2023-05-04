import MainLayout from '@/components/layouts/MainLayout'
import { AppProvider } from '@/contexts'
import { globalStyles } from '@/styles/global'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'

globalStyles()

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <>
      <AppProvider>
        <MainLayout>{getLayout(<Component {...pageProps} />)}</MainLayout>
      </AppProvider>
      <ToastContainer />
    </>
  )
}
