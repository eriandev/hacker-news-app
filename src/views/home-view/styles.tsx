import { createStyleSheet } from '@/theme/style'
import { color } from '@/theme/colors'

export default createStyleSheet({
  view: {
    flex: 1,
    height: '100%',
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: color('bg')
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'red-hat-text-600'
  }
})
