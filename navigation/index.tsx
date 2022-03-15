import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  TabRouter,
} from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack'
import * as React from 'react'
// import { useTranslation } from 'react-i18next'
import { RootStackParamList } from '../types'
import { goBack, navigationRef, route } from './globalNavigation'
import { ColorSchemeName, Pressable, Text, View } from 'react-native'
import SignUpScreen from '../screens/SignUpScreen'
import HomeScreen from '../screens/HomeScreen'
import SignInScreen from '../screens/SignInScreen'
import FirstScreen from '../screens/FirstScreen'



export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName
}) {
  return (
    <NavigationContainer
      ref={navigationRef}

      theme={colorScheme != 'light' ? DarkTheme : DefaultTheme}
      onStateChange={(state) => {
        route.next(state?.routes[state.index])
      }
      }
    >
      <RootNavigator initialRouteName={'Root'} />
    </NavigationContainer>
  )
}

interface RootNavigationProps {
  initialRouteName: keyof RootStackParamList
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const Header = (props: NativeStackHeaderProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 20,
        paddingTop: 50,
        backgroundColor: '#FFF',
      }}
    >
      <View style={{ width: '30%', justifyContent: 'center' }}>
        <Pressable
          onPress={() => {
            goBack()
          }}
        >
          <Feather name={'arrow-left'} size={25} />
        </Pressable>
      </View>
      <View style={{ width: '60%', justifyContent: 'center' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          {props.options.title}
        </Text>
      </View>
    </View>
  )
}

export function RootNavigator({ initialRouteName }: RootNavigationProps) {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Welcome" component={FirstScreen} options={{headerShown:false}}/>
      <Stack.Screen name="SignUp" component={SignUpScreen}   options={{headerShown:false}}/>
      <Stack.Screen name="SignIn" component={SignInScreen}  options={{headerShown:false}} />
      <Stack.Screen name="Root" component={BottomTabNavigator} />
    </Stack.Navigator>
  )
}

const BottomTab = createBottomTabNavigator<RootStackParamList>()


function BottomTabNavigator() {
  const [state, setState] = React.useState<string>()
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#4B4780',
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#F8F7F7',
          padding: 20,
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ route: route1 }) => {
          return {
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                {/* <SvgHome stroke={color} /> */}
                <Text style={{ color, textAlign: 'center' }}>Home</Text>
              </View>
            ),
          }
        }}
      />

      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ route: route1 }) => {
          return {
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                {/* <SvgHome stroke={color} /> */}
                <Text style={{ color, textAlign: 'center' }}>Home</Text>
              </View>
            ),
          }
        }}
      />

      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ route: route1 }) => {
          return {
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                {/* <SvgHome stroke={color} /> */}
                <Text style={{ color, textAlign: 'center' }}>Home</Text>
              </View>
            ),
          }
        }}
      />

      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ route: route1 }) => {
          return {
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                {/* <SvgHome stroke={color} /> */}
                <Text style={{ color, textAlign: 'center' }}>Home</Text>
              </View>
            ),
          }
        }}
      />



    </BottomTab.Navigator>
  )
}



/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>['name']
  color: string
}) {
  return (
    <MaterialCommunityIcons size={30} style={{ marginBottom: -3 }} {...props} />
  )
}
