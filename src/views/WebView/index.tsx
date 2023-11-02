import { WebView } from 'react-native-webview'

import styleSheet from './styles'
import type { AppStackScreenProps } from '@/routes/AppStack'

export default function ({ route }: AppStackScreenProps<'webview'>): React.JSX.Element {
  const { params: { uri } } = route

  return (
    <WebView
      source={{ uri }}
      style={styleSheet.container}
    />
  )
}
