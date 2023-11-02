import { FlatList, RefreshControl, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import styleSheet from './styles'
import { color } from '@/theme/colors'
import { NewsItem } from '@/components/NewsItem'
import { useHomeViewModel } from '@/viewmodels/HomeViewModel'
import type { AppStackScreenProps, ViewOptions } from '@/routes/AppStack'

export const homeViewOptions: ViewOptions = {
  title: 'Hacker News App',
  headerTitleAlign: 'center',
  headerStyle: { backgroundColor: color('primary') },
  headerTitleStyle: { color: color('white'), fontSize: 20 }
}

export default function ({ navigation }: AppStackScreenProps<'homeview'>): React.JSX.Element {
  const { newsItems, refreshing, goToWebView, onRefresh } = useHomeViewModel()

  return (
    <View style={styleSheet.view}>
      <GestureHandlerRootView>
        <FlatList
          data={newsItems}
          keyExtractor={({ id }) => id}
          contentContainerStyle={styleSheet.list}
          refreshControl={<RefreshControl enabled={true} refreshing={refreshing} onRefresh={onRefresh} />}
          renderItem={({ item }) => <NewsItem {...item} onPress={() => { void goToWebView(navigation, item?.link) }} />}
        />
      </GestureHandlerRootView>
    </View>
  )
}
