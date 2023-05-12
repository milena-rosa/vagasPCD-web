import { Report } from '@/@types/report'
import { apiVagasPCD } from '@/services/apiVagasPCD'
import { useEffect, useState } from 'react'
import ReportList from './components/ReportList'

export default function Teste() {
  const [data, setData] = useState<Report[]>([])

  useEffect(() => {
    const loadSummaryData = async () => {
      const response = await apiVagasPCD.get<Report[]>('/applications/summary')
      setData(response.data)
    }

    loadSummaryData()
  }, [])

  return <ReportList data={data} />
}
