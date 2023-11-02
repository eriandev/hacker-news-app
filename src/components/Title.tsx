import { Text } from '@/components/Text'
import { createStyleSheet } from '@/theme/style'

export type TitleProps = {
  children: React.ReactNode
}

export function Title ({ children }: TitleProps): React.JSX.Element {
  return (
    <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
      {children}
    </Text>
  )
}

const styles = createStyleSheet({
  title: {
    fontSize: 16,
    lineHeight: 18,
    fontFamily: 'red-hat-text-600'
  }
})
