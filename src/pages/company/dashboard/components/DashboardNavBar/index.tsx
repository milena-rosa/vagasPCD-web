import { Container, MenuItem } from './styles'

export default function DashboardNavBar() {
  return (
    <Container>
      <MenuItem href="/company/dashboard/jobs/register">
        Cadastrar nova vaga
      </MenuItem>
      <MenuItem href="/company/dashboard/jobs/open">
        Listar vagas abertas
      </MenuItem>
      <MenuItem href="/company/dashboard/jobs/history">
        Listar histórico de vagas
      </MenuItem>
      <MenuItem href="/company/dashboard/jobs/applications">
        Visualizar candidaturas
      </MenuItem>
    </Container>
  )
}
