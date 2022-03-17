import React from 'react'
import { View, Text, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import StackScreen from '../components/StackScreen'
import { Ionicons, Feather } from '@expo/vector-icons';


const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order",
        image: "https://links.papareact.com/28w",
        screen: "MapScreen",
    },
    {
        id: "1223",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: "4562",
        title: "Order",
        image: "https://links.papareact.com/28w",
        screen: "MapScreen",
    }
]

const HomeScreen = () => {
    return (
        <ScrollView style={tw`flex-1  bg-white`} showsVerticalScrollIndicator={false}>
            <StackScreen style={tw`flex-1 bg-white mx-2`}>
                <View>

                    <View style={tw`flex-row justify-between mb-4`}>
                        <Ionicons name="notifications-outline" size={24} color="black" />
                        <Ionicons name="cart-outline" size={24} color="black" />
                    </View >

                    <Text style={tw`text-base font-bold`}>Good Afternoon Andrew</Text>
                    <Text style={tw`text-sm font-bold`}>It's time for Coffee break</Text>

                    <View style={tw`bg-blue-100 p-5 my-4 rounded-lg`}>
                        <View style={tw`flex-row justify-between`}>
                            <Text>100/150 Points</Text>
                            <Feather name="grid" size={24} color="black" />
                        </View>
                        <View style={tw`flex-row`}>
                            <Ionicons name="gift-outline" size={24} color="black" />
                            <Text style={tw`ml-1`} >50 points to your next reward</Text>
                        </View>
                    </View>

                    <View >
                        <Text style={[tw`text-sm font-bold py-2`]}>New Arrivals</Text>
                        <View>
                            <Image
                                style={{ width: 100, height: 100, resizeMode: 'contain' }}
                                source={{ uri: "https://links.papareact.com/28w" }}
                            />

                        </View>
                    </View>

                    <View>
                        <View style={tw`flex-row justify-between mt-4`}>
                            <Text style={tw`font-bold text-base`}>Recommended for you</Text>
                            <Text style={tw`text-sm text-blue-500`}>All Menu</Text>
                        </View>
                        <FlatList
                            data={data}
                            horizontal
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={tw`my-2 `}>
                                    <View>
                                        <Image
                                            style={{ width: 100, height: 100, resizeMode: 'contain' }}
                                            source={{ uri: item.image }}
                                        />
                                        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>

                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
            </StackScreen>
        </ScrollView>
    )
}

export default HomeScreen
