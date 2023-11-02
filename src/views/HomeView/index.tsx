import { FlatList, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useHomeViewModel } from '@/viewmodels/HomeViewModel'
import { Header } from '@/components/Header'
import styleSheet from './styles'

export default function (): React.JSX.Element {
  const { newsItems } = useHomeViewModel()

  const Item = ({ title }: { title: string }): React.JSX.Element => (
    <View style={styleSheet.item}>
      <Text style={styleSheet.title}>{title}</Text>
    </View>
  )

  return (
    <SafeAreaView style={styleSheet.view}>
      <Header>Hacker News App</Header>

      <FlatList
        data={newsItems}
        keyExtractor={({ id }) => id}
        contentContainerStyle={styleSheet.container}
        renderItem={({ item }) => <Item title={item.title} />}
      />
    </SafeAreaView>
  )
}
