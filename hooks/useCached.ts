import { FontAwesome } from '@expo/vector-icons'
import * as Font from 'expo-font'
//import * as SplashScreen from 'expo-splash-screen'
import * as React from 'react'

export default function useCached() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false)
  const [fontsLoaded] = Font.useFonts({
    ...FontAwesome.font,
    poppinsSemiBold: require('../assets/fonts/Poppins-SemiBold.ttf'),
    poppinsMedium: require('../assets/fonts/Poppins-Medium.ttf'),
  })

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    // SplashScreen.preventAutoHideAsync()

    if (fontsLoaded) {
      setLoadingComplete(true)
    //  SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  return isLoadingComplete
}
