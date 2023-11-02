import { SafeAreaView } from 'react-native-safe-area-context'

import { Header } from '@/components/Header'
import styleSheet from './styles'

export default function (): React.JSX.Element {
  return (
    <SafeAreaView style={styleSheet.view}>
      <Header>Hacker News App</Header>
    </SafeAreaView>
  )
}
