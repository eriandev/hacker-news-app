import type { FlattenObjectValues, Paths } from '@/util/types'

export type AvailableColor = Paths<typeof colors>
export type Color = FlattenObjectValues<typeof colors>

const colors = {
  primary: '#FF6600',
  secondary: '#FF8D41',

  bg: '#F3F3F3',
  gray: '#9CA2B5',
  danger: '#DC4949',

  white: '#FFF',
  black: '#06161C'
} as const

export function color (path: AvailableColor): Color {
  let current = { ...colors } as any

  if (!path.includes('.')) return current[path]

  path.split('.').forEach((p) => {
    current = current[p]
  })

  return current
}

export default colors
