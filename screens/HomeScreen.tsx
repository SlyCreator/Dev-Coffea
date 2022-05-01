import React from 'react'
import { View, Text, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import StackScreen from '../components/StackScreen'
import { Ionicons, Feather } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next'
import { StackActions, useNavigation } from '@react-navigation/core';
import { SmallProductCard } from '../components/Cards/ProductCard';
import Header from '../components/Header';


const data = [
    {
        id: "123",
        title: "Capuccino",
        image: "https://picsum.photos/id/431/300/300/",

    },
    {
        id: "456",
        title: "Espresso",
        image: "https://picsum.photos/id/1060/200/200/",

    },
    {
        id: "1223",
        title: "Craisssant",
        image: "https://picsum.photos/id/312/200/200/",
      
    },
    {
        id: "4562",
        title: "Order",
        image: "https://picsum.photos/id/1060/200/200/",

    }
]

const HomeScreen = () => {
    const {dispatch} = useNavigation();

    const goToProduct = () => {
        dispatch(
            StackActions.push('Product')
        )
    }
    return (
        <ScrollView style={tw`flex-1  bg-white`} showsVerticalScrollIndicator={false}>
            <StackScreen style={tw`flex-1 bg-white mx-2`}>
                <View>

                    <Header />
                    <Text style={tw`text-base font-bold`}>Good Afternoon Andrew</Text>
                    <Text style={tw`text-sm font-medium`}>It's time for Coffee break</Text>

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
                        <View style={tw`mb-4 bg-white shadow-sm rounded-lg p-2`}>
                            <Image
                                style={{ width: 300, height: 150, resizeMode: 'contain' }}
                                source={{ uri: "https://links.papareact.com/28w" }}
                            />

                        </View>
                    </View>

                    <View>
                        <View style={tw`flex-row justify-between mt-4`}>
                            <Text style={tw`font-bold text-base`}>Recommended for you</Text>
                            <Text style={tw`text-sm text-blue-500 font-semibold`}>All Menu</Text>
                        </View>
                        <FlatList
                            data={data}
                            horizontal
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => (
                    
                                <SmallProductCard 
                                    imageUri={item.image}
                                    name = {item.title}
                                    key={item.id}
                                    onPress={goToProduct}
                                />
                            )}
                        />
                    </View>
                </View>
            </StackScreen>
        </ScrollView>
    )
}

export default HomeScreen
