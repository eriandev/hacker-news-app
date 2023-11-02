import { createStyleSheet } from '@/theme/style'
import { color } from '@/theme/colors'

export default createStyleSheet({
  view: {
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start'
  },
  list: {
    rowGap: 4,
    padding: 8,
    display: 'flex',
    backgroundColor: color('bg')
  }
})
