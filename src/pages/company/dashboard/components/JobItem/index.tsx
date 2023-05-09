import { Job } from '@/@types/job'
import { apiVagasPCD } from '@/services/apiVagasPCD'
import { Button } from '@vagaspcd-ui/react'
import Link from 'next/link'
import { useReducer } from 'react'
import { toast } from 'react-toastify'
import { GridArea, JobGrid } from './styles'

interface JobItemProps {
  job: Job
  isHistory?: boolean
}

export default function JobItem({ job, isHistory }: JobItemProps) {
  const rerender = useReducer(() => ({}), {})[1]

  async function handleCloseJob(jobId: string) {
    try {
      const response = await apiVagasPCD.patch(`/jobs/${jobId}/close`)
      if (response.status === 200) {
        toast.success('Vaga fechada com sucesso', { autoClose: 3000 })
      }
      rerender()
    } catch (error) {
      toast.error('Algo deu errado. Por favor, tente novamente.', {
        autoClose: 3000,
      })
    }
  }

  return (
    <JobGrid>
      <GridArea area="title">
        <strong>Vaga:&nbsp;</strong>
        {job.title}
      </GridArea>
      <GridArea area="role">
        <strong>Cargo: </strong>
        {job.role}
      </GridArea>
      <GridArea area="created_at">
        <strong>Aberta em: </strong>
        {new Intl.DateTimeFormat('pt-BR', {
          dateStyle: 'long',
        }).format(new Date(job.created_at))}
      </GridArea>
      <GridArea area="description">
        <strong>Descrição: </strong>
        {job.description}
      </GridArea>
      <GridArea area="salary">
        <strong>Salário: </strong>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(job.salary)}
      </GridArea>
      <GridArea area="perks">
        <strong>Benefícios: </strong>
        {job.perks}
      </GridArea>
      <GridArea area="location">
        <strong>Local: </strong>
        {job.location}
      </GridArea>
      <GridArea area="disability_type">
        <strong>Deficiência: </strong>
        {job.disability_type}
      </GridArea>
      <GridArea area="linkedin">
        <strong>Link: </strong>
        <Link href={job.linkedin} target="_blank">
          {job.linkedin}
        </Link>
      </GridArea>
      {isHistory ? (
        <GridArea area="closed_at">
          <strong>Fechada em: </strong>
          {job.closed_at
            ? new Intl.DateTimeFormat('pt-BR', {
                dateStyle: 'long',
              }).format(new Date(job.closed_at))
            : '-'}
        </GridArea>
      ) : (
        <GridArea area="close_job">
          <Button size="sm" onClick={() => handleCloseJob(job.job_id)}>
            Fechar vaga
          </Button>
        </GridArea>
      )}
      <GridArea area="job_id">{job.job_id}</GridArea>
    </JobGrid>
  )
}
