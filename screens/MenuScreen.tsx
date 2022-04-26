import { Feather, Ionicons } from '@expo/vector-icons'
import React,{useState} from 'react'
import { Image,View, Text, ScrollView, FlatList,StyleSheet, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { MeduimProductCard } from '../components/Cards/ProductCard'
import InputField from '../components/InputField'
import Input from '../components/InputField'
import StackScreen from '../components/StackScreen'


const data = [
    {
        id: "1323",
        title: "Capuccino",
        image: "https://picsum.photos/id/431/300/300/",

    },
    {
        id: "456",
        title: "Espresso",
        image: "https://picsum.photos/id/1060/200/200/",

    },
    {
        id: "12232343",
        title: "Craisssant",
        image: "https://picsum.photos/id/312/200/200/",

    },
    {
        id: "122343",
        title: "Craisssant",
        image: "https://picsum.photos/id/312/200/200/",

    },
    {
        id: "122873",
        title: "Craisssant",
        image: "https://picsum.photos/id/312/200/200/",

    },
    {
        id: "12233",
        title: "Craisssant",
        image: "https://picsum.photos/id/312/200/200/",

    },
    {
        id: "4562",
        title: "Order",
        image: "https://picsum.photos/id/1060/200/200/",

    }
]


const MenuScreen = () => {
    const [search,setSearch] = useState('')
    return (
        <ScrollView style={tw`flex-1  bg-white`} showsVerticalScrollIndicator={false}>
            <StackScreen style={tw`flex-1 bg-white mx-2`}>
                <View>

                    <View style={tw`flex-row justify-between mb-4`}>
                        <Ionicons name="notifications-outline" size={20} color="black" />
                        <Text style={tw`text-base font-bold`}>Menu</Text>
                        <Ionicons name="cart-outline" size={20} color="black" />
                    </View >

                    <View>
                     <InputField 
                                inputProps={{
                                    placeholder: 'Find your favorites here',
                                    accessoryRight: (color) => (
                                        <Feather
                                          onPress={() => {}}
                                          color={color}
                                          size={20}
                                        />
                                      ),
                                      value: search,
                                      onChangeText: (search) => {
                                        setSearch( search)
                                      },
                                      textStyle: { fontSize: 12 },
                                      style: styles.input,
                                }}
                            />
                    </View>

                    <View>
                        <Text style={tw`mt-4 text-sm font-bold`}>Category</Text>
                        <FlatList
                            data={data}
                            horizontal
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={tw`my-5 mr-2`}>
                                    <View>
                                        <Text>Icon</Text>
                                        <Text style={tw`text-sm font-semibold text-blue-400 font-semibold`}>Hot drink</Text>
                                    </View>
                                </TouchableOpacity>
                            )} />


                    </View>

                    <View >
                        <FlatList 
                        data={data}
                        numColumns={2}
                        keyExtractor={item=>item.id}
                        renderItem={({item})=>(
                           <MeduimProductCard 
                                name={item.title}
                                imageUri={item.image}
                                cost={"20"}
                                key={item.id}
                                
                           />
                        )}
                        style = {tw``}
                        />
                    </View>


                </View>
            </StackScreen>
        </ScrollView>
    )
}

export default MenuScreen
const styles = StyleSheet.create({
    input: {
        backgroundColor: '#EDEDED',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E0E0E0',
      }
})
