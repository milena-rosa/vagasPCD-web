import { styled } from '@vagaspcd-ui/react'

export const JobGrid = styled('div', {
  alignItems: 'end',
  background: '$gray100',
  borderRadius: '$xs',
  color: '$gray900',
  display: 'grid',
  fontFamily: '$code',
  fontSize: '$sm',
  gridTemplateAreas: `
    "name name ."
    "email phone ."
    "linkedin linkedin ."
    "street number complement"
    "neighborhood city zipCode"
    "professionalExperience professionalExperience professionalExperience"
    "educationalBackground educationalBackground educationalBackground"
    "skills skills skills"
    ". . candidate_id"
  `,
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateRows: 'auto',
  gridGap: '$1',
  margin: '$2 0',
  padding: '$3 $4',
})

export const GridArea = styled('div', {
  variants: {
    area: {
      name: { gridArea: 'name' },
      email: { gridArea: 'email' },
      phone: { gridArea: 'phone' },
      linkedin: {
        gridArea: 'linkedin',
        a: {
          color: '$gray900',
          '&:hover': {
            filter: 'opacity(60%)',
          },
        },
      },
      street: { gridArea: 'street' },
      number: { gridArea: 'number' },
      complement: { gridArea: 'complement' },
      neighborhood: { gridArea: 'neighborhood' },
      city: { gridArea: 'city' },
      zipCode: { gridArea: 'zipCode' },
      professionalExperience: { gridArea: 'professionalExperience' },
      educationalBackground: { gridArea: 'educationalBackground' },
      skills: { gridArea: 'skills' },
      candidate_id: {
        color: '$gray400',
        fontSize: '$xxs',
        gridArea: 'candidate_id',
        textAlign: 'right',
      },
    },
  },
})
