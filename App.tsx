import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Platform } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import {PersistGateProps} from 'redux-persist/es/integration/react'

import store, { persistor } from './store'
// import useCachedResources from './hooks/useCachedResources'
// import { useAppSelector } from './store/hooks'
// import { StyleVariables } from './constants/Variables'
// import Navigation from './navigation'
// import { EvaIconsPack } from '@ui-kitten/eva-icons'
// import 'intl'
// import 'intl/locale-data/jsonp/en'
// import './module/i18n'
import mapping from './mapping.json'
import theme from './theme.json'
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';
// import FlashMessage from 'react-native-flash-message'



const queryClient = new QueryClient()


if (Platform.OS === 'android') {
  // See https://github.com/expo/expo/issues/6536 for this issue.
  // eslint-disable-next-line no-underscore-dangle
  if (typeof (Intl as any).__disableRegExpRestore === 'function') {
    // eslint-disable-next-line no-underscore-dangle
    ; (Intl as any).__disableRegExpRestore()
  }
}

export default function App() {
  return (
    <View>
      <ApplicationProvider
        {...eva}
        customMapping={mapping as any}
        theme={{ ...eva.light, ...theme }}>
        <IconRegistry icons={EvaIconsPack} />
        <Provider  store={store}>
          <PersistGate loading={null} persistor={persistor} >
            <QueryClientProvider client={queryClient}>
              <SafeAreaProvider>
                <Navigation colorScheme="light"/>
              </SafeAreaProvider>
            </QueryClientProvider>
          </PersistGate>
        </Provider>
      </ApplicationProvider>
    </View>
  );
}


const HomeScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>HOME</Text>
  </Layout>
);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
