import { StatusBar } from 'expo-status-bar'

import { AppNavigationStack } from '@/routes/AppStack'

export default function App (): React.JSX.Element {
  return (
    <>
      <AppNavigationStack />
      <StatusBar style="auto" />
    </>
  )
}
