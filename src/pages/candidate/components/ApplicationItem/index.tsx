import { Application } from '@/@types/application'
import { toPascalCase } from '@/utils/toPascalCase'
import Link from 'next/link'
import { Tooltip } from 'react-tooltip'
import { GridArea, JobGrid } from './styles'

interface ApplicationItemProps {
  application: Application
}

export default function ApplicationItem({ application }: ApplicationItemProps) {
  return (
    <JobGrid>
      <GridArea area="job_title" data-tooltip-id={application.application_id}>
        <strong>Vaga:&nbsp;</strong>
        {application.job_title}
      </GridArea>
      <Tooltip id={application.application_id}>{application.job_title}</Tooltip>

      <GridArea area="job_created_at">
        <strong>Aberta em: </strong>
        {new Intl.DateTimeFormat('pt-BR', {
          dateStyle: 'long',
        }).format(new Date(application.job_created_at))}
      </GridArea>
      <GridArea area="applied_at">
        <strong>Enviou currículo em: </strong>
        {new Intl.DateTimeFormat('pt-BR', {
          dateStyle: 'long',
        }).format(new Date(application.applied_at))}
      </GridArea>

      <GridArea area="job_role">
        <strong>Cargo: </strong>
        {application.job_role}
      </GridArea>
      <GridArea area="job_linkedin">
        <Link href={application.job_linkedin} target="_blank">
          LinkedIn da vaga
        </Link>
      </GridArea>

      <GridArea area="job_description">
        <strong>Descrição: </strong>
        {application.job_description}
      </GridArea>

      <GridArea area="company">
        <strong>Empresa: </strong>
        {toPascalCase(application.company_name)}
      </GridArea>
      <GridArea area="city">
        <strong>Cidade: </strong>
        {toPascalCase(application.company_city)} / {application.company_state}
      </GridArea>

      <GridArea area="salary">
        <strong>Salário: </strong>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(application.salary)}
      </GridArea>

      <GridArea area="perks">
        <strong>Benefícios: </strong>
        {application.perks}
      </GridArea>

      <GridArea area="job_location">
        <strong>Local: </strong>
        {application.job_location}
      </GridArea>
      <GridArea area="disability_type">
        <strong>Deficiência: </strong>
        {application.disability_type}
      </GridArea>

      <GridArea area="company_linkedin">
        <Link href={application.company_linkedin} target="_blank">
          LinkedIn da empresa
        </Link>
      </GridArea>

      <GridArea area="job_id">{application.job_id}</GridArea>
    </JobGrid>
  )
}
