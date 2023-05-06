import Link from 'next/link'
import { Job } from '../JobList'
import { GridArea, JobGrid } from './styles'

interface JobItemProps {
  job: Job
  isHistory?: boolean
}

export default function JobItem({ job, isHistory }: JobItemProps) {
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
      {isHistory && (
        <GridArea area="closed_at">
          <strong>Aberta em: </strong>
          {new Intl.DateTimeFormat('pt-BR', {
            dateStyle: 'long',
          }).format(new Date(job.closed_at))}
        </GridArea>
      )}
      <GridArea area="job_id">{job.job_id}</GridArea>
    </JobGrid>
  )
}
