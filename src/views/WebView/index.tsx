import { WebView } from 'react-native-webview'

import styleSheet from './styles'
import { color } from '@/theme/colors'
import type { AppStackScreenProps, ViewOptions } from '@/routes/AppStack'

export const webViewOptions: ViewOptions = {
  title: 'Back',
  headerTintColor: color('white'),
  headerStyle: { backgroundColor: color('primary') },
  headerTitleStyle: { color: color('white'), fontSize: 20 }
}

export default function ({ route }: AppStackScreenProps<'webview'>): React.JSX.Element {
  const { params: { uri } } = route

  return (
    <WebView
      source={{ uri }}
      style={styleSheet.container}
    />
  )
}
