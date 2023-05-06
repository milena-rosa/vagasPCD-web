export type PaginationProps = {
  current: number
  previous: number | null
  next: number | null
  items: string[]
}

export function paginate({
  current,
  max,
}: {
  current: number
  max: number
}): PaginationProps {
  if (!current || !max)
    return {
      current: -1,
      previous: null,
      next: null,
      items: [],
    }

  const previous = current === 1 ? null : current - 1
  const next = current === max ? null : current + 1
  const items = ['1']

  if (current === 1 && max === 1) {
    return { current, previous, next, items }
  }

  if (current > 4) {
    items.push('...')
  }

  const r = 2
  const r1 = current - r
  const r2 = current + r

  for (let i = r1 > 2 ? r1 : 2; i <= Math.min(max, r2); i++) {
    items.push(`${i}`)
  }

  if (r2 + 1 < max) {
    items.push('...')
  }
  if (r2 < max) {
    items.push(`${max}`)
  }

  return { current, previous, next, items }
}
