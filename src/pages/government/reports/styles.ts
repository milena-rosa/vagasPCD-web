import { PDFDownloadLink } from '@react-pdf/renderer'
import { Button, Heading, Text, styled } from '@vagaspcd-ui/react'
import { CSVLink } from 'react-csv'

export const Container = styled('div', {
  backgroundColor: '$black',
  display: 'flex',
  minHeight: '100vh',
})

export const MainSection = styled('main', {
  flexDirection: 'column',
  height: '100%',
  margin: '0 auto',
  padding: '$10 0',
  width: '70%',

  [`> ${Heading}`]: {
    color: '$gray100',
    fontWeight: '$medium',
    marginBottom: '$6',
  },
})

export const CompanyGrid = styled('div', {
  alignItems: 'end',
  background: '$gray100',
  borderRadius: '$xs',
  color: '$gray900',
  display: 'grid',
  fontFamily: '$code',
  fontSize: '$sm',
  gridTemplateAreas: `
    "name name name ."
    "cnpj . . ."
    "email email phone ."
    "street street number complement"
    "city city zipCode ."
    "n_jobs . . ."
    "n_applications . . ."
  `,
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'auto',
  gridGap: '$1',
  margin: '$2 0',
  padding: '$3 $4',

  [`${Text}`]: {
    color: '$gray900',
    fontFamily: '$code',
  },
})

export const GridArea = styled('div', {
  variants: {
    area: {
      name: {
        gridArea: 'name',
        fontWeight: '$bold',
      },
      cnpj: { gridArea: 'cnpj' },
      email: { gridArea: 'email' },
      phone: { gridArea: 'phone' },
      street: { gridArea: 'street' },
      number: { gridArea: 'number' },
      complement: { gridArea: 'complement' },
      city: { gridArea: 'city' },
      zipCode: { gridArea: 'zipCode' },
      n_jobs: { gridArea: 'n_jobs' },
      n_applications: { gridArea: 'n_applications' },
    },
  },
})

export const Footer = styled('div', {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '$10',

  [`${Button}`]: {
    minWidth: 150,
  },
})

const commonButtonStyle = {
  alignItems: 'center',
  backgroundColor: '$primary',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  color: '$gray100',
  display: 'flex',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',
  gap: '$2',
  height: 46,
  justifyContent: 'center',
  marginRight: '$4',
  minWidth: 150,
  padding: '0 $4',
  textDecoration: 'none',

  // '&:not(:disabled):hover': {
  //   filter: 'opacity(80%)',
  // },
}

export const DownloadCSVButton = styled(CSVLink, commonButtonStyle)

export const DownloadPDFButton = styled(PDFDownloadLink, commonButtonStyle)
