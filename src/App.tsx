import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import { MyHouseScreen } from './screens/MyHouseScreen'

const App = (): JSX.Element => {
  const [fontsLoaded] = useFonts({
    Karla: require('./assets/fonts/Karla-Regular.ttf'),
    KarlaBold: require('./assets/fonts/Karla-Bold.ttf'),
    KarlaExtraBold: require('./assets/fonts/Karla-ExtraBold.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <SafeAreaProvider>
        <MyHouseScreen />
        <StatusBar />
      </SafeAreaProvider>
    )
  }
}

export default App
