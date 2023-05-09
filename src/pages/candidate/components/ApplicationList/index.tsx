import { Application } from '@/@types/application'
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
import ApplicationItem from '../ApplicationItem'
import JobTitleFilter from '../JobTitleFilter'
import {
  NavigationButtonsBox,
  PageNumber,
  PageNumbersContainer,
  PaginationButton,
  PaginationContainer,
} from './styles'

export const columns: ColumnDef<Application, any>[] = [
  { accessorKey: 'application_id' },
  { accessorKey: 'applied_at' },
  { accessorKey: 'company_about' },
  { accessorKey: 'company_city' },
  { accessorKey: 'company_linkedin' },
  { accessorKey: 'company_name' },
  { accessorKey: 'company_state' },
  { accessorKey: 'disability_type' },
  { accessorKey: 'job_closed_at' },
  { accessorKey: 'job_created_at' },
  { accessorKey: 'job_description' },
  { accessorKey: 'job_id' },
  { accessorKey: 'job_linkedin' },
  { accessorKey: 'job_location' },
  { accessorKey: 'job_role' },
  { accessorKey: 'job_title' },
  { accessorKey: 'perks' },
  { accessorKey: 'salary' },
]

interface ApplicationsListProps {
  data: Application[]
}

export default function ApplicationsList({ data }: ApplicationsListProps) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  console.log(columnFilters)
  const handleFilterChange = <T,>(id: string, value: T | undefined) => {
    const otherFilters = columnFilters.filter((rule) => rule.id !== id)
    if (value) {
      setColumnFilters([...otherFilters, { id, value }])
    } else {
      setColumnFilters(otherFilters)
    }
  }

  const handleTitleFilter = useDebouncedCallback((value) => {
    handleFilterChange('job_title', value)
  }, 400)

  const table = useReactTable<Application>({
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
        <ApplicationItem key={row.id} application={row.original} />
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
