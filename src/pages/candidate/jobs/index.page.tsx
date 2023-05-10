import { Job } from '@/@types/job'
import Header from '@/components/Header'
import { apiVagasPCD } from '@/services/apiVagasPCD'
import { ArrowLeft, ArrowRight, MagnifyingGlass } from '@phosphor-icons/react'
import { Button, Heading, Text, TextInput } from '@vagaspcd-ui/react'
import { AxiosError } from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Fragment, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Tooltip } from 'react-tooltip'
import {
  Container,
  Footer,
  JobItem,
  JobItemsBox,
  MainSection,
  SearchBox,
} from './styles'

export default function Jobs() {
  const router = useRouter()
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)

  const [searchJobQuery, setSearchJobQuery] = useState('')

  async function searchJobs(query: string) {
    try {
      setLoading(true)
      const response = await apiVagasPCD.get(`/jobs/search?query=${query}`)
      setJobs(response.data)
    } catch (error) {
      if (error instanceof AxiosError && error?.response?.data?.message) {
        toast.error(error.response.data.message, { autoClose: 3000 })
        return
      }
      toast.error('Algo deu errado. Por favor, tente novamente.', {
        autoClose: 3000,
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const query = router.query.query ? String(router.query.query) : ''
    searchJobs(query)
  }, [router.query.query])

  if (loading) {
    return <Heading>Carregando...</Heading>
  }

  return (
    <>
      <Head>
        <title>vagasPCD | Vagas</title>
      </Head>

      <Header />

      <Container>
        <MainSection>
          <Text>Veja algumas oportunidades profissionais</Text>
          <Heading>Vagas de Emprego</Heading>

          <SearchBox>
            <TextInput
              type="text"
              onChange={(event) => setSearchJobQuery(event.target.value)}
            />
            <Button
              onClick={(event) => {
                event.preventDefault()
                searchJobs(searchJobQuery)
              }}
            >
              <MagnifyingGlass />
              Buscar
            </Button>
          </SearchBox>

          <JobItemsBox>
            {jobs.length === 0 ? (
              <Text>Nenhuma vaga encontrada</Text>
            ) : (
              jobs.map((job) => (
                <Fragment key={job.job_id}>
                  <JobItem
                    href={`/candidate/jobs/${job.job_id}`}
                    data-tooltip-id={job.job_id}
                  >
                    <span>{job.title}</span>
                    <ArrowRight />
                  </JobItem>
                  <Tooltip id={job.job_id} variant="light">
                    {job.title}
                  </Tooltip>
                </Fragment>
              ))
            )}
          </JobItemsBox>
          <Footer>
            <Button onClick={() => router.back()}>
              <ArrowLeft />
              Voltar para o início
            </Button>
          </Footer>
        </MainSection>
      </Container>
    </>
  )
}
