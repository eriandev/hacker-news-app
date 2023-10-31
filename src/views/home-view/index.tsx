import { Text, View } from 'react-native'

import styleSheet from './styles'

export default function (): React.JSX.Element {
  return (
    <View style={styleSheet.view}>
      <Text style={styleSheet.text}>
        Hacker News App
      </Text>
    </View>
  )
}
