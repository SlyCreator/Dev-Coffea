import { StackActions, useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Button from '../components/Button'
import StackScreen from '../components/StackScreen'
import SuccessSvg from '../components/svgs/SuccessSvg'
import { AppTheme } from '../constants/Variables'

const OrderConfirmationScreen = () => {
    const { dispatch } = useNavigation()
    const goTrack = () => {
        dispatch(StackActions.replace('Track'))
    }
    const goHome = () => {
        dispatch(StackActions.replace('Home'))
    }
    return (

        <StackScreen style={tw`bg-white flex-1`}>
            <View style={tw`bg-white flex-1 items-center`}>
                <View>
                    <View style={tw`py-7 my-7 px-7 justify-center items-center`}>
                        <SuccessSvg />
                    </View>
                    <Text style={tw`text-center font-bold text-lg text-gray-800`}>
                        Order Confirmed
                    </Text>
                    <Text style={tw`text-center font-bold text-sm text-blue-900 py-4`}>
                        Order #001234
                    </Text>
                    <View style={tw`my-14`}>
                        <Text style={tw`text-center text-gray-700 mb-10`}>
                            We're preparing your order,keep track your order
                            status by clicking on the button below
                    </Text>
                    </View>

                </View>
                <Button

                    title='Track Order'
                    titleStyle={{
                        color: '#FFF',
                        textTransform: 'none',
                        fontSize: 14
                    }}
                    onPress={goTrack}

                />
                <Button

                    title='Back To Home'
                    titleStyle={{
                        // color: '#FFF',
                        textTransform: 'none',
                        fontSize: 14
                    }}
                    outline
                    onPress={goHome}

                />
            </View>
        </StackScreen>

    )
}

export default OrderConfirmationScreen
