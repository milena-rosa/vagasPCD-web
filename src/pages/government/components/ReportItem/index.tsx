import { Report } from '@/@types/report'
import { formatCNPJ } from '@/utils/formatCNPJ'
import { formatPhoneNumber } from '@/utils/formatPhoneNumber'
import { formatZipCode } from '@/utils/formatZipCode'
import { toPascalCase } from '@/utils/toPascalCase'
import { GridArea, ReportGrid } from './styles'

interface ReportItemProps {
  reportItem: Report
}

export default function ReportItem({ reportItem }: ReportItemProps) {
  return (
    <ReportGrid>
      <GridArea area="company_name">
        {toPascalCase(reportItem.company_name)}
      </GridArea>
      <GridArea area="company_cnpj">
        {formatCNPJ(reportItem.company_cnpj)}
      </GridArea>
      <GridArea area="company_email">{reportItem.company_email}</GridArea>
      <GridArea area="company_phone">
        {formatPhoneNumber(reportItem.company_phone) || '-'}
      </GridArea>
      <GridArea area="company_street">
        {toPascalCase(reportItem.company_street)}
      </GridArea>
      <GridArea area="company_number">
        {reportItem.company_number || 'N/A'}
      </GridArea>
      <GridArea area="company_complement">
        {toPascalCase(reportItem.company_complement) || '-'}
      </GridArea>
      <GridArea area="company_city">
        {toPascalCase(reportItem.company_city)}
      </GridArea>
      <GridArea area="company_state">{reportItem.company_state}</GridArea>
      <GridArea area="company_zip_code">
        {formatZipCode(reportItem.company_zip_code)}
      </GridArea>
      <GridArea area="n_jobs">{reportItem.n_jobs}</GridArea>
      <GridArea area="n_applications">{reportItem.n_applications}</GridArea>
    </ReportGrid>
  )
}
