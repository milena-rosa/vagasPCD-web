import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { SortField, SortRow, SortToggle } from './styles'

interface JobSortProps {
  sortFields: {
    value: string
    label: string
  }[]
  defaultField: string
  onSortChange: (id: string, desc: boolean) => void
}

export default function JobSort({
  sortFields,
  defaultField,
  onSortChange,
}: JobSortProps) {
  return (
    <SortRow>
      <SortField>Ordenar por:</SortField>
      <ToggleGroup.Root
        type="single"
        onValueChange={(value) => {
          onSortChange(value, true)
        }}
      >
        {sortFields.map((option) => {
          return (
            <SortToggle key={option.value} value={String(option.value)}>
              {option.label}
            </SortToggle>
          )
        })}
      </ToggleGroup.Root>
    </SortRow>
  )
}
