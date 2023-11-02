// import { FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler'

import styleSheet from './styles'
import { Header } from '@/components/Header'
import { NewsItem } from '@/components/NewsItem'
import { useHomeViewModel } from '@/viewmodels/HomeViewModel'

export default function (): React.JSX.Element {
  const { newsItems } = useHomeViewModel()

  return (
    <SafeAreaView style={styleSheet.view}>
      <Header>Hacker News App</Header>

      <GestureHandlerRootView>
        <FlatList
          data={newsItems}
          keyExtractor={({ id }) => id}
          contentContainerStyle={styleSheet.list}
          renderItem={({ item }) => <NewsItem {...item} />}
        />
      </GestureHandlerRootView>
    </SafeAreaView>
  )
}
