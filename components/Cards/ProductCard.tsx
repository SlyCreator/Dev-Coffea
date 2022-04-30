import React from "react"
import { TouchableOpacity, View, Image, Text, GestureResponderEvent } from "react-native"
import tw from "tailwind-react-native-classnames"
import { AntDesign } from '@expo/vector-icons';
import Button from "../Button";

type longCardType = 'order' | 'cart'
export interface ProductCardPros {
    onPress?(event?: GestureResponderEvent): void
    imageUri?: React.ReactNode | JSX.Element | any
    name?: string
    cost?: number
    detail?: [string]
    longType?: longCardType,
    status?: string
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
        <TouchableOpacity style={tw`my-2 mr-6  ml-1 p-4 rounded-lg bg-white shadow-lg`} onPress={onPress}>
            <View>
                <Image
                    style={{ width: 110, height: 120, resizeMode: 'contain', borderRadius: 10 }}
                    source={{ uri: imageUri }}
                />
                <Text style={tw` text-sm font-bold `}>{name}</Text>
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

export const LongProductCard = ({
    name, imageUri, cost, longType, status, detail, onPress
}: ProductCardPros) => {
    return (
        <TouchableOpacity style={tw`my-2 mr-2  ml-1 flex-row rounded-lg bg-white shadow-lg`} onPress={onPress}>

            <Image
                style={{ width: 110, height: 110, resizeMode: 'contain', borderBottomLeftRadius: 10, borderTopLeftRadius: 10 }}
                source={{ uri: imageUri }}
            />

            {longType == 'order' ? <View style={tw`flex-col ml-4 mt-4`}>
                <Text style={tw` text-sm font-bold ${(status != 'Track-Pickup') ? 'text-green-400' : 'text-black'}  `}>{status}</Text>
                <Text style={tw` text-sm font-bold `}>{name}</Text>
                {detail?.map(item => <Text style={tw`text-gray-500`}>{item}</Text>)}
            
                  <Button
                            style={{
                                width: '75%'
                            }}
                            title='Track Order'
                            titleStyle={{
                                color: '#FFF',
                                textTransform: 'none',
                                fontSize: 14
                            }}
                            onPress={()=>{}}
                        />
            </View> :
                <View style={tw`flex-row  py-4 px-4  justify-between`}>
                    <View style={tw`flex pr-16  `}>
                        <Text style={tw`font-bold pb-8`}>1x {name}</Text>
                        <Text>${cost}</Text>
                    </View>
                    <View>
                        <Text style={tw`font-semibold text-blue-400 pb-8`}>Edit</Text>
                        <Text >del</Text>
                    </View>
                </View>}

        </TouchableOpacity>
    )
}