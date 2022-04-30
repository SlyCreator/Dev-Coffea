import { Feather, Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import {
  Image,
  View,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { MeduimProductCard } from '../components/Cards/ProductCard'
import InputField from '../components/InputField'
import Input from '../components/InputField'
import StackScreen from '../components/StackScreen'
import { SimpleLineIcons } from '@expo/vector-icons'
import ColdDrinkSvg from '../components/svgs/ColdDrinkSvg'
import BreadSvg from '../components/svgs/BreadSvg'
import CakeSvg from '../components/svgs/CakeSvg'
import { StackActions, useNavigation } from '@react-navigation/core'

const catDat = [
  {
    title: 'Hot drink',
    svg: <SimpleLineIcons name="cup" size={24} color="black" />,
    isActive: true,
  },
  {
    title: 'Cold drink',
    svg: <ColdDrinkSvg />,
  },
  {
    title: 'Bakery',
    svg: <SimpleLineIcons name="cup" size={24} color="black" />,
  },
  {
    title: 'Cake',
    svg: <CakeSvg />,
  },
  {
    title: 'Bread',
    svg: <BreadSvg />,
  },
]

const data = [
  {
    id: '1323',
    title: 'Capuccino',
    image: 'https://picsum.photos/id/431/300/300/',
    cost: 29.9,
  },
  {
    id: '456',
    title: 'Espresso',
    image: 'https://picsum.photos/id/1060/200/200/',
    cost: 7.99,
  },
  {
    id: '12232343',
    title: 'Craisssant',
    image: 'https://picsum.photos/id/312/200/200/',
    cost: 19.99,
  },
  {
    id: '122343',
    title: 'Craisssant',
    image: 'https://picsum.photos/id/312/200/200/',
    cost: 23.1,
  },
  {
    id: '122873',
    title: 'Craisssant',
    image: 'https://picsum.photos/id/312/200/200/',
    cost: 25,
  },
  {
    id: '12233',
    title: 'Craisssant',
    image: 'https://picsum.photos/id/312/200/200/',
    cost: 30.5,
  },
  {
    id: '4562',
    title: 'Order',
    image: 'https://picsum.photos/id/1060/200/200/',
    cost: 5,
  },
]

const MenuScreen = () => {
  const [search, setSearch] = useState('')
  const { dispatch } = useNavigation()
  const goToProduct = () => {
      dispatch(
          StackActions.push('Product')
      )
  }
  return (
    <ScrollView
      style={tw`flex-1  bg-white`}
      showsVerticalScrollIndicator={false}
    >
      <StackScreen style={tw`flex-1 bg-white mx-2`}>
        <View>
          <View style={tw`flex-row justify-between mb-4`}>
            <Ionicons name="notifications-outline" size={20} color="black" />
            <Text style={tw`text-base font-bold`}>Menu</Text>
            <Ionicons name="cart-outline" size={20} color="black" />
          </View>

          <View>
            <InputField
              inputProps={{
                placeholder: 'Find your favorites here',
                accessoryRight: (black) => (
                  <Feather onPress={() => {}} color={black} size={20} />
                ),
                value: search,
                onChangeText: (search) => {
                  setSearch(search)
                },
                textStyle: { fontSize: 12 },
                style: styles.input,
              }}
            />
          </View>

          <View>
            <Text style={tw` text-sm font-bold`}>Category</Text>
            <FlatList
              data={catDat}
              horizontal
              keyExtractor={(item) => item.title}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity style={tw`my-4 mr-4`}>
                  <View
                    style={tw`p-4 rounded-lg ${
                      item.isActive ? 'bg-blue-200' : 'bg-gray-200'
                    }`}
                  >
                    {item.svg}
                  </View>
                  <Text
                    style={tw`text-sm  text-center ${
                      item.isActive ? 'text-blue-400 font-bold' : 'text-black'
                    }`}
                  >
                    {item.title}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>

          <View>
            <FlatList
              data={data}
              numColumns={2}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <MeduimProductCard
                  name={item.title}
                  imageUri={item.image}
                  cost={item.cost}
                  key={item.id}
                  onPress={goToProduct}
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

export default MenuScreen
const styles = StyleSheet.create({
  input: {
    backgroundColor: '#EDEDED',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
})
