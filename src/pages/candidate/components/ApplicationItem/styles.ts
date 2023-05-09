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
    "job_title job_title"
    "job_created_at applied_at"
    "job_role job_linkedin"
    "job_description job_description"
    "company city"
    "salary salary"
    "perks perks"
    "job_location disability_type"
    "company_linkedin company_linkedin"
    "job_id job_id"
  `,
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: 'auto auto auto',
  gridGap: '$1',
  margin: '$2 0',
  padding: '$3 $4',
})

export const GridArea = styled('div', {
  variants: {
    area: {
      job_title: {
        gridArea: 'job_title',

        fontWeight: '$bold',
        maxWidth: '60ch',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
      job_created_at: { gridArea: 'job_created_at' },
      applied_at: { gridArea: 'applied_at' },
      job_role: { gridArea: 'job_role' },
      job_linkedin: {
        gridArea: 'job_linkedin',
        a: {
          color: '$gray900',
          '&:hover': {
            filter: 'opacity(60%)',
          },
        },
      },
      job_description: { gridArea: 'job_description' },
      company: { gridArea: 'company' },
      city: { gridArea: 'city' },
      salary: { gridArea: 'salary' },
      perks: { gridArea: 'perks' },
      job_location: { gridArea: 'job_location' },
      disability_type: { gridArea: 'disability_type' },
      closed_at: { gridArea: 'closed_at' },
      close_job: {
        gridArea: 'close_job',
        marginTop: '$4',
      },
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
