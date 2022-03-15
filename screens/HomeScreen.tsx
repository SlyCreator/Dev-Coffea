import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import StackScreen from '../components/StackScreen'

const HomeScreen = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <StackScreen style={tw`flex-1 bg-white`}>
                <View style={tw`bg-white flex-1`}>
                    <Text>Dd</Text>
                </View>
            </StackScreen>
        </ScrollView>
    )
}

export default HomeScreen
