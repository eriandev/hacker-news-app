import { createStyleSheet } from '@/theme/style'
import { color } from '@/theme/colors'

export default createStyleSheet({
  view: {
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start'
  },
  container: {
    rowGap: 4,
    display: 'flex',
    paddingHorizontal: 4,
    backgroundColor: color('bg')
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    backgroundColor: color('white')
  },
  title: {
    fontSize: 16
  }
})
