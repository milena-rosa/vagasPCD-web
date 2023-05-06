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
    "title created_at"
    "role role"
    "description description"
    "salary salary"
    "perks perks"
    "location disability_type"
    "linkedin linkedin"
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
      title: {
        gridArea: 'title',
        fontWeight: '$bold',
        maxWidth: '60ch',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
      role: { gridArea: 'role' },
      created_at: {
        alignSelf: 'flex-start',
        gridArea: 'created_at',
        textAlign: 'right',
      },
      linkedin: {
        gridArea: 'linkedin',
        a: {
          color: '$gray900',

          '&:hover': {
            filter: 'opacity(60%)',
          },
        },
      },
      description: {
        gridArea: 'description',
        lineClamp: '2',
        maxWidth: '120ch',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
      salary: { gridArea: 'salary' },
      perks: {
        gridArea: 'perks',
        lineClamp: '2',
        maxWidth: '120ch',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
      location: { gridArea: 'location' },
      disability_type: { gridArea: 'disability_type' },
      job_id: {
        color: '$gray400',
        fontSize: '$xxs',
        gridArea: 'job_id',
        textAlign: 'right',
      },
    },
  },
})

export const JobTitle = styled('h2', {
  alignItems: 'center',
  cursor: 'pointer',
  display: 'flex',
  fontSize: '$sm',
  margin: '0',
  color: '$gray900',
})
