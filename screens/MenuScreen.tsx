import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import StackScreen from '../components/StackScreen'

const MenuScreen = () => {
    return (
        <ScrollView style={tw`flex-1  bg-white`}>
            <StackScreen >
            <View>
            <Text>Hello</Text>
        </View>
            </StackScreen>
        </ScrollView>
    )
}

export default MenuScreen
