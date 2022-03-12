import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { RootStackParamList } from '../types'
import { ColorSchemeName, Pressable, Text, View } from 'react-native'

export default function Navigation ({
  colorScheme,
}:{
  colorScheme:ColorSchemeName
}){
    return (
        <NavigationContainer>
            
        </NavigationContainer>
    )
}

interface RootNavigationProps {
    initialRouteName: keyof RootStackParamList
  }

const Stack = createNativeStackNavigator<RootStackParamList>()

const Header = (props:NativeStackHeaderProps)=>{
  return(
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