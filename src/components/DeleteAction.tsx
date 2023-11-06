import { View } from 'react-native'

import { color } from '@/theme/colors'
import { Text } from '@/components/Text'
import { createStyleSheet } from '@/theme/style'

export function DeleteAction (): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Delete</Text>
    </View>
  )
}

const styles = createStyleSheet({
  container: {
    flex: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color('danger')
  },
  text: {
    fontSize: 18,
    color: color('white'),
    fontFamily: 'red-hat-text-600'
  }
})
