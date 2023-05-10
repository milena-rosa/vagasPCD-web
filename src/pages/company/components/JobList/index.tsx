import { Job } from '@/@types/job'
import { paginate } from '@/utils/paginate'
import {
  CaretDoubleLeft,
  CaretDoubleRight,
  CaretLeft,
  CaretRight,
} from '@phosphor-icons/react'
import {
  ColumnDef,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Select } from '@vagaspcd-ui/react'
import { useMemo, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import JobItem from '../JobItem'
import JobTitleFilter from '../JobTitleFilter'
import {
  NavigationButtonsBox,
  PageNumber,
  PageNumbersContainer,
  PaginationButton,
  PaginationContainer,
} from './styles'

export const columns: ColumnDef<Job, any>[] = [
  { accessorKey: 'job_id' },
  { accessorKey: 'title' },
  { accessorKey: 'role' },
  { accessorKey: 'linkedin' },
  { accessorKey: 'description' },
  { accessorKey: 'salary' },
  { accessorKey: 'perks' },
  { accessorKey: 'location' },
  { accessorKey: 'disability_type' },
  { accessorKey: 'created_at' },
]

interface JobListProps {
  data: Job[]
  isHistory?: boolean
}

export default function JobList({ data, isHistory = false }: JobListProps) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const handleFilterChange = <T,>(id: string, value: T | undefined) => {
    const otherFilters = columnFilters.filter((rule) => rule.id !== id)
    if (value) {
      setColumnFilters([...otherFilters, { id, value }])
    } else {
      setColumnFilters(otherFilters)
    }
  }

  const handleTitleFilter = useDebouncedCallback((value) => {
    handleFilterChange('title', value)
  }, 400)

  const table = useReactTable<Job>({
    data,
    columns,
    state: { columnFilters },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
  })

  const { items: paginationItems } = useMemo(() => {
    const currentPage = table.getState().pagination.pageIndex + 1
    const pageSize = table.getState().pagination.pageSize

    const props = paginate({
      current: currentPage,
      max: Math.floor(data.length / pageSize) + 1,
    })

    return props
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.length, table.getState().pagination])

  return (
    <div>
      <JobTitleFilter handleChange={handleTitleFilter} />
      {table.getRowModel().rows.map((row) => (
        <JobItem key={row.id} job={row.original} isHistory={isHistory} />
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
