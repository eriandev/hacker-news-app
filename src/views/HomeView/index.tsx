import { FlatList, RefreshControl, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import styleSheet from './styles'
import { color } from '@/theme/colors'
import { NewsItem } from '@/components/NewsItem'
import { useHomeViewModel } from '@/viewmodels/HomeViewModel'
import type { NewsToShow } from '@/viewmodels/types/homeView'
import type { AppStackScreenProps, ViewOptions } from '@/routes/AppStack'

export const homeViewOptions: ViewOptions = {
  title: 'Hacker News App',
  headerTitleAlign: 'center',
  headerStyle: { backgroundColor: color('primary') },
  headerTitleStyle: { color: color('white'), fontSize: 20 }
}

export default function ({ navigation }: AppStackScreenProps<'homeview'>): React.JSX.Element {
  const { newsItems, refreshing, goToWebView, onDelete, onRefresh } = useHomeViewModel()
  const getRenderItem = (itemData: NewsToShow): React.JSX.Element => (
    <NewsItem
      title={itemData.title}
      author={itemData.author}
      haveLink={itemData.haveLink}
      createdAt={itemData.createdAt}
      displayLink={itemData.displayLink}
      onDelete={() => { void onDelete(itemData.id) }}
      onPress={() => { void goToWebView(navigation, itemData?.link) }}
    />
  )
  const getRefreshControl = (): React.JSX.Element => (
    <RefreshControl
      enabled={true}
      refreshing={refreshing}
      onRefresh={() => { void onRefresh() }}
    />
  )

  return (
    <View style={styleSheet.view}>
      <GestureHandlerRootView>
        <FlatList
          data={newsItems}
          style={{ minHeight: '100%' }}
          keyExtractor={({ id }) => id}
          refreshControl={getRefreshControl()}
          contentContainerStyle={styleSheet.list}
          renderItem={({ item }) => getRenderItem(item)}
        />
      </GestureHandlerRootView>
    </View>
  )
}
