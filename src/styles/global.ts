import { globalCss } from '@vagaspcd-ui/react'
import 'react-toastify/dist/ReactToastify.css'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },

  body: {
    backgroundColor: '$gray100',
    color: '$black',
    '-webkit-font-smoothing': 'antialiased',
    fontFamily: 'Epilogue, sans-serif',
    textRendering: 'optimizeLegibility',
  },
})
