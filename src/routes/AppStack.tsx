import { NavigationContainer } from '@react-navigation/native'
import {
  createNativeStackNavigator,
  type NativeStackNavigationProp,
  type NativeStackScreenProps
} from '@react-navigation/native-stack'

import HomeView from '@/views/HomeView'
import WebView from '@/views/WebView'

const Stack = createNativeStackNavigator<AppStackParamList>()

export type AppStackParamList = {
  homeview: undefined
  webview: { uri: string }
}

export type Navigation<T extends keyof AppStackParamList> = NativeStackNavigationProp<AppStackParamList, T>
export type AppStackScreenProps<T extends keyof AppStackParamList> = NativeStackScreenProps<AppStackParamList, T>

export function AppNavigationStack (): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="homeview">
        <Stack.Screen name="homeview" component={HomeView} options={{ headerShown: false }} />
        <Stack.Screen name="webview" component={WebView} options={{ headerTitle: 'Back' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
