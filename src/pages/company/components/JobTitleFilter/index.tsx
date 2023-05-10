import { MagnifyingGlass } from '@phosphor-icons/react'
import { TextInput } from '@vagaspcd-ui/react'
import { Container } from './styles'

export default function JobTitleFilter({
  handleChange,
}: {
  handleChange: (value: string) => void
}) {
  return (
    <Container>
      <TextInput
        icon={<MagnifyingGlass />}
        placeholder="Título da vaga"
        onChange={(event) => handleChange(event.target.value)}
      />
    </Container>
  )
}
