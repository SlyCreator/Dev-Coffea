import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View, Text, ScrollView, FlatList } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { LongProductCard, MeduimProductCard } from '../components/Cards/ProductCard'
import Header from '../components/Header'
import StackScreen from '../components/StackScreen'

const OrderScreen = () => {
    const onGoing = [
        {
            id: "1323",
            title: "1x Capuccino",
            image: "https://picsum.photos/id/431/300/300/",
            cost: 29.9,
            status: 'Today - Pickup',
            state: true

        }
    ]

    const dataHistroy = [
        {
            id: "1323",
            title: "1x Capuccino",
            image: "https://picsum.photos/id/431/300/300/",
            cost: 29.9,
            status: 'Delivered'

        },
        {
            id: "456",
            title: "1x Espresso",
            image: "https://picsum.photos/id/1060/200/200/",
            cost: 7.99,
            status: 'Picked Up'
        },
        {
            id: "12232343",
            title: "1x Craisssant",
            image: "https://picsum.photos/id/312/200/200/",
            cost: 19.99,
            status: 'Delivered'
        },
        {
            id: "122343",
            title: "1x Craisssant",
            image: "https://picsum.photos/id/312/200/200/",
            cost: 23.1,
            status: 'Delivered'

        },
        {
            id: "122873",
            title: "1x Craisssant",
            image: "https://picsum.photos/id/312/200/200/",
            cost: 25,
            status: 'Picked Up'

        },
        {
            id: "12233",
            title: "2x Craisssant",
            image: "https://picsum.photos/id/312/200/200/",
            cost: 30.5,
            status: 'Delivered'

        },
        {
            id: "4562",
            title: "Order",
            image: "https://picsum.photos/id/1060/200/200/",
            cost: 5,
            status: 'Picked Up'
        }
    ]

    return (
        <ScrollView style={tw`flex-1 bg-white`}>
            <StackScreen>
                <View>
                    <Header title={"Order"} />

                    <View>
                        <Text style={tw`text-base font-bold`}>On Going</Text>
                        <FlatList
                            data={onGoing}
                            numColumns={1}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <LongProductCard
                                    name={item.title}
                                    imageUri={item.image}
                                    cost={item.cost}
                                    key={item.id}
                                    longType='order'
                                    status={item.status}
                                    state={item.state}

                                />
                            )}
                            style={tw``}
                        />
                    </View>
                    <View>
                        <Text style={tw`text-base font-bold`}>Histroy</Text>
                        <FlatList
                            data={dataHistroy}
                            numColumns={1}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <LongProductCard
                                    name={item.title}
                                    imageUri={item.image}
                                    cost={item.cost}
                                    key={item.id}
                                    longType='order'
                                    status={item.status}

                                />
                            )}
                            style={tw``}
                        />
                    </View>
                </View>
            </StackScreen>
        </ScrollView>
    )
}

export default OrderScreen
