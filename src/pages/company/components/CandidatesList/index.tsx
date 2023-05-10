import { Candidate } from '@/@types/candidate'
import { paginate } from '@/utils/paginate'
import {
  CaretDoubleLeft,
  CaretDoubleRight,
  CaretLeft,
  CaretRight,
} from '@phosphor-icons/react'
import {
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Heading, Select } from '@vagaspcd-ui/react'
import { useMemo } from 'react'
import CandidateItem from '../CandidateItem'
import {
  NavigationButtonsBox,
  PageNumber,
  PageNumbersContainer,
  PaginationButton,
  PaginationContainer,
} from './styles'

export const columns: ColumnDef<Candidate, any>[] = [
  { accessorKey: 'candidate_id' },
  { accessorKey: 'name' },
  { accessorKey: 'email' },
  { accessorKey: 'phone' },
  { accessorKey: 'linkedin' },
  { accessorKey: 'street' },
  { accessorKey: 'number' },
  { accessorKey: 'complement' },
  { accessorKey: 'neighborhood' },
  { accessorKey: 'city' },
  { accessorKey: 'state' },
  { accessorKey: 'zipCode' },
  { accessorKey: 'professionalExperience' },
  { accessorKey: 'educationalBackground' },
  { accessorKey: 'skills' },
]

interface CandidatesListProps {
  data: Candidate[]
}

export default function CandidatesList({ data }: CandidatesListProps) {
  const table = useReactTable<Candidate>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  const { items: paginationItems } = useMemo(() => {
    const currentPage = table.getState().pagination.pageIndex + 1
    const pageSize = table.getState().pagination.pageSize

    const props = paginate({
      current: currentPage,
      max: Math.floor(data?.length / pageSize) + 1,
    })

    return props
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.length, table.getState().pagination])

  if (!data) return <Heading>Nenhum candidato para esta vaga...</Heading>

  return (
    <div>
      {table.getRowModel().rows.map((row) => (
        <CandidateItem key={row.id} candidate={row.original} />
      ))}

      <PaginationContainer>
        <NavigationButtonsBox>
          <PaginationButton
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <CaretDoubleLeft color="#003087" weight="bold" />
          </PaginationButton>
          <PaginationButton
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <CaretLeft color="#003087" weight="bold" />
          </PaginationButton>

          <PageNumbersContainer>
            {paginationItems.map((item) => (
              <PageNumber
                key={item}
                state={
                  Number(item) === table.getState().pagination.pageIndex + 1
                    ? 'active'
                    : 'default'
                }
                onClick={() => {
                  if (item !== '...') table.setPageIndex(Number(item) - 1)
                }}
              >
                {item}
              </PageNumber>
            ))}
          </PageNumbersContainer>

          <PaginationButton
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <CaretRight color="#003087" weight="bold" />
          </PaginationButton>
          <PaginationButton
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <CaretDoubleRight color="#003087" weight="bold" />
          </PaginationButton>
        </NavigationButtonsBox>
        <Select
          placeholder="Mostrar"
          items={[
            { label: 'Mostrar 10', value: '5' },
            { label: 'Mostrar 20', value: '10' },
            { label: 'Mostrar 30', value: '15' },
          ]}
          value={String(table.getState().pagination.pageSize)}
          onValueChange={(value) => {
            table.setPageSize(Number(value))
          }}
        />
      </PaginationContainer>
    </div>
  )
}
