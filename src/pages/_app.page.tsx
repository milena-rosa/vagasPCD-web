import MainLayout from '@/components/layouts/MainLayout'
import { AppProvider } from '@/contexts'
import { globalStyles } from '@/styles/global'
import VLibras from '@djpfs/react-vlibras'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-tooltip/dist/react-tooltip.css'

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
      <VLibras />
      <AppProvider>
        <MainLayout>{getLayout(<Component {...pageProps} />)}</MainLayout>
      </AppProvider>
      <ToastContainer />
    </>
  )
}
