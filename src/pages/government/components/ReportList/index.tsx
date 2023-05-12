import { Report } from '@/@types/report'
import { Heading } from '@vagaspcd-ui/react'
import ReportItem from '../ReportItem'
import { GridArea, TitleGrid } from './styles'

interface ReportListProps {
  data: Report[]
}

export default function ReportList({ data }: ReportListProps) {
  if (!data) return <Heading>Nenhuma empresa cadastrada</Heading>

  return (
    <>
      <TitleGrid>
        <GridArea area="company_name">Nome da Empresa</GridArea>
        <GridArea area="company_cnpj">CNPJ</GridArea>
        <GridArea area="company_email">E-mail</GridArea>
        <GridArea area="company_phone">Telefone</GridArea>
        <GridArea area="company_street">Rua</GridArea>
        <GridArea area="company_number">Número</GridArea>
        <GridArea area="company_complement">Complemento</GridArea>
        <GridArea area="company_city">Cidade</GridArea>
        <GridArea area="company_state">UF</GridArea>
        <GridArea area="company_zip_code">CEP</GridArea>
        <GridArea area="n_jobs">Vagas abertas</GridArea>
        <GridArea area="n_applications">CVs recebidos</GridArea>
      </TitleGrid>
      <div>
        {data.map((item) => (
          <ReportItem key={item.company_id} reportItem={item} />
        ))}
      </div>
    </>
  )
}
