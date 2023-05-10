import { Candidate } from '@/@types/candidate'
import { formatPhoneNumber } from '@/utils/formatPhoneNumber'
import { formatZipCode } from '@/utils/formatZipCode'
import Link from 'next/link'
import { GridArea, JobGrid } from './styles'

interface CandidateItemProps {
  candidate: Candidate
}

export default function CandidateItem({ candidate }: CandidateItemProps) {
  return (
    <JobGrid>
      <GridArea area="name">
        <strong>Nome:&nbsp;</strong>
        {candidate.name}
      </GridArea>

      <GridArea area="email">
        <strong>E-mail: </strong>
        {candidate.email}
      </GridArea>
      <GridArea area="phone">
        <strong>Celular: </strong>
        {formatPhoneNumber(candidate.phone)}
      </GridArea>

      <GridArea area="linkedin">
        <Link href={candidate.linkedin} target="_blank">
          LinkedIn do candidato
        </Link>
      </GridArea>

      <GridArea area="street">
        <strong>Rua: </strong>
        {candidate.street}
      </GridArea>
      <GridArea area="number">
        <strong>Número: </strong>
        {candidate.number}
      </GridArea>
      <GridArea area="complement">
        <strong>Complemento: </strong>
        {candidate.complement || '-'}
      </GridArea>

      <GridArea area="neighborhood">
        <strong>Bairro: </strong>
        {candidate.neighborhood}
      </GridArea>
      <GridArea area="city">
        <strong>Cidade: </strong>
        {candidate.city} / {candidate.state}
      </GridArea>
      <GridArea area="zipCode">
        <strong>CEP: </strong>
        {formatZipCode(candidate.zipCode)}
      </GridArea>

      <GridArea area="professionalExperience">
        <strong>Experiência Profissional: </strong>
        {candidate.professionalExperience}
      </GridArea>

      <GridArea area="educationalBackground">
        <strong>Educação: </strong>
        {candidate.educationalBackground}
      </GridArea>

      <GridArea area="skills">
        <strong>Habilidades e Competências: </strong>
        {candidate.skills}
      </GridArea>

      <GridArea area="candidate_id">{candidate.candidate_id}</GridArea>
    </JobGrid>
  )
}
