import { Heading, Text, styled } from '@vagaspcd-ui/react'

export const Container = styled('div', {
  alignItems: 'stretch',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  margin: '0 auto',
  padding: '$4',
  width: '80%',
})

export const MainSection = styled('div', {
  color: '$gray900',
  display: 'grid',
  gridTemplateAreas: `
    "title title"
    "linkedin linkedin"
    "description description"
    "company_name company_name"
    "city state"
    "role role"
    "salary salary"
    "perks perks"
    "location disability_type"
    "created_at created_at"
    "about about"
    "company_linkedin company_linkedin"
    "job_id job_id"
    "footer footer"
  `,
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridGap: '$1',
  lineHeight: '$base',
  margin: '0 auto',
  padding: '$10 0',
  width: '100%',
})

export const GridArea = styled('div', {
  variants: {
    area: {
      title: {
        gridArea: 'title',

        [`> ${Heading}`]: { color: '$primary' },
      },
      linkedin: {
        fontWeight: '$medium',
        gridArea: 'linkedin',
        marginBottom: '$4',

        a: {
          color: '$gray900',
          '&:hover': { filter: 'opacity(60%)' },
        },
      },
      company_name: { gridArea: 'company_name' },
      city: { gridArea: 'city' },
      state: { gridArea: 'state' },
      role: { gridArea: 'role' },
      created_at: {
        alignSelf: 'flex-start',
        gridArea: 'created_at',
      },

      description: { gridArea: 'description' },
      salary: { gridArea: 'salary' },
      perks: {
        gridArea: 'perks',

        [`> ${Text}`]: {
          color: '$gray900',
        },
      },
      location: { gridArea: 'location' },
      disability_type: { gridArea: 'disability_type' },
      about: { gridArea: 'about' },
      company_linkedin: {
        gridArea: 'company_linkedin',
        a: {
          color: '$gray900',

          '&:hover': {
            filter: 'opacity(60%)',
          },
        },
      },
      job_id: {
        color: '$gray400',
        fontSize: '$xxs',
        gridArea: 'job_id',
        textAlign: 'right',
      },
    },
  },
})

export const Footer = styled('footer', {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
})
