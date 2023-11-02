import { color } from '@/theme/colors'
import { Text } from '@/components/Text'
import { createStyleSheet } from '@/theme/style'

export type LabelProps = {
  children: React.ReactNode
}

export function Label ({ children }: LabelProps): React.JSX.Element {
  return (
    <Text style={styles.title}>
      {children}
    </Text>
  )
}

const styles = createStyleSheet({
  title: {
    fontSize: 12,
    color: color('secondary'),
    textTransform: 'uppercase',
    fontFamily: 'red-hat-text-italic'
  }
})
