import { Ionicons } from '@expo/vector-icons'
import { StackActions } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { dispatch } from '../navigation/globalNavigation'

export interface HeaderProps {
    title?:string
}

const Header = ({title}:HeaderProps) => {
    const goCart = ()=>{
        dispatch(StackActions.push('Cart'))
    }

    return (
        <View>
            <View style={tw`flex-row justify-between mb-4`}>
                        <Ionicons name="notifications-outline" size={20} color="black" />
                        <Text style={tw`text-base font-bold`}>{title}</Text>
                        <Ionicons name="cart-outline" size={20} color="black"  onPress={goCart}/>
                    </View >
        </View>
    )
}

export default Header
