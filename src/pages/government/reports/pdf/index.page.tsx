import { Report } from '@/@types/report'
import { Document, Page } from '@react-pdf/renderer'
import { styles } from './styles'

interface PDFReportProps {
  data: Report[]
}

export default function PDFReport({ data }: PDFReportProps) {
  return (
    <Document>
      <Page style={styles.page}>POXXA</Page>
    </Document>
  )
}
