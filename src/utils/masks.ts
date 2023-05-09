import { IMask } from 'react-imask'

type Masker = {
  masked: any
  transform?: any
  maskDefault?: any
}

const masker = ({ masked, maskDefault, transform }: Masker) =>
  (function () {
    const mask = IMask.createPipe(
      masked,
      IMask.PIPE_TYPE.UNMASKED,
      IMask.PIPE_TYPE.MASKED,
    )

    const unmask = IMask.createPipe(
      masked,
      IMask.PIPE_TYPE.MASKED,
      IMask.PIPE_TYPE.UNMASKED,
    )

    const onChange = (event: any) => {
      const unmasked = unmask(event.target.value)
      const newValue = mask(unmasked)
      event.target.value = newValue
    }

    return {
      mask,
      onChange,
      transform: transform || unmask,
      unmask,
      maskDefault: maskDefault || mask,
    }
  })()

export const zipCodeMask = masker({
  masked: {
    mask: '00000-000',
  },
})

export const cnpjMask = masker({
  masked: {
    mask: '00.000.000/0000-00',
  },
})

export const phoneMask = masker({
  masked: {
    mask: '(00) 000 000 000',
  },
})
