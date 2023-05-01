import { styled } from '@vagaspcd-ui/react'

export const Header = styled('div', {
  alignSelf: 'center',
  backgroundColor: '$primary40',
  padding: '$2 0',
  textAlign: 'center',
  width: '70%',
})

export const Main = styled('main', {
  borderLeft: '$primary solid 8px',
  margin: '$8 0',
  paddingLeft: '$6',

  h3: {
    margin: '$4 0 $2',

    '&:first-child': {
      marginTop: '0',
    },
  },

  a: {
    color: '$white',

    '&:hover': {
      filter: 'opacity(80%)',
    },
  },
})

export const GrayBox = styled('div', {
  backgroundColor: '$gray400',
  color: '$white',
  display: 'flex',
  justifyContent: 'space-between',
  margin: '$4 0',
  padding: '$4',

  a: {
    color: '$white',
    textDecoration: 'none',

    '&:hover': {
      filter: 'opacity(80%)',
    },
  },
})

export const BlueBox = styled('div', {
  backgroundColor: '$primary',
  color: '$white',
  display: 'flex',
  justifyContent: 'space-between',
  margin: '$4 0',
  padding: '$4',

  a: {
    color: '$white',
    textDecoration: 'none',

    '&:hover': {
      filter: 'opacity(80%)',
    },
  },
})

// .textcentral {

//   padding-left: 30%;
//   padding-right: 30%;
//   text-align: justify;
//   color: white;
//   font-family: 'Epilogue', sans-serif;
// }

// .toptext {

//   padding-top: 0,5%;
//   padding-bottom: 0,5%;
//   color: white;
//   background-color: #003087;
//   margin-left: 30%;
//   margin-right: 30%;
//   margin-top: 1%;
//   padding-right: 1%;
//   padding-left: 1%;
//   text-align: center;
//   font-family: 'Epilogue', sans-serif;

// }

// body {

//   background-color: black;

// }

// .btnbeneficio {

//   padding-left: 30%;
//   padding-right: 30%;
//   padding-top: 4%;
//   text-align: right;

// }

// button {

//   padding-left: 2%;
//   padding-top: 2%;
//   padding-bottom: 2%;
//   padding-right: 2%;
//   border: none;
//   background-color: #003087;
//   color: white;
//   cursor: pointer;

// }

// a:visited {

//   color: white;

// }
