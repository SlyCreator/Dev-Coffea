import { Feather } from '@expo/vector-icons'
import React from 'react'
import { View, Text, ScrollView, Pressable, ImageBackground } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Input from '../components/InputField'
import MenuSvg from '../components/svgs/MenuSvg'

const ProductScreen = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={tw`flex bg-white`}>
          <Pressable style={{
          backgroundColor: '#fff',
          borderRadius: 40,
          width: 40,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          zIndex: 2000,
          marginLeft: 20,
          top: 40,
        }}>
          <Feather name={'arrow-left'} size={20} color={'black'} />
          </Pressable>
          <ImageBackground 
            source={{
                uri: 'https://picsum.photos/id/431/700/500',
            }}
            style={{width:'100%',height:250}}
          />
          <View style={tw` bg-white h-full px-6 py-6 `}>
              <Text style={tw`text-lg font-bold  `}>Capuccino</Text>
              <Text style={tw`text-sm font-bold text-blue-700 my-2`}>$3.25</Text>
              <Text style={tw`text-sm text-gray-500 font-medium `}>Espreso coffee topped with frothed hot milk and
                  cream and flavored with cinnamon
              </Text>
              <Text style={tw`text-sm font-bold text-gray-600 my-2 pb-4`}>Size</Text>
              <View style={tw`flex-row items-center justify-center justify-between px-6 `}>
                   
                  <View style={tw`p-4`}>
                      <MenuSvg />
                      <Text>12 0z</Text>
                  </View>
                  <View>
                      <MenuSvg />
                      <Text>12 0z</Text>
                  </View>
                  <View>
                      <MenuSvg />
                      <Text>12 0z</Text>
                  </View>
              </View>
              <Text style={tw`text-sm font-bold text-gray-600 my-4`}>Sugar(in Cubes)</Text>
              <View style={tw`bg-gray-100 flex-row justify-around py-2 rounded-lg mb-6`}>
                  <Text style={tw`bg-blue-300`}>0</Text>
                  <Text>1</Text>
                  <Text>2</Text>
                  <Text>3</Text>
                  <Text>4</Text>
              </View>
              <Text style={tw`text-sm font-bold text-gray-600`}>Additional Detail</Text>
              <Input inputProps={{
                  keyboardType:'default'
                  
              }}/>
              <Text style={tw`text-sm font-bold text-gray-600`}>Amount</Text>
          </View>
      </ScrollView>
    )
}

export default ProductScreen
