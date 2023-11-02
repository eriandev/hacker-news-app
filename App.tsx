import { StatusBar } from 'expo-status-bar'

import HomeView from '@/views/HomeView'

export default function App (): React.JSX.Element {
  return (
    <>
      <HomeView />
      <StatusBar style="auto" />
    </>
  )
}
