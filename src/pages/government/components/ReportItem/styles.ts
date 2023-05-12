import { styled } from '@vagaspcd-ui/react'

export const ReportGrid = styled('div', {
  alignItems: 'end',
  background: '$gray100',
  borderRadius: '$xs',
  color: '$gray900',
  display: 'grid',
  fontFamily: '$code',
  fontSize: '$sm',
  gridTemplateAreas: `
    "company_name company_cnpj company_email company_phone company_street company_number company_complement company_city company_state company_zip_code n_jobs n_applications "
  `,
  gridTemplateColumns:
    '450px 160px 240px 140px 360px 60px 180px 180px 20px 80px repeat(2, 120px)',
  gridTemplateRows: 'auto',
  gridGap: '$1',
  margin: '$1 0',
  padding: '0 $2',
})

export const GridArea = styled('div', {
  variants: {
    area: {
      company_name: { gridArea: 'company_name' },
      company_cnpj: { gridArea: 'company_cnpj' },
      company_email: { gridArea: 'company_email' },
      company_phone: { gridArea: 'company_phone' },
      company_street: { gridArea: 'company_street' },
      company_number: { gridArea: 'company_number' },
      company_complement: { gridArea: 'company_complement' },
      company_city: { gridArea: 'company_city' },
      company_state: { gridArea: 'company_state' },
      company_zip_code: { gridArea: 'company_zip_code' },
      n_jobs: { gridArea: 'n_jobs' },
      n_applications: { gridArea: 'n_applications' },
    },
  },
})
