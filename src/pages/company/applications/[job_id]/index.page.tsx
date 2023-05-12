import { Candidate } from '@/@types/candidate'
import { Role } from '@/@types/user'
import Header from '@/components/Header'
import { apiVagasPCD } from '@/services/apiVagasPCD'
import { Heading, Text } from '@vagaspcd-ui/react'
import { AxiosError } from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import CandidatesList from '../../components/CandidatesList'
import { Container, MainSection } from './styles'

type Report = {
  job_id: string
  job_title: string
  job_role: string
  job_description: string
  candidates: Candidate[]
}

export default function JobApplications() {
  const router = useRouter()

  const [data, setData] = useState({} as Report)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!router.query.job_id) return
    const loadJobAndCandidates = async () => {
      setIsLoading(true)
      try {
        const response = await apiVagasPCD.get(
          `/applications/${router.query.job_id}`,
        )
        setData(response.data)
      } catch (error) {
        if (error instanceof AxiosError && error?.response?.data?.message) {
          if (error.response.status === 401) {
            await router.push(`/login?role=${Role.COMPANY}`)
            return
          }
          toast.error(error.response.data.message, { autoClose: 3000 })
          return
        }
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
    loadJobAndCandidates()
  }, [router, router.query.job_id])

  if (isLoading) return <Heading>Carregando...</Heading>

  return (
    <>
      <Head>
        <title>vagasPCD | Candidatos</title>
      </Head>

      <Header />

      <Container>
        <MainSection>
          <Heading size="md">Candidatos</Heading>

          {data.candidates.length ? (
            <CandidatesList data={data.candidates} />
          ) : (
            <Text>Nenhum currículo enviado</Text>
          )}
        </MainSection>
      </Container>
    </>
  )
}
