import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler'

import styleSheet from './styles'
import { Header } from '@/components/Header'
import { NewsItem } from '@/components/NewsItem'
import { useHomeViewModel } from '@/viewmodels/HomeViewModel'
import type { AppStackScreenProps } from '@/routes/AppStack'

export default function ({ navigation }: AppStackScreenProps<'homeview'>): React.JSX.Element {
  const { newsItems, goToWebView } = useHomeViewModel()

  return (
    <SafeAreaView style={styleSheet.view}>
      <Header>Hacker News App</Header>

      <GestureHandlerRootView>
        <FlatList
          data={newsItems}
          keyExtractor={({ id }) => id}
          contentContainerStyle={styleSheet.list}
          renderItem={({ item }) => <NewsItem {...item} onPress={() => { void goToWebView(navigation, item?.link) }} />}
        />
      </GestureHandlerRootView>
    </SafeAreaView>
  )
}
