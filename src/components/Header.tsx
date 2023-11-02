import { View } from 'react-native'

import { color } from '@/theme/colors'
import { Text } from '@/components/Text'
import { createStyleSheet } from '@/theme/style'

export type HeaderProps = {
  children: React.ReactNode
}

export function Header ({ children }: HeaderProps): React.JSX.Element {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{children}</Text>
    </View>
  )
}

const styles = createStyleSheet({
  header: {
    display: 'flex',
    paddingVertical: 14,
    alignItems: 'center',
    backgroundColor: color('primary')
  },
  title: {
    fontSize: 18,
    color: color('white'),
    fontFamily: 'red-hat-text-600'
  }
})
