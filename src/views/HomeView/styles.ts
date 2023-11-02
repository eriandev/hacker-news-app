import { createStyleSheet } from '@/theme/style'
import { color } from '@/theme/colors'

export default createStyleSheet({
  view: {
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    backgroundColor: color('primary')
  },
  list: {
    rowGap: 4,
    paddingTop: 4,
    display: 'flex',
    paddingBottom: 58,
    paddingHorizontal: 4,
    backgroundColor: color('bg')
  }
})
