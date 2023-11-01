import { Text } from '@/components/text'
import { createStyleSheet } from '@/theme/style'
import { color } from '@/theme/colors'

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
    fontSize: 10,
    color: color('secondary'),
    fontFamily: 'red-hat-text-italic'
  }
})
