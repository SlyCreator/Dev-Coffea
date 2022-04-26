import React from "react"
import { TouchableOpacity, View, Image, Text, GestureResponderEvent } from "react-native"
import tw from "tailwind-react-native-classnames"
import { AntDesign } from '@expo/vector-icons';

export interface ProductCardPros {
    onPress?(event?: GestureResponderEvent): void
    imageUri?: React.ReactNode | JSX.Element | any
    name?: string
    cost?: string
}

export const SmallProductCard = ({ name, imageUri, cost, onPress }: ProductCardPros) => {
    return (
        <TouchableOpacity style={tw`my-2 m-2 bg-white shadow-sm rounded-lg `}>
            <View style={tw`rounded-lg`} >
                <Image
                    style={{ width: 100, height: 100, resizeMode: 'contain', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                    source={{ uri: imageUri }}
                />
                <Text style={tw`text-sm font-bold text-center p-2`}>{name}</Text>

            </View>
        </TouchableOpacity>
    )
}
export const MeduimProductCard = ({ name, imageUri, cost, onPress }: ProductCardPros) => {
    return (
        <TouchableOpacity style={tw`my-4 mr-4 p-4 rounded-lg bg-white shadow-lg`} onPress={onPress}>
            <View>
                <Image
                    style={{ width: 110, height: 120, resizeMode: 'contain', borderRadius: 10 }}
                    source={{ uri: imageUri }}
                />
                <Text style={tw`mt-2 text-sm font-bold `}>{name}</Text>
                <View style={tw`flex-row justify-between`}>
                    <Text style={tw`text-gray-500`}>{`$${cost}`}</Text>
                    <View style={tw`bg-gray-200 rounded-sm p-1`}>
                        <AntDesign name="plus" size={14} color="black" />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export const LongProductCard = ({ name, imageUri, cost, onPress }: ProductCardPros) => {
    return (
        <TouchableOpacity style={tw`my-2 m-2 bg-white shadow-sm rounded-lg `}>
            <View style={tw``}>
                <Image
                    style={{ width: 100, height: 100, resizeMode: 'contain', }}
                    source={{ uri: imageUri }}
                />
                <Text style={tw`mt-2 text-lg font-semibold`}>{name}</Text>

            </View>
        </TouchableOpacity>
    )
}